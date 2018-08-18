import { withPluginApi } from 'discourse/lib/plugin-api';
import RawHtml from 'discourse/widgets/raw-html'; 
 
function attachComm(api) {
 
        api.decorateWidget('post:after', function(helper) {
        const model = helper.getModel();
        if (model.attachCommentToggle && model.hiddenComments > 0) {
          let type = Number(Discourse.SiteSettings.qa_comments_default) > 0 ? 'more' : 'all';
          return helper.attach('link', {
            action: 'showComments',
            actionParam: model.answerId,
            rawLabel: I18n.t(`topic.comment.show_comments.${type}`, { count: model.hiddenComments }),
            className: 'show-comments'
          });
        }
      });
      api.reopenWidget('post-stream', {
        buildKey: () => 'post-stream',
        defaultState(attrs, state) {
          let defaultState = this._super(attrs, state);
          defaultState['showComments'] = [];
          return defaultState;
        },
        showComments(answerId) {
          let showComments = this.state.showComments;
          if (showComments.indexOf(answerId) === -1) {
            showComments.push(answerId);
            this.state.showComments = showComments;
            this.appEvents.trigger("post-stream:refresh", { force: true });
          }
        },
        html(attrs, state) {
          let answerId = null;
          let showComments = state.showComments;
          let defaultComments = Number(Discourse.SiteSettings.qa_comments_default);
          let commentCount = 0;
          let lastVisible = null;
          let posts = attrs.posts || [];
          let postArray = posts.toArray();
          
          
          postArray.forEach((p, i) => {
            if (p.reply_to_post_number) {
              commentCount++;
              p['comment'] = true;
              p['showComment'] = (showComments.indexOf(answerId) > -1) || (commentCount <= defaultComments);
              p['answerId'] = answerId;
              p['attachCommentToggle'] = false;
              if (p['showComment']) lastVisible = i;
              if ((!postArray[i+1] ||
                  !postArray[i+1].reply_to_post_number) &&
                  !p['showComment']) {
                postArray[lastVisible]['answerId'] = answerId;
                postArray[lastVisible]['attachCommentToggle'] = true;
                postArray[lastVisible]['hiddenComments'] = commentCount - defaultComments;
              }
            } else {
              p['attachCommentToggle'] = false;
              answerId = p.id;
              commentCount = 0;
              lastVisible = i;
            }
          });
          
         attrs.posts = postArray;
          
          
          return this._super(attrs, state);
        }
      });

      api.includePostAttributes(
        'reply_to_post_number',
        'topic',
        'comment',
        'showComment',
        'answerId',
        'lastComment'
      );


 
 api.addPostClassesCallback((attrs) => {
// return attrs.reply_to_post_number ? ["comment"] : ["answer"];
  
          if (attrs.comment) {
            let classes = ["comment"];
            if (attrs.showComment) {
              classes.push('show');
            }
            return classes;
          } else {
            return ["answer"];
          }  
  
});
 
 api.addPostClassesCallback((attrs) => {
 return attrs.user_deleted ? ["del"] : ["nodel"]; 
});  
 
 
 api.addSharingSource({
    id: "vk",
    icon: "vk",
    generateUrl: function(link, title) {
      return "http://vk.com/share.php?url=" + encodeURIComponent(link)  + "&title=" + encodeURIComponent(title);
    },
    shouldOpenInPopup: true,
    popupHeight: 265
  });
 
}
  
export default {
  name: 'alert',
  initialize(container) {
      withPluginApi('0.1', attachComm);
             }
};
