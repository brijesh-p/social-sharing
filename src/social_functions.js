import Helpers from './helpers.js';
const helpers = new Helpers();

export default class CoreFunctions {
  constructor() {
    this.openFacebook = function(name, link, caption, description) {

        //  define default values
        name = typeof name !== 'undefined' ? name : helpers.getContentByMetaTagName('og:title', 'property');
        link = typeof link !== 'undefined' ? link : helpers.getContentByMetaTagName('og:url', 'property');
        caption = typeof caption !== 'undefined' ? caption : window.location.href;
        description = typeof description !== 'undefined' ? description : helpers.getContentByMetaTagName('og:description', 'property');

        return FB.ui({
            method: 'feed',
            name: name,
            link: link,
            caption: caption,
            description: description
        });
    }

    this.openTwitter = function(text, hashtag, link, screenName) {

        //  define default values
        text = typeof text !== 'undefined' ? text : encodeURI(helpers.getContentByMetaTagName('og:title', 'property'));
        hashtag = typeof hashtag !== 'undefined' ? hashtag : encodeURI(helpers.getContentByMetaTagName('og:title', 'property'));
        link = typeof link !== 'undefined' ? link : window.location.href;
        screenName = typeof screenName !== 'undefined' ? screenName : encodeURI(helpers.getContentByMetaTagName('og:title', 'property'));

        helpers.defineShortPageUrl(link, socialButtons.options.googleAPIKey)
            .then(
                function(response) {
                    return window.open('https://twitter.com/intent/tweet?text=' + text + '&hashtags=' + hashtag + '&url=' + response + '&screen_name=' + screenName, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                }
            );
    }

    this.closePinterest = function() {
      backDrop.remove();
      mason.options.underConstruction = false;
      body.style.overflow = 'auto';
    };

    this.openGooglePlus = function(url) {
      if (typeof url === 'undefined') {
        if (typeof helpers.options.socials.googleplus.url !== 'undefined') {
          url = socialButtons.options.socials.googleplus.url;
        } else {
          url = window.location.href;
        }
      }
      return window.open('https://plus.google.com/share?url=' + url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    }

    this.openLinkedIn = function() {
      if (typeof helpers.options.socials.linkedin.url === 'undefined') {
        helpers.options.socials.linkedin.url = window.location.href;
      }
      return window.open('https://www.linkedin.com/cws/share?url=' + helpers.options.socials.linkedin.url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    }
  }
}
