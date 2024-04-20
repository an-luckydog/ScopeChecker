var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../../b/helpers/toConsumableArray"), i = e(require("../../../../b/regenerator")), n = require("../../../../b/helpers/asyncToGenerator"), s = require("../../../../b/helpers/objectSpread2"), a = e(require("../../../../miniprogram_npm/@limo/core/index.js")), o = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), r = e(require("../../../../commons/component")), c = require("../../../../commons/constants");

(0, r.default)({
    behaviors: [ o.commonBehavior, o.limoShim ],
    properties: {
        recommendDishList: {
            type: Array,
            value: []
        }
    },
    data: {
        dishCountMap: {},
        localRecommendDishList: [],
        cateCount: [],
        scrollLeft: 0,
        recommendIndex: 0,
        showEstPrice: !0,
        isRequest: !0
    },
    observers: {
        recommendDishList: function(e) {
            if (e && 0 !== e.length) {
                var t = e.map(function(e) {
                    return s(s({}, e), {}, {
                        pageNo: 2
                    });
                }), i = e[0].dishList || [];
                i.length && this.setData({
                    dishList: i,
                    localRecommendDishList: t,
                    recommendIndex: 0,
                    scrollLeft: 0
                });
            }
        }
    },
    lifetimes: {
        attached: function() {
            if (this.entity.isBound(c.TYPES.CART)) {
                var e = this.entity.get(c.TYPES.CART).getCartDataBySpu().dishCountMap, t = this.calcCatCount(e);
                this.setData(s({
                    dishCountMap: e
                }, t));
            }
            this.entity.get(c.TYPES.EMITTER).on(c.EVENTS.DISH_CHANGE, this.onCartDishChange, this);
        },
        detached: function() {
            this.entity.get(c.TYPES.EMITTER).off(c.EVENTS.DISH_CHANGE, this.onCartDishChange, this);
        }
    },
    methods: {
        calcCatCount: function(e) {
            var t = this.data, i = t.cateCount, n = void 0 === i ? [] : i, s = t.recommendDishList, a = {};
            (void 0 === s ? [] : s).forEach(function(t, i) {
                var n;
                null == (n = t.dishList) || n.forEach(function(t) {
                    e[t.spuId] && (a[i] = (a[i] || 0) + e[t.spuId]);
                });
            });
            var o = {};
            for (var r in a) {
                var c = a[r];
                n[+r] !== c && (o["cateCount[".concat(+r, "]")] = c);
            }
            return n.forEach(function(e, t) {
                a[t] || (o["cateCount[".concat(t, "]")] = 0);
            }), o;
        },
        onCartDishChange: function(e) {
            var t = e.dishCountMap, i = e.dishCount, n = {
                cateCount: []
            };
            Object.keys(t).length && (n = this.calcCatCount(t)), this.setData(s(s({
                dishCountMap: t
            }, n), {}, {
                showEstPrice: !i
            }));
        },
        openDetail: function(e) {
            var t, i;
            null == (t = this.entity) || t.get(c.TYPES.LX).sendMC("b_saaspay_psxksd3d_mc");
            var n = (null == (i = e.currentTarget.dataset) ? void 0 : i.dish) || {}, s = n.dishType, a = n.spuId;
            s && a && this.entity.get(c.TYPES.DISH).openDish(s, {
                spuId: a
            });
        },
        changeRecommend: function(e) {
            var t = e.currentTarget.dataset.index;
            this.setData({
                recommendIndex: t,
                scrollLeft: 0
            });
        },
        getNextPageDish: function() {
            var e = this;
            return n(i.default.mark(function t() {
                var n, s, o, r, u, h, d, m, p, l, g, f, C;
                return i.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (s = e.data, o = s.recommendIndex, r = s.localRecommendDishList, u = s.isRequest, 
                        h = r[o], d = h.pageCount, m = h.pageNo, p = h.type, !(m > d) && u) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return");

                      case 3:
                        if (l = e.entity.get(c.TYPES.OPTIONS).get("poiId") || "", (g = e.entity.get(c.TYPES.OPTIONS).get("bizType") || "") !== c.BIZ_TYPE.SC) {
                            t.next = 11;
                            break;
                        }
                        return t.next = 8, null == (n = e.entity) ? void 0 : n.get(c.EVENTS.GET_USER_GEO)();

                      case 8:
                        t.t0 = t.sent, t.next = 12;
                        break;

                      case 11:
                        t.t0 = {
                            gisType: 3
                        };

                      case 12:
                        return f = t.t0, e.setData({
                            isRequest: !1
                        }), t.next = 16, e.entity.get(c.TYPES.REQUEST).post("/@biz/menu/recommend/dish/page", {
                            poiId: l,
                            type: p,
                            pageNo: m,
                            bizType: g,
                            userGeo: f
                        });

                      case 16:
                        200 === (C = t.sent).code ? e.updateDishList(o, C.data || []) : (a.default.getLimoRuntime().showToast({
                            title: C.msg || "请求下一页失败",
                            icon: "none"
                        }), e.setData({
                            isRequest: !0
                        }));

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        updateDishList: function(e, i) {
            var n = this.data.localRecommendDishList, a = [].concat(t(n[e].dishList), t(i)), o = n[e].pageNo + 1;
            n[e] = s(s({}, n[e]), {}, {
                pageNo: o,
                dishList: a
            }), this.setData({
                localRecommendDishList: n,
                isRequest: !0
            });
        }
    }
});