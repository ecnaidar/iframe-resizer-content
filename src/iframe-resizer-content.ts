// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import { IFramePage, IFramePageOptions } from 'iframe-resizer'

declare global {
  interface Window {
    iFrameResizer?: IFramePageOptions
    parentIFrame?: IFramePage
  }
}

export default class IFrameResizerContent {
  constructor(options?: IFramePageOptions) {
    window.iFrameResizer = options
    // @ts-ignore
    import('iframe-resizer/js/iframeResizer.contentWindow.js')
  }
}
