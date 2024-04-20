Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(a, t, o, r) {
    void 0 === o && (o = Page), void 0 === r && (r = null);
    var n = a.pageSpeed, g = a.pvManager, c = a.cfgManager, l = t.onLoad, i = t.onShow, p = t.onReady, h = t.onHide, s = t.onUnload, u = t.onPullDownRefresh, d = r && r.cfgManager && r.cfgManager.get("project") || "";
    t.onLoad = function(e) {
        try {
            var a = Date.now();
            n.onPageLoad(a), c.get("hasRecordApp") || (n.appReady(this.route, a), c.update("hasRecordApp", !0)), 
            n.pageLoad(a);
        } catch (e) {}
        l && l.call(this, e);
    }, t.onShow = function(t) {
        var o = this;
        try {
            var r = c.get("autoCatch");
            if (r && r.pagePv) {
                var n = c.getCustomTags(), l = c.get("pageUrl");
                (0, e.getEnv)().then(function(t) {
                    t.pageUrl = l ? (0, e.getPageUrl)(l) : o.route || t.pageUrl, t.cTags = n, a.logManager._addLog({
                        level: "INFO",
                        msg: "[Navigation]:" + JSON.stringify({
                            project: a.cfgManager.get("project"),
                            pageUrl: t.pageUrl
                        }),
                        tags: [ "owl", "pageShow" ]
                    }), g.report(t);
                });
            }
        } catch (e) {}
        i && i.call(this, t);
    }, t.onReady = function(e) {
        try {
            var a = Date.now();
            n.onPageReady(a), n.pageReady(a, this.route);
        } catch (e) {}
        p && p.call(this, e);
    }, t.onHide = function(e) {
        try {
            n.reportPerf(this.route, d), n.report();
        } catch (e) {}
        h && h.call(this, e);
    }, t.onUnload = function(e) {
        try {
            n.reportPerf(this.route, d), n.report();
        } catch (e) {}
        s && s.call(this, e);
    }, t.onPullDownRefresh = function(e) {
        try {
            n.pullRefresh();
        } catch (e) {}
        u && u.call(this, e);
    }, o(t);
};

var e = require("./env");