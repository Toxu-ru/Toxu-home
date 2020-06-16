import { ajax } from 'discourse/lib/ajax';
import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
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
