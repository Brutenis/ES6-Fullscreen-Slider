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

### Configuration
Set your custom values to the **userConfig** object located in **es6-fullscreen-slider/config.js**. Available properties:

- **containerWidth** (number)
  - *The width of the container wrapping the slide content (viewport width units)*

- **textSelection** (boolean)
  - *Defines whether the slide content is selectable*

- **showHeader** (boolean)
  - *Setting to* ***false*** *will make all of the headers within the slider invisible*

- **headerAlign** (string)
  - *Available values:* ***left***, ***center***, ***right*** and ***justify***

- **headerFont** (string)
  - *Sets the font-family property for the headers within the slider*

- **headerFontSize** (number)
  - *Measured in viewport width units*
  
- **headerFontWeight** (number)
  - *400* - *regular*, *500* - *medium*, *600* - *semi bold*, *700* - *bold*
