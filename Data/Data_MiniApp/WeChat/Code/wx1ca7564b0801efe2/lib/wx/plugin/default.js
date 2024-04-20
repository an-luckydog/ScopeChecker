var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.plugins = void 0;

var t = e(require("../../../miniprogram_npm/@limo/core/index.js")), r = e(require("../../../miniprogram_npm/@analytics/wechat-sdk/index.js")), a = require("../util"), i = require("../../../modules/userHelper"), n = e(require("../../../api/rmsStorage-main")), o = require("../../env"), u = require("../app-info"), s = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), l = {
    onHide: function() {
        s.LXReporter.sendPD();
    },
    onUnload: function() {},
    onLoad: function(e) {
        s.LXReporter.pageLoadInit(e, {
            lx: r.default,
            getTabbarPageOptions: a.getTabbarPageOptions
        }, {
            getCustomChannel: n.default.getCustomChannel,
            getTenantId: n.default.getTenantId,
            getUserIdWithPlatform: i.getUserIdWithPlatform
        }), n.default.getCustomChannel() || n.default.setCustomChannel(null == e ? void 0 : e.customChannel), 
        o.isAliPayNative && t.default.getLimoRuntime().hideShareMenu();
    },
    onShow: function() {
        s.LXReporter.pageShowInit();
        var e = (0, u.isNativeTabbarPage)(this.route);
        "function" == typeof this.getTabBar && this.getTabBar() && e && this.getTabBar() && this.getTabBar().changeTabbarIndex(e - 1);
    }
};

exports.plugins = l;