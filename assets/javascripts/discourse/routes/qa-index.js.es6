import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({

  model(opts) {
     return ajax(`/qa/${opts.qa}`);
 
  },

  titleToken() {
    return "Сертификат";  
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
  
});
