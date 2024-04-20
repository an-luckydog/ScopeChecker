var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TRIANGLE_INIT_CONFIG = exports.OWL_SUBPKG_INFO = exports.OWL_INIT_CONFIG = exports.LLOG_CONFIG = exports.APP_KEY = void 0, 
require("../../b/helpers/Arrayincludes");

var r, o = e(require("../../miniprogram_npm/@limo/core/index.js")), n = e(require("../../miniprogram_npm/@analytics/wechat-sdk/index.js")), a = e(require("../../miniprogram_npm/@mtfe/saas-user-auth/index.js")), t = require("../../miniprogram_npm/@dp/owl-wxapp/index.js"), s = require("../../config/index"), p = require("./util"), i = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), m = require("./app-info"), c = ((r = c || {})[r.v1 = 1] = "v1", 
r[r.v2 = 2] = "v2", r), u = {
    log: function() {
        var e, r;
        return null == (r = i.Log.getLoganInstance()) ? void 0 : (e = r).log.apply(e, arguments);
    },
    updateUserConfig: function() {
        var e, r;
        return null == (r = i.Log.getLoganInstance()) ? void 0 : (e = r).updateUserConfig.apply(e, arguments);
    },
    onHide: function() {
        var e;
        return null == (e = i.Log.getLoganInstance()) ? void 0 : e.onHide();
    }
}, g = {
    independent: "com.sankuai.shepherdnode.wxapp.menuorder",
    merchant: "com.sankuai.rmsmenuorderfe.merchant.wxapp",
    v2: "com.sankuai.rmsmenuorderfe.v2.wxapp"
}, l = function() {
    var e = g;
    return "string" == typeof e ? e : Number("2") === c.v2 ? e.v2 : (0, m.isMerchantWxApp)() ? e.merchant : e.independent;
}();

exports.APP_KEY = l;

var d = n.default.get("lxcuid"), f = {
    env: "prod",
    wxOwl: t.owl,
    wxLx: n.default,
    wxLLog: u
};

exports.TRIANGLE_INIT_CONFIG = f;

var x = {
    appKey: l,
    userID: d,
    openId: a.default.getOpenId()
};

exports.LLOG_CONFIG = x;

var h = {
    project: l,
    rtlLogan: {
        enable: !0,
        rtlLogan: u
    },
    unionId: d,
    autoCatch: {
        pv: !0,
        pagePv: !0,
        promiseRejection: !0,
        oldSpeed: !0
    },
    page: {
        sample: 1
    },
    resource: {
        sample: 1
    },
    metric: {
        delay: 2e3
    },
    version: {
        appVersion: s.BUILD_PUBLIC_VERSION || s.VERSION
    },
    error: {
        formatUnhandledRejection: !0
    },
    monitorApi: {
        apis: [ "requestPayment", "login", "getLocation", "getUserProfile", "chooseLocation", "chooseAddress", "chooseInvoiceTitle", "chooseInvoice", "getWeRunData", "chooseImage", "chooseVideo", "openBluetoothAdapter", "saveImageToPhotosAlbum", "saveVideoToPhotosAlbum", "addPhoneContact", "stopAccelerometer", "startAccelerometer", "onAccelerometerChange", "offAccelerometerChange", "stopCompass", "startCompass", "onCompassChange", "offCompassChange", "stopDeviceMotionListening", "startDeviceMotionListening", "onDeviceMotionChange", "offDeviceMotionChange", "stopGyroscope", "startGyroscope", "onGyroscopeChange", "offGyroscopeChange", "setClipboardData", "getClipboardData" ]
    },
    enableLogTrace: !0,
    setCustomTags: function() {
        var e;
        return {
            shopId: (0, p.getWxPageOptions)().shopId || "",
            tenantId: (null == o.default.getLimoRuntime().getExtConfigSync || null == (e = o.default.getLimoRuntime().getExtConfigSync()) ? void 0 : e.tenantId) || ""
        };
    },
    onErrorPush: function(e) {
        e.sec_category;
        if (!e.content.includes("fail cancel")) return e;
    }
};

exports.OWL_INIT_CONFIG = h;

var v = [ {
    project: "com.sankuai.sjstcrm.membergrowth.miniprogress",
    rules: [ RegExp(/^market-growth\/pages\/*/) ]
}, {
    project: "com.sankuai.sjstcrm.membergrowth.miniprogress",
    rules: [ RegExp(/^member-growth-two\/pages\/*/) ]
}, {
    project: "com.sankuai.sjstcrm.membergrowth.miniprogress",
    rules: [ RegExp(/^campaign-interactive\/pages\/*/) ]
}, {
    project: "com.sankuai.sjstcrm.membergrowth.miniprogress",
    rules: [ RegExp(/^campaign-common\/pages\/*/) ]
}, {
    project: "com.sankuai.rmsmenuorderfe.crm.giftcard",
    rules: [ RegExp(/^gift-card\/pages\/*/) ]
}, {
    project: "com.sankuai.rmsmenuorderfe.crm.membertrade",
    rules: [ RegExp(/^member-trade\/pages\/*/) ]
}, {
    project: "com.sankuai.rmslitefe.mstore.miniapp",
    rules: [ RegExp(/^mstore-miniapp\/pages\/*/) ]
}, {
    project: "com.sankuai.rmsmenuorderfe.crm.wemember",
    rules: [ RegExp(/^wemember\/pages\/*/) ]
}, {
    project: "com.sankuai.rmsmenuorderfe.crm.member",
    rules: [ RegExp(/^member\/pages\/*/) ]
}, {
    project: "com.sankuai.rmsmenuorderfe.crm.pointsexchange",
    rules: [ RegExp(/^points-exchange\/pages\/*/) ]
}, {
    project: "com.sankuai.rmsmarketingfe.enterprise.miniapp",
    rules: [ RegExp(/^enterprise\/pages\/*/) ]
}, {
    project: "com.sankuai.rmsmktfe.coupon.miniapp",
    rules: [ RegExp(/^coupon\/pages\/*/) ]
}, {
    project: "com.sankuai.rmsmenuorderfe.crm.mktcommon",
    rules: [ RegExp(/^marketing-common\/pages\/*/) ]
}, {
    project: "com.sankuai.rmsmenuorderfe.crm.cloudmall",
    rules: [ RegExp(/^cloud-mall\/pages\/*/) ]
} ];

exports.OWL_SUBPKG_INFO = v;