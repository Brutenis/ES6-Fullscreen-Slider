//  Numeric values for font size, margins and width stand for viewport units
//  Numeric values for transition duration stand for milliseconds
//  Bullet icon values are the Font Awesome class names. More information at: https://fontawesome.com/icons

const userConfig = {

  containerWidth:                   40,

  textSelection:                    false,

  showHeader:                       true,
  headerAlign:                      "center",
  headerFont:                       "Helvetica Neue, Helvetica, Arial, sans-serif",
  headerFontSize:                   3,
  headerFontWeight:                 700,
  headerMarginBottom:               1.5,

  showParagraph:                    true,
  paragraphAlign:                   "justify",
  paragraphFont:                    "Garamond, Baskerville, Baskerville Old Face, Hoefler Text, Times New Roman, serif",
  paragraphFontSize:                1.2,
  paragraphFontWeight:              400,

  addFontAwesome:                   true, // Set this to false if you want to manually add Font Awesome to your website
  
  showBullets:                      true,
  bulletIcon:                       "far fa-circle",
  bulletActiveIcon:                 "far fa-dot-circle",
  bulletSize:                       2,
  bulletMarginSides:                0.2,
  bulletBottomPosition:             10,

  showArrows:                       true,
  arrowLeftIcon:                    "fas fa-caret-left",
  arrowRightIcon:                   "fas fa-caret-right",
  arrowSize:                        3,
  arrowSidesPosition:               4,

  headerColor:                      "#fff",
  paragraphColor:                   "#fff",
  bulletColor:                      "#fff",
  arrowColor:                       "#fff",
  arrowInactiveColor:               "#808080",
  overlayColorRGBA:                 "0, 0, 0",
  overlayOpacity:                   0.8,

  slideTransition:                  true,
  slideTransitionDuration:          0.5,
  headerTransition:                 true,
  headerTransitionDuration:         1,
  paragraphTransition:              true,
  paragraphTransitionDuration:      2,

// Responsive settings

  showOnMobile:                     true,
  maxMobileScreenWidth:             900,  // Pixels
  sliderHeightOnMobile:             100,
  mobileContainerWidth:             65,
  
  showHeaderMobile:                 true,
  headerAlignMobile:                "center",
  headerFontSizeMobile:             35, // Pixels
  headerMarginBottomMobile:         20, // Pixels

  showParagraphMobile:              true,
  paragraphAlignMobile:             "justify",
  paragraphFontSizeMobile:          20, // Pixels

  bulletSizeMobile:                 5,
  bulletMarginSidesMobile:          4,  // Pixels
  bulletBottomPositionMobile:       25,  // Pixels

  arrowSizeMobile:                  12,
  arrowSidesPositionMobile:         5
}



// All of the photographs must be located in the "es6-fullscreen-slider/photos" directory
// Empty strings will result in the "Lorem Ipsum" dummy text

const sliderContent = [
  {
    header:     "This is the first slide",
    paragraph:  "Nulla volutpat, est ac lobortis vestibulum, nisi arcu vulputate eros, sit amet posuere risus lacus in libero. Maecenas id neque quis ante bibendum vestibulum.",
    photo:      "artur-rutkowski-97622-unsplash.jpg"    // Author: Artur Rutkowski, taken from: https://unsplash.com/
  },

  {
    header:     "This is the second slide",
    paragraph:  "Nulla volutpat, est ac lobortis vestibulum, nisi arcu vulputate eros, sit amet posuere risus lacus in libero. Maecenas id neque quis ante bibendum vestibulum.",
    photo:      "joanna-kosinska-295854-unsplash.jpg"   // Author: Joanna Kosinska, taken from: https://unsplash.com/
  },

  {
    header:     "This is the third slide",
    paragraph:  "Nulla volutpat, est ac lobortis vestibulum, nisi arcu vulputate eros, sit amet posuere risus lacus in libero. Maecenas id neque quis ante bibendum vestibulum.",
    photo:      "manu-camargo-45573-unsplash.jpg"       // Author: Manu Camargo, taken from: https://unsplash.com/
  },
]
