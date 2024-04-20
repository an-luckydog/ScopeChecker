var t, e = require("../../b/helpers/interopRequireDefault"), i = require("../../b/helpers/toConsumableArray"), a = e(require("../../b/regenerator")), s = require("../../b/helpers/asyncToGenerator"), n = e(require("../../miniprogram_npm/@limo/core/index.js")), o = require("../../miniprogram_npm/@limo/container/behaviors/index"), r = e(require("../../commons/component")), c = require("../../commons/constants"), l = {
    spec: "规格",
    package: "套餐",
    comment: "评价",
    recommend: "推荐"
};

(0, r.default)({
    behaviors: [ o.commonBehavior, o.limoShim ],
    options: {
        multipleSlots: !0
    },
    properties: {
        dishInfo: {
            type: Object,
            value: {}
        },
        addDishInfo: {
            type: Object,
            value: {}
        },
        cartDishInfo: {
            type: Object,
            value: {}
        },
        autoScroll: {
            type: Boolean,
            value: !1
        },
        isLoading: {
            type: Boolean,
            value: !0
        },
        showRemark: {
            type: Boolean,
            value: !1
        },
        hasRecommendMatch: {
            type: Number,
            value: 0
        }
    },
    observers: {
        "dishInfo.spuId": (t = s(a.default.mark(function t(e) {
            var i, s, n, o, r, l, h, d, u, m;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e) {
                        t.next = 12;
                        break;
                    }
                    return t.next = 3, this.entity.get(c.TYPES.DISH).getSpuReview(e);

                  case 3:
                    if ((i = t.sent) && this.setData({
                        reviewData: i
                    }), s = this.data, n = s.dishInfo, o = s.hasRecommendMatch, r = void 0 === o ? 0 : o, 
                    h = (l = n || {}).showRecommendPairing, d = l.spuId, !h || 1 === r) {
                        t.next = 12;
                        break;
                    }
                    return u = this.entity.get(c.TYPES.CART).cartOrderId, t.next = 10, this.entity.get(c.TYPES.DISH).getRecommendMatchDish({
                        spuId: d,
                        cartOrderId: u,
                        categoriesId: "detail-".concat(d),
                        pageFrom: 20
                    });

                  case 10:
                    m = t.sent, this.setData({
                        showRecommendMatch: !!m
                    });

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        })), function(e) {
            return t.apply(this, arguments);
        }),
        "addDishInfo.tags": function(t) {
            if (t) {
                var e = [], i = [], a = [], s = {
                    corner: null,
                    memberTag: null,
                    tagList: []
                };
                null == t || t.forEach(function(t) {
                    switch (t.type) {
                      case 0:
                        s.corner = t;
                        break;

                      case 1:
                        e.push(t);
                        break;

                      case 2:
                        a.push(t);
                        break;

                      case 3:
                        s.memberTag = t;
                        break;

                      case 4:
                        i.push(t);
                    }
                }), s.tagList.push([].concat(a, i)), s.tagList.push(e), this.setData(s);
            }
        },
        "dishInfo.name": function(t) {
            var e = this;
            if (t && !this.data.titleHeight) {
                this.titleObserver.relativeTo(".dish-panel").observe(".dish-panel-head", function(t) {
                    e.setData({
                        isTitleSticky: t.intersectionRatio < 1
                    });
                });
                var i = n.default.getLimoRuntime().createSelectorQuery().in(this);
                i.select(".dish-panel >>> #spec").boundingClientRect(), i.select(".dish-panel >>> #package").boundingClientRect(), 
                i.select(".dish-panel >>> #comment").boundingClientRect(), i.select(".dish-panel >>> #recommend").boundingClientRect(), 
                i.select(".dish-panel").boundingClientRect(), i.select(".dish-panel >>> .dish-panel-head").boundingClientRect();
                var a = "";
                i.exec(function(t) {
                    var i, s = (t[4] || {}).top, n = t[5] ? t[5].height + 1 : 0, o = [];
                    t.slice(0, 2).map(function(t) {
                        if (t) {
                            var e = t || {}, i = e.id, r = e.height, c = e.top;
                            r > 0 && ("package" !== i && "spec" !== i || (a = l[i]), o.push({
                                id: i,
                                title: l[i],
                                scrollTop: c - (n + (null != s ? s : 0)) + 12
                            }));
                        }
                    }), e.setData({
                        navItems: o,
                        navBarId: (null == (i = o[0]) ? void 0 : i.id) || "",
                        titleHeight: n,
                        panelType: a
                    }, function() {
                        e.needScroll && (e.scrollToFirstTab(), e.needScroll = !1), a && e.infoObserver.relativeTo(".dish-panel .bottom", {
                            top: 50
                        }).observe(".dish-info", function(t) {
                            e.setData({
                                showScrollTab: t.intersectionRatio > 0
                            });
                        });
                    });
                });
            }
        },
        "dishInfo.cartCount": function(t) {
            t && this.setData({
                showCount: +t || +(this.data.dishInfo.minBoughtCount || 1)
            });
        },
        "cartDishInfo.dishRemarks": function(t) {
            t && this.setData({
                remarkText: t.join(",")
            });
        }
    },
    lifetimes: {
        attached: function() {
            var t;
            this.needScroll = this.data.autoScroll, this.titleObserver = n.default.getLimoRuntime().createIntersectionObserver(this, {
                thresholds: [ 1 ]
            }), this.infoObserver = n.default.getLimoRuntime().createIntersectionObserver(this), 
            this.setData({
                hasTabBar: !(null == (t = this.getTabBar) || !t.call(this)),
                showEst: this.entity.isBound(c.TYPES.CART) && !this.entity.get(c.TYPES.CART).getCartDataBySpu().dishCount
            }), this.entity.get(c.TYPES.EMITTER).on(c.EVENTS.DISH_REMARK, this.setDishRemark, this);
        },
        detached: function() {
            this.titleObserver.disconnect(), this.infoObserver.disconnect(), this.entity.get(c.TYPES.EMITTER).off(c.EVENTS.DISH_REMARK, this.setDishRemark, this);
        }
    },
    data: {
        navBarId: "",
        scrollIntoView: "",
        isTitleSticky: !1,
        navItems: [],
        titleHeight: 0,
        scrollTop: 0,
        showScrollTab: !1,
        panelType: "",
        hasTabBar: !0,
        showEst: !0,
        memberTag: null,
        showCount: 1,
        reviewData: null,
        remarkText: "",
        showRecommendMatch: !1
    },
    methods: {
        scrollToNav: function(t) {
            var e = (t.currentTarget.dataset || {}).id, i = this.data.navItems.find(function(t) {
                return t.id === e;
            }) || {};
            this.setData({
                navBarId: e,
                scrollTop: i.scrollTop || 0
            });
        },
        dishHandleFn: function(t) {
            var e = t.detail.operation;
            "plus" === e ? this.clickAdd() : "minus" === e && this.clickReduce();
        },
        shareDish: function() {
            var t = this.data.dishInfo, e = t.spuId, i = t.name;
            this.entity.get(c.TYPES.LX).sendMC("b_saaspay_dqurtsq9_mc", null, null, {
                spuId: e,
                name: i
            });
        },
        clickReduce: function() {
            this.entity.get(c.TYPES.LX).sendMC("b_saaspay_vkffpwhb_mc", null, null, {
                op: "reduce"
            });
            var t = this.data, e = t.dishInfo || {}, i = t.showCount - e.incBoughtCount, a = +e.minBoughtCount;
            i < a ? n.default.getLimoRuntime().showToast({
                icon: "none",
                title: "不能小于".concat(a, "份"),
                duration: 1e3
            }) : this.setData({
                showCount: i
            });
        },
        clickAdd: function() {
            this.entity.get(c.TYPES.LX).sendMC("b_saaspay_vkffpwhb_mc", null, null, {
                op: "add"
            });
            var t = this.data, e = t.addDishInfo, a = t.dishInfo, s = t.showCount, n = a || {}, o = n.spuId, r = n.name, l = n.incBoughtCount, h = n.cartSkuId, d = n.cartCount, u = e || {}, m = u.skuId, p = u.specName, f = u.stockCount, g = s + l, v = g - d;
            m !== h && (v = g), this.entity.isBound(c.TYPES.CART) && !this.entity.get(c.TYPES.CART).validateDish({
                spuId: o,
                skuId: m,
                stockCount: f
            }, v) || this.entity.isBound(c.TYPES.CART) && !this.entity.get(c.TYPES.RULE).checkDishLimit([].concat(i(Array.from(this.entity.get(c.TYPES.CART).cartDish.values())), [ {
                spuId: o,
                skuId: m,
                count: v,
                name: p || r
            } ])) || this.setData({
                showCount: g
            });
        },
        clickButton: function() {
            var t = this.data.remarkText, e = void 0 === t ? "" : t, i = e ? [ e ] : [];
            this.triggerEvent("handleButtonClick", {
                count: this.data.showCount,
                dishRemarks: i
            });
        },
        onScroll: function(t) {
            var e = t.detail.scrollTop, i = this.data.navItems;
            if (i.length) {
                var a, s = i.findIndex(function(t) {
                    return t.scrollTop > e;
                });
                switch (s) {
                  case 0:
                    a = 0;
                    break;

                  case -1:
                    a = i.length - 1;
                    break;

                  default:
                    a = s - 1;
                }
                this.setData({
                    navBarId: i[a].id
                });
            }
        },
        scrollToFirstTab: function() {
            var t = this.data.navItems;
            if (t.length) {
                var e = t[0].scrollTop - 60;
                this.setData({
                    scrollTop: e === this.data.scrollTop ? e + 1 : e
                });
            }
        },
        closePanel: function() {
            var t = this.data.dishInfo, e = t.spuId, i = t.name;
            this.entity.get(c.TYPES.LX).sendMC("b_saaspay_68ke68b0_mc", null, null, {
                spuId: e,
                name: i
            }), this.entity.get(c.TYPES.DISH).closeDish();
        },
        triggerPkgDetail: function() {
            this.triggerEvent("openDetail");
        },
        reloadDish: function() {
            this.triggerEvent("reload");
        },
        setDishRemark: function(t) {
            this.setData({
                remarkText: t
            });
        },
        addRemark: function() {
            var t = this.data, e = t.dishInfo, i = t.remarkText;
            this.entity.get(c.TYPES.LIMO).limoShowDialog("dish-remark-panel", {
                orderRemarkDefaultWord: (null == e ? void 0 : e.defaultRemark) || "添加口味偏好等要求",
                remarkText: i
            }, {
                position: "bottom",
                maskClosable: !0,
                header: {
                    closeable: !0,
                    title: "菜品备注"
                }
            });
        }
    }
});