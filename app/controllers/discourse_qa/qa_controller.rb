module DiscourseQa
	class QaController < ApplicationController

		def my_page
			render :json => { name: "Для sdfsdfsdf нужен сайт Toxu.ru... " }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end
