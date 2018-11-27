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
  get '/pravila' => 'discourse_pravila/pravila#index'
  get '/features' => 'discourse_features/features#index'
  get '/help' => 'discourse_help/help#index'
  get '/donate' => 'discourse_donate/donate#index'
  get '/stats' => 'discourse_stats/stats#my_page'
  get '/chess' => 'discourse_chess/chess#my_page'
  get '/ask' => 'discourse_ask/ask#index'
  get '/contacts' => 'discourse_contacts/contacts#index'
    
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
 
register_editable_user_custom_field :userbar_cat if defined? register_editable_user_custom_field
  
  add_to_class :post, :excerpt_for_topic do
      Post.excerpt(cooked, 300, strip_links: true)
  end
  add_to_serializer(:listable_topic, :include_excerpt?) { true }
 
  
#данные для бара  
  
   PLUGIN_NAME = "discourse-profile-widget".freeze
  
  
 module ::DiscourseProfileWidget
		class Engine < ::Rails::Engine
			engine_name PLUGIN_NAME
			isolate_namespace DiscourseProfileWidget
		end
end

	class DiscourseProfileWidget::ProfilewidgetController < ::ApplicationController
		skip_before_action :preload_json, :check_xhr

		def index
			user_id = params[:user_id].to_i

			sql = sql = "SELECT * FROM user_stats WHERE user_id = #{user_id}"
			user_stats = ActiveRecord::Base.connection.execute(sql)
			read_time = user_stats[0]["time_read"]
			result = {
				'credit' => read_time
			}
			render json: result
			
		end
	end

	Discourse::Application.routes.prepend do
		mount ::DiscourseProfileWidget::Engine, at: "/toxudata"
	end

	DiscourseProfileWidget::Engine.routes.draw do
		get "data.json" => "profilewidget#index"
end 
 
end

register_svg_icon "fa-vk" if respond_to?(:register_svg_icon)
register_asset "javascripts/discourse/templates/connectors/user-custom-preferences/userbar-preferences.hbs"
