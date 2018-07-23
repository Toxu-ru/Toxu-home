import { createWidget, applyDecorators } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';
import DiscourseURL from 'discourse/lib/url';
import { ajax } from 'discourse/lib/ajax';

// new versian
// discourse/app/assets/javascripts/discourse/widgets/hamburger-menu.js.es6
// import Category from 'discourse/models/category';
// и далее с 179 строки:  listCategories() {

const flatten = array => [].concat.apply([], array);

export default createWidget('sidebar-cat', {
  tagName: 'div.cat-panel',

  listCategories() {
    const hideUncategorized = !this.siteSettings.allow_uncategorized_topics;
    const isStaff = Discourse.User.currentProp('staff');

    const categories = Discourse.Category.list().reject((c) => {
      if (c.get('parentCategory.show_subcategory_list')) { return true; }
      if (hideUncategorized && c.get('isUncategorizedCategory') && !isStaff) { return true; }
      return false;
    });

    return this.attach('cat-categories', { categories });

  },


  panelContents() {
    const { currentUser } = this;
    const results = [];

    results.push(this.listCategories());
    
    return results;
  },


  html() {
    return this.attach('cat-panel', { contents: () => this.panelContents() });
  },

  clickOutside() {
    this.sendWidgetAction('toggleHamburger');
  }
});
