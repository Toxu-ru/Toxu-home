import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('toxu-info', {
  buildKey: (attrs) => 'toxu-info',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
     var uinfo;
    
    if (currentUser) { 
    var username = currentUser.get('username');
    uinfo = ' — <a class="info-soc my" href="https://toxu.ru/u/'+ username +'/summary">'+ username +'</a>';
    } else { uinfo = '  '; }  
      
    contents.push(
      new RawHtml({ html: `<div class="toxu-info"><hr class="hr">
      <div class="toxu-info-soc">
      <a class="info-soc" target="_blank" href="https://toxu.ru/about">О нас</a> 
      <a class="info-soc" target="_blank" href="https://toxu.ru/help">Помощь</a> 
      <a class="info-soc" target="_blank" href="https://toxu.ru/qa">Писатели</a>

<noindex><div class="dropdown pravo">
<a title="Мы в социальных сетях..." class="info-soc" data-toggle="dropdown">Ещё...</a>
  <div class="dropdown-menu soc" aria-labelledby="dropdownMenuButton"><center>
  <a title="Мы в Моём Мире" class="dropdown-item" rel="nofollow" target="_blank" href="https://my.mail.ru/community/toxu/"><i class="fa fa-at" aria-hidden="true"></i></a>
  <a title="Мы в Twitter" class="dropdown-item" rel="nofollow" target="_blank" href="https://twitter.com/toxu_russian"><i class="fa fa-twitter" aria-hidden="true"></i></a>
  <a title="Мы в Facebook" class="dropdown-item" rel="nofollow" target="_blank" href="https://www.facebook.com/toxu.ru"><i class="fa fa-facebook" aria-hidden="true"></i></a>
  <a title="Мы в ВКонтакте" class="dropdown-item" rel="nofollow" target="_blank" href="https://vk.com/toxu_ru"><i class="fa fa-vk" aria-hidden="true"></i></a>
  </center></div>
</div></noindex>
     
      </div>
      ©  2017–2018 «Toxu»  ${uinfo}
      </div>`})); 
   
   

return contents;

}
});
