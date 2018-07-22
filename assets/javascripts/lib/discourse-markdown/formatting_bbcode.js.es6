import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => opts.features["iunctis-bbcode"] = true);

function wrap(tag, attr, callback) {
  return function(startToken, finishToken, tagInfo) {
    startToken.tag = finishToken.tag = tag;
    startToken.content = finishToken.content = '';

    startToken.type = 'bbcode_open';
    finishToken.type = 'bbcode_close';

    startToken.nesting = 1;
    finishToken.nesting = -1;

    startToken.attrs = [[attr, callback ? callback(tagInfo) : tagInfo.attrs._default]];
  };
}

function setupMarkdownIt(md) {
  const ruler = md.inline.bbcode.ruler;

  ruler.push('left', {
    tag: 'left',
    wrap: wrap('div', 'class', ()=>'bbcodeleft')
  });


  ruler.push('right', {
    tag: 'right',
    wrap: wrap('div', 'class', ()=>'bbcoderight')
  });

  
  ruler.push('adm', {
    tag: 'adm',
    wrap: wrap('div', 'class', ()=>'bbcodeadm')
  });

}

export function setup(helper) {

  helper.whiteList([
    'div.bbcodeleft',
    'div.bbcoderight',
    'div.bbcodeadm'
  ]);

  if (helper.markdownIt) {
    helper.registerPlugin(setupMarkdownIt);
    return;
  }

  const builders = requirejs('pretty-text/engines/discourse-markdown/bbcode').builders;
  const { register, replaceBBCode, rawBBCode, replaceBBCodeParamsRaw } = builders(helper);

  replaceBBCode("left", contents => ['div', {'class': 'bbcodeleft'}].concat(contents));
  replaceBBCode("right", contents => ['div', {'class': 'bbcoderight'}].concat(contents));
  replaceBBCode("adm", contents => ['div', {'class': 'bbcodeadm'}].concat(contents));

}
