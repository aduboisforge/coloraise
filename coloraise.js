/*Coloraise licensed under Creative Commons
ShareAlike 4.0 International.
-A. M. Dubois, 2018.*/

elementSettings7777777 = {
  /* object properties are only declared here if they have to be for code to work correctly */
  /* object that keeps track of all element settings */
  tSi: 16, /* stands for text-size initial - calculated average text size of elements on page used for starting and ending points of font-size */
  totalEA: undefined, /* total Element Array */
  totalEAO: [], /* original scroll position of each element, used to auto adjust scroll when user increases or decreases size, or goes back to original size */
  totalElements: document.getElementsByTagName('*'), /* used to search for class names in native JavaScript as opposed to jQuery, part of the process of switching over */
  buttonSettings: 'on', /* used to take original values of all buttons, used for setting all buttons back to original values, because each browser tends to have its own quirkiness when it comes to buttons, all these values have to be recorded and reset */
  startingFontSize: function() { /* calculates starting average font-size of regular text elements, used to disable minus button when font-size has gotten too small, or plus button when text reaches 500px or greater, changes elementSettings7777777.tSi value if an average size is found  */
    var modeMap = {};
    if (this.sizeChange4OS && this.sizeChange4OS.length){
      var maxEl = this.sizeChange4OS[0], maxCount = 1, modeSize, starterSize;
      for(var i = 0; i < this.sizeChange4OS.length; i++) {
        var el = this.sizeChange4OS[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
      }
    }
    if (maxEl) {
      starterSize = Number(maxEl.slice(0,-2));
    }
    if (starterSize) {
      this.tSi = starterSize;
      this.starterSize = starterSize;
    }

  },
  autoAdjustInitial: function() {
    /* records the last element user has scrolled to so that scroll can be adjusted to the top of that element after size has been adjusted */
      if (this.totalEAO.length) {
        var doc = document.documentElement, top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        for(i=0;i<this.totalEAO.length-1;i++) {
          if (this.totalEAO[i]>0) {

            if (top>=this.totalEAO[i]&&top<this.totalEAO[i+1]){
              /* recording current element for future reference */
              this.currentE = i;
            }
          }
        }
      }
  },
  autoAdjustFinal: function() {
      if (this.totalEA.length) {
        this.totalEAO = [];
        var bodyRect = document.body.getBoundingClientRect();
        for(i=0;i<this.totalEA.length;i++) {
          var elemRect = this.totalEA[i].getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top;
          this.totalEAO.push(offset);
        }
      }
      if (this.totalEAO[this.currentE]>0) {
        window.scrollTo(0,this.totalEAO[this.currentE]);
      }
  },
  backToOrig: function(){
    /* sets all elements back to original settings, only affects font-size and scroll if font-size has actually been changed by user */
    if (menuSettings7777777.sizeHasChanged == 1) {
      /* recording current element scrolled on page, so scroll can be auto adjusted */
      this.autoAdjustInitial();
      /*setting font-size back to original */
      this.tSi = this.starterSize;
      /*checking plus and minus buttons are correct color */
      if (jQuery('#minusB-333').css('background-color')!='rgb(230, 230, 230)'){
        jQuery('#minusB-333').css('background-color','rgb(230, 230, 230)');
      }
      if (jQuery('#plusB-333').css('background-color')!='rgb(230, 230, 230)'){
        jQuery('#plusB-333').css('background-color','rgb(230, 230, 230)');
      }
      /* setting all elements back to original size */
      if (this.sizeChange6.length) {
        this.setSizeO(this.sizeChange6, this.sizeChange6OS);
      }
      if (this.sizeChange5.length) {
        this.setSizeO(this.sizeChange5, this.sizeChange5OS);
      }
      if (this.sizeChange4.length) {
        this.setSizeO(this.sizeChange4, this.sizeChange4OS);
      }
      if (this.sizeChange3.length) {
        this.setSizeO(this.sizeChange3, this.sizeChange3OS);
      }
      if (this.sizeChange2.length) {
        this.setSizeO(this.sizeChange2, this.sizeChange2OS);
      }
      if (this.sizeChange1.length) {
        this.setSizeO(this.sizeChange1, this.sizeChange1OS);
      }
    }
    /* setting all other elements back to original values, function will only set elements if they are actually included in a page */
    if(this.background_change.length) {
      this.setBackgroundO(this.background_change, this.background_changeO);
    }
    if(this.gradient_change.length) {
      this.setGradientO(this.gradient_change, this.gradient_changeO);
    }
    if(this.background_change_button.length) {
      this.setFontO(this.background_change_button, this.background_change_buttonO);
    }
    if(this.text_change.length) {
      this.setFontO(this.text_change, this.text_changeO);
    }
    if(this.text_change_match.length) {
      this.setBackgroundO(this.text_change_match, this.text_change_matchO);
    }
    if(this.text_border_match.length) {
      this.setBorderCO(this.text_border_match, this.text_border_matchO);
    }
    if(this.title_change_h1.length) {
      this.setFontO(this.title_change_h1, this.title_change_h1O);
    }
    if(this.title_change_h2.length) {
      this.setFontO(this.title_change_h2, this.title_change_h2O);
    }
    if(this.title_change_h3.length) {
      this.setFontO(this.title_change_h3, this.title_change_h3O);
    }
    if(this.title_change_h4.length) {
      this.setFontO(this.title_change_h4, this.title_change_h4O);
    }
    if(this.title_change_h5.length) {
      this.setFontO(this.title_change_h5, this.title_change_h5O);
    }
    if(this.title_change_h6.length) {
      this.setFontO(this.title_change_h6, this.title_change_h6O);
    }
    if(this.h1_background_match.length) {
      this.setBackgroundO(this.h1_background_match, this.h1_background_matchO);
    }
    if(this.h2_background_match.length) {
      this.setBackgroundO(this.h2_background_match, this.h2_background_matchO);
    }
    if(this.h3_background_match.length) {
      this.setBackgroundO(this.h3_background_match, this.h3_background_matchO);
    }
    if(this.h4_background_match.length) {
      this.setBackgroundO(this.h4_background_match, this.h4_background_matchO);
    }
    if(this.h5_background_match.length) {
      this.setBackgroundO(this.h5_background_match, this.h5_background_matchO);
    }
    if(this.h6_background_match.length) {
      this.setBackgroundO(this.h6_background_match, this.h6_background_matchO);
    }
    if(this.h1_border_match.length) {
      this.setBorderCO(this.h1_border_match, this.h1_border_matchO);
    }
    if(this.h2_border_match.length) {
      this.setBorderCO(this.h2_border_match, this.h2_border_matchO);
    }
    if(this.h3_border_match.length) {
      this.setBorderCO(this.h3_border_match, this.h3_border_matchO);
    }
    if(this.h4_border_match.length) {
      this.setBorderCO(this.h4_border_match, this.h4_border_matchO);
    }
    if(this.h5_border_match.length) {
      this.setBorderCO(this.h5_border_match, this.h5_border_matchO);
    }
    if(this.h6_border_match.length) {
      this.setBorderCO(this.h6_border_match, this.h6_border_matchO);
    }

    /* redoing scroll after elements have been set back to original size */
    if (menuSettings7777777.sizeHasChanged == 1) {
      this.autoAdjustFinal();
      /* resetting sizeHasChanged for future */
      menuSettings7777777.sizeHasChanged = 0;
      /* resetting waypoints in Waypoint jQuery plugin is in use */
      if (typeof Waypoint != "undefined") {
        Waypoint.refreshAll();
      }
    }

  },
  /*methods used to set elements back to original values */
  setFontO: function(elementArray, fontArray){
    for(i=0;i<elementArray.length;i++){
      elementArray[i].style.color = fontArray[i];
    }
  },
  setSizeO: function(elementArray, sizeArray){
    for(i=0;i<elementArray.length;i++){
      elementArray[i].style.fontSize = sizeArray[i];
    }
  },
  setBackgroundO: function(elementArray, backgroundArray){
    for(i=0;i<elementArray.length;i++){
      elementArray[i].style.backgroundColor = backgroundArray[i];
    }
  },
  setBorderCO: function(elementArray, borderArray){
    for(i=0;i<elementArray.length;i++){
      elementArray[i].style.borderColor = borderArray[i];
    }
  },
  setBorderSO: function(elementArray, borderArray){
    for(i=0;i<elementArray.length;i++){
      elementArray[i].style.borderStyle = borderArray[i];
    }
  },
  setBorderWO: function(elementArray, borderArray){
    for(i=0;i<elementArray.length;i++){
      elementArray[i].style.borderWidth = borderArray[i];
    }
  },
  setBorderRO: function(elementArray, borderArray){
    for(i=0;i<elementArray.length;i++){
      elementArray[i].style.borderRadius = borderArray[i];
    }
  },
  setBorderO: function(elementArray, borderArray){
    for(i=0;i<elementArray.length;i++){
      elementArray[i].style.border = borderArray[i];
    }
  },
  setGradientO: function(elementArray, gradientArray){
    for(i=0;i<elementArray.length;i++){
      elementArray[i].style.background = gradientArray[i];
    }
  },
  findSingleCArray: function(cName){
    /* finding elements that contain a specific class, it is done this way instead of using getElementsByClassName, because this will work in every browser, part of code for switching from jQuery to native JavaScript */
    var i, arr = [];
    for (i in this.totalElements) {
        if((' ' + this.totalElements[i].className + ' ').indexOf(' ' + cName + ' ')
                > -1) {
            arr.push(this.totalElements[i]);
        }
    }
    /* if there's only one element in the array it just returns that element, if there's not then it returns an array with elements or an empty array if there are no matches */
    if (arr.length == 1) {
      return arr[0];
    } else {
      return arr;
    }
  },
  /* builds list of all elements that can change, and saves original values in arrays, the majority of the properties for this object are created here */
  buildElementLists: function(){
    this.e_button_change = jQuery('.e-button-change');
    this.all_buttons = jQuery('button');
    if (this.all_buttons.length && this.buttonSettings == 'on') {
      /* records original values of all buttons, this feature can be turned off with by including "elementSettings7777777.buttonSettings = 'off' " in a <script> tag somewhere in the HTML document, but is only necessary Coloraise changes initial CSS values of buttons in an unsatisfactory way */
      this.all_buttons_backgroundO = this.buttonBackgroundColorO(this.all_buttons);
      this.all_buttons_borderCO = this.buttonBorderColorO(this.all_buttons);
      this.all_buttons_borderWO = this.borderWidthO(this.all_buttons);
      this.all_buttons_borderSO = this.borderStyleO(this.all_buttons);
      this.all_buttons_borderRO = this.borderRadiusO(this.all_buttons);
      this.all_buttons_borderO = this.borderO(this.all_buttons);
      this.setBackgroundO(this.all_buttons, this.all_buttons_backgroundO);
      this.setBorderSO(this.all_buttons, this.all_buttons_borderSO);
      this.setBorderCO(this.all_buttons, this.all_buttons_borderCO);
      this.setBorderWO(this.all_buttons, this.all_buttons_borderWO);
      this.setBorderRO(this.all_buttons, this.all_buttons_borderRO);
    }
    /* classes to change color of heading elements */
    this.title_change_h1 = jQuery('.title-change, .color-change').find('h1').not('.e-text-change, .h2-title-match, .h3-title-match, .h4-title-match, .h5-title-match, .h6-title-match');
    this.h1_title_match = jQuery('.h1-title-match').not('.e-text-change, .h2-title-match, .h3-title-match, .h4-title-match, .h5-title-match, .h6-title-match');
    this.h1_e_title_change = jQuery('h1.e-title-change');
    if (this.title_change_h1.length) {
      this.title_change_h1 = this.elementsToChange(this.title_change_h1,  'e-no-title-change','no-title-change','no-color-change','title-change','color-change',  this.h1_title_match, this.h1_e_title_change);
    } else {
        this.title_change_h1 = jQuery.merge(this.h1_title_match, this.h1_e_title_change);
    }
    if (this.title_change_h1.length) {
      this.title_change_h1O = this.fontColorO(this.title_change_h1);
      menuSettings7777777.titleOn = 1;
    }
    this.title_change_h2 = jQuery('.title-change, .color-change').find('h2, a').not('.e-text-change, .h1-title-match, .h3-title-match, .h4-title-match, .h5-title-match, .h6-title-match');
    this.h2_title_match = jQuery('.h2-title-match').not('.e-text-change, .h1-title-match, .h3-title-match, .h4-title-match, .h5-title-match, .h6-title-match');
    this.h2_e_title_change = jQuery('h2.e-title-change');
    if (this.title_change_h2.length) {
      this.title_change_h2 = this.elementsToChange(this.title_change_h2,  'e-no-title-change','no-title-change','no-color-change','title-change','color-change',  this.h2_title_match, this.h2_e_title_change);
    } else {
        this.title_change_h2 = jQuery.merge(this.h2_title_match, this.h2_e_title_change);
    }
    if (this.title_change_h2.length) {
      this.title_change_h2O = this.fontColorO(this.title_change_h2);
      menuSettings7777777.titleOn = 1;
    }
    this.title_change_h3 = jQuery('.title-change, .color-change').find('h3').not('.e-text-change, .h2-title-match, .h1-title-match, .h4-title-match, .h5-title-match, .h6-title-match');
    this.h3_title_match = jQuery('.h3-title-match').not('.e-text-change, .h2-title-match, .h1-title-match, .h4-title-match, .h5-title-match, .h6-title-match');
    this.h3_e_title_change = jQuery('h3.e-title-change');
    if (this.title_change_h3.length) {
      this.title_change_h3 = this.elementsToChange(this.title_change_h3,  'e-no-title-change','no-title-change','no-color-change','title-change','color-change',  this.h3_title_match, this.h3_e_title_change);
    } else {
        this.title_change_h3 = jQuery.merge(this.h3_title_match, this.h3_e_title_change);
    }
    if (this.title_change_h3.length) {
      this.title_change_h3O = this.fontColorO(this.title_change_h3);
      menuSettings7777777.titleOn = 1;
    }

    this.title_change_h4 = jQuery('.title-change, .color-change').find('h4').not('.e-text-change, .h2-title-match, .h3-title-match, .h1-title-match, .h5-title-match, .h6-title-match');
    this.h4_title_match = jQuery('.h4-title-match').not('.e-text-change, .h2-title-match, .h3-title-match, .h1-title-match, .h5-title-match, .h6-title-match');
    this.h4_e_title_change = jQuery('h4.e-title-change');
    if (this.title_change_h4.length) {
      this.title_change_h4 = this.elementsToChange(this.title_change_h4,  'e-no-title-change','no-title-change','no-color-change','title-change','color-change',  this.h4_title_match, this.h4_e_title_change);
    } else {
        this.title_change_h4 = jQuery.merge(this.h4_title_match, this.h4_e_title_change);
    }
    if (this.title_change_h4.length) {
      this.title_change_h4O = this.fontColorO(this.title_change_h4);
      menuSettings7777777.titleOn = 1;
    }

    this.title_change_h5 = jQuery('.title-change, .color-change').find('h5').not('.e-text-change, .h2-title-match, .h3-title-match, .h4-title-match, .h1-title-match, .h6-title-match');
    this.h5_title_match = jQuery('.h5-title-match').not('.e-text-change, .h2-title-match, .h3-title-match, .h4-title-match, .h1-title-match, .h6-title-match');
    this.h5_e_title_change = jQuery('h5.e-title-change');
    if (this.title_change_h5.length) {
      this.title_change_h5 = this.elementsToChange(this.title_change_h5,  'e-no-title-change','no-title-change','no-color-change','title-change','color-change',  this.h5_title_match, this.h5_e_title_change);
    } else {
        this.title_change_h5 = jQuery.merge(this.h5_title_match, this.h5_e_title_change);
    }
    if (this.title_change_h5.length) {
      this.title_change_h5O = this.fontColorO(this.title_change_h5);
      menuSettings7777777.titleOn = 1;
    }

    this.title_change_h6 = jQuery('.title-change, .color-change').find('h6').not('.e-text-change, .h2-title-match, .h3-title-match, .h4-title-match, .h5-title-match, .h1-title-match');
    this.h6_title_match = jQuery('.h6-title-match').not('.e-text-change, .h2-title-match, .h3-title-match, .h4-title-match, .h5-title-match, .h1-title-match');
    this.h6_e_title_change = jQuery('h6.e-title-change');
    if (this.title_change_h6.length) {
      this.title_change_h6 = this.elementsToChange(this.title_change_h6,  'e-no-title-change','no-title-change','no-color-change','title-change','color-change',  this.h6_title_match, this.h6_e_title_change);
    } else {
        this.title_change_h6 = jQuery.merge(this.h6_title_match, this.h6_e_title_change);
    }
    if (this.title_change_h6.length) {
      this.title_change_h6O = this.fontColorO(this.title_change_h6);
      menuSettings7777777.titleOn = 1;
    }
    /* build element lists for h1-background-match to h6-background-match classes */
    this.h1_button_match = jQuery('.title-change, .color-change').find('button').not('.text-background-match');
    this.h1_background_match = jQuery('.h1-background-match').not('.text-background-match');
    if (this.h1_button_match.length) {
      this.h1_background_match = this.elementsToChange(this.h1_button_match,'e-no-button-change','no-title-change','no-color-change','title-change','color-change', this.h1_background_match, this.e_button_change);
    } else {
      this.h1_background_match = jQuery.merge(this.h1_background_match, this.e_button_change);
    }
    if (this.h1_background_match.length) {
      this.h1_background_matchO = this.backgroundColorO(this.h1_background_match);
      menuSettings7777777.titleOn = 1;
    }
    this.h2_background_match = jQuery('.h2-background-match').not('.text-background-match');
    if (this.h2_background_match.length) {
      this.h2_background_matchO = this.backgroundColorO(this.h2_background_match);
      menuSettings7777777.titleOn = 1;
    }
    this.h3_background_match = jQuery('.h3-background-match').not('.text-background-match');
    if (this.h3_background_match.length) {
      this.h3_background_matchO = this.backgroundColorO(this.h3_background_match);
      menuSettings7777777.titleOn = 1;
    }
    this.h4_background_match = jQuery('.h4-background-match').not('.text-background-match');
    if (this.h4_background_match.length) {
      this.h4_background_matchO = this.backgroundColorO(this.h4_background_match);
      menuSettings7777777.titleOn = 1;
    }
    this.h5_background_match = jQuery('.h5-background-match').not('.text-background-match');
    if (this.h5_background_match.length) {
      this.h5_background_matchO = this.backgroundColorO(this.h5_background_match);
      menuSettings7777777.titleOn = 1;
    }
    this.h6_background_match = jQuery('.h6-background-match').not('.text-background-match');
    if (this.h6_background_match.length) {
      this.h6_background_matchO = this.backgroundColorO(this.h6_background_match);
      menuSettings7777777.titleOn = 1;
    }
      /* build element lists for h1-border-match to h6-border-match classes */
    this.h1_border_match = jQuery('.h1-border-match').not('.text-border-match, .e-no-border-change');
    if (this.h1_border_match.length) {
      this.h1_border_matchO = this.borderColorO(this.h1_border_match);
      menuSettings7777777.titleOn = 1;
    }
    this.h2_border_match = jQuery('.h2-border-match').not('.text-border-match, .e-no-border-change');
    if (this.h2_border_match.length) {
      this.h2_border_matchO = this.borderColorO(this.h2_border_match);
      menuSettings7777777.titleOn = 1;
    }
    this.h3_border_match = jQuery('.h3-border-match').not('.text-border-match, .e-no-border-change');
    if (this.h3_border_match.length) {
      this.h3_border_matchO = this.borderColorO(this.h3_border_match);
      menuSettings7777777.titleOn = 1;
    }
    this.h4_border_match = jQuery('.h4-border-match').not('.text-border-match, .e-no-border-change');
    if (this.h4_border_match.length) {
      this.h4_border_matchO = this.borderColorO(this.h4_border_match);
      menuSettings7777777.titleOn = 1;
    }
    this.h5_border_match = jQuery('.h5-border-match').not('.text-border-match, .e-no-border-change');
    if (this.h5_border_match.length) {
      this.h5_border_matchO = this.borderColorO(this.h5_border_match);
      menuSettings7777777.titleOn = 1;
    }
    this.h6_border_match = jQuery('.h6-border-match').not('.text-border-match, .e-no-border-change');
    if (this.h6_border_match.length) {
      this.h6_border_matchO = this.borderColorO(this.h6_border_match);
      menuSettings7777777.titleOn = 1;
    }
    /* text-change classes */
    this.text_change = jQuery('.text-change, .color-change').find('address, audio, blockquote, figcaption, p, summary, svg, textarea, dd, dt, li, caption, th, td').not('.h1-title-match, .h2-title-match, .h3-title-match, .h4-title-match, .h5-title-match, .h6-title-match, e-no-text-change');
    this.e_text_change = jQuery('.e-text-change').not('.h1-title-match, .h2-title-match, .h3-title-match, .h4-title-match, .h5-title-match, .h6-title-match, e-no-text-change');
    if (this.text_change.length) {
      this.text_change = this.elementsToChange(this.text_change, 'e-no-text-change','no-text-change','no-color-change','text-change','color-change', this.e_text_change);
      this.text_changeO = this.fontColorO(this.text_change);
      menuSettings7777777.textOn = 1;
    } else if (this.e_text_change.length) {
      this.text_change = this.e_text_change;
      this.text_changeO = this.fontColorO(this.text_change);
      menuSettings7777777.textOn = 1;
    }
    this.text_change_match = jQuery('.text-background-match').not('.h1-background-match, .h2-background-match, .h3-background-match, .h4-background-match, .h5-background-match, .h6-background-match, .e-no-border-change');
    if (this.text_change_match.length) {
      this.text_change_matchO = this.backgroundColorO(this.text_change_match);
      menuSettings7777777.textOn = 1;
    }
    this.text_textarea = jQuery('.text-change, .color-change').find('textarea').not('.e_no_border_change');
    this.text_border_match = jQuery('.text-border-match').not('.h1-border-match, .h2-border-match, .h3-border-match, .h4-border-match, .h5-border-match, .h6-border-match, .e-no-border-change');
    if (this.text_textarea.length) {
      this.text_border_match = this.elementsToChange(this.text_textarea, 'e-no-text-change','no-text-change','no-color-change','text-change','color-change', this.text_border_match);
    }
    if (this.text_border_match.length) {
      this.text_border_matchO = this.borderColorO(this.text_border_match);
      menuSettings7777777.textOn = 1;
    }
    /* build element lists for size-change classes */
    this.sizeChange6 = jQuery('.size-change').find('h6').not('.h5-size-match, .h4-size-match, .h3-size-match, .h2-size-match, .h1-size-match');
    this.h6_e_size_change = jQuery('h6.e-size-change');
    this.sizeMatch6 = jQuery('.h6-size-match').not('.h5-size-match, .h4-size-match, .h3-size-match, .h2-size-match, .h1-size-match');
    if (this.sizeChange6.length) {
      this.sizeChange6 = this.elementsToChange(this.sizeChange6, 'e-no-size-change','no-size-change',0,'size-change',0, this.sizeMatch6, this.h6_e_size_change);
    } else {
        this.sizeChange6 = jQuery.merge(this.sizeMatch6, this.h6_e_size_change);
    }
    if (this.sizeChange6.length) {
      this.sizeChange6OS = this.sizeO(this.sizeChange6);
      menuSettings7777777.sizeOn = 1;
    }
    this.sizeChange5 = jQuery('.size-change').find('h5').not('.h6-size-match, .h4-size-match, .h3-size-match, .h2-size-match, .h1-size-match');
    this.h5_e_size_change = jQuery('h5.e-size-change');
    this.sizeMatch5 = jQuery('.h5-size-match').not('.h6-size-match, .h4-size-match, .h3-size-match, .h2-size-match, .h1-size-match');
    if (this.sizeChange5.length) {
      this.sizeChange5 = this.elementsToChange(this.sizeChange5, 'e-no-size-change','no-size-change',0,'size-change',0, this.sizeMatch5, this.h5_e_size_change);
    } else {
        this.sizeChange5 = jQuery.merge(this.sizeMatch5, this.h5_e_size_change);
    }
    if (this.sizeChange5.length) {
      this.sizeChange5OS = this.sizeO(this.sizeChange5);
      menuSettings7777777.sizeOn = 1;
    }


    this.sizeChange4 = jQuery('.size-change').find('a, address, audio, blockquote, button, figcaption, p, summary, svg, textarea, dd, dt, li, caption, th, td, h4').not('.h5-size-match, .h6-size-match, .h3-size-match, .h2-size-match, .h1-size-match');
    this.sizeMatch4 = jQuery('.h4-size-match, .e-button-change').not('.h5-size-match, .h6-size-match, .h3-size-match, .h2-size-match, .h1-size-match');
    this.h4_e_size_change = jQuery('address.e-size-change, audio.e-size-change, blockquote.e-size-change, button.e-size-change, figcaption.e-size-change, p.e-size-change, summary.e-size-change, svg.e-size-change, textarea.e-size-change, dd.e-size-change, dt.e-size-change, li.e-size-change, caption.e-size-change, th.e-size-change, td.e-size-change, h4.e-size-change');
    if (this.sizeChange4.length) {
      this.sizeChange4 = this.elementsToChange(this.sizeChange4, 'e-no-size-change','no-size-change', 0,'size-change', 0, this.sizeMatch4, this.h4_e_size_change);
    } else {
        this.sizeChange4 = jQuery.merge(this.sizeMatch4, this.h4_e_size_change);
    }
    if (this.sizeChange4.length) {
      this.sizeChange4OS = this.sizeO(this.sizeChange4);
      menuSettings7777777.sizeOn = 1;
    }

    this.sizeChange3 = jQuery('.size-change').find('h3').not('.h5-size-match, .h4-size-match, .h6-size-match, .h2-size-match, .h1-size-match');
    this.h3_e_size_change = jQuery('h3.e-size-change');
    this.sizeMatch3 = jQuery('.h3-size-match').not('.h5-size-match, .h4-size-match, .h6-size-match, .h2-size-match, .h1-size-match');
    if (this.sizeChange3.length) {
      this.sizeChange3 = this.elementsToChange(this.sizeChange3, 'e-no-size-change','no-size-change', 0,'size-change',0, this.sizeMatch3, this.h3_e_size_change);
    } else {
        this.sizeChange3 = jQuery.merge(this.sizeMatch3, this.h3_e_size_change);
    }
    if (this.sizeChange3.length) {
      this.sizeChange3OS = this.sizeO(this.sizeChange3);
      menuSettings7777777.sizeOn = 1;
    }

    this.sizeChange2 = jQuery('.size-change').find('h2').not('.h5-size-match, .h4-size-match, .h3-size-match, .h6-size-match, .h1-size-match');
    this.h2_e_size_change = jQuery('h2.e-size-change');
    this.sizeMatch2 = jQuery('.h2-size-match').not('.h5-size-match, .h4-size-match, .h3-size-match, .h6-size-match, .h1-size-match');
    if (this.sizeChange2.length) {
      this.sizeChange2 = this.elementsToChange(this.sizeChange2, 'e-no-size-change','no-size-change',0,'size-change',0, this.sizeMatch2, this.h2_e_size_change);
    } else {
        this.sizeChange2 = jQuery.merge(this.sizeMatch2, this.h2_e_size_change);
    }
    if (this.sizeChange2.length) {
      this.sizeChange2OS = this.sizeO(this.sizeChange2);
      menuSettings7777777.sizeOn = 1;
    }

    this.sizeChange1 = jQuery('.size-change').find('h1').not('.h5-size-match, .h4-size-match, .h3-size-match, .h2-size-match, .h6-size-match');
    this.h1_e_size_change = jQuery('h1.e-size-change');
    this.sizeMatch1 = jQuery('.h1-size-match').not('.h5-size-match, .h4-size-match, .h3-size-match, .h2-size-match, .h6-size-match');
    if (this.sizeChange1.length) {
      this.sizeChange1 = this.elementsToChange(this.sizeChange1, 'e-no-size-change','no-size-change',0,'size-change',0, this.sizeMatch1, this.h1_e_size_change);
    } else {
        this.sizeChange1 = jQuery.merge(this.sizeMatch1, this.h1_e_size_change);
    }
    if (this.sizeChange1.length) {
      this.sizeChange1OS = this.sizeO(this.sizeChange1);
      menuSettings7777777.sizeOn = 1;
    }
    /* build element lists for background-change classes */
    this.background_change = jQuery('.color-change, .background-change');
    this.background_change_textarea = jQuery('.color-change, .background-change').find('textarea');
    if (this.background_change_textarea.length) {
      this.background_change = this.elementsToChange(this.background_change_textarea, 0,'no-color-change','no-background-change','color-change','background-change', this.background_change, 0);
    }
    if (this.background_change.length) {
      this.background_changeO = this.backgroundColorO(this.background_change);
      menuSettings7777777.backgroundOn = 1;
    }
    this.gradient_change = jQuery('.gradient-change');
    if (this.gradient_change.length) {
      this.gradient_changeO = this.gradientColorO(this.gradient_change);
      menuSettings7777777.backgroundOn = 1;
    }
    this.background_change_button = jQuery('.color-change, .background-change').find('button').not('.e-text-change, .h1-title-match, .h2-title-match, .h3-title-match, .h4-title-match, .h5-title-match, .h6-title-match');
    if (this.background_change_button.length){
      this.background_change_button = this.elementsToChange(this.background_change_button, 'e-no-button-change','no-background-change','no-color-change','background-change','color-change', this.e_button_change);
    } else {
      this.background_change_button = this.e_button_change;
    }
    if (this.background_change_button.length){
    this.background_change_buttonO = this.fontColorO(this.background_change_button);
    }
  },
  /* methods to build original arrays */
  sizeO: function(elementArray) {
   var sizeArray = [];
   for (i=0;i<elementArray.length;i++) {
     sizeArray.push(window.getComputedStyle(elementArray[i], null).getPropertyValue('font-size'));
   }
   return sizeArray;
  },
  backgroundColorO: function(elementArray){
    var backgroundArray = [];
    for (i=0;i<elementArray.length;i++) {
      backgroundArray.push(jQuery(elementArray[i]).css('background-color'));

    }
    return backgroundArray;
  },
  buttonBackgroundColorO: function(elementArray){
    var backgroundArray = [];
    for (i=0;i<elementArray.length;i++) {
      if (jQuery(elementArray[i]).css('background-color')== 'rgb(192, 192, 192)'||jQuery(elementArray[i]).css('background-color')== 'rgb(240, 240, 240)') {
        backgroundArray.push('white');
      } else {
        backgroundArray.push(jQuery(elementArray[i]).css('background-color'));
      }
    }
    return backgroundArray;
  },
  buttonBorderColorO: function(elementArray){
    var borderCArray = [];
    for (i=0;i<elementArray.length;i++) {
      if (jQuery(elementArray[i]).css('border-color') == 'rgb(0, 0, 0) rgb(192, 192, 192)') {
        borderCArray.push('rgb(192, 192, 192)');
      } else {
        borderCArray.push(jQuery(elementArray[i]).css('border-color'));
      }
    }
    return borderCArray;
  },
  gradientColorO: function(elementArray){
    var gradientArray = [];
    for (i=0;i<elementArray.length;i++) {
      gradientArray.push(jQuery(elementArray[i]).css('background'));
    }
    return gradientArray;
  },
  fontColorO: function(elementArray){
    var fontCArray = [];
    for (i=0;i<elementArray.length;i++) {
      fontCArray.push(jQuery(elementArray[i]).css('color'));
    }
    return fontCArray;
  },
  borderColorO: function(elementArray){
    var borderCArray = [];
    for (i=0;i<elementArray.length;i++) {
      borderCArray.push(jQuery(elementArray[i]).css('border-color'));
    }
    return borderCArray;
  },
  borderWidthO: function(elementArray){
    var borderWArray = [];
    for (i=0;i<elementArray.length;i++) {
      if (jQuery(elementArray[i]).css('border-width')==0||jQuery(elementArray[i]).css('border-width')=='0px 2px') {
        borderWArray.push('1px');
      } else {
        borderWArray.push(jQuery(elementArray[i]).css('border-width'));
      }
    }
    return borderWArray;
  },
  borderRadiusO: function(elementArray){
    var borderRArray = [];
    for (i=0;i<elementArray.length;i++) {
      if (jQuery(elementArray[i]).css('border-radius')==0||jQuery(elementArray[i]).css('border-radius')=='0px') {
        borderRArray.push('5px');
      } else {
        borderRArray.push(jQuery(elementArray[i]).css('border-radius'));
      }
    }
    return borderRArray;
  },
  borderStyleO: function(elementArray){
    var borderSArray = [];
    for (i=0;i<elementArray.length;i++) {
      if (jQuery(elementArray[i]).css('border-style')==0||jQuery(elementArray[i]).css('border-style')=='none outset') {
        borderSArray.push('solid');
      } else {
        borderSArray.push(jQuery(elementArray[i]).css('border-style'));
      }
    }
    return borderSArray;
  },
  borderO: function(elementArray){
    var borderArray = [];
    for (i=0;i<elementArray.length;i++) {
      borderArray.push(jQuery(elementArray[i]).css('border'));
    }
    return borderArray;
  },
  /* essentially tests classes of element, if no classes are found goes up document tree to see if element has an ancestor with relevant classes, makes the 'no-color-change', 'no-text-change', 'no-title-change', and 'no-size-change' classes work correctly, by weeding out elements that should not change */
  elementsToChange: function(topEArray, elementNegative, parentNegative1, parentNegative2, parentPositive1, parentPositive2, bottomEArray, bottomEArray2, bottomEArray3, bottomEArray4) {
    var removeArray = [], eNMatcher = new RegExp(elementNegative
  ), pNMatcher, pPMatcher;
    if (parentNegative2) {
      var pNMatcher = new RegExp(parentNegative1 + '|' + parentNegative2);
    } else {
      var pNMatcher = new RegExp(parentNegative1);
    }
    if (parentPositive2) {
      var pPMatcher = new RegExp(parentPositive1 + '|' + parentPositive2);
    } else {
      var pPMatcher = new RegExp(parentPositive1);
    }
    for(i=0;i<topEArray.length;i++){
      var elementToRemove = eNMatcher.test(jQuery(topEArray[i]).attr('class')), doneWithTest = 0, parentX = 0, parentClass, elementToRemoveP, elementToKeep;
      if (!elementToRemove) {
        while (!doneWithTest) {
          parentClass = jQuery(topEArray[i]).parents().eq(parentX).attr('class');
          if (!parentClass) {
            doneWithTest = 1;
          }
          var elementToRemoveP = pNMatcher.test(parentClass);
          if (!elementToRemoveP) {
            var elementToKeep = pPMatcher.test(parentClass);
            if (elementToKeep){
              doneWithTest = 1;
            }
          } else {
            doneWithTest = 1;
          }
          parentX++;
        }
      }
      if (elementToRemoveP || elementToRemove) {
        removeArray.push(i);
      }
    }
    if (bottomEArray && bottomEArray.length){
      topEArray = jQuery.merge(topEArray, bottomEArray);
    }
    if (bottomEArray2 && bottomEArray2.length){
      topEArray = jQuery.merge(topEArray, bottomEArray2);
    }
    if (bottomEArray3 && bottomEArray3.length){
      topEArray = jQuery.merge(topEArray, bottomEArray3);
    }
    if (bottomEArray4 && bottomEArray4.length){
      topEArray = jQuery.merge(topEArray, bottomEArray4);
    }
    if (removeArray.length) {
      removeArray.reverse();
      for(i=0;i<removeArray.length;i++){
        topEArray.splice(removeArray[i],1);
      }
    }
    return topEArray;
  },
  /* changes font-size by 4px */
  changeSize: function (csArray, dirct) {
    for (i=0;i<csArray.length;i++) {
      var size = Number(jQuery(csArray[i]).css('font-size').slice(0,-2));
      if(dirct == 'plus') {
        size = (size + 4) + 'px';
      } else {
        size = (size - 4) + 'px';
      }
      csArray[i].style.fontSize = size;
    }
  },
  plusMinus: function (textSize,direction) {
    if (menuSettings7777777.sizeHasChanged == 0) {
      menuSettings7777777.sizeHasChanged = 1;
    }
    var fontSize4 = textSize + 'px';
    if(this.sizeChange1.length) {
      this.changeSize(this.sizeChange1, direction);
    }
    if(this.sizeChange2.length) {
      this.changeSize(this.sizeChange2, direction);
    }
    if(this.sizeChange3.length) {
      this.changeSize(this.sizeChange3, direction);
    }
    if(this.sizeChange4.length) {
      this.changeSize(this.sizeChange4, direction);
    }
    if(this.sizeChange5.length) {
      this.changeSize(this.sizeChange5, direction);
    }
    if(this.sizeChange6.length) {
      this.changeSize(this.sizeChange6, direction);
    }
    /* refreshing waypoints when resized if jQuery Waypoint plugin is in use */
    if (typeof Waypoint != "undefined") {
      Waypoint.refreshAll();
    }
  }
}


/* menu settings object: builds menu from ground up, controls what does and does not show up in the men, and adjust some CSS styling depending on which features are showing up in menu */
menuSettings7777777 = {
  fPColor: undefined, /* stands for font Plugin Color - used to change background color of icon */
  fPFontColor: undefined, /* stands for font Plugin Font Color - used to change color of three ASCII characters in icon */
  shape: undefined, /* used to change icon to square shape */
  colorChange: undefined, /* used to alternate between changing background, text and heading color */
  pluginSide: 'right', /* sets menu alignment of plugin to right or left */
  menuWidth: undefined, /* used for CSS width values */
  lastNID: undefined, /* last color value */
  backgroundOn: 0, /* turns background feature on */
  textOn: 0, /* turns text feature on */
  titleOn: 0, /* turns title feature on */
  sizeOn: 0, /* turns size feature on */
  presets: 1, /* turns preset side of menu on */
  sizeHasChanged: 0, /* keeps track of whether user has changed size */
  /* array of color values, stands for button Color Array */
  bCA: [ '#0d0d0d', '#1a1a1a', '#262626','#333','#404040', '#4d4d4d', '#595959','#666', '#737373', '#808080', '#8c8c8c', '#999', '#a6a6a6','#b3b3b3','#bfbfbf','#ccc','#d9d9d9','#e6e6e6', '#f2f2f2', '#fff',
  /*2 light blue*/
  '#001a1a', '#003333', '#004d4d', '#006666', '#008080', '#009999', '#00b3b3', '#00cccc',
  '#00e6e6', '#00ffff', '#1affff', '#33ffff', '#4dffff', '#66ffff', '#80ffff', '#99ffff',
  '#b3ffff', '#ccffff', '#e6ffff', '#fff',
  /* 3 mint green*/
  '#001a14','#003329','#004d3d','#006652','#008066',
  '#00997a','#00b38f','#00cca3','#00e6b8','#00ffcc',
  '#1affd1','#33ffd6','#4dffdb','#66ffe0','#80ffe5',
  '#99ffeb','#b3fff0','#ccfff5','#e6fffa','#fff',
  /*4 lime green*/
  '#001a00','#003300','#004d00','#006600','#008000',
  '#009900','#00b300','#00cc00','#00e600','#00ff00',
  '#1aff1a','#33ff33','#4dff4d','#66ff66','#80ff80',
  '#99ff99','#b3ffb3','#ccffcc','#e6ffe6','#fff',
  /*5 yellow*/
  '#1a1a00', '#333300', '#4d4d00', '#666600', '#808000', '#999900',  '#b3b300', '#cccc00', '#e6e600', '#ffff00', '#ffff1a', '#ffff33', '#ffff4d', '#ffff66', '#ffff80',
  '#ffff99', '#ffffb3', '#ffffcc', '#ffffe6', '#fff',
  /* 6 light orange*/
  '#1a0f00', '#331f00', '#4d2e00', '#663d00', '#804d00', '#995c00', '#b36b00', '#cc7a00',
  '#e68a00', '#ff9900', '#ffa31a', '#ffad33', '#ffb84d', '#ffc266', '#ffcc80', '#ffd699',
  '#ffe0b3', '#ffebcc', '#fff5e6', '#fff',
  /*7 dark orange*/
  '#1a0a00','#331400','#4d1f00','#662900','#803300','#993d00','#b34700','#cc5200','#e65c00','#ff6600','#ff751a','#ff8533','#ff944d','#ffa366','#ffb380','#ffc299','#ffd1b3','#ffe0cc','#fff0e6','#fff',
  /*8 red*/
  '#1a0000','#330000','#4d0000','#660000','#800000','#990000','#b30000','#cc0000','#e60000','#ff0000','#ff1a1a','#ff3333','#ff4d4d','#ff6666','#ff8080','#ff9999','#ffb3b3','#ffcccc','#ffe6e6','#fff',
  /*9 pink*/
  '#1a000a','#330014','#4d001f','#660029','#800033','#99003d','#b30047','#cc0052','#e6005c','#ff0066','#ff1a75','#ff3385','#ff4d94','#ff66a3','#ff80b3','#ff99c2','#ffb3d1','#ffcce0','#ffe6f0','#fff',
  /*10 lavender*/
  '#13001a','#260033','#39004d','#4d0066','#600080','#730099','#8600b3','#9900cc','#ac00e6','#bf00ff','#c61aff','#cc33ff','#d24dff','#d966ff','#df80ff','#e699ff','#ecb3ff','#f2ccff','#f9e6ff','#fff',
  /*11 purple*/
  '#0d001a','#1a0033','#26004d','#330066','#400080','#4d0099','#5900b3','#6600cc','#7300e6','#8000ff','#8c1aff','#9933ff','#a64dff','#b366ff','#bf80ff','#cc99ff','#d9b3ff','#e6ccff','#f2e6ff','#fff',
  /*12 blue*/
  '#00001a','#000033','#00004d','#000066','#000080','#000099','#0000b3','#0000cc','#0000e6','#0000ff','#1a1aff','#3333ff','#4d4dff','#6666ff','#8080ff','#9999ff','#b3b3ff','#ccccff','#e6e6ff','#fff',
  /*13 light blue Saturation 70%*/
  '#def2f2','#d3e8e8','#c8dfdf','#bdd6d6','#b2cccc','#a6c3c3','#9bbaba','#90b1b1','#85a7a7','#7a9e9e','#6f9595','#648b8b','#598282','#4e7979','#427070','#376666','#2c5d5d','#215454','#164a4a','#0b4141',
  /*14 mint green Saturation 65%*/
  '#dff2ed','#d4e8e4','#c9dfda','#bed5d0','#b3ccc6','#a8c3bd','#9db9b3','#92b0a9','#87a6a0','#7c9d96','#70948c','#658a83','#5a8179','#4f776f','#446e66','#39655c','#2e5b52','#235248','#18483f','#0d3f35',
  /*15 green saturation 65%*/
  '#dff2df','#d4e8d4','#c9dfc9','#bed5be','#b3ccb3','#a8c3a8','#9db99d','#92b092','#87a687','#7c9d7c','#709470','#658a65','#5a815a','#4f774f','#446e44','#396539','#2e5b2e','#235223','#184818','#0d3f0d',
  /*16 yellow saturation 65%*/
  '#f2f2df','#e8e8d4','#dfdfc9','#d5d5be','#ccccb3','#c3c3a8','#b9b99d','#b0b092','#a6a687','#9d9d7c','#949470','#8a8a65','#81815a','#77774f','#6e6e44','#656539','#5b5b2e','#525223','#484818','#3f3f0d',
  /*17 light orange saturation 65%*/
  '#f2eadf','#e8e0d4','#dfd6c9','#d5ccbe','#ccc2b3','#c3b8a8','#b9ae9d','#b0a492','#a69a87','#9d907c','#948570','#8a7b65','#81715a','#77674f','#6e5d44','#655339','#5b492e','#523f23','#483518','#3f2b0d',
  /*18 dark orange saturation 65%*/
  '#f2e7df','#e8dcd4','#dfd2c9','#d5c7be','#ccbdb3','#c3b3a8','#b9a89d','#b09e92','#a69387','#9d897c','#947f70','#8a7465','#816a5a','#775f4f','#6e5544','#654b39','#5b402e','#523623','#482b18','#3f210d',
  /*19 red saturation 65%*/
  '#f2dfdf','#e8d4d4','#dfc9c9','#d5bebe','#ccb3b3','#c3a8a8','#b99d9d','#b09292','#a68787','#9d7c7c','#947070','#8a6565','#815a5a','#774f4f','#6e4444','#653939','#5b2e2e','#522323','#481818','#3f0d0d',
  /*20 pink saturation 65%*/
  '#f2dfe7','#e8d4dc','#dfc9d2','#d5bec7','#ccb3bd','#c3a8b3','#b99da8','#b0929e','#a68793','#9d7c89','#94707f','#8a6574','#815a6a','#774f5f','#6e4455','#65394b','#5b2e40','#522336','#48182b','#3f0d21',
  /*21 lavender saturation 65%*/
  '#eddff2','#e4d4e8','#dac9df','#d0bed5','#c6b3cc','#bca8c3','#b39db9','#a992b0','#9f87a6','#967c9d','#8c7094','#82658a','#785a81','#6e4f77','#65446e','#5b3965','#512e5b','#482352','#3e1848','#340d3f',
  /*22 purple saturation 65%*/
  '#e8def2','#ded3ea','#d3c7e1','#c9bbd8','#bfb0d0','#b4a4c7','#aa98be','#a08cb5','#9681ad','#8c75a4','#81699b','#775e93','#6d528a','#624681','#583a78','#4e2f70','#442367','#3a175e','#2f0c56','#25004d',
  /*23 blue saturation 65%*/
  '#dfdff2','#d4d4e8','#c9c9df','#bebed5','#b3b3cc','#a8a8c3','#9d9db9','#9292b0','#8787a6','#7c7c9d','#707094','#65658a','#5a5a81','#4f4f77','#44446e','#393965','#2e2e5b','#232352','#181848','#0d0d3f',
  /* lighter colors for top row*/
  '#e9fbfb','#eafbf7','#eafbea','#fbfbea','#fbf4ea','#fbf1ea','#fbeaea','#fbeaf1','#f7eafb','#f2eafb','#eaeafb',
  /*darker colors for top row*/
  '#031414','#041310','#041304','#131304','#130d04','#130a04','#130404','#13040A','#100413','#0b0017','#040413'
  ],
  setSide: function() {
    /* sets alignment of menu */
    var fP = elementSettings7777777.findSingleCArray('fontPlugin-55555'), fOC = elementSettings7777777.findSingleCArray('fontOptCon-55555'), lCC = elementSettings7777777.findSingleCArray('colCon-55555');
    if (this.pluginSide == 'right') {
      fP.classList.add('fontPluginRight-55555');
      fOC.classList.add('fontOptConRight-55555');
      lCC.classList.add('lastColConRight-55555');
    } else if (this.pluginSide == 'left') {
      topTri = elementSettings7777777.findSingleCArray('topTri-55555');
      fP.classList.add('fontPluginLeft-55555');
      fOC.classList.add('fontOptConLeft-55555');
      lCC.classList.add('lastColConLeft-55555');
      if (this.menuWidth>200) {
        topTri.style.right = "370px";
      } else {
        topTri.style.right = "170px";
      }
    }
  },
  /*builds menu responsively based on classes and elements included in page */
  buildMenu: function() {
    jQuery('.coloraise').html('\<div class="fontPlugin-55555">\</div>\<div class="fontOptCon-55555">\</div>\<div class="colCon-55555">\</div>');
    jQuery('.coloraise').addClass('no-color-change no-size-change');
    jQuery('.fontPlugin-55555').html('\<p class="tP-55555 charColor">&#19973;</p>\<p class="tP2-55555 charColor">&#725;</p>\<p class="pencilP-55555 charColor">&#9998;</p>');
    jQuery('.fontOptCon-55555').html('\<div class="topTri-55555"></div>\
    <button class="xB-55555" id="xB1-333">\<div class="xClose-55555" id="xClose1-333"><p class="xP-55555" id="xP-333">x</p></div>\</button>\
    <div class="buttonBoxPresets-55555">\
    <div class="originalBCon-55555">\<div class="fOTitle-55555 fOTitleA-55555 fOBB-55555" id="fOTitle4-333">\<button class="fOB-55555" id="cB004-333">Original</button>\<label class="switch-55555" id="swi1-333">\<input type="checkbox" checked id="inp1-333">\<span class="slider-55555 round-55555"></span>\</label>\</div>\</div>\
    <div class="laserVisionBCon-55555">\<div class="fOTitle-55555 fOTitleA-55555 fOBB-55555" id="fOTitle5-333">\<button class="fOB-55555" id="cB005-333">Laser Vision</button>\<label class="switch-55555" id="swi2-333">\<input type="checkbox" id="inp2-333">\<span class="slider-55555 round-55555"></span>\</label>\</div>\</div>\
    <div class="warmBCon-55555">\<div class="fOTitle-55555 fOTitleA-55555 fOBB-55555" id="fOTitle6-333">\<button class="fOB-55555" id="cB006-333">Grayscale</button>\<label class="switch-55555" id="swi3-333">\<input type="checkbox" id="inp3-333">\<span class="slider-55555 round-55555"></span>\</label>\</div>\</div>\
    <div class="greyscaleBCon-55555">\<div class="fOTitle-55555 fOTitleA-55555" id="fOTitle7-333">\<button class="fOB-55555" id="cB007-333">Dusk</button>\<label class="switch-55555" id="swi4-333">\<input type="checkbox" id="inp4-333">\<span class="slider-55555 round-55555"></span>\</label>\</div>\</div>\</div>\
    <div class="buttonBoxMain-55555">\
      <div class="backgroundCCon-55555 fOBB-55555" id="fOTitle1-333">\
      <button class="fOB-55555" id="cB001-333">Background</button>\
      <button class="cB-55555" id="cB1-333"></button>\
      </div>\
      <div class="textCCon-55555">\
        <div class="fOTitle-55555 fOBB-55555" id="fOTitle2-333">\
          <button class="fOB-55555" id="cB002-333">Text</button>\
          <button class="cB-55555" id="cB2-333"></button>\
        </div>\
      </div>\
      <div class="titleCCon-55555">\
        <div class="fOTitle-55555 fOBB-55555" id="fOTitle3-333">\
          <button class="fOB-55555" id="cB003-333">Titles</button>\
          <button class="cB-55555" id="cB3-333"></button>\
        </div>\
      </div>\
      <div id="originalConLeft-333" class="originalBCon-55555">\<div class="fOTitle-55555 fOTitleA-55555 fOBB-55555" id="fOTitle8-333">\<button class="fOB-55555" id="cB008-333">Original</button>\<label class="switch-55555" id="swi5-333">\<input type="checkbox" checked id="inp5-333">\<span class="slider-55555 round-55555"></span>\</label>\</div>\</div>\
      <div class="textSCon-55555">\
        <div class="fOTitle-55555">\
          <p class="fOP-55555">Size</p>\
          <button class="plusMinusB-55555" id="minusB-333">\
            <p class="pMP-55555" id="mP-333">-</p>\
          </button>\
          <button class="plusMinusB-55555" id="plusB-333">\
            <p class="pMP-55555" id="pP-333">+</p>\
          </button>\
        </div>\
      </div>\
    </div>');
    /* decides what shows up in menu */
    if (this.sizeOn){
      jQuery('.textSCon-55555').css('display','block');
    }
    if (this.backgroundOn){
      jQuery('.backgroundCCon-55555').css('display','block');
    }
    if (this.textOn){
      jQuery('.textCCon-55555').css('display','block');
    }
    if (this.titleOn){
      jQuery('.titleCCon-55555').css('display','block');
    }
    /* setting some CSS values */
    var presetsOpt = Number(this.backgroundOn) + Number(this.textOn) + Number(this.titleOn);
    if (this.presets && presetsOpt==3) {
      jQuery('.buttonBoxPresets-55555').css('display','block');
      jQuery('#originalConLeft-333').css('display','none');
      jQuery('.fontOptCon-55555').css({'width':'400px','height':'220px'});
      this.menuWidth = 400;
      jQuery('.buttonBoxMain-55555').css({'height':'200px'});
    } else {
      presetsOpt = Number(this.backgroundOn) + Number(this.textOn) + Number(this.titleOn) + Number(this.sizeOn);
      var newHeight = (presetsOpt*50)+70 + 'px', newBBHeight = ((presetsOpt*50)+50)+ 'px', lastCCTop = (presetsOpt*50)+142 + 'px';
      jQuery('.fontOptCon-55555').css({'height':newHeight});
      jQuery('.buttonBoxMain-55555').css({'height':newBBHeight});
      jQuery('.colCon-55555').css('top',lastCCTop);
    }
    /* and building the color container where user can select colors */
    jQuery('.colCon-55555').html('<button class="xB-55555" id="xB4-333">\<div class="xClose-55555" id="xClose4-333"><p class="xP-55555" id="xP3-333">x</p></div>\</button>\<div class="lBCon-55555">\<button class="lCBox-55555 cB300-55555"></button>\<button class="lCBox-55555 cB301-55555"></button>\<button class="lCBox-55555 cB302-55555"></button>\<button class="lCBox-55555 cB303-55555"></button>\<button class="lCBox-55555 cB304-55555"></button>\<button class="lCBox-55555 cB305-55555"></button>\<button class="lCBox-55555 cB306-55555"></button>\<button class="lCBox-55555 cB307-55555"></button>\<button class="lCBox-55555 cB308-55555"></button>\<button class="lCBox-55555 cB309-55555"></button>\<button class="lCBox-55555 cB310-55555"></button>\
    <button class="lCBox-55555 cB311-55555"></button>\</div>\<div class="lBCon2-55555">\<button class="lCBox-55555 cB312-55555"></button>\<button class="lCBox-55555 cB313-55555"></button>\<button class="lCBox-55555 cB314-55555"></button>\<button class="lCBox-55555 cB315-55555"></button>\<button class="lCBox-55555 cB316-55555"></button>\<button class="lCBox-55555 cB317-55555"></button>\<button class="lCBox-55555 cB318-55555"></button>\<button class="lCBox-55555 cB319-55555"></button>\<button class="lCBox-55555 cB320-55555"></button>\<button class="lCBox-55555 cB321-55555"></button>\<button class="lCBox-55555 cB322-55555"></button>\
    </div>\<div class="bWS100-55555">\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR0-55555" id="cB-333-399"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR22-55555" id="cB-333-400"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR23-55555" id="cB-333-401"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR24-55555" id="cB-333-402"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR25-55555" id="cB-333-403"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR26-55555" id="cB-333-404"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR27-55555" id="cB-333-405"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR28-55555" id="cB-333-406"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR29-55555" id="cB-333-407"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR30-55555" id="cB-333-408"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR31-55555" id="cB-333-409"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR32-55555" id="cB-333-410"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR33-55555" id="cB-333-411"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR34-55555" id="cB-333-412"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR35-55555" id="cB-333-413"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR36-55555" id="cB-333-414"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR37-55555" id="cB-333-415"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR38-55555" id="cB-333-416"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR39-55555" id="cB-333-417"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR40-55555" id="cB-333-418"></button>\
    <button class="lCCColSel-55555 lCCColSel1-55555 lCCColSelR41-55555" id="cB-333-419"></button>\</div>\
    <div class="lBS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-398"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-420"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-421"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-422"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-423"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-424"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-425"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-426"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-427"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-428"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-429"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-430"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-431"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-432"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-433"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-434"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-435"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-436"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-437"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-438"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-439"></button>\</div>\
    <div class="mGS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-397"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-440"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-441"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-442"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-443"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-444"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-445"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-446"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-447"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-448"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-449"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-450"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-451"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-452"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-453"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-454"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-455"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-456"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-457"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-458"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-459"></button>\
    </div>\
    <div class="lGS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-396"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-460"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-461"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-462"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-463"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-464"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-465"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-466"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-467"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-468"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-469"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-470"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-471"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-472"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-473"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-474"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-475"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-476"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-477"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-478"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-479"></button>\</div>\
    <div class="yeS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-395"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-480"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-481"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-482"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-483"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-484"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-485"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-486"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-487"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-488"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-489"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-490"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-491"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-492"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-493"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-494"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-495"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-496"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-497"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-498"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-499"></button>\</div>\
    <div class="lOS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-394"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-500"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-501"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-502"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-503"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-504"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-505"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-506"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-507"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-508"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-509"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-510"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-511"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-512"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-513"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-514"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-515"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-516"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-517"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-518"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-519"></button>\</div>\
    <div class="dOS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-393"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-520"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-521"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-522"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-523"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-524"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-525"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-526"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-527"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-528"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-529"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-530"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-531"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-532"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-533"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-534"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-535"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-536"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-537"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-538"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-539"></button>\</div>\
    <div class="reS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-392"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-540"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-541"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-542"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-543"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-544"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-545"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-546"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-547"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-548"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-549"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-550"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-551"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-552"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-553"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-554"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-555"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-556"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-557"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-558"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-559"></button>\</div>\
    <div class="piS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-391"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-560"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-561"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-562"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-563"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-564"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-565"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-566"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-567"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-568"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-569"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-570"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-571"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-572"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-573"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-574"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-575"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-576"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-577"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-578"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-579"></button>\</div>\
    <div class="laS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-390"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-580"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-581"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-582"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-583"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-584"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-585"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-586"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-587"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-588"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-589"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-590"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-591"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-592"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-593"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-594"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-595"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-596"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-597"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-598"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-599"></button>\</div>\
    <div class="puS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-389"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-600"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-601"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-602"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-603"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-604"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-605"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-606"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-607"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-608"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-609"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-610"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-611"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-612"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-613"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-614"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-615"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-616"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-617"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-618"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-619"></button>\</div>\
    <div class="blS100-55555">\
    <button class="lCCColSel-55555 lCCColSelR0-55555" id="cB-333-388"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-620"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-621"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-622"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-623"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-624"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-625"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-626"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-627"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-628"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-629"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-630"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-631"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-632"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-633"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-634"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-635"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-636"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-637"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-638"></button>\
    <button class="lCCColSel-55555 lCCColSelR21-55555" id="cB-333-639"></button>\</div>\
    <div class="lBS70-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-860"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-640"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-641"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-642"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-643"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-644"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-645"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-646"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-647"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-648"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-649"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-650"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-651"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-652"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-653"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-654"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-655"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-656"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-657"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-658"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-659"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-871"></button>\</div>\
    <div class="mGS65-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-861"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-660"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-661"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-662"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-663"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-664"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-665"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-666"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-667"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-668"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-669"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-670"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-671"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-672"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-673"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-674"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-675"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-676"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-677"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-678"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-679"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-872"></button>\</div>\
    <div class="lGS65-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-862"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-680"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-681"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-682"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-683"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-684"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-685"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-686"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-687"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-688"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-689"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-690"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-691"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-692"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-693"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-694"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-695"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-696"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-697"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-698"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-699"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-873"></button>\</div>\
    <div class="yeS65-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-863"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-700"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-701"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-702"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-703"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-704"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-705"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-706"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-707"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-708"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-709"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-710"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-711"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-712"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-713"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-714"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-715"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-716"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-717"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-718"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-719"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-874"></button>\</div>\
    <div class="lOS65-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-864"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-720"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-721"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-722"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-723"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-724"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-725"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-726"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-727"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-728"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-729"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-730"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-731"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-732"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-733"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-734"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-735"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-736"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-737"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-738"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-739"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-875"></button>\</div>\
    <div class="dOS65-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-865"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-740"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-741"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-742"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-743"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-744"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-745"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-746"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-747"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-748"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-749"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-750"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-751"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-752"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-753"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-754"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-755"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-756"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-757"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-758"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-759"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-876"></button>\</div>\
    <div class="reS65-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-866"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-760"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-761"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-762"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-763"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-764"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-765"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-766"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-767"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-768"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-769"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-770"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-771"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-772"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-773"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-774"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-775"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-776"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-777"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-778"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-779"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-877"></button>\</div>\
    <div class="piS65-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-867"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-780"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-781"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-782"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-783"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-784"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-785"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-786"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-787"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-788"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-789"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-790"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-791"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-792"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-793"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-794"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-795"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-796"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-797"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-798"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-799"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-878"></button>\</div>\
    <div class="laS65-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-868"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-800"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-801"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-802"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-803"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-804"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-805"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-806"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-807"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-808"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-809"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-810"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-811"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-812"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-813"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-814"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-815"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-816"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-817"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-818"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-819"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-879"></button>\</div>\
    <div class="puS65-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-869"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-820"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-821"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-822"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-823"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-824"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-825"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-826"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-827"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-828"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-829"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-830"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-831"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-832"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-833"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-834"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-835"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-836"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-837"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-838"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-839"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-880"></button>\</div>\
    <div class="blS65-55555">\
    <button class="lCCColSel-55555 lCCColSelR01-55555" id="cB-333-870"></button>\
    <button class="lCCColSel-55555 lCCColSelR1-55555" id="cB-333-840"></button>\
    <button class="lCCColSel-55555 lCCColSelR2-55555" id="cB-333-841"></button>\
    <button class="lCCColSel-55555 lCCColSelR3-55555" id="cB-333-842"></button>\
    <button class="lCCColSel-55555 lCCColSelR4-55555" id="cB-333-843"></button>\
    <button class="lCCColSel-55555 lCCColSelR5-55555" id="cB-333-844"></button>\
    <button class="lCCColSel-55555 lCCColSelR6-55555" id="cB-333-845"></button>\
    <button class="lCCColSel-55555 lCCColSelR7-55555" id="cB-333-846"></button>\
    <button class="lCCColSel-55555 lCCColSelR8-55555" id="cB-333-847"></button>\
    <button class="lCCColSel-55555 lCCColSelR9-55555" id="cB-333-848"></button>\
    <button class="lCCColSel-55555 lCCColSelR10-55555" id="cB-333-849"></button>\
    <button class="lCCColSel-55555 lCCColSelR11-55555" id="cB-333-850"></button>\
    <button class="lCCColSel-55555 lCCColSelR12-55555" id="cB-333-851"></button>\
    <button class="lCCColSel-55555 lCCColSelR13-55555" id="cB-333-852"></button>\
    <button class="lCCColSel-55555 lCCColSelR14-55555" id="cB-333-853"></button>\
    <button class="lCCColSel-55555 lCCColSelR15-55555" id="cB-333-854"></button>\
    <button class="lCCColSel-55555 lCCColSelR16-55555" id="cB-333-855"></button>\
    <button class="lCCColSel-55555 lCCColSelR17-55555" id="cB-333-856"></button>\
    <button class="lCCColSel-55555 lCCColSelR18-55555" id="cB-333-857"></button>\
    <button class="lCCColSel-55555 lCCColSelR19-55555" id="cB-333-858"></button>\
    <button class="lCCColSel-55555 lCCColSelR20-55555" id="cB-333-859"></button>\
    <button class="lCCColSel-55555 lCCColSelR42-55555" id="cB-333-881"></button>\</div>');
  }
}










jQuery(function(){
  /* first things first, build element lists, then build menu based off of element lists, and record average font-size */
  elementSettings7777777.buildElementLists();
  menuSettings7777777.buildMenu();
  elementSettings7777777.startingFontSize();
  /* change shape, color, and alignment of menu if necessary */
  if (menuSettings7777777.fPColor) {
    jQuery('.fontPlugin-55555').css('background',menuSettings7777777.fPColor);
  } else {
    jQuery('.fontPlugin-55555').addClass('gradient-background-55555');
  }
  if (menuSettings7777777.fPFontColor) {
    jQuery('.charColor').css('color',menuSettings7777777.fPFontColor);
  }
  if (menuSettings7777777.shape == 'square') {
    jQuery('.fontPlugin-55555').addClass('no-border-radius-55555');
  }
  menuSettings7777777.setSide();
  /* build totalEA and totalEAO arrays to use for scroll adjustment later */
  elementSettings7777777.totalEA = jQuery('.main-text-area-231').find('*');
  if (elementSettings7777777.totalEA.length == 0) {
    elementSettings7777777.totalEA = elementSettings7777777.totalElements;
  }
  if (elementSettings7777777.totalEA.length) {
    for(i=0;i<elementSettings7777777.totalEA.length;i++) {
      elementSettings7777777.totalEAO.push(jQuery(elementSettings7777777.totalEA[i]).offset().top);
    }
  }
  /* all of the click functions, which control what happens when user clicks on different parts of menu, starting with preset options */
  jQuery('#fOTitle4-333, #swi1-333, #inp1-333, #fOTitle8-333, #swi5-333, #inp5-333').click(function(){
    /* original button */
    if(!jQuery('#inp1-333').prop('checked')|!jQuery('#inp5-333').prop('checked')) {
      jQuery('#cB1-333, #cB2-333, #cB3-333').css('background-color','#f2f2f2');
      jQuery('#inp2-333, #inp3-333, #inp4-333').prop('checked',false);
      jQuery('#fOTitle1-333, #fOTitle2-333, #fOTitle3-333, #fOTitle5-333, #fOTitle6-333, #fOTitle7-333').css('background-color','transparent');
      jQuery('#cB001-333, #cB002-333, #cB003-333, #cB005-333, #cB006-333, #cB007-333').css({'color':'#000','font-weight': 'normal'});
      jQuery('#inp1-333, #inp5-333').prop('checked',true);
      jQuery('#fOTitle4-333, #fOTitle8-333').css('background-color','#404040');
      jQuery('#cB004-333, #cB008-333').css({'color':'#00ffcc','font-weight': 'bold'});
      jQuery('.colCon-55555').css('display','none');
      elementSettings7777777.backToOrig();
      if (menuSettings7777777.lastBackground) {
        jQuery(menuSettings7777777.lastBackground).css('border-color','rgba(255, 255, 255,0)');
        menuSettings7777777.lastBackground = 0;
      }
      if (menuSettings7777777.lastText) {
        jQuery(menuSettings7777777.lastText).css('border-color','rgba(255, 255, 255,0)');
        menuSettings7777777.lastText = 0
      }
      if (menuSettings7777777.lastTitle) {
        jQuery(menuSettings7777777.lastTitle).css('border-color','rgba(255, 255, 255,0)');
        menuSettings7777777.lastTitle = 0;
      }

    }
  });
  jQuery('#fOTitle5-333, #swi2-333, #inp2-333').click(function(){
    /* laser vision click function */
    if(!jQuery('#inp2-333').prop('checked')) {
      jQuery('.colCon-55555').css('display','none');
      jQuery('#inp1-333, #inp3-333, #inp4-333, #inp5-333').prop('checked',false);
      jQuery('#fOTitle1-333, #fOTitle2-333, #fOTitle3-333, #fOTitle4-333, #fOTitle6-333, #fOTitle7-333, #fOTitle8-333').css('background-color','transparent');
      jQuery('#cB001-333, #cB002-333, #cB003-333, #cB004-333, #cB006-333, #cB007-333, #cB008-333').css({'color':'#000','font-weight': 'normal'});
      jQuery('#inp2-333').prop('checked',true);
      jQuery('#fOTitle5-333').css('background-color','#404040');
      jQuery('#cB005-333').css({'color':'#00ffcc','font-weight': 'bold'});
      if (menuSettings7777777.lastBackground) {
        jQuery(menuSettings7777777.lastBackground).css('border-color','rgba(255, 255, 255,0)');
      }
      if (menuSettings7777777.lastText) {
        jQuery(menuSettings7777777.lastText).css('border-color','rgba(255, 255, 255,0)');
      }
      if (menuSettings7777777.lastTitle) {
        jQuery(menuSettings7777777.lastTitle).css('border-color','rgba(255, 255, 255,0)');
      }
      menuSettings7777777.lastBackground = '#cB399';
      menuSettings7777777.lastText = '#cB497';
      menuSettings7777777.lastTitle = '#cB451';
      /* titles */
      jQuery('#cB3-333').css('background-color','#33ffd6');
      jQuery(elementSettings7777777.title_change_h1).css('color','#33ffd6');
      jQuery(elementSettings7777777.title_change_h2).css('color','#df80ff');
      jQuery(elementSettings7777777.title_change_h3).css('color','#66ff66');
      jQuery(elementSettings7777777.title_change_h4).css('color','#ff3385');
      jQuery(elementSettings7777777.title_change_h5).css('color','#ffff66');
      jQuery(elementSettings7777777.title_change_h6).css('color','#ffad33');
      jQuery(elementSettings7777777.h1_background_match).css('background-color','#33ffd6');
      jQuery(elementSettings7777777.h2_background_match).css('background-color','#df80ff');
      jQuery(elementSettings7777777.h3_background_match).css('background-color','#66ff66');
      jQuery(elementSettings7777777.h4_background_match).css('background-color','#ff3385');
      jQuery(elementSettings7777777.h5_background_match).css('background-color','#ffff66');
      jQuery(elementSettings7777777.h6_background_match).css('background-color','#ffad33');
      jQuery(elementSettings7777777.h1_border_match).css('border-color','#33ffd6');
      jQuery(elementSettings7777777.h2_border_match).css('border-color','#df80ff');
      jQuery(elementSettings7777777.h3_border_match).css('border-color','#66ff66');
      jQuery(elementSettings7777777.h4_border_match).css('border-color','#ff3385');
      jQuery(elementSettings7777777.h5_border_match).css('border-color','#ffff66');
      jQuery(elementSettings7777777.h6_border_match).css('border-color','#ffad33');
      /* background */
      jQuery('#cB1-333').css('background-color','#000');
      jQuery(elementSettings7777777.background_change).css('background-color','#000');
      jQuery(elementSettings7777777.gradient_change).css('background','linear-gradient(#000,#000)');
      jQuery(elementSettings7777777.background_change_button).css('color','#000');
      /*text*/
      jQuery('#cB2-333').css('background-color','#ffffcc');
      jQuery(elementSettings7777777.text_change).css('color','#ffffcc');
      jQuery(elementSettings7777777.text_change_match).css('background-color','#ffffcc');
      jQuery(elementSettings7777777.text_border_match).css('border-color','#ffffcc');
    }
  });
  jQuery('#fOTitle7-333, #swi4-333, #inp4-333').click(function(){
    /* dusk click function */
    if(!jQuery('#inp4-333').prop('checked')) {
      jQuery('.colCon-55555').css('display','none');
      jQuery('#inp1-333, #inp2-333, #inp3-333, #inp5-333').prop('checked',false);
      jQuery('#fOTitle1-333, #fOTitle2-333, #fOTitle3-333, #fOTitle4-333, #fOTitle5-333, #fOTitle6-333, #fOTitle8-333').css('background-color','transparent');
      jQuery('#cB001-333, #cB002-333, #cB003-333, #cB004-333, #cB005-333, #cB006-333, #cB008-333').css({'color':'#000','font-weight': 'normal'});
      jQuery('#inp4-333').prop('checked',true);
      jQuery('#fOTitle7-333').css('background-color','#404040');
      jQuery('#cB007-333').css({'color':'#00ffcc','font-weight': 'bold'});
      if (menuSettings7777777.lastBackground) {
        jQuery(menuSettings7777777.lastBackground).css('border-color','rgba(255, 255, 255,0)');
      }
      if (menuSettings7777777.lastText) {
        jQuery(menuSettings7777777.lastText).css('border-color','rgba(255, 255, 255,0)');
      }
      if (menuSettings7777777.lastTitle) {
        jQuery(menuSettings7777777.lastTitle).css('border-color','rgba(255, 255, 255,0)');
      }
      menuSettings7777777.lastBackground = '#cB721';
      menuSettings7777777.lastText = '#cB877';
      menuSettings7777777.lastTitle = '#cB526';
      /* titles */
      jQuery('#cB3-333').css('background-color','#b34700');
      jQuery(elementSettings7777777.title_change_h1).css('color','#b34700');
      jQuery(elementSettings7777777.title_change_h2).css('color','#995c00');
      jQuery(elementSettings7777777.title_change_h3).css('color','#800000');
      jQuery(elementSettings7777777.title_change_h4).css('color','#5b492e');
      jQuery(elementSettings7777777.title_change_h5).css('color','#662900');
      jQuery(elementSettings7777777.title_change_h6).css('color','#660000');
      jQuery(elementSettings7777777.h1_background_match).css('background-color','#b34700');
      jQuery(elementSettings7777777.h2_background_match).css('background-color','#995c00');
      jQuery(elementSettings7777777.h3_background_match).css('background-color','#800000');
      jQuery(elementSettings7777777.h4_background_match).css('background-color','#5b492e');
      jQuery(elementSettings7777777.h5_background_match).css('background-color','#662900');
      jQuery(elementSettings7777777.h6_background_match).css('background-color','#660000');
      jQuery(elementSettings7777777.h1_border_match).css('border-color','#b34700');
      jQuery(elementSettings7777777.h2_border_match).css('border-color','#995c00');
      jQuery(elementSettings7777777.h3_border_match).css('border-color','#800000');
      jQuery(elementSettings7777777.h4_border_match).css('border-color','#5b492e');
      jQuery(elementSettings7777777.h5_border_match).css('border-color','#662900');
      jQuery(elementSettings7777777.h6_border_match).css('border-color','#660000');
      /* background */
      jQuery('#cB1-333').css('background-color','#e8e0d4');
      jQuery(elementSettings7777777.background_change).css('background-color','#e8e0d4');
      jQuery(elementSettings7777777.gradient_change).css('background','linear-gradient(#e8e0d4,#e8e0d4)');
      jQuery(elementSettings7777777.background_change_button).css('color','#e8e0d4');
      /*text*/
      jQuery('#cB2-333').css('background-color','#130404');
      jQuery(elementSettings7777777.text_change).css('color','#130404');
      jQuery(elementSettings7777777.text_change_match).css('background-color','#130404');
      jQuery(elementSettings7777777.text_border_match).css('border-color','#130404');
    }
  });
  jQuery('#fOTitle6-333, #swi3-333, #inp3-333').click(function(){
    /* grayscale click function */
    if(!jQuery('#inp3-333').prop('checked')) {
      jQuery('.colCon-55555').css('display','none');
      jQuery('#inp1-333, #inp2-333, #inp4-333, #inp5-333').prop('checked',false);
      jQuery('#fOTitle1-333, #fOTitle2-333, #fOTitle3-333, #fOTitle4-333, #fOTitle5-333, #fOTitle7-333, #fOTitle8-333').css('background-color','transparent');
      jQuery('#cB001-333, #cB002-333, #cB003-333, #cB004-333, #cB005-333, #cB007-333, #cB008-333').css({'color':'#000','font-weight': 'normal'});
      jQuery('#inp3-333').prop('checked',true);
      jQuery('#fOTitle6-333').css('background-color','#404040');
      jQuery('#cB006-333').css({'color':'#00ffcc','font-weight': 'bold'});
      if (menuSettings7777777.lastBackground) {
        jQuery(menuSettings7777777.lastBackground).css('border-color','rgba(255, 255, 255,0)');
      }
      if (menuSettings7777777.lastText) {
        jQuery(menuSettings7777777.lastText).css('border-color','rgba(255, 255, 255,0)');
      }
      if (menuSettings7777777.lastTitle) {
        jQuery(menuSettings7777777.lastTitle).css('border-color','rgba(255, 255, 255,0)');
      }
      menuSettings7777777.lastBackground = '#cB399';
      menuSettings7777777.lastText = '#cB419';
      menuSettings7777777.lastTitle = '#cB411';
      /* titles */
      jQuery('#cB3-333').css('background-color','#999');
      jQuery(elementSettings7777777.title_change_h1).css('color','#999');
      jQuery(elementSettings7777777.title_change_h2).css('color','#b3b3b3');
      jQuery(elementSettings7777777.title_change_h3).css('color','#ccc');
      jQuery(elementSettings7777777.title_change_h4).css('color','#d9d9d9');
      jQuery(elementSettings7777777.title_change_h5).css('color','#e6e6e6');
      jQuery(elementSettings7777777.title_change_h6).css('color','#f2f2f2');
      jQuery(elementSettings7777777.h1_background_match).css('background-color','#999');
      jQuery(elementSettings7777777.h2_background_match).css('background-color','#b3b3b3');
      jQuery(elementSettings7777777.h3_background_match).css('background-color','#ccc');
      jQuery(elementSettings7777777.h4_background_match).css('background-color','#d9d9d9');
      jQuery(elementSettings7777777.h5_background_match).css('background-color','#e6e6e6');
      jQuery(elementSettings7777777.h6_background_match).css('background-color','#f2f2f2');
      jQuery(elementSettings7777777.h1_border_match).css('border-color','#999');
      jQuery(elementSettings7777777.h2_border_match).css('border-color','#b3b3b3');
      jQuery(elementSettings7777777.h3_border_match).css('border-color','#ccc');
      jQuery(elementSettings7777777.h4_border_match).css('border-color','#d9d9d9');
      jQuery(elementSettings7777777.h5_border_match).css('border-color','#e6e6e6');
      jQuery(elementSettings7777777.h6_border_match).css('border-color','#f2f2f2');
      /* background */
      jQuery('#cB1-333').css('background-color','#000');
      jQuery(elementSettings7777777.background_change).css('background-color','#000');
      jQuery(elementSettings7777777.gradient_change).css('background','linear-gradient(#000,#000)');
      jQuery(elementSettings7777777.background_change_button).css('color','#000');
      /*text*/
      jQuery('#cB2-333').css('background-color','#fff');
      jQuery(elementSettings7777777.text_change).css('color','#fff');
      jQuery(elementSettings7777777.text_change_match).css('background-color','#fff');
      jQuery(elementSettings7777777.text_border_match).css('border-color','#fff');
    }
  });
  jQuery('.fontPlugin-55555').click(function(){
    jQuery('.fontOptCon-55555').css('display','block');
  });
  /* 'x' button click functions */
  jQuery('#xB1-333, #xClose1-333').click(function(){
    jQuery('.fontOptCon-55555, .colCon-55555').css('display','none');
    jQuery('#cB001-333, #cB002-333, #cB003-333').css({'color':'#000', 'font-weight': 'normal'});
    jQuery('#fOTitle1-333, #fOTitle2-333, #fOTitle3-333').css('background-color','transparent');
  });
  jQuery('#xB4-333, #xClose4-333').click(function(){
    jQuery('.colCon-55555').css('display','none');
    jQuery('#cB001-333, #cB002-333, #cB003-333').css({'color':'#000', 'font-weight': 'normal'});
    jQuery('#fOTitle1-333, #fOTitle2-333, #fOTitle3-333').css('background-color','transparent');
  });
  /* click function for plus or minus buttons */
  jQuery('.plusMinusB').click(function(){
    jQuery('#cB001-333, #cB002-333, #cB003-333').css({'color':'#000', 'font-weight': 'normal'});
    jQuery('#fOTitle1-333, #fOTitle2-333, #fOTitle3-333').css('background-color','transparent');
  });
  /* click function that makes color container display, and it highlights last color selected if necessary */
  jQuery('#cB001-333, #cB1-333, #cB002-333, #cB2-333, #cB003-333, #cB3-333').click(function(){
    jQuery('.colCon-55555').css('display','block');
    if (jQuery(this).attr('id')=='cB001-333'||jQuery(this).attr('id')=='cB1-333') {
      if (menuSettings7777777.lastBackground) {
        jQuery(menuSettings7777777.lastBackground).css('border-color','rgba(255, 255, 255,1)');
      }
      if (menuSettings7777777.lastText) {
        jQuery(menuSettings7777777.lastText).css('border-color','rgba(255, 255, 255,0)');
      }
      if (menuSettings7777777.lastTitle) {
        jQuery(menuSettings7777777.lastTitle).css('border-color','rgba(255, 255, 255,0)');
      }
      menuSettings7777777.colorChange = 'background';
      jQuery('#cB001-333').css({'color':'#00ffcc', 'font-weight':'bold'});
      jQuery('#fOTitle1-333').css({'background-color':'#404040'});
      jQuery('#cB002-333, #cB003-333').css({'color':'#000','font-weight':'normal'});
      jQuery('#fOTitle2-333, #fOTitle3-333').css('background-color','transparent');
    } else if (jQuery(this).attr('id')=='cB002-333'||jQuery(this).attr('id')=='cB2-333') {
      if (menuSettings7777777.lastText) {
        jQuery(menuSettings7777777.lastText).css('border-color','rgba(255, 255, 255,1)');
      }
      if (menuSettings7777777.lastTitle) {
        jQuery(menuSettings7777777.lastTitle).css('border-color','rgba(255, 255, 255,0)');
      }
      if (menuSettings7777777.lastBackground) {
        jQuery(menuSettings7777777.lastBackground).css('border-color','rgba(255, 255, 255,0)');
      }
      menuSettings7777777.colorChange = 'text';
      jQuery('#cB002-333').css({'color':'#00ffcc', 'font-weight':'bold'});
      jQuery('#fOTitle2-333').css({'background-color':'#404040'});
      jQuery('#cB001-333, #cB003-333').css({'color':'#000', 'font-weight':'normal'});
      jQuery('#fOTitle1-333, #fOTitle3-333').css('background-color','transparent');
    } else if (jQuery(this).attr('id')=='cB003-333'||jQuery(this).attr('id')=='cB3-333') {
      if (menuSettings7777777.lastTitle) {
        jQuery(menuSettings7777777.lastTitle).css('border-color','rgba(255, 255, 255,1)');
      }
      if (menuSettings7777777.lastText) {
        jQuery(menuSettings7777777.lastText).css('border-color','rgba(255, 255, 255,0)');
      }
      if (menuSettings7777777.lastBackground) {
        jQuery(menuSettings7777777.lastBackground).css('border-color','rgba(255, 255, 255,0)');
      }
      menuSettings7777777.colorChange = 'title';
      jQuery('.colCon-55555').css('display','block');
      jQuery('#cB003-333').css({'color':'#00ffcc', 'font-weight':'bold'});
      jQuery('#fOTitle3-333').css({'background-color':'#404040'});
      jQuery('#cB001-333, #cB002-333').css({'color':'#000', 'font-weight':'normal'});
      jQuery('#fOTitle1-333, #fOTitle2-333').css('background-color','transparent');
    }
  });
  /* plus button click function, increases font size */
  jQuery('#plusB-333').click(function(){
    if (elementSettings7777777.tSi<496){
      elementSettings7777777.autoAdjustInitial();
      if ((jQuery('#inp1-333').prop('checked'))|(jQuery('#inp5-333').prop('checked'))) { /* turn off original box if checked */
        jQuery('#inp1-333, #inp5-333').prop('checked',false);
        jQuery('#fOTitle4-333, #fOTitle8-333').css('background-color','transparent');
        jQuery('#cB004-333, #cB008-333').css({'color':'#000','font-weight': 'normal'});
      }
      elementSettings7777777.tSi+=4;

      if(elementSettings7777777.tSi>=6){
        jQuery('#minusB-333').css('background-color','#e6e6e6');
      }
      if(elementSettings7777777.tSi>=497){
        jQuery(this).css('background-color','#4d4d4d');
      }
      elementSettings7777777.plusMinus(elementSettings7777777.tSi, 'plus');
      elementSettings7777777.autoAdjustFinal();
    }
  });
  /* minus button click function, decreases font size */
  jQuery('#minusB-333').click(function(){
    if (elementSettings7777777.tSi>=10){
      elementSettings7777777.autoAdjustInitial();
      elementSettings7777777.tSi-=4;
      jQuery('#inp1-333, #inp5-333').prop('checked',false);
      jQuery('#fOTitle4-333, #fOTitle8-333').css('background-color','transparent');
      jQuery('#cB004-333, #cB008-333').css({'color':'#000','font-weight': 'normal'});
      if(elementSettings7777777.tSi<=496){
        jQuery('#plusB-333').css('background-color','#e6e6e6');
      }
      if(elementSettings7777777.tSi<=10){
        jQuery(this).css('background-color','#4d4d4d');
      }
      elementSettings7777777.plusMinus(elementSettings7777777.tSi,'minus');
      elementSettings7777777.autoAdjustFinal();
    }

  });
  /* this giant click function controls changing the color of elements */
  jQuery('.lCCColSel-55555').click(function(){
    jQuery('#inp1-333, #inp2-333, #inp3-333, #inp4-333, #inp5-333').prop('checked',false);
    jQuery('#fOTitle4-333, #fOTitle5-333, #fOTitle6-333, #fOTitle7-333, #fOTitle8-333').css('background-color','transparent');
    jQuery('#cB004-333, #cB005-333, #cB006-333, #cB007-333, #cB008-333').css({'color':'#000','font-weight': 'normal'});
    jQuery(menuSettings7777777.lastNID).css('border-color','rgba(255, 255, 255,0)');
    var nID = '#' + jQuery(this).attr('id');
    var indexN = (Number(nID.slice(-3)))-400;
    var grad = 'linear-gradient(' + menuSettings7777777.bCA[indexN] + ',' + menuSettings7777777.bCA[indexN] +  ')';
    jQuery(nID).css('border-color','rgba(255, 255, 255,1)');
    if (menuSettings7777777.colorChange == 'background'){
      if (menuSettings7777777.lastBackground) {
        jQuery(menuSettings7777777.lastBackground).css('border-color','rgba(255, 255, 255,0)');
      }
      menuSettings7777777.lastBackground = nID;
    } else if (menuSettings7777777.colorChange == 'text'){
      if (menuSettings7777777.lastText) {
        jQuery(menuSettings7777777.lastText).css('border-color','rgba(255, 255, 255,0)');
      }
      menuSettings7777777.lastText = nID;
    } else if (menuSettings7777777.colorChange == 'title'){
      if (menuSettings7777777.lastTitle) {
        jQuery(menuSettings7777777.lastTitle).css('border-color','rgba(255, 255, 255,0)');
      }
      menuSettings7777777.lastTitle = nID;
    }
    if (indexN<0) {
      if (menuSettings7777777.colorChange == 'background'){
        jQuery('#cB1-333').css('background-color','#000');
        jQuery(elementSettings7777777.background_change).css('background-color','#000');
        jQuery(elementSettings7777777.gradient_change).css('background','linear-gradient(#000,#000)');
        jQuery(elementSettings7777777.background_change_button).css('color','#000');
      } else if (menuSettings7777777.colorChange == 'text'){
        jQuery('#cB2-333').css('background-color','#000');
        jQuery(elementSettings7777777.text_change).css('color','#000');
        jQuery(elementSettings7777777.text_change_match).css('background-color','#000');
        jQuery(elementSettings7777777.text_border_match).css('border-color','#000');
      } else if (menuSettings7777777.colorChange =='title') {
        var lDCol = (Math.abs(indexN +1))*20;
        jQuery('#cB3-333').css('background-color','#000');
        jQuery(elementSettings7777777.title_change_h1).css('color','#000');
        jQuery(elementSettings7777777.title_change_h2).css('color',menuSettings7777777.bCA[lDCol+2]);
        jQuery(elementSettings7777777.title_change_h3).css('color',menuSettings7777777.bCA[lDCol+5]);
        jQuery(elementSettings7777777.title_change_h4).css('color',menuSettings7777777.bCA[lDCol]);
        jQuery(elementSettings7777777.title_change_h5).css('color',menuSettings7777777.bCA[lDCol+3]);
        jQuery(elementSettings7777777.title_change_h6).css('color',menuSettings7777777.bCA[lDCol+6]);
        jQuery(elementSettings7777777.h1_background_match).css('background-color','#000');
        jQuery(elementSettings7777777.h2_background_match).css('background-color',menuSettings7777777.bCA[lDCol+2]);
        jQuery(elementSettings7777777.h3_background_match).css('background-color',menuSettings7777777.bCA[lDCol+5]);
        jQuery(elementSettings7777777.h4_background_match).css('background-color',menuSettings7777777.bCA[lDCol]);
        jQuery(elementSettings7777777.h5_background_match).css('background-color',menuSettings7777777.bCA[lDCol+3]);
        jQuery(elementSettings7777777.h6_background_match).css('background-color',menuSettings7777777.bCA[lDCol+6]);
        jQuery(elementSettings7777777.h1_border_match).css('border-color','#000');
        jQuery(elementSettings7777777.h2_border_match).css('border-color',menuSettings7777777.bCA[lDCol+2]);
        jQuery(elementSettings7777777.h3_border_match).css('border-color',menuSettings7777777.bCA[lDCol+5]);
        jQuery(elementSettings7777777.h4_border_match).css('border-color',menuSettings7777777.bCA[lDCol]);
        jQuery(elementSettings7777777.h5_border_match).css('border-color',menuSettings7777777.bCA[lDCol+3]);
        jQuery(elementSettings7777777.h6_border_match).css('border-color',menuSettings7777777.bCA[lDCol+6]);
      }
    } else {
      if (menuSettings7777777.colorChange == 'background'){
        jQuery('#cB1-333').css('background-color',menuSettings7777777.bCA[indexN]);
        jQuery(elementSettings7777777.background_change).css('background-color',menuSettings7777777.bCA[indexN]);
        jQuery(elementSettings7777777.gradient_change).css('background',grad);
        jQuery(elementSettings7777777.background_change_button).css('color',menuSettings7777777.bCA[indexN]);
      } else if (menuSettings7777777.colorChange == 'text'){
        jQuery('#cB2-333').css('background-color',menuSettings7777777.bCA[indexN]);
        jQuery(elementSettings7777777.text_change).css('color',menuSettings7777777.bCA[indexN]);
        jQuery(elementSettings7777777.text_change_match).css('background-color',menuSettings7777777.bCA[indexN]);
        jQuery(elementSettings7777777.text_border_match).css('border-color',menuSettings7777777.bCA[indexN]);
      } else if (menuSettings7777777.colorChange =='title') {
        if (indexN >= 471 && indexN<=481) {
          var lDCol = (indexN-459);
          lDCol = lDCol*20+20;
          jQuery('#cB3-333').css('background-color',menuSettings7777777.bCA[indexN]);
          jQuery(elementSettings7777777.title_change_h1).css('color',menuSettings7777777.bCA[indexN]);
          jQuery(elementSettings7777777.title_change_h2).css('color',menuSettings7777777.bCA[lDCol-3]);
          jQuery(elementSettings7777777.title_change_h3).css('color',menuSettings7777777.bCA[lDCol-6]);
          jQuery(elementSettings7777777.title_change_h4).css('color',menuSettings7777777.bCA[lDCol-1]);
          jQuery(elementSettings7777777.title_change_h5).css('color',menuSettings7777777.bCA[lDCol-4]);
          jQuery(elementSettings7777777.title_change_h6).css('color',menuSettings7777777.bCA[lDCol-7]);
          jQuery(elementSettings7777777.h1_background_match).css('background-color',menuSettings7777777.bCA[indexN]);
          jQuery(elementSettings7777777.h2_background_match).css('background-color',menuSettings7777777.bCA[lDCol-3]);
          jQuery(elementSettings7777777.h3_background_match).css('background-color',menuSettings7777777.bCA[lDCol-6]);
          jQuery(elementSettings7777777.h4_background_match).css('background-color',menuSettings7777777.bCA[lDCol-1]);
          jQuery(elementSettings7777777.h5_background_match).css('background-color',menuSettings7777777.bCA[lDCol-4]);
          jQuery(elementSettings7777777.h6_background_match).css('background-color',menuSettings7777777.bCA[lDCol-7]);
          jQuery(elementSettings7777777.h1_border_match).css('border-color',menuSettings7777777.bCA[indexN]);
          jQuery(elementSettings7777777.h2_border_match).css('border-color',menuSettings7777777.bCA[lDCol-3]);
          jQuery(elementSettings7777777.h3_border_match).css('border-color',menuSettings7777777.bCA[lDCol-6]);
          jQuery(elementSettings7777777.h4_border_match).css('border-color',menuSettings7777777.bCA[lDCol-1]);
          jQuery(elementSettings7777777.h5_border_match).css('border-color',menuSettings7777777.bCA[lDCol-4]);
          jQuery(elementSettings7777777.h6_border_match).css('border-color',menuSettings7777777.bCA[lDCol-7]);
        } else if (indexN >= 460 && indexN<=470) {
          var lDCol = (indexN-448)*20;
          jQuery('#cB3-333').css('background-color',menuSettings7777777.bCA[indexN]);
          jQuery(elementSettings7777777.title_change_h1).css('color',menuSettings7777777.bCA[indexN]);
          jQuery(elementSettings7777777.title_change_h2).css('color',menuSettings7777777.bCA[lDCol+2]);
          jQuery(elementSettings7777777.title_change_h3).css('color',menuSettings7777777.bCA[lDCol+5]);
          jQuery(elementSettings7777777.title_change_h4).css('color',menuSettings7777777.bCA[lDCol]);
          jQuery(elementSettings7777777.title_change_h5).css('color',menuSettings7777777.bCA[lDCol+3]);
          jQuery(elementSettings7777777.title_change_h6).css('color',menuSettings7777777.bCA[lDCol+6]);
          jQuery(elementSettings7777777.h1_background_match).css('background-color',menuSettings7777777.bCA[indexN]);
          jQuery(elementSettings7777777.h2_background_match).css('background-color',menuSettings7777777.bCA[lDCol+2]);
          jQuery(elementSettings7777777.h3_background_match).css('background-color',menuSettings7777777.bCA[lDCol+5]);
          jQuery(elementSettings7777777.h4_background_match).css('background-color',menuSettings7777777.bCA[lDCol]);
          jQuery(elementSettings7777777.h5_background_match).css('background-color',menuSettings7777777.bCA[lDCol+3]);
          jQuery(elementSettings7777777.h6_background_match).css('background-color',menuSettings7777777.bCA[lDCol+6]);
          jQuery(elementSettings7777777.h1_border_match).css('border-color',menuSettings7777777.bCA[indexN]);
          jQuery(elementSettings7777777.h2_border_match).css('border-color',menuSettings7777777.bCA[lDCol+2]);
          jQuery(elementSettings7777777.h3_border_match).css('border-color',menuSettings7777777.bCA[lDCol+5]);
          jQuery(elementSettings7777777.h4_border_match).css('border-color',menuSettings7777777.bCA[lDCol]);
          jQuery(elementSettings7777777.h5_border_match).css('border-color',menuSettings7777777.bCA[lDCol+3]);
          jQuery(elementSettings7777777.h6_border_match).css('border-color',menuSettings7777777.bCA[lDCol+6]);
        } else if (indexN <=459) {
          var lDCol = Math.floor(indexN/20)*20;
          var range = indexN - lDCol;
          if (range>=0&&range<=4) {
            jQuery('#cB3-333').css('background-color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.title_change_h1).css('color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.title_change_h2).css('color',menuSettings7777777.bCA[indexN+3]);
            jQuery(elementSettings7777777.title_change_h3).css('color',menuSettings7777777.bCA[indexN+6]);
            jQuery(elementSettings7777777.title_change_h4).css('color',menuSettings7777777.bCA[indexN+1]);
            jQuery(elementSettings7777777.title_change_h5).css('color',menuSettings7777777.bCA[indexN+4]);
            jQuery(elementSettings7777777.title_change_h6).css('color',menuSettings7777777.bCA[indexN+7]);
            jQuery(elementSettings7777777.h1_background_match).css('background-color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.h2_background_match).css('background-color',menuSettings7777777.bCA[indexN+3]);
            jQuery(elementSettings7777777.h3_background_match).css('background-color',menuSettings7777777.bCA[indexN+6]);
            jQuery(elementSettings7777777.h4_background_match).css('background-color',menuSettings7777777.bCA[indexN+1]);
            jQuery(elementSettings7777777.h5_background_match).css('background-color',menuSettings7777777.bCA[indexN+4]);
            jQuery(elementSettings7777777.h6_background_match).css('background-color',menuSettings7777777.bCA[indexN+7]);
            jQuery(elementSettings7777777.h1_border_match).css('border-color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.h2_border_match).css('border-color',menuSettings7777777.bCA[indexN+3]);
            jQuery(elementSettings7777777.h3_border_match).css('border-color',menuSettings7777777.bCA[indexN+6]);
            jQuery(elementSettings7777777.h4_border_match).css('border-color',menuSettings7777777.bCA[indexN+1]);
            jQuery(elementSettings7777777.h5_border_match).css('border-color',menuSettings7777777.bCA[indexN+4]);
            jQuery(elementSettings7777777.h6_border_match).css('border-color',menuSettings7777777.bCA[indexN+7]);
          } else if (range>=5&&range<=14) {
            jQuery('#cB3-333').css('background-color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.title_change_h1).css('color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.title_change_h2).css('color',menuSettings7777777.bCA[indexN+3]);
            jQuery(elementSettings7777777.title_change_h3).css('color',menuSettings7777777.bCA[indexN-3]);
            jQuery(elementSettings7777777.title_change_h4).css('color',menuSettings7777777.bCA[indexN+2]);
            jQuery(elementSettings7777777.title_change_h5).css('color',menuSettings7777777.bCA[indexN-2]);
            jQuery(elementSettings7777777.title_change_h6).css('color',menuSettings7777777.bCA[indexN-4]);
            jQuery(elementSettings7777777.h1_background_match).css('background-color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.h2_background_match).css('background-color',menuSettings7777777.bCA[indexN+3]);
            jQuery(elementSettings7777777.h3_background_match).css('background-color',menuSettings7777777.bCA[indexN-3]);
            jQuery(elementSettings7777777.h4_background_match).css('background-color',menuSettings7777777.bCA[indexN+2]);
            jQuery(elementSettings7777777.h5_background_match).css('background-color',menuSettings7777777.bCA[indexN-2]);
            jQuery(elementSettings7777777.h6_background_match).css('background-color',menuSettings7777777.bCA[indexN-4]);
            jQuery(elementSettings7777777.h1_border_match).css('border-color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.h2_border_match).css('border-color',menuSettings7777777.bCA[indexN+3]);
            jQuery(elementSettings7777777.h3_border_match).css('border-color',menuSettings7777777.bCA[indexN-3]);
            jQuery(elementSettings7777777.h4_border_match).css('border-color',menuSettings7777777.bCA[indexN+2]);
            jQuery(elementSettings7777777.h5_border_match).css('border-color',menuSettings7777777.bCA[indexN-2]);
            jQuery(elementSettings7777777.h6_border_match).css('border-color',menuSettings7777777.bCA[indexN-4]);
          } else if (range>=15&&range<=19) {
            lDCol+=19;
            jQuery('#cB3-333').css('background-color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.title_change_h1).css('color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.title_change_h2).css('color',menuSettings7777777.bCA[indexN-3]);
            jQuery(elementSettings7777777.title_change_h3).css('color',menuSettings7777777.bCA[indexN-6]);
            jQuery(elementSettings7777777.title_change_h4).css('color',menuSettings7777777.bCA[indexN-1]);
            jQuery(elementSettings7777777.title_change_h5).css('color',menuSettings7777777.bCA[indexN-4]);
            jQuery(elementSettings7777777.title_change_h6).css('color',menuSettings7777777.bCA[indexN-7]);
            jQuery(elementSettings7777777.h1_background_match).css('background-color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.h2_background_match).css('background-color',menuSettings7777777.bCA[indexN-3]);
            jQuery(elementSettings7777777.h3_background_match).css('background-color',menuSettings7777777.bCA[indexN-6]);
            jQuery(elementSettings7777777.h4_background_match).css('background-color',menuSettings7777777.bCA[indexN-1]);
            jQuery(elementSettings7777777.h5_background_match).css('background-color',menuSettings7777777.bCA[indexN-4]);
            jQuery(elementSettings7777777.h6_background_match).css('background-color',menuSettings7777777.bCA[indexN-7]);
            jQuery(elementSettings7777777.h1_border_match).css('border-color',menuSettings7777777.bCA[indexN]);
            jQuery(elementSettings7777777.h2_border_match).css('border-color',menuSettings7777777.bCA[indexN-3]);
            jQuery(elementSettings7777777.h3_border_match).css('border-color',menuSettings7777777.bCA[indexN-6]);
            jQuery(elementSettings7777777.h4_border_match).css('border-color',menuSettings7777777.bCA[indexN-1]);
            jQuery(elementSettings7777777.h5_border_match).css('border-color',menuSettings7777777.bCA[indexN-4]);
            jQuery(elementSettings7777777.h6_border_match).css('border-color',menuSettings7777777.bCA[indexN-7]);
          }
        }
      }
    }
    menuSettings7777777.lastNID = nID;
  });
});
