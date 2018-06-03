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
  var granted_at;
 var userid;
  $.ajax({
  url: "/users/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
  userid =  data.user.id;
  }
  });
 
  $.ajax({
  url: "/user-badges/"+ username +".json", 
  dataType: 'json',
  async: false,
  success: function(data) {
	
 var badges = data.user_badges;
   
 for (var t = 0; t < badges.length; t++) {
  
  id = badges[t].badge_id;
  granted_at = badges[t].granted_at;
  
  if ( id == 104) {

  contents.push( new RawHtml({ html: `<div class="bd"><center><div class="prof-num">Сертификат</div>    ${userid}
  
  <img src="https://toxu.ru/discobot/certificate.svg?date=${granted_at}&amp;user_id=${userid}" alt="Грамота" style="max-width:1000px"></center>
  
  
  </div>`})); 
   
   } else { }
   
}
}
});

return contents;

}
});
