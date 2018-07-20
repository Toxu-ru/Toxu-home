import computed from 'ember-addons/ember-computed-decorators';
import RawHtml from 'discourse/widgets/raw-html';



export default Ember.Component.extend({
  tagName: '',

 @computed('search')
  searchHelp(search) {
  var results='';
  
  if (search === 'discourse'){ results =   '<div class="search-ins">We connect the dictionary. Dial number: <b>2221</b></div>';}
  if (search === '2221'){ results =   '<div class="search-ins">Вот что такое обновление на странице. Меняем последнюю цифру на 2, т.е. <b>2222</b></div>';} 
  if (search === '2222'){ results =   '<div class="search-ins">sdfsdfsdf<a href="ee">sdf</a> sdfsdf. Меняем на 2223</div>';}
  if (search === '2223'){ results =   '<div class="search-ins">Все! Это весь словарь. УРА! :)</a>';}
  
  return Discourse.getURLWithCDN(results);


  }
  
});
