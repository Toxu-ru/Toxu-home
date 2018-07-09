import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/rules");
  },

      titleToken() {
    return "Основные правила и рекомендации";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
