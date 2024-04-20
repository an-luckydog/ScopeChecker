var r = require("../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../../b/helpers/typeof"), t = require("../env"), n = require("../util/util"), o = require("../constant/index"), a = r(require("./model")), i = function() {
    function r(r, e) {
        this.cfgManager = r, this.log = e, this.errorCache = [];
    }
    var i = r.prototype;
    return i.pushError = function(r, e) {
        var o = this;
        if (r) {
            try {
                r.sec_category || r.content || (r.content = JSON.stringify(r));
            } catch (r) {}
            try {
                var i = this.cfgManager.config, s = r instanceof a.default ? r : new a.default(r);
                if (!((s = this.handleErr(s, i.onErrorPush)) && s instanceof a.default)) return;
                (0, t.getEnv)().then(function(t) {
                    var a = (0, n.getVersions)(i);
                    s = (s = s.updateTags(a)).toJson(), r = o.parse(s);
                    var c = t.network, g = t.container, p = t.os, u = t.unionId;
                    u = i.unionId || u, r = Object.assign({
                        network: c,
                        container: g,
                        os: p,
                        unionId: u
                    }, r), o.errorCache.push(r), o.log._addLog({
                        level: r.level.toUpperCase(),
                        msg: "[Error]:" + JSON.stringify(r),
                        tags: [ "owl", r.type ]
                    }), e && o.report();
                });
            } catch (r) {}
        }
    }, i.handleErr = function(r, e) {
        try {
            return e && e instanceof Function && (r = e(r)), r;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return r;
        }
    }, i.parse = function(r) {
        var e = this.cfgManager.config, o = e.project, a = e.isDump;
        if (r.p = o, r.pageUrl = r.pageUrl || (0, t.getPageUrl)(this.cfgManager.get("pageUrl")), 
        a) {
            var i = (0, n.findOwlProject)(r.pageUrl);
            r.dump = i === o ? "" : i;
        } else r.dump = "";
        return r;
    }, i.addError = function(r, t, n) {
        try {
            if (!r && !t) return;
            if (t && t instanceof a.default) this.pushError(t, n); else {
                var o = "", i = "";
                (t = t || "") instanceof Error ? (o = t.message || t.name || "", i = t.stack || t.message || "") : "string" == typeof t ? i = t : "object" == e(t) && (o = t.name || "", 
                i = t.msg || ""), o || i || (i = JSON.stringify(t)), this.pushError({
                    sec_category: r || o || "",
                    content: i,
                    category: t.category || "",
                    level: t.level || "",
                    pageUrl: t.pageUrl || ""
                }, n);
            }
        } catch (r) {
            r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
            this.reportSystemError(r);
        }
    }, i.reportSystemError = function(r) {
        if (r) try {
            this.pushError(new a.default({
                project: "owl",
                pageUrl: "wxapp_version_" + o.VERSION,
                sec_category: r.message || r.name || "",
                content: r.stack || r.message || "",
                tags: {
                    project: this.cfgManager.config.project,
                    owlVersion: o.VERSION
                }
            }), !0);
        } catch (r) {}
    }, i.onError = function(r) {
        if (void 0 === r && (r = ""), r) try {
            var e, n, o = "string" == typeof r ? r : r.message || r.toString() || "";
            o && "string" == typeof o && (o.indexOf("SDKScriptError") > -1 || o.indexOf("webviewScriptError") > -1 || (e = o.indexOf("MiniProgramError") > -1 ? (n = o.replace("MiniProgramError", "").split("\n")) && n[1] || "" : ((n = o.replace("thirdScriptError", "").split(";")) && n[0] || "").replace(/\t|\n/g, ""), 
            this.pushError(new a.default({
                sec_category: e,
                content: o,
                pageUrl: (0, t.getPageUrl)(this.cfgManager.get("pageUrl"))
            }), !0)));
        } catch (r) {
            r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
            this.reportSystemError(r);
        }
    }, i.onPromiseRejection = function(r) {
        var e = "unhandledrejection";
        try {
            var n = "", o = "";
            try {
                r instanceof Error ? (n = r.message, o = r.stack || r.message || "") : o = JSON.stringify(r);
            } catch (r) {}
            this.pushError(new a.default({
                sec_category: n ? "[" + e + "] " + n : e,
                content: o,
                pageUrl: (0, t.getPageUrl)(this.cfgManager.get("pageUrl"))
            }), !0);
        } catch (r) {
            r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
            this.reportSystemError(r);
        }
    }, i.report = function(r, e) {
        var o = this;
        if (this.errorCache.length) try {
            var a = [].concat(this.errorCache);
            this.errorCache = [];
            var i = this.cfgManager, s = i.config, c = (0, t.getEnvSync)(), g = (0, n.getMpVers)(s), p = {
                p: s.project,
                pvId: s.pageId,
                mpVer: g.mpVer,
                mpLibVer: g.mpLibVer,
                network: c.network || "",
                os: c.os || "",
                container: c.container || "",
                unionId: s.unionId || "",
                logs: a
            };
            (0, n.requestQueue)({
                url: i.getApiPath("error"),
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(p),
                success: function(e) {
                    a = [], r instanceof Function && r(e);
                },
                fail: function(r) {
                    o.errorCache = a.concat(o.errorCache), e instanceof Function && e(r);
                }
            });
        } catch (r) {}
    }, r;
}();

exports.default = i;