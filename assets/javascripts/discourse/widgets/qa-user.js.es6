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
 var str;
 var ava;
 var prbg;
	  
  $.ajax({
  url: "/users/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
  userid =  data.user.id;
  name =  data.user.name;
  prbg =  data.user.profile_background;
  str =  data.user.avatar_template;
  ava = str.replace('{size}', '120');	
  }
  });
 
	  
 contents.push( new RawHtml({ html: `<div> <center>
<h1 class="user">${username}</h1>
 <section class="user-main ember-view"> 
 <section style="background-image: url(${prbg})" class=" about has-background">
 <div class="card-content fonava">      
 <br><br> 
 </div> </section></section>
 <div class="avam"><img alt="${username} ${name}" src="${ava}" class="avam"></div>
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
  
  if ( id == 103) {
  contents.push( new RawHtml({ html: `<div class="bd"><center><h1 class="prof">Сертификат</h2>  
  <img src="https://toxu.ru/discobot/certificate.svg?date=${granted_at}&amp;user_id=${userid}" alt="Грамота" style="max-width:800px">
  <br><br><a rel="nofollow" class="btn-primary create btn btn-icon-text ember-view" href="https://toxu.ru/u/${username}/summary">Посмотреть полный профиль</a>
  </center></div>`})); 
   
   } else {  contents.push( new RawHtml({ html: `<div class="bd"> <center>У пользователя нет грамоты...</center>  </div>`})); }
   
  
}
}
});

return contents;

}
});
