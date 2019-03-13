import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/facts");
  },

      titleToken() {
    return "Факты";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
