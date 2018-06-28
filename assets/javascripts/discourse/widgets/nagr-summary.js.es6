import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
 
export default createWidget('nagr-summary', {
tagName: 'div.qramota',
  buildKey: (args) => 'qramota',

  html(args, state) {
    const { currentUser } = this;
    let contents = []
    var username = args.model.username;
    var trust_level = args.model.trust_level;
    var id;
    var granted_at;
 // var time_read = args.model.time_read;
  
    var tim = args.model.recent_time_read;
    var time = tim/3600;
    var recent_time_read = time.toFixed();
	  
	  
	  

 if (trust_level == 0) {   }
 if (trust_level == 1) { contents.push( new RawHtml({ html: `<div class="bdp ud dov1"><a title="Уровень доверия" href="/qa/${username}">1</a></div>`}));   } else {  }
 if (trust_level == 2) { contents.push( new RawHtml({ html: `<div class="bdp ud dov2"><a title="Уровень доверия" href="/qa/${username}">2</a></div>`}));   } else {  } 
 if (trust_level == 3) { contents.push( new RawHtml({ html: `<div class="bdp ud dov3"><a title="Уровень доверия" href="/qa/${username}">3</a></div>`}));   } else {  }
 if (trust_level == 4) { contents.push( new RawHtml({ html: `<div class="bdp ud dov4"><a title="Уровень доверия" href="/qa/${username}">4</a></div>`}));   } else {  }

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

contents.push( new RawHtml({ html: `<div class="bdp time"><a title="Чтение за последние 60 дней: ${recent_time_read} часов" href="/qa/${username}">${recent_time_read}</a></div>`}));	  
	  
	  
  return contents;

}
});
