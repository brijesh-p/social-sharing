# Social Buttons

**Installation**
```bash
npm install --save-dev social-sharing
```
**Usage**

**1.**
Add .css and .js files of socialSharing.
```html
<head>
    ...
	<link rel="stylesheet" href="node_modules/social-sharing/dist/css/socialSharing.min.css">
	...
</head>
<body>
	<script type="text/javascript" src="node_modules/social-sharing/dist/js/socialSharing.min.js"></script>
</body>
```
**2.**
Initialise app and pass a configuration object to it:
```html
<script>
var options = {
      orientation: 'left',
      buttonDesktopSize: 30,
      buttonRoundness: 5,
      buttonGreyscale: false,
      googleAPIKey: 'AIzaSyDqNnYEKDxzsuwsP56eMrndC0lN8k6k3Kw',
      distanceFromTop: 20,
      closeBtn: true,
      socials: {
        facebook: {
          enabled: true,
          url: 'https://caliberi.com',
          name: 'Social Sharing Plugin Add-on',
          caption: 'This is a caption text',
          description: 'This is a description text'
        },
        twitter: {
          enabled: true,
          text: 'Social Sharing Plugin Add-on',
          url: 'https://caliberi.com',
          screenName: 'Caliberi',
          hashtag: 'SocialShare'
        },
        pinterest: {
          enabled: true,
          url: 'https://caliberi.com'
        },
        googleplus: {
          enabled: true,
          url: 'https://caliberi.com'
        },
        linkedin: {
          enabled: true,
          url: 'https://caliberi.com'
        }
      }
    };
    SocialSharing.init(options);
</script>
```

**Or**
Using webpack
```javascript
let SocialSharing = require('social-sharing');
SocialSharing.init();
```

**Table of options (High level)**
<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Default value</th>
            <th>Comments</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>orientation</td>
            <td>right (String)</td>
            <td>2 values currently possible, <code>left</code> or <code>right</code></td>
        </tr>
        <tr>
            <td>googleAPIKey</td>
            <td>none (String)</td>
            <td>Get you own google api shortner. <a href="https://developers.google.com/url-shortener/v1/getting_started">https://developers.google.com/url-shortener/v1/getting_started</a> you can get your own key here (scroll down and find a button (<code>GET A KEY</code>)). This will be used to shorten your url for twitter</td>
        </tr>
        <tr>
            <td>distanceFromTop</td>
            <td>30 (String)</td>
            <td>this would be 30vh from the top</td>
        </tr>
        <tr>
            <td>buttonMobileSize</td>
            <td>20 (Integer)</td>
            <td>size of the button for Mobiles in pixels ( height: 20px, width: 20px)</td>
        </tr>
        <tr>
            <td>buttonDesktopSize</td>
            <td>25 (Integer)</td>
            <td>size of the button for Desktop in pixels ( height: 20px, width: 20px)</td>
        </tr>
        <tr>
            <td>buttonRoundness</td>
            <td>0 (Integer)</td>
            <td>border radius on top and bottom</td>
        </tr>
        <tr>
            <td>buttonGreyscale</td>
            <td>false (Boolean)</td>
            <td>Grayscale buttons?</td>
        </tr>
        <tr>
            <td>closeBtn</td>
            <td>false (Boolean)</td>
            <td>Add a button that has an ability to hide social buttons (animate them away from the view)</td>
        </tr>
    </tbody>
</table>

---

**List of social settings** (part of `socials object`)

For example
```javascript
var options = {
    socials: {
        facebook: {
            enabled: true,
            url: 'https://example.com'
        }
        twitter {
            enabled: true
        }
    }
}
```

Whole list of social networks

<ul>
    <li>facebook</li>
    <li>twitter</li>
    <li>googleplus</li>
    <li>pinterest</li>
    <li>linkedin</li>
</ul>

all social netowork have at least 2 params, its `enabled: true or false` and `url: 'someurl.com'`

Facebooks and twitter have more than two and below is example of both.

```javascript
var options = {
    socials: {
          facebook: {
          enabled: true,
          url: 'https://caliberi.com',
          name: 'Social Sharing Plugin Add-on',
          caption: 'This is a caption text',
          description: 'This is a description text'
        },
        twitter: {
          enabled: true,
          text: 'Social Sharing Plugin Add-on',
          url: 'https://caliberi.com',
          screenName: 'Caliberi',
          hashtag: 'SocialShare'
        } 
    }
}

```

**Examples**

In order to view how the output looks like, open `examples/example-1.html` in your browser.
