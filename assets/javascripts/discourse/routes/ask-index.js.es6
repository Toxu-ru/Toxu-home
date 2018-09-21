import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/ask");
  },

      titleToken() {
    return "Часто задаваемые вопросы";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
