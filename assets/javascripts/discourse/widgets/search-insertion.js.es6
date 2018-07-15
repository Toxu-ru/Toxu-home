import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

 export default createWidget('search-insertion', {
  buildKey: (args) => 'search-insertion',

  html(args, state) {
    const { currentUser } = this;
    let contents = []
    
   
 // console.log(args);
  //search: "wikipedia" 
    
var rez = args.search;
   
if ( rez === 'wikipedia' ) {
contents.push( new RawHtml({ html: `<div class="search-ins">
«Википедия» — общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом, реализованная на принципах вики.
<br><br>
<i>Wikipedia is a multilingual, web-based, free encyclopedia that is based on a model of openly editable content.</i> 
</div>`}));
} 
 
if ( rez === 'discourse' ) {
contents.push( new RawHtml({ html: `<div class="search-ins">
<b>Discourse</b> - это интернет-форум с открытым исходным кодом и программное обеспечение для управления списком рассылки, созданное в 2013 году Jeff Atwood, Robin Ward, и Sam Saffron.
<br><br>
<i><a target="_blank" href="https://en.wikipedia.org/wiki/Discourse_(software)">Discourse</a> is an open source Internet forum and mailing list management software application founded in 2013 by <a target="_blank" href="https://en.wikipedia.org/wiki/Jeff_Atwood">Jeff Atwood</a>, Robin Ward, and Sam Saffron.</i> 
</div>`}));
}
   
if ( rez === 'Toxu' || rez === 'toxu.ru' || rez === 'Тоха'  ) {
contents.push( new RawHtml({ html: `<div class="search-ins">
«Toxu» — сайт вопросов и ответов, реализованный на принципиально <a target="_blank" href="https://toxu.ru/features">новых принципах...</a>
</div>`}));
}   
   
contents.push( new RawHtml({ html: `<div> </div>`})); 
return contents;
}});
