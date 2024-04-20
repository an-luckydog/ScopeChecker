var e = require("b/helpers/interopRequireDefault"), r = require("b/helpers/objectSpread2"), n = e(require("./miniprogram_npm/@limo/core/index.js")), t = e(require("./miniprogram_npm/@analytics/wechat-sdk/index.js")), o = require("./miniprogram_npm/@dp/owl-wxapp/index.js"), i = require("./lib/wx/app-info"), a = e(require("./miniprogram_npm/@mtfe/rms-triangle-c/index.js")), u = e(require("./lib/wx/log")), s = require("./lib/env"), p = require("./modules/pointReport"), m = require("./lib/wx/init"), d = require("./lib/wx/pike"), l = require("./lib/wx/logan"), c = require("./lib/wx/shark"), h = require("./lib/wx/safety"), f = require("./lib/wx/privacy"), g = require("./lib/wx/logConfig"), q = e(require("./miniprogram_npm/@mtfe/saas-user-auth/index.js")), v = e(require("./api/rmsStorage-main")), L = require("./miniprogram_npm/@mtfe/rms-sdk/index.js"), R = require("./config/index.js"), x = require("./pages/user/common"), w = (require("./prefetch/order-list"), 
require("./pages/custom-page/common")), b = a.default.Reporter(g.TRIANGLE_INIT_CONFIG);

(0, o.app)({
    report: {
        reportLaunch: !1,
        launchTimeFromScan: 0,
        launchStartTime: 0,
        showStartTime: 0
    },
    isHide: !1,
    cache: {},
    spuCache: {},
    userInfo: void 0,
    appTemplate: "2",
    onLaunch: function(e) {
        var n;
        (0, L.initEnv)("production");
        var y, C, O = (0, L.getEnv)();
        (0, d.initPike)(), (0, l.initLogan)(), (0, c.initShark)(), (0, h.initSafetyRequest)(O), 
        (0, f.initPrivacy)(), y = O, t.default.init("https://report.meituan.com", {
            appnm: "rms_smdc",
            category: "saaspay"
        }), "production" !== y && t.default.dev(!0), t.default.start(), L.LXReporter.mpOnLaunch({
            lx: t.default
        }), null != e && null != (n = e.query) && n.promotionMonitoring && L.LXReporter.initAppPromotionMonitoring(null == e || null == (C = e.query) ? void 0 : C.promotionMonitoring), 
        (0, m.initApp)(this), (0, L.initHeaderVersion)(R.VERSION_CODE, R.VERSION, "2"), 
        this.miniProgramData.setTabbarPageInfo(), u.default.reportMetric("appLaunch"), function(e, r) {
            var n = r.scene;
            1011 !== n && 1012 !== n && 1013 !== n || (e.report.launchTimeFromScan = Date.now());
        }(this, e), this.performanceObserver = (0, p.performanceObserver)(this), "release" === (0, 
        s.getWxEnvVersion)() && (0, L.updateApp)(!0, {
            scene: "appOnLaunch"
        }), function(e, n) {
            1129 !== e.scene && (o.owl.start(r(r({}, g.OWL_INIT_CONFIG), {}, {
                devMode: "production" !== n
            })), g.OWL_SUBPKG_INFO.forEach(function(e) {
                return (0, o.registerProject)(e);
            }));
        }(e, O), L.advertiseReporter.init({
            timeout: 2e3,
            maxSize: 2,
            source: 1e3
        }), b.sendInfo({
            name: "appOnLaunch",
            content: {
                options: e
            }
        }), q.default.handleWxPrefetch({
            env: O,
            LXReporter: L.LXReporter,
            getEnvHeader: L.getEnvHeader,
            Log: u.default,
            sendLxHelper: {
                sendMV: L.LXReporter.sendMV
            }
        }), v.default.removeCustomChannel(), L.Theme.clearThemeCache({
            forceClear: !0
        }), a.default.preload.register([ {
            path: "/pages/user/index",
            key: "userPageMainRequestData",
            jumpBefore: function(e) {
                return (0, x.createUserInfoRequest)(e);
            }
        }, null, {
            path: "/pages/custom-page/index",
            key: "customPageMainRequestData",
            jumpBefore: function(e) {
                return (0, w.createCustomPageRequest)(e);
            }
        } ].filter(function(e) {
            return !!e;
        })), (0, i.isMerchantWxApp)() && L.ThemeControl.initTheme({
            fail: function(e) {
                u.default && u.default.addError(e);
            }
        });
    },
    onShow: function(e) {
        var r, n;
        this.report.showStartTime = Date.now(), L.LXReporter.sendMV("b_saaspay_8yr470rs_mv"), 
        this.isHide || u.default.addCustom("appColdShowCount", 1, {
            who: 3
        }), this.isHide = !1, u.default.addCustom("appShowCount", 1, {
            who: 3
        }), b.sendInfo({
            name: "appOnShow",
            content: {
                options: e
            }
        }), this.setQrCode(e), L.Theme.clearThemeCache({
            options: e
        }), this.performanceObserver && this.performanceObserver.observe({
            entryTypes: [ "navigation", "loadPackage" ]
        }), L.LazyLoad.onError(), L.Log.getLoganInstance() || (0, l.initLogan)(), null != e && null != (r = e.query) && r.promotionMonitoring && L.LXReporter.initAppPromotionMonitoring(null == e || null == (n = e.query) ? void 0 : n.promotionMonitoring);
    },
    setQrCode: function(e) {
        e.query && e.query.qrCode && (this.qrCode = e.query.qrCode);
    },
    onHide: function() {
        L.LXReporter.sendMV("b_saaspay_h8pft3g4_mv", null, null, {
            duration: Date.now() - this.report.showStartTime
        }), this.isHide = !0, this.report.launchStartTime = 0, this.report.showStartTime = 0, 
        this.performanceObserver && this.performanceObserver.disconnect(), b.sendInfo({
            name: "appOnHide"
        }), L.advertiseReporter.clearStuck(), t.default.quit(), L.LazyLoad.offError();
    },
    onError: function(e) {
        b.sendInfo({
            level: "ERROR",
            name: "app-onError",
            content: {
                error: e
            }
        });
    },
    onPageNotFound: function(e) {
        "release" === (0, s.getWxEnvVersion)() && (0, L.updateApp)(!0, {
            scene: "onPageNotFound"
        }), n.default.getLimoRuntime().redirectTo({
            url: "/diancan-menu/pages/error-tip/index?type=6"
        }), b.sendInfo({
            level: "ERROR",
            name: "onPageNotFound",
            content: {
                options: e
            }
        });
    }
});