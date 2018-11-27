import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
import { iconHTML } from "discourse-common/lib/icon-library";

let icon_heart = iconHTML('heart');
let icon_eye = iconHTML('eye');
let icon_com = iconHTML('comment');


export default createWidget('page-dev', {
  buildKey: (attrs) => 'home-toxu',

  html(attrs, state) {
  
  let contents = []
    
  var title;
  var slug;
  var id;
  var detal;
  var like_count;
  var views;
  var posts_count;
  
  $.ajax({
  url: "/top/monthly.json" ,
  dataType: 'json',
  async: false,
  success: function(data) {
  
 var topics = data.topic_list.topics;
 
 for (var t = 0; t < topics.length; t++) {
 title = topics[t].title;
 slug = topics[t].slug; 
 id = topics[t].id; 
 detal = topics[t].excerpt;  
 like_count = topics[t].like_count;
 views = topics[t].views;
 posts_count = topics[t].posts_count;

   contents.push( new RawHtml({ html: `

<div class="topic-list"> <div class="telohome">


<div class="title-t"><a href="/t/${slug}/${id}" class="title">${title}</a></div>
<div class="topic-excerpt"><font style="font-size: 80%;"> ${detal} <br>
${icon_heart} ${like_count} &nbsp; &nbsp; 
${icon_eye} ${views} &nbsp; &nbsp; 
${icon_com} ${posts_count}

<br><br></font>
</div>
</div></div> `})
 
 ); 
   

  }
  

  }
  });
    
    
    
 return contents;

}
});
