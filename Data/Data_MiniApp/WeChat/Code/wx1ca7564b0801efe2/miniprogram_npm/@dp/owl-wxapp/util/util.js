var e = require("../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MSID = function() {
    var e = [], n = new Date().getTime();
    return e.push(n.toString(16)), e.push(a()), e.push(a()), e.push(a()), e.join("-");
}, exports.extend = function(e, n) {
    var r = {};
    if (e) for (var t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
    if (n) for (var i in n) n.hasOwnProperty(i) && void 0 !== n[i] && (r[i] = n[i]);
    return r;
}, exports.findOwlProject = function(e) {
    var n = o.owlMap._main_.p;
    try {
        var r = e || (0, s.getPageUrl)();
        Object.keys(o.owlMap).forEach(function(e) {
            var t = o.owlMap[e], i = t.p, s = t.rules;
            (void 0 === s ? [] : s).forEach(function(e) {
                e instanceof RegExp && e.test(r) && (n = i);
            });
        });
    } catch (e) {}
    return n;
}, exports.getCacheUnionId = function() {
    var e = r.context.getStorageSync(o.STOREKEY + "-unionId");
    return p(e) ? e.data || "" : e;
}, exports.getMpVers = function(e) {
    var n = e.version || {};
    return {
        mpVer: n.wxAppVersion || n.appVersion || e.wxAppVersion || "Unknown",
        mpLibVer: n.wxLibVersion || e.wxLibVersion || "Unknown"
    };
}, exports.getVersions = function(e) {
    var n = {}, t = e.version || {};
    return n[r.channel + "AppVersion"] = t.wxAppVersion || t.appVersion || e.wxAppVersion || "Unknown", 
    n[r.channel + "LibVersion"] = t.wxLibVersion || e.wxLibVersion || "Unknown", n[r.channel + "Version"] = t.wxVersion || e.wxVersion || "Unknown", 
    n;
}, exports.isFlatObj = function(e) {
    if (p(e)) {
        for (var n in e) if (e.hasOwnProperty(n) && !c(e[n])) return !1;
        return !0;
    }
    return !1;
}, exports.isFunc = function(e) {
    return "function" == typeof e;
}, exports.isMMP = function() {
    return "mmp" === r.sign;
}, exports.isObj = p, exports.isSimple = c, exports.isWX = function() {
    return "wx" === r.sign;
}, exports.requestQueue = function e(n) {
    var t = "dd" === r.sign ? "httpRequest" : "request";
    if (n && (!n.header || "my" !== r.sign && "dd" !== r.sign || (n.headers = n.header, 
    delete n.header, n.dataType = "text"), u.push(n)), !(u.length > 1 && n)) {
        var i = u[0];
        i.enableHttp2 = !0;
        var o = i.complete;
        i.complete = function(n) {
            u.shift(), u.length && e(), o && o.call(this, n);
        }, r.context[t](i);
    }
}, exports.stringify = function(e, n) {
    if (!n) return e;
    var r = [];
    for (var t in n) n.hasOwnProperty(t) && r.push(t + "=" + n[t]);
    return ~e.indexOf("?") ? e + "&" + r.join("&") : e + "?" + r.join("&");
}, exports.traceid = function() {
    try {
        var e = (0, t.default)().replace(/-/g, ""), n = e.slice(0, 16), r = e.slice(16), o = Array(16).fill(0).map(function(e, t) {
            return parseInt(n[15 - t], 16) ^ parseInt(r[15 - t], 16);
        }).map(function(e) {
            return e.toString(16);
        }).join("");
        return (0, i.default.signedHexToDec)(o);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return "";
    }
};

var n = require("../../../../b/helpers/typeof"), r = require("../constant/context"), t = e(require("./uuid-v1")), i = e(require("./int64-convert")), o = require("../constant/index"), s = require("../env"), u = [];

function a() {
    return Math.ceil(65535 * Math.random()).toString(16);
}

function p(e) {
    return e && "object" == n(e) && !(e instanceof Array);
}

function c(e) {
    var r = n(e);
    return "string" == r || "number" == r || "boolean" == r;
}