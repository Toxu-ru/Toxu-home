import { ajax } from 'discourse/lib/ajax';
import DiscourseRoute from "discourse/routes/discourse";
export default DiscourseRoute.extend({
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
