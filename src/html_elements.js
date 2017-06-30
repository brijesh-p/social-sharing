import Variables from './variables.js';
import Helpers from './helpers.js';

let variables = new Variables();
let helpers = new Helpers();
let vars = variables.variables;
let socialButtons = vars.socialButtons;

export default class HtmlElements {
  constructor() {
    this.create_close_btn_html = function(orientation) {
      // where the button to close should be pointing
      var radiusOrientation = orientation === 'right' ? 'left' : 'right';

      // div to contain innerHtml
      var closeBtnDiv = document.createElement('div');
      closeBtnDiv.id = 'closeBtn-soc-share';
      closeBtnDiv.className = 'soc-share-control '+ radiusOrientation;
      closeBtnDiv.innerHTML = '<div class="arrow-close"></div>';

      return closeBtnDiv;
    }

    this.toggleClose = function(orient) {

      let soc_buttons = document.getElementsByClassName('soc_button_soc_container');
      let social_button_container = document.getElementById('closeBtn-soc-share');

      if (social_button_container.classList.contains('toggled')) {
        social_button_container.classList.remove('toggled');
      } else {
        social_button_container.classList += ' toggled';
      }

      for (let i = 0; i < soc_buttons.length; i++) {
        if(social_button_container.classList.contains('toggled')) {
          let where = orient === 'right' ? '100%' : '-100%'; 
          soc_buttons[i].style.left = where;
        } else {
          soc_buttons[i].style.left = '0px';
        }
      }

    }

    this.setButtonSize = function(sizeD, sizeM) {
      var svgs = document.getElementById('social_button_container').getElementsByTagName('svg');
      var buttonWidth = vars.body.clientWidth > 768 ? sizeD : sizeM;
      for (var i = 0; i < svgs.length; i++) {
        svgs[i].style.width = buttonWidth + 'px';
      }
    };

    this.setBorderRadius = function(buttonContainer, buttonRoundness, orientation) {
      //  define which side of the buttons the radius will change
      var radiusOrientation = orientation === 'right' ? 'left' : 'right';

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
    }

    this.createButton = function(social) {
      //  initialise facebook
      if (social === 'facebook') {

        let fbAppId = helpers.getContentByMetaTagName('fb:app_id', 'property');

        if (typeof fbAppId !== 'undefined') {
          window.fbAsyncInit = function() {
            FB.init({
              appId: fbAppId,
              xfbml: true,
              version: 'v1.0'
            });
            FB.AppEvents.logPageView();
          };

          (function(d, s, id) {
            var js;
            var fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
              return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_GB/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        } else {
          console.log('Facebook App Id not provided!');
        }
      }

      //  create buttons and add templates
      socialButtons[social + '_button'] = document.createElement('div');
      socialButtons[social + '_button'].id = social + '_button';
      socialButtons[social + '_button'].className = 'soc_button_soc_container';
      socialButtons[social + '_button'].innerHTML = vars.templates[social];
      if (vars.options.buttonGreyscale) {
        colours[social].fill(Math.ceil(0.299 * colours[social][0] + 0.587 * colours[social][1] + 0.114 * colours[social][2]));
      }
      socialButtons[social + '_button'].children[0].style['background-color'] = 'rgb(' + vars.colours[social][0] + ', ' + vars.colours[social][1] + ', ' + vars.colours[social][2] + ')';
      return socialButtons[social + '_button'];
    }
  }
}
