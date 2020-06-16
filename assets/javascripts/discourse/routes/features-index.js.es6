import { ajax } from 'discourse/lib/ajax';
import DiscourseRoute from "discourse/routes/discourse";
export default DiscourseRoute.extend({
  model(opts) {
  	return ajax("/features");
  },

      titleToken() {
    return "Возможности сайта";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
