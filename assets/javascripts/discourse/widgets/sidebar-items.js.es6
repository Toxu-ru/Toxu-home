import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('sidebar-items', {
  tagName: 'div.sidebar-items',
  buildKey: () => 'sidebar-items',

  html(attrs, state) {
  	if (!this.siteSettings.sidebar_enable || this.site.mobileView)
  	return;
	  
    const result = [];
    var self = this;
    const { currentUser } = this; 
  

      result.push(self.attach('sidebar-cat'));

      result.push( new RawHtml({ html: `<div><div class="soc"><noindex>
<div class="all-tags"><a rel="nofollow" href="https://toxu.ru/tags" class="tag sbar cvet">Теги</a> <span class="vid">- по темам</span></div>
      <br>
      <a target="_blank" class="livejournal cvet" title="Livejournal" rel="nofollow" href="https://toxu.livejournal.com"><i class="fa fa-pencil" aria-hidden="true"></i></a>
      <a target="_blank" class="facebook cvet" title="Facebook" rel="nofollow" href="https://www.facebook.com/toxu.ru"><i class="fa fa-facebook" aria-hidden="true"></i></a>
      <a target="_blank" class="twitter cvet" title="Twitter" rel="nofollow" href="https://twitter.com/toxu_russian"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      <a target="_blank" class="vk cvet" title="ВКонтакте" rel="nofollow" href="https://vk.com/toxu_ru"><i class="fa fa-vk" aria-hidden="true"></i></a>
      <br></noindex><br><a class="ser cvet" href="https://toxu.ru/help">Помощь</a> <span class="vid">&nbsp; • &nbsp;</span> <a class="ser cvet" href="https://toxu.ru/c/toxu/regulations">Правила</a> <span class="vid">&nbsp; • &nbsp;</span> <a class="ser cvet" href="http://toxu.blog">Блог</a></div> 
      <div class="blog-container"><a class="pmenu" href="https://toxu.ru/latest?ascending=true&amp;order=posts"><i class="fa fa-question-circle-o" aria-hidden="true"></i>
       Вопросы без ответа</a></div></div>`}));



    return result;
  },

});
