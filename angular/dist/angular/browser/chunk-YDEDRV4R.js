// node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js
/*!
 * lightgallery | 2.9.0 | October 1st 2025
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
  __assign = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var zoomSettings = {
  scale: 1,
  zoom: true,
  infiniteZoom: true,
  actualSize: true,
  showZoomInOutIcons: false,
  actualSizeIcons: {
    zoomIn: "lg-zoom-in",
    zoomOut: "lg-zoom-out"
  },
  enableZoomAfter: 300,
  zoomPluginStrings: {
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    viewActualSize: "View actual size"
  }
};
var lGEvents = {
  afterAppendSlide: "lgAfterAppendSlide",
  init: "lgInit",
  hasVideo: "lgHasVideo",
  containerResize: "lgContainerResize",
  updateSlides: "lgUpdateSlides",
  afterAppendSubHtml: "lgAfterAppendSubHtml",
  beforeOpen: "lgBeforeOpen",
  afterOpen: "lgAfterOpen",
  slideItemLoad: "lgSlideItemLoad",
  beforeSlide: "lgBeforeSlide",
  afterSlide: "lgAfterSlide",
  posterClick: "lgPosterClick",
  dragStart: "lgDragStart",
  dragMove: "lgDragMove",
  dragEnd: "lgDragEnd",
  beforeNextSlide: "lgBeforeNextSlide",
  beforePrevSlide: "lgBeforePrevSlide",
  beforeClose: "lgBeforeClose",
  afterClose: "lgAfterClose",
  rotateLeft: "lgRotateLeft",
  rotateRight: "lgRotateRight",
  flipHorizontal: "lgFlipHorizontal",
  flipVertical: "lgFlipVertical",
  autoplay: "lgAutoplay",
  autoplayStart: "lgAutoplayStart",
  autoplayStop: "lgAutoplayStop"
};
var ZOOM_TRANSITION_DURATION = 500;
var Zoom = (
  /** @class */
  (function() {
    function Zoom2(instance, $LG) {
      this.core = instance;
      this.$LG = $LG;
      this.settings = __assign(__assign({}, zoomSettings), this.core.settings);
      return this;
    }
    Zoom2.prototype.buildTemplates = function() {
      var zoomIcons = this.settings.showZoomInOutIcons ? '<button id="' + this.core.getIdName("lg-zoom-in") + '" type="button" aria-label="' + this.settings.zoomPluginStrings["zoomIn"] + '" class="lg-zoom-in lg-icon"></button><button id="' + this.core.getIdName("lg-zoom-out") + '" type="button" aria-label="' + this.settings.zoomPluginStrings["zoomOut"] + '" class="lg-zoom-out lg-icon"></button>' : "";
      if (this.settings.actualSize) {
        zoomIcons += '<button id="' + this.core.getIdName("lg-actual-size") + '" type="button" aria-label="' + this.settings.zoomPluginStrings["viewActualSize"] + '" class="' + this.settings.actualSizeIcons.zoomIn + ' lg-icon"></button>';
      }
      this.core.outer.addClass("lg-use-transition-for-zoom");
      this.core.$toolbar.first().append(zoomIcons);
    };
    Zoom2.prototype.enableZoom = function(event) {
      var _this = this;
      var _speed = this.settings.enableZoomAfter + event.detail.delay;
      if (this.$LG("body").first().hasClass("lg-from-hash") && event.detail.delay) {
        _speed = 0;
      } else {
        this.$LG("body").first().removeClass("lg-from-hash");
      }
      this.zoomableTimeout = setTimeout(function() {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        _this.core.getSlideItem(event.detail.index).addClass("lg-zoomable");
        if (event.detail.index === _this.core.index) {
          _this.setZoomEssentials();
        }
      }, _speed + 30);
    };
    Zoom2.prototype.enableZoomOnSlideItemLoad = function() {
      this.core.LGel.on(lGEvents.slideItemLoad + ".zoom", this.enableZoom.bind(this));
    };
    Zoom2.prototype.getDragCords = function(e) {
      return {
        x: e.pageX,
        y: e.pageY
      };
    };
    Zoom2.prototype.getSwipeCords = function(e) {
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
      return {
        x,
        y
      };
    };
    Zoom2.prototype.getDragAllowedAxises = function(scale, scaleDiff) {
      if (!this.containerRect) {
        return {
          allowX: false,
          allowY: false
        };
      }
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first().get();
      var height = 0;
      var width = 0;
      var rect = $image.getBoundingClientRect();
      if (scale) {
        height = $image.offsetHeight * scale;
        width = $image.offsetWidth * scale;
      } else if (scaleDiff) {
        height = rect.height + scaleDiff * rect.height;
        width = rect.width + scaleDiff * rect.width;
      } else {
        height = rect.height;
        width = rect.width;
      }
      var allowY = height > this.containerRect.height;
      var allowX = width > this.containerRect.width;
      return {
        allowX,
        allowY
      };
    };
    Zoom2.prototype.setZoomEssentials = function() {
      this.containerRect = this.core.$content.get().getBoundingClientRect();
    };
    Zoom2.prototype.zoomImage = function(scale, scaleDiff, reposition, resetToMax) {
      if (!this.containerRect || Math.abs(scaleDiff) <= 0)
        return;
      var offsetX = this.containerRect.width / 2 + this.containerRect.left;
      var offsetY = this.containerRect.height / 2 + this.containerRect.top + this.scrollTop;
      var originalX;
      var originalY;
      if (scale === 1) {
        this.positionChanged = false;
      }
      var dragAllowedAxises = this.getDragAllowedAxises(0, scaleDiff);
      var allowY = dragAllowedAxises.allowY, allowX = dragAllowedAxises.allowX;
      if (this.positionChanged) {
        originalX = this.left / (this.scale - scaleDiff);
        originalY = this.top / (this.scale - scaleDiff);
        this.pageX = offsetX - originalX;
        this.pageY = offsetY - originalY;
        this.positionChanged = false;
      }
      var possibleSwipeCords = this.getPossibleSwipeDragCords(scaleDiff);
      var x;
      var y;
      var _x = offsetX - this.pageX;
      var _y = offsetY - this.pageY;
      if (scale - scaleDiff > 1) {
        var scaleVal = (scale - scaleDiff) / Math.abs(scaleDiff);
        _x = (scaleDiff < 0 ? -_x : _x) + this.left * (scaleVal + (scaleDiff < 0 ? -1 : 1));
        _y = (scaleDiff < 0 ? -_y : _y) + this.top * (scaleVal + (scaleDiff < 0 ? -1 : 1));
        x = _x / scaleVal;
        y = _y / scaleVal;
      } else {
        var scaleVal = (scale - scaleDiff) * scaleDiff;
        x = _x * scaleVal;
        y = _y * scaleVal;
      }
      if (reposition) {
        if (allowX) {
          if (this.isBeyondPossibleLeft(x, possibleSwipeCords.minX)) {
            x = possibleSwipeCords.minX;
          } else if (this.isBeyondPossibleRight(x, possibleSwipeCords.maxX)) {
            x = possibleSwipeCords.maxX;
          }
        } else {
          if (scale > 1) {
            if (x < possibleSwipeCords.minX) {
              x = possibleSwipeCords.minX;
            } else if (x > possibleSwipeCords.maxX) {
              x = possibleSwipeCords.maxX;
            }
          }
        }
        if (allowY) {
          if (this.isBeyondPossibleTop(y, possibleSwipeCords.minY)) {
            y = possibleSwipeCords.minY;
          } else if (this.isBeyondPossibleBottom(y, possibleSwipeCords.maxY)) {
            y = possibleSwipeCords.maxY;
          }
        } else {
          if (scale > 1) {
            if (y < possibleSwipeCords.minY) {
              y = possibleSwipeCords.minY;
            } else if (y > possibleSwipeCords.maxY) {
              y = possibleSwipeCords.maxY;
            }
          }
        }
      }
      this.setZoomStyles({
        x,
        y,
        scale
      });
      this.left = x;
      this.top = y;
      if (resetToMax) {
        this.setZoomImageSize();
      }
    };
    Zoom2.prototype.resetImageTranslate = function(index) {
      if (!this.isImageSlide(index)) {
        return;
      }
      var $image = this.core.getSlideItem(index).find(".lg-image").first();
      this.imageReset = false;
      $image.removeClass("reset-transition reset-transition-y reset-transition-x");
      this.core.outer.removeClass("lg-actual-size");
      $image.css("width", "auto").css("height", "auto");
      setTimeout(function() {
        $image.removeClass("no-transition");
      }, 10);
    };
    Zoom2.prototype.setZoomImageSize = function() {
      var _this = this;
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      setTimeout(function() {
        var actualSizeScale = _this.getCurrentImageActualSizeScale();
        if (_this.scale >= actualSizeScale) {
          $image.addClass("no-transition");
          _this.imageReset = true;
        }
      }, ZOOM_TRANSITION_DURATION);
      setTimeout(function() {
        var actualSizeScale = _this.getCurrentImageActualSizeScale();
        if (_this.scale >= actualSizeScale) {
          var dragAllowedAxises = _this.getDragAllowedAxises(_this.scale);
          $image.css("width", $image.get().naturalWidth + "px").css("height", $image.get().naturalHeight + "px");
          _this.core.outer.addClass("lg-actual-size");
          if (dragAllowedAxises.allowX && dragAllowedAxises.allowY) {
            $image.addClass("reset-transition");
          } else if (dragAllowedAxises.allowX && !dragAllowedAxises.allowY) {
            $image.addClass("reset-transition-x");
          } else if (!dragAllowedAxises.allowX && dragAllowedAxises.allowY) {
            $image.addClass("reset-transition-y");
          }
        }
      }, ZOOM_TRANSITION_DURATION + 50);
    };
    Zoom2.prototype.setZoomStyles = function(style) {
      var $imageWrap = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first();
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      var $dummyImage = this.core.outer.find(".lg-current .lg-dummy-img").first();
      this.scale = style.scale;
      $image.css("transform", "scale3d(" + style.scale + ", " + style.scale + ", 1)");
      $dummyImage.css("transform", "scale3d(" + style.scale + ", " + style.scale + ", 1)");
      var transform = "translate3d(" + style.x + "px, " + style.y + "px, 0)";
      $imageWrap.css("transform", transform);
    };
    Zoom2.prototype.setActualSize = function(index, event) {
      var _this = this;
      if (this.zoomInProgress) {
        return;
      }
      this.zoomInProgress = true;
      var currentItem = this.core.galleryItems[this.core.index];
      this.resetImageTranslate(index);
      setTimeout(function() {
        if (!currentItem.src || _this.core.outer.hasClass("lg-first-slide-loading")) {
          return;
        }
        var scale = _this.getCurrentImageActualSizeScale();
        var prevScale = _this.scale;
        if (_this.core.outer.hasClass("lg-zoomed")) {
          _this.scale = 1;
        } else {
          _this.scale = _this.getScale(scale);
        }
        _this.setPageCords(event);
        _this.beginZoom(_this.scale);
        _this.zoomImage(_this.scale, _this.scale - prevScale, true, true);
      }, 50);
      setTimeout(function() {
        _this.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
      }, 60);
      setTimeout(function() {
        _this.zoomInProgress = false;
      }, ZOOM_TRANSITION_DURATION + 110);
    };
    Zoom2.prototype.getNaturalWidth = function(index) {
      var $image = this.core.getSlideItem(index).find(".lg-image").first();
      var naturalWidth = this.core.galleryItems[index].width;
      return naturalWidth ? parseFloat(naturalWidth) : $image.get().naturalWidth;
    };
    Zoom2.prototype.getActualSizeScale = function(naturalWidth, width) {
      var _scale;
      var scale;
      if (naturalWidth >= width) {
        _scale = naturalWidth / width;
        scale = _scale || 2;
      } else {
        scale = 1;
      }
      return scale;
    };
    Zoom2.prototype.getCurrentImageActualSizeScale = function() {
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      var width = $image.get().offsetWidth;
      var naturalWidth = this.getNaturalWidth(this.core.index) || width;
      return this.getActualSizeScale(naturalWidth, width);
    };
    Zoom2.prototype.getPageCords = function(event) {
      var cords = {};
      if (event) {
        cords.x = event.pageX || event.touches[0].pageX;
        cords.y = event.pageY || event.touches[0].pageY;
      } else {
        var containerRect = this.core.$content.get().getBoundingClientRect();
        cords.x = containerRect.width / 2 + containerRect.left;
        cords.y = containerRect.height / 2 + this.scrollTop + containerRect.top;
      }
      return cords;
    };
    Zoom2.prototype.setPageCords = function(event) {
      var pageCords = this.getPageCords(event);
      this.pageX = pageCords.x;
      this.pageY = pageCords.y;
    };
    Zoom2.prototype.manageActualPixelClassNames = function() {
      var $actualSize = this.core.getElementById("lg-actual-size");
      $actualSize.removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut);
    };
    Zoom2.prototype.beginZoom = function(scale) {
      this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging");
      if (scale > 1) {
        this.core.outer.addClass("lg-zoomed");
        this.manageActualPixelClassNames();
      } else {
        this.resetZoom();
      }
      return scale > 1;
    };
    Zoom2.prototype.getScale = function(scale) {
      var actualSizeScale = this.getCurrentImageActualSizeScale();
      if (scale < 1) {
        scale = 1;
      } else if (scale > actualSizeScale) {
        scale = actualSizeScale;
      }
      return scale;
    };
    Zoom2.prototype.init = function() {
      var _this = this;
      if (!this.settings.zoom) {
        return;
      }
      this.buildTemplates();
      this.enableZoomOnSlideItemLoad();
      var tapped = null;
      this.core.outer.on("dblclick.lg", function(event) {
        if (!_this.$LG(event.target).hasClass("lg-image")) {
          return;
        }
        _this.setActualSize(_this.core.index, event);
      });
      this.core.outer.on("touchstart.lg", function(event) {
        var $target = _this.$LG(event.target);
        if (event.touches.length === 1 && $target.hasClass("lg-image")) {
          if (!tapped) {
            tapped = setTimeout(function() {
              tapped = null;
            }, 300);
          } else {
            clearTimeout(tapped);
            tapped = null;
            event.preventDefault();
            _this.setActualSize(_this.core.index, event);
          }
        }
      });
      this.core.LGel.on(lGEvents.containerResize + ".zoom " + lGEvents.rotateRight + ".zoom " + lGEvents.rotateLeft + ".zoom " + lGEvents.flipHorizontal + ".zoom " + lGEvents.flipVertical + ".zoom", function() {
        if (!_this.core.lgOpened || !_this.isImageSlide(_this.core.index) || _this.core.touchAction) {
          return;
        }
        var _LGel = _this.core.getSlideItem(_this.core.index).find(".lg-img-wrap").first();
        _this.top = 0;
        _this.left = 0;
        _this.setZoomEssentials();
        _this.setZoomSwipeStyles(_LGel, { x: 0, y: 0 });
        _this.positionChanged = true;
      });
      this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function() {
        if (!_this.core.lgOpened)
          return;
        _this.scrollTop = _this.$LG(window).scrollTop();
      });
      this.core.getElementById("lg-zoom-out").on("click.lg", function() {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        var timeout = 0;
        if (_this.imageReset) {
          _this.resetImageTranslate(_this.core.index);
          timeout = 50;
        }
        setTimeout(function() {
          var scale = _this.scale - _this.settings.scale;
          if (scale < 1) {
            scale = 1;
          }
          _this.beginZoom(scale);
          _this.zoomImage(scale, -_this.settings.scale, true, !_this.settings.infiniteZoom);
        }, timeout);
      });
      this.core.getElementById("lg-zoom-in").on("click.lg", function() {
        _this.zoomIn();
      });
      this.core.getElementById("lg-actual-size").on("click.lg", function() {
        _this.setActualSize(_this.core.index);
      });
      this.core.LGel.on(lGEvents.beforeOpen + ".zoom", function() {
        _this.core.outer.find(".lg-item").removeClass("lg-zoomable");
      });
      this.core.LGel.on(lGEvents.afterOpen + ".zoom", function() {
        _this.scrollTop = _this.$LG(window).scrollTop();
        _this.pageX = _this.core.outer.width() / 2;
        _this.pageY = _this.core.outer.height() / 2 + _this.scrollTop;
        _this.scale = 1;
      });
      this.core.LGel.on(lGEvents.afterSlide + ".zoom", function(event) {
        var prevIndex = event.detail.prevIndex;
        _this.scale = 1;
        _this.positionChanged = false;
        _this.zoomInProgress = false;
        _this.resetZoom(prevIndex);
        _this.resetImageTranslate(prevIndex);
        if (_this.isImageSlide(_this.core.index)) {
          _this.setZoomEssentials();
        }
      });
      this.zoomDrag();
      this.pinchZoom();
      this.zoomSwipe();
      this.zoomableTimeout = false;
      this.positionChanged = false;
      this.zoomInProgress = false;
    };
    Zoom2.prototype.zoomIn = function() {
      if (!this.isImageSlide(this.core.index)) {
        return;
      }
      var scale = this.scale + this.settings.scale;
      if (!this.settings.infiniteZoom) {
        scale = this.getScale(scale);
      }
      this.beginZoom(scale);
      this.zoomImage(scale, Math.min(this.settings.scale, scale - this.scale), true, !this.settings.infiniteZoom);
    };
    Zoom2.prototype.resetZoom = function(index) {
      this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");
      var $actualSize = this.core.getElementById("lg-actual-size");
      var $item = this.core.getSlideItem(index !== void 0 ? index : this.core.index);
      $actualSize.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn);
      $item.find(".lg-img-wrap").first().removeAttr("style");
      $item.find(".lg-image").first().removeAttr("style");
      this.scale = 1;
      this.left = 0;
      this.top = 0;
      this.setPageCords();
    };
    Zoom2.prototype.getTouchDistance = function(e) {
      return Math.sqrt((e.touches[0].pageX - e.touches[1].pageX) * (e.touches[0].pageX - e.touches[1].pageX) + (e.touches[0].pageY - e.touches[1].pageY) * (e.touches[0].pageY - e.touches[1].pageY));
    };
    Zoom2.prototype.pinchZoom = function() {
      var _this = this;
      var startDist = 0;
      var pinchStarted = false;
      var initScale = 1;
      var prevScale = 0;
      var $item = this.core.getSlideItem(this.core.index);
      this.core.outer.on("touchstart.lg", function(e) {
        $item = _this.core.getSlideItem(_this.core.index);
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        if (e.touches.length === 2) {
          e.preventDefault();
          if (_this.core.outer.hasClass("lg-first-slide-loading")) {
            return;
          }
          initScale = _this.scale || 1;
          _this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging");
          _this.setPageCords(e);
          _this.resetImageTranslate(_this.core.index);
          _this.core.touchAction = "pinch";
          startDist = _this.getTouchDistance(e);
        }
      });
      this.core.$inner.on("touchmove.lg", function(e) {
        if (e.touches.length === 2 && _this.core.touchAction === "pinch" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          e.preventDefault();
          var endDist = _this.getTouchDistance(e);
          var distance = startDist - endDist;
          if (!pinchStarted && Math.abs(distance) > 5) {
            pinchStarted = true;
          }
          if (pinchStarted) {
            prevScale = _this.scale;
            var _scale = Math.max(1, initScale + -distance * 0.02);
            _this.scale = Math.round((_scale + Number.EPSILON) * 100) / 100;
            var diff = _this.scale - prevScale;
            _this.zoomImage(_this.scale, Math.round((diff + Number.EPSILON) * 100) / 100, false, false);
          }
        }
      });
      this.core.$inner.on("touchend.lg", function(e) {
        if (_this.core.touchAction === "pinch" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          pinchStarted = false;
          startDist = 0;
          if (_this.scale <= 1) {
            _this.resetZoom();
          } else {
            var actualSizeScale = _this.getCurrentImageActualSizeScale();
            if (_this.scale >= actualSizeScale) {
              var scaleDiff = actualSizeScale - _this.scale;
              if (scaleDiff === 0) {
                scaleDiff = 0.01;
              }
              _this.zoomImage(actualSizeScale, scaleDiff, false, true);
            }
            _this.manageActualPixelClassNames();
            _this.core.outer.addClass("lg-zoomed");
          }
          _this.core.touchAction = void 0;
        }
      });
    };
    Zoom2.prototype.touchendZoom = function(startCoords, endCoords, allowX, allowY, touchDuration) {
      var distanceXnew = endCoords.x - startCoords.x;
      var distanceYnew = endCoords.y - startCoords.y;
      var speedX = Math.abs(distanceXnew) / touchDuration + 1;
      var speedY = Math.abs(distanceYnew) / touchDuration + 1;
      if (speedX > 2) {
        speedX += 1;
      }
      if (speedY > 2) {
        speedY += 1;
      }
      distanceXnew = distanceXnew * speedX;
      distanceYnew = distanceYnew * speedY;
      var _LGel = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first();
      var distance = {};
      distance.x = this.left + distanceXnew;
      distance.y = this.top + distanceYnew;
      var possibleSwipeCords = this.getPossibleSwipeDragCords();
      if (Math.abs(distanceXnew) > 15 || Math.abs(distanceYnew) > 15) {
        if (allowY) {
          if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
            distance.y = possibleSwipeCords.minY;
          } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
            distance.y = possibleSwipeCords.maxY;
          }
        }
        if (allowX) {
          if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
            distance.x = possibleSwipeCords.minX;
          } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
            distance.x = possibleSwipeCords.maxX;
          }
        }
        if (allowY) {
          this.top = distance.y;
        } else {
          distance.y = this.top;
        }
        if (allowX) {
          this.left = distance.x;
        } else {
          distance.x = this.left;
        }
        this.setZoomSwipeStyles(_LGel, distance);
        this.positionChanged = true;
      }
    };
    Zoom2.prototype.getZoomSwipeCords = function(startCoords, endCoords, allowX, allowY, possibleSwipeCords) {
      var distance = {};
      if (allowY) {
        distance.y = this.top + (endCoords.y - startCoords.y);
        if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
          var diffMinY = possibleSwipeCords.minY - distance.y;
          distance.y = possibleSwipeCords.minY - diffMinY / 6;
        } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
          var diffMaxY = distance.y - possibleSwipeCords.maxY;
          distance.y = possibleSwipeCords.maxY + diffMaxY / 6;
        }
      } else {
        distance.y = this.top;
      }
      if (allowX) {
        distance.x = this.left + (endCoords.x - startCoords.x);
        if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
          var diffMinX = possibleSwipeCords.minX - distance.x;
          distance.x = possibleSwipeCords.minX - diffMinX / 6;
        } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
          var difMaxX = distance.x - possibleSwipeCords.maxX;
          distance.x = possibleSwipeCords.maxX + difMaxX / 6;
        }
      } else {
        distance.x = this.left;
      }
      return distance;
    };
    Zoom2.prototype.isBeyondPossibleLeft = function(x, minX) {
      return x >= minX;
    };
    Zoom2.prototype.isBeyondPossibleRight = function(x, maxX) {
      return x <= maxX;
    };
    Zoom2.prototype.isBeyondPossibleTop = function(y, minY) {
      return y >= minY;
    };
    Zoom2.prototype.isBeyondPossibleBottom = function(y, maxY) {
      return y <= maxY;
    };
    Zoom2.prototype.isImageSlide = function(index) {
      var currentItem = this.core.galleryItems[index];
      return this.core.getSlideType(currentItem) === "image";
    };
    Zoom2.prototype.getPossibleSwipeDragCords = function(scale) {
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      var bottom = this.core.mediaContainerPosition.bottom;
      var imgRect = $image.get().getBoundingClientRect();
      var imageHeight = imgRect.height;
      var imageWidth = imgRect.width;
      if (scale) {
        imageHeight = imageHeight + scale * imageHeight;
        imageWidth = imageWidth + scale * imageWidth;
      }
      var minY = (imageHeight - this.containerRect.height) / 2;
      var maxY = (this.containerRect.height - imageHeight) / 2 + bottom;
      var minX = (imageWidth - this.containerRect.width) / 2;
      var maxX = (this.containerRect.width - imageWidth) / 2;
      var possibleSwipeCords = {
        minY,
        maxY,
        minX,
        maxX
      };
      return possibleSwipeCords;
    };
    Zoom2.prototype.setZoomSwipeStyles = function(LGel, distance) {
      LGel.css("transform", "translate3d(" + distance.x + "px, " + distance.y + "px, 0)");
    };
    Zoom2.prototype.zoomSwipe = function() {
      var _this = this;
      var startCoords = {};
      var endCoords = {};
      var isMoved = false;
      var allowX = false;
      var allowY = false;
      var startTime = /* @__PURE__ */ new Date();
      var endTime = /* @__PURE__ */ new Date();
      var possibleSwipeCords;
      var _LGel;
      var $item = this.core.getSlideItem(this.core.index);
      this.core.$inner.on("touchstart.lg", function(e) {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        $item = _this.core.getSlideItem(_this.core.index);
        if ((_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) && e.touches.length === 1 && _this.core.outer.hasClass("lg-zoomed")) {
          e.preventDefault();
          startTime = /* @__PURE__ */ new Date();
          _this.core.touchAction = "zoomSwipe";
          _LGel = _this.core.getSlideItem(_this.core.index).find(".lg-img-wrap").first();
          var dragAllowedAxises = _this.getDragAllowedAxises(0);
          allowY = dragAllowedAxises.allowY;
          allowX = dragAllowedAxises.allowX;
          if (allowX || allowY) {
            startCoords = _this.getSwipeCords(e);
          }
          possibleSwipeCords = _this.getPossibleSwipeDragCords();
          _this.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition");
        }
      });
      this.core.$inner.on("touchmove.lg", function(e) {
        if (e.touches.length === 1 && _this.core.touchAction === "zoomSwipe" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          e.preventDefault();
          _this.core.touchAction = "zoomSwipe";
          endCoords = _this.getSwipeCords(e);
          var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
          if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
            isMoved = true;
            _this.setZoomSwipeStyles(_LGel, distance);
          }
        }
      });
      this.core.$inner.on("touchend.lg", function(e) {
        if (_this.core.touchAction === "zoomSwipe" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          e.preventDefault();
          _this.core.touchAction = void 0;
          _this.core.outer.removeClass("lg-zoom-dragging");
          if (!isMoved) {
            return;
          }
          isMoved = false;
          endTime = /* @__PURE__ */ new Date();
          var touchDuration = endTime.valueOf() - startTime.valueOf();
          _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration);
        }
      });
    };
    Zoom2.prototype.zoomDrag = function() {
      var _this = this;
      var startCoords = {};
      var endCoords = {};
      var isDragging = false;
      var isMoved = false;
      var allowX = false;
      var allowY = false;
      var startTime;
      var endTime;
      var possibleSwipeCords;
      var _LGel;
      this.core.outer.on("mousedown.lg.zoom", function(e) {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        var $item = _this.core.getSlideItem(_this.core.index);
        if (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) {
          startTime = /* @__PURE__ */ new Date();
          _LGel = _this.core.getSlideItem(_this.core.index).find(".lg-img-wrap").first();
          var dragAllowedAxises = _this.getDragAllowedAxises(0);
          allowY = dragAllowedAxises.allowY;
          allowX = dragAllowedAxises.allowX;
          if (_this.core.outer.hasClass("lg-zoomed")) {
            if (_this.$LG(e.target).hasClass("lg-object") && (allowX || allowY)) {
              e.preventDefault();
              startCoords = _this.getDragCords(e);
              possibleSwipeCords = _this.getPossibleSwipeDragCords();
              isDragging = true;
              _this.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging");
            }
          }
        }
      });
      this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function(e) {
        if (isDragging) {
          isMoved = true;
          endCoords = _this.getDragCords(e);
          var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
          _this.setZoomSwipeStyles(_LGel, distance);
        }
      });
      this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function(e) {
        if (isDragging) {
          endTime = /* @__PURE__ */ new Date();
          isDragging = false;
          _this.core.outer.removeClass("lg-zoom-dragging");
          if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
            endCoords = _this.getDragCords(e);
            var touchDuration = endTime.valueOf() - startTime.valueOf();
            _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration);
          }
          isMoved = false;
        }
        _this.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
      });
    };
    Zoom2.prototype.closeGallery = function() {
      this.resetZoom();
      this.zoomInProgress = false;
    };
    Zoom2.prototype.destroy = function() {
      this.$LG(window).off(".lg.zoom.global" + this.core.lgId);
      this.core.LGel.off(".lg.zoom");
      this.core.LGel.off(".zoom");
      clearTimeout(this.zoomableTimeout);
      this.zoomableTimeout = false;
    };
    return Zoom2;
  })()
);
var lg_zoom_es5_default = Zoom;

// node_modules/lightgallery/plugins/video/lg-video.es5.js
/*!
 * lightgallery | 2.9.0 | October 1st 2025
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var videoSettings = {
  autoplayFirstVideo: true,
  youTubePlayerParams: false,
  vimeoPlayerParams: false,
  wistiaPlayerParams: false,
  gotoNextSlideOnVideoEnd: true,
  autoplayVideoOnSlide: false,
  videojs: false,
  videojsTheme: "",
  videojsOptions: {}
};
var lGEvents2 = {
  afterAppendSlide: "lgAfterAppendSlide",
  init: "lgInit",
  hasVideo: "lgHasVideo",
  containerResize: "lgContainerResize",
  updateSlides: "lgUpdateSlides",
  afterAppendSubHtml: "lgAfterAppendSubHtml",
  beforeOpen: "lgBeforeOpen",
  afterOpen: "lgAfterOpen",
  slideItemLoad: "lgSlideItemLoad",
  beforeSlide: "lgBeforeSlide",
  afterSlide: "lgAfterSlide",
  posterClick: "lgPosterClick",
  dragStart: "lgDragStart",
  dragMove: "lgDragMove",
  dragEnd: "lgDragEnd",
  beforeNextSlide: "lgBeforeNextSlide",
  beforePrevSlide: "lgBeforePrevSlide",
  beforeClose: "lgBeforeClose",
  afterClose: "lgAfterClose",
  rotateLeft: "lgRotateLeft",
  rotateRight: "lgRotateRight",
  flipHorizontal: "lgFlipHorizontal",
  flipVertical: "lgFlipVertical",
  autoplay: "lgAutoplay",
  autoplayStart: "lgAutoplayStart",
  autoplayStop: "lgAutoplayStop"
};
var param = function(obj) {
  return Object.keys(obj).map(function(k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
  }).join("&");
};
var paramsToObject = function(url) {
  var paramas = url.slice(1).split("&").map(function(p) {
    return p.split("=");
  }).reduce(function(obj, pair) {
    var _a = pair.map(decodeURIComponent), key = _a[0], value = _a[1];
    obj[key] = value;
    return obj;
  }, {});
  return paramas;
};
var getYouTubeParams = function(videoInfo, youTubePlayerParamsSettings) {
  if (!videoInfo.youtube)
    return "";
  var slideUrlParams = videoInfo.youtube[2] ? paramsToObject(videoInfo.youtube[2]) : "";
  var defaultYouTubePlayerParams = {
    wmode: "opaque",
    autoplay: 0,
    mute: 1,
    enablejsapi: 1
  };
  var playerParamsSettings = youTubePlayerParamsSettings || {};
  var youTubePlayerParams = __assign2(__assign2(__assign2({}, defaultYouTubePlayerParams), playerParamsSettings), slideUrlParams);
  var youTubeParams = "?" + param(youTubePlayerParams);
  return youTubeParams;
};
var isYouTubeNoCookie = function(url) {
  return url.includes("youtube-nocookie.com");
};
var getVimeoURLParams = function(defaultParams, videoInfo) {
  if (!videoInfo || !videoInfo.vimeo)
    return "";
  var urlParams = videoInfo.vimeo[2] || "";
  var defaultVimeoPlayerParams = Object.assign({}, {
    autoplay: 0,
    muted: 1
  }, defaultParams);
  var defaultPlayerParams = defaultVimeoPlayerParams && Object.keys(defaultVimeoPlayerParams).length !== 0 ? param(defaultVimeoPlayerParams) : "";
  var urlWithHash = videoInfo.vimeo[0].split("/").pop() || "";
  var urlWithHashWithParams = urlWithHash.split("?")[0] || "";
  var hash = urlWithHashWithParams.split("#")[0];
  var isPrivate = videoInfo.vimeo[1] !== hash;
  if (isPrivate) {
    urlParams = urlParams.replace("/" + hash, "");
  }
  urlParams = urlParams[0] == "?" ? "&" + urlParams.slice(1) : urlParams || "";
  var privateUrlParams = isPrivate ? "h=" + hash : "";
  defaultPlayerParams = privateUrlParams ? "&" + defaultPlayerParams : defaultPlayerParams;
  var vimeoPlayerParams = "?" + privateUrlParams + defaultPlayerParams + urlParams;
  return vimeoPlayerParams;
};
var Video = (
  /** @class */
  (function() {
    function Video2(instance) {
      this.core = instance;
      this.settings = __assign2(__assign2({}, videoSettings), this.core.settings);
      return this;
    }
    Video2.prototype.init = function() {
      var _this = this;
      this.core.LGel.on(lGEvents2.hasVideo + ".video", this.onHasVideo.bind(this));
      this.core.LGel.on(lGEvents2.posterClick + ".video", function() {
        var $el = _this.core.getSlideItem(_this.core.index);
        _this.loadVideoOnPosterClick($el);
      });
      this.core.LGel.on(lGEvents2.slideItemLoad + ".video", this.onSlideItemLoad.bind(this));
      this.core.LGel.on(lGEvents2.beforeSlide + ".video", this.onBeforeSlide.bind(this));
      this.core.LGel.on(lGEvents2.afterSlide + ".video", this.onAfterSlide.bind(this));
    };
    Video2.prototype.onSlideItemLoad = function(event) {
      var _this = this;
      var _a = event.detail, isFirstSlide = _a.isFirstSlide, index = _a.index;
      if (this.settings.autoplayFirstVideo && isFirstSlide && index === this.core.index) {
        setTimeout(function() {
          _this.loadAndPlayVideo(index);
        }, 200);
      }
      if (!isFirstSlide && this.settings.autoplayVideoOnSlide && index === this.core.index) {
        this.loadAndPlayVideo(index);
      }
    };
    Video2.prototype.onHasVideo = function(event) {
      var _a = event.detail, index = _a.index, src = _a.src, html5Video = _a.html5Video, hasPoster = _a.hasPoster;
      if (!hasPoster) {
        this.appendVideos(this.core.getSlideItem(index), {
          src,
          addClass: "lg-object",
          index,
          html5Video
        });
        this.gotoNextSlideOnVideoEnd(src, index);
      }
    };
    Video2.prototype.onBeforeSlide = function(event) {
      if (this.core.lGalleryOn) {
        var prevIndex = event.detail.prevIndex;
        this.pauseVideo(prevIndex);
      }
    };
    Video2.prototype.onAfterSlide = function(event) {
      var _this = this;
      var _a = event.detail, index = _a.index, prevIndex = _a.prevIndex;
      var $slide = this.core.getSlideItem(index);
      if (this.settings.autoplayVideoOnSlide && index !== prevIndex) {
        if ($slide.hasClass("lg-complete")) {
          setTimeout(function() {
            _this.loadAndPlayVideo(index);
          }, 100);
        }
      }
    };
    Video2.prototype.loadAndPlayVideo = function(index) {
      var $slide = this.core.getSlideItem(index);
      var currentGalleryItem = this.core.galleryItems[index];
      if (currentGalleryItem.poster) {
        this.loadVideoOnPosterClick($slide, true);
      } else {
        this.playVideo(index);
      }
    };
    Video2.prototype.playVideo = function(index) {
      this.controlVideo(index, "play");
    };
    Video2.prototype.pauseVideo = function(index) {
      this.controlVideo(index, "pause");
    };
    Video2.prototype.getVideoHtml = function(src, addClass, index, html5Video) {
      var video = "";
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      var currentGalleryItem = this.core.galleryItems[index];
      var videoTitle = currentGalleryItem.title || currentGalleryItem.alt;
      videoTitle = videoTitle ? 'title="' + videoTitle + '"' : "";
      var commonIframeProps = 'allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';
      if (videoInfo.youtube) {
        var videoId = "lg-youtube" + index;
        var youTubeParams = getYouTubeParams(videoInfo, this.settings.youTubePlayerParams);
        var isYouTubeNoCookieURL = isYouTubeNoCookie(src);
        var youtubeURL = isYouTubeNoCookieURL ? "//www.youtube-nocookie.com/" : "//www.youtube.com/";
        video = '<iframe allow="autoplay" id=' + videoId + ' class="lg-video-object lg-youtube ' + addClass + '" ' + videoTitle + ' src="' + youtubeURL + "embed/" + (videoInfo.youtube[1] + youTubeParams) + '" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.vimeo) {
        var videoId = "lg-vimeo" + index;
        var playerParams = getVimeoURLParams(this.settings.vimeoPlayerParams, videoInfo);
        video = '<iframe allow="autoplay" id=' + videoId + ' class="lg-video-object lg-vimeo ' + addClass + '" ' + videoTitle + ' src="//player.vimeo.com/video/' + (videoInfo.vimeo[1] + playerParams) + '" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.wistia) {
        var wistiaId = "lg-wistia" + index;
        var playerParams = param(this.settings.wistiaPlayerParams);
        playerParams = playerParams ? "?" + playerParams : "";
        video = '<iframe allow="autoplay" id="' + wistiaId + '" src="//fast.wistia.net/embed/iframe/' + (videoInfo.wistia[4] + playerParams) + '" ' + videoTitle + ' class="wistia_embed lg-video-object lg-wistia ' + addClass + '" name="wistia_embed" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.html5) {
        var html5VideoMarkup = "";
        for (var i = 0; i < html5Video.source.length; i++) {
          var type = html5Video.source[i].type;
          var typeAttr = type ? 'type="' + type + '"' : "";
          html5VideoMarkup += '<source src="' + html5Video.source[i].src + '" ' + typeAttr + ">";
        }
        if (html5Video.tracks) {
          var _loop_1 = function(i2) {
            var trackAttributes = "";
            var track = html5Video.tracks[i2];
            Object.keys(track || {}).forEach(function(key) {
              trackAttributes += key + '="' + track[key] + '" ';
            });
            html5VideoMarkup += "<track " + trackAttributes + ">";
          };
          for (var i = 0; i < html5Video.tracks.length; i++) {
            _loop_1(i);
          }
        }
        var html5VideoAttrs_1 = "";
        var videoAttributes_1 = html5Video.attributes || {};
        Object.keys(videoAttributes_1 || {}).forEach(function(key) {
          html5VideoAttrs_1 += key + '="' + videoAttributes_1[key] + '" ';
        });
        video = '<video class="lg-video-object lg-html5 ' + (this.settings.videojs && this.settings.videojsTheme ? this.settings.videojsTheme + " " : "") + " " + (this.settings.videojs ? " video-js" : "") + '" ' + html5VideoAttrs_1 + ">\n                " + html5VideoMarkup + "\n                Your browser does not support HTML5 video.\n            </video>";
      }
      return video;
    };
    Video2.prototype.appendVideos = function(el, videoParams) {
      var _a;
      var videoHtml = this.getVideoHtml(videoParams.src, videoParams.addClass, videoParams.index, videoParams.html5Video);
      el.find(".lg-video-cont").append(videoHtml);
      var $videoElement = el.find(".lg-video-object").first();
      if (videoParams.html5Video) {
        $videoElement.on("mousedown.lg.video", function(e) {
          e.stopPropagation();
        });
      }
      if (this.settings.videojs && ((_a = this.core.galleryItems[videoParams.index].__slideVideoInfo) === null || _a === void 0 ? void 0 : _a.html5)) {
        try {
          return videojs($videoElement.get(), this.settings.videojsOptions);
        } catch (e) {
          console.error("lightGallery:- Make sure you have included videojs");
        }
      }
    };
    Video2.prototype.gotoNextSlideOnVideoEnd = function(src, index) {
      var _this = this;
      var $videoElement = this.core.getSlideItem(index).find(".lg-video-object").first();
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      if (this.settings.gotoNextSlideOnVideoEnd) {
        if (videoInfo.html5) {
          $videoElement.on("ended", function() {
            _this.core.goToNextSlide();
          });
        } else if (videoInfo.vimeo) {
          try {
            new Vimeo.Player($videoElement.get()).on("ended", function() {
              _this.core.goToNextSlide();
            });
          } catch (e) {
            console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js");
          }
        } else if (videoInfo.wistia) {
          try {
            window._wq = window._wq || [];
            window._wq.push({
              id: $videoElement.attr("id"),
              onReady: function(video) {
                video.bind("end", function() {
                  _this.core.goToNextSlide();
                });
              }
            });
          } catch (e) {
            console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js");
          }
        }
      }
    };
    Video2.prototype.controlVideo = function(index, action) {
      var $videoElement = this.core.getSlideItem(index).find(".lg-video-object").first();
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      if (!$videoElement.get())
        return;
      if (videoInfo.youtube) {
        try {
          $videoElement.get().contentWindow.postMessage('{"event":"command","func":"' + action + 'Video","args":""}', "*");
        } catch (e) {
          console.error("lightGallery:- " + e);
        }
      } else if (videoInfo.vimeo) {
        try {
          new Vimeo.Player($videoElement.get())[action]();
        } catch (e) {
          console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js");
        }
      } else if (videoInfo.html5) {
        if (this.settings.videojs) {
          try {
            videojs($videoElement.get())[action]();
          } catch (e) {
            console.error("lightGallery:- Make sure you have included videojs");
          }
        } else {
          $videoElement.get()[action]();
        }
      } else if (videoInfo.wistia) {
        try {
          window._wq = window._wq || [];
          window._wq.push({
            id: $videoElement.attr("id"),
            onReady: function(video) {
              video[action]();
            }
          });
        } catch (e) {
          console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js");
        }
      }
    };
    Video2.prototype.loadVideoOnPosterClick = function($el, forcePlay) {
      var _this = this;
      if (!$el.hasClass("lg-video-loaded")) {
        if (!$el.hasClass("lg-has-video")) {
          $el.addClass("lg-has-video");
          var _html = void 0;
          var _src = this.core.galleryItems[this.core.index].src;
          var video = this.core.galleryItems[this.core.index].video;
          if (video) {
            _html = typeof video === "string" ? JSON.parse(video) : video;
          }
          var videoJsPlayer_1 = this.appendVideos($el, {
            src: _src,
            addClass: "",
            index: this.core.index,
            html5Video: _html
          });
          this.gotoNextSlideOnVideoEnd(_src, this.core.index);
          var $tempImg = $el.find(".lg-object").first().get();
          $el.find(".lg-video-cont").first().append($tempImg);
          $el.addClass("lg-video-loading");
          videoJsPlayer_1 && videoJsPlayer_1.ready(function() {
            videoJsPlayer_1.on("loadedmetadata", function() {
              _this.onVideoLoadAfterPosterClick($el, _this.core.index);
            });
          });
          $el.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg", function() {
            setTimeout(function() {
              _this.onVideoLoadAfterPosterClick($el, _this.core.index);
            }, 50);
          });
        } else {
          this.playVideo(this.core.index);
        }
      } else if (forcePlay) {
        this.playVideo(this.core.index);
      }
    };
    Video2.prototype.onVideoLoadAfterPosterClick = function($el, index) {
      $el.addClass("lg-video-loaded");
      this.playVideo(index);
    };
    Video2.prototype.destroy = function() {
      this.core.LGel.off(".lg.video");
      this.core.LGel.off(".video");
    };
    return Video2;
  })()
);
var lg_video_es5_default = Video;

export {
  lg_zoom_es5_default,
  lg_video_es5_default
};
//# sourceMappingURL=chunk-YDEDRV4R.js.map
