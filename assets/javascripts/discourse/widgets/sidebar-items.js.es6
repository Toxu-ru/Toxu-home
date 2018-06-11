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

result.push( new RawHtml({ html: `<div class="soc"><a title="Писатели" rel="nofollow" href="https://toxu.ru/qa">
<img src="https://toxu.ru/uploads/default/original/2X/8/8fa38f17789c441c42a87f977df3be09f7bcd970.png" alt="sova" width="15">
</a></div>`}));

      return result;
  },

});
