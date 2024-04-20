Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function i(c, s, d) {
    if (void 0 === d && (d = t.context.request), !c) return c;
    var u = s.cfgManager.config, p = Date.now(), l = (0, n.getPageUrl)(u.pageUrl), g = c.url, f = c.path, v = c.complete, m = c.connectType, h = c.reportError, y = c.isRequest, S = g || f || "", C = (u.resource.defaultNetworkCode || 500) + "";
    m = m || (g ? "https" : f ? "cloudContainer" : "https");
    var E, q = (0, o.isFunc)(s.cfgManager.getCustomTags) ? s.cfgManager.getCustomTags() : "";
    try {
        u.project && u.enableLogTrace && (E = (0, o.traceid)()) && (c.header = c.header || {}, 
        c.header["M-TRACEID"] = E, c.header["M-APPKEY"] = ("mmp" === t.sign ? "mt" : "wx") + "mp_" + u.project);
    } catch (e) {}
    try {
        c.complete = function(o) {
            try {
                var n = 0, c = 0, d = Date.now() - p;
                o && o.profile && (n = o.profile.sendBytesCount || 0, c = o.profile.receivedBytedCount || 0);
                var u = {
                    pageUrl: l,
                    resUrl: S,
                    resTime: d.toString(),
                    ts: p.toString(),
                    connectType: m,
                    reqByte: n,
                    resByte: c,
                    subs: a(o, s),
                    ctags: q
                };
                if (E && (u.traceid = E), o && "object" == e(o)) {
                    var g = o.statusCode, f = void 0 === g ? "" : g, y = o.errMsg, T = void 0 === y ? "request:ok" : y, x = "my" === t.sign || "dd" === t.sign ? o.status : f;
                    if (u.code = (x || C) + "|", "function" == typeof h) {
                        var L;
                        try {
                            L = h(o, i);
                        } catch (e) {}
                        var M = L || {}, A = M.code, k = void 0 === A ? "" : A, U = M.name, b = void 0 === U ? "" : U, j = M.log, w = void 0 === j ? "" : j, B = M.ignoreAjaxError, D = void 0 !== B && B;
                        (k || 0 === k) && (u.code = "" + u.code + k), D || (T.indexOf("request:fail") > -1 || T.indexOf("cloud.callContainer:fail") > -1 || b || w) && (u.firCate = r.CATEGORY.AJAX, 
                        u.secCate = b || S, u.content = w || T);
                    }
                } else u.code = C + "|";
                s.resource.pushApi(u);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                s.error.reportSystemError(e);
            } finally {
                v && v.apply(this, arguments);
            }
        };
    } catch (e) {}
    return y && "https" === m && d(c), c;
};

var e = require("../../../../b/helpers/typeof"), r = require("../constant/index"), t = require("../constant/context"), o = require("../util/util"), n = require("../env"), a = function(e, r) {
    var o = [];
    try {
        var n = e.profile || {}, a = 0, i = 0, c = 0, s = e.header || e.headers, d = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], u = [ 0 ], p = n.domainLookUpStart || n.domainLookupStart || 0, l = n.domainLookUpEnd || n.domainLookupEnd || 0, g = n.connectStart || 0, f = n.connectEnd || 0, v = n.SSLconnectionStart || 0, m = n.SSLconnectionEnd || 0;
        a = l - p, i = f - g, c = m - v, "my" !== t.sign && "dd" !== t.sign || (a = n.domainLookup || 0, 
        i = n.connect || 0, c = n.SSLconnection || 0);
        var h = r.cfgManager.get("resource").isFormatDetails;
        if (d[0] = a, d[1] = i, d[2] = c, s) {
            u = [ parseFloat(s["Raptor-Api-Time"] || "0") ];
            var y = s["Server-Timing"];
            y && (u = y.split(",").map(function(e) {
                var r = e.match(/dur=(\d+)/);
                return r ? parseFloat(r[1] || "0") : 0;
            }));
        }
        o = d.concat(u);
        for (var S = 0; S < o.length; S++) o[S] = Math.round(1e4 * o[S]) / 1e4, h && e.profile && S < 3 && (o[S] = o[S] || 1);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        r && r.error.reportSystemError(e);
    }
    return o;
};