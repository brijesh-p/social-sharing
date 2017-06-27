export default class HtmlElements {

    constructor() {

        this.create_close_btn_html = function() {
            // where the button to close should be pointing
            var radiusOrientation = socialButtons.options.orientation === 'right' ? 'left' : 'right';

            // div to contain innerHtml
            var closeBtnDiv = document.createElement('div');
            closeBtnDiv.id = 'closeBtn-soc-share';
            closeBtnDiv.className = 'soc-share-control';

            window.onload = function() {
                closeBtnDiv.onclick = function foo() {
                    toggleClose();
                }
            }

            if (radiusOrientation === 'right') {
                closeBtnDiv.innerHTML = '<div class="arrow-close right"></div>';
            } else {
                closeBtnDiv.innerHTML = '<div class="arrow-close left"></div>';
            }

            return closeBtnDiv;
        }

        this.setButtonSize = function() {
            var svgs = buttonContainer.getElementsByTagName('svg');
            var buttonWidth = variable.body.clientWidth > 768 ? socialButtons.options.buttonDesktopSize : socialButtons.options.buttonMobileSize;
            for (var i = 0; i < svgs.length; i++) {
                svgs[i].style.width = buttonWidth + 'px';
            }
        };

        this.setBorderRadius = function(buttonContainer, buttonRoundness) {
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
        }

        this.createButton = function(social) {

            //  initialise facebook
            if (social === 'facebook') {

                var fbAppId = socialButtons.options.socials.facebook.fbAppId;
                if (typeof fbAppId === 'undefined' || fbAppId.length === 0) {
                    fbAppId = getContentByMetaTagName('fb:app_id', 'property');
                }

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
            socialButtons[social + '_button'].innerHTML = templates[social];
            if (socialButtons.options.buttonGreyscale) {
                colours[social].fill(Math.ceil(0.299 * colours[social][0] + 0.587 * colours[social][1] + 0.114 * colours[social][2]));
            }
            socialButtons[social + '_button'].children[0].style['background-color'] = 'rgb(' + colours[social][0] + ', ' + colours[social][1] + ', ' + colours[social][2] + ')';
            return socialButtons[social + '_button'];
        }

    }

}
