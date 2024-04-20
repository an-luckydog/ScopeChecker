var e = require("../../b/helpers/interopRequireDefault"), i = e(require("../../miniprogram_npm/@limo/core/index.js")), r = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), t = require("../../lib/wx/app-info"), n = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js"));

Page({
    onLoad: function(e) {
        if (this.__limoCore = i.default.LimoCoreFactory(), (0, t.isMerchantWxApp)()) {
            i.default.getLimoRuntime().setNavigationBarTitle({
                title: "扫码点餐"
            });
            var r = n.default.stringify(e, !1);
            i.default.getLimoRuntime().redirectTo({
                url: "/diancan-kbone/pages/portal/index?" + r
            });
        } else i.default.getLimoRuntime().setNavigationBarTitle({
            title: "美团点餐"
        }), i.default.getLimoRuntime().redirectTo({
            url: "/independent/home/pages/home/index"
        });
    },
    onShow: function() {
        (0, t.isMerchantWxApp)() || r.LXReporter.sendPV("c_eco_seggwc08");
    }
});