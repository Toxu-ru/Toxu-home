import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('toxu-info', {
  buildKey: (attrs) => 'toxu-info',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) { 
    
   var username = currentUser.get('username');
      
    contents.push(
      new RawHtml({ html: `<div class="toxu-info">
      <div class="toxu-info-soc">
      <a class="info-soc" target="_blank" href="./about">О нас</a> 
      <a class="info-soc" target="_blank" href="./help">Помощь</a> 
      <a class="info-soc" target="_blank" href="./qa">Писатели</a>

<div class="dropdown pravo">
<a class="info-soc" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="float: right;margin-right: 4px;">
Ещё <i class="fa fa-angle-down" aria-hidden="true"></i>
</a>
  <div class="dropdown-menu soc" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" rel="nofollow" target="_blank" href="https://vk.com/toxu_ru">ВКонтакте</a>
    <a class="dropdown-item" rel="nofollow" target="_blank" href="https://twitter.com/toxu_russian">Twitter</a>
    <a class="dropdown-item" rel="nofollow" target="_blank" href="https://www.facebook.com/toxu.ru">Facebook</a>
  </div>
</div>
     
      </div>
      ©  2017–2018 «Toxu» — <a class="info-soc my" href="https://toxu.ru/u/${username}/summary">${username}</a>
      </div>`})); 
      
    } else { 
 
     contents.push(
       new RawHtml({ html: `<div class="toxu-info">

      © 2017–2018 «Toxu» — вопросы и ответы

      </div>`}));
   
    } 

return contents;

}
});
