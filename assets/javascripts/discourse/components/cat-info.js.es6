import computed from 'ember-addons/ember-computed-decorators';

export default Ember.Component.extend({
  tagName: '',

 @computed('categ')
  catTxt(categ) {
   
    return Discourse.getURLWithCDN(categ);

  }
  
});
