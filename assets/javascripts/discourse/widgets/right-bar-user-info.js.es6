import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('right-bar-user-info', {
  buildKey: (args) => 'user-profile',

  html(args, state) {
   if (this.site.mobileView)
  	return;	  

    const { currentUser } = this;
    let contents = []
    if (currentUser) {
    const trust_level = currentUser.get('trust_level');
    const id = currentUser.get('id');
    const username = currentUser.get('username');
    
 if (trust_level == 0) { var bw = 3;  }
 if (trust_level == 1) { var bw = 25; } 
 if (trust_level == 2) { var bw = 50; } 
 if (trust_level == 3) { var bw = 75; }
 if (trust_level == 4) { var bw = 100; } 
 
 var my_bio;
 
// console.log(args);

 $.ajax({
  url: "/toxudata/data.json?user_id="+ id, 
  dataType: 'json',
  async: false,
  success: function(data) {

	  
// var tracked_tags = data.credit;

function truncated(num, decimalPlaces) {    
    let numPowerConverter = Math.pow(10, decimalPlaces); 
    return ~~(num * numPowerConverter)/numPowerConverter;
}	  
	  
	  
//10минут = 600 сек, 1 часе = 3600 сек, 1 дне = 86400 сек 	  
//"time_read":85202,"recent_time_read":36457

var tim = data.credit;
    
console.log(tim);
    
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
	


contents.push(
new RawHtml({ html: `<div>  

<h3 class="oglavl">Мои данные</h3>

<div class="mn"><b>Общее время чтения</b> - важный показатель на сайте.</div>

<center><span style="font-size:14px;color: #666;text-transform: uppercase;">${verh}</span><div class="progress-circle ${isprav} p${grad}">
   <span>${vrema_t} ${t_op}</span>
   <div class="left-half-clipper">
      <div class="first50-bar"></div>
      <div class="value-bar ${vrema}"></div>
   </div>
</div> ${t_ops} </center><br>

Уровень доверия <span class="numer">${trust_level}</span> из 4<br>
<div class="all-bar"><a title="Уровень доверия" href="https://toxu.ru/level"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div></a></div>
<br>
 
<div class="mn"> Посмотреть <a class="cvet" href="/u/${username}/badges">мои награды.</a></div>
 
 
<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас возник вопрос о самом сайте? <a href="https://toxu.ru/c/toxu">Вопросы по сайту</a> - это место, где можно говорить о таких вещах.</div>
  
 
<div class="mn"><i class="fa fa-address-book-o" aria-hidden="true"></i> <a href="https://toxu.ru/qa/${username}"><font color="#F7941D">М</font>оя карточка</a>. Как видят меня?</div>


<div class="mn">модификация блога...</div>

</div>`}));
  

 }
 });
   
} else {

contents.push(
new RawHtml({ html: `<div>
<h3 class="oglavl">Информация</h3>

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
