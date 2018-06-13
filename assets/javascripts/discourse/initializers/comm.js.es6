import { withPluginApi } from 'discourse/lib/plugin-api';
import RawHtml from 'discourse/widgets/raw-html'; 
 
function attachComm(api) {
 api.addPostClassesCallback((attrs) => {
 return attrs.reply_to_post_number ? ["comment"] : ["answer"];
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
