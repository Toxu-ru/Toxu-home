import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('topic-cat-info', {
  buildKey: (args) => 'topic-cat',

  html(args, state) {
    const { currentUser } = this;
    let contents = []
    
    if (currentUser) { } else {}
    //33 - блоги
    console.log(args.model.category_id);
  //  var catid =  args.category_id;
  // if (catid === 33) {  contents.push( new RawHtml({ html: `<div class="cat-blo"> Это блоги </div>`}));
  //                   } 
                      
    contents.push( new RawHtml({ html: `<div>  </div>`}));
    
    
return contents;
}});
