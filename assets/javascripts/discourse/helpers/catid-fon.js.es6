import { registerUnbound } from 'discourse-common/lib/helpers';

var get = Ember.get,
    escapeExpression = Handlebars.Utils.escapeExpression;

export function categoryBadgeHTML(category, opts) {
  opts = opts || {};

    if ((!category) ||
        (!opts.allowUncategorized &&
         Ember.get(category, 'id') === Discourse.Site.currentProp("uncategorized_category_id") &&
         Discourse.SiteSettings.suppress_uncategorized_badge
        )
    ) return "";  
    
    
  let categoryID = escapeExpression(get(category, 'id'));
//  let categoryName = escapeExpression(get(category, 'name'));
//  let url = opts.url ? opts.url : Discourse.getURL("/c/") + Discourse.Category.slugFor(category); 
  let color = escapeExpression(get(category, 'color'));
  
  return `${color}`;
}

export function categoryLinkHTML(category, options) {
  var categoryOptions = {};
  return new Handlebars.SafeString(categoryBadgeHTML(category, categoryOptions));  
    
}

registerUnbound('catid-fon', categoryLinkHTML);
