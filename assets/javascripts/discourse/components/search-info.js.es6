import computed from 'ember-addons/ember-computed-decorators';
import RawHtml from 'discourse/widgets/raw-html';



export default Ember.Component.extend({
  tagName: '',

 @computed('search')
  searchHelp(search) {
  var results='';
  
if (search === 'discourse' || search === 'Discourse'){ results = '<div class="search-ins"><b>Discourse</b> - это интернет-форум с открытым исходным кодом и программное обеспечение для управления списком рассылки, созданное в 2013 году <i>Jeff Atwood, Robin Ward, и Sam Saffron</i>. См. <a target="_blank" href="https://ru.wikipedia.org/wiki/Discourse">в Википедии.</a></div>';}
if (search === 'Toxu' || search === 'toxu' || search === 'тоху' || search === 'тоха'){ results =   '<div class="search-ins"><b>Toxu</b> - это сайт вопросов и ответов (Q&A). <a href="https://toxu.ru/help">Почитать подробнее...</a></div>';} 

  
  return Discourse.getURLWithCDN(results);


  }
  
});
