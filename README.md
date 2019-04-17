# ES6-Fullscreen-Slider
Easily configurable and responsive fullscreen image slider, ready to use on your website.

## Getting Started
These instructions will help you implement a copy of the slider on your project and configure to your own preference.

### Implementation
Simply place this code block wherever you want your slider to be. Make sure the **es6-fullscreen-slider** folder is in the same directory.
```html
<div class="es6-fullscreen-slider"></div>
<script src="es6-fullscreen-slider/slider.js"></script>
<script src="es6-fullscreen-slider/config.js"></script>
```

### Adding Slides
1. Add all of your *photograph.jpg* to the **es6-fullscreen-slider/photos** directory
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
  - *Setting to* ***false*** *will make all of the headers within the slider invisible*

- **headerAlign** (string)
  - *Available values:* ***left***, ***center***, ***right*** *and* ***justify***

- **headerFont** (string)
  - *Sets the font-family property for the headers within the slider*

- **headerFontSize** (number)
  - *Measured in viewport width units*
  
- **headerFontWeight** (number)
  - *400* - *regular*, *500* - *medium*, *600* - *semi bold*, *700* - *bold*
