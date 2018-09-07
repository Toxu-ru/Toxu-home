import { registerUnbound } from "discourse-common/lib/helpers";
import { isRTL } from "discourse/lib/text-direction";

function setDir(text) {
  let content;
 
 // console.log(text);
 if (text.category) {  
 
 var slug = text.category.slug;
 if (slug == 'blog') { 
   
  return `<span class="timg"><img alt="блоги" src="/uploads/default/original/2X/c/c73cd3461513cda6f28f8d81fc4f0bbcd50601c4.jpeg"></span>`;
  
 } else { return `<span></span>`; }
  
 } else { return `<span></span>`; }
  
  
  
   
  return content;
}

export default registerUnbound("toxu-img", function(str) {
  return new Handlebars.SafeString(setDir(str));
});
