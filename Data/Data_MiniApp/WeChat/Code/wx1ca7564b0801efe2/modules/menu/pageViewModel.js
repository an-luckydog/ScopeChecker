var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.showMustDishToast = exports.showMemberLoginToast = exports.saveCardInfo = exports.initUser = exports.getMainData = exports.getAllSpuWithCache = exports.clearLastShopInfo = exports.addCustomLimoModule = void 0;

var r = e(require("../../b/regenerator")), t = require("../../b/helpers/objectSpread2"), a = require("../../b/helpers/asyncToGenerator"), o = e(require("../../miniprogram_npm/seamless-immutable/index.js")), u = require("./viewModel"), n = require("../../types/newMenu/MenuData"), s = require("../../types/IResponse"), i = require("./dataSource/DataSource"), l = require("../../constants/bizConstants"), d = e(require("../../lib/storageUtil")), p = e(require("../../api/rmsStorage")), c = e(require("../../lib/mix/log")), f = require("../tableInfoHelper"), m = e(require("./cart/cartSdk")), h = require("../LXHelper"), I = require("../../lib/userInfo"), b = e(require("../../lib/mix/toast")), g = require("./dish/DishSdk"), v = e(require("./shop/shopService")), x = require("./dataSource/LocalDataSource"), T = require("./dataSource/point"), M = require("../../lib/mix/util"), S = e(require("./I18n/I18nService")), D = c.default, q = b.default, A = function(e) {
    var r = (0, o.default)(e), t = r.shopConfig, a = (r.shopInfo, r.memberInfo), n = r.spuDetail, s = r.spuPromise, i = r.userInfo, l = void 0 === i ? {} : i;
    return {
        pageTitle: (0, u.getPageTitle)(t),
        memberInfo: a,
        localHeadInfo: (0, o.default)(r).without([ "spuDetail", "spuPromise" ]),
        spuDetail: n,
        spuPromise: s,
        userInfo: l,
        moduleData: e.moduleData || {},
        moduleSortList: e.moduleSortList || []
    };
}, C = function() {
    var e = a(r.default.mark(function e(a) {
        var u, n, l, d, c, m, h, b, x, q, C, E, P, R, L, w, y, k, N, _;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (a) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return", {
                    errorTips: {
                        errorType: T.FAIL_REASON.EMPTY_PARAMS,
                        errorMsg: "请求参数异常"
                    }
                });

              case 2:
                return e.prev = 2, e.next = 5, (0, i.fetchMenuData)(a);

              case 5:
                u = e.sent, e.next = 11;
                break;

              case 8:
                return e.prev = 8, e.t0 = e.catch(2), e.abrupt("return", (D.addError("menuData未知异常", e.t0), 
                {
                    errorTips: {
                        errorType: T.FAIL_REASON.REQUEST_HANDLE,
                        errorMsg: "menuData未知异常"
                    }
                }));

              case 11:
                if (u) {
                    e.next = 13;
                    break;
                }
                return e.abrupt("return", {
                    errorTips: {
                        errorType: T.FAIL_REASON.EMPTY_MENU_DATA,
                        errorMsg: "空菜品数据失败"
                    }
                });

              case 13:
                if (u !== s.ResponseState.REDIRECT) {
                    e.next = 15;
                    break;
                }
                return e.abrupt("return", s.ResponseState.REDIRECT);

              case 15:
                if (!(0, s.isErrorTips)(u)) {
                    e.next = 17;
                    break;
                }
                return e.abrupt("return", {
                    errorTips: u
                });

              case 17:
                e.prev = 17, n = A(u), e.next = 24;
                break;

              case 21:
                return e.prev = 21, e.t1 = e.catch(17), e.abrupt("return", (D.addError("主流程模型转换异常", e.t1), 
                {
                    errorTips: {
                        errorType: T.FAIL_REASON.MENU_TRANSFORM,
                        errorMsg: "主流程模型转换异常"
                    }
                }));

              case 24:
                return d = (l = n).localHeadInfo, c = l.spuDetail, m = l.spuPromise, h = l.userInfo, 
                x = (b = null != d ? d : {}).shopConfig, q = b.openTableInfo, (C = (null != x ? x : {}).mtShopId) && (p.default.setHasOpenTogether(C, !!o.default.getIn(d, [ "shopConfig", "cartConfig", "openTogether" ])), 
                p.default.setUseMenuCacheForNonMenuPage(C, !1)), g.DishSdk.setDishList(C, c), E = (q || {}).tableInvalidText, 
                (0, M.isInMenuPage)() && (0, f.goToOpenTable)(E), R = (P = h || {}).memberName, 
                L = void 0 === R ? "" : R, w = P.userHeadImgUrl, y = void 0 === w ? "" : w, k = (0, 
                I.getTenantId)(), N = p.default.getUserInfo(k), p.default.setUserInfo(k, t(t({}, N), {}, {
                    nickname: L,
                    headimgurl: y
                })), v.default.updateShopServiceData(d), S.default.updateCurrency(null == d ? void 0 : d.currency), 
                _ = u.orderProductionProcessVO, e.abrupt("return", t(t({
                    spuPromise: m
                }, n), {}, {
                    orderProductionProcessVO: _
                }));

              case 32:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 8 ], [ 17, 21 ] ]);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}();

exports.getMainData = C;

exports.initUser = function() {
    try {
        (0, I.getUserInfo)();
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        D.addError("授权、分享接口错误", e);
    }
};

exports.clearLastShopInfo = function(e) {
    var r = e.shopId, t = e.tableNum, a = e.newAdvance, u = void 0 === a ? "false" : a, n = e.orderBizTag;
    if (d.default.clearExpiredItem(), p.default.setMenuCalculateCache(r, {}), p.default.setCartPrice(r, (0, 
    o.default)({})), t) p.default.setNewAdvanceFlag(r, !1); else {
        var s = "true" === u || +n === l.ORDER_BIZ_TAG.AHEAD;
        p.default.setNewAdvanceFlag(r, s), s && m.default.clearLocalCartAndRelatedInfos(r, t, !1);
    }
};

exports.showMemberLoginToast = function(e) {
    if (e) {
        var r = p.default.getLoginFromRegisterPanelTag();
        e.memberId && r && q.show({
            content: "登录成功，请继续下单",
            duration: 3e3
        }), p.default.setLoginFromRegisterPanelTag(!1);
    }
};

exports.saveCardInfo = function(e, r) {
    if (r) {
        var t = r.memberId, a = r.cardId;
        (0, h.appendLxBizParams)({
            is_login: t ? 1 : 0
        }), a && p.default.setCardInfo(JSON.stringify([ {
            cardId: a,
            shopId: e
        } ]));
    }
};

var E = function() {
    var e = a(r.default.mark(function e(t, a) {
        var o, u, s;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(o = (0, x.spuCacheInterceptor)(t)) || (0, n.isCacheMenuData)(o)) {
                    e.next = 4;
                    break;
                }
                return u = o.preloadTime, s = o.spuDetail, e.abrupt("return", ((0, i.hitPreloadDuration)(u, 16), 
                s));

              case 4:
                if (e.prev = 4, !a) {
                    e.next = 9;
                    break;
                }
                return e.next = 8, a;

              case 8:
                return e.abrupt("return", e.sent);

              case 9:
                e.next = 13;
                break;

              case 11:
                e.prev = 11, e.t0 = e.catch(4);

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 4, 11 ] ]);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}();

exports.getAllSpuWithCache = E;

exports.addCustomLimoModule = function(e, r, t, a) {
    if (!t) return e;
    var u = {
        name: r,
        data: o.default.asMutable(t, {
            deep: !0
        }),
        layout: a ? o.default.asMutable(a, {
            deep: !0
        }) : null
    };
    if (!Array.isArray(null == e ? void 0 : e.modules)) return {
        modules: [ u ]
    };
    var n = e.modules.findIndex(function(e) {
        return e.name === r;
    });
    return n > -1 ? e.modules[n] = u : e.modules.push(u), e;
};

exports.showMustDishToast = function(e) {
    var r = e.shopId, t = e.tableNum;
    r && t && p.default.getShowMustDishToastInMenu(r, t) && (q.show({
        content: "锅底下单成功！继续点菜吧～",
        duration: 1500
    }), p.default.setShowMustDishToastInMenu(r, t, !1));
};