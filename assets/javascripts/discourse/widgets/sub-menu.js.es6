import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('sub-menu', {
  buildKey: (args) => 'user-profile',

  html(args, state) {
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
 
 
 
 
 $.ajax({
  url: "/u/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
	
  const badge_count = data.user.badge_count;
  var badge_num = badge_count*2;   
  var profile_view_count = data.user.profile_view_count;
 
if (trust_level === 0) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" title="Настройка аккаунта" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <b>посетитель</b>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<br>
<a href="/tags" class="tag-факты discourse-tag bullet">все теги</a> <a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>

<br><br>Уровень доверия<br>
<div class="all-bar"><a title="Уровень доверия" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div> <div class="n-bar">${trust_level}</div></a></div>
<br>Количество наград<br>
<div class="all-bar"><a title="Награды" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:12px;width:${badge_num}%"></div></div> <div class="n-bar">${badge_count}</div></a></div>
<br>
<div class="mn">Мой профиль смотрели: <span class="pr-view">${profile_view_count}</span> раз</div>

</div>`}));

}
if (trust_level === 1) { 
contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" title="Настройка аккаунта" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <b>пользователь</b>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<a href="/tags" class="tag-факты discourse-tag bullet">все теги</a> <a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>

<br><br>Уровень доверия<br>
<div class="all-bar"><a title="Уровень доверия" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div> <div class="n-bar">${trust_level}</div></a></div>
<br>Количество наград<br>
<div class="all-bar"><a title="Награды" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:12px;width:${badge_num}%"></div></div> <div class="n-bar">${badge_count}</div></a></div>
<br>
<div class="mn">Мой профиль смотрели: <span class="pr-view">${profile_view_count}</span> раз</div>

</div>`}));

}
if (trust_level === 2) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" title="Настройка аккаунта" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <b>участник</b>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<a href="/tags" class="tag-факты discourse-tag bullet">все теги</a> <a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>

<br><br>Уровень доверия<br>
<div class="all-bar"><a title="Уровень доверия" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div> <div class="n-bar">${trust_level}</div></a></div>
<br>Количество наград<br>
<div class="all-bar"><a title="Награды" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:12px;width:${badge_num}%"></div></div> <div class="n-bar">${badge_count}</div></a></div>
<br>
<div class="mn">Мой профиль смотрели: <span class="pr-view">${profile_view_count}</span> раз</div>

</div>`}));

}
if (trust_level === 3) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" title="Настройка аккаунта" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <b>постоялец</b>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<a href="/tags" class="tag-факты discourse-tag bullet">все теги</a> <a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>

<br><br>Уровень доверия<br>
<div class="all-bar"><a title="Уровень доверия" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div> <div class="n-bar">${trust_level}</div></a></div>
<br>Количество наград<br>
<div class="all-bar"><a title="Награды" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:12px;width:${badge_num}%"></div></div> <div class="n-bar">${badge_count}</div></a></div>
<br>
<div class="mn">Мой профиль смотрели: <span class="pr-view">${profile_view_count}</span> раз</div>

</div>`}));

}

if (trust_level === 4) { 
contents.push(
new RawHtml({ html: `<div>  
<div class="title">Мой профиль<span id="toxu"><a class="link" title="Настройка аккаунта" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i>
</a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <b>лидер</b>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас возник вопрос о самом сайте? <a href="https://toxu.ru/c/dev">dev</a> - это место, где можно говорить о таких вещах.</div>
<a href="/tags" class="tag-факты discourse-tag bullet">все теги</a> <a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>

<br><br>Уровень доверия<br>
<div class="all-bar"><a title="Уровень доверия" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-1" style="height:12px;width:${bw}%"></div></div> <div class="n-bar">${trust_level}</div></a></div>
<br>Количество наград<br>
<div class="all-bar"><a title="Награды" href="/qa/${username}"><div class="pgbar cv-1"><div class="bar-b pol-2" style="height:12px;width:${badge_num}%"></div></div> <div class="n-bar">${badge_count}</div></a></div>

<br>
<div class="mn">Мой профиль смотрели: <span class="pr-view">${profile_view_count}</span> раз</div>

<br>
<center>0<div class="progress-circle p20">
   <span>20 минут</span>
   <div class="left-half-clipper">
      <div class="first50-bar"></div>
      <div class="value-bar day"></div>
   </div>
</div>30 минут</center>

<br><div class="mn">Просто попытка отрисовать статику - тест 20 минут. Видимость только для TL4. В других нет... Осталось перести минуты, часы
в градусы, чтобы было соответствие. И еще... Посмотрите преимущества не фиксированныз колонок. Можно листать вниз, и будет все новая информаци.</div><br>

</div>`}));
}   

 }
 });
   
} else {

contents.push(
new RawHtml({ html: `<div>
<div class="title">Другое<span id="toxu"></div>

<div class="mn"> <i aria-hidden="true" class="fa fa-trophy"></i> Про уровень доверия - <b>лидер</b>. Узнайте <a class="cvet" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">больше.</a></div>
<div class="mn"> <i class="fa fa-star-o"></i> Посмотреть <a class="cvet" href="https://toxu.ru/help">раздел помощь.</a></div>
<div class="mn"> <i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас есть предложения по сайту? <a href="https://toxu.ru/t/predlozheniya-pozhelaniya-po-sajtu-toxu-ru-obshhaya-tema/4544">Напишите</a> про них.</div>

</div>`}) );
  

}
return contents;
}});
