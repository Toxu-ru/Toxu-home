import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('sub-menu', {
 // tagName: 'div.user-profile.widget-container',
  buildKey: (attrs) => 'user-profile',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
    const trust_level = currentUser.get('trust_level');
    const username = currentUser.get('username');
     
if (trust_level === 0) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <b>посетитель</b>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<br>
<a href="/tags" class="tag-факты discourse-tag bullet">все теги</a> <a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>

</div>`}));

}
if (trust_level === 1) { 
contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <b>пользователь</b>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<a href="/tags" class="tag-факты discourse-tag bullet">все теги</a> <a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>

</div>`}));

}
if (trust_level === 2) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <b>участник</b>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<a href="/tags" class="tag-факты discourse-tag bullet">все теги</a> <a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>

</div>`}));

}
if (trust_level === 3) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <b>постоялец</b>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<a href="/tags" class="tag-факты discourse-tag bullet">все теги</a> <a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>

</div>`}));

}

if (trust_level === 4) { 
contents.push(
new RawHtml({ html: `<div>  
<div class="title">Мой профиль<span id="toxu"><a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i>
</a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <b>лидер</b>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас возник вопрос о самом сайте? <a href="https://toxu.ru/c/dev">dev</a> - это место, где можно говорить о таких вещах.</div>
<a href="/tags" class="tag-факты discourse-tag bullet">все теги</a> <a href="/tags/факты" class="tag-факты discourse-tag bullet">факты</a>
</div>`}));
}   
   
   
} else {

contents.push(
new RawHtml({ html: `<div>
<div class="title">Другое<span id="toxu"></div>

<div class="mn"> <i aria-hidden="true" class="fa fa-trophy"></i> Про уровень доверия - <b>лидер</b>. Узнайте <a class="cvet" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">больше.</a></div>
<div class="mn"><i class="fa fa-star-o"></i> Посмотреть <a class="cvet" href="https://toxu.ru/help">раздел помощь.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас есть предложения по сайту? <a href="https://toxu.ru/t/voprosy-k-administraczii-sajta/2016">Напишите</a> про них.</div>

</div>`}) );
  

}
return contents;
}});
