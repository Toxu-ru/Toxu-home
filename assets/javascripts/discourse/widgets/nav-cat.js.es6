import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('nav-cat', {
  buildKey: (attrs) => 'nav-cat',
 
 html(attrs, state) {
  let contents = []
  var name = attrs.name;
  var slug = attrs.category.slug;
  var nsub;
    
  if (slug == "science") { nsub = 'Наука и техника'; } else {  }
  if (slug == "culture") { nsub = 'Культура и Искусство'; } else {  }
  if (slug == "internet") { nsub = 'Компьютеры, Интернет'; } else {  }
  if (slug == "programming") { nsub = 'Программирование'; } else {  }
  if (slug == "occultism") { nsub = 'Религия, Непознанное'; } else {  }
  if (slug == "toxu") { nsub = 'Toxu, Вопросы'; } else {   }
  
 console.log(attrs);
      
 if (attrs.categories) {
  
 contents.push(
 new RawHtml({ html: `<div>  

  <h1 class="navig"> <a href="https://toxu.ru">Главная</a> / <a href="https://toxu.ru/c/${slug}">${nsub}</a> / ${name}</h1> 

  </div>`})); 
   
  } else { 
  
  contents.push( new RawHtml({ html: `<div><h1 class="navig"> <a href="https://toxu.ru">Главная</a> / ${name}</h1> </div>`}));

  }
      
   if (slug == "test") { 
    contents.push( new RawHtml({ html: `<div class="infocat">Предложения, пожелания, критика - приветствуется...</div>`}));  
   } else{ }       

return contents;
}});
