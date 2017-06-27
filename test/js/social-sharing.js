var SocialSharing =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = function Helpers() {
  _classCallCheck(this, Helpers);

  this.copyObject = function (oldObject) {
    return JSON.parse(JSON.stringify(oldObject));
  };

  this.updateObject = function (sourceObject, targetObject) {
    for (var key in sourceObject) {
      if (sourceObject.hasOwnProperty(key)) {
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object' && targetObject.hasOwnProperty(key)) {
          updateObject(sourceObject[key], targetObject[key]);
        } else {
          targetObject[key] = sourceObject[key];
        }
      }
    }
  };

  this.defineShortPageUrl = function (sourceUrl) {

    //  return promise
    return new Promise(function (resolve, reject) {
      var googleAPIKey = socialButtons.options.googleAPIKey;
      if (typeof googleAPIKey !== 'undefined') {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            resolve(JSON.parse(this.responseText).id);
          } else if (this.readyState === 4 && this.status === 400) {
            console.log('Your Google API Key was not accepted by Google Herself! :-O');
            resolve(sourceUrl);
          }
        };
        var requestUrl = 'https://www.googleapis.com/urlshortener/v1/url?key=' + googleAPIKey;
        var requestBody = JSON.stringify({ longUrl: sourceUrl });
        request.open('POST', requestUrl, true);
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader('Content-length', requestBody.length);
        request.setRequestHeader('Connection', 'close');
        request.onerror = function () {
          reject(Error('Network Error'));
        };
        request.send(requestBody);
        //  return source url if no API key
      } else {
        resolve(sourceUrl);
      }
    });
  };

  this.getContentByMetaTagName = function (c, keyName) {
    for (var b = document.getElementsByTagName('meta'), a = 0; a < b.length; a++) {
      if (c === b[a].name || c === b[a].getAttribute(keyName)) {
        return b[a].content;
      }
    }return false;
  };

  this.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
};

exports.default = Helpers;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

var _variables = __webpack_require__(2);

var _variables2 = _interopRequireDefault(_variables);

var _social_functions = __webpack_require__(3);

var _social_functions2 = _interopRequireDefault(_social_functions);

var _html_elements = __webpack_require__(4);

var _html_elements2 = _interopRequireDefault(_html_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *  Customisable Social buttons
 *
 *  author: Caliber Interactive
 *  website: https://caliberi.com
 *  source: https://github.com/caliberi/social-sharing
 *
 */

var helpers = new _helpers2.default();
var variables = new _variables2.default();
var core_functions = new _social_functions2.default();
var html_elements = new _html_elements2.default();

var defaultOptions = helpers.defaultOptions;
var global_config = defaultOptions;
var vars = variables.variables;

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

window.onresize = function () {
    html_elements.setButtonSize();
};

module.exports = {
    init: function init(config) {

        if (typeof config === 'undefined') {
            initConfig(defaultOptions);
        } else {
            initConfig(config);
        }
    }
};

var openPinterest = function openPinterest() {
    var body = vars.body;
    var backDrop = vars.backDrop;
    var images = vars.images;

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

    var masonry_options = {
        width: 236,
        gutter_top: 15,
        gutter_left: 15,
        resize: true
    };
    PureMasonry.build(masonry_options);
    // mason.options.underConstruction = true;
};

var callPinterest = function callPinterest(element) {
    var imageIndex = parseInt(element.attributes['data-index'].value);
    return window.open('https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href) + '&media=' + images[imageIndex].src, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=750');
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Variables = function Variables() {
  _classCallCheck(this, Variables);

  this.variables = {
    body: document.body,
    images: document.getElementsByTagName('img'),
    buttonContainer: '',
    greyscaleWeight: 0.333,
    templates: {
      facebook: '<a role="button" tabindex="1"><span class="share_wrapper">Share to Facebook</span><span class="icon_wrapper"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><g><path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill-rule="evenodd"></path></g></svg><div><span class="count_wrapper">, Number of shares</span></div></span></a>',
      twitter: '<a role="button" tabindex="1"><span class="share_wrapper">Share to Twitter</span><span class="icon_wrapper"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><g><path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd"></path></g></svg></span></a>',
      pinterest: '<a role="button" tabindex="1"><span class="share_wrapper">Share to Pinterest</span><span class="icon_wrapper"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><g><path d="M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z" fill-rule="evenodd"></path></g></svg></span></a>',
      googleplus: '<a role="button" tabindex="1"><span class="share_wrapper">Share to Google+</span><span class="icon_wrapper"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><g><path d="M12 15v2.4h3.97c-.16 1.03-1.2 3.02-3.97 3.02-2.39 0-4.34-1.98-4.34-4.42s1.95-4.42 4.34-4.42c1.36 0 2.27.58 2.79 1.08l1.9-1.83C15.47 9.69 13.89 9 12 9c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H12zm15 0h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" fill-rule="evenodd"></path></g></svg></span></a>',
      linkedin: '<a role="button" tabindex="1"><span class="share_wrapper">Share to LinkedIn</span><span class="icon_wrapper"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><g><path d="M26 25.963h-4.185v-6.55c0-1.56-.027-3.57-2.175-3.57-2.18 0-2.51 1.7-2.51 3.46v6.66h-4.182V12.495h4.012v1.84h.058c.558-1.058 1.924-2.174 3.96-2.174 4.24 0 5.022 2.79 5.022 6.417v7.386zM8.23 10.655a2.426 2.426 0 0 1 0-4.855 2.427 2.427 0 0 1 0 4.855zm-2.098 1.84h4.19v13.468h-4.19V12.495z" fill-rule="evenodd"></path></g></svg></span></a>',
      pinHeader: '<div id="pinterest_header"><div><div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><g><path d="M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z" fill-rule="evenodd"></path></g></svg></div></div><h1>Choose a Pin to save<span id="closePinterest">&#10006;</span></h1></div>',
      thumb: '<div><img src="{{imageUrl}}"><span role="button" data-index="{{index}}"><svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M0.4830769,0 C0.4830769,0.7721429 1.3253846,1.4328571 2.1376923,1.7842857 L2.1376923,7.3571429 C0.7584615,8.1428571 0,9.7535714 0,11.4285714 L4.2023077,11.4285714 L4.2015385,17.2121429 C4.2015385,17.2121429 4.3415385,19.6592857 5,20 C5.6576923,19.6592857 5.7976923,17.2121429 5.7976923,17.2121429 L5.7969231,11.4285714 L10,11.4285714 C10,9.7535714 9.2415385,8.1428571 7.8615385,7.3571429 L7.8615385,1.7842857 C8.6746154,1.4328571 9.5161538,0.7721429 9.5161538,0 L0.4830769,0 L0.4830769,0 Z" fill="#FFFFFF"></path></g></svg><div>Save</div></span><div class="thumb_dimensions">{{dimensions}}</div></div>'
    },
    colours: {
      facebook: [59, 89, 152],
      twitter: [29, 161, 242],
      pinterest: [203, 33, 36],
      googleplus: [220, 78, 65],
      linkedin: [0, 119, 181]
    },
    defaultOptions: {
      orientation: 'right',
      distanceFromTop: 30,
      buttonMobileSize: 20,
      buttonDesktopSize: 25,
      buttonRoundness: 0,
      buttonGreyscale: false,
      closeBtn: false,
      socials: {
        facebook: {
          enabled: true
        },
        twitter: {
          enabled: true
        },
        googleplus: {
          enabled: false
        },
        pinterest: {
          enabled: false
        },
        linkedin: {
          enabled: false
        }
      }
    }
  };
};

exports.default = Variables;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var helpers = new _helpers2.default();

var CoreFunctions = function CoreFunctions() {
  _classCallCheck(this, CoreFunctions);

  this.openFacebook = function (name, link, caption, description) {

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
  };

  this.openTwitter = function (text, hashtag, link, screenName) {

    //  define default values
    text = typeof text !== 'undefined' ? text : encodeURI(helpers.getContentByMetaTagName('og:title', 'property'));
    hashtag = typeof hashtag !== 'undefined' ? hashtag : encodeURI(helpers.getContentByMetaTagName('og:title', 'property'));
    link = typeof link !== 'undefined' ? link : window.location.href;
    screenName = typeof screenName !== 'undefined' ? screenName : encodeURI(helpers.getContentByMetaTagName('og:title', 'property'));

    helpers.defineShortPageUrl(link, socialButtons.options.googleAPIKey).then(function (response) {
      return window.open('https://twitter.com/intent/tweet?text=' + text + '&hashtags=' + hashtag + '&url=' + response + '&screen_name=' + screenName, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    });
  };

  this.closePinterest = function () {
    backDrop.remove();
    mason.options.underConstruction = false;
    body.style.overflow = 'auto';
  };

  this.openGooglePlus = function (url) {
    if (typeof url === 'undefined') {
      if (typeof helpers.options.socials.googleplus.url !== 'undefined') {
        url = socialButtons.options.socials.googleplus.url;
      } else {
        url = window.location.href;
      }
    }
    return window.open('https://plus.google.com/share?url=' + url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  };

  this.openLinkedIn = function () {
    if (typeof helpers.options.socials.linkedin.url === 'undefined') {
      helpers.options.socials.linkedin.url = window.location.href;
    }
    return window.open('https://www.linkedin.com/cws/share?url=' + helpers.options.socials.linkedin.url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  };
};

exports.default = CoreFunctions;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HtmlElements = function HtmlElements() {
    _classCallCheck(this, HtmlElements);

    this.create_close_btn_html = function () {
        // where the button to close should be pointing
        var radiusOrientation = socialButtons.options.orientation === 'right' ? 'left' : 'right';

        // div to contain innerHtml
        var closeBtnDiv = document.createElement('div');
        closeBtnDiv.id = 'closeBtn-soc-share';
        closeBtnDiv.className = 'soc-share-control';

        window.onload = function () {
            closeBtnDiv.onclick = function foo() {
                toggleClose();
            };
        };

        if (radiusOrientation === 'right') {
            closeBtnDiv.innerHTML = '<div class="arrow-close right"></div>';
        } else {
            closeBtnDiv.innerHTML = '<div class="arrow-close left"></div>';
        }

        return closeBtnDiv;
    };

    this.setButtonSize = function () {
        var svgs = buttonContainer.getElementsByTagName('svg');
        var buttonWidth = variable.body.clientWidth > 768 ? socialButtons.options.buttonDesktopSize : socialButtons.options.buttonMobileSize;
        for (var i = 0; i < svgs.length; i++) {
            svgs[i].style.width = buttonWidth + 'px';
        }
    };

    this.setBorderRadius = function (buttonContainer, buttonRoundness) {
        //  define which side of the buttons the radius will change
        var radiusOrientation = socialButtons.options.orientation === 'right' ? 'left' : 'right';

        //  add border-radius to first and last children of the container
        buttonContainer.firstChild.firstChild.style['border-top-' + radiusOrientation + '-radius'] = buttonRoundness + 'px';
        if (buttonContainer.lastChild.id != 'closeBtn-soc-share') {
            buttonContainer.lastChild.firstChild.style['border-bottom-' + radiusOrientation + '-radius'] = buttonRoundness + 'px';
        } else {
            buttonContainer.lastChild.previousSibling.firstChild.style['border-bottom-' + radiusOrientation + '-radius'] = buttonRoundness + 'px';
        }

        //  create new style for hovering over border-radius elements
        var hoveredRadiusStyle = '#social_button_container > div > a:hover { border-top-' + radiusOrientation + '-radius: ' + buttonRoundness + 'px; border-bottom-' + radiusOrientation + '-radius: ' + buttonRoundness + 'px }';
        var hoveredRadius = document.createElement('style');
        hoveredRadius.appendChild(document.createTextNode(hoveredRadiusStyle));

        //  add new style to button container
        buttonContainer.appendChild(hoveredRadius);
    };

    this.createButton = function (social) {

        //  initialise facebook
        if (social === 'facebook') {

            var fbAppId = socialButtons.options.socials.facebook.fbAppId;
            if (typeof fbAppId === 'undefined' || fbAppId.length === 0) {
                fbAppId = getContentByMetaTagName('fb:app_id', 'property');
            }

            if (typeof fbAppId !== 'undefined') {
                window.fbAsyncInit = function () {
                    FB.init({
                        appId: fbAppId,
                        xfbml: true,
                        version: 'v1.0'
                    });
                    FB.AppEvents.logPageView();
                };

                (function (d, s, id) {
                    var js;
                    var fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.src = '//connect.facebook.net/en_GB/sdk.js';
                    fjs.parentNode.insertBefore(js, fjs);
                })(document, 'script', 'facebook-jssdk');
            } else {
                console.log('Facebook App Id not provided!');
            }
        }

        //  create buttons and add templates
        socialButtons[social + '_button'] = document.createElement('div');
        socialButtons[social + '_button'].id = social + '_button';
        socialButtons[social + '_button'].className = 'soc_button_soc_container';
        socialButtons[social + '_button'].innerHTML = templates[social];
        if (socialButtons.options.buttonGreyscale) {
            colours[social].fill(Math.ceil(0.299 * colours[social][0] + 0.587 * colours[social][1] + 0.114 * colours[social][2]));
        }
        socialButtons[social + '_button'].children[0].style['background-color'] = 'rgb(' + colours[social][0] + ', ' + colours[social][1] + ', ' + colours[social][2] + ')';
        return socialButtons[social + '_button'];
    };
};

exports.default = HtmlElements;

/***/ })
/******/ ]);
//# sourceMappingURL=social-sharing.js.map