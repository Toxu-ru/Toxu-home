import { ajax } from 'discourse/lib/ajax';
import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
  model(opts) {
  	return ajax("/help");
  },

    titleToken() {
    return "Помощь по сайту";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
