import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('sub-menu', {
  buildKey: (args) => 'user-profile',

  html(args, state) {
//   if (this.site.mobileView)
//  	return;	  

    const { currentUser } = this;
    let contents = []
    if (currentUser) {
    const trust_level = currentUser.get('trust_level');
    const username = currentUser.get('username');
    
 if (trust_level == 0) { var bw = 3;  }
 if (trust_level == 1) { var bw = 25; } 
 if (trust_level == 2) { var bw = 50; } 
 if (trust_level == 3) { var bw = 75; }
 if (trust_level == 4) { var bw = 100; } 
 
 var my_bio;
 
// console.log(args);

 $.ajax({
  url: "/u/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
	
  const badge_count = data.user.badge_count;
  var badge_num = badge_count*2;   
  var profile_view_count = data.user.profile_view_count;

  var  bio_excerpt = data.user.bio_excerpt;	  
 
  if (bio_excerpt) {   
	  my_bio = ' ';	  
  } else { 
  my_bio = ' <div class="mn"> <i class="fa fa-exclamation" aria-hidden="true"></i> <a target="_blank" href="https://toxu.ru/u/'+ username +'/preferences/profile">Заполните свой профиль</a>, это поможет другим читать вас. </div>';		    
  }	  

	  
// var tracked_tags = data.user.tracked_tags;

function truncated(num, decimalPlaces) {    
    let numPowerConverter = Math.pow(10, decimalPlaces); 
    return ~~(num * numPowerConverter)/numPowerConverter;
}	  
	  
	  
//10минут = 600 сек, 1 часе = 3600 сек, 1 дне = 86400 сек 	  
//"time_read":85202,"recent_time_read":36457

var tim = data.user.time_read;
    
var t_m = tim/60;
var t_minut = truncated(t_m,0);  //целое число до запятой
var t_m_gr = (t_minut*100)/60;
var t_mm_gr = Math.floor(t_m_gr);
	  
var t_c =  tim/3600;
var t_hour = truncated(t_c,0);  //целое число до запятой
var t_h_c = t_c%1;	  
var t_h_gr = (t_h_c/0.9999)*100; 
var t_hh_gr = Math.floor(t_h_gr);  	  
	  
var t_d =  tim/86400;
var t_daym = truncated(t_d,0);  //целое число до запятой
var t_daym_one = truncated(t_d,1);  //одно число после запятой	  
	  
//var vt_c = t_d - t_daym; убрано
var vt_c = t_d%1; //после запятой
	  
var cas = vt_c*24; //новых часов

var ugols = (vt_c/0.9999)*100; 
//console.log(ugols); console.log('угол');

var ugol = ugols.toFixed();
//console.log(ugol); console.log('округление угла');
	  
 
var vtt_c = 24 - cas;	  
//console.log(vtt_c); console.log('24 - форумула =  сколько осталось');
	  
var oct = vtt_c.toFixed(); 
//console.log(oct); console.log('надпись сколько осталась округление');
	  
if (t_minut < 60) { 
var vrema = 'minute'; var vrema_t = t_minut; var grad = t_mm_gr; var t_op = 'мин.'; var t_ops = 'время до часа'; var verh = 'шкала 1 час';
if (t_mm_gr > 49) { var isprav = 'over50'; } else { var isprav = ''; }
}
if (t_hour > 0) { 
var vrema = 'hour'; var vrema_t = t_hour; var grad = t_hh_gr; var t_op = 'ч.';  var t_ops = 'время до дня'; var verh = 'всего дней';
if (t_hh_gr > 49) { var isprav = 'over50'; } else { var isprav = ''; }	
}
if (t_daym > 0) { 
var vrema = 'day'; var vrema_t = t_daym_one; var grad = ugol; var t_op = ' ';  var t_ops = ' ';
if (ugol > 49) { var isprav = 'over50'; } else { var isprav = '111'; }
var verh = 'всего дней';
}	  
	
if (trust_level === 0) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мои данные<span id="toxu">
<a class="link" title="Настройка аккаунта" target="_blank" href="https://toxu.ru/u/${username}/preferences/profile"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>

${my_bio}

<div class="mn"><b>Общее время чтения</b> - важный показатель на сайте.</div>

<center><span style="font-size:14px;text-transform: uppercase;">${verh}</span><div class="progress-circle ${isprav} p${grad}">
   <span>${vrema_t} ${t_op}</span>
   <div class="left-half-clipper">
      <div class="first50-bar"></div>
      <div class="value-bar ${vrema}"></div>
   </div>
</div>${t_ops} </center><br>

Посетитель: <span class="numer">0</span> из 4<br>
<div class="all-bar"><a title="Уровень доверия" href="https://toxu.ru/level"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div></a></div>

<br>Количество наград: <span class="numer">${badge_count}</span> <a title="Все награды" href="https://toxu.ru/badges">из 50</a><br>

<div class="all-bar"><a title="Награды" href="/u/${username}/badges"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:12px;width:${badge_num}%"></div></div></a></div>
<br>

<div class="mn"> Посмотреть <a class="cvet" href="/u/${username}/badges">мои награды.</a></div>

<div class="mn">Мой профиль смотрели: <span class="numer">${profile_view_count}</span> раз</div>
 
<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас возник вопрос о самом сайте? <a href="https://toxu.ru/c/toxu">Вопросы по сайту</a> - это место, где можно говорить о таких вещах.</div>
 
<div class="mn"><i class="fa fa-address-book-o" aria-hidden="true"></i> <a href="https://toxu.ru/qa/${username}"><font color="red">М</font><font color="orange">о</font><font color="brown">я</font> карточка</a>. Как видят меня?</div>
  
<br><a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>
<a href="/tags" class="tag-теги discourse-tag bullet">все теги</a> 

</div>`}));

}
if (trust_level === 1) { 
contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мои данные<span id="toxu">
<a class="link" title="Настройка аккаунта" target="_blank" href="https://toxu.ru/u/${username}/preferences/profile"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>

${my_bio}

<div class="mn"><b>Общее время чтения</b> - важный показатель на сайте.</div>

<center><span style="font-size:14px;text-transform: uppercase;">${verh}</span><div class="progress-circle ${isprav} p${grad}">
   <span>${vrema_t} ${t_op}</span>
   <div class="left-half-clipper">
      <div class="first50-bar"></div>
      <div class="value-bar ${vrema}"></div>
   </div>
</div>${t_ops} </center><br>

Пользователь: <span class="numer">1</span> из 4<br>
<div class="all-bar"><a title="Уровень доверия" href="https://toxu.ru/level"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div></a></div>

<br>Количество наград: <span class="numer">${badge_count}</span> <a title="Все награды" href="https://toxu.ru/badges">из 50</a><br>
<div class="all-bar"><a title="Награды" href="/u/${username}/badges"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:12px;width:${badge_num}%"></div></div></a></div>
<br>


<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас возник вопрос о самом сайте? <a href="https://toxu.ru/c/toxu">Вопросы по сайту</a> - это место, где можно говорить о таких вещах.</div>

<div class="mn"><a title="Получить грамоту" target="_blank" href="https://toxu.ru/stats"><font color="red">П</font>очитать</a> о новых возможностях, и получить грамоту.</div>

<div class="mn"><i class="fa fa-address-book-o" aria-hidden="true"></i> <a href="https://toxu.ru/qa/${username}"><font color="red">М</font><font color="orange">о</font><font color="brown">я</font> карточка</a>. Как видят меня?</div>
 
</div>`}));

}
if (trust_level === 2) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мои данные<span id="toxu">
<a class="link" title="Настройка аккаунта" target="_blank" href="https://toxu.ru/u/${username}/preferences/profile"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>

${my_bio}

<div class="mn"><b>Общее время чтения</b> - важный показатель на сайте.</div>

<center><span style="font-size:14px;text-transform: uppercase;">${verh}</span><div class="progress-circle ${isprav} p${grad}">
   <span>${vrema_t} ${t_op}</span>
   <div class="left-half-clipper">
      <div class="first50-bar"></div>
      <div class="value-bar ${vrema}"></div>
   </div>
</div>${t_ops} </center><br>

Участник: <span class="numer">2</span> из 4<br>
<div class="all-bar"><a title="Уровень доверия" href="https://toxu.ru/level"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div></a></div>

<br>Количество наград: <span class="numer">${badge_count}</span> <a title="Все награды" href="https://toxu.ru/badges">из 50</a><br>
<div class="all-bar"><a title="Награды" href="/u/${username}/badges"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:12px;width:${badge_num}%"></div></div></a></div>
<br>

<div class="mn">Мой профиль смотрели: <span class="numer">${profile_view_count}</span> раз</div>
 
<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас возник вопрос о самом сайте? <a href="https://toxu.ru/c/toxu">Вопросы по сайту</a> - это место, где можно говорить о таких вещах.</div>

<div class="mn"><i class="fa fa-address-book-o" aria-hidden="true"></i> <a href="https://toxu.ru/qa/${username}"><font color="red">М</font><font color="orange">о</font><font color="brown">я</font> карточка</a>. Как видят меня?</div>
  
</div>`}));

}
if (trust_level === 3) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мои данные<span id="toxu">
<a class="link" title="Настройка аккаунта" target="_blank" href="https://toxu.ru/u/${username}/preferences/profile"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>

${my_bio}

<div class="mn"><b>Общее время чтения</b> - важный показатель на сайте.</div>

<center><span style="font-size:14px;text-transform: uppercase;">${verh}</span><div class="progress-circle ${isprav} p${grad}">
   <span>${vrema_t} ${t_op}</span>
   <div class="left-half-clipper">
      <div class="first50-bar"></div>
      <div class="value-bar ${vrema}"></div>
   </div>
</div>${t_ops} </center><br>

Постоялец: <span class="numer">3</span> из 4<br>
<div class="all-bar"><a title="Уровень доверия" href="https://toxu.ru/level"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div></a></div>

<br>Количество наград: <span class="numer">${badge_count}</span> <a title="Все награды" href="https://toxu.ru/badges">из 50</a><br>
<div class="all-bar"><a title="Награды" href="/u/${username}/badges"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:12px;width:${badge_num}%"></div></div></a></div>
<br>

<div class="mn">Мой профиль смотрели: <span class="numer">${profile_view_count}</span> раз</div>
 
<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас возник вопрос о самом сайте? <a href="https://toxu.ru/c/toxu">Вопросы по сайту</a> - это место, где можно говорить о таких вещах.</div>
 
<div class="mn"><i class="fa fa-address-book-o" aria-hidden="true"></i> <a href="https://toxu.ru/qa/${username}"><font color="red">М</font><font color="orange">о</font><font color="brown">я</font> карточка</a>. Как видят меня?</div>
  

</div>`}));

}

if (trust_level === 4) { 
contents.push(
new RawHtml({ html: `<div>  


<div class="title">Мои данные<span id="toxu">
<a class="link" title="Настройка аккаунта" target="_blank" href="https://toxu.ru/u/${username}/preferences/profile"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>

${my_bio}

<div class="mn"><b>Общее время чтения</b> - важный показатель на сайте.</div>

<center><span style="font-size:14px;text-transform: uppercase;">${verh}</span><div class="progress-circle ${isprav} p${grad}">
   <span>${vrema_t} ${t_op}</span>
   <div class="left-half-clipper">
      <div class="first50-bar"></div>
      <div class="value-bar ${vrema}"></div>
   </div>
</div> ${t_ops} </center><br>

Лидер: <span class="numer">4</span> из 4<br>
<div class="all-bar"><a title="Уровень доверия" href="https://toxu.ru/level"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div></a></div>

<br>Количество наград: <span class="numer">${badge_count}</span> <a title="Все награды" href="https://toxu.ru/badges">из 50</a><br>
<div class="all-bar"><a title="Награды" href="/u/${username}/badges"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:12px;width:${badge_num}%"></div></div></a></div>
<br>
 
<div class="mn">Мой профиль смотрели: <span class="numer">${profile_view_count}</span> раз</div>
 
<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> Раздел <a href="https://toxu.ru/c/dev">dev</a> - для разработки...</div>
 
<div class="mn"><i class="fa fa-address-book-o" aria-hidden="true"></i> <a href="https://toxu.ru/qa/${username}"><font color="red">М</font><font color="orange">о</font><font color="brown">я</font> карточка</a>. Как видят меня?</div>

</div>`}));
}   

 }
 });
   
} else {

contents.push(
new RawHtml({ html: `<div>
<div class="title">Информация<span id="toxu"></div>
<div class="mn">После регистрации вам будут показаны ваши достижения. </div>

<div class="img-my-r"></div>

<div class="mn"> <i aria-hidden="true" class="fa fa-trophy"></i> Про уровень доверия - <b>лидер</b>. Узнайте <a class="cvet" href="https://toxu.ru/level">больше.</a></div>
<div class="mn"> <i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас есть предложения по сайту? <a href="https://toxu.ru/t/predlozheniya-pozhelaniya-po-sajtu-toxu-ru-obshhaya-tema/4544">Напишите</a> про них.</div>
<br><center><a href="https://toxu.ru/login" id="create-topic" class="btn btn-default btn btn-icon-text ember-view">    <i class="fa fa-plus d-icon d-icon-plus"></i>
<span class="d-button-label">Задать вопрос</span>
</a></center>
<br><br><a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>
<a href="/tags" class="tag-теги discourse-tag bullet">все теги</a> 

</div>`}) );
  

}
return contents;
}});
