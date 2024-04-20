Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getEnv = function() {
    try {
        var e = o();
        return new Promise(function(r) {
            Object.keys(t).length ? r(Object.assign({}, t, {
                pageUrl: e
            })) : Promise.all([ c(), i() ]).then(function(o) {
                var c = o[0], i = o[1];
                c && i ? (t = Object.assign({}, i, {
                    network: c,
                    container: n.Container,
                    unionId: ""
                }), r(Object.assign({}, t, {
                    pageUrl: e
                }))) : r({
                    pageUrl: e
                });
            }).catch(function() {
                r({
                    pageUrl: e
                });
            });
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return {
            then: function() {}
        };
    }
}, exports.getEnvSync = function() {
    return Object.assign({}, t, {
        pageUrl: o()
    });
}, exports.getPageUrl = o;

var n = require("./constant/context"), e = require("./constant/index"), t = {}, r = "Unknown";

function o(n) {
    try {
        if (n) return "function" == typeof n ? n() || r : "string" == typeof n ? n : r;
        var e = getCurrentPages() || [], t = e[e.length - 1];
        return t && (t.route || t.__route__) || r;
    } catch (n) {
        n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
        return r;
    }
}

function c() {
    try {
        return n.context.onNetworkStatusChange && n.context.onNetworkStatusChange(function(n) {
            t.network = n && n.networkType || "";
        }), new Promise(function(t) {
            var o = {
                success: function(n) {
                    t(n && n.networkType || "");
                },
                fail: function() {
                    t(r);
                }
            };
            "mmp" === n.sign && (o._mt = {
                sceneToken: e.SCENE_TOKEN.getNetWorkType
            }), n.context.getNetworkType(o), setTimeout(function() {
                t(r);
            }, 2e3);
        });
    } catch (n) {}
}

function i() {
    try {
        var e = {
            os: "",
            wxVersion: r,
            wxLibVersion: r
        };
        return new Promise(function(t) {
            n.context.getSystemInfo({
                success: function(o) {
                    o && (e.wxVersion = o.version || r, e.wxLibVersion = "my" === n.sign ? n.context.SDKVersion : o.SDKVersion || r), 
                    t(e);
                },
                fail: function() {
                    t(e);
                }
            });
        });
    } catch (n) {}
}