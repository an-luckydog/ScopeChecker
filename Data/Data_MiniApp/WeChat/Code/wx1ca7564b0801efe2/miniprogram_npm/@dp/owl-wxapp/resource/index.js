var e = require("../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../env"), r = require("../util/util"), i = require("../util/complianceCheck"), a = require("../constant/index"), n = e(require("./model")), s = "resource", o = function() {
    function e(e, t, r) {
        this.cfgManager = e, this.errManager = t, this.log = r, this.apiCache = [];
    }
    var o = e.prototype;
    return o.pushApi = function(e, a) {
        var o = this;
        if (e) try {
            var c = this.cfgManager.get(s);
            if (Math.random() > c.sample) return;
            e.p = e.p || this.cfgManager.get("project");
            var u = this.cfgManager.config, g = u.project, p = u.isDump;
            if (e.pageUrl = e.pageUrl || (0, t.getPageUrl)(this.cfgManager.get("pageUrl")), 
            p) {
                var h = (0, r.findOwlProject)(e.pageUrl);
                e.dump = h === g ? "" : h;
            } else e.dump = "";
            var l = new n.default(e), d = !0, f = this.cfgManager.get("onBatchPush");
            if (f && f instanceof Function) try {
                d = f(l);
            } catch (e) {}
            if (!d || !(0, i.complianceCheck)("api", l)) return;
            this.apiCache.push(l);
            var m = [ "owl", "request" ];
            l.secCate && m.push("requestError"), this.log._addLog({
                level: l.secCate ? "ERROR" : "INFO",
                msg: "[Request]:" + JSON.stringify(l),
                tags: m
            }), this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.apiCache.length >= (c.sendTriggerThreshold || 10) ? this.report(!0) : a ? this.report() : this.timeout = setTimeout(function() {
                o.report();
            }, c.delay || 1500);
        } catch (e) {}
    }, o.addApi = function(e, t) {
        try {
            if (!e || !e.name) return;
            if (void 0 !== e.networkCode && "number" != typeof e.networkCode) return;
            if (void 0 !== e.statusCode && "number" != typeof e.statusCode) return;
            var i = e.networkCode || 0 === e.networkCode ? e.networkCode : "", n = e.statusCode || 0 === e.statusCode ? e.statusCode : "", s = parseInt(e.responseTime || ""), o = {
                resUrl: e.name,
                pageUrl: e.pageUrl || "",
                type: "api",
                connectType: e.connectType,
                code: i + "|" + n,
                resTime: s && s.toString() || "0",
                ctags: (0, r.isFlatObj)(e.cTags) ? e.cTags : this.cfgManager.getCustomTags()
            };
            e.content && (o.firCate = a.CATEGORY.AJAX, o.secCate = e.secondCategory || e.name, 
            o.content = e.content), this.pushApi(o, t);
        } catch (e) {}
    }, o.addApiError = function(e, t, r) {
        var i = this.cfgManager.get(s).errSample || .2;
        Math.random() > i || this.errManager.pushError({
            sec_category: e,
            content: t,
            category: a.CATEGORY.AJAX,
            level: a.LEVEL.WARN
        }, r);
    }, o._stringify = function(e) {
        var t = this.cfgManager, i = e ? t.get(s).sendTriggerThreshold || 10 : this.apiCache.length, a = this.apiCache.splice(0, i);
        if (a && a.length) try {
            for (var n = t.config, o = (0, r.getMpVers)(n), c = t.extensions, u = {
                p: n.project,
                pvId: n.pageId,
                mpVer: o.mpVer,
                mpLibVer: o.mpLibVer,
                network: c.network || "",
                os: c.os || "",
                container: c.container || "",
                unionId: n.unionId || "",
                requests: []
            }, g = 0; g < a.length; g++) u.requests.push(a[g]);
            return u;
        } catch (e) {}
    }, o.report = function(e) {
        if (void 0 === e && (e = !1), this.apiCache.length) try {
            var t = this._stringify(e);
            t && (0, r.requestQueue)({
                url: this.cfgManager.getApiPath(s),
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(t)
            });
        } catch (e) {}
    }, e;
}();

exports.default = o;