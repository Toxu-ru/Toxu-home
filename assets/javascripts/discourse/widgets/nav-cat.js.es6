import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('nav-cat', {
  buildKey: (attrs) => 'nav-cat',
 
 html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
  var name = attrs.name;
  var slug = attrs.category.slug;
  var nsub;
    
  if (slug == "science") { nsub = 'Наука и техника'; } else {  }
  if (slug == "culture") { nsub = 'Культура и Искусство'; } else {  }
  if (slug == "internet") { nsub = 'Компьютеры, Интернет'; } else {  }
  if (slug == "programming") { nsub = 'Программирование'; } else {  }
  if (slug == "occultism") { nsub = 'Религия, Непознанное'; } else {  }
  if (slug == "toxu") { nsub = 'Toxu, Вопросы'; } else {   }
  
      
 var url_logo =  attrs.category.uploaded_logo.url;
 var description =  attrs.category.description;
 var topic_count = attrs.category.topic_count;
 var topic_url = attrs.category.topic_url;
      
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
    contents.push( new RawHtml({ html: `<div>

    <img src="${url_logo}" class="cat-big"> ${description}  <br> А вопросов тут всего:  ${topic_count} <br>
  <i aria-hidden="true" class="fa fa-list"></i> А главная общая тема тут для раздела:   <a href="${topic_url}"> вот</a>

    </div>`}));  
                       
    } else{ }       
   
} 
return contents;
}});
