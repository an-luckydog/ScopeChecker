var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.spuCacheInterceptor = exports.mpCacheSpu = exports.mpCacheFmp = exports.getPreloadParams = exports.fmpCacheInterceptor = void 0;

var t = require("../../../b/helpers/objectSpread2"), r = require("../../../constants/reportConstants"), a = require("../../../lib/env"), o = require("../../../lib/wx/app-info"), p = require("../../../types/IResponse"), i = e(require("../../../lib/wx/log")), u = function(e, t) {
    return "menuData_".concat(e, "_").concat(t || "");
};

exports.getPreloadParams = function(e) {
    var t;
    if (!e || !e.query) return t;
    var r = e.query, a = r.q, o = r.p, p = r.s || a;
    return p || o ? t = {
        qrcode: p,
        perception: o,
        pageNum: 1,
        timestamp: Date.now()
    } : t;
};

var n = function(e, p) {
    var n;
    if (!e || !a.isNativeMp || !(0, o.getNewApp)()) return n;
    if (!p) return n;
    if (p.invalid = p.requestStart, p.invalid) return n;
    var s = e.mtShopId, c = e.shopId, d = e.tableNum, C = u(s || c, d), h = p[C];
    if (!h) return n;
    var l = n = h, f = l.spuDetail, m = l.who;
    return f ? (p[C] = void 0, i.default.addCustom(r.RAPTOR_CUSTOM.APP_PRELOAD_HIT_COUNT, 1, {
        who: m
    }), t(t({}, n), {}, {
        hitCache: !0
    })) : void 0;
};

exports.fmpCacheInterceptor = function(e) {
    if (a.isNativeMp) return n(e, (0, o.getNewApp)().cache);
};

exports.spuCacheInterceptor = function(e) {
    if (a.isNativeMp) return n(e, (0, o.getNewApp)().spuCache);
};

exports.mpCacheSpu = function(e, t) {
    if (t) {
        var a = r.PAGE_TARGET.ON_LAUNCH, o = Date.now();
        i.default.addCustom(r.RAPTOR_CUSTOM.APP_PRELOAD_COUNT, 1, {
            who: a
        });
        var p = t.mtShopId, n = t.tableNum, s = t.spuDetail;
        e.requestStart = !1, !p || !s || Object.keys(s).length <= 0 || e.invalid || (e[u(p, n)] = {
            spuDetail: s,
            preloadTime: o,
            who: a
        }, i.default.addCustom(r.RAPTOR_CUSTOM.APP_PRELOAD_SUCCESS_COUNT, 1, {
            who: a
        }));
    }
};

exports.mpCacheFmp = function(e, a) {
    try {
        if (!a) return;
        if ((0, p.isErrorTips)(a)) return;
        var o = r.PAGE_TARGET.ON_LAUNCH;
        i.default.addCustom(r.RAPTOR_CUSTOM.APP_PRELOAD_COUNT, 1, {
            who: o
        });
        var n = Date.now(), s = a.shopConfig, c = a.spuDetail, d = s.mtShopId, C = s.tableNum;
        if (e.requestStart = !1, !d || !c || Object.keys(c).length <= 0) return;
        if (e.invalid) return;
        e[u(d, C)] = t(t({}, a), {}, {
            preloadTime: n,
            who: o
        }), i.default.addCustom(r.RAPTOR_CUSTOM.APP_PRELOAD_SUCCESS_COUNT, 1, {
            who: o
        });
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        try {
            e.requestStart = !1;
        } catch (e) {}
    }
};