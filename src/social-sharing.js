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

let defaultConfig = variables.variables.defaultOptions;
let options;

module.exports = {
  init: function(config) {

    // check if passed config is type object.
    options = typeof config === 'undefined' || typeof config !== 'object' ? defaultConfig : config;
    
    // from now on use options
    let orientation = typeof options.orientation === 'undefined' ? defaultConfig.orientation : options.orientation;
    let distanceFromTop = typeof options.distanceFromTop === 'undefined' ? defaultConfig.distanceFromTop : options.distanceFromTop;
    let buttonMobileSize = typeof options.buttonMobileSize === 'undefined' ? defaultConfig.buttonMobileSize : options.buttonMobileSize;
    let buttonDesktopSize = typeof options.buttonDesktopSize === 'undefined' ? defaultConfig.buttonDesktopSize : options.buttonDesktopSize;
    let buttonRoundness = typeof options.buttonRoundness === 'undefined' ? defaultConfig.buttonRoundness : options.buttonRoundness;
    let buttonGreyscale = typeof options.buttonGreyscale === 'undefined' ? defaultConfig.buttonGreyscale : options.buttonGreyscale;
    let closeBtn = typeof options.closeBtn === 'undefined' ? defaultConfig.closeBtn : options.closeBtn;
    let googleAPIKey = typeof options.googleAPIKey === 'undefined' ? defaultConfig.googleAPIKey : options.googleAPIKey;
    
    // socials obj type
    let facebook = typeof options.socials === 'undefined' || typeof options.socials.facebook === 'undefined' ? defaultConfig.socials.facebook : options.socials.facebook;
    let twitter = typeof options.socials === 'undefined' || typeof options.socials.twitter === 'undefined' ? defaultConfig.socials.twitter : options.socials.twitter;
    let googleplus = typeof options.socials === 'undefined' || typeof options.socials.googleplus === 'undefined' ? defaultConfig.socials.googleplus : options.socials.googleplus;
    let pinterest = typeof options.socials === 'undefined' || typeof options.socials.pinterest === 'undefined' ? defaultConfig.socials.pinterest : options.socials.pinterest;
    let linkedin = typeof options.socials === 'undefined' || typeof options.socials.linkedin === 'undefined' ? defaultConfig.socials.linkedin : options.socials.linkedin;

    options = {
      orientation: orientation,
      googleAPIKey: googleAPIKey,
      distanceFromTop: distanceFromTop,
      buttonMobileSize: buttonMobileSize,
      buttonDesktopSize: buttonDesktopSize,
      buttonRoundness: buttonRoundness,
      buttonGreyscale: buttonGreyscale,
      closeBtn: closeBtn,
      socials: {
        facebook,
        twitter,
        googleplus,
        pinterest,
        linkedin
      }
    }

    // start up the library
    initConfig(options);

  }
}

function initConfig(config) {

  window.onload = function() {

    let buttonContainer;
    buttonContainer = document.createElement('div');
    buttonContainer.id = 'social_button_container';
    buttonContainer.className = 'social_buttons_' + config.orientation;
    buttonContainer.style.top = config.distanceFromTop + 'vh';

    //  create buttons in this! order
    if (config.socials.facebook.enabled) {
        buttonContainer.appendChild(html_elements.createButton('facebook'));
    }
    if (config.socials.twitter.enabled) {
        buttonContainer.appendChild(html_elements.createButton('twitter'));
    }
    if (config.socials.googleplus.enabled) {
        buttonContainer.appendChild(html_elements.createButton('googleplus'));
    }
    if (config.socials.pinterest.enabled) {
        buttonContainer.appendChild(html_elements.createButton('pinterest'));
    }
    if (config.socials.linkedin.enabled) {
        buttonContainer.appendChild(html_elements.createButton('linkedin'));
    }
    if (config.closeBtn == true) {
        buttonContainer.appendChild(html_elements.create_close_btn_html(options.orientation));
    }

    variables.variables.body.appendChild(buttonContainer);

    html_elements.setButtonSize(options.buttonDesktopSize, options.buttonMobileSize);
    html_elements.setBorderRadius(buttonContainer, options.buttonRoundness, options.orientation);

    if (config.socials.facebook.enabled) {
      document.querySelector('#facebook_button > a').addEventListener('click',function(){
        core_functions.openFacebook(options.socials.facebook.name, options.socials.facebook.caption, options.socials.facebook.description, options.socials.facebook.url);
      });
    }

    if (config.socials.twitter.enabled) {
      document.querySelector('#twitter_button > a').addEventListener('click',function(){
        core_functions.openTwitter(options.socials.twitter.text, options.socials.twitter.hashtag, options.socials.twitter.url, options.socials.twitter.screenName, options.googleAPIKey);
      });
    }

    if (config.socials.pinterest.enabled) {
      document.querySelector('#pinterest_button > a').addEventListener('click',function(){
        core_functions.openPinterest();
      });
    }

    if (config.socials.googleplus.enabled) {
      document.querySelector('#googleplus_button > a').addEventListener('click',function(){
        core_functions.openGooglePlus(options.socials.googleplus.url);
      });
    }

    if (config.socials.linkedin.enabled) {
      document.querySelector('#linkedin_button > a').addEventListener('click',function(){
        core_functions.openLinkedIn(options.socials.linkedin.url);
      });
    }

    if (config.socials.linkedin.enabled) {
      document.querySelector('#closeBtn-soc-share').addEventListener('click',function(){
        html_elements.toggleClose(options.orientation);
      });
    }
  }
}

window.onresize = function() {
  html_elements.setButtonSize(options.buttonDesktopSize, options.buttonMobileSize)
}
