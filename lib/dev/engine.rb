module DiscourseDev
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseDev

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseDev::Engine, at: "/"
		end
    end
  end
end

module DiscourseToxu
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseToxu

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseToxu::Engine, at: "/"
		end
    end
  end
end


module DiscourseQa
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseQa

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseQa::Engine, at: "/"
		end
    end
  end
end


module DiscourseFeatures
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseFeatures

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseFeatures::Engine, at: "/"
		end
    end
  end
end

module DiscourseHelp
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseHelp

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseHelp::Engine, at: "/"
		end
    end
  end
end

module DiscourseStats
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseStats

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseStats::Engine, at: "/"
		end
    end
  end
end

module DiscourseChess
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseChess

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseChess::Engine, at: "/"
		end
    end
  end
end
