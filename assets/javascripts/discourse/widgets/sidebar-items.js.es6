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

if (currentUser) {	
var coll =  currentUser.custom_fields.userbar_cat;	
if (coll == true) {  } else { 

comsole.log(currentUser.trust_level);	
comsole.log(currentUser.badges[104]);
	
result.push( new RawHtml({ html: `<div class="kollonka"><a title="Добавить боковую колонку с личными данными" href="https://toxu.ru/my/preferences/profile"><font color=red>д</font>обавить личные данные</a></div>`})); 

}
}	  
	  
result.push( new RawHtml({ html: `<div class="soc"><a class="pren" title="Писатели" rel="nofollow" href="https://toxu.ru/qa">
писатели</a> • <a title="Помощь" class="pren" rel="nofollow" href="https://toxu.ru/help">помощь</a>
• <a title="Связь" class="pren" rel="nofollow" href="https://toxu.ru/t/predlozheniya-pozhelaniya-po-sajtu-toxu-ru-obshhaya-tema/4544">связь</a>
</div>`})); 

      return result;
  },

});
