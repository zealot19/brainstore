import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/pages/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  password = [false];
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 77, vars: 2, consts: [[1, "page-header"], [1, "page-title"], [1, "card"], [1, "card-header"], [1, "card-body", "profile-body"], [1, "mb-2"], [1, "ti", "ti-user", "text-primary", "me-1"], [1, "profile-pic-upload", "image-field"], [1, "profile-pic", "p-2"], ["src", "./assets/img/users/user-49.png", "alt", "user", 1, "object-fit-cover", "h-100", "rounded-1"], ["type", "button", 1, "close", "rounded-1"], ["aria-hidden", "true"], [1, "mb-3"], [1, "image-upload", "mb-0", "d-inline-flex"], ["type", "file"], [1, "btn", "btn-primary", "fs-13"], [1, "mt-2"], [1, "row"], [1, "col-lg-6", "col-sm-12"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", "value", "Jeffry", 1, "form-control"], ["type", "text", "value", "Jordan", 1, "form-control"], ["type", "email", "value", "jeffry@example.com", 1, "form-control"], ["type", "text", "value", "+17468314286", 1, "form-control"], ["type", "text", "value", "Jeffry Jordan", 1, "form-control"], [1, "pass-group"], ["value", "12345678", 1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", 3, "click", "ngClass"], [1, "col-12", "d-flex", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "me-2", "shadow-none"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "shadow-none"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h6");
      \u0275\u0275text(5, "User Profile");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "h4");
      \u0275\u0275text(9, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "h5", 5);
      \u0275\u0275element(12, "i", 6);
      \u0275\u0275text(13, "Basic Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7)(15, "div", 8);
      \u0275\u0275element(16, "img", 9);
      \u0275\u0275elementStart(17, "button", 10)(18, "span", 11);
      \u0275\u0275text(19, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
      \u0275\u0275element(22, "input", 14);
      \u0275\u0275elementStart(23, "div", 15);
      \u0275\u0275text(24, "Change Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "p", 16);
      \u0275\u0275text(26, "Upload an image below 2 MB, Accepted File format JPG, PNG");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 17)(28, "div", 18)(29, "div", 12)(30, "label", 19);
      \u0275\u0275text(31, "First Name");
      \u0275\u0275elementStart(32, "span", 20);
      \u0275\u0275text(33, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(34, "input", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 18)(36, "div", 12)(37, "label", 19);
      \u0275\u0275text(38, "Last Name");
      \u0275\u0275elementStart(39, "span", 20);
      \u0275\u0275text(40, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(41, "input", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 18)(43, "div", 12)(44, "label");
      \u0275\u0275text(45, "Email");
      \u0275\u0275elementStart(46, "span", 20);
      \u0275\u0275text(47, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 18)(50, "div", 12)(51, "label", 19);
      \u0275\u0275text(52, "Phone Number");
      \u0275\u0275elementStart(53, "span", 20);
      \u0275\u0275text(54, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(55, "input", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 18)(57, "div", 12)(58, "label", 19);
      \u0275\u0275text(59, "User Name");
      \u0275\u0275elementStart(60, "span", 20);
      \u0275\u0275text(61, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(62, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 18)(64, "div", 12)(65, "label", 19);
      \u0275\u0275text(66, "Password");
      \u0275\u0275elementStart(67, "span", 20);
      \u0275\u0275text(68, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 26);
      \u0275\u0275element(70, "input", 27);
      \u0275\u0275elementStart(71, "span", 28);
      \u0275\u0275listener("click", function ProfileComponent_Template_span_click_71_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "div", 29)(73, "a", 30);
      \u0275\u0275text(74, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "a", 31);
      \u0275\u0275text(76, "Save Changes");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(70);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "ti-eye" : "ti-eye-off");
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [CommonModule], template: `<div class="page-header">
    <div class="page-title">
        <h4>Profile</h4>
        <h6>User Profile</h6>
    </div>
</div>
<!-- /product list -->
<div class="card">
    <div class="card-header">
    <h4>Profile</h4>
    </div>
    <div class="card-body profile-body">
        <h5 class="mb-2"><i class="ti ti-user text-primary me-1"></i>Basic Information</h5>
            <div class="profile-pic-upload image-field">
                <div class="profile-pic p-2">
                    <img src="./assets/img/users/user-49.png" class="object-fit-cover h-100 rounded-1" alt="user">
                    <button type="button" class="close rounded-1">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="mb-3">
                    <div class="image-upload mb-0 d-inline-flex">
                        <input type="file">
                        <div class="btn btn-primary fs-13">Change Image</div>
                    </div>
                    <p class="mt-2">Upload an image below 2 MB, Accepted File format JPG, PNG</p>
                </div>
            </div>
        <div class="row">
            <div class="col-lg-6 col-sm-12">
                <div class="mb-3">
                    <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" value="Jeffry">
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="mb-3">
                    <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" value="Jordan">
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="mb-3">
                    <label>Email<span class="text-danger ms-1">*</span></label>
                    <input type="email" class="form-control" value="jeffry@example.com">
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="mb-3">
                    <label class="form-label">Phone Number<span class="text-danger ms-1">*</span></label>
                    <input type="text" value="+17468314286" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="mb-3">
                    <label class="form-label">User Name<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" value="Jeffry Jordan">
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="mb-3">
                    <label class="form-label">Password<span class="text-danger ms-1">*</span></label>
                    <div class="pass-group">
                        <input [type]="password[1] ? 'text' : 'password' " class="pass-input form-control" value="12345678">
                        <span class="ti toggle-password" [ngClass]=" password[1] ? 'ti-eye' : 'ti-eye-off'"(click)="togglePassword(1)"></span>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-end">
                <a href="javascript:void(0);" class="btn btn-secondary me-2 shadow-none">Cancel</a>
                <a href="javascript:void(0);" class="btn btn-primary shadow-none">Save Changes</a>
            </div>
        </div>
    </div>
</div>
<!-- /product list -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/pages/pages/profile/profile.component.ts", lineNumber: 10 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-7VDNT2BP.js.map
