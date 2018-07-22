import { withPluginApi } from 'discourse/lib/plugin-api';
import { onToolbarCreate } from 'discourse/components/d-editor';

function initializePlugin(api)
{
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.iunctistlb_ui_enabled) {

    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "floatl_ui_button",
          group: "extras",
          icon: "indent",
          perform: e => e.applySurround('[adm]', '[/adm]', "adm вставка")
        });
      });


  }
}

export default
{
  name: 'iunctistlb-ui',
  initialize(container)
  {
    withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi(container) });
  }
};
