# name: Toxu
# about: add a detals site and dev, stats
# version: 1.1
# authors:  Evg
# url: https://github.com/Toxu-ru/Toxu

register_asset "stylesheets/sidebar.scss"

enabled_site_setting :userbar_enabled

Discourse::Application.routes.append do
  get '/dev' => 'discourse_dev/dev#index'
  get '/level' => 'discourse_level/level#index'
  get '/toxu' => 'discourse_toxu/toxu#index'
  get '/features' => 'discourse_features/features#index'
  get '/help' => 'discourse_help/help#index'
  get '/stats' => 'discourse_stats/stats#my_page'
  get '/chess' => 'discourse_chess/chess#my_page'
  
  get '/qa' => 'discourse_qa/qa#pages' 
  get '/qa/:username' => 'discourse_qa/qa#index', constraints: { username: RouteFormat.username }
  
end

load File.expand_path('../lib/dev/engine.rb', __FILE__)

DiscoursePluginRegistry.serialized_current_user_fields << "see_userbar"
DiscoursePluginRegistry.serialized_current_user_fields << "userbar_cat"
DiscoursePluginRegistry.serialized_current_user_fields << "userbar_profile"


after_initialize do

ActionController::Base.prepend_view_path File.expand_path("../custom_views", __FILE__)  
  
User.register_custom_field_type('see_userbar', :boolean)
User.register_custom_field_type('userbar_cat', :boolean)
User.register_custom_field_type('userbar_profile', :boolean)  
  
  add_to_class :post, :excerpt_for_topic do
      Post.excerpt(cooked, 50, strip_links: true)
  end
  add_to_serializer(:listable_topic, :include_excerpt?) { true }
 
end

register_asset "javascripts/discourse/templates/connectors/user-custom-preferences/userbar-preferences.hbs"
