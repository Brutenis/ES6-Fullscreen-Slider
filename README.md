# ES6-Fullscreen-Slider
Easily configurable and responsive fullscreen image slider, ready to use on your website.

## Getting Started
These instructions will help you implement a copy of the slider on your project and configure to your own preference.

### Implementation
Simply place this code block wherever you want your slider to be. Make sure the **es6-fullscreen-slider** folder is located in the same directory.
```html
<div class="es6-fullscreen-slider"></div>
<script src="es6-fullscreen-slider/slider.js"></script>
<script src="es6-fullscreen-slider/config.js"></script>
```

### Adding Slides
1. Add your *photograph.jpg* to the **es6-fullscreen-slider/photos** directory
2. Reference it inside one of the objects within the **sliderContent** array at **es6-fullscreen-slider/config.js**
3. Add headers and paragraphs to your slides

Example:

```javascript
sliderContent = [
  {
    header: "This is your header",
    paragraph: "This is your paragraph",
    photo: "photograph.jpg"
  },
  
  {
    header: "This is another slide",
    paragraph: "And this is its paragraph"
    photo: "photograph2.jpg"
  }
]
```

### Configuration
Set your custom values to the **userConfig** object referenced in **es6-fullscreen-slider/config.js**. Available properties:

- **containerWidth** (number)
  - *The width of the container wrapping the slide content (viewport width units)*

- **textSelection** (boolean)
  - *Defines whether the slide content is selectable*

- **showHeader** (boolean)
  - *Setting to* ***false*** *will hide all of the headers within the slider*

- **headerAlign** (string)
  - *Available values:* ***left***, ***center***, ***right*** *and* ***justify***

- **headerFont** (string)
  - *Sets the font-family property for the headers within the slider*

- **headerFontSize** (number)
  - *Measured in viewport width units*
  
- **headerFontWeight** (number)
  - *400* - *regular*, *500* - *medium*, *600* - *semi bold*, *700* - *bold*
  
- **headerMarginBottom** (number)
  - *The gap between the header and paragraph (viewport width units)
  
- **showParagraph** (boolean)
  - *Setting to* ***false*** *will hide all of the paragraphs within the slider*
  
- **paragraphAlign** (string)
  - *Available values:* ***left***, ***center***, ***right*** *and* ***justify***
  
- **paragraphFont** (string)
  - *Sets the font-family property for the paragraphs within the slider*
  
- **paragraphFontSize** (number)
  - *Measured in viewport width units*
  
- **paragraphFontWeight** (number)
  - *400* - *regular*, *500* - *medium*, *600* - *semi bold*, *700* - *bold*
  
- **addFontAwesome** (boolean)
  - *Font Awesome from CDN is added to the <head> tag if* ***true***
  
- **showBullets** (boolean)
  - *Setting to* ***false*** *will hide the pagination of the slider*
  
- **bulletIcon** (string)
  - *Add your wanted Font Awesome class name from: https://fontawesome.com/icons*
  
- **bulletActiveIcon** (string)
  - *Icon for the bullet representing the active slide, add your wanted Font Awesome class name from: https://fontawesome.com/icons*
  
- **bulletSize** (number)
  - *Measured in viewport width units*
  
- **bulletMarginSides** (number)
  - *Gaps between the bullets in the pagination, measured in the viewport width units*
  
- **bulletBottomPosition** (number)
  - *The gap between the pagination and the bottom of the slider, easured in viewport height units*
  
- **showArrows** (boolean)
  - *Setting to* ***false*** *will hide the arrow navigation*

- **arrowLeftIcon** (string)
  - *Add your wanted Font Awesome class name from: https://fontawesome.com/icons*
  
- **arrowRightIcon** (string)
  - *Add your wanted Font Awesome class name from: https://fontawesome.com/icons*
  
- **arrowSize** (number)
  - *Measured in viewport width units*
  
- **arrowSidesPosition** (number)
  - *The gap between the sides of the slider and arrows, measured in viewport width units*
  
- **headerColor** (string)
  - *Add a wanted hexadecimal color code, for example:* ***#fefefe***
  
- **paragraphColor** (string)
  - *Add a wanted hexadecimal color code, for example:* ***#dedede***
  
- **bulletColor** (string)
  - *Add a wanted hexadecimal color code, for example:* ***#080808***
  
- **arrowColor** (string)
  - *Add a wanted hexadecimal color code, for example:* ***#fff***
  
- **arrowInactiveColor** (string)
  - *Color that indicates the end or the beginning of the slider, takes hexadecial codes*
  
- **overlayColorRGBA** (string)
  - *RGBA color code for the overlay of the slide to make the text more visible, for example: 255,255,255*
  
- **overlayOpacity** (number)
  - *The opacity of the overlay, number values from 0 to 1*

- **slideTransition** (boolean)
  - *Setting to* ***false*** *will disable automatic slider scrolling which will result in instantaneous jumping between the slides*
  
- **slideTransitionDuration** (number)
  - *Duration of how long it takes for the slide to scroll, measured in seconds*
  
- **headerTransition** (boolean)
  - *Setting to* ***false*** *will disable the header fade-in effect*
  
- **headerTransitionDuration** (number)
  - *Duration of how long it takes for the header to fade in*
  
- **paragraphTransition** (boolean)
  - *Setting to* ***false*** *will disable the paragraph fade-in effect*
  
- **paragraphTransitionDuration** (number)
  - *Duration of how long it takes for the paragraph to fade in*

### Responsive Settings

- **showOnMobile** (boolean)
  - *Setting to* ***false*** *will hide the slider on mobile devices*
  
- **maxMobileScreenWidth** (number)
  - *The width from which the responsive settings no longer apply, measured in pixels*
  
- **sliderHeightOnMobile** (number)
  - *Custom slider height that will only apply to mobile devices, measured in viewport height units*
  
- **mobileContainerWidth** (number)
  - *The width of the container wrapping the content, measured in viewpoert width units*
  
- **showHeaderMobile** (boolean)
  - *Setting to* ***false*** *will hide the headers on mobile devices*
  
- **headerAlignMobile** (string)
  - *Available values:* ***left***, ***center***, ***right*** *and* ***justify***
  
- **headerFontSizeMobile** (number)
  - *Custom header font size for mobile devices, measured in pixels*
  
- **headerMarginBottomMobile** (number)
  - *The gap between the header and paragraph, measured in pixels*
  
- **showParagraphMobile** (boolean)
  - *Setting to* ***false*** *will hide the paragraphs on mobile devices*
  
- **paragraphAlignMobile** (boolean)
  - *Available values:* ***left***, ***center***, ***right*** *and* ***justify***
