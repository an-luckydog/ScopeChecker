var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.transformRpxToNumber = void 0;

var r, i, t = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), o = require("../env"), n = !1;

o.isNativeMp ? function() {
    var e = t.default.MPInfo.getSystemInfo();
    n = "ios" === e.platform;
    var o = e.screenWidth || 375, a = e.pixelRatio || 2;
    o === r && a === i || (r = o, i = a);
}() : (r = window.screen.width, i = window.devicePixelRatio);

exports.transformRpxToNumber = function(e) {
    return 0 === (t = Number(e)) ? 0 : 0 === (t = Math.floor(1e-4 + (t = t / 750 * r))) ? 1 !== i && n ? .5 : 1 : t;
    var t;
};