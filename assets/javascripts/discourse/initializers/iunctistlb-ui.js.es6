import { withPluginApi } from 'discourse/lib/plugin-api';
import { onToolbarCreate } from 'discourse/components/d-editor';

function initializePlugin(api)
{

    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "adm_ui_button",
          group: "extras",
          icon: "indent",
          perform: e => e.applySurround('[adm]', '[/adm]', 'floatl_ui_default_text')
        });
      });


}

export default
{
  name: 'iunctistlb-ui',
  initialize(container)
  {
    withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi(container) });
  }
};
