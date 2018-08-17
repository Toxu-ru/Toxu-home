import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('toxu-info', {
  buildKey: (attrs) => 'toxu-info',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) { 
    
    contents.push(
      new RawHtml({ html: `<div class="toxu-info">

      ©  2017–2018 «Toxu» - login

      </div>`})); 
      
    } else { 
 
     contents.push(
       new RawHtml({ html: `<div class="toxu-info">

      © 2017–2018 «Toxu»

      </div>`}));
   
    } 

return contents;

}
});
