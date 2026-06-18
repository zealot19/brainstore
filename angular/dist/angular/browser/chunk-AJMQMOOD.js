import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-5VOPFTBV.js";
import {
  ComponentLoaderFactory,
  PositioningService,
  TooltipDirective,
  TooltipModule
} from "./chunk-BQP762NE.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-DFPDGJ2J.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Observable,
  Output,
  Renderer2,
  Subject,
  Subscription,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  combineLatest,
  distinctUntilChanged,
  filter,
  forwardRef,
  input,
  map,
  observeOn,
  output,
  queueScheduler,
  scan,
  setClassMetadata,
  take,
  takeUntil,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/ngx-bootstrap/chronos/fesm2022/ngx-bootstrap-chronos.mjs
function mod(n, x) {
  return (n % x + x) % x;
}
function absFloor(num) {
  return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
}
function isString(str) {
  return typeof str === "string";
}
function isDate(value) {
  return value instanceof Date || Object.prototype.toString.call(value) === "[object Date]";
}
function isDateValid(date) {
  return date && date.getTime && !isNaN(date.getTime());
}
function isFunction(fn) {
  return fn instanceof Function || Object.prototype.toString.call(fn) === "[object Function]";
}
function isNumber(value) {
  return typeof value === "number" || Object.prototype.toString.call(value) === "[object Number]";
}
function isArray(input2) {
  return input2 instanceof Array || Object.prototype.toString.call(input2) === "[object Array]";
}
function hasOwnProp(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
function isObject(input2) {
  return input2 != null && Object.prototype.toString.call(input2) === "[object Object]";
}
function isObjectEmpty(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  }
  let k;
  for (k in obj) {
    if (obj.hasOwnProperty(k)) {
      return false;
    }
  }
  return true;
}
function isUndefined(input2) {
  return input2 === void 0;
}
function toInt(argumentForCoercion) {
  const coercedNumber = +argumentForCoercion;
  let value = 0;
  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
    value = absFloor(coercedNumber);
  }
  return value;
}
var aliases = {};
var _mapUnits = {
  date: "day",
  hour: "hours",
  minute: "minutes",
  second: "seconds",
  millisecond: "milliseconds"
};
function addUnitAlias(unit, shorthand) {
  const lowerCase = unit.toLowerCase();
  let _unit = unit;
  if (lowerCase in _mapUnits) {
    _unit = _mapUnits[lowerCase];
  }
  aliases[lowerCase] = aliases[`${lowerCase}s`] = aliases[shorthand] = _unit;
}
function normalizeUnits(units2) {
  return isString(units2) ? aliases[units2] || aliases[units2.toLowerCase()] : void 0;
}
function normalizeObjectUnits(inputObject) {
  const normalizedInput = {};
  let normalizedProp;
  let prop;
  for (prop in inputObject) {
    if (hasOwnProp(inputObject, prop)) {
      normalizedProp = normalizeUnits(prop);
      if (normalizedProp) {
        normalizedInput[normalizedProp] = inputObject[prop];
      }
    }
  }
  return normalizedInput;
}
var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;
function zeroFill(num, targetLength, forceSign) {
  const absNumber = `${Math.abs(num)}`;
  const zerosToFill = targetLength - absNumber.length;
  const sign = num >= 0;
  const _sign = sign ? forceSign ? "+" : "" : "-";
  const _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
  return _sign + _zeros + absNumber;
}
var formatFunctions = {};
var formatTokenFunctions = {};
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
function addFormatToken(token, padded, ordinal, callback) {
  if (token) {
    formatTokenFunctions[token] = callback;
  }
  if (padded) {
    formatTokenFunctions[padded[0]] = function() {
      return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
    };
  }
  if (ordinal) {
    formatTokenFunctions[ordinal] = function(date, opts) {
      return opts.locale.ordinal(callback.apply(null, arguments), token);
    };
  }
}
function makeFormatFunction(format) {
  const array = format.match(formattingTokens);
  const length = array.length;
  const formatArr = new Array(length);
  for (let i = 0; i < length; i++) {
    formatArr[i] = formatTokenFunctions[array[i]] ? formatTokenFunctions[array[i]] : removeFormattingTokens(array[i]);
  }
  return function(date, locale, isUTC, offset = 0) {
    let output2 = "";
    for (let j = 0; j < length; j++) {
      output2 += isFunction(formatArr[j]) ? formatArr[j].call(null, date, { format, locale, isUTC, offset }) : formatArr[j];
    }
    return output2;
  };
}
function removeFormattingTokens(input2) {
  if (input2.match(/\[[\s\S]/)) {
    return input2.replace(/^\[|\]$/g, "");
  }
  return input2.replace(/\\/g, "");
}
function createUTCDate(y, m, d) {
  const date = new Date(Date.UTC.apply(null, arguments));
  if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
    date.setUTCFullYear(y);
  }
  return date;
}
function createDate(y, m = 0, d = 1, h = 0, M = 0, s = 0, ms = 0) {
  const date = new Date(y, m, d, h, M, s, ms);
  if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
    date.setFullYear(y);
  }
  return date;
}
function getHours(date, isUTC = false) {
  return isUTC ? date.getUTCHours() : date.getHours();
}
function getMinutes(date, isUTC = false) {
  return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
function getSeconds(date, isUTC = false) {
  return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
function getMilliseconds(date, isUTC = false) {
  return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
}
function getTime(date) {
  return date.getTime();
}
function getDay(date, isUTC = false) {
  return isUTC ? date.getUTCDay() : date.getDay();
}
function getDate(date, isUTC = false) {
  return isUTC ? date.getUTCDate() : date.getDate();
}
function getMonth(date, isUTC = false) {
  return isUTC ? date.getUTCMonth() : date.getMonth();
}
function getFullYear(date, isUTC = false) {
  return isUTC ? date.getUTCFullYear() : date.getFullYear();
}
function unix(date) {
  return Math.floor(date.valueOf() / 1e3);
}
function getFirstDayOfMonth(date) {
  return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
}
function isFirstDayOfWeek(date, firstDayOfWeek) {
  return date.getDay() === Number(firstDayOfWeek);
}
function isSameMonth(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }
  return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
}
function isSameYear(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }
  return getFullYear(date1) === getFullYear(date2);
}
function isSameDay$1(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }
  return isSameYear(date1, date2) && isSameMonth(date1, date2) && getDate(date1) === getDate(date2);
}
var match1 = /\d/;
var match2 = /\d\d/;
var match3 = /\d{3}/;
var match4 = /\d{4}/;
var match6 = /[+-]?\d{6}/;
var match1to2 = /\d\d?/;
var match3to4 = /\d\d\d\d?/;
var match5to6 = /\d\d\d\d\d\d?/;
var match1to3 = /\d{1,3}/;
var match1to4 = /\d{1,4}/;
var match1to6 = /[+-]?\d{1,6}/;
var matchUnsigned = /\d+/;
var matchSigned = /[+-]?\d+/;
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
var regexes = {};
function addRegexToken(token, regex, strictRegex) {
  if (isFunction(regex)) {
    regexes[token] = regex;
    return;
  }
  regexes[token] = function(isStrict, locale) {
    return isStrict && strictRegex ? strictRegex : regex;
  };
}
function getParseRegexForToken(token, locale) {
  const _strict = false;
  if (!hasOwnProp(regexes, token)) {
    return new RegExp(unescapeFormat(token));
  }
  return regexes[token](_strict, locale);
}
function unescapeFormat(str) {
  return regexEscape(str.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (matched, p1, p2, p3, p4) => p1 || p2 || p3 || p4));
}
function regexEscape(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var tokens = {};
function addParseToken(token, callback) {
  const _token = isString(token) ? [token] : token;
  let func = callback;
  if (isNumber(callback)) {
    func = function(input2, array, config) {
      array[callback] = toInt(input2);
      return config;
    };
  }
  if (isArray(_token) && isFunction(func)) {
    let i;
    for (i = 0; i < _token.length; i++) {
      tokens[_token[i]] = func;
    }
  }
}
function addWeekParseToken(token, callback) {
  addParseToken(token, function(input2, array, config, _token) {
    config._w = config._w || {};
    return callback(input2, config._w, config, _token);
  });
}
function addTimeToArrayFromToken(token, input2, config) {
  if (input2 != null && hasOwnProp(tokens, token)) {
    tokens[token](input2, config._a, config, token);
  }
  return config;
}
var priorities = {};
function addUnitPriority(unit, priority) {
  priorities[unit] = priority;
}
function initDayOfMonth() {
  addFormatToken("D", ["DD", 2, false], "Do", function(date, opts) {
    return getDate(date, opts.isUTC).toString(10);
  });
  addUnitAlias("date", "D");
  addUnitPriority("date", 9);
  addRegexToken("D", match1to2);
  addRegexToken("DD", match1to2, match2);
  addRegexToken("Do", function(isStrict, locale) {
    return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
  });
  addParseToken(["D", "DD"], DATE);
  addParseToken("Do", function(input2, array, config) {
    array[DATE] = toInt(input2.match(match1to2)[0]);
    return config;
  });
}
function defaultParsingFlags() {
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}
function getParsingFlags(config) {
  if (config._pf == null) {
    config._pf = defaultParsingFlags();
  }
  return config._pf;
}
function getYear(date, opts) {
  if (opts.locale.getFullYear) {
    return opts.locale.getFullYear(date, opts.isUTC).toString();
  }
  return getFullYear(date, opts.isUTC).toString();
}
function initYear() {
  addFormatToken("Y", null, null, function(date, opts) {
    const y = getFullYear(date, opts.isUTC);
    return y <= 9999 ? y.toString(10) : `+${y}`;
  });
  addFormatToken(null, ["YY", 2, false], null, function(date, opts) {
    return (getFullYear(date, opts.isUTC) % 100).toString(10);
  });
  addFormatToken(null, ["YYYY", 4, false], null, getYear);
  addFormatToken(null, ["YYYYY", 5, false], null, getYear);
  addFormatToken(null, ["YYYYYY", 6, true], null, getYear);
  addUnitAlias("year", "y");
  addUnitPriority("year", 1);
  addRegexToken("Y", matchSigned);
  addRegexToken("YY", match1to2, match2);
  addRegexToken("YYYY", match1to4, match4);
  addRegexToken("YYYYY", match1to6, match6);
  addRegexToken("YYYYYY", match1to6, match6);
  addParseToken(["YYYYY", "YYYYYY"], YEAR);
  addParseToken("YYYY", function(input2, array, config) {
    array[YEAR] = input2.length === 2 ? parseTwoDigitYear(input2) : toInt(input2);
    return config;
  });
  addParseToken("YY", function(input2, array, config) {
    array[YEAR] = parseTwoDigitYear(input2);
    return config;
  });
  addParseToken("Y", function(input2, array, config) {
    array[YEAR] = parseInt(input2, 10);
    return config;
  });
}
function parseTwoDigitYear(input2) {
  return toInt(input2) + (toInt(input2) > 68 ? 1900 : 2e3);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
  if (isNaN(year) || isNaN(month)) {
    return NaN;
  }
  const modMonth = mod(month, 12);
  const _year = year + (month - modMonth) / 12;
  return modMonth === 1 ? isLeapYear(_year) ? 29 : 28 : 31 - modMonth % 7 % 2;
}
function initMonth() {
  addFormatToken("M", ["MM", 2, false], "Mo", function(date, opts) {
    return (getMonth(date, opts.isUTC) + 1).toString(10);
  });
  addFormatToken("MMM", null, null, function(date, opts) {
    return opts.locale.monthsShort(date, opts.format, opts.isUTC);
  });
  addFormatToken("MMMM", null, null, function(date, opts) {
    return opts.locale.months(date, opts.format, opts.isUTC);
  });
  addUnitAlias("month", "M");
  addUnitPriority("month", 8);
  addRegexToken("M", match1to2);
  addRegexToken("MM", match1to2, match2);
  addRegexToken("MMM", function(isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken("MMMM", function(isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(["M", "MM"], function(input2, array, config) {
    array[MONTH] = toInt(input2) - 1;
    return config;
  });
  addParseToken(["MMM", "MMMM"], function(input2, array, config, token) {
    const month = config._locale.monthsParse(input2, token, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = !!input2;
    }
    return config;
  });
}
var defaultTimeUnit = {
  year: 0,
  month: 0,
  day: 0,
  hour: 0,
  minute: 0,
  seconds: 0
};
function shiftDate(date, unit) {
  const _unit = Object.assign({}, defaultTimeUnit, unit);
  const year = date.getFullYear() + (_unit.year || 0);
  const month = date.getMonth() + (_unit.month || 0);
  let day = date.getDate() + (_unit.day || 0);
  if (_unit.month && !_unit.day) {
    day = Math.min(day, daysInMonth(year, month));
  }
  return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
}
function setFullDate(date, unit) {
  return createDate(
    getNum(date.getFullYear(), unit.year),
    getNum(date.getMonth(), unit.month),
    1,
    // day, to avoid issue with wrong months selection at the end of current month (#5371)
    getNum(date.getHours(), unit.hour),
    getNum(date.getMinutes(), unit.minute),
    getNum(date.getSeconds(), unit.seconds),
    getNum(date.getMilliseconds(), unit.milliseconds)
  );
}
function getNum(def, num) {
  return isNumber(num) ? num : def;
}
function setMonth(date, value, isUTC) {
  const dayOfMonth = Math.min(getDate(date), daysInMonth(getFullYear(date), value));
  isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
  return date;
}
function setHours(date, value, isUTC) {
  isUTC ? date.setUTCHours(value) : date.setHours(value);
  return date;
}
function setMinutes(date, value, isUTC) {
  isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
  return date;
}
function setSeconds(date, value, isUTC) {
  isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
  return date;
}
function setMilliseconds(date, value, isUTC) {
  isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
  return date;
}
function setDate(date, value, isUTC) {
  isUTC ? date.setUTCDate(value) : date.setDate(value);
  return date;
}
function setTime(date, value) {
  date.setTime(value);
  return date;
}
function cloneDate(date) {
  return new Date(date.getTime());
}
function startOf(date, unit, isUTC) {
  const _date = cloneDate(date);
  switch (unit) {
    case "year":
      setMonth(_date, 0, isUTC);
    /* falls through */
    case "quarter":
    case "month":
      setDate(_date, 1, isUTC);
    /* falls through */
    case "week":
    case "isoWeek":
    case "day":
    case "date":
      setHours(_date, 0, isUTC);
    /* falls through */
    case "hours":
      setMinutes(_date, 0, isUTC);
    /* falls through */
    case "minutes":
      setSeconds(_date, 0, isUTC);
    /* falls through */
    case "seconds":
      setMilliseconds(_date, 0, isUTC);
  }
  if (unit === "week") {
    setLocaleDayOfWeek(_date, 0, { isUTC });
  }
  if (unit === "isoWeek") {
    setISODayOfWeek(_date, 1);
  }
  if (unit === "quarter") {
    setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
  }
  return _date;
}
function endOf(date, unit, isUTC) {
  let _unit = unit;
  if (_unit === "date") {
    _unit = "day";
  }
  const start = startOf(date, _unit, isUTC);
  const _step = add(start, 1, _unit === "isoWeek" ? "week" : _unit, isUTC);
  const res = subtract(_step, 1, "milliseconds", isUTC);
  return res;
}
function initDayOfYear() {
  addFormatToken("DDD", ["DDDD", 3, false], "DDDo", function(date) {
    return getDayOfYear(date).toString(10);
  });
  addUnitAlias("dayOfYear", "DDD");
  addUnitPriority("dayOfYear", 4);
  addRegexToken("DDD", match1to3);
  addRegexToken("DDDD", match3);
  addParseToken(["DDD", "DDDD"], function(input2, array, config) {
    config._dayOfYear = toInt(input2);
    return config;
  });
}
function getDayOfYear(date, isUTC) {
  const date1 = +startOf(date, "day", isUTC);
  const date2 = +startOf(date, "year", isUTC);
  const someDate = date1 - date2;
  const oneDay = 1e3 * 60 * 60 * 24;
  return Math.round(someDate / oneDay) + 1;
}
function firstWeekOffset(year, dow, doy) {
  const fwd = dow - doy + 7;
  const fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
  return -fwdlw + fwd - 1;
}
function dayOfYearFromWeeks(year, week2, weekday, dow, doy) {
  const localWeekday = (7 + weekday - dow) % 7;
  const weekOffset = firstWeekOffset(year, dow, doy);
  const dayOfYear = 1 + 7 * (week2 - 1) + localWeekday + weekOffset;
  let resYear;
  let resDayOfYear;
  if (dayOfYear <= 0) {
    resYear = year - 1;
    resDayOfYear = daysInYear(resYear) + dayOfYear;
  } else if (dayOfYear > daysInYear(year)) {
    resYear = year + 1;
    resDayOfYear = dayOfYear - daysInYear(year);
  } else {
    resYear = year;
    resDayOfYear = dayOfYear;
  }
  return {
    year: resYear,
    dayOfYear: resDayOfYear
  };
}
function weekOfYear(date, dow, doy, isUTC) {
  const weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
  const week2 = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
  let resWeek;
  let resYear;
  if (week2 < 1) {
    resYear = getFullYear(date, isUTC) - 1;
    resWeek = week2 + weeksInYear(resYear, dow, doy);
  } else if (week2 > weeksInYear(getFullYear(date, isUTC), dow, doy)) {
    resWeek = week2 - weeksInYear(getFullYear(date, isUTC), dow, doy);
    resYear = getFullYear(date, isUTC) + 1;
  } else {
    resYear = getFullYear(date, isUTC);
    resWeek = week2;
  }
  return {
    week: resWeek,
    year: resYear
  };
}
function weeksInYear(year, dow, doy) {
  const weekOffset = firstWeekOffset(year, dow, doy);
  const weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
var defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
var defaultLongDateFormat = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
var defaultOrdinal = "%d";
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
var defaultMonthsShortRegex = matchWord;
var defaultMonthsRegex = matchWord;
var Locale = class {
  constructor(config) {
    if (config) {
      this.set(config);
    }
  }
  set(config) {
    let confKey;
    for (confKey in config) {
      if (!config.hasOwnProperty(confKey)) {
        continue;
      }
      const prop = config[confKey];
      const key = isFunction(prop) ? confKey : `_${confKey}`;
      this[key] = prop;
    }
    this._config = config;
  }
  calendar(key, date, now) {
    const output2 = this._calendar[key] || this._calendar["sameElse"];
    return isFunction(output2) ? output2.call(null, date, now) : output2;
  }
  longDateFormat(key) {
    const format = this._longDateFormat[key];
    const formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) {
      return format;
    }
    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }
  get invalidDate() {
    return this._invalidDate;
  }
  set invalidDate(val) {
    this._invalidDate = val;
  }
  ordinal(num, token) {
    return this._ordinal.replace("%d", num.toString(10));
  }
  preparse(str, format) {
    return str;
  }
  getFullYear(date, isUTC = false) {
    return getFullYear(date, isUTC);
  }
  postformat(str) {
    return str;
  }
  relativeTime(num, withoutSuffix, str, isFuture) {
    const output2 = this._relativeTime[str];
    return isFunction(output2) ? output2(num, withoutSuffix, str, isFuture) : output2.replace(/%d/i, num.toString(10));
  }
  pastFuture(diff, output2) {
    const format = this._relativeTime[diff > 0 ? "future" : "past"];
    return isFunction(format) ? format(output2) : format.replace(/%s/i, output2);
  }
  months(date, format, isUTC = false) {
    if (!date) {
      return isArray(this._months) ? this._months : this._months.standalone;
    }
    if (isArray(this._months)) {
      return this._months[getMonth(date, isUTC)];
    }
    const key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? "format" : "standalone";
    return this._months[key][getMonth(date, isUTC)];
  }
  monthsShort(date, format, isUTC = false) {
    if (!date) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }
    if (isArray(this._monthsShort)) {
      return this._monthsShort[getMonth(date, isUTC)];
    }
    const key = MONTHS_IN_FORMAT.test(format) ? "format" : "standalone";
    return this._monthsShort[key][getMonth(date, isUTC)];
  }
  monthsParse(monthName, format, strict) {
    let date;
    let regex;
    if (this._monthsParseExact) {
      return this.handleMonthStrictParse(monthName, format, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    let i;
    for (i = 0; i < 12; i++) {
      date = new Date(Date.UTC(2e3, i));
      if (strict && !this._longMonthsParse[i]) {
        const _months = this.months(date, "", true).replace(".", "");
        const _shortMonths = this.monthsShort(date, "", true).replace(".", "");
        this._longMonthsParse[i] = new RegExp(`^${_months}$`, "i");
        this._shortMonthsParse[i] = new RegExp(`^${_shortMonths}$`, "i");
      }
      if (!strict && !this._monthsParse[i]) {
        regex = `^${this.months(date, "", true)}|^${this.monthsShort(date, "", true)}`;
        this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) {
        return i;
      }
      if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) {
        return i;
      }
      if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this.computeMonthsParse();
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      }
      return this._monthsRegex;
    }
    if (!hasOwnProp(this, "_monthsRegex")) {
      this._monthsRegex = defaultMonthsRegex;
    }
    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  }
  monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this.computeMonthsParse();
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      }
      return this._monthsShortRegex;
    }
    if (!hasOwnProp(this, "_monthsShortRegex")) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }
    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }
  /** Week */
  week(date, isUTC) {
    return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
  }
  firstDayOfWeek() {
    return this._week.dow;
  }
  firstDayOfYear() {
    return this._week.doy;
  }
  weekdays(date, format, isUTC) {
    if (!date) {
      return isArray(this._weekdays) ? this._weekdays : this._weekdays.standalone;
    }
    if (isArray(this._weekdays)) {
      return this._weekdays[getDay(date, isUTC)];
    }
    const _key = this._weekdays.isFormat.test(format) ? "format" : "standalone";
    return this._weekdays[_key][getDay(date, isUTC)];
  }
  weekdaysMin(date, format, isUTC) {
    return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
  }
  weekdaysShort(date, format, isUTC) {
    return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
  }
  // proto.weekdaysParse  =        localeWeekdaysParse;
  weekdaysParse(weekdayName, format, strict) {
    let i;
    let regex;
    if (this._weekdaysParseExact) {
      return this.handleWeekStrictParse(weekdayName, format, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      const date = setDayOfWeek(new Date(Date.UTC(2e3, 1)), i, null, true);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp(`^${this.weekdays(date, "", true).replace(".", ".?")}$`, "i");
        this._shortWeekdaysParse[i] = new RegExp(`^${this.weekdaysShort(date, "", true).replace(".", ".?")}$`, "i");
        this._minWeekdaysParse[i] = new RegExp(`^${this.weekdaysMin(date, "", true).replace(".", ".?")}$`, "i");
      }
      if (!this._weekdaysParse[i]) {
        regex = `^${this.weekdays(date, "", true)}|^${this.weekdaysShort(date, "", true)}|^${this.weekdaysMin(date, "", true)}`;
        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (!isArray(this._fullWeekdaysParse) || !isArray(this._shortWeekdaysParse) || !isArray(this._minWeekdaysParse) || !isArray(this._weekdaysParse)) {
        return;
      }
      if (strict && format === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  // proto.weekdaysRegex       =        weekdaysRegex;
  weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this.computeWeekdaysParse();
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this._weekdaysRegex = matchWord;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  // proto.weekdaysShortRegex  =        weekdaysShortRegex;
  // proto.weekdaysMinRegex    =        weekdaysMinRegex;
  weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this.computeWeekdaysParse();
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = matchWord;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this.computeWeekdaysParse();
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = matchWord;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  isPM(input2) {
    return input2.toLowerCase().charAt(0) === "p";
  }
  meridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? "pm" : "PM";
    }
    return isLower ? "am" : "AM";
  }
  formatLongDate(key) {
    this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
    const format = this._longDateFormat[key];
    const formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) {
      return format;
    }
    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, (val) => {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }
  handleMonthStrictParse(monthName, format, strict) {
    const llc = monthName.toLocaleLowerCase();
    let i;
    let ii;
    let mom;
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = new Date(2e3, i);
        this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format === "MMM") {
        ii = this._shortMonthsParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      }
      ii = this._longMonthsParse.indexOf(llc);
      return ii !== -1 ? ii : null;
    }
    if (format === "MMM") {
      ii = this._shortMonthsParse.indexOf(llc);
      if (ii !== -1) {
        return ii;
      }
      ii = this._longMonthsParse.indexOf(llc);
      return ii !== -1 ? ii : null;
    }
    ii = this._longMonthsParse.indexOf(llc);
    if (ii !== -1) {
      return ii;
    }
    ii = this._shortMonthsParse.indexOf(llc);
    return ii !== -1 ? ii : null;
  }
  handleWeekStrictParse(weekdayName, format, strict) {
    let ii;
    const llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      let i;
      for (i = 0; i < 7; ++i) {
        const date = setDayOfWeek(new Date(Date.UTC(2e3, 1)), i, null, true);
        this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(date, "").toLocaleLowerCase();
      }
    }
    if (!isArray(this._weekdaysParse) || !isArray(this._shortWeekdaysParse) || !isArray(this._minWeekdaysParse)) {
      return;
    }
    if (strict) {
      if (format === "dddd") {
        ii = this._weekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      } else if (format === "ddd") {
        ii = this._shortWeekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = this._minWeekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === "dddd") {
        ii = this._weekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._shortWeekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._minWeekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      } else if (format === "ddd") {
        ii = this._shortWeekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._weekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._minWeekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = this._minWeekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._weekdaysParse.indexOf(llc);
        if (ii !== -1) {
          return ii;
        }
        ii = this._shortWeekdaysParse.indexOf(llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  computeMonthsParse() {
    const shortPieces = [];
    const longPieces = [];
    const mixedPieces = [];
    let date;
    let i;
    for (i = 0; i < 12; i++) {
      date = new Date(2e3, i);
      shortPieces.push(this.monthsShort(date, ""));
      longPieces.push(this.months(date, ""));
      mixedPieces.push(this.months(date, ""));
      mixedPieces.push(this.monthsShort(date, ""));
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._monthsRegex = new RegExp(`^(${mixedPieces.join("|")})`, "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(`^(${longPieces.join("|")})`, "i");
    this._monthsShortStrictRegex = new RegExp(`^(${shortPieces.join("|")})`, "i");
  }
  computeWeekdaysParse() {
    const minPieces = [];
    const shortPieces = [];
    const longPieces = [];
    const mixedPieces = [];
    let i;
    for (i = 0; i < 7; i++) {
      const date = setDayOfWeek(new Date(Date.UTC(2e3, 1)), i, null, true);
      const minp = this.weekdaysMin(date);
      const shortp = this.weekdaysShort(date);
      const longp = this.weekdays(date);
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._weekdaysRegex = new RegExp(`^(${mixedPieces.join("|")})`, "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp(`^(${longPieces.join("|")})`, "i");
    this._weekdaysShortStrictRegex = new RegExp(`^(${shortPieces.join("|")})`, "i");
    this._weekdaysMinStrictRegex = new RegExp(`^(${minPieces.join("|")})`, "i");
  }
};
function cmpLenRev(a, b) {
  return b.length - a.length;
}
var defaultCalendar = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
var defaultInvalidDate = "Invalid date";
var defaultLocaleWeek = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 1st is the first week of the year.
};
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
var defaultRelativeTime = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  relativeTime: defaultRelativeTime,
  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,
  week: defaultLocaleWeek,
  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,
  meridiemParse: defaultLocaleMeridiemParse
};
function compareArrays(array1, array2, dontConvert) {
  const len = Math.min(array1.length, array2.length);
  const lengthDiff = Math.abs(array1.length - array2.length);
  let diffs = 0;
  let i;
  for (i = 0; i < len; i++) {
    if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
      diffs++;
    }
  }
  return diffs + lengthDiff;
}
function initWeek() {
  addFormatToken("w", ["ww", 2, false], "wo", function(date, opts) {
    return getWeek(date, opts.locale).toString(10);
  });
  addFormatToken("W", ["WW", 2, false], "Wo", function(date) {
    return getISOWeek(date).toString(10);
  });
  addUnitAlias("week", "w");
  addUnitAlias("isoWeek", "W");
  addUnitPriority("week", 5);
  addUnitPriority("isoWeek", 5);
  addRegexToken("w", match1to2);
  addRegexToken("ww", match1to2, match2);
  addRegexToken("W", match1to2);
  addRegexToken("WW", match1to2, match2);
  addWeekParseToken(["w", "ww", "W", "WW"], function(input2, week2, config, token) {
    week2[token.substr(0, 1)] = toInt(input2);
    return config;
  });
}
function getWeek(date, locale = getLocale(), isUTC) {
  return locale.week(date, isUTC);
}
function getISOWeek(date, isUTC) {
  return weekOfYear(date, 1, 4, isUTC).week;
}
function initWeekYear() {
  addFormatToken(null, ["gg", 2, false], null, function(date, opts) {
    return (getWeekYear(date, opts.locale) % 100).toString();
  });
  addFormatToken(null, ["GG", 2, false], null, function(date) {
    return (getISOWeekYear(date) % 100).toString();
  });
  addWeekYearFormatToken("gggg", _getWeekYearFormatCb);
  addWeekYearFormatToken("ggggg", _getWeekYearFormatCb);
  addWeekYearFormatToken("GGGG", _getISOWeekYearFormatCb);
  addWeekYearFormatToken("GGGGG", _getISOWeekYearFormatCb);
  addUnitAlias("weekYear", "gg");
  addUnitAlias("isoWeekYear", "GG");
  addUnitPriority("weekYear", 1);
  addUnitPriority("isoWeekYear", 1);
  addRegexToken("G", matchSigned);
  addRegexToken("g", matchSigned);
  addRegexToken("GG", match1to2, match2);
  addRegexToken("gg", match1to2, match2);
  addRegexToken("GGGG", match1to4, match4);
  addRegexToken("gggg", match1to4, match4);
  addRegexToken("GGGGG", match1to6, match6);
  addRegexToken("ggggg", match1to6, match6);
  addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input2, week2, config, token) {
    week2[token.substr(0, 2)] = toInt(input2);
    return config;
  });
  addWeekParseToken(["gg", "GG"], function(input2, week2, config, token) {
    week2[token] = parseTwoDigitYear(input2);
    return config;
  });
}
function addWeekYearFormatToken(token, getter) {
  addFormatToken(null, [token, token.length, false], null, getter);
}
function _getWeekYearFormatCb(date, opts) {
  return getWeekYear(date, opts.locale).toString();
}
function _getISOWeekYearFormatCb(date) {
  return getISOWeekYear(date).toString();
}
function getWeekYear(date, locale = getLocale(), isUTC) {
  return weekOfYear(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
}
function getISOWeekYear(date, isUTC) {
  return weekOfYear(date, 1, 4, isUTC).year;
}
function initTimezone() {
  addFormatToken("z", null, null, function(date, opts) {
    return opts.isUTC ? "UTC" : "";
  });
  addFormatToken("zz", null, null, function(date, opts) {
    return opts.isUTC ? "Coordinated Universal Time" : "";
  });
}
function initTimestamp() {
  addFormatToken("X", null, null, function(date) {
    return unix(date).toString(10);
  });
  addFormatToken("x", null, null, function(date) {
    return date.valueOf().toString(10);
  });
  addRegexToken("x", matchSigned);
  addRegexToken("X", matchTimestamp);
  addParseToken("X", function(input2, array, config) {
    config._d = new Date(parseFloat(input2) * 1e3);
    return config;
  });
  addParseToken("x", function(input2, array, config) {
    config._d = new Date(toInt(input2));
    return config;
  });
}
function initSecond() {
  addFormatToken("s", ["ss", 2, false], null, function(date, opts) {
    return getSeconds(date, opts.isUTC).toString(10);
  });
  addUnitAlias("second", "s");
  addUnitPriority("second", 15);
  addRegexToken("s", match1to2);
  addRegexToken("ss", match1to2, match2);
  addParseToken(["s", "ss"], SECOND);
}
function initQuarter() {
  addFormatToken("Q", null, "Qo", function(date, opts) {
    return getQuarter(date, opts.isUTC).toString(10);
  });
  addUnitAlias("quarter", "Q");
  addUnitPriority("quarter", 7);
  addRegexToken("Q", match1);
  addParseToken("Q", function(input2, array, config) {
    array[MONTH] = (toInt(input2) - 1) * 3;
    return config;
  });
}
function getQuarter(date, isUTC = false) {
  return Math.ceil((getMonth(date, isUTC) + 1) / 3);
}
function addOffsetFormatToken(token, separator) {
  addFormatToken(token, null, null, function(date, config) {
    let offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
    let sign = "+";
    if (offset < 0) {
      offset = -offset;
      sign = "-";
    }
    return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
  });
}
function initOffset() {
  addOffsetFormatToken("Z", ":");
  addOffsetFormatToken("ZZ", "");
  addRegexToken("Z", matchShortOffset);
  addRegexToken("ZZ", matchShortOffset);
  addParseToken(["Z", "ZZ"], function(input2, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input2);
    return config;
  });
}
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(matcher, str) {
  const matches = (str || "").match(matcher);
  if (matches === null) {
    return null;
  }
  const chunk = matches[matches.length - 1];
  const parts = chunk.match(chunkOffset) || ["-", "0", "0"];
  const minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
  const _min = parts[0] === "+" ? minutes : -minutes;
  return minutes === 0 ? 0 : _min;
}
function cloneWithOffset(input2, date, config = {}) {
  if (!config._isUTC) {
    return input2;
  }
  const res = cloneDate(date);
  const offsetDiff = (config._offset || 0) * 6e4;
  const diff = input2.valueOf() - res.valueOf() + offsetDiff;
  res.setTime(res.valueOf() + diff);
  return res;
}
function getDateOffset(date) {
  return -Math.round(date.getTimezoneOffset() / 15) * 15;
}
function getUTCOffset(date, config = {}) {
  const _offset = config._offset || 0;
  return config._isUTC ? _offset : getDateOffset(date);
}
function initMinute() {
  addFormatToken("m", ["mm", 2, false], null, function(date, opts) {
    return getMinutes(date, opts.isUTC).toString(10);
  });
  addUnitAlias("minute", "m");
  addUnitPriority("minute", 14);
  addRegexToken("m", match1to2);
  addRegexToken("mm", match1to2, match2);
  addParseToken(["m", "mm"], MINUTE);
}
function initMillisecond() {
  addFormatToken("S", null, null, function(date, opts) {
    return (~~(getMilliseconds(date, opts.isUTC) / 100)).toString(10);
  });
  addFormatToken(null, ["SS", 2, false], null, function(date, opts) {
    return (~~(getMilliseconds(date, opts.isUTC) / 10)).toString(10);
  });
  addFormatToken(null, ["SSS", 3, false], null, function(date, opts) {
    return getMilliseconds(date, opts.isUTC).toString(10);
  });
  addFormatToken(null, ["SSSS", 4, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 10).toString(10);
  });
  addFormatToken(null, ["SSSSS", 5, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 100).toString(10);
  });
  addFormatToken(null, ["SSSSSS", 6, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 1e3).toString(10);
  });
  addFormatToken(null, ["SSSSSSS", 7, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 1e4).toString(10);
  });
  addFormatToken(null, ["SSSSSSSS", 8, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 1e5).toString(10);
  });
  addFormatToken(null, ["SSSSSSSSS", 9, false], null, function(date, opts) {
    return (getMilliseconds(date, opts.isUTC) * 1e6).toString(10);
  });
  addUnitAlias("millisecond", "ms");
  addUnitPriority("millisecond", 16);
  addRegexToken("S", match1to3, match1);
  addRegexToken("SS", match1to3, match2);
  addRegexToken("SSS", match1to3, match3);
  let token;
  for (token = "SSSS"; token.length <= 9; token += "S") {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input2, array, config) {
    array[MILLISECOND] = toInt(parseFloat(`0.${input2}`) * 1e3);
    return config;
  }
  for (token = "S"; token.length <= 9; token += "S") {
    addParseToken(token, parseMs);
  }
}
function initHour() {
  function hFormat(date, isUTC) {
    return getHours(date, isUTC) % 12 || 12;
  }
  function kFormat(date, isUTC) {
    return getHours(date, isUTC) || 24;
  }
  addFormatToken("H", ["HH", 2, false], null, function(date, opts) {
    return getHours(date, opts.isUTC).toString(10);
  });
  addFormatToken("h", ["hh", 2, false], null, function(date, opts) {
    return hFormat(date, opts.isUTC).toString(10);
  });
  addFormatToken("k", ["kk", 2, false], null, function(date, opts) {
    return kFormat(date, opts.isUTC).toString(10);
  });
  addFormatToken("hmm", null, null, function(date, opts) {
    const _h = hFormat(date, opts.isUTC);
    const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    return `${_h}${_mm}`;
  });
  addFormatToken("hmmss", null, null, function(date, opts) {
    const _h = hFormat(date, opts.isUTC);
    const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    const _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
    return `${_h}${_mm}${_ss}`;
  });
  addFormatToken("Hmm", null, null, function(date, opts) {
    const _H = getHours(date, opts.isUTC);
    const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    return `${_H}${_mm}`;
  });
  addFormatToken("Hmmss", null, null, function(date, opts) {
    const _H = getHours(date, opts.isUTC);
    const _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    const _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
    return `${_H}${_mm}${_ss}`;
  });
  function meridiem(token, lowercase) {
    addFormatToken(token, null, null, function(date, opts) {
      return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
    });
  }
  meridiem("a", true);
  meridiem("A", false);
  addUnitAlias("hour", "h");
  addUnitPriority("hour", 13);
  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", match1to2);
  addRegexToken("h", match1to2);
  addRegexToken("k", match1to2);
  addRegexToken("HH", match1to2, match2);
  addRegexToken("hh", match1to2, match2);
  addRegexToken("kk", match1to2, match2);
  addRegexToken("hmm", match3to4);
  addRegexToken("hmmss", match5to6);
  addRegexToken("Hmm", match3to4);
  addRegexToken("Hmmss", match5to6);
  addParseToken(["H", "HH"], HOUR);
  addParseToken(["k", "kk"], function(input2, array, config) {
    const kInput = toInt(input2);
    array[HOUR] = kInput === 24 ? 0 : kInput;
    return config;
  });
  addParseToken(["a", "A"], function(input2, array, config) {
    config._isPm = config._locale.isPM(input2);
    config._meridiem = input2;
    return config;
  });
  addParseToken(["h", "hh"], function(input2, array, config) {
    array[HOUR] = toInt(input2);
    getParsingFlags(config).bigHour = true;
    return config;
  });
  addParseToken("hmm", function(input2, array, config) {
    const pos = input2.length - 2;
    array[HOUR] = toInt(input2.substr(0, pos));
    array[MINUTE] = toInt(input2.substr(pos));
    getParsingFlags(config).bigHour = true;
    return config;
  });
  addParseToken("hmmss", function(input2, array, config) {
    const pos1 = input2.length - 4;
    const pos2 = input2.length - 2;
    array[HOUR] = toInt(input2.substr(0, pos1));
    array[MINUTE] = toInt(input2.substr(pos1, 2));
    array[SECOND] = toInt(input2.substr(pos2));
    getParsingFlags(config).bigHour = true;
    return config;
  });
  addParseToken("Hmm", function(input2, array, config) {
    const pos = input2.length - 2;
    array[HOUR] = toInt(input2.substr(0, pos));
    array[MINUTE] = toInt(input2.substr(pos));
    return config;
  });
  addParseToken("Hmmss", function(input2, array, config) {
    const pos1 = input2.length - 4;
    const pos2 = input2.length - 2;
    array[HOUR] = toInt(input2.substr(0, pos1));
    array[MINUTE] = toInt(input2.substr(pos1, 2));
    array[SECOND] = toInt(input2.substr(pos2));
    return config;
  });
}
var locales = {};
var localeFamilies = {};
var globalLocale;
function normalizeLocale(key) {
  return key ? key.toLowerCase().replace("_", "-") : key;
}
function chooseLocale(names) {
  let next;
  let locale;
  let i = 0;
  while (i < names.length) {
    const split = normalizeLocale(names[i]).split("-");
    let j = split.length;
    next = normalizeLocale(names[i + 1]);
    next = next ? next.split("-") : null;
    while (j > 0) {
      locale = loadLocale(split.slice(0, j).join("-"));
      if (locale) {
        return locale;
      }
      if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
        break;
      }
      j--;
    }
    i++;
  }
  return null;
}
function mergeConfigs(parentConfig, childConfig) {
  const res = Object.assign({}, parentConfig);
  for (const childProp in childConfig) {
    if (!hasOwnProp(childConfig, childProp)) {
      continue;
    }
    if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
      res[childProp] = {};
      Object.assign(res[childProp], parentConfig[childProp]);
      Object.assign(res[childProp], childConfig[childProp]);
    } else if (childConfig[childProp] != null) {
      res[childProp] = childConfig[childProp];
    } else {
      delete res[childProp];
    }
  }
  for (const parentProp in parentConfig) {
    if (hasOwnProp(parentConfig, parentProp) && !hasOwnProp(childConfig, parentProp) && isObject(parentConfig[parentProp])) {
      res[parentProp] = Object.assign({}, res[parentProp]);
    }
  }
  return res;
}
function loadLocale(name) {
  if (!locales[name]) {
    console.error(`Khronos locale error: please load locale "${name}" before using it`);
  }
  return locales[name];
}
function getSetGlobalLocale(key, values) {
  let data;
  if (key) {
    if (isUndefined(values)) {
      data = getLocale(key);
    } else if (isString(key)) {
      data = defineLocale(key, values);
    }
    if (data) {
      globalLocale = data;
    }
  }
  return globalLocale && globalLocale._abbr;
}
function defineLocale(name, config) {
  if (config === null) {
    delete locales[name];
    globalLocale = getLocale("en");
    return null;
  }
  if (!config) {
    return;
  }
  let parentConfig = baseConfig;
  config.abbr = name;
  if (config.parentLocale != null) {
    if (locales[config.parentLocale] != null) {
      parentConfig = locales[config.parentLocale]._config;
    } else {
      if (!localeFamilies[config.parentLocale]) {
        localeFamilies[config.parentLocale] = [];
      }
      localeFamilies[config.parentLocale].push({ name, config });
      return null;
    }
  }
  locales[name] = new Locale(mergeConfigs(parentConfig, config));
  if (localeFamilies[name]) {
    localeFamilies[name].forEach(function(x) {
      defineLocale(x.name, x.config);
    });
  }
  getSetGlobalLocale(name);
  return locales[name];
}
function getLocale(key) {
  setDefaultLocale();
  if (!key) {
    return globalLocale;
  }
  const _key = isArray(key) ? key : [key];
  return chooseLocale(_key);
}
function setDefaultLocale() {
  if (locales[`en`]) {
    return void 0;
  }
  getSetGlobalLocale("en", {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal(num) {
      const b = num % 10;
      const output2 = toInt(num % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
      return num + output2;
    }
  });
  initWeek();
  initWeekYear();
  initYear();
  initTimezone();
  initTimestamp();
  initSecond();
  initQuarter();
  initOffset();
  initMonth();
  initMinute();
  initMillisecond();
  initHour();
  initDayOfYear();
  initDayOfWeek();
  initDayOfMonth();
}
var ordering = ["year", "quarter", "month", "week", "day", "hours", "minutes", "seconds", "milliseconds"];
var orderingHash = ordering.reduce((mem, order) => {
  mem[order] = true;
  return mem;
}, {});
function isDurationValid(duration) {
  const durationKeys = Object.keys(duration);
  if (durationKeys.some((key) => {
    return key in orderingHash && duration[key] === null || isNaN(duration[key]);
  })) {
    return false;
  }
  let unitHasDecimal = false;
  for (let i = 0; i < ordering.length; ++i) {
    if (duration[ordering[i]]) {
      if (unitHasDecimal) {
        return false;
      }
      if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
        unitHasDecimal = true;
      }
    }
  }
  return true;
}
function absCeil(number) {
  return number < 0 ? Math.floor(number) : Math.ceil(number);
}
function bubble(dur) {
  let milliseconds = dur._milliseconds;
  let days = dur._days;
  let months2 = dur._months;
  const data = dur._data;
  if (!(milliseconds >= 0 && days >= 0 && months2 >= 0 || milliseconds <= 0 && days <= 0 && months2 <= 0)) {
    milliseconds += absCeil(monthsToDays(months2) + days) * 864e5;
    days = 0;
    months2 = 0;
  }
  data.milliseconds = milliseconds % 1e3;
  const seconds = absFloor(milliseconds / 1e3);
  data.seconds = seconds % 60;
  const minutes = absFloor(seconds / 60);
  data.minutes = minutes % 60;
  const hours = absFloor(minutes / 60);
  data.hours = hours % 24;
  days += absFloor(hours / 24);
  const monthsFromDays = absFloor(daysToMonths(days));
  months2 += monthsFromDays;
  days -= absCeil(monthsToDays(monthsFromDays));
  const years = absFloor(months2 / 12);
  months2 %= 12;
  data.day = days;
  data.month = months2;
  data.year = years;
  return dur;
}
function daysToMonths(day) {
  return day * 4800 / 146097;
}
function monthsToDays(month) {
  return month * 146097 / 4800;
}
var round = Math.round;
var thresholds = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month
  M: 11
  // months to year
};
function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
  return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
}
function relativeTime(posNegDuration, withoutSuffix, locale) {
  const duration = createDuration(posNegDuration).abs();
  const seconds = round(duration.as("s"));
  const minutes = round(duration.as("m"));
  const hours = round(duration.as("h"));
  const days = round(duration.as("d"));
  const months2 = round(duration.as("M"));
  const years = round(duration.as("y"));
  const a = seconds <= thresholds["ss"] && ["s", seconds] || seconds < thresholds["s"] && ["ss", seconds] || minutes <= 1 && ["m"] || minutes < thresholds["m"] && ["mm", minutes] || hours <= 1 && ["h"] || hours < thresholds["h"] && ["hh", hours] || days <= 1 && ["d"] || days < thresholds["d"] && ["dd", days] || months2 <= 1 && ["M"] || months2 < thresholds["M"] && ["MM", months2] || years <= 1 && ["y"] || ["yy", years];
  const b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
  return substituteTimeAgo.apply(null, b);
}
var Duration = class {
  constructor(duration, config = {}) {
    this._data = {};
    this._locale = getLocale();
    this._locale = config && config._locale || getLocale();
    const normalizedInput = duration;
    const years = normalizedInput.year || 0;
    const quarters = normalizedInput.quarter || 0;
    const months2 = normalizedInput.month || 0;
    const weeks = normalizedInput.week || 0;
    const days = normalizedInput.day || 0;
    const hours = normalizedInput.hours || 0;
    const minutes = normalizedInput.minutes || 0;
    const seconds = normalizedInput.seconds || 0;
    const milliseconds = normalizedInput.milliseconds || 0;
    this._isValid = isDurationValid(normalizedInput);
    this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 60 * 1e3 + // 1000 * 60
    hours * 1e3 * 60 * 60;
    this._days = +days + weeks * 7;
    this._months = +months2 + quarters * 3 + years * 12;
    return bubble(this);
  }
  isValid() {
    return this._isValid;
  }
  humanize(withSuffix) {
    if (!this.isValid()) {
      return this.localeData().invalidDate;
    }
    const locale = this.localeData();
    let output2 = relativeTime(this, !withSuffix, locale);
    if (withSuffix) {
      output2 = locale.pastFuture(+this, output2);
    }
    return locale.postformat(output2);
  }
  localeData() {
    return this._locale;
  }
  locale(localeKey) {
    if (!localeKey) {
      return this._locale._abbr;
    }
    this._locale = getLocale(localeKey) || this._locale;
    return this;
  }
  abs() {
    const mathAbs = Math.abs;
    const data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.month = mathAbs(data.month);
    data.year = mathAbs(data.year);
    return this;
  }
  as(_units) {
    if (!this.isValid()) {
      return NaN;
    }
    let days;
    let months2;
    const milliseconds = this._milliseconds;
    const units2 = normalizeUnits(_units);
    if (units2 === "month" || units2 === "year") {
      days = this._days + milliseconds / 864e5;
      months2 = this._months + daysToMonths(days);
      return units2 === "month" ? months2 : months2 / 12;
    }
    days = this._days + Math.round(monthsToDays(this._months));
    switch (units2) {
      case "week":
        return days / 7 + milliseconds / 6048e5;
      case "day":
        return days + milliseconds / 864e5;
      case "hours":
        return days * 24 + milliseconds / 36e5;
      case "minutes":
        return days * 1440 + milliseconds / 6e4;
      case "seconds":
        return days * 86400 + milliseconds / 1e3;
      // Math.floor prevents floating point math errors here
      case "milliseconds":
        return Math.floor(days * 864e5) + milliseconds;
      default:
        throw new Error(`Unknown unit ${units2}`);
    }
  }
  valueOf() {
    if (!this.isValid()) {
      return NaN;
    }
    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }
};
function isDuration(obj) {
  return obj instanceof Duration;
}
function isValid(config) {
  if (config._isValid == null) {
    const flags = getParsingFlags(config);
    const parsedParts = Array.prototype.some.call(flags.parsedDateParts, function(i) {
      return i != null;
    });
    let isNowValid = !isNaN(config._d && config._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
    if (config._strict) {
      isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
    }
    if (Object.isFrozen == null || !Object.isFrozen(config)) {
      config._isValid = isNowValid;
    } else {
      return isNowValid;
    }
  }
  return config._isValid;
}
function createInvalid(config, flags) {
  config._d = /* @__PURE__ */ new Date(NaN);
  Object.assign(getParsingFlags(config), flags || { userInvalidated: true });
  return config;
}
function markInvalid(config) {
  config._isValid = false;
  return config;
}
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
var isoDates = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/, true],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/, true],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/, true],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
  ["YYYY-DDD", /\d{4}-\d{3}/, true],
  ["YYYY-MM", /\d{4}-\d\d/, false],
  ["YYYYYYMMDD", /[+-]\d{10}/, true],
  ["YYYYMMDD", /\d{8}/, true],
  // YYYYMM is NOT allowed by the standard
  ["GGGG[W]WWE", /\d{4}W\d{3}/, true],
  ["GGGG[W]WW", /\d{4}W\d{2}/, false],
  ["YYYYDDD", /\d{7}/, true]
];
var isoTimes = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
];
var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
var obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function configFromISO(config) {
  if (!isString(config._i)) {
    return config;
  }
  const input2 = config._i;
  const match = extendedIsoRegex.exec(input2) || basicIsoRegex.exec(input2);
  let allowTime;
  let dateFormat;
  let timeFormat;
  let tzFormat;
  if (!match) {
    config._isValid = false;
    return config;
  }
  let i;
  let l;
  for (i = 0, l = isoDates.length; i < l; i++) {
    if (isoDates[i][1].exec(match[1])) {
      dateFormat = isoDates[i][0];
      allowTime = isoDates[i][2] !== false;
      break;
    }
  }
  if (dateFormat == null) {
    config._isValid = false;
    return config;
  }
  if (match[3]) {
    for (i = 0, l = isoTimes.length; i < l; i++) {
      if (isoTimes[i][1].exec(match[3])) {
        timeFormat = (match[2] || " ") + isoTimes[i][0];
        break;
      }
    }
    if (timeFormat == null) {
      config._isValid = false;
      return config;
    }
  }
  if (!allowTime && timeFormat != null) {
    config._isValid = false;
    return config;
  }
  if (match[4]) {
    if (tzRegex.exec(match[4])) {
      tzFormat = "Z";
    } else {
      config._isValid = false;
      return config;
    }
  }
  config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
  return configFromStringAndFormat(config);
}
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = [
    untruncateYear(yearStr),
    defaultLocaleMonthsShort.indexOf(monthStr),
    parseInt(dayStr, 10),
    parseInt(hourStr, 10),
    parseInt(minuteStr, 10)
  ];
  if (secondStr) {
    result.push(parseInt(secondStr, 10));
  }
  return result;
}
function untruncateYear(yearStr) {
  const year = parseInt(yearStr, 10);
  return year <= 49 ? year + 2e3 : year;
}
function preprocessRFC2822(str) {
  return str.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
function checkWeekday(weekdayStr, parsedInput, config) {
  if (weekdayStr) {
    const weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
    const weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
    if (weekdayProvided !== weekdayActual) {
      getParsingFlags(config).weekdayMismatch = true;
      config._isValid = false;
      return false;
    }
  }
  return true;
}
function calculateOffset(obsOffset, militaryOffset, numOffset) {
  if (obsOffset) {
    return obsOffsets[obsOffset];
  } else if (militaryOffset) {
    return 0;
  } else {
    const hm = parseInt(numOffset, 10);
    const m = hm % 100;
    const h = (hm - m) / 100;
    return h * 60 + m;
  }
}
function configFromRFC2822(config) {
  if (!isString(config._i)) {
    return config;
  }
  const match = rfc2822.exec(preprocessRFC2822(config._i));
  if (!match) {
    return markInvalid(config);
  }
  const parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
  if (!checkWeekday(match[1], parsedArray, config)) {
    return config;
  }
  config._a = parsedArray;
  config._tzm = calculateOffset(match[8], match[9], match[10]);
  config._d = createUTCDate.apply(null, config._a);
  config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  getParsingFlags(config).rfc2822 = true;
  return config;
}
function configFromString(config) {
  if (!isString(config._i)) {
    return config;
  }
  const matched = aspNetJsonRegex.exec(config._i);
  if (matched !== null) {
    config._d = /* @__PURE__ */ new Date(+matched[1]);
    return config;
  }
  configFromISO(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return config;
  }
  configFromRFC2822(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return config;
  }
  return createInvalid(config);
}
function formatDate(date, format, locale, isUTC, offset = 0) {
  const _locale = getLocale(locale || "en");
  if (!_locale) {
    throw new Error(`Locale "${locale}" is not defined, please add it with "defineLocale(...)"`);
  }
  const _format = format || (isUTC ? "YYYY-MM-DDTHH:mm:ss[Z]" : "YYYY-MM-DDTHH:mm:ssZ");
  const output2 = formatMoment(date, _format, _locale, isUTC, offset);
  if (!output2) {
    return output2;
  }
  return _locale.postformat(output2);
}
function formatMoment(date, _format, locale, isUTC, offset = 0) {
  if (!isDateValid(date)) {
    return locale.invalidDate;
  }
  const format = expandFormat(_format, locale);
  formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
  return formatFunctions[format](date, locale, isUTC, offset);
}
function expandFormat(_format, locale) {
  let format = _format;
  let i = 5;
  const localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  const replaceLongDateFormatTokens = (input2) => {
    return locale.formatLongDate(input2) || input2;
  };
  localFormattingTokens.lastIndex = 0;
  while (i >= 0 && localFormattingTokens.test(format)) {
    format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
    localFormattingTokens.lastIndex = 0;
    i -= 1;
  }
  return format;
}
function defaults(a, b, c) {
  if (a != null) {
    return a;
  }
  if (b != null) {
    return b;
  }
  return c;
}
function currentDateArray(config) {
  const nowValue = /* @__PURE__ */ new Date();
  if (config._useUTC) {
    return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
  }
  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
function configFromArray(config) {
  const input2 = [];
  let i;
  let date;
  let yearToUse;
  if (config._d) {
    return config;
  }
  const currentDate = currentDateArray(config);
  if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
    dayOfYearFromWeekInfo(config);
  }
  if (config._dayOfYear != null) {
    yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
    if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
      getParsingFlags(config)._overflowDayOfYear = true;
    }
    date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
    config._a[MONTH] = date.getUTCMonth();
    config._a[DATE] = date.getUTCDate();
  }
  for (i = 0; i < 3 && config._a[i] == null; ++i) {
    config._a[i] = input2[i] = currentDate[i];
  }
  for (; i < 7; i++) {
    config._a[i] = input2[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
  }
  if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
    config._nextDay = true;
    config._a[HOUR] = 0;
  }
  config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input2);
  const expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
  if (config._tzm != null) {
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }
  if (config._nextDay) {
    config._a[HOUR] = 24;
  }
  if (config._w && typeof config._w["d"] !== "undefined" && config._w["d"] !== expectedWeekday) {
    getParsingFlags(config).weekdayMismatch = true;
  }
  return config;
}
function dayOfYearFromWeekInfo(config) {
  let weekYear, week2, weekday, dow, doy, temp, weekdayOverflow;
  const w = config._w;
  if (w["GG"] != null || w["W"] != null || w["E"] != null) {
    dow = 1;
    doy = 4;
    weekYear = defaults(w["GG"], config._a[YEAR], weekOfYear(/* @__PURE__ */ new Date(), 1, 4).year);
    week2 = defaults(w["W"], 1);
    weekday = defaults(w["E"], 1);
    if (weekday < 1 || weekday > 7) {
      weekdayOverflow = true;
    }
  } else {
    dow = config._locale._week.dow;
    doy = config._locale._week.doy;
    const curWeek = weekOfYear(/* @__PURE__ */ new Date(), dow, doy);
    weekYear = defaults(w["gg"], config._a[YEAR], curWeek.year);
    week2 = defaults(w["w"], curWeek.week);
    if (w["d"] != null) {
      weekday = w["d"];
      if (weekday < 0 || weekday > 6) {
        weekdayOverflow = true;
      }
    } else if (w["e"] != null) {
      weekday = w["e"] + dow;
      if (w["e"] < 0 || w["e"] > 6) {
        weekdayOverflow = true;
      }
    } else {
      weekday = dow;
    }
  }
  if (week2 < 1 || week2 > weeksInYear(weekYear, dow, doy)) {
    getParsingFlags(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
    getParsingFlags(config)._overflowWeekday = true;
  } else {
    temp = dayOfYearFromWeeks(weekYear, week2, weekday, dow, doy);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
  return config;
}
function checkOverflow(config) {
  let overflow;
  const a = config._a;
  if (a && getParsingFlags(config).overflow === -2) {
    overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
    if (getParsingFlags(config)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
      overflow = DATE;
    }
    if (getParsingFlags(config)._overflowWeeks && overflow === -1) {
      overflow = WEEK;
    }
    if (getParsingFlags(config)._overflowWeekday && overflow === -1) {
      overflow = WEEKDAY;
    }
    getParsingFlags(config).overflow = overflow;
  }
  return config;
}
var ISO_8601 = "ISO_8601";
var RFC_2822 = "RFC_2822";
function configFromStringAndFormat(config) {
  if (config._f === ISO_8601) {
    return configFromISO(config);
  }
  if (config._f === RFC_2822) {
    return configFromRFC2822(config);
  }
  config._a = [];
  getParsingFlags(config).empty = true;
  if (isArray(config._f) || !config._i && config._i !== 0) {
    return config;
  }
  let input2 = config._i.toString();
  let totalParsedInputLength = 0;
  const inputLength = input2.length;
  const tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
  let i;
  let token;
  let parsedInput;
  let skipped;
  for (i = 0; i < tokens2.length; i++) {
    token = tokens2[i];
    parsedInput = (input2.match(getParseRegexForToken(token, config._locale)) || [])[0];
    if (parsedInput) {
      skipped = input2.substr(0, input2.indexOf(parsedInput));
      if (skipped.length > 0) {
        getParsingFlags(config).unusedInput.push(skipped);
      }
      input2 = input2.slice(input2.indexOf(parsedInput) + parsedInput.length);
      totalParsedInputLength += parsedInput.length;
    }
    if (formatTokenFunctions[token]) {
      if (parsedInput) {
        getParsingFlags(config).empty = false;
      } else {
        getParsingFlags(config).unusedTokens.push(token);
      }
      addTimeToArrayFromToken(token, parsedInput, config);
    } else if (config._strict && !parsedInput) {
      getParsingFlags(config).unusedTokens.push(token);
    }
  }
  getParsingFlags(config).charsLeftOver = inputLength - totalParsedInputLength;
  if (input2.length > 0) {
    getParsingFlags(config).unusedInput.push(input2);
  }
  if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
    getParsingFlags(config).bigHour = void 0;
  }
  getParsingFlags(config).parsedDateParts = config._a.slice(0);
  getParsingFlags(config).meridiem = config._meridiem;
  config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
  configFromArray(config);
  return checkOverflow(config);
}
function meridiemFixWrap(locale, _hour, meridiem) {
  let hour = _hour;
  if (meridiem == null) {
    return hour;
  }
  if (locale.meridiemHour != null) {
    return locale.meridiemHour(hour, meridiem);
  }
  if (locale.isPM == null) {
    return hour;
  }
  const isPm = locale.isPM(meridiem);
  if (isPm && hour < 12) {
    hour += 12;
  }
  if (!isPm && hour === 12) {
    hour = 0;
  }
  return hour;
}
function configFromStringAndArray(config) {
  let tempConfig;
  let bestMoment;
  let scoreToBeat;
  let currentScore;
  if (!config._f || config._f.length === 0) {
    getParsingFlags(config).invalidFormat = true;
    return createInvalid(config);
  }
  let i;
  for (i = 0; i < config._f.length; i++) {
    currentScore = 0;
    tempConfig = Object.assign({}, config);
    if (config._useUTC != null) {
      tempConfig._useUTC = config._useUTC;
    }
    tempConfig._f = config._f[i];
    configFromStringAndFormat(tempConfig);
    if (!isValid(tempConfig)) {
      continue;
    }
    currentScore += getParsingFlags(tempConfig).charsLeftOver;
    currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
    getParsingFlags(tempConfig).score = currentScore;
    if (scoreToBeat == null || currentScore < scoreToBeat) {
      scoreToBeat = currentScore;
      bestMoment = tempConfig;
    }
  }
  return Object.assign(config, bestMoment || tempConfig);
}
function configFromObject(config) {
  if (config._d) {
    return config;
  }
  const input2 = config._i;
  if (isObject(input2)) {
    const i = normalizeObjectUnits(input2);
    config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds].map((obj) => isString(obj) ? parseInt(obj, 10) : obj);
  }
  return configFromArray(config);
}
function createFromConfig(config) {
  const res = checkOverflow(prepareConfig(config));
  res._d = new Date(res._d != null ? res._d.getTime() : NaN);
  if (!isValid(Object.assign({}, res, { _isValid: null }))) {
    res._d = /* @__PURE__ */ new Date(NaN);
  }
  return res;
}
function prepareConfig(config) {
  let input2 = config._i;
  const format = config._f;
  config._locale = config._locale || getLocale(config._l);
  if (input2 === null || format === void 0 && input2 === "") {
    return createInvalid(config, { nullInput: true });
  }
  if (isString(input2)) {
    config._i = input2 = config._locale.preparse(input2, format);
  }
  if (isDate(input2)) {
    config._d = cloneDate(input2);
    return config;
  }
  if (isArray(format)) {
    configFromStringAndArray(config);
  } else if (format) {
    configFromStringAndFormat(config);
  } else {
    configFromInput(config);
  }
  if (!isValid(config)) {
    config._d = null;
  }
  return config;
}
function configFromInput(config) {
  const input2 = config._i;
  if (isUndefined(input2)) {
    config._d = /* @__PURE__ */ new Date();
  } else if (isDate(input2)) {
    config._d = cloneDate(input2);
  } else if (isString(input2)) {
    configFromString(config);
  } else if (isArray(input2) && input2.length) {
    const _arr = input2.slice(0);
    config._a = _arr.map((obj) => isString(obj) ? parseInt(obj, 10) : obj);
    configFromArray(config);
  } else if (isObject(input2)) {
    configFromObject(config);
  } else if (isNumber(input2)) {
    config._d = new Date(input2);
  } else {
    return createInvalid(config);
  }
  return config;
}
function createLocalOrUTC(input2, format, localeKey, strict, isUTC) {
  const config = {};
  let _input = input2;
  if (isObject(_input) && isObjectEmpty(_input) || isArray(_input) && _input.length === 0) {
    _input = void 0;
  }
  config._useUTC = config._isUTC = isUTC;
  config._l = localeKey;
  config._i = _input;
  config._f = format;
  config._strict = strict;
  return createFromConfig(config);
}
function parseDate(input2, format, localeKey, strict, isUTC) {
  if (isDate(input2)) {
    return input2;
  }
  const config = createLocalOrUTC(input2, format, localeKey, strict, isUTC);
  return config._d;
}
function utcAsLocal(date) {
  if (!(date instanceof Date)) {
    return null;
  }
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
}
function absRound(num) {
  return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
}
function isAfter(date1, date2, units2 = "milliseconds") {
  if (!date1 || !date2) {
    return false;
  }
  if (units2 === "milliseconds") {
    return date1.valueOf() > date2.valueOf();
  }
  return date2.valueOf() < startOf(date1, units2).valueOf();
}
function isBefore(date1, date2, units2 = "milliseconds") {
  if (!date1 || !date2) {
    return false;
  }
  if (units2 === "milliseconds") {
    return date1.valueOf() < date2.valueOf();
  }
  return endOf(date1, units2).valueOf() < date2.valueOf();
}
function isDisabledDay(date, daysDisabled) {
  if (typeof daysDisabled === "undefined" || !daysDisabled || !daysDisabled.length) {
    return false;
  }
  return daysDisabled.some((day) => day === date.getDay());
}
function isSame(date1, date2, units2 = "milliseconds") {
  if (!date1 || !date2) {
    return false;
  }
  if (units2 === "milliseconds") {
    return date1.valueOf() === date2.valueOf();
  }
  const inputMs = date2.valueOf();
  return startOf(date1, units2).valueOf() <= inputMs && inputMs <= endOf(date1, units2).valueOf();
}
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input2, key, config = {}) {
  const duration = convertDuration(input2, key);
  return new Duration(duration, config);
}
function convertDuration(input2, key) {
  if (input2 == null) {
    return {};
  }
  if (isDuration(input2)) {
    return {
      milliseconds: input2._milliseconds,
      day: input2._days,
      month: input2._months
    };
  }
  if (isNumber(input2)) {
    return key ? { [key]: input2 } : { milliseconds: input2 };
  }
  if (isString(input2)) {
    let match = aspNetRegex.exec(input2);
    if (match) {
      const sign = match[1] === "-" ? -1 : 1;
      return {
        year: 0,
        day: toInt(match[DATE]) * sign,
        hours: toInt(match[HOUR]) * sign,
        minutes: toInt(match[MINUTE]) * sign,
        seconds: toInt(match[SECOND]) * sign,
        // the millisecond decimal point is included in the match
        milliseconds: toInt(absRound(toInt(match[MILLISECOND]) * 1e3)) * sign
      };
    }
    match = isoRegex.exec(input2);
    if (match) {
      const sign = match[1] === "-" ? -1 : match[1] === "+" ? 1 : 1;
      return {
        year: parseIso(match[2], sign),
        month: parseIso(match[3], sign),
        week: parseIso(match[4], sign),
        day: parseIso(match[5], sign),
        hours: parseIso(match[6], sign),
        minutes: parseIso(match[7], sign),
        seconds: parseIso(match[8], sign)
      };
    }
  }
  if (isObject(input2) && ("from" in input2 || "to" in input2)) {
    const diffRes = momentsDifference(parseDate(input2.from), parseDate(input2.to));
    return {
      milliseconds: diffRes.milliseconds,
      month: diffRes.months
    };
  }
  return input2;
}
function parseIso(inp, sign) {
  const res = inp && parseFloat(inp.replace(",", "."));
  return (isNaN(res) ? 0 : res) * sign;
}
function positiveMomentsDifference(base, other) {
  const res = { milliseconds: 0, months: 0 };
  res.months = getMonth(other) - getMonth(base) + (getFullYear(other) - getFullYear(base)) * 12;
  const _basePlus = add(cloneDate(base), res.months, "month");
  if (isAfter(_basePlus, other)) {
    --res.months;
  }
  res.milliseconds = +other - +add(cloneDate(base), res.months, "month");
  return res;
}
function momentsDifference(base, other) {
  if (!(isDateValid(base) && isDateValid(other))) {
    return { milliseconds: 0, months: 0 };
  }
  let res;
  const _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
  if (isBefore(base, _other)) {
    res = positiveMomentsDifference(base, _other);
  } else {
    res = positiveMomentsDifference(_other, base);
    res.milliseconds = -res.milliseconds;
    res.months = -res.months;
  }
  return res;
}
function add(date, val, period, isUTC) {
  const dur = createDuration(val, period);
  return addSubtract(date, dur, 1, isUTC);
}
function subtract(date, val, period, isUTC) {
  const dur = createDuration(val, period);
  return addSubtract(date, dur, -1, isUTC);
}
function addSubtract(date, duration, isAdding, isUTC) {
  const milliseconds = duration._milliseconds;
  const days = absRound(duration._days);
  const months2 = absRound(duration._months);
  if (months2) {
    setMonth(date, getMonth(date, isUTC) + months2 * isAdding, isUTC);
  }
  if (days) {
    setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
  }
  if (milliseconds) {
    setTime(date, getTime(date) + milliseconds * isAdding);
  }
  return cloneDate(date);
}
function initDayOfWeek() {
  addFormatToken("d", null, "do", function(date, opts) {
    return getDay(date, opts.isUTC).toString(10);
  });
  addFormatToken("dd", null, null, function(date, opts) {
    return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
  });
  addFormatToken("ddd", null, null, function(date, opts) {
    return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
  });
  addFormatToken("dddd", null, null, function(date, opts) {
    return opts.locale.weekdays(date, opts.format, opts.isUTC);
  });
  addFormatToken("e", null, null, function(date, opts) {
    return getLocaleDayOfWeek(date, opts.locale, opts.isUTC).toString(10);
  });
  addFormatToken("E", null, null, function(date, opts) {
    return getISODayOfWeek(date, opts.isUTC).toString(10);
  });
  addUnitAlias("day", "d");
  addUnitAlias("weekday", "e");
  addUnitAlias("isoWeekday", "E");
  addUnitPriority("day", 11);
  addUnitPriority("weekday", 11);
  addUnitPriority("isoWeekday", 11);
  addRegexToken("d", match1to2);
  addRegexToken("e", match1to2);
  addRegexToken("E", match1to2);
  addRegexToken("dd", function(isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken("ddd", function(isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken("dddd", function(isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });
  addWeekParseToken(["dd", "ddd", "dddd"], function(input2, week2, config, token) {
    const weekday = config._locale.weekdaysParse(input2, token, config._strict);
    if (weekday != null) {
      week2["d"] = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = !!input2;
    }
    return config;
  });
  addWeekParseToken(["d", "e", "E"], function(input2, week2, config, token) {
    week2[token] = toInt(input2);
    return config;
  });
}
function parseWeekday(input2, locale) {
  if (!isString(input2)) {
    return input2;
  }
  const _num = parseInt(input2, 10);
  if (!isNaN(_num)) {
    return _num;
  }
  const _weekDay = locale.weekdaysParse(input2);
  if (isNumber(_weekDay)) {
    return _weekDay;
  }
  return null;
}
function parseIsoWeekday(input2, locale = getLocale()) {
  if (isString(input2)) {
    return locale.weekdaysParse(input2) % 7 || 7;
  }
  return isNumber(input2) && isNaN(input2) ? null : input2;
}
function setDayOfWeek(date, input2, locale = getLocale(), isUTC) {
  const day = getDay(date, isUTC);
  const _input = parseWeekday(input2, locale);
  return add(date, _input - day, "day");
}
function getDayOfWeek(date, isUTC) {
  return getDay(date, isUTC);
}
function getLocaleDayOfWeek(date, locale = getLocale(), isUTC) {
  return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
function setLocaleDayOfWeek(date, input2, opts = {}) {
  const weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
  return add(date, input2 - weekday, "day");
}
function getISODayOfWeek(date, isUTC) {
  return getDay(date, isUTC) || 7;
}
function setISODayOfWeek(date, input2, opts = {}) {
  const weekday = parseIsoWeekday(input2, opts.locale);
  return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
}
//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
var symbolMap$2 = {
  1: "\u0661",
  2: "\u0662",
  3: "\u0663",
  4: "\u0664",
  5: "\u0665",
  6: "\u0666",
  7: "\u0667",
  8: "\u0668",
  9: "\u0669",
  0: "\u0660"
};
var numberMap$2 = {
  "\u0661": "1",
  "\u0662": "2",
  "\u0663": "3",
  "\u0664": "4",
  "\u0665": "5",
  "\u0666": "6",
  "\u0667": "7",
  "\u0668": "8",
  "\u0669": "9",
  "\u0660": "0"
};
var pluralForm$1 = function(num) {
  return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
};
var plurals$1 = {
  s: ["\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629", "\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u062B\u0627\u0646\u064A\u062A\u0627\u0646", "\u062B\u0627\u0646\u064A\u062A\u064A\u0646"], "%d \u062B\u0648\u0627\u0646", "%d \u062B\u0627\u0646\u064A\u0629", "%d \u062B\u0627\u0646\u064A\u0629"],
  m: ["\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629", "\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u062F\u0642\u064A\u0642\u062A\u0627\u0646", "\u062F\u0642\u064A\u0642\u062A\u064A\u0646"], "%d \u062F\u0642\u0627\u0626\u0642", "%d \u062F\u0642\u064A\u0642\u0629", "%d \u062F\u0642\u064A\u0642\u0629"],
  h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u0633\u0627\u0639\u062A\u0627\u0646", "\u0633\u0627\u0639\u062A\u064A\u0646"], "%d \u0633\u0627\u0639\u0627\u062A", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
  d: ["\u0623\u0642\u0644 \u0645\u0646 \u064A\u0648\u0645", "\u064A\u0648\u0645 \u0648\u0627\u062D\u062F", ["\u064A\u0648\u0645\u0627\u0646", "\u064A\u0648\u0645\u064A\u0646"], "%d \u0623\u064A\u0627\u0645", "%d \u064A\u0648\u0645\u064B\u0627", "%d \u064A\u0648\u0645"],
  M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064A\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
  y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062D\u062F", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064A\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064B\u0627", "%d \u0639\u0627\u0645"]
};
var pluralize$1 = function(u) {
  return function(num, withoutSuffix) {
    const f = pluralForm$1(num);
    let str = plurals$1[u][pluralForm$1(num)];
    if (f === 2) {
      str = str[withoutSuffix ? 0 : 1];
    }
    return str.replace(/%d/i, num.toString());
  };
};
var months$3 = [
  "\u064A\u0646\u0627\u064A\u0631",
  "\u0641\u0628\u0631\u0627\u064A\u0631",
  "\u0645\u0627\u0631\u0633",
  "\u0623\u0628\u0631\u064A\u0644",
  "\u0645\u0627\u064A\u0648",
  "\u064A\u0648\u0646\u064A\u0648",
  "\u064A\u0648\u0644\u064A\u0648",
  "\u0623\u063A\u0633\u0637\u0633",
  "\u0633\u0628\u062A\u0645\u0628\u0631",
  "\u0623\u0643\u062A\u0648\u0628\u0631",
  "\u0646\u0648\u0641\u0645\u0628\u0631",
  "\u062F\u064A\u0633\u0645\u0628\u0631"
];
var arLocale = {
  abbr: "ar",
  months: months$3,
  monthsShort: months$3,
  weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
  weekdaysShort: "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),
  weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "D/\u200FM/\u200FYYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  meridiemParse: /ص|م/,
  isPM(input2) {
    return "\u0645" === input2;
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return "\u0635";
    } else {
      return "\u0645";
    }
  },
  calendar: {
    sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
    nextDay: "[\u063A\u062F\u064B\u0627 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
    nextWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
    lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
    lastWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "\u0628\u0639\u062F %s",
    past: "\u0645\u0646\u0630 %s",
    s: pluralize$1("s"),
    ss: pluralize$1("s"),
    m: pluralize$1("m"),
    mm: pluralize$1("m"),
    h: pluralize$1("h"),
    hh: pluralize$1("h"),
    d: pluralize$1("d"),
    dd: pluralize$1("d"),
    M: pluralize$1("M"),
    MM: pluralize$1("M"),
    y: pluralize$1("y"),
    yy: pluralize$1("y")
  },
  preparse(str) {
    return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(match) {
      return numberMap$2[match];
    }).replace(/،/g, ",");
  },
  postformat(str) {
    return str.replace(/\d/g, function(match) {
      return symbolMap$2[match];
    }).replace(/,/g, "\u060C");
  },
  week: {
    dow: 6,
    // Saturday is the first day of the week.
    doy: 12
    // The week that contains Jan 1st is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Iskren Ivov Chernev : https://github.com/ichernev
//! author : Kunal Marwaha : https://github.com/marwahaha
//! author : Matt Grande : https://github.com/mattgrande
//! author : Isaac Cambron : https://github.com/icambron
//! author : Venelin Manchev : https://github.com/vmanchev
var bgLocale = {
  abbr: "bg",
  months: "\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_"),
  monthsShort: "\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_"),
  weekdays: "\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split("_"),
  weekdaysShort: "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split("_"),
  weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "D.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY H:mm",
    LLLL: "dddd, D MMMM YYYY H:mm"
  },
  calendar: {
    sameDay: "[\u0414\u043D\u0435\u0441 \u0432] LT",
    nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
    nextWeek: "dddd [\u0432] LT",
    lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
    lastWeek: function(d) {
      switch (d) {
        case 0:
        case 3:
        case 6:
          return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430] dddd [\u0432] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0438\u044F] dddd [\u0432] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "\u0441\u043B\u0435\u0434 %s",
    past: "\u043F\u0440\u0435\u0434\u0438 %s",
    s: "\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
    ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
    m: "\u043C\u0438\u043D\u0443\u0442\u0430",
    mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438",
    h: "\u0447\u0430\u0441",
    hh: "%d \u0447\u0430\u0441\u0430",
    d: "\u0434\u0435\u043D",
    dd: "%d \u0434\u043D\u0438",
    M: "\u043C\u0435\u0441\u0435\u0446",
    MM: "%d \u043C\u0435\u0441\u0435\u0446\u0430",
    y: "\u0433\u043E\u0434\u0438\u043D\u0430",
    yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438"
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
  ordinal: function(_num) {
    const number = Number(_num);
    let lastDigit = number % 10, last2Digits = number % 100;
    if (number === 0) {
      return number + "-\u0435\u0432";
    } else if (last2Digits === 0) {
      return number + "-\u0435\u043D";
    } else if (last2Digits > 10 && last2Digits < 20) {
      return number + "-\u0442\u0438";
    } else if (lastDigit === 1) {
      return number + "-\u0432\u0438";
    } else if (lastDigit === 2) {
      return number + "-\u0440\u0438";
    } else if (lastDigit === 7 || lastDigit === 8) {
      return number + "-\u043C\u0438";
    } else {
      return number + "-\u0442\u0438";
    }
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Xavier Arbat : https://github.com/XavisaurusRex
var monthsShortDot$5 = "gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.".split("_");
var monthsShort$7 = "ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des".split("_");
var monthsParse$6 = [/^gen/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^oct/i, /^nov/i, /^des/i];
var monthsRegex$5 = /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;
var caLocale = {
  abbr: "ca",
  months: "gener_febrer_mar\xE7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot$5;
    }
    if (/-MMM-/.test(format)) {
      return monthsShort$7[getMonth(date, isUTC)];
    }
    return monthsShortDot$5[getMonth(date, isUTC)];
  },
  monthsRegex: monthsRegex$5,
  monthsShortRegex: monthsRegex$5,
  monthsStrictRegex: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
  monthsShortStrictRegex: /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
  monthsParse: monthsParse$6,
  longMonthsParse: monthsParse$6,
  shortMonthsParse: monthsParse$6,
  weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
  weekdaysShort: "diu._dil._dim._dix._dij._div._dis.".split("_"),
  weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY H:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
  },
  calendar: {
    sameDay(date) {
      return "[avui a " + ("la" + (getHours(date) !== 1) ? "les" : "") + "] LT";
    },
    nextDay(date) {
      return "[dema a " + ("la" + (getHours(date) !== 1) ? "les" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [a " + ("la" + (getHours(date) !== 1) ? "les" : "") + "] LT";
    },
    lastDay(date) {
      return "[ahir a " + ("la" + (getHours(date) !== 1) ? "les" : "") + "] LT";
    },
    lastWeek(date) {
      return "[el] dddd [" + ("passada la " + (getHours(date) !== 1) ? "passades les" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "fa %s",
    s: "uns segons",
    ss: "%d segons",
    m: "un minut",
    mm: "%d minuts",
    h: "una hora",
    hh: "%d hores",
    d: "un dia",
    dd: "%d dies",
    M: "un mes",
    MM: "%d mesos",
    y: "un any",
    yy: "%d anys"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,
  ordinal(_num) {
    const num = Number(_num);
    const output2 = num > 4 ? "\xE9" : num === 1 || num === 3 ? "r" : num === 2 ? "n" : num === 4 ? "t" : "\xE9";
    return num + output2;
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
var months$2 = "leden_\xFAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xE1\u0159\xED_\u0159\xEDjen_listopad_prosinec".split("_");
var monthsShort$6 = "led_\xFAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xE1\u0159_\u0159\xEDj_lis_pro".split("_");
function plural$4(num) {
  return num > 1 && num < 5 && ~~(num / 10) !== 1;
}
function translate$6(num, withoutSuffix, key, isFuture) {
  const result = num + " ";
  switch (key) {
    case "s":
      return withoutSuffix || isFuture ? "p\xE1r sekund" : "p\xE1r sekundami";
    case "ss":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "sekundy" : "sekund");
      } else {
        return result + "sekundami";
      }
    // break;
    case "m":
      return withoutSuffix ? "minuta" : isFuture ? "minutu" : "minutou";
    case "mm":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "minuty" : "minut");
      } else {
        return result + "minutami";
      }
    // break;
    case "h":
      return withoutSuffix ? "hodina" : isFuture ? "hodinu" : "hodinou";
    case "hh":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "hodiny" : "hodin");
      } else {
        return result + "hodinami";
      }
    // break;
    case "d":
      return withoutSuffix || isFuture ? "den" : "dnem";
    case "dd":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "dny" : "dn\xED");
      } else {
        return result + "dny";
      }
    // break;
    case "M":
      return withoutSuffix || isFuture ? "m\u011Bs\xEDc" : "m\u011Bs\xEDcem";
    case "MM":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "m\u011Bs\xEDce" : "m\u011Bs\xEDc\u016F");
      } else {
        return result + "m\u011Bs\xEDci";
      }
    // break;
    case "y":
      return withoutSuffix || isFuture ? "rok" : "rokem";
    case "yy":
      if (withoutSuffix || isFuture) {
        return result + (plural$4(num) ? "roky" : "let");
      } else {
        return result + "lety";
      }
  }
}
var csLocale = {
  abbr: "cs",
  months: months$2,
  monthsShort: monthsShort$6,
  monthsParse: (function(months2, monthsShort2) {
    let i, _monthsParse = [];
    for (i = 0; i < 12; i++) {
      _monthsParse[i] = new RegExp("^" + months2[i] + "$|^" + monthsShort2[i] + "$", "i");
    }
    return _monthsParse;
  })(months$2, monthsShort$6),
  shortMonthsParse: (function(monthsShort2) {
    let i, _shortMonthsParse = [];
    for (i = 0; i < 12; i++) {
      _shortMonthsParse[i] = new RegExp("^" + monthsShort2[i] + "$", "i");
    }
    return _shortMonthsParse;
  })(monthsShort$6),
  longMonthsParse: (function(months2) {
    let i, _longMonthsParse = [];
    for (i = 0; i < 12; i++) {
      _longMonthsParse[i] = new RegExp("^" + months2[i] + "$", "i");
    }
    return _longMonthsParse;
  })(months$2),
  weekdays: "ned\u011Ble_pond\u011Bl\xED_\xFAter\xFD_st\u0159eda_\u010Dtvrtek_p\xE1tek_sobota".split("_"),
  weekdaysShort: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),
  weekdaysMin: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd D. MMMM YYYY H:mm",
    l: "D. M. YYYY"
  },
  calendar: {
    sameDay: "[dnes v] LT",
    nextDay: "[z\xEDtra v] LT",
    nextWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[v ned\u011Bli v] LT";
        case 1:
        case 2:
          return "[v] dddd [v] LT";
        case 3:
          return "[ve st\u0159edu v] LT";
        case 4:
          return "[ve \u010Dtvrtek v] LT";
        case 5:
          return "[v p\xE1tek v] LT";
        case 6:
          return "[v sobotu v] LT";
      }
    },
    lastDay: "[v\u010Dera v] LT",
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[minulou ned\u011Bli v] LT";
        case 1:
        case 2:
          return "[minul\xE9] dddd [v] LT";
        case 3:
          return "[minulou st\u0159edu v] LT";
        case 4:
        case 5:
          return "[minul\xFD] dddd [v] LT";
        case 6:
          return "[minulou sobotu v] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "za %s",
    past: "p\u0159ed %s",
    s: translate$6,
    ss: translate$6,
    m: translate$6,
    mm: translate$6,
    h: translate$6,
    hh: translate$6,
    d: translate$6,
    dd: translate$6,
    M: translate$6,
    MM: translate$6,
    y: translate$6,
    yy: translate$6
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Danish (Denmark) [da]
//! author : Per Hansen : https://github.com/perhp
var daLocale = {
  abbr: "da",
  months: "Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December".split("_"),
  monthsShort: "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec".split("_"),
  weekdays: "S\xF8ndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_L\xF8rdag".split("_"),
  weekdaysShort: "S\xF8n_Man_Tir_Ons_Tor_Fre_L\xF8r".split("_"),
  weekdaysMin: "S\xF8_Ma_Ti_On_To_Fr_L\xF8".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY HH:mm",
    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
  },
  calendar: {
    sameDay: "[i dag kl.] LT",
    nextDay: "[i morgen kl.] LT",
    nextWeek: "p\xE5 dddd [kl.] LT",
    lastDay: "[i g\xE5r kl.] LT",
    lastWeek: "[i] dddd[s kl.] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "om %s",
    past: "%s siden",
    s: "f\xE5 sekunder",
    m: "et minut",
    mm: "%d minutter",
    h: "en time",
    hh: "%d timer",
    d: "en dag",
    dd: "%d dage",
    M: "en m\xE5ned",
    MM: "%d m\xE5neder",
    y: "et \xE5r",
    yy: "%d \xE5r"
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj
function processRelativeTime$2(num, withoutSuffix, key, isFuture) {
  const format = {
    "m": ["eine Minute", "einer Minute"],
    "h": ["eine Stunde", "einer Stunde"],
    "d": ["ein Tag", "einem Tag"],
    "dd": [num + " Tage", num + " Tagen"],
    "M": ["ein Monat", "einem Monat"],
    "MM": [num + " Monate", num + " Monaten"],
    "y": ["ein Jahr", "einem Jahr"],
    "yy": [num + " Jahre", num + " Jahren"]
  };
  return withoutSuffix ? format[key][0] : format[key][1];
}
var deLocale = {
  abbr: "de",
  months: "Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
  monthsShort: "Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
  monthsParseExact: true,
  weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
  weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
  weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY HH:mm",
    LLLL: "dddd, D. MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[heute um] LT [Uhr]",
    sameElse: "L",
    nextDay: "[morgen um] LT [Uhr]",
    nextWeek: "dddd [um] LT [Uhr]",
    lastDay: "[gestern um] LT [Uhr]",
    lastWeek: "[letzten] dddd [um] LT [Uhr]"
  },
  relativeTime: {
    future: "in %s",
    past: "vor %s",
    s: "ein paar Sekunden",
    ss: "%d Sekunden",
    m: processRelativeTime$2,
    mm: "%d Minuten",
    h: processRelativeTime$2,
    hh: "%d Stunden",
    d: processRelativeTime$2,
    dd: processRelativeTime$2,
    M: processRelativeTime$2,
    MM: processRelativeTime$2,
    y: processRelativeTime$2,
    yy: processRelativeTime$2
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim
var enGbLocale = {
  abbr: "en-gb",
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
  ordinal(_num) {
    const num = Number(_num);
    const b = num % 10, output2 = ~~(num % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
    return num + output2;
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]
var monthsShortDot$4 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
var monthsShort$5 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
var monthsParse$5 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
var monthsRegex$4 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
var esDoLocale = {
  abbr: "es-do",
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot$4;
    } else if (/-MMM-/.test(format)) {
      return monthsShort$5[getMonth(date, isUTC)];
    } else {
      return monthsShortDot$4[getMonth(date, isUTC)];
    }
  },
  monthsRegex: monthsRegex$4,
  monthsShortRegex: monthsRegex$4,
  monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
  monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  monthsParse: monthsParse$5,
  longMonthsParse: monthsParse$5,
  shortMonthsParse: monthsParse$5,
  weekdays: "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
  weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY h:mm A",
    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
  },
  calendar: {
    sameDay(date) {
      return "[hoy a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextDay(date) {
      return "[ma\xF1ana a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastDay(date) {
      return "[ayer a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastWeek(date) {
      return "[el] dddd [pasado a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un d\xEDa",
    dd: "%d d\xEDas",
    M: "un mes",
    MM: "%d meses",
    y: "un a\xF1o",
    yy: "%d a\xF1os"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%d\xBA",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
var monthsShortDot$3 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
var monthsShort$4 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
var monthsParse$4 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
var monthsRegex$3 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
var esLocale = {
  abbr: "es",
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot$3;
    }
    if (/-MMM-/.test(format)) {
      return monthsShort$4[getMonth(date, isUTC)];
    }
    return monthsShortDot$3[getMonth(date, isUTC)];
  },
  monthsRegex: monthsRegex$3,
  monthsShortRegex: monthsRegex$3,
  monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
  monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  monthsParse: monthsParse$4,
  longMonthsParse: monthsParse$4,
  shortMonthsParse: monthsParse$4,
  weekdays: "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
  weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY H:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
  },
  calendar: {
    sameDay(date) {
      return "[hoy a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextDay(date) {
      return "[ma\xF1ana a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastDay(date) {
      return "[ayer a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastWeek(date) {
      return "[el] dddd [pasado a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un d\xEDa",
    dd: "%d d\xEDas",
    M: "un mes",
    MM: "%d meses",
    y: "un a\xF1o",
    yy: "%d a\xF1os"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%d\xBA",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Spanish (Puerto Rico) [es-pr]
var monthsShortDot$2 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
var monthsShort$3 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
var esPrLocale = {
  abbr: "es-pr",
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot$2;
    } else if (/-MMM-/.test(format)) {
      return monthsShort$3[getMonth(date, isUTC)];
    } else {
      return monthsShortDot$2[getMonth(date, isUTC)];
    }
  },
  monthsParseExact: true,
  weekdays: "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
  weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "MM/DD/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY h:mm A",
    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
  },
  calendar: {
    sameDay(date) {
      return "[hoy a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextDay(date) {
      return "[ma\xF1ana a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastDay(date) {
      return "[ayer a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastWeek(date) {
      return "[el] dddd [pasado a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un d\xEDa",
    dd: "%d d\xEDas",
    M: "un mes",
    MM: "%d meses",
    y: "un a\xF1o",
    yy: "%d a\xF1os"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%d\xBA",
  week: {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 1st is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
var monthsShortDot$1 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
var monthsShort$2 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
var esUsLocale = {
  abbr: "es-us",
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot$1;
    } else if (/-MMM-/.test(format)) {
      return monthsShort$2[getMonth(date, isUTC)];
    } else {
      return monthsShortDot$1[getMonth(date, isUTC)];
    }
  },
  monthsParseExact: true,
  weekdays: "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
  weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "MM/DD/YYYY",
    LL: "MMMM [de] D [de] YYYY",
    LLL: "MMMM [de] D [de] YYYY h:mm A",
    LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
  },
  calendar: {
    sameDay(date) {
      return "[hoy a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextDay(date) {
      return "[ma\xF1ana a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastDay(date) {
      return "[ayer a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastWeek(date) {
      return "[el] dddd [pasado a la" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un d\xEDa",
    dd: "%d d\xEDas",
    M: "un mes",
    MM: "%d meses",
    y: "un a\xF1o",
    yy: "%d a\xF1os"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%d\xBA",
  week: {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 1st is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Chris Gedrim : https://github.com/a90machado
var processRelativeTime$1 = function(num, withoutSuffix, key, isFuture) {
  const format = {
    s: ["m\xF5ne sekundi", "m\xF5ni sekund", "paar sekundit"],
    ss: [num + "sekundi", num + "sekundit"],
    m: ["\xFChe minuti", "\xFCks minut"],
    mm: [num + " minuti", num + " minutit"],
    h: ["\xFChe tunni", "tund aega", "\xFCks tund"],
    hh: [num + " tunni", num + " tundi"],
    d: ["\xFChe p\xE4eva", "\xFCks p\xE4ev"],
    M: ["kuu aja", "kuu aega", "\xFCks kuu"],
    MM: [num + " kuu", num + " kuud"],
    y: ["\xFChe aasta", "aasta", "\xFCks aasta"],
    yy: [num + " aasta", num + " aastat"]
  };
  if (withoutSuffix) {
    return format[key][2] ? format[key][2] : format[key][1];
  }
  return isFuture ? format[key][0] : format[key][1];
};
var etLocale = {
  abbr: "et",
  months: "jaanuar_veebruar_m\xE4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
  monthsShort: "jaan_veebr_m\xE4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
  weekdays: "p\xFChap\xE4ev_esmasp\xE4ev_teisip\xE4ev_kolmap\xE4ev_neljap\xE4ev_reede_laup\xE4ev".split("_"),
  weekdaysShort: "P_E_T_K_N_R_L".split("_"),
  weekdaysMin: "P_E_T_K_N_R_L".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm"
  },
  calendar: {
    sameDay: "[T\xE4na,] LT",
    nextDay: "[Homme,] LT",
    nextWeek: "[J\xE4rgmine] dddd LT",
    lastDay: "[Eile,] LT",
    lastWeek: "[Eelmine] dddd LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s p\xE4rast",
    past: "%s tagasi",
    s: processRelativeTime$1,
    ss: processRelativeTime$1,
    m: processRelativeTime$1,
    mm: processRelativeTime$1,
    h: processRelativeTime$1,
    hh: processRelativeTime$1,
    d: processRelativeTime$1,
    dd: "%d p\xE4eva",
    M: processRelativeTime$1,
    MM: processRelativeTime$1,
    y: processRelativeTime$1,
    yy: processRelativeTime$1
  },
  dayOfMonthOrdinalParse: /\d{1,2}./,
  ordinal: "%d.",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
var numbersPast = "nolla yksi kaksi kolme nelj\xE4 viisi kuusi seitsem\xE4n kahdeksan yhdeks\xE4n".split(" ");
var numbersFuture = [
  "nolla",
  "yhden",
  "kahden",
  "kolmen",
  "nelj\xE4n",
  "viiden",
  "kuuden",
  numbersPast[7],
  numbersPast[8],
  numbersPast[9]
];
function translate$5(num, withoutSuffix, key, isFuture) {
  var result = "";
  switch (key) {
    case "s":
      return isFuture ? "muutaman sekunnin" : "muutama sekunti";
    case "ss":
      return isFuture ? "sekunnin" : "sekuntia";
    case "m":
      return isFuture ? "minuutin" : "minuutti";
    case "mm":
      result = isFuture ? "minuutin" : "minuuttia";
      break;
    case "h":
      return isFuture ? "tunnin" : "tunti";
    case "hh":
      result = isFuture ? "tunnin" : "tuntia";
      break;
    case "d":
      return isFuture ? "p\xE4iv\xE4n" : "p\xE4iv\xE4";
    case "dd":
      result = isFuture ? "p\xE4iv\xE4n" : "p\xE4iv\xE4\xE4";
      break;
    case "M":
      return isFuture ? "kuukauden" : "kuukausi";
    case "MM":
      result = isFuture ? "kuukauden" : "kuukautta";
      break;
    case "y":
      return isFuture ? "vuoden" : "vuosi";
    case "yy":
      result = isFuture ? "vuoden" : "vuotta";
      break;
  }
  result = verbalNumber(num, isFuture) + " " + result;
  return result;
}
function verbalNumber(num, isFuture) {
  return num < 10 ? isFuture ? numbersFuture[num] : numbersPast[num] : num;
}
var fiLocale = {
  abbr: "fi",
  months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xE4kuu_hein\xE4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
  monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xE4_hein\xE4_elo_syys_loka_marras_joulu".split("_"),
  weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
  weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
  weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
  longDateFormat: {
    LT: "HH.mm",
    LTS: "HH.mm.ss",
    L: "DD.MM.YYYY",
    LL: "Do MMMM[ta] YYYY",
    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
    l: "D.M.YYYY",
    ll: "Do MMM YYYY",
    lll: "Do MMM YYYY, [klo] HH.mm",
    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
  },
  calendar: {
    sameDay: "[t\xE4n\xE4\xE4n] [klo] LT",
    nextDay: "[huomenna] [klo] LT",
    nextWeek: "dddd [klo] LT",
    lastDay: "[eilen] [klo] LT",
    lastWeek: "[viime] dddd[na] [klo] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s p\xE4\xE4st\xE4",
    past: "%s sitten",
    s: translate$5,
    ss: translate$5,
    m: translate$5,
    mm: translate$5,
    h: translate$5,
    hh: translate$5,
    d: translate$5,
    dd: translate$5,
    M: translate$5,
    MM: translate$5,
    y: translate$5,
    yy: translate$5
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice
var frLocale = {
  abbr: "fr",
  months: "janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split("_"),
  monthsShort: "janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split("_"),
  monthsParseExact: true,
  weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
  weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Aujourd\u2019hui \xE0] LT",
    nextDay: "[Demain \xE0] LT",
    nextWeek: "dddd [\xE0] LT",
    lastDay: "[Hier \xE0] LT",
    lastWeek: "dddd [dernier \xE0] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "quelques secondes",
    ss: "%d secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
    hh: "%d heures",
    d: "un jour",
    dd: "%d jours",
    M: "un mois",
    MM: "%d mois",
    y: "un an",
    yy: "%d ans"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
  ordinal(_num, period) {
    const num = Number(_num);
    switch (period) {
      // TODO: Return 'e' when day of month > 1. Move this case inside
      // block for masculine words below.
      // See https://github.com/moment/moment/issues/3375
      case "D":
        return num + (num === 1 ? "er" : "");
      // Words with masculine grammatical gender: mois, trimestre, jour
      default:
      case "M":
      case "Q":
      case "DDD":
      case "d":
        return num + (num === 1 ? "er" : "e");
      // Words with feminine grammatical gender: semaine
      case "w":
      case "W":
        return num + (num === 1 ? "re" : "e");
    }
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : French Canadian [fr-ca]
//! author : Ali Hasan : https://github.com/alihasan00
var frCaLocale = {
  abbr: "fr-ca",
  months: "janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split("_"),
  monthsShort: "janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split("_"),
  monthsParseExact: true,
  weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
  weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Aujourd\u2019hui \xE0] LT",
    nextDay: "[Demain \xE0] LT",
    nextWeek: "dddd [\xE0] LT",
    lastDay: "[Hier \xE0] LT",
    lastWeek: "dddd [dernier \xE0] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "quelques secondes",
    ss: "%d secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
    hh: "%d heures",
    d: "un jour",
    dd: "%d jours",
    M: "un mois",
    MM: "%d mois",
    y: "un an",
    yy: "%d ans"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|e|)/,
  ordinal(_num, period) {
    const num = Number(_num);
    switch (period) {
      case "D":
        return num + (num === 1 ? "er" : "");
      // Words with masculine grammatical gender: mois, trimestre, jour
      default:
      case "M":
      case "Q":
      case "DDD":
      case "d":
        return num + (num === 1 ? "er" : "e");
      // Words with feminine grammatical gender: semaine
      case "w":
      case "W":
        return num + (num === 1 ? "re" : "e");
    }
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Darío Beiró : https://github.com/quinobravo
var monthsShortDot = "xan._feb._mar._abr._mai._xu\xF1._xul._ago._set._out._nov._dec.".split("_");
var monthsShort$1 = "xan_feb_mar_abr_mai_xu\xF1_xul_ago_set_out_nov_dec".split("_");
var monthsParse$3 = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
var monthsRegex$2 = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
var glLocale = {
  abbr: "gl",
  months: "xaneiro_febreiro_marzo_abril_maio_xu\xF1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortDot;
    }
    if (/-MMM-/.test(format)) {
      return monthsShort$1[getMonth(date, isUTC)];
    }
    return monthsShortDot[getMonth(date, isUTC)];
  },
  monthsRegex: monthsRegex$2,
  monthsShortRegex: monthsRegex$2,
  monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
  monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
  monthsParse: monthsParse$3,
  longMonthsParse: monthsParse$3,
  shortMonthsParse: monthsParse$3,
  weekdays: "domingo_luns_martes_m\xE9rcores_xoves_venres_s\xE1bado".split("_"),
  weekdaysShort: "dom._lun._mar._m\xE9r._xov._ven._s\xE1b.".split("_"),
  weekdaysMin: "do_lu_ma_m\xE9_xo_ve_s\xE1".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY H:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
  },
  calendar: {
    sameDay(date) {
      return "[hoxe \xE1" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextDay(date) {
      return "[ma\xF1an \xE1" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    nextWeek(date) {
      return "dddd [\xE1" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastDay(date) {
      return "[onte \xE1" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    lastWeek(date) {
      return "[o] dddd [pasado \xE1" + (getHours(date) !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "fai %s",
    s: "uns segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "unha hora",
    hh: "%d horas",
    d: "un d\xEDa",
    dd: "%d d\xEDas",
    M: "un mes",
    MM: "%d meses",
    y: "un ano",
    yy: "%d anos"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%d\xBA",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter
var heLocale = {
  abbr: "he",
  months: "\u05D9\u05E0\u05D5\u05D0\u05E8_\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05D9\u05DC_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8_\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8_\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8_\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8_\u05D3\u05E6\u05DE\u05D1\u05E8".split("_"),
  monthsShort: "\u05D9\u05E0\u05D5\u05F3_\u05E4\u05D1\u05E8\u05F3_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05F3_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05F3_\u05E1\u05E4\u05D8\u05F3_\u05D0\u05D5\u05E7\u05F3_\u05E0\u05D5\u05D1\u05F3_\u05D3\u05E6\u05DE\u05F3".split("_"),
  weekdays: "\u05E8\u05D0\u05E9\u05D5\u05DF_\u05E9\u05E0\u05D9_\u05E9\u05DC\u05D9\u05E9\u05D9_\u05E8\u05D1\u05D9\u05E2\u05D9_\u05D7\u05DE\u05D9\u05E9\u05D9_\u05E9\u05D9\u05E9\u05D9_\u05E9\u05D1\u05EA".split("_"),
  weekdaysShort: "\u05D0\u05F3_\u05D1\u05F3_\u05D2\u05F3_\u05D3\u05F3_\u05D4\u05F3_\u05D5\u05F3_\u05E9\u05F3".split("_"),
  weekdaysMin: "\u05D0_\u05D1_\u05D2_\u05D3_\u05D4_\u05D5_\u05E9".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [\u05D1]MMMM YYYY",
    LLL: "D [\u05D1]MMMM YYYY HH:mm",
    LLLL: "dddd, D [\u05D1]MMMM YYYY HH:mm",
    l: "D/M/YYYY",
    ll: "D MMM YYYY",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd, D MMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[\u05D4\u05D9\u05D5\u05DD \u05D1\u05BE]LT",
    nextDay: "[\u05DE\u05D7\u05E8 \u05D1\u05BE]LT",
    nextWeek: "dddd [\u05D1\u05E9\u05E2\u05D4] LT",
    lastDay: "[\u05D0\u05EA\u05DE\u05D5\u05DC \u05D1\u05BE]LT",
    lastWeek: "[\u05D1\u05D9\u05D5\u05DD] dddd [\u05D4\u05D0\u05D7\u05E8\u05D5\u05DF \u05D1\u05E9\u05E2\u05D4] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "\u05D1\u05E2\u05D5\u05D3 %s",
    past: "\u05DC\u05E4\u05E0\u05D9 %s",
    s: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05E0\u05D9\u05D5\u05EA",
    ss: "%d \u05E9\u05E0\u05D9\u05D5\u05EA",
    m: "\u05D3\u05E7\u05D4",
    mm: "%d \u05D3\u05E7\u05D5\u05EA",
    h: "\u05E9\u05E2\u05D4",
    hh(num) {
      if (num === 2) {
        return "\u05E9\u05E2\u05EA\u05D9\u05D9\u05DD";
      }
      return num + " \u05E9\u05E2\u05D5\u05EA";
    },
    d: "\u05D9\u05D5\u05DD",
    dd(num) {
      if (num === 2) {
        return "\u05D9\u05D5\u05DE\u05D9\u05D9\u05DD";
      }
      return num + " \u05D9\u05DE\u05D9\u05DD";
    },
    M: "\u05D7\u05D5\u05D3\u05E9",
    MM(num) {
      if (num === 2) {
        return "\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD";
      }
      return num + " \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD";
    },
    y: "\u05E9\u05E0\u05D4",
    yy(num) {
      if (num === 2) {
        return "\u05E9\u05E0\u05EA\u05D9\u05D9\u05DD";
      } else if (num % 10 === 0 && num !== 10) {
        return num + " \u05E9\u05E0\u05D4";
      }
      return num + " \u05E9\u05E0\u05D9\u05DD";
    }
  },
  meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
  isPM(input2) {
    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input2);
  },
  meridiem(hour, minute, isLower) {
    if (hour < 5) {
      return "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8";
    } else if (hour < 10) {
      return "\u05D1\u05D1\u05D5\u05E7\u05E8";
    } else if (hour < 12) {
      return isLower ? '\u05DC\u05E4\u05E0\u05D4"\u05E6' : "\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD";
    } else if (hour < 18) {
      return isLower ? '\u05D0\u05D7\u05D4"\u05E6' : "\u05D0\u05D7\u05E8\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD";
    } else {
      return "\u05D1\u05E2\u05E8\u05D1";
    }
  }
};
//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal
var symbolMap$1 = {
  1: "\u0967",
  2: "\u0968",
  3: "\u0969",
  4: "\u096A",
  5: "\u096B",
  6: "\u096C",
  7: "\u096D",
  8: "\u096E",
  9: "\u096F",
  0: "\u0966"
};
var numberMap$1 = {
  "\u0967": "1",
  "\u0968": "2",
  "\u0969": "3",
  "\u096A": "4",
  "\u096B": "5",
  "\u096C": "6",
  "\u096D": "7",
  "\u096E": "8",
  "\u096F": "9",
  "\u0966": "0"
};
var hiLocale = {
  abbr: "hi",
  months: "\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930".split("_"),
  monthsShort: "\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.".split("_"),
  monthsParseExact: true,
  weekdays: "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split("_"),
  weekdaysShort: "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split("_"),
  weekdaysMin: "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
  longDateFormat: {
    LT: "A h:mm \u092C\u091C\u0947",
    LTS: "A h:mm:ss \u092C\u091C\u0947",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY, A h:mm \u092C\u091C\u0947",
    LLLL: "dddd, D MMMM YYYY, A h:mm \u092C\u091C\u0947"
  },
  calendar: {
    sameDay: "[\u0906\u091C] LT",
    nextDay: "[\u0915\u0932] LT",
    nextWeek: "dddd, LT",
    lastDay: "[\u0915\u0932] LT",
    lastWeek: "[\u092A\u093F\u091B\u0932\u0947] dddd, LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s \u092E\u0947\u0902",
    past: "%s \u092A\u0939\u0932\u0947",
    s: "\u0915\u0941\u091B \u0939\u0940 \u0915\u094D\u0937\u0923",
    ss: "%d \u0938\u0947\u0915\u0902\u0921",
    m: "\u090F\u0915 \u092E\u093F\u0928\u091F",
    mm: "%d \u092E\u093F\u0928\u091F",
    h: "\u090F\u0915 \u0918\u0902\u091F\u093E",
    hh: "%d \u0918\u0902\u091F\u0947",
    d: "\u090F\u0915 \u0926\u093F\u0928",
    dd: "%d \u0926\u093F\u0928",
    M: "\u090F\u0915 \u092E\u0939\u0940\u0928\u0947",
    MM: "%d \u092E\u0939\u0940\u0928\u0947",
    y: "\u090F\u0915 \u0935\u0930\u094D\u0937",
    yy: "%d \u0935\u0930\u094D\u0937"
  },
  preparse(str) {
    return str.replace(/[१२३४५६७८९०]/g, function(match) {
      return numberMap$1[match];
    });
  },
  postformat(str) {
    return str.replace(/\d/g, function(match) {
      return symbolMap$1[match];
    });
  },
  // Hindi notation for meridiems are quite fuzzy in practice. While there exists
  // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
  meridiemParse: /रात|सुबह|दोपहर|शाम/,
  meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === "\u0930\u093E\u0924") {
      return hour < 4 ? hour : hour + 12;
    } else if (meridiem === "\u0938\u0941\u092C\u0939") {
      return hour;
    } else if (meridiem === "\u0926\u094B\u092A\u0939\u0930") {
      return hour >= 10 ? hour : hour + 12;
    } else if (meridiem === "\u0936\u093E\u092E") {
      return hour + 12;
    }
  },
  meridiem(hour, minute, isLower) {
    if (hour < 4) {
      return "\u0930\u093E\u0924";
    } else if (hour < 10) {
      return "\u0938\u0941\u092C\u0939";
    } else if (hour < 17) {
      return "\u0926\u094B\u092A\u0939\u0930";
    } else if (hour < 20) {
      return "\u0936\u093E\u092E";
    } else {
      return "\u0930\u093E\u0924";
    }
  },
  week: {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 1st is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
var weekEndings = "vas\xE1rnap h\xE9tf\u0151n kedden szerd\xE1n cs\xFCt\xF6rt\xF6k\xF6n p\xE9nteken szombaton".split(" ");
function translate$4(num, withoutSuffix, key, isFuture) {
  switch (key) {
    case "s":
      return isFuture || withoutSuffix ? "n\xE9h\xE1ny m\xE1sodperc" : "n\xE9h\xE1ny m\xE1sodperce";
    case "ss":
      return num + (isFuture || withoutSuffix ? " m\xE1sodperc" : " m\xE1sodperce");
    case "m":
      return "egy" + (isFuture || withoutSuffix ? " perc" : " perce");
    case "mm":
      return num + (isFuture || withoutSuffix ? " perc" : " perce");
    case "h":
      return "egy" + (isFuture || withoutSuffix ? " \xF3ra" : " \xF3r\xE1ja");
    case "hh":
      return num + (isFuture || withoutSuffix ? " \xF3ra" : " \xF3r\xE1ja");
    case "d":
      return "egy" + (isFuture || withoutSuffix ? " nap" : " napja");
    case "dd":
      return num + (isFuture || withoutSuffix ? " nap" : " napja");
    case "M":
      return "egy" + (isFuture || withoutSuffix ? " h\xF3nap" : " h\xF3napja");
    case "MM":
      return num + (isFuture || withoutSuffix ? " h\xF3nap" : " h\xF3napja");
    case "y":
      return "egy" + (isFuture || withoutSuffix ? " \xE9v" : " \xE9ve");
    case "yy":
      return num + (isFuture || withoutSuffix ? " \xE9v" : " \xE9ve");
  }
  return "";
}
function week(date, isFuture) {
  return (isFuture ? "" : "[m\xFAlt] ") + "[" + weekEndings[getDayOfWeek(date)] + "] LT[-kor]";
}
var huLocale = {
  abbr: "hu",
  months: "janu\xE1r_febru\xE1r_m\xE1rcius_\xE1prilis_m\xE1jus_j\xFAnius_j\xFAlius_augusztus_szeptember_okt\xF3ber_november_december".split("_"),
  monthsShort: "jan_feb_m\xE1rc_\xE1pr_m\xE1j_j\xFAn_j\xFAl_aug_szept_okt_nov_dec".split("_"),
  weekdays: "vas\xE1rnap_h\xE9tf\u0151_kedd_szerda_cs\xFCt\xF6rt\xF6k_p\xE9ntek_szombat".split("_"),
  weekdaysShort: "vas_h\xE9t_kedd_sze_cs\xFCt_p\xE9n_szo".split("_"),
  weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "YYYY.MM.DD.",
    LL: "YYYY. MMMM D.",
    LLL: "YYYY. MMMM D. H:mm",
    LLLL: "YYYY. MMMM D., dddd H:mm"
  },
  meridiemParse: /de|du/i,
  isPM(input2) {
    return input2.charAt(1).toLowerCase() === "u";
  },
  meridiem(hours, minutes, isLower) {
    if (hours < 12) {
      return isLower === true ? "de" : "DE";
    } else {
      return isLower === true ? "du" : "DU";
    }
  },
  calendar: {
    sameDay: "[ma] LT[-kor]",
    nextDay: "[holnap] LT[-kor]",
    nextWeek(date) {
      return week(date, true);
    },
    lastDay: "[tegnap] LT[-kor]",
    lastWeek(date) {
      return week(date, false);
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "%s m\xFAlva",
    past: "%s",
    s: translate$4,
    ss: translate$4,
    m: translate$4,
    mm: translate$4,
    h: translate$4,
    hh: translate$4,
    d: translate$4,
    dd: translate$4,
    M: translate$4,
    MM: translate$4,
    y: translate$4,
    yy: translate$4
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Danijel Grmec : https://github.com/cobaltsis
var hrLocale = {
  abbr: "hr",
  months: "Sije\u010Danj_Velja\u010Da_O\u017Eujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac".split("_"),
  monthsShort: "Sij_Velj_O\u017Eu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro".split("_"),
  weekdays: "Nedjelja_Ponedjeljak_Utorak_Srijeda_\u010Cetvrtak_Petak_Subota".split("_"),
  weekdaysShort: "Ned_Pon_Uto_Sri_\u010Cet_Pet_Sub".split("_"),
  weekdaysMin: "Ne_Po_Ut_Sr_\u010Ce_Pe_Su".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY.",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Danas u] LT",
    nextDay: "[Sutra u] LT",
    nextWeek: "dddd [u] LT",
    lastDay: "[Ju\u010Der u] LT",
    lastWeek: "[Zadnji] dddd [u] LT",
    sameElse: "L"
  },
  invalidDate: "Neispravan datum",
  relativeTime: {
    future: "za %s",
    past: "%s prije",
    s: "nekoliko sekundi",
    ss: "%d sekundi",
    m: "minuta",
    mm: "%d minuta",
    h: "sat",
    hh: "%d sati",
    d: "dan",
    dd: "%d dana",
    M: "mjesec",
    MM: "%d mjeseci",
    y: "godina",
    yy: "%d godina"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
  ordinal(_num) {
    const num = Number(_num);
    const b = num % 10, output2 = ~~(num % 100 / 10) === 1 ? "." : b === 1 ? "." : b === 2 ? "." : b === 3 ? "." : ".";
    return num + output2;
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Indonesia [id]
//! author : Romy Kusuma : https://github.com/rkusuma
//! reference: https://github.com/moment/moment/blob/develop/locale/id.js
var idLocale = {
  abbr: "id",
  months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
  monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
  weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
  weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
  weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
  longDateFormat: {
    LT: "HH.mm",
    LTS: "HH.mm.ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY [pukul] HH.mm",
    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
  },
  meridiemParse: /pagi|siang|sore|malam/,
  meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === "pagi") {
      return hour;
    } else if (meridiem === "siang") {
      return hour >= 11 ? hour : hour + 12;
    } else if (meridiem === "sore" || meridiem === "malam") {
      return hour + 12;
    }
  },
  meridiem(hours, minutes, isLower) {
    if (hours < 11) {
      return "pagi";
    } else if (hours < 15) {
      return "siang";
    } else if (hours < 19) {
      return "sore";
    } else {
      return "malam";
    }
  },
  calendar: {
    sameDay: "[Hari ini pukul] LT",
    nextDay: "[Besok pukul] LT",
    nextWeek: "dddd [pukul] LT",
    lastDay: "[Kemarin pukul] LT",
    lastWeek: "dddd [lalu pukul] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "dalam %s",
    past: "%s yang lalu",
    s: "beberapa detik",
    ss: "%d detik",
    m: "semenit",
    mm: "%d menit",
    h: "sejam",
    hh: "%d jam",
    d: "sehari",
    dd: "%d hari",
    M: "sebulan",
    MM: "%d bulan",
    y: "setahun",
    yy: "%d tahun"
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
var itLocale = {
  abbr: "it",
  months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
  monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
  weekdays: "domenica_luned\xEC_marted\xEC_mercoled\xEC_gioved\xEC_venerd\xEC_sabato".split("_"),
  weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
  weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Oggi alle] LT",
    nextDay: "[Domani alle] LT",
    nextWeek: "dddd [alle] LT",
    lastDay: "[Ieri alle] LT",
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[la scorsa] dddd [alle] LT";
        default:
          return "[lo scorso] dddd [alle] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future(num) {
      return (/^[0-9].+$/.test(num.toString(10)) ? "tra" : "in") + " " + num;
    },
    past: "%s fa",
    s: "alcuni secondi",
    ss: "%d secondi",
    m: "un minuto",
    mm: "%d minuti",
    h: "un'ora",
    hh: "%d ore",
    d: "un giorno",
    dd: "%d giorni",
    M: "un mese",
    MM: "%d mesi",
    y: "un anno",
    yy: "%d anni"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%d\xBA",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
var jaLocale = {
  abbr: "ja",
  months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
  monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
  weekdays: "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"),
  weekdaysShort: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
  weekdaysMin: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "YYYY\u5E74M\u6708D\u65E5",
    LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
    LLLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm dddd",
    l: "YYYY/MM/DD",
    ll: "YYYY\u5E74M\u6708D\u65E5",
    lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
    llll: "YYYY\u5E74M\u6708D\u65E5 HH:mm dddd"
  },
  meridiemParse: /午前|午後/i,
  isPM(input2) {
    return input2 === "\u5348\u5F8C";
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return "\u5348\u524D";
    } else {
      return "\u5348\u5F8C";
    }
  },
  calendar: {
    sameDay: "[\u4ECA\u65E5] LT",
    nextDay: "[\u660E\u65E5] LT",
    nextWeek: "[\u6765\u9031]dddd LT",
    lastDay: "[\u6628\u65E5] LT",
    lastWeek: "[\u524D\u9031]dddd LT",
    sameElse: "L"
  },
  dayOfMonthOrdinalParse: /\d{1,2}日/,
  ordinal(num, period) {
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return num + "\u65E5";
      default:
        return num.toString(10);
    }
  },
  relativeTime: {
    future: "%s\u5F8C",
    past: "%s\u524D",
    s: "\u6570\u79D2",
    ss: "%d\u79D2",
    m: "1\u5206",
    mm: "%d\u5206",
    h: "1\u6642\u9593",
    hh: "%d\u6642\u9593",
    d: "1\u65E5",
    dd: "%d\u65E5",
    M: "1\u30F6\u6708",
    MM: "%d\u30F6\u6708",
    y: "1\u5E74",
    yy: "%d\u5E74"
  }
};
//! moment.js locale configuration
//! locale : Georgian [ka]
//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
//! author : Levan Tskipuri : https://github.com/tskipa
var kaLocale = {
  abbr: "ka",
  months: {
    format: "\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10E1_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10E1_\u10DB\u10D0\u10E0\u10E2\u10E1_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8\u10E1_\u10DB\u10D0\u10D8\u10E1\u10E1_\u10D8\u10D5\u10DC\u10D8\u10E1\u10E1_\u10D8\u10D5\u10DA\u10D8\u10E1\u10E1_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10E1_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10E1_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1".split("_"),
    standalone: "\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8_\u10DB\u10D0\u10E0\u10E2\u10D8_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8_\u10DB\u10D0\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8".split("_")
  },
  monthsShort: "\u10D8\u10D0\u10DC_\u10D7\u10D4\u10D1_\u10DB\u10D0\u10E0_\u10D0\u10DE\u10E0_\u10DB\u10D0\u10D8_\u10D8\u10D5\u10DC_\u10D8\u10D5\u10DA_\u10D0\u10D2\u10D5_\u10E1\u10D4\u10E5_\u10DD\u10E5\u10E2_\u10DC\u10DD\u10D4_\u10D3\u10D4\u10D9".split("_"),
  weekdays: {
    standalone: "\u10D9\u10D5\u10D8\u10E0\u10D0_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8_\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8".split("_"),
    format: "\u10D9\u10D5\u10D8\u10E0\u10D0\u10E1_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10E1_\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1".split("_"),
    isFormat: /(წინა|შემდეგ)/
  },
  weekdaysShort: "\u10D9\u10D5\u10D8_\u10DD\u10E0\u10E8_\u10E1\u10D0\u10DB_\u10DD\u10D7\u10EE_\u10EE\u10E3\u10D7_\u10DE\u10D0\u10E0_\u10E8\u10D0\u10D1".split("_"),
  weekdaysMin: "\u10D9\u10D5_\u10DD\u10E0_\u10E1\u10D0_\u10DD\u10D7_\u10EE\u10E3_\u10DE\u10D0_\u10E8\u10D0".split("_"),
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY h:mm A",
    LLLL: "dddd, D MMMM YYYY h:mm A"
  },
  calendar: {
    sameDay: "[\u10D3\u10E6\u10D4\u10E1] LT[-\u10D6\u10D4]",
    nextDay: "[\u10EE\u10D5\u10D0\u10DA] LT[-\u10D6\u10D4]",
    lastDay: "[\u10D2\u10E3\u10E8\u10D8\u10DC] LT[-\u10D6\u10D4]",
    nextWeek: "[\u10E8\u10D4\u10DB\u10D3\u10D4\u10D2] dddd LT[-\u10D6\u10D4]",
    lastWeek: "[\u10EC\u10D8\u10DC\u10D0] dddd LT-\u10D6\u10D4",
    sameElse: "L"
  },
  relativeTime: {
    future(s) {
      var st = s.toString();
      return /(წამი|წუთი|საათი|წელი)/.test(st) ? st.replace(/ი$/, "\u10E8\u10D8") : st + "\u10E8\u10D8";
    },
    past(s) {
      var st = s.toString();
      if (/(წამი|წუთი|საათი|დღე|თვე)/.test(st)) {
        return st.replace(/(ი|ე)$/, "\u10D8\u10E1 \u10EC\u10D8\u10DC");
      }
      if (/წელი/.test(st)) {
        return st.replace(/წელი$/, "\u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC");
      }
    },
    s: "\u10E0\u10D0\u10DB\u10D3\u10D4\u10DC\u10D8\u10DB\u10D4 \u10EC\u10D0\u10DB\u10D8",
    ss: "%d \u10EC\u10D0\u10DB\u10D8",
    m: "\u10EC\u10E3\u10D7\u10D8",
    mm: "%d \u10EC\u10E3\u10D7\u10D8",
    h: "\u10E1\u10D0\u10D0\u10D7\u10D8",
    hh: "%d \u10E1\u10D0\u10D0\u10D7\u10D8",
    d: "\u10D3\u10E6\u10D4",
    dd: "%d \u10D3\u10E6\u10D4",
    M: "\u10D7\u10D5\u10D4",
    MM: "%d \u10D7\u10D5\u10D4",
    y: "\u10EC\u10D4\u10DA\u10D8",
    yy: "%d \u10EC\u10D4\u10DA\u10D8"
  },
  dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
  ordinal(_num, _period) {
    const num = Number(_num);
    if (num === 0) {
      return num.toString();
    }
    if (num === 1) {
      return num + "-\u10DA\u10D8";
    }
    if (num < 20 || num <= 100 && num % 20 === 0 || num % 100 === 0) {
      return "\u10DB\u10D4-" + num;
    }
    return num + "-\u10D4";
  },
  week: {
    dow: 1,
    doy: 4
  }
};
var suffixes$1 = {
  0: "-\u0448\u0456",
  1: "-\u0448\u0456",
  2: "-\u0448\u0456",
  3: "-\u0448\u0456",
  4: "-\u0448\u0456",
  5: "-\u0448\u0456",
  6: "-\u0448\u044B",
  7: "-\u0448\u0456",
  8: "-\u0448\u0456",
  9: "-\u0448\u044B",
  10: "-\u0448\u044B",
  20: "-\u0448\u044B",
  30: "-\u0448\u044B",
  40: "-\u0448\u044B",
  50: "-\u0448\u0456",
  60: "-\u0448\u044B",
  70: "-\u0448\u0456",
  80: "-\u0448\u0456",
  90: "-\u0448\u044B",
  100: "-\u0448\u0456"
};
var kkLocale = {
  abbr: "kk",
  months: "\u049B\u0430\u04A3\u0442\u0430\u0440_\u0430\u049B\u043F\u0430\u043D_\u043D\u0430\u0443\u0440\u044B\u0437_\u0441\u04D9\u0443\u0456\u0440_\u043C\u0430\u043C\u044B\u0440_\u043C\u0430\u0443\u0441\u044B\u043C_\u0448\u0456\u043B\u0434\u0435_\u0442\u0430\u043C\u044B\u0437_\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A_\u049B\u0430\u0437\u0430\u043D_\u049B\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D".split("_"),
  monthsShort: "\u049B\u0430\u04A3_\u0430\u049B\u043F_\u043D\u0430\u0443_\u0441\u04D9\u0443_\u043C\u0430\u043C_\u043C\u0430\u0443_\u0448\u0456\u043B_\u0442\u0430\u043C_\u049B\u044B\u0440_\u049B\u0430\u0437_\u049B\u0430\u0440_\u0436\u0435\u043B".split("_"),
  weekdays: "\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456_\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456_\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456_\u0436\u04B1\u043C\u0430_\u0441\u0435\u043D\u0431\u0456".split("_"),
  weekdaysShort: "\u0436\u0435\u043A_\u0434\u04AF\u0439_\u0441\u0435\u0439_\u0441\u04D9\u0440_\u0431\u0435\u0439_\u0436\u04B1\u043C_\u0441\u0435\u043D".split("_"),
  weekdaysMin: "\u0436\u043A_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043C_\u0441\u043D".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[\u0411\u04AF\u0433\u0456\u043D \u0441\u0430\u0493\u0430\u0442] LT",
    nextDay: "[\u0415\u0440\u0442\u0435\u04A3 \u0441\u0430\u0493\u0430\u0442] LT",
    nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT",
    lastDay: "[\u041A\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",
    lastWeek: "[\u04E8\u0442\u043A\u0435\u043D \u0430\u043F\u0442\u0430\u043D\u044B\u04A3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s \u0456\u0448\u0456\u043D\u0434\u0435",
    past: "%s \u0431\u04B1\u0440\u044B\u043D",
    s: "\u0431\u0456\u0440\u043D\u0435\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434",
    ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434",
    m: "\u0431\u0456\u0440 \u043C\u0438\u043D\u0443\u0442",
    mm: "%d \u043C\u0438\u043D\u0443\u0442",
    h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",
    hh: "%d \u0441\u0430\u0493\u0430\u0442",
    d: "\u0431\u0456\u0440 \u043A\u04AF\u043D",
    dd: "%d \u043A\u04AF\u043D",
    M: "\u0431\u0456\u0440 \u0430\u0439",
    MM: "%d \u0430\u0439",
    y: "\u0431\u0456\u0440 \u0436\u044B\u043B",
    yy: "%d \u0436\u044B\u043B"
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
  ordinal(_num) {
    const a = _num % 10;
    const b = _num >= 100 ? 100 : null;
    return _num + (suffixes$1[_num] || suffixes$1[a] || suffixes$1[b]);
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 7
    // The week that contains Jan 7th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>
var koLocale = {
  abbr: "ko",
  months: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
  monthsShort: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
  weekdays: "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),
  weekdaysShort: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
  weekdaysMin: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
  longDateFormat: {
    LT: "A h:mm",
    LTS: "A h:mm:ss",
    L: "YYYY.MM.DD",
    LL: "YYYY\uB144 MMMM D\uC77C",
    LLL: "YYYY\uB144 MMMM D\uC77C A h:mm",
    LLLL: "YYYY\uB144 MMMM D\uC77C dddd A h:mm",
    l: "YYYY.MM.DD",
    ll: "YYYY\uB144 MMMM D\uC77C",
    lll: "YYYY\uB144 MMMM D\uC77C A h:mm",
    llll: "YYYY\uB144 MMMM D\uC77C dddd A h:mm"
  },
  calendar: {
    sameDay: "\uC624\uB298 LT",
    nextDay: "\uB0B4\uC77C LT",
    nextWeek: "dddd LT",
    lastDay: "\uC5B4\uC81C LT",
    lastWeek: "\uC9C0\uB09C\uC8FC dddd LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s \uD6C4",
    past: "%s \uC804",
    s: "\uBA87 \uCD08",
    ss: "%d\uCD08",
    m: "1\uBD84",
    mm: "%d\uBD84",
    h: "\uD55C \uC2DC\uAC04",
    hh: "%d\uC2DC\uAC04",
    d: "\uD558\uB8E8",
    dd: "%d\uC77C",
    M: "\uD55C \uB2EC",
    MM: "%d\uB2EC",
    y: "\uC77C \uB144",
    yy: "%d\uB144"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
  ordinal: function(num, period) {
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return num + "\uC77C";
      case "M":
        return num + "\uC6D4";
      case "w":
      case "W":
        return num + "\uC8FC";
      default:
        return num.toString(10);
    }
  },
  meridiemParse: /오전|오후/,
  isPM: function(token) {
    return token === "\uC624\uD6C4";
  },
  meridiem: function(hour, minute, isUpper) {
    return hour < 12 ? "\uC624\uC804" : "\uC624\uD6C4";
  }
};
//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Stanislavas Guk : https://github.com/ixoster
var units = {
  ss: "sekund\u0117_sekund\u017Ei\u0173_sekundes",
  m: "minut\u0117_minut\u0117s_minut\u0119",
  mm: "minut\u0117s_minu\u010Di\u0173_minutes",
  h: "valanda_valandos_valand\u0105",
  hh: "valandos_valand\u0173_valandas",
  d: "diena_dienos_dien\u0105",
  dd: "dienos_dien\u0173_dienas",
  M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F",
  MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
  y: "metai_met\u0173_metus",
  yy: "metai_met\u0173_metus"
};
function translateSeconds(num, withoutSuffix, key, isFuture) {
  if (withoutSuffix) {
    return "kelios sekund\u0117s";
  } else {
    return isFuture ? "keli\u0173 sekund\u017Ei\u0173" : "kelias sekundes";
  }
}
function translateSingular(num, withoutSuffix, key, isFuture) {
  return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
}
function special(num) {
  return num % 10 === 0 || num > 10 && num < 20;
}
function forms(key) {
  return units[key].split("_");
}
function translate$3(num, withoutSuffix, key, isFuture) {
  let result = num + " ";
  if (num === 1) {
    return result + translateSingular(num, withoutSuffix, key[0], isFuture);
  } else if (withoutSuffix) {
    return result + (special(num) ? forms(key)[1] : forms(key)[0]);
  } else {
    if (isFuture) {
      return result + forms(key)[1];
    } else {
      return result + (special(num) ? forms(key)[1] : forms(key)[2]);
    }
  }
}
var ltLocale = {
  abbr: "lt",
  months: {
    format: "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split("_"),
    standalone: "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),
    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
  },
  monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
  weekdays: {
    format: "sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split("_"),
    standalone: "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),
    isFormat: /dddd HH:mm/
  },
  weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),
  weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "YYYY [m.] MMMM D [d.]",
    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
    l: "YYYY-MM-DD",
    ll: "YYYY [m.] MMMM D [d.]",
    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
  },
  calendar: {
    sameDay: "[\u0160iandien] LT",
    nextDay: "[Rytoj] LT",
    nextWeek: "dddd LT",
    lastDay: "[Vakar] LT",
    lastWeek: "[Pra\u0117jus\u012F] dddd LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "po %s",
    past: "prie\u0161 %s",
    s: translateSeconds,
    ss: translate$3,
    m: translateSingular,
    mm: translate$3,
    h: translateSingular,
    hh: translate$3,
    d: translateSingular,
    dd: translate$3,
    M: translateSingular,
    MM: translate$3,
    y: translateSingular,
    yy: translate$3
  },
  dayOfMonthOrdinalParse: /\d{1,2}-oji/,
  ordinal(num) {
    return num + "-oji";
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Matiss Janis Aboltins : https://github.com/matissjanis
var lvLocale = {
  abbr: "lv",
  months: "Janv\u0101ris_Febru\u0101ris_Marts_Apr\u012Blis_Maijs_J\u016Bnijs_J\u016Blijs_Augusts_Septembris_Oktobris_Novembris_Decembris".split("_"),
  monthsShort: "Jan_Feb_Mar_Apr_Mai_J\u016Bn_J\u016Bl_Aug_Sep_Okt_Nov_Dec".split("_"),
  weekdays: "Sv\u0113tdiena_Pirmdiena_Otrdiena_Tre\u0161diena_Ceturtdiena_Piektdiena_Sestdiena".split("_"),
  weekdaysShort: "Sv\u0113td_Pirmd_Otrd_Tre\u0161d_Ceturtd_Piektd_Sestd".split("_"),
  weekdaysMin: "Sv_Pi_Ot_Tr_Ce_Pk_Se".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "p\u0113c %s",
    past: "pirms %s",
    s: "da\u017E\u0101m sekund\u0113m",
    ss: "%d sekund\u0113m",
    m: "min\u016Btes",
    mm: "%d min\u016Bt\u0113m",
    h: "stundas",
    hh: "%d stund\u0101m",
    d: "dienas",
    dd: "%d dien\u0101m",
    M: "m\u0113ne\u0161a",
    MM: "%d m\u0113ne\u0161iem",
    y: "gada",
    yy: "%d gadiem"
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal(num) {
    return num + ".";
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Mongolian [mn]
//! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7
function translate$2(num, withoutSuffix, key, isFuture) {
  switch (key) {
    case "s":
      return withoutSuffix ? "\u0445\u044D\u0434\u0445\u044D\u043D \u0441\u0435\u043A\u0443\u043D\u0434" : "\u0445\u044D\u0434\u0445\u044D\u043D \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D";
    case "ss":
      return num + (withoutSuffix ? " \u0441\u0435\u043A\u0443\u043D\u0434" : " \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D");
    case "m":
    case "mm":
      return num + (withoutSuffix ? " \u043C\u0438\u043D\u0443\u0442" : " \u043C\u0438\u043D\u0443\u0442\u044B\u043D");
    case "h":
    case "hh":
      return num + (withoutSuffix ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043D");
    case "d":
    case "dd":
      return num + (withoutSuffix ? " \u04E9\u0434\u04E9\u0440" : " \u04E9\u0434\u0440\u0438\u0439\u043D");
    case "M":
    case "MM":
      return num + (withoutSuffix ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044B\u043D");
    case "y":
    case "yy":
      return num + (withoutSuffix ? " \u0436\u0438\u043B" : " \u0436\u0438\u043B\u0438\u0439\u043D");
    default:
      return num.toString(10);
  }
}
var mnLocale = {
  abbr: "mn",
  months: "\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043E\u043B\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043D \u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"),
  monthsShort: "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"),
  monthsParseExact: true,
  weekdays: "\u041D\u044F\u043C_\u0414\u0430\u0432\u0430\u0430_\u041C\u044F\u0433\u043C\u0430\u0440_\u041B\u0445\u0430\u0433\u0432\u0430_\u041F\u04AF\u0440\u044D\u0432_\u0411\u0430\u0430\u0441\u0430\u043D_\u0411\u044F\u043C\u0431\u0430".split("_"),
  weekdaysShort: "\u041D\u044F\u043C_\u0414\u0430\u0432_\u041C\u044F\u0433_\u041B\u0445\u0430_\u041F\u04AF\u0440_\u0411\u0430\u0430_\u0411\u044F\u043C".split("_"),
  weekdaysMin: "\u041D\u044F_\u0414\u0430_\u041C\u044F_\u041B\u0445_\u041F\u04AF_\u0411\u0430_\u0411\u044F".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "YYYY \u043E\u043D\u044B MMMM\u044B\u043D D",
    LLL: "YYYY \u043E\u043D\u044B MMMM\u044B\u043D D HH:mm",
    LLLL: "dddd, YYYY \u043E\u043D\u044B MMMM\u044B\u043D D HH:mm"
  },
  meridiemParse: /ҮӨ|ҮХ/i,
  isPM: function(input2) {
    return input2 === "\u04AE\u0425";
  },
  meridiem: function(hour, minute, isLower) {
    if (hour < 12) {
      return "\u04AE\u04E8";
    } else {
      return "\u04AE\u0425";
    }
  },
  calendar: {
    sameDay: "[\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440] LT",
    nextDay: "[\u041C\u0430\u0440\u0433\u0430\u0430\u0448] LT",
    nextWeek: "[\u0418\u0440\u044D\u0445] dddd LT",
    lastDay: "[\u04E8\u0447\u0438\u0433\u0434\u04E9\u0440] LT",
    lastWeek: "[\u04E8\u043D\u0433\u04E9\u0440\u0441\u04E9\u043D] dddd LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s \u0434\u0430\u0440\u0430\u0430",
    past: "%s \u04E9\u043C\u043D\u04E9",
    s: translate$2,
    ss: translate$2,
    m: translate$2,
    mm: translate$2,
    h: translate$2,
    hh: translate$2,
    d: translate$2,
    dd: translate$2,
    M: translate$2,
    MM: translate$2,
    y: translate$2,
    yy: translate$2
  },
  dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
  ordinal: function(num, period) {
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return num + " \u04E9\u0434\u04E9\u0440";
      default:
        return num.toString(10);
    }
  }
};
//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga
var nbLocale = {
  abbr: "nb",
  months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
  monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
  monthsParseExact: true,
  weekdays: "s\xF8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xF8rdag".split("_"),
  weekdaysShort: "s\xF8._ma._ti._on._to._fr._l\xF8.".split("_"),
  weekdaysMin: "s\xF8_ma_ti_on_to_fr_l\xF8".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY [kl.] HH:mm",
    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
  },
  calendar: {
    sameDay: "[i dag kl.] LT",
    nextDay: "[i morgen kl.] LT",
    nextWeek: "dddd [kl.] LT",
    lastDay: "[i g\xE5r kl.] LT",
    lastWeek: "[forrige] dddd [kl.] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "om %s",
    past: "%s siden",
    s: "noen sekunder",
    ss: "%d sekunder",
    m: "ett minutt",
    mm: "%d minutter",
    h: "en time",
    hh: "%d timer",
    d: "en dag",
    dd: "%d dager",
    M: "en m\xE5ned",
    MM: "%d m\xE5neder",
    y: "ett \xE5r",
    yy: "%d \xE5r"
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
var monthsShortWithDots$1 = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
var monthsShortWithoutDots$1 = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
var monthsParse$2 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex$1 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
var nlBeLocale = {
  abbr: "nl-be",
  months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortWithDots$1;
    } else if (/-MMM-/.test(format)) {
      return monthsShortWithoutDots$1[getMonth(date, isUTC)];
    } else {
      return monthsShortWithDots$1[getMonth(date, isUTC)];
    }
  },
  monthsRegex: monthsRegex$1,
  monthsShortRegex: monthsRegex$1,
  monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
  monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
  monthsParse: monthsParse$2,
  longMonthsParse: monthsParse$2,
  shortMonthsParse: monthsParse$2,
  weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
  weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
  weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[vandaag om] LT",
    nextDay: "[morgen om] LT",
    nextWeek: "dddd [om] LT",
    lastDay: "[gisteren om] LT",
    lastWeek: "[afgelopen] dddd [om] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "over %s",
    past: "%s geleden",
    s: "een paar seconden",
    ss: "%d seconden",
    m: "\xE9\xE9n minuut",
    mm: "%d minuten",
    h: "\xE9\xE9n uur",
    hh: "%d uur",
    d: "\xE9\xE9n dag",
    dd: "%d dagen",
    M: "\xE9\xE9n maand",
    MM: "%d maanden",
    y: "\xE9\xE9n jaar",
    yy: "%d jaar"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
  ordinal(_num) {
    const num = Number(_num);
    return num + (num === 1 || num === 8 || num >= 20 ? "ste" : "de");
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
var monthsShortWithDots = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
var monthsShortWithoutDots = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
var monthsParse$1 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
var nlLocale = {
  abbr: "nl",
  months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
  monthsShort(date, format, isUTC) {
    if (!date) {
      return monthsShortWithDots;
    } else if (/-MMM-/.test(format)) {
      return monthsShortWithoutDots[getMonth(date, isUTC)];
    } else {
      return monthsShortWithDots[getMonth(date, isUTC)];
    }
  },
  monthsRegex,
  monthsShortRegex: monthsRegex,
  monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
  monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
  monthsParse: monthsParse$1,
  longMonthsParse: monthsParse$1,
  shortMonthsParse: monthsParse$1,
  weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
  weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
  weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD-MM-YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[vandaag om] LT",
    nextDay: "[morgen om] LT",
    nextWeek: "dddd [om] LT",
    lastDay: "[gisteren om] LT",
    lastWeek: "[afgelopen] dddd [om] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "over %s",
    past: "%s geleden",
    s: "een paar seconden",
    ss: "%d seconden",
    m: "\xE9\xE9n minuut",
    mm: "%d minuten",
    h: "\xE9\xE9n uur",
    hh: "%d uur",
    d: "\xE9\xE9n dag",
    dd: "%d dagen",
    M: "\xE9\xE9n maand",
    MM: "%d maanden",
    y: "\xE9\xE9n jaar",
    yy: "%d jaar"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
  ordinal(_num) {
    const num = Number(_num);
    return num + (num === 1 || num === 8 || num >= 20 ? "ste" : "de");
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL
var monthsNominative = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_");
var monthsSubjective = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_");
function plural$3(num) {
  return num % 10 < 5 && num % 10 > 1 && ~~(num / 10) % 10 !== 1;
}
function translate$1(num, withoutSuffix, key) {
  let result = num + " ";
  switch (key) {
    case "ss":
      return result + (plural$3(num) ? "sekundy" : "sekund");
    case "m":
      return withoutSuffix ? "minuta" : "minut\u0119";
    case "mm":
      return result + (plural$3(num) ? "minuty" : "minut");
    case "h":
      return withoutSuffix ? "godzina" : "godzin\u0119";
    case "hh":
      return result + (plural$3(num) ? "godziny" : "godzin");
    case "MM":
      return result + (plural$3(num) ? "miesi\u0105ce" : "miesi\u0119cy");
    case "yy":
      return result + (plural$3(num) ? "lata" : "lat");
  }
}
var plLocale = {
  abbr: "pl",
  months(date, format, isUTC) {
    if (!date) {
      return monthsNominative;
    } else if (format === "") {
      return "(" + monthsSubjective[getMonth(date, isUTC)] + "|" + monthsNominative[getMonth(date, isUTC)] + ")";
    } else if (/D MMMM/.test(format)) {
      return monthsSubjective[getMonth(date, isUTC)];
    } else {
      return monthsNominative[getMonth(date, isUTC)];
    }
  },
  monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),
  weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),
  weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),
  weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Dzi\u015B o] LT",
    nextDay: "[Jutro o] LT",
    nextWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[W niedziel\u0119 o] LT";
        case 2:
          return "[We wtorek o] LT";
        case 3:
          return "[W \u015Brod\u0119 o] LT";
        case 5:
          return "[W pi\u0105tek o] LT";
        case 6:
          return "[W sobot\u0119 o] LT";
        default:
          return "[W] dddd [o] LT";
      }
    },
    lastDay: "[Wczoraj o] LT",
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
        case 3:
          return "[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";
        case 4:
          return "[W zesz\u0142\u0105 czwartek o] LT";
        case 5:
          return "[W zesz\u0142\u0105 pi\u0105tek o] LT";
        case 6:
          return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
        default:
          return "[W zesz\u0142y] dddd [o] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "za %s",
    past: "%s temu",
    s: "kilka sekund",
    ss: translate$1,
    m: translate$1,
    mm: translate$1,
    h: translate$1,
    hh: translate$1,
    d: "1 dzie\u0144",
    dd: "%d dni",
    M: "miesi\u0105c",
    MM: translate$1,
    y: "rok",
    yy: translate$1
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
var ptBrLocale = {
  abbr: "pt-br",
  months: "Janeiro_Fevereiro_Mar\xE7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
  monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
  weekdays: "Domingo_Segunda-feira_Ter\xE7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xE1bado".split("_"),
  weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xE1b".split("_"),
  weekdaysMin: "Do_2\xAA_3\xAA_4\xAA_5\xAA_6\xAA_S\xE1".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY [\xE0s] HH:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY [\xE0s] HH:mm"
  },
  calendar: {
    sameDay: "[Hoje \xE0s] LT",
    nextDay: "[Amanh\xE3 \xE0s] LT",
    nextWeek: "dddd [\xE0s] LT",
    lastDay: "[Ontem \xE0s] LT",
    lastWeek(date) {
      return getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6 ? "[\xDAltimo] dddd [\xE0s] LT" : (
        // Saturday + Sunday
        "[\xDAltima] dddd [\xE0s] LT"
      );
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "em %s",
    past: "%s atr\xE1s",
    s: "poucos segundos",
    ss: "%d segundos",
    m: "um minuto",
    mm: "%d minutos",
    h: "uma hora",
    hh: "%d horas",
    d: "um dia",
    dd: "%d dias",
    M: "um m\xEAs",
    MM: "%d meses",
    y: "um ano",
    yy: "%d anos"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%d\xBA"
};
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
function relativeTimeWithPlural$2(num, withoutSuffix, key) {
  let format = {
    ss: "secunde",
    mm: "minute",
    hh: "ore",
    dd: "zile",
    MM: "luni",
    yy: "ani"
  };
  let separator = " ";
  if (num % 100 >= 20 || num >= 100 && num % 100 === 0) {
    separator = " de ";
  }
  return num + separator + format[key];
}
var roLocale = {
  abbr: "ro",
  months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
  monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
  monthsParseExact: true,
  weekdays: "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\xE2mb\u0103t\u0103".split("_"),
  weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xE2m".split("_"),
  weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xE2".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY H:mm",
    LLLL: "dddd, D MMMM YYYY H:mm"
  },
  calendar: {
    sameDay: "[azi la] LT",
    nextDay: "[m\xE2ine la] LT",
    nextWeek: "dddd [la] LT",
    lastDay: "[ieri la] LT",
    lastWeek: "[fosta] dddd [la] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "peste %s",
    past: "%s \xEEn urm\u0103",
    s: "c\xE2teva secunde",
    ss: relativeTimeWithPlural$2,
    m: "un minut",
    mm: relativeTimeWithPlural$2,
    h: "o or\u0103",
    hh: relativeTimeWithPlural$2,
    d: "o zi",
    dd: relativeTimeWithPlural$2,
    M: "o lun\u0103",
    MM: relativeTimeWithPlural$2,
    y: "un an",
    yy: relativeTimeWithPlural$2
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair
function plural$2(word, num) {
  let forms2 = word.split("_");
  return num % 10 === 1 && num % 100 !== 11 ? forms2[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms2[1] : forms2[2];
}
function relativeTimeWithPlural$1(num, withoutSuffix, key) {
  let format = {
    ss: withoutSuffix ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434",
    mm: withoutSuffix ? "\u043C\u0438\u043D\u0443\u0442\u0430_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442" : "\u043C\u0438\u043D\u0443\u0442\u0443_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442",
    hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043E\u0432",
    dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u044F_\u0434\u043D\u0435\u0439",
    MM: "\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u0430_\u043C\u0435\u0441\u044F\u0446\u0435\u0432",
    yy: "\u0433\u043E\u0434_\u0433\u043E\u0434\u0430_\u043B\u0435\u0442"
  };
  if (key === "m") {
    return withoutSuffix ? "\u043C\u0438\u043D\u0443\u0442\u0430" : "\u043C\u0438\u043D\u0443\u0442\u0443";
  }
  return num + " " + plural$2(format[key], +num);
}
var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
var ruLocale = {
  abbr: "ru",
  months: {
    format: "\u044F\u043D\u0432\u0430\u0440\u044F_\u0444\u0435\u0432\u0440\u0430\u043B\u044F_\u043C\u0430\u0440\u0442\u0430_\u0430\u043F\u0440\u0435\u043B\u044F_\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F_\u043E\u043A\u0442\u044F\u0431\u0440\u044F_\u043D\u043E\u044F\u0431\u0440\u044F_\u0434\u0435\u043A\u0430\u0431\u0440\u044F".split("_"),
    standalone: "\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split("_")
  },
  monthsShort: {
    // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
    format: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_"),
    standalone: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440\u0442_\u0430\u043F\u0440._\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_")
  },
  weekdays: {
    standalone: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043E\u0442\u0430".split("_"),
    format: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043E\u0442\u0443".split("_"),
    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
  },
  weekdaysShort: "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
  weekdaysMin: "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
  monthsParse,
  longMonthsParse: monthsParse,
  shortMonthsParse: monthsParse,
  // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
  monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
  // копия предыдущего
  monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
  // полные названия с падежами
  monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
  // Выражение, которое соотвествует только сокращённым формам
  monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY \u0433.",
    LLL: "D MMMM YYYY \u0433., H:mm",
    LLLL: "dddd, D MMMM YYYY \u0433., H:mm"
  },
  calendar: {
    sameDay: "[\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432] LT",
    nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT",
    lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
    nextWeek(date, now) {
      if (getWeek(now) !== getWeek(date)) {
        switch (getDayOfWeek(date)) {
          case 0:
            return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435] dddd [\u0432] LT";
          case 1:
          case 2:
          case 4:
            return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439] dddd [\u0432] LT";
          case 3:
          case 5:
          case 6:
            return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E] dddd [\u0432] LT";
        }
      } else {
        if (getDayOfWeek(date) === 2) {
          return "[\u0412\u043E] dddd [\u0432] LT";
        } else {
          return "[\u0412] dddd [\u0432] LT";
        }
      }
    },
    lastWeek(date, now) {
      if (getWeek(now) !== getWeek(date)) {
        switch (getDayOfWeek(date)) {
          case 0:
            return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u043E\u0435] dddd [\u0432] LT";
          case 1:
          case 2:
          case 4:
            return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u044B\u0439] dddd [\u0432] LT";
          case 3:
          case 5:
          case 6:
            return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u0443\u044E] dddd [\u0432] LT";
        }
      } else {
        if (getDayOfWeek(date) === 2) {
          return "[\u0412\u043E] dddd [\u0432] LT";
        } else {
          return "[\u0412] dddd [\u0432] LT";
        }
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "\u0447\u0435\u0440\u0435\u0437 %s",
    past: "%s \u043D\u0430\u0437\u0430\u0434",
    s: "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434",
    ss: relativeTimeWithPlural$1,
    m: relativeTimeWithPlural$1,
    mm: relativeTimeWithPlural$1,
    h: "\u0447\u0430\u0441",
    hh: relativeTimeWithPlural$1,
    d: "\u0434\u0435\u043D\u044C",
    dd: relativeTimeWithPlural$1,
    M: "\u043C\u0435\u0441\u044F\u0446",
    MM: relativeTimeWithPlural$1,
    y: "\u0433\u043E\u0434",
    yy: relativeTimeWithPlural$1
  },
  meridiemParse: /ночи|утра|дня|вечера/i,
  isPM(input2) {
    return /^(дня|вечера)$/.test(input2);
  },
  meridiem(hour, minute, isLower) {
    if (hour < 4) {
      return "\u043D\u043E\u0447\u0438";
    } else if (hour < 12) {
      return "\u0443\u0442\u0440\u0430";
    } else if (hour < 17) {
      return "\u0434\u043D\u044F";
    } else {
      return "\u0432\u0435\u0447\u0435\u0440\u0430";
    }
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
  ordinal(_num, period) {
    const num = Number(_num);
    switch (period) {
      case "M":
      case "d":
      case "DDD":
        return num + "-\u0439";
      case "D":
        return num + "-\u0433\u043E";
      case "w":
      case "W":
        return num + "-\u044F";
      default:
        return num.toString(10);
    }
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Jozef Pažin : https://github.com/atiris
var months$1 = "janu\xE1r_febru\xE1r_marec_apr\xEDl_m\xE1j_j\xFAn_j\xFAl_august_september_okt\xF3ber_november_december".split("_");
var monthsShort = "jan_feb_mar_apr_m\xE1j_j\xFAn_j\xFAl_aug_sep_okt_nov_dec".split("_");
function plural$1(num) {
  return num > 1 && num < 5 && ~~(num / 10) !== 1;
}
function translate(num, withoutSuffix, key, isFuture) {
  const result = num + " ";
  switch (key) {
    case "s":
      return withoutSuffix || isFuture ? "p\xE1r sek\xFAnd" : "p\xE1r sekundami";
    case "ss":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "sekundy" : "sek\xFAnd");
      } else {
        return result + "sekundami";
      }
    // break;
    case "m":
      return withoutSuffix ? "min\xFAta" : isFuture ? "min\xFAtu" : "min\xFAtou";
    case "mm":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "min\xFAty" : "min\xFAt");
      } else {
        return result + "min\xFAtami";
      }
    // break;
    case "h":
      return withoutSuffix ? "hodina" : isFuture ? "hodinu" : "hodinou";
    case "hh":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "hodiny" : "hod\xEDn");
      } else {
        return result + "hodinami";
      }
    // break;
    case "d":
      return withoutSuffix || isFuture ? "de\u0148" : "d\u0148om";
    case "dd":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "dni" : "dn\xED");
      } else {
        return result + "d\u0148ami";
      }
    // break;
    case "M":
      return withoutSuffix || isFuture ? "mesiac" : "mesiacom";
    case "MM":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "mesiace" : "mesiacov");
      } else {
        return result + "mesiacmi";
      }
    // break;
    case "y":
      return withoutSuffix || isFuture ? "rok" : "rokom";
    case "yy":
      if (withoutSuffix || isFuture) {
        return result + (plural$1(num) ? "roky" : "rokov");
      } else {
        return result + "rokmi";
      }
  }
}
var skLocale = {
  abbr: "sk",
  months: months$1,
  monthsShort,
  weekdays: "nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
  weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
  weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd D. MMMM YYYY H:mm",
    l: "D. M. YYYY"
  },
  calendar: {
    sameDay: "[dnes o] LT",
    nextDay: "[zajtra o] LT",
    nextWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[v nede\u013Eu o] LT";
        case 1:
        case 2:
          return "[v] dddd [o] LT";
        case 3:
          return "[v stredu o] LT";
        case 4:
          return "[vo \u0161tvrtok o] LT";
        case 5:
          return "[v piatok o] LT";
        case 6:
          return "[v sobotu o] LT";
      }
    },
    lastDay: "[v\u010Dera o] LT",
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[minul\xFA nede\u013Eu o] LT";
        case 1:
        case 2:
          return "[minul\xFD] dddd [o] LT";
        case 3:
          return "[minul\xFA stredu o] LT";
        case 4:
        case 5:
          return "[minul\xFD] dddd [o] LT";
        case 6:
          return "[minul\xFA sobotu o] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "o %s",
    past: "pred %s",
    s: translate,
    ss: translate,
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: translate,
    dd: translate,
    M: translate,
    MM: translate,
    y: translate,
    yy: translate
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : mihan : https://github.com/mihan
function processRelativeTime(number, withoutSuffix, key, isFuture) {
  var result = number + " ";
  switch (key) {
    case "s":
      return withoutSuffix || isFuture ? "nekaj sekund" : "nekaj sekundami";
    case "ss":
      if (number === 1) {
        result += withoutSuffix ? "sekundo" : "sekundi";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "sekundi" : "sekundah";
      } else if (number < 5) {
        result += withoutSuffix || isFuture ? "sekunde" : "sekundah";
      } else {
        result += withoutSuffix || isFuture ? "sekund" : "sekund";
      }
      return result;
    case "m":
      return withoutSuffix ? "ena minuta" : "eno minuto";
    case "mm":
      if (number === 1) {
        result += withoutSuffix ? "minuta" : "minuto";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "minuti" : "minutama";
      } else if (number < 5) {
        result += withoutSuffix || isFuture ? "minute" : "minutami";
      } else {
        result += withoutSuffix || isFuture ? "minut" : "minutami";
      }
      return result;
    case "h":
      return withoutSuffix ? "ena ura" : "eno uro";
    case "hh":
      if (number === 1) {
        result += withoutSuffix ? "ura" : "uro";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "uri" : "urama";
      } else if (number < 5) {
        result += withoutSuffix || isFuture ? "ure" : "urami";
      } else {
        result += withoutSuffix || isFuture ? "ur" : "urami";
      }
      return result;
    case "d":
      return withoutSuffix || isFuture ? "en dan" : "enim dnem";
    case "dd":
      if (number === 1) {
        result += withoutSuffix || isFuture ? "dan" : "dnem";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "dni" : "dnevoma";
      } else {
        result += withoutSuffix || isFuture ? "dni" : "dnevi";
      }
      return result;
    case "M":
      return withoutSuffix || isFuture ? "en mesec" : "enim mesecem";
    case "MM":
      if (number === 1) {
        result += withoutSuffix || isFuture ? "mesec" : "mesecem";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "meseca" : "mesecema";
      } else if (number < 5) {
        result += withoutSuffix || isFuture ? "mesece" : "meseci";
      } else {
        result += withoutSuffix || isFuture ? "mesecev" : "meseci";
      }
      return result;
    case "y":
      return withoutSuffix || isFuture ? "eno leto" : "enim letom";
    case "yy":
      if (number === 1) {
        result += withoutSuffix || isFuture ? "leto" : "letom";
      } else if (number === 2) {
        result += withoutSuffix || isFuture ? "leti" : "letoma";
      } else if (number < 5) {
        result += withoutSuffix || isFuture ? "leta" : "leti";
      } else {
        result += withoutSuffix || isFuture ? "let" : "leti";
      }
      return result;
  }
}
var slLocale = {
  abbr: "sl",
  months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
  monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
  monthsParseExact: true,
  weekdays: "nedelja_ponedeljek_torek_sreda_\u010Detrtek_petek_sobota".split("_"),
  weekdaysShort: "ned._pon._tor._sre._\u010Det._pet._sob.".split("_"),
  weekdaysMin: "ne_po_to_sr_\u010De_pe_so".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm"
  },
  calendar: {
    sameDay: "[danes ob] LT",
    nextDay: "[jutri ob] LT",
    nextWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[v] [nedeljo] [ob] LT";
        case 3:
          return "[v] [sredo] [ob] LT";
        case 6:
          return "[v] [soboto] [ob] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[v] dddd [ob] LT";
      }
    },
    lastDay: "[v\u010Deraj ob] LT",
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
          return "[prej\u0161njo] [nedeljo] [ob] LT";
        case 3:
          return "[prej\u0161njo] [sredo] [ob] LT";
        case 6:
          return "[prej\u0161njo] [soboto] [ob] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[prej\u0161nji] dddd [ob] LT";
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "\u010Dez %s",
    past: "pred %s",
    s: processRelativeTime,
    ss: processRelativeTime,
    m: processRelativeTime,
    mm: processRelativeTime,
    h: processRelativeTime,
    hh: processRelativeTime,
    d: processRelativeTime,
    dd: processRelativeTime,
    M: processRelativeTime,
    MM: processRelativeTime,
    y: processRelativeTime,
    yy: processRelativeTime
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: "%d.",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Albanian [sq]
//! author : Agon Cecelia : https://github.com/agoncecelia
var sqLocale = {
  abbr: "sq",
  months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xEBntor_Dhjetor".split("_"),
  monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xEBn_Dhj".split("_"),
  weekdays: "E Diel\xEB_E H\xEBn\xEB_E Mart\xEB_E M\xEBrkur\xEB_E Enjte_E Premte_E Shtun\xEB".split("_"),
  weekdaysShort: "Die_H\xEBn_Mar_M\xEBr_Enj_Pre_Sht".split("_"),
  weekdaysMin: "Di_He_Ma_Me_En_Pr_Sh".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Sot n\xEB] LT",
    nextDay: "[Nes\xEBr n\xEB] LT",
    nextWeek: "dddd [n\xEB] LT",
    lastDay: "[Dje n\xEB] LT",
    lastWeek: "dddd [e kaluar n\xEB] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "n\xEB %s",
    past: "para %sve",
    s: "disa sekonda",
    ss: "%d sekonda",
    m: "nj\xEB minut",
    mm: "%d minuta",
    h: "nj\xEB or\xEB",
    hh: "%d or\xEB",
    d: "nj\xEB dit\xEB",
    dd: "%d dit\xEB",
    M: "nj\xEB muaj",
    MM: "%d muaj",
    y: "nj\xEB vit",
    yy: "%d vite"
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  // need clarification
  ordinal: "%d.",
  // need clarification
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus
var svLocale = {
  abbr: "sv",
  months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
  monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
  weekdays: "s\xF6ndag_m\xE5ndag_tisdag_onsdag_torsdag_fredag_l\xF6rdag".split("_"),
  weekdaysShort: "s\xF6n_m\xE5n_tis_ons_tor_fre_l\xF6r".split("_"),
  weekdaysMin: "s\xF6_m\xE5_ti_on_to_fr_l\xF6".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY [kl.] HH:mm",
    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd D MMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[Idag] LT",
    nextDay: "[Imorgon] LT",
    lastDay: "[Ig\xE5r] LT",
    nextWeek: "[P\xE5] dddd LT",
    lastWeek: "[I] dddd[s] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "om %s",
    past: "f\xF6r %s sedan",
    s: "n\xE5gra sekunder",
    ss: "%d sekunder",
    m: "en minut",
    mm: "%d minuter",
    h: "en timme",
    hh: "%d timmar",
    d: "en dag",
    dd: "%d dagar",
    M: "en m\xE5nad",
    MM: "%d m\xE5nader",
    y: "ett \xE5r",
    yy: "%d \xE5r"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
  ordinal(_num) {
    const num = Number(_num);
    let b = num % 10, output2 = ~~(num % 100 / 10) === 1 ? "e" : b === 1 ? "a" : b === 2 ? "a" : b === 3 ? "e" : "e";
    return num + output2;
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
var thLocale = {
  abbr: "th",
  months: "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21_\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C_\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21_\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19_\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21_\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19_\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21_\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21_\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19_\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21_\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19_\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21".split("_"),
  monthsShort: "\u0E21.\u0E04._\u0E01.\u0E1E._\u0E21\u0E35.\u0E04._\u0E40\u0E21.\u0E22._\u0E1E.\u0E04._\u0E21\u0E34.\u0E22._\u0E01.\u0E04._\u0E2A.\u0E04._\u0E01.\u0E22._\u0E15.\u0E04._\u0E1E.\u0E22._\u0E18.\u0E04.".split("_"),
  monthsParseExact: true,
  weekdays: "\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split("_"),
  weekdaysShort: "\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"),
  // yes, three characters difference
  weekdaysMin: "\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm",
    LLLL: "\u0E27\u0E31\u0E19dddd\u0E17\u0E35\u0E48 D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm"
  },
  meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
  isPM(input2) {
    return input2 === "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07";
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07";
    } else {
      return "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07";
    }
  },
  calendar: {
    sameDay: "[\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
    nextDay: "[\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
    nextWeek: "dddd[\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E27\u0E25\u0E32] LT",
    lastDay: "[\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
    lastWeek: "[\u0E27\u0E31\u0E19]dddd[\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E27\u0E25\u0E32] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "\u0E2D\u0E35\u0E01 %s",
    past: "%s\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
    s: "\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
    ss: "%d \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
    m: "1 \u0E19\u0E32\u0E17\u0E35",
    mm: "%d \u0E19\u0E32\u0E17\u0E35",
    h: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
    hh: "%d \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
    d: "1 \u0E27\u0E31\u0E19",
    dd: "%d \u0E27\u0E31\u0E19",
    M: "1 \u0E40\u0E14\u0E37\u0E2D\u0E19",
    MM: "%d \u0E40\u0E14\u0E37\u0E2D\u0E19",
    y: "1 \u0E1B\u0E35",
    yy: "%d \u0E1B\u0E35"
  }
};
var thBeLocale = {
  abbr: "th-be",
  months: "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21_\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C_\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21_\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19_\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21_\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19_\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21_\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21_\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19_\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21_\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19_\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21".split("_"),
  monthsShort: "\u0E21.\u0E04._\u0E01.\u0E1E._\u0E21\u0E35.\u0E04._\u0E40\u0E21.\u0E22._\u0E1E.\u0E04._\u0E21\u0E34.\u0E22._\u0E01.\u0E04._\u0E2A.\u0E04._\u0E01.\u0E22._\u0E15.\u0E04._\u0E1E.\u0E22._\u0E18.\u0E04.".split("_"),
  monthsParseExact: true,
  weekdays: "\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split("_"),
  weekdaysShort: "\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"),
  weekdaysMin: "\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm",
    LLLL: "\u0E27\u0E31\u0E19dddd\u0E17\u0E35\u0E48 D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm"
  },
  meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
  isPM(input2) {
    return input2 === "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07";
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07";
    } else {
      return "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07";
    }
  },
  calendar: {
    sameDay: "[\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
    nextDay: "[\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
    nextWeek: "dddd[\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E27\u0E25\u0E32] LT",
    lastDay: "[\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",
    lastWeek: "[\u0E27\u0E31\u0E19]dddd[\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E27\u0E25\u0E32] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "\u0E2D\u0E35\u0E01 %s",
    past: "%s\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
    s: "\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
    ss: "%d \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
    m: "1 \u0E19\u0E32\u0E17\u0E35",
    mm: "%d \u0E19\u0E32\u0E17\u0E35",
    h: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
    hh: "%d \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
    d: "1 \u0E27\u0E31\u0E19",
    dd: "%d \u0E27\u0E31\u0E19",
    M: "1 \u0E40\u0E14\u0E37\u0E2D\u0E19",
    MM: "%d \u0E40\u0E14\u0E37\u0E2D\u0E19",
    y: "1 \u0E1B\u0E35",
    yy: "%d \u0E1B\u0E35"
  },
  preparse(str, format) {
    const _format = thBeLocale.longDateFormat[format] ? thBeLocale.longDateFormat[format] : format;
    if (_format.indexOf("YYYY", _format.length - "YYYY".length) !== -1) {
      const ddMM = str.substr(0, str.length - 4);
      const yyyy = parseInt(str.substr(str.length - 4), 10) - 543;
      return ddMM + yyyy;
    }
    return str;
  },
  getFullYear(date, isUTC = false) {
    return 543 + (isUTC ? date.getUTCFullYear() : date.getFullYear());
  }
};
//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK
var suffixes = {
  1: "'inci",
  5: "'inci",
  8: "'inci",
  70: "'inci",
  80: "'inci",
  2: "'nci",
  7: "'nci",
  20: "'nci",
  50: "'nci",
  3: "'\xFCnc\xFC",
  4: "'\xFCnc\xFC",
  100: "'\xFCnc\xFC",
  6: "'nc\u0131",
  9: "'uncu",
  10: "'uncu",
  30: "'uncu",
  60: "'\u0131nc\u0131",
  90: "'\u0131nc\u0131"
};
var trLocale = {
  abbr: "tr",
  months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\xFCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
  monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
  weekdays: "Pazar_Pazartesi_Sal\u0131_\xC7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
  weekdaysShort: "Paz_Pts_Sal_\xC7ar_Per_Cum_Cts".split("_"),
  weekdaysMin: "Pz_Pt_Sa_\xC7a_Pe_Cu_Ct".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[bug\xFCn saat] LT",
    nextDay: "[yar\u0131n saat] LT",
    nextWeek: "[gelecek] dddd [saat] LT",
    lastDay: "[d\xFCn] LT",
    lastWeek: "[ge\xE7en] dddd [saat] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s sonra",
    past: "%s \xF6nce",
    s: "birka\xE7 saniye",
    ss: "%d saniye",
    m: "bir dakika",
    mm: "%d dakika",
    h: "bir saat",
    hh: "%d saat",
    d: "bir g\xFCn",
    dd: "%d g\xFCn",
    M: "bir ay",
    MM: "%d ay",
    y: "bir y\u0131l",
    yy: "%d y\u0131l"
  },
  dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
  ordinal(_num) {
    const num = Number(_num);
    if (num === 0) {
      return num + "'\u0131nc\u0131";
    }
    let a = num % 10, b = num % 100 - a, c = num >= 100 ? 100 : null;
    return num + (suffixes[a] || suffixes[b] || suffixes[c]);
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elensúle : https://github.com/Oire
function plural(word, num) {
  let forms2 = word.split("_");
  return num % 10 === 1 && num % 100 !== 11 ? forms2[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms2[1] : forms2[2];
}
function relativeTimeWithPlural(num, withoutSuffix, key) {
  let format = {
    ss: withoutSuffix ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434",
    mm: withoutSuffix ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D" : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D",
    hh: withoutSuffix ? "\u0433\u043E\u0434\u0438\u043D\u0430_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D" : "\u0433\u043E\u0434\u0438\u043D\u0443_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D",
    dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u043D\u0456\u0432",
    MM: "\u043C\u0456\u0441\u044F\u0446\u044C_\u043C\u0456\u0441\u044F\u0446\u0456_\u043C\u0456\u0441\u044F\u0446\u0456\u0432",
    yy: "\u0440\u0456\u043A_\u0440\u043E\u043A\u0438_\u0440\u043E\u043A\u0456\u0432"
  };
  if (key === "m") {
    return withoutSuffix ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430" : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443";
  }
  if (key === "h") {
    return withoutSuffix ? "\u0433\u043E\u0434\u0438\u043D\u0430" : "\u0433\u043E\u0434\u0438\u043D\u0443";
  }
  return num + " " + plural(format[key], +num);
}
function weekdaysCaseReplace(date, format, isUTC) {
  let weekdays = {
    nominative: "\u043D\u0435\u0434\u0456\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"),
    accusative: "\u043D\u0435\u0434\u0456\u043B\u044E_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E_\u0441\u0443\u0431\u043E\u0442\u0443".split("_"),
    genitive: "\u043D\u0435\u0434\u0456\u043B\u0456_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043A\u0430_\u0432\u0456\u0432\u0442\u043E\u0440\u043A\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u0456_\u0441\u0443\u0431\u043E\u0442\u0438".split("_")
  };
  if (!date) {
    return weekdays.nominative;
  }
  let nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? "genitive" : "nominative";
  return weekdays[nounCase][getDayOfWeek(date, isUTC)];
}
function processHoursFunction(str) {
  return function(date) {
    return str + "\u043E" + (getHours(date) === 11 ? "\u0431" : "") + "] LT";
  };
}
var ukLocale = {
  abbr: "uk",
  months: {
    format: "\u0441\u0456\u0447\u043D\u044F_\u043B\u044E\u0442\u043E\u0433\u043E_\u0431\u0435\u0440\u0435\u0437\u043D\u044F_\u043A\u0432\u0456\u0442\u043D\u044F_\u0442\u0440\u0430\u0432\u043D\u044F_\u0447\u0435\u0440\u0432\u043D\u044F_\u043B\u0438\u043F\u043D\u044F_\u0441\u0435\u0440\u043F\u043D\u044F_\u0432\u0435\u0440\u0435\u0441\u043D\u044F_\u0436\u043E\u0432\u0442\u043D\u044F_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043D\u044F".split("_"),
    standalone: "\u0441\u0456\u0447\u0435\u043D\u044C_\u043B\u044E\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u043A\u0432\u0456\u0442\u0435\u043D\u044C_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u0435\u0440\u0432\u0435\u043D\u044C_\u043B\u0438\u043F\u0435\u043D\u044C_\u0441\u0435\u0440\u043F\u0435\u043D\u044C_\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0436\u043E\u0432\u0442\u0435\u043D\u044C_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043D\u044C".split("_")
  },
  monthsShort: "\u0441\u0456\u0447_\u043B\u044E\u0442_\u0431\u0435\u0440_\u043A\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043B\u0438\u043F_\u0441\u0435\u0440\u043F_\u0432\u0435\u0440_\u0436\u043E\u0432\u0442_\u043B\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),
  weekdays: weekdaysCaseReplace,
  weekdaysShort: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
  weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY \u0440.",
    LLL: "D MMMM YYYY \u0440., HH:mm",
    LLLL: "dddd, D MMMM YYYY \u0440., HH:mm"
  },
  calendar: {
    sameDay: processHoursFunction("[\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 "),
    nextDay: processHoursFunction("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
    lastDay: processHoursFunction("[\u0412\u0447\u043E\u0440\u0430 "),
    nextWeek: processHoursFunction("[\u0423] dddd ["),
    lastWeek(date) {
      switch (getDayOfWeek(date)) {
        case 0:
        case 3:
        case 5:
        case 6:
          return processHoursFunction("[\u041C\u0438\u043D\u0443\u043B\u043E\u0457] dddd [")(date);
        case 1:
        case 2:
        case 4:
          return processHoursFunction("[\u041C\u0438\u043D\u0443\u043B\u043E\u0433\u043E] dddd [")(date);
      }
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "\u0437\u0430 %s",
    past: "%s \u0442\u043E\u043C\u0443",
    s: "\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434",
    ss: relativeTimeWithPlural,
    m: relativeTimeWithPlural,
    mm: relativeTimeWithPlural,
    h: "\u0433\u043E\u0434\u0438\u043D\u0443",
    hh: relativeTimeWithPlural,
    d: "\u0434\u0435\u043D\u044C",
    dd: relativeTimeWithPlural,
    M: "\u043C\u0456\u0441\u044F\u0446\u044C",
    MM: relativeTimeWithPlural,
    y: "\u0440\u0456\u043A",
    yy: relativeTimeWithPlural
  },
  // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
  meridiemParse: /ночі|ранку|дня|вечора/,
  isPM(input2) {
    return /^(дня|вечора)$/.test(input2);
  },
  meridiem(hour, minute, isLower) {
    if (hour < 4) {
      return "\u043D\u043E\u0447\u0456";
    } else if (hour < 12) {
      return "\u0440\u0430\u043D\u043A\u0443";
    } else if (hour < 17) {
      return "\u0434\u043D\u044F";
    } else {
      return "\u0432\u0435\u0447\u043E\u0440\u0430";
    }
  },
  dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
  ordinal(_num, period) {
    const num = Number(_num);
    switch (period) {
      case "M":
      case "d":
      case "DDD":
      case "w":
      case "W":
        return num + "-\u0439";
      case "D":
        return num + "-\u0433\u043E";
      default:
        return num.toString();
    }
  },
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 7
    // The week that contains Jan 1st is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Việt Nam [vi]
//! author : Chris Gedrim : https://github.com/chrisgedrim
var viLocale = {
  abbr: "vi",
  months: "th\xE1ng 1_th\xE1ng 2_th\xE1ng 3_th\xE1ng 4_th\xE1ng 5_th\xE1ng 6_th\xE1ng 7_th\xE1ng 8_th\xE1ng 9_th\xE1ng 10_th\xE1ng 11_th\xE1ng 12".split("_"),
  monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
  monthsParseExact: true,
  weekdays: "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\xE1u_th\u1EE9 b\u1EA3y".split("_"),
  weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
  weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
  weekdaysParseExact: true,
  meridiemParse: /sa|ch/i,
  isPM(input2) {
    return /^ch$/i.test(input2);
  },
  meridiem(hours, minutes, isLower) {
    if (hours < 12) {
      return isLower ? "sa" : "SA";
    } else {
      return isLower ? "ch" : "CH";
    }
  },
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM [n\u0103m] YYYY",
    LLL: "D MMMM [n\u0103m] YYYY HH:mm",
    LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
    l: "DD/M/YYYY",
    ll: "D MMM YYYY",
    lll: "D MMM YYYY HH:mm",
    llll: "ddd, D MMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[H\xF4m nay l\xFAc] LT",
    nextDay: "[Ng\xE0y mai l\xFAc] LT",
    nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\xFAc] LT",
    lastDay: "[H\xF4m qua l\xFAc] LT",
    lastWeek: "dddd [tu\u1EA7n tr\u01B0\u1EDBc l\xFAc] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s t\u1EDBi",
    past: "%s tr\u01B0\u1EDBc",
    s: "v\xE0i gi\xE2y",
    ss: "%d gi\xE2y",
    m: "m\u1ED9t ph\xFAt",
    mm: "%d ph\xFAt",
    h: "m\u1ED9t gi\u1EDD",
    hh: "%d gi\u1EDD",
    d: "m\u1ED9t ng\xE0y",
    dd: "%d ng\xE0y",
    M: "m\u1ED9t th\xE1ng",
    MM: "%d th\xE1ng",
    y: "m\u1ED9t n\u0103m",
    yy: "%d n\u0103m"
  },
  dayOfMonthOrdinalParse: /\d{1,2}/,
  ordinal(_num) {
    return "" + _num;
  },
  week: {
    dow: 1,
    // Thứ Hai là ngày đầu tuần.
    doy: 4
    // Tuần chứa ngày 4 tháng 1 là tuần đầu tiên trong năm.
  }
};
//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
var zhCnLocale = {
  abbr: "zh-cn",
  months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
  monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
  weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
  weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),
  weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "YYYY\u5E74M\u6708D\u65E5",
    LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",
    LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",
    l: "YYYY/M/D",
    ll: "YYYY\u5E74M\u6708D\u65E5",
    lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
    llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm"
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === "\u51CC\u6668" || meridiem === "\u65E9\u4E0A" || meridiem === "\u4E0A\u5348") {
      return hour;
    } else if (meridiem === "\u4E0B\u5348" || meridiem === "\u665A\u4E0A") {
      return hour + 12;
    } else {
      return hour >= 11 ? hour : hour + 12;
    }
  },
  meridiem(hour, minute, isLower) {
    let hm = hour * 100 + minute;
    if (hm < 600) {
      return "\u51CC\u6668";
    } else if (hm < 900) {
      return "\u65E9\u4E0A";
    } else if (hm < 1130) {
      return "\u4E0A\u5348";
    } else if (hm < 1230) {
      return "\u4E2D\u5348";
    } else if (hm < 1800) {
      return "\u4E0B\u5348";
    } else {
      return "\u665A\u4E0A";
    }
  },
  calendar: {
    sameDay: "[\u4ECA\u5929]LT",
    nextDay: "[\u660E\u5929]LT",
    nextWeek: "[\u4E0B]ddddLT",
    lastDay: "[\u6628\u5929]LT",
    lastWeek: "[\u4E0A]ddddLT",
    sameElse: "L"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
  ordinal(_num, period) {
    const num = Number(_num);
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return num + "\u65E5";
      case "M":
        return num + "\u6708";
      case "w":
      case "W":
        return num + "\u5468";
      default:
        return num.toString();
    }
  },
  relativeTime: {
    future: "%s\u5185",
    past: "%s\u524D",
    s: "\u51E0\u79D2",
    ss: "%d \u79D2",
    m: "1 \u5206\u949F",
    mm: "%d \u5206\u949F",
    h: "1 \u5C0F\u65F6",
    hh: "%d \u5C0F\u65F6",
    d: "1 \u5929",
    dd: "%d \u5929",
    M: "1 \u4E2A\u6708",
    MM: "%d \u4E2A\u6708",
    y: "1 \u5E74",
    yy: "%d \u5E74"
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
//! moment.js locale configuration
//! locale : Persian [fa]
//! author : Meysam Bahadori: https://github.com/MeysamBahadori
var symbolMap = {
  1: "\u0661",
  2: "\u0662",
  3: "\u0663",
  4: "\u0664",
  5: "\u0665",
  6: "\u0666",
  7: "\u0667",
  8: "\u0668",
  9: "\u0669",
  0: "\u0660"
};
var numberMap = {
  "\u0661": "1",
  "\u0662": "2",
  "\u0663": "3",
  "\u0664": "4",
  "\u0665": "5",
  "\u0666": "6",
  "\u0667": "7",
  "\u0668": "8",
  "\u0669": "9",
  "\u0660": "0"
};
var pluralForm = function(num) {
  return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
};
var plurals = {
  s: ["\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u062B\u0627\u0646\u06CC\u0647", "\u06CC\u06A9 \u062B\u0627\u0646\u06CC\u0647", ["\u062F\u0648 \u062B\u0627\u0646\u06CC\u0647", "\u062F\u0648 \u062B\u0627\u0646\u06CC\u0647"], "%d \u062B\u0627\u0646\u06CC\u0647", "%d \u062B\u0627\u0646\u06CC\u0647", "%d \u062B\u0627\u0646\u06CC\u0647"],
  m: ["\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u062F\u0642\u06CC\u0642\u0647", "\u06CC\u06A9 \u062F\u0642\u06CC\u0642\u0647", ["\u062F\u0648 \u062F\u0642\u06CC\u0642\u0647", "\u062F\u0648 \u062F\u0642\u06CC\u0642\u0647"], "%d \u062F\u0642\u06CC\u0642\u0647", "%d \u062F\u0642\u06CC\u0642\u0647", "%d \u062F\u0642\u06CC\u0642\u0647"],
  h: ["\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u0633\u0627\u0639\u062A", "\u06CC\u06A9 \u0633\u0627\u0639\u062A", ["\u062F\u0648 \u0633\u0627\u0639\u062A", "\u062F\u0648 \u0633\u0627\u0639\u062A"], "%d \u0633\u0627\u0639\u062A", "%d \u0633\u0627\u0639\u062A", "%d \u0633\u0627\u0639\u062A"],
  d: ["\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u0631\u0648\u0632", "\u06CC\u06A9 \u0631\u0648\u0632", ["\u062F\u0648 \u0631\u0648\u0632", "\u062F\u0648 \u0631\u0648\u0632"], "%d \u0631\u0648\u0632", "%d \u0631\u0648\u0632", "%d \u0631\u0648\u0632"],
  M: ["\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u0645\u0627\u0647", "\u06CC\u06A9 \u0645\u0627\u0647", ["\u062F\u0648 \u0645\u0627\u0647", "\u062F\u0648 \u0645\u0627\u0647"], "%d \u0645\u0627\u0647", "%d \u0645\u0627\u0647", "%d \u0645\u0627\u0647"],
  y: ["\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u0633\u0627\u0644", "\u06CC\u06A9 \u0633\u0627\u0644", ["\u062F\u0648 \u0633\u0627\u0644", "\u062F\u0648 \u0633\u0627\u0644"], "%d \u0633\u0627\u0644", "%d \u0633\u0627\u0644", "%d \u0633\u0627\u0644"]
};
var pluralize = function(u) {
  return function(num, withoutSuffix) {
    const f = pluralForm(num);
    let str = plurals[u][pluralForm(num)];
    if (f === 2) {
      str = str[withoutSuffix ? 0 : 1];
    }
    return str.replace(/%d/i, num.toString());
  };
};
var months = [
  "\u0698\u0627\u0646\u0648\u06CC\u0647",
  "\u0641\u0648\u0631\u06CC\u0647",
  "\u0645\u0627\u0631\u0633",
  "\u0622\u0648\u0631\u06CC\u0644",
  "\u0645\u06CC",
  "\u0698\u0648\u0626\u0646",
  "\u062C\u0648\u0644\u0627\u06CC",
  "\u0622\u06AF\u0648\u0633\u062A",
  "\u0633\u067E\u062A\u0627\u0645\u0628\u0631",
  "\u0627\u06A9\u062A\u0628\u0631",
  "\u0646\u0648\u0627\u0645\u0628\u0631",
  "\u062F\u0633\u0627\u0645\u0628\u0631"
];
var faLocale = {
  abbr: "fa",
  months,
  monthsShort: months,
  weekdays: "\u06CC\u06A9\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647 \u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C \u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
  weekdaysShort: "\u06CC\u06A9\u0634\u0646\u0628\u0647_\u062F\u0648\u200C\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u200C\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
  weekdaysMin: "\u06CC_\u062F_\u0633_\u0686_\u067E_\u062C_\u0634".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "D/\u200FM/\u200FYYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  meridiemParse: /ص|م/,
  isPM(input2) {
    return "\u0645" === input2;
  },
  meridiem(hour, minute, isLower) {
    if (hour < 12) {
      return "\u0635";
    } else {
      return "\u0645";
    }
  },
  calendar: {
    sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u062F\u0631 \u0633\u0627\u0639\u062A] LT",
    nextDay: "[\u0641\u0631\u062F\u0627 \u062F\u0631 \u0633\u0627\u0639\u062A] LT",
    nextWeek: "dddd [\u062F\u0631 \u0633\u0627\u0639\u062A] LT",
    lastDay: "[\u062F\u06CC\u0631\u0648\u0632 \u062F\u0631 \u0633\u0627\u0639\u062A] LT",
    lastWeek: "dddd [\u062F\u0631 \u0633\u0627\u0639\u062A] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "\u0628\u0639\u062F %s",
    past: "\u067E\u06CC\u0634 %s",
    s: pluralize("s"),
    ss: pluralize("s"),
    m: pluralize("m"),
    mm: pluralize("m"),
    h: pluralize("h"),
    hh: pluralize("h"),
    d: pluralize("d"),
    dd: pluralize("d"),
    M: pluralize("M"),
    MM: pluralize("M"),
    y: pluralize("y"),
    yy: pluralize("y")
  },
  preparse(str) {
    return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(match) {
      return numberMap[match];
    }).replace(/،/g, ",");
  },
  postformat(str) {
    return str.replace(/\d/g, function(match) {
      return symbolMap[match];
    }).replace(/,/g, "\u060C");
  },
  week: {
    dow: 6,
    // Saturday is the first day of the week.
    doy: 80
    // The week that contains March 21th is the first week of the year.
  }
};

// node_modules/ngx-bootstrap/mini-ngrx/fesm2022/ngx-bootstrap-mini-ngrx.mjs
var MiniState = class extends BehaviorSubject {
  constructor(_initialState, actionsDispatcher$, reducer) {
    super(_initialState);
    const actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
    const state$ = actionInQueue$.pipe(scan((state2, action) => {
      if (!action) {
        return state2;
      }
      return reducer(state2, action);
    }, _initialState));
    state$.subscribe((value) => this.next(value));
  }
};
var MiniStore = class _MiniStore extends Observable {
  constructor(_dispatcher, _reducer, state$) {
    super();
    this._dispatcher = _dispatcher;
    this._reducer = _reducer;
    this.source = state$;
  }
  select(pathOrMapFn) {
    const mapped$ = this.source?.pipe(map(pathOrMapFn)) || new Observable().pipe(map(pathOrMapFn));
    return mapped$.pipe(distinctUntilChanged());
  }
  lift(operator) {
    const store = new _MiniStore(this._dispatcher, this._reducer, this);
    store.operator = operator;
    return store;
  }
  dispatch(action) {
    this._dispatcher.next(action);
  }
  next(action) {
    this._dispatcher.next(action);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(err) {
    this._dispatcher.error(err);
  }
  complete() {
  }
};

// node_modules/ngx-bootstrap/timepicker/fesm2022/ngx-bootstrap-timepicker.mjs
function TimepickerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275text(1, "\xA0\xA0\xA0");
    \u0275\u0275domElementEnd();
  }
}
function TimepickerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td")(1, "a", 1);
    \u0275\u0275domListener("click", function TimepickerComponent_Conditional_7_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeMinutes(ctx_r1.minuteStep()));
    });
    \u0275\u0275domElement(2, "span", 2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275text(1, "\xA0");
    \u0275\u0275domElementEnd();
  }
}
function TimepickerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td")(1, "a", 1);
    \u0275\u0275domListener("click", function TimepickerComponent_Conditional_9_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeSeconds(ctx_r1.secondsStep()));
    });
    \u0275\u0275domElement(2, "span", 2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !ctx_r1.canIncrementSeconds || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275text(1, "\xA0\xA0\xA0");
    \u0275\u0275domElementEnd();
  }
}
function TimepickerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "td");
  }
}
function TimepickerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275text(1, "\xA0:\xA0");
    \u0275\u0275domElementEnd();
  }
}
function TimepickerComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td", 3)(1, "input", 4);
    \u0275\u0275domListener("wheel", function TimepickerComponent_Conditional_16_Template_input_wheel_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.prevDef($event);
      return \u0275\u0275resetView(ctx_r1.changeMinutes(ctx_r1.minuteStep() * ctx_r1.wheelSign($event), "wheel"));
    })("keydown.ArrowUp", function TimepickerComponent_Conditional_16_Template_input_keydown_ArrowUp_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeMinutes(ctx_r1.minuteStep(), "key"));
    })("keydown.ArrowDown", function TimepickerComponent_Conditional_16_Template_input_keydown_ArrowDown_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeMinutes(-ctx_r1.minuteStep(), "key"));
    })("change", function TimepickerComponent_Conditional_16_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateMinutes($event.target));
    });
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("has-error", ctx_r1.invalidMinutes);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ctx_r1.invalidMinutes);
    \u0275\u0275domProperty("placeholder", ctx_r1.minutesPlaceholder())("readOnly", ctx_r1.readonlyInput())("disabled", ctx_r1.disabled)("value", ctx_r1.minutes);
    \u0275\u0275attribute("aria-label", ctx_r1.labelMinutes);
  }
}
function TimepickerComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275text(1, "\xA0:\xA0");
    \u0275\u0275domElementEnd();
  }
}
function TimepickerComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td", 3)(1, "input", 4);
    \u0275\u0275domListener("wheel", function TimepickerComponent_Conditional_18_Template_input_wheel_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.prevDef($event);
      return \u0275\u0275resetView(ctx_r1.changeSeconds(ctx_r1.secondsStep() * ctx_r1.wheelSign($event), "wheel"));
    })("keydown.ArrowUp", function TimepickerComponent_Conditional_18_Template_input_keydown_ArrowUp_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeSeconds(ctx_r1.secondsStep(), "key"));
    })("keydown.ArrowDown", function TimepickerComponent_Conditional_18_Template_input_keydown_ArrowDown_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeSeconds(-ctx_r1.secondsStep(), "key"));
    })("change", function TimepickerComponent_Conditional_18_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSeconds($event.target));
    });
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("has-error", ctx_r1.invalidSeconds);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ctx_r1.invalidSeconds);
    \u0275\u0275domProperty("placeholder", ctx_r1.secondsPlaceholder())("readOnly", ctx_r1.readonlyInput())("disabled", ctx_r1.disabled)("value", ctx_r1.seconds);
    \u0275\u0275attribute("aria-label", ctx_r1.labelSeconds);
  }
}
function TimepickerComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275text(1, "\xA0\xA0\xA0");
    \u0275\u0275domElementEnd();
  }
}
function TimepickerComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td")(1, "button", 7);
    \u0275\u0275domListener("click", function TimepickerComponent_Conditional_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMeridian());
    });
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !ctx_r1.isEditable || !ctx_r1.canToggleMeridian);
    \u0275\u0275domProperty("disabled", !ctx_r1.isEditable || !ctx_r1.canToggleMeridian);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.meridian, " ");
  }
}
function TimepickerComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275text(1, "\xA0\xA0\xA0");
    \u0275\u0275domElementEnd();
  }
}
function TimepickerComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td")(1, "a", 1);
    \u0275\u0275domListener("click", function TimepickerComponent_Conditional_26_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeMinutes(-ctx_r1.minuteStep()));
    });
    \u0275\u0275domElement(2, "span", 6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !ctx_r1.canDecrementMinutes || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275text(1, "\xA0");
    \u0275\u0275domElementEnd();
  }
}
function TimepickerComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td")(1, "a", 1);
    \u0275\u0275domListener("click", function TimepickerComponent_Conditional_28_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeSeconds(-ctx_r1.secondsStep()));
    });
    \u0275\u0275domElement(2, "span", 6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !ctx_r1.canDecrementSeconds || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275text(1, "\xA0\xA0\xA0");
    \u0275\u0275domElementEnd();
  }
}
function TimepickerComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "td");
  }
}
var TimepickerActions = class _TimepickerActions {
  static {
    this.WRITE_VALUE = "[timepicker] write value from ng model";
  }
  static {
    this.CHANGE_HOURS = "[timepicker] change hours";
  }
  static {
    this.CHANGE_MINUTES = "[timepicker] change minutes";
  }
  static {
    this.CHANGE_SECONDS = "[timepicker] change seconds";
  }
  static {
    this.SET_TIME_UNIT = "[timepicker] set time unit";
  }
  static {
    this.UPDATE_CONTROLS = "[timepicker] update controls";
  }
  writeValue(value) {
    return {
      type: _TimepickerActions.WRITE_VALUE,
      payload: value
    };
  }
  changeHours(event) {
    return {
      type: _TimepickerActions.CHANGE_HOURS,
      payload: event
    };
  }
  changeMinutes(event) {
    return {
      type: _TimepickerActions.CHANGE_MINUTES,
      payload: event
    };
  }
  changeSeconds(event) {
    return {
      type: _TimepickerActions.CHANGE_SECONDS,
      payload: event
    };
  }
  setTime(value) {
    return {
      type: _TimepickerActions.SET_TIME_UNIT,
      payload: value
    };
  }
  updateControls(value) {
    return {
      type: _TimepickerActions.UPDATE_CONTROLS,
      payload: value
    };
  }
  static {
    this.\u0275fac = function TimepickerActions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimepickerActions)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _TimepickerActions,
      factory: _TimepickerActions.\u0275fac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerActions, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], null, null);
})();
var dex = 10;
var hoursPerDay = 24;
var hoursPerDayHalf = 12;
var minutesPerHour = 60;
var secondsPerMinute = 60;
function isValidDate(value) {
  if (!value) {
    return false;
  }
  if (value instanceof Date && isNaN(value.getHours())) {
    return false;
  }
  if (typeof value === "string") {
    return isValidDate(new Date(value));
  }
  return true;
}
function isValidLimit(controls, newDate) {
  if (controls.min && newDate < controls.min) {
    return false;
  }
  if (controls.max && newDate > controls.max) {
    return false;
  }
  return true;
}
function toNumber(value) {
  if (typeof value === "undefined") {
    return NaN;
  }
  if (typeof value === "number") {
    return value;
  }
  return parseInt(value, dex);
}
function parseHours(value, isPM = false) {
  const hour = toNumber(value);
  if (isNaN(hour) || hour < 0 || hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
    return NaN;
  }
  return hour;
}
function parseMinutes(value) {
  const minute = toNumber(value);
  if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
    return NaN;
  }
  return minute;
}
function parseSeconds(value) {
  const seconds = toNumber(value);
  if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
    return NaN;
  }
  return seconds;
}
function parseTime(value) {
  if (typeof value === "string") {
    return new Date(value);
  }
  return value;
}
function changeTime(value, diff) {
  if (!value) {
    return changeTime(createDate2(/* @__PURE__ */ new Date(), 0, 0, 0), diff);
  }
  if (!diff) {
    return value;
  }
  let hour = value.getHours();
  let minutes = value.getMinutes();
  let seconds = value.getSeconds();
  if (diff.hour) {
    hour = hour + toNumber(diff.hour);
  }
  if (diff.minute) {
    minutes = minutes + toNumber(diff.minute);
  }
  if (diff.seconds) {
    seconds = seconds + toNumber(diff.seconds);
  }
  return createDate2(value, hour, minutes, seconds);
}
function setTime2(value, opts) {
  let hour = parseHours(opts.hour);
  const minute = parseMinutes(opts.minute);
  const seconds = parseSeconds(opts.seconds) || 0;
  if (opts.isPM && hour !== 12) {
    hour += hoursPerDayHalf;
  }
  if (!value) {
    if (!isNaN(hour) && !isNaN(minute)) {
      return createDate2(/* @__PURE__ */ new Date(), hour, minute, seconds);
    }
    return value;
  }
  if (isNaN(hour) || isNaN(minute)) {
    return value;
  }
  return createDate2(value, hour, minute, seconds);
}
function createDate2(value, hours, minutes, seconds) {
  const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
  newValue.setFullYear(value.getFullYear());
  newValue.setMonth(value.getMonth());
  newValue.setDate(value.getDate());
  return newValue;
}
function padNumber(value) {
  const _value = value.toString();
  if (_value.length > 1) {
    return _value;
  }
  return `0${_value}`;
}
function isHourInputValid(hours, isPM) {
  return !isNaN(parseHours(hours, isPM));
}
function isMinuteInputValid(minutes) {
  return !isNaN(parseMinutes(minutes));
}
function isSecondInputValid(seconds) {
  return !isNaN(parseSeconds(seconds));
}
function isInputLimitValid(diff, max, min) {
  const newDate = setTime2(/* @__PURE__ */ new Date(), diff);
  if (!newDate) {
    return false;
  }
  if (max && newDate > max) {
    return false;
  }
  if (min && newDate < min) {
    return false;
  }
  return true;
}
function isOneOfDatesEmpty(hours, minutes, seconds) {
  return hours.length === 0 || minutes.length === 0 || seconds.length === 0;
}
function isInputValid(hours, minutes = "0", seconds = "0", isPM) {
  return isHourInputValid(hours, isPM) && isMinuteInputValid(minutes) && isSecondInputValid(seconds);
}
function canChangeValue(state2, event) {
  if (state2.readonlyInput || state2.disabled) {
    return false;
  }
  if (event) {
    if (event.source === "wheel" && !state2.mousewheel) {
      return false;
    }
    if (event.source === "key" && !state2.arrowkeys) {
      return false;
    }
  }
  return true;
}
function canChangeHours(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementHours) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementHours) {
    return false;
  }
  return true;
}
function canChangeMinutes(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementMinutes) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementMinutes) {
    return false;
  }
  return true;
}
function canChangeSeconds(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementSeconds) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementSeconds) {
    return false;
  }
  return true;
}
function getControlsValue(state2) {
  const {
    hourStep,
    minuteStep,
    secondsStep,
    readonlyInput,
    disabled,
    mousewheel,
    arrowkeys,
    showSpinners,
    showMeridian,
    showSeconds,
    meridians,
    min,
    max
  } = state2;
  return {
    hourStep,
    minuteStep,
    secondsStep,
    readonlyInput,
    disabled,
    mousewheel,
    arrowkeys,
    showSpinners,
    showMeridian,
    showSeconds,
    meridians,
    min,
    max
  };
}
function timepickerControls(value, state2) {
  const hoursPerDay2 = 24;
  const hoursPerDayHalf2 = 12;
  const {
    min,
    max,
    hourStep,
    minuteStep,
    secondsStep,
    showSeconds
  } = state2;
  const res = {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  };
  if (!value) {
    return res;
  }
  if (max) {
    const _newHour = changeTime(value, {
      hour: hourStep
    });
    res.canIncrementHours = max > _newHour && value.getHours() + hourStep < hoursPerDay2;
    if (!res.canIncrementHours) {
      const _newMinutes = changeTime(value, {
        minute: minuteStep
      });
      res.canIncrementMinutes = showSeconds ? max > _newMinutes : max >= _newMinutes;
    }
    if (!res.canIncrementMinutes) {
      const _newSeconds = changeTime(value, {
        seconds: secondsStep
      });
      res.canIncrementSeconds = max >= _newSeconds;
    }
    if (value.getHours() < hoursPerDayHalf2) {
      res.canToggleMeridian = changeTime(value, {
        hour: hoursPerDayHalf2
      }) < max;
    }
  }
  if (min) {
    const _newHour = changeTime(value, {
      hour: -hourStep
    });
    res.canDecrementHours = min < _newHour;
    if (!res.canDecrementHours) {
      const _newMinutes = changeTime(value, {
        minute: -minuteStep
      });
      res.canDecrementMinutes = showSeconds ? min < _newMinutes : min <= _newMinutes;
    }
    if (!res.canDecrementMinutes) {
      const _newSeconds = changeTime(value, {
        seconds: -secondsStep
      });
      res.canDecrementSeconds = min <= _newSeconds;
    }
    if (value.getHours() >= hoursPerDayHalf2) {
      res.canToggleMeridian = changeTime(value, {
        hour: -hoursPerDayHalf2
      }) > min;
    }
  }
  return res;
}
var TimepickerConfig = class _TimepickerConfig {
  constructor() {
    this.hourStep = 1;
    this.minuteStep = 5;
    this.secondsStep = 10;
    this.showMeridian = true;
    this.meridians = ["AM", "PM"];
    this.readonlyInput = false;
    this.disabled = false;
    this.allowEmptyTime = false;
    this.mousewheel = true;
    this.arrowkeys = true;
    this.showSpinners = true;
    this.showSeconds = false;
    this.showMinutes = true;
    this.hoursPlaceholder = "HH";
    this.minutesPlaceholder = "MM";
    this.secondsPlaceholder = "SS";
    this.ariaLabelHours = "hours";
    this.ariaLabelMinutes = "minutes";
    this.ariaLabelSeconds = "seconds";
  }
  static {
    this.\u0275fac = function TimepickerConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimepickerConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _TimepickerConfig,
      factory: _TimepickerConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var initialState = {
  value: void 0,
  config: new TimepickerConfig(),
  controls: {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  }
};
function timepickerReducer(state2 = initialState, action) {
  switch (action.type) {
    case TimepickerActions.WRITE_VALUE: {
      return Object.assign({}, state2, {
        value: action.payload
      });
    }
    case TimepickerActions.CHANGE_HOURS: {
      if (!canChangeValue(state2.config, action.payload) || !canChangeHours(action.payload, state2.controls)) {
        return state2;
      }
      const _newTime = changeTime(state2.value, {
        hour: action.payload.step
      });
      if ((state2.config.max || state2.config.min) && !isValidLimit(state2.config, _newTime)) {
        return state2;
      }
      return Object.assign({}, state2, {
        value: _newTime
      });
    }
    case TimepickerActions.CHANGE_MINUTES: {
      if (!canChangeValue(state2.config, action.payload) || !canChangeMinutes(action.payload, state2.controls)) {
        return state2;
      }
      const _newTime = changeTime(state2.value, {
        minute: action.payload.step
      });
      if ((state2.config.max || state2.config.min) && !isValidLimit(state2.config, _newTime)) {
        return state2;
      }
      return Object.assign({}, state2, {
        value: _newTime
      });
    }
    case TimepickerActions.CHANGE_SECONDS: {
      if (!canChangeValue(state2.config, action.payload) || !canChangeSeconds(action.payload, state2.controls)) {
        return state2;
      }
      const _newTime = changeTime(state2.value, {
        seconds: action.payload.step
      });
      if ((state2.config.max || state2.config.min) && !isValidLimit(state2.config, _newTime)) {
        return state2;
      }
      return Object.assign({}, state2, {
        value: _newTime
      });
    }
    case TimepickerActions.SET_TIME_UNIT: {
      if (!canChangeValue(state2.config)) {
        return state2;
      }
      const _newTime = setTime2(state2.value, action.payload);
      return Object.assign({}, state2, {
        value: _newTime
      });
    }
    case TimepickerActions.UPDATE_CONTROLS: {
      const _newControlsState = timepickerControls(state2.value, action.payload);
      const _newState = {
        value: state2.value,
        config: action.payload,
        controls: _newControlsState
      };
      if (state2.config.showMeridian !== _newState.config.showMeridian) {
        if (state2.value) {
          _newState.value = new Date(state2.value);
        }
      }
      return Object.assign({}, state2, _newState);
    }
    default:
      return state2;
  }
}
var TimepickerStore = class _TimepickerStore extends MiniStore {
  constructor() {
    const _dispatcher = new BehaviorSubject({
      type: "[mini-ngrx] dispatcher init"
    });
    const state2 = new MiniState(initialState, _dispatcher, timepickerReducer);
    super(_dispatcher, timepickerReducer, state2);
  }
  static {
    this.\u0275fac = function TimepickerStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimepickerStore)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _TimepickerStore,
      factory: _TimepickerStore.\u0275fac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerStore, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [], null);
})();
var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimepickerComponent),
  multi: true
};
var TimepickerComponent = class _TimepickerComponent {
  // Helper method to convert input signals to TimepickerComponentState
  getComponentState() {
    return {
      hourStep: this.hourStep(),
      minuteStep: this.minuteStep(),
      secondsStep: this.secondsStep(),
      readonlyInput: this.readonlyInput(),
      disabled: this.disabled,
      mousewheel: this.mousewheel(),
      arrowkeys: this.arrowkeys(),
      showSpinners: this.showSpinners(),
      showMeridian: this.showMeridian(),
      showSeconds: this.showSeconds(),
      meridians: this.meridians(),
      min: this.min(),
      max: this.max()
    };
  }
  constructor(_config, _cd, _store, _timepickerActions) {
    this._config = _config;
    this._cd = _cd;
    this._store = _store;
    this._timepickerActions = _timepickerActions;
    this.hourStep = input(this._config.hourStep, ...ngDevMode ? [{
      debugName: "hourStep"
    }] : []);
    this.minuteStep = input(this._config.minuteStep, ...ngDevMode ? [{
      debugName: "minuteStep"
    }] : []);
    this.secondsStep = input(this._config.secondsStep, ...ngDevMode ? [{
      debugName: "secondsStep"
    }] : []);
    this.readonlyInput = input(this._config.readonlyInput, ...ngDevMode ? [{
      debugName: "readonlyInput"
    }] : []);
    this.disabledInput = input(this._config.disabled, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "disabledInput"
    } : {}), {
      alias: "disabled"
    }));
    this.mousewheel = input(this._config.mousewheel, ...ngDevMode ? [{
      debugName: "mousewheel"
    }] : []);
    this.arrowkeys = input(this._config.arrowkeys, ...ngDevMode ? [{
      debugName: "arrowkeys"
    }] : []);
    this.showSpinners = input(this._config.showSpinners, ...ngDevMode ? [{
      debugName: "showSpinners"
    }] : []);
    this.showMeridian = input(this._config.showMeridian, ...ngDevMode ? [{
      debugName: "showMeridian"
    }] : []);
    this.showMinutes = input(this._config.showMinutes, ...ngDevMode ? [{
      debugName: "showMinutes"
    }] : []);
    this.showSeconds = input(this._config.showSeconds, ...ngDevMode ? [{
      debugName: "showSeconds"
    }] : []);
    this.meridians = input(this._config.meridians, ...ngDevMode ? [{
      debugName: "meridians"
    }] : []);
    this.min = input(this._config.min, ...ngDevMode ? [{
      debugName: "min"
    }] : []);
    this.max = input(this._config.max, ...ngDevMode ? [{
      debugName: "max"
    }] : []);
    this.hoursPlaceholder = input(this._config.hoursPlaceholder, ...ngDevMode ? [{
      debugName: "hoursPlaceholder"
    }] : []);
    this.minutesPlaceholder = input(this._config.minutesPlaceholder, ...ngDevMode ? [{
      debugName: "minutesPlaceholder"
    }] : []);
    this.secondsPlaceholder = input(this._config.secondsPlaceholder, ...ngDevMode ? [{
      debugName: "secondsPlaceholder"
    }] : []);
    this.isValid = output();
    this.meridianChange = output();
    this.hours = "";
    this.minutes = "";
    this.seconds = "";
    this.meridian = "";
    this.disabled = false;
    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false;
    this.labelHours = "hours";
    this.labelMinutes = "minutes";
    this.labelSeconds = "seconds";
    this.canIncrementHours = true;
    this.canIncrementMinutes = true;
    this.canIncrementSeconds = true;
    this.canDecrementHours = true;
    this.canDecrementMinutes = true;
    this.canDecrementSeconds = true;
    this.canToggleMeridian = true;
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.config = _config;
    this.timepickerSub = _store.select((state2) => state2.value).subscribe((value) => {
      this._renderTime(value);
      this.onChange(value);
      this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this.getComponentState())));
    });
    _store.select((state2) => state2.controls).subscribe((controlsState) => {
      const isTimepickerInputValid = isInputValid(this.hours, this.minutes, this.seconds, this.isPM());
      const isValidResult = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
      this.isValid.emit(isValidResult);
      Object.assign(this, controlsState);
      _cd.markForCheck();
    });
  }
  /** @deprecated - please use `isEditable` instead */
  get isSpinnersVisible() {
    return this.showSpinners() && !this.readonlyInput();
  }
  get isEditable() {
    return !(this.readonlyInput() || this.disabled);
  }
  resetValidation() {
    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false;
  }
  isPM() {
    return this.showMeridian() && this.meridian === this.meridians()[1];
  }
  prevDef($event) {
    $event.preventDefault();
  }
  wheelSign($event) {
    return Math.sign($event.deltaY || 0) * -1;
  }
  ngOnChanges() {
    this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this.getComponentState())));
  }
  changeHours(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeHours({
      step,
      source
    }));
  }
  changeMinutes(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeMinutes({
      step,
      source
    }));
  }
  changeSeconds(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeSeconds({
      step,
      source
    }));
  }
  updateHours(target) {
    this.resetValidation();
    this.hours = target.value;
    const isTimepickerInputValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
    const isValidResult = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValidResult) {
      this.invalidHours = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  updateMinutes(target) {
    this.resetValidation();
    this.minutes = target.value;
    const isTimepickerInputValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
    const isValidResult = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValidResult) {
      this.invalidMinutes = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  updateSeconds(target) {
    this.resetValidation();
    this.seconds = target.value;
    const isTimepickerInputValid = isSecondInputValid(this.seconds) && this.isValidLimit();
    const isValidResult = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValidResult) {
      this.invalidSeconds = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  isValidLimit() {
    return isInputLimitValid({
      hour: this.hours,
      minute: this.minutes,
      seconds: this.seconds,
      isPM: this.isPM()
    }, this.max(), this.min());
  }
  isOneOfDatesIsEmpty() {
    return isOneOfDatesEmpty(this.hours, this.minutes, this.seconds);
  }
  _updateTime() {
    const _seconds = this.showSeconds() ? this.seconds : void 0;
    const _minutes = this.showMinutes() ? this.minutes : void 0;
    const isTimepickerInputValid = isInputValid(this.hours, _minutes, _seconds, this.isPM());
    const isValidResult = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValidResult) {
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._store.dispatch(this._timepickerActions.setTime({
      hour: this.hours,
      minute: this.minutes,
      seconds: this.seconds,
      isPM: this.isPM()
    }));
  }
  toggleMeridian() {
    if (!this.showMeridian() || !this.isEditable) {
      return;
    }
    const _hoursPerDayHalf = 12;
    this._store.dispatch(this._timepickerActions.changeHours({
      step: _hoursPerDayHalf,
      source: ""
    }));
  }
  /**
   * Write a new value to the element.
   */
  writeValue(obj) {
    if (isValidDate(obj)) {
      this.resetValidation();
      this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
    } else if (obj == null) {
      this._store.dispatch(this._timepickerActions.writeValue());
    }
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * This function is called when the control status changes to or from "disabled".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._cd.markForCheck();
  }
  ngOnDestroy() {
    this.timepickerSub?.unsubscribe();
  }
  _renderTime(value) {
    if (!value || !isValidDate(value)) {
      this.hours = "";
      this.minutes = "";
      this.seconds = "";
      this.meridian = this.meridians()[0];
      this.meridianChange.emit(this.meridian);
      return;
    }
    const _value = parseTime(value);
    if (!_value) {
      return;
    }
    const _hoursPerDayHalf = 12;
    let _hours = _value.getHours();
    if (this.showMeridian()) {
      this.meridian = this.meridians()[_hours >= _hoursPerDayHalf ? 1 : 0];
      this.meridianChange.emit(this.meridian);
      _hours = _hours % _hoursPerDayHalf;
      if (_hours === 0) {
        _hours = _hoursPerDayHalf;
      }
    }
    this.hours = padNumber(_hours);
    this.minutes = padNumber(_value.getMinutes());
    this.seconds = padNumber(_value.getUTCSeconds());
  }
  static {
    this.\u0275fac = function TimepickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimepickerComponent)(\u0275\u0275directiveInject(TimepickerConfig), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(TimepickerStore), \u0275\u0275directiveInject(TimepickerActions));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _TimepickerComponent,
      selectors: [["timepicker"]],
      inputs: {
        hourStep: [1, "hourStep"],
        minuteStep: [1, "minuteStep"],
        secondsStep: [1, "secondsStep"],
        readonlyInput: [1, "readonlyInput"],
        disabledInput: [1, "disabled", "disabledInput"],
        mousewheel: [1, "mousewheel"],
        arrowkeys: [1, "arrowkeys"],
        showSpinners: [1, "showSpinners"],
        showMeridian: [1, "showMeridian"],
        showMinutes: [1, "showMinutes"],
        showSeconds: [1, "showSeconds"],
        meridians: [1, "meridians"],
        min: [1, "min"],
        max: [1, "max"],
        hoursPlaceholder: [1, "hoursPlaceholder"],
        minutesPlaceholder: [1, "minutesPlaceholder"],
        secondsPlaceholder: [1, "secondsPlaceholder"]
      },
      outputs: {
        isValid: "isValid",
        meridianChange: "meridianChange"
      },
      features: [\u0275\u0275ProvidersFeature([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore, TimepickerActions]), \u0275\u0275NgOnChangesFeature],
      decls: 31,
      vars: 33,
      consts: [[1, "text-center", 3, "hidden"], ["href", "javascript:void(0);", 1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [1, "form-group", "mb-3"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change", "placeholder", "readonly", "disabled", "value"], [1, "form-group", "mb-3", 3, "has-error"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "click", "disabled"]],
      template: function TimepickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "table")(1, "tbody")(2, "tr", 0)(3, "td")(4, "a", 1);
          \u0275\u0275domListener("click", function TimepickerComponent_Template_a_click_4_listener() {
            return ctx.changeHours(ctx.hourStep());
          });
          \u0275\u0275domElement(5, "span", 2);
          \u0275\u0275domElementEnd()();
          \u0275\u0275conditionalCreate(6, TimepickerComponent_Conditional_6_Template, 2, 0, "td");
          \u0275\u0275conditionalCreate(7, TimepickerComponent_Conditional_7_Template, 3, 2, "td");
          \u0275\u0275conditionalCreate(8, TimepickerComponent_Conditional_8_Template, 2, 0, "td");
          \u0275\u0275conditionalCreate(9, TimepickerComponent_Conditional_9_Template, 3, 2, "td");
          \u0275\u0275conditionalCreate(10, TimepickerComponent_Conditional_10_Template, 2, 0, "td");
          \u0275\u0275conditionalCreate(11, TimepickerComponent_Conditional_11_Template, 1, 0, "td");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(12, "tr")(13, "td", 3)(14, "input", 4);
          \u0275\u0275domListener("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) {
            ctx.prevDef($event);
            return ctx.changeHours(ctx.hourStep() * ctx.wheelSign($event), "wheel");
          })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() {
            return ctx.changeHours(ctx.hourStep(), "key");
          })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() {
            return ctx.changeHours(-ctx.hourStep(), "key");
          })("change", function TimepickerComponent_Template_input_change_14_listener($event) {
            return ctx.updateHours($event.target);
          });
          \u0275\u0275domElementEnd()();
          \u0275\u0275conditionalCreate(15, TimepickerComponent_Conditional_15_Template, 2, 0, "td");
          \u0275\u0275conditionalCreate(16, TimepickerComponent_Conditional_16_Template, 2, 9, "td", 5);
          \u0275\u0275conditionalCreate(17, TimepickerComponent_Conditional_17_Template, 2, 0, "td");
          \u0275\u0275conditionalCreate(18, TimepickerComponent_Conditional_18_Template, 2, 9, "td", 5);
          \u0275\u0275conditionalCreate(19, TimepickerComponent_Conditional_19_Template, 2, 0, "td");
          \u0275\u0275conditionalCreate(20, TimepickerComponent_Conditional_20_Template, 3, 4, "td");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(21, "tr", 0)(22, "td")(23, "a", 1);
          \u0275\u0275domListener("click", function TimepickerComponent_Template_a_click_23_listener() {
            return ctx.changeHours(-ctx.hourStep());
          });
          \u0275\u0275domElement(24, "span", 6);
          \u0275\u0275domElementEnd()();
          \u0275\u0275conditionalCreate(25, TimepickerComponent_Conditional_25_Template, 2, 0, "td");
          \u0275\u0275conditionalCreate(26, TimepickerComponent_Conditional_26_Template, 3, 2, "td");
          \u0275\u0275conditionalCreate(27, TimepickerComponent_Conditional_27_Template, 2, 0, "td");
          \u0275\u0275conditionalCreate(28, TimepickerComponent_Conditional_28_Template, 3, 2, "td");
          \u0275\u0275conditionalCreate(29, TimepickerComponent_Conditional_29_Template, 2, 0, "td");
          \u0275\u0275conditionalCreate(30, TimepickerComponent_Conditional_30_Template, 1, 0, "td");
          \u0275\u0275domElementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275domProperty("hidden", !ctx.showSpinners());
          \u0275\u0275advance(2);
          \u0275\u0275classProp("disabled", !ctx.canIncrementHours || !ctx.isEditable);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.showMinutes() ? 6 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showMinutes() ? 7 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showSeconds() ? 8 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showSeconds() ? 9 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showMeridian() ? 10 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showMeridian() ? 11 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275classProp("has-error", ctx.invalidHours);
          \u0275\u0275advance();
          \u0275\u0275classProp("is-invalid", ctx.invalidHours);
          \u0275\u0275domProperty("placeholder", ctx.hoursPlaceholder())("readOnly", ctx.readonlyInput())("disabled", ctx.disabled)("value", ctx.hours);
          \u0275\u0275attribute("aria-label", ctx.labelHours);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showMinutes() ? 15 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showMinutes() ? 16 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showSeconds() ? 17 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showSeconds() ? 18 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showMeridian() ? 19 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showMeridian() ? 20 : -1);
          \u0275\u0275advance();
          \u0275\u0275domProperty("hidden", !ctx.showSpinners());
          \u0275\u0275advance(2);
          \u0275\u0275classProp("disabled", !ctx.canDecrementHours || !ctx.isEditable);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.showMinutes() ? 25 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showMinutes() ? 26 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showSeconds() ? 27 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showSeconds() ? 28 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showMeridian() ? 29 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showMeridian() ? 30 : -1);
        }
      },
      styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:2px}.bs-chevron-down{-webkit-transform:rotate(-135deg);transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerComponent, [{
    type: Component,
    args: [{
      selector: "timepicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore, TimepickerActions],
      encapsulation: ViewEncapsulation.None,
      standalone: true,
      imports: [],
      template: `<table>
  <tbody>
  <tr class="text-center" [hidden]="!showSpinners()">
    <!-- increment hours button-->
    <td>
      <a class="btn btn-link" [class.disabled]="!canIncrementHours || !isEditable"
         (click)="changeHours(hourStep())"
         href="javascript:void(0);"
      ><span class="bs-chevron bs-chevron-up"></span></a>
    </td>
    <!-- divider -->
    @if (showMinutes()) {
      <td>&nbsp;&nbsp;&nbsp;</td>
    }
    <!-- increment minutes button -->
    @if (showMinutes()) {
      <td>
        <a class="btn btn-link" [class.disabled]="!canIncrementMinutes || !isEditable"
           (click)="changeMinutes(minuteStep())"
           href="javascript:void(0);"
        ><span class="bs-chevron bs-chevron-up"></span></a>
      </td>
    }
    <!-- divider -->
    @if (showSeconds()) {
      <td>&nbsp;</td>
    }
    <!-- increment seconds button -->
    @if (showSeconds()) {
      <td>
        <a class="btn btn-link" [class.disabled]="!canIncrementSeconds || !isEditable"
           (click)="changeSeconds(secondsStep())"
           href="javascript:void(0);"
        >
          <span class="bs-chevron bs-chevron-up"></span>
        </a>
      </td>
    }
    <!-- space between -->
    @if (showMeridian()) {
      <td>&nbsp;&nbsp;&nbsp;</td>
    }
    <!-- meridian placeholder-->
    @if (showMeridian()) {
      <td></td>
    }
  </tr>
  <tr>
    <!-- hours -->
    <td class="form-group mb-3" [class.has-error]="invalidHours">
      <input type="text" [class.is-invalid]="invalidHours"
             class="form-control text-center bs-timepicker-field"
             [placeholder]="hoursPlaceholder()"
             maxlength="2"
             [readonly]="readonlyInput()"
             [disabled]="disabled"
             [value]="hours"
             (wheel)="prevDef($event);changeHours(hourStep() * wheelSign($event), 'wheel')"
             (keydown.ArrowUp)="changeHours(hourStep(), 'key')"
             (keydown.ArrowDown)="changeHours(-hourStep(), 'key')"
             (change)="updateHours($event.target)" [attr.aria-label]="labelHours"></td>
    <!-- divider -->
    @if (showMinutes()) {
      <td>&nbsp;:&nbsp;</td>
    }
    <!-- minutes -->
    @if (showMinutes()) {
      <td class="form-group mb-3" [class.has-error]="invalidMinutes">
        <input type="text" [class.is-invalid]="invalidMinutes"
               class="form-control text-center bs-timepicker-field"
               [placeholder]="minutesPlaceholder()"
               maxlength="2"
               [readonly]="readonlyInput()"
               [disabled]="disabled"
               [value]="minutes"
               (wheel)="prevDef($event);changeMinutes(minuteStep() * wheelSign($event), 'wheel')"
               (keydown.ArrowUp)="changeMinutes(minuteStep(), 'key')"
               (keydown.ArrowDown)="changeMinutes(-minuteStep(), 'key')"
               (change)="updateMinutes($event.target)" [attr.aria-label]="labelMinutes">
      </td>
    }
    <!-- divider -->
    @if (showSeconds()) {
      <td>&nbsp;:&nbsp;</td>
    }
    <!-- seconds -->
    @if (showSeconds()) {
      <td class="form-group mb-3" [class.has-error]="invalidSeconds">
        <input type="text" [class.is-invalid]="invalidSeconds"
               class="form-control text-center bs-timepicker-field"
               [placeholder]="secondsPlaceholder()"
               maxlength="2"
               [readonly]="readonlyInput()"
               [disabled]="disabled"
               [value]="seconds"
               (wheel)="prevDef($event);changeSeconds(secondsStep() * wheelSign($event), 'wheel')"
               (keydown.ArrowUp)="changeSeconds(secondsStep(), 'key')"
               (keydown.ArrowDown)="changeSeconds(-secondsStep(), 'key')"
               (change)="updateSeconds($event.target)" [attr.aria-label]="labelSeconds">
      </td>
    }
    <!-- space between -->
    @if (showMeridian()) {
      <td>&nbsp;&nbsp;&nbsp;</td>
    }
    <!-- meridian -->
    @if (showMeridian()) {
      <td>
        <button type="button" class="btn btn-default text-center"
                [disabled]="!isEditable || !canToggleMeridian"
                [class.disabled]="!isEditable || !canToggleMeridian"
                (click)="toggleMeridian()"
        >{{ meridian }}
        </button>
      </td>
    }
  </tr>
  <tr class="text-center" [hidden]="!showSpinners()">
    <!-- decrement hours button-->
    <td>
      <a class="btn btn-link" [class.disabled]="!canDecrementHours || !isEditable"
         (click)="changeHours(-hourStep())"
         href="javascript:void(0);"
      >
        <span class="bs-chevron bs-chevron-down"></span>
      </a>
    </td>
    <!-- divider -->
    @if (showMinutes()) {
      <td>&nbsp;&nbsp;&nbsp;</td>
    }
    <!-- decrement minutes button-->
    @if (showMinutes()) {
      <td>
        <a class="btn btn-link" [class.disabled]="!canDecrementMinutes || !isEditable"
           (click)="changeMinutes(-minuteStep())"
           href="javascript:void(0);"
        >
          <span class="bs-chevron bs-chevron-down"></span>
        </a>
      </td>
    }
    <!-- divider -->
    @if (showSeconds()) {
      <td>&nbsp;</td>
    }
    <!-- decrement seconds button-->
    @if (showSeconds()) {
      <td>
        <a class="btn btn-link" [class.disabled]="!canDecrementSeconds || !isEditable"
           (click)="changeSeconds(-secondsStep())"
           href="javascript:void(0);"
        >
          <span class="bs-chevron bs-chevron-down"></span>
        </a>
      </td>
    }
    <!-- space between -->
    @if (showMeridian()) {
      <td>&nbsp;&nbsp;&nbsp;</td>
    }
    <!-- meridian placeholder-->
    @if (showMeridian()) {
      <td></td>
    }
  </tr>
  </tbody>
</table>
`,
      styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:2px}.bs-chevron-down{-webkit-transform:rotate(-135deg);transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"]
    }]
  }], () => [{
    type: TimepickerConfig
  }, {
    type: ChangeDetectorRef
  }, {
    type: TimepickerStore
  }, {
    type: TimepickerActions
  }], {
    hourStep: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hourStep",
        required: false
      }]
    }],
    minuteStep: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "minuteStep",
        required: false
      }]
    }],
    secondsStep: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "secondsStep",
        required: false
      }]
    }],
    readonlyInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "readonlyInput",
        required: false
      }]
    }],
    disabledInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    mousewheel: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "mousewheel",
        required: false
      }]
    }],
    arrowkeys: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "arrowkeys",
        required: false
      }]
    }],
    showSpinners: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showSpinners",
        required: false
      }]
    }],
    showMeridian: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showMeridian",
        required: false
      }]
    }],
    showMinutes: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showMinutes",
        required: false
      }]
    }],
    showSeconds: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showSeconds",
        required: false
      }]
    }],
    meridians: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "meridians",
        required: false
      }]
    }],
    min: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "min",
        required: false
      }]
    }],
    max: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "max",
        required: false
      }]
    }],
    hoursPlaceholder: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hoursPlaceholder",
        required: false
      }]
    }],
    minutesPlaceholder: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "minutesPlaceholder",
        required: false
      }]
    }],
    secondsPlaceholder: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "secondsPlaceholder",
        required: false
      }]
    }],
    isValid: [{
      type: Output,
      args: ["isValid"]
    }],
    meridianChange: [{
      type: Output,
      args: ["meridianChange"]
    }]
  });
})();
var TimepickerModule = class _TimepickerModule {
  static {
    this.\u0275fac = function TimepickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimepickerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _TimepickerModule,
      imports: [TimepickerComponent],
      exports: [TimepickerComponent]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerModule, [{
    type: NgModule,
    args: [{
      imports: [TimepickerComponent],
      exports: [TimepickerComponent]
    }]
  }], null, null);
})();

// node_modules/ngx-bootstrap/datepicker/fesm2022/ngx-bootstrap-datepicker.mjs
function BsCustomDatesViewComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 2);
    \u0275\u0275domListener("click", function BsCustomDatesViewComponent_For_2_Template_button_click_0_listener() {
      const range_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectFromRanges(range_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const range_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.compareRanges(range_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", range_r2.label, " ");
  }
}
function BsDatepickerNavigationViewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, " \u200B ");
    \u0275\u0275domElementStart(1, "button", 1);
    \u0275\u0275domListener("click", function BsDatepickerNavigationViewComponent_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.view("month"));
    });
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.isDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.calendar.monthTitle);
  }
}
var _c0 = [[["bs-datepicker-navigation-view"]], "*"];
var _c1 = ["bs-datepicker-navigation-view", "*"];
function BsCalendarLayoutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "bs-current-date", 0);
  }
}
function BsCalendarLayoutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "bs-timepicker");
  }
}
function BsYearsCalendarViewComponent_For_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 3);
    \u0275\u0275listener("click", function BsYearsCalendarViewComponent_For_5_For_2_Template_td_click_0_listener() {
      const year_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewYear(year_r2));
    })("mouseenter", function BsYearsCalendarViewComponent_For_5_For_2_Template_td_mouseenter_0_listener() {
      const year_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hoverYear(year_r2, true));
    })("mouseleave", function BsYearsCalendarViewComponent_For_5_For_2_Template_td_mouseleave_0_listener() {
      const year_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hoverYear(year_r2, false));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const year_r2 = ctx.$implicit;
    \u0275\u0275classProp("disabled", year_r2.isDisabled)("is-highlighted", year_r2.isHovered);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", year_r2.isSelected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r2.label);
  }
}
function BsYearsCalendarViewComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, BsYearsCalendarViewComponent_For_5_For_2_Template, 3, 7, "td", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r4);
  }
}
function BsMonthCalendarViewComponent_For_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 3);
    \u0275\u0275listener("click", function BsMonthCalendarViewComponent_For_5_For_2_Template_td_click_0_listener() {
      const month_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewMonth(month_r2));
    })("mouseenter", function BsMonthCalendarViewComponent_For_5_For_2_Template_td_mouseenter_0_listener() {
      const month_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hoverMonth(month_r2, true));
    })("mouseleave", function BsMonthCalendarViewComponent_For_5_For_2_Template_td_mouseleave_0_listener() {
      const month_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hoverMonth(month_r2, false));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const month_r2 = ctx.$implicit;
    \u0275\u0275classProp("disabled", month_r2.isDisabled)("is-highlighted", month_r2.isHovered);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", month_r2.isSelected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(month_r2.label);
  }
}
function BsMonthCalendarViewComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, BsMonthCalendarViewComponent_For_5_For_2_Template, 3, 7, "td", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r4);
  }
}
var _c2 = ["bsDatepickerDayDecorator", ""];
function BsDaysCalendarViewComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function BsDaysCalendarViewComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_14_r1 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.calendar.weekdays[\u0275$index_14_r1], " ");
  }
}
function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275listener("click", function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const week_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectWeek(week_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_20_r5 = \u0275\u0275nextContext(2).$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.calendar.weekNumbers[\u0275$index_20_r5]);
  }
}
function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275listener("click", function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const week_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectWeek(week_r4));
    })("mouseenter", function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_2_Template_span_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r6);
      const week_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.weekHoverHandler(week_r4, true));
    })("mouseleave", function BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_2_Template_span_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const week_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.weekHoverHandler(week_r4, false));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_20_r5 = \u0275\u0275nextContext(2).$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.calendar.weekNumbers[\u0275$index_20_r5]);
  }
}
function BsDaysCalendarViewComponent_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 5);
    \u0275\u0275conditionalCreate(1, BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(2, BsDaysCalendarViewComponent_For_10_Conditional_1_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active-week", ctx_r1.isWeekHovered);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isiOS ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isiOS ? 2 : -1);
  }
}
function BsDaysCalendarViewComponent_For_10_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275listener("click", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const day_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectDay(day_r8));
    })("mouseenter", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_1_Template_span_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r7);
      const day_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hoverDay(day_r8, true));
    })("mouseleave", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_1_Template_span_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r7);
      const day_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hoverDay(day_r8, false));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("tooltip", \u0275\u0275interpolate(day_r8.tooltipText))("day", day_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", day_r8.label, " 3");
  }
}
function BsDaysCalendarViewComponent_For_10_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275listener("click", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const day_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectDay(day_r8));
    })("mouseenter", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_2_Template_span_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r9);
      const day_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hoverDay(day_r8, true));
    })("mouseleave", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_2_Template_span_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r9);
      const day_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hoverDay(day_r8, false));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("day", day_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", day_r8.label, " 2");
  }
}
function BsDaysCalendarViewComponent_For_10_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275listener("click", function BsDaysCalendarViewComponent_For_10_For_3_Conditional_3_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const day_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectDay(day_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("day", day_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", day_r8.label, " 1");
  }
}
function BsDaysCalendarViewComponent_For_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275conditionalCreate(1, BsDaysCalendarViewComponent_For_10_For_3_Conditional_1_Template, 2, 4, "span", 8);
    \u0275\u0275conditionalCreate(2, BsDaysCalendarViewComponent_For_10_For_3_Conditional_2_Template, 2, 2, "span", 9);
    \u0275\u0275conditionalCreate(3, BsDaysCalendarViewComponent_For_10_For_3_Conditional_3_Template, 2, 2, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isiOS && ctx_r1.isShowTooltip ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isiOS && !ctx_r1.isShowTooltip ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isiOS ? 3 : -1);
  }
}
function BsDaysCalendarViewComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, BsDaysCalendarViewComponent_For_10_Conditional_1_Template, 3, 4, "td", 3);
    \u0275\u0275repeaterCreate(2, BsDaysCalendarViewComponent_For_10_For_3_Template, 4, 3, "td", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.options && ctx_r1.options.showWeekNumbers ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(week_r4.days);
  }
}
var _c3 = ["startTP"];
function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-days-calendar-view", 10);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("onNavigate", function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dayHoverHandler($event));
    })("onHoverWeek", function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.weekHoverHandler($event));
    })("onSelect", function BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.daySelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r4)("isDisabled", ctx_r1.isDatePickerDisabled)("options", \u0275\u0275pipeBind1(1, 5, ctx_r1.options$));
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "timepicker", 11, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.isDatePickerDisabled);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "timepicker", 11, 0);
    \u0275\u0275conditionalCreate(3, BsDatepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template, 2, 1, "timepicker", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isDatePickerDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRangePicker ? 3 : -1);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDatepickerContainerComponent_Conditional_0_Case_3_For_2_Template, 2, 7, "bs-days-calendar-view", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, BsDatepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Template, 4, 2, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r1.daysCalendar$));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.withTimepicker ? 4 : -1);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-month-calendar-view", 13);
    \u0275\u0275listener("onNavigate", function BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.monthHoverHandler($event));
    })("onSelect", function BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.monthSelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r6);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDatepickerContainerComponent_Conditional_0_Case_5_For_2_Template, 1, 3, "bs-month-calendar-view", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.monthsCalendar));
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-years-calendar-view", 13);
    \u0275\u0275listener("onNavigate", function BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.yearHoverHandler($event));
    })("onSelect", function BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.yearSelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r8);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDatepickerContainerComponent_Conditional_0_Case_6_For_2_Template, 1, 3, "bs-years-calendar-view", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.yearsCalendar));
  }
}
function BsDatepickerContainerComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 14);
    \u0275\u0275text(2, "Apply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275text(4, "Cancel");
    \u0275\u0275elementEnd()();
  }
}
function BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setToday());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("today-left", ctx_r1.todayPos === "left")("today-right", ctx_r1.todayPos === "right")("today-center", ctx_r1.todayPos === "center");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.todayBtnLbl);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 19);
    \u0275\u0275listener("click", function BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearDate());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("clear-left", ctx_r1.clearPos === "left")("clear-right", ctx_r1.clearPos === "right")("clear-center", ctx_r1.clearPos === "center");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clearBtnLbl);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template, 3, 7, "div", 16);
    \u0275\u0275conditionalCreate(2, BsDatepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template, 3, 7, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTodayBtn ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showClearBtn ? 2 : -1);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "bs-custom-date-view", 21);
    \u0275\u0275listener("onSelect", function BsDatepickerContainerComponent_Conditional_0_Conditional_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRangeOnCalendar($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("selectedRange", ctx_r1.chosenRange)("ranges", ctx_r1.customRanges)("customRangeLabel", ctx_r1.customRangeBtnLbl);
  }
}
function BsDatepickerContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275listener("@datepickerAnimation.done", function BsDatepickerContainerComponent_Conditional_0_Template_div_animation_datepickerAnimation_done_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.positionServiceEnable());
    });
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275conditionalCreate(3, BsDatepickerContainerComponent_Conditional_0_Case_3_Template, 5, 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275conditionalBranchCreate(5, BsDatepickerContainerComponent_Conditional_0_Case_5_Template, 4, 2, "div", 5)(6, BsDatepickerContainerComponent_Conditional_0_Case_6_Template, 4, 2, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BsDatepickerContainerComponent_Conditional_0_Conditional_7_Template, 5, 0, "div", 6);
    \u0275\u0275conditionalCreate(8, BsDatepickerContainerComponent_Conditional_0_Conditional_8_Template, 3, 2, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, BsDatepickerContainerComponent_Conditional_0_Conditional_9_Template, 2, 3, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.containerClass);
    \u0275\u0275advance();
    \u0275\u0275property("@datepickerAnimation", ctx_r1.animationState);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = \u0275\u0275pipeBind1(4, 6, ctx_r1.viewMode)) === "day" ? 3 : tmp_3_0 === "month" ? 5 : tmp_3_0 === "year" ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(false ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTodayBtn || ctx_r1.showClearBtn ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.customRanges && ctx_r1.customRanges.length > 0 ? 9 : -1);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-days-calendar-view", 10);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("onNavigate", function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dayHoverHandler($event));
    })("onHoverWeek", function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.weekHoverHandler($event));
    })("onSelect", function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.daySelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r4)("isDisabled", ctx_r1.isDatePickerDisabled)("options", \u0275\u0275pipeBind1(1, 5, ctx_r1.options$));
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "timepicker", 11, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.isDatePickerDisabled);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "timepicker", 11, 0);
    \u0275\u0275conditionalCreate(3, BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template, 2, 1, "timepicker", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isDatePickerDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRangePicker ? 3 : -1);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDatepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template, 2, 7, "bs-days-calendar-view", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Template, 4, 2, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r1.daysCalendar$));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.withTimepicker ? 4 : -1);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-month-calendar-view", 13);
    \u0275\u0275listener("onNavigate", function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.monthHoverHandler($event));
    })("onSelect", function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.monthSelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r6);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDatepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template, 1, 3, "bs-month-calendar-view", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.monthsCalendar));
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-years-calendar-view", 13);
    \u0275\u0275listener("onNavigate", function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.yearHoverHandler($event));
    })("onSelect", function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.yearSelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r8);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDatepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template, 1, 3, "bs-years-calendar-view", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.yearsCalendar));
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 14);
    \u0275\u0275text(2, "Apply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275text(4, "Cancel");
    \u0275\u0275elementEnd()();
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setToday());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("today-left", ctx_r1.todayPos === "left")("today-right", ctx_r1.todayPos === "right")("today-center", ctx_r1.todayPos === "center");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.todayBtnLbl);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 19);
    \u0275\u0275listener("click", function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearDate());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("clear-left", ctx_r1.clearPos === "left")("clear-right", ctx_r1.clearPos === "right")("clear-center", ctx_r1.clearPos === "center");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clearBtnLbl);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template, 3, 7, "div", 16);
    \u0275\u0275conditionalCreate(2, BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template, 3, 7, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTodayBtn ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showClearBtn ? 2 : -1);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "bs-custom-date-view", 21);
    \u0275\u0275listener("onSelect", function BsDatepickerInlineContainerComponent_Conditional_0_Conditional_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRangeOnCalendar($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("selectedRange", ctx_r1.chosenRange)("ranges", ctx_r1.customRanges)("customRangeLabel", ctx_r1.customRangeBtnLbl);
  }
}
function BsDatepickerInlineContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275listener("@datepickerAnimation.done", function BsDatepickerInlineContainerComponent_Conditional_0_Template_div_animation_datepickerAnimation_done_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.positionServiceEnable());
    });
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275conditionalCreate(3, BsDatepickerInlineContainerComponent_Conditional_0_Case_3_Template, 5, 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275conditionalBranchCreate(5, BsDatepickerInlineContainerComponent_Conditional_0_Case_5_Template, 4, 2, "div", 5)(6, BsDatepickerInlineContainerComponent_Conditional_0_Case_6_Template, 4, 2, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BsDatepickerInlineContainerComponent_Conditional_0_Conditional_7_Template, 5, 0, "div", 6);
    \u0275\u0275conditionalCreate(8, BsDatepickerInlineContainerComponent_Conditional_0_Conditional_8_Template, 3, 2, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, BsDatepickerInlineContainerComponent_Conditional_0_Conditional_9_Template, 2, 3, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.containerClass);
    \u0275\u0275advance();
    \u0275\u0275property("@datepickerAnimation", ctx_r1.animationState);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = \u0275\u0275pipeBind1(4, 6, ctx_r1.viewMode)) === "day" ? 3 : tmp_3_0 === "month" ? 5 : tmp_3_0 === "year" ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(false ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTodayBtn || ctx_r1.showClearBtn ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.customRanges && ctx_r1.customRanges.length > 0 ? 9 : -1);
  }
}
var _c4 = ["endTP"];
function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-days-calendar-view", 10);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("onNavigate", function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dayHoverHandler($event));
    })("onHoverWeek", function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.weekHoverHandler($event));
    })("onSelect", function BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.daySelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r4)("isDisabled", ctx_r1.isDatePickerDisabled)("options", \u0275\u0275pipeBind1(1, 5, ctx_r1.options$));
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "timepicker", 11, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.isDatePickerDisabled);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "timepicker", 11, 0);
    \u0275\u0275conditionalCreate(3, BsDaterangepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template, 2, 1, "timepicker", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isDatePickerDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRangePicker ? 3 : -1);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDaterangepickerContainerComponent_Conditional_0_Case_3_For_2_Template, 2, 7, "bs-days-calendar-view", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, BsDaterangepickerContainerComponent_Conditional_0_Case_3_Conditional_4_Template, 4, 2, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r1.daysCalendar$));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.withTimepicker ? 4 : -1);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-month-calendar-view", 13);
    \u0275\u0275listener("onNavigate", function BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.monthHoverHandler($event));
    })("onSelect", function BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.monthSelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r6);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDaterangepickerContainerComponent_Conditional_0_Case_5_For_2_Template, 1, 3, "bs-month-calendar-view", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.monthsCalendar));
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-years-calendar-view", 13);
    \u0275\u0275listener("onNavigate", function BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.yearHoverHandler($event));
    })("onSelect", function BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.yearSelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r8);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDaterangepickerContainerComponent_Conditional_0_Case_6_For_2_Template, 1, 3, "bs-years-calendar-view", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.yearsCalendar));
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 14);
    \u0275\u0275text(2, "Apply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275text(4, "Cancel");
    \u0275\u0275elementEnd()();
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setToday());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("today-left", ctx_r1.todayPos === "left")("today-right", ctx_r1.todayPos === "right")("today-center", ctx_r1.todayPos === "center");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.todayBtnLbl);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 19);
    \u0275\u0275listener("click", function BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearDate());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("clear-left", ctx_r1.clearPos === "left")("clear-right", ctx_r1.clearPos === "right")("clear-center", ctx_r1.clearPos === "center");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clearBtnLbl);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template, 3, 7, "div", 16);
    \u0275\u0275conditionalCreate(2, BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template, 3, 7, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTodayBtn ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showClearBtn ? 2 : -1);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "bs-custom-date-view", 21);
    \u0275\u0275listener("onSelect", function BsDaterangepickerContainerComponent_Conditional_0_Conditional_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRangeOnCalendar($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("selectedRange", ctx_r1.chosenRange)("ranges", ctx_r1.customRanges)("customRangeLabel", ctx_r1.customRangeBtnLbl);
  }
}
function BsDaterangepickerContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275listener("@datepickerAnimation.done", function BsDaterangepickerContainerComponent_Conditional_0_Template_div_animation_datepickerAnimation_done_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.positionServiceEnable());
    });
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275conditionalCreate(3, BsDaterangepickerContainerComponent_Conditional_0_Case_3_Template, 5, 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275conditionalBranchCreate(5, BsDaterangepickerContainerComponent_Conditional_0_Case_5_Template, 4, 2, "div", 5)(6, BsDaterangepickerContainerComponent_Conditional_0_Case_6_Template, 4, 2, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BsDaterangepickerContainerComponent_Conditional_0_Conditional_7_Template, 5, 0, "div", 6);
    \u0275\u0275conditionalCreate(8, BsDaterangepickerContainerComponent_Conditional_0_Conditional_8_Template, 3, 2, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, BsDaterangepickerContainerComponent_Conditional_0_Conditional_9_Template, 2, 3, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.containerClass);
    \u0275\u0275advance();
    \u0275\u0275property("@datepickerAnimation", ctx_r1.animationState);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = \u0275\u0275pipeBind1(4, 6, ctx_r1.viewMode)) === "day" ? 3 : tmp_3_0 === "month" ? 5 : tmp_3_0 === "year" ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(false ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTodayBtn || ctx_r1.showClearBtn ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.customRanges && ctx_r1.customRanges.length > 0 ? 9 : -1);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-days-calendar-view", 10);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("onNavigate", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dayHoverHandler($event));
    })("onHoverWeek", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.weekHoverHandler($event));
    })("onSelect", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template_bs_days_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.daySelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r4)("isDisabled", ctx_r1.isDatePickerDisabled)("options", \u0275\u0275pipeBind1(1, 5, ctx_r1.options$));
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "timepicker", 11, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.isDatePickerDisabled);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "timepicker", 11, 0);
    \u0275\u0275conditionalCreate(3, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Conditional_3_Template, 2, 1, "timepicker", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isDatePickerDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRangePicker ? 3 : -1);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_For_2_Template, 2, 7, "bs-days-calendar-view", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Conditional_4_Template, 4, 2, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r1.daysCalendar$));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.withTimepicker ? 4 : -1);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-month-calendar-view", 13);
    \u0275\u0275listener("onNavigate", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.monthHoverHandler($event));
    })("onSelect", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template_bs_month_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.monthSelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r6);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_For_2_Template, 1, 3, "bs-month-calendar-view", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.monthsCalendar));
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bs-years-calendar-view", 13);
    \u0275\u0275listener("onNavigate", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onNavigate_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo($event));
    })("onViewMode", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onViewMode_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setViewMode($event));
    })("onHover", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onHover_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.yearHoverHandler($event));
    })("onSelect", function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template_bs_years_calendar_view_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.yearSelectHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bs-datepicker-multiple", ctx_r1.multipleCalendars);
    \u0275\u0275property("calendar", calendar_r8);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_For_2_Template, 1, 3, "bs-years-calendar-view", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.yearsCalendar));
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 14);
    \u0275\u0275text(2, "Apply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275text(4, "Cancel");
    \u0275\u0275elementEnd()();
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setToday());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("today-left", ctx_r1.todayPos === "left")("today-right", ctx_r1.todayPos === "right")("today-center", ctx_r1.todayPos === "center");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.todayBtnLbl);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 19);
    \u0275\u0275listener("click", function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearDate());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("clear-left", ctx_r1.clearPos === "left")("clear-right", ctx_r1.clearPos === "right")("clear-center", ctx_r1.clearPos === "center");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clearBtnLbl);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_1_Template, 3, 7, "div", 16);
    \u0275\u0275conditionalCreate(2, BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Conditional_2_Template, 3, 7, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTodayBtn ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showClearBtn ? 2 : -1);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "bs-custom-date-view", 21);
    \u0275\u0275listener("onSelect", function BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_9_Template_bs_custom_date_view_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRangeOnCalendar($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("selectedRange", ctx_r1.chosenRange)("ranges", ctx_r1.customRanges)("customRangeLabel", ctx_r1.customRangeBtnLbl);
  }
}
function BsDaterangepickerInlineContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275listener("@datepickerAnimation.done", function BsDaterangepickerInlineContainerComponent_Conditional_0_Template_div_animation_datepickerAnimation_done_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.positionServiceEnable());
    });
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275conditionalCreate(3, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_3_Template, 5, 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275conditionalBranchCreate(5, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_5_Template, 4, 2, "div", 5)(6, BsDaterangepickerInlineContainerComponent_Conditional_0_Case_6_Template, 4, 2, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_7_Template, 5, 0, "div", 6);
    \u0275\u0275conditionalCreate(8, BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_8_Template, 3, 2, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, BsDaterangepickerInlineContainerComponent_Conditional_0_Conditional_9_Template, 2, 3, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.containerClass);
    \u0275\u0275advance();
    \u0275\u0275property("@datepickerAnimation", ctx_r1.animationState);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = \u0275\u0275pipeBind1(4, 6, ctx_r1.viewMode)) === "day" ? 3 : tmp_3_0 === "month" ? 5 : tmp_3_0 === "year" ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(false ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTodayBtn || ctx_r1.showClearBtn ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.customRanges && ctx_r1.customRanges.length > 0 ? 9 : -1);
  }
}
var BsDatepickerConfig = class _BsDatepickerConfig {
  constructor() {
    this.adaptivePosition = false;
    this.useUtc = false;
    this.isAnimated = false;
    this.startView = "day";
    this.returnFocusToInput = false;
    this.containerClass = "theme-green";
    this.displayMonths = 1;
    this.showWeekNumbers = true;
    this.dateInputFormat = "L";
    this.rangeSeparator = " - ";
    this.rangeInputFormat = "L";
    this.monthTitle = "MMMM";
    this.yearTitle = "YYYY";
    this.dayLabel = "D";
    this.monthLabel = "MMMM";
    this.yearLabel = "YYYY";
    this.weekNumbers = "w";
    this.showTodayButton = false;
    this.showClearButton = false;
    this.todayPosition = "center";
    this.clearPosition = "right";
    this.todayButtonLabel = "Today";
    this.clearButtonLabel = "Clear";
    this.customRangeButtonLabel = "Custom Range";
    this.withTimepicker = false;
    this.allowedPositions = ["top", "bottom"];
    this.keepDatepickerOpened = false;
    this.keepDatesOutOfRules = false;
  }
  static {
    this.\u0275fac = function BsDatepickerConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BsDatepickerConfig,
      factory: _BsDatepickerConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DATEPICKER_ANIMATION_TIMING = "220ms cubic-bezier(0, 0, 0.2, 1)";
var datepickerAnimation = trigger("datepickerAnimation", [state("animated-down", style({
  height: "*",
  overflow: "hidden"
})), transition("* => animated-down", [style({
  height: 0,
  overflow: "hidden"
}), animate(DATEPICKER_ANIMATION_TIMING)]), state("animated-up", style({
  height: "*",
  overflow: "hidden"
})), transition("* => animated-up", [style({
  height: "*",
  overflow: "hidden"
}), animate(DATEPICKER_ANIMATION_TIMING)]), transition("* => unanimated", animate("0s"))]);
var BsDatepickerAbstractComponent = class {
  constructor() {
    this.containerClass = "";
    this.customRanges = [];
    this.chosenRange = [];
    this._daysCalendarSub = new Subscription();
    this.selectedTimeSub = new Subscription();
  }
  set minDate(value) {
    this._effects?.setMinDate(value);
  }
  set maxDate(value) {
    this._effects?.setMaxDate(value);
  }
  set daysDisabled(value) {
    this._effects?.setDaysDisabled(value);
  }
  set datesDisabled(value) {
    this._effects?.setDatesDisabled(value);
  }
  set datesEnabled(value) {
    this._effects?.setDatesEnabled(value);
  }
  set isDisabled(value) {
    this._effects?.setDisabled(value);
  }
  set dateCustomClasses(value) {
    this._effects?.setDateCustomClasses(value);
  }
  set dateTooltipTexts(value) {
    this._effects?.setDateTooltipTexts(value);
  }
  set daysCalendar$(value) {
    this._daysCalendar$ = value;
    this._daysCalendarSub.unsubscribe();
    this._daysCalendarSub.add(this._daysCalendar$.subscribe((value2) => {
      this.multipleCalendars = !!value2 && value2.length > 1;
    }));
  }
  get daysCalendar$() {
    return this._daysCalendar$;
  }
  // todo: valorkin fix
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  setViewMode(event) {
  }
  // eslint-disable-next-line
  navigateTo(event) {
  }
  // eslint-disable-next-line
  dayHoverHandler(event) {
  }
  // eslint-disable-next-line
  weekHoverHandler(event) {
  }
  // eslint-disable-next-line
  monthHoverHandler(event) {
  }
  // eslint-disable-next-line
  yearHoverHandler(event) {
  }
  // eslint-disable-next-line
  timeSelectHandler(date, index) {
  }
  // eslint-disable-next-line
  daySelectHandler(day) {
  }
  // eslint-disable-next-line
  monthSelectHandler(event) {
  }
  // eslint-disable-next-line
  yearSelectHandler(event) {
  }
  // eslint-disable-next-line
  setRangeOnCalendar(dates) {
  }
  // eslint-disable-next-line
  setToday() {
  }
  // eslint-disable-next-line
  clearDate() {
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _stopPropagation(event) {
    event.stopPropagation();
  }
};
var BsDatepickerActions = class _BsDatepickerActions {
  static {
    this.CALCULATE = "[datepicker] calculate dates matrix";
  }
  static {
    this.FORMAT = "[datepicker] format datepicker values";
  }
  static {
    this.FLAG = "[datepicker] set flags";
  }
  static {
    this.SELECT = "[datepicker] select date";
  }
  static {
    this.NAVIGATE_OFFSET = "[datepicker] shift view date";
  }
  static {
    this.NAVIGATE_TO = "[datepicker] change view date";
  }
  static {
    this.SET_OPTIONS = "[datepicker] update render options";
  }
  static {
    this.HOVER = "[datepicker] hover date";
  }
  static {
    this.CHANGE_VIEWMODE = "[datepicker] switch view mode";
  }
  static {
    this.SET_MIN_DATE = "[datepicker] set min date";
  }
  static {
    this.SET_MAX_DATE = "[datepicker] set max date";
  }
  static {
    this.SET_DAYSDISABLED = "[datepicker] set days disabled";
  }
  static {
    this.SET_DATESDISABLED = "[datepicker] set dates disabled";
  }
  static {
    this.SET_DATESENABLED = "[datepicker] set dates enabled";
  }
  static {
    this.SET_IS_DISABLED = "[datepicker] set is disabled";
  }
  static {
    this.SET_DATE_CUSTOM_CLASSES = "[datepicker] set date custom classes";
  }
  static {
    this.SET_DATE_TOOLTIP_TEXTS = "[datepicker] set date tooltip texts";
  }
  static {
    this.SET_LOCALE = "[datepicker] set datepicker locale";
  }
  static {
    this.SELECT_TIME = "[datepicker] select time";
  }
  static {
    this.SELECT_RANGE = "[daterangepicker] select dates range";
  }
  calculate() {
    return {
      type: _BsDatepickerActions.CALCULATE
    };
  }
  format() {
    return {
      type: _BsDatepickerActions.FORMAT
    };
  }
  flag() {
    return {
      type: _BsDatepickerActions.FLAG
    };
  }
  select(date) {
    return {
      type: _BsDatepickerActions.SELECT,
      payload: date
    };
  }
  selectTime(date, index) {
    return {
      type: _BsDatepickerActions.SELECT_TIME,
      payload: {
        date,
        index
      }
    };
  }
  changeViewMode(event) {
    return {
      type: _BsDatepickerActions.CHANGE_VIEWMODE,
      payload: event
    };
  }
  navigateTo(event) {
    return {
      type: _BsDatepickerActions.NAVIGATE_TO,
      payload: event
    };
  }
  navigateStep(step) {
    return {
      type: _BsDatepickerActions.NAVIGATE_OFFSET,
      payload: step
    };
  }
  setOptions(options) {
    return {
      type: _BsDatepickerActions.SET_OPTIONS,
      payload: options
    };
  }
  // date range picker
  selectRange(value) {
    return {
      type: _BsDatepickerActions.SELECT_RANGE,
      payload: value
    };
  }
  hoverDay(event) {
    return {
      type: _BsDatepickerActions.HOVER,
      payload: event.isHovered ? event.cell.date : null
    };
  }
  minDate(date) {
    return {
      type: _BsDatepickerActions.SET_MIN_DATE,
      payload: date
    };
  }
  maxDate(date) {
    return {
      type: _BsDatepickerActions.SET_MAX_DATE,
      payload: date
    };
  }
  daysDisabled(days) {
    return {
      type: _BsDatepickerActions.SET_DAYSDISABLED,
      payload: days
    };
  }
  datesDisabled(dates) {
    return {
      type: _BsDatepickerActions.SET_DATESDISABLED,
      payload: dates
    };
  }
  datesEnabled(dates) {
    return {
      type: _BsDatepickerActions.SET_DATESENABLED,
      payload: dates
    };
  }
  isDisabled(value) {
    return {
      type: _BsDatepickerActions.SET_IS_DISABLED,
      payload: value
    };
  }
  setDateCustomClasses(value) {
    return {
      type: _BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
      payload: value
    };
  }
  setDateTooltipTexts(value) {
    return {
      type: _BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS,
      payload: value
    };
  }
  setLocale(locale) {
    return {
      type: _BsDatepickerActions.SET_LOCALE,
      payload: locale
    };
  }
  static {
    this.\u0275fac = function BsDatepickerActions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerActions)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BsDatepickerActions,
      factory: _BsDatepickerActions.\u0275fac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerActions, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], null, null);
})();
var BsLocaleService = class _BsLocaleService {
  constructor() {
    this._defaultLocale = "en";
    this._locale = new BehaviorSubject(this._defaultLocale);
    this._localeChange = this._locale.asObservable();
  }
  get locale() {
    return this._locale;
  }
  get localeChange() {
    return this._localeChange;
  }
  get currentLocale() {
    return this._locale.getValue();
  }
  use(locale) {
    if (locale === this.currentLocale) {
      return;
    }
    this._locale.next(locale);
  }
  static {
    this.\u0275fac = function BsLocaleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsLocaleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BsLocaleService,
      factory: _BsLocaleService.\u0275fac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsLocaleService, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], null, null);
})();
var BsDatepickerEffects = class _BsDatepickerEffects {
  constructor(_actions, _localeService) {
    this._actions = _actions;
    this._localeService = _localeService;
    this._subs = [];
  }
  init(_bsDatepickerStore) {
    this._store = _bsDatepickerStore;
    return this;
  }
  /** setters */
  setValue(value) {
    this._store?.dispatch(this._actions.select(value));
  }
  setRangeValue(value) {
    this._store?.dispatch(this._actions.selectRange(value));
  }
  setMinDate(value) {
    this._store?.dispatch(this._actions.minDate(value));
    return this;
  }
  setMaxDate(value) {
    this._store?.dispatch(this._actions.maxDate(value));
    return this;
  }
  setDaysDisabled(value) {
    this._store?.dispatch(this._actions.daysDisabled(value));
    return this;
  }
  setDatesDisabled(value) {
    this._store?.dispatch(this._actions.datesDisabled(value));
    return this;
  }
  setDatesEnabled(value) {
    this._store?.dispatch(this._actions.datesEnabled(value));
    return this;
  }
  setDisabled(value) {
    this._store?.dispatch(this._actions.isDisabled(value));
    return this;
  }
  setDateCustomClasses(value) {
    this._store?.dispatch(this._actions.setDateCustomClasses(value));
    return this;
  }
  setDateTooltipTexts(value) {
    this._store?.dispatch(this._actions.setDateTooltipTexts(value));
    return this;
  }
  /* Set rendering options */
  setOptions(_config) {
    const _options = Object.assign({
      locale: this._localeService.currentLocale
    }, _config);
    this._store?.dispatch(this._actions.setOptions(_options));
    return this;
  }
  /** view to mode bindings */
  setBindings(container) {
    if (!this._store) {
      return this;
    }
    container.selectedTime = this._store.select((state2) => state2.selectedTime).pipe(filter((times) => !!times));
    container.daysCalendar$ = this._store.select((state2) => state2.flaggedMonths).pipe(filter((months2) => !!months2));
    container.monthsCalendar = this._store.select((state2) => state2.flaggedMonthsCalendar).pipe(filter((months2) => !!months2));
    container.yearsCalendar = this._store.select((state2) => state2.yearsCalendarFlagged).pipe(filter((years) => !!years));
    container.viewMode = this._store.select((state2) => state2.view?.mode);
    container.options$ = combineLatest([this._store.select((state2) => state2.showWeekNumbers), this._store.select((state2) => state2.displayMonths)]).pipe(map((latest) => ({
      showWeekNumbers: latest[0],
      displayMonths: latest[1]
    })));
    return this;
  }
  /** event handlers */
  setEventHandlers(container) {
    container.setViewMode = (event) => {
      this._store?.dispatch(this._actions.changeViewMode(event));
    };
    container.navigateTo = (event) => {
      this._store?.dispatch(this._actions.navigateStep(event.step));
    };
    container.dayHoverHandler = (event) => {
      const _cell = event.cell;
      if (_cell.isOtherMonth || _cell.isDisabled) {
        return;
      }
      this._store?.dispatch(this._actions.hoverDay(event));
      _cell.isHovered = event.isHovered;
    };
    container.monthHoverHandler = (event) => {
      event.cell.isHovered = event.isHovered;
    };
    container.yearHoverHandler = (event) => {
      event.cell.isHovered = event.isHovered;
    };
    return this;
  }
  registerDatepickerSideEffects() {
    if (!this._store) {
      return this;
    }
    this._subs.push(this._store.select((state2) => state2.view).subscribe(() => {
      this._store?.dispatch(this._actions.calculate());
    }));
    this._subs.push(this._store.select((state2) => state2.monthsModel).pipe(filter((monthModel) => !!monthModel)).subscribe(() => this._store?.dispatch(this._actions.format())));
    this._subs.push(this._store.select((state2) => state2.formattedMonths).pipe(filter((month) => !!month)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.selectedDate).pipe(filter((selectedDate) => !!selectedDate)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.selectedRange).pipe(filter((selectedRange) => !!selectedRange)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.monthsCalendar).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.yearsCalendarModel).pipe(filter((state2) => !!state2)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.hoveredDate).pipe(filter((hoveredDate) => !!hoveredDate)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.dateCustomClasses).pipe(filter((dateCustomClasses) => !!dateCustomClasses)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._store.select((state2) => state2.dateTooltipTexts).pipe(filter((dateTooltipTexts) => !!dateTooltipTexts)).subscribe(() => this._store?.dispatch(this._actions.flag())));
    this._subs.push(this._localeService.localeChange.subscribe((locale) => this._store?.dispatch(this._actions.setLocale(locale))));
    return this;
  }
  destroy() {
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function BsDatepickerEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerEffects)(\u0275\u0275inject(BsDatepickerActions), \u0275\u0275inject(BsLocaleService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BsDatepickerEffects,
      factory: _BsDatepickerEffects.\u0275fac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerEffects, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [{
    type: BsDatepickerActions
  }, {
    type: BsLocaleService
  }], null);
})();
var defaultMonthOptions = {
  width: 7,
  height: 6
};
var dayInMilliseconds = 24 * 60 * 60 * 1e3;
var _initialView = {
  date: /* @__PURE__ */ new Date(),
  mode: "day"
};
var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
  locale: "en",
  view: _initialView,
  selectedRange: [],
  selectedTime: [],
  monthViewOptions: defaultMonthOptions
});
function getStartingDayOfCalendar(date, options) {
  if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
    return date;
  }
  const weekDay = getDay(date);
  const offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
  return shiftDate(date, {
    day: -offset
  });
}
function calculateDateOffset(weekday, startingDayOffset) {
  const _startingDayOffset = Number(startingDayOffset);
  if (isNaN(_startingDayOffset)) {
    return 0;
  }
  if (_startingDayOffset === 0) {
    return weekday;
  }
  const offset = weekday - _startingDayOffset % 7;
  return offset < 0 ? offset + 7 : offset;
}
function isMonthDisabled(date, min, max) {
  const minBound = min && isBefore(endOf(date, "month"), min, "day");
  const maxBound = max && isAfter(startOf(date, "month"), max, "day");
  return minBound || maxBound || false;
}
function isYearDisabled(date, min, max) {
  const minBound = min && isBefore(endOf(date, "year"), min, "day");
  const maxBound = max && isAfter(startOf(date, "year"), max, "day");
  return minBound || maxBound || false;
}
function isDisabledDate(date, datesDisabled, unit) {
  if (!datesDisabled || !isArray(datesDisabled) || !datesDisabled.length) {
    return false;
  }
  if (unit && unit === "year" && !datesDisabled[0].getDate()) {
    return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, "year"));
  }
  return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, "date"));
}
function isEnabledDate(date, datesEnabled, unit) {
  if (!datesEnabled || !isArray(datesEnabled) || !datesEnabled.length) {
    return false;
  }
  return !datesEnabled.some((enabledDate) => isSame(date, enabledDate, unit || "date"));
}
function getYearsCalendarInitialDate(state2, calendarIndex = 0) {
  const model = state2 && state2.yearsCalendarModel && state2.yearsCalendarModel[calendarIndex];
  return model?.years[0] && model.years[0][0] && model.years[0][0].date;
}
function checkRangesWithMaxDate(ranges, maxDate) {
  if (!ranges) return ranges;
  if (!maxDate) return ranges;
  if (!ranges.length && !ranges[0].value) return ranges;
  ranges.forEach((item) => {
    if (!item || !item.value) return ranges;
    if (item.value instanceof Date) return ranges;
    if (!(item.value instanceof Array && item.value.length)) return ranges;
    item.value = compareDateWithMaxDateHelper(item.value, maxDate);
    return ranges;
  });
  return ranges;
}
function checkBsValue(date, maxDate) {
  if (!date) return date;
  if (!maxDate) return date;
  if (date instanceof Array && !date.length) return date;
  if (date instanceof Date) return date;
  return compareDateWithMaxDateHelper(date, maxDate);
}
function compareDateWithMaxDateHelper(date, maxDate) {
  if (date instanceof Array) {
    const editedValues = date.map((item) => {
      if (!item) return item;
      if (isAfter(item, maxDate, "date")) item = maxDate;
      return item;
    });
    return editedValues;
  }
  return date;
}
function setCurrentTimeOnDateSelect(value) {
  if (!value) return value;
  return setCurrentTimeHelper(value);
}
function setDateRangesCurrentTimeOnDateSelect(value) {
  if (!value?.length) return value;
  value.map((date) => {
    if (!date) {
      return date;
    }
    return setCurrentTimeHelper(date);
  });
  return value;
}
function setCurrentTimeHelper(date) {
  const now = /* @__PURE__ */ new Date();
  date.setMilliseconds(now.getMilliseconds());
  date.setSeconds(now.getSeconds());
  date.setMinutes(now.getMinutes());
  date.setHours(now.getHours());
  return date;
}
function createMatrix(options, fn) {
  let prevValue = options.initialDate;
  const matrix = new Array(options.height);
  for (let i = 0; i < options.height; i++) {
    matrix[i] = new Array(options.width);
    for (let j = 0; j < options.width; j++) {
      matrix[i][j] = fn(prevValue);
      prevValue = shiftDate(prevValue, options.shift);
    }
  }
  return matrix;
}
function calcDaysCalendar(startingDate, options) {
  const firstDay = getFirstDayOfMonth(startingDate);
  const initialDate = getStartingDayOfCalendar(firstDay, options);
  const matrixOptions = {
    width: options.width || 0,
    height: options.height || 0,
    initialDate,
    shift: {
      day: 1
    }
  };
  const daysMatrix = createMatrix(matrixOptions, (date) => date);
  return {
    daysMatrix,
    month: firstDay
  };
}
function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
  return {
    month: daysCalendar.month,
    monthTitle: formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
    yearTitle: formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
    weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
    weekdays: getShiftedWeekdays(formatOptions.locale),
    weeks: daysCalendar.daysMatrix.map((week2, weekIndex) => ({
      days: week2.map((date, dayIndex) => ({
        date,
        label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
        monthIndex,
        weekIndex,
        dayIndex
      }))
    })),
    hideLeftArrow: false,
    hideRightArrow: false,
    disableLeftArrow: false,
    disableRightArrow: false
  };
}
function getWeekNumbers(daysMatrix, format, locale) {
  return daysMatrix.map((days) => days[0] ? formatDate(days[0], format, locale) : "");
}
function getShiftedWeekdays(locale) {
  const _locale = getLocale(locale);
  const weekdays = _locale.weekdaysShort();
  const firstDayOfWeek = _locale.firstDayOfWeek();
  return [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
}
function flagDaysCalendar(formattedMonth, options) {
  formattedMonth.weeks.forEach((week2) => {
    week2.days.forEach((day, dayIndex) => {
      const isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
      const isHovered = !isOtherMonth && isSameDay$1(day.date, options.hoveredDate);
      const isSelectionStart = !isOtherMonth && options.selectedRange && isSameDay$1(day.date, options.selectedRange[0]);
      const isSelectionEnd = !isOtherMonth && options.selectedRange && isSameDay$1(day.date, options.selectedRange[1]);
      const isSelected = !isOtherMonth && isSameDay$1(day.date, options.selectedDate) || isSelectionStart || isSelectionEnd;
      const isInRange = !isOtherMonth && options.selectedRange && isDateInRange(day.date, options.selectedRange, options.hoveredDate);
      const isDisabled = options.isDisabled || isBefore(day.date, options.minDate, "day") || isAfter(day.date, options.maxDate, "day") || isDisabledDay(day.date, options.daysDisabled) || isDisabledDate(day.date, options.datesDisabled) || isEnabledDate(day.date, options.datesEnabled);
      const currentDate = /* @__PURE__ */ new Date();
      const isToday = !isOtherMonth && isSameDay$1(day.date, currentDate);
      const customClasses = options.dateCustomClasses && options.dateCustomClasses.map((dcc) => isSameDay$1(day.date, dcc.date) ? dcc.classes : []).reduce((previousValue, currentValue) => previousValue.concat(currentValue), []).join(" ") || "";
      const tooltipText = options.dateTooltipTexts && options.dateTooltipTexts.map((tt) => isSameDay$1(day.date, tt.date) ? tt.tooltipText : "").filter((text) => !!text).join(" ") || "";
      const newDay = Object.assign({}, day, {
        isOtherMonth,
        isHovered,
        isSelected,
        isSelectionStart,
        isSelectionEnd,
        isInRange,
        isDisabled,
        isToday,
        customClasses,
        tooltipText
      });
      if (day.isOtherMonth !== newDay.isOtherMonth || day.isHovered !== newDay.isHovered || day.isSelected !== newDay.isSelected || day.isSelectionStart !== newDay.isSelectionStart || day.isSelectionEnd !== newDay.isSelectionEnd || day.isDisabled !== newDay.isDisabled || day.isInRange !== newDay.isInRange || day.customClasses !== newDay.customClasses || day.tooltipText !== newDay.tooltipText) {
        week2.days[dayIndex] = newDay;
      }
    });
  });
  formattedMonth.hideLeftArrow = options.isDisabled || !!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
  formattedMonth.hideRightArrow = options.isDisabled || (!!options.monthIndex || options.monthIndex === 0) && !!options.displayMonths && options.monthIndex < options.displayMonths && options.monthIndex + 1 !== options.displayMonths;
  formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, {
    month: -1
  }), options.minDate, options.maxDate);
  formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, {
    month: 1
  }), options.minDate, options.maxDate);
  return formattedMonth;
}
function isDateInRange(date, selectedRange, hoveredDate) {
  if (!date || !selectedRange || !selectedRange[0]) {
    return false;
  }
  if (selectedRange[1]) {
    return date > selectedRange[0] && date <= selectedRange[1];
  }
  if (hoveredDate) {
    return date > selectedRange[0] && date <= hoveredDate;
  }
  return false;
}
function canSwitchMode(mode, minMode) {
  return minMode ? mode >= minMode : true;
}
var height$1 = 4;
var width$1 = 3;
var shift$1 = {
  month: 1
};
function formatMonthsCalendar(viewDate, formatOptions) {
  const initialDate = startOf(viewDate, "year");
  const matrixOptions = {
    width: width$1,
    height: height$1,
    initialDate,
    shift: shift$1
  };
  const monthMatrix = createMatrix(matrixOptions, (date) => ({
    date,
    label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
  }));
  return {
    months: monthMatrix,
    monthTitle: "",
    yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale),
    hideRightArrow: false,
    hideLeftArrow: false,
    disableRightArrow: false,
    disableLeftArrow: false
  };
}
function flagMonthsCalendar(monthCalendar, options) {
  monthCalendar.months.forEach((months2, rowIndex) => {
    months2.forEach((month, monthIndex) => {
      let isSelected;
      const isHovered = isSameMonth(month.date, options.hoveredMonth);
      const isDisabled = options.isDisabled || isDisabledDate(month.date, options.datesDisabled) || isEnabledDate(month.date, options.datesEnabled, "month") || isMonthDisabled(month.date, options.minDate, options.maxDate);
      if (!options.selectedDate && options.selectedRange) {
        isSelected = isSameMonth(month.date, options.selectedRange[0]);
        if (!isSelected) {
          isSelected = isSameMonth(month.date, options.selectedRange[1]);
        }
      } else {
        isSelected = isSameMonth(month.date, options.selectedDate);
      }
      const newMonth = Object.assign(
        /*{},*/
        month,
        {
          isHovered,
          isDisabled,
          isSelected
        }
      );
      if (month.isHovered !== newMonth.isHovered || month.isDisabled !== newMonth.isDisabled || month.isSelected !== newMonth.isSelected) {
        monthCalendar.months[rowIndex][monthIndex] = newMonth;
      }
    });
  });
  monthCalendar.hideLeftArrow = !!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
  monthCalendar.hideRightArrow = (!!options.monthIndex || options.monthIndex === 0) && (!!options.displayMonths || options.displayMonths === 0) && options.monthIndex < options.displayMonths && options.monthIndex + 1 !== options.displayMonths;
  monthCalendar.disableLeftArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, {
    year: -1
  }), options.minDate, options.maxDate);
  monthCalendar.disableRightArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, {
    year: 1
  }), options.minDate, options.maxDate);
  return monthCalendar;
}
var height = 4;
var width = 4;
var yearsPerCalendar = height * width;
var initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
var shift = {
  year: 1
};
function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
  const initialDate = calculateInitialDate(viewDate, previousInitialDate);
  const matrixOptions = {
    width,
    height,
    initialDate,
    shift
  };
  const yearsMatrix = createMatrix(matrixOptions, (date) => ({
    date,
    label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
  }));
  const yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
  return {
    years: yearsMatrix,
    monthTitle: "",
    yearTitle,
    hideLeftArrow: false,
    hideRightArrow: false,
    disableLeftArrow: false,
    disableRightArrow: false
  };
}
function calculateInitialDate(viewDate, previousInitialDate) {
  if (previousInitialDate && viewDate.getFullYear() >= previousInitialDate.getFullYear() && viewDate.getFullYear() < previousInitialDate.getFullYear() + yearsPerCalendar) {
    return previousInitialDate;
  }
  return shiftDate(viewDate, {
    year: initialYearShift
  });
}
function formatYearRangeTitle(yearsMatrix, formatOptions) {
  const from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
  const to = formatDate(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
  return `${from} - ${to}`;
}
function flagYearsCalendar(yearsCalendar, options) {
  yearsCalendar.years.forEach((years, rowIndex) => {
    years.forEach((year, yearIndex) => {
      let isSelected;
      const isHovered = isSameYear(year.date, options.hoveredYear);
      const isDisabled = options.isDisabled || isDisabledDate(year.date, options.datesDisabled, "year") || isEnabledDate(year.date, options.datesEnabled, "year") || isYearDisabled(year.date, options.minDate, options.maxDate);
      if (!options.selectedDate && options.selectedRange) {
        isSelected = isSameYear(year.date, options.selectedRange[0]);
        if (!isSelected) {
          isSelected = isSameYear(year.date, options.selectedRange[1]);
        }
      } else {
        isSelected = isSameYear(year.date, options.selectedDate);
      }
      const newMonth = Object.assign(
        /*{},*/
        year,
        {
          isHovered,
          isDisabled,
          isSelected
        }
      );
      if (year.isHovered !== newMonth.isHovered || year.isDisabled !== newMonth.isDisabled || year.isSelected !== newMonth.isSelected) {
        yearsCalendar.years[rowIndex][yearIndex] = newMonth;
      }
    });
  });
  yearsCalendar.hideLeftArrow = !!options.yearIndex && options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
  yearsCalendar.hideRightArrow = !!options.yearIndex && !!options.displayMonths && options.yearIndex < options.displayMonths && options.yearIndex + 1 !== options.displayMonths;
  yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, {
    year: -1
  }), options.minDate, options.maxDate);
  const i = yearsCalendar.years.length - 1;
  const j = yearsCalendar.years[i].length - 1;
  yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, {
    year: 1
  }), options.minDate, options.maxDate);
  return yearsCalendar;
}
function copyTime(sourceDate, time) {
  if (!sourceDate || !isNaN(sourceDate.getTime())) {
    return;
  }
  sourceDate.setHours(time.getHours());
  sourceDate.setMinutes(time.getMinutes());
  sourceDate.setSeconds(time.getSeconds());
  sourceDate.setMilliseconds(time.getMilliseconds());
}
function bsDatepickerReducer(state2 = initialDatepickerState, action) {
  switch (action.type) {
    case BsDatepickerActions.CALCULATE: {
      return calculateReducer(state2);
    }
    case BsDatepickerActions.FORMAT: {
      return formatReducer(state2);
    }
    case BsDatepickerActions.FLAG: {
      return flagReducer(state2);
    }
    case BsDatepickerActions.NAVIGATE_OFFSET: {
      return navigateOffsetReducer(state2, action);
    }
    case BsDatepickerActions.NAVIGATE_TO: {
      const payload = action.payload;
      if (!state2.view || !payload.unit) {
        return state2;
      }
      const date = setFullDate(state2.view.date, payload.unit);
      let newState;
      let mode;
      if (canSwitchMode(payload.viewMode, state2.minMode)) {
        mode = payload.viewMode;
        newState = {
          view: {
            date,
            mode
          }
        };
      } else {
        mode = state2.view.mode;
        newState = {
          selectedDate: date,
          view: {
            date,
            mode
          }
        };
      }
      return Object.assign({}, state2, newState);
    }
    case BsDatepickerActions.CHANGE_VIEWMODE: {
      if (!canSwitchMode(action.payload, state2.minMode) || !state2.view) {
        return state2;
      }
      const date = state2.view.date;
      const mode = action.payload;
      const newState = {
        view: {
          date,
          mode
        }
      };
      return Object.assign({}, state2, newState);
    }
    case BsDatepickerActions.HOVER: {
      return Object.assign({}, state2, {
        hoveredDate: action.payload
      });
    }
    case BsDatepickerActions.SELECT: {
      if (!state2.view) {
        return state2;
      }
      const newState = {
        selectedDate: action.payload,
        view: state2.view
      };
      if (Array.isArray(state2.selectedTime)) {
        const _time = state2.selectedTime[0];
        if (newState.selectedDate && _time) {
          copyTime(newState.selectedDate, _time);
        }
      }
      const mode = state2.view.mode;
      const _date = action.payload || state2.view.date;
      const date = getViewDate(_date, state2.minDate, state2.maxDate);
      newState.view = {
        mode,
        date
      };
      return Object.assign({}, state2, newState);
    }
    case BsDatepickerActions.SELECT_TIME: {
      const {
        date,
        index
      } = action.payload;
      const selectedTime = state2.selectedTime ? [...state2.selectedTime] : [];
      selectedTime[index] = date;
      return Object.assign({}, state2, {
        selectedTime
      });
    }
    case BsDatepickerActions.SET_OPTIONS: {
      if (!state2.view) {
        return state2;
      }
      const newState = action.payload;
      const mode = newState.minMode ? newState.minMode : state2.view.mode;
      const _viewDate = isDateValid(newState.value) && newState.value || isArray(newState.value) && isDateValid(newState.value[0]) && newState.value[0] || state2.view.date;
      const date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
      newState.view = {
        mode,
        date
      };
      if (newState.value) {
        if (isArray(newState.value)) {
          newState.selectedRange = newState.value;
          newState.selectedTime = newState.value.map((i) => i);
        }
        if (newState.value instanceof Date) {
          newState.selectedDate = newState.value;
          newState.selectedTime = [newState.value];
        }
      }
      return Object.assign({}, state2, newState);
    }
    // date range picker
    case BsDatepickerActions.SELECT_RANGE: {
      if (!state2.view) {
        return state2;
      }
      const newState = {
        selectedRange: action.payload,
        view: state2.view
      };
      newState.selectedRange?.forEach((dte, index) => {
        if (Array.isArray(state2.selectedTime)) {
          const _time = state2.selectedTime[index];
          if (_time) {
            copyTime(dte, _time);
          }
        }
      });
      const mode = state2.view.mode;
      const _date = action.payload && action.payload[0] || state2.view.date;
      const date = getViewDate(_date, state2.minDate, state2.maxDate);
      newState.view = {
        mode,
        date
      };
      return Object.assign({}, state2, newState);
    }
    case BsDatepickerActions.SET_MIN_DATE: {
      return Object.assign({}, state2, {
        minDate: action.payload
      });
    }
    case BsDatepickerActions.SET_MAX_DATE: {
      return Object.assign({}, state2, {
        maxDate: action.payload
      });
    }
    case BsDatepickerActions.SET_IS_DISABLED: {
      return Object.assign({}, state2, {
        isDisabled: action.payload
      });
    }
    case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES: {
      return Object.assign({}, state2, {
        dateCustomClasses: action.payload
      });
    }
    case BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS: {
      return Object.assign({}, state2, {
        dateTooltipTexts: action.payload
      });
    }
    default:
      return state2;
  }
}
function calculateReducer(state2) {
  if (!state2.view) {
    return state2;
  }
  let displayMonths;
  if (state2.displayOneMonthRange && isDisplayOneMonth(state2.view.date, state2.minDate, state2.maxDate)) {
    displayMonths = 1;
  } else {
    displayMonths = state2.displayMonths || 1;
  }
  let viewDate = state2.view.date;
  if (state2.view.mode === "day" && state2.monthViewOptions) {
    if (state2.showPreviousMonth && state2.selectedRange && state2.selectedRange.length === 0) {
      viewDate = shiftDate(viewDate, {
        month: -1
      });
    }
    state2.monthViewOptions.firstDayOfWeek = getLocale(state2.locale).firstDayOfWeek();
    let monthsModel = new Array(displayMonths);
    for (let monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
      monthsModel[monthIndex] = calcDaysCalendar(viewDate, state2.monthViewOptions);
      viewDate = shiftDate(viewDate, {
        month: 1
      });
    }
    if (state2.preventChangeToNextMonth && state2.flaggedMonths && state2.hoveredDate) {
      const viewMonth = calcDaysCalendar(state2.view.date, state2.monthViewOptions);
      if (state2.flaggedMonths.length && state2.flaggedMonths[1].month.getMonth() === viewMonth.month.getMonth()) {
        monthsModel = state2.flaggedMonths.map((item) => {
          if (state2.monthViewOptions) {
            return calcDaysCalendar(item.month, state2.monthViewOptions);
          }
          return null;
        }).filter((item) => item !== null);
      }
    }
    return Object.assign({}, state2, {
      monthsModel
    });
  }
  if (state2.view.mode === "month") {
    const monthsCalendar = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state2));
      viewDate = shiftDate(viewDate, {
        year: 1
      });
    }
    return Object.assign({}, state2, {
      monthsCalendar
    });
  }
  if (state2.view.mode === "year") {
    const yearsCalendarModel = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state2), state2.minMode === "year" ? getYearsCalendarInitialDate(state2, calendarIndex) : void 0);
      viewDate = shiftDate(viewDate, {
        year: yearsPerCalendar
      });
    }
    return Object.assign({}, state2, {
      yearsCalendarModel
    });
  }
  return state2;
}
function formatReducer(state2) {
  if (!state2.view) {
    return state2;
  }
  if (state2.view.mode === "day" && state2.monthsModel) {
    const formattedMonths = state2.monthsModel.map((month, monthIndex) => formatDaysCalendar(month, getFormatOptions(state2), monthIndex));
    return Object.assign({}, state2, {
      formattedMonths
    });
  }
  const displayMonths = state2.displayMonths || 1;
  let viewDate = state2.view.date;
  if (state2.view.mode === "month") {
    const monthsCalendar = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state2));
      viewDate = shiftDate(viewDate, {
        year: 1
      });
    }
    return Object.assign({}, state2, {
      monthsCalendar
    });
  }
  if (state2.view.mode === "year") {
    const yearsCalendarModel = new Array(displayMonths);
    for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
      yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state2));
      viewDate = shiftDate(viewDate, {
        year: 16
      });
    }
    return Object.assign({}, state2, {
      yearsCalendarModel
    });
  }
  return state2;
}
function flagReducer(state2) {
  if (!state2.view) {
    return state2;
  }
  const displayMonths = isDisplayOneMonth(state2.view.date, state2.minDate, state2.maxDate) ? 1 : state2.displayMonths;
  if (state2.formattedMonths && state2.view.mode === "day") {
    const flaggedMonths = state2.formattedMonths.map((formattedMonth, monthIndex) => flagDaysCalendar(formattedMonth, {
      isDisabled: state2.isDisabled,
      minDate: state2.minDate,
      maxDate: state2.maxDate,
      daysDisabled: state2.daysDisabled,
      datesDisabled: state2.datesDisabled,
      datesEnabled: state2.datesEnabled,
      hoveredDate: state2.hoveredDate,
      selectedDate: state2.selectedDate,
      selectedRange: state2.selectedRange,
      displayMonths,
      dateCustomClasses: state2.dateCustomClasses,
      dateTooltipTexts: state2.dateTooltipTexts,
      monthIndex
    }));
    return Object.assign({}, state2, {
      flaggedMonths
    });
  }
  if (state2.view.mode === "month" && state2.monthsCalendar) {
    const flaggedMonthsCalendar = state2.monthsCalendar.map((formattedMonth, monthIndex) => flagMonthsCalendar(formattedMonth, {
      isDisabled: state2.isDisabled,
      minDate: state2.minDate,
      maxDate: state2.maxDate,
      hoveredMonth: state2.hoveredMonth,
      selectedDate: state2.selectedDate,
      datesDisabled: state2.datesDisabled,
      datesEnabled: state2.datesEnabled,
      selectedRange: state2.selectedRange,
      displayMonths,
      monthIndex
    }));
    return Object.assign({}, state2, {
      flaggedMonthsCalendar
    });
  }
  if (state2.view.mode === "year" && state2.yearsCalendarModel) {
    const yearsCalendarFlagged = state2.yearsCalendarModel.map((formattedMonth, yearIndex) => flagYearsCalendar(formattedMonth, {
      isDisabled: state2.isDisabled,
      minDate: state2.minDate,
      maxDate: state2.maxDate,
      hoveredYear: state2.hoveredYear,
      selectedDate: state2.selectedDate,
      datesDisabled: state2.datesDisabled,
      datesEnabled: state2.datesEnabled,
      selectedRange: state2.selectedRange,
      displayMonths,
      yearIndex
    }));
    return Object.assign({}, state2, {
      yearsCalendarFlagged
    });
  }
  return state2;
}
function navigateOffsetReducer(state2, action) {
  if (!state2.view) {
    return state2;
  }
  const date = shiftViewDate(state2, action);
  if (!date) {
    return state2;
  }
  const newState = {
    view: {
      mode: state2.view.mode,
      date
    }
  };
  return Object.assign({}, state2, newState);
}
function shiftViewDate(state2, action) {
  if (!state2.view) {
    return void 0;
  }
  if (state2.view.mode === "year" && state2.minMode === "year") {
    const initialDate = getYearsCalendarInitialDate(state2, 0);
    if (initialDate) {
      const middleDate = shiftDate(initialDate, {
        year: -initialYearShift
      });
      return shiftDate(middleDate, action.payload);
    }
  }
  return shiftDate(startOf(state2.view.date, "month"), action.payload);
}
function getFormatOptions(state2) {
  return {
    locale: state2.locale,
    monthTitle: state2.monthTitle,
    yearTitle: state2.yearTitle,
    dayLabel: state2.dayLabel,
    monthLabel: state2.monthLabel,
    yearLabel: state2.yearLabel,
    weekNumbers: state2.weekNumbers
  };
}
function getViewDate(viewDate, minDate, maxDate) {
  const _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
  if (minDate && isAfter(minDate, _date, "day")) {
    return minDate;
  }
  if (maxDate && isBefore(maxDate, _date, "day")) {
    return maxDate;
  }
  return _date;
}
function isDisplayOneMonth(viewDate, minDate, maxDate) {
  if (maxDate && isSame(maxDate, viewDate, "day")) {
    return true;
  }
  return minDate && maxDate && minDate.getMonth() === maxDate.getMonth();
}
var BsDatepickerStore = class _BsDatepickerStore extends MiniStore {
  constructor() {
    const _dispatcher = new BehaviorSubject({
      type: "[datepicker] dispatcher init"
    });
    const state2 = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
    super(_dispatcher, bsDatepickerReducer, state2);
  }
  static {
    this.\u0275fac = function BsDatepickerStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerStore)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BsDatepickerStore,
      factory: _BsDatepickerStore.\u0275fac,
      providedIn: "platform"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerStore, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [], null);
})();
var BsCustomDatesViewComponent = class _BsCustomDatesViewComponent {
  constructor() {
    this.onSelect = new EventEmitter();
  }
  selectFromRanges(range) {
    this.onSelect.emit(range);
  }
  compareRanges(range) {
    return JSON.stringify(range?.value) === JSON.stringify(this.selectedRange);
  }
  static {
    this.\u0275fac = function BsCustomDatesViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsCustomDatesViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsCustomDatesViewComponent,
      selectors: [["bs-custom-date-view"]],
      inputs: {
        ranges: "ranges",
        selectedRange: "selectedRange",
        customRangeLabel: "customRangeLabel"
      },
      outputs: {
        onSelect: "onSelect"
      },
      decls: 3,
      vars: 0,
      consts: [[1, "bs-datepicker-predefined-btns"], ["type", "button", 1, "btn", 3, "selected"], ["type", "button", 1, "btn", 3, "click"]],
      template: function BsCustomDatesViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "div", 0);
          \u0275\u0275repeaterCreate(1, BsCustomDatesViewComponent_For_2_Template, 2, 3, "button", 1, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275domElementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275repeater(ctx.ranges);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsCustomDatesViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-custom-date-view",
      template: `
    <div class="bs-datepicker-predefined-btns">
      @for (range of ranges; track range) {
        <button
          type="button"
          class="btn"
          (click)="selectFromRanges(range)"
          [class.selected]="compareRanges(range)">
          {{ range.label }}
        </button>
      }
    </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: []
    }]
  }], null, {
    ranges: [{
      type: Input
    }],
    selectedRange: [{
      type: Input
    }],
    customRangeLabel: [{
      type: Input
    }],
    onSelect: [{
      type: Output
    }]
  });
})();
var BsNavigationDirection;
(function(BsNavigationDirection2) {
  BsNavigationDirection2[BsNavigationDirection2["UP"] = 0] = "UP";
  BsNavigationDirection2[BsNavigationDirection2["DOWN"] = 1] = "DOWN";
})(BsNavigationDirection || (BsNavigationDirection = {}));
var BsDatepickerNavigationViewComponent = class _BsDatepickerNavigationViewComponent {
  constructor() {
    this.isDisabled = false;
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
  }
  navTo(down) {
    this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
  }
  view(viewMode) {
    if (this.isDisabled) {
      return;
    }
    this.onViewMode.emit(viewMode);
  }
  static {
    this.\u0275fac = function BsDatepickerNavigationViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerNavigationViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsDatepickerNavigationViewComponent,
      selectors: [["bs-datepicker-navigation-view"]],
      inputs: {
        calendar: "calendar",
        isDisabled: "isDisabled"
      },
      outputs: {
        onNavigate: "onNavigate",
        onViewMode: "onViewMode"
      },
      decls: 12,
      vars: 9,
      consts: [["type", "button", 1, "previous", 3, "click", "disabled"], ["type", "button", 1, "current", 3, "click", "disabled"], ["type", "button", 1, "next", 3, "click", "disabled"]],
      template: function BsDatepickerNavigationViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "button", 0);
          \u0275\u0275domListener("click", function BsDatepickerNavigationViewComponent_Template_button_click_0_listener() {
            return ctx.navTo(true);
          });
          \u0275\u0275domElementStart(1, "span");
          \u0275\u0275text(2, "\u2039");
          \u0275\u0275domElementEnd()();
          \u0275\u0275conditionalCreate(3, BsDatepickerNavigationViewComponent_Conditional_3_Template, 4, 2);
          \u0275\u0275text(4, " \u200B ");
          \u0275\u0275domElementStart(5, "button", 1);
          \u0275\u0275domListener("click", function BsDatepickerNavigationViewComponent_Template_button_click_5_listener() {
            return ctx.view("year");
          });
          \u0275\u0275domElementStart(6, "span");
          \u0275\u0275text(7);
          \u0275\u0275domElementEnd()();
          \u0275\u0275text(8, " \u200B ");
          \u0275\u0275domElementStart(9, "button", 2);
          \u0275\u0275domListener("click", function BsDatepickerNavigationViewComponent_Template_button_click_9_listener() {
            return ctx.navTo(false);
          });
          \u0275\u0275domElementStart(10, "span");
          \u0275\u0275text(11, "\u203A");
          \u0275\u0275domElementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275styleProp("visibility", ctx.calendar.hideLeftArrow ? "hidden" : "visible");
          \u0275\u0275domProperty("disabled", ctx.calendar.disableLeftArrow);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.calendar && ctx.calendar.monthTitle ? 3 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275domProperty("disabled", ctx.isDisabled);
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate(ctx.calendar.yearTitle);
          \u0275\u0275advance(2);
          \u0275\u0275styleProp("visibility", ctx.calendar.hideRightArrow ? "hidden" : "visible");
          \u0275\u0275domProperty("disabled", ctx.calendar.disableRightArrow);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerNavigationViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-datepicker-navigation-view",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <button class="previous"
      [disabled]="calendar.disableLeftArrow"
      [style.visibility]="calendar.hideLeftArrow ? 'hidden' : 'visible'"
      type="button"
      (click)="navTo(true)">
      <span>&lsaquo;</span>
    </button>
    
    @if (calendar && calendar.monthTitle) {
      &#8203;  <!-- zero-width space needed for correct alignment
      with preserveWhitespaces: false in Angular -->
      <button class="current"
        type="button"
        (click)="view('month')"
        [disabled]="isDisabled"
        ><span>{{ calendar.monthTitle }}</span>
      </button>
    }
    
    &#8203;  <!-- zero-width space needed for correct alignment
    with preserveWhitespaces: false in Angular -->
    
    <button
      class="current"
      (click)="view('year')"
      type="button"
      [disabled]="isDisabled"
      >
      <span>{{ calendar.yearTitle }}</span>
    </button>
    
    &#8203;  <!-- zero-width space needed for correct alignment
    with preserveWhitespaces: false in Angular -->
    
    <button class="next"
      [disabled]="calendar.disableRightArrow"
      [style.visibility]="calendar.hideRightArrow ? 'hidden' : 'visible'"
      type="button"
      (click)="navTo(false)"><span>&rsaquo;</span>
    </button>
    `,
      standalone: true,
      imports: []
    }]
  }], null, {
    calendar: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }]
  });
})();
var BsTimepickerViewComponent = class _BsTimepickerViewComponent {
  constructor() {
    this.ampm = "ok";
    this.hours = 0;
    this.minutes = 0;
  }
  static {
    this.\u0275fac = function BsTimepickerViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsTimepickerViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsTimepickerViewComponent,
      selectors: [["bs-timepicker"]],
      decls: 16,
      vars: 3,
      consts: [[1, "bs-timepicker-container"], [1, "bs-timepicker-controls"], ["type", "button", 1, "bs-decrease"], ["type", "text", "placeholder", "00", 3, "value"], ["type", "button", 1, "bs-increase"], ["type", "button", 1, "switch-time-format"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==", "alt", ""]],
      template: function BsTimepickerViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
          \u0275\u0275text(3, "-");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElement(4, "input", 3);
          \u0275\u0275domElementStart(5, "button", 4);
          \u0275\u0275text(6, "+");
          \u0275\u0275domElementEnd()();
          \u0275\u0275domElementStart(7, "div", 1)(8, "button", 2);
          \u0275\u0275text(9, "-");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElement(10, "input", 3);
          \u0275\u0275domElementStart(11, "button", 4);
          \u0275\u0275text(12, "+");
          \u0275\u0275domElementEnd()();
          \u0275\u0275domElementStart(13, "button", 5);
          \u0275\u0275text(14);
          \u0275\u0275domElement(15, "img", 6);
          \u0275\u0275domElementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(4);
          \u0275\u0275domProperty("value", ctx.hours);
          \u0275\u0275advance(6);
          \u0275\u0275domProperty("value", ctx.minutes);
          \u0275\u0275advance(4);
          \u0275\u0275textInterpolate1("", ctx.ampm, " ");
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsTimepickerViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-timepicker",
      template: `
    <div class="bs-timepicker-container">
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="hours" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="minutes" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <button class="switch-time-format" type="button">{{ ampm }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg=="
          alt="">
      </button>
    </div>
  `,
      standalone: true
    }]
  }], null, null);
})();
var BsCurrentDateViewComponent = class _BsCurrentDateViewComponent {
  static {
    this.\u0275fac = function BsCurrentDateViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsCurrentDateViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsCurrentDateViewComponent,
      selectors: [["bs-current-date"]],
      inputs: {
        title: "title"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "current-timedate"]],
      template: function BsCurrentDateViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "div", 0)(1, "span");
          \u0275\u0275text(2);
          \u0275\u0275domElementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate(ctx.title);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsCurrentDateViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-current-date",
      template: `<div class="current-timedate"><span>{{ title }}</span></div>`,
      standalone: true
    }]
  }], null, {
    title: [{
      type: Input
    }]
  });
})();
var BsCalendarLayoutComponent = class _BsCalendarLayoutComponent {
  static {
    this.\u0275fac = function BsCalendarLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsCalendarLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsCalendarLayoutComponent,
      selectors: [["bs-calendar-layout"]],
      ngContentSelectors: _c1,
      decls: 6,
      vars: 2,
      consts: [["title", "hey there"], [1, "bs-datepicker-head"], [1, "bs-datepicker-body"]],
      template: function BsCalendarLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c0);
          \u0275\u0275conditionalCreate(0, BsCalendarLayoutComponent_Conditional_0_Template, 1, 0, "bs-current-date", 0);
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275projection(2);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 2);
          \u0275\u0275projection(4, 1);
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(5, BsCalendarLayoutComponent_Conditional_5_Template, 1, 0, "bs-timepicker");
        }
        if (rf & 2) {
          \u0275\u0275conditional(false ? 0 : -1);
          \u0275\u0275advance(5);
          \u0275\u0275conditional(false ? 5 : -1);
        }
      },
      dependencies: [BsCurrentDateViewComponent, BsTimepickerViewComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsCalendarLayoutComponent, [{
    type: Component,
    args: [{
      selector: "bs-calendar-layout",
      template: `
    <!-- current date, will be added in nearest releases -->
    @if (false) {
      <bs-current-date title="hey there"></bs-current-date>
    }
    
    <!--navigation-->
    <div class="bs-datepicker-head">
      <ng-content select="bs-datepicker-navigation-view"></ng-content>
    </div>
    
    <div class="bs-datepicker-body">
      <ng-content></ng-content>
    </div>
    
    <!--timepicker-->
    @if (false) {
      <bs-timepicker></bs-timepicker>
    }
    `,
      standalone: true,
      imports: [BsCurrentDateViewComponent, BsTimepickerViewComponent]
    }]
  }], null, null);
})();
var BsYearsCalendarViewComponent = class _BsYearsCalendarViewComponent {
  constructor() {
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.onHover = new EventEmitter();
  }
  navigateTo(event) {
    const step = BsNavigationDirection.DOWN === event ? -1 : 1;
    this.onNavigate.emit({
      step: {
        year: step * yearsPerCalendar
      }
    });
  }
  viewYear(year) {
    this.onSelect.emit(year);
  }
  hoverYear(cell, isHovered) {
    this.onHover.emit({
      cell,
      isHovered
    });
  }
  changeViewMode(event) {
    this.onViewMode.emit(event);
  }
  static {
    this.\u0275fac = function BsYearsCalendarViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsYearsCalendarViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsYearsCalendarViewComponent,
      selectors: [["bs-years-calendar-view"]],
      inputs: {
        calendar: "calendar"
      },
      outputs: {
        onNavigate: "onNavigate",
        onViewMode: "onViewMode",
        onSelect: "onSelect",
        onHover: "onHover"
      },
      decls: 6,
      vars: 1,
      consts: [[3, "onNavigate", "onViewMode", "calendar"], ["role", "grid", 1, "years"], ["role", "gridcell", 3, "disabled", "is-highlighted"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]],
      template: function BsYearsCalendarViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
          \u0275\u0275listener("onNavigate", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) {
            return ctx.navigateTo($event);
          })("onViewMode", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) {
            return ctx.changeViewMode($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(2, "table", 1)(3, "tbody");
          \u0275\u0275repeaterCreate(4, BsYearsCalendarViewComponent_For_5_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275property("calendar", ctx.calendar);
          \u0275\u0275advance(3);
          \u0275\u0275repeater(ctx.calendar == null ? null : ctx.calendar.years);
        }
      },
      dependencies: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsYearsCalendarViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-years-calendar-view",
      template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>
    
      <table role="grid" class="years">
        <tbody>
          @for (row of calendar?.years; track row) {
            <tr>
              @for (year of row; track year) {
                <td role="gridcell"
                  (click)="viewYear(year)"
                  (mouseenter)="hoverYear(year, true)"
                  (mouseleave)="hoverYear(year, false)"
                  [class.disabled]="year.isDisabled"
                  [class.is-highlighted]="year.isHovered">
                  <span [class.selected]="year.isSelected">{{ year.label }}</span>
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    </bs-calendar-layout>
    `,
      standalone: true,
      imports: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent]
    }]
  }], null, {
    calendar: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onHover: [{
      type: Output
    }]
  });
})();
var BsMonthCalendarViewComponent = class _BsMonthCalendarViewComponent {
  constructor() {
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.onHover = new EventEmitter();
  }
  navigateTo(event) {
    const step = BsNavigationDirection.DOWN === event ? -1 : 1;
    this.onNavigate.emit({
      step: {
        year: step
      }
    });
  }
  viewMonth(month) {
    this.onSelect.emit(month);
  }
  hoverMonth(cell, isHovered) {
    this.onHover.emit({
      cell,
      isHovered
    });
  }
  changeViewMode(event) {
    this.onViewMode.emit(event);
  }
  static {
    this.\u0275fac = function BsMonthCalendarViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsMonthCalendarViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsMonthCalendarViewComponent,
      selectors: [["bs-month-calendar-view"]],
      inputs: {
        calendar: "calendar"
      },
      outputs: {
        onNavigate: "onNavigate",
        onViewMode: "onViewMode",
        onSelect: "onSelect",
        onHover: "onHover"
      },
      decls: 6,
      vars: 1,
      consts: [[3, "onNavigate", "onViewMode", "calendar"], ["role", "grid", 1, "months"], ["role", "gridcell", 3, "disabled", "is-highlighted"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]],
      template: function BsMonthCalendarViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
          \u0275\u0275listener("onNavigate", function BsMonthCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) {
            return ctx.navigateTo($event);
          })("onViewMode", function BsMonthCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) {
            return ctx.changeViewMode($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(2, "table", 1)(3, "tbody");
          \u0275\u0275repeaterCreate(4, BsMonthCalendarViewComponent_For_5_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275property("calendar", ctx.calendar);
          \u0275\u0275advance(3);
          \u0275\u0275repeater(ctx.calendar == null ? null : ctx.calendar.months);
        }
      },
      dependencies: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsMonthCalendarViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-month-calendar-view",
      template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>
    
      <table role="grid" class="months">
        <tbody>
          @for (row of calendar?.months; track row) {
            <tr>
              @for (month of row; track month) {
                <td role="gridcell"
                  (click)="viewMonth(month)"
                  (mouseenter)="hoverMonth(month, true)"
                  (mouseleave)="hoverMonth(month, false)"
                  [class.disabled]="month.isDisabled"
                  [class.is-highlighted]="month.isHovered">
                  <span [class.selected]="month.isSelected">{{ month.label }}</span>
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    </bs-calendar-layout>
    `,
      standalone: true,
      imports: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent]
    }]
  }], null, {
    calendar: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onHover: [{
      type: Output
    }]
  });
})();
var BsDatepickerDayDecoratorComponent = class _BsDatepickerDayDecoratorComponent {
  constructor(_config, _elRef, _renderer) {
    this._config = _config;
    this._elRef = _elRef;
    this._renderer = _renderer;
    this.day = {
      date: /* @__PURE__ */ new Date(),
      label: ""
    };
  }
  ngOnInit() {
    if (this.day?.isToday && this._config && this._config.customTodayClass) {
      this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
    }
    if (typeof this.day?.customClasses === "string") {
      this.day?.customClasses.split(" ").filter((className) => className).forEach((className) => {
        this._renderer.addClass(this._elRef.nativeElement, className);
      });
    }
  }
  static {
    this.\u0275fac = function BsDatepickerDayDecoratorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerDayDecoratorComponent)(\u0275\u0275directiveInject(BsDatepickerConfig), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsDatepickerDayDecoratorComponent,
      selectors: [["", "bsDatepickerDayDecorator", ""]],
      hostVars: 16,
      hostBindings: function BsDatepickerDayDecoratorComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("disabled", ctx.day.isDisabled)("is-highlighted", ctx.day.isHovered)("is-other-month", ctx.day.isOtherMonth)("is-active-other-month", ctx.day.isOtherMonthHovered)("in-range", ctx.day.isInRange)("select-start", ctx.day.isSelectionStart)("select-end", ctx.day.isSelectionEnd)("selected", ctx.day.isSelected);
        }
      },
      inputs: {
        day: "day"
      },
      attrs: _c2,
      decls: 1,
      vars: 1,
      template: function BsDatepickerDayDecoratorComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275text(0);
        }
        if (rf & 2) {
          \u0275\u0275textInterpolate(ctx.day && ctx.day.label || "");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerDayDecoratorComponent, [{
    type: Component,
    args: [{
      selector: "[bsDatepickerDayDecorator]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.disabled]": "day.isDisabled",
        "[class.is-highlighted]": "day.isHovered",
        "[class.is-other-month]": "day.isOtherMonth",
        "[class.is-active-other-month]": "day.isOtherMonthHovered",
        "[class.in-range]": "day.isInRange",
        "[class.select-start]": "day.isSelectionStart",
        "[class.select-end]": "day.isSelectionEnd",
        "[class.selected]": "day.isSelected"
      },
      template: `{{ day && day.label || '' }}`,
      standalone: true
    }]
  }], () => [{
    type: BsDatepickerConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    day: [{
      type: Input
    }]
  });
})();
var BsDaysCalendarViewComponent = class _BsDaysCalendarViewComponent {
  constructor(_config) {
    this._config = _config;
    this.onNavigate = new EventEmitter();
    this.onViewMode = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.onHover = new EventEmitter();
    this.onHoverWeek = new EventEmitter();
    this.isiOS = /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    if (this._config.dateTooltipTexts && this._config.dateTooltipTexts.length > 0) {
      this.isShowTooltip = true;
    }
  }
  navigateTo(event) {
    const step = BsNavigationDirection.DOWN === event ? -1 : 1;
    this.onNavigate.emit({
      step: {
        month: step
      }
    });
  }
  changeViewMode(event) {
    this.onViewMode.emit(event);
  }
  selectDay(event) {
    this.onSelect.emit(event);
  }
  selectWeek(week2) {
    if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
      return;
    }
    if (week2.days.length === 0) {
      return;
    }
    if (this._config.selectWeek && week2.days[0] && !week2.days[0].isDisabled && this._config.selectFromOtherMonth) {
      this.onSelect.emit(week2.days[0]);
      return;
    }
    const selectedDay = week2.days.find((day) => {
      return this._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
    });
    this.onSelect.emit(selectedDay);
    if (this._config.selectWeekDateRange) {
      const days = week2.days.slice(0);
      const lastDayOfRange = days.reverse().find((day) => {
        return this._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
      });
      this.onSelect.emit(lastDayOfRange);
    }
  }
  weekHoverHandler(cell, isHovered) {
    if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
      return;
    }
    const hasActiveDays = cell.days.find((day) => {
      return this._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
    });
    if (hasActiveDays) {
      cell.isHovered = isHovered;
      this.isWeekHovered = isHovered;
      this.onHoverWeek.emit(cell);
    }
  }
  hoverDay(cell, isHovered) {
    if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
      cell.isOtherMonthHovered = isHovered;
    }
    if (this._config.dateTooltipTexts) {
      cell.tooltipText = "";
      this._config.dateTooltipTexts.forEach((dateData) => {
        if (isSameDay$1(dateData.date, cell.date)) {
          cell.tooltipText = dateData.tooltipText;
          return;
        }
      });
    }
    this.onHover.emit({
      cell,
      isHovered
    });
  }
  static {
    this.\u0275fac = function BsDaysCalendarViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaysCalendarViewComponent)(\u0275\u0275directiveInject(BsDatepickerConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsDaysCalendarViewComponent,
      selectors: [["bs-days-calendar-view"]],
      inputs: {
        calendar: "calendar",
        options: "options",
        isDisabled: "isDisabled"
      },
      outputs: {
        onNavigate: "onNavigate",
        onViewMode: "onViewMode",
        onSelect: "onSelect",
        onHover: "onHover",
        onHoverWeek: "onHoverWeek"
      },
      decls: 11,
      vars: 3,
      consts: [[3, "onNavigate", "onViewMode", "calendar", "isDisabled"], ["role", "grid", 1, "days", "weeks"], ["aria-label", "weekday"], [1, "week", 3, "active-week"], ["role", "gridcell"], [1, "week"], [3, "click"], [3, "click", "mouseenter", "mouseleave"], ["bsDatepickerDayDecorator", "", 3, "day", "tooltip"], ["bsDatepickerDayDecorator", "", 3, "day"], ["bsDatepickerDayDecorator", "", 3, "click", "mouseenter", "mouseleave", "day", "tooltip"], ["bsDatepickerDayDecorator", "", 3, "click", "mouseenter", "mouseleave", "day"], ["bsDatepickerDayDecorator", "", 3, "click", "day"]],
      template: function BsDaysCalendarViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "bs-calendar-layout")(1, "bs-datepicker-navigation-view", 0);
          \u0275\u0275listener("onNavigate", function BsDaysCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) {
            return ctx.navigateTo($event);
          })("onViewMode", function BsDaysCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) {
            return ctx.changeViewMode($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(2, "table", 1)(3, "thead")(4, "tr");
          \u0275\u0275conditionalCreate(5, BsDaysCalendarViewComponent_Conditional_5_Template, 1, 0, "th");
          \u0275\u0275repeaterCreate(6, BsDaysCalendarViewComponent_For_7_Template, 2, 1, "th", 2, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(8, "tbody");
          \u0275\u0275repeaterCreate(9, BsDaysCalendarViewComponent_For_10_Template, 4, 1, "tr", null, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275property("calendar", ctx.calendar)("isDisabled", !!ctx.isDisabled);
          \u0275\u0275advance(4);
          \u0275\u0275conditional(ctx.options && ctx.options.showWeekNumbers ? 5 : -1);
          \u0275\u0275advance();
          \u0275\u0275repeater(ctx.calendar.weekdays);
          \u0275\u0275advance(3);
          \u0275\u0275repeater(ctx.calendar.weeks);
        }
      },
      dependencies: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent, BsDatepickerDayDecoratorComponent, TooltipModule, TooltipDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaysCalendarViewComponent, [{
    type: Component,
    args: [{
      selector: "bs-days-calendar-view",
      // changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        [isDisabled]="!!isDisabled"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>
      <!--days matrix-->
      <table role="grid" class="days weeks">
        <thead>
          <tr>
            <!--if show weeks-->
            @if (options && options.showWeekNumbers) {
              <th></th>
            }
            @for (weekday of calendar.weekdays; track weekday; let i = $index) {
              <th
                aria-label="weekday">{{ calendar.weekdays[i] }}
              </th>
            }
          </tr>
        </thead>
        <tbody>
          @for (week of calendar.weeks; track week; let i = $index) {
            <tr>
              @if (options && options.showWeekNumbers) {
                <td class="week" [class.active-week]="isWeekHovered" >
                  @if (isiOS) {
                    <span (click)="selectWeek(week)">{{ calendar.weekNumbers[i] }}</span>
                  }
                  @if (!isiOS) {
                    <span
                      (click)="selectWeek(week)"
                      (mouseenter)="weekHoverHandler(week, true)"
                    (mouseleave)="weekHoverHandler(week, false)">{{ calendar.weekNumbers[i] }}</span>
                  }
                </td>
              }
              @for (day of week.days; track day) {
                <td role="gridcell">
                  <!-- When we want to show tooltips for dates -->
                  @if (!isiOS && isShowTooltip) {
                    <span bsDatepickerDayDecorator
                      [day]="day"
                      (click)="selectDay(day)"
                      tooltip="{{day.tooltipText}}"
                      (mouseenter)="hoverDay(day, true)"
                    (mouseleave)="hoverDay(day, false)">{{ day.label }} 3</span>
                  }
                  <!-- When tooltips for dates are disabled -->
                  @if (!isiOS && !isShowTooltip) {
                    <span bsDatepickerDayDecorator
                      [day]="day"
                      (click)="selectDay(day)"
                      (mouseenter)="hoverDay(day, true)"
                    (mouseleave)="hoverDay(day, false)">{{ day.label }} 2</span>
                  }
                  <!-- For mobile iOS view, tooltips are not needed -->
                  @if (isiOS) {
                    <span bsDatepickerDayDecorator
                      [day]="day"
                    (click)="selectDay(day)">{{ day.label }} 1</span>
                  }
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    
    </bs-calendar-layout>
    `,
      standalone: true,
      imports: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent, BsDatepickerDayDecoratorComponent, TooltipModule]
    }]
  }], () => [{
    type: BsDatepickerConfig
  }], {
    calendar: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    onNavigate: [{
      type: Output
    }],
    onViewMode: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onHover: [{
      type: Output
    }],
    onHoverWeek: [{
      type: Output
    }]
  });
})();
var BsDatepickerContainerComponent = class _BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
  set value(value) {
    this._effects?.setValue(value);
  }
  get isDatePickerDisabled() {
    return !!this._config.isDisabled;
  }
  get isDatepickerDisabled() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get isDatepickerReadonly() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
    super();
    this._config = _config;
    this._store = _store;
    this._element = _element;
    this._actions = _actions;
    this._positionService = _positionService;
    this.valueChange = new EventEmitter();
    this.animationState = "void";
    this.isRangePicker = false;
    this._subs = [];
    this._effects = _effects;
    _renderer.setStyle(_element.nativeElement, "display", "block");
    _renderer.setStyle(_element.nativeElement, "position", "absolute");
  }
  ngOnInit() {
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this._config.adaptivePosition
        },
        preventOverflow: {
          enabled: this._config.adaptivePosition
        }
      },
      allowedPositions: this._config.allowedPositions
    });
    this._positionService.event$?.pipe(take(1)).subscribe(() => {
      this._positionService.disable();
      if (this._config.isAnimated) {
        this.animationState = this.isTopPosition ? "animated-up" : "animated-down";
        return;
      }
      this.animationState = "unanimated";
    });
    this.isOtherMonthsActive = this._config.selectFromOtherMonth;
    this.containerClass = this._config.containerClass;
    this.showTodayBtn = this._config.showTodayButton;
    this.todayBtnLbl = this._config.todayButtonLabel;
    this.todayPos = this._config.todayPosition;
    this.showClearBtn = this._config.showClearButton;
    this.clearBtnLbl = this._config.clearButtonLabel;
    this.clearPos = this._config.clearPosition;
    this.customRangeBtnLbl = this._config.customRangeButtonLabel;
    this.withTimepicker = this._config.withTimepicker;
    this._effects?.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
    let currentDate;
    this._subs.push(this._store.select((state2) => state2.selectedDate).subscribe((date) => {
      currentDate = date;
      this.valueChange.emit(date);
    }));
    this._subs.push(this._store.select((state2) => state2.selectedTime).subscribe((time) => {
      if (!time || !time[0] || !(time[0] instanceof Date) || time[0] === currentDate) {
        return;
      }
      this.valueChange.emit(time[0]);
    }));
    this._store.dispatch(this._actions.changeViewMode(this._config.startView));
  }
  ngAfterViewInit() {
    this.selectedTimeSub.add(this.selectedTime?.subscribe((val) => {
      if (Array.isArray(val) && val.length >= 1) {
        this.startTimepicker?.writeValue(val[0]);
      }
    }));
    this.startTimepicker?.registerOnChange((val) => {
      this.timeSelectHandler(val, 0);
    });
  }
  get isTopPosition() {
    return this._element.nativeElement.classList.contains("top");
  }
  positionServiceEnable() {
    this._positionService.enable();
  }
  timeSelectHandler(date, index) {
    this._store.dispatch(this._actions.selectTime(date, index));
  }
  daySelectHandler(day) {
    if (!day) {
      return;
    }
    const isDisabled = this.isOtherMonthsActive ? day.isDisabled : day.isOtherMonth || day.isDisabled;
    if (isDisabled) {
      return;
    }
    this._store.dispatch(this._actions.select(day.date));
  }
  monthSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    this._store.dispatch(this._actions.navigateTo({
      unit: {
        month: getMonth(day.date),
        year: getFullYear(day.date)
      },
      viewMode: "day"
    }));
  }
  yearSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    this._store.dispatch(this._actions.navigateTo({
      unit: {
        year: getFullYear(day.date)
      },
      viewMode: "month"
    }));
  }
  setToday() {
    this._store.dispatch(this._actions.select(/* @__PURE__ */ new Date()));
  }
  clearDate() {
    this._store.dispatch(this._actions.select(void 0));
  }
  ngOnDestroy() {
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    this.selectedTimeSub.unsubscribe();
    this._effects?.destroy();
  }
  static {
    this.\u0275fac = function BsDatepickerContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerContainerComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(BsDatepickerConfig), \u0275\u0275directiveInject(BsDatepickerStore), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(BsDatepickerActions), \u0275\u0275directiveInject(BsDatepickerEffects), \u0275\u0275directiveInject(PositioningService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsDatepickerContainerComponent,
      selectors: [["bs-datepicker-container"]],
      viewQuery: function BsDatepickerContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c3, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.startTimepicker = _t.first);
        }
      },
      hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"],
      hostVars: 2,
      hostBindings: function BsDatepickerContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function BsDatepickerContainerComponent_click_HostBindingHandler($event) {
            return ctx._stopPropagation($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("disabled", ctx.isDatepickerDisabled)("readonly", ctx.isDatepickerReadonly);
        }
      },
      features: [\u0275\u0275ProvidersFeature([BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions]), \u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["startTP", ""], ["endTP", ""], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container"], [1, "bs-media-container"], [1, "bs-datepicker-buttons"], [1, "bs-datepicker-custom-range"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options"], [1, "bs-timepicker-in-datepicker-container"], [3, "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", "calendar", "isDisabled", "options"], [3, "disabled"], [3, "bs-datepicker-multiple", "calendar"], [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], [1, "btn-today-wrapper", 3, "today-left", "today-right", "today-center"], [1, "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"]],
      template: function BsDatepickerContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275conditionalCreate(0, BsDatepickerContainerComponent_Conditional_0_Template, 10, 8, "div", 2);
          \u0275\u0275pipe(1, "async");
        }
        if (rf & 2) {
          \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx.viewMode) ? 0 : -1);
        }
      },
      dependencies: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      encapsulation: 2,
      data: {
        animation: [datepickerAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-datepicker-container",
      providers: [BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions],
      host: {
        class: "bottom",
        "(click)": "_stopPropagation($event)",
        role: "dialog",
        "aria-label": "calendar"
      },
      animations: [datepickerAnimation],
      standalone: true,
      imports: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      template: `<!-- days calendar view mode -->
@if (viewMode | async) {
  <div class="bs-datepicker" [ngClass]="containerClass">
    <div class="bs-datepicker-container"
      [@datepickerAnimation]="animationState"
      (@datepickerAnimation.done)="positionServiceEnable()">
      <!--calendars-->
      <div class="bs-calendar-container" role="application">
        @switch (viewMode | async) {
          <!--days calendar-->
          @case ('day') {
            <div class="bs-media-container">
              @for (calendar of daysCalendar$ | async; track calendar) {
                <bs-days-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  [isDisabled]="isDatePickerDisabled"
                  [options]="options$ | async"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="dayHoverHandler($event)"
                  (onHoverWeek)="weekHoverHandler($event)"
                  (onSelect)="daySelectHandler($event)">
                </bs-days-calendar-view>
              }
            </div>
            @if (withTimepicker) {
              <div class="bs-timepicker-in-datepicker-container">
                <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
                @if (isRangePicker) {
                  <timepicker #endTP [disabled]="isDatePickerDisabled"></timepicker>
                }
              </div>
            }
          }
          <!--months calendar-->
          @case ('month') {
            <div class="bs-media-container">
              @for (calendar of monthsCalendar | async; track calendar) {
                <bs-month-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="monthHoverHandler($event)"
                  (onSelect)="monthSelectHandler($event)">
                </bs-month-calendar-view>
              }
            </div>
          }
          <!--years calendar-->
          @case ('year') {
            <div class="bs-media-container">
              @for (calendar of yearsCalendar | async; track calendar) {
                <bs-years-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="yearHoverHandler($event)"
                  (onSelect)="yearSelectHandler($event)">
                </bs-years-calendar-view>
              }
            </div>
          }
        }
      </div>
      <!--applycancel buttons-->
      @if (false) {
        <div class="bs-datepicker-buttons">
          <button class="btn btn-success" type="button">Apply</button>
          <button class="btn btn-default" type="button">Cancel</button>
        </div>
      }
      @if (showTodayBtn || showClearBtn) {
        <div class="bs-datepicker-buttons">
          @if (showTodayBtn) {
            <div class="btn-today-wrapper"
              [class.today-left]="todayPos === 'left'"
              [class.today-right]="todayPos === 'right'"
              [class.today-center]="todayPos === 'center'"
              >
              <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
            </div>
          }
          @if (showClearBtn) {
            <div class="btn-clear-wrapper"
              [class.clear-left]="clearPos === 'left'"
              [class.clear-right]="clearPos === 'right'"
              [class.clear-center]="clearPos === 'center'"
              >
              <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
            </div>
          }
        </div>
      }
    </div>
    <!--custom dates or date ranges picker-->
    @if (customRanges && customRanges.length > 0) {
      <div class="bs-datepicker-custom-range">
        <bs-custom-date-view
          [selectedRange]="chosenRange"
          [ranges]="customRanges"
          [customRangeLabel]="customRangeBtnLbl"
          (onSelect)="setRangeOnCalendar($event)">
        </bs-custom-date-view>
      </div>
    }
  </div>
}
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    startTimepicker: [{
      type: ViewChild,
      args: ["startTP"]
    }],
    isDatepickerDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    isDatepickerReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var previousDate$1;
var BsDatepickerDirective = class _BsDatepickerDirective {
  get readonlyValue() {
    return this.isDisabled ? "" : null;
  }
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this.placement = "bottom";
    this.triggers = "click";
    this.outsideClick = true;
    this.container = "body";
    this.outsideEsc = true;
    this.isDestroy$ = new Subject();
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    this._dateInputFormat$ = new Subject();
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    this.onShown = this._datepicker.onShown;
    this.onHidden = this._datepicker.onHidden;
    this.isOpen$ = new BehaviorSubject(this.isOpen);
  }
  /**
   * Returns whether or not the datepicker is currently being shown
   */
  get isOpen() {
    return this._datepicker.isShown;
  }
  set isOpen(value) {
    this.isOpen$.next(value);
  }
  /**
   * Initial value of datepicker
   */
  set bsValue(value) {
    if (this._bsValue && value && this._bsValue.getTime() === value.getTime()) {
      return;
    }
    if (!this._bsValue && value && !this._config.withTimepicker) {
      const now = /* @__PURE__ */ new Date();
      copyTime(value, now);
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setCurrentTimeOnDateSelect(value);
    }
    this.initPreviousValue();
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  get dateInputFormat$() {
    return this._dateInputFormat$;
  }
  ngOnInit() {
    this._datepicker.listen({
      outsideClick: this.outsideClick,
      outsideEsc: this.outsideEsc,
      triggers: this.triggers,
      show: () => this.show()
    });
    this.setConfig();
    this.initPreviousValue();
  }
  initPreviousValue() {
    previousDate$1 = this._bsValue;
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
        this.initPreviousValue();
        this._bsValue = setCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
      this.setConfig();
      this._dateInputFormat$.next(this.bsConfig && this.bsConfig.dateInputFormat);
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["daysDisabled"]) {
      this._datepickerRef.instance.daysDisabled = this.daysDisabled;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
    if (changes["dateTooltipTexts"]) {
      this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
    }
  }
  initSubscribes() {
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
        this.initPreviousValue();
        this.bsValue = value;
        if (this.keepDatepickerModalOpened()) {
          return;
        }
        this.hide();
      }));
    }
  }
  keepDatepickerModalOpened() {
    if (!previousDate$1 || !this.bsConfig?.keepDatepickerOpened || !this._config.withTimepicker) {
      return false;
    }
    return this.isDateSame();
  }
  isDateSame() {
    return previousDate$1 instanceof Date && this._bsValue?.getDate() === previousDate$1?.getDate() && this._bsValue?.getMonth() === previousDate$1?.getMonth() && this._bsValue?.getFullYear() === previousDate$1?.getFullYear();
  }
  ngAfterViewInit() {
    this.isOpen$.pipe(filter((isOpen) => isOpen !== this.isOpen), takeUntil(this.isDestroy$)).subscribe(() => this.toggle());
  }
  /**
   * Opens an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  show() {
    if (this._datepicker.isShown) {
      return;
    }
    this.setConfig();
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDatepickerContainerComponent).to(this.container).position({
      attachment: this.placement
    }).show({
      placement: this.placement
    });
    this.initSubscribes();
  }
  /**
   * Closes an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  hide() {
    if (this.isOpen) {
      this._datepicker.hide();
    }
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    if (this._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
    }
  }
  /**
   * Toggles an element’s datepicker. This is considered a “manual” triggering
   * of the datepicker.
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  /**
   * Set config for datepicker
   */
  setConfig() {
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: this._config.keepDatesOutOfRules ? this._bsValue : checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      minMode: this.minMode || this.bsConfig && this.bsConfig.minMode,
      initCurrentTime: this.bsConfig?.initCurrentTime,
      keepDatepickerOpened: this.bsConfig?.keepDatepickerOpened,
      keepDatesOutOfRules: this.bsConfig?.keepDatesOutOfRules
    });
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.isOpen$.next(false);
    if (this.isDestroy$) {
      this.isDestroy$.next(null);
      this.isDestroy$.complete();
    }
    this.unsubscribeSubscriptions();
  }
  static {
    this.\u0275fac = function BsDatepickerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerDirective)(\u0275\u0275directiveInject(BsDatepickerConfig), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ComponentLoaderFactory));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BsDatepickerDirective,
      selectors: [["", "bsDatepicker", ""]],
      hostVars: 1,
      hostBindings: function BsDatepickerDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("readonly", ctx.readonlyValue);
        }
      },
      inputs: {
        placement: "placement",
        triggers: "triggers",
        outsideClick: "outsideClick",
        container: "container",
        outsideEsc: "outsideEsc",
        isDisabled: "isDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        ignoreMinMaxErrors: "ignoreMinMaxErrors",
        minMode: "minMode",
        daysDisabled: "daysDisabled",
        datesDisabled: "datesDisabled",
        datesEnabled: "datesEnabled",
        dateCustomClasses: "dateCustomClasses",
        dateTooltipTexts: "dateTooltipTexts",
        isOpen: "isOpen",
        bsValue: "bsValue",
        bsConfig: "bsConfig"
      },
      outputs: {
        onShown: "onShown",
        onHidden: "onHidden",
        bsValueChange: "bsValueChange"
      },
      exportAs: ["bsDatepicker"],
      features: [\u0275\u0275ProvidersFeature([ComponentLoaderFactory, PositioningService]), \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDatepicker]",
      exportAs: "bsDatepicker",
      providers: [ComponentLoaderFactory, PositioningService],
      standalone: true
    }]
  }], () => [{
    type: BsDatepickerConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    placement: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    outsideClick: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    outsideEsc: [{
      type: Input
    }],
    onShown: [{
      type: Output
    }],
    onHidden: [{
      type: Output
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    ignoreMinMaxErrors: [{
      type: Input
    }],
    minMode: [{
      type: Input
    }],
    daysDisabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    dateTooltipTexts: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }],
    readonlyValue: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }],
    isOpen: [{
      type: Input
    }],
    bsValue: [{
      type: Input
    }],
    bsConfig: [{
      type: Input
    }]
  });
})();
var BsDatepickerInlineConfig = class _BsDatepickerInlineConfig extends BsDatepickerConfig {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BsDatepickerInlineConfig_BaseFactory;
      return function BsDatepickerInlineConfig_Factory(__ngFactoryType__) {
        return (\u0275BsDatepickerInlineConfig_BaseFactory || (\u0275BsDatepickerInlineConfig_BaseFactory = \u0275\u0275getInheritedFactory(_BsDatepickerInlineConfig)))(__ngFactoryType__ || _BsDatepickerInlineConfig);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BsDatepickerInlineConfig,
      factory: _BsDatepickerInlineConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInlineConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BsDatepickerInlineContainerComponent = class _BsDatepickerInlineContainerComponent extends BsDatepickerContainerComponent {
  get disabledValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get readonlyValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
    super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
    _renderer.setStyle(_element.nativeElement, "display", "inline-block");
    _renderer.setStyle(_element.nativeElement, "position", "static");
  }
  static {
    this.\u0275fac = function BsDatepickerInlineContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerInlineContainerComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(BsDatepickerConfig), \u0275\u0275directiveInject(BsDatepickerStore), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(BsDatepickerActions), \u0275\u0275directiveInject(BsDatepickerEffects), \u0275\u0275directiveInject(PositioningService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsDatepickerInlineContainerComponent,
      selectors: [["bs-datepicker-inline-container"]],
      hostVars: 2,
      hostBindings: function BsDatepickerInlineContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function BsDatepickerInlineContainerComponent_click_HostBindingHandler($event) {
            return ctx._stopPropagation($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("disabled", ctx.disabledValue)("readonly", ctx.readonlyValue);
        }
      },
      features: [\u0275\u0275ProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), \u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["startTP", ""], ["endTP", ""], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container"], [1, "bs-media-container"], [1, "bs-datepicker-buttons"], [1, "bs-datepicker-custom-range"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options"], [1, "bs-timepicker-in-datepicker-container"], [3, "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", "calendar", "isDisabled", "options"], [3, "disabled"], [3, "bs-datepicker-multiple", "calendar"], [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], [1, "btn-today-wrapper", 3, "today-left", "today-right", "today-center"], [1, "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"]],
      template: function BsDatepickerInlineContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275conditionalCreate(0, BsDatepickerInlineContainerComponent_Conditional_0_Template, 10, 8, "div", 2);
          \u0275\u0275pipe(1, "async");
        }
        if (rf & 2) {
          \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx.viewMode) ? 0 : -1);
        }
      },
      dependencies: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      encapsulation: 2,
      data: {
        animation: [datepickerAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInlineContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-datepicker-inline-container",
      providers: [BsDatepickerStore, BsDatepickerEffects],
      host: {
        "(click)": "_stopPropagation($event)"
      },
      animations: [datepickerAnimation],
      standalone: true,
      imports: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      template: `<!-- days calendar view mode -->
@if (viewMode | async) {
  <div class="bs-datepicker" [ngClass]="containerClass">
    <div class="bs-datepicker-container"
      [@datepickerAnimation]="animationState"
      (@datepickerAnimation.done)="positionServiceEnable()">
      <!--calendars-->
      <div class="bs-calendar-container" role="application">
        @switch (viewMode | async) {
          <!--days calendar-->
          @case ('day') {
            <div class="bs-media-container">
              @for (calendar of daysCalendar$ | async; track calendar) {
                <bs-days-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  [isDisabled]="isDatePickerDisabled"
                  [options]="options$ | async"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="dayHoverHandler($event)"
                  (onHoverWeek)="weekHoverHandler($event)"
                  (onSelect)="daySelectHandler($event)">
                </bs-days-calendar-view>
              }
            </div>
            @if (withTimepicker) {
              <div class="bs-timepicker-in-datepicker-container">
                <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
                @if (isRangePicker) {
                  <timepicker #endTP [disabled]="isDatePickerDisabled"></timepicker>
                }
              </div>
            }
          }
          <!--months calendar-->
          @case ('month') {
            <div class="bs-media-container">
              @for (calendar of monthsCalendar | async; track calendar) {
                <bs-month-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="monthHoverHandler($event)"
                  (onSelect)="monthSelectHandler($event)">
                </bs-month-calendar-view>
              }
            </div>
          }
          <!--years calendar-->
          @case ('year') {
            <div class="bs-media-container">
              @for (calendar of yearsCalendar | async; track calendar) {
                <bs-years-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="yearHoverHandler($event)"
                  (onSelect)="yearSelectHandler($event)">
                </bs-years-calendar-view>
              }
            </div>
          }
        }
      </div>
      <!--applycancel buttons-->
      @if (false) {
        <div class="bs-datepicker-buttons">
          <button class="btn btn-success" type="button">Apply</button>
          <button class="btn btn-default" type="button">Cancel</button>
        </div>
      }
      @if (showTodayBtn || showClearBtn) {
        <div class="bs-datepicker-buttons">
          @if (showTodayBtn) {
            <div class="btn-today-wrapper"
              [class.today-left]="todayPos === 'left'"
              [class.today-right]="todayPos === 'right'"
              [class.today-center]="todayPos === 'center'"
              >
              <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
            </div>
          }
          @if (showClearBtn) {
            <div class="btn-clear-wrapper"
              [class.clear-left]="clearPos === 'left'"
              [class.clear-right]="clearPos === 'right'"
              [class.clear-center]="clearPos === 'center'"
              >
              <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
            </div>
          }
        </div>
      }
    </div>
    <!--custom dates or date ranges picker-->
    @if (customRanges && customRanges.length > 0) {
      <div class="bs-datepicker-custom-range">
        <bs-custom-date-view
          [selectedRange]="chosenRange"
          [ranges]="customRanges"
          [customRangeLabel]="customRangeBtnLbl"
          (onSelect)="setRangeOnCalendar($event)">
        </bs-custom-date-view>
      </div>
    }
  </div>
}
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    disabledValue: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    readonlyValue: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var BsDatepickerInlineDirective = class _BsDatepickerInlineDirective {
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
  }
  /**
   * Initial value of datepicker
   */
  set bsValue(value) {
    if (this._bsValue === value) {
      return;
    }
    if (!this._bsValue && value && !this._config.withTimepicker) {
      const now = /* @__PURE__ */ new Date();
      copyTime(value, now);
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setCurrentTimeOnDateSelect(value);
    }
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  ngOnInit() {
    this.setConfig();
    this.initSubscribes();
  }
  initSubscribes() {
    this.unsubscribeSubscriptions();
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
        this.bsValue = value;
      }));
    }
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
        this._bsValue = setCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
      this._datepickerRef.instance.value = this._bsValue;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
    if (changes["dateTooltipTexts"]) {
      this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
    }
    this.setConfig();
  }
  /**
   * Set config for datepicker
   */
  setConfig() {
    if (this._datepicker) {
      this._datepicker.hide();
    }
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      initCurrentTime: this.bsConfig?.initCurrentTime
    });
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDatepickerInlineContainerComponent).to(this._elementRef).show();
    this.initSubscribes();
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.unsubscribeSubscriptions();
  }
  static {
    this.\u0275fac = function BsDatepickerInlineDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerInlineDirective)(\u0275\u0275directiveInject(BsDatepickerInlineConfig), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ComponentLoaderFactory));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BsDatepickerInlineDirective,
      selectors: [["bs-datepicker-inline"]],
      inputs: {
        bsConfig: "bsConfig",
        isDisabled: "isDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        dateCustomClasses: "dateCustomClasses",
        dateTooltipTexts: "dateTooltipTexts",
        datesEnabled: "datesEnabled",
        datesDisabled: "datesDisabled",
        bsValue: "bsValue"
      },
      outputs: {
        bsValueChange: "bsValueChange"
      },
      exportAs: ["bsDatepickerInline"],
      features: [\u0275\u0275ProvidersFeature([ComponentLoaderFactory, PositioningService]), \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInlineDirective, [{
    type: Directive,
    args: [{
      selector: "bs-datepicker-inline",
      exportAs: "bsDatepickerInline",
      standalone: true,
      providers: [ComponentLoaderFactory, PositioningService]
    }]
  }], () => [{
    type: BsDatepickerInlineConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    bsConfig: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    dateTooltipTexts: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }],
    bsValue: [{
      type: Input
    }]
  });
})();
var BsDaterangepickerInlineConfig = class _BsDaterangepickerInlineConfig extends BsDatepickerConfig {
  constructor() {
    super(...arguments);
    this.displayMonths = 2;
    this.isAnimated = false;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BsDaterangepickerInlineConfig_BaseFactory;
      return function BsDaterangepickerInlineConfig_Factory(__ngFactoryType__) {
        return (\u0275BsDaterangepickerInlineConfig_BaseFactory || (\u0275BsDaterangepickerInlineConfig_BaseFactory = \u0275\u0275getInheritedFactory(_BsDaterangepickerInlineConfig)))(__ngFactoryType__ || _BsDaterangepickerInlineConfig);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BsDaterangepickerInlineConfig,
      factory: _BsDaterangepickerInlineConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInlineConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BsDaterangepickerContainerComponent = class _BsDaterangepickerContainerComponent extends BsDatepickerAbstractComponent {
  set value(value) {
    this._effects?.setRangeValue(value);
  }
  get isDatePickerDisabled() {
    return !!this._config.isDisabled;
  }
  get isDatepickerDisabled() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get isDatepickerReadonly() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
    super();
    this._config = _config;
    this._store = _store;
    this._element = _element;
    this._actions = _actions;
    this._positionService = _positionService;
    this.valueChange = new EventEmitter();
    this.animationState = "void";
    this._rangeStack = [];
    this.chosenRange = [];
    this._subs = [];
    this.isRangePicker = true;
    this._effects = _effects;
    this.customRanges = this._config.ranges || [];
    this.customRangeBtnLbl = this._config.customRangeButtonLabel;
    _renderer.setStyle(_element.nativeElement, "display", "block");
    _renderer.setStyle(_element.nativeElement, "position", "absolute");
  }
  ngOnInit() {
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this._config.adaptivePosition
        },
        preventOverflow: {
          enabled: this._config.adaptivePosition
        }
      },
      allowedPositions: this._config.allowedPositions
    });
    this._positionService.event$?.pipe(take(1)).subscribe(() => {
      this._positionService.disable();
      if (this._config.isAnimated) {
        this.animationState = this.isTopPosition ? "animated-up" : "animated-down";
        return;
      }
      this.animationState = "unanimated";
    });
    this.containerClass = this._config.containerClass;
    this.isOtherMonthsActive = this._config.selectFromOtherMonth;
    this.withTimepicker = this._config.withTimepicker;
    this._effects?.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
    let currentDate;
    this._subs.push(this._store.select((state2) => state2.selectedRange).subscribe((dateRange) => {
      currentDate = dateRange;
      this.valueChange.emit(dateRange);
      this.chosenRange = dateRange || [];
    }));
    this._subs.push(this._store.select((state2) => state2.selectedTime).subscribe((time) => {
      if (!time || !time[0] || !time[1] || !(time[0] instanceof Date) || !(time[1] instanceof Date) || currentDate && time[0] === currentDate[0] && time[1] === currentDate[1]) {
        return;
      }
      this.valueChange.emit(time);
      this.chosenRange = time || [];
    }));
  }
  ngAfterViewInit() {
    this.selectedTimeSub.add(this.selectedTime?.subscribe((val) => {
      if (Array.isArray(val) && val.length >= 2) {
        this.startTimepicker?.writeValue(val[0]);
        this.endTimepicker?.writeValue(val[1]);
      }
    }));
    this.startTimepicker?.registerOnChange((val) => {
      this.timeSelectHandler(val, 0);
    });
    this.endTimepicker?.registerOnChange((val) => {
      this.timeSelectHandler(val, 1);
    });
  }
  get isTopPosition() {
    return this._element.nativeElement.classList.contains("top");
  }
  positionServiceEnable() {
    this._positionService.enable();
  }
  timeSelectHandler(date, index) {
    this._store.dispatch(this._actions.selectTime(date, index));
  }
  daySelectHandler(day) {
    if (!day) {
      return;
    }
    const isDisabled = this.isOtherMonthsActive ? day.isDisabled : day.isOtherMonth || day.isDisabled;
    if (isDisabled) {
      return;
    }
    this.rangesProcessing(day);
  }
  monthSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    day.isSelected = true;
    if (this._config.minMode !== "month") {
      if (day.isDisabled) {
        return;
      }
      this._store.dispatch(this._actions.navigateTo({
        unit: {
          month: getMonth(day.date),
          year: getFullYear(day.date)
        },
        viewMode: "day"
      }));
      return;
    }
    this.rangesProcessing(day);
  }
  yearSelectHandler(day) {
    if (!day || day.isDisabled) {
      return;
    }
    day.isSelected = true;
    if (this._config.minMode !== "year") {
      if (day.isDisabled) {
        return;
      }
      this._store.dispatch(this._actions.navigateTo({
        unit: {
          year: getFullYear(day.date)
        },
        viewMode: "month"
      }));
      return;
    }
    this.rangesProcessing(day);
  }
  rangesProcessing(day) {
    if (this._rangeStack.length === 1) {
      this._rangeStack = day.date >= this._rangeStack[0] ? [this._rangeStack[0], day.date] : [day.date];
    }
    if (this._config.maxDateRange) {
      this.setMaxDateRangeOnCalendar(day.date);
    }
    if (this._rangeStack.length === 0) {
      this._rangeStack = [day.date];
      if (this._config.maxDateRange) {
        this.setMaxDateRangeOnCalendar(day.date);
      }
    }
    this._store.dispatch(this._actions.selectRange(this._rangeStack));
    if (this._rangeStack.length === 2) {
      this._rangeStack = [];
    }
  }
  ngOnDestroy() {
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    this.selectedTimeSub.unsubscribe();
    this._effects?.destroy();
  }
  setRangeOnCalendar(dates) {
    if (dates) {
      this._rangeStack = dates.value instanceof Date ? [dates.value] : dates.value;
    }
    this._store.dispatch(this._actions.selectRange(this._rangeStack));
  }
  setMaxDateRangeOnCalendar(currentSelection) {
    let maxDateRange = new Date(currentSelection);
    if (this._config.maxDate) {
      const maxDateValueInMilliseconds = this._config.maxDate.getTime();
      const maxDateRangeInMilliseconds = currentSelection.getTime() + (this._config.maxDateRange || 0) * dayInMilliseconds;
      maxDateRange = maxDateRangeInMilliseconds > maxDateValueInMilliseconds ? new Date(this._config.maxDate) : new Date(maxDateRangeInMilliseconds);
    } else {
      maxDateRange.setDate(currentSelection.getDate() + (this._config.maxDateRange || 0));
    }
    this._effects?.setMaxDate(maxDateRange);
  }
  static {
    this.\u0275fac = function BsDaterangepickerContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaterangepickerContainerComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(BsDatepickerConfig), \u0275\u0275directiveInject(BsDatepickerStore), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(BsDatepickerActions), \u0275\u0275directiveInject(BsDatepickerEffects), \u0275\u0275directiveInject(PositioningService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsDaterangepickerContainerComponent,
      selectors: [["bs-daterangepicker-container"]],
      viewQuery: function BsDaterangepickerContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c3, 5)(_c4, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.startTimepicker = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.endTimepicker = _t.first);
        }
      },
      hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"],
      hostVars: 2,
      hostBindings: function BsDaterangepickerContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function BsDaterangepickerContainerComponent_click_HostBindingHandler($event) {
            return ctx._stopPropagation($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("disabled", ctx.isDatepickerDisabled)("readonly", ctx.isDatepickerReadonly);
        }
      },
      features: [\u0275\u0275ProvidersFeature([BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions]), \u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["startTP", ""], ["endTP", ""], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container"], [1, "bs-media-container"], [1, "bs-datepicker-buttons"], [1, "bs-datepicker-custom-range"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options"], [1, "bs-timepicker-in-datepicker-container"], [3, "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", "calendar", "isDisabled", "options"], [3, "disabled"], [3, "bs-datepicker-multiple", "calendar"], [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], [1, "btn-today-wrapper", 3, "today-left", "today-right", "today-center"], [1, "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"]],
      template: function BsDaterangepickerContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275conditionalCreate(0, BsDaterangepickerContainerComponent_Conditional_0_Template, 10, 8, "div", 2);
          \u0275\u0275pipe(1, "async");
        }
        if (rf & 2) {
          \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx.viewMode) ? 0 : -1);
        }
      },
      dependencies: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      encapsulation: 2,
      data: {
        animation: [datepickerAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-daterangepicker-container",
      providers: [BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions],
      host: {
        class: "bottom",
        "(click)": "_stopPropagation($event)",
        role: "dialog",
        "aria-label": "calendar"
      },
      animations: [datepickerAnimation],
      standalone: true,
      imports: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      template: `<!-- days calendar view mode -->
@if (viewMode | async) {
  <div class="bs-datepicker" [ngClass]="containerClass">
    <div class="bs-datepicker-container"
      [@datepickerAnimation]="animationState"
      (@datepickerAnimation.done)="positionServiceEnable()">
      <!--calendars-->
      <div class="bs-calendar-container" role="application">
        @switch (viewMode | async) {
          <!--days calendar-->
          @case ('day') {
            <div class="bs-media-container">
              @for (calendar of daysCalendar$ | async; track calendar) {
                <bs-days-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  [isDisabled]="isDatePickerDisabled"
                  [options]="options$ | async"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="dayHoverHandler($event)"
                  (onHoverWeek)="weekHoverHandler($event)"
                  (onSelect)="daySelectHandler($event)">
                </bs-days-calendar-view>
              }
            </div>
            @if (withTimepicker) {
              <div class="bs-timepicker-in-datepicker-container">
                <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
                @if (isRangePicker) {
                  <timepicker #endTP [disabled]="isDatePickerDisabled"></timepicker>
                }
              </div>
            }
          }
          <!--months calendar-->
          @case ('month') {
            <div class="bs-media-container">
              @for (calendar of monthsCalendar | async; track calendar) {
                <bs-month-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="monthHoverHandler($event)"
                  (onSelect)="monthSelectHandler($event)">
                </bs-month-calendar-view>
              }
            </div>
          }
          <!--years calendar-->
          @case ('year') {
            <div class="bs-media-container">
              @for (calendar of yearsCalendar | async; track calendar) {
                <bs-years-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="yearHoverHandler($event)"
                  (onSelect)="yearSelectHandler($event)">
                </bs-years-calendar-view>
              }
            </div>
          }
        }
      </div>
      <!--applycancel buttons-->
      @if (false) {
        <div class="bs-datepicker-buttons">
          <button class="btn btn-success" type="button">Apply</button>
          <button class="btn btn-default" type="button">Cancel</button>
        </div>
      }
      @if (showTodayBtn || showClearBtn) {
        <div class="bs-datepicker-buttons">
          @if (showTodayBtn) {
            <div class="btn-today-wrapper"
              [class.today-left]="todayPos === 'left'"
              [class.today-right]="todayPos === 'right'"
              [class.today-center]="todayPos === 'center'"
              >
              <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
            </div>
          }
          @if (showClearBtn) {
            <div class="btn-clear-wrapper"
              [class.clear-left]="clearPos === 'left'"
              [class.clear-right]="clearPos === 'right'"
              [class.clear-center]="clearPos === 'center'"
              >
              <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
            </div>
          }
        </div>
      }
    </div>
    <!--custom dates or date ranges picker-->
    @if (customRanges && customRanges.length > 0) {
      <div class="bs-datepicker-custom-range">
        <bs-custom-date-view
          [selectedRange]="chosenRange"
          [ranges]="customRanges"
          [customRangeLabel]="customRangeBtnLbl"
          (onSelect)="setRangeOnCalendar($event)">
        </bs-custom-date-view>
      </div>
    }
  </div>
}
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    startTimepicker: [{
      type: ViewChild,
      args: ["startTP"]
    }],
    endTimepicker: [{
      type: ViewChild,
      args: ["endTP"]
    }],
    isDatepickerDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    isDatepickerReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var BsDaterangepickerInlineContainerComponent = class _BsDaterangepickerInlineContainerComponent extends BsDaterangepickerContainerComponent {
  get disabledValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  get readonlyValue() {
    return this.isDatePickerDisabled ? "" : null;
  }
  constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
    super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
    _renderer.setStyle(_element.nativeElement, "display", "inline-block");
    _renderer.setStyle(_element.nativeElement, "position", "static");
  }
  static {
    this.\u0275fac = function BsDaterangepickerInlineContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaterangepickerInlineContainerComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(BsDatepickerConfig), \u0275\u0275directiveInject(BsDatepickerStore), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(BsDatepickerActions), \u0275\u0275directiveInject(BsDatepickerEffects), \u0275\u0275directiveInject(PositioningService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _BsDaterangepickerInlineContainerComponent,
      selectors: [["bs-daterangepicker-inline-container"]],
      hostVars: 2,
      hostBindings: function BsDaterangepickerInlineContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function BsDaterangepickerInlineContainerComponent_click_HostBindingHandler($event) {
            return ctx._stopPropagation($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("disabled", ctx.disabledValue)("readonly", ctx.readonlyValue);
        }
      },
      features: [\u0275\u0275ProvidersFeature([BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions]), \u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["startTP", ""], ["endTP", ""], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container"], [1, "bs-media-container"], [1, "bs-datepicker-buttons"], [1, "bs-datepicker-custom-range"], [3, "bs-datepicker-multiple", "calendar", "isDisabled", "options"], [1, "bs-timepicker-in-datepicker-container"], [3, "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", "calendar", "isDisabled", "options"], [3, "disabled"], [3, "bs-datepicker-multiple", "calendar"], [3, "onNavigate", "onViewMode", "onHover", "onSelect", "calendar"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], [1, "btn-today-wrapper", 3, "today-left", "today-right", "today-center"], [1, "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [3, "onSelect", "selectedRange", "ranges", "customRangeLabel"]],
      template: function BsDaterangepickerInlineContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275conditionalCreate(0, BsDaterangepickerInlineContainerComponent_Conditional_0_Template, 10, 8, "div", 2);
          \u0275\u0275pipe(1, "async");
        }
        if (rf & 2) {
          \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx.viewMode) ? 0 : -1);
        }
      },
      dependencies: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      encapsulation: 2,
      data: {
        animation: [datepickerAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInlineContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-daterangepicker-inline-container",
      providers: [BsDatepickerStore, BsDatepickerEffects, BsDatepickerActions],
      host: {
        "(click)": "_stopPropagation($event)"
      },
      animations: [datepickerAnimation],
      standalone: true,
      imports: [NgClass, BsDaysCalendarViewComponent, TimepickerModule, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent, AsyncPipe],
      template: `<!-- days calendar view mode -->
@if (viewMode | async) {
  <div class="bs-datepicker" [ngClass]="containerClass">
    <div class="bs-datepicker-container"
      [@datepickerAnimation]="animationState"
      (@datepickerAnimation.done)="positionServiceEnable()">
      <!--calendars-->
      <div class="bs-calendar-container" role="application">
        @switch (viewMode | async) {
          <!--days calendar-->
          @case ('day') {
            <div class="bs-media-container">
              @for (calendar of daysCalendar$ | async; track calendar) {
                <bs-days-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  [isDisabled]="isDatePickerDisabled"
                  [options]="options$ | async"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="dayHoverHandler($event)"
                  (onHoverWeek)="weekHoverHandler($event)"
                  (onSelect)="daySelectHandler($event)">
                </bs-days-calendar-view>
              }
            </div>
            @if (withTimepicker) {
              <div class="bs-timepicker-in-datepicker-container">
                <timepicker #startTP [disabled]="isDatePickerDisabled"></timepicker>
                @if (isRangePicker) {
                  <timepicker #endTP [disabled]="isDatePickerDisabled"></timepicker>
                }
              </div>
            }
          }
          <!--months calendar-->
          @case ('month') {
            <div class="bs-media-container">
              @for (calendar of monthsCalendar | async; track calendar) {
                <bs-month-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="monthHoverHandler($event)"
                  (onSelect)="monthSelectHandler($event)">
                </bs-month-calendar-view>
              }
            </div>
          }
          <!--years calendar-->
          @case ('year') {
            <div class="bs-media-container">
              @for (calendar of yearsCalendar | async; track calendar) {
                <bs-years-calendar-view
                  [class.bs-datepicker-multiple]="multipleCalendars"
                  [calendar]="calendar"
                  (onNavigate)="navigateTo($event)"
                  (onViewMode)="setViewMode($event)"
                  (onHover)="yearHoverHandler($event)"
                  (onSelect)="yearSelectHandler($event)">
                </bs-years-calendar-view>
              }
            </div>
          }
        }
      </div>
      <!--applycancel buttons-->
      @if (false) {
        <div class="bs-datepicker-buttons">
          <button class="btn btn-success" type="button">Apply</button>
          <button class="btn btn-default" type="button">Cancel</button>
        </div>
      }
      @if (showTodayBtn || showClearBtn) {
        <div class="bs-datepicker-buttons">
          @if (showTodayBtn) {
            <div class="btn-today-wrapper"
              [class.today-left]="todayPos === 'left'"
              [class.today-right]="todayPos === 'right'"
              [class.today-center]="todayPos === 'center'"
              >
              <button class="btn btn-success" (click)="setToday()">{{todayBtnLbl}}</button>
            </div>
          }
          @if (showClearBtn) {
            <div class="btn-clear-wrapper"
              [class.clear-left]="clearPos === 'left'"
              [class.clear-right]="clearPos === 'right'"
              [class.clear-center]="clearPos === 'center'"
              >
              <button class="btn btn-success" (click)="clearDate()">{{clearBtnLbl}}</button>
            </div>
          }
        </div>
      }
    </div>
    <!--custom dates or date ranges picker-->
    @if (customRanges && customRanges.length > 0) {
      <div class="bs-datepicker-custom-range">
        <bs-custom-date-view
          [selectedRange]="chosenRange"
          [ranges]="customRanges"
          [customRangeLabel]="customRangeBtnLbl"
          (onSelect)="setRangeOnCalendar($event)">
        </bs-custom-date-view>
      </div>
    }
  </div>
}
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: BsDatepickerConfig
  }, {
    type: BsDatepickerStore
  }, {
    type: ElementRef
  }, {
    type: BsDatepickerActions
  }, {
    type: BsDatepickerEffects
  }, {
    type: PositioningService
  }], {
    disabledValue: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    readonlyValue: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var BsDaterangepickerInlineDirective = class _BsDaterangepickerInlineDirective {
  /**
   * Initial value of datepicker
   */
  set bsValue(value) {
    if (this._bsValue === value) {
      return;
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setDateRangesCurrentTimeOnDateSelect(value);
    }
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
  }
  ngOnInit() {
    this.setConfig();
    this.initSubscribes();
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue.initCurrentTime && changes["bsConfig"].currentValue.initCurrentTime !== changes["bsConfig"].previousValue.initCurrentTime && this._bsValue) {
        this._bsValue = setDateRangesCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
      this._datepickerRef.instance.value = this._bsValue;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["daysDisabled"]) {
      this._datepickerRef.instance.daysDisabled = this.daysDisabled;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
    this.setConfig();
  }
  /**
   * Set config for datepicker
   */
  setConfig() {
    if (this._datepicker) {
      this._datepicker.hide();
    }
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      maxDateRange: this.bsConfig && this.bsConfig.maxDateRange,
      initCurrentTime: this.bsConfig?.initCurrentTime
    });
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDaterangepickerInlineContainerComponent).to(this._elementRef).show();
    this.initSubscribes();
  }
  initSubscribes() {
    this.unsubscribeSubscriptions();
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.pipe(filter((range) => range && range[0] && !!range[1])).subscribe((value) => {
        this.bsValue = value;
      }));
    }
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.unsubscribeSubscriptions();
  }
  static {
    this.\u0275fac = function BsDaterangepickerInlineDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaterangepickerInlineDirective)(\u0275\u0275directiveInject(BsDaterangepickerInlineConfig), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ComponentLoaderFactory));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BsDaterangepickerInlineDirective,
      selectors: [["bs-daterangepicker-inline"]],
      inputs: {
        bsValue: "bsValue",
        bsConfig: "bsConfig",
        isDisabled: "isDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        dateCustomClasses: "dateCustomClasses",
        daysDisabled: "daysDisabled",
        datesDisabled: "datesDisabled",
        datesEnabled: "datesEnabled"
      },
      outputs: {
        bsValueChange: "bsValueChange"
      },
      exportAs: ["bsDaterangepickerInline"],
      features: [\u0275\u0275ProvidersFeature([ComponentLoaderFactory, PositioningService]), \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInlineDirective, [{
    type: Directive,
    args: [{
      selector: "bs-daterangepicker-inline",
      exportAs: "bsDaterangepickerInline",
      standalone: true,
      providers: [ComponentLoaderFactory, PositioningService]
    }]
  }], () => [{
    type: BsDaterangepickerInlineConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    bsValue: [{
      type: Input
    }],
    bsConfig: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    daysDisabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }]
  });
})();
var BS_DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsDatepickerInputDirective),
  multi: true
};
var BS_DATEPICKER_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BsDatepickerInputDirective),
  multi: true
};
var BsDatepickerInputDirective = class _BsDatepickerInputDirective {
  constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
    this._picker = _picker;
    this._localeService = _localeService;
    this._renderer = _renderer;
    this._elRef = _elRef;
    this.changeDetection = changeDetection;
    this._onChange = Function.prototype;
    this._onTouched = Function.prototype;
    this._validatorChange = Function.prototype;
    this._subs = new Subscription();
  }
  onChange(event) {
    this.writeValue(event.target.value);
    this._onChange(this._value);
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
    this._onTouched();
  }
  onBlur() {
    this._onTouched();
  }
  hide() {
    this._picker.hide();
    this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
  }
  ngOnInit() {
    const setBsValue = (value) => {
      this._setInputValue(value);
      if (this._value !== value) {
        this._value = value;
        this._onChange(value);
        this._onTouched();
      }
      this.changeDetection.markForCheck();
    };
    if (this._picker._bsValue) {
      setBsValue(this._picker._bsValue);
    }
    this._subs.add(this._picker.bsValueChange.subscribe(setBsValue));
    this._subs.add(this._localeService.localeChange.subscribe(() => {
      this._setInputValue(this._value);
    }));
    this._subs.add(this._picker.dateInputFormat$.pipe(distinctUntilChanged()).subscribe(() => {
      this._setInputValue(this._value);
    }));
  }
  ngOnDestroy() {
    this._subs.unsubscribe();
  }
  _setInputValue(value) {
    const initialDate = !value ? "" : formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
    this._renderer.setProperty(this._elRef.nativeElement, "value", initialDate);
  }
  validate(c) {
    const _value = c.value;
    if (_value === null || _value === void 0 || _value === "") {
      return null;
    }
    if (isDate(_value)) {
      const _isDateValid = isDateValid(_value);
      if (!_isDateValid) {
        return {
          bsDate: {
            invalid: _value
          }
        };
      }
      if (this._picker && this._picker.minDate && isBefore(_value, this._picker.minDate, "date")) {
        this.writeValue(this._picker.minDate);
        return this._picker.ignoreMinMaxErrors ? null : {
          bsDate: {
            minDate: this._picker.minDate
          }
        };
      }
      if (this._picker && this._picker.maxDate && isAfter(_value, this._picker.maxDate, "date")) {
        this.writeValue(this._picker.maxDate);
        return this._picker.ignoreMinMaxErrors ? null : {
          bsDate: {
            maxDate: this._picker.maxDate
          }
        };
      }
    }
    return null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChange = fn;
  }
  writeValue(value) {
    if (!value) {
      this._value = void 0;
    } else {
      const _localeKey = this._localeService.currentLocale;
      const _locale = getLocale(_localeKey);
      if (!_locale) {
        throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
      }
      this._value = parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
      if (this._picker._config.useUtc) {
        const utcValue = utcAsLocal(this._value);
        this._value = utcValue === null ? void 0 : utcValue;
      }
    }
    this._picker.bsValue = this._value;
  }
  setDisabledState(isDisabled) {
    this._picker.isDisabled = isDisabled;
    if (isDisabled) {
      this._renderer.setAttribute(this._elRef.nativeElement, "disabled", "disabled");
      return;
    }
    this._renderer.removeAttribute(this._elRef.nativeElement, "disabled");
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  static {
    this.\u0275fac = function BsDatepickerInputDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerInputDirective)(\u0275\u0275directiveInject(BsDatepickerDirective, 1), \u0275\u0275directiveInject(BsLocaleService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BsDatepickerInputDirective,
      selectors: [["input", "bsDatepicker", ""]],
      hostBindings: function BsDatepickerInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function BsDatepickerInputDirective_change_HostBindingHandler($event) {
            return ctx.onChange($event);
          })("blur", function BsDatepickerInputDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          })("keyup.esc", function BsDatepickerInputDirective_keyup_esc_HostBindingHandler() {
            return ctx.hide();
          })("keydown.enter", function BsDatepickerInputDirective_keydown_enter_HostBindingHandler() {
            return ctx.hide();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerInputDirective, [{
    type: Directive,
    args: [{
      selector: `input[bsDatepicker]`,
      providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR],
      standalone: true
    }]
  }], () => [{
    type: BsDatepickerDirective,
    decorators: [{
      type: Host
    }]
  }, {
    type: BsLocaleService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    onChange: [{
      type: HostListener,
      args: ["change", ["$event"]]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    hide: [{
      type: HostListener,
      args: ["keyup.esc"]
    }, {
      type: HostListener,
      args: ["keydown.enter"]
    }]
  });
})();
var BsDaterangepickerConfig = class _BsDaterangepickerConfig extends BsDatepickerConfig {
  constructor() {
    super(...arguments);
    this.displayMonths = 2;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BsDaterangepickerConfig_BaseFactory;
      return function BsDaterangepickerConfig_Factory(__ngFactoryType__) {
        return (\u0275BsDaterangepickerConfig_BaseFactory || (\u0275BsDaterangepickerConfig_BaseFactory = \u0275\u0275getInheritedFactory(_BsDaterangepickerConfig)))(__ngFactoryType__ || _BsDaterangepickerConfig);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BsDaterangepickerConfig,
      factory: _BsDaterangepickerConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var previousDate;
var BsDaterangepickerDirective = class _BsDaterangepickerDirective {
  /**
   * Returns whether or not the daterangepicker is currently being shown
   */
  get isOpen() {
    return this._datepicker.isShown;
  }
  set isOpen(value) {
    this.isOpen$.next(value);
  }
  /**
   * Initial value of daterangepicker
   */
  set bsValue(value) {
    if (this._bsValue === value) {
      return;
    }
    if (value && this.bsConfig?.initCurrentTime) {
      value = setDateRangesCurrentTimeOnDateSelect(value);
    }
    this.initPreviousValue();
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }
  get isDatepickerReadonly() {
    return this.isDisabled ? "" : null;
  }
  get rangeInputFormat$() {
    return this._rangeInputFormat$;
  }
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
    this._config = _config;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this.placement = "bottom";
    this.triggers = "click";
    this.outsideClick = true;
    this.container = "body";
    this.outsideEsc = true;
    this.isDestroy$ = new Subject();
    this.isDisabled = false;
    this.bsValueChange = new EventEmitter();
    this._subs = [];
    this._rangeInputFormat$ = new Subject();
    this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    Object.assign(this, _config);
    this.onShown = this._datepicker.onShown;
    this.onHidden = this._datepicker.onHidden;
    this.isOpen$ = new BehaviorSubject(this.isOpen);
  }
  ngOnInit() {
    this.isDestroy$ = new Subject();
    this._datepicker.listen({
      outsideClick: this.outsideClick,
      outsideEsc: this.outsideEsc,
      triggers: this.triggers,
      show: () => this.show()
    });
    this.initPreviousValue();
    this.setConfig();
  }
  ngOnChanges(changes) {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
        this.initPreviousValue();
        this._bsValue = setDateRangesCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
      this.setConfig();
      this._rangeInputFormat$.next(changes["bsConfig"].currentValue && changes["bsConfig"].currentValue.rangeInputFormat);
    }
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }
    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }
    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }
    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }
    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
    }
    if (changes["daysDisabled"]) {
      this._datepickerRef.instance.daysDisabled = this.daysDisabled;
    }
    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }
  }
  ngAfterViewInit() {
    this.isOpen$.pipe(filter((isOpen) => isOpen !== this.isOpen), takeUntil(this.isDestroy$)).subscribe(() => this.toggle());
  }
  /**
   * Opens an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  show() {
    if (this._datepicker.isShown) {
      return;
    }
    this.setConfig();
    this._datepickerRef = this._datepicker.provide({
      provide: BsDatepickerConfig,
      useValue: this._config
    }).attach(BsDaterangepickerContainerComponent).to(this.container).position({
      attachment: this.placement
    }).show({
      placement: this.placement
    });
    this.initSubscribes();
  }
  initSubscribes() {
    this._subs.push(this.bsValueChange.subscribe((value) => {
      if (this._datepickerRef) {
        this._datepickerRef.instance.value = value;
      }
    }));
    if (this._datepickerRef) {
      this._subs.push(this._datepickerRef.instance.valueChange.pipe(filter((range) => range && range[0] && !!range[1])).subscribe((value) => {
        this.initPreviousValue();
        this.bsValue = value;
        if (this.keepDatepickerModalOpened()) {
          return;
        }
        this.hide();
      }));
    }
  }
  initPreviousValue() {
    previousDate = this._bsValue;
  }
  keepDatepickerModalOpened() {
    if (!previousDate || !this.bsConfig?.keepDatepickerOpened || !this._config.withTimepicker) {
      return false;
    }
    return this.isDateSame();
  }
  isDateSame() {
    return this._bsValue?.[0]?.getDate() === previousDate?.[0]?.getDate() && this._bsValue?.[0]?.getMonth() === previousDate?.[0]?.getMonth() && this._bsValue?.[0]?.getFullYear() === previousDate?.[0]?.getFullYear() && this._bsValue?.[1]?.getDate() === previousDate?.[1]?.getDate() && this._bsValue?.[1]?.getMonth() === previousDate?.[1]?.getMonth() && this._bsValue?.[1]?.getFullYear() === previousDate?.[1]?.getFullYear();
  }
  /**
   * Set config for daterangepicker
   */
  setConfig() {
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: this.bsConfig?.keepDatesOutOfRules ? this._bsValue : checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      maxDateRange: this.bsConfig && this.bsConfig.maxDateRange,
      initCurrentTime: this.bsConfig?.initCurrentTime,
      keepDatepickerOpened: this.bsConfig?.keepDatepickerOpened,
      keepDatesOutOfRules: this.bsConfig?.keepDatesOutOfRules
    });
  }
  /**
   * Closes an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  hide() {
    if (this.isOpen) {
      this._datepicker.hide();
    }
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
    if (this._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
    }
  }
  /**
   * Toggles an element’s datepicker. This is considered a “manual” triggering
   * of the datepicker.
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map((sub) => sub.unsubscribe());
      this._subs.length = 0;
    }
  }
  ngOnDestroy() {
    this._datepicker.dispose();
    this.isOpen$.next(false);
    if (this.isDestroy$) {
      this.isDestroy$.next(null);
      this.isDestroy$.complete();
    }
    this.unsubscribeSubscriptions();
  }
  static {
    this.\u0275fac = function BsDaterangepickerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaterangepickerDirective)(\u0275\u0275directiveInject(BsDaterangepickerConfig), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ComponentLoaderFactory));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BsDaterangepickerDirective,
      selectors: [["", "bsDaterangepicker", ""]],
      hostVars: 1,
      hostBindings: function BsDaterangepickerDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("readonly", ctx.isDatepickerReadonly);
        }
      },
      inputs: {
        placement: "placement",
        triggers: "triggers",
        outsideClick: "outsideClick",
        container: "container",
        outsideEsc: "outsideEsc",
        isOpen: "isOpen",
        bsValue: "bsValue",
        bsConfig: "bsConfig",
        isDisabled: "isDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        dateCustomClasses: "dateCustomClasses",
        daysDisabled: "daysDisabled",
        datesDisabled: "datesDisabled",
        datesEnabled: "datesEnabled"
      },
      outputs: {
        onShown: "onShown",
        onHidden: "onHidden",
        bsValueChange: "bsValueChange"
      },
      exportAs: ["bsDaterangepicker"],
      features: [\u0275\u0275ProvidersFeature([ComponentLoaderFactory, PositioningService]), \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDaterangepicker]",
      exportAs: "bsDaterangepicker",
      standalone: true,
      providers: [ComponentLoaderFactory, PositioningService]
    }]
  }], () => [{
    type: BsDaterangepickerConfig
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }], {
    placement: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    outsideClick: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    outsideEsc: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    onShown: [{
      type: Output
    }],
    onHidden: [{
      type: Output
    }],
    bsValue: [{
      type: Input
    }],
    bsConfig: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateCustomClasses: [{
      type: Input
    }],
    daysDisabled: [{
      type: Input
    }],
    datesDisabled: [{
      type: Input
    }],
    datesEnabled: [{
      type: Input
    }],
    bsValueChange: [{
      type: Output
    }],
    isDatepickerReadonly: [{
      type: HostBinding,
      args: ["attr.readonly"]
    }]
  });
})();
var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BsDaterangepickerInputDirective),
  multi: true
};
var BS_DATERANGEPICKER_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BsDaterangepickerInputDirective),
  multi: true
};
var BsDaterangepickerInputDirective = class _BsDaterangepickerInputDirective {
  constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
    this._picker = _picker;
    this._localeService = _localeService;
    this._renderer = _renderer;
    this._elRef = _elRef;
    this.changeDetection = changeDetection;
    this._onChange = Function.prototype;
    this._onTouched = Function.prototype;
    this._validatorChange = Function.prototype;
    this._subs = new Subscription();
  }
  ngOnInit() {
    const setBsValue = (value) => {
      this._setInputValue(value);
      if (this._value !== value) {
        this._value = value;
        this._onChange(value);
        this._onTouched();
      }
      this.changeDetection.markForCheck();
    };
    if (this._picker._bsValue) {
      setBsValue(this._picker._bsValue);
    }
    this._subs.add(this._picker.bsValueChange.subscribe((value) => {
      this._setInputValue(value);
      if (this._value !== value) {
        this._value = value;
        this._onChange(value);
        this._onTouched();
      }
      this.changeDetection.markForCheck();
    }));
    this._subs.add(this._localeService.localeChange.subscribe(() => {
      this._setInputValue(this._value);
    }));
    this._subs.add(
      // update input value on format change
      this._picker.rangeInputFormat$.pipe(distinctUntilChanged()).subscribe(() => {
        this._setInputValue(this._value);
      })
    );
  }
  ngOnDestroy() {
    this._subs.unsubscribe();
  }
  onKeydownEvent(event) {
    if (event.keyCode === 13 || event.code === "Enter") {
      this.hide();
    }
  }
  _setInputValue(date) {
    let range = "";
    if (date) {
      const start = !date[0] ? "" : formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
      const end = !date[1] ? "" : formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
      range = start && end ? start + this._picker._config.rangeSeparator + end : "";
    }
    this._renderer.setProperty(this._elRef.nativeElement, "value", range);
  }
  onChange(event) {
    this.writeValue(event.target.value);
    this._onChange(this._value);
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
    this._onTouched();
  }
  validate(c) {
    let _value = c.value;
    const errors = [];
    if (_value === null || _value === void 0 || !isArray(_value)) {
      return null;
    }
    _value = _value.slice().sort((a, b) => a.getTime() - b.getTime());
    const _isFirstDateValid = isDateValid(_value[0]);
    const _isSecondDateValid = isDateValid(_value[1]);
    if (!_isFirstDateValid) {
      return {
        bsDate: {
          invalid: _value[0]
        }
      };
    }
    if (!_isSecondDateValid) {
      return {
        bsDate: {
          invalid: _value[1]
        }
      };
    }
    if (this._picker && this._picker.minDate && isBefore(_value[0], this._picker.minDate, "date")) {
      _value[0] = this._picker.minDate;
      errors.push({
        bsDate: {
          minDate: this._picker.minDate
        }
      });
    }
    if (this._picker && this._picker.maxDate && isAfter(_value[1], this._picker.maxDate, "date")) {
      _value[1] = this._picker.maxDate;
      errors.push({
        bsDate: {
          maxDate: this._picker.maxDate
        }
      });
    }
    if (errors.length > 0) {
      this.writeValue(_value);
      return errors;
    }
    return null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChange = fn;
  }
  writeValue(value) {
    if (!value) {
      this._value = void 0;
    } else {
      const _localeKey = this._localeService.currentLocale;
      const _locale = getLocale(_localeKey);
      if (!_locale) {
        throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
      }
      let _input = [];
      if (typeof value === "string") {
        const trimmedSeparator = this._picker._config.rangeSeparator.trim();
        if (value.replace(/[^-]/g, "").length > 1) {
          _input = value.split(this._picker._config.rangeSeparator);
        } else {
          _input = value.split(trimmedSeparator.length > 0 ? trimmedSeparator : this._picker._config.rangeSeparator).map((_val) => _val.trim());
        }
      }
      if (Array.isArray(value)) {
        _input = value;
      }
      this._value = _input.map((_val) => {
        if (this._picker._config.useUtc) {
          return utcAsLocal(parseDate(_val, this._picker._config.rangeInputFormat, this._localeService.currentLocale));
        }
        return parseDate(_val, this._picker._config.rangeInputFormat, this._localeService.currentLocale);
      }).map((date) => isNaN(date.valueOf()) ? void 0 : date);
    }
    this._picker.bsValue = this._value;
  }
  setDisabledState(isDisabled) {
    this._picker.isDisabled = isDisabled;
    if (isDisabled) {
      this._renderer.setAttribute(this._elRef.nativeElement, "disabled", "disabled");
      return;
    }
    this._renderer.removeAttribute(this._elRef.nativeElement, "disabled");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn) {
    this._onChange = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  onBlur() {
    this._onTouched();
  }
  hide() {
    this._picker.hide();
    this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    if (this._picker._config.returnFocusToInput) {
      this._renderer.selectRootElement(this._elRef.nativeElement).focus();
    }
  }
  static {
    this.\u0275fac = function BsDaterangepickerInputDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDaterangepickerInputDirective)(\u0275\u0275directiveInject(BsDaterangepickerDirective, 1), \u0275\u0275directiveInject(BsLocaleService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BsDaterangepickerInputDirective,
      selectors: [["input", "bsDaterangepicker", ""]],
      hostBindings: function BsDaterangepickerInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function BsDaterangepickerInputDirective_change_HostBindingHandler($event) {
            return ctx.onChange($event);
          })("keyup.esc", function BsDaterangepickerInputDirective_keyup_esc_HostBindingHandler() {
            return ctx.hide();
          })("keydown", function BsDaterangepickerInputDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeydownEvent($event);
          })("blur", function BsDaterangepickerInputDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDaterangepickerInputDirective, [{
    type: Directive,
    args: [{
      selector: `input[bsDaterangepicker]`,
      host: {
        "(change)": "onChange($event)",
        "(keyup.esc)": "hide()",
        "(keydown)": "onKeydownEvent($event)",
        "(blur)": "onBlur()"
      },
      providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR],
      standalone: true
    }]
  }], () => [{
    type: BsDaterangepickerDirective,
    decorators: [{
      type: Host
    }]
  }, {
    type: BsLocaleService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var BsDatepickerModule = class _BsDatepickerModule {
  static {
    this.\u0275fac = function BsDatepickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BsDatepickerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BsDatepickerModule,
      imports: [CommonModule, TooltipModule, TimepickerModule, BsCalendarLayoutComponent, BsCurrentDateViewComponent, BsCustomDatesViewComponent, BsDatepickerDayDecoratorComponent, BsDatepickerNavigationViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsTimepickerViewComponent, BsYearsCalendarViewComponent, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective],
      exports: [BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, TooltipModule, TimepickerModule, BsDaysCalendarViewComponent, BsDatepickerContainerComponent, BsDatepickerInlineContainerComponent, BsDaterangepickerContainerComponent, BsDaterangepickerInlineContainerComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDatepickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TooltipModule, TimepickerModule, BsCalendarLayoutComponent, BsCurrentDateViewComponent, BsCustomDatesViewComponent, BsDatepickerDayDecoratorComponent, BsDatepickerNavigationViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsTimepickerViewComponent, BsYearsCalendarViewComponent, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective],
      exports: [BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective]
    }]
  }], null, null);
})();

export {
  BsDatepickerDirective,
  BsDatepickerInlineDirective,
  BsDatepickerInputDirective,
  BsDaterangepickerDirective,
  BsDaterangepickerInputDirective,
  BsDatepickerModule
};
//# sourceMappingURL=chunk-AJMQMOOD.js.map
