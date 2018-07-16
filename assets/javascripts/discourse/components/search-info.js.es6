import computed from 'ember-addons/ember-computed-decorators';

export default Ember.Component.extend({
  tagName: '',

 @computed('search')
  searchHelp(search) {
   
   console.log(search);
   
   if (search === '2222'){
   
    return Discourse.getURLWithCDN(search);



}
  }
  
});

//search-ins
