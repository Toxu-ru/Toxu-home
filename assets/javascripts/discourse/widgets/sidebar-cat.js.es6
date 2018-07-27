import { createWidget, applyDecorators } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';
import DiscourseURL from 'discourse/lib/url';
import { ajax } from 'discourse/lib/ajax';


const flatten = array => [].concat.apply([], array);

export default createWidget('sidebar-cat', {
  tagName: 'div.cat-panel',

  lookupCount(type) {
    const tts = this.register.lookup("topic-tracking-state:main");
    return tts ? tts.lookupCount(type) : 0;
  },

  showUserDirectory() {
    if (!this.siteSettings.enable_user_directory) return false;
    if (this.siteSettings.hide_user_profiles_from_public && !this.currentUser)
      return false;
    return true;
  },

  generalLinks() {
    const { siteSettings } = this;
    const links = [];


    links.push({
      route: "discovery.latest",
      className: "latest-topics-link",
      label: "filters.latest.title",
      title: "filters.latest.help",
      icon: "newspaper-o"
    });

    if (this.currentUser) {
      links.push({
        route: "discovery.new",
        className: "new-topics-link",
        labelCount: "filters.new.title_with_count",
        label: "filters.new.title",
        title: "filters.new.help",
        count: this.lookupCount("new"),
      icon: "braille"
      });

      links.push({
        route: "discovery.unread",
        className: "unread-topics-link",
        labelCount: "filters.unread.title_with_count",
        label: "filters.unread.title",
        title: "filters.unread.help",
        count: this.lookupCount("unread"),
      icon: "object-ungroup"
      });
    }

    links.push({
      route: "discovery.top",
      className: "top-topics-link",
      label: "filters.top.title",
      title: "filters.top.help",
      icon: "free-code-camp"
      
    });

     links.push({
      route: "discovery.categories",
      className: "top-cat",
      label: "filters.categories.title",
      title: "filters.categories.title",
      icon: "object-group "
      
    });

    const extraLinks = flatten(
      applyDecorators(this, "generalLinks", this.attrs, this.state)
    );
    return links.concat(extraLinks).map(l => this.attach("link", l));
},
 
  panelContents() {
    const { currentUser } = this;
    const results = [];

  
    results.push(
      this.attach("cat-panel", {
        name: "general-links",
        contents: () => this.generalLinks()
      })
    );


results.push(this.listCategories());

    return results;
  },
 

  listCategories() {
  // const hideUncategorized = !this.siteSettings.allow_uncategorized_topics;
  // const isStaff = Discourse.User.currentProp('staff');

  const maxCategoriesToDisplay = 6;
  const categoriesList = this.site
  .get("categoriesByCount")
   let categories = [];
   let showMore = categoriesList.length > maxCategoriesToDisplay;



 // const categories = Discourse.Category.list().reject((c) => {
 //     if (c.get('parentCategory.show_subcategory_list')) { return true; }
 //     if (hideUncategorized && c.get('isUncategorizedCategory') && !isStaff) { return true; }
 //     return false;
 //  });


 if (this.currentUser) {
      let categoryIds = this.currentUser.get("top_category_ids") || [];
      categoryIds = categoryIds.concat(categoriesList.map(c => c.id)).uniq();

      showMore = categoryIds.length > maxCategoriesToDisplay;
      categoryIds = categoryIds.slice(0, maxCategoriesToDisplay);

      categories = categoryIds.map(id => {
        return categoriesList.find(c => c.id === id);
      });
    } else {
      showMore = categoriesList.length > maxCategoriesToDisplay;
      categories = categoriesList.slice(0, maxCategoriesToDisplay);
    }



    return this.attach('cat-categories', { categories, showMore });

    },





  html() {
    return this.attach('cat-panel', { contents: () => this.panelContents() });
  },

  clickOutside() {
    this.sendWidgetAction('toggleHamburger');
  }
});
