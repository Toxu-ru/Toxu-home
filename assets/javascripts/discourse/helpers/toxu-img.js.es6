import { registerUnbound } from "discourse-common/lib/helpers";
import { isRTL } from "discourse/lib/text-direction";

function setDir(text) {
  let content;
  var slug = text.category.slug;
  
 if (slug == 'blog') { return `<span></span>`; } else { 
 
 return `<span class="timg"><img alt="блоги" src="/uploads/default/original/2X/0/0e338b885252f366d871634846d7836ff8fa7ac2.jpeg"></span>`;
 
 }
    
   
  return content;
}

export default registerUnbound("toxu-img", function(str) {
  return new Handlebars.SafeString(setDir(str));
});
