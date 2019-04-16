window.onload = () => {
  const getClass = className => document.getElementsByClassName(className)[0];  // Returns the first element with a class name
  const getClassAll = className => document.getElementsByClassName(className);  // Returns an array of all elements with a class name
  const getTag = tagName => document.getElementsByTagName(tagName)[0];          // Returns the first element of type
  const getTagAll = tagName => document.getElementsByTagName(tagName);          // Returns the first element of type
  const getId = id => document.getElementById(id);                              // Returns an elements with an ID
  const loremIpsum = "Nulla volutpat, est ac lobortis vestibulum, nisi arcu vulputate eros, sit amet posuere risus lacus in libero. Maecenas id neque quis ante bibendum vestibulum.";

  if (typeof userConfig === "undefined") {
    userConfig = {};
  }

  if (typeof sliderContent === "undefined") {
    sliderContent = [
      {
        header: "This is the first slide",
        paragraph: loremIpsum,
        photo: "manu-camargo-45573-unsplash.jpg"  // Author: Manu Camargo, taken from: https://unsplash.com/
      },
      
      {
        header: "This is the second slide",
        paragraph: loremIpsum,
        photo: "joanna-kosinska-295854-unsplash.jpg"  // Author: Joanna Kosinska, taken from: https://unsplash.com/
      },

      {
        header: "This is the third slide",
        paragraph: loremIpsum,
        photo: "manu-camargo-45573-unsplash.jpg"  // Author: Manu Camargo, taken from: https://unsplash.com/
      }
    ];
  }

  const setDefaultString = (userValue, defaultValue) => {
    let setValue;

    if (userValue) {
      if (typeof userValue == "undefined" || !(typeof userValue == "string")) {
        setValue = defaultValue;
      } else {
        setValue = userValue;
      }
    } else {
      setValue = defaultValue;
    }

    return setValue;
  }

  const setDefaultNumber = (userValue, defaultValue) => {
    let setValue;

    if (userValue) {
      if (typeof userValue == "undefined" || !(typeof userValue == "number")) {
        setValue = defaultValue;
      } else {
        setValue = userValue;
      }
    } else {
      setValue = defaultValue;
    }

    return setValue;
  }

  const setDefaultBoolean = (userValue, defaultValue) => {
    let setValue;

    if (typeof userValue != "undefined") {
      if (!(typeof userValue == "boolean")) {
        setValue = defaultValue;
      } else {
        setValue = userValue;
      }
    } else {
      setValue = defaultValue;
    }

    return setValue;
  }

  let currentSlide = 0;

  const containerWidth = setDefaultNumber(userConfig.containerWidth, 40);

  const textSelection = setDefaultBoolean(userConfig.textSelection, false);

  const showHeader = setDefaultBoolean(userConfig.showHeader, true);
  const headerAlign = setDefaultString(userConfig.headerAlign, "center");
  const headerFont = setDefaultString(userConfig.headerFont, "Helvetica Neue, Helvetica, Arial, sans-serif");
  const headerFontSize = setDefaultNumber(userConfig.headerFontSize, 3);
  const headerFontWeight = setDefaultNumber(userConfig.headerFontWeight, 700);
  const headerMarginBottom = setDefaultNumber(userConfig.headerMarginBottom, 1.5);

  const showParagraph = setDefaultBoolean(userConfig.showParagraph, true);
  const paragraphAlign = setDefaultString(userConfig.paragraphAlign, "justify");
  const paragraphFont = setDefaultString(userConfig.paragraphFont, "Garamond, Baskerville, Baskerville Old Face, Hoefler Text, Times New Roman, serif");
  const paragraphFontSize = setDefaultNumber(userConfig.paragraphFontSize, 1.2);
  const paragraphFontWeight = setDefaultNumber(userConfig.paragraphFontWeight, 400);

  const addFontAwesome = setDefaultBoolean(userConfig.addFontAwesome, true);

  const showBullets = setDefaultBoolean(userConfig.showBullets, true);
  const bulletIcon = setDefaultString(userConfig.bulletIcon, "far fa-circle");
  const bulletActiveIcon = setDefaultString(userConfig.bulletActiveIcon, "far fa-dot-circle");
  const bulletSize = setDefaultNumber(userConfig.bulletSize, 2);
  const bulletMarginSides = setDefaultNumber(userConfig.bulletMarginSides, 0.2);
  const bulletBottomPosition = setDefaultNumber(userConfig.bulletBottomPosition, 10);

  const showArrows = setDefaultBoolean(userConfig.showArrows, true);
  const arrowLeftIcon = setDefaultString(userConfig.arrowLeftIcon, "fas fa-caret-left");
  const arrowRightIcon = setDefaultString(userConfig.arrowRightIcon, "fas fa-caret-right");
  const arrowSize = setDefaultNumber(userConfig.arrowSize, 3);
  const arrowSidesPosition = setDefaultNumber(userConfig.arrowSidesPosition, 4);

  const headerColor = setDefaultString(userConfig.headerColor, "#fff");
  const paragraphColor = setDefaultString(userConfig.paragraphColor, "#fff");
  const bulletColor = setDefaultString(userConfig.bulletColor, "#fff");
  const arrowColor = setDefaultString(userConfig.arrowColor, "#fff");
  const arrowInactiveColor = setDefaultString(userConfig.arrowInactiveColor, "#808080");
  const overlayColorRGBA = setDefaultString(userConfig.overlayColorRGBA, "0, 0, 0");
  const overlayOpacity = setDefaultNumber(userConfig.overlayOpacity, 0.8);

  const slideTransition = setDefaultBoolean(userConfig.slideTransition, true);
  const slideTransitionDuration = setDefaultNumber(userConfig.slideTransitionDuration, 0.5);
  const headerTransition = setDefaultBoolean(userConfig.headerTransition, true);
  const headerTransitionDuration = setDefaultNumber(userConfig.headerTransitionDuration, 1);
  const paragraphTransition = setDefaultBoolean(userConfig.paragraphTransition, true);
  const paragraphTransitionDuration = setDefaultNumber(userConfig.paragraphTransitionDuration, 2);

  const showOnMobile = setDefaultBoolean(userConfig.showOnMobile, true);
  const maxMobileScreenWidth = setDefaultNumber(userConfig.maxMobileScreenWidth, 900);
  const sliderHeightOnMobile = setDefaultNumber(userConfig.sliderHeightOnMobile, 100);
  const mobileContainerWidth = setDefaultNumber(userConfig.mobileContainerWidth, 65);

  const showHeaderMobile = setDefaultBoolean(userConfig.showHeaderMobile, true);
  const headerAlignMobile = setDefaultString(userConfig.headerAlignMobile, "center");
  const headerFontSizeMobile = setDefaultNumber(userConfig.headerFontSizeMobile, 35);
  const headerMarginBottomMobile = setDefaultNumber(userConfig.headerMarginBottomMobile, 20);

  const showParagraphMobile = setDefaultBoolean(userConfig.showParagraphMobile, true);
  const paragraphAlignMobile = setDefaultString(userConfig.paragraphAlignMobile, "justify");
  const paragraphFontSizeMobile = setDefaultNumber(userConfig.paragraphFontSizeMobile, 20);

  const bulletSizeMobile = setDefaultNumber(userConfig.bulletSizeMobile, 5);
  const bulletMarginSidesMobile = setDefaultNumber(userConfig.bulletMarginSidesMobile, 4);
  const bulletBottomPositionMobile = setDefaultNumber(userConfig.bulletBottomPositionMobile, 25);

  const arrowSizeMobile = setDefaultNumber(userConfig.arrowSizeMobile, 12);
  const arrowSidesPositionMobile = setDefaultNumber(userConfig.arrowSidesPositionMobile, 5);

  const defineTextSelection = () => {
    if (textSelection) {
      return "auto";
    } else {
      return "none";
    }
  }

  const defineSlideTransition = () => {
    if (slideTransition) {
      return `transform ${slideTransitionDuration}s ease`;
    } else {
      return "none";
    }
  }

  const defineTransition = (property, duration) => {
    if (property) {
      return `all ${duration}s ease`;
    } else {
      return "none";
    }
  }

  const defineSlideBackground = index => {
    if (sliderContent) {
      if (sliderContent[index].photo) {
        return `url(es6-fullscreen-slider/photos/${sliderContent[index].photo})`;
      } else if (!sliderContent[index].photo || !(typeof sliderContent[index].photo == "string")) {
        return "none";
      }
    } else {
      return "none";
    }
  }

  const defineSlideHeader = index => {
    if (sliderContent) {
      if (sliderContent[index].header) {
        return sliderContent[index].header;
      } else {
        return "Lorem Ipsum";
      }
    } else {
      return "Lorem Ipsum";
    }
  }

  const defineSlideParagraph = index => {
    if (sliderContent) {
      if (sliderContent[index].paragraph) {
        return sliderContent[index].paragraph;
      } else {
        return loremIpsum;
      }
    } else {
      return loremIpsum;
    }
  }

  const defineSlideContainerWidth = () => {
    if (sliderContent) {
      return `${sliderContent.length}00vw`;
    } else {
      return "100vw";
    }
  }

  const defineVisibilityBlock = property => {
    if (property) {
      return "block";
    } else {
      return "none";
    }
  }

  const defineVisibilityInline = property => {
    if (property) {
      return "inline";
    } else {
      return "none";
    }
  }

  const defineActiveBullet = () => {
    const bulletPrefix = bulletIcon.substr(0, 3);
    const bulletSuffix = bulletIcon.substr(4);
    const bulletActivePrefix = bulletActiveIcon.substr(0, 3);
    const bulletActiveSuffix = bulletActiveIcon.substr(4);

    if (getClassAll("slider-bullet")) {
      Array.from(getClassAll("slider-bullet")).map(bullet => {
        if (bullet.classList.contains(bulletActivePrefix, bulletActiveSuffix)) {
          bullet.classList.remove(bulletActivePrefix, bulletActiveSuffix);
          bullet.classList.add(bulletPrefix, bulletSuffix);
          bullet.classList.remove("bullet-active");
        }
      });
      
      if (getClassAll("slider-bullet")[currentSlide]) {
        getClassAll("slider-bullet")[currentSlide].classList.remove(bulletPrefix, bulletSuffix);
        getClassAll("slider-bullet")[currentSlide].classList.add(bulletActivePrefix, bulletActiveSuffix);
        getClassAll("slider-bullet")[currentSlide].classList.add("bullet-active");
      }
    }
  }

  const defineInactiveArrow = () => {
    if (getClass("arrow-left")) {
      if (currentSlide == 0) {
        if (!getClass("arrow-left").classList.contains("arrow-inactive")) {
          getClass("arrow-left").classList.add("arrow-inactive");
          if (getClass("arrow-right").classList.contains("arrow-inactive")) {
            getClass("arrow-right").classList.remove("arrow-inactive");
          }
        }
      } else if (currentSlide > 0) {
        if (getClass("arrow-left").classList.contains("arrow-inactive")) {
          getClass("arrow-left").classList.remove("arrow-inactive");
        }
      }
    }

    if (getClass("arrow-right")) {
      if (currentSlide == sliderContent.length - 1) {
        if (!getClass("arrow-right").classList.contains("arrow-inactive")) {
          getClass("arrow-right").classList.add("arrow-inactive");
          if (getClass("arrow-left").classList.contains("arrow-inactive")) {
            getClass("arrow-left").classList.remove("arrow-inactive");
          }
        }
      } else if (currentSlide > 0) {
        if (getClass("arrow-right").classList.contains("arrow-inactive")) {
          getClass("arrow-right").classList.remove("arrow-inactive");
        }
      }
    }
  }

  const leftArrowFunctionality = () => {
    if (currentSlide > 0) {
      if (getClass("slide-container")) {
        getClass("slide-container").style.transform = `translate(${-(currentSlide - 1) * 100}vw)`;
        currentSlide = defineCurrentSlide();
      }
    }
  }

  // 

  const rightArrowFunctionality = () => {
    if (currentSlide < sliderContent.length - 1) {
      if (getClass("slide-container")) {
        getClass("slide-container").style.transform = `translate(${-(currentSlide + 1) * 100}vw)`;
        currentSlide = defineCurrentSlide();
      }
    }
  }

  const executeHeaderTransition = () => {
    if (getClass("slide")) {
      if (!headerTransition) {
        Array.from(getClassAll("slider-header")).map(header => {
          header.classList.add("content-visible");
        })
      }

      if (headerTransition) {
        Array.from(getClassAll("slider-header")).map(header => {
          if (header.classList.contains("content-visible")) {
            header.classList.remove("content-visible");
          }
        })

        setTimeout(() => {
          getClass(`header-${currentSlide}`).classList.add("content-visible");
        }, slideTransitionDuration * 1000)
      }
    }
  }

  const executeParagraphTransition = () => {
    if (getClass("slide")) {
      if (!paragraphTransition) {
        Array.from(getClassAll("slider-paragraph")).map(paragraph => {
          paragraph.classList.add("content-visible");
        })
      }

      if (paragraphTransition) {
        Array.from(getClassAll("slider-paragraph")).map(paragraph => {
          if (paragraph.classList.contains("content-visible")) {
            paragraph.classList.remove("content-visible");
          }
        })
      
        setTimeout(() => {
          getClass(`paragraph-${currentSlide}`).classList.add("content-visible");
        }, slideTransitionDuration * 1000 + 100)
      }
    }
  }

  const defineCurrentSlide = () => {
    if (getClass("slide-container")) {
      let position;
      let value;

      if (getClass("slide-container").style.transform == "") {
        position = "translate(0vw)";
      } else {
        position = getClass("slide-container").style.transform;
      }

      value = -parseInt(position.substr(10)) / 100;

      if (value == -0) {
        value = 0;
      }

      return value;
    }
  }

  if (addFontAwesome == true) {
    getTag("head").innerHTML += `<link rel="stylesheet"
                                      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                                      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                                      crossorigin="anonymous">`;
  }

  if (getClass("es6-fullscreen-slider")) {
    getClass("es6-fullscreen-slider").innerHTML += `
    <style>
      .es6-fullscreen-slider {
        width = 100vw;
        height = 100vh;
        overflow: hidden;
        position: relative;
        letter-spacing: 0.8px;
        line-height: 1.5;
        user-select: ${defineTextSelection()};
        -webkit-user-select: ${defineTextSelection()};
        -moz-user-select: ${defineTextSelection()};
        -ms-user-select: ${defineTextSelection()};
      }

      .es6-fullscreen-slider * {
        outline: none !important;
      }

      .es6-fullscreen-slider .slide-container {
        transition: ${defineSlideTransition()};
        overflow: hidden;
        width: ${defineSlideContainerWidth()};
        transform: translate(0vw);
      }

      .es6-fullscreen-slider .slide {
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        display: inline-block;
        float: left;
      }

      .es6-fullscreen-slider .slide-overlay {
        width: 100vw;
        height: 100vh;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        background-color: rgba(${overlayColorRGBA}, ${overlayOpacity});
        position: relative;
      }

      .es6-fullscreen-slider .slider-content-container {
        margin: 0 auto;
        width: ${containerWidth}vw;
      }

      .es6-fullscreen-slider h2 {
        display: ${defineVisibilityBlock(showHeader)};
        font-family: ${headerFont};
        font-size: ${headerFontSize}vw;
        font-weight: ${headerFontWeight};
        color: ${headerColor};
        transition: ${defineTransition(headerTransition, headerTransitionDuration)};
        margin: 0px 0px ${headerMarginBottom}vw 0px;
        text-align: center;
        opacity: 0;
      }

      .es6-fullscreen-slider p {
        display: ${defineVisibilityBlock(showParagraph)};
        font-family: ${paragraphFont};
        font-size: ${paragraphFontSize}vw;
        width: 100%;
        font-weight: ${paragraphFontWeight};
        color: ${paragraphColor};
        transition: ${defineTransition(paragraphTransition, paragraphTransitionDuration)};
        margin: 0 auto;
        text-align: justify;
        opacity: 0;
      }

      .es6-fullscreen-slider .content-visible {
        opacity: 1 !important;
      }

      .slider-arrows {
        display: ${defineVisibilityBlock(showArrows)};
        position: absolute;
        width: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }

      .arrow-left {
        float: left;
        margin-left: ${arrowSidesPosition}vw;
        font-size: ${arrowSize}vw;
        color: ${arrowColor};
        cursor: pointer;
      }

      .arrow-right {
        float: right;
        margin-right: ${arrowSidesPosition}vw;
        font-size: ${arrowSize}vw;
        color: ${arrowColor};
        cursor: pointer;
      }

      .arrow-inactive {
        cursor: default !important;
        color: ${arrowInactiveColor} !important;
      }

      .es6-fullscreen-slider .slider-pagination {
        display: ${defineVisibilityInline(showBullets)};
        position: absolute;
        bottom: ${bulletBottomPosition}vh;
        width: auto;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .es6-fullscreen-slider .slider-bullet {
        color: ${bulletColor};
        font-size: ${bulletSize};
        margin: 0px ${bulletMarginSides}vw 0px ${bulletMarginSides}vw;
        cursor: pointer;
      }

      @media screen and (max-width: ${maxMobileScreenWidth}px) {
        .es6-fullscreen-slider {
          display: ${defineVisibilityBlock(showOnMobile)};
        }

        .es6-fullscreen-slider .slider-content-container {
          width: ${mobileContainerWidth}vw;
        }

        .es6-fullscreen-slider .slide {
          height: ${sliderHeightOnMobile}vh;
        }

        .es6-fullscreen-slider .slide-overlay {
          height: ${sliderHeightOnMobile}vh;
        }

        .es6-fullscreen-slider h2 {
          display: ${defineVisibilityBlock(showHeaderMobile)};
          font-size: ${headerFontSizeMobile}px;
          margin-bottom: ${headerMarginBottomMobile}px;
          text-align: ${headerAlignMobile};
        }

        .es6-fullscreen-slider p {
          display: ${defineVisibilityBlock(showParagraphMobile)};
          font-size: ${paragraphFontSizeMobile}px;
          text-align: ${paragraphAlignMobile};
        }

        .es6-fullscreen-slider .slider-pagination {
          bottom: ${bulletBottomPositionMobile}px;
        }

        .es6-fullscreen-slider .slider-bullet {
          font-size: ${bulletSizeMobile};
          margin: 0px ${bulletMarginSidesMobile}px 0px ${bulletMarginSidesMobile}px;
        }

        .es6-fullscreen-slider .arrow-left {
          font-size: ${arrowSizeMobile}vw;
          margin-left: ${arrowSidesPositionMobile}vw;
        }
        
        .es6-fullscreen-slider .arrow-right {
          font-size: ${arrowSizeMobile}vw;
          margin-right: ${arrowSidesPositionMobile}vw;
        }
      }
    </style>
    `.trim();
  }

  /* Adds the slide and bullet containers */

  if (getClass("es6-fullscreen-slider")) {
    getClass("es6-fullscreen-slider").innerHTML += `
    <div class="slide-container"></div>
    <div class="slider-arrows">
      <i class="${arrowLeftIcon} arrow-left"></i>
      <i class="${arrowRightIcon} arrow-right"></i>
    </div>
    <div class="slider-pagination"></div>
    `.trim();
  }

  // Code block below adds slides

  if (sliderContent) {
    sliderContent.map((slide, index) => {
      if (getClass("slide-container")) {
        getClass("slide-container").innerHTML += `
        <div class="slide" style="background-image: ${defineSlideBackground(index)}">
          <div class="slide-overlay">
            <div class="slider-content-container">
              <h2 class="slider-header header-${index}">${defineSlideHeader(index)}</h2>
              <p class="slider-paragraph paragraph-${index}">${defineSlideParagraph(index)}</p>
            </div>
          </div>
        </div>
        `.trim();
      }

      if (getClass("slider-pagination")) {
        getClass("slider-pagination").innerHTML += `<i class="${bulletIcon} slider-bullet" id="bullet${index}"></i>`;
      }
    })
  }

  // Code block below adds pagination functionality

  if (getClassAll("slider-bullet")) {
    Array.from(getClassAll("slider-bullet")).map((bullet, index) => {
      bullet.addEventListener("click", () => {
        if (getClass("slide-container")) {
          getClass("slide-container").style.transform = `translate(-${index}00vw)`;
          currentSlide = defineCurrentSlide();
        }
      })
    })
  }

  // Event listeners

  document.addEventListener("click", defineInactiveArrow);
  document.addEventListener("click", defineActiveBullet);
  defineInactiveArrow();
  defineActiveBullet();
  executeHeaderTransition();
  executeParagraphTransition();

  if (getClassAll("slider-bullet")) {
    Array.from(getClassAll("slider-bullet")).map(bullet => {
      bullet.addEventListener("click", () => {
        if (!bullet.classList.contains("bullet-active")) {
          executeHeaderTransition();
          executeParagraphTransition();
        }
      })
    })
  }

  if (getClass("arrow-left")) {
    getClass("arrow-left").addEventListener("click", leftArrowFunctionality);
    getClass("arrow-left").addEventListener("click", () => {
      if (!getClass("arrow-left").classList.contains("arrow-inactive")) {
        executeHeaderTransition();
        executeParagraphTransition();
      }
    });
  }

  if (getClass("arrow-right")) {
    getClass("arrow-right").addEventListener("click", rightArrowFunctionality);
    getClass("arrow-right").addEventListener("click", () => {
      if (!getClass("arrow-right").classList.contains("arrow-inactive")) {
        executeHeaderTransition();
        executeParagraphTransition();
      }
    });
  }
}
