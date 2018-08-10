import computed from 'ember-addons/ember-computed-decorators';
import RawHtml from 'discourse/widgets/raw-html';

export default Ember.Component.extend({
  tagName: '',

 @computed('strelki')
  searchHelp(strelki) {
  var results='';
  
results = '<div class="strelki">вверх-низ</div>';}

  
  return Discourse.getURLWithCDN(results);


  }
  
});
