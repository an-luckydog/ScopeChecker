Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, r, o) {
    void 0 === o && (o = App);
    var n = e.error, a = e.pageSpeed, c = e.resource, p = e.pvManager, i = e.metricV2, u = e.cfgManager, h = r.onLaunch, g = r.onShow, l = r.onHide, s = r.onError, d = r.onUnhandledRejection, f = r.onPageNotFound;
    r.onLaunch = function(t) {
        try {
            var e = Date.now();
            a.onAppLaunch(e), a.appLaunch(e, t.path);
        } catch (t) {}
        h && h.call(this, t);
    }, r.onShow = function(e) {
        try {
            var r = u.get("autoCatch");
            if (r && r.pv && !r.pagePv) {
                var o = u.getCustomTags(), n = u.get("pageUrl");
                (0, t.getEnv)().then(function(r) {
                    r.pageUrl = e.path || (0, t.getPageUrl)(), r.pageUrl = n ? (0, t.getPageUrl)(n) : e.path || (0, 
                    t.getPageUrl)(), r.cTags = o, p.report(r);
                });
            }
        } catch (t) {}
        g && g.call(this, e);
    }, r.onHide = function() {
        try {
            n.report(), c.report(), i.report();
        } catch (t) {}
        l && l.call(this);
    }, r.onError = function(t) {
        try {
            var e = u.get("autoCatch");
            e && e.error && (t = "function" == typeof r.preError ? r.preError(t) : t, n.onError(t));
        } catch (t) {}
        s && s.call(this, t);
    }, r.onUnhandledRejection = function(t) {
        try {
            var e = u.get("autoCatch");
            e && e.promiseRejection && t && t.reason && n.onPromiseRejection(t.reason);
        } catch (t) {}
        d && d.call(this, t);
    }, r.onPageNotFound = function(t) {
        try {
            t && (t = "function" == typeof r.preNotFound ? r.preNotFound(t) : t, n.addError("page not found", t.path));
        } catch (t) {}
        f && f.call(this, t);
    }, o(r);
};

var t = require("./env");