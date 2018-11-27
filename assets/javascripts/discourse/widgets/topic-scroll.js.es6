import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
import { iconHTML } from "discourse-common/lib/icon-library";

let icon_down = iconHTML('arrow-down');
let icon_up = iconHTML('arrow-up');

export default createWidget('topic-scroll', {
  buildKey: (args) => 'topic-scroll',

  html(args, state) {
    const { currentUser } = this;
    let contents = []
    
    if (currentUser) { } else {}

 //33 - блоги, 20 - тестирование, 7 - Тоху, Правила 
  
  var qaid =  args.model.id;
  var catid =  args.model.category_id;
  var gya =  args.model.currentPost;
  var pcont =  args.model.highest_post_number; 
  var slug =  args.model.slug;
 
    if (pcont > 3) {
    contents.push( new RawHtml({ html: `<div class='scroll'>
    <a class="cvet" href="https://toxu.ru/t/${slug}/${qaid}/${pcont}" id="scroll-bottom" style="display: inline;">${icon_down}</a>
    <a class="cvet" href="https://toxu.ru/t/${slug}/${qaid}" id="scroll-top" style="display: inline;">${icon_up}</a>
    </div>`}));
     }   
   
contents.push( new RawHtml({ html: `<div> </div>`}));
    
return contents;
}});
