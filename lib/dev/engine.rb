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

module DiscourseLevel
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseLevel

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseLevel::Engine, at: "/"
		end
    end
  end
end

module DiscourseDonate
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseDonate

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseDonate::Engine, at: "/"
		end
    end
  end
end

module DiscoursePravila
  class Engine < ::Rails::Engine
    isolate_namespace DiscoursePravila

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscoursePravila::Engine, at: "/"
		end
    end
  end
end

module DiscourseAsk
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseAsk

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseAsk::Engine, at: "/"
		end
    end
  end
end

module DiscourseContacts
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseContacts

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseContacts::Engine, at: "/"
		end
    end
  end
end

module DiscourseFacts
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseFacts

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseFacts::Engine, at: "/"
		end
    end
  end
end
