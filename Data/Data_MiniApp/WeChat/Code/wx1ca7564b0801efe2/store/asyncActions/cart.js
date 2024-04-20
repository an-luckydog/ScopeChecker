var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.addStableMustDish = V, exports.updateCloudCartVersion = exports.toOrderConfirmPage = exports.getCloudCartDishList = exports.checkDish = void 0;

var t = e(require("../../b/regenerator")), r = require("../../b/helpers/asyncToGenerator"), a = require("../../b/helpers/objectSpread2"), i = e(require("../../miniprogram_npm/seamless-immutable/index.js")), n = e(require("../../lib/mix/confirm")), o = e(require("../../lib/mix/loading")), s = e(require("../../lib/mix/toast")), u = e(require("../../lib/mix/request")), l = require("../../lib/env.js"), d = require("../../lib/wx/util"), c = require("../actions/newCart"), f = require("../../lib/jsBridge"), C = require("../../lib/mix/util"), g = e(require("../../lib/mix/log")), m = require("../../lib/navigator"), p = require("../../modules/LXHelper"), h = require("../../modules/operateCartHelper"), I = require("../../modules/menu/cart/cartDataTransfer"), T = require("../../modules/minicartHelper"), D = require("../../modules/dishHelper"), v = require("../../modules/userHelper"), P = require("../../modules/cartHelper"), O = require("../../modules/tableInfoHelper"), S = require("../../modules/menu/cart/cartReport"), b = require("../actions/mustDish"), R = require("../actions/cartToast"), E = require("../actions/cloudCart"), _ = require("../../modules/commonHelper"), L = require("../actions/cart"), x = e(require("../../modules/menu/cart/cartSdk")), M = require("../actions/baseCart"), N = require("../../modules/menu/cart/cartDataReport"), U = e(require("../../api/rmsStorage")), q = require("../../constants/bizConstants"), A = e(require("../../modules/menu/shop/shopService")), y = require("../../constants/ajaxResCode"), w = e(require("../../api/cartPike")), F = e(require("../../api/cart")), k = e(require("../../modules/MustDishSdk")), H = require("../../constants/cartConstants"), B = require("../actions/add-on"), z = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), G = function(e, t) {
    return function(r, a) {
        var n = e || {}, o = n.cloudCart, s = n.shopId, u = n.tableNum, l = o || {}, d = l.version, f = l.seqId, C = i.default.getIn(a(), [ "cart", "refactorLocalCart", "version" ]), g = i.default.getIn(a(), [ "cart", "userOperation", "lastSeqId" ]);
        f > 0 && (f > g || t) && r((0, c.updateOperationLastSeqId)(f)), d > 0 && (d > C || t) && r((0, 
        c.updateNewLocalCartVersion)(s, u, d));
    };
}, W = function e(t, r, a, n) {
    return function(o) {
        var s = function() {
            U.default.getPartialCloudCartInfo(t).cartId || o(x.default.clearCart(!0)), o(e(t, r, a, n));
        }, u = setTimeout(function() {
            var e = U.default.getPartialCloudCartInfo(t).cartId;
            e ? F.default.checkCartId({
                mtShopId: t,
                tableNum: r,
                cartId: e
            }).then(function(e) {
                if ((e = (0, i.default)(e || {})).code !== y.RES_CODE.SUCCESS || e.data) s(); else {
                    if (o(x.default.clearCart(!0)), l.isNativeMp) {
                        var t = (0, d.getWxPathName)();
                        if (![ "menu/index", "search", "recommend-list", "order-confirm" ].find(function(e) {
                            return t.indexOf(e) > -1;
                        })) return;
                        if (t.indexOf("order-confirm") > -1 && !a) return;
                    }
                    if (!Number(U.default.getTimeOutId())) return;
                    o((0, E.onPostOrderSuccess)(a, "", n));
                }
            }, function() {}).catch(function(e) {
                g.default.addError("checkCartId执行异常", e), s();
            }) : s();
        }, 1e4);
        U.default.setTimeOutId(u);
    };
}, j = function(e, t) {
    var r = (0, I.getPartialCloudCartInfoFromStorage)(e, t), i = (null == r ? void 0 : r.cartId) || 0, n = r ? +r.mealType : 0, o = U.default.getNewAdvanceFlag(e) ? 1 : 0, s = {
        lastCartSwitch: !0,
        operationList: (U.default.getUserOperation(e) || {}).operationList || [],
        mealType: n
    };
    return a({
        cartId: i,
        shopId: e,
        tableNum: t,
        user: {
            uid: (0, v.getUserIdWithPlatform)()
        },
        type: o
    }, s);
};

exports.getCloudCartDishList = function(e, t, r) {
    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, s = arguments.length > 5 ? arguments[5] : void 0;
    return function(u) {
        var f = j(e, t);
        return (0, S.sendCartInitPoint)(S.INIT_CLOUD_CART_PROCEDURE.GET_CLOUD_COUNT), F.default.getCloudData(f).then(function(e) {
            if ((0, S.sendCartInitPoint)(S.INIT_CLOUD_CART_PROCEDURE.GET_CLOUD_CALLBACK_COUNT), 
            l.isNativeMp) {
                var t = (0, d.getWxPathName)();
                if (t && t.indexOf("order-detail") > -1) return;
            }
            if ((0, S.sendCartInitPoint)(S.INIT_CLOUD_CART_PROCEDURE.GET_CLOUD_VALIDATION_COUNT), 
            (e = (0, i.default)(e || {})).code === y.RES_CODE.SUCCESS) {
                (0, S.sendCartInitPoint)(S.INIT_CLOUD_CART_PROCEDURE.GET_CLOUD_SUCCESS_COUNT);
                var f, C, g = e.data;
                s && s(null == g ? void 0 : g.cartId, null == g ? void 0 : g.version), u((f = g, 
                C = {
                    showUnverifyDish: n,
                    fromOrderConfirm: r,
                    customHandleMessageCB: o
                }, function(e, t) {
                    var r = C.showUnverifyDish, n = C.fromOrderConfirm, o = C.customHandleMessageCB;
                    (0, S.sendCartInitPoint)(S.INIT_CLOUD_CART_PROCEDURE.HANDLE_CART_DISH_START);
                    var s = f || {}, u = s.cartId, l = s.shopId, d = s.tableNum, g = (s.allUsers, "false" !== i.default.getIn(t(), [ "extraInfo", "urlParams", "openTogether" ])), m = ((0, 
                    I.getPartialCloudCartInfoFromStorage)(l, d) || {}).cartId;
                    u && u !== m && e((0, c.clearOperation)(l)), e(G(f, !0)), e((0, E.updateLocalCartWithCloudCartNew)(f, n, r)), 
                    (0, S.sendCartInitPoint)(S.INIT_CLOUD_CART_PROCEDURE.UPDATE_LOCAL_CART_SUCCESS), 
                    u && g && ((0, p.appendLxBizParams)({
                        cartId: u
                    }), w.default.close(), (0, S.sendCartInitPoint)(S.INIT_CLOUD_CART_PROCEDURE.CART_INIT_COUNT), 
                    w.default.initConnect(f), e(function(e) {
                        w.default.onReady(function() {
                            w.default.sendNewUserJoin(), e((0, c.sendOperationList)());
                        });
                    }), n || ((0, P.stopPollTask)(), e(W(l, d))), w.default.onMessage(function(r) {
                        if ((r = (0, i.default)(r || {})).bizType) {
                            var s = JSON.parse(r.message) || {}, u = s || {}, l = u.data, d = u.type, c = l || {}, f = c.cloudCart, C = c.ignoreMerge, g = c.cartId, m = c.shopId, p = c.tableNum, h = c.operaUid, T = c.tips, D = void 0 === T ? [] : T, v = c.allUsers, P = f || {}, O = P.version, S = P.seqId, b = i.default.getIn(t(), [ "cart", "refactorLocalCart", "version" ]), _ = i.default.getIn(t(), [ "cart", "userOperation", "lastSeqId" ]), L = ((0, 
                            I.getPartialCloudCartInfoFromStorage)(m, p) || {}).cartId;
                            if (L && g && g !== L) return;
                            if (b && O && O < b) return;
                            if (S > 0 && S < _) return;
                            e(G(l));
                            var x = (null == v ? void 0 : v.find(function(e) {
                                return e.uid === h;
                            })) || {};
                            if (D && D.length > 1) {
                                var N = D.map(function(e) {
                                    return {
                                        cartToastText: e.toastText,
                                        cartToastImg: x.avatar
                                    };
                                });
                                e((0, R.showToastList)(N, !1));
                            } else if (D) {
                                var U = D[D.length - 1], q = U && U.toastText;
                                q && e((0, R.showText)(q, !1, x.avatar));
                            }
                            if (C) return;
                            if (n) o && o(a(a({}, r), {}, {
                                message: s
                            })); else if (d) switch (d) {
                              case w.default.newMessageType.USER_JOIN:
                                b && b !== O && O && (e((0, R.showText)("有小伙伴更新了菜品")), f && e((0, E.updateLocalCartWithCloudCartNew)(l, n))), 
                                e((0, M.updateCartUserInfo)(v));
                                break;

                              case w.default.newMessageType.OPERATE_CART:
                                e((0, M.updateCartUserInfo)(v)), e((0, E.updateLocalCartWithCloudCartNew)(l, n));
                                break;

                              case w.default.newMessageType.POST_ORDER_SUCCESS:
                                e((0, E.onPostOrderSuccess)(!1, ""));
                            }
                        }
                    }), (0, S.sendCartInitPoint)(S.INIT_CLOUD_CART_PROCEDURE.HANDLE_CART_DISH_FINISH));
                }));
            }
        }, function(e) {
            g.default.addError("getCloudCartDishList 接口错误", e, {
                level: "info"
            });
        }).catch(function(e) {
            g.default.addError("getCloudCartDishList internal 错误", e);
        });
    };
};

var J = function() {
    return function(e, t) {
        var r = i.default.getIn(t(), [ "extraInfo", "urlParams" ]), d = A.default.getShopServiceData().shopConfig, c = null == d ? void 0 : d.forceRegister, f = +r.tenantId || 0, p = +r.reserveMode || 0, I = +r.orderBizTag || 0, T = r.tableNum || "", v = r.orderScene, P = r.shopId;
        P || (g.default.addError("checkDish Api mtShopId Error", "extraInfo urlParams: " + JSON.stringify(r), {
            level: "info"
        }), P = (0, C.getMixUrlParam)("shopId"));
        var S = i.default.getIn(t(), [ "cart", "cartDishList" ]), R = i.default.getIn(t(), [ "cart", "cartDishSortMapList" ]), E = (0, 
        D.getDishListFromStore)(t()), x = i.default.getIn(t(), [ "extraInfo", "headInfo", "shopInfo", "entrance", "showCallWaiter" ]);
        e((0, b.toggleMustDishPanelAction)(!1)), e((0, L.closeCartPanel)()), e((0, L.toggleDishDetailPanelAction)(!1)), 
        e((0, B.setAddOnShowAction)(!1));
        var M = (0, _.getPreOrderInfo)(P, p), N = M.peopleCount, w = M.selectedTime, k = U.default.getPartialCloudCartInfo(P).cartId || 0, H = (0, 
        h.transToCloudCartDishList)(S, R, E), G = U.default.getShowRegisterPanelTag(P), W = {
            tenantId: f,
            shopId: P,
            tableNum: T,
            reserveMode: p,
            orderBizTag: I,
            payOpenId: r.payOpenId || "",
            posOrderId: r.posOrderId || "",
            paySource: r.paySource || 0,
            authGeo: r.authGeo,
            brandId: (0, C.getMixUrlParam)("brandId") || "",
            recSceneFlag: U.default.getRecSceneFlag() + ""
        };
        Number(r.bizType) !== q.BIZ_TYPE_MAP.TAKEAWAY && Number(r.bizType) !== q.BIZ_TYPE_MAP.PICKUP || delete (W = a(a({}, W), {}, {
            bizType: r.bizType,
            couponId: (0, C.getMixUrlParam)("couponId") || ""
        })).tableNum;
        var j = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            (0, C.isUnitePage)() && z.default.isWxNative || (U.default.setFirstEnterOrderConfirmFlag(!0), 
            U.default.setDefaultRechargeItem({}), U.default.setFirstEnterOrderConfirmTitleData({}), 
            (0, m.mixNavigateToByName)("order-confirm", a(a({}, W), {}, {
                posOrderId: t
            }), !e));
        };
        o.default.show(), F.default.checkDish({
            mtShopId: P,
            tableNum: T,
            peopleCount: N,
            dishList: H,
            cartId: k,
            reserveMode: p,
            selectedTime: w,
            orderScene: v
        }).then(function(t) {
            o.default.close();
            var a = (t = (0, i.default)(t || {})).data;
            if (a && t.code) {
                var d = a.code, f = a.posOrderId || "";
                if (d === y.RES_CODE.SUCCESS) if (c && !G) U.default.setShowRegisterPanelTag(P, !0), 
                e((0, L.toggleRegisterPanelAction)(!0)); else {
                    var g = (0, C.isInMenuPage)();
                    j(g, f);
                } else if (401 === d) (0, n.default)({
                    body: t.msg || a.msg || "菜品校验失败",
                    buttons: [ {
                        text: "去添加",
                        type: "submit",
                        callback: function() {
                            U.default.setLoginFromRegisterPanelTag(!1), (0, C.isInMenuPage)() && l.isNativeMp ? (0, 
                            m.customReLaunch)("menu", r) : (0, m.mixReload)(r);
                        }
                    } ]
                }); else if (110 === d) {
                    (0, C.isInMenuPage)() || U.default.setUseMenuCacheForNonMenuPage(P, !1);
                    var p = a.data || {}, h = p.manualCampaignSaleableDish, I = p.saleableDishList;
                    U.default.setInvalidDishes(P, {
                        campaignDishes: h,
                        saleableDishList: I
                    }), (0, n.default)({
                        body: t.msg || a.msg || "菜品校验失败",
                        buttons: [ {
                            text: q.CONFIRM_TEXT,
                            type: "submit",
                            callback: function() {
                                U.default.setLoginFromRegisterPanelTag(!1), (0, C.isInMenuPage)() && l.isNativeMp ? (0, 
                                m.customReLaunch)("menu", r) : (0, m.mixReload)(r);
                            }
                        } ]
                    });
                } else if (700 === d) {
                    var D = [];
                    x && D.push({
                        text: "呼叫服务员",
                        type: "submit",
                        callback: function() {
                            u.default.get((0, C.getHost)() + "/diancan/api/odc/waiter/call-waiter", {
                                params: {
                                    mtShopId: P,
                                    tableNum: T
                                }
                            }).then(function(e) {
                                e.code === y.RES_CODE.SUCCESS && s.default.show({
                                    content: e.msg || "呼叫成功"
                                });
                            }).catch(function(e) {
                                throw e;
                            });
                        }
                    }), D.push({
                        text: q.CONFIRM_TEXT,
                        type: "submit",
                        callback: function() {}
                    }), (0, n.default)({
                        body: t.msg || "菜品异常",
                        buttons: D
                    });
                } else if (900 === d) {
                    var v;
                    (0, O.goToOpenTable)((null == (v = t) ? void 0 : v.msg) || "桌台状态异常，请重新开台");
                } else if (418 === d) {
                    var S;
                    s.default.show({
                        content: (null == (S = t) ? void 0 : S.msg) || "请联系服务员接单后重试",
                        duration: 2e3
                    });
                } else {
                    var b;
                    s.default.show({
                        content: null == (b = t) ? void 0 : b.msg,
                        duration: 2e3
                    });
                }
            } else U.default.setLoginFromRegisterPanelTag(!1), c && !G ? (U.default.setShowRegisterPanelTag(P, !0), 
            e((0, L.toggleRegisterPanelAction)(!0))) : j();
        }).catch(function(t) {
            o.default.close(), U.default.setLoginFromRegisterPanelTag(!1), c && !G ? (U.default.setShowRegisterPanelTag(P, !0), 
            e((0, L.toggleRegisterPanelAction)(!0))) : j();
        });
    };
};

function V() {
    return function(e, t) {
        var r = t().cart, a = t().dish, o = t().mustDish, s = r.cartDishList, u = o.isModifiedMultiDishLegal, l = a.dishList, d = k.default.mustDishInfos, c = (null == d ? void 0 : d.fixedStableList) || (0, 
        i.default)([]), f = (0, i.default)([]), C = (0, I.transferCartDishListToRefactorCartDishMap)(s);
        if (c.length > 0 && !k.default.judgeFixedMustDishList(C) && (f = k.default.getFixedStableMustDishList(C, l), 
        Array.isArray(f) && f.length > 0)) {
            var g = k.default.getMustOrderText(f);
            e((0, R.showText)(g, !1)), e(x.default.batchDish(H.OPERATE_TYPE.ADD, f));
        }
        var m = x.default.getRefactorCartDishMap(t()), p = k.default.getMultiMustDishList(m, l), h = p.multiMustDishInfo.multiModifiedList;
        p.isStableEnough ? !u && h && h.length > 0 ? (e((0, L.openMustDishPanel)()), e((0, 
        b.updateModifiedMultiDishLegal)(!0)), e((0, b.updateMustDishEnoughAction)(!0))) : (e((0, 
        b.updateMustDishEnoughAction)(!0)), (0, n.default)({
            title: "必选品提示",
            body: k.default.getAutoAddMustText(f),
            buttons: [ {
                text: "调整菜品",
                type: "cancel"
            }, {
                text: "继续下单",
                type: "submit",
                callback: function() {
                    var r = t().cart.cartDishList, a = (0, T.getCartTotalInfo)(r, l);
                    (null == a ? void 0 : a.cartCount) > 0 && (e(J()), (0, N.beforeCartGotoOrderReport)());
                }
            } ]
        })) : (e((0, L.openMustDishPanel)()), u || e((0, b.updateModifiedMultiDishLegal)(!0)));
    };
}

exports.checkDish = J;

exports.toOrderConfirmPage = function() {
    return function(e, t) {
        var r = i.default.getIn(t(), [ "extraInfo", "urlParams" ]), a = +r.orderBizTag, n = r.urlParams, o = i.default.getIn(t(), [ "dish", "dishList" ]), s = i.default.getIn(t(), [ "cart", "cartDishList" ]), u = i.default.getIn(t(), [ "mustDish", "isMustDishEnough" ]), l = (0, 
        T.getCartTotalInfo)(s, o);
        U.default.setLoginFromRegisterPanelTag(!1), a !== q.ORDER_BIZ_TAG.AHEAD || n ? u ? l.cartCount > 0 && (e(J()), 
        (0, N.beforeCartGotoOrderReport)()) : e(V()) : l.cartCount > 0 && (U.default.setFirstEnterOrderConfirmFlag(!0), 
        (0, f.scanQRCode)());
    };
};

exports.updateCloudCartVersion = function(e, a) {
    return function() {
        var n = r(t.default.mark(function r(n) {
            var o, s, u, l, d, c, f, C, m, p;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, F.default.getCloudData(j(e, a));

                  case 3:
                    if (o = t.sent, u = (s = o || {}).code, l = s.data, u === y.RES_CODE.SUCCESS && l) {
                        t.next = 9;
                        break;
                    }
                    return t.abrupt("return");

                  case 9:
                    d = l.cartId, c = l.cloudCart, C = (f = void 0 === c ? {} : c).version, m = f.mealType, 
                    p = (0, i.default)({
                        cartId: d,
                        version: C,
                        mealType: m
                    }), U.default.setPartialCloudCartInfo(e, p), n(G(l, !1)), t.next = 16;
                    break;

                  case 13:
                    t.prev = 13, t.t0 = t.catch(0), g.default.addError("getCloudCartDishList internal 错误", t.t0);

                  case 16:
                  case "end":
                    return t.stop();
                }
            }, r, null, [ [ 0, 13 ] ]);
        }));
        return function(e) {
            return n.apply(this, arguments);
        };
    }();
};