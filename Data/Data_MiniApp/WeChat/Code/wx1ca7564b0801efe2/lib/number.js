var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.roundFloat = exports.priceNumValid = exports.plusFloat = exports.multiFloat = exports.minusFloat = void 0;

var t = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), r = (t.default.scaleNum, 
t.default.getDecimalLen, t.default.minusFloat);

exports.minusFloat = r;

var l = t.default.roundFloat;

exports.roundFloat = l;

var a = t.default.plusFloat;

exports.plusFloat = a;

var o = t.default.multiFloat;

exports.multiFloat = o;

var u = t.default.priceNumValid;

exports.priceNumValid = u;