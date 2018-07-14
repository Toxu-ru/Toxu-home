import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('topic-cat-info', {
  buildKey: (args) => 'topic-cat',

  html(args, state) {
    const { currentUser } = this;
    let contents = []
    
    if (currentUser) { } else {}

 //33 - блоги, 20 - тестирование, 7 - Тоху, Правила 
  
  var qaid =  args.model.id;
  var catid =  args.model.category_id;
  var gya =  args.model.currentPost;
  var pcont =  args.model.posts_count;
   
    console.log(args.model);
    
    
if (catid === 33) {  contents.push( new RawHtml({ html: `<div class="cat-blo"> Это блоги </div>`}));  } 
if (catid === 20) {  contents.push( new RawHtml({ html: `<div class="cat-blo"> Это раздел <a href="https://toxu.ru/c/test">для тестирования...</a> </div>`}));  }   
if (catid === 7) {  contents.push( new RawHtml({ html: `<div class="cat-blo"><font color=red>П</font>осмотрите о <a target="_blank" href="https://toxu.ru/features">возможностях Toxu.ru</a></div>`}));  }

if (qaid === 4117 || qaid === 4569) {  contents.push( new RawHtml({ html: `<div class="cat-blo"> Это вопрос про общение. </div>`}));  } 

if (qaid === 129 || qaid === 2760) {  contents.push( new RawHtml({ html: `<div class="cat-tag">
<a class="tag" href="/tags/вконтакте">ВКонтакте</a> <a class="tag" href="/tags/одноклассники">Одноклассники</a> 
<a class="tag" href="/tags/facebook">Facebook</a> <a class="tag" href="/tags/twitter">Twitter</a> 
<a class="tag" href="/tags/instagram">Instagram</a> <a class="tag" href="/tags/telegram">Telegram</a> 
</div>`}));  }     
    
contents.push( new RawHtml({ html: `<div> ${gya} / ${pcont} </div>`}));
    
return contents;
}});
