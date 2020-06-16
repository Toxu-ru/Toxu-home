import { ajax } from 'discourse/lib/ajax';
import DiscourseRoute from "discourse/routes/discourse";
export default DiscourseRoute.extend({
  model(opts) {
  	return ajax("/toxu");
  },

titleToken() {
    return "Почему сайт называется Tоха";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
