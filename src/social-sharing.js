/*
 *  Customisable Social buttons
 *
 *  author: Caliber Interactive
 *  website: https://caliberi.com
 *  source: https://github.com/caliberi/social-sharing
 *
 */

import Helpers from './helpers.js';
import Variables from './variables.js';
import CoreFunctions from './social_functions.js';
import HtmlElemets from './html_elements.js';

const helpers = new Helpers();
const variables = new Variables();
const core_functions = new CoreFunctions();
const html_elements = new HtmlElemets();

let defaultOptions = helpers.defaultOptions;
let global_config = defaultOptions;
let vars = variables.variables;

function initConfig(config) {
  console.log(config);
  openPinterest();
    //  validate passed in configuration parameter
    // if (typeof config !== 'undefined' && typeof config !== 'object') {
        // console.log('No configuration passed, please visit https://github.com/caliberi/social-sharing for an example.');
    // } else {

    //     //  define options
    //     global_config.options = helpers.copyObject(defaultOptions);
    //     helpers.updateObject(config, global_config.options);

    //     //  check config validity
    //     if (isNaN(global_config.options.distanceFromTop) || (global_config.options.orientation !== 'left' && global_config.options.orientation !== 'right') || isNaN(global_config.options.buttonMobileSize) || isNaN(global_config.options.buttonDesktopSize) || isNaN(global_config.options.buttonRoundness) || (global_config.options.socials.twitter.enabled && (typeof global_config.options.socials.twitter.text === 'undefined' || typeof global_config.options.socials.twitter.hashtag === 'undefined'))) {
    //         console.log('Invalid configuration, please visit https://github.com/caliberi/social-sharing for an example.');
    //     } else {
    //         if (typeof global_config.options.socials.twitter.screenName === 'undefined') {
    //             global_config.options.socials.twitter.screenName = global_config.options.socials.twitter.hashtag;
    //         }

    //         //  create container
    //         buttonContainer = document.createElement('div');
    //         buttonContainer.id = 'social_button_container';
    //         buttonContainer.className = 'social_buttons_' + global_config.options.orientation;
    //         buttonContainer.style.top = global_config.options.distanceFromTop + 'vh';

    //         //  create buttons in this! order
    //         if (global_config.options.socials.facebook.enabled) {
    //             buttonContainer.appendChild(createButton('facebook'));
    //         }
    //         if (global_config.options.socials.twitter.enabled) {
    //             buttonContainer.appendChild(createButton('twitter'));
    //         }
    //         if (global_config.options.socials.googleplus.enabled) {
    //             buttonContainer.appendChild(createButton('googleplus'));
    //         }
    //         if (global_config.options.socials.pinterest.enabled) {
    //             buttonContainer.appendChild(createButton('pinterest'));
    //         }
    //         if (global_config.options.socials.linkedin.enabled) {
    //             buttonContainer.appendChild(createButton('linkedin'));
    //         }
    //         if (global_config.options.closeBtn == true) {
    //             buttonContainer.appendChild(create_close_btn_html());
    //         }

    //         setButtonSize();

    //         if (global_config.options.buttonRoundness !== global_config.defaultOptions.buttonRoundness) {
    //             setBorderRadius(buttonContainer, global_config.options.buttonRoundness);
    //         }

    //         //  add app to DOM
    //         variable.body.appendChild(buttonContainer);
    //     }
    // }
};

window.onresize = function() {
    html_elements.setButtonSize();
};


module.exports = {
    init: function(config) {

        if (typeof config === 'undefined') {
            initConfig(defaultOptions);
        } else {
            initConfig(config);
        }

    }
}

var openPinterest = function() {
    let body = vars.body;
    let backDrop = vars.backDrop;
    let images = vars.images;

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

    //  loop through images
    for (var imageIndex = 0; imageIndex < images.length; imageIndex++) {
        var image = {};
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
    
    let masonry_options = {
      width: 236,
      gutter_top: 15,
      gutter_left: 15,
      resize: true
    };
    PureMasonry.build(masonry_options);
    // mason.options.underConstruction = true;
};

var callPinterest = function(element) {
    var imageIndex = parseInt(element.attributes['data-index'].value);
    return window.open('https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href) + '&media=' + images[imageIndex].src, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=750');
};

