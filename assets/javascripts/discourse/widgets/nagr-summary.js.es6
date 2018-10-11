import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
 
export default createWidget('nagr-summary', {
tagName: 'div.qramota',
  buildKey: (args) => 'qramota',

  html(args, state) {
    const { currentUser } = this;
    let contents = []

    const myusername = currentUser.get('username');
    var username = args.model.username;
	  
 if (myusername == username) {     }	
	  
    var trust_level = args.model.trust_level;
    var badge_count  = args.model.badge_count;
    
 if (trust_level) { 
 trust_level = trust_level;
 badge_count =  badge_count; 
 } else {
 
 trust_level = 1;
 badge_count = 1; 	 
	 
 }	  
	  
    var badge_num = badge_count*2;
    
    var id;
    var granted_at;
 // var time_read = args.model.time_read;
  
    var tim = args.model.recent_time_read;
    var time = tim/3600;
    var recent_time_read = time.toFixed();
	  
$.ajax({
  url: "/user-badges/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
	
  var badges = data.user_badges;
   
  for (var t = 0; t < badges.length; t++) {
  id = badges[t].badge_id;
  granted_at = badges[t].granted_at;
  if ( id == 104) { 
  contents.push( new RawHtml({ html: `<div class="bdp ots gr"><a title="Грамота" href="/qa/${username}"><i aria-hidden="true" class="fa fa-trophy"></i></a></div>`})); 
  } else {  }
  }

  }
  });


 if (trust_level == 0) { var bw = 3;  }
 if (trust_level == 1) { var bw = 25; } 
 if (trust_level == 2) { var bw = 50; } 
 if (trust_level == 3) { var bw = 75; }
 if (trust_level == 4) { var bw = 100; }
 
contents.push( new RawHtml({ html: `<div class="all-bar"><a title="Уровень доверия" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:6px;width:${bw}%"></div></div> <div class="n-bar">${trust_level}</div></a></div>`})); 
    
contents.push( new RawHtml({ html: `<div class="all-bar"><a title="Награды" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:6px;width:${badge_num}%"></div></div> <div class="n-bar">${badge_count}</div></a></div>`})); 
   
//contents.push( new RawHtml({ html: `<div class="bdp time"><a title="Чтение за последние 60 дней: ${recent_time_read} часов" href="/qa/${username}">${recent_time_read}</a></div>`}));	  

return contents;

	 
}
});
