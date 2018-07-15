import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

 export default createWidget('search-insertion', {
  buildKey: (args) => 'search-insertion',

  html(args, state) {
    const { currentUser } = this;
    let contents = []
    
   
  console.log(args);
    
    

contents.push( new RawHtml({ html: `<div> </div>`}));
    
return contents;
}});
