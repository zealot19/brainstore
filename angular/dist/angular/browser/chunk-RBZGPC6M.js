import {
  DomSanitizer
} from "./chunk-EAKPJMDP.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver$1,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  Renderer2,
  SecurityContext,
  Subject,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import {
  __commonJS,
  __toESM
} from "./chunk-TXDUYLVM.js";

// node_modules/file-saver/dist/FileSaver.min.js
var require_FileSaver_min = __commonJS({
  "node_modules/file-saver/dist/FileSaver.min.js"(exports, module) {
    "use strict";
    (function(a, b) {
      if ("function" == typeof define && define.amd) define([], b);
      else if ("undefined" != typeof exports) b();
      else {
        b(), a.FileSaver = { exports: {} }.exports;
      }
    })(exports, function() {
      "use strict";
      function b(a2, b2) {
        return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c2);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
        if (g2 = g2 || f2.name || "download", "string" != typeof f2) navigator.msSaveOrOpenBlob(b(f2, h), g2);
        else if (d(f2)) c(f2, g2, h);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c(b2, d2, e2);
        var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function() {
            var a2 = k.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
          }, k.readAsDataURL(b2);
        } else {
          var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
          g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
            l.revokeObjectURL(m);
          }, 4e4);
        }
      });
      f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
    });
  }
});

// node_modules/ngx-filesaver/fesm2020/ngx-filesaver.mjs
var import_file_saver = __toESM(require_FileSaver_min(), 1);
var FileSaverService = class {
  get isFileSaverSupported() {
    try {
      return !!new Blob();
    } catch (e) {
      return false;
    }
  }
  genType(fileName) {
    if (!fileName || fileName.lastIndexOf(".") === -1) {
      return "text/plain";
    }
    const type = fileName.substr(fileName.lastIndexOf(".") + 1);
    switch (type) {
      case "txt":
        return "text/plain";
      case "xml":
      case "html":
        return `text/${type}`;
      case "json":
        return "octet/stream";
      default:
        return `application/${type}`;
    }
  }
  save(blob, fileName, filtType, option) {
    if (!blob) {
      throw new Error("Data argument should be a blob instance");
    }
    const file = new Blob([blob], {
      type: filtType || blob.type || this.genType(fileName)
    });
    (0, import_file_saver.saveAs)(file, decodeURI(fileName || "download"), option);
  }
  saveText(txt, fileName, option) {
    const blob = new Blob([txt]);
    this.save(blob, fileName, void 0, option);
  }
};
FileSaverService.\u0275fac = function FileSaverService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FileSaverService)();
};
FileSaverService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: FileSaverService,
  factory: FileSaverService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileSaverService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FileSaverDirective = class {
  constructor(el, fss, httpClient) {
    this.el = el;
    this.fss = fss;
    this.httpClient = httpClient;
    this.method = "GET";
    this.success = new EventEmitter();
    this.error = new EventEmitter();
    if (!fss.isFileSaverSupported) {
      el.nativeElement.classList.add(`filesaver__not-support`);
    }
  }
  getName(res) {
    return decodeURI(this.fileName || res.headers.get("filename") || res.headers.get("x-filename") || "");
  }
  _click() {
    if (!this.fss.isFileSaverSupported) {
      return;
    }
    let req = this.http;
    if (!req) {
      let params = new HttpParams();
      const query = this.query || {};
      for (const item in query) {
        params = params.set(item, query[item]);
      }
      req = this.httpClient.request(this.method, this.url, {
        observe: "response",
        responseType: "blob",
        headers: this.header,
        params
      });
    }
    this.setDisabled(true);
    req.subscribe((res) => {
      if (res.status !== 200 || res.body.size <= 0) {
        this.error.emit(res);
        return;
      }
      this.fss.save(res.body, this.getName(res), void 0, this.fsOptions);
      this.success.emit(res);
    }, (err) => this.error.emit(err), () => this.setDisabled(false));
  }
  setDisabled(status) {
    const el = this.el.nativeElement;
    el.disabled = status;
    el.classList[status ? "add" : "remove"](`filesaver__disabled`);
  }
};
FileSaverDirective.\u0275fac = function FileSaverDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FileSaverDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FileSaverService), \u0275\u0275directiveInject(HttpClient));
};
FileSaverDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: FileSaverDirective,
  selectors: [["", "fileSaver", ""]],
  hostBindings: function FileSaverDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function FileSaverDirective_click_HostBindingHandler() {
        return ctx._click();
      });
    }
  },
  inputs: {
    method: "method",
    http: "http",
    query: "query",
    header: "header",
    url: "url",
    fileName: "fileName",
    fsOptions: "fsOptions"
  },
  outputs: {
    success: "success",
    error: "error"
  },
  exportAs: ["fileSaver"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileSaverDirective, [{
    type: Directive,
    args: [{
      selector: "[fileSaver]",
      exportAs: "fileSaver",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: FileSaverService
    }, {
      type: HttpClient
    }];
  }, {
    method: [{
      type: Input
    }],
    http: [{
      type: Input
    }],
    query: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    fileName: [{
      type: Input
    }],
    fsOptions: [{
      type: Input
    }],
    success: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    _click: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var FileSaverModule = class {
};
FileSaverModule.\u0275fac = function FileSaverModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FileSaverModule)();
};
FileSaverModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: FileSaverModule,
  imports: [FileSaverDirective],
  exports: [FileSaverDirective]
});
FileSaverModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileSaverModule, [{
    type: NgModule,
    args: [{
      imports: [FileSaverDirective],
      exports: [FileSaverDirective]
    }]
  }], null, null);
})();

// node_modules/ngx-lightbox/lightbox-event.service.js
var LIGHTBOX_EVENT = {
  CHANGE_PAGE: 1,
  CLOSE: 2,
  OPEN: 3,
  ZOOM_IN: 4,
  ZOOM_OUT: 5,
  ROTATE_LEFT: 6,
  ROTATE_RIGHT: 7
};
var LightboxEvent = class {
  constructor() {
    this._lightboxEventSource = new Subject();
    this.lightboxEvent$ = this._lightboxEventSource.asObservable();
  }
  broadcastLightboxEvent(event) {
    this._lightboxEventSource.next(event);
  }
};
LightboxEvent.\u0275fac = function LightboxEvent_Factory(t) {
  return new (t || LightboxEvent)();
};
LightboxEvent.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: LightboxEvent, factory: LightboxEvent.\u0275fac });
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxEvent, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
function getWindow() {
  return window;
}
var LightboxWindowRef = class {
  get nativeWindow() {
    return getWindow();
  }
};
LightboxWindowRef.\u0275fac = function LightboxWindowRef_Factory(t) {
  return new (t || LightboxWindowRef)();
};
LightboxWindowRef.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: LightboxWindowRef, factory: LightboxWindowRef.\u0275fac });
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxWindowRef, [{
    type: Injectable
  }], null, null);
})();

// node_modules/ngx-lightbox/lightbox.component.js
var _c0 = ["outerContainer"];
var _c1 = ["container"];
var _c2 = ["leftArrow"];
var _c3 = ["rightArrow"];
var _c4 = ["navArrow"];
var _c5 = ["dataContainer"];
var _c6 = ["image"];
var _c7 = ["caption"];
var _c8 = ["number"];
var _c9 = ["lb-content", ""];
var LightboxComponent = class {
  constructor(_elemRef, _rendererRef, _lightboxEvent, _lightboxElem, _lightboxWindowRef, _fileSaverService, _sanitizer, _documentRef) {
    this._elemRef = _elemRef;
    this._rendererRef = _rendererRef;
    this._lightboxEvent = _lightboxEvent;
    this._lightboxElem = _lightboxElem;
    this._lightboxWindowRef = _lightboxWindowRef;
    this._fileSaverService = _fileSaverService;
    this._sanitizer = _sanitizer;
    this._documentRef = _documentRef;
    this.options = this.options || {};
    this.album = this.album || [];
    this.currentImageIndex = this.currentImageIndex || 0;
    this._windowRef = this._lightboxWindowRef.nativeWindow;
    this.ui = {
      // control the appear of the reloader
      // false: image has loaded completely and ready to be shown
      // true: image is still loading
      showReloader: true,
      // control the appear of the nav arrow
      // the arrowNav is the parent of both left and right arrow
      // in some cases, the parent shows but the child does not show
      showLeftArrow: false,
      showRightArrow: false,
      showArrowNav: false,
      // control the appear of the zoom and rotate buttons
      showZoomButton: false,
      showRotateButton: false,
      // control whether to show the
      // page number or not
      showPageNumber: false,
      showCaption: false,
      // control whether to show the download button or not
      showDownloadButton: false,
      classList: "lightbox animation fadeIn"
    };
    this.content = {
      pageNumber: ""
    };
    this._event = {};
    this._lightboxElem = this._elemRef;
    this._event.subscription = this._lightboxEvent.lightboxEvent$.subscribe((event) => this._onReceivedEvent(event));
    this.rotate = 0;
  }
  ngOnInit() {
    this.album.forEach((album) => {
      if (album.caption) {
        album.caption = this._sanitizer.sanitize(SecurityContext.HTML, album.caption);
      }
    });
  }
  ngAfterViewInit() {
    this._cssValue = {
      containerTopPadding: Math.round(this._getCssStyleValue(this._containerElem, "padding-top")),
      containerRightPadding: Math.round(this._getCssStyleValue(this._containerElem, "padding-right")),
      containerBottomPadding: Math.round(this._getCssStyleValue(this._containerElem, "padding-bottom")),
      containerLeftPadding: Math.round(this._getCssStyleValue(this._containerElem, "padding-left")),
      imageBorderWidthTop: Math.round(this._getCssStyleValue(this._imageElem, "border-top-width")),
      imageBorderWidthBottom: Math.round(this._getCssStyleValue(this._imageElem, "border-bottom-width")),
      imageBorderWidthLeft: Math.round(this._getCssStyleValue(this._imageElem, "border-left-width")),
      imageBorderWidthRight: Math.round(this._getCssStyleValue(this._imageElem, "border-right-width"))
    };
    if (this._validateInputData()) {
      this._prepareComponent();
      this._registerImageLoadingEvent();
    }
  }
  ngOnDestroy() {
    if (!this.options.disableKeyboardNav) {
      this._disableKeyboardNav();
    }
    this._event.subscription.unsubscribe();
  }
  close($event) {
    $event.stopPropagation();
    if ($event.target.classList.contains("lightbox") || $event.target.classList.contains("lb-loader") || $event.target.classList.contains("lb-close")) {
      this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.CLOSE, data: null });
    }
  }
  download($event) {
    $event.stopPropagation();
    const url = this.album[this.currentImageIndex].src;
    const downloadUrl = this.album[this.currentImageIndex].downloadUrl;
    const parts = url.split("/");
    const fileName = parts[parts.length - 1];
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const preloader = new Image();
    const _this = this;
    preloader.onload = function() {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(this, 0, 0);
      canvas.toBlob(function(blob) {
        _this._fileSaverService.save(blob, fileName);
      }, "image/jpeg", 0.75);
    };
    preloader.crossOrigin = "";
    if (downloadUrl && downloadUrl.length > 0)
      preloader.src = this._sanitizer.sanitize(SecurityContext.URL, downloadUrl);
    else
      preloader.src = this._sanitizer.sanitize(SecurityContext.URL, url);
  }
  control($event) {
    $event.stopPropagation();
    let height;
    let width;
    if ($event.target.classList.contains("lb-turnLeft")) {
      this.rotate = this.rotate - 90;
      this._rotateContainer();
      this._calcTransformPoint();
      this._documentRef.getElementById("image").style.transform = `rotate(${this.rotate}deg)`;
      this._documentRef.getElementById("image").style.webkitTransform = `rotate(${this.rotate}deg)`;
      this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.ROTATE_LEFT, data: null });
    } else if ($event.target.classList.contains("lb-turnRight")) {
      this.rotate = this.rotate + 90;
      this._rotateContainer();
      this._calcTransformPoint();
      this._documentRef.getElementById("image").style.transform = `rotate(${this.rotate}deg)`;
      this._documentRef.getElementById("image").style.webkitTransform = `rotate(${this.rotate}deg)`;
      this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.ROTATE_RIGHT, data: null });
    } else if ($event.target.classList.contains("lb-zoomOut")) {
      height = parseInt(this._documentRef.getElementById("outerContainer").style.height, 10) / 1.5;
      width = parseInt(this._documentRef.getElementById("outerContainer").style.width, 10) / 1.5;
      this._documentRef.getElementById("outerContainer").style.height = height + "px";
      this._documentRef.getElementById("outerContainer").style.width = width + "px";
      height = parseInt(this._documentRef.getElementById("image").style.height, 10) / 1.5;
      width = parseInt(this._documentRef.getElementById("image").style.width, 10) / 1.5;
      this._documentRef.getElementById("image").style.height = height + "px";
      this._documentRef.getElementById("image").style.width = width + "px";
      this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.ZOOM_OUT, data: null });
    } else if ($event.target.classList.contains("lb-zoomIn")) {
      height = parseInt(this._documentRef.getElementById("outerContainer").style.height, 10) * 1.5;
      width = parseInt(this._documentRef.getElementById("outerContainer").style.width, 10) * 1.5;
      this._documentRef.getElementById("outerContainer").style.height = height + "px";
      this._documentRef.getElementById("outerContainer").style.width = width + "px";
      height = parseInt(this._documentRef.getElementById("image").style.height, 10) * 1.5;
      width = parseInt(this._documentRef.getElementById("image").style.width, 10) * 1.5;
      this._documentRef.getElementById("image").style.height = height + "px";
      this._documentRef.getElementById("image").style.width = width + "px";
      this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.ZOOM_IN, data: null });
    }
  }
  _rotateContainer() {
    let temp = this.rotate;
    if (temp < 0) {
      temp *= -1;
    }
    if (temp / 90 % 4 === 1 || temp / 90 % 4 === 3) {
      this._documentRef.getElementById("outerContainer").style.height = this._documentRef.getElementById("image").style.width;
      this._documentRef.getElementById("outerContainer").style.width = this._documentRef.getElementById("image").style.height;
      this._documentRef.getElementById("container").style.height = this._documentRef.getElementById("image").style.width;
      this._documentRef.getElementById("container").style.width = this._documentRef.getElementById("image").style.height;
    } else {
      this._documentRef.getElementById("outerContainer").style.height = this._documentRef.getElementById("image").style.height;
      this._documentRef.getElementById("outerContainer").style.width = this._documentRef.getElementById("image").style.width;
      this._documentRef.getElementById("container").style.height = this._documentRef.getElementById("image").style.width;
      this._documentRef.getElementById("container").style.width = this._documentRef.getElementById("image").style.height;
    }
  }
  _resetImage() {
    this.rotate = 0;
    this._documentRef.getElementById("image").style.transform = `rotate(${this.rotate}deg)`;
    this._documentRef.getElementById("image").style.webkitTransform = `rotate(${this.rotate}deg)`;
  }
  _calcTransformPoint() {
    let height = parseInt(this._documentRef.getElementById("image").style.height, 10);
    let width = parseInt(this._documentRef.getElementById("image").style.width, 10);
    let temp = this.rotate % 360;
    if (temp < 0) {
      temp = 360 + temp;
    }
    if (temp === 90) {
      this._documentRef.getElementById("image").style.transformOrigin = height / 2 + "px " + height / 2 + "px";
    } else if (temp === 180) {
      this._documentRef.getElementById("image").style.transformOrigin = width / 2 + "px " + height / 2 + "px";
    } else if (temp === 270) {
      this._documentRef.getElementById("image").style.transformOrigin = width / 2 + "px " + width / 2 + "px";
    }
  }
  nextImage() {
    if (this.album.length === 1) {
      return;
    } else if (this.currentImageIndex === this.album.length - 1) {
      this._changeImage(0);
    } else {
      this._changeImage(this.currentImageIndex + 1);
    }
  }
  prevImage() {
    if (this.album.length === 1) {
      return;
    } else if (this.currentImageIndex === 0 && this.album.length > 1) {
      this._changeImage(this.album.length - 1);
    } else {
      this._changeImage(this.currentImageIndex - 1);
    }
  }
  _validateInputData() {
    if (this.album && this.album instanceof Array && this.album.length > 0) {
      for (let i = 0; i < this.album.length; i++) {
        if (this.album[i].src) {
          continue;
        }
        throw new Error("One of the album data does not have source data");
      }
    } else {
      throw new Error("No album data or album data is not correct in type");
    }
    if (isNaN(this.currentImageIndex)) {
      throw new Error("Current image index is not a number");
    } else {
      this.currentImageIndex = Number(this.currentImageIndex);
    }
    return true;
  }
  _registerImageLoadingEvent() {
    const preloader = new Image();
    preloader.onload = () => {
      this._onLoadImageSuccess();
    };
    const src = this.album[this.currentImageIndex].src;
    preloader.src = this._sanitizer.sanitize(SecurityContext.URL, src);
  }
  /**
   * Fire when the image is loaded
   */
  _onLoadImageSuccess() {
    if (!this.options.disableKeyboardNav) {
      this._disableKeyboardNav();
    }
    let imageHeight;
    let imageWidth;
    let maxImageHeight;
    let maxImageWidth;
    let windowHeight;
    let windowWidth;
    let naturalImageWidth;
    let naturalImageHeight;
    imageWidth = naturalImageWidth = this._imageElem.nativeElement.naturalWidth;
    imageHeight = naturalImageHeight = this._imageElem.nativeElement.naturalHeight;
    if (this.options.fitImageInViewPort) {
      windowWidth = this._windowRef.innerWidth;
      windowHeight = this._windowRef.innerHeight;
      maxImageWidth = windowWidth - this._cssValue.containerLeftPadding - this._cssValue.containerRightPadding - this._cssValue.imageBorderWidthLeft - this._cssValue.imageBorderWidthRight - 20;
      maxImageHeight = windowHeight - this._cssValue.containerTopPadding - this._cssValue.containerTopPadding - this._cssValue.imageBorderWidthTop - this._cssValue.imageBorderWidthBottom - 120;
      if (naturalImageWidth > maxImageWidth || naturalImageHeight > maxImageHeight) {
        if (naturalImageWidth / maxImageWidth > naturalImageHeight / maxImageHeight) {
          imageWidth = maxImageWidth;
          imageHeight = Math.round(naturalImageHeight / (naturalImageWidth / imageWidth));
        } else {
          imageHeight = maxImageHeight;
          imageWidth = Math.round(naturalImageWidth / (naturalImageHeight / imageHeight));
        }
      }
      this._rendererRef.setStyle(this._imageElem.nativeElement, "width", `${imageWidth}px`);
      this._rendererRef.setStyle(this._imageElem.nativeElement, "height", `${imageHeight}px`);
    }
    this._sizeContainer(imageWidth, imageHeight);
    if (this.options.centerVertically) {
      this._centerVertically(imageWidth, imageHeight);
    }
  }
  _centerVertically(imageWidth, imageHeight) {
    const scrollOffset = this._documentRef.documentElement.scrollTop;
    const windowHeight = this._windowRef.innerHeight;
    const viewOffset = windowHeight / 2 - imageHeight / 2;
    const topDistance = scrollOffset + viewOffset;
    this._rendererRef.setStyle(this._lightboxElem.nativeElement, "top", `${topDistance}px`);
  }
  _sizeContainer(imageWidth, imageHeight) {
    const oldWidth = this._outerContainerElem.nativeElement.offsetWidth;
    const oldHeight = this._outerContainerElem.nativeElement.offsetHeight;
    const newWidth = imageWidth + this._cssValue.containerRightPadding + this._cssValue.containerLeftPadding + this._cssValue.imageBorderWidthLeft + this._cssValue.imageBorderWidthRight;
    const newHeight = imageHeight + this._cssValue.containerTopPadding + this._cssValue.containerBottomPadding + this._cssValue.imageBorderWidthTop + this._cssValue.imageBorderWidthBottom;
    if (Math.abs(oldWidth - newWidth) + Math.abs(oldHeight - newHeight) > 5) {
      this._rendererRef.setStyle(this._outerContainerElem.nativeElement, "width", `${newWidth}px`);
      this._rendererRef.setStyle(this._outerContainerElem.nativeElement, "height", `${newHeight}px`);
      if (this.options.enableTransition) {
        this._event.transitions = [];
        ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "MSTransitionEnd"].forEach((eventName) => {
          this._event.transitions.push(this._rendererRef.listen(this._outerContainerElem.nativeElement, eventName, (event) => {
            if (event.target === event.currentTarget) {
              this._postResize(newWidth, newHeight);
            }
          }));
        });
      } else {
        this._postResize(newWidth, newHeight);
      }
    } else {
      this._postResize(newWidth, newHeight);
    }
  }
  _postResize(newWidth, newHeight) {
    if (Array.isArray(this._event.transitions)) {
      this._event.transitions.forEach((eventHandler) => {
        eventHandler();
      });
      this._event.transitions = [];
    }
    this._rendererRef.setStyle(this._dataContainerElem.nativeElement, "width", `${newWidth}px`);
    this._showImage();
  }
  _showImage() {
    this.ui.showReloader = false;
    this._updateNav();
    this._updateDetails();
    if (!this.options.disableKeyboardNav) {
      this._enableKeyboardNav();
    }
  }
  _prepareComponent() {
    this._addCssAnimation();
    this._positionLightBox();
    setTimeout(() => {
      this.ui.showZoomButton = this.options.showZoom;
      this.ui.showRotateButton = this.options.showRotate;
      this.ui.showDownloadButton = this.options.showDownloadButton;
    }, 0);
  }
  _positionLightBox() {
    const top = (this._windowRef.pageYOffset || this._documentRef.documentElement.scrollTop) + this.options.positionFromTop;
    const left = this._windowRef.pageXOffset || this._documentRef.documentElement.scrollLeft;
    if (!this.options.centerVertically) {
      this._rendererRef.setStyle(this._lightboxElem.nativeElement, "top", `${top}px`);
    }
    this._rendererRef.setStyle(this._lightboxElem.nativeElement, "left", `${left}px`);
    this._rendererRef.setStyle(this._lightboxElem.nativeElement, "display", "block");
    if (this.options.disableScrolling) {
      this._rendererRef.addClass(this._documentRef.documentElement, "lb-disable-scrolling");
    }
  }
  /**
   * addCssAnimation add css3 classes for animate lightbox
   */
  _addCssAnimation() {
    const resizeDuration = this.options.resizeDuration;
    const fadeDuration = this.options.fadeDuration;
    this._rendererRef.setStyle(this._lightboxElem.nativeElement, "-webkit-animation-duration", `${fadeDuration}s`);
    this._rendererRef.setStyle(this._lightboxElem.nativeElement, "animation-duration", `${fadeDuration}s`);
    this._rendererRef.setStyle(this._outerContainerElem.nativeElement, "-webkit-transition-duration", `${resizeDuration}s`);
    this._rendererRef.setStyle(this._outerContainerElem.nativeElement, "transition-duration", `${resizeDuration}s`);
    this._rendererRef.setStyle(this._dataContainerElem.nativeElement, "-webkit-animation-duration", `${fadeDuration}s`);
    this._rendererRef.setStyle(this._dataContainerElem.nativeElement, "animation-duration", `${fadeDuration}s`);
    this._rendererRef.setStyle(this._imageElem.nativeElement, "-webkit-animation-duration", `${fadeDuration}s`);
    this._rendererRef.setStyle(this._imageElem.nativeElement, "animation-duration", `${fadeDuration}s`);
    this._rendererRef.setStyle(this._captionElem.nativeElement, "-webkit-animation-duration", `${fadeDuration}s`);
    this._rendererRef.setStyle(this._captionElem.nativeElement, "animation-duration", `${fadeDuration}s`);
    this._rendererRef.setStyle(this._numberElem.nativeElement, "-webkit-animation-duration", `${fadeDuration}s`);
    this._rendererRef.setStyle(this._numberElem.nativeElement, "animation-duration", `${fadeDuration}s`);
  }
  _end() {
    this.ui.classList = "lightbox animation fadeOut";
    if (this.options.disableScrolling) {
      this._rendererRef.removeClass(this._documentRef.documentElement, "lb-disable-scrolling");
    }
    setTimeout(() => {
      this.cmpRef.destroy();
    }, this.options.fadeDuration * 1e3);
  }
  _updateDetails() {
    if (typeof this.album[this.currentImageIndex].caption !== "undefined" && this.album[this.currentImageIndex].caption !== "") {
      this.ui.showCaption = true;
    }
    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      this.ui.showPageNumber = true;
      this.content.pageNumber = this._albumLabel();
    }
  }
  _albumLabel() {
    return this.options.albumLabel.replace(/%1/g, Number(this.currentImageIndex + 1)).replace(/%2/g, this.album.length);
  }
  _changeImage(newIndex) {
    this._resetImage();
    this.currentImageIndex = newIndex;
    this._hideImage();
    this._registerImageLoadingEvent();
    this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.CHANGE_PAGE, data: newIndex });
  }
  _hideImage() {
    this.ui.showReloader = true;
    this.ui.showArrowNav = false;
    this.ui.showLeftArrow = false;
    this.ui.showRightArrow = false;
    this.ui.showPageNumber = false;
    this.ui.showCaption = false;
  }
  _updateNav() {
    let alwaysShowNav = false;
    try {
      this._documentRef.createEvent("TouchEvent");
      alwaysShowNav = this.options.alwaysShowNavOnTouchDevices ? true : false;
    } catch (e) {
    }
    this._showArrowNav();
    if (this.album.length > 1) {
      if (this.options.wrapAround) {
        if (alwaysShowNav) {
          this._rendererRef.setStyle(this._leftArrowElem.nativeElement, "opacity", "1");
          this._rendererRef.setStyle(this._rightArrowElem.nativeElement, "opacity", "1");
        }
        this._showLeftArrowNav();
        this._showRightArrowNav();
      } else {
        if (this.currentImageIndex > 0) {
          this._showLeftArrowNav();
          if (alwaysShowNav) {
            this._rendererRef.setStyle(this._leftArrowElem.nativeElement, "opacity", "1");
          }
        }
        if (this.currentImageIndex < this.album.length - 1) {
          this._showRightArrowNav();
          if (alwaysShowNav) {
            this._rendererRef.setStyle(this._rightArrowElem.nativeElement, "opacity", "1");
          }
        }
      }
    }
  }
  _showLeftArrowNav() {
    this.ui.showLeftArrow = true;
  }
  _showRightArrowNav() {
    this.ui.showRightArrow = true;
  }
  _showArrowNav() {
    this.ui.showArrowNav = this.album.length !== 1;
  }
  _enableKeyboardNav() {
    this._event.keyup = this._rendererRef.listen("document", "keyup", (event) => {
      this._keyboardAction(event);
    });
  }
  _disableKeyboardNav() {
    if (this._event.keyup) {
      this._event.keyup();
    }
  }
  _keyboardAction($event) {
    const KEYCODE_ESC = 27;
    const KEYCODE_LEFTARROW = 37;
    const KEYCODE_RIGHTARROW = 39;
    const keycode = $event.keyCode;
    const key = String.fromCharCode(keycode).toLowerCase();
    if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
      this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.CLOSE, data: null });
    } else if (key === "p" || keycode === KEYCODE_LEFTARROW) {
      if (this.currentImageIndex !== 0) {
        this._changeImage(this.currentImageIndex - 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this._changeImage(this.album.length - 1);
      }
    } else if (key === "n" || keycode === KEYCODE_RIGHTARROW) {
      if (this.currentImageIndex !== this.album.length - 1) {
        this._changeImage(this.currentImageIndex + 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this._changeImage(0);
      }
    }
  }
  _getCssStyleValue(elem, propertyName) {
    return parseFloat(this._windowRef.getComputedStyle(elem.nativeElement, null).getPropertyValue(propertyName));
  }
  _onReceivedEvent(event) {
    switch (event.id) {
      case LIGHTBOX_EVENT.CLOSE:
        this._end();
        break;
      default:
        break;
    }
  }
};
LightboxComponent.\u0275fac = function LightboxComponent_Factory(t) {
  return new (t || LightboxComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(LightboxEvent), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LightboxWindowRef), \u0275\u0275directiveInject(FileSaverService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(DOCUMENT));
};
LightboxComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: LightboxComponent, selectors: [["", "lb-content", ""]], viewQuery: function LightboxComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
    \u0275\u0275viewQuery(_c2, 5);
    \u0275\u0275viewQuery(_c3, 5);
    \u0275\u0275viewQuery(_c4, 5);
    \u0275\u0275viewQuery(_c5, 5);
    \u0275\u0275viewQuery(_c6, 5);
    \u0275\u0275viewQuery(_c7, 5);
    \u0275\u0275viewQuery(_c8, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._outerContainerElem = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._containerElem = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._leftArrowElem = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._rightArrowElem = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._navArrowElem = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._dataContainerElem = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._imageElem = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._captionElem = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._numberElem = _t.first);
  }
}, hostVars: 2, hostBindings: function LightboxComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function LightboxComponent_click_HostBindingHandler($event) {
      return ctx.close($event);
    });
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.ui.classList);
  }
}, inputs: { album: "album", currentImageIndex: "currentImageIndex", options: "options", cmpRef: "cmpRef" }, attrs: _c9, decls: 34, vars: 14, consts: [["id", "outerContainer", 1, "lb-outerContainer", "transition"], ["outerContainer", ""], ["id", "container", 1, "lb-container"], ["container", ""], ["id", "image", 1, "lb-image", "animation", "fadeIn", 3, "src", "hidden"], ["image", ""], [1, "lb-nav", 3, "hidden"], ["navArrow", ""], [1, "lb-prev", 3, "hidden", "click"], ["leftArrow", ""], [1, "lb-next", 3, "hidden", "click"], ["rightArrow", ""], [1, "lb-loader", 3, "hidden", "click"], [1, "lb-cancel"], [1, "lb-dataContainer", 3, "hidden"], ["dataContainer", ""], [1, "lb-data"], [1, "lb-details"], [1, "lb-caption", "animation", "fadeIn", 3, "hidden", "innerHtml"], ["caption", ""], [1, "lb-number", "animation", "fadeIn", 3, "hidden"], ["number", ""], [1, "lb-controlContainer"], [1, "lb-closeContainer"], [1, "lb-close", 3, "click"], [1, "lb-downloadContainer", 3, "hidden"], [1, "lb-download", 3, "click"], [1, "lb-turnContainer", 3, "hidden"], [1, "lb-turnLeft", 3, "click"], [1, "lb-turnRight", 3, "click"], [1, "lb-zoomContainer", 3, "hidden"], [1, "lb-zoomOut", 3, "click"], [1, "lb-zoomIn", 3, "click"]], template: function LightboxComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0, 1)(2, "div", 2, 3);
    \u0275\u0275element(4, "img", 4, 5);
    \u0275\u0275elementStart(6, "div", 6, 7)(8, "a", 8, 9);
    \u0275\u0275listener("click", function LightboxComponent_Template_a_click_8_listener() {
      return ctx.prevImage();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 10, 11);
    \u0275\u0275listener("click", function LightboxComponent_Template_a_click_10_listener() {
      return ctx.nextImage();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275listener("click", function LightboxComponent_Template_div_click_12_listener($event) {
      return ctx.close($event);
    });
    \u0275\u0275element(13, "a", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 14, 15)(16, "div", 16)(17, "div", 17);
    \u0275\u0275element(18, "span", 18, 19);
    \u0275\u0275elementStart(20, "span", 20, 21);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 22)(24, "div", 23)(25, "a", 24);
    \u0275\u0275listener("click", function LightboxComponent_Template_a_click_25_listener($event) {
      return ctx.close($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 25)(27, "a", 26);
    \u0275\u0275listener("click", function LightboxComponent_Template_a_click_27_listener($event) {
      return ctx.download($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 27)(29, "a", 28);
    \u0275\u0275listener("click", function LightboxComponent_Template_a_click_29_listener($event) {
      return ctx.control($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 29);
    \u0275\u0275listener("click", function LightboxComponent_Template_a_click_30_listener($event) {
      return ctx.control($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 30)(32, "a", 31);
    \u0275\u0275listener("click", function LightboxComponent_Template_a_click_32_listener($event) {
      return ctx.control($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 32);
    \u0275\u0275listener("click", function LightboxComponent_Template_a_click_33_listener($event) {
      return ctx.control($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx.album[ctx.currentImageIndex].src, \u0275\u0275sanitizeUrl)("hidden", ctx.ui.showReloader);
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", !ctx.ui.showArrowNav);
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", !ctx.ui.showLeftArrow);
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", !ctx.ui.showRightArrow);
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", !ctx.ui.showReloader);
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", ctx.ui.showReloader);
    \u0275\u0275advance(4);
    \u0275\u0275property("hidden", !ctx.ui.showCaption)("innerHtml", ctx.album[ctx.currentImageIndex].caption, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", !ctx.ui.showPageNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.content.pageNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("hidden", !ctx.ui.showDownloadButton);
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", !ctx.ui.showRotateButton);
    \u0275\u0275advance(3);
    \u0275\u0275property("hidden", !ctx.ui.showZoomButton);
  }
}, encapsulation: 2 });
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxComponent, [{
    type: Component,
    args: [{
      template: `
    <div class="lb-outerContainer transition" #outerContainer id="outerContainer">
      <div class="lb-container" #container id="container">
        <img class="lb-image"
             id="image"
             [src]="album[currentImageIndex].src"
             class="lb-image animation fadeIn"
             [hidden]="ui.showReloader"
             #image>
        <div class="lb-nav" [hidden]="!ui.showArrowNav" #navArrow>
          <a class="lb-prev" [hidden]="!ui.showLeftArrow" (click)="prevImage()" #leftArrow></a>
          <a class="lb-next" [hidden]="!ui.showRightArrow" (click)="nextImage()" #rightArrow></a>
        </div>
        <div class="lb-loader" [hidden]="!ui.showReloader" (click)="close($event)">
          <a class="lb-cancel"></a>
        </div>
      </div>
    </div>
    <div class="lb-dataContainer" [hidden]="ui.showReloader" #dataContainer>
      <div class="lb-data">
        <div class="lb-details">
          <span class="lb-caption animation fadeIn" [hidden]="!ui.showCaption" [innerHtml]="album[currentImageIndex].caption" #caption>
          </span>
          <span class="lb-number animation fadeIn" [hidden]="!ui.showPageNumber" #number>{{ content.pageNumber }}</span>
        </div>
        <div class="lb-controlContainer">
          <div class="lb-closeContainer">
            <a class="lb-close" (click)="close($event)"></a>
          </div>
          <div class="lb-downloadContainer" [hidden]="!ui.showDownloadButton">
            <a class="lb-download" (click)="download($event)"></a>
          </div>
          <div class="lb-turnContainer" [hidden]="!ui.showRotateButton">
            <a class="lb-turnLeft" (click)="control($event)"></a>
            <a class="lb-turnRight" (click)="control($event)"></a>
          </div>
          <div class="lb-zoomContainer" [hidden]="!ui.showZoomButton">
            <a class="lb-zoomOut" (click)="control($event)"></a>
            <a class="lb-zoomIn" (click)="control($event)"></a>
          </div>
        </div>
      </div>
    </div>`,
      selector: "[lb-content]",
      host: {
        "(click)": "close($event)",
        "[class]": "ui.classList"
      }
    }]
  }], function() {
    return [{ type: ElementRef }, { type: Renderer2 }, { type: LightboxEvent }, { type: ElementRef }, { type: LightboxWindowRef }, { type: FileSaverService }, { type: DomSanitizer }, { type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }];
  }, { album: [{
    type: Input
  }], currentImageIndex: [{
    type: Input
  }], options: [{
    type: Input
  }], cmpRef: [{
    type: Input
  }], _outerContainerElem: [{
    type: ViewChild,
    args: ["outerContainer", { static: false }]
  }], _containerElem: [{
    type: ViewChild,
    args: ["container", { static: false }]
  }], _leftArrowElem: [{
    type: ViewChild,
    args: ["leftArrow", { static: false }]
  }], _rightArrowElem: [{
    type: ViewChild,
    args: ["rightArrow", { static: false }]
  }], _navArrowElem: [{
    type: ViewChild,
    args: ["navArrow", { static: false }]
  }], _dataContainerElem: [{
    type: ViewChild,
    args: ["dataContainer", { static: false }]
  }], _imageElem: [{
    type: ViewChild,
    args: ["image", { static: false }]
  }], _captionElem: [{
    type: ViewChild,
    args: ["caption", { static: false }]
  }], _numberElem: [{
    type: ViewChild,
    args: ["number", { static: false }]
  }] });
})();

// node_modules/ngx-lightbox/lightbox-config.service.js
var LightboxConfig = class {
  constructor() {
    this.fadeDuration = 0.7;
    this.resizeDuration = 0.5;
    this.fitImageInViewPort = true;
    this.positionFromTop = 20;
    this.showImageNumberLabel = false;
    this.alwaysShowNavOnTouchDevices = false;
    this.wrapAround = false;
    this.disableKeyboardNav = false;
    this.disableScrolling = false;
    this.centerVertically = false;
    this.enableTransition = true;
    this.albumLabel = "Image %1 of %2";
    this.showZoom = false;
    this.showRotate = false;
    this.containerElementResolver = (documentRef) => documentRef.querySelector("body");
  }
};
LightboxConfig.\u0275fac = function LightboxConfig_Factory(t) {
  return new (t || LightboxConfig)();
};
LightboxConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: LightboxConfig, factory: LightboxConfig.\u0275fac });
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxConfig, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();

// node_modules/ngx-lightbox/lightbox-overlay.component.js
var _c02 = ["lb-overlay", ""];
var LightboxOverlayComponent = class {
  constructor(_elemRef, _rendererRef, _lightboxEvent, _documentRef) {
    this._elemRef = _elemRef;
    this._rendererRef = _rendererRef;
    this._lightboxEvent = _lightboxEvent;
    this._documentRef = _documentRef;
    this.classList = "lightboxOverlay animation fadeInOverlay";
    this._subscription = this._lightboxEvent.lightboxEvent$.subscribe((event) => this._onReceivedEvent(event));
  }
  close() {
    this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.CLOSE, data: null });
  }
  ngAfterViewInit() {
    const fadeDuration = this.options.fadeDuration;
    this._rendererRef.setStyle(this._elemRef.nativeElement, "-webkit-animation-duration", `${fadeDuration}s`);
    this._rendererRef.setStyle(this._elemRef.nativeElement, "animation-duration", `${fadeDuration}s`);
    this._sizeOverlay();
  }
  onResize() {
    this._sizeOverlay();
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
  _sizeOverlay() {
    const width = this._getOverlayWidth();
    const height = this._getOverlayHeight();
    this._rendererRef.setStyle(this._elemRef.nativeElement, "width", `${width}px`);
    this._rendererRef.setStyle(this._elemRef.nativeElement, "height", `${height}px`);
  }
  _onReceivedEvent(event) {
    switch (event.id) {
      case LIGHTBOX_EVENT.CLOSE:
        this._end();
        break;
      default:
        break;
    }
  }
  _end() {
    this.classList = "lightboxOverlay animation fadeOutOverlay";
    setTimeout(() => {
      this.cmpRef.destroy();
    }, this.options.fadeDuration * 1e3);
  }
  _getOverlayWidth() {
    return Math.max(this._documentRef.body.scrollWidth, this._documentRef.body.offsetWidth, this._documentRef.documentElement.clientWidth, this._documentRef.documentElement.scrollWidth, this._documentRef.documentElement.offsetWidth);
  }
  _getOverlayHeight() {
    return Math.max(this._documentRef.body.scrollHeight, this._documentRef.body.offsetHeight, this._documentRef.documentElement.clientHeight, this._documentRef.documentElement.scrollHeight, this._documentRef.documentElement.offsetHeight);
  }
};
LightboxOverlayComponent.\u0275fac = function LightboxOverlayComponent_Factory(t) {
  return new (t || LightboxOverlayComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(LightboxEvent), \u0275\u0275directiveInject(DOCUMENT));
};
LightboxOverlayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: LightboxOverlayComponent, selectors: [["", "lb-overlay", ""]], hostVars: 2, hostBindings: function LightboxOverlayComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function LightboxOverlayComponent_click_HostBindingHandler() {
      return ctx.close();
    })("resize", function LightboxOverlayComponent_resize_HostBindingHandler() {
      return ctx.onResize();
    }, false, \u0275\u0275resolveWindow);
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.classList);
  }
}, inputs: { options: "options", cmpRef: "cmpRef" }, attrs: _c02, decls: 0, vars: 0, template: function LightboxOverlayComponent_Template(rf, ctx) {
}, encapsulation: 2 });
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxOverlayComponent, [{
    type: Component,
    args: [{
      selector: "[lb-overlay]",
      template: "",
      host: {
        "[class]": "classList"
      }
    }]
  }], function() {
    return [{ type: ElementRef }, { type: Renderer2 }, { type: LightboxEvent }, { type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }];
  }, { options: [{
    type: Input
  }], cmpRef: [{
    type: Input
  }], close: [{
    type: HostListener,
    args: ["click"]
  }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();

// node_modules/ngx-lightbox/lightbox.service.js
var Lightbox = class {
  constructor(_componentFactoryResolver, _injector, _applicationRef, _lightboxConfig, _lightboxEvent, _documentRef) {
    this._componentFactoryResolver = _componentFactoryResolver;
    this._injector = _injector;
    this._applicationRef = _applicationRef;
    this._lightboxConfig = _lightboxConfig;
    this._lightboxEvent = _lightboxEvent;
    this._documentRef = _documentRef;
  }
  open(album, curIndex = 0, options = {}) {
    const overlayComponentRef = this._createComponent(LightboxOverlayComponent);
    const componentRef = this._createComponent(LightboxComponent);
    const newOptions = {};
    this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.OPEN });
    Object.assign(newOptions, this._lightboxConfig, options);
    componentRef.instance.album = album;
    componentRef.instance.currentImageIndex = curIndex;
    componentRef.instance.options = newOptions;
    componentRef.instance.cmpRef = componentRef;
    overlayComponentRef.instance.options = newOptions;
    overlayComponentRef.instance.cmpRef = overlayComponentRef;
    setTimeout(() => {
      this._applicationRef.attachView(overlayComponentRef.hostView);
      this._applicationRef.attachView(componentRef.hostView);
      overlayComponentRef.onDestroy(() => {
        this._applicationRef.detachView(overlayComponentRef.hostView);
      });
      componentRef.onDestroy(() => {
        this._applicationRef.detachView(componentRef.hostView);
      });
      const containerElement = newOptions.containerElementResolver(this._documentRef);
      containerElement.appendChild(overlayComponentRef.location.nativeElement);
      containerElement.appendChild(componentRef.location.nativeElement);
    });
  }
  close() {
    if (this._lightboxEvent) {
      this._lightboxEvent.broadcastLightboxEvent({ id: LIGHTBOX_EVENT.CLOSE });
    }
  }
  _createComponent(ComponentClass) {
    const factory = this._componentFactoryResolver.resolveComponentFactory(ComponentClass);
    const component = factory.create(this._injector);
    return component;
  }
};
Lightbox.\u0275fac = function Lightbox_Factory(t) {
  return new (t || Lightbox)(\u0275\u0275inject(ComponentFactoryResolver$1), \u0275\u0275inject(Injector), \u0275\u0275inject(ApplicationRef), \u0275\u0275inject(LightboxConfig), \u0275\u0275inject(LightboxEvent), \u0275\u0275inject(DOCUMENT));
};
Lightbox.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: Lightbox, factory: Lightbox.\u0275fac });
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Lightbox, [{
    type: Injectable
  }], function() {
    return [{ type: ComponentFactoryResolver$1 }, { type: Injector }, { type: ApplicationRef }, { type: LightboxConfig }, { type: LightboxEvent }, { type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }];
  }, null);
})();

// node_modules/ngx-lightbox/lightbox.module.js
var LightboxModule = class {
};
LightboxModule.\u0275fac = function LightboxModule_Factory(t) {
  return new (t || LightboxModule)();
};
LightboxModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: LightboxModule });
LightboxModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  Lightbox,
  LightboxConfig,
  LightboxEvent,
  LightboxWindowRef
], imports: [FileSaverModule] });
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxModule, [{
    type: NgModule,
    args: [{
      declarations: [LightboxOverlayComponent, LightboxComponent],
      providers: [
        Lightbox,
        LightboxConfig,
        LightboxEvent,
        LightboxWindowRef
      ],
      entryComponents: [LightboxOverlayComponent, LightboxComponent],
      imports: [FileSaverModule]
    }]
  }], null, null);
})();

// src/app/features/pages/ui-interface/advanced-ui/ui-lightbox/ui-lightbox.component.ts
function UiLightboxComponent_For_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 10)(1, "img", 11);
    \u0275\u0275domListener("click", function UiLightboxComponent_For_15_Conditional_0_Template_img_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const \u0275$index_27_r2 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.open(\u0275$index_27_r2, ctx_r2.albumsOne));
    });
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const image_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", image_r4.src, \u0275\u0275sanitizeUrl);
  }
}
function UiLightboxComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UiLightboxComponent_For_15_Conditional_0_Template, 2, 1, "div", 10);
  }
  if (rf & 2) {
    const \u0275$index_27_r2 = ctx.$index;
    \u0275\u0275conditional(\u0275$index_27_r2 < 2 ? 0 : -1);
  }
}
function UiLightboxComponent_For_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 10)(1, "img", 11);
    \u0275\u0275domListener("click", function UiLightboxComponent_For_24_Conditional_0_Template_img_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const \u0275$index_46_r6 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.open(\u0275$index_46_r6, ctx_r2.albumsTwo));
    });
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const image_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", image_r7.src, \u0275\u0275sanitizeUrl);
  }
}
function UiLightboxComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UiLightboxComponent_For_24_Conditional_0_Template, 2, 1, "div", 10);
  }
  if (rf & 2) {
    const \u0275$index_46_r6 = ctx.$index;
    \u0275\u0275conditional(\u0275$index_46_r6 > 2 ? 0 : -1);
  }
}
var UiLightboxComponent = class _UiLightboxComponent {
  _lightbox;
  albumsOne = [];
  albumsTwo = [];
  constructor(_lightbox) {
    this._lightbox = _lightbox;
    for (let i = 1; i <= 5; i++) {
      const src = "assets/img/img-0" + i + ".jpg";
      const caption = "Image " + i + " caption here";
      this.albumsOne.push({ src });
      this.albumsTwo.push({ src, caption });
    }
  }
  open(index, albumArray) {
    this._lightbox.open(albumArray, index);
  }
  close() {
    this._lightbox.close();
  }
  static \u0275fac = function UiLightboxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiLightboxComponent)(\u0275\u0275directiveInject(Lightbox));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiLightboxComponent, selectors: [["app-ui-lightbox"]], decls: 25, vars: 0, consts: [[1, "cardhead"], [1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-md-4", "mb-2", "mb-md-0"], [1, "img-fluid", 3, "click", "src"]], template: function UiLightboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5, "Lightbox");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(6, "div", 2)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "h5", 8);
      \u0275\u0275text(11, "Single Image Lightbox");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 9)(13, "div", 2);
      \u0275\u0275repeaterCreate(14, UiLightboxComponent_For_15_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(16, "div", 5)(17, "div", 6)(18, "div", 7)(19, "h5", 8);
      \u0275\u0275text(20, "Image with Description");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 9)(22, "div", 2);
      \u0275\u0275repeaterCreate(23, UiLightboxComponent_For_24_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.albumsOne);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.albumsTwo);
    }
  }, dependencies: [LightboxModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiLightboxComponent, [{
    type: Component,
    args: [{ selector: "app-ui-lightbox", imports: [LightboxModule], template: '<div class="cardhead">\n\n\n  <div class="page-header">\n    <div class="row">\n      <div class="col">\n        <h3 class="page-title">Lightbox</h3>\n      </div>\n    </div>\n  </div>\n  \n    <div class="row">\n      <!-- Lightbox -->\n      <div class="col-md-12">\n        <div class="card">\n          <div class="card-header">\n            <h5 class="card-title">Single Image Lightbox</h5>\n          </div>\n          <div class="card-body">\n            <div class="row">\n              @for (image of albumsOne; track image; let i = $index) {\n                @if (i < 2) {\n                  <div class="col-md-4 mb-2 mb-md-0">\n                    <img\n                      class="img-fluid"\n                      [src]="image.src"\n                      (click)="open(i, albumsOne)"\n                      />\n                    </div>\n                  }\n                }\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /Lightbox -->\n  \n        <!-- Lightbox -->\n        <div class="col-md-12">\n          <div class="card">\n            <div class="card-header">\n              <h5 class="card-title">Image with Description</h5>\n            </div>\n            <div class="card-body">\n              <div class="row">\n                @for (image of albumsTwo; track image; let i = $index) {\n                  @if (i > 2) {\n                    <div class="col-md-4 mb-2 mb-md-0">\n                      <img\n                        class="img-fluid"\n                        [src]="image.src"\n                        (click)="open(i, albumsTwo)"\n                        />\n                      </div>\n                    }\n                  }\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /Lightbox -->\n        </div>\n  \n      </div>\n  \n  ' }]
  }], () => [{ type: Lightbox }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiLightboxComponent, { className: "UiLightboxComponent", filePath: "src/app/features/pages/ui-interface/advanced-ui/ui-lightbox/ui-lightbox.component.ts", lineNumber: 12 });
})();
export {
  UiLightboxComponent
};
//# sourceMappingURL=chunk-RBZGPC6M.js.map
