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
 var trust_level;
 var badge_count;
 var post_count;
    
    
  $.ajax({
  url: "/users/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
  userid =  data.user.id;
  name =  data.user.name;
 
  trust_level = data.user.trust_level;
  badge_count = data.user.badge_count;
  post_count = data.user.post_count;
 
 prbg =  data.user.profile_background;
  str =  data.user.avatar_template;
  ava = str.replace('{size}', '120');	
  
  
  }
  });
 
if (prbg) { 
  
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
  
} else {

 contents.push( new RawHtml({ html: `<div> <center>
 <h1 class="user">${username}</h1>
 <div class="avam-n"><img alt="${username} ${name}" src="${ava}" class="avam-n"></div>
 <h3 class="user">${name}</h3>
 <br></center></div>`}));  

}
  
  
contents.push( new RawHtml({ html: `<div><center><div class="prof-glog-blog">

<div class="prof-blog">
<div class="prof-num">${trust_level}</div>
<div class="prof-txt">доверие</div>
</div>

<div class="prof-blog">
<div class="prof-num">${badge_count}</div>
<div class="prof-txt">наград</div>
</div>


<div class="prof-blog">
<div class="prof-num">${post_count}</div>
<div class="prof-txt">постов</div>
</div>

</div><div class="bord new-str"></div></center></div>`})); 
  
  
	  
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
  contents.push( new RawHtml({ html: `<div class="bd"><center><br><h1 class="prof">Сертификат</h2>  
  <img src="https://toxu.ru/discobot/certificate.svg?date=${granted_at}&amp;user_id=${userid}" alt="Грамота" style="max-width:800px">
  </center></div>`})); 
   
   } else {   }
	  
}
}
});


contents.push( new RawHtml({ html: `<div class="bd"> <center>
<br><br><a rel="nofollow" class="btn-primary create btn btn-icon-text ember-view" href="https://toxu.ru/u/${username}/summary">Посмотреть полный профиль</a></center>
</div>`}));	  
	  
return contents;

}
});
