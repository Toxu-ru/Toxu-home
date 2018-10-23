import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('page-my-menu', {
  tagName: 'div.page-my-menu',
  buildKey: (attrs) => 'page-my-menu',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
      const username = currentUser.get('username');
      const trust_level = currentUser.get('trust_level');
      var str = currentUser.get('avatar_template');
      const ava = str.replace('{size}', '25');
      
if (trust_level === 0) { }

contents.push(
new RawHtml({ html: `<div> <a href="stats" class="menu"> <i class="fa fa-caret-right" aria-hidden="true"></i> Мои возможности</a></div>`})
 
   );
} 
return contents;
}});
