import { withPluginApi } from 'discourse/lib/plugin-api';
import RawHtml from 'discourse/widgets/raw-html'; 
 
function attachComm(api) {
 
//      api.includePostAttributes(
//        'reply_to_post_number',
//        'topic',
//        'comment',
//       'showComment',
//        'answerId',
//        'lastComment'
//      );


 
 api.addPostClassesCallback((attrs) => {
 return attrs.reply_to_post_number ? ["comment"] : ["answer"];
  
//          if (attrs.comment) {
//            let classes = ["comment"];
//            if (attrs.showComment) {
//              classes.push('show');
//            }
//            return classes;
//          } else {
//            return ["answer"];
//          }  
  
});
 
 api.addPostClassesCallback((attrs) => {
 return attrs.user_deleted ? ["del"] : ["nodel"]; 
});  
 
 
 api.addSharingSource({
    id: "vk",
    icon: "vk",
    generateUrl: function(link, title) {
      return "http://vk.com/share.php?url=" + encodeURIComponent(link)  + "&title=" + encodeURIComponent(title);
    },
    shouldOpenInPopup: true,
    popupHeight: 265
  });
 
}
  
export default {
  name: 'alert',
  initialize(container) {
      withPluginApi('0.1', attachComm);
             }
};
