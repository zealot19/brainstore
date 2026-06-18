"use strict";
var _factory = (() => {
  var Z = Object.defineProperty;
  var Pt = Object.getOwnPropertyDescriptor;
  var xt = Object.getOwnPropertyNames;
  var Ht = Object.prototype.hasOwnProperty;
  var kt = (n, t) => {
    for (var e in t) Z(n, e, { get: t[e], enumerable: true });
  }, Ut = (n, t, e, i) => {
    if (t && typeof t == "object" || typeof t == "function") for (let s of xt(t)) !Ht.call(n, s) && s !== e && Z(n, s, { get: () => t[s], enumerable: !(i = Pt(t, s)) || i.enumerable });
    return n;
  };
  var Ft = (n) => Ut(Z({}, "__esModule", { value: true }), n);
  var te = {};
  kt(te, { COUNTRY_SELECTOR_MODE: () => h, Iti: () => j, NUMBER_FORMAT: () => g, NUMBER_TYPE: () => M, PLACEHOLDER_POLICY: () => _, VALIDATION_ERROR: () => z, default: () => Zt });
  var Wt = [["af", "93", 0, null, "0"], ["ax", "358", 1, ["18", "4"], "0"], ["al", "355", 0, null, "0"], ["dz", "213", 0, null, "0"], ["as", "1", 5, ["684"], "1"], ["ad", "376"], ["ao", "244"], ["ai", "1", 6, ["264"], "1"], ["ag", "1", 7, ["268"], "1"], ["ar", "54", 0, null, "0"], ["am", "374", 0, null, "0"], ["aw", "297"], ["ac", "247"], ["au", "61", 0, ["4"], "0"], ["at", "43", 0, null, "0"], ["az", "994", 0, null, "0"], ["bs", "1", 8, ["242"], "1"], ["bh", "973"], ["bd", "880", 0, null, "0"], ["bb", "1", 9, ["246"], "1"], ["by", "375", 0, null, "8"], ["be", "32", 0, null, "0"], ["bz", "501"], ["bj", "229"], ["bm", "1", 10, ["441"], "1"], ["bt", "975"], ["bo", "591", 0, null, "0"], ["ba", "387", 0, null, "0"], ["bw", "267"], ["br", "55", 0, null, "0"], ["io", "246"], ["vg", "1", 11, ["284"], "1"], ["bn", "673"], ["bg", "359", 0, null, "0"], ["bf", "226"], ["bi", "257"], ["kh", "855", 0, null, "0"], ["cm", "237"], ["ca", "1", 1, ["204", "226", "236", "249", "250", "257", "263", "289", "306", "343", "354", "365", "367", "368", "382", "403", "416", "418", "428", "431", "437", "438", "450", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905", "942"], "1"], ["cv", "238"], ["bq", "599", 1, ["3", "4", "7"]], ["ky", "1", 12, ["345"], "1"], ["cf", "236"], ["td", "235"], ["cl", "56"], ["cn", "86", 0, null, "0"], ["cx", "61", 2, ["4", "89164"], "0"], ["cc", "61", 1, ["4", "89162"], "0"], ["co", "57", 0, null, "0"], ["km", "269"], ["cg", "242"], ["cd", "243", 0, null, "0"], ["ck", "682"], ["cr", "506"], ["ci", "225"], ["hr", "385", 0, null, "0"], ["cu", "53", 0, null, "0"], ["cw", "599", 0], ["cy", "357"], ["cz", "420"], ["dk", "45"], ["dj", "253"], ["dm", "1", 13, ["767"], "1"], ["do", "1", 2, ["809", "829", "849"], "1"], ["ec", "593", 0, null, "0"], ["eg", "20", 0, null, "0"], ["sv", "503"], ["gq", "240"], ["er", "291", 0, null, "0"], ["ee", "372"], ["sz", "268"], ["et", "251", 0, null, "0"], ["fk", "500"], ["fo", "298"], ["fj", "679"], ["fi", "358", 0, ["4"], "0"], ["fr", "33", 0, null, "0"], ["gf", "594", 0, null, "0"], ["pf", "689"], ["ga", "241"], ["gm", "220"], ["ge", "995", 0, null, "0"], ["de", "49", 0, null, "0"], ["gh", "233", 0, null, "0"], ["gi", "350"], ["gr", "30"], ["gl", "299"], ["gd", "1", 14, ["473"], "1"], ["gp", "590", 0, null, "0"], ["gu", "1", 15, ["671"], "1"], ["gt", "502"], ["gg", "44", 1, ["1481", "7781", "7839", "7911"], "0"], ["gn", "224"], ["gw", "245"], ["gy", "592"], ["ht", "509"], ["hn", "504"], ["hk", "852"], ["hu", "36", 0, null, "06"], ["is", "354"], ["in", "91", 0, null, "0"], ["id", "62", 0, null, "0"], ["ir", "98", 0, null, "0"], ["iq", "964", 0, null, "0"], ["ie", "353", 0, null, "0"], ["im", "44", 2, ["1624", "74576", "7524", "7624", "7924"], "0"], ["il", "972", 0, null, "0"], ["it", "39", 0, ["3"]], ["jm", "1", 4, ["658", "876"], "1"], ["jp", "81", 0, null, "0"], ["je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"], "0"], ["jo", "962", 0, null, "0"], ["kz", "7", 1, ["33", "7"], "8"], ["ke", "254", 0, null, "0"], ["ki", "686", 0, null, "0"], ["xk", "383", 0, null, "0"], ["kw", "965"], ["kg", "996", 0, null, "0"], ["la", "856", 0, null, "0"], ["lv", "371"], ["lb", "961", 0, null, "0"], ["ls", "266"], ["lr", "231", 0, null, "0"], ["ly", "218", 0, null, "0"], ["li", "423", 0, null, "0"], ["lt", "370", 0, null, "0"], ["lu", "352"], ["mo", "853"], ["mg", "261", 0, null, "0"], ["mw", "265", 0, null, "0"], ["my", "60", 0, null, "0"], ["mv", "960"], ["ml", "223"], ["mt", "356"], ["mh", "692", 0, null, "1"], ["mq", "596", 0, null, "0"], ["mr", "222"], ["mu", "230"], ["yt", "262", 1, ["269", "639"], "0"], ["mx", "52"], ["fm", "691"], ["md", "373", 0, null, "0"], ["mc", "377", 0, null, "0"], ["mn", "976", 0, null, "0"], ["me", "382", 0, null, "0"], ["ms", "1", 16, ["664"], "1"], ["ma", "212", 0, ["6", "7"], "0"], ["mz", "258"], ["mm", "95", 0, null, "0"], ["na", "264", 0, null, "0"], ["nr", "674"], ["np", "977", 0, null, "0"], ["nl", "31", 0, null, "0"], ["nc", "687"], ["nz", "64", 0, null, "0"], ["ni", "505"], ["ne", "227"], ["ng", "234", 0, null, "0"], ["nu", "683"], ["nf", "672"], ["kp", "850", 0, null, "0"], ["mk", "389", 0, null, "0"], ["mp", "1", 17, ["670"], "1"], ["no", "47", 0, ["4", "9"]], ["om", "968"], ["pk", "92", 0, null, "0"], ["pw", "680"], ["ps", "970", 0, null, "0"], ["pa", "507"], ["pg", "675"], ["py", "595", 0, null, "0"], ["pe", "51", 0, null, "0"], ["ph", "63", 0, null, "0"], ["pl", "48"], ["pt", "351"], ["pr", "1", 3, ["787", "939"], "1"], ["qa", "974"], ["re", "262", 0, null, "0"], ["ro", "40", 0, null, "0"], ["ru", "7", 0, ["33"], "8"], ["rw", "250", 0, null, "0"], ["ws", "685"], ["sm", "378"], ["st", "239"], ["sa", "966", 0, null, "0"], ["sn", "221"], ["rs", "381", 0, null, "0"], ["sc", "248"], ["sl", "232", 0, null, "0"], ["sg", "65"], ["sx", "1", 21, ["721"], "1"], ["sk", "421", 0, null, "0"], ["si", "386", 0, null, "0"], ["sb", "677"], ["so", "252", 0, null, "0"], ["za", "27", 0, null, "0"], ["kr", "82", 0, null, "0"], ["ss", "211", 0, null, "0"], ["es", "34"], ["lk", "94", 0, null, "0"], ["bl", "590", 1, null, "0"], ["sh", "290"], ["kn", "1", 18, ["869"], "1"], ["lc", "1", 19, ["758"], "1"], ["mf", "590", 2, null, "0"], ["pm", "508", 0, null, "0"], ["vc", "1", 20, ["784"], "1"], ["sd", "249", 0, null, "0"], ["sr", "597"], ["sj", "47", 1, ["4", "79", "9"]], ["se", "46", 0, null, "0"], ["ch", "41", 0, null, "0"], ["sy", "963", 0, null, "0"], ["tw", "886", 0, null, "0"], ["tj", "992"], ["tz", "255", 0, null, "0"], ["th", "66", 0, null, "0"], ["tl", "670"], ["tg", "228"], ["tk", "690"], ["to", "676"], ["tt", "1", 22, ["868"], "1"], ["tn", "216"], ["tr", "90", 0, null, "0"], ["tm", "993", 0, null, "8"], ["tc", "1", 23, ["649"], "1"], ["tv", "688"], ["vi", "1", 24, ["340"], "1"], ["ug", "256", 0, null, "0"], ["ua", "380", 0, null, "0"], ["ae", "971", 0, null, "0"], ["gb", "44", 0, null, "0"], ["us", "1", 0, null, "1"], ["uy", "598", 0, null, "0"], ["uz", "998"], ["vu", "678"], ["va", "39", 1, ["06698", "3"]], ["ve", "58", 0, null, "0"], ["vn", "84", 0, null, "0"], ["wf", "681"], ["eh", "212", 1, ["5288", "5289", "6", "7"], "0"], ["ye", "967", 0, null, "0"], ["zm", "260", 0, null, "0"], ["zw", "263", 0, null, "0"]], tt = [];
  for (let n of Wt) tt.push({ name: "", iso2: n[0], dialCode: n[1], priority: n[2] || 0, areaCodes: n[3] || null, nationalPrefix: n[4] || null });
  var Bt = new Set(tt.map((n) => n.iso2)), x = (n) => Bt.has(n), k = tt;
  var S = { OPEN_COUNTRY_SELECTOR: "open:countryselector", CLOSE_COUNTRY_SELECTOR: "close:countryselector", COUNTRY_CHANGE: "countrychange", INPUT: "input", STRICT_REJECT: "strict:reject" }, c = { HIDE: "iti__hide", V_HIDE: "iti__v-hide", ARROW_UP: "iti__arrow--up", GLOBE: "iti__globe", FLAG: "iti__flag", LOADING: "iti__loading", COUNTRY_ITEM: "iti__country", HIGHLIGHT: "iti__highlight", STRICT_REJECT_ANIMATION: "iti__strict-reject-animation" }, b = { ARROW_UP: "ArrowUp", ARROW_DOWN: "ArrowDown", SPACE: " ", ENTER: "Enter", ESC: "Escape", TAB: "Tab" }, et = { PASTE: "insertFromPaste", DELETE_FORWARD: "deleteContentForward" }, v = { ALPHA_UNICODE: new RegExp("\\p{L}", "u"), NON_PLUS_NUMERIC: /[^+0-9]/, NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g, HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/ }, it = { SEARCH_DEBOUNCE_MS: 100, HIDDEN_SEARCH_RESET_MS: 1e3, NEXT_TICK: 0 }, O = { NARROW_VIEWPORT_WIDTH: 500, FALLBACK_SELECTED_COUNTRY_WITH_DIAL_WIDTH: 78, FALLBACK_SELECTED_COUNTRY_NO_DIAL_WIDTH: 42, INPUT_PADDING_EXTRA_LEFT: 6, DROPDOWN_MARGIN: 3, FALLBACK_DROPDOWN_HEIGHT: 200 }, V = { PLUS: "+", NANP: "1" }, Y = { ISO2: "gb", DIAL_CODE: "44", MOBILE_PREFIX: "7", MOBILE_CORE_LENGTH: 10 }, dt = { ISO2: "us", DIAL_CODE: "1" }, _ = { AGGRESSIVE: "AGGRESSIVE", POLITE: "POLITE", OFF: "OFF" }, G = ["OFF", "DROPDOWN", "FULLSCREEN", "AUTO"], jt = ["E164", "INTERNATIONAL", "NATIONAL", "RFC3966"], U = ["FIXED_LINE", "MOBILE", "FIXED_LINE_OR_MOBILE", "TOLL_FREE", "PREMIUM_RATE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL", "UNKNOWN"], $t = ["IS_POSSIBLE", "INVALID_COUNTRY_CODE", "TOO_SHORT", "TOO_LONG", "IS_POSSIBLE_LOCAL_ONLY", "INVALID_LENGTH"], K = (n) => Object.fromEntries(n.map((t) => [t, t])), g = K(jt), M = K(U), z = K($t), h = K(G), R = { ISO2: "iso2", DIAL_CODE: "dialCode", INSTANCE_ID: "intlTelInputId" }, p = { EXPANDED: "aria-expanded", LABEL: "aria-label", SELECTED: "aria-selected", ACTIVE_DESCENDANT: "aria-activedescendant", HASPOPUP: "aria-haspopup", CONTROLS: "aria-controls", HIDDEN: "aria-hidden", AUTOCOMPLETE: "aria-autocomplete", MODAL: "aria-modal" };
  var Vt = { selectedCountryAriaLabel: "Change country for phone number, currently selected ${countryName} (${dialCode})", noCountrySelected: "Select country for phone number", countryListAriaLabel: "List of countries", searchPlaceholder: "Search", clearSearchAriaLabel: "Clear search", searchEmptyState: "No results found", searchSummaryAria(n) {
    return n === 0 ? "No results found" : n === 1 ? "1 result found" : `${n} results found`;
  } }, ht = Vt;
  var nt = (n) => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia(n).matches, mt = () => nt(`(max-width: ${O.NARROW_VIEWPORT_WIDTH}px)`), Yt = () => {
    if (typeof navigator < "u" && typeof window < "u") {
      let n = nt("(max-height: 600px)"), t = nt("(pointer: coarse)");
      if (mt() || t && n) return h.FULLSCREEN;
    }
    return h.DROPDOWN;
  }, J = { countrySelectorMode: h.AUTO, allowedNumberTypes: [M.MOBILE, M.FIXED_LINE], allowNumberExtensions: false, allowPhonewords: false, containerClass: "", countryNameLocale: "en", countryNameOverrides: {}, countryOrder: null, countrySearch: true, customPlaceholder: null, dropdownAlwaysOpen: false, dropdownParent: null, excludeCountries: null, matchDropdownWidth: true, formatAsYouType: true, hiddenInputs: null, uiTranslations: {}, initialCountry: "", initialCountryLookup: null, loadUtils: null, numberDisplayFormat: g.INTERNATIONAL, onlyCountries: null, placeholderNumberPolicy: _.POLITE, placeholderNumberType: M.MOBILE, searchInputClass: "", separateDialCode: true, strictRejectAnimation: true, showFlags: true, strictMode: true }, Et = (n) => JSON.stringify(n), st = (n) => !!n && typeof n == "object" && !Array.isArray(n), Gt = (n) => typeof n == "function", Kt = (n) => {
    if (!n || typeof n != "object") return false;
    let t = n;
    return t.nodeType === 1 && typeof t.tagName == "string" && typeof t.appendChild == "function";
  }, pt = new Set(Object.values(_)), X = (n) => {
    console.warn(`[intl-tel-input] ${n}`);
  }, T = (n, t, e) => {
    X(`Option '${n}' must be ${t}; got ${Et(e)}. Ignoring.`);
  }, ft = (n, t) => {
    let e = "an array of iso2 country code strings";
    if (!Array.isArray(t)) return T(n, e, t), false;
    let i = [];
    for (let s of t) {
      if (typeof s != "string") return T(n, e, t), false;
      let o = s.toLowerCase();
      x(o) ? i.push(s) : X(`Invalid iso2 code in '${n}': '${s}'. Skipping.`);
    }
    return i;
  }, yt = (n) => {
    if (n === void 0) return {};
    if (!st(n)) {
      let e = `The second argument must be an options object; got ${Et(n)}. Using defaults.`;
      return X(e), {};
    }
    let t = {};
    for (let [e, i] of Object.entries(n)) {
      if (!Object.hasOwn(J, e)) {
        X(`Unknown option '${e}'. Ignoring.`);
        continue;
      }
      switch (e) {
        case "allowNumberExtensions":
        case "allowPhonewords":
        case "countrySearch":
        case "dropdownAlwaysOpen":
        case "matchDropdownWidth":
        case "formatAsYouType":
        case "showFlags":
        case "separateDialCode":
        case "strictMode":
        case "strictRejectAnimation":
          if (typeof i != "boolean") {
            T(e, "a boolean", i);
            break;
          }
          t[e] = i;
          break;
        case "countrySelectorMode":
          if (typeof i != "string" || !G.includes(i)) {
            T("countrySelectorMode", `one of ${G.map((s) => `"${s}"`).join(", ")}`, i);
            break;
          }
          t[e] = i;
          break;
        case "numberDisplayFormat":
          if (typeof i != "string" || i === g.RFC3966 || !(i === g.E164 || i === g.INTERNATIONAL || i === g.NATIONAL)) {
            T("numberDisplayFormat", 'one of "E164", "INTERNATIONAL", "NATIONAL"', i);
            break;
          }
          t[e] = i;
          break;
        case "placeholderNumberPolicy":
          if (typeof i != "string" || !pt.has(i)) {
            let s = Array.from(pt).join(", ");
            T("placeholderNumberPolicy", `one of ${s}`, i);
            break;
          }
          t[e] = i;
          break;
        case "containerClass":
        case "searchInputClass":
        case "countryNameLocale":
          if (typeof i != "string") {
            T(e, "a string", i);
            break;
          }
          t[e] = i;
          break;
        case "countryOrder": {
          if (i === null) t[e] = i;
          else {
            let s = ft(e, i);
            s !== false && (t[e] = s);
          }
          break;
        }
        case "customPlaceholder":
        case "hiddenInputs":
        case "initialCountryLookup":
        case "loadUtils":
          if (i !== null && !Gt(i)) {
            T(e, "a function or null", i);
            break;
          }
          t[e] = i;
          break;
        case "dropdownParent":
          if (i !== null && !Kt(i)) {
            T("dropdownParent", "an HTMLElement or null", i);
            break;
          }
          t[e] = i;
          break;
        case "excludeCountries":
        case "onlyCountries": {
          if (i === null) t[e] = i;
          else {
            let s = ft(e, i);
            s !== false && (t[e] = s);
          }
          break;
        }
        case "uiTranslations":
          if (i && !st(i)) {
            T("uiTranslations", "an object", i);
            break;
          }
          t[e] = i;
          break;
        case "countryNameOverrides":
          if (i && !st(i)) {
            T("countryNameOverrides", "an object", i);
            break;
          }
          t[e] = i;
          break;
        case "initialCountry": {
          if (typeof i != "string") {
            T("initialCountry", "a string", i);
            break;
          }
          let s = i.toLowerCase();
          if (s && !x(s)) {
            T("initialCountry", "a valid iso2 country code", i);
            break;
          }
          t[e] = i;
          break;
        }
        case "placeholderNumberType":
          if (typeof i != "string" || !U.includes(i)) {
            let s = U.join(", ");
            T("placeholderNumberType", `one of ${s}`, i);
            break;
          }
          t[e] = i;
          break;
        case "allowedNumberTypes":
          if (i !== null) {
            if (!Array.isArray(i)) {
              T("allowedNumberTypes", "an array of number types or null", i);
              break;
            }
            let s = true;
            for (let o of i) if (typeof o != "string" || !U.includes(o)) {
              let r = U.join(", ");
              T("allowedNumberTypes", `an array of valid number types (${r})`, o), s = false;
              break;
            }
            s && (t[e] = i);
          } else t[e] = null;
          break;
      }
    }
    return t;
  }, Ct = (n) => {
    n.initialCountry && (n.initialCountry = n.initialCountry.toLowerCase()), n.onlyCountries?.length && (n.onlyCountries = n.onlyCountries.map((t) => t.toLowerCase())), n.excludeCountries?.length && (n.excludeCountries = n.excludeCountries.map((t) => t.toLowerCase())), n.countryOrder && (n.countryOrder = n.countryOrder.map((t) => t.toLowerCase()));
  }, gt = (n) => {
    n.countrySelectorMode === h.AUTO && (n.countrySelectorMode = Yt()), n.dropdownAlwaysOpen && (n.countrySelectorMode = h.DROPDOWN), n.countrySelectorMode === h.FULLSCREEN ? n.matchDropdownWidth = false : mt() && (n.matchDropdownWidth = true), n.onlyCountries?.length === 1 && (n.initialCountry = n.onlyCountries[0]), n.separateDialCode && n.numberDisplayFormat === g.NATIONAL && (n.numberDisplayFormat = g.INTERNATIONAL), n.countrySelectorMode !== h.OFF && !n.showFlags && !n.separateDialCode && n.numberDisplayFormat === g.NATIONAL && (n.numberDisplayFormat = g.INTERNATIONAL), n.uiTranslations = { ...ht, ...n.uiTranslations };
  };
  var D = (n) => n.replace(/\D/g, ""), ot = (n = "") => n.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  var q = (n) => Object.keys(n).filter((t) => !!n[t]).join(" "), f = (n, t, e) => {
    let i = document.createElement(n);
    return t && Object.entries(t).forEach(([s, o]) => i.setAttribute(s, o)), e && e.appendChild(i), i;
  };
  var zt = "http://www.w3.org/2000/svg", $ = ([n, t, e]) => {
    let i = document.createElementNS(zt, n);
    if (t) for (let s in t) i.setAttribute(s, String(t[s]));
    if (e) for (let s of e) i.appendChild($(s));
    return i;
  }, It = () => $(["svg", { class: "iti__search-icon-svg", width: 14, height: 14, viewBox: "0 0 24 24", focusable: "false", [p.HIDDEN]: "true" }, [["circle", { cx: 11, cy: 11, r: 7 }], ["line", { x1: 21, y1: 21, x2: 16.65, y2: 16.65 }]]]), bt = (n) => {
    let t = `iti-${n}-clear-mask`;
    return $(["svg", { class: "iti__search-clear-svg", width: 12, height: 12, viewBox: "0 0 16 16", [p.HIDDEN]: "true", focusable: "false" }, [["mask", { id: t, maskUnits: "userSpaceOnUse" }, [["rect", { width: 16, height: 16, fill: "white" }], ["path", { d: "M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8", stroke: "black", "stroke-linecap": "round", class: "iti__search-clear-x" }]]], ["circle", { cx: 8, cy: 8, r: 8, class: "iti__search-clear-bg", mask: `url(#${t})` }]]]);
  }, Tt = () => $(["svg", { class: "iti__country-check-svg", width: 14, height: 14, viewBox: "0 0 16 16", fill: "currentColor", focusable: "false", [p.HIDDEN]: "true" }, [["path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" }]]]), rt = () => $(["svg", { width: 256, height: 256, viewBox: "0 0 512 512", class: "iti__globe-svg" }, [["path", { d: "M508 213a240 240 0 0 0-449-87l-2 5-2 5c-8 14-13 30-17 46a65 65 0 0 1 56 4c16-10 35-19 56-27l9-3c-6 23-10 48-10 74h-16l4 6c3 4 5 8 6 13h6c0 22 3 44 8 65l2 10-25-10-4 5 12 18 9 3 6 2 8 3 9 26 1 2 16-7h1l-5-13-1-2c24 6 49 9 75 10v26l11 10 7 7v-30l1-13c22 0 44-3 65-8l10-2-21 48-1 1a317 317 0 0 1-14 23l-21 5h-2c6 16 7 33 1 50a240 240 0 0 0 211-265m-401-56-11 6c19-44 54-79 98-98-11 20-21 44-29 69-21 6-40 15-58 23m154 182v4c-29-1-57-6-81-13-7-25-12-52-13-81h94zm0-109h-94c1-29 6-56 13-81 24-7 52-12 81-13zm0-112c-22 1-44 4-65 8l-10 2 12-30 9-17 1-2a332 332 0 0 1 13-23c13-4 26-6 40-7zm187 69 6 4c4 12 6 25 6 38v1h-68c-1-26-4-51-10-74l48 20 1 1 14 8zm-14-44 10 20c-20-11-43-21-68-29-8-25-18-49-29-69 37 16 67 44 87 78M279 49h1c13 1 27 3 39 7l14 23 1 2a343 343 0 0 1 12 26l2 5 6 16c-23-6-48-9-74-10h-1zm0 87h1c29 1 56 6 81 13 7 24 12 51 12 80v1h-94zm2 207h-2v-94h95c-1 29-6 56-13 81-24 7-51 12-80 13m86 60-20 10c11-20 21-43 29-68 25-8 48-18 68-29-16 37-43 67-77 87m87-115-7 5-16 9-2 1a337 337 0 0 1-47 21c6-24 9-49 10-75h68c0 13-2 27-6 39" }], ["path", { d: "m261 428-2-2-22-21a40 40 0 0 0-32-11h-1a37 37 0 0 0-18 8l-1 1-4 2-2 2-5 4c-9-3-36-31-47-44s-32-45-34-55l3-2a151 151 0 0 0 11-9v-1a39 39 0 0 0 5-48l-3-3-11-19-3-4-5-7h-1l-3-3-4-3-5-2a35 35 0 0 0-16-3h-5c-4 1-14 5-24 11l-4 2-4 3-4 2c-9 8-17 17-18 27a380 380 0 0 0 212 259h3c12 0 25-10 36-21l10-12 6-11a39 39 0 0 0-8-40" }]]]);
  var lt = (n) => ot(n).replace(/[^\p{L}]+/gu, " ").trim(), Lt = (n) => {
    let t = /* @__PURE__ */ new Map();
    for (let e of n) {
      let i = lt(e.name), s = i.split(" ").filter(Boolean), o = s.map((r) => r[0] || "").join("");
      t.set(e.iso2, { normalisedName: i, words: s, initials: o, dialCodePlus: `+${e.dialCode}` });
    }
    return t;
  }, At = (n, t, e) => {
    let i = ot(e), s = lt(e), o = i !== "" && s === "", r = [], l = [], a = [], d = [], E = [], y = [], C = [];
    for (let I of n) {
      let m = t.get(I.iso2);
      I.iso2 === i ? r.push(I) : !o && m.normalisedName.startsWith(s) ? l.push(I) : !o && m.normalisedName.includes(s) ? a.push(I) : i === I.dialCode || i === m.dialCodePlus ? d.push(I) : m.dialCodePlus.includes(i) ? E.push(I) : m.initials.includes(i) && y.push(I);
    }
    let N = s.split(" ").filter(Boolean);
    if (N.length > 1 && r.length === 0 && l.length === 0 && a.length === 0) {
      let I = /* @__PURE__ */ new Set([...d.map((m) => m.iso2), ...E.map((m) => m.iso2), ...y.map((m) => m.iso2)]);
      for (let m of n) {
        if (I.has(m.iso2)) continue;
        let L = t.get(m.iso2);
        N.some((w) => L.words.some((P) => P.startsWith(w))) && C.push(m);
      }
    }
    let A = (I, m) => I.priority - m.priority;
    return [...r, ...l, ...a, ...d.sort(A), ...E.sort(A), ...y, ...C];
  }, Nt = (n, t, e) => {
    let i = lt(e);
    for (let s of n) {
      let { normalisedName: o } = t.get(s.iso2);
      if (o.startsWith(i)) return s;
    }
    return null;
  };
  var F = class n {
    #t;
    static toAscii(t) {
      return t ? t.replace(/[٠-٩]/g, (e) => String.fromCharCode(48 + (e.charCodeAt(0) - 1632))).replace(/[۰-۹]/g, (e) => String.fromCharCode(48 + (e.charCodeAt(0) - 1776))) : "";
    }
    constructor(t) {
      t && this.#i(t);
    }
    #i(t) {
      /[٠-٩]/.test(t) ? this.#t = "arabic-indic" : /[۰-۹]/.test(t) ? this.#t = "persian" : this.#t = "ascii";
    }
    denormalise(t) {
      if (!this.#t || this.#t === "ascii") return t;
      let e = this.#t === "arabic-indic" ? 1632 : 1776;
      return t.replace(/[0-9]/g, (i) => String.fromCharCode(e + Number(i)));
    }
    normalise(t) {
      return t ? (this.#i(t), this.#t === "ascii" ? t : n.toAscii(t)) : "";
    }
    isAscii() {
      return !this.#t || this.#t === "ascii";
    }
  };
  var St = typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("anchor-name: --x"), W = class n {
    #t;
    #i;
    #A;
    #E = "";
    #b;
    #N;
    #S = null;
    #D;
    #m;
    #e;
    #u;
    #y;
    #o;
    #s;
    #f;
    #a;
    #T;
    #n;
    #c;
    #l;
    #d;
    #W;
    #r;
    #C = null;
    #h = null;
    #w = /* @__PURE__ */ new Map();
    #O = null;
    #H;
    telInputEl;
    hadInitialPlaceholder;
    constructor(t, e, i) {
      t.dataset[R.INSTANCE_ID] = i.toString(), this.telInputEl = t, this.#t = e, this.#i = i, this.hadInitialPlaceholder = !!t.getAttribute("placeholder"), this.#A = !!this.telInputEl.closest("[dir=rtl]"), this.#E = this.telInputEl.style.paddingLeft;
    }
    static validateInput(t) {
      let e = t?.tagName;
      if (!(!!t && typeof t == "object" && e === "INPUT" && typeof t.setAttribute == "function")) {
        let s = Object.prototype.toString.call(t);
        throw new TypeError(`The first argument must be an HTMLInputElement, not ${s}`);
      }
    }
    buildMarkup(t, e) {
      this.#b = t, this.#N = e, this.telInputEl.classList.add("iti__tel-input"), this.telInputEl.hasAttribute("type") || this.telInputEl.setAttribute("type", "tel"), this.telInputEl.hasAttribute("autocomplete") || this.telInputEl.setAttribute("autocomplete", "tel"), this.telInputEl.hasAttribute("inputmode") || this.telInputEl.setAttribute("inputmode", "tel");
      let i = this.#B();
      this.#j(i), i.appendChild(this.telInputEl), this.#tt(), this.#st(), this.#et(i), this.ensureDropdownWidthSet();
    }
    #B() {
      let { countrySelectorMode: t, showFlags: e, containerClass: i } = this.#t, s = q({ iti: true, "iti--input-container": true, "iti--has-country-selector": t !== h.OFF, "iti--show-flags": e, "iti--inline-country-selector": t !== h.FULLSCREEN, [i]: !!i }), o = f("div", { class: s });
      return this.#A && o.setAttribute("dir", "ltr"), this.telInputEl.before(o), o;
    }
    #j(t) {
      let { countrySelectorMode: e, separateDialCode: i, showFlags: s } = this.#t, o = e !== h.OFF;
      if (!o && !s && !i) return;
      this.#m = f("div", { class: `iti__country-container ${c.V_HIDE}` }, t), o ? (this.#e = f("button", { type: "button", class: "iti__selected-country", [p.EXPANDED]: "false", [p.LABEL]: this.#t.uiTranslations.noCountrySelected, [p.HASPOPUP]: "dialog", [p.CONTROLS]: `iti-${this.#i}__country-selector` }, this.#m), this.telInputEl.disabled && this.#e.setAttribute("disabled", "true")) : this.#e = f("div", { class: "iti__selected-country" }, this.#m);
      let r = f("div", { class: "iti__selected-country-primary" }, this.#e);
      this.#u = f("div", { class: c.FLAG }, r), o && (this.#o = f("div", { class: "iti__arrow", [p.HIDDEN]: "true" }, r)), i && (this.#y = f("div", { class: "iti__selected-dial-code" }, this.#e)), o && this.#Q();
    }
    ensureDropdownWidthSet() {
      let { matchDropdownWidth: t, countrySelectorMode: e } = this.#t;
      if (e === h.OFF || !t || this.#s.style.width) return;
      let i = this.telInputEl.offsetWidth;
      i > 0 && (this.#s.style.width = `${i}px`);
    }
    #Q() {
      let { matchDropdownWidth: t, countrySelectorMode: e, countrySearch: i, uiTranslations: s, containerClass: o } = this.#t, r = e === h.FULLSCREEN, l = this.#$(), a = t ? "" : "iti--flexible-dropdown-width";
      if (this.#s = f("div", { id: `iti-${this.#i}__country-selector`, class: `iti__country-selector ${c.HIDE} ${a}`, role: "dialog", [p.MODAL]: "true" }), this.#A && this.#s.setAttribute("dir", "rtl"), i && this.#Z(), this.#n = f("ul", { class: "iti__country-list", id: `iti-${this.#i}__country-listbox`, role: "listbox", [p.LABEL]: s.countryListAriaLabel }, this.#s), this.#it(), i && this.#Y(), r || (this.#D = this.#ot(), i && (this.#s.style.height = `${this.#D}px`)), l) {
        let d = q({ iti: true, "iti--detached-country-selector": true, "iti--fullscreen-popup": r, "iti--inline-country-selector": !r, [o]: !!o });
        this.#r = f("div", { class: d }), this.#r.appendChild(this.#s), r || this.#x();
      } else this.#m.appendChild(this.#s);
    }
    #$() {
      let { countrySelectorMode: t, dropdownParent: e } = this.#t;
      return t === h.FULLSCREEN ? document.body : t === h.DROPDOWN ? e : null;
    }
    #Z() {
      let { uiTranslations: t, searchInputClass: e } = this.#t, i = f("div", { class: "iti__search-input-wrapper" }, this.#s);
      this.#f = f("span", { class: "iti__search-icon", [p.HIDDEN]: "true" }, i), this.#f.appendChild(It()), this.#a = f("input", { id: `iti-${this.#i}__search-input`, type: "search", class: `iti__search-input ${e}`, placeholder: t.searchPlaceholder, role: "combobox", [p.EXPANDED]: "true", [p.LABEL]: t.searchPlaceholder, [p.CONTROLS]: `iti-${this.#i}__country-listbox`, [p.AUTOCOMPLETE]: "list", autocomplete: "off" }, i), this.#T = f("button", { type: "button", class: `iti__search-clear ${c.HIDE}`, [p.LABEL]: t.clearSearchAriaLabel, tabindex: "-1" }, i), this.#T.appendChild(bt(this.#i)), this.#W = f("span", { class: "iti__a11y-text" }, this.#s), this.#d = f("div", { class: `iti__no-results ${c.HIDE}`, [p.HIDDEN]: "true" }, this.#s), this.#d.textContent = t.searchEmptyState ?? null;
    }
    #tt() {
      this.#m && (this.#k(), this.#m.classList.remove(c.V_HIDE));
    }
    #et(t) {
      let { hiddenInputs: e } = this.#t;
      if (!e) return;
      let i = this.telInputEl.getAttribute("name") || "", s = e(i);
      if (s.phone) {
        let o = this.telInputEl.form?.querySelector(`input[name="${s.phone}"]`);
        o ? this.#c = o : (this.#c = f("input", { type: "hidden", name: s.phone }), t.appendChild(this.#c));
      }
      if (s.country) {
        let o = this.telInputEl.form?.querySelector(`input[name="${s.country}"]`);
        o ? this.#l = o : (this.#l = f("input", { type: "hidden", name: s.country }), t.appendChild(this.#l));
      }
    }
    #it() {
      let t = document.createDocumentFragment();
      for (let e = 0; e < this.#b.length; e++) {
        let i = this.#b[e], s = q({ [c.COUNTRY_ITEM]: true }), o = f("li", { id: `iti-${this.#i}__item-${i.iso2}`, class: s, tabindex: "-1", role: "option", [p.SELECTED]: "false" });
        o.dataset[R.DIAL_CODE] = i.dialCode, o.dataset[R.ISO2] = i.iso2, this.#w.set(i.iso2, o), this.#t.showFlags && f("div", { class: `${c.FLAG} iti__${i.iso2}` }, o);
        let r = f("span", { class: "iti__country-name" }, o);
        r.textContent = `${i.name} `;
        let l = f("span", { class: "iti__dial-code" }, r);
        this.#A && l.setAttribute("dir", "ltr"), l.textContent = `(+${i.dialCode})`, t.appendChild(o);
      }
      this.#n.appendChild(t);
    }
    #k() {
      if (this.#e) {
        let t = this.#t.separateDialCode ? O.FALLBACK_SELECTED_COUNTRY_WITH_DIAL_WIDTH : O.FALLBACK_SELECTED_COUNTRY_NO_DIAL_WIDTH, i = (this.#e.offsetWidth || this.#nt() || t) + O.INPUT_PADDING_EXTRA_LEFT;
        this.telInputEl.style.paddingLeft = `${i}px`;
      }
    }
    #st() {
      !this.#e || typeof ResizeObserver > "u" || (this.#H = new ResizeObserver(() => {
        this.#e?.offsetWidth && this.#k();
      }), this.#H.observe(this.#e));
    }
    static #V() {
      let t;
      try {
        t = window.top.document.body;
      } catch {
        t = document.body;
      }
      return t;
    }
    #nt() {
      if (!this.telInputEl.parentNode) return 0;
      let t = n.#V(), e = this.telInputEl.parentNode.cloneNode(false);
      e.style.visibility = "hidden", t.appendChild(e);
      let i = this.#m.cloneNode();
      e.appendChild(i);
      let s = this.#e.cloneNode(true);
      i.appendChild(s);
      let o = s.offsetWidth;
      return t.removeChild(e), o;
    }
    #ot() {
      let t = n.#V();
      this.#s.classList.remove(c.HIDE);
      let e = f("div", { class: "iti iti--inline-country-selector" });
      e.appendChild(this.#s), e.style.visibility = "hidden", t.appendChild(e);
      let i = this.#s.offsetHeight;
      return t.removeChild(e), e.style.visibility = "", this.#s.classList.add(c.HIDE), i > 0 ? i : O.FALLBACK_DROPDOWN_HEIGHT;
    }
    #Y() {
      let { uiTranslations: t } = this.#t, e = this.#n.childElementCount;
      this.#W.textContent = t.searchSummaryAria(e);
    }
    #M(t) {
      let e;
      if (t === "") e = this.#b;
      else {
        let i = F.toAscii(t);
        e = At(this.#b, this.#N, i);
      }
      this.#X(e);
    }
    prefillSearchWithPlus() {
      this.#a.value = "+", this.#a.focus(), this.#M("");
    }
    #U() {
      let t = this.#a.value.trim();
      this.#M(t), this.#a.value ? this.#T.classList.remove(c.HIDE) : this.#T.classList.add(c.HIDE);
    }
    #p() {
      this.#S && clearTimeout(this.#S), this.#S = setTimeout(() => {
        this.#U(), this.#S = null;
      }, it.SEARCH_DEBOUNCE_MS);
    }
    #v() {
      this.#a.value = "", this.#a.focus(), this.#U();
    }
    #P(t) {
      let e = this.#n, i = e.getBoundingClientRect(), s = t.getBoundingClientRect(), o = s.top - i.top + e.scrollTop;
      s.top < i.top ? e.scrollTop = o : s.bottom > i.bottom && (e.scrollTop = o - i.height + s.height);
    }
    #L(t, e = true) {
      if (this.#h?.classList.remove(c.HIGHLIGHT), t) {
        if (t.classList.add(c.HIGHLIGHT), this.#t.countrySearch) {
          let i = t.getAttribute("id") || "";
          this.#a.setAttribute(p.ACTIVE_DESCENDANT, i);
        }
        e && this.#P(t), this.#h = t;
      } else this.#h = null;
    }
    bindHiddenInputSubmitListener(t, e, i) {
      let s = this.telInputEl.form;
      !s || !this.#c && !this.#l || s.addEventListener("submit", () => {
        this.#c && (this.#c.value = e()), this.#l && (this.#l.value = i());
      }, { signal: t });
    }
    bindAllInitialCountrySelectorListeners(t, e, i) {
      let s = this.telInputEl.closest("label");
      s && s.addEventListener("click", (o) => {
        this.isCountrySelectorOpen() ? o.preventDefault() : this.telInputEl.focus();
      }, { signal: t }), this.#e.addEventListener("click", () => {
        !this.isCountrySelectorOpen() && !this.telInputEl.disabled && !this.telInputEl.readOnly && e();
      }, { signal: t }), this.#m.addEventListener("keydown", (o) => {
        let r = [b.ARROW_UP, b.ARROW_DOWN, b.SPACE, b.ENTER];
        !this.isCountrySelectorOpen() && r.includes(o.key) && (o.preventDefault(), o.stopPropagation(), e()), o.key === b.TAB && i();
      }, { signal: t });
    }
    openCountrySelector(t, e) {
      let { countrySearch: i, dropdownAlwaysOpen: s } = this.#t;
      if (this.#O = new AbortController(), this.ensureDropdownWidthSet(), this.#r) this.#J();
      else {
        let r = this.#I(), l = this.telInputEl.offsetHeight + O.DROPDOWN_MARGIN;
        r ? this.#s.style.top = `${l}px` : this.#s.style.bottom = `${l}px`;
      }
      this.#s.classList.remove(c.HIDE), this.#e.setAttribute(p.EXPANDED, "true");
      let o = this.#C ?? this.#n.firstElementChild;
      o && this.#L(o), i && !s && this.#a.focus(), this.#t.countrySelectorMode === h.FULLSCREEN && this.#r && window.visualViewport && window.visualViewport.addEventListener("resize", () => {
        this.#q(), this.#h && this.#P(this.#h);
      }, { signal: this.#O.signal }), this.#o.classList.add(c.ARROW_UP), this.#G(t, e);
    }
    #G(t, e) {
      let i = this.#O.signal;
      this.#rt(i), this.#g(i, t), this.#t.dropdownAlwaysOpen || this.#K(i, e), this.#F(i, t, e), this.#t.countrySearch && this.#lt(i), this.#t.countrySelectorMode === h.DROPDOWN && this.#t.dropdownParent && !St && document.addEventListener("scroll", e, { signal: i, capture: true, passive: true });
    }
    #rt(t) {
      this.#n.addEventListener("mouseover", (e) => {
        let i = e.target?.closest(`.${c.COUNTRY_ITEM}`);
        i && this.#L(i, false);
      }, { signal: t });
    }
    #g(t, e) {
      this.#n.addEventListener("click", (i) => {
        let s = i.target?.closest(`.${c.COUNTRY_ITEM}`);
        s && e(s);
      }, { signal: t });
    }
    #K(t, e) {
      setTimeout(() => {
        document.documentElement.addEventListener("click", (i) => {
          this.#s.contains(i.target) || e();
        }, { signal: t });
      }, 0);
    }
    #F(t, e, i) {
      let s = "", o = null, r = (l) => {
        [b.ARROW_UP, b.ARROW_DOWN, b.ENTER, b.ESC].includes(l.key) && (l.preventDefault(), l.stopPropagation(), l.key === b.ARROW_UP || l.key === b.ARROW_DOWN ? this.#z(l.key) : l.key === b.ENTER && !l.isComposing ? e(this.#h) : l.key === b.ESC && (i(), this.#e.focus())), !this.#t.countrySearch && v.HIDDEN_SEARCH_CHAR.test(l.key) && (l.stopPropagation(), o && clearTimeout(o), s += l.key.toLowerCase(), this.#R(s), o = setTimeout(() => {
          s = "";
        }, it.HIDDEN_SEARCH_RESET_MS));
      };
      this.#e?.addEventListener("keydown", r, { signal: t }), this.#s?.addEventListener("keydown", r, { signal: t });
    }
    #lt(t) {
      this.#a.addEventListener("input", () => this.#p(), { signal: t }), this.#T.addEventListener("click", () => this.#v(), { signal: t });
    }
    #R(t) {
      let e = Nt(this.#b, this.#N, t);
      if (e) {
        let i = this.#w.get(e.iso2);
        this.#L(i);
      }
    }
    #z(t) {
      let e = t === b.ARROW_UP ? this.#h?.previousElementSibling : this.#h?.nextElementSibling;
      !e && this.#n.childElementCount > 1 && (e = t === b.ARROW_UP ? this.#n.lastElementChild : this.#n.firstElementChild), e && this.#L(e);
    }
    #_(t) {
      if (this.#C && this.#C.dataset[R.ISO2] !== t && (this.#C.setAttribute(p.SELECTED, "false"), this.#C.querySelector(".iti__country-check")?.remove(), this.#C = null), t && !this.#C) {
        let e = this.#n.querySelector(`[data-iso2="${t}"]`);
        e && (e.setAttribute(p.SELECTED, "true"), f("span", { class: "iti__country-check", [p.HIDDEN]: "true" }, e).appendChild(Tt()), this.#C = e, this.#t.dropdownAlwaysOpen && this.#L(e));
      }
    }
    #X(t) {
      this.#n.replaceChildren();
      let e = true;
      for (let i of t) {
        let s = this.#w.get(i.iso2);
        s && (this.#n.appendChild(s), e && (this.#L(s, false), e = false));
      }
      e ? (this.#L(null), this.#d && this.#d.classList.remove(c.HIDE)) : this.#d && this.#d.classList.add(c.HIDE), this.#n.scrollTop = 0, this.#Y();
    }
    closeCountrySelector() {
      let { countrySearch: t } = this.#t;
      this.#O.abort(), this.#O = null, this.#s.classList.add(c.HIDE), this.#e.setAttribute(p.EXPANDED, "false"), t && (this.#a.removeAttribute(p.ACTIVE_DESCENDANT), this.#a.value = "", this.#U(), this.#h && (this.#h.classList.remove(c.HIGHLIGHT), this.#h = null)), this.#o.classList.remove(c.ARROW_UP), this.#r ? (this.#r.remove(), this.#r.style.top = "", this.#r.style.bottom = "", this.#r.style.paddingLeft = "", this.#r.style.paddingRight = "") : (this.#s.style.top = "", this.#s.style.bottom = "");
    }
    #I() {
      if (this.#t.dropdownAlwaysOpen) return true;
      let t = this.telInputEl.getBoundingClientRect(), e = t.top, i = window.innerHeight - t.bottom;
      return i >= this.#D || i >= e;
    }
    #J() {
      let t = this.#t.countrySelectorMode === h.FULLSCREEN, e = this.#$();
      if (t) {
        if (window.innerWidth >= O.NARROW_VIEWPORT_WIDTH) {
          let i = this.telInputEl.getBoundingClientRect();
          this.#r.style.paddingLeft = `${i.left}px`, this.#r.style.paddingRight = `${window.innerWidth - i.right}px`;
        }
      } else if (!St) {
        let i = this.telInputEl.getBoundingClientRect();
        this.#r.style.left = `${i.left}px`, this.#I() ? this.#r.style.top = `${i.bottom + O.DROPDOWN_MARGIN}px` : (this.#r.style.top = "unset", this.#r.style.bottom = `${window.innerHeight - i.top + O.DROPDOWN_MARGIN}px`);
      }
      e.appendChild(this.#r);
    }
    #x() {
      let t = `--iti-anchor-${this.#i}`, e = getComputedStyle(this.telInputEl).anchorName;
      this.telInputEl.style.anchorName = e && e !== "none" ? `${e}, ${t}` : t, this.#r.style.positionAnchor = t;
    }
    #q() {
      let t = window.visualViewport;
      if (!t || !this.#r) return;
      let e = window.innerHeight - t.height;
      this.#r.style.bottom = `${e}px`;
    }
    isCountrySelectorOpen() {
      return !this.#s.classList.contains(c.HIDE);
    }
    setLoading(t) {
      this.#u.classList.toggle(c.LOADING, t);
    }
    playStrictRejectAnimation() {
      if (!this.#t.strictRejectAnimation) return;
      let t = this.telInputEl.parentElement;
      t && (t.classList.remove(c.STRICT_REJECT_ANIMATION), t.offsetWidth, t.classList.add(c.STRICT_REJECT_ANIMATION), t.addEventListener("animationend", () => t.classList.remove(c.STRICT_REJECT_ANIMATION), { once: true }));
    }
    isLoading() {
      return this.#u.classList.contains(c.LOADING);
    }
    setDisabled(t) {
      this.telInputEl.disabled = t, this.#e && (t ? this.#e.setAttribute("disabled", "true") : this.#e.removeAttribute("disabled"));
    }
    setReadonly(t) {
      this.telInputEl.readOnly = t, this.#e && (t ? this.#e.setAttribute("disabled", "true") : this.#e.removeAttribute("disabled"));
    }
    setSelectedCountry(t) {
      let { countrySelectorMode: e, showFlags: i, separateDialCode: s, uiTranslations: o } = this.#t, r = t?.name, l = t?.dialCode, a = t?.iso2 ?? "";
      if (e !== h.OFF && this.#_(a), this.#e) {
        let d = a && i ? `${c.FLAG} iti__${a}` : `${c.FLAG} ${c.GLOBE}`, E, y, C = null;
        a ? (y = r, E = o.selectedCountryAriaLabel.replace("${countryName}", r).replace("${dialCode}", `+${l}`), i || (C = rt())) : (y = o.noCountrySelected, E = o.noCountrySelected, C = rt()), this.#u.className = d, this.#e.setAttribute("title", y), this.#e.setAttribute(p.LABEL, E), C ? this.#u.replaceChildren(C) : this.#u.replaceChildren();
      }
      if (s) {
        let d = l ? `+${l}` : "";
        this.#y.textContent = d, this.#k();
      }
    }
    destroy() {
      this.telInputEl.iti = void 0, delete this.telInputEl.dataset[R.INSTANCE_ID], this.#H?.disconnect(), this.telInputEl.style.paddingLeft = this.#E;
      let t = this.telInputEl.parentNode;
      t && (t.before(this.telInputEl), t.remove()), this.#w.clear();
    }
  };
  var Ot = (n) => {
    let { onlyCountries: t, excludeCountries: e } = n;
    return t?.length ? k.filter((i) => t.includes(i.iso2)) : e?.length ? k.filter((i) => !e.includes(i.iso2)) : [...k];
  }, vt = (n, t) => {
    let { countryNameLocale: e, countryNameOverrides: i } = t, s;
    try {
      typeof Intl < "u" && typeof Intl.DisplayNames == "function" ? s = new Intl.DisplayNames(e, { type: "region" }) : s = null;
    } catch (o) {
      console.error(o), s = null;
    }
    for (let o of n) o.name = i[o.iso2] || s?.of(o.iso2.toUpperCase()) || "";
  }, Rt = (n) => {
    let t = /* @__PURE__ */ new Set(), e = 0, i = {}, s = (r, l) => {
      if (!r || !l) return;
      l.length > e && (e = l.length), Object.hasOwn(i, l) || (i[l] = []);
      let a = i[l];
      a.includes(r) || a.push(r);
    }, o = [...n].sort((r, l) => r.priority - l.priority);
    for (let r of o) {
      t.has(r.dialCode) || t.add(r.dialCode);
      for (let l = 1; l < r.dialCode.length; l++) {
        let a = r.dialCode.substring(0, l);
        s(r.iso2, a);
      }
      if (s(r.iso2, r.dialCode), r.areaCodes) {
        let l = i[r.dialCode][0];
        for (let a of r.areaCodes) {
          for (let d = 1; d < a.length; d++) {
            let E = a.substring(0, d), y = r.dialCode + E;
            s(l, y), s(r.iso2, y);
          }
          s(r.iso2, r.dialCode + a);
        }
      }
    }
    return { dialCodes: t, dialCodeMaxLength: e, dialCodeToIso2Map: i };
  }, _t = (n, t) => {
    let { countryOrder: e } = t;
    n.sort((i, s) => {
      if (e) {
        let o = e.indexOf(i.iso2), r = e.indexOf(s.iso2), l = o > -1, a = r > -1;
        if (l || a) return l && a ? o - r : l ? -1 : 1;
      }
      return i.name.localeCompare(s.name);
    });
  };
  var Xt = /* @__PURE__ */ new Set(["800", "808", "870", "881", "882", "883", "888", "979"]), at = (n) => {
    let t = D(n).slice(0, 3);
    return n.startsWith("+") && Xt.has(t);
  };
  var ut = (n, t, e, i) => {
    if (!e || !t) return n;
    let s = `+${i.dialCode}`, o = n[s.length] === " " || n[s.length] === "-" ? s.length + 1 : s.length;
    return n.substring(o);
  }, Dt = (n, t, e, i, s) => {
    let o = e ? e.formatNumberAsYouType(n, i?.iso2) : n, r = i?.dialCode;
    return s && t.charAt(0) !== "+" && o.includes(`+${r}`) ? (o.split(`+${r}`)[1] || "").trim() : o;
  };
  var wt = (n, t, e, i) => {
    if (e === 0 && !i) return 0;
    let s = 0;
    for (let o = 0; o < t.length; o++) {
      if (/[+0-9]/.test(t[o]) && s++, s === n && !i) return o + 1;
      if (i && s === n + 1) return o;
    }
    return t.length;
  };
  var Jt = /* @__PURE__ */ new Set(["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"]), ct = (n) => {
    let t = D(n);
    if (t.startsWith(V.NANP) && t.length >= 4) {
      let e = t.substring(1, 4);
      return Jt.has(e);
    }
    return false;
  };
  var qt = 0, B = (n) => {
    if (!u.utils) throw new Error(`intlTelInput.utils is required for ${n}(). See: https://intl-tel-input.com/docs/utils`);
  }, Mt = () => {
    let n, t;
    return { promise: new Promise((i, s) => {
      n = i, t = s;
    }), resolve: n, reject: t };
  }, j = class n {
    id;
    promise;
    #t;
    #i;
    #A;
    #E;
    #b;
    #N;
    #S;
    #D;
    #m;
    #e = null;
    #u = null;
    #y;
    #o = true;
    #s;
    #f;
    #a = false;
    #T = null;
    #n;
    #c;
    constructor(t, e = {}) {
      this.id = qt++, W.validateInput(t);
      let i = yt(e);
      this.#i = { ...J, ...i }, Ct(this.#i), gt(this.#i), this.#t = new W(t, this.#i, this.id), this.#A = typeof navigator < "u" && /Android/i.test(navigator.userAgent), this.#f = new F(t.value), this.promise = this.#W(this.#i), this.#E = Ot(this.#i);
      let { dialCodes: s, dialCodeMaxLength: o, dialCodeToIso2Map: r } = Rt(this.#E);
      this.#S = s, this.#b = o, this.#N = r, this.#D = new Map(this.#E.map((l) => [l.iso2, l])), this.#r();
    }
    #l() {
      let t = this.#t.telInputEl.value.trim();
      return this.#f.normalise(t);
    }
    #d(t) {
      this.#t.telInputEl.value = this.#f.denormalise(t);
    }
    #W(t) {
      let { initialCountry: e, initialCountryLookup: i, loadUtils: s } = t, o = !e && !!i, r = !!s && !u.utils;
      return o && (this.#n = Mt()), r && (this.#c = Mt()), Promise.all([this.#n?.promise, this.#c?.promise]).then(() => {
      });
    }
    #r() {
      this.#s = new AbortController(), this.#C(), this.#t.buildMarkup(this.#E, this.#m), this.#h(), this.#w(), this.#O(), this.#i.dropdownAlwaysOpen && this.openCountrySelector();
    }
    #C() {
      vt(this.#E, this.#i), _t(this.#E, this.#i), this.#m = Lt(this.#E);
    }
    #h(t = false) {
      let e = this.#t.telInputEl.getAttribute("value"), i = this.#f.normalise(e ?? ""), s = this.#l(), r = i && i.startsWith("+") && (!s || !s.startsWith("+")) ? i : s, l = this.#_(r), a = ct(r), { initialCountry: d, initialCountryLookup: E } = this.#i, y = !d && !!E, C = y && u.autoCountry ? u.autoCountry : d, N = y && !t && !u.autoCountry, A = x(C);
      l ? a ? A ? this.#g(C) : N || this.#g(dt.ISO2) : (A && this.#g(C), this.#P(r)) : A ? this.#g(C) : N || this.#g(""), r && this.#v(r);
    }
    #w() {
      this.#Q(), this.#i.countrySelectorMode !== h.OFF && this.#t.bindAllInitialCountrySelectorListeners(this.#s.signal, () => this.openCountrySelector(), () => this.#R()), this.#t.bindHiddenInputSubmitListener(this.#s.signal, () => this.getNumber(), () => this.#e?.iso2 || "");
    }
    #O() {
      if (this.#c) {
        let { loadUtils: t } = this.#i, e = () => {
          u.attachUtils(t).catch(() => {
          });
        };
        u.documentReady() ? e() : window.addEventListener("load", e, { signal: this.#s.signal });
      }
      this.#n && (this.#e ? this.#n.resolve() : this.#H());
    }
    async #H() {
      if (u.autoCountry) {
        this.#q();
        return;
      }
      if (this.#t.setLoading(true), !u.startedLoadingAutoCountry && (u.startedLoadingAutoCountry = true, typeof this.#i.initialCountryLookup == "function")) {
        let t;
        try {
          let e = await Promise.race([this.#i.initialCountryLookup(), new Promise((s, o) => {
            t = setTimeout(() => o(new Error("intl-tel-input: initialCountryLookup timed out after 10s")), 1e4);
          })]), i = typeof e == "string" ? e.toLowerCase() : "";
          if (!x(i)) {
            u.startedLoadingAutoCountry = false, n.forEachInstance("handleAutoCountryFailure");
            return;
          }
          u.autoCountry = i, setTimeout(() => n.forEachInstance("handleAutoCountryLoaded"));
        } catch {
          u.startedLoadingAutoCountry = false, n.forEachInstance("handleAutoCountryFailure");
        } finally {
          t !== void 0 && clearTimeout(t);
        }
      }
    }
    #B() {
      this.openCountrySelector(), this.#t.prefillSearchWithPlus();
    }
    #j(t) {
      let e = this.#t.telInputEl.selectionStart || 0, i = t.substring(0, e - 1), s = t.substring(e);
      return this.#d(i + s), e - 1;
    }
    #Q() {
      this.#it(), this.#st(), this.#nt();
    }
    #$(t) {
      this.#j(t), this.#B();
    }
    #Z(t, e) {
      let i = this.#j(t);
      this.#t.telInputEl.setSelectionRange(i, i), this.#t.playStrictRejectAnimation(), this.#p(S.STRICT_REJECT, { source: "key", rejectedInput: e, reason: "invalid" });
    }
    #tt(t, e) {
      let i = this.#t.telInputEl.selectionStart || 0, o = t.substring(0, i).replace(v.NON_PLUS_NUMERIC_GLOBAL, "").length, r = this.#I(), l = Dt(r, t, u.utils, this.#e, this.#i.separateDialCode), a = wt(o, l, i, e);
      this.#d(l), this.#t.telInputEl.setSelectionRange(a, a);
    }
    #et(t) {
      if (t.startsWith("+") && this.#e && this.#_(t)) {
        let e = ut(t, true, true, this.#e);
        this.#d(e);
      }
    }
    #it() {
      this.#a = v.ALPHA_UNICODE.test(this.#l()), this.#t.telInputEl.addEventListener("input", this.#k, { signal: this.#s.signal });
    }
    #k = (t) => {
      let { strictMode: e, formatAsYouType: i, separateDialCode: s, countrySelectorMode: o, countrySearch: r } = this.#i, l = t?.detail;
      if (l?.isCountryChange) return;
      let a = this.#l(), d = t?.inputType === et.PASTE, E = e && d;
      if (this.#A && !d && t?.data === "+" && s && o !== h.OFF && r) {
        this.#$(a);
        return;
      }
      if (this.#A && !d && e && (t?.data === " " || t?.data === "-" || t?.data === ".")) {
        this.#Z(a, t.data);
        return;
      }
      if (E) {
        if (this.#Y()) return;
        a = this.#l();
      }
      this.#P(a) && this.#x(), !E && t?.data && v.NON_PLUS_NUMERIC.test(t.data) || d && a && !e ? this.#a = true : v.NON_PLUS_NUMERIC.test(a) || (this.#a = false), i && !this.#a && !l?.isSetNumber && this.#f.isAscii() && this.#tt(a, t?.inputType === et.DELETE_FORWARD), s && this.#et(a);
    };
    #st() {
      let { strictMode: t, separateDialCode: e } = this.#i;
      !t && !e || this.#t.telInputEl.addEventListener("keydown", this.#V, { signal: this.#s.signal });
    }
    #V = (t) => {
      let { strictMode: e, separateDialCode: i, countrySelectorMode: s, countrySearch: o } = this.#i;
      if (!t.key || t.key.length !== 1 || t.altKey || t.ctrlKey || t.metaKey) return;
      if (i && s !== h.OFF && o && t.key === "+") {
        t.preventDefault(), this.#B();
        return;
      }
      if (!e) return;
      let r = this.#l(), a = !r.startsWith("+") && this.#t.telInputEl.selectionStart === 0 && t.key === "+", d = this.#f.normalise(t.key), E = /^[0-9]$/.test(d), y = i ? E : a || E, C = this.#t.telInputEl, N = C.selectionStart, A = C.selectionEnd, I = r.slice(0, N ?? void 0), m = r.slice(A ?? void 0), L = I + d + m, w = this.#X(L), P = false;
      u.utils && this.#u && (P = u.utils.getCoreNumber(w, this.#e?.iso2).length > this.#u);
      let Q = this.#G(w) !== null;
      (!y || P && !Q && !a) && (this.#t.playStrictRejectAnimation(), this.#p(S.STRICT_REJECT, { source: "key", rejectedInput: t.key, reason: y ? "max-length" : "invalid" }), t.preventDefault());
    };
    #nt() {
      this.#i.strictMode && this.#t.telInputEl.addEventListener("paste", this.#ot, { signal: this.#s.signal });
    }
    #ot = (t) => {
      let e = this.#t.telInputEl, i = this.#l();
      this.#T = { pastedRaw: t.clipboardData?.getData("text") ?? "", value: i, selectionStart: e.selectionStart ?? i.length, selectionEnd: e.selectionEnd ?? i.length };
    };
    #Y() {
      let t = this.#t.telInputEl, e = this.#T;
      if (this.#T = null, !e) return false;
      let i = e.pastedRaw, s = e.value, o = e.selectionStart, r = e.selectionEnd, l = s.slice(0, o), a = s.slice(r), d = this.#e?.iso2, E = this.#f.normalise(i), y = o === 0 && r > 0, C = !s.startsWith("+") || y, N = E.replace(v.NON_PLUS_NUMERIC_GLOBAL, ""), A = N.startsWith("+"), I = N.replace(/\+/g, ""), m = A && C ? `+${I}` : I, L = l + m + a, w = m !== E ? "invalid" : null;
      if (L.length > 30) return this.#t.playStrictRejectAnimation(), this.#p(S.STRICT_REJECT, { source: "paste", rejectedInput: i, reason: "max-length" }), this.#M(e), true;
      if (L.length > 5 && u.utils) {
        let H = u.utils.getCoreNumber(L, d);
        for (; H.length === 0 && L.length > 0; ) L = L.slice(0, -1), H = u.utils.getCoreNumber(L, d);
        if (!H) return this.#t.playStrictRejectAnimation(), this.#p(S.STRICT_REJECT, { source: "paste", rejectedInput: i, reason: "max-length" }), this.#M(e), true;
        if (this.#u && H.length > this.#u) if (r === s.length) {
          let Q = H.length - this.#u;
          L = L.slice(0, L.length - Q), w = "max-length";
        } else return this.#t.playStrictRejectAnimation(), this.#p(S.STRICT_REJECT, { source: "paste", rejectedInput: i, reason: "max-length" }), this.#M(e), true;
      }
      this.#d(L);
      let P = o + m.length;
      return t.setSelectionRange(P, P), w && (E.length > 0 && m.length === 0 && this.#t.playStrictRejectAnimation(), this.#p(S.STRICT_REJECT, { source: "paste", rejectedInput: i, reason: w })), false;
    }
    #M(t) {
      this.#d(t.value), this.#t.telInputEl.setSelectionRange(t.selectionStart, t.selectionEnd);
    }
    #U(t) {
      let e = Number(this.#t.telInputEl.getAttribute("maxlength"));
      return e && t.length > e ? t.substring(0, e) : t;
    }
    #p(t, e = {}) {
      let i = new CustomEvent(t, { bubbles: true, cancelable: true, detail: e });
      this.#t.telInputEl.dispatchEvent(i);
    }
    openCountrySelector() {
      this.#t.isCountrySelectorOpen() || (this.#t.openCountrySelector((t) => this.#lt(t), () => this.#R()), this.#p(S.OPEN_COUNTRY_SELECTOR));
    }
    #v(t) {
      let { numberDisplayFormat: e, separateDialCode: i } = this.#i, s = t;
      if (u.utils && this.#e) {
        let o = at(t), r = !s.startsWith("+") && !i, l = e === g.NATIONAL && !o || r, a;
        l ? a = g.NATIONAL : e === g.E164 && !o ? a = g.E164 : a = g.INTERNATIONAL, s = u.utils.formatNumber(s, this.#e?.iso2, a);
      }
      s = this.#J(s), this.#d(s);
    }
    #P(t) {
      let e = this.#G(t);
      return e !== null ? this.#g(e) : false;
    }
    #L(t) {
      let e = this.#e?.dialCode, i = this.#e?.nationalPrefix;
      if (t.startsWith("+") || !e) return t;
      let r = i && t.startsWith(i) && !this.#i.separateDialCode ? t.substring(1) : t;
      return `+${e}${r}`;
    }
    #G(t) {
      let e = t.indexOf("+"), i = e > 0 ? t.substring(e) : t, s = this.#e?.iso2;
      i = this.#L(i);
      let o = this.#_(i, true), r = D(i);
      if (o) {
        let l = D(o), a = this.#N[l];
        return a.length === 1 ? a[0] === s ? null : a[0] : this.#rt(a, l, r);
      } else if (i.startsWith("+") && r.length) {
        let l = this.#e?.dialCode || "";
        return l && l.startsWith(r) ? null : "";
      } else if ((!i || i === "+") && !s && this.#y) return this.#y;
      return null;
    }
    #rt(t, e, i) {
      let s = this.#e?.iso2, o = this.#e?.dialCode;
      if (!s && this.#y && t.includes(this.#y)) return this.#y;
      if (o === V.NANP && ct(i)) return null;
      let l = this.#e?.areaCodes, a = this.#e?.priority;
      if (l) {
        let N = l.map((A) => `${o}${A}`);
        for (let A of N) if (i.startsWith(A)) return null;
      }
      let E = l && !(a === 0) && i.length > e.length, y = s && t.includes(s) && !E, C = s === t[0];
      return !y && !C ? t[0] : null;
    }
    #g(t) {
      let e = this.#e?.iso2 || "";
      return this.#e = t ? this.#D.get(t) : null, this.#e && (this.#y = this.#e.iso2), this.#t.setSelectedCountry(this.#e), this.#F(), this.#K(), e !== t;
    }
    #K() {
      let { strictMode: t, placeholderNumberType: e, allowedNumberTypes: i } = this.#i;
      if (!t || !u.utils) return;
      let s = this.#e?.iso2;
      if (!s) {
        this.#u = null;
        return;
      }
      let o = u.utils.getExampleNumber(s, e, g.E164), r = o;
      for (; u.utils.isValidNumber(o, s, i); ) r = o, o += "0";
      let l = u.utils.getCoreNumber(r, s);
      this.#u = l.length, s === "by" && (this.#u = l.length + 1);
    }
    #F() {
      let { placeholderNumberPolicy: t, placeholderNumberType: e, numberDisplayFormat: i, customPlaceholder: s } = this.#i, o = t === _.AGGRESSIVE || !this.#t.hadInitialPlaceholder && t === _.POLITE;
      if (!u.utils || !o) return;
      let r = this.#e ? u.utils.getExampleNumber(this.#e.iso2, e, i) : "";
      r = this.#J(r), typeof s == "function" && (r = s(r, this.#e)), this.#t.telInputEl.setAttribute("placeholder", r);
    }
    #lt(t) {
      if (!t) return;
      let e = t.dataset[R.ISO2], i = this.#g(e);
      this.#R();
      let s = t.dataset[R.DIAL_CODE];
      this.#z(s);
      let o = this.#l();
      this.#v(o), this.#t.telInputEl.focus(), i && (this.#x(), this.#p(S.INPUT, { isCountryChange: true }));
    }
    closeCountrySelector() {
      this.#R();
    }
    #R(t) {
      !this.#t.isCountrySelectorOpen() || this.#i.dropdownAlwaysOpen && !t || (this.#t.closeCountrySelector(), this.#p(S.CLOSE_COUNTRY_SELECTOR));
    }
    #z(t) {
      let e = this.#l();
      if (!e.startsWith("+")) return;
      let i = `+${t}`, s = this.#_(e), o;
      s ? o = e.replace(s, i) : o = i, this.#d(o);
    }
    #_(t, e) {
      if (!t.startsWith("+")) return "";
      let i = "", s = "", o = false;
      for (let r = 0; r < t.length; r++) {
        let l = t.charAt(r);
        if (!/[0-9]/.test(l)) continue;
        if (s += l, !!!this.#N[s]) break;
        if (this.#S.has(s)) {
          if (i = t.substring(0, r + 1), o = true, !e) break;
        } else e && o && (i = t.substring(0, r + 1));
        if (s.length === this.#b) break;
      }
      return i;
    }
    #X(t) {
      let e = this.#e?.dialCode, i = D(t);
      return (this.#i.separateDialCode && !t.startsWith("+") && e && i ? `+${e}` : "") + t;
    }
    #I() {
      let t = this.#l();
      return this.#X(t);
    }
    #J(t) {
      let e = !!this.#_(t), i = ut(t, e, this.#i.separateDialCode, this.#e);
      return this.#U(i);
    }
    #x() {
      this.#p(S.COUNTRY_CHANGE, this.#e ?? null);
    }
    #q() {
      if (!this.#n || !u.autoCountry) return;
      if (!this.#o) {
        this.#n.resolve();
        return;
      }
      let t = document.activeElement === this.#t.telInputEl, e = !!this.#l();
      this.#t.isLoading() && !(t && e) ? this.setSelectedCountry(u.autoCountry) : this.#y = u.autoCountry, this.#t.setLoading(false), this.#n.resolve();
    }
    #ut() {
      if (!this.#o) {
        this.#n?.reject();
        return;
      }
      this.#h(true), this.#t.setLoading(false), this.#n?.reject();
    }
    #ct() {
      if (!this.#o) {
        this.#c?.resolve();
        return;
      }
      if (!u.utils) {
        this.#c?.resolve();
        return;
      }
      let t = this.#l(), e = document.activeElement === this.#t.telInputEl;
      t && !e && this.#v(t), this.#e && (this.#F(), this.#K()), this.#c?.resolve();
    }
    #dt(t) {
      if (!this.#o) {
        this.#c?.reject(t);
        return;
      }
      this.#c?.reject(t);
    }
    destroy() {
      this.#o && (this.#o = false, this.#i.countrySelectorMode !== h.OFF && this.#R(true), this.#s.abort(), this.#t.destroy(), u.instances.delete(String(this.id)));
    }
    isActive() {
      return this.#o;
    }
    getExtension() {
      return this.#o ? (B("getExtension"), u.utils.getExtension(this.#I(), this.#e?.iso2)) : "";
    }
    getNumber(t) {
      if (!this.#o) return "";
      B("getNumber");
      let e = this.#e?.iso2, i = this.#I(), s = u.utils.formatNumber(i, e, t);
      return this.#f.denormalise(s);
    }
    getNumberType() {
      return this.#o ? (B("getNumberType"), u.utils.getNumberType(this.#I(), this.#e?.iso2)) : null;
    }
    getSelectedCountry() {
      return this.#e ?? null;
    }
    getValidationError() {
      if (!this.#o) return null;
      B("getValidationError");
      let t = this.#e?.iso2;
      return u.utils.getValidationError(this.#I(), t);
    }
    isValidNumber() {
      if (!this.#o) return null;
      B("isValidNumber");
      let t = this.#e?.dialCode, e = this.#e?.iso2, i = this.#I(), s = u.utils.getCoreNumber(i, e);
      if (s) {
        if (t === Y.DIAL_CODE && s[0] === Y.MOBILE_PREFIX && s.length !== Y.MOBILE_CORE_LENGTH) return false;
        if (!v.ALPHA_UNICODE.test(i) && t) {
          let r = i.startsWith("+") ? i.slice(1 + t.length) : i, l = D(r).length;
          if (s.length > l) return false;
        }
      }
      return this.#at("possible");
    }
    isValidNumberPrecise() {
      return this.#o ? (B("isValidNumberPrecise"), this.#at("precise")) : null;
    }
    #at(t) {
      let { allowNumberExtensions: e, allowPhonewords: i, allowedNumberTypes: s } = this.#i, o = this.#e?.iso2, r = this.#I();
      return !this.#e && !at(r) || !(t === "precise" ? u.utils.isValidNumberPrecise : u.utils.isValidNumber)(r, o, s) ? false : v.ALPHA_UNICODE.test(r) ? !!u.utils.getExtension(r, o) ? e : i : true;
    }
    setSelectedCountry(t) {
      if (!this.#o) return;
      let e = t?.toLowerCase();
      if (!x(e)) throw new Error(`Invalid iso2 code: '${e}'`);
      let i = this.#e?.iso2;
      if (!(t && e !== i || !t && i)) return;
      this.#g(e), this.#z(this.#e?.dialCode || "");
      let o = this.#l();
      this.#v(o), this.#x(), this.#p(S.INPUT, { isCountryChange: true });
    }
    setNumber(t) {
      if (!this.#o) return;
      let e = this.#f.normalise(t), i = this.#P(e);
      this.#v(e), i && this.#x(), this.#p(S.INPUT, { isSetNumber: true });
    }
    setPlaceholderNumberType(t) {
      this.#o && (this.#i.placeholderNumberType = t, this.#F());
    }
    setDisabled(t) {
      this.#o && this.#t.setDisabled(t);
    }
    setReadonly(t) {
      this.#o && this.#t.setReadonly(t);
    }
    static forEachInstance(t, ...e) {
      let i = [...u.instances.values()], s = e[0];
      i.forEach((o) => {
        if (o instanceof n) switch (t) {
          case "handleUtilsLoaded":
            o.#ct();
            break;
          case "handleUtilsFailure":
            o.#dt(s);
            break;
          case "handleAutoCountryLoaded":
            o.#q();
            break;
          case "handleAutoCountryFailure":
            o.#ut();
            break;
        }
      });
    }
  }, Qt = async (n) => {
    if (u.utils || u.startedLoadingUtils) return null;
    if (typeof n != "function") throw new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utils module, not ${typeof n}`);
    u.startedLoadingUtils = true;
    try {
      let e = (await n())?.default;
      if (!e || typeof e != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
      return u.utils = e, j.forEachInstance("handleUtilsLoaded"), true;
    } catch (t) {
      throw j.forEachInstance("handleUtilsFailure", t), t;
    }
  }, u = Object.assign((n, t) => {
    let e = new j(n, t);
    return u.instances.set(String(e.id), e), n.iti = e, e;
  }, { defaults: J, documentReady: () => document.readyState === "complete", getAllCountries: () => k, getInstance: (n) => {
    let t = n.dataset[R.INSTANCE_ID];
    return t ? u.instances.get(t) ?? null : null;
  }, instances: /* @__PURE__ */ new Map(), attachUtils: Qt, startedLoadingUtils: false, startedLoadingAutoCountry: false, version: "29.0.1", NUMBER_FORMAT: g, NUMBER_TYPE: M, VALIDATION_ERROR: z, PLACEHOLDER_POLICY: _, COUNTRY_SELECTOR_MODE: h }), Zt = u;
  return Ft(te);
})();
var intlTelInput = _factory.default;
/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
})(this, function() {
  "use strict";
  const t = /* @__PURE__ */ new Map(), e = { set(e2, i2, n2) {
    t.has(e2) || t.set(e2, /* @__PURE__ */ new Map());
    const s2 = t.get(e2);
    s2.has(i2) || 0 === s2.size ? s2.set(i2, n2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s2.keys())[0]}.`);
  }, get: (e2, i2) => t.has(e2) && t.get(e2).get(i2) || null, remove(e2, i2) {
    if (!t.has(e2)) return;
    const n2 = t.get(e2);
    n2.delete(i2), 0 === n2.size && t.delete(e2);
  } }, i = "transitionend", n = (t2) => (t2 && window.CSS && window.CSS.escape && (t2 = t2.replace(/#([^\s"#']+)/g, (t3, e2) => `#${CSS.escape(e2)}`)), t2), s = (t2) => null == t2 ? `${t2}` : Object.prototype.toString.call(t2).match(/\s([a-z]+)/i)[1].toLowerCase(), o = (t2) => {
    t2.dispatchEvent(new Event(i));
  }, r = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), a = (t2) => r(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(n(t2)) : null, l = (t2) => {
    if (!r(t2) || 0 === t2.getClientRects().length) return false;
    const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
    if (!i2) return e2;
    if (i2 !== t2) {
      const e3 = t2.closest("summary");
      if (e3 && e3.parentNode !== i2) return false;
      if (null === e3) return false;
    }
    return e2;
  }, c = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), h = (t2) => {
    if (!document.documentElement.attachShadow) return null;
    if ("function" == typeof t2.getRootNode) {
      const e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? h(t2.parentNode) : null;
  }, d = () => {
  }, u = (t2) => {
    t2.offsetHeight;
  }, f = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, p = [], m = () => "rtl" === document.documentElement.dir, g = (t2) => {
    var e2;
    e2 = () => {
      const e3 = f();
      if (e3) {
        const i2 = t2.NAME, n2 = e3.fn[i2];
        e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
      }
    }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", () => {
      for (const t3 of p) t3();
    }), p.push(e2)) : e2();
  }, _ = (t2, e2 = [], i2 = t2) => "function" == typeof t2 ? t2.call(...e2) : i2, b = (t2, e2, n2 = true) => {
    if (!n2) return void _(t2);
    const s2 = ((t3) => {
      if (!t3) return 0;
      let { transitionDuration: e3, transitionDelay: i2 } = window.getComputedStyle(t3);
      const n3 = Number.parseFloat(e3), s3 = Number.parseFloat(i2);
      return n3 || s3 ? (e3 = e3.split(",")[0], i2 = i2.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i2))) : 0;
    })(e2) + 5;
    let r2 = false;
    const a2 = ({ target: n3 }) => {
      n3 === e2 && (r2 = true, e2.removeEventListener(i, a2), _(t2));
    };
    e2.addEventListener(i, a2), setTimeout(() => {
      r2 || o(e2);
    }, s2);
  }, v = (t2, e2, i2, n2) => {
    const s2 = t2.length;
    let o2 = t2.indexOf(e2);
    return -1 === o2 ? !i2 && n2 ? t2[s2 - 1] : t2[0] : (o2 += i2 ? 1 : -1, n2 && (o2 = (o2 + s2) % s2), t2[Math.max(0, Math.min(o2, s2 - 1))]);
  }, y = /[^.]*(?=\..*)\.|.*/, w = /\..*/, A = /::\d+$/, E = {};
  let T = 1;
  const C = { mouseenter: "mouseover", mouseleave: "mouseout" }, O = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function x(t2, e2) {
    return e2 && `${e2}::${T++}` || t2.uidEvent || T++;
  }
  function k(t2) {
    const e2 = x(t2);
    return t2.uidEvent = e2, E[e2] = E[e2] || {}, E[e2];
  }
  function L(t2, e2, i2 = null) {
    return Object.values(t2).find((t3) => t3.callable === e2 && t3.delegationSelector === i2);
  }
  function S(t2, e2, i2) {
    const n2 = "string" == typeof e2, s2 = n2 ? i2 : e2 || i2;
    let o2 = N(t2);
    return O.has(o2) || (o2 = t2), [n2, s2, o2];
  }
  function D(t2, e2, i2, n2, s2) {
    if ("string" != typeof e2 || !t2) return;
    let [o2, r2, a2] = S(e2, i2, n2);
    if (e2 in C) {
      const t3 = (t4) => function(e3) {
        if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget)) return t4.call(this, e3);
      };
      r2 = t3(r2);
    }
    const l2 = k(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = L(c2, r2, o2 ? i2 : null);
    if (h2) return void (h2.oneOff = h2.oneOff && s2);
    const d2 = x(r2, e2.replace(y, "")), u2 = o2 ? /* @__PURE__ */ (function(t3, e3, i3) {
      return function n3(s3) {
        const o3 = t3.querySelectorAll(e3);
        for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode) for (const a3 of o3) if (a3 === r3) return j(s3, { delegateTarget: r3 }), n3.oneOff && P.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
      };
    })(t2, i2, r2) : /* @__PURE__ */ (function(t3, e3) {
      return function i3(n3) {
        return j(n3, { delegateTarget: t3 }), i3.oneOff && P.off(t3, n3.type, e3), e3.apply(t3, [n3]);
      };
    })(t2, r2);
    u2.delegationSelector = o2 ? i2 : null, u2.callable = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
  }
  function $(t2, e2, i2, n2, s2) {
    const o2 = L(e2[i2], n2, s2);
    o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
  }
  function I(t2, e2, i2, n2) {
    const s2 = e2[i2] || {};
    for (const [o2, r2] of Object.entries(s2)) o2.includes(n2) && $(t2, e2, i2, r2.callable, r2.delegationSelector);
  }
  function N(t2) {
    return t2 = t2.replace(w, ""), C[t2] || t2;
  }
  const P = { on(t2, e2, i2, n2) {
    D(t2, e2, i2, n2, false);
  }, one(t2, e2, i2, n2) {
    D(t2, e2, i2, n2, true);
  }, off(t2, e2, i2, n2) {
    if ("string" != typeof e2 || !t2) return;
    const [s2, o2, r2] = S(e2, i2, n2), a2 = r2 !== e2, l2 = k(t2), c2 = l2[r2] || {}, h2 = e2.startsWith(".");
    if (void 0 === o2) {
      if (h2) for (const i3 of Object.keys(l2)) I(t2, l2, i3, e2.slice(1));
      for (const [i3, n3] of Object.entries(c2)) {
        const s3 = i3.replace(A, "");
        a2 && !e2.includes(s3) || $(t2, l2, r2, n3.callable, n3.delegationSelector);
      }
    } else {
      if (!Object.keys(c2).length) return;
      $(t2, l2, r2, o2, s2 ? i2 : null);
    }
  }, trigger(t2, e2, i2) {
    if ("string" != typeof e2 || !t2) return null;
    const n2 = f();
    let s2 = null, o2 = true, r2 = true, a2 = false;
    e2 !== N(e2) && n2 && (s2 = n2.Event(e2, i2), n2(t2).trigger(s2), o2 = !s2.isPropagationStopped(), r2 = !s2.isImmediatePropagationStopped(), a2 = s2.isDefaultPrevented());
    const l2 = j(new Event(e2, { bubbles: o2, cancelable: true }), i2);
    return a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && s2 && s2.preventDefault(), l2;
  } };
  function j(t2, e2 = {}) {
    for (const [i2, n2] of Object.entries(e2)) try {
      t2[i2] = n2;
    } catch (e3) {
      Object.defineProperty(t2, i2, { configurable: true, get: () => n2 });
    }
    return t2;
  }
  function M(t2) {
    if ("true" === t2) return true;
    if ("false" === t2) return false;
    if (t2 === Number(t2).toString()) return Number(t2);
    if ("" === t2 || "null" === t2) return null;
    if ("string" != typeof t2) return t2;
    try {
      return JSON.parse(decodeURIComponent(t2));
    } catch (e2) {
      return t2;
    }
  }
  function F(t2) {
    return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
  }
  const H = { setDataAttribute(t2, e2, i2) {
    t2.setAttribute(`data-bs-${F(e2)}`, i2);
  }, removeDataAttribute(t2, e2) {
    t2.removeAttribute(`data-bs-${F(e2)}`);
  }, getDataAttributes(t2) {
    if (!t2) return {};
    const e2 = {}, i2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
    for (const n2 of i2) {
      let i3 = n2.replace(/^bs/, "");
      i3 = i3.charAt(0).toLowerCase() + i3.slice(1), e2[i3] = M(t2.dataset[n2]);
    }
    return e2;
  }, getDataAttribute: (t2, e2) => M(t2.getAttribute(`data-bs-${F(e2)}`)) };
  class W {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2;
    }
    _mergeConfigObj(t2, e2) {
      const i2 = r(e2) ? H.getDataAttribute(e2, "config") : {};
      return { ...this.constructor.Default, ..."object" == typeof i2 ? i2 : {}, ...r(e2) ? H.getDataAttributes(e2) : {}, ..."object" == typeof t2 ? t2 : {} };
    }
    _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
      for (const [i2, n2] of Object.entries(e2)) {
        const e3 = t2[i2], o2 = r(e3) ? "element" : s(e3);
        if (!new RegExp(n2).test(o2)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i2}" provided type "${o2}" but expected type "${n2}".`);
      }
    }
  }
  class B extends W {
    constructor(t2, i2) {
      super(), (t2 = a(t2)) && (this._element = t2, this._config = this._getConfig(i2), e.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      e.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
      for (const t2 of Object.getOwnPropertyNames(this)) this[t2] = null;
    }
    _queueCallback(t2, e2, i2 = true) {
      b(t2, e2, i2);
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    static getInstance(t2) {
      return e.get(a(t2), this.DATA_KEY);
    }
    static getOrCreateInstance(t2, e2 = {}) {
      return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
    }
    static get VERSION() {
      return "5.3.8";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t2) {
      return `${t2}${this.EVENT_KEY}`;
    }
  }
  const z = (t2) => {
    let e2 = t2.getAttribute("data-bs-target");
    if (!e2 || "#" === e2) {
      let i2 = t2.getAttribute("href");
      if (!i2 || !i2.includes("#") && !i2.startsWith(".")) return null;
      i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
    }
    return e2 ? e2.split(",").map((t3) => n(t3)).join(",") : null;
  }, R = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
    const i2 = [];
    let n2 = t2.parentNode.closest(e2);
    for (; n2; ) i2.push(n2), n2 = n2.parentNode.closest(e2);
    return i2;
  }, prev(t2, e2) {
    let i2 = t2.previousElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.previousElementSibling;
    }
    return [];
  }, next(t2, e2) {
    let i2 = t2.nextElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.nextElementSibling;
    }
    return [];
  }, focusableChildren(t2) {
    const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
    return this.find(e2, t2).filter((t3) => !c(t3) && l(t3));
  }, getSelectorFromElement(t2) {
    const e2 = z(t2);
    return e2 && R.findOne(e2) ? e2 : null;
  }, getElementFromSelector(t2) {
    const e2 = z(t2);
    return e2 ? R.findOne(e2) : null;
  }, getMultipleElementsFromSelector(t2) {
    const e2 = z(t2);
    return e2 ? R.find(e2) : [];
  } }, q = (t2, e2 = "hide") => {
    const i2 = `click.dismiss${t2.EVENT_KEY}`, n2 = t2.NAME;
    P.on(document, i2, `[data-bs-dismiss="${n2}"]`, function(i3) {
      if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), c(this)) return;
      const s2 = R.getElementFromSelector(this) || this.closest(`.${n2}`);
      t2.getOrCreateInstance(s2)[e2]();
    });
  }, V = ".bs.alert", K = `close${V}`, Q = `closed${V}`;
  class X extends B {
    static get NAME() {
      return "alert";
    }
    close() {
      if (P.trigger(this._element, K).defaultPrevented) return;
      this._element.classList.remove("show");
      const t2 = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t2);
    }
    _destroyElement() {
      this._element.remove(), P.trigger(this._element, Q), this.dispose();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = X.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  q(X, "close"), g(X);
  const Y = '[data-bs-toggle="button"]';
  class U extends B {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = U.getOrCreateInstance(this);
        "toggle" === t2 && e2[t2]();
      });
    }
  }
  P.on(document, "click.bs.button.data-api", Y, (t2) => {
    t2.preventDefault();
    const e2 = t2.target.closest(Y);
    U.getOrCreateInstance(e2).toggle();
  }), g(U);
  const G = ".bs.swipe", J = `touchstart${G}`, Z = `touchmove${G}`, tt = `touchend${G}`, et = `pointerdown${G}`, it = `pointerup${G}`, nt = { endCallback: null, leftCallback: null, rightCallback: null }, st = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
  class ot extends W {
    constructor(t2, e2) {
      super(), this._element = t2, t2 && ot.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
    }
    static get Default() {
      return nt;
    }
    static get DefaultType() {
      return st;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      P.off(this._element, G);
    }
    _start(t2) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
    }
    _end(t2) {
      this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), _(this._config.endCallback);
    }
    _move(t2) {
      this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t2 = Math.abs(this._deltaX);
      if (t2 <= 40) return;
      const e2 = t2 / this._deltaX;
      this._deltaX = 0, e2 && _(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents ? (P.on(this._element, et, (t2) => this._start(t2)), P.on(this._element, it, (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (P.on(this._element, J, (t2) => this._start(t2)), P.on(this._element, Z, (t2) => this._move(t2)), P.on(this._element, tt, (t2) => this._end(t2)));
    }
    _eventIsPointerPenTouch(t2) {
      return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const rt = ".bs.carousel", at = ".data-api", lt = "ArrowLeft", ct = "ArrowRight", ht = "next", dt = "prev", ut = "left", ft = "right", pt = `slide${rt}`, mt = `slid${rt}`, gt = `keydown${rt}`, _t = `mouseenter${rt}`, bt = `mouseleave${rt}`, vt = `dragstart${rt}`, yt = `load${rt}${at}`, wt = `click${rt}${at}`, At = "carousel", Et = "active", Tt = ".active", Ct = ".carousel-item", Ot = Tt + Ct, xt = { [lt]: ft, [ct]: ut }, kt = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, Lt = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
  class St extends B {
    constructor(t2, e2) {
      super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = R.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === At && this.cycle();
    }
    static get Default() {
      return kt;
    }
    static get DefaultType() {
      return Lt;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(ht);
    }
    nextWhenVisible() {
      !document.hidden && l(this._element) && this.next();
    }
    prev() {
      this._slide(dt);
    }
    pause() {
      this._isSliding && o(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? P.one(this._element, mt, () => this.cycle()) : this.cycle());
    }
    to(t2) {
      const e2 = this._getItems();
      if (t2 > e2.length - 1 || t2 < 0) return;
      if (this._isSliding) return void P.one(this._element, mt, () => this.to(t2));
      const i2 = this._getItemIndex(this._getActive());
      if (i2 === t2) return;
      const n2 = t2 > i2 ? ht : dt;
      this._slide(n2, e2[t2]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.defaultInterval = t2.interval, t2;
    }
    _addEventListeners() {
      this._config.keyboard && P.on(this._element, gt, (t2) => this._keydown(t2)), "hover" === this._config.pause && (P.on(this._element, _t, () => this.pause()), P.on(this._element, bt, () => this._maybeEnableCycle())), this._config.touch && ot.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t3 of R.find(".carousel-item img", this._element)) P.on(t3, vt, (t4) => t4.preventDefault());
      const t2 = { leftCallback: () => this._slide(this._directionToOrder(ut)), rightCallback: () => this._slide(this._directionToOrder(ft)), endCallback: () => {
        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
      } };
      this._swipeHelper = new ot(this._element, t2);
    }
    _keydown(t2) {
      if (/input|textarea/i.test(t2.target.tagName)) return;
      const e2 = xt[t2.key];
      e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
    }
    _getItemIndex(t2) {
      return this._getItems().indexOf(t2);
    }
    _setActiveIndicatorElement(t2) {
      if (!this._indicatorsElement) return;
      const e2 = R.findOne(Tt, this._indicatorsElement);
      e2.classList.remove(Et), e2.removeAttribute("aria-current");
      const i2 = R.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
      i2 && (i2.classList.add(Et), i2.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t2 = this._activeElement || this._getActive();
      if (!t2) return;
      const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
      this._config.interval = e2 || this._config.defaultInterval;
    }
    _slide(t2, e2 = null) {
      if (this._isSliding) return;
      const i2 = this._getActive(), n2 = t2 === ht, s2 = e2 || v(this._getItems(), i2, n2, this._config.wrap);
      if (s2 === i2) return;
      const o2 = this._getItemIndex(s2), r2 = (e3) => P.trigger(this._element, e3, { relatedTarget: s2, direction: this._orderToDirection(t2), from: this._getItemIndex(i2), to: o2 });
      if (r2(pt).defaultPrevented) return;
      if (!i2 || !s2) return;
      const a2 = Boolean(this._interval);
      this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = s2;
      const l2 = n2 ? "carousel-item-start" : "carousel-item-end", c2 = n2 ? "carousel-item-next" : "carousel-item-prev";
      s2.classList.add(c2), u(s2), i2.classList.add(l2), s2.classList.add(l2), this._queueCallback(() => {
        s2.classList.remove(l2, c2), s2.classList.add(Et), i2.classList.remove(Et, c2, l2), this._isSliding = false, r2(mt);
      }, i2, this._isAnimated()), a2 && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return R.findOne(Ot, this._element);
    }
    _getItems() {
      return R.find(Ct, this._element);
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }
    _directionToOrder(t2) {
      return m() ? t2 === ut ? dt : ht : t2 === ut ? ht : dt;
    }
    _orderToDirection(t2) {
      return m() ? t2 === dt ? ut : ft : t2 === dt ? ft : ut;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = St.getOrCreateInstance(this, t2);
        if ("number" != typeof t2) {
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        } else e2.to(t2);
      });
    }
  }
  P.on(document, wt, "[data-bs-slide], [data-bs-slide-to]", function(t2) {
    const e2 = R.getElementFromSelector(this);
    if (!e2 || !e2.classList.contains(At)) return;
    t2.preventDefault();
    const i2 = St.getOrCreateInstance(e2), n2 = this.getAttribute("data-bs-slide-to");
    return n2 ? (i2.to(n2), void i2._maybeEnableCycle()) : "next" === H.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
  }), P.on(window, yt, () => {
    const t2 = R.find('[data-bs-ride="carousel"]');
    for (const e2 of t2) St.getOrCreateInstance(e2);
  }), g(St);
  const Dt = ".bs.collapse", $t = `show${Dt}`, It = `shown${Dt}`, Nt = `hide${Dt}`, Pt = `hidden${Dt}`, jt = `click${Dt}.data-api`, Mt = "show", Ft = "collapse", Ht = "collapsing", Wt = `:scope .${Ft} .${Ft}`, Bt = '[data-bs-toggle="collapse"]', zt = { parent: null, toggle: true }, Rt = { parent: "(null|element)", toggle: "boolean" };
  class qt extends B {
    constructor(t2, e2) {
      super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
      const i2 = R.find(Bt);
      for (const t3 of i2) {
        const e3 = R.getSelectorFromElement(t3), i3 = R.find(e3).filter((t4) => t4 === this._element);
        null !== e3 && i3.length && this._triggerArray.push(t3);
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return zt;
    }
    static get DefaultType() {
      return Rt;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t2 = [];
      if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => qt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning) return;
      if (P.trigger(this._element, $t).defaultPrevented) return;
      for (const e3 of t2) e3.hide();
      const e2 = this._getDimension();
      this._element.classList.remove(Ft), this._element.classList.add(Ht), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(Ht), this._element.classList.add(Ft, Mt), this._element.style[e2] = "", P.trigger(this._element, It);
      }, this._element, true), this._element.style[e2] = `${this._element[i2]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (P.trigger(this._element, Nt).defaultPrevented) return;
      const t2 = this._getDimension();
      this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, u(this._element), this._element.classList.add(Ht), this._element.classList.remove(Ft, Mt);
      for (const t3 of this._triggerArray) {
        const e2 = R.getElementFromSelector(t3);
        e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
      }
      this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(Ht), this._element.classList.add(Ft), P.trigger(this._element, Pt);
      }, this._element, true);
    }
    _isShown(t2 = this._element) {
      return t2.classList.contains(Mt);
    }
    _configAfterMerge(t2) {
      return t2.toggle = Boolean(t2.toggle), t2.parent = a(t2.parent), t2;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t2 = this._getFirstLevelChildren(Bt);
      for (const e2 of t2) {
        const t3 = R.getElementFromSelector(e2);
        t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
      }
    }
    _getFirstLevelChildren(t2) {
      const e2 = R.find(Wt, this._config.parent);
      return R.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
    }
    _addAriaAndCollapsedClass(t2, e2) {
      if (t2.length) for (const i2 of t2) i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
    }
    static jQueryInterface(t2) {
      const e2 = {};
      return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
        const i2 = qt.getOrCreateInstance(this, e2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2]();
        }
      });
    }
  }
  P.on(document, jt, Bt, function(t2) {
    ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
    for (const t3 of R.getMultipleElementsFromSelector(this)) qt.getOrCreateInstance(t3, { toggle: false }).toggle();
  }), g(qt);
  var Vt = "top", Kt = "bottom", Qt = "right", Xt = "left", Yt = "auto", Ut = [Vt, Kt, Qt, Xt], Gt = "start", Jt = "end", Zt = "clippingParents", te = "viewport", ee = "popper", ie = "reference", ne = Ut.reduce(function(t2, e2) {
    return t2.concat([e2 + "-" + Gt, e2 + "-" + Jt]);
  }, []), se = [].concat(Ut, [Yt]).reduce(function(t2, e2) {
    return t2.concat([e2, e2 + "-" + Gt, e2 + "-" + Jt]);
  }, []), oe = "beforeRead", re = "read", ae = "afterRead", le = "beforeMain", ce = "main", he = "afterMain", de = "beforeWrite", ue = "write", fe = "afterWrite", pe = [oe, re, ae, le, ce, he, de, ue, fe];
  function me(t2) {
    return t2 ? (t2.nodeName || "").toLowerCase() : null;
  }
  function ge(t2) {
    if (null == t2) return window;
    if ("[object Window]" !== t2.toString()) {
      var e2 = t2.ownerDocument;
      return e2 && e2.defaultView || window;
    }
    return t2;
  }
  function _e(t2) {
    return t2 instanceof ge(t2).Element || t2 instanceof Element;
  }
  function be(t2) {
    return t2 instanceof ge(t2).HTMLElement || t2 instanceof HTMLElement;
  }
  function ve(t2) {
    return "undefined" != typeof ShadowRoot && (t2 instanceof ge(t2).ShadowRoot || t2 instanceof ShadowRoot);
  }
  const ye = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
    var e2 = t2.state;
    Object.keys(e2.elements).forEach(function(t3) {
      var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
      be(s2) && me(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
        var e3 = n2[t4];
        false === e3 ? s2.removeAttribute(t4) : s2.setAttribute(t4, true === e3 ? "" : e3);
      }));
    });
  }, effect: function(t2) {
    var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
    return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
      Object.keys(e2.elements).forEach(function(t3) {
        var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
          return t4[e3] = "", t4;
        }, {});
        be(n2) && me(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
          n2.removeAttribute(t4);
        }));
      });
    };
  }, requires: ["computeStyles"] };
  function we(t2) {
    return t2.split("-")[0];
  }
  var Ae = Math.max, Ee = Math.min, Te = Math.round;
  function Ce() {
    var t2 = navigator.userAgentData;
    return null != t2 && t2.brands && Array.isArray(t2.brands) ? t2.brands.map(function(t3) {
      return t3.brand + "/" + t3.version;
    }).join(" ") : navigator.userAgent;
  }
  function Oe() {
    return !/^((?!chrome|android).)*safari/i.test(Ce());
  }
  function xe(t2, e2, i2) {
    void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = false);
    var n2 = t2.getBoundingClientRect(), s2 = 1, o2 = 1;
    e2 && be(t2) && (s2 = t2.offsetWidth > 0 && Te(n2.width) / t2.offsetWidth || 1, o2 = t2.offsetHeight > 0 && Te(n2.height) / t2.offsetHeight || 1);
    var r2 = (_e(t2) ? ge(t2) : window).visualViewport, a2 = !Oe() && i2, l2 = (n2.left + (a2 && r2 ? r2.offsetLeft : 0)) / s2, c2 = (n2.top + (a2 && r2 ? r2.offsetTop : 0)) / o2, h2 = n2.width / s2, d2 = n2.height / o2;
    return { width: h2, height: d2, top: c2, right: l2 + h2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
  }
  function ke(t2) {
    var e2 = xe(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
    return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
  }
  function Le(t2, e2) {
    var i2 = e2.getRootNode && e2.getRootNode();
    if (t2.contains(e2)) return true;
    if (i2 && ve(i2)) {
      var n2 = e2;
      do {
        if (n2 && t2.isSameNode(n2)) return true;
        n2 = n2.parentNode || n2.host;
      } while (n2);
    }
    return false;
  }
  function Se(t2) {
    return ge(t2).getComputedStyle(t2);
  }
  function De(t2) {
    return ["table", "td", "th"].indexOf(me(t2)) >= 0;
  }
  function $e(t2) {
    return ((_e(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
  }
  function Ie(t2) {
    return "html" === me(t2) ? t2 : t2.assignedSlot || t2.parentNode || (ve(t2) ? t2.host : null) || $e(t2);
  }
  function Ne(t2) {
    return be(t2) && "fixed" !== Se(t2).position ? t2.offsetParent : null;
  }
  function Pe(t2) {
    for (var e2 = ge(t2), i2 = Ne(t2); i2 && De(i2) && "static" === Se(i2).position; ) i2 = Ne(i2);
    return i2 && ("html" === me(i2) || "body" === me(i2) && "static" === Se(i2).position) ? e2 : i2 || (function(t3) {
      var e3 = /firefox/i.test(Ce());
      if (/Trident/i.test(Ce()) && be(t3) && "fixed" === Se(t3).position) return null;
      var i3 = Ie(t3);
      for (ve(i3) && (i3 = i3.host); be(i3) && ["html", "body"].indexOf(me(i3)) < 0; ) {
        var n2 = Se(i3);
        if ("none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || -1 !== ["transform", "perspective"].indexOf(n2.willChange) || e3 && "filter" === n2.willChange || e3 && n2.filter && "none" !== n2.filter) return i3;
        i3 = i3.parentNode;
      }
      return null;
    })(t2) || e2;
  }
  function je(t2) {
    return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
  }
  function Me(t2, e2, i2) {
    return Ae(t2, Ee(e2, i2));
  }
  function Fe(t2) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
  }
  function He(t2, e2) {
    return e2.reduce(function(e3, i2) {
      return e3[i2] = t2, e3;
    }, {});
  }
  const We = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
    var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = we(i2.placement), l2 = je(a2), c2 = [Xt, Qt].indexOf(a2) >= 0 ? "height" : "width";
    if (o2 && r2) {
      var h2 = (function(t3, e3) {
        return Fe("number" != typeof (t3 = "function" == typeof t3 ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) ? t3 : He(t3, Ut));
      })(s2.padding, i2), d2 = ke(o2), u2 = "y" === l2 ? Vt : Xt, f2 = "y" === l2 ? Kt : Qt, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = Pe(o2), _2 = g2 ? "y" === l2 ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, A2 = Me(v2, w2, y2), E2 = l2;
      i2.modifiersData[n2] = ((e2 = {})[E2] = A2, e2.centerOffset = A2 - w2, e2);
    }
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.options.element, n2 = void 0 === i2 ? "[data-popper-arrow]" : i2;
    null != n2 && ("string" != typeof n2 || (n2 = e2.elements.popper.querySelector(n2))) && Le(e2.elements.popper, n2) && (e2.elements.arrow = n2);
  }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
  function Be(t2) {
    return t2.split("-")[1];
  }
  var ze = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Re(t2) {
    var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l2 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = t2.isFixed, u2 = r2.x, f2 = void 0 === u2 ? 0 : u2, p2 = r2.y, m2 = void 0 === p2 ? 0 : p2, g2 = "function" == typeof h2 ? h2({ x: f2, y: m2 }) : { x: f2, y: m2 };
    f2 = g2.x, m2 = g2.y;
    var _2 = r2.hasOwnProperty("x"), b2 = r2.hasOwnProperty("y"), v2 = Xt, y2 = Vt, w2 = window;
    if (c2) {
      var A2 = Pe(i2), E2 = "clientHeight", T2 = "clientWidth";
      A2 === ge(i2) && "static" !== Se(A2 = $e(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", T2 = "scrollWidth"), (s2 === Vt || (s2 === Xt || s2 === Qt) && o2 === Jt) && (y2 = Kt, m2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.height : A2[E2]) - n2.height, m2 *= l2 ? 1 : -1), s2 !== Xt && (s2 !== Vt && s2 !== Kt || o2 !== Jt) || (v2 = Qt, f2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.width : A2[T2]) - n2.width, f2 *= l2 ? 1 : -1);
    }
    var C2, O2 = Object.assign({ position: a2 }, c2 && ze), x2 = true === h2 ? (function(t3, e3) {
      var i3 = t3.x, n3 = t3.y, s3 = e3.devicePixelRatio || 1;
      return { x: Te(i3 * s3) / s3 || 0, y: Te(n3 * s3) / s3 || 0 };
    })({ x: f2, y: m2 }, ge(i2)) : { x: f2, y: m2 };
    return f2 = x2.x, m2 = x2.y, l2 ? Object.assign({}, O2, ((C2 = {})[y2] = b2 ? "0" : "", C2[v2] = _2 ? "0" : "", C2.transform = (w2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + m2 + "px)" : "translate3d(" + f2 + "px, " + m2 + "px, 0)", C2)) : Object.assign({}, O2, ((e2 = {})[y2] = b2 ? m2 + "px" : "", e2[v2] = _2 ? f2 + "px" : "", e2.transform = "", e2));
  }
  const qe = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = void 0 === n2 || n2, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l2 = void 0 === a2 || a2, c2 = { placement: we(e2.placement), variation: Be(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2, isFixed: "fixed" === e2.options.strategy };
    null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, Re(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, Re(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
  }, data: {} };
  var Ve = { passive: true };
  const Ke = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = void 0 === s2 || s2, r2 = n2.resize, a2 = void 0 === r2 || r2, l2 = ge(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
    return o2 && c2.forEach(function(t3) {
      t3.addEventListener("scroll", i2.update, Ve);
    }), a2 && l2.addEventListener("resize", i2.update, Ve), function() {
      o2 && c2.forEach(function(t3) {
        t3.removeEventListener("scroll", i2.update, Ve);
      }), a2 && l2.removeEventListener("resize", i2.update, Ve);
    };
  }, data: {} };
  var Qe = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Xe(t2) {
    return t2.replace(/left|right|bottom|top/g, function(t3) {
      return Qe[t3];
    });
  }
  var Ye = { start: "end", end: "start" };
  function Ue(t2) {
    return t2.replace(/start|end/g, function(t3) {
      return Ye[t3];
    });
  }
  function Ge(t2) {
    var e2 = ge(t2);
    return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
  }
  function Je(t2) {
    return xe($e(t2)).left + Ge(t2).scrollLeft;
  }
  function Ze(t2) {
    var e2 = Se(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
    return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
  }
  function ti(t2) {
    return ["html", "body", "#document"].indexOf(me(t2)) >= 0 ? t2.ownerDocument.body : be(t2) && Ze(t2) ? t2 : ti(Ie(t2));
  }
  function ei(t2, e2) {
    var i2;
    void 0 === e2 && (e2 = []);
    var n2 = ti(t2), s2 = n2 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = ge(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], Ze(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
    return s2 ? a2 : a2.concat(ei(Ie(r2)));
  }
  function ii(t2) {
    return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
  }
  function ni(t2, e2, i2) {
    return e2 === te ? ii((function(t3, e3) {
      var i3 = ge(t3), n2 = $e(t3), s2 = i3.visualViewport, o2 = n2.clientWidth, r2 = n2.clientHeight, a2 = 0, l2 = 0;
      if (s2) {
        o2 = s2.width, r2 = s2.height;
        var c2 = Oe();
        (c2 || !c2 && "fixed" === e3) && (a2 = s2.offsetLeft, l2 = s2.offsetTop);
      }
      return { width: o2, height: r2, x: a2 + Je(t3), y: l2 };
    })(t2, i2)) : _e(e2) ? (function(t3, e3) {
      var i3 = xe(t3, false, "fixed" === e3);
      return i3.top = i3.top + t3.clientTop, i3.left = i3.left + t3.clientLeft, i3.bottom = i3.top + t3.clientHeight, i3.right = i3.left + t3.clientWidth, i3.width = t3.clientWidth, i3.height = t3.clientHeight, i3.x = i3.left, i3.y = i3.top, i3;
    })(e2, i2) : ii((function(t3) {
      var e3, i3 = $e(t3), n2 = Ge(t3), s2 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = Ae(i3.scrollWidth, i3.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = Ae(i3.scrollHeight, i3.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + Je(t3), l2 = -n2.scrollTop;
      return "rtl" === Se(s2 || i3).direction && (a2 += Ae(i3.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
    })($e(t2)));
  }
  function si(t2) {
    var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? we(s2) : null, r2 = s2 ? Be(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
    switch (o2) {
      case Vt:
        e2 = { x: a2, y: i2.y - n2.height };
        break;
      case Kt:
        e2 = { x: a2, y: i2.y + i2.height };
        break;
      case Qt:
        e2 = { x: i2.x + i2.width, y: l2 };
        break;
      case Xt:
        e2 = { x: i2.x - n2.width, y: l2 };
        break;
      default:
        e2 = { x: i2.x, y: i2.y };
    }
    var c2 = o2 ? je(o2) : null;
    if (null != c2) {
      var h2 = "y" === c2 ? "height" : "width";
      switch (r2) {
        case Gt:
          e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
          break;
        case Jt:
          e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
      }
    }
    return e2;
  }
  function oi(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = void 0 === n2 ? t2.placement : n2, o2 = i2.strategy, r2 = void 0 === o2 ? t2.strategy : o2, a2 = i2.boundary, l2 = void 0 === a2 ? Zt : a2, c2 = i2.rootBoundary, h2 = void 0 === c2 ? te : c2, d2 = i2.elementContext, u2 = void 0 === d2 ? ee : d2, f2 = i2.altBoundary, p2 = void 0 !== f2 && f2, m2 = i2.padding, g2 = void 0 === m2 ? 0 : m2, _2 = Fe("number" != typeof g2 ? g2 : He(g2, Ut)), b2 = u2 === ee ? ie : ee, v2 = t2.rects.popper, y2 = t2.elements[p2 ? b2 : u2], w2 = (function(t3, e3, i3, n3) {
      var s3 = "clippingParents" === e3 ? (function(t4) {
        var e4 = ei(Ie(t4)), i4 = ["absolute", "fixed"].indexOf(Se(t4).position) >= 0 && be(t4) ? Pe(t4) : t4;
        return _e(i4) ? e4.filter(function(t5) {
          return _e(t5) && Le(t5, i4) && "body" !== me(t5);
        }) : [];
      })(t3) : [].concat(e3), o3 = [].concat(s3, [i3]), r3 = o3[0], a3 = o3.reduce(function(e4, i4) {
        var s4 = ni(t3, i4, n3);
        return e4.top = Ae(s4.top, e4.top), e4.right = Ee(s4.right, e4.right), e4.bottom = Ee(s4.bottom, e4.bottom), e4.left = Ae(s4.left, e4.left), e4;
      }, ni(t3, r3, n3));
      return a3.width = a3.right - a3.left, a3.height = a3.bottom - a3.top, a3.x = a3.left, a3.y = a3.top, a3;
    })(_e(y2) ? y2 : y2.contextElement || $e(t2.elements.popper), l2, h2, r2), A2 = xe(t2.elements.reference), E2 = si({ reference: A2, element: v2, placement: s2 }), T2 = ii(Object.assign({}, v2, E2)), C2 = u2 === ee ? T2 : A2, O2 = { top: w2.top - C2.top + _2.top, bottom: C2.bottom - w2.bottom + _2.bottom, left: w2.left - C2.left + _2.left, right: C2.right - w2.right + _2.right }, x2 = t2.modifiersData.offset;
    if (u2 === ee && x2) {
      var k2 = x2[s2];
      Object.keys(O2).forEach(function(t3) {
        var e3 = [Qt, Kt].indexOf(t3) >= 0 ? 1 : -1, i3 = [Vt, Kt].indexOf(t3) >= 0 ? "y" : "x";
        O2[t3] += k2[i3] * e3;
      });
    }
    return O2;
  }
  function ri(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = void 0 === l2 ? se : l2, h2 = Be(n2), d2 = h2 ? a2 ? ne : ne.filter(function(t3) {
      return Be(t3) === h2;
    }) : Ut, u2 = d2.filter(function(t3) {
      return c2.indexOf(t3) >= 0;
    });
    0 === u2.length && (u2 = d2);
    var f2 = u2.reduce(function(e3, i3) {
      return e3[i3] = oi(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[we(i3)], e3;
    }, {});
    return Object.keys(f2).sort(function(t3, e3) {
      return f2[t3] - f2[e3];
    });
  }
  const ai = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name;
    if (!e2.modifiersData[n2]._skip) {
      for (var s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = we(g2), b2 = l2 || (_2 !== g2 && p2 ? (function(t3) {
        if (we(t3) === Yt) return [];
        var e3 = Xe(t3);
        return [Ue(t3), e3, Ue(e3)];
      })(g2) : [Xe(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
        return t3.concat(we(i3) === Yt ? ri(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }) : i3);
      }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, A2 = /* @__PURE__ */ new Map(), E2 = true, T2 = v2[0], C2 = 0; C2 < v2.length; C2++) {
        var O2 = v2[C2], x2 = we(O2), k2 = Be(O2) === Gt, L2 = [Vt, Kt].indexOf(x2) >= 0, S2 = L2 ? "width" : "height", D2 = oi(e2, { placement: O2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), $2 = L2 ? k2 ? Qt : Xt : k2 ? Kt : Vt;
        y2[S2] > w2[S2] && ($2 = Xe($2));
        var I2 = Xe($2), N2 = [];
        if (o2 && N2.push(D2[x2] <= 0), a2 && N2.push(D2[$2] <= 0, D2[I2] <= 0), N2.every(function(t3) {
          return t3;
        })) {
          T2 = O2, E2 = false;
          break;
        }
        A2.set(O2, N2);
      }
      if (E2) for (var P2 = function(t3) {
        var e3 = v2.find(function(e4) {
          var i3 = A2.get(e4);
          if (i3) return i3.slice(0, t3).every(function(t4) {
            return t4;
          });
        });
        if (e3) return T2 = e3, "break";
      }, j2 = p2 ? 3 : 1; j2 > 0 && "break" !== P2(j2); j2--) ;
      e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
    }
  }, requiresIfExists: ["offset"], data: { _skip: false } };
  function li(t2, e2, i2) {
    return void 0 === i2 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
  }
  function ci(t2) {
    return [Vt, Qt, Kt, Xt].some(function(e2) {
      return t2[e2] >= 0;
    });
  }
  const hi = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = oi(e2, { elementContext: "reference" }), a2 = oi(e2, { altBoundary: true }), l2 = li(r2, n2), c2 = li(a2, s2, o2), h2 = ci(l2), d2 = ci(c2);
    e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
  } }, di = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = void 0 === s2 ? [0, 0] : s2, r2 = se.reduce(function(t3, i3) {
      return t3[i3] = (function(t4, e3, i4) {
        var n3 = we(t4), s3 = [Xt, Vt].indexOf(n3) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
        return r3 = r3 || 0, a3 = (a3 || 0) * s3, [Xt, Qt].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
      })(i3, e2.rects, o2), t3;
    }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
    null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
  } }, ui = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
    var e2 = t2.state, i2 = t2.name;
    e2.modifiersData[i2] = si({ reference: e2.rects.reference, element: e2.rects.popper, placement: e2.placement });
  }, data: {} }, fi = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, m2 = void 0 === p2 ? 0 : p2, g2 = oi(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = we(e2.placement), b2 = Be(e2.placement), v2 = !b2, y2 = je(_2), w2 = "x" === y2 ? "y" : "x", A2 = e2.modifiersData.popperOffsets, E2 = e2.rects.reference, T2 = e2.rects.popper, C2 = "function" == typeof m2 ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, O2 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), x2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, k2 = { x: 0, y: 0 };
    if (A2) {
      if (o2) {
        var L2, S2 = "y" === y2 ? Vt : Xt, D2 = "y" === y2 ? Kt : Qt, $2 = "y" === y2 ? "height" : "width", I2 = A2[y2], N2 = I2 + g2[S2], P2 = I2 - g2[D2], j2 = f2 ? -T2[$2] / 2 : 0, M2 = b2 === Gt ? E2[$2] : T2[$2], F2 = b2 === Gt ? -T2[$2] : -E2[$2], H2 = e2.elements.arrow, W2 = f2 && H2 ? ke(H2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z2 = B2[S2], R2 = B2[D2], q2 = Me(0, E2[$2], W2[$2]), V2 = v2 ? E2[$2] / 2 - j2 - q2 - z2 - O2.mainAxis : M2 - q2 - z2 - O2.mainAxis, K2 = v2 ? -E2[$2] / 2 + j2 + q2 + R2 + O2.mainAxis : F2 + q2 + R2 + O2.mainAxis, Q2 = e2.elements.arrow && Pe(e2.elements.arrow), X2 = Q2 ? "y" === y2 ? Q2.clientTop || 0 : Q2.clientLeft || 0 : 0, Y2 = null != (L2 = null == x2 ? void 0 : x2[y2]) ? L2 : 0, U2 = I2 + K2 - Y2, G2 = Me(f2 ? Ee(N2, I2 + V2 - Y2 - X2) : N2, I2, f2 ? Ae(P2, U2) : P2);
        A2[y2] = G2, k2[y2] = G2 - I2;
      }
      if (a2) {
        var J2, Z2 = "x" === y2 ? Vt : Xt, tt2 = "x" === y2 ? Kt : Qt, et2 = A2[w2], it2 = "y" === w2 ? "height" : "width", nt2 = et2 + g2[Z2], st2 = et2 - g2[tt2], ot2 = -1 !== [Vt, Xt].indexOf(_2), rt2 = null != (J2 = null == x2 ? void 0 : x2[w2]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E2[it2] - T2[it2] - rt2 + O2.altAxis, lt2 = ot2 ? et2 + E2[it2] + T2[it2] - rt2 - O2.altAxis : st2, ct2 = f2 && ot2 ? (function(t3, e3, i3) {
          var n3 = Me(t3, e3, i3);
          return n3 > i3 ? i3 : n3;
        })(at2, et2, lt2) : Me(f2 ? at2 : nt2, et2, f2 ? lt2 : st2);
        A2[w2] = ct2, k2[w2] = ct2 - et2;
      }
      e2.modifiersData[n2] = k2;
    }
  }, requiresIfExists: ["offset"] };
  function pi(t2, e2, i2) {
    void 0 === i2 && (i2 = false);
    var n2, s2, o2 = be(e2), r2 = be(e2) && (function(t3) {
      var e3 = t3.getBoundingClientRect(), i3 = Te(e3.width) / t3.offsetWidth || 1, n3 = Te(e3.height) / t3.offsetHeight || 1;
      return 1 !== i3 || 1 !== n3;
    })(e2), a2 = $e(e2), l2 = xe(t2, r2, i2), c2 = { scrollLeft: 0, scrollTop: 0 }, h2 = { x: 0, y: 0 };
    return (o2 || !o2 && !i2) && (("body" !== me(e2) || Ze(a2)) && (c2 = (n2 = e2) !== ge(n2) && be(n2) ? { scrollLeft: (s2 = n2).scrollLeft, scrollTop: s2.scrollTop } : Ge(n2)), be(e2) ? ((h2 = xe(e2, true)).x += e2.clientLeft, h2.y += e2.clientTop) : a2 && (h2.x = Je(a2))), { x: l2.left + c2.scrollLeft - h2.x, y: l2.top + c2.scrollTop - h2.y, width: l2.width, height: l2.height };
  }
  function mi(t2) {
    var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n2 = [];
    function s2(t3) {
      i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach(function(t4) {
        if (!i2.has(t4)) {
          var n3 = e2.get(t4);
          n3 && s2(n3);
        }
      }), n2.push(t3);
    }
    return t2.forEach(function(t3) {
      e2.set(t3.name, t3);
    }), t2.forEach(function(t3) {
      i2.has(t3.name) || s2(t3);
    }), n2;
  }
  var gi = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function _i() {
    for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++) e2[i2] = arguments[i2];
    return !e2.some(function(t3) {
      return !(t3 && "function" == typeof t3.getBoundingClientRect);
    });
  }
  function bi(t2) {
    void 0 === t2 && (t2 = {});
    var e2 = t2, i2 = e2.defaultModifiers, n2 = void 0 === i2 ? [] : i2, s2 = e2.defaultOptions, o2 = void 0 === s2 ? gi : s2;
    return function(t3, e3, i3) {
      void 0 === i3 && (i3 = o2);
      var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, gi, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
        var s4 = "function" == typeof i4 ? i4(a2.options) : i4;
        d2(), a2.options = Object.assign({}, o2, a2.options, s4), a2.scrollParents = { reference: _e(t3) ? ei(t3) : t3.contextElement ? ei(t3.contextElement) : [], popper: ei(e3) };
        var r3, c3, u2 = (function(t4) {
          var e4 = mi(t4);
          return pe.reduce(function(t5, i5) {
            return t5.concat(e4.filter(function(t6) {
              return t6.phase === i5;
            }));
          }, []);
        })((r3 = [].concat(n2, a2.options.modifiers), c3 = r3.reduce(function(t4, e4) {
          var i5 = t4[e4.name];
          return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
        }, {}), Object.keys(c3).map(function(t4) {
          return c3[t4];
        })));
        return a2.orderedModifiers = u2.filter(function(t4) {
          return t4.enabled;
        }), a2.orderedModifiers.forEach(function(t4) {
          var e4 = t4.name, i5 = t4.options, n3 = void 0 === i5 ? {} : i5, s5 = t4.effect;
          if ("function" == typeof s5) {
            var o3 = s5({ state: a2, name: e4, instance: h2, options: n3 });
            l2.push(o3 || function() {
            });
          }
        }), h2.update();
      }, forceUpdate: function() {
        if (!c2) {
          var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
          if (_i(e4, i4)) {
            a2.rects = { reference: pi(e4, Pe(i4), "fixed" === a2.options.strategy), popper: ke(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
              return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
            });
            for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++) if (true !== a2.reset) {
              var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = void 0 === r3 ? {} : r3, d3 = s4.name;
              "function" == typeof o3 && (a2 = o3({ state: a2, options: l3, name: d3, instance: h2 }) || a2);
            } else a2.reset = false, n3 = -1;
          }
        }
      }, update: (s3 = function() {
        return new Promise(function(t4) {
          h2.forceUpdate(), t4(a2);
        });
      }, function() {
        return r2 || (r2 = new Promise(function(t4) {
          Promise.resolve().then(function() {
            r2 = void 0, t4(s3());
          });
        })), r2;
      }), destroy: function() {
        d2(), c2 = true;
      } };
      if (!_i(t3, e3)) return h2;
      function d2() {
        l2.forEach(function(t4) {
          return t4();
        }), l2 = [];
      }
      return h2.setOptions(i3).then(function(t4) {
        !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
      }), h2;
    };
  }
  var vi = bi(), yi = bi({ defaultModifiers: [Ke, ui, qe, ye] }), wi = bi({ defaultModifiers: [Ke, ui, qe, ye, di, ai, fi, We, hi] });
  const Ai = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: he, afterRead: ae, afterWrite: fe, applyStyles: ye, arrow: We, auto: Yt, basePlacements: Ut, beforeMain: le, beforeRead: oe, beforeWrite: de, bottom: Kt, clippingParents: Zt, computeStyles: qe, createPopper: wi, createPopperBase: vi, createPopperLite: yi, detectOverflow: oi, end: Jt, eventListeners: Ke, flip: ai, hide: hi, left: Xt, main: ce, modifierPhases: pe, offset: di, placements: se, popper: ee, popperGenerator: bi, popperOffsets: ui, preventOverflow: fi, read: re, reference: ie, right: Qt, start: Gt, top: Vt, variationPlacements: ne, viewport: te, write: ue }, Symbol.toStringTag, { value: "Module" })), Ei = "dropdown", Ti = ".bs.dropdown", Ci = ".data-api", Oi = "ArrowUp", xi = "ArrowDown", ki = `hide${Ti}`, Li = `hidden${Ti}`, Si = `show${Ti}`, Di = `shown${Ti}`, $i = `click${Ti}${Ci}`, Ii = `keydown${Ti}${Ci}`, Ni = `keyup${Ti}${Ci}`, Pi = "show", ji = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Mi = `${ji}.${Pi}`, Fi = ".dropdown-menu", Hi = m() ? "top-end" : "top-start", Wi = m() ? "top-start" : "top-end", Bi = m() ? "bottom-end" : "bottom-start", zi = m() ? "bottom-start" : "bottom-end", Ri = m() ? "left-start" : "right-start", qi = m() ? "right-start" : "left-start", Vi = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Ki = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
  class Qi extends B {
    constructor(t2, e2) {
      super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = R.next(this._element, Fi)[0] || R.prev(this._element, Fi)[0] || R.findOne(Fi, this._parent), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return Vi;
    }
    static get DefaultType() {
      return Ki;
    }
    static get NAME() {
      return Ei;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (c(this._element) || this._isShown()) return;
      const t2 = { relatedTarget: this._element };
      if (!P.trigger(this._element, Si, t2).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t3 of [].concat(...document.body.children)) P.on(t3, "mouseover", d);
        this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Pi), this._element.classList.add(Pi), P.trigger(this._element, Di, t2);
      }
    }
    hide() {
      if (c(this._element) || !this._isShown()) return;
      const t2 = { relatedTarget: this._element };
      this._completeHide(t2);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _completeHide(t2) {
      if (!P.trigger(this._element, ki, t2).defaultPrevented) {
        if ("ontouchstart" in document.documentElement) for (const t3 of [].concat(...document.body.children)) P.off(t3, "mouseover", d);
        this._popper && this._popper.destroy(), this._menu.classList.remove(Pi), this._element.classList.remove(Pi), this._element.setAttribute("aria-expanded", "false"), H.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, Li, t2);
      }
    }
    _getConfig(t2) {
      if ("object" == typeof (t2 = super._getConfig(t2)).reference && !r(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect) throw new TypeError(`${Ei.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t2;
    }
    _createPopper() {
      if (void 0 === Ai) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
      let t2 = this._element;
      "parent" === this._config.reference ? t2 = this._parent : r(this._config.reference) ? t2 = a(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
      const e2 = this._getPopperConfig();
      this._popper = wi(t2, this._menu, e2);
    }
    _isShown() {
      return this._menu.classList.contains(Pi);
    }
    _getPlacement() {
      const t2 = this._parent;
      if (t2.classList.contains("dropend")) return Ri;
      if (t2.classList.contains("dropstart")) return qi;
      if (t2.classList.contains("dropup-center")) return "top";
      if (t2.classList.contains("dropdown-center")) return "bottom";
      const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t2.classList.contains("dropup") ? e2 ? Wi : Hi : e2 ? zi : Bi;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _getPopperConfig() {
      const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return (this._inNavbar || "static" === this._config.display) && (H.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ..._(this._config.popperConfig, [void 0, t2]) };
    }
    _selectMenuItem({ key: t2, target: e2 }) {
      const i2 = R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => l(t3));
      i2.length && v(i2, e2, t2 === xi, !i2.includes(e2)).focus();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Qi.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
    static clearMenus(t2) {
      if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key) return;
      const e2 = R.find(Mi);
      for (const i2 of e2) {
        const e3 = Qi.getInstance(i2);
        if (!e3 || false === e3._config.autoClose) continue;
        const n2 = t2.composedPath(), s2 = n2.includes(e3._menu);
        if (n2.includes(e3._element) || "inside" === e3._config.autoClose && !s2 || "outside" === e3._config.autoClose && s2) continue;
        if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName))) continue;
        const o2 = { relatedTarget: e3._element };
        "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
      }
    }
    static dataApiKeydownHandler(t2) {
      const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, n2 = [Oi, xi].includes(t2.key);
      if (!n2 && !i2) return;
      if (e2 && !i2) return;
      t2.preventDefault();
      const s2 = this.matches(ji) ? this : R.prev(this, ji)[0] || R.next(this, ji)[0] || R.findOne(ji, t2.delegateTarget.parentNode), o2 = Qi.getOrCreateInstance(s2);
      if (n2) return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
      o2._isShown() && (t2.stopPropagation(), o2.hide(), s2.focus());
    }
  }
  P.on(document, Ii, ji, Qi.dataApiKeydownHandler), P.on(document, Ii, Fi, Qi.dataApiKeydownHandler), P.on(document, $i, Qi.clearMenus), P.on(document, Ni, Qi.clearMenus), P.on(document, $i, ji, function(t2) {
    t2.preventDefault(), Qi.getOrCreateInstance(this).toggle();
  }), g(Qi);
  const Xi = "backdrop", Yi = "show", Ui = `mousedown.bs.${Xi}`, Gi = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, Ji = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
  class Zi extends W {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
    }
    static get Default() {
      return Gi;
    }
    static get DefaultType() {
      return Ji;
    }
    static get NAME() {
      return Xi;
    }
    show(t2) {
      if (!this._config.isVisible) return void _(t2);
      this._append();
      const e2 = this._getElement();
      this._config.isAnimated && u(e2), e2.classList.add(Yi), this._emulateAnimation(() => {
        _(t2);
      });
    }
    hide(t2) {
      this._config.isVisible ? (this._getElement().classList.remove(Yi), this._emulateAnimation(() => {
        this.dispose(), _(t2);
      })) : _(t2);
    }
    dispose() {
      this._isAppended && (P.off(this._element, Ui), this._element.remove(), this._isAppended = false);
    }
    _getElement() {
      if (!this._element) {
        const t2 = document.createElement("div");
        t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
      }
      return this._element;
    }
    _configAfterMerge(t2) {
      return t2.rootElement = a(t2.rootElement), t2;
    }
    _append() {
      if (this._isAppended) return;
      const t2 = this._getElement();
      this._config.rootElement.append(t2), P.on(t2, Ui, () => {
        _(this._config.clickCallback);
      }), this._isAppended = true;
    }
    _emulateAnimation(t2) {
      b(t2, this._getElement(), this._config.isAnimated);
    }
  }
  const tn = ".bs.focustrap", en = `focusin${tn}`, nn = `keydown.tab${tn}`, sn = "backward", on = { autofocus: true, trapElement: null }, rn = { autofocus: "boolean", trapElement: "element" };
  class an extends W {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
    }
    static get Default() {
      return on;
    }
    static get DefaultType() {
      return rn;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, tn), P.on(document, en, (t2) => this._handleFocusin(t2)), P.on(document, nn, (t2) => this._handleKeydown(t2)), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, P.off(document, tn));
    }
    _handleFocusin(t2) {
      const { trapElement: e2 } = this._config;
      if (t2.target === document || t2.target === e2 || e2.contains(t2.target)) return;
      const i2 = R.focusableChildren(e2);
      0 === i2.length ? e2.focus() : this._lastTabNavDirection === sn ? i2[i2.length - 1].focus() : i2[0].focus();
    }
    _handleKeydown(t2) {
      "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? sn : "forward");
    }
  }
  const ln = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", cn = ".sticky-top", hn = "padding-right", dn = "margin-right";
  class un {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t2 = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t2);
    }
    hide() {
      const t2 = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, hn, (e2) => e2 + t2), this._setElementAttributes(ln, hn, (e2) => e2 + t2), this._setElementAttributes(cn, dn, (e2) => e2 - t2);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hn), this._resetElementAttributes(ln, hn), this._resetElementAttributes(cn, dn);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(t2, e2, i2) {
      const n2 = this.getWidth();
      this._applyManipulationCallback(t2, (t3) => {
        if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2) return;
        this._saveInitialAttribute(t3, e2);
        const s2 = window.getComputedStyle(t3).getPropertyValue(e2);
        t3.style.setProperty(e2, `${i2(Number.parseFloat(s2))}px`);
      });
    }
    _saveInitialAttribute(t2, e2) {
      const i2 = t2.style.getPropertyValue(e2);
      i2 && H.setDataAttribute(t2, e2, i2);
    }
    _resetElementAttributes(t2, e2) {
      this._applyManipulationCallback(t2, (t3) => {
        const i2 = H.getDataAttribute(t3, e2);
        null !== i2 ? (H.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
      });
    }
    _applyManipulationCallback(t2, e2) {
      if (r(t2)) e2(t2);
      else for (const i2 of R.find(t2, this._element)) e2(i2);
    }
  }
  const fn = ".bs.modal", pn = `hide${fn}`, mn = `hidePrevented${fn}`, gn = `hidden${fn}`, _n = `show${fn}`, bn = `shown${fn}`, vn = `resize${fn}`, yn = `click.dismiss${fn}`, wn = `mousedown.dismiss${fn}`, An = `keydown.dismiss${fn}`, En = `click${fn}.data-api`, Tn = "modal-open", Cn = "show", On = "modal-static", xn = { backdrop: true, focus: true, keyboard: true }, kn = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
  class Ln extends B {
    constructor(t2, e2) {
      super(t2, e2), this._dialog = R.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new un(), this._addEventListeners();
    }
    static get Default() {
      return xn;
    }
    static get DefaultType() {
      return kn;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || this._isTransitioning || P.trigger(this._element, _n, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(Tn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
    }
    hide() {
      this._isShown && !this._isTransitioning && (P.trigger(this._element, pn).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(Cn), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
    }
    dispose() {
      P.off(window, fn), P.off(this._dialog, fn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Zi({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new an({ trapElement: this._element });
    }
    _showElement(t2) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const e2 = R.findOne(".modal-body", this._dialog);
      e2 && (e2.scrollTop = 0), u(this._element), this._element.classList.add(Cn), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, P.trigger(this._element, bn, { relatedTarget: t2 });
      }, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      P.on(this._element, An, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
      }), P.on(window, vn, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }), P.on(this._element, wn, (t2) => {
        P.one(this._element, yn, (e2) => {
          this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
        document.body.classList.remove(Tn), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, gn);
      });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, mn).defaultPrevented) return;
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
      "hidden" === e2 || this._element.classList.contains(On) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(On), this._queueCallback(() => {
        this._element.classList.remove(On), this._queueCallback(() => {
          this._element.style.overflowY = e2;
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
      if (i2 && !t2) {
        const t3 = m() ? "paddingLeft" : "paddingRight";
        this._element.style[t3] = `${e2}px`;
      }
      if (!i2 && t2) {
        const t3 = m() ? "paddingRight" : "paddingLeft";
        this._element.style[t3] = `${e2}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(t2, e2) {
      return this.each(function() {
        const i2 = Ln.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2](e2);
        }
      });
    }
  }
  P.on(document, En, '[data-bs-toggle="modal"]', function(t2) {
    const e2 = R.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), P.one(e2, _n, (t3) => {
      t3.defaultPrevented || P.one(e2, gn, () => {
        l(this) && this.focus();
      });
    });
    const i2 = R.findOne(".modal.show");
    i2 && Ln.getInstance(i2).hide(), Ln.getOrCreateInstance(e2).toggle(this);
  }), q(Ln), g(Ln);
  const Sn = ".bs.offcanvas", Dn = ".data-api", $n = `load${Sn}${Dn}`, In = "show", Nn = "showing", Pn = "hiding", jn = ".offcanvas.show", Mn = `show${Sn}`, Fn = `shown${Sn}`, Hn = `hide${Sn}`, Wn = `hidePrevented${Sn}`, Bn = `hidden${Sn}`, zn = `resize${Sn}`, Rn = `click${Sn}${Dn}`, qn = `keydown.dismiss${Sn}`, Vn = { backdrop: true, keyboard: true, scroll: false }, Kn = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
  class Qn extends B {
    constructor(t2, e2) {
      super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get Default() {
      return Vn;
    }
    static get DefaultType() {
      return Kn;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || P.trigger(this._element, Mn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new un().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Nn), this._queueCallback(() => {
        this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(In), this._element.classList.remove(Nn), P.trigger(this._element, Fn, { relatedTarget: t2 });
      }, this._element, true));
    }
    hide() {
      this._isShown && (P.trigger(this._element, Hn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(Pn), this._backdrop.hide(), this._queueCallback(() => {
        this._element.classList.remove(In, Pn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new un().reset(), P.trigger(this._element, Bn);
      }, this._element, true)));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t2 = Boolean(this._config.backdrop);
      return new Zi({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
        "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, Wn);
      } : null });
    }
    _initializeFocusTrap() {
      return new an({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, qn, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, Wn));
      });
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Qn.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  P.on(document, Rn, '[data-bs-toggle="offcanvas"]', function(t2) {
    const e2 = R.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), c(this)) return;
    P.one(e2, Bn, () => {
      l(this) && this.focus();
    });
    const i2 = R.findOne(jn);
    i2 && i2 !== e2 && Qn.getInstance(i2).hide(), Qn.getOrCreateInstance(e2).toggle(this);
  }), P.on(window, $n, () => {
    for (const t2 of R.find(jn)) Qn.getOrCreateInstance(t2).show();
  }), P.on(window, zn, () => {
    for (const t2 of R.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t2).position && Qn.getOrCreateInstance(t2).hide();
  }), q(Qn), g(Qn);
  const Xn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Yn = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Un = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Gn = (t2, e2) => {
    const i2 = t2.nodeName.toLowerCase();
    return e2.includes(i2) ? !Yn.has(i2) || Boolean(Un.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
  }, Jn = { allowList: Xn, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, Zn = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, ts = { entry: "(string|element|function|null)", selector: "(string|element)" };
  class es extends W {
    constructor(t2) {
      super(), this._config = this._getConfig(t2);
    }
    static get Default() {
      return Jn;
    }
    static get DefaultType() {
      return Zn;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t2) {
      return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
    }
    toHtml() {
      const t2 = document.createElement("div");
      t2.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e3, i3] of Object.entries(this._config.content)) this._setContent(t2, i3, e3);
      const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
      return i2 && e2.classList.add(...i2.split(" ")), e2;
    }
    _typeCheckConfig(t2) {
      super._typeCheckConfig(t2), this._checkContent(t2.content);
    }
    _checkContent(t2) {
      for (const [e2, i2] of Object.entries(t2)) super._typeCheckConfig({ selector: e2, entry: i2 }, ts);
    }
    _setContent(t2, e2, i2) {
      const n2 = R.findOne(i2, t2);
      n2 && ((e2 = this._resolvePossibleFunction(e2)) ? r(e2) ? this._putElementInTemplate(a(e2), n2) : this._config.html ? n2.innerHTML = this._maybeSanitize(e2) : n2.textContent = e2 : n2.remove());
    }
    _maybeSanitize(t2) {
      return this._config.sanitize ? (function(t3, e2, i2) {
        if (!t3.length) return t3;
        if (i2 && "function" == typeof i2) return i2(t3);
        const n2 = new window.DOMParser().parseFromString(t3, "text/html"), s2 = [].concat(...n2.body.querySelectorAll("*"));
        for (const t4 of s2) {
          const i3 = t4.nodeName.toLowerCase();
          if (!Object.keys(e2).includes(i3)) {
            t4.remove();
            continue;
          }
          const n3 = [].concat(...t4.attributes), s3 = [].concat(e2["*"] || [], e2[i3] || []);
          for (const e3 of n3) Gn(e3, s3) || t4.removeAttribute(e3.nodeName);
        }
        return n2.body.innerHTML;
      })(t2, this._config.allowList, this._config.sanitizeFn) : t2;
    }
    _resolvePossibleFunction(t2) {
      return _(t2, [void 0, this]);
    }
    _putElementInTemplate(t2, e2) {
      if (this._config.html) return e2.innerHTML = "", void e2.append(t2);
      e2.textContent = t2.textContent;
    }
  }
  const is = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ns = "fade", ss = "show", os = ".tooltip-inner", rs = ".modal", as = "hide.bs.modal", ls = "hover", cs = "focus", hs = "click", ds = { AUTO: "auto", TOP: "top", RIGHT: m() ? "left" : "right", BOTTOM: "bottom", LEFT: m() ? "right" : "left" }, us = { allowList: Xn, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 6], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, fs = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
  class ps extends B {
    constructor(t2, e2) {
      if (void 0 === Ai) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
      super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
    }
    static get Default() {
      return us;
    }
    static get DefaultType() {
      return fs;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled && (this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout), P.off(this._element.closest(rs), as, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
    }
    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t2 = P.trigger(this._element, this.constructor.eventName("show")), e2 = (h(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (t2.defaultPrevented || !e2) return;
      this._disposePopper();
      const i2 = this._getTipElement();
      this._element.setAttribute("aria-describedby", i2.getAttribute("id"));
      const { container: n2 } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (n2.append(i2), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i2), i2.classList.add(ss), "ontouchstart" in document.documentElement) for (const t3 of [].concat(...document.body.children)) P.on(t3, "mouseover", d);
      this._queueCallback(() => {
        P.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
      }, this.tip, this._isAnimated());
    }
    hide() {
      if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
        if (this._getTipElement().classList.remove(ss), "ontouchstart" in document.documentElement) for (const t2 of [].concat(...document.body.children)) P.off(t2, "mouseover", d);
        this._activeTrigger[hs] = false, this._activeTrigger[cs] = false, this._activeTrigger[ls] = false, this._isHovered = null, this._queueCallback(() => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")));
        }, this.tip, this._isAnimated());
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
    }
    _createTipElement(t2) {
      const e2 = this._getTemplateFactory(t2).toHtml();
      if (!e2) return null;
      e2.classList.remove(ns, ss), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i2 = ((t3) => {
        do {
          t3 += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t3));
        return t3;
      })(this.constructor.NAME).toString();
      return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(ns), e2;
    }
    setContent(t2) {
      this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t2) {
      return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new es({ ...this._config, content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
    }
    _getContentForTemplate() {
      return { [os]: this._getTitle() };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(t2) {
      return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(ns);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(ss);
    }
    _createPopper(t2) {
      const e2 = _(this._config.placement, [this, t2, this._element]), i2 = ds[e2.toUpperCase()];
      return wi(this._element, t2, this._getPopperConfig(i2));
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _resolvePossibleFunction(t2) {
      return _(t2, [this._element, this._element]);
    }
    _getPopperConfig(t2) {
      const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
        this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
      } }] };
      return { ...e2, ..._(this._config.popperConfig, [void 0, e2]) };
    }
    _setListeners() {
      const t2 = this._config.trigger.split(" ");
      for (const e2 of t2) if ("click" === e2) P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => {
        const e3 = this._initializeOnDelegatedTarget(t3);
        e3._activeTrigger[hs] = !(e3._isShown() && e3._activeTrigger[hs]), e3.toggle();
      });
      else if ("manual" !== e2) {
        const t3 = e2 === ls ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === ls ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
        P.on(this._element, t3, this._config.selector, (t4) => {
          const e3 = this._initializeOnDelegatedTarget(t4);
          e3._activeTrigger["focusin" === t4.type ? cs : ls] = true, e3._enter();
        }), P.on(this._element, i2, this._config.selector, (t4) => {
          const e3 = this._initializeOnDelegatedTarget(t4);
          e3._activeTrigger["focusout" === t4.type ? cs : ls] = e3._element.contains(t4.relatedTarget), e3._leave();
        });
      }
      this._hideModalHandler = () => {
        this._element && this.hide();
      }, P.on(this._element.closest(rs), as, this._hideModalHandler);
    }
    _fixTitle() {
      const t2 = this._element.getAttribute("title");
      t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
    }
    _setTimeout(t2, e2) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(t2) {
      const e2 = H.getDataAttributes(this._element);
      for (const t3 of Object.keys(e2)) is.has(t3) && delete e2[t3];
      return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2.container = false === t2.container ? document.body : a(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
    }
    _getDelegateConfig() {
      const t2 = {};
      for (const [e2, i2] of Object.entries(this._config)) this.constructor.Default[e2] !== i2 && (t2[e2] = i2);
      return t2.selector = false, t2.trigger = "manual", t2;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = ps.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  g(ps);
  const ms = ".popover-header", gs = ".popover-body", _s = { ...ps.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, bs = { ...ps.DefaultType, content: "(null|string|element|function)" };
  class vs extends ps {
    static get Default() {
      return _s;
    }
    static get DefaultType() {
      return bs;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return { [ms]: this._getTitle(), [gs]: this._getContent() };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = vs.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  g(vs);
  const ys = ".bs.scrollspy", ws = `activate${ys}`, As = `click${ys}`, Es = `load${ys}.data-api`, Ts = "active", Cs = "[href]", Os = ".nav-link", xs = `${Os}, .nav-item > ${Os}, .list-group-item`, ks = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, Ls = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
  class Ss extends B {
    constructor(t2, e2) {
      super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
    }
    static get Default() {
      return ks;
    }
    static get DefaultType() {
      return Ls;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const t2 of this._observableSections.values()) this._observer.observe(t2);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.target = a(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (P.off(this._config.target, As), P.on(this._config.target, As, Cs, (t2) => {
        const e2 = this._observableSections.get(t2.target.hash);
        if (e2) {
          t2.preventDefault();
          const i2 = this._rootElement || window, n2 = e2.offsetTop - this._element.offsetTop;
          if (i2.scrollTo) return void i2.scrollTo({ top: n2, behavior: "smooth" });
          i2.scrollTop = n2;
        }
      }));
    }
    _getNewObserver() {
      const t2 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
      return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
    }
    _observerCallback(t2) {
      const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), i2 = (t3) => {
        this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
      }, n2 = (this._rootElement || document.documentElement).scrollTop, s2 = n2 >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n2;
      for (const o2 of t2) {
        if (!o2.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e2(o2));
          continue;
        }
        const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s2 && t3) {
          if (i2(o2), !n2) return;
        } else s2 || t3 || i2(o2);
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
      const t2 = R.find(Cs, this._config.target);
      for (const e2 of t2) {
        if (!e2.hash || c(e2)) continue;
        const t3 = R.findOne(decodeURI(e2.hash), this._element);
        l(t3) && (this._targetLinks.set(decodeURI(e2.hash), e2), this._observableSections.set(e2.hash, t3));
      }
    }
    _process(t2) {
      this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(Ts), this._activateParents(t2), P.trigger(this._element, ws, { relatedTarget: t2 }));
    }
    _activateParents(t2) {
      if (t2.classList.contains("dropdown-item")) R.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(Ts);
      else for (const e2 of R.parents(t2, ".nav, .list-group")) for (const t3 of R.prev(e2, xs)) t3.classList.add(Ts);
    }
    _clearActiveClass(t2) {
      t2.classList.remove(Ts);
      const e2 = R.find(`${Cs}.${Ts}`, t2);
      for (const t3 of e2) t3.classList.remove(Ts);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Ss.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  P.on(window, Es, () => {
    for (const t2 of R.find('[data-bs-spy="scroll"]')) Ss.getOrCreateInstance(t2);
  }), g(Ss);
  const Ds = ".bs.tab", $s = `hide${Ds}`, Is = `hidden${Ds}`, Ns = `show${Ds}`, Ps = `shown${Ds}`, js = `click${Ds}`, Ms = `keydown${Ds}`, Fs = `load${Ds}`, Hs = "ArrowLeft", Ws = "ArrowRight", Bs = "ArrowUp", zs = "ArrowDown", Rs = "Home", qs = "End", Vs = "active", Ks = "fade", Qs = "show", Xs = ".dropdown-toggle", Ys = `:not(${Xs})`, Us = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Gs = `.nav-link${Ys}, .list-group-item${Ys}, [role="tab"]${Ys}, ${Us}`, Js = `.${Vs}[data-bs-toggle="tab"], .${Vs}[data-bs-toggle="pill"], .${Vs}[data-bs-toggle="list"]`;
  class Zs extends B {
    constructor(t2) {
      super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, Ms, (t3) => this._keydown(t3)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t2 = this._element;
      if (this._elemIsActive(t2)) return;
      const e2 = this._getActiveElem(), i2 = e2 ? P.trigger(e2, $s, { relatedTarget: t2 }) : null;
      P.trigger(t2, Ns, { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
    }
    _activate(t2, e2) {
      t2 && (t2.classList.add(Vs), this._activate(R.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), P.trigger(t2, Ps, { relatedTarget: e2 })) : t2.classList.add(Qs);
      }, t2, t2.classList.contains(Ks)));
    }
    _deactivate(t2, e2) {
      t2 && (t2.classList.remove(Vs), t2.blur(), this._deactivate(R.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), P.trigger(t2, Is, { relatedTarget: e2 })) : t2.classList.remove(Qs);
      }, t2, t2.classList.contains(Ks)));
    }
    _keydown(t2) {
      if (![Hs, Ws, Bs, zs, Rs, qs].includes(t2.key)) return;
      t2.stopPropagation(), t2.preventDefault();
      const e2 = this._getChildren().filter((t3) => !c(t3));
      let i2;
      if ([Rs, qs].includes(t2.key)) i2 = e2[t2.key === Rs ? 0 : e2.length - 1];
      else {
        const n2 = [Ws, zs].includes(t2.key);
        i2 = v(e2, t2.target, n2, true);
      }
      i2 && (i2.focus({ preventScroll: true }), Zs.getOrCreateInstance(i2).show());
    }
    _getChildren() {
      return R.find(Gs, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
    }
    _setInitialAttributes(t2, e2) {
      this._setAttributeIfNotExists(t2, "role", "tablist");
      for (const t3 of e2) this._setInitialAttributesOnChild(t3);
    }
    _setInitialAttributesOnChild(t2) {
      t2 = this._getInnerElement(t2);
      const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
      t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
    }
    _setInitialAttributesOnTargetPanel(t2) {
      const e2 = R.getElementFromSelector(t2);
      e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `${t2.id}`));
    }
    _toggleDropDown(t2, e2) {
      const i2 = this._getOuterElement(t2);
      if (!i2.classList.contains("dropdown")) return;
      const n2 = (t3, n3) => {
        const s2 = R.findOne(t3, i2);
        s2 && s2.classList.toggle(n3, e2);
      };
      n2(Xs, Vs), n2(".dropdown-menu", Qs), i2.setAttribute("aria-expanded", e2);
    }
    _setAttributeIfNotExists(t2, e2, i2) {
      t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
    }
    _elemIsActive(t2) {
      return t2.classList.contains(Vs);
    }
    _getInnerElement(t2) {
      return t2.matches(Gs) ? t2 : R.findOne(Gs, t2);
    }
    _getOuterElement(t2) {
      return t2.closest(".nav-item, .list-group-item") || t2;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Zs.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  P.on(document, js, Us, function(t2) {
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), c(this) || Zs.getOrCreateInstance(this).show();
  }), P.on(window, Fs, () => {
    for (const t2 of R.find(Js)) Zs.getOrCreateInstance(t2);
  }), g(Zs);
  const to = ".bs.toast", eo = `mouseover${to}`, io = `mouseout${to}`, no = `focusin${to}`, so = `focusout${to}`, oo = `hide${to}`, ro = `hidden${to}`, ao = `show${to}`, lo = `shown${to}`, co = "hide", ho = "show", uo = "showing", fo = { animation: "boolean", autohide: "boolean", delay: "number" }, po = { animation: true, autohide: true, delay: 5e3 };
  class mo extends B {
    constructor(t2, e2) {
      super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get Default() {
      return po;
    }
    static get DefaultType() {
      return fo;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      P.trigger(this._element, ao).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(co), u(this._element), this._element.classList.add(ho, uo), this._queueCallback(() => {
        this._element.classList.remove(uo), P.trigger(this._element, lo), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
    hide() {
      this.isShown() && (P.trigger(this._element, oo).defaultPrevented || (this._element.classList.add(uo), this._queueCallback(() => {
        this._element.classList.add(co), this._element.classList.remove(uo, ho), P.trigger(this._element, ro);
      }, this._element, this._config.animation)));
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(ho), super.dispose();
    }
    isShown() {
      return this._element.classList.contains(ho);
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(t2, e2) {
      switch (t2.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e2;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e2;
      }
      if (e2) return void this._clearTimeout();
      const i2 = t2.relatedTarget;
      this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, eo, (t2) => this._onInteraction(t2, true)), P.on(this._element, io, (t2) => this._onInteraction(t2, false)), P.on(this._element, no, (t2) => this._onInteraction(t2, true)), P.on(this._element, so, (t2) => this._onInteraction(t2, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = mo.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  return q(mo), g(mo), { Alert: X, Button: U, Carousel: St, Collapse: qt, Dropdown: Qi, Modal: Ln, Offcanvas: Qn, Popover: vs, ScrollSpy: Ss, Tab: Zs, Toast: mo, Tooltip: ps };
});
typeof navigator === "object" && (function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define("Plyr", factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Plyr = factory());
})(this, (function() {
  "use strict";
  function _defineProperty$1(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r);
    }
  }
  function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
  }
  function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n, e;
  }
  function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(t2) {
        return Object.getOwnPropertyDescriptor(e, t2).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function _objectSpread2(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ownKeys(Object(n), true).forEach(function(t2) {
        _defineProperty(e, t2, n[t2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t2) {
        Object.defineProperty(e, t2, Object.getOwnPropertyDescriptor(n, t2));
      });
    }
    return e;
  }
  var defaults$1 = {
    addCSS: true,
    thumbWidth: 15,
    watch: true
  };
  function matches$1(e, t) {
    return function() {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }.call(e, t);
  }
  function trigger(e, t) {
    if (e && t) {
      var n = new Event(t, {
        bubbles: true
      });
      e.dispatchEvent(n);
    }
  }
  var getConstructor$1 = function(e) {
    return null != e ? e.constructor : null;
  }, instanceOf$1 = function(e, t) {
    return !!(e && t && e instanceof t);
  }, isNullOrUndefined$1 = function(e) {
    return null == e;
  }, isObject$1 = function(e) {
    return getConstructor$1(e) === Object;
  }, isNumber$1 = function(e) {
    return getConstructor$1(e) === Number && !Number.isNaN(e);
  }, isString$1 = function(e) {
    return getConstructor$1(e) === String;
  }, isBoolean$1 = function(e) {
    return getConstructor$1(e) === Boolean;
  }, isFunction$1 = function(e) {
    return getConstructor$1(e) === Function;
  }, isArray$1 = function(e) {
    return Array.isArray(e);
  }, isNodeList$1 = function(e) {
    return instanceOf$1(e, NodeList);
  }, isElement$1 = function(e) {
    return instanceOf$1(e, Element);
  }, isEvent$1 = function(e) {
    return instanceOf$1(e, Event);
  }, isEmpty$1 = function(e) {
    return isNullOrUndefined$1(e) || (isString$1(e) || isArray$1(e) || isNodeList$1(e)) && !e.length || isObject$1(e) && !Object.keys(e).length;
  }, is$1 = {
    nullOrUndefined: isNullOrUndefined$1,
    object: isObject$1,
    number: isNumber$1,
    string: isString$1,
    boolean: isBoolean$1,
    function: isFunction$1,
    array: isArray$1,
    nodeList: isNodeList$1,
    element: isElement$1,
    event: isEvent$1,
    empty: isEmpty$1
  };
  function getDecimalPlaces(e) {
    var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
  }
  function round(e, t) {
    if (1 > t) {
      var n = getDecimalPlaces(t);
      return parseFloat(e.toFixed(n));
    }
    return Math.round(e / t) * t;
  }
  var RangeTouch = (function() {
    function e(t, n) {
      _classCallCheck(this, e), is$1.element(t) ? this.element = t : is$1.string(t) && (this.element = document.querySelector(t)), is$1.element(this.element) && is$1.empty(this.element.rangeTouch) && (this.config = _objectSpread2({}, defaults$1, {}, n), this.init());
    }
    return _createClass(e, [{
      key: "init",
      value: function() {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
      }
    }, {
      key: "destroy",
      value: function() {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
      }
    }, {
      key: "listeners",
      value: function(e2) {
        var t = this, n = e2 ? "addEventListener" : "removeEventListener";
        ["touchstart", "touchmove", "touchend"].forEach(function(e3) {
          t.element[n](e3, function(e4) {
            return t.set(e4);
          }, false);
        });
      }
    }, {
      key: "get",
      value: function(t) {
        if (!e.enabled || !is$1.event(t)) return null;
        var n, r = t.target, i = t.changedTouches[0], o = parseFloat(r.getAttribute("min")) || 0, s = parseFloat(r.getAttribute("max")) || 100, u = parseFloat(r.getAttribute("step")) || 1, c = r.getBoundingClientRect(), a = 100 / c.width * (this.config.thumbWidth / 2) / 100;
        return 0 > (n = 100 / c.width * (i.clientX - c.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * a : 50 < n && (n += 2 * (n - 50) * a), o + round(n / 100 * (s - o), u);
      }
    }, {
      key: "set",
      value: function(t) {
        e.enabled && is$1.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), trigger(t.target, "touchend" === t.type ? "change" : "input"));
      }
    }], [{
      key: "setup",
      value: function(t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = null;
        if (is$1.empty(t) || is$1.string(t) ? r = Array.from(document.querySelectorAll(is$1.string(t) ? t : 'input[type="range"]')) : is$1.element(t) ? r = [t] : is$1.nodeList(t) ? r = Array.from(t) : is$1.array(t) && (r = t.filter(is$1.element)), is$1.empty(r)) return null;
        var i = _objectSpread2({}, defaults$1, {}, n);
        if (is$1.string(t) && i.watch) {
          var o = new MutationObserver(function(n2) {
            Array.from(n2).forEach(function(n3) {
              Array.from(n3.addedNodes).forEach(function(n4) {
                is$1.element(n4) && matches$1(n4, t) && new e(n4, i);
              });
            });
          });
          o.observe(document.body, {
            childList: true,
            subtree: true
          });
        }
        return r.map(function(t2) {
          return new e(t2, n);
        });
      }
    }, {
      key: "enabled",
      get: function() {
        return "ontouchstart" in document.documentElement;
      }
    }]), e;
  })();
  const getConstructor = (input) => input !== null && typeof input !== "undefined" ? input.constructor : null;
  const instanceOf = (input, constructor) => Boolean(input && constructor && input instanceof constructor);
  const isNullOrUndefined = (input) => input === null || typeof input === "undefined";
  const isObject = (input) => getConstructor(input) === Object;
  const isNumber = (input) => getConstructor(input) === Number && !Number.isNaN(input);
  const isString = (input) => getConstructor(input) === String;
  const isBoolean = (input) => getConstructor(input) === Boolean;
  const isFunction = (input) => typeof input === "function";
  const isArray = (input) => Array.isArray(input);
  const isWeakMap = (input) => instanceOf(input, WeakMap);
  const isNodeList = (input) => instanceOf(input, NodeList);
  const isTextNode = (input) => getConstructor(input) === Text;
  const isEvent = (input) => instanceOf(input, Event);
  const isKeyboardEvent = (input) => instanceOf(input, KeyboardEvent);
  const isCue = (input) => instanceOf(input, window.TextTrackCue) || instanceOf(input, window.VTTCue);
  const isTrack = (input) => instanceOf(input, TextTrack) || !isNullOrUndefined(input) && isString(input.kind);
  const isPromise = (input) => instanceOf(input, Promise) && isFunction(input.then);
  function isElement(input) {
    return input !== null && typeof input === "object" && input.nodeType === 1 && typeof input.style === "object" && typeof input.ownerDocument === "object";
  }
  function isEmpty(input) {
    return isNullOrUndefined(input) || (isString(input) || isArray(input) || isNodeList(input)) && !input.length || isObject(input) && !Object.keys(input).length;
  }
  function isUrl(input) {
    if (instanceOf(input, window.URL)) {
      return true;
    }
    if (!isString(input)) {
      return false;
    }
    let string = input;
    if (!input.startsWith("http://") || !input.startsWith("https://")) {
      string = `http://${input}`;
    }
    try {
      return !isEmpty(new URL(string).hostname);
    } catch {
      return false;
    }
  }
  var is = {
    nullOrUndefined: isNullOrUndefined,
    object: isObject,
    number: isNumber,
    string: isString,
    boolean: isBoolean,
    function: isFunction,
    array: isArray,
    weakMap: isWeakMap,
    nodeList: isNodeList,
    element: isElement,
    textNode: isTextNode,
    event: isEvent,
    keyboardEvent: isKeyboardEvent,
    cue: isCue,
    track: isTrack,
    promise: isPromise,
    url: isUrl,
    empty: isEmpty
  };
  const transitionEndEvent = (() => {
    const element = document.createElement("span");
    const events = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    const type = Object.keys(events).find((event) => element.style[event] !== void 0);
    return is.string(type) ? events[type] : false;
  })();
  function repaint(element, delay) {
    setTimeout(() => {
      try {
        element.hidden = true;
        element.offsetHeight;
        element.hidden = false;
      } catch {
      }
    }, delay);
  }
  function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  }
  function getDeep(object, path) {
    return path.split(".").reduce((obj, key) => obj && obj[key], object);
  }
  function extend(target = {}, ...sources) {
    if (!sources.length) {
      return target;
    }
    const source2 = sources.shift();
    if (!is.object(source2)) {
      return target;
    }
    Object.keys(source2).forEach((key) => {
      if (is.object(source2[key])) {
        if (!Object.keys(target).includes(key)) {
          Object.assign(target, {
            [key]: {}
          });
        }
        extend(target[key], source2[key]);
      } else {
        Object.assign(target, {
          [key]: source2[key]
        });
      }
    });
    return extend(target, ...sources);
  }
  function wrap(elements, wrapper) {
    const targets = elements.length ? elements : [elements];
    Array.from(targets).reverse().forEach((element, index) => {
      const child = index > 0 ? wrapper.cloneNode(true) : wrapper;
      const parent = element.parentNode;
      const sibling = element.nextSibling;
      child.appendChild(element);
      if (sibling) {
        parent.insertBefore(child, sibling);
      } else {
        parent.appendChild(child);
      }
    });
  }
  function setAttributes(element, attributes) {
    if (!is.element(element) || is.empty(attributes)) return;
    Object.entries(attributes).filter(([, value]) => !is.nullOrUndefined(value)).forEach(([key, value]) => element.setAttribute(key, value));
  }
  function createElement(type, attributes, text) {
    const element = document.createElement(type);
    if (is.object(attributes)) {
      setAttributes(element, attributes);
    }
    if (is.string(text)) {
      element.textContent = text;
    }
    return element;
  }
  function insertAfter(element, target) {
    if (!is.element(element) || !is.element(target)) return;
    target.parentNode.insertBefore(element, target.nextSibling);
  }
  function insertElement(type, parent, attributes, text) {
    if (!is.element(parent)) return;
    parent.appendChild(createElement(type, attributes, text));
  }
  function removeElement(element) {
    if (is.nodeList(element) || is.array(element)) {
      Array.from(element).forEach(removeElement);
      return;
    }
    if (!is.element(element) || !is.element(element.parentNode)) {
      return;
    }
    element.parentNode.removeChild(element);
  }
  function emptyElement(element) {
    if (!is.element(element)) return;
    let {
      length
    } = element.childNodes;
    while (length > 0) {
      element.removeChild(element.lastChild);
      length -= 1;
    }
  }
  function replaceElement(newChild, oldChild) {
    if (!is.element(oldChild) || !is.element(oldChild.parentNode) || !is.element(newChild)) return null;
    oldChild.parentNode.replaceChild(newChild, oldChild);
    return newChild;
  }
  function getAttributesFromSelector(sel, existingAttributes) {
    if (!is.string(sel) || is.empty(sel)) return {};
    const attributes = {};
    const existing = extend({}, existingAttributes);
    sel.split(",").forEach((s) => {
      const selector = s.trim();
      const className = selector.replace(".", "");
      const stripped = selector.replace(/[[\]]/g, "");
      const parts = stripped.split("=");
      const [key] = parts;
      const value = parts.length > 1 ? parts[1].replace(/["']/g, "") : "";
      const start = selector.charAt(0);
      switch (start) {
        case ".":
          if (is.string(existing.class)) {
            attributes.class = `${existing.class} ${className}`;
          } else {
            attributes.class = className;
          }
          break;
        case "#":
          attributes.id = selector.replace("#", "");
          break;
        case "[":
          attributes[key] = value;
          break;
      }
    });
    return extend(existing, attributes);
  }
  function toggleHidden(element, hidden) {
    if (!is.element(element)) return;
    let hide = hidden;
    if (!is.boolean(hide)) {
      hide = !element.hidden;
    }
    element.hidden = hide;
  }
  function toggleClass(element, className, force) {
    if (is.nodeList(element)) {
      return Array.from(element).map((e) => toggleClass(e, className, force));
    }
    if (is.element(element)) {
      let method = "toggle";
      if (typeof force !== "undefined") {
        method = force ? "add" : "remove";
      }
      element.classList[method](className);
      return element.classList.contains(className);
    }
    return false;
  }
  function hasClass(element, className) {
    return is.element(element) && element.classList.contains(className);
  }
  function matches(element, selector) {
    const {
      prototype
    } = Element;
    function match() {
      return Array.from(document.querySelectorAll(selector)).includes(this);
    }
    const method = prototype.matches || prototype.webkitMatchesSelector || prototype.mozMatchesSelector || prototype.msMatchesSelector || match;
    return method.call(element, selector);
  }
  function closest$1(element, selector) {
    const {
      prototype
    } = Element;
    function closestElement() {
      let el = this;
      do {
        if (matches.matches(el, selector)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    }
    const method = prototype.closest || closestElement;
    return method.call(element, selector);
  }
  function getElements(selector) {
    return this.elements.container.querySelectorAll(selector);
  }
  function getElement(selector) {
    return this.elements.container.querySelector(selector);
  }
  function setFocus(element = null, focusVisible = false) {
    if (!is.element(element)) return;
    element.focus({
      preventScroll: true,
      focusVisible
    });
  }
  const defaultCodecs = {
    "audio/ogg": "vorbis",
    "audio/wav": "1",
    "video/webm": "vp8, vorbis",
    "video/mp4": "avc1.42E01E, mp4a.40.2",
    "video/ogg": "theora"
  };
  const support = {
    // Basic support
    audio: "canPlayType" in document.createElement("audio"),
    video: "canPlayType" in document.createElement("video"),
    // Check for support
    // Basic functionality vs full UI
    check(type, provider) {
      const api = support[type] || provider !== "html5";
      const ui2 = api && support.rangeInput;
      return {
        api,
        ui: ui2
      };
    },
    // Picture-in-picture support
    pip: (() => {
      return document.pictureInPictureEnabled && !createElement("video").disablePictureInPicture;
    })(),
    // Airplay support
    // Safari only currently
    airplay: is.function(window.WebKitPlaybackTargetAvailabilityEvent),
    // Inline playback support
    // https://webkit.org/blog/6784/new-video-policies-for-ios/
    playsinline: "playsInline" in document.createElement("video"),
    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html
    // Related: http://www.leanbackplayer.com/test/h5mt.html
    mime(input) {
      if (is.empty(input)) {
        return false;
      }
      const [mediaType] = input.split("/");
      let type = input;
      if (!this.isHTML5 || mediaType !== this.type) {
        return false;
      }
      if (Object.keys(defaultCodecs).includes(type)) {
        type += `; codecs="${defaultCodecs[input]}"`;
      }
      try {
        return Boolean(type && this.media.canPlayType(type).replace(/no/, ""));
      } catch {
        return false;
      }
    },
    // Check for textTracks support
    textTracks: "textTracks" in document.createElement("video"),
    // <input type="range"> Sliders
    rangeInput: (() => {
      const range = document.createElement("input");
      range.type = "range";
      return range.type === "range";
    })(),
    // Touch
    // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
    touch: "ontouchstart" in document.documentElement,
    // Detect transitions support
    transitions: transitionEndEvent !== false,
    // Reduced motion iOS & MacOS setting
    // https://webkit.org/blog/7551/responsive-design-for-motion/
    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
  };
  const supportsPassiveListeners = (() => {
    let supported = false;
    try {
      const options = Object.defineProperty({}, "passive", {
        get() {
          supported = true;
          return null;
        }
      });
      window.addEventListener("test", null, options);
      window.removeEventListener("test", null, options);
    } catch {
    }
    return supported;
  })();
  function toggleListener(element, event, callback, toggle = false, passive = true, capture = false) {
    if (!element || !("addEventListener" in element) || is.empty(event) || !is.function(callback)) {
      return;
    }
    const events = event.split(" ");
    let options = capture;
    if (supportsPassiveListeners) {
      options = {
        // Whether the listener can be passive (i.e. default never prevented)
        passive,
        // Whether the listener is a capturing listener or not
        capture
      };
    }
    events.forEach((type) => {
      if (this && this.eventListeners && toggle) {
        this.eventListeners.push({
          element,
          type,
          callback,
          options
        });
      }
      element[toggle ? "addEventListener" : "removeEventListener"](type, callback, options);
    });
  }
  function on(element, events = "", callback, passive = true, capture = false) {
    toggleListener.call(this, element, events, callback, true, passive, capture);
  }
  function off(element, events = "", callback, passive = true, capture = false) {
    toggleListener.call(this, element, events, callback, false, passive, capture);
  }
  function once(element, events = "", callback, passive = true, capture = false) {
    const onceCallback = (...args) => {
      off(element, events, onceCallback, passive, capture);
      callback.apply(this, args);
    };
    toggleListener.call(this, element, events, onceCallback, true, passive, capture);
  }
  function triggerEvent(element, type = "", bubbles = false, detail = {}) {
    if (!is.element(element) || is.empty(type)) {
      return;
    }
    const event = new CustomEvent(type, {
      bubbles,
      detail: {
        ...detail,
        plyr: this
      }
    });
    element.dispatchEvent(event);
  }
  function unbindListeners() {
    if (this && this.eventListeners) {
      this.eventListeners.forEach((item) => {
        const {
          element,
          type,
          callback,
          options
        } = item;
        element.removeEventListener(type, callback, options);
      });
      this.eventListeners = [];
    }
  }
  function ready() {
    return new Promise((resolve) => this.ready ? setTimeout(resolve, 0) : on.call(this, this.elements.container, "ready", resolve)).then(() => {
    });
  }
  function silencePromise(value) {
    if (is.promise(value)) {
      value.then(null, () => {
      });
    }
  }
  function dedupe(array) {
    if (!is.array(array)) {
      return array;
    }
    return array.filter((item, index) => array.indexOf(item) === index);
  }
  function closest(array, value) {
    if (!is.array(array) || !array.length) {
      return null;
    }
    return array.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
  }
  function supportsCSS(declaration) {
    if (!window || !window.CSS) {
      return false;
    }
    return window.CSS.supports(declaration);
  }
  const standardRatios = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((out, [x, y]) => ({
    ...out,
    [x / y]: [x, y]
  }), {});
  function validateAspectRatio(input) {
    if (!is.array(input) && (!is.string(input) || !input.includes(":"))) {
      return false;
    }
    const ratio = is.array(input) ? input : input.split(":");
    return ratio.map(Number).every(is.number);
  }
  function reduceAspectRatio(ratio) {
    if (!is.array(ratio) || !ratio.every(is.number)) {
      return null;
    }
    const [width, height] = ratio;
    const getDivider = (w, h) => h === 0 ? w : getDivider(h, w % h);
    const divider = getDivider(width, height);
    return [width / divider, height / divider];
  }
  function getAspectRatio(input) {
    const parse = (ratio2) => validateAspectRatio(ratio2) ? ratio2.split(":").map(Number) : null;
    let ratio = parse(input);
    if (ratio === null) {
      ratio = parse(this.config.ratio);
    }
    if (ratio === null && !is.empty(this.embed) && is.array(this.embed.ratio)) {
      ({
        ratio
      } = this.embed);
    }
    if (ratio === null && this.isHTML5) {
      const {
        videoWidth,
        videoHeight
      } = this.media;
      ratio = [videoWidth, videoHeight];
    }
    return reduceAspectRatio(ratio);
  }
  function setAspectRatio(input) {
    if (!this.isVideo) {
      return {};
    }
    const {
      wrapper
    } = this.elements;
    const ratio = getAspectRatio.call(this, input);
    if (!is.array(ratio)) {
      return {};
    }
    const [x, y] = reduceAspectRatio(ratio);
    const useNative = supportsCSS(`aspect-ratio: ${x}/${y}`);
    const padding = 100 / x * y;
    if (useNative) {
      wrapper.style.aspectRatio = `${x}/${y}`;
    } else {
      wrapper.style.paddingBottom = `${padding}%`;
    }
    if (this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      const height = 100 / this.media.offsetWidth * Number.parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
      const offset = (height - padding) / (height / 50);
      if (this.fullscreen.active) {
        wrapper.style.paddingBottom = null;
      } else {
        this.media.style.transform = `translateY(-${offset}%)`;
      }
    } else if (this.isHTML5) {
      wrapper.classList.add(this.config.classNames.videoFixedRatio);
    }
    return {
      padding,
      ratio
    };
  }
  function roundAspectRatio(x, y, tolerance = 0.05) {
    const ratio = x / y;
    const closestRatio = closest(Object.keys(standardRatios), ratio);
    if (Math.abs(closestRatio - ratio) <= tolerance) {
      return standardRatios[closestRatio];
    }
    return [x, y];
  }
  function getViewportSize() {
    const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return [width, height];
  }
  const html5 = {
    getSources() {
      if (!this.isHTML5) {
        return [];
      }
      const sources = Array.from(this.media.querySelectorAll("source"));
      return sources.filter((source2) => {
        const type = source2.getAttribute("type");
        if (is.empty(type)) {
          return true;
        }
        return support.mime.call(this, type);
      });
    },
    // Get quality levels
    getQualityOptions() {
      if (this.config.quality.forced) {
        return this.config.quality.options;
      }
      return html5.getSources.call(this).map((source2) => Number(source2.getAttribute("size"))).filter(Boolean);
    },
    setup() {
      if (!this.isHTML5) {
        return;
      }
      const player = this;
      player.options.speed = player.config.speed.options;
      if (!is.empty(this.config.ratio)) {
        setAspectRatio.call(player);
      }
      Object.defineProperty(player.media, "quality", {
        get() {
          const sources = html5.getSources.call(player);
          const source2 = sources.find((s) => s.getAttribute("src") === player.source);
          return source2 && Number(source2.getAttribute("size"));
        },
        set(input) {
          if (player.quality === input) {
            return;
          }
          if (player.config.quality.forced && is.function(player.config.quality.onChange)) {
            player.config.quality.onChange(input);
          } else {
            const sources = html5.getSources.call(player);
            const source2 = sources.find((s) => Number(s.getAttribute("size")) === input);
            if (!source2) {
              return;
            }
            const {
              currentTime,
              paused,
              preload,
              readyState,
              playbackRate
            } = player.media;
            player.media.src = source2.getAttribute("src");
            if (preload !== "none" || readyState) {
              player.once("loadedmetadata", () => {
                player.speed = playbackRate;
                player.currentTime = currentTime;
                if (!paused) {
                  silencePromise(player.play());
                }
              });
              player.media.load();
            }
          }
          triggerEvent.call(player, player.media, "qualitychange", false, {
            quality: input
          });
        }
      });
    },
    // Cancel current network requests
    // See https://github.com/sampotts/plyr/issues/174
    cancelRequests() {
      if (!this.isHTML5) {
        return;
      }
      removeElement(html5.getSources.call(this));
      this.media.setAttribute("src", this.config.blankVideo);
      this.media.load();
      this.debug.log("Cancelled network requests");
    }
  };
  const isIE = Boolean(window.document.documentMode);
  const isEdge = /Edge/.test(navigator.userAgent);
  const isWebKit = "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent);
  const isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  const isIos = /iPad|iPhone|iPod/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  var browser = {
    isIE,
    isEdge,
    isWebKit,
    isIPadOS,
    isIos
  };
  function generateId(prefix) {
    return `${prefix}-${Math.floor(Math.random() * 1e4)}`;
  }
  function format(input, ...args) {
    if (is.empty(input)) return input;
    return input.toString().replace(/\{(\d+)\}/g, (_, i) => args[i].toString());
  }
  function getPercentage(current, max) {
    if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
      return 0;
    }
    return (current / max * 100).toFixed(2);
  }
  function replaceAll(input = "", find = "", replace = "") {
    return input.replace(new RegExp(find.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), replace.toString());
  }
  function toTitleCase(input = "") {
    return input.toString().replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
  }
  function toPascalCase(input = "") {
    let string = input.toString();
    string = replaceAll(string, "-", " ");
    string = replaceAll(string, "_", " ");
    string = toTitleCase(string);
    return replaceAll(string, " ", "");
  }
  function toCamelCase(input = "") {
    let string = input.toString();
    string = toPascalCase(string);
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  function stripHTML(source2) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement("div");
    fragment.appendChild(element);
    element.innerHTML = source2;
    return fragment.firstChild.textContent;
  }
  function getHTML(element) {
    const wrapper = document.createElement("div");
    wrapper.appendChild(element);
    return wrapper.innerHTML;
  }
  const resources = {
    pip: "PIP",
    airplay: "AirPlay",
    html5: "HTML5",
    vimeo: "Vimeo",
    youtube: "YouTube"
  };
  const i18n = {
    get(key = "", config = {}) {
      if (is.empty(key) || is.empty(config)) {
        return "";
      }
      let string = getDeep(config.i18n, key);
      if (is.empty(string)) {
        if (Object.keys(resources).includes(key)) {
          return resources[key];
        }
        return "";
      }
      const replace = {
        "{seektime}": config.seekTime,
        "{title}": config.title
      };
      Object.entries(replace).forEach(([k, v]) => {
        string = replaceAll(string, k, v);
      });
      return string;
    }
  };
  class Storage {
    constructor(player) {
      _defineProperty$1(this, "get", (key) => {
        if (!Storage.supported || !this.enabled) {
          return null;
        }
        const store = window.localStorage.getItem(this.key);
        if (is.empty(store)) return null;
        const json = JSON.parse(store);
        return is.string(key) && key.length ? json[key] : json;
      });
      _defineProperty$1(this, "set", (object) => {
        if (!Storage.supported || !this.enabled) {
          return;
        }
        if (!is.object(object)) {
          return;
        }
        let storage = this.get();
        if (is.empty(storage)) {
          storage = {};
        }
        extend(storage, object);
        try {
          window.localStorage.setItem(this.key, JSON.stringify(storage));
        } catch {
        }
      });
      this.enabled = player.config.storage.enabled;
      this.key = player.config.storage.key;
    }
    // Check for actual support (see if we can use it)
    static get supported() {
      try {
        if (!("localStorage" in window)) return false;
        const test = "___test";
        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    }
  }
  function fetch(url, responseType = "text", withCredentials = false) {
    return new Promise((resolve, reject) => {
      try {
        const request = new XMLHttpRequest();
        if (!("withCredentials" in request)) return;
        if (withCredentials) {
          request.withCredentials = true;
        }
        request.addEventListener("load", () => {
          if (responseType === "text") {
            try {
              resolve(JSON.parse(request.responseText));
            } catch {
              resolve(request.responseText);
            }
          } else {
            resolve(request.response);
          }
        });
        request.addEventListener("error", () => {
          throw new Error(request.status);
        });
        request.open("GET", url, true);
        request.responseType = responseType;
        request.send();
      } catch (error) {
        reject(error);
      }
    });
  }
  function loadSprite(url, id) {
    if (!is.string(url)) {
      return;
    }
    const prefix = "cache";
    const hasId = is.string(id);
    let isCached = false;
    const exists = () => document.getElementById(id) !== null;
    const update = (container, data) => {
      container.innerHTML = data;
      if (hasId && exists()) {
        return;
      }
      document.body.insertAdjacentElement("afterbegin", container);
    };
    if (!hasId || !exists()) {
      const useStorage = Storage.supported;
      const container = document.createElement("div");
      container.setAttribute("hidden", "");
      if (hasId) {
        container.setAttribute("id", id);
      }
      if (useStorage) {
        const cached = window.localStorage.getItem(`${prefix}-${id}`);
        isCached = cached !== null;
        if (isCached) {
          const data = JSON.parse(cached);
          update(container, data.content);
        }
      }
      fetch(url).then((result) => {
        if (is.empty(result)) {
          return;
        }
        if (useStorage) {
          try {
            window.localStorage.setItem(`${prefix}-${id}`, JSON.stringify({
              content: result
            }));
          } catch {
          }
        }
        update(container, result);
      }).catch(() => {
      });
    }
  }
  const getHours = (value) => Math.trunc(value / 60 / 60 % 60, 10);
  const getMinutes = (value) => Math.trunc(value / 60 % 60, 10);
  const getSeconds = (value) => Math.trunc(value % 60, 10);
  function formatTime(time = 0, displayHours = false, inverted = false) {
    if (!is.number(time)) {
      return formatTime(void 0, displayHours, inverted);
    }
    const format2 = (value) => `0${value}`.slice(-2);
    let hours = getHours(time);
    const mins = getMinutes(time);
    const secs = getSeconds(time);
    if (displayHours || hours > 0) {
      hours = `${hours}:`;
    } else {
      hours = "";
    }
    return `${inverted && time > 0 ? "-" : ""}${hours}${format2(mins)}:${format2(secs)}`;
  }
  const controls = {
    // Get icon URL
    getIconUrl() {
      const url = new URL(this.config.iconUrl, window.location);
      const host = window.location.host ? window.location.host : window.top.location.host;
      const cors = url.host !== host || browser.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors
      };
    },
    // Find the UI controls
    findElements() {
      try {
        this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper);
        this.elements.buttons = {
          play: getElements.call(this, this.config.selectors.buttons.play),
          pause: getElement.call(this, this.config.selectors.buttons.pause),
          restart: getElement.call(this, this.config.selectors.buttons.restart),
          rewind: getElement.call(this, this.config.selectors.buttons.rewind),
          fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
          mute: getElement.call(this, this.config.selectors.buttons.mute),
          pip: getElement.call(this, this.config.selectors.buttons.pip),
          airplay: getElement.call(this, this.config.selectors.buttons.airplay),
          settings: getElement.call(this, this.config.selectors.buttons.settings),
          captions: getElement.call(this, this.config.selectors.buttons.captions),
          fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
        };
        this.elements.progress = getElement.call(this, this.config.selectors.progress);
        this.elements.inputs = {
          seek: getElement.call(this, this.config.selectors.inputs.seek),
          volume: getElement.call(this, this.config.selectors.inputs.volume)
        };
        this.elements.display = {
          buffer: getElement.call(this, this.config.selectors.display.buffer),
          currentTime: getElement.call(this, this.config.selectors.display.currentTime),
          duration: getElement.call(this, this.config.selectors.display.duration)
        };
        if (is.element(this.elements.progress)) {
          this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`);
        }
        return true;
      } catch (error) {
        this.debug.warn("It looks like there is a problem with your custom controls HTML", error);
        this.toggleNativeControls(true);
        return false;
      }
    },
    // Create <svg> icon
    createIcon(type, attributes) {
      const namespace = "http://www.w3.org/2000/svg";
      const iconUrl = controls.getIconUrl.call(this);
      const iconPath = `${!iconUrl.cors ? iconUrl.url : ""}#${this.config.iconPrefix}`;
      const icon = document.createElementNS(namespace, "svg");
      setAttributes(icon, extend(attributes, {
        "aria-hidden": "true",
        "focusable": "false"
      }));
      const use = document.createElementNS(namespace, "use");
      const path = `${iconPath}-${type}`;
      if ("href" in use) {
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", path);
      }
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", path);
      icon.appendChild(use);
      return icon;
    },
    // Create hidden text label
    createLabel(key, attr = {}) {
      const text = i18n.get(key, this.config);
      const attributes = {
        ...attr,
        class: [attr.class, this.config.classNames.hidden].filter(Boolean).join(" ")
      };
      return createElement("span", attributes, text);
    },
    // Create a badge
    createBadge(text) {
      if (is.empty(text)) {
        return null;
      }
      const badge = createElement("span", {
        class: this.config.classNames.menu.value
      });
      badge.appendChild(createElement("span", {
        class: this.config.classNames.menu.badge
      }, text));
      return badge;
    },
    // Create a <button>
    createButton(buttonType, attr) {
      const attributes = extend({}, attr);
      let type = toCamelCase(buttonType);
      const props = {
        element: "button",
        toggle: false,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };
      ["element", "icon", "label"].forEach((key) => {
        if (Object.keys(attributes).includes(key)) {
          props[key] = attributes[key];
          delete attributes[key];
        }
      });
      if (props.element === "button" && !Object.keys(attributes).includes("type")) {
        attributes.type = "button";
      }
      if (Object.keys(attributes).includes("class")) {
        if (!attributes.class.split(" ").includes(this.config.classNames.control)) {
          extend(attributes, {
            class: `${attributes.class} ${this.config.classNames.control}`
          });
        }
      } else {
        attributes.class = this.config.classNames.control;
      }
      switch (buttonType) {
        case "play":
          props.toggle = true;
          props.label = "play";
          props.labelPressed = "pause";
          props.icon = "play";
          props.iconPressed = "pause";
          break;
        case "mute":
          props.toggle = true;
          props.label = "mute";
          props.labelPressed = "unmute";
          props.icon = "volume";
          props.iconPressed = "muted";
          break;
        case "captions":
          props.toggle = true;
          props.label = "enableCaptions";
          props.labelPressed = "disableCaptions";
          props.icon = "captions-off";
          props.iconPressed = "captions-on";
          break;
        case "fullscreen":
          props.toggle = true;
          props.label = "enterFullscreen";
          props.labelPressed = "exitFullscreen";
          props.icon = "enter-fullscreen";
          props.iconPressed = "exit-fullscreen";
          break;
        case "play-large":
          attributes.class += ` ${this.config.classNames.control}--overlaid`;
          type = "play";
          props.label = "play";
          props.icon = "play";
          break;
        default:
          if (is.empty(props.label)) {
            props.label = type;
          }
          if (is.empty(props.icon)) {
            props.icon = buttonType;
          }
      }
      const button = createElement(props.element);
      if (props.toggle) {
        button.appendChild(controls.createIcon.call(this, props.iconPressed, {
          class: "icon--pressed"
        }));
        button.appendChild(controls.createIcon.call(this, props.icon, {
          class: "icon--not-pressed"
        }));
        button.appendChild(controls.createLabel.call(this, props.labelPressed, {
          class: "label--pressed"
        }));
        button.appendChild(controls.createLabel.call(this, props.label, {
          class: "label--not-pressed"
        }));
      } else {
        button.appendChild(controls.createIcon.call(this, props.icon));
        button.appendChild(controls.createLabel.call(this, props.label));
      }
      extend(attributes, getAttributesFromSelector(this.config.selectors.buttons[type], attributes));
      setAttributes(button, attributes);
      if (type === "play") {
        if (!is.array(this.elements.buttons[type])) {
          this.elements.buttons[type] = [];
        }
        this.elements.buttons[type].push(button);
      } else {
        this.elements.buttons[type] = button;
      }
      return button;
    },
    // Create an <input type='range'>
    createRange(type, attributes) {
      const input = createElement("input", extend(getAttributesFromSelector(this.config.selectors.inputs[type]), {
        "type": "range",
        "min": 0,
        "max": 100,
        "step": 0.01,
        "value": 0,
        "autocomplete": "off",
        // A11y fixes for https://github.com/sampotts/plyr/issues/905
        "role": "slider",
        "aria-label": i18n.get(type, this.config),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": 0
      }, attributes));
      this.elements.inputs[type] = input;
      controls.updateRangeFill.call(this, input);
      RangeTouch.setup(input);
      return input;
    },
    // Create a <progress>
    createProgress(type, attributes) {
      const progress = createElement("progress", extend(getAttributesFromSelector(this.config.selectors.display[type]), {
        "min": 0,
        "max": 100,
        "value": 0,
        "role": "progressbar",
        "aria-hidden": true
      }, attributes));
      if (type !== "volume") {
        progress.appendChild(createElement("span", null, "0"));
        const suffixKey = {
          played: "played",
          buffer: "buffered"
        }[type];
        const suffix = suffixKey ? i18n.get(suffixKey, this.config) : "";
        progress.textContent = `% ${suffix.toLowerCase()}`;
      }
      this.elements.display[type] = progress;
      return progress;
    },
    // Create time display
    createTime(type, attrs) {
      const attributes = getAttributesFromSelector(this.config.selectors.display[type], attrs);
      const container = createElement("div", extend(attributes, {
        "class": `${attributes.class ? attributes.class : ""} ${this.config.classNames.display.time} `.trim(),
        "aria-label": i18n.get(type, this.config),
        "role": "timer"
      }), "00:00");
      this.elements.display[type] = container;
      return container;
    },
    // Bind keyboard shortcuts for a menu item
    // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    bindMenuItemShortcuts(menuItem, type) {
      on.call(this, menuItem, "keydown keyup", (event) => {
        if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(event.key)) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        if (event.type === "keydown") {
          return;
        }
        const isRadioButton = matches(menuItem, '[role="menuitemradio"]');
        if (!isRadioButton && [" ", "ArrowRight"].includes(event.key)) {
          controls.showMenuPanel.call(this, type, true);
        } else {
          let target;
          if (event.key !== " ") {
            if (event.key === "ArrowDown" || isRadioButton && event.key === "ArrowRight") {
              target = menuItem.nextElementSibling;
              if (!is.element(target)) {
                target = menuItem.parentNode.firstElementChild;
              }
            } else {
              target = menuItem.previousElementSibling;
              if (!is.element(target)) {
                target = menuItem.parentNode.lastElementChild;
              }
            }
            setFocus.call(this, target, true);
          }
        }
      }, false);
      on.call(this, menuItem, "keyup", (event) => {
        if (event.key !== "Return") return;
        controls.focusFirstMenuItem.call(this, null, true);
      });
    },
    // Create a settings menu item
    createMenuItem({
      value,
      list,
      type,
      title,
      badge = null,
      checked = false
    }) {
      const attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
      const menuItem = createElement("button", extend(attributes, {
        "type": "button",
        "role": "menuitemradio",
        "class": `${this.config.classNames.control} ${attributes.class ? attributes.class : ""}`.trim(),
        "aria-checked": checked,
        value
      }));
      const flex = createElement("span");
      flex.innerHTML = title;
      if (is.element(badge)) {
        flex.appendChild(badge);
      }
      menuItem.appendChild(flex);
      Object.defineProperty(menuItem, "checked", {
        enumerable: true,
        get() {
          return menuItem.getAttribute("aria-checked") === "true";
        },
        set(check) {
          if (check) {
            Array.from(menuItem.parentNode.children).filter((node) => matches(node, '[role="menuitemradio"]')).forEach((node) => node.setAttribute("aria-checked", "false"));
          }
          menuItem.setAttribute("aria-checked", check ? "true" : "false");
        }
      });
      this.listeners.bind(menuItem, "click keyup", (event) => {
        if (is.keyboardEvent(event) && event.key !== " ") {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        menuItem.checked = true;
        switch (type) {
          case "language":
            this.currentTrack = Number(value);
            break;
          case "quality":
            this.quality = value;
            break;
          case "speed":
            this.speed = Number.parseFloat(value);
            break;
        }
        controls.showMenuPanel.call(this, "home", is.keyboardEvent(event));
      }, type, false);
      controls.bindMenuItemShortcuts.call(this, menuItem, type);
      list.appendChild(menuItem);
    },
    // Format a time for display
    formatTime(time = 0, inverted = false) {
      if (!is.number(time)) {
        return time;
      }
      const forceHours = getHours(this.duration) > 0;
      return formatTime(time, forceHours, inverted);
    },
    // Update the displayed time
    updateTimeDisplay(target = null, time = 0, inverted = false) {
      if (!is.element(target) || !is.number(time)) {
        return;
      }
      target.textContent = controls.formatTime(time, inverted);
    },
    // Update volume UI and storage
    updateVolume() {
      if (!this.supported.ui) {
        return;
      }
      if (is.element(this.elements.inputs.volume)) {
        controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
      }
      if (is.element(this.elements.buttons.mute)) {
        this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
      }
    },
    // Update seek value and lower fill
    setRange(target, value = 0) {
      if (!is.element(target)) {
        return;
      }
      target.value = value;
      controls.updateRangeFill.call(this, target);
    },
    // Update <progress> elements
    updateProgress(event) {
      if (!this.supported.ui || !is.event(event)) {
        return;
      }
      let value = 0;
      const setProgress = (target, input) => {
        const val = is.number(input) ? input : 0;
        const progress = is.element(target) ? target : this.elements.display.buffer;
        if (is.element(progress)) {
          progress.value = val;
          const label = progress.getElementsByTagName("span")[0];
          if (is.element(label)) {
            label.childNodes[0].nodeValue = val;
          }
        }
      };
      if (event) {
        switch (event.type) {
          // Video playing
          case "timeupdate":
          case "seeking":
          case "seeked":
            value = getPercentage(this.currentTime, this.duration);
            if (event.type === "timeupdate") {
              controls.setRange.call(this, this.elements.inputs.seek, value);
            }
            break;
          // Check buffer status
          case "playing":
          case "progress":
            setProgress(this.elements.display.buffer, this.buffered * 100);
            break;
        }
      }
    },
    // Webkit polyfill for lower fill range
    updateRangeFill(target) {
      const range = is.event(target) ? target.target : target;
      if (!is.element(range) || range.getAttribute("type") !== "range") {
        return;
      }
      if (matches(range, this.config.selectors.inputs.seek)) {
        range.setAttribute("aria-valuenow", this.currentTime);
        const currentTime = controls.formatTime(this.currentTime);
        const duration = controls.formatTime(this.duration);
        const format2 = i18n.get("seekLabel", this.config);
        range.setAttribute("aria-valuetext", format2.replace("{currentTime}", currentTime).replace("{duration}", duration));
      } else if (matches(range, this.config.selectors.inputs.volume)) {
        const percent = range.value * 100;
        range.setAttribute("aria-valuenow", percent);
        range.setAttribute("aria-valuetext", `${percent.toFixed(1)}%`);
      } else {
        range.setAttribute("aria-valuenow", range.value);
      }
      if (!browser.isWebKit && !browser.isIPadOS) {
        return;
      }
      range.style.setProperty("--value", `${range.value / range.max * 100}%`);
    },
    // Update hover tooltip for seeking
    updateSeekTooltip(event) {
      var _this$config$markers, _this$config$markers$;
      if (!this.config.tooltips.seek || !is.element(this.elements.inputs.seek) || !is.element(this.elements.display.seekTooltip) || this.duration === 0) {
        return;
      }
      const tipElement = this.elements.display.seekTooltip;
      const visible = `${this.config.classNames.tooltip}--visible`;
      const toggle = (show) => toggleClass(tipElement, visible, show);
      if (this.touch) {
        toggle(false);
        return;
      }
      let percent = 0;
      const clientRect = this.elements.progress.getBoundingClientRect();
      if (is.event(event)) {
        const scrollLeft = event.pageX - event.clientX;
        percent = 100 / clientRect.width * (event.pageX - clientRect.left - scrollLeft);
      } else if (hasClass(tipElement, visible)) {
        percent = Number.parseFloat(tipElement.style.left, 10);
      } else {
        return;
      }
      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }
      const time = this.duration / 100 * percent;
      tipElement.textContent = controls.formatTime(time);
      const point = (_this$config$markers = this.config.markers) === null || _this$config$markers === void 0 ? void 0 : (_this$config$markers$ = _this$config$markers.points) === null || _this$config$markers$ === void 0 ? void 0 : _this$config$markers$.find(({
        time: t
      }) => t === Math.round(time));
      if (point) {
        tipElement.insertAdjacentHTML("afterbegin", `${point.label}<br>`);
      }
      tipElement.style.left = `${percent}%`;
      if (is.event(event) && ["mouseenter", "mouseleave"].includes(event.type)) {
        toggle(event.type === "mouseenter");
      }
    },
    // Handle time change event
    timeUpdate(event) {
      const invert = !is.element(this.elements.display.duration) && this.config.invertTime;
      controls.updateTimeDisplay.call(this, this.elements.display.currentTime, invert ? this.duration - this.currentTime : this.currentTime, invert);
      if (event && event.type === "timeupdate" && this.media.seeking) {
        return;
      }
      controls.updateProgress.call(this, event);
    },
    // Show the duration on metadataloaded or durationchange events
    durationUpdate() {
      if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
        return;
      }
      if (this.duration >= 2 ** 32) {
        toggleHidden(this.elements.display.currentTime, true);
        toggleHidden(this.elements.progress, true);
        return;
      }
      if (is.element(this.elements.inputs.seek)) {
        this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
      }
      const hasDuration = is.element(this.elements.display.duration);
      if (!hasDuration && this.config.displayDuration && this.paused) {
        controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
      }
      if (hasDuration) {
        controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
      }
      if (this.config.markers.enabled) {
        controls.setMarkers.call(this);
      }
      controls.updateSeekTooltip.call(this);
    },
    // Hide/show a tab
    toggleMenuButton(setting, toggle) {
      toggleHidden(this.elements.settings.buttons[setting], !toggle);
    },
    // Update the selected setting
    updateSetting(setting, container, input) {
      const pane = this.elements.settings.panels[setting];
      let value = null;
      let list = container;
      if (setting === "captions") {
        value = this.currentTrack;
      } else {
        value = !is.empty(input) ? input : this[setting];
        if (is.empty(value)) {
          value = this.config[setting].default;
        }
        if (!is.empty(this.options[setting]) && !this.options[setting].includes(value)) {
          this.debug.warn(`Unsupported value of '${value}' for ${setting}`);
          return;
        }
        if (!this.config[setting].options.includes(value)) {
          this.debug.warn(`Disabled value of '${value}' for ${setting}`);
          return;
        }
      }
      if (!is.element(list)) {
        list = pane && pane.querySelector('[role="menu"]');
      }
      if (!is.element(list)) {
        return;
      }
      const label = this.elements.settings.buttons[setting].querySelector(`.${this.config.classNames.menu.value}`);
      label.innerHTML = controls.getLabel.call(this, setting, value);
      const target = list && list.querySelector(`[value="${value}"]`);
      if (is.element(target)) {
        target.checked = true;
      }
    },
    // Translate a value into a nice label
    getLabel(setting, value) {
      switch (setting) {
        case "speed":
          return value === 1 ? i18n.get("normal", this.config) : `${value}&times;`;
        case "quality":
          if (is.number(value)) {
            const label = i18n.get(`qualityLabel.${value}`, this.config);
            if (!label.length) {
              return `${value}p`;
            }
            return label;
          }
          return toTitleCase(value);
        case "captions":
          return captions.getLabel.call(this);
        default:
          return null;
      }
    },
    // Set the quality menu
    setQualityMenu(options) {
      if (!is.element(this.elements.settings.panels.quality)) {
        return;
      }
      const type = "quality";
      const list = this.elements.settings.panels.quality.querySelector('[role="menu"]');
      if (is.array(options)) {
        this.options.quality = dedupe(options).filter((quality) => this.config.quality.options.includes(quality));
      }
      const toggle = !is.empty(this.options.quality) && this.options.quality.length > 1;
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      const getBadge = (quality) => {
        const label = i18n.get(`qualityBadge.${quality}`, this.config);
        if (!label.length) {
          return null;
        }
        return controls.createBadge.call(this, label);
      };
      this.options.quality.sort((a, b) => {
        const sorting = this.config.quality.options;
        return sorting.indexOf(a) > sorting.indexOf(b) ? 1 : -1;
      }).forEach((quality) => {
        controls.createMenuItem.call(this, {
          value: quality,
          list,
          type,
          title: controls.getLabel.call(this, "quality", quality),
          badge: getBadge(quality)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Set the looping options
    /* setLoopMenu() {
          // Menu required
          if (!is.element(this.elements.settings.panels.loop)) {
              return;
          }
           const options = ['start', 'end', 'all', 'reset'];
          const list = this.elements.settings.panels.loop.querySelector('[role="menu"]');
           // Show the pane and tab
          toggleHidden(this.elements.settings.buttons.loop, false);
          toggleHidden(this.elements.settings.panels.loop, false);
           // Toggle the pane and tab
          const toggle = !is.empty(this.loop.options);
          controls.toggleMenuButton.call(this, 'loop', toggle);
           // Empty the menu
          emptyElement(list);
           options.forEach(option => {
              const item = createElement('li');
               const button = createElement(
                  'button',
                  extend(getAttributesFromSelector(this.config.selectors.buttons.loop), {
                      type: 'button',
                      class: this.config.classNames.control,
                      'data-plyr-loop-action': option,
                  }),
                  i18n.get(option, this.config)
              );
               if (['start', 'end'].includes(option)) {
                  const badge = controls.createBadge.call(this, '00:00');
                  button.appendChild(badge);
              }
               item.appendChild(button);
              list.appendChild(item);
          });
      }, */
    // Get current selected caption language
    // TODO: rework this to user the getter in the API?
    // Set a list of available captions languages
    setCaptionsMenu() {
      if (!is.element(this.elements.settings.panels.captions)) {
        return;
      }
      const type = "captions";
      const list = this.elements.settings.panels.captions.querySelector('[role="menu"]');
      const tracks = captions.getTracks.call(this);
      const toggle = Boolean(tracks.length);
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      const options = tracks.map((track, value) => ({
        value,
        checked: this.captions.toggled && this.currentTrack === value,
        title: captions.getLabel.call(this, track),
        badge: track.language && controls.createBadge.call(this, track.language.toUpperCase()),
        list,
        type: "language"
      }));
      options.unshift({
        value: -1,
        checked: !this.captions.toggled,
        title: i18n.get("disabled", this.config),
        list,
        type: "language"
      });
      options.forEach(controls.createMenuItem.bind(this));
      controls.updateSetting.call(this, type, list);
    },
    // Set a list of available captions languages
    setSpeedMenu() {
      if (!is.element(this.elements.settings.panels.speed)) {
        return;
      }
      const type = "speed";
      const list = this.elements.settings.panels.speed.querySelector('[role="menu"]');
      this.options.speed = this.options.speed.filter((o) => o >= this.minimumSpeed && o <= this.maximumSpeed);
      const toggle = !is.empty(this.options.speed) && this.options.speed.length > 1;
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      this.options.speed.forEach((speed) => {
        controls.createMenuItem.call(this, {
          value: speed,
          list,
          type,
          title: controls.getLabel.call(this, "speed", speed)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Check if we need to hide/show the settings menu
    checkMenu() {
      const {
        buttons
      } = this.elements.settings;
      const visible = !is.empty(buttons) && Object.values(buttons).some((button) => !button.hidden);
      toggleHidden(this.elements.settings.menu, !visible);
    },
    // Focus the first menu item in a given (or visible) menu
    focusFirstMenuItem(pane, focusVisible = false) {
      if (this.elements.settings.popup.hidden) {
        return;
      }
      let target = pane;
      if (!is.element(target)) {
        target = Object.values(this.elements.settings.panels).find((p) => !p.hidden);
      }
      const firstItem = target.querySelector('[role^="menuitem"]');
      setFocus.call(this, firstItem, focusVisible);
    },
    // Show/hide menu
    toggleMenu(input) {
      const {
        popup
      } = this.elements.settings;
      const button = this.elements.buttons.settings;
      if (!is.element(popup) || !is.element(button)) {
        return;
      }
      const {
        hidden
      } = popup;
      let show = hidden;
      if (is.boolean(input)) {
        show = input;
      } else if (is.keyboardEvent(input) && input.key === "Escape") {
        show = false;
      } else if (is.event(input)) {
        const target = is.function(input.composedPath) ? input.composedPath()[0] : input.target;
        const isMenuItem = popup.contains(target);
        if (isMenuItem || !isMenuItem && input.target !== button && show) {
          return;
        }
      }
      button.setAttribute("aria-expanded", show);
      toggleHidden(popup, !show);
      toggleClass(this.elements.container, this.config.classNames.menu.open, show);
      if (show && is.keyboardEvent(input)) {
        controls.focusFirstMenuItem.call(this, null, true);
      } else if (!show && !hidden) {
        setFocus.call(this, button, is.keyboardEvent(input));
      }
    },
    // Get the natural size of a menu panel
    getMenuSize(tab) {
      const clone = tab.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.opacity = 0;
      clone.removeAttribute("hidden");
      tab.parentNode.appendChild(clone);
      const width = clone.scrollWidth;
      const height = clone.scrollHeight;
      removeElement(clone);
      return {
        width,
        height
      };
    },
    // Show a panel in the menu
    showMenuPanel(type = "", focusVisible = false) {
      const target = this.elements.container.querySelector(`#plyr-settings-${this.id}-${type}`);
      if (!is.element(target)) {
        return;
      }
      const container = target.parentNode;
      const current = Array.from(container.children).find((node) => !node.hidden);
      if (support.transitions && !support.reducedMotion) {
        container.style.width = `${current.scrollWidth}px`;
        container.style.height = `${current.scrollHeight}px`;
        const size = controls.getMenuSize.call(this, target);
        const restore = (event) => {
          if (event.target !== container || !["width", "height"].includes(event.propertyName)) {
            return;
          }
          container.style.width = "";
          container.style.height = "";
          off.call(this, container, transitionEndEvent, restore);
        };
        on.call(this, container, transitionEndEvent, restore);
        container.style.width = `${size.width}px`;
        container.style.height = `${size.height}px`;
      }
      toggleHidden(current, true);
      toggleHidden(target, false);
      controls.focusFirstMenuItem.call(this, target, focusVisible);
    },
    // Set the download URL
    setDownloadUrl() {
      const button = this.elements.buttons.download;
      if (!is.element(button)) {
        return;
      }
      button.setAttribute("href", this.download);
    },
    // Build the default HTML
    create(data) {
      const {
        bindMenuItemShortcuts,
        createButton,
        createProgress,
        createRange,
        createTime,
        setQualityMenu,
        setSpeedMenu,
        showMenuPanel
      } = controls;
      this.elements.controls = null;
      if (is.array(this.config.controls) && this.config.controls.includes("play-large")) {
        this.elements.container.appendChild(createButton.call(this, "play-large"));
      }
      const container = createElement("div", getAttributesFromSelector(this.config.selectors.controls.wrapper));
      this.elements.controls = container;
      const defaultAttributes = {
        class: "plyr__controls__item"
      };
      dedupe(is.array(this.config.controls) ? this.config.controls : []).forEach((control) => {
        if (control === "restart") {
          container.appendChild(createButton.call(this, "restart", defaultAttributes));
        }
        if (control === "rewind") {
          container.appendChild(createButton.call(this, "rewind", defaultAttributes));
        }
        if (control === "play") {
          container.appendChild(createButton.call(this, "play", defaultAttributes));
        }
        if (control === "fast-forward") {
          container.appendChild(createButton.call(this, "fast-forward", defaultAttributes));
        }
        if (control === "progress") {
          const progressContainer = createElement("div", {
            class: `${defaultAttributes.class} plyr__progress__container`
          });
          const progress = createElement("div", getAttributesFromSelector(this.config.selectors.progress));
          progress.appendChild(createRange.call(this, "seek", {
            id: `plyr-seek-${data.id}`
          }));
          progress.appendChild(createProgress.call(this, "buffer"));
          if (this.config.tooltips.seek) {
            const tooltip = createElement("span", {
              class: this.config.classNames.tooltip
            }, "00:00");
            progress.appendChild(tooltip);
            this.elements.display.seekTooltip = tooltip;
          }
          this.elements.progress = progress;
          progressContainer.appendChild(this.elements.progress);
          container.appendChild(progressContainer);
        }
        if (control === "current-time") {
          container.appendChild(createTime.call(this, "currentTime", defaultAttributes));
        }
        if (control === "duration") {
          container.appendChild(createTime.call(this, "duration", defaultAttributes));
        }
        if (control === "mute" || control === "volume") {
          let {
            volume
          } = this.elements;
          if (!is.element(volume) || !container.contains(volume)) {
            volume = createElement("div", extend({}, defaultAttributes, {
              class: `${defaultAttributes.class} plyr__volume`.trim()
            }));
            this.elements.volume = volume;
            container.appendChild(volume);
          }
          if (control === "mute") {
            volume.appendChild(createButton.call(this, "mute"));
          }
          if (control === "volume" && !browser.isIos && !browser.isIPadOS) {
            const attributes = {
              max: 1,
              step: 0.05,
              value: this.config.volume
            };
            volume.appendChild(createRange.call(this, "volume", extend(attributes, {
              id: `plyr-volume-${data.id}`
            })));
          }
        }
        if (control === "captions") {
          container.appendChild(createButton.call(this, "captions", defaultAttributes));
        }
        if (control === "settings" && !is.empty(this.config.settings)) {
          const wrapper = createElement("div", extend({}, defaultAttributes, {
            class: `${defaultAttributes.class} plyr__menu`.trim(),
            hidden: ""
          }));
          wrapper.appendChild(createButton.call(this, "settings", {
            "aria-haspopup": true,
            "aria-controls": `plyr-settings-${data.id}`,
            "aria-expanded": false
          }));
          const popup = createElement("div", {
            class: "plyr__menu__container",
            id: `plyr-settings-${data.id}`,
            hidden: ""
          });
          const inner = createElement("div");
          const home = createElement("div", {
            id: `plyr-settings-${data.id}-home`
          });
          const menu = createElement("div", {
            role: "menu"
          });
          home.appendChild(menu);
          inner.appendChild(home);
          this.elements.settings.panels.home = home;
          this.config.settings.forEach((type) => {
            const menuItem = createElement("button", extend(getAttributesFromSelector(this.config.selectors.buttons.settings), {
              "type": "button",
              "class": `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
              "role": "menuitem",
              "aria-haspopup": true,
              "hidden": ""
            }));
            bindMenuItemShortcuts.call(this, menuItem, type);
            on.call(this, menuItem, "click", () => {
              showMenuPanel.call(this, type, false);
            });
            const flex = createElement("span", null, i18n.get(type, this.config));
            const value = createElement("span", {
              class: this.config.classNames.menu.value
            });
            value.innerHTML = data[type];
            flex.appendChild(value);
            menuItem.appendChild(flex);
            menu.appendChild(menuItem);
            const pane = createElement("div", {
              id: `plyr-settings-${data.id}-${type}`,
              hidden: ""
            });
            const backButton = createElement("button", {
              type: "button",
              class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
            });
            backButton.appendChild(createElement("span", {
              "aria-hidden": true
            }, i18n.get(type, this.config)));
            backButton.appendChild(createElement("span", {
              class: this.config.classNames.hidden
            }, i18n.get("menuBack", this.config)));
            on.call(this, pane, "keydown", (event) => {
              if (event.key !== "ArrowLeft") return;
              event.preventDefault();
              event.stopPropagation();
              showMenuPanel.call(this, "home", true);
            }, false);
            on.call(this, backButton, "click", () => {
              showMenuPanel.call(this, "home", false);
            });
            pane.appendChild(backButton);
            pane.appendChild(createElement("div", {
              role: "menu"
            }));
            inner.appendChild(pane);
            this.elements.settings.buttons[type] = menuItem;
            this.elements.settings.panels[type] = pane;
          });
          popup.appendChild(inner);
          wrapper.appendChild(popup);
          container.appendChild(wrapper);
          this.elements.settings.popup = popup;
          this.elements.settings.menu = wrapper;
        }
        if (control === "pip" && support.pip) {
          container.appendChild(createButton.call(this, "pip", defaultAttributes));
        }
        if (control === "airplay" && support.airplay) {
          container.appendChild(createButton.call(this, "airplay", defaultAttributes));
        }
        if (control === "download") {
          const attributes = extend({}, defaultAttributes, {
            element: "a",
            href: this.download,
            target: "_blank"
          });
          if (this.isHTML5) {
            attributes.download = "";
          }
          const {
            download
          } = this.config.urls;
          if (!is.url(download) && this.isEmbed) {
            extend(attributes, {
              icon: `logo-${this.provider}`,
              label: this.provider
            });
          }
          container.appendChild(createButton.call(this, "download", attributes));
        }
        if (control === "fullscreen") {
          container.appendChild(createButton.call(this, "fullscreen", defaultAttributes));
        }
      });
      if (this.isHTML5) {
        setQualityMenu.call(this, html5.getQualityOptions.call(this));
      }
      setSpeedMenu.call(this);
      return container;
    },
    // Insert controls
    inject() {
      if (this.config.loadSprite) {
        const icon = controls.getIconUrl.call(this);
        if (icon.cors) {
          loadSprite(icon.url, "sprite-plyr");
        }
      }
      this.id = Math.floor(Math.random() * 1e4);
      let container = null;
      this.elements.controls = null;
      const props = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      };
      let update = true;
      if (is.function(this.config.controls)) {
        this.config.controls = this.config.controls.call(this, props);
      }
      if (!this.config.controls) {
        this.config.controls = [];
      }
      if (is.element(this.config.controls) || is.string(this.config.controls)) {
        container = this.config.controls;
      } else {
        container = controls.create.call(this, {
          id: this.id,
          seektime: this.config.seekTime,
          speed: this.speed,
          quality: this.quality,
          captions: captions.getLabel.call(this)
          // TODO: Looping
          // loop: 'None',
        });
        update = false;
      }
      const replace = (input) => {
        let result = input;
        Object.entries(props).forEach(([key, value]) => {
          result = replaceAll(result, `{${key}}`, value);
        });
        return result;
      };
      if (update) {
        if (is.string(this.config.controls)) {
          container = replace(container);
        }
      }
      let target;
      if (is.string(this.config.selectors.controls.container)) {
        target = document.querySelector(this.config.selectors.controls.container);
      }
      if (!is.element(target)) {
        target = this.elements.container;
      }
      const insertMethod = is.element(container) ? "insertAdjacentElement" : "insertAdjacentHTML";
      target[insertMethod]("afterbegin", container);
      if (!is.element(this.elements.controls)) {
        controls.findElements.call(this);
      }
      if (!is.empty(this.elements.buttons)) {
        const addProperty = (button) => {
          const className = this.config.classNames.controlPressed;
          button.setAttribute("aria-pressed", "false");
          Object.defineProperty(button, "pressed", {
            configurable: true,
            enumerable: true,
            get() {
              return hasClass(button, className);
            },
            set(pressed = false) {
              toggleClass(button, className, pressed);
              button.setAttribute("aria-pressed", pressed ? "true" : "false");
            }
          });
        };
        Object.values(this.elements.buttons).filter(Boolean).forEach((button) => {
          if (is.array(button) || is.nodeList(button)) {
            Array.from(button).filter(Boolean).forEach(addProperty);
          } else {
            addProperty(button);
          }
        });
      }
      if (browser.isEdge) {
        repaint(target);
      }
      if (this.config.tooltips.controls) {
        const {
          classNames,
          selectors
        } = this.config;
        const selector = `${selectors.controls.wrapper} ${selectors.labels} .${classNames.hidden}`;
        const labels = getElements.call(this, selector);
        Array.from(labels).forEach((label) => {
          toggleClass(label, this.config.classNames.hidden, false);
          toggleClass(label, this.config.classNames.tooltip, true);
        });
      }
    },
    // Set media metadata
    setMediaMetadata() {
      try {
        if ("mediaSession" in navigator) {
          navigator.mediaSession.metadata = new window.MediaMetadata({
            title: this.config.mediaMetadata.title,
            artist: this.config.mediaMetadata.artist,
            album: this.config.mediaMetadata.album,
            artwork: this.config.mediaMetadata.artwork
          });
        }
      } catch {
      }
    },
    // Add markers
    setMarkers() {
      var _this$config$markers2, _this$config$markers3;
      if (!this.duration || this.elements.markers) return;
      const points = (_this$config$markers2 = this.config.markers) === null || _this$config$markers2 === void 0 ? void 0 : (_this$config$markers3 = _this$config$markers2.points) === null || _this$config$markers3 === void 0 ? void 0 : _this$config$markers3.filter(({
        time
      }) => time > 0 && time < this.duration);
      if (!(points !== null && points !== void 0 && points.length)) return;
      const containerFragment = document.createDocumentFragment();
      const pointsFragment = document.createDocumentFragment();
      let tipElement = null;
      const tipVisible = `${this.config.classNames.tooltip}--visible`;
      const toggleTip = (show) => toggleClass(tipElement, tipVisible, show);
      points.forEach((point) => {
        const markerElement = createElement("span", {
          class: this.config.classNames.marker
        }, "");
        const left = `${point.time / this.duration * 100}%`;
        if (tipElement) {
          markerElement.addEventListener("mouseenter", () => {
            if (point.label) return;
            tipElement.style.left = left;
            tipElement.innerHTML = point.label;
            toggleTip(true);
          });
          markerElement.addEventListener("mouseleave", () => {
            toggleTip(false);
          });
        }
        markerElement.addEventListener("click", () => {
          this.currentTime = point.time;
        });
        markerElement.style.left = left;
        pointsFragment.appendChild(markerElement);
      });
      containerFragment.appendChild(pointsFragment);
      if (!this.config.tooltips.seek) {
        tipElement = createElement("span", {
          class: this.config.classNames.tooltip
        }, "");
        containerFragment.appendChild(tipElement);
      }
      this.elements.markers = {
        points: pointsFragment,
        tip: tipElement
      };
      this.elements.progress.appendChild(containerFragment);
    }
  };
  function parseUrl(input, safe = true) {
    let url = input;
    if (safe) {
      const parser = document.createElement("a");
      parser.href = url;
      url = parser.href;
    }
    try {
      return new URL(url);
    } catch {
      return null;
    }
  }
  function buildUrlParams(input) {
    const params = new URLSearchParams();
    if (is.object(input)) {
      Object.entries(input).forEach(([key, value]) => {
        params.set(key, value);
      });
    }
    return params;
  }
  const captions = {
    // Setup captions
    setup() {
      if (!this.supported.ui) {
        return;
      }
      if (!this.isVideo || this.isYouTube || this.isHTML5 && !support.textTracks) {
        if (is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
          controls.setCaptionsMenu.call(this);
        }
        return;
      }
      if (!is.element(this.elements.captions)) {
        this.elements.captions = createElement("div", getAttributesFromSelector(this.config.selectors.captions));
        this.elements.captions.setAttribute("dir", "auto");
        insertAfter(this.elements.captions, this.elements.wrapper);
      }
      if (browser.isIE && window.URL) {
        const elements = this.media.querySelectorAll("track");
        Array.from(elements).forEach((track) => {
          const src = track.getAttribute("src");
          const url = parseUrl(src);
          if (url !== null && url.hostname !== window.location.href.hostname && ["http:", "https:"].includes(url.protocol)) {
            fetch(src, "blob").then((blob) => {
              track.setAttribute("src", window.URL.createObjectURL(blob));
            }).catch(() => {
              removeElement(track);
            });
          }
        });
      }
      const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || "en"];
      const languages = dedupe(browserLanguages.map((language2) => language2.split("-")[0]));
      let language = (this.storage.get("language") || this.captions.language || this.config.captions.language || "auto").toLowerCase();
      if (language === "auto") {
        [language] = languages;
      }
      let active = this.storage.get("captions") || this.captions.active;
      if (!is.boolean(active)) {
        ({
          active
        } = this.config.captions);
      }
      Object.assign(this.captions, {
        toggled: false,
        active,
        language,
        languages
      });
      if (this.isHTML5) {
        const trackEvents = this.config.captions.update ? "addtrack removetrack" : "removetrack";
        on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
      }
      setTimeout(captions.update.bind(this), 0);
    },
    // Update available language options in settings based on tracks
    update() {
      const tracks = captions.getTracks.call(this, true);
      const {
        active,
        language,
        meta,
        currentTrackNode
      } = this.captions;
      const languageExists = Boolean(tracks.find((track) => track.language === language));
      if (this.isHTML5 && this.isVideo) {
        tracks.filter((track) => !meta.get(track)).forEach((track) => {
          this.debug.log("Track added", track);
          meta.set(track, {
            default: track.mode === "showing"
          });
          if (track.mode === "showing") {
            track.mode = "hidden";
          }
          on.call(this, track, "cuechange", () => captions.updateCues.call(this));
        });
      }
      if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
        captions.setLanguage.call(this, language);
        captions.toggle.call(this, active && languageExists);
      }
      if (this.elements) {
        toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is.empty(tracks));
      }
      if (is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
        controls.setCaptionsMenu.call(this);
      }
    },
    // Toggle captions display
    // Used internally for the toggleCaptions method, with the passive option forced to false
    toggle(input, passive = true) {
      if (!this.supported.ui) {
        return;
      }
      const {
        toggled
      } = this.captions;
      const activeClass = this.config.classNames.captions.active;
      const active = is.nullOrUndefined(input) ? !toggled : input;
      if (active !== toggled) {
        if (!passive) {
          this.captions.active = active;
          this.storage.set({
            captions: active
          });
        }
        if (!this.language && active && !passive) {
          const tracks = captions.getTracks.call(this);
          const track = captions.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
          this.captions.language = track.language;
          captions.set.call(this, tracks.indexOf(track));
          return;
        }
        if (this.elements.buttons.captions) {
          this.elements.buttons.captions.pressed = active;
        }
        toggleClass(this.elements.container, activeClass, active);
        this.captions.toggled = active;
        controls.updateSetting.call(this, "captions");
        triggerEvent.call(this, this.media, active ? "captionsenabled" : "captionsdisabled");
      }
      setTimeout(() => {
        if (active && this.captions.toggled) {
          this.captions.currentTrackNode.mode = "hidden";
        }
      });
    },
    // Set captions by track index
    // Used internally for the currentTrack setter with the passive option forced to false
    set(index, passive = true) {
      const tracks = captions.getTracks.call(this);
      if (index === -1) {
        captions.toggle.call(this, false, passive);
        return;
      }
      if (!is.number(index)) {
        this.debug.warn("Invalid caption argument", index);
        return;
      }
      if (!(index in tracks)) {
        this.debug.warn("Track not found", index);
        return;
      }
      if (this.captions.currentTrack !== index) {
        this.captions.currentTrack = index;
        const track = tracks[index];
        const {
          language
        } = track || {};
        this.captions.currentTrackNode = track;
        controls.updateSetting.call(this, "captions");
        if (!passive) {
          this.captions.language = language;
          this.storage.set({
            language
          });
        }
        if (this.isVimeo) {
          this.embed.enableTextTrack(language, null, false);
        }
        triggerEvent.call(this, this.media, "languagechange");
      }
      captions.toggle.call(this, true, passive);
      if (this.isHTML5 && this.isVideo) {
        captions.updateCues.call(this);
      }
    },
    // Set captions by language
    // Used internally for the language setter with the passive option forced to false
    setLanguage(input, passive = true) {
      if (!is.string(input)) {
        this.debug.warn("Invalid language argument", input);
        return;
      }
      const language = input.toLowerCase();
      this.captions.language = language;
      const tracks = captions.getTracks.call(this);
      const track = captions.findTrack.call(this, [language]);
      captions.set.call(this, tracks.indexOf(track), passive);
    },
    // Get current valid caption tracks
    // If update is false it will also ignore tracks without metadata
    // This is used to "freeze" the language options when captions.update is false
    getTracks(update = false) {
      const tracks = Array.from((this.media || {}).textTracks || []);
      return tracks.filter((track) => !this.isHTML5 || update || this.captions.meta.has(track)).filter((track) => ["captions", "subtitles"].includes(track.kind));
    },
    // Match tracks based on languages and get the first
    findTrack(languages, force = false) {
      const tracks = captions.getTracks.call(this);
      const sortIsDefault = (track2) => Number((this.captions.meta.get(track2) || {}).default);
      const sorted = Array.from(tracks).sort((a, b) => sortIsDefault(b) - sortIsDefault(a));
      let track;
      languages.every((language) => {
        track = sorted.find((t) => t.language === language);
        return !track;
      });
      return track || (force ? sorted[0] : void 0);
    },
    // Get the current track
    getCurrentTrack() {
      return captions.getTracks.call(this)[this.currentTrack];
    },
    // Get UI label for track
    getLabel(track) {
      let currentTrack = track;
      if (!is.track(currentTrack) && support.textTracks && this.captions.toggled) {
        currentTrack = captions.getCurrentTrack.call(this);
      }
      if (is.track(currentTrack)) {
        if (!is.empty(currentTrack.label)) {
          return currentTrack.label;
        }
        if (!is.empty(currentTrack.language)) {
          return track.language.toUpperCase();
        }
        return i18n.get("enabled", this.config);
      }
      return i18n.get("disabled", this.config);
    },
    // Update captions using current track's active cues
    // Also optional array argument in case there isn't any track (ex: vimeo)
    updateCues(input) {
      if (!this.supported.ui) {
        return;
      }
      if (!is.element(this.elements.captions)) {
        this.debug.warn("No captions element to render to");
        return;
      }
      if (!is.nullOrUndefined(input) && !Array.isArray(input)) {
        this.debug.warn("updateCues: Invalid input", input);
        return;
      }
      let cues = input;
      if (!cues) {
        const track = captions.getCurrentTrack.call(this);
        cues = Array.from((track || {}).activeCues || []).map((cue) => cue.getCueAsHTML()).map(getHTML);
      }
      const content = cues.map((cueText) => cueText.trim()).join("\n");
      const changed = content !== this.elements.captions.innerHTML;
      if (changed) {
        emptyElement(this.elements.captions);
        const caption = createElement("span", getAttributesFromSelector(this.config.selectors.caption));
        caption.innerHTML = content;
        this.elements.captions.appendChild(caption);
        triggerEvent.call(this, this.media, "cuechange");
      }
    }
  };
  const defaults = {
    // Disable
    enabled: true,
    // Custom media title
    title: "",
    // Logging to console
    debug: false,
    // Auto play (if supported)
    autoplay: false,
    // Only allow one media playing at once (vimeo only)
    autopause: true,
    // Allow inline playback on iOS
    playsinline: true,
    // Default time to skip when rewind/fast forward
    seekTime: 10,
    // Default volume
    volume: 1,
    muted: false,
    // Pass a custom duration
    duration: null,
    // Display the media duration on load in the current time position
    // If you have opted to display both duration and currentTime, this is ignored
    displayDuration: true,
    // Invert the current time to be a countdown
    invertTime: true,
    // Clicking the currentTime inverts it's value to show time left rather than elapsed
    toggleInvert: true,
    // Force an aspect ratio
    // The format must be `'w:h'` (e.g. `'16:9'`)
    ratio: null,
    // Click video container to play/pause
    clickToPlay: true,
    // Auto hide the controls
    hideControls: true,
    // Reset to start when playback ended
    resetOnEnd: false,
    // Disable the standard context menu
    disableContextMenu: true,
    // Sprite (for icons)
    loadSprite: true,
    iconPrefix: "plyr",
    iconUrl: "https://cdn.plyr.io/3.8.4/plyr.svg",
    // Blank video (used to prevent errors on source change)
    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
    // Quality default
    quality: {
      default: 576,
      // The options to display in the UI, if available for the source media
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
      forced: false,
      onChange: null
    },
    // Set loops
    loop: {
      active: false
      // start: null,
      // end: null,
    },
    // Speed default and options to display
    speed: {
      selected: 1,
      // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
    },
    // Keyboard shortcut settings
    keyboard: {
      focused: true,
      global: false
    },
    // Display tooltips
    tooltips: {
      controls: false,
      seek: true
    },
    // Captions settings
    captions: {
      active: false,
      language: "auto",
      // Listen to new tracks added after Plyr is initialized.
      // This is needed for streaming captions, but may result in unselectable options
      update: false
    },
    // Fullscreen settings
    fullscreen: {
      enabled: true,
      // Allow fullscreen?
      fallback: true,
      // Fallback using full viewport/window
      iosNative: false
      // Use the native fullscreen in iOS (disables custom controls)
      // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
      // Non-ancestors of the player element will be ignored
      // container: null, // defaults to the player element
    },
    // Local storage
    storage: {
      enabled: true,
      key: "plyr"
    },
    // Default controls
    controls: [
      "play-large",
      // 'restart',
      // 'rewind',
      "play",
      // 'fast-forward',
      "progress",
      "current-time",
      // 'duration',
      "mute",
      "volume",
      "captions",
      "settings",
      "pip",
      "airplay",
      // 'download',
      "fullscreen"
    ],
    settings: ["captions", "quality", "speed"],
    // Localisation
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      pip: "PIP",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
      qualityBadge: {
        2160: "4K",
        1440: "HD",
        1080: "HD",
        720: "HD",
        576: "SD",
        480: "SD"
      }
    },
    // URLs
    urls: {
      download: null,
      vimeo: {
        sdk: "https://player.vimeo.com/api/player.js",
        iframe: "https://player.vimeo.com/video/{0}?{1}",
        api: "https://vimeo.com/api/oembed.json?url={0}"
      },
      youtube: {
        sdk: "https://www.youtube.com/iframe_api",
        api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
      },
      googleIMA: {
        sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
      }
    },
    // Custom control listeners
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      download: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null
    },
    // Events to watch and bubble
    events: [
      // Events to watch on HTML5 media elements and bubble
      // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
      "ended",
      "progress",
      "stalled",
      "playing",
      "waiting",
      "canplay",
      "canplaythrough",
      "loadstart",
      "loadeddata",
      "loadedmetadata",
      "timeupdate",
      "volumechange",
      "play",
      "pause",
      "error",
      "seeking",
      "seeked",
      "emptied",
      "ratechange",
      "cuechange",
      // Custom events
      "download",
      "enterfullscreen",
      "exitfullscreen",
      "captionsenabled",
      "captionsdisabled",
      "languagechange",
      "controlshidden",
      "controlsshown",
      "ready",
      // YouTube
      "statechange",
      // Quality
      "qualitychange",
      // Ads
      "adsloaded",
      "adscontentpause",
      "adscontentresume",
      "adstarted",
      "adsmidpoint",
      "adscomplete",
      "adsallcomplete",
      "adsimpression",
      "adsclick"
    ],
    // Selectors
    // Change these to match your template if using custom HTML
    selectors: {
      editable: "input, textarea, select, [contenteditable]",
      container: ".plyr",
      controls: {
        container: null,
        wrapper: ".plyr__controls"
      },
      labels: "[data-plyr]",
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        download: '[data-plyr="download"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: ".plyr__time--current",
        duration: ".plyr__time--duration",
        buffer: ".plyr__progress__buffer",
        loop: ".plyr__progress__loop",
        // Used later
        volume: ".plyr__volume--display"
      },
      progress: ".plyr__progress",
      captions: ".plyr__captions",
      caption: ".plyr__caption"
    },
    // Class hooks added to the player in different states
    classNames: {
      type: "plyr--{0}",
      provider: "plyr--{0}",
      video: "plyr__video-wrapper",
      embed: "plyr__video-embed",
      videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
      embedContainer: "plyr__video-embed__container",
      poster: "plyr__poster",
      posterEnabled: "plyr__poster-enabled",
      ads: "plyr__ads",
      control: "plyr__control",
      controlPressed: "plyr__control--pressed",
      playing: "plyr--playing",
      paused: "plyr--paused",
      stopped: "plyr--stopped",
      loading: "plyr--loading",
      hover: "plyr--hover",
      tooltip: "plyr__tooltip",
      cues: "plyr__cues",
      marker: "plyr__progress__marker",
      hidden: "plyr__sr-only",
      hideControls: "plyr--hide-controls",
      isTouch: "plyr--is-touch",
      uiSupported: "plyr--full-ui",
      noTransition: "plyr--no-transition",
      display: {
        time: "plyr__time"
      },
      menu: {
        value: "plyr__menu__value",
        badge: "plyr__badge",
        open: "plyr--menu-open"
      },
      captions: {
        enabled: "plyr--captions-enabled",
        active: "plyr--captions-active"
      },
      fullscreen: {
        enabled: "plyr--fullscreen-enabled",
        fallback: "plyr--fullscreen-fallback"
      },
      pip: {
        supported: "plyr--pip-supported",
        active: "plyr--pip-active"
      },
      airplay: {
        supported: "plyr--airplay-supported",
        active: "plyr--airplay-active"
      },
      previewThumbnails: {
        // Tooltip thumbs
        thumbContainer: "plyr__preview-thumb",
        thumbContainerShown: "plyr__preview-thumb--is-shown",
        imageContainer: "plyr__preview-thumb__image-container",
        timeContainer: "plyr__preview-thumb__time-container",
        // Scrubbing
        scrubbingContainer: "plyr__preview-scrubbing",
        scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
      }
    },
    // Embed attributes
    attributes: {
      embed: {
        provider: "data-plyr-provider",
        id: "data-plyr-embed-id",
        hash: "data-plyr-embed-hash"
      }
    },
    // Advertisements plugin
    // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
    ads: {
      enabled: false,
      publisherId: "",
      tagUrl: ""
    },
    // Preview Thumbnails plugin
    previewThumbnails: {
      enabled: false,
      src: "",
      withCredentials: false
    },
    // Vimeo plugin
    vimeo: {
      byline: false,
      portrait: false,
      title: false,
      speed: true,
      transparent: false,
      // Custom settings from Plyr
      customControls: true,
      referrerPolicy: null,
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
      // Whether the owner of the video has a Pro or Business account
      // (which allows us to properly hide controls without CSS hacks, etc)
      premium: false
    },
    // YouTube plugin
    youtube: {
      rel: 0,
      // No related vids
      showinfo: 0,
      // Hide info
      iv_load_policy: 3,
      // Hide annotations
      modestbranding: 1,
      // Hide logos as much as possible (they still show one in the corner when paused)
      // Custom settings from Plyr
      customControls: true,
      noCookie: false
      // Whether to use an alternative version of YouTube without cookies
    },
    // Media Metadata
    mediaMetadata: {
      title: "",
      artist: "",
      album: "",
      artwork: []
    },
    // Markers
    markers: {
      enabled: false,
      points: []
    }
  };
  const pip = {
    active: "picture-in-picture",
    inactive: "inline"
  };
  const providers = {
    html5: "html5",
    youtube: "youtube",
    vimeo: "vimeo"
  };
  const types = {
    audio: "audio",
    video: "video"
  };
  function getProviderByUrl(url) {
    if (/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(url)) {
      return providers.youtube;
    }
    if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
      return providers.vimeo;
    }
    return null;
  }
  function noop() {
  }
  class Console {
    constructor(enabled = false) {
      this.enabled = window.console && enabled;
      if (this.enabled) {
        this.log("Debugging enabled");
      }
    }
    get log() {
      return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
    }
    get warn() {
      return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
    }
    get error() {
      return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
    }
  }
  class Fullscreen {
    constructor(player) {
      _defineProperty$1(this, "onChange", () => {
        if (!this.supported) return;
        const button = this.player.elements.buttons.fullscreen;
        if (is.element(button)) {
          button.pressed = this.active;
        }
        const target = this.target === this.player.media ? this.target : this.player.elements.container;
        triggerEvent.call(this.player, target, this.active ? "enterfullscreen" : "exitfullscreen", true);
      });
      _defineProperty$1(this, "toggleFallback", (toggle = false) => {
        if (toggle) {
          var _window$scrollX, _window$scrollY;
          this.scrollPosition = {
            x: (_window$scrollX = window.scrollX) !== null && _window$scrollX !== void 0 ? _window$scrollX : 0,
            y: (_window$scrollY = window.scrollY) !== null && _window$scrollY !== void 0 ? _window$scrollY : 0
          };
        } else {
          window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
        }
        document.body.style.overflow = toggle ? "hidden" : "";
        toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, toggle);
        if (browser.isIos) {
          let viewport = document.head.querySelector('meta[name="viewport"]');
          const property = "viewport-fit=cover";
          if (!viewport) {
            viewport = document.createElement("meta");
            viewport.setAttribute("name", "viewport");
          }
          const hasProperty = is.string(viewport.content) && viewport.content.includes(property);
          if (toggle) {
            this.cleanupViewport = !hasProperty;
            if (!hasProperty) viewport.content += `,${property}`;
          } else if (this.cleanupViewport) {
            viewport.content = viewport.content.split(",").filter((part) => part.trim() !== property).join(",");
          }
        }
        this.onChange();
      });
      _defineProperty$1(this, "trapFocus", (event) => {
        if (browser.isIos || browser.isIPadOS || !this.active || event.key !== "Tab") return;
        const focused = document.activeElement;
        const focusable = getElements.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]");
        const [first] = focusable;
        const last = focusable[focusable.length - 1];
        if (focused === last && !event.shiftKey) {
          first.focus();
          event.preventDefault();
        } else if (focused === first && event.shiftKey) {
          last.focus();
          event.preventDefault();
        }
      });
      _defineProperty$1(this, "update", () => {
        if (this.supported) {
          let mode;
          if (this.forceFallback) mode = "Fallback (forced)";
          else if (Fullscreen.nativeSupported) mode = "Native";
          else mode = "Fallback";
          this.player.debug.log(`${mode} fullscreen enabled`);
        } else {
          this.player.debug.log("Fullscreen not supported and fallback disabled");
        }
        toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
      });
      _defineProperty$1(this, "enter", () => {
        if (!this.supported) return;
        if (browser.isIos && this.player.config.fullscreen.iosNative) {
          if (this.player.isVimeo) {
            this.player.embed.requestFullscreen();
          } else {
            this.target.webkitEnterFullscreen();
          }
        } else if (!Fullscreen.nativeSupported || this.forceFallback) {
          this.toggleFallback(true);
        } else if (!this.prefix) {
          this.target.requestFullscreen({
            navigationUI: "hide"
          });
        } else if (!is.empty(this.prefix)) {
          this.target[`${this.prefix}Request${this.property}`]();
        }
      });
      _defineProperty$1(this, "exit", () => {
        if (!this.supported) return;
        if (browser.isIos && this.player.config.fullscreen.iosNative) {
          if (this.player.isVimeo) {
            this.player.embed.exitFullscreen();
          } else {
            this.target.webkitEnterFullscreen();
          }
          silencePromise(this.player.play());
        } else if (!Fullscreen.nativeSupported || this.forceFallback) {
          this.toggleFallback(false);
        } else if (!this.prefix) {
          (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else if (!is.empty(this.prefix)) {
          const action = this.prefix === "moz" ? "Cancel" : "Exit";
          document[`${this.prefix}${action}${this.property}`]();
        }
      });
      _defineProperty$1(this, "toggle", () => {
        if (!this.active) this.enter();
        else this.exit();
      });
      this.player = player;
      this.prefix = Fullscreen.prefix;
      this.property = Fullscreen.property;
      this.scrollPosition = {
        x: 0,
        y: 0
      };
      this.forceFallback = player.config.fullscreen.fallback === "force";
      this.player.elements.fullscreen = player.config.fullscreen.container && closest$1(this.player.elements.container, player.config.fullscreen.container);
      on.call(this.player, document, this.prefix === "ms" ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
        this.onChange();
      });
      on.call(this.player, this.player.elements.container, "dblclick", (event) => {
        if (is.element(this.player.elements.controls) && this.player.elements.controls.contains(event.target)) {
          return;
        }
        this.player.listeners.proxy(event, this.toggle, "fullscreen");
      });
      on.call(this, this.player.elements.container, "keydown", (event) => this.trapFocus(event));
      this.update();
    }
    // Determine if native supported
    static get nativeSupported() {
      return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
    }
    // If we're actually using native
    get useNative() {
      return Fullscreen.nativeSupported && !this.forceFallback;
    }
    // Get the prefix for handlers
    static get prefix() {
      if (is.function(document.exitFullscreen)) return "";
      let value = "";
      const prefixes = ["webkit", "moz", "ms"];
      prefixes.some((pre) => {
        if (is.function(document[`${pre}ExitFullscreen`]) || is.function(document[`${pre}CancelFullScreen`])) {
          value = pre;
          return true;
        }
        return false;
      });
      return value;
    }
    static get property() {
      return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
    }
    // Determine if fullscreen is supported
    get supported() {
      return [
        // Fullscreen is enabled in config
        this.player.config.fullscreen.enabled,
        // Must be a video
        this.player.isVideo,
        // Either native is supported or fallback enabled
        Fullscreen.nativeSupported || this.player.config.fullscreen.fallback,
        // YouTube has no way to trigger fullscreen, so on devices with no native support, playsinline
        // must be enabled and iosNative fullscreen must be disabled to offer the fullscreen fallback
        !this.player.isYouTube || Fullscreen.nativeSupported || !browser.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative
      ].every(Boolean);
    }
    // Get active state
    get active() {
      if (!this.supported) return false;
      if (!Fullscreen.nativeSupported || this.forceFallback) {
        return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
      }
      const element = !this.prefix ? this.target.getRootNode().fullscreenElement : this.target.getRootNode()[`${this.prefix}${this.property}Element`];
      return element && element.shadowRoot ? element === this.target.getRootNode().host : element === this.target;
    }
    // Get target element
    get target() {
      var _this$player$elements;
      return browser.isIos && this.player.config.fullscreen.iosNative ? this.player.media : (_this$player$elements = this.player.elements.fullscreen) !== null && _this$player$elements !== void 0 ? _this$player$elements : this.player.elements.container;
    }
  }
  function loadImage(src, minWidth = 1) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      const handler = () => {
        delete image.onload;
        delete image.onerror;
        (image.naturalWidth >= minWidth ? resolve : reject)(image);
      };
      Object.assign(image, {
        onload: handler,
        onerror: handler,
        src
      });
    });
  }
  const ui = {
    addStyleHook() {
      toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), true);
      toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },
    // Toggle native HTML5 media controls
    toggleNativeControls(toggle = false) {
      if (toggle && this.isHTML5) {
        this.media.setAttribute("controls", "");
      } else {
        this.media.removeAttribute("controls");
      }
    },
    // Setup the UI
    build() {
      this.listeners.media();
      if (!this.supported.ui) {
        this.debug.warn(`Basic support only for ${this.provider} ${this.type}`);
        ui.toggleNativeControls.call(this, true);
        return;
      }
      if (!is.element(this.elements.controls)) {
        controls.inject.call(this);
        this.listeners.controls();
      }
      ui.toggleNativeControls.call(this);
      if (this.isHTML5) {
        captions.setup.call(this);
      }
      this.volume = null;
      this.muted = null;
      this.loop = null;
      this.quality = null;
      this.speed = null;
      controls.updateVolume.call(this);
      controls.timeUpdate.call(this);
      controls.durationUpdate.call(this);
      ui.checkPlaying.call(this);
      toggleClass(this.elements.container, this.config.classNames.pip.supported, support.pip && this.isHTML5 && this.isVideo);
      toggleClass(this.elements.container, this.config.classNames.airplay.supported, support.airplay && this.isHTML5);
      toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch);
      this.ready = true;
      setTimeout(() => {
        triggerEvent.call(this, this.media, "ready");
      }, 0);
      ui.setTitle.call(this);
      if (this.poster) {
        ui.setPoster.call(this, this.poster, false).catch(() => {
        });
      }
      if (this.config.duration) {
        controls.durationUpdate.call(this);
      }
      if (this.config.mediaMetadata) {
        controls.setMediaMetadata.call(this);
      }
    },
    // Setup aria attribute for play and iframe title
    setTitle() {
      let label = i18n.get("play", this.config);
      if (is.string(this.config.title) && !is.empty(this.config.title)) {
        label += `, ${this.config.title}`;
      }
      Array.from(this.elements.buttons.play || []).forEach((button) => {
        button.setAttribute("aria-label", label);
      });
      if (this.isEmbed) {
        const iframe = getElement.call(this, "iframe");
        if (!is.element(iframe)) {
          return;
        }
        const title = !is.empty(this.config.title) ? this.config.title : "video";
        const format2 = i18n.get("frameTitle", this.config);
        iframe.setAttribute("title", format2.replace("{title}", title));
      }
    },
    // Toggle poster
    togglePoster(enable) {
      toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
    },
    // Set the poster image (async)
    // Used internally for the poster setter, with the passive option forced to false
    setPoster(poster, passive = true) {
      if (passive && this.poster) {
        return Promise.reject(new Error("Poster already set"));
      }
      this.media.setAttribute("data-poster", poster);
      this.elements.poster.removeAttribute("hidden");
      return ready.call(this).then(() => loadImage(poster)).catch((error) => {
        if (poster === this.poster) {
          ui.togglePoster.call(this, false);
        }
        throw error;
      }).then(() => {
        if (poster !== this.poster) {
          throw new Error("setPoster cancelled by later call to setPoster");
        }
      }).then(() => {
        Object.assign(this.elements.poster.style, {
          backgroundImage: `url('${poster}')`,
          // Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
          backgroundSize: ""
        });
        ui.togglePoster.call(this, true);
        return poster;
      });
    },
    // Check playing state
    checkPlaying(event) {
      toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
      toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
      toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped);
      Array.from(this.elements.buttons.play || []).forEach((target) => {
        Object.assign(target, {
          pressed: this.playing
        });
        target.setAttribute("aria-label", i18n.get(this.playing ? "pause" : "play", this.config));
      });
      if (is.event(event) && event.type === "timeupdate") {
        return;
      }
      ui.toggleControls.call(this);
    },
    // Check if media is loading
    checkLoading(event) {
      this.loading = ["stalled", "waiting"].includes(event.type);
      clearTimeout(this.timers.loading);
      this.timers.loading = setTimeout(() => {
        toggleClass(this.elements.container, this.config.classNames.loading, this.loading);
        ui.toggleControls.call(this);
      }, this.loading ? 250 : 0);
    },
    // Toggle controls based on state and `force` argument
    toggleControls(force) {
      const {
        controls: controlsElement
      } = this.elements;
      if (controlsElement && this.config.hideControls) {
        const recentTouchSeek = this.touch && this.lastSeekTime + 2e3 > Date.now();
        this.toggleControls(Boolean(force || this.loading || this.paused || controlsElement.pressed || controlsElement.hover || recentTouchSeek));
      }
    },
    // Migrate any custom properties from the media to the parent
    migrateStyles() {
      Object.values({
        ...this.media.style
      }).filter((key) => !is.empty(key) && is.string(key) && key.startsWith("--plyr")).forEach((key) => {
        this.elements.container.style.setProperty(key, this.media.style.getPropertyValue(key));
        this.media.style.removeProperty(key);
      });
      if (is.empty(this.media.style)) {
        this.media.removeAttribute("style");
      }
    }
  };
  class Listeners {
    constructor(_player) {
      _defineProperty$1(this, "firstTouch", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player;
        player.touch = true;
        toggleClass(elements.container, player.config.classNames.isTouch, true);
      });
      _defineProperty$1(this, "global", (toggle = true) => {
        const {
          player
        } = this;
        if (player.config.keyboard.global) {
          toggleListener.call(player, window, "keydown keyup", this.handleKey, toggle, false);
        }
        toggleListener.call(player, document.body, "click", this.toggleMenu, toggle);
        once.call(player, document.body, "touchstart", this.firstTouch);
      });
      _defineProperty$1(this, "container", () => {
        const {
          player
        } = this;
        const {
          config,
          elements,
          timers
        } = player;
        if (!config.keyboard.global && config.keyboard.focused) {
          on.call(player, elements.container, "keydown keyup", this.handleKey, false);
        }
        on.call(player, elements.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (event) => {
          const {
            controls: controlsElement
          } = elements;
          if (controlsElement && event.type === "enterfullscreen") {
            controlsElement.pressed = false;
            controlsElement.hover = false;
          }
          const show = ["touchstart", "touchmove", "mousemove"].includes(event.type);
          let delay = 0;
          if (show) {
            ui.toggleControls.call(player, true);
            delay = player.touch ? 3e3 : 2e3;
          }
          clearTimeout(timers.controls);
          timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
        });
        const setGutter = () => {
          if (!player.isVimeo || player.config.vimeo.premium) {
            return;
          }
          const target = elements.wrapper;
          const {
            active
          } = player.fullscreen;
          const [videoWidth, videoHeight] = getAspectRatio.call(player);
          const useNativeAspectRatio = supportsCSS(`aspect-ratio: ${videoWidth} / ${videoHeight}`);
          if (!active) {
            if (useNativeAspectRatio) {
              target.style.width = null;
              target.style.height = null;
            } else {
              target.style.maxWidth = null;
              target.style.margin = null;
            }
            return;
          }
          const [viewportWidth, viewportHeight] = getViewportSize();
          const overflow = viewportWidth / viewportHeight > videoWidth / videoHeight;
          if (useNativeAspectRatio) {
            target.style.width = overflow ? "auto" : "100%";
            target.style.height = overflow ? "100%" : "auto";
          } else {
            target.style.maxWidth = overflow ? `${viewportHeight / videoHeight * videoWidth}px` : null;
            target.style.margin = overflow ? "0 auto" : null;
          }
        };
        const resized = () => {
          clearTimeout(timers.resized);
          timers.resized = setTimeout(setGutter, 50);
        };
        on.call(player, elements.container, "enterfullscreen exitfullscreen", (event) => {
          const {
            target
          } = player.fullscreen;
          if (target !== elements.container) {
            return;
          }
          if (!player.isEmbed && is.empty(player.config.ratio)) {
            return;
          }
          setGutter();
          const method = event.type === "enterfullscreen" ? on : off;
          method.call(player, window, "resize", resized);
        });
      });
      _defineProperty$1(this, "media", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player;
        on.call(player, player.media, "timeupdate seeking seeked", (event) => controls.timeUpdate.call(player, event));
        on.call(player, player.media, "durationchange loadeddata loadedmetadata", (event) => controls.durationUpdate.call(player, event));
        on.call(player, player.media, "ended", () => {
          if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
            player.restart();
            player.pause();
          }
        });
        on.call(player, player.media, "progress playing seeking seeked", (event) => controls.updateProgress.call(player, event));
        on.call(player, player.media, "volumechange", (event) => controls.updateVolume.call(player, event));
        on.call(player, player.media, "playing play pause ended emptied timeupdate", (event) => ui.checkPlaying.call(player, event));
        on.call(player, player.media, "waiting canplay seeked playing", (event) => ui.checkLoading.call(player, event));
        if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
          const wrapper = getElement.call(player, `.${player.config.classNames.video}`);
          if (!is.element(wrapper)) {
            return;
          }
          on.call(player, elements.container, "click", (event) => {
            const targets = [elements.container, wrapper];
            if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
              return;
            }
            if (player.touch && player.config.hideControls) {
              return;
            }
            if (player.ended) {
              this.proxy(event, player.restart, "restart");
              this.proxy(event, () => {
                silencePromise(player.play());
              }, "play");
            } else {
              this.proxy(event, () => {
                silencePromise(player.togglePlay());
              }, "play");
            }
          });
        }
        if (player.supported.ui && player.config.disableContextMenu) {
          on.call(player, elements.wrapper, "contextmenu", (event) => {
            event.preventDefault();
          }, false);
        }
        on.call(player, player.media, "volumechange", () => {
          player.storage.set({
            volume: player.volume,
            muted: player.muted
          });
        });
        on.call(player, player.media, "ratechange", () => {
          controls.updateSetting.call(player, "speed");
          player.storage.set({
            speed: player.speed
          });
        });
        on.call(player, player.media, "qualitychange", (event) => {
          controls.updateSetting.call(player, "quality", null, event.detail.quality);
        });
        on.call(player, player.media, "ready qualitychange", () => {
          controls.setDownloadUrl.call(player);
        });
        const proxyEvents = player.config.events.concat(["keyup", "keydown"]).join(" ");
        on.call(player, player.media, proxyEvents, (event) => {
          let {
            detail = {}
          } = event;
          if (event.type === "error") {
            detail = player.media.error;
          }
          triggerEvent.call(player, elements.container, event.type, true, detail);
        });
      });
      _defineProperty$1(this, "proxy", (event, defaultHandler, customHandlerKey) => {
        const {
          player
        } = this;
        const customHandler = player.config.listeners[customHandlerKey];
        const hasCustomHandler = is.function(customHandler);
        let returned = true;
        if (hasCustomHandler) {
          returned = customHandler.call(player, event);
        }
        if (returned !== false && is.function(defaultHandler)) {
          defaultHandler.call(player, event);
        }
      });
      _defineProperty$1(this, "bind", (element, type, defaultHandler, customHandlerKey, passive = true) => {
        const {
          player
        } = this;
        const customHandler = player.config.listeners[customHandlerKey];
        const hasCustomHandler = is.function(customHandler);
        on.call(player, element, type, (event) => this.proxy(event, defaultHandler, customHandlerKey), passive && !hasCustomHandler);
      });
      _defineProperty$1(this, "controls", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player;
        const inputEvent = browser.isIE ? "change" : "input";
        if (elements.buttons.play) {
          Array.from(elements.buttons.play).forEach((button) => {
            this.bind(button, "click", () => {
              silencePromise(player.togglePlay());
            }, "play");
          });
        }
        this.bind(elements.buttons.restart, "click", player.restart, "restart");
        this.bind(elements.buttons.rewind, "click", () => {
          player.lastSeekTime = Date.now();
          player.rewind();
        }, "rewind");
        this.bind(elements.buttons.fastForward, "click", () => {
          player.lastSeekTime = Date.now();
          player.forward();
        }, "fastForward");
        this.bind(elements.buttons.mute, "click", () => {
          player.muted = !player.muted;
        }, "mute");
        this.bind(elements.buttons.captions, "click", () => player.toggleCaptions());
        this.bind(elements.buttons.download, "click", () => {
          triggerEvent.call(player, player.media, "download");
        }, "download");
        this.bind(elements.buttons.fullscreen, "click", () => {
          player.fullscreen.toggle();
        }, "fullscreen");
        this.bind(elements.buttons.pip, "click", () => {
          player.pip = "toggle";
        }, "pip");
        this.bind(elements.buttons.airplay, "click", player.airplay, "airplay");
        this.bind(elements.buttons.settings, "click", (event) => {
          event.stopPropagation();
          event.preventDefault();
          controls.toggleMenu.call(player, event);
        }, null, false);
        this.bind(
          elements.buttons.settings,
          "keyup",
          (event) => {
            if (![" ", "Enter"].includes(event.key)) {
              return;
            }
            if (event.key === "Enter") {
              controls.focusFirstMenuItem.call(player, null, true);
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            controls.toggleMenu.call(player, event);
          },
          null,
          false
          // Can't be passive as we're preventing default
        );
        this.bind(elements.settings.menu, "keydown", (event) => {
          if (event.key === "Escape") {
            controls.toggleMenu.call(player, event);
          }
        });
        this.bind(elements.inputs.seek, "mousedown mousemove", (event) => {
          const rect = elements.progress.getBoundingClientRect();
          const scrollLeft = event.pageX - event.clientX;
          const percent = 100 / rect.width * (event.pageX - rect.left - scrollLeft);
          event.currentTarget.setAttribute("seek-value", percent);
        });
        this.bind(elements.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (event) => {
          const seek = event.currentTarget;
          const attribute = "play-on-seeked";
          if (is.keyboardEvent(event) && !["ArrowLeft", "ArrowRight"].includes(event.key)) {
            return;
          }
          player.lastSeekTime = Date.now();
          const play = seek.hasAttribute(attribute);
          const done = ["mouseup", "touchend", "keyup"].includes(event.type);
          if (play && done) {
            seek.removeAttribute(attribute);
            silencePromise(player.play());
          } else if (!done && player.playing) {
            seek.setAttribute(attribute, "");
            player.pause();
          }
        });
        if (browser.isIos) {
          const inputs = getElements.call(player, 'input[type="range"]');
          Array.from(inputs).forEach((input) => this.bind(input, inputEvent, (event) => repaint(event.target)));
        }
        this.bind(elements.inputs.seek, inputEvent, (event) => {
          const seek = event.currentTarget;
          let seekTo = seek.getAttribute("seek-value");
          if (is.empty(seekTo)) {
            seekTo = seek.value;
          }
          seek.removeAttribute("seek-value");
          player.currentTime = seekTo / seek.max * player.duration;
        }, "seek");
        this.bind(elements.progress, "mouseenter mouseleave mousemove", (event) => controls.updateSeekTooltip.call(player, event));
        this.bind(elements.progress, "mousemove touchmove", (event) => {
          const {
            previewThumbnails
          } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.startMove(event);
          }
        });
        this.bind(elements.progress, "mouseleave touchend click", () => {
          const {
            previewThumbnails
          } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.endMove(false, true);
          }
        });
        this.bind(elements.progress, "mousedown touchstart", (event) => {
          const {
            previewThumbnails
          } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.startScrubbing(event);
          }
        });
        this.bind(elements.progress, "mouseup touchend", (event) => {
          const {
            previewThumbnails
          } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.endScrubbing(event);
          }
        });
        if (browser.isWebKit) {
          Array.from(getElements.call(player, 'input[type="range"]')).forEach((element) => {
            this.bind(element, "input", (event) => controls.updateRangeFill.call(player, event.target));
          });
        }
        if (player.config.toggleInvert && !is.element(elements.display.duration)) {
          this.bind(elements.display.currentTime, "click", () => {
            if (player.currentTime === 0) {
              return;
            }
            player.config.invertTime = !player.config.invertTime;
            controls.timeUpdate.call(player);
          });
        }
        this.bind(elements.inputs.volume, inputEvent, (event) => {
          player.volume = event.target.value;
        }, "volume");
        this.bind(elements.controls, "mouseenter mouseleave", (event) => {
          elements.controls.hover = !player.touch && event.type === "mouseenter";
        });
        if (elements.fullscreen) {
          Array.from(elements.fullscreen.children).filter((c) => !c.contains(elements.container)).forEach((child) => {
            this.bind(child, "mouseenter mouseleave", (event) => {
              if (elements.controls) {
                elements.controls.hover = !player.touch && event.type === "mouseenter";
              }
            });
          });
        }
        this.bind(elements.controls, "mousedown mouseup touchstart touchend touchcancel", (event) => {
          elements.controls.pressed = ["mousedown", "touchstart"].includes(event.type);
        });
        this.bind(elements.controls, "focusin", () => {
          const {
            config,
            timers
          } = player;
          toggleClass(elements.controls, config.classNames.noTransition, true);
          ui.toggleControls.call(player, true);
          setTimeout(() => {
            toggleClass(elements.controls, config.classNames.noTransition, false);
          }, 0);
          const delay = this.touch ? 3e3 : 4e3;
          clearTimeout(timers.controls);
          timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
        });
        this.bind(elements.inputs.volume, "wheel", (event) => {
          const inverted = event.webkitDirectionInvertedFromDevice;
          const [x, y] = [event.deltaX, -event.deltaY].map((value) => inverted ? -value : value);
          const direction = Math.sign(Math.abs(x) > Math.abs(y) ? x : y);
          player.increaseVolume(direction / 50);
          const {
            volume
          } = player.media;
          if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
            event.preventDefault();
          }
        }, "volume", false);
      });
      this.player = _player;
      this.lastKey = null;
      this.focusTimer = null;
      this.lastKeyDown = null;
      this.handleKey = this.handleKey.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.firstTouch = this.firstTouch.bind(this);
    }
    // Handle key presses
    handleKey(event) {
      const {
        player
      } = this;
      const {
        elements
      } = player;
      const {
        key,
        type,
        altKey,
        ctrlKey,
        metaKey,
        shiftKey
      } = event;
      const pressed = type === "keydown";
      const repeat = pressed && key === this.lastKey;
      if (altKey || ctrlKey || metaKey || shiftKey) {
        return;
      }
      if (!key) {
        return;
      }
      const seekByIncrement = (increment) => {
        player.currentTime = player.duration / 10 * increment;
      };
      if (pressed) {
        const focused = document.activeElement;
        if (is.element(focused)) {
          const {
            editable
          } = player.config.selectors;
          const {
            seek
          } = elements.inputs;
          if (focused !== seek && matches(focused, editable)) {
            return;
          }
          if (event.key === " " && matches(focused, 'button, [role^="menuitem"]')) {
            return;
          }
        }
        const preventDefault = [" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"];
        if (preventDefault.includes(key)) {
          event.preventDefault();
          event.stopPropagation();
        }
        switch (key) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            if (!repeat) {
              seekByIncrement(Number.parseInt(key, 10));
            }
            break;
          case " ":
          case "k":
            if (!repeat) {
              silencePromise(player.togglePlay());
            }
            break;
          case "ArrowUp":
            player.increaseVolume(0.1);
            break;
          case "ArrowDown":
            player.decreaseVolume(0.1);
            break;
          case "m":
            if (!repeat) {
              player.muted = !player.muted;
            }
            break;
          case "ArrowRight":
            player.forward();
            break;
          case "ArrowLeft":
            player.rewind();
            break;
          case "f":
            player.fullscreen.toggle();
            break;
          case "c":
            if (!repeat) {
              player.toggleCaptions();
            }
            break;
          case "l":
            player.loop = !player.loop;
            break;
        }
        if (key === "Escape" && !player.fullscreen.usingNative && player.fullscreen.active) {
          player.fullscreen.toggle();
        }
        this.lastKey = key;
      } else {
        this.lastKey = null;
      }
    }
    // Toggle menu
    toggleMenu(event) {
      controls.toggleMenu.call(this.player, event);
    }
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var loadjs_umd$1 = { exports: {} };
  var loadjs_umd = loadjs_umd$1.exports;
  var hasRequiredLoadjs_umd;
  function requireLoadjs_umd() {
    if (hasRequiredLoadjs_umd) return loadjs_umd$1.exports;
    hasRequiredLoadjs_umd = 1;
    (function(module2, exports2) {
      (function(root, factory) {
        {
          module2.exports = factory();
        }
      })(loadjs_umd, function() {
        var devnull = function() {
        }, bundleIdCache = {}, bundleResultCache = {}, bundleCallbackQueue = {};
        function subscribe(bundleIds, callbackFn) {
          bundleIds = bundleIds.push ? bundleIds : [bundleIds];
          var depsNotFound = [], i = bundleIds.length, numWaiting = i, fn, bundleId, r, q;
          fn = function(bundleId2, pathsNotFound) {
            if (pathsNotFound.length) depsNotFound.push(bundleId2);
            numWaiting--;
            if (!numWaiting) callbackFn(depsNotFound);
          };
          while (i--) {
            bundleId = bundleIds[i];
            r = bundleResultCache[bundleId];
            if (r) {
              fn(bundleId, r);
              continue;
            }
            q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
            q.push(fn);
          }
        }
        function publish(bundleId, pathsNotFound) {
          if (!bundleId) return;
          var q = bundleCallbackQueue[bundleId];
          bundleResultCache[bundleId] = pathsNotFound;
          if (!q) return;
          while (q.length) {
            q[0](bundleId, pathsNotFound);
            q.splice(0, 1);
          }
        }
        function executeCallbacks(args, depsNotFound) {
          if (args.call) args = {
            success: args
          };
          if (depsNotFound.length) (args.error || devnull)(depsNotFound);
          else (args.success || devnull)(args);
        }
        function loadFile(path, callbackFn, args, numTries) {
          var doc = document, async = args.async, maxTries = (args.numRetries || 0) + 1, beforeCallbackFn = args.before || devnull, pathname = path.replace(/[\?|#].*$/, ""), pathStripped = path.replace(/^(css|img|module|nomodule)!/, ""), isLegacyIECss, hasModuleSupport, e;
          numTries = numTries || 0;
          if (/(^css!|\.css$)/.test(pathname)) {
            e = doc.createElement("link");
            e.rel = "stylesheet";
            e.href = pathStripped;
            isLegacyIECss = "hideFocus" in e;
            if (isLegacyIECss && e.relList) {
              isLegacyIECss = 0;
              e.rel = "preload";
              e.as = "style";
            }
          } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
            e = doc.createElement("img");
            e.src = pathStripped;
          } else {
            e = doc.createElement("script");
            e.src = pathStripped;
            e.async = async === void 0 ? true : async;
            hasModuleSupport = "noModule" in e;
            if (/^module!/.test(pathname)) {
              if (!hasModuleSupport) return callbackFn(path, "l");
              e.type = "module";
            } else if (/^nomodule!/.test(pathname) && hasModuleSupport) return callbackFn(path, "l");
          }
          e.onload = e.onerror = e.onbeforeload = function(ev) {
            var result = ev.type[0];
            if (isLegacyIECss) {
              try {
                if (!e.sheet.cssText.length) result = "e";
              } catch (x) {
                if (x.code != 18) result = "e";
              }
            }
            if (result == "e") {
              numTries += 1;
              if (numTries < maxTries) {
                return loadFile(path, callbackFn, args, numTries);
              }
            } else if (e.rel == "preload" && e.as == "style") {
              return e.rel = "stylesheet";
            }
            callbackFn(path, result, ev.defaultPrevented);
          };
          if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
        }
        function loadFiles(paths, callbackFn, args) {
          paths = paths.push ? paths : [paths];
          var numWaiting = paths.length, x = numWaiting, pathsNotFound = [], fn, i;
          fn = function(path, result, defaultPrevented) {
            if (result == "e") pathsNotFound.push(path);
            if (result == "b") {
              if (defaultPrevented) pathsNotFound.push(path);
              else return;
            }
            numWaiting--;
            if (!numWaiting) callbackFn(pathsNotFound);
          };
          for (i = 0; i < x; i++) loadFile(paths[i], fn, args);
        }
        function loadjs2(paths, arg1, arg2) {
          var bundleId, args;
          if (arg1 && arg1.trim) bundleId = arg1;
          args = (bundleId ? arg2 : arg1) || {};
          if (bundleId) {
            if (bundleId in bundleIdCache) {
              throw "LoadJS";
            } else {
              bundleIdCache[bundleId] = true;
            }
          }
          function loadFn(resolve, reject) {
            loadFiles(paths, function(pathsNotFound) {
              executeCallbacks(args, pathsNotFound);
              if (resolve) {
                executeCallbacks({
                  success: resolve,
                  error: reject
                }, pathsNotFound);
              }
              publish(bundleId, pathsNotFound);
            }, args);
          }
          if (args.returnPromise) return new Promise(loadFn);
          else loadFn();
        }
        loadjs2.ready = function ready2(deps, args) {
          subscribe(deps, function(depsNotFound) {
            executeCallbacks(args, depsNotFound);
          });
          return loadjs2;
        };
        loadjs2.done = function done(bundleId) {
          publish(bundleId, []);
        };
        loadjs2.reset = function reset() {
          bundleIdCache = {};
          bundleResultCache = {};
          bundleCallbackQueue = {};
        };
        loadjs2.isDefined = function isDefined(bundleId) {
          return bundleId in bundleIdCache;
        };
        return loadjs2;
      });
    })(loadjs_umd$1);
    return loadjs_umd$1.exports;
  }
  var loadjs_umdExports = requireLoadjs_umd();
  var loadjs = /* @__PURE__ */ getDefaultExportFromCjs(loadjs_umdExports);
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      loadjs(url, {
        success: resolve,
        error: reject
      });
    });
  }
  function parseId$1(url) {
    if (is.empty(url)) {
      return null;
    }
    if (is.number(Number(url))) {
      return url;
    }
    const regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
    const match = url.match(regex);
    return match ? match[2] : url;
  }
  function parseHash(url) {
    const regex = /^.*(vimeo.com\/|video\/)(\d+)(\?.*h=|\/)+([\d,a-f]+)/;
    const found = url.match(regex);
    return found && found.length === 5 ? found[4] : null;
  }
  function assurePlaybackState$1(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }
    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent.call(this, this.media, play ? "play" : "pause");
    }
  }
  const vimeo = {
    setup() {
      const player = this;
      toggleClass(player.elements.wrapper, player.config.classNames.embed, true);
      player.options.speed = player.config.speed.options;
      setAspectRatio.call(player);
      if (!is.object(window.Vimeo)) {
        loadScript(player.config.urls.vimeo.sdk).then(() => {
          vimeo.ready.call(player);
        }).catch((error) => {
          player.debug.warn("Vimeo SDK (player.js) failed to load", error);
        });
      } else {
        vimeo.ready.call(player);
      }
    },
    // API Ready
    ready() {
      const player = this;
      const config = player.config.vimeo;
      const {
        premium,
        referrerPolicy,
        ...frameParams
      } = config;
      let source2 = player.media.getAttribute("src");
      let hash = "";
      if (is.empty(source2)) {
        source2 = player.media.getAttribute(player.config.attributes.embed.id);
        hash = player.media.getAttribute(player.config.attributes.embed.hash);
      } else {
        hash = parseHash(source2);
      }
      const hashParam = hash ? {
        h: hash
      } : {};
      if (premium) {
        Object.assign(frameParams, {
          controls: false,
          sidedock: false
        });
      }
      const params = buildUrlParams({
        loop: player.config.loop.active,
        autoplay: player.autoplay,
        muted: player.muted,
        gesture: "media",
        playsinline: player.config.playsinline,
        // hash has to be added to iframe-URL
        ...hashParam,
        ...frameParams
      });
      const id = parseId$1(source2);
      const iframe = createElement("iframe");
      const src = format(player.config.urls.vimeo.iframe, id, params);
      iframe.setAttribute("src", src);
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; "));
      if (!is.empty(referrerPolicy)) {
        iframe.setAttribute("referrerPolicy", referrerPolicy);
      }
      if (premium || !config.customControls) {
        iframe.setAttribute("data-poster", player.poster);
        player.media = replaceElement(iframe, player.media);
      } else {
        const wrapper = createElement("div", {
          "class": player.config.classNames.embedContainer,
          "data-poster": player.poster
        });
        wrapper.appendChild(iframe);
        player.media = replaceElement(wrapper, player.media);
      }
      if (!config.customControls) {
        fetch(format(player.config.urls.vimeo.api, src)).then((response) => {
          if (is.empty(response) || !response.thumbnail_url) {
            return;
          }
          ui.setPoster.call(player, response.thumbnail_url).catch(() => {
          });
        });
      }
      player.embed = new window.Vimeo.Player(iframe, {
        autopause: player.config.autopause,
        muted: player.muted
      });
      player.media.paused = true;
      player.media.currentTime = 0;
      if (player.supported.ui) {
        player.embed.disableTextTrack();
      }
      player.media.play = () => {
        assurePlaybackState$1.call(player, true);
        return player.embed.play();
      };
      player.media.pause = () => {
        assurePlaybackState$1.call(player, false);
        return player.embed.pause();
      };
      player.media.stop = () => {
        player.pause();
        player.currentTime = 0;
      };
      let {
        currentTime
      } = player.media;
      Object.defineProperty(player.media, "currentTime", {
        get() {
          return currentTime;
        },
        set(time) {
          const {
            embed,
            media: media2,
            paused,
            volume: volume2
          } = player;
          const restorePause = paused && !embed.hasPlayed;
          media2.seeking = true;
          triggerEvent.call(player, media2, "seeking");
          Promise.resolve(restorePause && embed.setVolume(0)).then(() => embed.setCurrentTime(time)).then(() => restorePause && embed.pause()).then(() => restorePause && embed.setVolume(volume2)).catch(() => {
          });
        }
      });
      let speed = player.config.speed.selected;
      Object.defineProperty(player.media, "playbackRate", {
        get() {
          return speed;
        },
        set(input) {
          player.embed.setPlaybackRate(input).then(() => {
            speed = input;
            triggerEvent.call(player, player.media, "ratechange");
          }).catch(() => {
            player.options.speed = [1];
          });
        }
      });
      let {
        volume
      } = player.config;
      Object.defineProperty(player.media, "volume", {
        get() {
          return volume;
        },
        set(input) {
          player.embed.setVolume(input).then(() => {
            volume = input;
            triggerEvent.call(player, player.media, "volumechange");
          });
        }
      });
      let {
        muted
      } = player.config;
      Object.defineProperty(player.media, "muted", {
        get() {
          return muted;
        },
        set(input) {
          const toggle = is.boolean(input) ? input : false;
          player.embed.setMuted(toggle ? true : player.config.muted).then(() => {
            muted = toggle;
            triggerEvent.call(player, player.media, "volumechange");
          });
        }
      });
      let {
        loop
      } = player.config;
      Object.defineProperty(player.media, "loop", {
        get() {
          return loop;
        },
        set(input) {
          const toggle = is.boolean(input) ? input : player.config.loop.active;
          player.embed.setLoop(toggle).then(() => {
            loop = toggle;
          });
        }
      });
      let currentSrc;
      player.embed.getVideoUrl().then((value) => {
        currentSrc = value;
        controls.setDownloadUrl.call(player);
      }).catch((error) => {
        this.debug.warn(error);
      });
      Object.defineProperty(player.media, "currentSrc", {
        get() {
          return currentSrc;
        }
      });
      Object.defineProperty(player.media, "ended", {
        get() {
          return player.currentTime === player.duration;
        }
      });
      Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then((dimensions) => {
        const [width, height] = dimensions;
        player.embed.ratio = roundAspectRatio(width, height);
        setAspectRatio.call(this);
      });
      player.embed.setAutopause(player.config.autopause).then((state) => {
        player.config.autopause = state;
      });
      player.embed.getVideoTitle().then((title) => {
        player.config.title = title;
        ui.setTitle.call(this);
      });
      player.embed.getCurrentTime().then((value) => {
        currentTime = value;
        triggerEvent.call(player, player.media, "timeupdate");
      });
      player.embed.getDuration().then((value) => {
        player.media.duration = value;
        triggerEvent.call(player, player.media, "durationchange");
      });
      player.embed.getTextTracks().then((tracks) => {
        player.media.textTracks = tracks;
        captions.setup.call(player);
      });
      player.embed.on("cuechange", ({
        cues = []
      }) => {
        const strippedCues = cues.map((cue) => stripHTML(cue.text));
        captions.updateCues.call(player, strippedCues);
      });
      player.embed.on("loaded", () => {
        player.embed.getPaused().then((paused) => {
          assurePlaybackState$1.call(player, !paused);
          if (!paused) {
            triggerEvent.call(player, player.media, "playing");
          }
        });
        if (is.element(player.embed.element) && player.supported.ui) {
          const frame = player.embed.element;
          frame.setAttribute("tabindex", -1);
        }
      });
      player.embed.on("bufferstart", () => {
        triggerEvent.call(player, player.media, "waiting");
      });
      player.embed.on("bufferend", () => {
        triggerEvent.call(player, player.media, "playing");
      });
      player.embed.on("play", () => {
        assurePlaybackState$1.call(player, true);
        triggerEvent.call(player, player.media, "playing");
      });
      player.embed.on("pause", () => {
        assurePlaybackState$1.call(player, false);
      });
      player.embed.on("timeupdate", (data) => {
        player.media.seeking = false;
        currentTime = data.seconds;
        triggerEvent.call(player, player.media, "timeupdate");
      });
      player.embed.on("progress", (data) => {
        player.media.buffered = data.percent;
        triggerEvent.call(player, player.media, "progress");
        if (Number.parseInt(data.percent, 10) === 1) {
          triggerEvent.call(player, player.media, "canplaythrough");
        }
        player.embed.getDuration().then((value) => {
          if (value !== player.media.duration) {
            player.media.duration = value;
            triggerEvent.call(player, player.media, "durationchange");
          }
        });
      });
      player.embed.on("seeked", () => {
        player.media.seeking = false;
        triggerEvent.call(player, player.media, "seeked");
      });
      player.embed.on("ended", () => {
        player.media.paused = true;
        triggerEvent.call(player, player.media, "ended");
      });
      player.embed.on("error", (detail) => {
        player.media.error = detail;
        triggerEvent.call(player, player.media, "error");
      });
      if (config.customControls) {
        setTimeout(() => ui.build.call(player), 0);
      }
    }
  };
  function parseId(url) {
    if (is.empty(url)) {
      return null;
    }
    const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regex);
    return match && match[2] ? match[2] : url;
  }
  function assurePlaybackState(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }
    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent.call(this, this.media, play ? "play" : "pause");
    }
  }
  function getHost(config) {
    if (config.noCookie) {
      return "https://www.youtube-nocookie.com";
    }
    if (window.location.protocol === "http:") {
      return "http://www.youtube.com";
    }
    return void 0;
  }
  const youtube = {
    setup() {
      toggleClass(this.elements.wrapper, this.config.classNames.embed, true);
      if (is.object(window.YT) && is.function(window.YT.Player)) {
        youtube.ready.call(this);
      } else {
        const callback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (is.function(callback)) {
            callback();
          }
          youtube.ready.call(this);
        };
        loadScript(this.config.urls.youtube.sdk).catch((error) => {
          this.debug.warn("YouTube API failed to load", error);
        });
      }
    },
    // Get the media title
    getTitle(videoId) {
      const url = format(this.config.urls.youtube.api, videoId);
      fetch(url).then((data) => {
        if (is.object(data)) {
          const {
            title,
            height,
            width
          } = data;
          this.config.title = title;
          ui.setTitle.call(this);
          this.embed.ratio = roundAspectRatio(width, height);
        }
        setAspectRatio.call(this);
      }).catch(() => {
        setAspectRatio.call(this);
      });
    },
    // API ready
    ready() {
      const player = this;
      const config = player.config.youtube;
      const currentId = player.media && player.media.getAttribute("id");
      if (!is.empty(currentId) && currentId.startsWith("youtube-")) {
        return;
      }
      let source2 = player.media.getAttribute("src");
      if (is.empty(source2)) {
        source2 = player.media.getAttribute(this.config.attributes.embed.id);
      }
      const videoId = parseId(source2);
      const id = generateId(player.provider);
      const container = createElement("div", {
        id,
        "data-poster": config.customControls ? player.poster : void 0
      });
      player.media = replaceElement(container, player.media);
      if (config.customControls) {
        const posterSrc = (s) => `https://i.ytimg.com/vi/${videoId}/${s}default.jpg`;
        loadImage(posterSrc("maxres"), 121).catch(() => loadImage(posterSrc("sd"), 121)).catch(() => loadImage(posterSrc("hq"))).then((image) => ui.setPoster.call(player, image.src)).then((src) => {
          if (!src.includes("maxres")) {
            player.elements.poster.style.backgroundSize = "cover";
          }
        }).catch(() => {
        });
      }
      player.embed = new window.YT.Player(player.media, {
        videoId,
        host: getHost(config),
        playerVars: extend({}, {
          // Autoplay
          autoplay: player.config.autoplay ? 1 : 0,
          // iframe interface language
          hl: player.config.hl,
          // Only show controls if not fully supported or opted out
          controls: player.supported.ui && config.customControls ? 0 : 1,
          // Disable keyboard as we handle it
          disablekb: 1,
          // Allow iOS inline playback
          playsinline: player.config.playsinline && !player.config.fullscreen.iosNative ? 1 : 0,
          // Captions are flaky on YouTube
          cc_load_policy: player.captions.active ? 1 : 0,
          cc_lang_pref: player.config.captions.language,
          // Tracking for stats
          widget_referrer: window ? window.location.href : null
        }, config),
        events: {
          onError(event) {
            if (!player.media.error) {
              const code = event.data;
              const message = {
                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                101: "The owner of the requested video does not allow it to be played in embedded players.",
                150: "The owner of the requested video does not allow it to be played in embedded players."
              }[code] || "An unknown error occurred";
              player.media.error = {
                code,
                message
              };
              triggerEvent.call(player, player.media, "error");
            }
          },
          onPlaybackRateChange(event) {
            const instance = event.target;
            player.media.playbackRate = instance.getPlaybackRate();
            triggerEvent.call(player, player.media, "ratechange");
          },
          onReady(event) {
            if (is.function(player.media.play)) {
              return;
            }
            const instance = event.target;
            youtube.getTitle.call(player, videoId);
            player.media.play = () => {
              assurePlaybackState.call(player, true);
              instance.playVideo();
            };
            player.media.pause = () => {
              assurePlaybackState.call(player, false);
              instance.pauseVideo();
            };
            player.media.stop = () => {
              instance.stopVideo();
            };
            player.media.duration = instance.getDuration();
            player.media.paused = true;
            player.media.currentTime = 0;
            Object.defineProperty(player.media, "currentTime", {
              get() {
                return Number(instance.getCurrentTime());
              },
              set(time) {
                if (player.paused && !player.embed.hasPlayed) {
                  player.embed.mute();
                }
                player.media.seeking = true;
                triggerEvent.call(player, player.media, "seeking");
                instance.seekTo(time);
              }
            });
            Object.defineProperty(player.media, "playbackRate", {
              get() {
                return instance.getPlaybackRate();
              },
              set(input) {
                instance.setPlaybackRate(input);
              }
            });
            let {
              volume
            } = player.config;
            Object.defineProperty(player.media, "volume", {
              get() {
                return volume;
              },
              set(input) {
                volume = input;
                instance.setVolume(volume * 100);
                triggerEvent.call(player, player.media, "volumechange");
              }
            });
            let {
              muted
            } = player.config;
            Object.defineProperty(player.media, "muted", {
              get() {
                return muted;
              },
              set(input) {
                const toggle = is.boolean(input) ? input : muted;
                muted = toggle;
                instance[toggle ? "mute" : "unMute"]();
                instance.setVolume(volume * 100);
                triggerEvent.call(player, player.media, "volumechange");
              }
            });
            Object.defineProperty(player.media, "currentSrc", {
              get() {
                return instance.getVideoUrl();
              }
            });
            Object.defineProperty(player.media, "ended", {
              get() {
                return player.currentTime === player.duration;
              }
            });
            const speeds = instance.getAvailablePlaybackRates();
            player.options.speed = speeds.filter((s) => player.config.speed.options.includes(s));
            if (player.supported.ui && config.customControls) {
              player.media.setAttribute("tabindex", -1);
            }
            triggerEvent.call(player, player.media, "timeupdate");
            triggerEvent.call(player, player.media, "durationchange");
            clearInterval(player.timers.buffering);
            player.timers.buffering = setInterval(() => {
              player.media.buffered = instance.getVideoLoadedFraction();
              if (player.media.lastBuffered === null || player.media.lastBuffered < player.media.buffered) {
                triggerEvent.call(player, player.media, "progress");
              }
              player.media.lastBuffered = player.media.buffered;
              if (player.media.buffered === 1) {
                clearInterval(player.timers.buffering);
                triggerEvent.call(player, player.media, "canplaythrough");
              }
            }, 200);
            if (config.customControls) {
              setTimeout(() => ui.build.call(player), 50);
            }
          },
          onStateChange(event) {
            const instance = event.target;
            clearInterval(player.timers.playing);
            const seeked = player.media.seeking && [1, 2].includes(event.data);
            if (seeked) {
              player.media.seeking = false;
              triggerEvent.call(player, player.media, "seeked");
            }
            switch (event.data) {
              case -1:
                triggerEvent.call(player, player.media, "timeupdate");
                player.media.buffered = instance.getVideoLoadedFraction();
                triggerEvent.call(player, player.media, "progress");
                break;
              case 0:
                assurePlaybackState.call(player, false);
                if (player.media.loop) {
                  instance.stopVideo();
                  instance.playVideo();
                } else {
                  triggerEvent.call(player, player.media, "ended");
                }
                break;
              case 1:
                if (config.customControls && !player.config.autoplay && player.media.paused && !player.embed.hasPlayed) {
                  player.media.pause();
                } else {
                  assurePlaybackState.call(player, true);
                  triggerEvent.call(player, player.media, "playing");
                  player.timers.playing = setInterval(() => {
                    triggerEvent.call(player, player.media, "timeupdate");
                  }, 50);
                  if (player.media.duration !== instance.getDuration()) {
                    player.media.duration = instance.getDuration();
                    triggerEvent.call(player, player.media, "durationchange");
                  }
                }
                break;
              case 2:
                if (!player.muted) {
                  player.embed.unMute();
                }
                assurePlaybackState.call(player, false);
                break;
              case 3:
                triggerEvent.call(player, player.media, "waiting");
                break;
            }
            triggerEvent.call(player, player.elements.container, "statechange", false, {
              code: event.data
            });
          }
        }
      });
    }
  };
  const media = {
    // Setup media
    setup() {
      if (!this.media) {
        this.debug.warn("No media element found!");
        return;
      }
      toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true);
      toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true);
      if (this.isEmbed) {
        toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true);
      }
      if (this.isVideo) {
        this.elements.wrapper = createElement("div", {
          class: this.config.classNames.video
        });
        wrap(this.media, this.elements.wrapper);
        this.elements.poster = createElement("div", {
          class: this.config.classNames.poster
        });
        this.elements.wrapper.appendChild(this.elements.poster);
      }
      if (this.isHTML5) {
        html5.setup.call(this);
      } else if (this.isYouTube) {
        youtube.setup.call(this);
      } else if (this.isVimeo) {
        vimeo.setup.call(this);
      }
    }
  };
  function destroy(instance) {
    if (instance.manager) {
      instance.manager.destroy();
    }
    if (instance.elements.displayContainer) {
      instance.elements.displayContainer.destroy();
    }
    instance.elements.container.remove();
  }
  class Ads {
    /**
     * Ads constructor.
     * @param {object} player
     * @return {Ads}
     */
    constructor(player) {
      _defineProperty$1(this, "load", () => {
        if (!this.enabled) {
          return;
        }
        if (!is.object(window.google) || !is.object(window.google.ima)) {
          loadScript(this.player.config.urls.googleIMA.sdk).then(() => {
            this.ready();
          }).catch(() => {
            this.trigger("error", new Error("Google IMA SDK failed to load"));
          });
        } else {
          this.ready();
        }
      });
      _defineProperty$1(this, "ready", () => {
        if (!this.enabled) {
          destroy(this);
        }
        this.startSafetyTimer(12e3, "ready()");
        this.managerPromise.then(() => {
          this.clearSafetyTimer("onAdsManagerLoaded()");
        });
        this.listeners();
        this.setupIMA();
      });
      _defineProperty$1(this, "setupIMA", () => {
        this.elements.container = createElement("div", {
          class: this.player.config.classNames.ads
        });
        this.player.elements.container.appendChild(this.elements.container);
        google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
        google.ima.settings.setLocale(this.player.config.ads.language);
        google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline);
        this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media);
        this.loader = new google.ima.AdsLoader(this.elements.displayContainer);
        this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (event) => this.onAdsManagerLoaded(event), false);
        this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (error) => this.onAdError(error), false);
        this.requestAds();
      });
      _defineProperty$1(this, "requestAds", () => {
        const {
          container
        } = this.player.elements;
        try {
          const request = new google.ima.AdsRequest();
          request.adTagUrl = this.tagUrl;
          request.linearAdSlotWidth = container.offsetWidth;
          request.linearAdSlotHeight = container.offsetHeight;
          request.nonLinearAdSlotWidth = container.offsetWidth;
          request.nonLinearAdSlotHeight = container.offsetHeight;
          request.forceNonLinearFullSlot = false;
          request.setAdWillPlayMuted(!this.player.muted);
          this.loader.requestAds(request);
        } catch (error) {
          this.onAdError(error);
        }
      });
      _defineProperty$1(this, "pollCountdown", (start = false) => {
        if (!start) {
          clearInterval(this.countdownTimer);
          this.elements.container.removeAttribute("data-badge-text");
          return;
        }
        const update = () => {
          const time = formatTime(Math.max(this.manager.getRemainingTime(), 0));
          const label = `${i18n.get("advertisement", this.player.config)} - ${time}`;
          this.elements.container.setAttribute("data-badge-text", label);
        };
        this.countdownTimer = setInterval(update, 100);
      });
      _defineProperty$1(this, "onAdsManagerLoaded", (event) => {
        if (!this.enabled) {
          return;
        }
        const settings = new google.ima.AdsRenderingSettings();
        settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        settings.enablePreloading = true;
        this.manager = event.getAdsManager(this.player, settings);
        this.cuePoints = this.manager.getCuePoints();
        this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (error) => this.onAdError(error));
        Object.keys(google.ima.AdEvent.Type).forEach((type) => {
          this.manager.addEventListener(google.ima.AdEvent.Type[type], (e) => this.onAdEvent(e));
        });
        this.trigger("loaded");
      });
      _defineProperty$1(this, "addCuePoints", () => {
        if (!is.empty(this.cuePoints)) {
          this.cuePoints.forEach((cuePoint) => {
            if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < this.player.duration) {
              const seekElement = this.player.elements.progress;
              if (is.element(seekElement)) {
                const cuePercentage = 100 / this.player.duration * cuePoint;
                const cue = createElement("span", {
                  class: this.player.config.classNames.cues
                });
                cue.style.left = `${cuePercentage.toString()}%`;
                seekElement.appendChild(cue);
              }
            }
          });
        }
      });
      _defineProperty$1(this, "onAdEvent", (event) => {
        const {
          container
        } = this.player.elements;
        const ad = event.getAd();
        const adData = event.getAdData();
        const dispatchEvent = (type) => {
          triggerEvent.call(this.player, this.player.media, `ads${type.replace(/_/g, "").toLowerCase()}`);
        };
        dispatchEvent(event.type);
        switch (event.type) {
          case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded");
            this.pollCountdown(true);
            if (!ad.isLinear()) {
              ad.width = container.offsetWidth;
              ad.height = container.offsetHeight;
            }
            break;
          case google.ima.AdEvent.Type.STARTED:
            this.manager.setVolume(this.player.volume);
            break;
          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            if (this.player.ended) {
              this.loadAds();
            } else {
              this.loader.contentComplete();
            }
            break;
          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            this.pauseContent();
            break;
          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            this.pollCountdown();
            this.resumeContent();
            break;
          case google.ima.AdEvent.Type.LOG:
            if (adData.adError) {
              this.player.debug.warn(`Non-fatal ad error: ${adData.adError.getMessage()}`);
            }
            break;
        }
      });
      _defineProperty$1(this, "onAdError", (event) => {
        this.cancel();
        this.player.debug.warn("Ads error", event);
      });
      _defineProperty$1(this, "listeners", () => {
        const {
          container
        } = this.player.elements;
        let time;
        this.player.on("canplay", () => {
          this.addCuePoints();
        });
        this.player.on("ended", () => {
          this.loader.contentComplete();
        });
        this.player.on("timeupdate", () => {
          time = this.player.currentTime;
        });
        this.player.on("seeked", () => {
          const seekedTime = this.player.currentTime;
          if (is.empty(this.cuePoints)) {
            return;
          }
          this.cuePoints.forEach((cuePoint, index) => {
            if (time < cuePoint && cuePoint < seekedTime) {
              this.manager.discardAdBreak();
              this.cuePoints.splice(index, 1);
            }
          });
        });
        window.addEventListener("resize", () => {
          if (this.manager) {
            this.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
          }
        });
      });
      _defineProperty$1(this, "play", () => {
        const {
          container
        } = this.player.elements;
        if (!this.managerPromise) {
          this.resumeContent();
        }
        this.managerPromise.then(() => {
          this.manager.setVolume(this.player.volume);
          this.elements.displayContainer.initialize();
          try {
            if (!this.initialized) {
              this.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
              this.manager.start();
            }
            this.initialized = true;
          } catch (adError) {
            this.onAdError(adError);
          }
        }).catch(() => {
        });
      });
      _defineProperty$1(this, "resumeContent", () => {
        this.elements.container.style.zIndex = "";
        this.playing = false;
        silencePromise(this.player.media.play());
      });
      _defineProperty$1(this, "pauseContent", () => {
        this.elements.container.style.zIndex = 3;
        this.playing = true;
        this.player.media.pause();
      });
      _defineProperty$1(this, "cancel", () => {
        if (this.initialized) {
          this.resumeContent();
        }
        this.trigger("error");
        this.loadAds();
      });
      _defineProperty$1(this, "loadAds", () => {
        this.managerPromise.then(() => {
          if (this.manager) {
            this.manager.destroy();
          }
          this.managerPromise = new Promise((resolve) => {
            this.on("loaded", resolve);
            this.player.debug.log(this.manager);
          });
          this.initialized = false;
          this.requestAds();
        }).catch(() => {
        });
      });
      _defineProperty$1(this, "trigger", (event, ...args) => {
        const handlers = this.events[event];
        if (is.array(handlers)) {
          handlers.forEach((handler) => {
            if (is.function(handler)) {
              handler.apply(this, args);
            }
          });
        }
      });
      _defineProperty$1(this, "on", (event, callback) => {
        if (!is.array(this.events[event])) {
          this.events[event] = [];
        }
        this.events[event].push(callback);
        return this;
      });
      _defineProperty$1(this, "startSafetyTimer", (time, from) => {
        this.player.debug.log(`Safety timer invoked from: ${from}`);
        this.safetyTimer = setTimeout(() => {
          this.cancel();
          this.clearSafetyTimer("startSafetyTimer()");
        }, time);
      });
      _defineProperty$1(this, "clearSafetyTimer", (from) => {
        if (!is.nullOrUndefined(this.safetyTimer)) {
          this.player.debug.log(`Safety timer cleared from: ${from}`);
          clearTimeout(this.safetyTimer);
          this.safetyTimer = null;
        }
      });
      this.player = player;
      this.config = player.config.ads;
      this.playing = false;
      this.initialized = false;
      this.elements = {
        container: null,
        displayContainer: null
      };
      this.manager = null;
      this.loader = null;
      this.cuePoints = null;
      this.events = {};
      this.safetyTimer = null;
      this.countdownTimer = null;
      this.managerPromise = new Promise((resolve, reject) => {
        this.on("loaded", resolve);
        this.on("error", reject);
      });
      this.load();
    }
    get enabled() {
      const {
        config
      } = this;
      return this.player.isHTML5 && this.player.isVideo && config.enabled && (!is.empty(config.publisherId) || is.url(config.tagUrl));
    }
    // Build the tag URL
    get tagUrl() {
      const {
        config
      } = this;
      if (is.url(config.tagUrl)) {
        return config.tagUrl;
      }
      const params = {
        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
        AV_CHANNELID: "5a0458dc28a06145e4519d21",
        AV_URL: window.location.hostname,
        cb: Date.now(),
        AV_WIDTH: 640,
        AV_HEIGHT: 480,
        AV_CDIM2: config.publisherId
      };
      const base = "https://go.aniview.com/api/adserver6/vast/";
      return `${base}?${buildUrlParams(params)}`;
    }
  }
  function clamp(input = 0, min = 0, max = 255) {
    return Math.min(Math.max(input, min), max);
  }
  function parseVtt(vttDataString) {
    const processedList = [];
    const frames = vttDataString.split(/\r\n\r\n|\n\n|\r\r/);
    frames.forEach((frame) => {
      const result = {};
      const lines = frame.split(/\r\n|\n|\r/);
      lines.forEach((line) => {
        if (!is.number(result.startTime)) {
          const matchTimes = line.match(/(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})( ?--> ?)(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})/);
          if (matchTimes) {
            result.startTime = Number(matchTimes[1] || 0) * 60 * 60 + Number(matchTimes[2]) * 60 + Number(matchTimes[3]) + Number(`0.${matchTimes[4]}`);
            result.endTime = Number(matchTimes[6] || 0) * 60 * 60 + Number(matchTimes[7]) * 60 + Number(matchTimes[8]) + Number(`0.${matchTimes[9]}`);
          }
        } else if (!is.empty(line.trim()) && is.empty(result.text)) {
          const lineSplit = line.trim().split("#xywh=");
          [result.text] = lineSplit;
          if (lineSplit[1]) {
            [result.x, result.y, result.w, result.h] = lineSplit[1].split(",");
          }
        }
      });
      if (result.text) {
        processedList.push(result);
      }
    });
    return processedList;
  }
  function fitRatio(ratio, outer) {
    const targetRatio = outer.width / outer.height;
    const result = {};
    if (ratio > targetRatio) {
      result.width = outer.width;
      result.height = 1 / ratio * outer.width;
    } else {
      result.height = outer.height;
      result.width = ratio * outer.height;
    }
    return result;
  }
  class PreviewThumbnails {
    /**
     * PreviewThumbnails constructor.
     * @param {Plyr} player
     * @return {PreviewThumbnails}
     */
    constructor(player) {
      _defineProperty$1(this, "load", () => {
        if (this.player.elements.display.seekTooltip) {
          this.player.elements.display.seekTooltip.hidden = this.enabled;
        }
        if (!this.enabled) return;
        this.getThumbnails().then(() => {
          if (!this.enabled) {
            return;
          }
          this.render();
          this.determineContainerAutoSizing();
          this.listeners();
          this.loaded = true;
        });
      });
      _defineProperty$1(this, "getThumbnails", () => {
        return new Promise((resolve) => {
          const {
            src
          } = this.player.config.previewThumbnails;
          if (is.empty(src)) {
            throw new Error("Missing previewThumbnails.src config attribute");
          }
          const sortAndResolve = () => {
            this.thumbnails.sort((x, y) => x.height - y.height);
            this.player.debug.log("Preview thumbnails", this.thumbnails);
            resolve();
          };
          if (is.function(src)) {
            src((thumbnails) => {
              this.thumbnails = thumbnails;
              sortAndResolve();
            });
          } else {
            const urls = is.string(src) ? [src] : src;
            const promises = urls.map((u) => this.getThumbnail(u));
            Promise.all(promises).then(sortAndResolve);
          }
        });
      });
      _defineProperty$1(this, "getThumbnail", (url) => {
        return new Promise((resolve) => {
          fetch(url, void 0, this.player.config.previewThumbnails.withCredentials).then((response) => {
            const thumbnail = {
              frames: parseVtt(response),
              height: null,
              urlPrefix: ""
            };
            if (!thumbnail.frames[0].text.startsWith("/") && !thumbnail.frames[0].text.startsWith("http://") && !thumbnail.frames[0].text.startsWith("https://")) {
              thumbnail.urlPrefix = url.substring(0, url.lastIndexOf("/") + 1);
            }
            const tempImage = new Image();
            tempImage.onload = () => {
              thumbnail.height = tempImage.naturalHeight;
              thumbnail.width = tempImage.naturalWidth;
              this.thumbnails.push(thumbnail);
              resolve();
            };
            tempImage.src = thumbnail.urlPrefix + thumbnail.frames[0].text;
          });
        });
      });
      _defineProperty$1(this, "startMove", (event) => {
        if (!this.loaded) return;
        if (!is.event(event) || !["touchmove", "mousemove"].includes(event.type)) return;
        if (!this.player.media.duration) return;
        if (event.type === "touchmove") {
          this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
        } else {
          var _this$player$config$m, _this$player$config$m2;
          const clientRect = this.player.elements.progress.getBoundingClientRect();
          const percentage = 100 / clientRect.width * (event.pageX - clientRect.left);
          this.seekTime = this.player.media.duration * (percentage / 100);
          if (this.seekTime < 0) {
            this.seekTime = 0;
          }
          if (this.seekTime > this.player.media.duration - 1) {
            this.seekTime = this.player.media.duration - 1;
          }
          this.mousePosX = event.pageX;
          this.elements.thumb.time.textContent = formatTime(this.seekTime);
          const point = (_this$player$config$m = this.player.config.markers) === null || _this$player$config$m === void 0 ? void 0 : (_this$player$config$m2 = _this$player$config$m.points) === null || _this$player$config$m2 === void 0 ? void 0 : _this$player$config$m2.find(({
            time: t
          }) => t === Math.round(this.seekTime));
          if (point) {
            this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${point.label}<br>`);
          }
        }
        this.showImageAtCurrentTime();
      });
      _defineProperty$1(this, "endMove", () => {
        this.toggleThumbContainer(false, true);
      });
      _defineProperty$1(this, "startScrubbing", (event) => {
        if (is.nullOrUndefined(event.button) || event.button === false || event.button === 0) {
          this.mouseDown = true;
          if (this.player.media.duration) {
            this.toggleScrubbingContainer(true);
            this.toggleThumbContainer(false, true);
            this.showImageAtCurrentTime();
          }
        }
      });
      _defineProperty$1(this, "endScrubbing", () => {
        this.mouseDown = false;
        if (Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime)) {
          this.toggleScrubbingContainer(false);
        } else {
          once.call(this.player, this.player.media, "timeupdate", () => {
            if (!this.mouseDown) {
              this.toggleScrubbingContainer(false);
            }
          });
        }
      });
      _defineProperty$1(this, "listeners", () => {
        this.player.on("play", () => {
          this.toggleThumbContainer(false, true);
        });
        this.player.on("seeked", () => {
          this.toggleThumbContainer(false);
        });
        this.player.on("timeupdate", () => {
          this.lastTime = this.player.media.currentTime;
        });
      });
      _defineProperty$1(this, "render", () => {
        this.elements.thumb.container = createElement("div", {
          class: this.player.config.classNames.previewThumbnails.thumbContainer
        });
        this.elements.thumb.imageContainer = createElement("div", {
          class: this.player.config.classNames.previewThumbnails.imageContainer
        });
        this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
        const timeContainer = createElement("div", {
          class: this.player.config.classNames.previewThumbnails.timeContainer
        });
        this.elements.thumb.time = createElement("span", {}, "00:00");
        timeContainer.appendChild(this.elements.thumb.time);
        this.elements.thumb.imageContainer.appendChild(timeContainer);
        if (is.element(this.player.elements.progress)) {
          this.player.elements.progress.appendChild(this.elements.thumb.container);
        }
        this.elements.scrubbing.container = createElement("div", {
          class: this.player.config.classNames.previewThumbnails.scrubbingContainer
        });
        this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
      });
      _defineProperty$1(this, "destroy", () => {
        if (this.elements.thumb.container) {
          this.elements.thumb.container.remove();
        }
        if (this.elements.scrubbing.container) {
          this.elements.scrubbing.container.remove();
        }
      });
      _defineProperty$1(this, "showImageAtCurrentTime", () => {
        if (this.mouseDown) {
          this.setScrubbingContainerSize();
        } else {
          this.setThumbContainerSizeAndPos();
        }
        const thumbNum = this.thumbnails[0].frames.findIndex((frame) => this.seekTime >= frame.startTime && this.seekTime <= frame.endTime);
        const hasThumb = thumbNum >= 0;
        let qualityIndex = 0;
        if (!this.mouseDown) {
          this.toggleThumbContainer(hasThumb);
        }
        if (!hasThumb) {
          return;
        }
        this.thumbnails.forEach((thumbnail, index) => {
          if (this.loadedImages.includes(thumbnail.frames[thumbNum].text)) {
            qualityIndex = index;
          }
        });
        if (thumbNum !== this.showingThumb) {
          this.showingThumb = thumbNum;
          this.loadImage(qualityIndex);
        }
      });
      _defineProperty$1(this, "loadImage", (qualityIndex = 0) => {
        const thumbNum = this.showingThumb;
        const thumbnail = this.thumbnails[qualityIndex];
        const {
          urlPrefix
        } = thumbnail;
        const frame = thumbnail.frames[thumbNum];
        const thumbFilename = thumbnail.frames[thumbNum].text;
        const thumbUrl = urlPrefix + thumbFilename;
        if (!this.currentImageElement || this.currentImageElement.dataset.filename !== thumbFilename) {
          if (this.loadingImage && this.usingSprites) {
            this.loadingImage.onload = null;
          }
          const previewImage = new Image();
          previewImage.src = thumbUrl;
          previewImage.dataset.index = thumbNum;
          previewImage.dataset.filename = thumbFilename;
          this.showingThumbFilename = thumbFilename;
          this.player.debug.log(`Loading image: ${thumbUrl}`);
          previewImage.onload = () => this.showImage(previewImage, frame, qualityIndex, thumbNum, thumbFilename, true);
          this.loadingImage = previewImage;
          this.removeOldImages(previewImage);
        } else {
          this.showImage(this.currentImageElement, frame, qualityIndex, thumbNum, thumbFilename, false);
          this.currentImageElement.dataset.index = thumbNum;
          this.removeOldImages(this.currentImageElement);
        }
      });
      _defineProperty$1(this, "showImage", (previewImage, frame, qualityIndex, thumbNum, thumbFilename, newImage = true) => {
        this.player.debug.log(`Showing thumb: ${thumbFilename}. num: ${thumbNum}. qual: ${qualityIndex}. newimg: ${newImage}`);
        this.setImageSizeAndOffset(previewImage, frame);
        if (newImage) {
          this.currentImageContainer.appendChild(previewImage);
          this.currentImageElement = previewImage;
          if (!this.loadedImages.includes(thumbFilename)) {
            this.loadedImages.push(thumbFilename);
          }
        }
        this.preloadNearby(thumbNum, true).then(this.preloadNearby(thumbNum, false)).then(this.getHigherQuality(qualityIndex, previewImage, frame, thumbFilename));
      });
      _defineProperty$1(this, "removeOldImages", (currentImage) => {
        Array.from(this.currentImageContainer.children).forEach((image) => {
          if (image.tagName.toLowerCase() !== "img") {
            return;
          }
          const removeDelay = this.usingSprites ? 500 : 1e3;
          if (image.dataset.index !== currentImage.dataset.index && !image.dataset.deleting) {
            image.dataset.deleting = true;
            const {
              currentImageContainer
            } = this;
            setTimeout(() => {
              currentImageContainer.removeChild(image);
              this.player.debug.log(`Removing thumb: ${image.dataset.filename}`);
            }, removeDelay);
          }
        });
      });
      _defineProperty$1(this, "preloadNearby", (thumbNum, forward = true) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const oldThumbFilename = this.thumbnails[0].frames[thumbNum].text;
            if (this.showingThumbFilename === oldThumbFilename) {
              let thumbnailsClone;
              if (forward) {
                thumbnailsClone = this.thumbnails[0].frames.slice(thumbNum);
              } else {
                thumbnailsClone = this.thumbnails[0].frames.slice(0, thumbNum).reverse();
              }
              let foundOne = false;
              thumbnailsClone.forEach((frame) => {
                const newThumbFilename = frame.text;
                if (newThumbFilename !== oldThumbFilename) {
                  if (!this.loadedImages.includes(newThumbFilename)) {
                    foundOne = true;
                    this.player.debug.log(`Preloading thumb filename: ${newThumbFilename}`);
                    const {
                      urlPrefix
                    } = this.thumbnails[0];
                    const thumbURL = urlPrefix + newThumbFilename;
                    const previewImage = new Image();
                    previewImage.src = thumbURL;
                    previewImage.onload = () => {
                      this.player.debug.log(`Preloaded thumb filename: ${newThumbFilename}`);
                      if (!this.loadedImages.includes(newThumbFilename)) this.loadedImages.push(newThumbFilename);
                      resolve();
                    };
                  }
                }
              });
              if (!foundOne) {
                resolve();
              }
            }
          }, 300);
        });
      });
      _defineProperty$1(this, "getHigherQuality", (currentQualityIndex, previewImage, frame, thumbFilename) => {
        if (currentQualityIndex < this.thumbnails.length - 1) {
          let previewImageHeight = previewImage.naturalHeight;
          if (this.usingSprites) {
            previewImageHeight = frame.h;
          }
          if (previewImageHeight < this.thumbContainerHeight) {
            setTimeout(() => {
              if (this.showingThumbFilename === thumbFilename) {
                this.player.debug.log(`Showing higher quality thumb for: ${thumbFilename}`);
                this.loadImage(currentQualityIndex + 1);
              }
            }, 300);
          }
        }
      });
      _defineProperty$1(this, "toggleThumbContainer", (toggle = false, clearShowing = false) => {
        const className = this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(className, toggle);
        if (!toggle && clearShowing) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      });
      _defineProperty$1(this, "toggleScrubbingContainer", (toggle = false) => {
        const className = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(className, toggle);
        if (!toggle) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      });
      _defineProperty$1(this, "determineContainerAutoSizing", () => {
        if (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) {
          this.sizeSpecifiedInCSS = true;
        }
      });
      _defineProperty$1(this, "setThumbContainerSizeAndPos", () => {
        const {
          imageContainer
        } = this.elements.thumb;
        if (!this.sizeSpecifiedInCSS) {
          const thumbWidth = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
          imageContainer.style.height = `${this.thumbContainerHeight}px`;
          imageContainer.style.width = `${thumbWidth}px`;
        } else if (imageContainer.clientHeight > 20 && imageContainer.clientWidth < 20) {
          const thumbWidth = Math.floor(imageContainer.clientHeight * this.thumbAspectRatio);
          imageContainer.style.width = `${thumbWidth}px`;
        } else if (imageContainer.clientHeight < 20 && imageContainer.clientWidth > 20) {
          const thumbHeight = Math.floor(imageContainer.clientWidth / this.thumbAspectRatio);
          imageContainer.style.height = `${thumbHeight}px`;
        }
        this.setThumbContainerPos();
      });
      _defineProperty$1(this, "setThumbContainerPos", () => {
        const scrubberRect = this.player.elements.progress.getBoundingClientRect();
        const containerRect = this.player.elements.container.getBoundingClientRect();
        const {
          container
        } = this.elements.thumb;
        const min = containerRect.left - scrubberRect.left + 10;
        const max = containerRect.right - scrubberRect.left - container.clientWidth - 10;
        const position = this.mousePosX - scrubberRect.left - container.clientWidth / 2;
        const clamped = clamp(position, min, max);
        container.style.left = `${clamped}px`;
        container.style.setProperty("--preview-arrow-offset", `${position - clamped}px`);
      });
      _defineProperty$1(this, "setScrubbingContainerSize", () => {
        const {
          width,
          height
        } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        this.elements.scrubbing.container.style.width = `${width}px`;
        this.elements.scrubbing.container.style.height = `${height}px`;
      });
      _defineProperty$1(this, "setImageSizeAndOffset", (previewImage, frame) => {
        if (!this.usingSprites) return;
        const multiplier = this.thumbContainerHeight / frame.h;
        previewImage.style.height = `${previewImage.naturalHeight * multiplier}px`;
        previewImage.style.width = `${previewImage.naturalWidth * multiplier}px`;
        previewImage.style.left = `-${frame.x * multiplier}px`;
        previewImage.style.top = `-${frame.y * multiplier}px`;
      });
      this.player = player;
      this.thumbnails = [];
      this.loaded = false;
      this.lastMouseMoveTime = Date.now();
      this.mouseDown = false;
      this.loadedImages = [];
      this.elements = {
        thumb: {},
        scrubbing: {}
      };
      this.load();
    }
    get enabled() {
      return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
    }
    get currentImageContainer() {
      return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
    }
    get usingSprites() {
      return Object.keys(this.thumbnails[0].frames[0]).includes("w");
    }
    get thumbAspectRatio() {
      if (this.usingSprites) {
        return this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h;
      }
      return this.thumbnails[0].width / this.thumbnails[0].height;
    }
    get thumbContainerHeight() {
      if (this.mouseDown) {
        const {
          height
        } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        return height;
      }
      if (this.sizeSpecifiedInCSS) {
        return this.elements.thumb.imageContainer.clientHeight;
      }
      return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
    }
    get currentImageElement() {
      return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
    }
    set currentImageElement(element) {
      if (this.mouseDown) {
        this.currentScrubbingImageElement = element;
      } else {
        this.currentThumbnailImageElement = element;
      }
    }
  }
  const source = {
    // Add elements to HTML5 media (source, tracks, etc)
    insertElements(type, attributes) {
      if (is.string(attributes)) {
        insertElement(type, this.media, {
          src: attributes
        });
      } else if (is.array(attributes)) {
        attributes.forEach((attribute) => {
          insertElement(type, this.media, attribute);
        });
      }
    },
    // Update source
    // Sources are not checked for support so be careful
    change(input) {
      if (!getDeep(input, "sources.length")) {
        this.debug.warn("Invalid source format");
        return;
      }
      html5.cancelRequests.call(this);
      this.destroy(() => {
        this.options.quality = [];
        removeElement(this.media);
        this.media = null;
        if (is.element(this.elements.container)) {
          this.elements.container.removeAttribute("class");
        }
        const {
          sources,
          type
        } = input;
        const [{
          provider = providers.html5,
          src
        }] = sources;
        const tagName = provider === "html5" ? type : "div";
        const attributes = provider === "html5" ? {} : {
          src
        };
        Object.assign(this, {
          provider,
          type,
          // Check for support
          supported: support.check(type, provider, this.config.playsinline),
          // Create new element
          media: createElement(tagName, attributes)
        });
        this.elements.container.appendChild(this.media);
        if (is.boolean(input.autoplay)) {
          this.config.autoplay = input.autoplay;
        }
        if (this.isHTML5) {
          if (this.config.crossorigin) {
            this.media.setAttribute("crossorigin", "");
          }
          if (this.config.autoplay) {
            this.media.setAttribute("autoplay", "");
          }
          if (!is.empty(input.poster)) {
            this.poster = input.poster;
          }
          if (this.config.loop.active) {
            this.media.setAttribute("loop", "");
          }
          if (this.config.muted) {
            this.media.setAttribute("muted", "");
          }
          if (this.config.playsinline) {
            this.media.setAttribute("playsinline", "");
          }
        }
        ui.addStyleHook.call(this);
        if (this.isHTML5) {
          source.insertElements.call(this, "source", sources);
        }
        this.config.title = input.title;
        media.setup.call(this);
        if (this.isHTML5) {
          if (Object.keys(input).includes("tracks")) {
            source.insertElements.call(this, "track", input.tracks);
          }
        }
        if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
          ui.build.call(this);
        }
        if (this.isHTML5) {
          this.media.load();
        }
        if (!is.empty(input.previewThumbnails)) {
          Object.assign(this.config.previewThumbnails, input.previewThumbnails);
          if (this.previewThumbnails && this.previewThumbnails.loaded) {
            this.previewThumbnails.destroy();
            this.previewThumbnails = null;
          }
          if (this.config.previewThumbnails.enabled) {
            this.previewThumbnails = new PreviewThumbnails(this);
          }
        }
        this.fullscreen.update();
      }, true);
    }
  };
  class Plyr {
    constructor(target, options) {
      _defineProperty$1(this, "play", () => {
        if (!is.function(this.media.play)) {
          return null;
        }
        if (this.ads && this.ads.enabled) {
          this.ads.managerPromise.then(() => this.ads.play()).catch(() => silencePromise(this.media.play()));
        }
        return this.media.play();
      });
      _defineProperty$1(this, "pause", () => {
        if (!this.playing || !is.function(this.media.pause)) {
          return null;
        }
        return this.media.pause();
      });
      _defineProperty$1(this, "togglePlay", (input) => {
        const toggle = is.boolean(input) ? input : !this.playing;
        if (toggle) {
          return this.play();
        }
        return this.pause();
      });
      _defineProperty$1(this, "stop", () => {
        if (this.isHTML5) {
          this.pause();
          this.restart();
        } else if (is.function(this.media.stop)) {
          this.media.stop();
        }
      });
      _defineProperty$1(this, "restart", () => {
        this.currentTime = 0;
      });
      _defineProperty$1(this, "rewind", (seekTime) => {
        this.currentTime -= is.number(seekTime) ? seekTime : this.config.seekTime;
      });
      _defineProperty$1(this, "forward", (seekTime) => {
        this.currentTime += is.number(seekTime) ? seekTime : this.config.seekTime;
      });
      _defineProperty$1(this, "increaseVolume", (step) => {
        const volume = this.media.muted ? 0 : this.volume;
        this.volume = volume + (is.number(step) ? step : 0);
      });
      _defineProperty$1(this, "decreaseVolume", (step) => {
        this.increaseVolume(-step);
      });
      _defineProperty$1(this, "airplay", () => {
        if (support.airplay) {
          this.media.webkitShowPlaybackTargetPicker();
        }
      });
      _defineProperty$1(this, "toggleControls", (toggle) => {
        if (this.supported.ui && !this.isAudio) {
          const isHidden = hasClass(this.elements.container, this.config.classNames.hideControls);
          const force = typeof toggle === "undefined" ? void 0 : !toggle;
          const hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force);
          if (hiding && is.array(this.config.controls) && this.config.controls.includes("settings") && !is.empty(this.config.settings)) {
            controls.toggleMenu.call(this, false);
          }
          if (hiding !== isHidden) {
            const eventName = hiding ? "controlshidden" : "controlsshown";
            triggerEvent.call(this, this.media, eventName);
          }
          return !hiding;
        }
        return false;
      });
      _defineProperty$1(this, "on", (event, callback) => {
        on.call(this, this.elements.container, event, callback);
      });
      _defineProperty$1(this, "once", (event, callback) => {
        once.call(this, this.elements.container, event, callback);
      });
      _defineProperty$1(this, "off", (event, callback) => {
        off(this.elements.container, event, callback);
      });
      _defineProperty$1(this, "destroy", (callback, soft = false) => {
        if (!this.ready) {
          return;
        }
        const done = () => {
          document.body.style.overflow = "";
          this.embed = null;
          if (soft) {
            if (Object.keys(this.elements).length) {
              removeElement(this.elements.buttons.play);
              removeElement(this.elements.captions);
              removeElement(this.elements.controls);
              removeElement(this.elements.wrapper);
              this.elements.buttons.play = null;
              this.elements.captions = null;
              this.elements.controls = null;
              this.elements.wrapper = null;
            }
            if (is.function(callback)) {
              callback();
            }
          } else {
            unbindListeners.call(this);
            html5.cancelRequests.call(this);
            replaceElement(this.elements.original, this.elements.container);
            triggerEvent.call(this, this.elements.original, "destroyed", true);
            if (is.function(callback)) {
              callback.call(this.elements.original);
            }
            this.ready = false;
            setTimeout(() => {
              this.elements = null;
              this.media = null;
            }, 200);
          }
        };
        this.stop();
        clearTimeout(this.timers.loading);
        clearTimeout(this.timers.controls);
        clearTimeout(this.timers.resized);
        if (this.isHTML5) {
          ui.toggleNativeControls.call(this, true);
          done();
        } else if (this.isYouTube) {
          clearInterval(this.timers.buffering);
          clearInterval(this.timers.playing);
          if (this.embed !== null && is.function(this.embed.destroy)) {
            this.embed.destroy();
          }
          done();
        } else if (this.isVimeo) {
          if (this.embed !== null) {
            this.embed.unload().then(done);
          }
          setTimeout(done, 200);
        }
      });
      _defineProperty$1(this, "supports", (type) => support.mime.call(this, type));
      this.timers = {};
      this.ready = false;
      this.loading = false;
      this.failed = false;
      this.touch = support.touch;
      this.media = target;
      if (is.string(this.media)) {
        this.media = document.querySelectorAll(this.media);
      }
      if (window.jQuery && this.media instanceof jQuery || is.nodeList(this.media) || is.array(this.media)) {
        this.media = this.media[0];
      }
      this.config = extend({}, defaults, Plyr.defaults, options || {}, (() => {
        try {
          return JSON.parse(this.media.getAttribute("data-plyr-config"));
        } catch {
          return {};
        }
      })());
      this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      };
      this.captions = {
        active: null,
        currentTrack: -1,
        meta: /* @__PURE__ */ new WeakMap()
      };
      this.fullscreen = {
        active: false
      };
      this.options = {
        speed: [],
        quality: []
      };
      this.debug = new Console(this.config.debug);
      this.debug.log("Config", this.config);
      this.debug.log("Support", support);
      if (is.nullOrUndefined(this.media) || !is.element(this.media)) {
        this.debug.error("Setup failed: no suitable element passed");
        return;
      }
      if (this.media.plyr) {
        this.debug.warn("Target already setup");
        return;
      }
      if (!this.config.enabled) {
        this.debug.error("Setup failed: disabled by config");
        return;
      }
      if (!support.check().api) {
        this.debug.error("Setup failed: no support");
        return;
      }
      const clone = this.media.cloneNode(true);
      clone.autoplay = false;
      this.elements.original = clone;
      const _type = this.media.tagName.toLowerCase();
      let iframe = null;
      let url = null;
      switch (_type) {
        case "div":
          iframe = this.media.querySelector("iframe");
          if (is.element(iframe)) {
            url = parseUrl(iframe.getAttribute("src"));
            this.provider = getProviderByUrl(url.toString());
            this.elements.container = this.media;
            this.media = iframe;
            this.elements.container.className = "";
            if (url.search.length) {
              const truthy = ["1", "true"];
              if (truthy.includes(url.searchParams.get("autoplay"))) {
                this.config.autoplay = true;
              }
              if (truthy.includes(url.searchParams.get("loop"))) {
                this.config.loop.active = true;
              }
              if (this.isYouTube) {
                this.config.playsinline = truthy.includes(url.searchParams.get("playsinline"));
                this.config.youtube.hl = url.searchParams.get("hl");
              } else {
                this.config.playsinline = true;
              }
            }
          } else {
            this.provider = this.media.getAttribute(this.config.attributes.embed.provider);
            this.media.removeAttribute(this.config.attributes.embed.provider);
          }
          if (is.empty(this.provider) || !Object.values(providers).includes(this.provider)) {
            this.debug.error("Setup failed: Invalid provider");
            return;
          }
          this.type = types.video;
          break;
        case "video":
        case "audio":
          this.type = _type;
          this.provider = providers.html5;
          if (this.media.hasAttribute("crossorigin")) {
            this.config.crossorigin = true;
          }
          if (this.media.hasAttribute("autoplay")) {
            this.config.autoplay = true;
          }
          if (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) {
            this.config.playsinline = true;
          }
          if (this.media.hasAttribute("muted")) {
            this.config.muted = true;
          }
          if (this.media.hasAttribute("loop")) {
            this.config.loop.active = true;
          }
          break;
        default:
          this.debug.error("Setup failed: unsupported type");
          return;
      }
      this.supported = support.check(this.type, this.provider);
      if (!this.supported.api) {
        this.debug.error("Setup failed: no support");
        return;
      }
      this.eventListeners = [];
      this.listeners = new Listeners(this);
      this.storage = new Storage(this);
      this.media.plyr = this;
      if (!is.element(this.elements.container)) {
        this.elements.container = createElement("div");
        wrap(this.media, this.elements.container);
      }
      ui.migrateStyles.call(this);
      ui.addStyleHook.call(this);
      media.setup.call(this);
      if (this.config.debug) {
        on.call(this, this.elements.container, this.config.events.join(" "), (event) => {
          this.debug.log(`event: ${event.type}`);
        });
      }
      this.fullscreen = new Fullscreen(this);
      if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
        ui.build.call(this);
      }
      this.listeners.container();
      this.listeners.global();
      if (this.config.ads.enabled) {
        this.ads = new Ads(this);
      }
      if (this.isHTML5 && this.config.autoplay) {
        this.once("canplay", () => silencePromise(this.play()));
      }
      this.lastSeekTime = 0;
      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new PreviewThumbnails(this);
      }
    }
    // ---------------------------------------
    // API
    // ---------------------------------------
    /**
     * Types and provider helpers
     */
    get isHTML5() {
      return this.provider === providers.html5;
    }
    get isEmbed() {
      return this.isYouTube || this.isVimeo;
    }
    get isYouTube() {
      return this.provider === providers.youtube;
    }
    get isVimeo() {
      return this.provider === providers.vimeo;
    }
    get isVideo() {
      return this.type === types.video;
    }
    get isAudio() {
      return this.type === types.audio;
    }
    /**
     * Get playing state
     */
    get playing() {
      return Boolean(this.ready && !this.paused && !this.ended);
    }
    /**
     * Get paused state
     */
    get paused() {
      return Boolean(this.media.paused);
    }
    /**
     * Get stopped state
     */
    get stopped() {
      return Boolean(this.paused && this.currentTime === 0);
    }
    /**
     * Get ended state
     */
    get ended() {
      return Boolean(this.media.ended);
    }
    /**
     * Seek to a time
     * @param {number} input - where to seek to in seconds. Defaults to 0 (the start)
     */
    set currentTime(input) {
      if (!this.duration) {
        return;
      }
      const inputIsValid = is.number(input) && input > 0;
      this.media.currentTime = inputIsValid ? Math.min(input, this.duration) : 0;
      this.debug.log(`Seeking to ${this.currentTime} seconds`);
    }
    /**
     * Get current time
     */
    get currentTime() {
      return Number(this.media.currentTime);
    }
    /**
     * Get buffered
     */
    get buffered() {
      const {
        buffered
      } = this.media;
      if (is.number(buffered)) {
        return buffered;
      }
      if (buffered && buffered.length && this.duration > 0) {
        return buffered.end(0) / this.duration;
      }
      return 0;
    }
    /**
     * Get seeking status
     */
    get seeking() {
      return Boolean(this.media.seeking);
    }
    /**
     * Get the duration of the current media
     */
    get duration() {
      const fauxDuration = Number.parseFloat(this.config.duration);
      const realDuration = (this.media || {}).duration;
      const duration = !is.number(realDuration) || realDuration === Infinity ? 0 : realDuration;
      return fauxDuration || duration;
    }
    /**
     * Set the player volume
     * @param {number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
     */
    set volume(value) {
      let volume = value;
      const max = 1;
      const min = 0;
      if (is.string(volume)) {
        volume = Number(volume);
      }
      if (!is.number(volume)) {
        volume = this.storage.get("volume");
      }
      if (!is.number(volume)) {
        ({
          volume
        } = this.config);
      }
      if (volume > max) {
        volume = max;
      }
      if (volume < min) {
        volume = min;
      }
      this.config.volume = volume;
      this.media.volume = volume;
      if (!is.empty(value) && this.muted && volume > 0) {
        this.muted = false;
      }
    }
    /**
     * Get the current player volume
     */
    get volume() {
      return Number(this.media.volume);
    }
    /**
     * Set muted state
     * @param {boolean} mute
     */
    set muted(mute) {
      let toggle = mute;
      if (!is.boolean(toggle)) {
        toggle = this.storage.get("muted");
      }
      if (!is.boolean(toggle)) {
        toggle = this.config.muted;
      }
      this.config.muted = toggle;
      this.media.muted = toggle;
    }
    /**
     * Get current muted state
     */
    get muted() {
      return Boolean(this.media.muted);
    }
    /**
     * Check if the media has audio
     */
    get hasAudio() {
      if (!this.isHTML5) {
        return true;
      }
      if (this.isAudio) {
        return true;
      }
      return Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
    }
    /**
     * Set playback speed
     * @param {number} input - the speed of playback (0.5-2.0)
     */
    set speed(input) {
      let speed = null;
      if (is.number(input)) {
        speed = input;
      }
      if (!is.number(speed)) {
        speed = this.storage.get("speed");
      }
      if (!is.number(speed)) {
        speed = this.config.speed.selected;
      }
      const {
        minimumSpeed: min,
        maximumSpeed: max
      } = this;
      speed = clamp(speed, min, max);
      this.config.speed.selected = speed;
      setTimeout(() => {
        if (this.media) {
          this.media.playbackRate = speed;
        }
      }, 0);
    }
    /**
     * Get current playback speed
     */
    get speed() {
      return Number(this.media.playbackRate);
    }
    /**
     * Get the minimum allowed speed
     */
    get minimumSpeed() {
      if (this.isYouTube) {
        return Math.min(...this.options.speed);
      }
      if (this.isVimeo) {
        return 0.5;
      }
      return 0.0625;
    }
    /**
     * Get the maximum allowed speed
     */
    get maximumSpeed() {
      if (this.isYouTube) {
        return Math.max(...this.options.speed);
      }
      if (this.isVimeo) {
        return 2;
      }
      return 16;
    }
    /**
     * Set playback quality
     * Currently HTML5 & YouTube only
     * @param {number} input - Quality level
     */
    set quality(input) {
      const config = this.config.quality;
      const options = this.options.quality;
      if (!options.length) {
        return;
      }
      let quality = [!is.empty(input) && Number(input), this.storage.get("quality"), config.selected, config.default].find(is.number);
      let updateStorage = true;
      if (!options.includes(quality)) {
        const value = closest(options, quality);
        this.debug.warn(`Unsupported quality option: ${quality}, using ${value} instead`);
        quality = value;
        updateStorage = false;
      }
      config.selected = quality;
      this.media.quality = quality;
      if (updateStorage) {
        this.storage.set({
          quality
        });
      }
    }
    /**
     * Get current quality level
     */
    get quality() {
      return this.media.quality;
    }
    /**
     * Toggle loop
     * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
     * @param {boolean} input - Whether to loop or not
     */
    set loop(input) {
      const toggle = is.boolean(input) ? input : this.config.loop.active;
      this.config.loop.active = toggle;
      this.media.loop = toggle;
    }
    /**
     * Get current loop state
     */
    get loop() {
      return Boolean(this.media.loop);
    }
    /**
     * Set new media source
     * @param {object} input - The new source object (see docs)
     */
    set source(input) {
      source.change.call(this, input);
    }
    /**
     * Get current source
     */
    get source() {
      return this.media.currentSrc;
    }
    /**
     * Get a download URL (either source or custom)
     */
    get download() {
      const {
        download
      } = this.config.urls;
      return is.url(download) ? download : this.source;
    }
    /**
     * Set the download URL
     */
    set download(input) {
      if (!is.url(input)) {
        return;
      }
      this.config.urls.download = input;
      controls.setDownloadUrl.call(this);
    }
    /**
     * Set the poster image for a video
     * @param {string} input - the URL for the new poster image
     */
    set poster(input) {
      if (!this.isVideo) {
        this.debug.warn("Poster can only be set for video");
        return;
      }
      ui.setPoster.call(this, input, false).catch(() => {
      });
    }
    /**
     * Get the current poster image
     */
    get poster() {
      if (!this.isVideo) {
        return null;
      }
      return this.media.getAttribute("poster") || this.media.getAttribute("data-poster");
    }
    /**
     * Get the current aspect ratio in use
     */
    get ratio() {
      if (!this.isVideo) {
        return null;
      }
      const ratio = reduceAspectRatio(getAspectRatio.call(this));
      return is.array(ratio) ? ratio.join(":") : ratio;
    }
    /**
     * Set video aspect ratio
     */
    set ratio(input) {
      if (!this.isVideo) {
        this.debug.warn("Aspect ratio can only be set for video");
        return;
      }
      if (!is.string(input) || !validateAspectRatio(input)) {
        this.debug.error(`Invalid aspect ratio specified (${input})`);
        return;
      }
      this.config.ratio = reduceAspectRatio(input);
      setAspectRatio.call(this);
    }
    /**
     * Set the autoplay state
     * @param {boolean} input - Whether to autoplay or not
     */
    set autoplay(input) {
      this.config.autoplay = is.boolean(input) ? input : this.config.autoplay;
    }
    /**
     * Get the current autoplay state
     */
    get autoplay() {
      return Boolean(this.config.autoplay);
    }
    /**
     * Toggle captions
     * @param {boolean} input - Whether to enable captions
     */
    toggleCaptions(input) {
      captions.toggle.call(this, input, false);
    }
    /**
     * Set the caption track by index
     * @param {number} input - Caption index
     */
    set currentTrack(input) {
      captions.set.call(this, input, false);
      captions.setup.call(this);
    }
    /**
     * Get the current caption track index (-1 if disabled)
     */
    get currentTrack() {
      const {
        toggled,
        currentTrack
      } = this.captions;
      return toggled ? currentTrack : -1;
    }
    /**
     * Set the wanted language for captions
     * Since tracks can be added later it won't update the actual caption track until there is a matching track
     * @param {string} input - Two character ISO language code (e.g. EN, FR, PT, etc)
     */
    set language(input) {
      captions.setLanguage.call(this, input, false);
    }
    /**
     * Get the current track's language
     */
    get language() {
      return (captions.getCurrentTrack.call(this) || {}).language;
    }
    /**
     * Toggle picture-in-picture playback on WebKit/MacOS
     * TODO: update player with state, support, enabled
     * TODO: detect outside changes
     */
    set pip(input) {
      if (!support.pip) {
        return;
      }
      const toggle = is.boolean(input) ? input : !this.pip;
      if (is.function(this.media.webkitSetPresentationMode)) {
        this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
      }
      if (is.function(this.media.requestPictureInPicture)) {
        if (!this.pip && toggle) {
          this.media.requestPictureInPicture();
        } else if (this.pip && !toggle) {
          document.exitPictureInPicture();
        }
      }
    }
    /**
     * Get the current picture-in-picture state
     */
    get pip() {
      if (!support.pip) {
        return null;
      }
      if (!is.empty(this.media.webkitPresentationMode)) {
        return this.media.webkitPresentationMode === pip.active;
      }
      return this.media === document.pictureInPictureElement;
    }
    /**
     * Sets the preview thumbnails for the current source
     */
    setPreviewThumbnails(thumbnailSource) {
      if (this.previewThumbnails && this.previewThumbnails.loaded) {
        this.previewThumbnails.destroy();
        this.previewThumbnails = null;
      }
      Object.assign(this.config.previewThumbnails, thumbnailSource);
      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new PreviewThumbnails(this);
      }
    }
    /**
     * Check for support
     * @param {string} type - Player type (audio/video)
     * @param {string} provider - Provider (html5/youtube/vimeo)
     */
    static supported(type, provider) {
      return support.check(type, provider);
    }
    /**
     * Load an SVG sprite into the page
     * @param {string} url - URL for the SVG sprite
     * @param {string} [id] - Unique ID
     */
    static loadSprite(url, id) {
      return loadSprite(url, id);
    }
    /**
     * Setup multiple instances
     * @param {*} selector
     * @param {object} options
     */
    static setup(selector, options = {}) {
      let targets = null;
      if (is.string(selector)) {
        targets = Array.from(document.querySelectorAll(selector));
      } else if (is.nodeList(selector)) {
        targets = Array.from(selector);
      } else if (is.array(selector)) {
        targets = selector.filter(is.element);
      }
      if (is.empty(targets)) {
        return null;
      }
      return targets.map((t) => new Plyr(t, options));
    }
  }
  Plyr.defaults = cloneDeep(defaults);
  return Plyr;
}));
//# sourceMappingURL=scripts.js.map
