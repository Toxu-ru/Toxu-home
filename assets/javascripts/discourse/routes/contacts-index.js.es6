import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/contacts");
  },

      titleToken() {
    return "Контакты";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
