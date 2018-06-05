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
 // url: "http://localhost:3000/uploads/monthly.json",
  url: "/top/monthly.json",
  dataType: 'json',
  async: false,
  success: function(data) {
    
 var users = data.users;
 
 for (var t = 0; t < 20; t++) {
 id = users[t].id;
 username = users[t].username; 
 avatar = users[t].avatar_template; 
 const ava = avatar.replace('{size}', '75');  
   
contents.push( new RawHtml({ html: `<div class="prof-blog-2">
<div class="prof-num"><a title="${username}" target="_blank" href="https://toxu.ru/qa/${username}">
<img alt="${username}" src="${ava}" width="64" height="64" class="avatar"></a></div>
<div class="prof-txt"><a title="${username}" target="_blank" href="https://toxu.ru/qa/${username}" class="cvet">${username}</a></div>
</div>`})); 
   
 }
 
 contents.push( new RawHtml({ html: `<div class="blog"><br><h1 class="t1">Популярные вопросы</h1></div>`})); 
 
  for (var t = 0; t < 15; t++) {
  var id = data.topic_list.topics[t].id;
  var title = data.topic_list.topics[t].title; 
  var slug = data.topic_list.topics[t].slug;
  var posts_count = data.topic_list.topics[t].posts_count;
  var like_count = data.topic_list.topics[t].like_count;
  var views = data.topic_list.topics[t].views;
  var last_poster_username = data.topic_list.topics[t].last_poster_username;
  
  
  contents.push( new RawHtml({ html: `<div class="blog-title"><a class="title" href="${slug}/${id}">${title}</a>
<div class="blog-info"><i class="fa fa-user-o" aria-hidden="true"></i> <span class="rez">${last_poster_username}</span> 
<i class="fa fa-comment-o" aria-hidden="true"></i> <span class="rez">${posts_count}</span> 
<i class="fa fa-heart-o d-icon d-icon-d-unliked"></i> <span class="rez">${like_count}</span> 
<i class="fa fa-eye" aria-hidden="true"></i> <span class="rez">${views}</span></div>
 </div>`})); 
 
   }
 
 }
 });
    
 return contents;

}
});
