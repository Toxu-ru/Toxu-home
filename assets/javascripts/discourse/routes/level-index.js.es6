import { ajax } from 'discourse/lib/ajax';
import DiscourseRoute from "discourse/routes/discourse";
export default DiscourseRoute.extend({
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
