var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.UPDATE_PANEL = void 0, exports.showDishTimeInfoModal = function(e) {
    return function(t, r) {
        var n, u = r().panel, s = a.default.getIn(r(), [ "extraInfo", "urlParams" ]), p = s.shopId, d = +s.reserveMode, c = +s.bizType, I = (0, 
        i.getHost)(), m = u.showDishInfoModalTag;
        n = c === o.BIZ_TYPE_MAP.PICKUP || c === o.BIZ_TYPE_MAP.TAKEAWAY ? c === o.BIZ_TYPE_MAP.PICKUP ? 18 : 13 : d === o.DISH_SOURCE.NORMAL ? 11 : 12, 
        m || (t(f({
            requestHost: I,
            requestParams: {
                mtShopId: p,
                spuId: e,
                merchantBizType: n
            }
        })), t(l(!0)));
    };
}, exports.showTakeCouponPanelAction = function(e) {
    return function() {
        var o = n(t.default.mark(function n(o, i) {
            var d, l, f, m, h, g, P, x, T, v, A, b, E, y, D, _, k, q, w, C, M, L, N;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (d = e.takeCouponPanelTag, l = e.sourceType, f = i().extraInfo, m = i().panel, 
                    h = a.default.getIn(f, [ "headInfo", "moduleData", "menu-popup-windows", "data", "takeCoupon", "couponDisplayInfos" ]), 
                    g = a.default.getIn(f, [ "urlParams" ]), P = a.default.getIn(f, [ "headInfo", "fmpBizData", "shopBaseInfo", "orgId" ]), 
                    !d) {
                        t.next = 27;
                        break;
                    }
                    if (null == h || !h.length) {
                        t.next = 25;
                        break;
                    }
                    if (b = g.tenantId, E = void 0 === b ? "" : b, y = g.shopId, D = void 0 === y ? "" : y, 
                    _ = g.restaurantViewId, k = void 0 === _ ? "" : _, w = [], C = m.registerActivity, 
                    "cart" === l && null != C && C.richTextExpandTag && null != C && null != (x = C.templateIds) && x.length ? (q = C.richTextExpandTag || [], 
                    null == C || C.templateIds.forEach(function(e) {
                        var t = h.find(function(t) {
                            return t.couponDisplay.id === e;
                        });
                        t && w.push(t);
                    })) : (w = h.filter(function(e) {
                        return e.newCardActivity;
                    }), q = a.default.getIn(f, [ "headInfo", "moduleData", "menu-popup-windows", "data", "takeCoupon", "popTitle" ]) || []), 
                    t.prev = 7, t.t0 = s.default.isNativeMp, !t.t0) {
                        t.next = 13;
                        break;
                    }
                    return t.next = 12, u.default.getAgreementList({
                        needContent: 10
                    }, {
                        tenantId: E,
                        poiId: D,
                        poiType: 3,
                        orgId: P
                    });

                  case 12:
                    M = t.sent;

                  case 13:
                    t.next = 18;
                    break;

                  case 15:
                    t.prev = 15, t.t1 = t.catch(7), p.default.addError("[userAuth]调用获取用户协议失败", {
                        msg: t.t1
                    });

                  case 18:
                    if (!s.default.isNativeMp || null != (T = M) && T.data) {
                        t.next = 20;
                        break;
                    }
                    return t.abrupt("return", void p.default.addError("[userAuth]调用获取用户协议失败"));

                  case 20:
                    if (L = {
                        agreementList: (null == (v = M) ? void 0 : v.data) || [],
                        agreementParams: {
                            tenantId: E,
                            poiId: D,
                            restaurantViewId: k,
                            poiType: 3,
                            orgId: P,
                            appCode: 51,
                            businessLine: 600
                        }
                    }, null != (A = w) && A.length) {
                        t.next = 23;
                        break;
                    }
                    return t.abrupt("return", void p.default.addError("开卡有礼优惠券获取失败"));

                  case 23:
                    N = r(r({}, e), {}, {
                        title: q
                    }), w = w.map(function(e) {
                        return a.default.setIn(e, [ "activityDesc" ], "");
                    }), o(c(N)), o(I({
                        takeCouponList: w,
                        agreementsInfo: L
                    }));

                  case 25:
                    t.next = 28;
                    break;

                  case 27:
                    o(c(e));

                  case 28:
                  case "end":
                    return t.stop();
                }
            }, n, null, [ [ 7, 15 ] ]);
        }));
        return function(e, t) {
            return o.apply(this, arguments);
        };
    }();
}, exports.toggleDishInfoModal = l, exports.updatePrePriceTips = function(e) {
    return d({
        showPrePriceTips: e
    });
}, exports.updateRegisterActivity = function(e) {
    return d({
        registerActivity: e
    });
};

var t = e(require("../../b/regenerator")), r = require("../../b/helpers/objectSpread2"), n = require("../../b/helpers/asyncToGenerator"), a = e(require("../../miniprogram_npm/seamless-immutable/index.js")), o = require("../../constants/bizConstants"), i = require("../../lib/mix/util"), u = e(require("../../miniprogram_npm/@mtfe/saas-user-auth/index.js")), s = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), p = e(require("../../lib/mix/log"));

function d(e) {
    return {
        type: "UPDATE_PANEL",
        payload: e
    };
}

function l(e) {
    return d({
        showDishInfoModal: e
    });
}

function f(e) {
    return d({
        dishTimeInfoModalRequestInfo: e
    });
}

function c(e) {
    return d({
        takeCouponPanelInfo: e
    });
}

function I(e) {
    return d({
        takeCouponPanelData: e
    });
}

exports.UPDATE_PANEL = "UPDATE_PANEL";