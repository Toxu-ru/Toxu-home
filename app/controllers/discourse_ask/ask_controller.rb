module DiscourseAsk
	
	class AskController < ApplicationController

#  requires_login only: [:live_post_counts]

  skip_before_action :check_xhr, only: [:index]

  def index
 #  return redirect_to path('/login') if SiteSetting.login_required? && current_user.nil?

    @dev = About.new
    respond_to do |format|
      format.html do
        render :index
      end
     format.json do
       render_serialized(@dev, AboutSerializer)
     end
    end
  end

end
end
