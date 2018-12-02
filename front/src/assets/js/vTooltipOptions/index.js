const opt = {
  defaultPlacement: 'top',
  defaultClass: 'vue-tooltip-theme',
  defaultTargetClass: 'has-tooltip',
  defaultHtml: true,
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
  defaultArrowSelector: '.tooltip-arrow, .tooltip__arrow',
  defaultInnerSelector: '.tooltip-inner, .tooltip__inner',
  defaultDelay: 500,
  defaultTrigger: 'hover focus',
  defaultOffset: 10,
  defaultContainer: 'body',
  defaultBoundariesElement: undefined,
  defaultPopperOptions: {},
  defaultLoadingClass: 'tooltip-loading',
  defaultLoadingContent: '...',
  autoHide: true,
  defaultHideOnTargetClick: true,
  disposeTimeout: 5000,
  popover: {
    defaultPlacement: 'bottom',
    defaultClass: 'vue-popover-theme',
    defaultBaseClass: 'tooltip popover',
    defaultWrapperClass: 'wrapper',
    defaultInnerClass: 'tooltip-inner popover-inner',
    defaultArrowClass: 'tooltip-arrow popover-arrow',
    defaultDelay: 0,
    defaultTrigger: 'click',
    defaultOffset: 0,
    defaultContainer: 'body',
    defaultBoundariesElement: undefined,
    defaultPopperOptions: {},
    defaultAutoHide: true,
    defaultHandleResize: true
  }
}

export default opt
