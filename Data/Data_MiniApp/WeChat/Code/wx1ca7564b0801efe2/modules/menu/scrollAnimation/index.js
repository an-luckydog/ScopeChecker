var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setAnimation = exports.FIXED_HEAD_POSITION_MP = void 0;

var r = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), a = require("../../../lib/env"), n = e(require("../../../lib/enhanceDebounce")), t = require("../../../lib/wx/transfer-rpx"), i = (a.isNativeMp ? r.default.MPInfo.getSystemInfo().pixelRatio : window.devicePixelRatio) || 2, o = Math.floor(40 / i), s = Math.floor(120 / i), c = (0, 
t.transformRpxToNumber)(282), p = ((0, t.transformRpxToNumber)(117), (0, n.default)(function(e, r, a) {
    var n, t = {};
    if (t = Object.assign(t, function(e, r) {
        var a = Math.max(0, Math.min(1, (e - o) / s)), n = {};
        return a >= 0 && a <= 1 ? n.searchBannerOpacity = a : e - s > 0 && 1 !== r ? n.searchBannerOpacity = 1 : e - o < 0 && 0 !== r && (n.searchBannerOpacity = 0), 
        n;
    }(e, r.searchBannerOpacity)), null != (n = Object.keys(t)) && n.length) {
        var i = t.searchBannerOpacity;
        if (r.searchBannerOpacity === i) return;
        r.searchBannerOpacity = i, "number" == typeof i && a && a.setModuleData("menu-shop-info", {
            searchBannerOpacity: i
        });
    }
}, 10, !0));

exports.setAnimation = p, exports.FIXED_HEAD_POSITION_MP = c;