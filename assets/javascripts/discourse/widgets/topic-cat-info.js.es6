import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('topic-cat-info', {
  buildKey: (args) => 'topic-cat',

  html(args, state) {
    const { currentUser } = this;
    let contents = []
    
    if (currentUser) { } else {}
    
    console.log(args);
    
    contents.push( new RawHtml({ html: `<div> 3 </div>`}));
    
    
return contents;
}});
