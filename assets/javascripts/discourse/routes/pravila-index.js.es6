import { ajax } from 'discourse/lib/ajax';
import DiscourseRoute from "discourse/routes/discourse";
export default DiscourseRoute.extend({
  model(opts) {
  	return ajax("/pravila");
  },

      titleToken() {
      return "Основные правила и рекомендации";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
