var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initPageOnLoad = exports.TrianglePage = exports.ProxyPage = exports.MigratePageTo = void 0;

var r = require("../../miniprogram_npm/@dp/owl-wxapp/index.js"), t = e(require("../../miniprogram_npm/@limo/core/index.js")), i = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), o = e(require("./request")), a = e(require("../../miniprogram_npm/@analytics/wechat-sdk/index.js")), n = require("../geo"), s = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), d = e(require("./subscriptionSdk")), u = {
    navigateTo: i.default.navigateTo,
    redirectTo: i.default.redirectTo,
    request: o.default,
    sendMC: s.LXReporter.sendMC,
    sendPV: s.LXReporter.sendPV,
    sendMV: s.LXReporter.sendMV,
    lx: a.default,
    limoUseCustomHandler: {
        advertiseReporter: s.advertiseReporter,
        getLocation: n.getLocation,
        subscribeMessage: d.default
    }
};

exports.TrianglePage = function(e, t) {
    e.Limo && e.Limo.use(u), i.default.Page(e, t, r.page);
};

exports.initPageOnLoad = function() {
    t.default.proxy(u);
};

exports.ProxyPage = function(e, t) {
    i.default.Page(e, t, r.page);
};

exports.MigratePageTo = function(e) {
    Page({
        data: {},
        onLoad: function(r) {
            this.__limoCore = t.default.LimoCoreFactory();
            var o = i.default.stringify(r, !1);
            i.default.redirectTo({
                url: "".concat(e, "?").concat(o)
            });
        }
    });
};