import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('user-top', {
  buildKey: (attrs) => 'user-top',

  html(attrs, state) {

  let contents = []
    
  var id;
  var username;
  var avatar;
  
  $.ajax({
  url: "/top/monthly.json",
  dataType: 'json',
  async: false,
  success: function(data) {
    
 var users = data.users;
 
 for (var t = 0; t < users.length; t++) {
 id = users[t].id;
 username = users[t].username; 
 avatar = users[t].avatar_template; 
   
 const ava = avatar.replace('{size}', '75');  
   

contents.push( new RawHtml({ html: `<div class="prof-blog-2">
 
<div class="prof-num"><a title="German" target="_blank" href="https://toxu.ru/qa/${username}">

<img alt="${username}" src="${ava}" width="64" height="64" class="avatar"></a></div>

<div class="prof-txt"><a title="${username}" target="_blank" href="https://toxu.ru/qa/${username}" class="cvet">${username}</a></div>
 
 </div>`})); 
   
 }
 }
 });
    
 return contents;

}
});
