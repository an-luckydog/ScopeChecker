var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.checkWeiQian = exports.WEI_QIAN_TANENT_ID = void 0;

var r = e(require("../../miniprogram_npm/@limo/core/index.js")), a = e(require("../../api/rmsStorage")), i = require("../../constants/path"), t = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), n = require("./app-info");

exports.checkWeiQian = function() {
    var e, u, o = (0, n.getAppId)();
    if ("wxaf59365a4487abe5" === o || "wx9a10b006cc2a38ee" === o) {
        var p = a.default.getMenuOps();
        return !(!p || (e = p, u = t.default.parse(e), !u.mtShopId && !u.shopId) || (t.default.isWxNative && r.default.getLimoRuntime().switchTab({
            url: "/pages/menu/index?" + p,
            fail: function() {
                t.default.navigateTo("".concat(i.PATH.menu, "?").concat(p, "&menucache=1"));
            }
        }), 0));
    }
    return !1;
};

exports.WEI_QIAN_TANENT_ID = 11103980;