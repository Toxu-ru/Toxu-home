import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/donate");
  },

      titleToken() {
    return "Хотите помочь проекту?";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
