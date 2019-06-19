# name: Toxu-home
# about: add a detals site and dev, stats
# version: 1.0
# authors:  Evg
# url: https://github.com/Toxu-ru/Toxu-home

register_asset "stylesheets/home.scss"

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
  get '/facts' => 'discourse_facts/facts#index'
  get '/qa' => 'discourse_qa/qa#pages' 
  get '/qa/:username' => 'discourse_qa/qa#index', constraints: { username: RouteFormat.username }
  
end

load File.expand_path('../lib/dev/engine.rb', __FILE__)

after_initialize do

ActionController::Base.prepend_view_path File.expand_path("../custom_views", __FILE__)  

end
