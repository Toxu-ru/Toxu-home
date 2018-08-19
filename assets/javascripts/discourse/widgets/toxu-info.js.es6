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

<noindex><div class="dropdown pravo">
<a title="Мы в социальных сетях..." class="info-soc" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Ещё...</a>
  <div class="dropdown-menu soc" aria-labelledby="dropdownMenuButton"><center>
  <a title="Мы в ВКонтакте" class="dropdown-item" rel="nofollow" target="_blank" href="https://vk.com/toxu_ru"><i class="fa fa-vk" aria-hidden="true"></i></a>
  <a title="Мы в Twitte" class="dropdown-item" rel="nofollow" target="_blank" href="https://twitter.com/toxu_russian"><i class="fa fa-twitter" aria-hidden="true"></i></a>
  <a title="Мы в Facebook" class="dropdown-item" rel="nofollow" target="_blank" href="https://www.facebook.com/toxu.ru"><i class="fa fa-facebook" aria-hidden="true"></i></a>
  <a title="Мы в Моем Мире" class="dropdown-item" rel="nofollow" target="_blank" href="https://my.mail.ru/community/toxu/"><i class="fa fa-at" aria-hidden="true"></i></a>
  </center></div>
</div></noindex>
     
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
