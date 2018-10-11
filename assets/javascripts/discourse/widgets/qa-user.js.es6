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
 var avasm;
 var prbg;
 var trust_level;
 var badge_count;
 var profile_view_count; 
 var bio_excerpt;
 var yes;
 var time_read;
 var recent_time_read;
	  
  $.ajax({
  url: "/users/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
  userid =  data.user.id;
  name =  data.user.name;
	  
  trust_level = data.user.trust_level;
  badge_count = data.user.badge_count;
  profile_view_count = data.user.profile_view_count;
	  
 if (trust_level) {
 trust_level = trust_level;
 badge_count =  badge_count;
 profile_view_count = profile_view_count;	 
 }{
 trust_level = 'скрыто';
 badge_count = 'скрыто';	 
 profile_view_count = 'скрыто';
 }
	  

  bio_excerpt = data.user.bio_excerpt;
  prbg =  data.user.profile_background;
  str =  data.user.avatar_template;
  ava = str.replace('{size}', '120');	
  avasm = str.replace('{size}', '64');
  //Общее время чтение и за 60 дней ${time_read} ${recent_time_read}
  recent_time_read = data.user.recent_time_read;
  var tim = data.user.time_read;
  var time = tim/86400;
  recent_time_read = time.toFixed();
	  
if (recent_time_read) {
 recent_time_read = recent_time_read;
}{
 recent_time_read = 'скрыто';
}	  
	  
  }
  });
 
if (userid) {   
	  
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
 
if (bio_excerpt) { contents.push( new RawHtml({ html: `<div><center><blockquote> ${bio_excerpt}</blockquote></center></div>`}));  }
  
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
<div class="prof-num">${profile_view_count}</div>
<div class="prof-txt">просмотров</div>
</div>

</div><div class="bord new-str"></div><font style="color:#888;">${recent_time_read} - полных дней читал</font></center></div>`})); 
  
  $.ajax({
  url: "/user-badges/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
	
  var badges = data.user_badges;
   
  for (var t = 0; t < badges.length; t++) {
  
  id = badges[t].badge_id;
  granted_at = badges[t].granted_at;
  
  if ( id == 104) { yes = 1;
  contents.push( new RawHtml({ html: `<div class="bd"><center><br><h1 class="prof">Сертификат</h2>  
  <img src="https://toxu.ru/discobot/certificate.svg?date=${granted_at}&amp;user_id=${userid}" alt="Грамота" style="max-width:800px">
  </center></div>`})); 
   
   } else {   }
	  
}
}
});

if (yes) { } else {  contents.push( new RawHtml({ html: `<div class="bd"><br><br><center> <span class="no"> Сертификата нет</span> <br> <a target="_blank" href="http://toxu.ru/new-message?username=ToxBot&amp;title=Привет%20Бот!&amp;body=@ToxBot%20старт%20новый%20пользователь%20" class="gramota">Получить сертификат</a></center></div>`}));  }

contents.push( new RawHtml({ html: `<div class="bd"> <center>
<br><br><a rel="nofollow" class="btn-primary create btn btn-icon-text ember-view" href="https://toxu.ru/u/${username}/summary">Посмотреть полный профиль</a> 
</center></div>`}));

	if (currentUser) { 
	const myid = currentUser.get('id');
	const myusername = currentUser.get('username');
	if (myid != userid) {
	contents.push( new RawHtml({ html: `<div class="bd"> <center>  
	<br><br><a rel="nofollow" class="create btn btn-icon-text ember-view" href="https://toxu.ru/qa/${myusername}">Посмотреть свой профиль</a> 
	</center></div>`}));	
	}
	}  else {
	contents.push( new RawHtml({ html: `<div class="bd"> <center>  
	<br><br><a rel="nofollow" class="create btn btn-icon-text ember-view" href="https://toxu.ru/login">Войти</a> 
	</center></div>`}));
	} 

contents.push( new RawHtml({ html: `<div><span class="excerpt">https://toxu.ru/qa/${username}</span></div>`}));	

} else { contents.push( new RawHtml({ html: `<div><br><br><center><h1 class="prof">Такого пользователя не существует</h1><br> <a href="https://toxu.ru">Перейди на центральную страницу сайта</a><center></div>`})); }		
	
return contents;

}
});
