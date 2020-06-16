import { ajax } from 'discourse/lib/ajax';
import DiscourseRoute from "discourse/routes/discourse";
export default DiscourseRoute.extend({
  model(opts) {
  	return ajax("/donate");
  },

      titleToken() {
    return "Хотите помочь проекту?";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
