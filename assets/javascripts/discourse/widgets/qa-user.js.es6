import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('qa-user', {
  tagName: 'div.qa-user',
  buildKey: (attrs) => 'qa-user',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    
 var  username;

 var pathArray = window.location.pathname.split( '/' );
 username   = pathArray[2]; 
	
 var id;
 var granted_at;
 var userid;
 var name;
	  
  $.ajax({
  url: "/users/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
  userid =  data.user.id;
  name =  data.user.name;
  var str =  data.user.avatar_template;
  const ava = str.replace('{size}', '120');	
  }
  });
 
	  
 contents.push( new RawHtml({ html: `<div> <center>
 <h1 class="user">${username}</h1>
 <img alt="${username} ${name}" src="${ava}" class="avatar" width="120" height="120">
 <br><br> 
 <h3 class="user">${name}</h3>
 <br></center></div>`}));  
	  
	  
	  
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
  contents.push( new RawHtml({ html: `<div class="bd"><center><div class="prof-num">Сертификат</div>   
  <img src="https://toxu.ru/discobot/certificate.svg?date=${granted_at}&amp;user_id=${userid}" alt="Грамота" style="max-width:1000px"></center>
  </div>`})); 
   
   } else { }
   
	  
contents.push( new RawHtml({ html: `<div class="bd"><center> 
<br><a rel="nofollow" class="btn-primary create btn btn-icon-text ember-view" href="https://toxu.ru/u/${username}/summary">Посмотреть полный профиль</a>
<br></center></div>`}));
	  
}
}
});

return contents;

}
});
