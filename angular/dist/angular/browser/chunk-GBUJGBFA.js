import "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  RouterLink
} from "./chunk-OWEB3HQZ.js";
import {
  DomSanitizer
} from "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule,
  DecimalPipe,
  NgIf,
  NgTemplateOutlet
} from "./chunk-D63C2A5J.js";
import {
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  Self,
  TemplateRef,
  ViewChild,
  setClassMetadata,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// node_modules/ngx-dropzone/fesm2020/ngx-dropzone.mjs
var _c0 = [[["ngx-dropzone-label"]]];
var _c1 = ["ngx-dropzone-label"];
function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-dropzone-remove-badge", 1);
    \u0275\u0275listener("click", function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._remove($event));
    });
    \u0275\u0275elementEnd();
  }
}
var _c2 = ["fileInput"];
var _c3 = [[["ngx-dropzone-preview"]], "*", [["ngx-dropzone-label"]]];
var _c4 = ["ngx-dropzone-preview", "*", "ngx-dropzone-label"];
function NgxDropzoneComponent_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2, ["*ngIf", "!_hasPreviews"]);
  }
}
function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-dropzone-remove-badge", 2);
    \u0275\u0275listener("click", function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._remove($event));
    });
    \u0275\u0275elementEnd();
  }
}
function NgxDropzoneVideoPreviewComponent_video_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "video", 2);
    \u0275\u0275listener("click", function NgxDropzoneVideoPreviewComponent_video_0_Template_video_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(1, "source", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.sanitizedVideoSrc);
  }
}
function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-dropzone-remove-badge", 4);
    \u0275\u0275listener("click", function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._remove($event));
    });
    \u0275\u0275elementEnd();
  }
}
var NgxDropzoneLabelDirective = class {
};
NgxDropzoneLabelDirective.\u0275fac = function NgxDropzoneLabelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxDropzoneLabelDirective)();
};
NgxDropzoneLabelDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: NgxDropzoneLabelDirective,
  selectors: [["ngx-dropzone-label"]],
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDropzoneLabelDirective, [{
    type: Directive,
    args: [{
      selector: "ngx-dropzone-label"
    }]
  }], null, null);
})();
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
function coerceNumberProperty(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value)) ? Number(value) : null;
}
var NgxDropzoneRemoveBadgeComponent = class {
};
NgxDropzoneRemoveBadgeComponent.\u0275fac = function NgxDropzoneRemoveBadgeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxDropzoneRemoveBadgeComponent)();
};
NgxDropzoneRemoveBadgeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxDropzoneRemoveBadgeComponent,
  selectors: [["ngx-dropzone-remove-badge"]],
  standalone: false,
  decls: 3,
  vars: 0,
  consts: [["x1", "0", "y1", "0", "x2", "10", "y2", "10"], ["x1", "0", "y1", "10", "x2", "10", "y2", "0"]],
  template: function NgxDropzoneRemoveBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(0, "svg");
      \u0275\u0275element(1, "line", 0)(2, "line", 1);
      \u0275\u0275elementEnd();
    }
  },
  styles: ["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDropzoneRemoveBadgeComponent, [{
    type: Component,
    args: [{
      selector: "ngx-dropzone-remove-badge",
      template: `
    <svg>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  `,
      styles: [":host{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}:host:hover{background:#aeaeae}:host>svg{height:10px;width:10px}:host>svg>line{stroke-width:2px;stroke:#fff}\n"]
    }]
  }], null, null);
})();
var KEY_CODE;
(function(KEY_CODE2) {
  KEY_CODE2[KEY_CODE2["BACKSPACE"] = 8] = "BACKSPACE";
  KEY_CODE2[KEY_CODE2["DELETE"] = 46] = "DELETE";
})(KEY_CODE || (KEY_CODE = {}));
var NgxDropzonePreviewComponent = class {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this._removable = false;
    this.removed = new EventEmitter();
    this.tabIndex = 0;
  }
  /** The file to preview. */
  set file(value) {
    this._file = value;
  }
  get file() {
    return this._file;
  }
  /** Allow the user to remove files. */
  get removable() {
    return this._removable;
  }
  set removable(value) {
    this._removable = coerceBooleanProperty(value);
  }
  keyEvent(event) {
    switch (event.keyCode) {
      case KEY_CODE.BACKSPACE:
      case KEY_CODE.DELETE:
        this.remove();
        break;
      default:
        break;
    }
  }
  /** We use the HostBinding to pass these common styles to child components. */
  get hostStyle() {
    const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;
    return this.sanitizer.bypassSecurityTrustStyle(styles);
  }
  /** Remove method to be used from the template. */
  _remove(event) {
    event.stopPropagation();
    this.remove();
  }
  /** Remove the preview item (use from component code). */
  remove() {
    if (this._removable) {
      this.removed.next(this.file);
    }
  }
  readFile() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target.result);
        };
        reader.onerror = (e) => {
          console.error(`FileReader failed on file ${this.file.name}.`);
          reject(e);
        };
        if (!this.file) {
          return reject("No file to read. Please provide a file using the [file] Input property.");
        }
        reader.readAsDataURL(this.file);
      });
    });
  }
};
NgxDropzonePreviewComponent.\u0275fac = function NgxDropzonePreviewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxDropzonePreviewComponent)(\u0275\u0275directiveInject(DomSanitizer));
};
NgxDropzonePreviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxDropzonePreviewComponent,
  selectors: [["ngx-dropzone-preview"]],
  hostVars: 3,
  hostBindings: function NgxDropzonePreviewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keyup", function NgxDropzonePreviewComponent_keyup_HostBindingHandler($event) {
        return ctx.keyEvent($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275domProperty("tabIndex", ctx.tabIndex);
      \u0275\u0275styleMap(ctx.hostStyle);
    }
  },
  inputs: {
    file: "file",
    removable: "removable"
  },
  outputs: {
    removed: "removed"
  },
  standalone: false,
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [[3, "click", 4, "ngIf"], [3, "click"]],
  template: function NgxDropzonePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275projection(0);
      \u0275\u0275template(1, NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template, 1, 0, "ngx-dropzone-remove-badge", 0);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.removable);
    }
  },
  dependencies: [NgxDropzoneRemoveBadgeComponent, NgIf],
  styles: ["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDropzonePreviewComponent, [{
    type: Component,
    args: [{
      selector: "ngx-dropzone-preview",
      template: `
		<ng-content select="ngx-dropzone-label"></ng-content>
		<ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
		</ngx-dropzone-remove-badge>
	`,
      styles: [":host{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host:hover,:host:focus{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host:hover ngx-dropzone-remove-badge,:host:focus ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}\n"]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, {
    file: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    removed: [{
      type: Output
    }],
    keyEvent: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["tabindex"]
    }]
  });
})();
var NgxDropzoneService = class {
  parseFileList(files, accept, maxFileSize, multiple) {
    const addedFiles = [];
    const rejectedFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (!this.isAccepted(file, accept)) {
        this.rejectFile(rejectedFiles, file, "type");
        continue;
      }
      if (maxFileSize && file.size > maxFileSize) {
        this.rejectFile(rejectedFiles, file, "size");
        continue;
      }
      if (!multiple && addedFiles.length >= 1) {
        this.rejectFile(rejectedFiles, file, "no_multiple");
        continue;
      }
      addedFiles.push(file);
    }
    const result = {
      addedFiles,
      rejectedFiles
    };
    return result;
  }
  isAccepted(file, accept) {
    if (accept === "*") {
      return true;
    }
    const acceptFiletypes = accept.split(",").map((it) => it.toLowerCase().trim());
    const filetype = file.type.toLowerCase();
    const filename = file.name.toLowerCase();
    const matchedFileType = acceptFiletypes.find((acceptFiletype) => {
      if (acceptFiletype.endsWith("/*")) {
        return filetype.split("/")[0] === acceptFiletype.split("/")[0];
      }
      if (acceptFiletype.startsWith(".")) {
        return filename.endsWith(acceptFiletype);
      }
      return acceptFiletype == filetype;
    });
    return !!matchedFileType;
  }
  rejectFile(rejectedFiles, file, reason) {
    const rejectedFile = file;
    rejectedFile.reason = reason;
    rejectedFiles.push(rejectedFile);
  }
};
NgxDropzoneService.\u0275fac = function NgxDropzoneService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxDropzoneService)();
};
NgxDropzoneService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: NgxDropzoneService,
  factory: NgxDropzoneService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDropzoneService, [{
    type: Injectable
  }], null, null);
})();
var NgxDropzoneComponent = class {
  constructor(service) {
    this.service = service;
    this.change = new EventEmitter();
    this.accept = "*";
    this._disabled = false;
    this._multiple = true;
    this._maxFileSize = void 0;
    this._expandable = false;
    this._disableClick = false;
    this._processDirectoryDrop = false;
    this._isHovered = false;
  }
  get _hasPreviews() {
    return !!this._previewChildren.length;
  }
  /** Disable any user interaction with the component. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this._isHovered) {
      this._isHovered = false;
    }
  }
  /** Allow the selection of multiple files. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = coerceBooleanProperty(value);
  }
  /** Set the maximum size a single file may have. */
  get maxFileSize() {
    return this._maxFileSize;
  }
  set maxFileSize(value) {
    this._maxFileSize = coerceNumberProperty(value);
  }
  /** Allow the dropzone container to expand vertically. */
  get expandable() {
    return this._expandable;
  }
  set expandable(value) {
    this._expandable = coerceBooleanProperty(value);
  }
  /** Open the file selector on click. */
  get disableClick() {
    return this._disableClick;
  }
  set disableClick(value) {
    this._disableClick = coerceBooleanProperty(value);
  }
  /** Allow dropping directories. */
  get processDirectoryDrop() {
    return this._processDirectoryDrop;
  }
  set processDirectoryDrop(value) {
    this._processDirectoryDrop = coerceBooleanProperty(value);
  }
  /** Show the native OS file explorer to select files. */
  _onClick() {
    if (!this.disableClick) {
      this.showFileSelector();
    }
  }
  _onDragOver(event) {
    if (this.disabled) {
      return;
    }
    this.preventDefault(event);
    this._isHovered = true;
  }
  _onDragLeave() {
    this._isHovered = false;
  }
  _onDrop(event) {
    if (this.disabled) {
      return;
    }
    this.preventDefault(event);
    this._isHovered = false;
    if (!this.processDirectoryDrop || !DataTransferItem.prototype.webkitGetAsEntry) {
      this.handleFileDrop(event.dataTransfer.files);
    } else {
      const droppedItems = event.dataTransfer.items;
      if (droppedItems.length > 0) {
        const droppedFiles = [];
        const droppedDirectories = [];
        for (let i = 0; i < droppedItems.length; i++) {
          const entry = droppedItems[i].webkitGetAsEntry();
          if (entry.isFile) {
            droppedFiles.push(event.dataTransfer.files[i]);
          } else if (entry.isDirectory) {
            droppedDirectories.push(entry);
          }
        }
        const droppedFilesList = new DataTransfer();
        droppedFiles.forEach((droppedFile) => {
          droppedFilesList.items.add(droppedFile);
        });
        if (!droppedDirectories.length && droppedFilesList.items.length) {
          this.handleFileDrop(droppedFilesList.files);
        }
        if (droppedDirectories.length) {
          const extractFilesFromDirectoryCalls = [];
          for (const droppedDirectory of droppedDirectories) {
            extractFilesFromDirectoryCalls.push(this.extractFilesFromDirectory(droppedDirectory));
          }
          Promise.all(extractFilesFromDirectoryCalls).then((allExtractedFiles) => {
            allExtractedFiles.reduce((a, b) => [...a, ...b]).forEach((extractedFile) => {
              droppedFilesList.items.add(extractedFile);
            });
            this.handleFileDrop(droppedFilesList.files);
          });
        }
      }
    }
  }
  extractFilesFromDirectory(directory) {
    function getFileFromFileEntry(fileEntry) {
      return __async(this, null, function* () {
        try {
          return yield new Promise((resolve, reject) => fileEntry.file(resolve, reject));
        } catch (err) {
          console.log("Error converting a fileEntry to a File: ", err);
        }
      });
    }
    return new Promise((resolve, reject) => {
      const files = [];
      const dirReader = directory.createReader();
      const readEntries = () => {
        dirReader.readEntries((dirItems) => __async(null, null, function* () {
          if (!dirItems.length) {
            resolve(files);
          } else {
            const fileEntries = dirItems.filter((dirItem) => dirItem.isFile);
            for (const fileEntry of fileEntries) {
              const file = yield getFileFromFileEntry(fileEntry);
              files.push(file);
            }
            readEntries();
          }
        }));
      };
      readEntries();
    });
  }
  showFileSelector() {
    if (!this.disabled) {
      this._fileInput.nativeElement.click();
    }
  }
  _onFilesSelected(event) {
    const files = event.target.files;
    this.handleFileDrop(files);
    this._fileInput.nativeElement.value = "";
    this.preventDefault(event);
  }
  handleFileDrop(files) {
    const result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
    this.change.next({
      addedFiles: result.addedFiles,
      rejectedFiles: result.rejectedFiles,
      source: this
    });
  }
  preventDefault(event) {
    event.preventDefault();
    event.stopPropagation();
  }
};
NgxDropzoneComponent.\u0275fac = function NgxDropzoneComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxDropzoneComponent)(\u0275\u0275directiveInject(NgxDropzoneService, 2));
};
NgxDropzoneComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxDropzoneComponent,
  selectors: [["ngx-dropzone"], ["", "ngx-dropzone", ""]],
  contentQueries: function NgxDropzoneComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxDropzonePreviewComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previewChildren = _t);
    }
  },
  viewQuery: function NgxDropzoneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c2, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._fileInput = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function NgxDropzoneComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NgxDropzoneComponent_click_HostBindingHandler() {
        return ctx._onClick();
      })("dragover", function NgxDropzoneComponent_dragover_HostBindingHandler($event) {
        return ctx._onDragOver($event);
      })("dragleave", function NgxDropzoneComponent_dragleave_HostBindingHandler() {
        return ctx._onDragLeave();
      })("drop", function NgxDropzoneComponent_drop_HostBindingHandler($event) {
        return ctx._onDrop($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("ngx-dz-disabled", ctx.disabled)("expandable", ctx.expandable)("unclickable", ctx.disableClick)("ngx-dz-hovered", ctx._isHovered);
    }
  },
  inputs: {
    accept: "accept",
    disabled: "disabled",
    multiple: "multiple",
    maxFileSize: "maxFileSize",
    expandable: "expandable",
    disableClick: "disableClick",
    processDirectoryDrop: "processDirectoryDrop",
    id: "id",
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedBy: [0, "aria-describedby", "ariaDescribedBy"]
  },
  outputs: {
    change: "change"
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([NgxDropzoneService])],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 8,
  consts: [["fileInput", ""], ["type", "file", 3, "change", "id", "multiple", "accept", "disabled"], [4, "ngIf"]],
  template: function NgxDropzoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c3);
      \u0275\u0275elementStart(0, "input", 1, 0);
      \u0275\u0275listener("change", function NgxDropzoneComponent_Template_input_change_0_listener($event) {
        return ctx._onFilesSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, NgxDropzoneComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
      \u0275\u0275projection(3);
      \u0275\u0275projection(4, 1);
    }
    if (rf & 2) {
      \u0275\u0275property("id", ctx.id)("multiple", ctx.multiple)("accept", ctx.accept)("disabled", ctx.disabled);
      \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedBy);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx._hasPreviews);
    }
  },
  dependencies: [NgIf],
  styles: ["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:-webkit-focus-ring-color auto 5px}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDropzoneComponent, [{
    type: Component,
    args: [{
      selector: "ngx-dropzone, [ngx-dropzone]",
      providers: [NgxDropzoneService],
      template: '<input #fileInput type="file" [id]="id" [multiple]="multiple" [accept]="accept" [disabled]="disabled"\n  (change)="_onFilesSelected($event)" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledby"\n  [attr.aria-describedby]="ariaDescribedBy">\n<ng-content select="ngx-dropzone-label" *ngIf="!_hasPreviews"></ng-content>\n<ng-content select="ngx-dropzone-preview"></ng-content>\n<ng-content></ng-content>\n',
      styles: [":host{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}:host.ngx-dz-hovered{border-style:solid}:host.ngx-dz-disabled{opacity:.5;cursor:no-drop;pointer-events:none}:host.expandable{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}:host.unclickable{cursor:default}:host ::ng-deep ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}:host input{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}:host input:focus+::ng-deep ngx-dropzone-label{outline:1px dotted #000;outline:-webkit-focus-ring-color auto 5px}\n"]
    }]
  }], function() {
    return [{
      type: NgxDropzoneService,
      decorators: [{
        type: Self
      }]
    }];
  }, {
    _previewChildren: [{
      type: ContentChildren,
      args: [NgxDropzonePreviewComponent, {
        descendants: true
      }]
    }],
    _fileInput: [{
      type: ViewChild,
      args: ["fileInput", {
        static: true
      }]
    }],
    change: [{
      type: Output
    }],
    accept: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.ngx-dz-disabled"]
    }],
    multiple: [{
      type: Input
    }],
    maxFileSize: [{
      type: Input
    }],
    expandable: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.expandable"]
    }],
    disableClick: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.unclickable"]
    }],
    processDirectoryDrop: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    _isHovered: [{
      type: HostBinding,
      args: ["class.ngx-dz-hovered"]
    }],
    _onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    _onDragOver: [{
      type: HostListener,
      args: ["dragover", ["$event"]]
    }],
    _onDragLeave: [{
      type: HostListener,
      args: ["dragleave"]
    }],
    _onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var NgxDropzoneImagePreviewComponent = class extends NgxDropzonePreviewComponent {
  constructor(sanitizer) {
    super(sanitizer);
    this.defaultImgLoading = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==";
    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.defaultImgLoading);
  }
  /** The file to preview. */
  set file(value) {
    this._file = value;
    this.renderImage();
  }
  get file() {
    return this._file;
  }
  ngOnInit() {
    this.renderImage();
  }
  renderImage() {
    this.readFile().then((img) => setTimeout(() => this.imageSrc = img)).catch((err) => console.error(err));
  }
};
NgxDropzoneImagePreviewComponent.\u0275fac = function NgxDropzoneImagePreviewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxDropzoneImagePreviewComponent)(\u0275\u0275directiveInject(DomSanitizer));
};
NgxDropzoneImagePreviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxDropzoneImagePreviewComponent,
  selectors: [["ngx-dropzone-image-preview"]],
  inputs: {
    file: "file"
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([{
    provide: NgxDropzonePreviewComponent,
    useExisting: NgxDropzoneImagePreviewComponent
  }]), \u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [[3, "src"], [3, "click", 4, "ngIf"], [3, "click"]],
  template: function NgxDropzoneImagePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275element(0, "img", 0);
      \u0275\u0275projection(1);
      \u0275\u0275template(2, NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("src", ctx.imageSrc, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.removable);
    }
  },
  dependencies: [NgxDropzoneRemoveBadgeComponent, NgIf],
  styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:hover   img[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;border-radius:5px;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDropzoneImagePreviewComponent, [{
    type: Component,
    args: [{
      selector: "ngx-dropzone-image-preview",
      template: `
    <img [src]="imageSrc" />
		<ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
      providers: [{
        provide: NgxDropzonePreviewComponent,
        useExisting: NgxDropzoneImagePreviewComponent
      }],
      styles: [":host{min-width:unset!important;max-width:unset!important;padding:0!important}:host:hover img,:host:focus img{opacity:.7}:host:hover ngx-dropzone-remove-badge,:host:focus ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host img{max-height:100%;border-radius:5px;opacity:.8}:host ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}\n"]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, {
    file: [{
      type: Input
    }]
  });
})();
var NgxDropzoneVideoPreviewComponent = class extends NgxDropzonePreviewComponent {
  constructor(sanitizer) {
    super(sanitizer);
  }
  ngOnInit() {
    if (!this.file) {
      console.error("No file to read. Please provide a file using the [file] Input property.");
      return;
    }
    this.videoSrc = URL.createObjectURL(this.file);
    this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
  }
  ngOnDestroy() {
    URL.revokeObjectURL(this.videoSrc);
  }
};
NgxDropzoneVideoPreviewComponent.\u0275fac = function NgxDropzoneVideoPreviewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxDropzoneVideoPreviewComponent)(\u0275\u0275directiveInject(DomSanitizer));
};
NgxDropzoneVideoPreviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxDropzoneVideoPreviewComponent,
  selectors: [["ngx-dropzone-video-preview"]],
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([{
    provide: NgxDropzonePreviewComponent,
    useExisting: NgxDropzoneVideoPreviewComponent
  }]), \u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [["controls", "", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["controls", "", 3, "click"], [3, "src"], [3, "click"]],
  template: function NgxDropzoneVideoPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275template(0, NgxDropzoneVideoPreviewComponent_video_0_Template, 2, 1, "video", 0);
      \u0275\u0275projection(1);
      \u0275\u0275template(2, NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.sanitizedVideoSrc);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.removable);
    }
  },
  dependencies: [NgxDropzoneRemoveBadgeComponent, NgIf],
  styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:hover   video[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   video[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{max-height:100%;border-radius:5px}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDropzoneVideoPreviewComponent, [{
    type: Component,
    args: [{
      selector: "ngx-dropzone-video-preview",
      template: `
    <video *ngIf="sanitizedVideoSrc" controls (click)="$event.stopPropagation()">
      <source [src]="sanitizedVideoSrc" />
    </video>
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
      providers: [{
        provide: NgxDropzonePreviewComponent,
        useExisting: NgxDropzoneVideoPreviewComponent
      }],
      styles: [":host{min-width:unset!important;max-width:unset!important;padding:0!important}:host:hover video,:host:focus video{opacity:.7}:host:hover ngx-dropzone-remove-badge,:host:focus ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host video{max-height:100%;border-radius:5px}:host ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}\n"]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, null);
})();
var NgxDropzoneModule = class {
};
NgxDropzoneModule.\u0275fac = function NgxDropzoneModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxDropzoneModule)();
};
NgxDropzoneModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxDropzoneModule,
  declarations: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent],
  imports: [CommonModule],
  exports: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]
});
NgxDropzoneModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDropzoneModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent],
      exports: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]
    }]
  }], null, null);
})();

// node_modules/ngx-file-drop/fesm2022/ngx-file-drop.mjs
var _c02 = ["fileSelector"];
var _c12 = (a0) => ({
  openFileSelector: a0
});
function NgxFileDropComponent_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.dropZoneLabel);
  }
}
function NgxFileDropComponent_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "input", 9);
    \u0275\u0275listener("click", function NgxFileDropComponent_ng_template_4_div_1_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openFileSelector($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275interpolate(ctx_r0.browseBtnLabel))("className", ctx_r0.browseBtnClassName);
  }
}
function NgxFileDropComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgxFileDropComponent_ng_template_4_div_0_Template, 2, 1, "div", 6)(1, NgxFileDropComponent_ng_template_4_div_1_Template, 2, 3, "div", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.dropZoneLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showBrowseBtn);
  }
}
function NgxFileDropComponent_ng_template_6_Template(rf, ctx) {
}
var NgxFileDropEntry = class {
  constructor(relativePath, fileEntry) {
    this.relativePath = relativePath;
    this.fileEntry = fileEntry;
  }
};
var NgxFileDropContentTemplateDirective = class _NgxFileDropContentTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.\u0275fac = function NgxFileDropContentTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxFileDropContentTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxFileDropContentTemplateDirective,
      selectors: [["", "ngx-file-drop-content-tmp", ""]],
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxFileDropContentTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-file-drop-content-tmp]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var NgxFileDropComponent = class _NgxFileDropComponent {
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value != null && `${value}` !== "false";
  }
  constructor(zone, renderer) {
    this.zone = zone;
    this.renderer = renderer;
    this.accept = "*";
    this.directory = false;
    this.multiple = true;
    this.dropZoneLabel = "";
    this.dropZoneClassName = "ngx-file-drop__drop-zone";
    this.useDragEnter = false;
    this.contentClassName = "ngx-file-drop__content";
    this.showBrowseBtn = false;
    this.browseBtnClassName = "btn btn-primary btn-xs ngx-file-drop__browse-btn";
    this.browseBtnLabel = "Browse files";
    this.onFileDrop = new EventEmitter();
    this.onFileOver = new EventEmitter();
    this.onFileLeave = new EventEmitter();
    this.isDraggingOverDropZone = false;
    this.globalDraggingInProgress = false;
    this.files = [];
    this.numOfActiveReadEntries = 0;
    this.helperFormEl = null;
    this.fileInputPlaceholderEl = null;
    this.dropEventTimerSubscription = null;
    this._disabled = false;
    this.openFileSelector = (event) => {
      if (this.fileSelector && this.fileSelector.nativeElement) {
        this.fileSelector.nativeElement.click();
      }
    };
    this.globalDragStartListener = this.renderer.listen("document", "dragstart", (evt) => {
      this.globalDraggingInProgress = true;
    });
    this.globalDragEndListener = this.renderer.listen("document", "dragend", (evt) => {
      this.globalDraggingInProgress = false;
    });
  }
  ngOnDestroy() {
    if (this.dropEventTimerSubscription) {
      this.dropEventTimerSubscription.unsubscribe();
      this.dropEventTimerSubscription = null;
    }
    this.globalDragStartListener();
    this.globalDragEndListener();
    this.files = [];
    this.helperFormEl = null;
    this.fileInputPlaceholderEl = null;
  }
  onDragOver(event) {
    if (this.useDragEnter) {
      this.preventAndStop(event);
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "copy";
      }
    } else if (!this.isDropzoneDisabled() && !this.useDragEnter && event.dataTransfer) {
      if (!this.isDraggingOverDropZone) {
        this.isDraggingOverDropZone = true;
        this.onFileOver.emit(event);
      }
      this.preventAndStop(event);
      event.dataTransfer.dropEffect = "copy";
    }
  }
  onDragEnter(event) {
    if (!this.isDropzoneDisabled() && this.useDragEnter) {
      if (!this.isDraggingOverDropZone) {
        this.isDraggingOverDropZone = true;
        this.onFileOver.emit(event);
      }
      this.preventAndStop(event);
    }
  }
  onDragLeave(event) {
    if (!this.isDropzoneDisabled()) {
      if (this.isDraggingOverDropZone) {
        this.isDraggingOverDropZone = false;
        this.onFileLeave.emit(event);
      }
      this.preventAndStop(event);
    }
  }
  dropFiles(event) {
    if (this.isDropzoneDisabled()) {
      return;
    }
    this.isDraggingOverDropZone = false;
    if (event.dataTransfer) {
      let items;
      if (event.dataTransfer.items) {
        items = event.dataTransfer.items;
      } else {
        items = event.dataTransfer.files;
      }
      this.preventAndStop(event);
      this.checkFiles(items);
    }
  }
  /**
   * Processes the change event of the file input and adds the given files.
   * @param Event event
   */
  uploadFiles(event) {
    if (this.isDropzoneDisabled()) {
      return;
    }
    if (event.target) {
      const items = event.target.files || [];
      this.checkFiles(items);
      this.resetFileInput();
    }
  }
  getFakeDropEntry(file) {
    const fakeFileEntry = {
      name: file.name,
      isDirectory: false,
      isFile: true,
      file: (callback) => callback(file)
    };
    return new NgxFileDropEntry(fakeFileEntry.name, fakeFileEntry);
  }
  checkFile(item) {
    if (!item) {
      return;
    }
    if ("webkitGetAsEntry" in item) {
      let entry = item.webkitGetAsEntry();
      if (entry) {
        if (entry.isFile) {
          const toUpload = new NgxFileDropEntry(entry.name, entry);
          this.addToQueue(toUpload);
        } else if (entry.isDirectory) {
          this.traverseFileTree(entry, entry.name);
        }
        return;
      }
    }
    this.addToQueue(this.getFakeDropEntry(item));
  }
  checkFiles(items) {
    for (let i = 0; i < items.length; i++) {
      this.checkFile(items[i]);
    }
    if (this.dropEventTimerSubscription) {
      this.dropEventTimerSubscription.unsubscribe();
    }
    this.dropEventTimerSubscription = timer(200, 200).subscribe(() => {
      if (this.files.length > 0 && this.numOfActiveReadEntries === 0) {
        const files = this.files;
        this.files = [];
        this.onFileDrop.emit(files);
      }
    });
  }
  traverseFileTree(item, path) {
    if (item.isFile) {
      const toUpload = new NgxFileDropEntry(path, item);
      this.files.push(toUpload);
    } else {
      path = path + "/";
      const dirReader = item.createReader();
      let entries = [];
      const readEntries = () => {
        this.numOfActiveReadEntries++;
        dirReader.readEntries((result) => {
          if (!result.length) {
            if (entries.length === 0) {
              const toUpload = new NgxFileDropEntry(path, item);
              this.zone.run(() => {
                this.addToQueue(toUpload);
              });
            } else {
              for (let i = 0; i < entries.length; i++) {
                this.zone.run(() => {
                  this.traverseFileTree(entries[i], path + entries[i].name);
                });
              }
            }
          } else {
            entries = entries.concat(result);
            readEntries();
          }
          this.numOfActiveReadEntries--;
        });
      };
      readEntries();
    }
  }
  /**
   * Clears any added files from the file input element so the same file can subsequently be added multiple times.
   */
  resetFileInput() {
    if (this.fileSelector && this.fileSelector.nativeElement) {
      const fileInputEl = this.fileSelector.nativeElement;
      const fileInputContainerEl = fileInputEl.parentElement;
      const helperFormEl = this.getHelperFormElement();
      const fileInputPlaceholderEl = this.getFileInputPlaceholderElement();
      if (fileInputContainerEl !== helperFormEl) {
        this.renderer.insertBefore(fileInputContainerEl, fileInputPlaceholderEl, fileInputEl);
        this.renderer.appendChild(helperFormEl, fileInputEl);
        helperFormEl.reset();
        this.renderer.insertBefore(fileInputContainerEl, fileInputEl, fileInputPlaceholderEl);
        this.renderer.removeChild(fileInputContainerEl, fileInputPlaceholderEl);
      }
    }
  }
  /**
   * Get a cached HTML form element as a helper element to clear the file input element.
   */
  getHelperFormElement() {
    if (!this.helperFormEl) {
      this.helperFormEl = this.renderer.createElement("form");
    }
    return this.helperFormEl;
  }
  /**
   * Get a cached HTML div element to be used as placeholder for the file input element when clearing said element.
   */
  getFileInputPlaceholderElement() {
    if (!this.fileInputPlaceholderEl) {
      this.fileInputPlaceholderEl = this.renderer.createElement("div");
    }
    return this.fileInputPlaceholderEl;
  }
  isDropzoneDisabled() {
    return this.globalDraggingInProgress || this.disabled;
  }
  addToQueue(item) {
    this.files.push(item);
  }
  preventAndStop(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  static {
    this.\u0275fac = function NgxFileDropComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxFileDropComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxFileDropComponent,
      selectors: [["ngx-file-drop"]],
      contentQueries: function NgxFileDropComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgxFileDropContentTemplateDirective, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        }
      },
      viewQuery: function NgxFileDropComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c02, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileSelector = _t.first);
        }
      },
      inputs: {
        accept: "accept",
        directory: "directory",
        multiple: "multiple",
        dropZoneLabel: "dropZoneLabel",
        dropZoneClassName: "dropZoneClassName",
        useDragEnter: "useDragEnter",
        contentClassName: "contentClassName",
        showBrowseBtn: "showBrowseBtn",
        browseBtnClassName: "browseBtnClassName",
        browseBtnLabel: "browseBtnLabel",
        disabled: "disabled"
      },
      outputs: {
        onFileDrop: "onFileDrop",
        onFileOver: "onFileOver",
        onFileLeave: "onFileLeave"
      },
      standalone: false,
      decls: 7,
      vars: 15,
      consts: [["fileSelector", ""], ["defaultContentTemplate", ""], [3, "drop", "dragover", "dragenter", "dragleave", "className"], [3, "className"], ["type", "file", 1, "ngx-file-drop__file-input", 3, "change", "accept", "multiple"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ngx-file-drop__drop-zone-label", 4, "ngIf"], [4, "ngIf"], [1, "ngx-file-drop__drop-zone-label"], ["type", "button", 3, "click", "className", "value"]],
      template: function NgxFileDropComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 2);
          \u0275\u0275listener("drop", function NgxFileDropComponent_Template_div_drop_0_listener($event) {
            return ctx.dropFiles($event);
          })("dragover", function NgxFileDropComponent_Template_div_dragover_0_listener($event) {
            return ctx.onDragOver($event);
          })("dragenter", function NgxFileDropComponent_Template_div_dragenter_0_listener($event) {
            return ctx.onDragEnter($event);
          })("dragleave", function NgxFileDropComponent_Template_div_dragleave_0_listener($event) {
            return ctx.onDragLeave($event);
          });
          \u0275\u0275elementStart(1, "div", 3)(2, "input", 4, 0);
          \u0275\u0275listener("change", function NgxFileDropComponent_Template_input_change_2_listener($event) {
            return ctx.uploadFiles($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275template(4, NgxFileDropComponent_ng_template_4_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, NgxFileDropComponent_ng_template_6_Template, 0, 0, "ng-template", 5);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          const defaultContentTemplate_r3 = \u0275\u0275reference(5);
          \u0275\u0275classProp("ngx-file-drop__drop-zone--over", ctx.isDraggingOverDropZone);
          \u0275\u0275property("className", ctx.dropZoneClassName);
          \u0275\u0275advance();
          \u0275\u0275property("className", ctx.contentClassName);
          \u0275\u0275advance();
          \u0275\u0275property("accept", ctx.accept)("multiple", ctx.multiple);
          \u0275\u0275attribute("directory", ctx.directory || void 0)("webkitdirectory", ctx.directory || void 0)("mozdirectory", ctx.directory || void 0)("msdirectory", ctx.directory || void 0)("odirectory", ctx.directory || void 0);
          \u0275\u0275advance(4);
          \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || defaultContentTemplate_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c12, ctx.openFileSelector));
        }
      },
      dependencies: [NgIf, NgTemplateOutlet],
      styles: [".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:#93939380}.ngx-file-drop__content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxFileDropComponent, [{
    type: Component,
    args: [{
      selector: "ngx-file-drop",
      template: '<div [className]="dropZoneClassName"\r\n     [class.ngx-file-drop__drop-zone--over]="isDraggingOverDropZone"\r\n     (drop)="dropFiles($event)"\r\n     (dragover)="onDragOver($event)"\r\n     (dragenter)="onDragEnter($event)"\r\n     (dragleave)="onDragLeave($event)">\r\n  <div [className]="contentClassName">\r\n    <input \r\n      type="file" \r\n      #fileSelector \r\n      [accept]="accept" \r\n      [attr.directory]="directory || undefined" \r\n      [attr.webkitdirectory]="directory || undefined"\r\n      [attr.mozdirectory]="directory || undefined"\r\n      [attr.msdirectory]="directory || undefined"\r\n      [attr.odirectory]="directory || undefined"\r\n      [multiple]="multiple"\r\n      (change)="uploadFiles($event)" \r\n      class="ngx-file-drop__file-input" \r\n    />\r\n\r\n    <ng-template #defaultContentTemplate>\r\n      <div *ngIf="dropZoneLabel" class="ngx-file-drop__drop-zone-label">{{dropZoneLabel}}</div>\r\n      <div *ngIf="showBrowseBtn">\r\n        <input type="button" [className]="browseBtnClassName" value="{{browseBtnLabel}}" (click)="openFileSelector($event)" />\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template\r\n      [ngTemplateOutlet]="contentTemplate || defaultContentTemplate"\r\n      [ngTemplateOutletContext]="{ openFileSelector: openFileSelector }">\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n',
      styles: [".ngx-file-drop__drop-zone{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over{background-color:#93939380}.ngx-file-drop__content{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label{text-align:center}.ngx-file-drop__file-input{display:none}\n"]
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Renderer2
    }];
  }, {
    accept: [{
      type: Input
    }],
    directory: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    dropZoneLabel: [{
      type: Input
    }],
    dropZoneClassName: [{
      type: Input
    }],
    useDragEnter: [{
      type: Input
    }],
    contentClassName: [{
      type: Input
    }],
    showBrowseBtn: [{
      type: Input
    }],
    browseBtnClassName: [{
      type: Input
    }],
    browseBtnLabel: [{
      type: Input
    }],
    onFileDrop: [{
      type: Output
    }],
    onFileOver: [{
      type: Output
    }],
    onFileLeave: [{
      type: Output
    }],
    contentTemplate: [{
      type: ContentChild,
      args: [NgxFileDropContentTemplateDirective, {
        read: TemplateRef
      }]
    }],
    fileSelector: [{
      type: ViewChild,
      args: ["fileSelector", {
        static: true
      }]
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var NgxFileDropModule = class _NgxFileDropModule {
  static {
    this.\u0275fac = function NgxFileDropModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxFileDropModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgxFileDropModule,
      bootstrap: [NgxFileDropComponent],
      declarations: [NgxFileDropComponent, NgxFileDropContentTemplateDirective],
      imports: [CommonModule],
      exports: [NgxFileDropComponent, NgxFileDropContentTemplateDirective]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxFileDropModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxFileDropComponent, NgxFileDropContentTemplateDirective],
      imports: [CommonModule],
      exports: [NgxFileDropComponent, NgxFileDropContentTemplateDirective],
      providers: [],
      bootstrap: [NgxFileDropComponent]
    }]
  }], null, null);
})();

// src/app/features/pages/ui-interface/forms/form-elements/form-fileupload/form-fileupload.component.ts
function FormFileuploadComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21);
    \u0275\u0275element(4, "img", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23)(6, "a", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 25);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "button", 26);
    \u0275\u0275listener("click", function FormFileuploadComponent_For_31_Template_button_click_12_listener() {
      const \u0275$index_52_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeFile(\u0275$index_52_r2));
    });
    \u0275\u0275element(13, "i", 27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const file_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", file_r4.preview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r4.file.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 3, file_r4.file.size / 1024, "1.0-0"), " KB");
  }
}
var FormFileuploadComponent = class _FormFileuploadComponent {
  routes = routes;
  singleFile = [];
  multipleFiles = [];
  files = [];
  onSelect(event) {
    for (const file of event.addedFiles) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.files.push({
          file,
          preview: e.target.result
          // Base64 preview
        });
      };
      reader.readAsDataURL(file);
    }
  }
  removeFile(index) {
    this.files.splice(index, 1);
  }
  static \u0275fac = function FormFileuploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFileuploadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormFileuploadComponent, selectors: [["app-form-fileupload"]], decls: 32, vars: 2, consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-muted"], [1, "dropzone", "custom-dropzone", "justify-content-center", 2, "scrollbar-width", "none", 3, "change", "multiple"], ["ngxDropzoneLabel", "", 1, "dz-message", "needsclick"], [1, "ti", "ti-cloud-upload", "h1", "text-muted"], [1, "text-muted", "fs-13"], [1, "card", "mt-2", "mb-0", "shadow-none", "border"], [1, "p-2"], [1, "row", "align-items-center"], [1, "col-auto"], ["alt", "", 1, "avatar-sm", "rounded", "bg-light", 2, "width", "100px", 3, "src"], [1, "col", "ps-0"], ["href", "javascript:void(0);", 1, "text-muted", "fw-bold"], [1, "mb-0"], [1, "btn", "btn-link", "btn-lg", "text-muted", 3, "click"], [1, "ti", "ti-x"]], template: function FormFileuploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "File Upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 7);
      \u0275\u0275text(10, "File Upload");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h5", 11);
      \u0275\u0275text(16, "Dropzone File Upload");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "p", 13);
      \u0275\u0275text(19, " DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "ngx-dropzone", 14);
      \u0275\u0275listener("change", function FormFileuploadComponent_Template_ngx_dropzone_change_20_listener($event) {
        return ctx.onSelect($event);
      });
      \u0275\u0275elementStart(21, "div", 15);
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275elementStart(23, "h3");
      \u0275\u0275text(24, "Drop files here or click to upload.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 17);
      \u0275\u0275text(26, " (This is just a demo dropzone. Selected files are ");
      \u0275\u0275elementStart(27, "strong");
      \u0275\u0275text(28, "not");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " actually uploaded.) ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(30, FormFileuploadComponent_For_31_Template, 14, 6, "div", 18, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.adminDashboard);
      \u0275\u0275advance(13);
      \u0275\u0275property("multiple", true);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.files);
    }
  }, dependencies: [NgxDropzoneModule, NgxDropzoneComponent, RouterLink, NgxFileDropModule, CommonModule, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFileuploadComponent, [{
    type: Component,
    args: [{ selector: "app-form-fileupload", imports: [NgxDropzoneModule, RouterLink, DecimalPipe, NgxFileDropModule, CommonModule], template: `<!-- Page Header -->
<div class="page-header">
  <div class="row">
    <div class="col-sm-12">
      <h3 class="page-title">File Upload</h3>
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a [routerLink] = "routes.adminDashboard">Dashboard</a></li>
        <li class="breadcrumb-item active">File Upload</li>
      </ul>
    </div>
  </div>
</div>
<!-- /Page Header -->

<div class="row">

  <!-- Drag Card -->
  <div class="col-md-12">

    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Dropzone File Upload</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">
          DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews.
        </p>
        <ngx-dropzone
          [multiple]="true"
          (change)="onSelect($event)"
          class="dropzone custom-dropzone justify-content-center" style="scrollbar-width: none;"
          >

          <div ngxDropzoneLabel class="dz-message needsclick">
            <i class="ti ti-cloud-upload h1 text-muted"></i>
            <h3>Drop files here or click to upload.</h3>
            <span class="text-muted fs-13">
              (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
            </span>
          </div>

        </ngx-dropzone>

        @for (file of files; track file; let i = $index) {
          <div class="card mt-2 mb-0 shadow-none border">
            <div class="p-2">
              <div class="row align-items-center">
                <!-- Thumbnail -->
                <div class="col-auto">
                  <img [src]="file.preview" class="avatar-sm rounded bg-light" style="width: 100px;" alt="">
                </div>
                <!-- Name + Size -->
                <div class="col ps-0">
                  <a href="javascript:void(0);" class="text-muted fw-bold">{{ file.file.name }}</a>
                  <p class="mb-0">{{ file.file.size / 1024 | number:'1.0-0' }} KB</p>
                </div>
                <!-- Remove button -->
                <div class="col-auto">
                  <button class="btn btn-link btn-lg text-muted" (click)="removeFile(i)">
                    <i class="ti ti-x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        }

      </div> <!-- end card-body -->
    </div>  <!-- end card -->


  </div>
  <!-- /Drag Card -->

</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormFileuploadComponent, { className: "FormFileuploadComponent", filePath: "src/app/features/pages/ui-interface/forms/form-elements/form-fileupload/form-fileupload.component.ts", lineNumber: 14 });
})();
export {
  FormFileuploadComponent
};
//# sourceMappingURL=chunk-GBUJGBFA.js.map
