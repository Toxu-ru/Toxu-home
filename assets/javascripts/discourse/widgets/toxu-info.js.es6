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
      <div class="toxu-info-soc"><a class="info-soc" href="./help">Правила</a> <a class="info-soc" href="./qa">Писатели</a> </div>
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
