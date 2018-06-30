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

result.push( new RawHtml({ html: `<div class="soc"><a class="pren" title="Писатели" rel="nofollow" href="https://toxu.ru/qa">
<font color=red>п</font>исатели</a> • <a title="Помощь" class="pren" rel="nofollow" href="https://toxu.ru/help">помощь</a>
• <a title="Связь" class="pren" rel="nofollow" href="https://toxu.ru/t/voprosy-k-administraczii-sajta/2016">связь</a>
</div>`})); 

      return result;
  },

});
