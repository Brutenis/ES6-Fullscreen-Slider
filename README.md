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
  - *Add your wanted Font Awesome class name from*: https://fontawesome.com/icons
  
- **bulletActiveIcon** (string)
  - *Icon for the bullet representing the active slide. Add your wanted Font Awesome class name from*: https://fontawesome.com/icons
  
- **bulletSize** (number)
  - *Measured in viewport width units*
  
- **bulletMarginSides** (number)
  - *Gaps between the bullets in the pagination, measured in the viewport width units*
