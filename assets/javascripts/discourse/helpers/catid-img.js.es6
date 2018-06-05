import { registerUnbound } from 'discourse-common/lib/helpers';

var get = Em.get,
    escapeExpression = Handlebars.Utils.escapeExpression;

export function categoryBadgeHTML(category, opts) {
  opts = opts || {};

  let categoryID = escapeExpression(get(category, 'id'));
  let img = Discourse.Category.findById(categoryID).uploaded_logo.url;
  let categoryName = escapeExpression(get(category, 'name'));
  return `<img src="${img}" alt="${categoryName}" class="catid-logo">`;
}

export function categoryLinkHTML(category, options) {
  var categoryOptions = {};
  return new Handlebars.SafeString(categoryBadgeHTML(category, categoryOptions));
}

registerUnbound('catid-img', categoryLinkHTML);
