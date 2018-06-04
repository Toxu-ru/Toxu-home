module DiscourseQa
	
	class QaController < ApplicationController

#  requires_login only: [:live_post_counts]

  skip_before_action :check_xhr, only: [:index]

  def index
 #  return redirect_to path('/login') if SiteSetting.login_required? && current_user.nil?
    @qa = About.new 
    respond_to do |format|
      format.html do
        render :index  
      end
     format.json do
       render_serialized(@qa, AboutSerializer)
     end
    end
  end
		
def pages
    @qa = About.new 
    respond_to do |format|
      format.html do
        render :pages  
      end
     format.json do
       render_serialized(@qa, AboutSerializer)
     end
    end
  end		
		

end
end
