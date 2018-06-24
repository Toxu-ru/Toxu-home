import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/level");
  },

      titleToken() {
    return "Уровни доверия";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
