var t = require("../../b/helpers/interopRequireDefault"), e = require("../../b/helpers/toConsumableArray"), u = require("../../b/helpers/objectWithoutProperties"), i = t(require("../../b/regenerator")), n = require("../../b/helpers/objectSpread2"), s = require("../../b/helpers/asyncToGenerator"), a = t(require("../../miniprogram_npm/@limo/core/index.js")), r = require("../../miniprogram_npm/@limo/container/behaviors/index"), o = t(require("../../commons/component")), c = require("../../commons/constants"), d = require("../multi-spec-panel/title"), p = t(require("../../commons/behaviors/tradeDish")), h = [ "skuId", "spuId", "desc", "selectedNum" ], g = [ "groupSkus", "groupId" ], l = [ "groupSkus", "groupLimit", "groupType", "groupId" ], f = [ "groupSkus", "groupType", "groupId" ], I = [ "groupSkus", "groupId" ], k = [ "groupSkus", "groupId", "groupType", "groupLimit" ], m = [ "skuDishList" ];

(0, o.default)({
    behaviors: [ p.default, r.commonBehavior, r.limoShim ],
    properties: {
        spuId: {
            type: String,
            value: ""
        },
        cartDishInfo: {
            type: Object,
            value: {}
        },
        autoScroll: {
            type: Boolean,
            value: !1
        },
        extraParams: {
            type: Object,
            value: {}
        },
        addType: {
            type: Number,
            value: 0
        }
    },
    lifetimes: {
        attached: function() {
            var t;
            this.initData(), this.entity.get(c.TYPES.EMITTER).on(c.EVENTS.PACKAGE_SPEC_DISH, this.updateSpecDish, this), 
            this.entity.get(c.TYPES.EMITTER).on(c.EVENTS.MINUS_PACKAGE_SPEC_DISH, this.minusDishPackage, this), 
            null == (t = this.entity) || t.get(c.TYPES.EMITTER).on("DISH_PANEL_REFRESH", this.refreshPanel, this);
        },
        detached: function() {
            var t;
            this.entity.get(c.TYPES.EMITTER).off(c.EVENTS.PACKAGE_SPEC_DISH, this.updateSpecDish, this), 
            this.entity.get(c.TYPES.EMITTER).off(c.EVENTS.MINUS_PACKAGE_SPEC_DISH, this.minusDishPackage, this), 
            null == (t = this.entity) || t.get(c.TYPES.EMITTER).off("DISH_PANEL_REFRESH", this.refreshPanel, this);
        }
    },
    data: {
        skuId: "",
        dishInfo: {},
        packageModalData: [],
        packageDishAllCount: 0,
        packageDishInfo: {
            addable: !1
        },
        isPackageDetailOpen: !1,
        isLoading: !0,
        sudokuType: 1
    },
    observers: {
        "dishInfo,packageModalData": function(t, e) {
            var u = this.entity.get(c.TYPES.TRIANGLE).plusFloat, i = this.getPkgInfo(e), n = i.desc, s = i.deltaPrice, a = u(+t.currentPrice, +s), r = u(+t.originalPrice, +s), o = t.skuId, d = t.tags, p = t.stockCount, h = t.unit, g = t.estimatedPrice, l = t.extendList, f = t.costPointCount, I = {
                skuId: o,
                desc: n,
                tags: d,
                addable: this.checkRequiredDish(e),
                priceInfo: {
                    currentPrice: a,
                    originalPrice: r,
                    unit: h,
                    estimatedPrice: g,
                    deltaPrice: s,
                    costPointCount: f
                },
                stockCount: p,
                extendList: l,
                needDetail: e.length > 0
            };
            this.setData({
                packageDishInfo: this.getPluginDesc(I)
            });
        }
    },
    methods: {
        initData: function() {
            var t = this;
            return s(i.default.mark(function e() {
                var u, s, a, r, o, d, p;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return u = t.data, s = u.cartDishInfo, a = u.extraParams, r = t.data.spuId || s.spuId, 
                        e.next = 6, t.entity.get(c.TYPES.DISH).getPkgDetail(r, a);

                      case 6:
                        if (o = e.sent) {
                            e.next = 9;
                            break;
                        }
                        return e.abrupt("return", void t.setData({
                            isLoading: !1
                        }));

                      case 9:
                        d = null != s && s.count ? s.count : o.minBoughtCount || "1", p = n({
                            packageModalData: t.computedCartDish(o.packageGroups),
                            dishInfo: n(n({}, o), {}, {
                                cartCount: d,
                                extendList: a.extendList
                            }),
                            isLoading: !1,
                            sudokuType: o.spuComboShowType,
                            skuId: o.skuId
                        }, o.plugins && {
                            plugins: o.plugins,
                            updatedPlugins: (null == s ? void 0 : s.plugins) || {}
                        }), t.setData(p, function() {
                            t.entity.get(c.TYPES.DISH).panelSuccess(r);
                        });

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        refreshPanel: function() {
            this.setData({
                packageDishInfo: this.getPluginDesc(this.data.packageDishInfo)
            });
        },
        getPkgInfo: function(t) {
            var e = this.entity.get(c.TYPES.TRIANGLE), i = e.multiFloat, n = e.plusFloat, s = 0, a = "";
            return {
                packages: t.map(function(t) {
                    var e = t.groupSkus, r = t.groupId, o = [];
                    return (e || []).forEach(function(t) {
                        t.skuId, t.spuId;
                        var e = t.desc, r = t.selectedNum, c = u(t, h);
                        if (r) {
                            var d = c.count;
                            a = "".concat(a ? a + "+" : "").concat(c.skuNameAndSpecAttr || c.name).concat(e ? "(" + e + ")" : "").concat(d > 1 ? "X" + d + c.unit : "");
                            var p = 0, g = c.skuDishList || [];
                            g.length && (p = g.reduce(function(t, e) {
                                return n(t, i(n(e.addPrice, Number(c.addPrice)), i(e.count, d)));
                            }, 0), g.forEach(function(t) {
                                var e = t.spuId, u = t.skuId, n = t.count, s = t.desc, a = t.methods, r = t.tastes, c = t.addPrice;
                                o.push({
                                    spuId: e,
                                    skuId: u,
                                    count: i(n, d),
                                    desc: s,
                                    methods: a,
                                    tastes: r,
                                    addPrice: c
                                });
                            })), s = n(s, p);
                        }
                    }), {
                        groupId: r,
                        items: o
                    };
                }),
                deltaPrice: s,
                desc: a
            };
        },
        getGroupCount: function(t) {
            return (t || []).reduce(function(t, e) {
                return t + (e.selectedNum || 0);
            }, 0) || 0;
        },
        computedCartDish: function(t) {
            var e = this.data.cartDishInfo, i = e.packages, s = e.count;
            if ((null != s ? s : 0) <= 0) return this.initComputed(t);
            var a = this.entity.get(c.TYPES.TRIANGLE).divide, r = t.map(function(t) {
                var e = t.groupSkus, s = void 0 === e ? [] : e, r = t.groupId, o = u(t, g), c = [], d = null == i ? void 0 : i.find(function(t) {
                    return t.groupId === r;
                });
                return d && s.forEach(function(t) {
                    var e = d.items.filter(function(e) {
                        return t.skuId === e.skuId;
                    }).map(function(e) {
                        return n(n({}, e), {}, {
                            groupId: t.groupId,
                            unit: t.unit,
                            count: a(e.count, t.count)
                        });
                    });
                    c.push(n(n({}, t), {}, {
                        skuDishList: e
                    }));
                }), n(n({}, o), {}, {
                    groupSkus: c,
                    groupId: r
                });
            });
            return this.computedSelectedCount(r);
        },
        computedSelectedCount: function(t) {
            return this.computedDish(t);
        },
        computedDish: function(t) {
            var e = this, i = this.entity.get(c.TYPES.TRIANGLE), s = i.multiFloat, a = i.plusFloat;
            return (t || []).map(function(t) {
                var i = t.groupSkus, r = void 0 === i ? [] : i, o = t.groupLimit, c = t.groupType, p = t.groupId, h = u(t, l), g = r.map(function(t) {
                    var e = t.skuDishList, u = t.addPrice, i = e.reduce(function(e, u) {
                        return a(e, s(+u.addPrice, s(u.count, t.count)));
                    }, 0), r = function(t) {
                        return t.map(function(e) {
                            var u = e.count, i = e.unit, n = e.desc || "", s = "".concat("" === n && t.length > 1 ? "标准" : n);
                            return s && u > 1 ? "".concat(s, " x ").concat(u).concat(i) : "".concat(s);
                        }).filter(function(t) {
                            return !!t;
                        }).join("；");
                    }(e), o = e.reduce(function(t, e) {
                        return t + e.count;
                    }, 0);
                    return n(n({}, t), {}, {
                        skuDishList: e,
                        curAddPrice: a(i, s(+u, t.count)),
                        selectedNum: o,
                        groupId: p,
                        desc: r
                    });
                }), f = e.getGroupCount(g), I = h.groupHeadDesc ? (0, d.transPkgGroupTitle)(h.groupHeadDesc, f) : [];
                return n(n({}, h), {}, {
                    groupSkus: g,
                    groupSelectedCount: f,
                    disabled: f >= o,
                    groupLimit: o,
                    groupType: c,
                    groupId: p,
                    subTitle: I
                });
            });
        },
        initComputed: function(t) {
            var e = this.entity.get(c.TYPES.TRIANGLE).plusFloat, i = (t || []).map(function(t) {
                var i = t.groupSkus, s = void 0 === i ? [] : i, a = t.groupType, r = t.groupId, o = u(t, f);
                return n(n({}, o), {}, {
                    groupSkus: s.map(function(t) {
                        var u = t.spuId, i = t.unit, s = t.skuId, o = t.defaultMethod, d = t.attrDefaultText, p = t.defaultSide, h = t.defaultSelected, g = [];
                        return 1 === t.status && (a === c.GROUP_TYPE.FIXED || h && a === c.GROUP_TYPE.OPTIONAL) && (g = [ {
                            spuId: u,
                            skuId: s,
                            desc: d || "",
                            count: 1,
                            addPrice: (o || []).concat(p || []).reduce(function(t, u) {
                                return t + ((u || []).items || []).reduce(function(t, u) {
                                    return e(t, Number(u.addPrice) || 0);
                                }, 0) || 0;
                            }, 0),
                            unit: i,
                            groupId: r,
                            methods: o,
                            tastes: p
                        } ]), n(n({}, t), {}, {
                            skuDishList: g
                        });
                    }),
                    groupType: a,
                    groupId: r
                });
            });
            return this.computedDish(i);
        },
        addDishPackage: function(t) {
            var e = t.detail, u = e.spuId, i = e.skuId, n = e.desc, s = e.groupId;
            this.updateSpecDish({
                dish: {
                    spuId: u,
                    skuId: i,
                    desc: n
                },
                callbackInfo: {
                    groupId: s
                }
            });
        },
        minusDishPackage: function(t) {
            var e = t.detail, i = e.dish, s = e.skuItem, a = this.data.packageModalData.map(function(t) {
                var e = t.groupSkus, a = void 0 === e ? [] : e, r = t.groupId, o = u(t, I);
                return i.groupId !== r ? t : n(n({}, o), {}, {
                    groupId: r,
                    groupSkus: a.map(function(t) {
                        if (!t || t.skuId !== i.skuId) return t;
                        0 == t.selectedNum - 1 && (t.skuDishList = []);
                        var e = [];
                        return (t.skuDishList || []).length > 0 && null != s && s.skuId && t.skuDishList.forEach(function(t) {
                            t.desc === s.desc && t.count > 1 ? (t.count--, e.push(t)) : t.desc !== s.desc && e.push(t);
                        }), n(n({}, t), {}, {
                            skuDishList: e
                        });
                    })
                });
            });
            this.setData({
                packageModalData: this.computedSelectedCount(a)
            });
        },
        updateSpecDish: function(t) {
            var e = t.dish, i = t.callbackInfo, s = this.data.packageModalData, a = this.entity.get(c.TYPES.TRIANGLE).plusFloat, r = s.map(function(t) {
                var s = t.groupSkus, r = void 0 === s ? [] : s, o = t.groupId, d = (t.groupType, 
                t.groupLimit), p = u(t, k);
                if (i.groupId !== o) return t;
                var h = r.map(function(t) {
                    var s, r = t.skuDishList, h = void 0 === r ? [] : r, g = u(t, m);
                    if (g.skuId !== e.skuId) return n(n({}, g), {}, {
                        skuDishList: 1 === d ? [] : h
                    });
                    var l = h, f = {
                        spuId: e.spuId,
                        skuId: e.skuId,
                        desc: e.desc,
                        count: 1,
                        addPrice: null != (s = e.addPrice) ? s : 0,
                        unit: g.unit,
                        groupId: o,
                        methods: e.methods || [],
                        tastes: e.tastes || [],
                        name: g.skuNameAndSpecAttr
                    };
                    return p.groupChoiceType === c.GROUP_CHOICE_TYPE.NON_REPEATABLE || i.type === c.SUB_DISH_ADD_TYPE.REPLACE ? l = [ f ] : h.length && h.findIndex(function(t) {
                        return t.desc === e.desc;
                    }) >= 0 ? h.forEach(function(t, u) {
                        t.desc === e.desc && (t.count = a(t.count, 1), l.splice(u, 1, t));
                    }) : l.push(f), n(n({}, g), {}, {
                        noNeedChoose: !0,
                        skuDishList: l
                    });
                });
                return n(n({}, t), {}, {
                    groupSkus: h
                });
            });
            this.setData({
                packageModalData: this.computedSelectedCount(r)
            });
        },
        confirmDish: function(t) {
            var e = this;
            return s(i.default.mark(function u() {
                var s, a, r, o, d, p, h, g, l, f, I, k, m, P, D, E, S, T, v, L, C;
                return i.default.wrap(function(u) {
                    for (;;) switch (u.prev = u.next) {
                      case 0:
                        if (e.entity.get(c.TYPES.LX).sendMC("b_saaspay_wwi61uq9_mc"), s = t.detail || {}, 
                        a = s.count, r = void 0 === a ? 0 : a, o = s.dishRemarks, d = void 0 === o ? [] : o, 
                        p = e.data, h = p.dishInfo, g = p.cartDishInfo, l = p.packageDishInfo, f = p.packageModalData, 
                        I = p.addType, e.checkRequiredDish(f, !0), l.addable) {
                            u.next = 4;
                            break;
                        }
                        return u.abrupt("return");

                      case 4:
                        if (k = h.spuId, m = h.skuId, P = h.name, D = h.extendList, E = e.getPkgInfo(f), 
                        S = E.desc, T = E.packages, v = E.deltaPrice, L = {
                            spuId: k,
                            skuId: m,
                            name: P,
                            count: r,
                            itemNo: (null == g ? void 0 : g.itemNo) || "",
                            packages: T,
                            desc: S,
                            extendList: D,
                            dishRemarks: d,
                            plugins: {}
                        }, L = e.confirmDishPlugin(L), C = !0, I !== c.SPEC_ADD_TYPE.COUPON) {
                            u.next = 12;
                            break;
                        }
                        e.entity.get(c.TYPES.EMITTER).emit(c.EVENTS.COUPON_PANEL_DISH, {
                            cartDish: n(n({}, L), {}, {
                                addPrice: v
                            })
                        }), u.next = 15;
                        break;

                      case 12:
                        return u.next = 14, e.entity.get(c.TYPES.CART).addToCart(L);

                      case 14:
                        C = u.sent;

                      case 15:
                        C && e.entity.get(c.TYPES.DISH).closeDish(c.DISH_TYPE.COMPLEX_COMBO);

                      case 16:
                      case "end":
                        return u.stop();
                    }
                }, u);
            }))();
        },
        checkRequiredDish: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], u = this.data.dishInfo;
            if (!t) return !0;
            for (var i in t) {
                var n = t[i], s = n.groupSkus, r = n.groupId;
                if (s) {
                    var o = {
                        groupId: r,
                        items: s.flatMap(function(t) {
                            return t.skuDishList;
                        })
                    };
                    if (!this.entity.get(c.TYPES.RULE).checkPackageGroups(u, [ o ], 1)) return !1;
                    for (var d in s) {
                        var p = s[d];
                        if (p) {
                            var h = p.required, g = p.skuDishList, l = p.noNeedChoose, f = p.name;
                            if (h && !(g || []).length) return e && a.default.getLimoRuntime().showToast({
                                title: "".concat(f, "必须选择"),
                                icon: "none"
                            }), !1;
                            if ((g || []).length && !l) return e && a.default.getLimoRuntime().showToast({
                                title: "请选择[".concat(f, "]的规格"),
                                icon: "none"
                            }), !1;
                        }
                    }
                }
            }
            return !0;
        },
        triggerPkgDetail: function() {
            var t, u = this.data.packageModalData, i = null == (t = this.entity) ? void 0 : t.get(c.TYPES.EMITTER).emit("DISH_PANEL_CONFIRM", this.data.packageDishInfo), n = {};
            null == i || i.forEach(function(t) {
                var e = t.data;
                e.length > 0 && e.forEach(function(t) {
                    var e, u;
                    null == t || null == (e = t.campaignSkus) || e.forEach(function(t) {
                        t.selectedNum = 1, t.skuDishList = [ {
                            unit: t.unit,
                            count: 1,
                            addPrice: t.currentPrice,
                            desc: t.specName
                        } ];
                    }), n = {
                        groupName: t.title,
                        groupSelectedCount: (null == t || null == (u = t.campaignSkus) ? void 0 : u.length) || 0,
                        groupSkus: (null == t ? void 0 : t.campaignSkus) || []
                    };
                });
            }), this.entity.get(c.TYPES.LIMO).limoShowDialog("package-details-panel", {
                packageModalData: [].concat(e(u), [ n ])
            }, {
                position: "bottom",
                maskClosable: !0,
                header: {
                    title: "套餐明细",
                    closeable: !0
                }
            });
        }
    }
});