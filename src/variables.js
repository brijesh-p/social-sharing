export default class Variables {
  constructor() {
    this.variables = {
      body: document.body,
      images: document.getElementsByTagName('img'),
      buttonContainer: '',
      greyscaleWeight: 0.333,
      m_config: {
        container: '#masonry-wall',
        width: 320,
        transition: {
          duration: '350ms',
          easing: 'ease'
        },
        responsive: true,
        advanced: {
          centered: false
        }
      },
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
      socialButtons: [],
      options: {},
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
      },
      imgs: ''
    }
  }
}
