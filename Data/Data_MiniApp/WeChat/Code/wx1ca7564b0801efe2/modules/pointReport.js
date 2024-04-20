var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.performanceObserver = void 0;

var r = e(require("../miniprogram_npm/@limo/core/index.js")), t = e(require("../lib/wx/log"));

exports.performanceObserver = function(e) {
    var a;
    if (r.default.getLimoRuntime().getPerformance) try {
        a = r.default.getLimoRuntime().getPerformance().createObserver(function(r) {
            var a = r.getEntriesByName("appLaunch", "navigation"), o = r.getEntriesByName("route", "navigation"), i = r.getEntriesByName("downloadPackage", "loadPackage");
            if (null != a && a[0]) {
                e.report.launchStartTime = a[0].startTime;
                var u = a[0].path;
                e.report.appDirectLaunchRoute = u, t.default.addCustom("appDirectLaunchRoute", 1, {
                    path: u
                });
            }
            if (o && o.length && (e.report.routePerfList = (e.report.routePerfList || []).concat(o).slice(-2), 
            !e.report.appRedirectLaunchRoute && e.report.appDirectLaunchRoute && e.report.appDirectLaunchRoute.includes("splash") && e.report.routePerfList[0] && e.report.routePerfList[0].referrerPath && e.report.routePerfList[0].referrerPath.includes("splash"))) {
                var p = e.report.routePerfList[0].path;
                e.report.appRedirectLaunchRoute = p, t.default.addCustom("appRedirectLaunchRoute", 1, {
                    path: p
                });
            }
            null != i && i.length && i.forEach(function(e) {
                if (e && e.packageSize) {
                    var r = e.packageName, a = e.packageSize, o = e.duration;
                    t.default.addCustom("downloadPackageSize", a / 1024, {
                        packageName: r
                    }), t.default.addCustom("downloadPackageTime", o, {
                        packageName: r
                    });
                }
            });
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        t.default.addError("设置性能监听异常", e);
    }
    return a;
};