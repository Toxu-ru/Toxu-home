import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
 
export default createWidget('gramota-summary', {
tagName: 'div.qramota',
  buildKey: (args) => 'qramota',

  html(args, state) {
    const { currentUser } = this;
    let contents = []
    var username = args.model;
    var id;
    var granted_at;

$.ajax({
  url: "/user-badges/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
	
  var badges = data.user_badges;
   
  for (var t = 0; t < badges.length; t++) {
  
  id = badges[t].badge_id;
  granted_at = badges[t].granted_at;
  
  if ( id == 104) { contents.push( new RawHtml({ html: `<div class="bd"><a class="gram" title="Грамота" href="/qa/${username}"><i aria-hidden="true" class="fa fa-trophy"></i></a></div>`})); 
   
   } else {  }
	  
}
}
});
	
	return contents;

}
});
