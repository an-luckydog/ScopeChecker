var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateIsFirstEnter = exports.sendSplashMenuFmpDuration = exports.sendRequestStartToRequestEnd = exports.sendRequestEndToDataStart = exports.sendMenuListRenderDuration = exports.sendLVC = exports.sendInitPageToRequestStart = exports.sendElseMenuListRenderDuration = exports.addDataUpdateListener = void 0;

var t, n = e(require("../../../miniprogram_npm/@limo/core/index.js")), a = e(require("../../../lib/wx/log")), r = require("../../../lib/wx/util"), s = 0, o = {};

exports.updateIsFirstEnter = function(e) {
    t = e;
};

var u = function(e, n, s) {
    var u = 0;
    if (t && e > 0) {
        var i = (u = Date.now()) - e;
        a.default.addPerformance(n, i, (0, r.getWxPathName)()), getApp() && getApp().diancanGlobalData && getApp().diancanGlobalData.autoTest && (o[s] = i, 
        getApp().diancanGlobalData.menuStepDurationMap = o);
    }
    return u;
};

exports.sendInitPageToRequestStart = function(e) {
    return u(e, 7, "sendInitPageToRequestStart");
};

exports.sendRequestStartToRequestEnd = function(e) {
    return u(e, 2, "sendRequestStartToRequestEnd");
};

exports.sendRequestEndToDataStart = function(e) {
    return u(e, 8, "sendRequestEndToDataStart");
};

exports.sendMenuListRenderDuration = function(e) {
    return u(e, 3, "sendMenuListRenderDuration");
};

exports.sendLVC = function(e) {
    return u(e, 18, "menu_LVC");
};

exports.sendElseMenuListRenderDuration = function(e) {
    return u(e, 4, "sendElseMenuListRenderDuration");
};

exports.sendSplashMenuFmpDuration = function(e) {
    return u(e, 15, "sendSplashMenuFmpDuration");
};

exports.addDataUpdateListener = function(e) {
    try {
        var t;
        i = null == (t = getApp()) || null == (t = t.report) ? void 0 : t.launchTimeFromScan, 
        u(i, 13, "sendLaunchToMenuLoadDuration");
        var a = getApp() && getApp().diancanGlobalData && getApp().diancanGlobalData.autoTest;
        if (!e || !a || !e.setUpdatePerformanceListener || e.isHided) return;
        n.default.getLimoRuntime().getPerformance().createObserver(function(e) {
            getApp().diancanGlobalData.entries = e.getEntries();
        }).observe({
            entryTypes: [ "render", "script", "navigation" ]
        });
        var r = 0, o = {};
        e.setUpdatePerformanceListener({
            withDataPaths: !0
        }, function(e) {
            r <= 0 && (r = Date.now());
            var t = e.updateEndTimestamp - e.pendingStartTimestamp, n = e.dataPaths.join("&");
            o[n] = t;
            var a = ++s, u = (Date.now() - r) / 1e3;
            getApp().diancanGlobalData.dataCount = {
                setDataCount: a,
                dataCountDuration: Math.floor(a / u) + " 【需小于20次】",
                allSetData: o
            };
        });
    } catch (e) {}
    var i;
};