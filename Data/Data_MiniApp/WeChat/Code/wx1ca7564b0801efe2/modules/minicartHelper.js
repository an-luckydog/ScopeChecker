var t = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.cartViewModelAdapter = void 0, exports.getCartTotalInfo = function(t, e) {
    var n = 0;
    return t && Object.keys(t).forEach(function(i) {
        var r = t[i];
        e[i] && r && r.forEach(function(t) {
            n = (0, l.plusFloat)(n, t.count || 0);
        });
    }), (0, r.default)({
        cartCount: n
    });
};

var e = require("../b/helpers/objectSpread2"), n = t(require("../b/regenerator")), i = require("../b/helpers/asyncToGenerator");

require("../b/helpers/Arrayincludes");

var r = t(require("../miniprogram_npm/seamless-immutable/index.js")), o = t(require("../miniprogram_npm/@dp/md5/index.js")), u = require("./cartHelper"), a = t(require("../api/rmsStorage")), c = require("../miniprogram_npm/reselect/index.js"), s = require("../lib/mix/util"), l = require("../lib/number"), d = require("../constants/bizConstants"), f = require("../miniprogram_npm/@components/limo-ui/ui-constant/enum"), m = require("./userHelper"), p = require("./coupon/util"), h = require("./dishHelper"), g = require("./panel/package/utils");

var I = function(t, e) {
    var n, i = "", r = [];
    if (t && t.meetCondition && 1 === t.discountItemPosi) {
        var o = t || {}, u = o.conditionCount, a = void 0 === u ? "" : u, c = o.discountValue, s = void 0 === c ? "" : c;
        switch (t.discountType) {
          case d.SHOP_PROMOTION_TYPE.FULL_COUNT_DISCOUNT:
            i = "满量折扣", r = [ {
                text: "已享 ".concat(a, " 份")
            }, {
                text: " ".concat(s, " "),
                highlight: !0
            }, {
                text: "折"
            } ];
            break;

          case d.SHOP_PROMOTION_TYPE.FULL_COUNT_CUT:
            i = "满量减免", r = [ {
                text: "已享每 ".concat(a, " 份减")
            }, {
                text: " ".concat(s, " "),
                highlight: !0
            }, {
                text: "元"
            } ];
            break;

          case d.SHOP_PROMOTION_TYPE.FULL_COUNT_FIXED_PRICE:
            i = "满量一口价", r = [ {
                text: "已享每 ".concat(a, " 份")
            }, {
                text: " ".concat(s, " "),
                highlight: !0
            }, {
                text: "元"
            } ];
            break;

          case d.SHOP_PROMOTION_TYPE.FULL_COUNT_SPEC_PRICE:
            i = "满量特价", r = [ {
                text: "已享 ".concat(a, " 份特价")
            } ];
            break;

          case d.SHOP_PROMOTION_TYPE.DISH_WITH_FREE:
            i = "买免活动", n = null == t ? void 0 : t.campaignId;
            break;

          default:
            i = "", r = [];
        }
    }
    var l = !!(t && t.meetCondition && 1 === t.discountItemPosi && t.preMeetCondition);
    !t && e && e.discountItemPosi && e.discountItemPosi === e.discountItemCount && (l = !0);
    var f, m = "";
    t && t.meetCondition && function(t) {
        return ![ d.SHOP_PROMOTION_TYPE.SPECIAL_PRICE ].includes(null == t ? void 0 : t.discountType);
    }(t) && (m = t.discountItemPosi === t.discountItemCount ? "discount-bg last-item" : "discount-bg"), 
    (null == t ? void 0 : t.discountType) > 0 && (null == t ? void 0 : t.src) > 0 && (f = (0, 
    p.dealDiscountTag)("".concat(t.discountType, "_").concat(t.src)));
    var h = [];
    return null != t && t.discountTexts && 1 === (null == t ? void 0 : t.discountItemPosi) && (r = t.discountTexts, 
    i = t.discountType, h = t.labelList), {
        showLine: l,
        discountType: i,
        discountContent: r,
        cartItemStyle: m,
        campaignId: n,
        type: null == t ? void 0 : t.discountType,
        discountTag: f,
        labelList: h
    };
};

function v(t, c, p, v, C, P, T, O) {
    var E = (0, r.default)([]), N = (0, r.default)([]), _ = 0;
    t && Object.keys(t).forEach(function(e) {
        var o = t[e], u = c && c[e];
        return u && o && o.map(function() {
            var t = i(n.default.mark(function t(e) {
                var i, o, a, c, s, f, m, p, I;
                return n.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (i = e.skuId, o = u.skuMenuItems.find(function(t) {
                            return t.skuId === i;
                        })) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return", null);

                      case 3:
                        return a = e.count || 0, c = o.skuImg || r.default.getIn(u, [ "dishPicUrls", d.PICTURE_RATIO.ONE_TO_ONE ]) || d.PLACEHOLDER_DISH_PIC.ONE_TO_ONE, 
                        e = r.default.set(e, "dishImg", c), e = r.default.set(e, "dishType", null == o ? void 0 : o.dishType), 
                        _ = (0, l.plusFloat)(_, a), o.dishType === d.DISH_TYPE.NORMAL ? (s = r.default.set(e, "detail", (0, 
                        h.dealNormalDetail)(u, e, O)), E = E.concat([ s ])) : o.dishType === d.DISH_TYPE.PACKAGE && (f = (0, 
                        g.dealPackageDetail)(o.packageGroups, e.packages), m = e.remark ? "备注：" + e.remark : "", 
                        p = null != m && m.length ? "".concat(f, "，").concat(m) : f, I = r.default.set(e, "detail", p), 
                        E = E.concat([ I ])), t.abrupt("return", null);

                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }()), null;
    }), p && p.map(function(t) {
        var e = E.find(function(e) {
            return e.itemNo === t.goodsNo;
        });
        return e && (N = N.concat([ e ])), null;
    }), N = function(t, e) {
        var n = [];
        if (!e || !e.length) return n;
        var i = function(t) {
            var e = [];
            return t.forEach(function(t) {
                e.unshift(t);
            }), e = (0, r.default)(e);
        }(e), u = {}, c = {};
        i.forEach(function(t, e) {
            u[t.itemNo] = r.default.set(t, "itemCount", t.count), c[t.itemNo] = e + 1;
        });
        var s = [];
        i.forEach(function(e) {
            var i = e.itemNo, d = {};
            (e.allDiscount || []).forEach(function(t) {
                var e = t.conditionItems || [];
                if (e.length) {
                    var n = [], i = "";
                    if (e.forEach(function(t) {
                        u[t.sourceItemNo] && (n.push(t), i += t.itemNo);
                    }), n.length && (i = (0, o.default)(i), -1 === s.indexOf(i))) {
                        s.push(i), n = n.sort(function(t, e) {
                            return c[t.sourceItemNo] - c[e.sourceItemNo];
                        });
                        var a = [], l = 0;
                        n.forEach(function(e, i) {
                            var o = u[e.sourceItemNo];
                            l += c[e.sourceItemNo];
                            var s = o.itemCount - e.itemCount;
                            s < 0 && (s = 0), u[e.sourceItemNo] = r.default.set(o, "itemCount", s);
                            var d = r.default.merge(o, {
                                itemCount: e.itemCount,
                                itemPrice: e.itemPrice,
                                allDiscount: [],
                                discount: {
                                    discountType: t.discountType,
                                    conditionCount: t.conditionCount,
                                    discountValue: t.discountValue,
                                    meetCondition: !0,
                                    discountItemCount: n.length,
                                    discountItemPosi: i + 1,
                                    discountTexts: t.discountTexts,
                                    labelList: t.labelList
                                },
                                campaignDishes: e.campaignDishes || []
                            });
                            a.push(d);
                        }), d[i] = {
                            groupSort: l,
                            items: a
                        };
                    }
                }
            });
            var f = e.allBuyFreeDiscount || [];
            f && f.forEach(function(t) {
                var e = t.discountDishItem || [];
                if (e.length) {
                    var i = [], a = "";
                    if (e.forEach(function(t) {
                        u[t.sourceItemNo] && (i.push(t), a += t.itemNo);
                    }), i.length && (a = (0, o.default)(a), -1 === s.indexOf(a))) {
                        s.push(a), i = i.sort(function(t, e) {
                            return c[t.sourceItemNo] - c[e.sourceItemNo];
                        });
                        var l = [], f = 0;
                        i.forEach(function(e, i) {
                            var o = u[e.sourceItemNo];
                            f += c[e.sourceItemNo];
                            var a = o.itemCount - e.itemCount;
                            a < 0 && (a = 0), u[e.sourceItemNo] = r.default.set(o, "itemCount", a);
                            var s = n.findIndex(function(t) {
                                return t.itemNo === e.sourceItemNo;
                            });
                            s > -1 && (a ? n[s].itemCount = a : n.splice(s, 1));
                            var d = r.default.merge(o, {
                                itemCount: e.itemCount,
                                itemPrice: e.itemPrice,
                                allDiscount: [],
                                discount: {
                                    campaignId: t.campaignId,
                                    discountType: t.discountType,
                                    src: t.src,
                                    meetCondition: !0,
                                    discountItemPosi: i + 1
                                },
                                campaignDishes: e.campaignDishes || []
                            });
                            l.push(d);
                        }), d[a] = {
                            groupSort: f,
                            items: l
                        };
                    }
                }
            }), (e.allCouponDiscount || []).forEach(function(t, e) {
                var n = t.sourceItemNo, i = t.itemNoList, a = t.itemCount, l = t.conditionItems, f = e + "";
                if (i.forEach(function(t) {
                    f += t;
                }), f = (0, o.default)(f), -1 === s.indexOf(f)) {
                    s.push(f);
                    var m = c[n], p = u[n];
                    if (p) {
                        var h = p.itemCount - a;
                        h < 0 && (h = 0), u[n] = r.default.set(p, "itemCount", h);
                        var g = l.map(function(t) {
                            return r.default.merge(p, t);
                        });
                        d[f] = {
                            groupSort: m,
                            items: g
                        };
                    }
                }
            });
            var m = u[i];
            if (m && m.itemCount > 0) {
                var p = (0, o.default)(i);
                if (-1 === s.indexOf(p)) {
                    var h;
                    s.push(p);
                    var g = a.default.getCartPrice(t), I = (null == g ? void 0 : g.cartItemPrice) || {};
                    if (Object.keys(I).length && -1 !== Object.keys(I).indexOf(i)) {
                        var v = (g.realCartItemPrice || {})[i];
                        if (m.itemCount !== m.count && v) {
                            var C = v.unitPrice, P = v.unitOriginPrice;
                            h = {
                                originPrice: (0, l.roundFloat)(P * m.itemCount, 2),
                                actualPrice: (0, l.roundFloat)(C * m.itemCount, 2)
                            };
                        } else h = {
                            originPrice: r.default.getIn(I, [ i, "originPrice" ]),
                            actualPrice: r.default.getIn(I, [ i, "actualPrice" ])
                        };
                    } else h = m.itemPrice;
                    var T = JSON.parse(JSON.stringify(m));
                    T.itemCount = m.itemCount, T.itemPrice = h, T.allDiscount = [], T.campaignDishes = m.campaignDishes, 
                    T.pointDiscountText = m.pointDiscountText, d[p] = {
                        groupSort: c[i],
                        items: [ T ]
                    };
                }
            }
            var O = [];
            Object.keys(d).forEach(function(t) {
                O.push(d[t]);
            }), (O = O.sort(function(t, e) {
                return t.groupSort - e.groupSort;
            })).forEach(function(t) {
                t.items.forEach(function(t) {
                    n.push(t);
                });
            });
        });
        var d = null;
        return n.map(function(t, e) {
            var n = t;
            return (n = r.default.set(n, "uiIndex", n.itemNo + e)).discount && n.discount.meetCondition && d && d.discount && d.discount.meetCondition && (n = r.default.setIn(n, [ "discount", "preMeetCondition" ], !0)), 
            d = n, n;
        });
    }(v, N);
    var D = function(t, e) {
        var n, i = "https://s3plus.meituan.net/v1/mss_61ac5135885c44e59bbaa7e9b2f3282e/rms-marketing/menmber/miniapp/default-avatar.png", o = [];
        o = !t || t.length <= 1 ? [ {
            avatarUrl: (null == (n = (0, m.getThirdUserInfo)()) ? void 0 : n.headimgurl) || i,
            key: "",
            avatarBorderColor: "transparent"
        } ] : t.map(function(t) {
            return {
                avatarUrl: t.avatar || i,
                key: t.uid || "",
                avatarBorderColor: t.color || "transparent"
            };
        });
        var u = {};
        return t && t.length > 1 && e && Object.keys(e).forEach(function(n) {
            var i = (r.default.getIn(e, [ n ]) || []).map(function(e) {
                return r.default.getIn(t.filter(function(t) {
                    return t.uid === e;
                }), [ 0, "color" ]) || "";
            }).filter(function(t) {
                return !!t;
            });
            u[n] = i.map(function(t, e) {
                return {
                    backgroundColor: t,
                    transform: -4 * e / 7.5
                };
            });
        }), (0, s.isUnitePage)() && (o = [], e = {}), {
            avatarPicsData: o,
            goodsUserColorInfo: u
        };
    }(C, P), b = D.goodsUserColorInfo, x = D.avatarPicsData;
    return {
        sortRenderList: N.map(function(t, n) {
            var i, o = c && c[t.spuId], a = null == o ? void 0 : o.skuMenuItems.find(function(e) {
                return e.skuId === t.skuId;
            }), s = function(t, e) {
                var n = (0, u.getGrouponTip)(t, e), i = n.tip, r = n.isCouponDish, o = (0, u.getDishExchangeTip)(t, e), a = o.tip, c = o.isCouponDish, s = [];
                return i && s.push(i), a && s.push(a), {
                    tagList: s,
                    isCouponDish: r || c
                };
            }(t, T), l = s.tagList, d = s.isCouponDish, m = n ? N[n - 1] : {};
            return e(e({}, t), {}, {
                renderTagList: l,
                hiddenDish: (null == o ? void 0 : o.hiddenDish) || !1,
                isCouponDish: d || !1,
                renderWeightDesc: a.canWeight ? "".concat(t.weight, " ").concat(a.unit || "斤") : "",
                renderFullCountDiscountData: I(t.discount, null == m ? void 0 : m.discount),
                renderUserColors: (0, r.default)(b[t.itemNo] || []),
                cartTagList: null == a || null == (i = a.tagList) ? void 0 : i.filter(function(t) {
                    return t.colorType === f.LABEL_TYPE.BKG_MT_DISCUONT;
                })
            });
        }),
        totalInfo: (0, r.default)({
            cartCount: _
        }),
        avatarPicsData: x
    };
}

var C = (0, c.createSelector)([ function(t) {
    return r.default.getIn(t, [ "cart", "refactorLocalCart", "refactorCartDishMap" ]);
}, function(t) {
    return r.default.getIn(t, [ "dish", "dishList" ]);
}, function(t) {
    return r.default.getIn(t, [ "cart", "cartDishSortMapList" ]);
}, function(t) {
    return r.default.getIn(t, [ "cart", "userInfo" ]);
}, function(t) {
    return r.default.getIn(t, [ "cart", "goodsUserInfo" ]);
}, function(t) {
    return r.default.getIn(t, [ "cart", "promotionMap" ]);
}, function(t, e) {
    return (null == e ? void 0 : e.shopId) || +(0, s.getMixUrlParam)("shopId") || 0;
}, function(t) {
    return r.default.getIn(t, [ "extraInfo", "headInfo", "shopConfig", "commonConfig", "showDishRemark" ]) || !1;
} ], function(t, n, i, r, o, u, a, c) {
    return e({}, v(t, n, i, a, r, o, u, c));
});

exports.cartViewModelAdapter = C;