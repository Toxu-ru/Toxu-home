import computed from 'ember-addons/ember-computed-decorators';
import RawHtml from 'discourse/widgets/raw-html';



export default Ember.Component.extend({
  tagName: '',

 @computed('strelca')
  searchHelp(strelca) {
  var results='';
  
  comsole.log(strelca);
  
  var snum = strelca.posts_count;
  
  results =   '<div class="strelca">${snum}</div>'; 

  
  return Discourse.getURLWithCDN(results);


  }
  
});
