import computed from 'ember-addons/ember-computed-decorators';
import RawHtml from 'discourse/widgets/raw-html';



export default Ember.Component.extend({
  tagName: '',

 @computed('search')
  searchHelp(search) {
  var results='';
  
  console.log(search);
  
  var snum = search.posts_count;
  
  results =   '<div class="strelca">${snum}</div>'; 

  
  return Discourse.getURLWithCDN(results);


  }
  
});
