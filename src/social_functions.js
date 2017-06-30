import Helpers from './helpers.js';
import Variables from './variables.js';

let helpers = new Helpers();
let variables = new Variables();
let vars = variables.variables;
let m_config = vars.m_config;
let socialButtons = vars.socialButtons;

export default class CoreFunctions {
  constructor() {
    this.openFacebook = function(name, caption, description, link) {

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

    this.openTwitter = function(text, hashtag, link, screenName, optionsKey) {

      //  define default values
      text = typeof text !== 'undefined' ? text : encodeURI(helpers.getContentByMetaTagName('og:title', 'property'));
      hashtag = typeof hashtag !== 'undefined' ? hashtag : encodeURI(helpers.getContentByMetaTagName('og:title', 'property'));
      link = typeof link !== 'undefined' ? link : window.location.href;
      screenName = typeof screenName !== 'undefined' ? screenName : encodeURI(helpers.getContentByMetaTagName('og:title', 'property'));
      console.log(optionsKey);
      helpers.defineShortPageUrl(link, optionsKey)
        .then(
          function(response) {
            return window.open('https://twitter.com/intent/tweet?text=' + text + '&hashtags=' + hashtag + '&url=' + response + '&screen_name=' + screenName, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
          }
        );
    }

    this.closePinterest = function() {
      document.getElementById('backdrop').remove();
      vars.body.style.overflow = 'auto';
    }

    this.openGooglePlus = function(url) {
      let g_url;
      if (typeof url === 'undefined') {
        g_url = window.location.href;
      } else {
        g_url = url;
      }
      return window.open('https://plus.google.com/share?url=' + g_url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    }

    this.openLinkedIn = function(url) {
      let link_url;
      if (typeof url === 'undefined') {
         link_url = window.location.href;
      } else {
        link_url = url;
      }
      return window.open('https://www.linkedin.com/cws/share?url=' + link_url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    }

    this.openPinterest = function() {
      var body = vars.body;
      var backDrop = vars.backDrop;
      var images = vars.images;
      vars.imgs = images;

      //  disable scroll on main page
      body.style.overflow = 'hidden';

      //  create backdrop and header
      backDrop = document.createElement('div');
      backDrop.id = 'backdrop';
      backDrop.innerHTML += vars.templates.pinHeader;

      //  create body
      var pinBody = document.createElement('div');
      pinBody.id = 'masonry-wall';
      backDrop.appendChild(pinBody);
      console.log(images);
      //  loop through images
      for (var imageIndex = 0; imageIndex < images.length; imageIndex++) {
        var image = {};
        console.log(images[imageIndex].currentSrc);
        image.Url = images[imageIndex].currentSrc;
        image.width = images[imageIndex].width;
        image.height = images[imageIndex].height;
        if (images[imageIndex].alt.length > 0) {
          image.text = images[imageIndex].alt;
        } else if (images[imageIndex].title.length > 0) {
          image.text = images[imageIndex].title;
        } else {
          image.text = helpers.getContentByMetaTagName('description', 'name');
        }


        //  create thumbnail
        var thumb = document.createElement('span');
        thumb.className = 'brick';
        var thumbWrapper = document.createElement('div');
        thumbWrapper.innerHTML = vars.templates.thumb.replace('{{imageUrl}}', image.Url).replace('{{index}}', imageIndex).replace('{{dimensions}}', image.width + ' x ' + image.height);

        //  add thumbnail text
        var thumbText = document.createElement('div');
        thumbText.className = 'thumb_text';
        thumbText.innerHTML = '<span>' + image.text + '</span>';
        thumbWrapper.appendChild(thumbText);

        //  add thumbnail link
        var thumbLink = document.createElement('div');
        thumbLink.className = 'thumb_link';
        thumbLink.innerHTML = '<span>' + window.location.href.split('//')[1] + '</span>';
        thumbWrapper.appendChild(thumbLink);
        thumb.appendChild(thumbWrapper);

        //  append thumb to pinterest body
        pinBody.appendChild(thumb);
      }

      body.appendChild(backDrop);


      var PureMasonry = require('pure-masonry-js');
      PureMasonry.init(m_config);

      document.getElementById('closePinterest').addEventListener('click', this.closePinterest);

      var allSpans = document.querySelectorAll('span[data-index]');
      for (var i = 0; i < allSpans.length; i++) {
        allSpans[i].addEventListener('click', function() {
          let imags = images;
          helpers.callPinterest(this, imags);
        });
      }
    }
  }
}
