import { registerUnbound } from 'discourse-common/lib/helpers';

var get = Em.get,
    escapeExpression = Handlebars.Utils.escapeExpression;

export function categoryBadgeHTML(category, opts) {
  opts = opts || {};

  let categoryID = escapeExpression(get(category, 'id'));
  let categoryName = escapeExpression(get(category, 'name'));
  let url = opts.url ? opts.url : Discourse.getURL("/c/") + Discourse.Category.slugFor(category); 
  let color = escapeExpression(get(category, 'color'));
  
  return `<a class="catid-fon" style="background-color:${color};" title="${categoryName}" href="${url}">${categoryName}</a>`;
}

export function categoryLinkHTML(category, options) {
  var categoryOptions = {};
  return new Handlebars.SafeString(categoryBadgeHTML(category, categoryOptions));
}

registerUnbound('catid-fon', categoryLinkHTML);
