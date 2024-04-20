var a = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initApp = void 0;

var e = a(require("../../miniprogram_npm/@limo/core/index.js")), n = require("../../constants/index-main"), r = a(require("../storage")), t = a(require("./request")), i = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js");

exports.initApp = function(a) {
    var o;
    a && void 0 === a.diancanGlobalData && (a.diancanGlobalData = {
        userInfo: {
            nickname: "",
            headimgurl: ""
        },
        sessionStorage: {},
        dishList: {},
        perceptionFrom: "",
        previewContainer: "",
        previewParam: "",
        getEnv: function() {
            return (0, i.getEnv)();
        },
        setPreview: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            a.diancanGlobalData.previewContainer = e;
        },
        getPreview: function(e) {
            return a.diancanGlobalData.previewContainer === e;
        },
        setPreviewParam: function(e) {
            a.diancanGlobalData.previewParam = e;
        },
        getPreviewParam: function() {
            return a.diancanGlobalData.previewParam || "";
        },
        setUserInfo: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (e.nickName) {
                var t = a.diancanGlobalData.userInfo;
                if (t.nickname !== e.nickName || t.headimgurl !== e.avatarUrl) {
                    var i = {
                        nickname: e.nickName,
                        headimgurl: e.avatarUrl
                    };
                    a.diancanGlobalData.userInfo = i, r.default.set(n.storageKey.userInfo, i);
                }
            }
        },
        getUserInfo: function() {
            return a.diancanGlobalData.userInfo;
        },
        setSessionStorageValue: function(e, n) {
            a.diancanGlobalData.sessionStorage[e] = n;
        },
        getSessionStorageValue: function(e) {
            return a.diancanGlobalData.sessionStorage[e];
        },
        clearSessionStorage: function() {
            a.diancanGlobalData.sessionStorage = {};
        },
        setDishList: function(e, n) {
            a.diancanGlobalData.dishList[e] = n;
        },
        getDishList: function(e) {
            return a.diancanGlobalData.dishList[e];
        },
        setPerceptionFrom: function(e) {
            var n = "";
            if (e && e.p) {
                var r = decodeURIComponent(e.p).split("&").find(function(a) {
                    return -1 !== a.indexOf("from");
                });
                n = r && r.split("=")[1];
            }
            a.diancanGlobalData.perceptionFrom = n;
        },
        getPerceptionFrom: function() {
            return a.diancanGlobalData.perceptionFrom;
        },
        request: t.default,
        setCloudDataCacheKey: function(e) {
            a.diancanGlobalData.cacheKey = e;
        },
        getCloudDataCacheKey: function() {
            return a.diancanGlobalData.cacheKey;
        },
        setCookieInfo: function(e) {
            a.diancanGlobalData.cookieInfo = e;
        },
        getCookieInfo: function() {
            return a.diancanGlobalData.cookieInfo;
        },
        setLocalAddress: function(e) {
            a.diancanGlobalData.address = e;
        },
        getLocalAddress: function() {
            return a.diancanGlobalData.address;
        }
    }, a.miniProgramData = {
        tabbarPageParams: {},
        tabbarInfo: {},
        setTabbarPageParams: function(e, n) {
            0 !== e.indexOf("pages") && 0 !== e.indexOf("/pages") || (a.miniProgramData.tabbarPageParams["/" === e[0] ? e : "/" + e] = n);
        },
        getTabbarPageParams: function(e) {
            var n = {};
            if (0 === e.indexOf("pages") || 0 === e.indexOf("/pages")) for (var r in a.miniProgramData.tabbarPageParams) r.indexOf("/" === e[0] ? e : "/" + e) > -1 && (n = a.miniProgramData.tabbarPageParams && a.miniProgramData.tabbarPageParams[r] || {});
            return n;
        },
        setTabbarPageInfo: function() {
            a.miniProgramData.tabbarInfo = e.default.getLimoRuntime().getExtConfigSync ? e.default.getLimoRuntime().getExtConfigSync() : {};
        },
        getTabbarPageInfo: function() {
            var e;
            return null != a && null != (e = a.miniProgramData) && e.tabbarInfo && 0 === Object.keys(a.miniProgramData.tabbarInfo).length && a.miniProgramData.setTabbarPageInfo(), 
            a.miniProgramData.tabbarInfo || {};
        },
        isNativeTabbarPage: function(e) {
            for (var n = a.miniProgramData.getTabbarPageInfo().tabbar, r = void 0 === n ? [] : n, t = 0, i = 0; i < r.length; i++) {
                var o, s = null == (o = r[i]) ? void 0 : o.pagePath;
                (s.indexOf("pages") || s.indexOf("/pages")) && s.indexOf(e) > -1 && (t = i + 1);
            }
            return t;
        }
    }, (o = a).report && o.report.reportLaunch || (o.report.reportLaunch = !0, i.LXReporter.sendPV("c_saaspay_nqr58224", null, null, {
        ignoreCheck: !0
    }), i.LXReporter.sendMV("b_saaspay_s59sc25f_mv")));
};