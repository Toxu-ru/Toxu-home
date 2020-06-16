import { ajax } from 'discourse/lib/ajax';
import DiscourseRoute from "discourse/routes/discourse";
export default DiscourseRoute.extend({
  model(opts) {
  	return ajax("/dev");
  },

      titleToken() {
    return "Для разработчиков";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
