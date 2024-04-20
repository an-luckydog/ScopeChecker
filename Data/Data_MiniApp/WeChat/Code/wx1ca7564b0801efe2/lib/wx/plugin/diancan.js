var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.plugins = void 0;

var r = require("../../../modules/cartHelper"), a = e(require("../../../api/cartPike")), o = require("./default"), t = require("../app-info"), i = require("../../../modules/LXHelper"), n = {
    onHide: function() {
        (0, i.sendPD)(), (0, r.stopPollTask)();
    },
    onUnload: function() {
        (0, r.stopPollTask)(), a.default.close();
    },
    onLoad: function(e) {
        o.plugins.onLoad(e);
    },
    onShow: function() {
        (0, i.LxBizParamsOnshowHandle)();
        var e = (0, t.isNativeTabbarPage)(this.route);
        "function" == typeof this.getTabBar && this.getTabBar() && e && this.getTabBar() && this.getTabBar().changeTabbarIndex(e - 1);
    }
};

exports.plugins = n;