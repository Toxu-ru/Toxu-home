import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('topic-cat-info', {
  buildKey: (args) => 'topic-cat',

  html(args, state) {
    const { currentUser } = this;
    let contents = []
    
    if (currentUser) { } else {}

 //33 - блоги, 20 - тестирование, 7 - Тоху, Правила 
 console.log(args.model.id);
//  var qaid =  args.model.id;
  var catid =  args.model.category_id;
    
if (catid === 33) {  contents.push( new RawHtml({ html: `<div class="cat-blo"> Это блоги </div>`}));  } 
if (catid === 20) {  contents.push( new RawHtml({ html: `<div class="cat-blo"> Это раздел для тестирования<br><br>В общем, вывод информации... </div>`}));  }   
if (catid === 7) {  contents.push( new RawHtml({ html: `<div class="cat-blo">Посмотрите о <a href="https://toxu.ru/features">возможностях сайта Toxu.ru</a></div>`}));  }
    
contents.push( new RawHtml({ html: `<div>  </div>`}));
    
return contents;
}});
