var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isWxNative = exports.isWXH5 = exports.isWX = exports.isUnionPay = exports.isProduction = exports.isNativeMp = exports.isMpWebview = exports.isMTApp = exports.isInternalApp = exports.isDPApp = exports.isAliPayWebview = exports.isAliPayNative = exports.isAliPay = exports.getXPlatform = exports.getWxEnvVersion = void 0;

var i = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), s = (i.default.isIOS, 
i.default.isMTApp);

exports.isMTApp = s;

var t = i.default.isDPApp;

exports.isDPApp = t;

var r = t || s;

exports.isInternalApp = r;

var p = i.default.isAliPay;

exports.isAliPay = p;

var o = i.default.isAliPayWebview;

exports.isAliPayWebview = o;

exports.isAliPayNative = !1;

exports.isProduction = !1;

var a = i.default.isUnionPay;

exports.isUnionPay = a;

var x = i.default.isWX;

exports.isWX = x;

i.default.isPCWX;

var n = i.default.isMpWebview;

exports.isMpWebview = n;

var v = i.default.isNativeMp;

exports.isNativeMp = v;

var l = x && !n && !v;

exports.isWXH5 = l;

var u = i.default.isWxNative;

exports.isWxNative = u;

exports.getXPlatform = function() {
    return u ? "71" : x ? "20" : o ? "42" : p ? "41" : s ? "51" : t ? "61" : a ? "91" : "81";
};

exports.getWxEnvVersion = function() {
    return i.default.MPInfo.getAccountInfo().miniProgram.envVersion;
};