var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.concatUrlWithCallbackUrl = function(e) {
    var r, i = e.distUrl, n = e.callBackUrlPageName, o = e.callBackUrlPageQuery;
    return r = a.default.isNativeMp && n ? a.default.appendQuery(l.PATH[n] + "?", t({}, o)) : window.location.href, 
    a.default.appendQuery(i, {
        callbackUrl: r
    });
}, exports.customReLaunch = function(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t(t({}, (0, 
    u.getMixUrlParam)("")), r), o = a.default.appendQuery(l.PATH[e] + "?", n);
    i.default.getLimoRuntime().reLaunch({
        url: o
    });
}, exports.getCurrentPagePath = void 0, exports.jumpToPage = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    n.isNativeMp ? m(e, t) : x(e, t);
}, exports.jumpToShopList = function() {
    var e = (0, u.getMixUrlParam)("tenantId"), t = a.default.appendQuery("/orderPackages/pages/shop-list/index?", {
        tenantId: e,
        bizType: 130
    });
    a.default.redirectTo(t);
}, exports.toErrorTip = exports.mixReload = exports.mixNavigateToByName = void 0;

var t = require("../b/helpers/objectSpread2"), r = require("../b/helpers/typeof"), i = e(require("../miniprogram_npm/@limo/core/index.js")), a = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), n = require("./env"), o = require("./wx/util"), u = require("./mix/util"), l = require("../constants/path"), c = require("../constants/errorTip"), d = e(require("./wx/log")), p = /^(http|https):\/\/.+$/, f = [ "pages/webview/index", "pages/takeaway/index" ];

function s(e) {
    if (n.isAliPay) if (window.ap && window.ap.redirectTo) window.ap.redirectTo(e); else try {
        window.history.replaceState({}, "", e), window.location.reload();
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        window.location.replace(e);
    } else (n.isMTApp || n.isDPApp) && -1 === e.indexOf("_mtcq") && (e += (e.indexOf("?") > -1 ? "&" : "?") + "_mtcq=0"), 
    window.location.replace(e);
}

function g(e, t) {
    var r = p.test(e);
    n.isNativeMp ? a.default.redirectTo({
        url: e,
        fail: function(e) {
            t && t(), d.default.addError("redirectTo调用失败", {
                msg: e
            });
        }
    }) : n.isMpWebview && !r ? a.default.redirectTo({
        url: e
    }) : s(e);
}

exports.mixNavigateToByName = function(e, t, o) {
    if (n.isNativeMp) {
        var u;
        t && "object" == r(t) && (t = a.default.stringify(t, !0)), u = "".concat(l.PATH[e], "?").concat(t), 
        o ? g(u) : function(e, t) {
            var r = p.test(e);
            if (n.isNativeMp) if (t) i.default.getLimoRuntime().reLaunch({
                url: e,
                fail: function(e) {
                    d.default.addError("reLaunch失败", {
                        msg: e
                    });
                }
            }); else {
                var o = getCurrentPages(), u = f.find(function(t) {
                    return -1 !== e.indexOf(t);
                }) ? 9 : 10;
                o && o.length === u ? g(e) : a.default.navigateTo({
                    url: e,
                    fail: function(e) {
                        d.default.addError("navigateTo失败", {
                            msg: e
                        });
                    }
                });
            } else n.isMpWebview && !r ? t ? wx.miniProgram.reLaunch({
                url: e
            }) : a.default.navigateTo({
                url: e
            }) : window.location.href = e;
        }(u);
    } else !function(e, t) {
        var r = function(e) {
            var t = e.url, r = e.extra, i = t.split("#")[1];
            return t = t.split("#")[0], r && (-1 !== t.indexOf("?") ? t += "&" + a.default.stringify(r, !0) : t += "?" + a.default.stringify(r, !0), 
            i && (t += "#" + i)), t;
        }(e), i = decodeURIComponent(r.replace(/^.*url=/g, ""));
        t ? s(i) : window.location.href = i;
    }({
        url: e,
        extra: t
    }, o);
};

var v = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, 
    o.getWxCurrentPage)(), r = t.route, i = t.options;
    "app" !== r && "Unknown" !== r && g("/".concat(r, "?").concat(a.default.stringify(a.default.isEmptyObject(e) ? i : e, !1)));
};

exports.mixReload = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    n.isNativeMp ? v(e) : window.location.reload();
};

var w = function() {
    if (a.default.isNativeMp) {
        var e = (0, o.getWxCurrentPage)(), t = e.route, r = e.options;
        return "/".concat(t, "?").concat(a.default.stringify(r));
    }
    return window.location.href;
};

exports.getCurrentPagePath = w;

function x(e, t) {
    var r = a.default.appendQuery(window.location.search, t);
    window.location.href = "./".concat(e).concat(r);
}

function m(e, r) {
    var i = t(t({}, (0, u.getMixUrlParam)("")), r), n = a.default.appendQuery(l.PATH[e] + "?", i);
    a.default.redirectTo(n);
}

exports.toErrorTip = function(e) {
    var r = e.type === c.ERROR_TYPE.CUSTOM_JUMP ? null == e ? void 0 : e.url : w();
    a.default.isNativeMp ? a.default.redirectTo({
        url: "".concat(l.PATH["error-tip"], "?").concat(a.default.stringify(t(t({}, e), {}, {
            url: r
        })))
    }) : a.default.redirectTo({
        url: "".concat((0, u.getHost)(), "/diancan/web/error-tip?").concat(a.default.stringify(t(t({}, e), {}, {
            url: r
        })))
    });
};