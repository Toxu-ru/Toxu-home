import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('qa-user', {
  tagName: 'div.qa-user',
  buildKey: (attrs) => 'qa-user',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    var  username;
	
	var pathArray = window.location.pathname.split( '/' );
	username   = pathArray[2]; 
	
	var id;

  $.ajax({
  url: "/user-badges/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
	
 var badges = data.badges;
  
 for (var t = 0; t < badges.length; t++) {
  
  id = badges[t].id;

  contents.push( new RawHtml({ html: `<div class="bd"> ${id} </div>`})); 
   
}
}
});

return contents;

}
});
