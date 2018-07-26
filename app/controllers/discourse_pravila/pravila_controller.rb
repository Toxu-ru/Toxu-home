module DiscoursePravila
	
	class PravilaController < ApplicationController

  skip_before_action :check_xhr, only: [:index]

  def index

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
