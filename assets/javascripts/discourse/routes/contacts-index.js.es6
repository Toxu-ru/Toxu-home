import { ajax } from 'discourse/lib/ajax';
import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
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
