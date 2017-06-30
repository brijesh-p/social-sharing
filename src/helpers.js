import Variables from './variables.js';
const variables = new Variables();

export default class Helpers {
  constructor() {
    this.copyObject = function(oldObject) {
      return JSON.parse(JSON.stringify(oldObject));
    }

    this.updateObject = function(sourceObject, targetObject) {
      for (var key in sourceObject) {
        if (sourceObject.hasOwnProperty(key)) {
          if (typeof key === 'object' && targetObject.hasOwnProperty(key)) {
            updateObject(sourceObject[key], targetObject[key]);
          } else {
            targetObject[key] = sourceObject[key];
          }
        }
      }
    }

    this.callPinterest = function(element, imgs) {
      var imageIndex = parseInt(element.attributes['data-index'].value);
      return window.open('https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href) + '&media=' + imgs[imageIndex].src, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=750');
    }

    this.defineShortPageUrl = function(sourceUrl, apiKey) {

     //  return promise
     return new Promise(function(resolve, reject) {
       var googleAPIKey = apiKey;
       if (typeof googleAPIKey !== 'undefined' || googleAPIKey === '') {
         var request = new XMLHttpRequest();
         request.onreadystatechange = function() {
           if (this.readyState === 4 && this.status === 200) {
             resolve(JSON.parse(this.responseText).id);
           } else if (this.readyState === 4 && this.status === 400) {
             console.log('Your Google API Key was not accepted by Google Herself! :-O');
             resolve(sourceUrl);
           }
         };
         var requestUrl = 'https://www.googleapis.com/urlshortener/v1/url?key=' + googleAPIKey;
         var requestBody = JSON.stringify({longUrl: sourceUrl});
         request.open('POST', requestUrl, true);
         request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
         request.setRequestHeader('Content-Type', 'application/json');
         request.setRequestHeader('Accept', 'application/json');
         request.setRequestHeader('Content-length', requestBody.length);
         request.setRequestHeader('Connection', 'close');
         request.onerror = function() {
           reject(Error('Network Error'));
         };
         request.send(requestBody);
       //  return source url if no API key
       } else {
         resolve(sourceUrl);
       }
     });
    }
    
    this.getContentByMetaTagName = function(c, keyName) {
      for (var b = document.getElementsByTagName('meta'), a = 0; a < b.length; a++) {
        if (c === b[a].name || c === b[a].getAttribute(keyName)) { return b[a].content; }
      } return false;
    }

    this.hexToRgb = function(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }
}