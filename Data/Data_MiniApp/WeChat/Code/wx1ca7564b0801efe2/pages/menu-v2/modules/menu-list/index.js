var t = require("../../../../b/helpers/interopRequireDefault");

require("../../../../b/helpers/Objectentries");

var e = require("../../../../b/helpers/toConsumableArray"), i = t(require("../../../../b/regenerator")), n = require("../../../../b/helpers/asyncToGenerator"), o = require("../../../../b/helpers/defineProperty"), a = require("../../../../b/helpers/objectSpread2"), s = require("../../../../b/helpers/slicedToArray"), c = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), r = t(require("../../../../commons/component")), l = require("../../../../commons/constants"), u = t(require("../../../../entities/dish")), d = t(require("../../../../miniprogram_npm/@limo/core/index.js"));

(0, r.default)({
    behaviors: [ c.commonBehavior, c.limoShim ],
    options: {
        multipleSlots: !0
    },
    properties: {
        categories: {
            type: Array,
            value: []
        },
        pageCount: {
            type: Number,
            value: 0
        },
        specialCategories: {
            type: Array,
            value: []
        },
        menuSettings: {
            type: Object,
            value: {}
        },
        categoryDecorationConfig: {
            type: Object,
            value: {}
        }
    },
    data: {
        selectSection: "",
        selectCategory: "",
        selectSecCategory: {},
        dishCountMap: {},
        cateCount: {},
        showEstPrice: !0,
        spuExtra: {},
        secTop: "0rpx",
        dealCouponCates: [],
        categoryStyle: {},
        menuStyles: "",
        selectCategoryIndex: 0,
        scrollTop: 0
    },
    observers: {
        categories: function() {
            this.setData({
                selectCategoryIndex: 0
            }), 0 !== this.data.scrollTop && this.setData({
                scrollTop: 0
            }), this.init(), this.loadSpuPageData();
        },
        categoryDecorationConfig: function(t) {
            this.initCustomStyle(t);
        },
        menuSettings: function(t) {
            var e = t.categoryShowType, i = void 0 === e ? 0 : e, n = t.showSpuCategoryIcon, o = void 0 !== n && n, a = t.styles, c = void 0 === a ? {} : a, r = {
                "--menu-background-img": "url(".concat((null == c ? void 0 : c.backgroundImg) || "", ")"),
                "--menu-background-color": (null == c ? void 0 : c.backgroundColor) || "#fff",
                "--sticky-top": "24rpx;"
            };
            if (i === l.CATEGORY_SHOW_TYPE.FIRST_CATE_TOP) {
                var u = o ? 194 : 108;
                r["--sticky-top"] = "".concat(u, "rpx;");
            }
            var d = Object.entries(r).map(function(t) {
                var e = s(t, 2), i = e[0], n = e[1];
                return "".concat(i, ": ").concat(n);
            }).join(";");
            this.setData({
                menuStyles: d
            });
        }
    },
    lifetimes: {
        attached: function() {
            var t = {};
            if (this.entity.isBound(l.TYPES.CART)) {
                var e = this.entity.get(l.TYPES.CART).getCartDataBySpu().dishCountMap, i = this.calcCatCount(e);
                Object.assign(t, a({
                    dishCountMap: e
                }, i));
            }
            if (this.entity.isBound(l.TYPES.MENU_EXTRA)) {
                var n = this.entity.get(l.TYPES.MENU_EXTRA).spuExtra;
                n && Object.keys(n) && Object.assign(t, {
                    spuExtra: n
                });
            }
            Object.keys(t).length && this.setData(t), this.emitter = this.entity.get(l.TYPES.EMITTER), 
            this.emitter.on(l.EVENTS.DISH_CHANGE, this.onCartDishChange, this), this.emitter.on(l.EVENTS.SET_MENU_EXTRA, this.setMenuExtra, this), 
            this.emitter.on(l.EVENTS.DISH_OPEN, this.scrollToAndOpenDish, this), this.emitter.on(l.EVENTS.CATE_NAVIGATE, this.scrollToCate, this), 
            this.emitter.on(l.EVENTS.DEAL_COUPON_CATEGORY, this.handleDealCouponCate, this), 
            this.emitter.on(l.EVENTS.DEAL_COUPON_CHANGE, this.dealCouponCount, this);
        },
        detached: function() {
            this.emitter.off(l.EVENTS.DISH_CHANGE, this.onCartDishChange, this), this.emitter.off(l.EVENTS.SET_MENU_EXTRA, this.setMenuExtra, this), 
            this.emitter.off(l.EVENTS.DISH_OPEN, this.scrollToAndOpenDish, this), this.emitter.off(l.EVENTS.CATE_NAVIGATE, this.scrollToCate, this), 
            this.emitter.off(l.EVENTS.DEAL_COUPON_CATEGORY, this.handleDealCouponCate, this), 
            this.emitter.off(l.EVENTS.DEAL_COUPON_CHANGE, this.dealCouponCount, this), this.listItemContainer && this.listItemContainer.disconnect(), 
            this.posterContainer && this.posterContainer.disconnect();
        }
    },
    methods: {
        init: function() {
            var t = this;
            this.listItemContainer && this.listItemContainer.disconnect(), this.posterContainer && this.posterContainer.disconnect(), 
            this.posterScrollAnimation = {
                isScrolling: !1
            }, this.listItemContainer = d.default.getLimoRuntime().createIntersectionObserver(this, {
                observeAll: !0
            }), this.listItemContainer.relativeTo(".header-hidden").observe(".section-anchor", function(e) {
                e.intersectionRatio > 0 && (t.selectCategory = e.dataset.category, t.selectSecCategory = e.dataset.secCategory || null, 
                t.dishScrollTimer && clearTimeout(t.dishScrollTimer), t.dishScrollTimer = setTimeout(function() {
                    t.selectCate(t.selectCategory, t.selectSecCategory);
                }));
            }), this.posterContainer = d.default.getLimoRuntime().createIntersectionObserver(this, {
                observeAll: !0
            }), this.posterContainer.relativeTo(".header-hidden").observe(".poster", function(e) {
                var i = t.posterScrollAnimation.isScrolling;
                e.intersectionRatio > 0 && !i && t.posterScrollAnimationProcessor(!1);
            }), this.selectCate();
            var e = d.default.getLimoRuntime().createSelectorQuery().in(this);
            e.select(".header-hidden").boundingClientRect().selectViewport(), e.exec(function(e) {
                var i;
                (null == e || null == (i = e[0]) ? void 0 : i.height) && t.setData({
                    secTop: "".concat(e[0].top, "px")
                });
            });
        },
        prevent: function() {},
        outerTouch: function() {},
        selectCate: function(t, e) {
            var i = this.data, n = i.selectCategory, o = i.selectSecCategory, a = i.categories, s = i.selectCategoryIndex, c = {};
            if (!t && !e && 0 === s) {
                var r, l = null == a || null == (r = a[0]) ? void 0 : r.id;
                if (t = l ? "c".concat(l) : void 0, l) {
                    var u, d, h, g = null == a || null == (u = a[0]) || null == (d = u.children) || null == (h = d[0]) ? void 0 : h.id;
                    e = g ? "c".concat(g) : void 0;
                }
            }
            n !== t && (c.selectCategory = t, c.selectSection = ""), e && t && o[t] !== e && (c["selectSecCategory.".concat(t)] = e), 
            Object.keys(c).length && this.setData(c);
        },
        scrollStart: function(t) {
            t.detail.scrollTop < 50 && (this.outerTouch = this.dynamicGenerateTouchMove(!0));
        },
        onCartDishChange: function(t) {
            var e = t.dishCountMap, i = t.dishCount, n = {};
            Object.keys(e).length && (n = this.calcCatCount(e)), this.setData({
                dishCountMap: e,
                cateCount: n,
                showEstPrice: !i
            });
        },
        calcCatCount: function(t) {
            var e = this.data, i = e.categories, n = e.menuSettings, o = {}, a = function(e, i) {
                i.forEach(function(i) {
                    !function(e, i) {
                        t[i] && (o[e] = (o[e] || 0) + t[i]);
                    }(e, u.default.getId(i));
                });
            };
            return n.categoryShowType === l.CATEGORY_SHOW_TYPE.FIRST_CATE_TOP ? i.forEach(function(t) {
                var e;
                null == (e = t.children) || e.forEach(function(t) {
                    a(t.id, t.itemList || []);
                });
            }) : i.forEach(function(t) {
                var e, i = t.id;
                a(i, t.itemList || []), null == (e = t.children) || e.forEach(function(t) {
                    a(i, t.itemList || []);
                });
            }), o;
        },
        onDishListScrollToUpper: function() {
            this.setData({
                selectSecCategory: {}
            }), this.outerTouch = this.dynamicGenerateTouchMove(!0);
        },
        posterScrollAnimationProcessor: function(t) {
            null == d.default || d.default.getLimoRuntime().triggerEvent("manualSlideIsShow", t), 
            this.posterScrollAnimation = {
                isScrolling: !t
            }, !t && (this.outerTouch = this.dynamicGenerateTouchMove(!1));
        },
        dynamicGenerateTouchMove: function(t) {
            var e = this;
            return t ? function() {
                return e.posterScrollAnimationProcessor(!0);
            } : function() {};
        },
        onCatTap: function(t) {
            var e, i = t.currentTarget.dataset, n = i.category, a = i.section, s = i.id, c = i.title;
            this.entity.get(l.TYPES.LX).sendMC("b_saaspay_wqrbgeg6_mc", null, null, {
                catId: s,
                title: c
            }), this.setData((o(e = {
                selectCategory: n
            }, "selectSecCategory.".concat(n), null), o(e, "selectSection", a), e));
        },
        onTopCatTap: function(t) {
            var e, i, n, a, s = this, c = t.currentTarget.dataset, r = c.category, u = c.id, h = c.title, g = c.index, p = this.data, T = p.categories, C = p.dealCouponCates, f = p.scrollTop;
            this.entity.get(l.TYPES.LX).sendMC("b_saaspay_wqrbgeg6_mc", null, null, {
                catId: u,
                title: h
            });
            var m = C.length ? null == (i = C[0]) ? void 0 : i.id : null == (n = T[g]) || null == (a = n.children) ? void 0 : a[0].id;
            this.setData((o(e = {
                selectCategory: r
            }, "selectSecCategory.".concat(r), "c".concat(m)), o(e, "selectCategoryIndex", g), 
            o(e, "scrollTop", d.default.isAlipay ? f + 1 : f), e), function() {
                s.init(), s.scrollToCateOffset("s".concat(m));
            });
        },
        onSecCatTap: function(t) {
            var e, i, n = t.currentTarget.dataset, a = n.category, s = n.section, c = n.secCategory, r = n.id, u = n.title;
            null == (i = this.entity) || i.get(l.TYPES.LX).sendMC("b_saaspay_qexakqd7_mc", null, null, {
                catId: r,
                title: u
            }), this.setData((o(e = {
                selectCategory: a
            }, "selectSecCategory.".concat(a), c), o(e, "selectSection", s), e));
        },
        onTopSecCatTap: function(t) {
            var e, i = this, n = t.currentTarget.dataset, a = n.category, s = n.section, c = n.secCategory, r = n.id, u = n.title;
            null == (e = this.entity) || e.get(l.TYPES.LX).sendMC("b_saaspay_qexakqd7_mc", null, null, {
                catId: r,
                title: u
            }), this.setData(o({
                selectCategory: a
            }, "selectSecCategory.".concat(a), "c".concat(c)), function() {
                i.scrollToCateOffset("s".concat(s));
            });
        },
        scrollToCateOffset: function(t) {
            var e = this, i = d.default.getLimoRuntime().createSelectorQuery().in(this);
            i.select("#".concat(t)).boundingClientRect(), i.select(".dish-list").boundingClientRect(), 
            i.select("#first-cat-anchor").boundingClientRect(), i.select("#menu-start").boundingClientRect(), 
            i.exec(function(t) {
                e.setData({
                    scrollTop: t[0].top - t[1].top + t[2].top - t[3].top + 1
                });
            });
        },
        loadSpuPageData: function() {
            var t = this;
            return n(i.default.mark(function e() {
                var n, o, a, s, c, r, u;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = t.entity.get(l.TYPES.OPTIONS).get("addressId") || "", a = t.entity.get(l.TYPES.OPTIONS).get("bizType") || "", 
                        e.next = 4, null == (n = t.entity) ? void 0 : n.get(l.EVENTS.GET_USER_GEO)({
                            onlyUseCacheLoc: a === l.BIZ_TYPE.SC
                        });

                      case 4:
                        if (s = e.sent, t.spuPromises = [], (c = t.data.pageCount) > 0) for (r = 0; r < c; r += 1) u = t.entity.get(l.TYPES.REQUEST).post("/@biz/menu/pagespu", {
                            pageNo: r + 1,
                            addressId: o,
                            userGeo: s
                        }).then(function(e) {
                            var i = e.code, n = e.data, o = e.message;
                            if (200 === i) {
                                var a = {}, s = n;
                                return t.data.categories.forEach(function(t, e) {
                                    var i, n, o;
                                    null == (i = t.itemList) || i.forEach(function(t, i) {
                                        !t.name && s[t.spuId] && (a["categories[".concat(e, "].itemList[").concat(i, "]")] = s[t.spuId]);
                                    }), null == (n = t.invalidList) || n.forEach(function(t, i) {
                                        !t.name && s[t.spuId] && (a["categories[".concat(e, "].invalidList[").concat(i, "]")] = s[t.spuId]);
                                    }), null == (o = t.children) || o.forEach(function(t, i) {
                                        var n, o;
                                        null == (n = t.itemList) || n.forEach(function(t, n) {
                                            !t.name && s[t.spuId] && (a["categories[".concat(e, "].children[").concat(i, "].itemList[").concat(n, "]")] = s[t.spuId]);
                                        }), null == (o = t.invalidList) || o.forEach(function(t, n) {
                                            !t.name && s[t.spuId] && (a["categories[".concat(e, "].children[").concat(i, "].invalidList[").concat(n, "]")] = s[t.spuId]);
                                        });
                                    });
                                }), t.setData(a), n;
                            }
                            d.default.getLimoRuntime().showToast({
                                title: o,
                                icon: "none"
                            });
                        }), t.spuPromises.push(u);
                        Promise.all(t.spuPromises || []).then(function() {
                            t.entity.isBound(l.TYPES.CART) && t.onCartDishChange(t.entity.get(l.TYPES.CART).getCartDataBySpu());
                        });

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        scrollToCate: function(t, e) {
            var i = this, n = this.data, o = n.menuSettings, a = n.categories;
            Promise.all(this.spuPromises || []).then(function() {
                if (o.categoryShowType === l.CATEGORY_SHOW_TYPE.FIRST_CATE_TOP) {
                    var n, s, c = -1;
                    if (a.forEach(function(e, i) {
                        var o;
                        e.id === t && (n = e, c = i, s = null == (o = e.children) ? void 0 : o[0]), (e.children || []).forEach(function(o) {
                            console.log(o.id, t), o.id === t && (n = e, s = o, c = i);
                        });
                    }), -1 === c) return void d.default.getLimoRuntime().showToast({
                        title: "当前门店暂无".concat(e || "该", "分类"),
                        icon: "none"
                    });
                    s && i.setData({
                        selectCategoryIndex: c,
                        selectCategory: "c".concat(n.id)
                    }, function() {
                        i.onTopSecCatTap({
                            currentTarget: {
                                dataset: {
                                    category: "c".concat(n.id),
                                    section: s.id,
                                    secCategory: t,
                                    id: "s".concat(t),
                                    title: s.name
                                }
                            }
                        });
                    });
                } else {
                    if (!(i.data.categories || []).find(function(e) {
                        return e.id === t;
                    })) return void d.default.getLimoRuntime().showToast({
                        title: "当前门店暂无".concat(e || "该", "分类"),
                        icon: "none"
                    });
                    i.onCatTap({
                        currentTarget: {
                            dataset: {
                                category: "c".concat(t),
                                section: "s".concat(t)
                            }
                        }
                    });
                }
                null == d.default || d.default.getLimoRuntime().triggerEvent("manualSlideIsShow", !1), 
                i.clearDishOptionCaches();
            });
        },
        scrollToAndOpenDish: function(t, i, n) {
            var o = this, a = this.data, s = a.categories, c = a.menuSettings, r = !1;
            t && n && (this.entity.get(l.TYPES.DISH).openDish(n, {
                spuId: t
            }), r = !0), Promise.all(this.spuPromises || []).then(function(n) {
                var a = null, u = -1;
                for (var h in s || []) {
                    var g, p = s[h];
                    if (a = [].concat(e(p.itemList), e((null == (g = p.children) ? void 0 : g.flatMap(function(t) {
                        return t.itemList;
                    })) || [])).find(function(e) {
                        return e.spuId === t;
                    })) {
                        var T, C = (null == c ? void 0 : c.dishShowType) === l.DISH_SHOW_TYPE.LARGE ? 184 : 176;
                        u = (null == (T = p.children) ? void 0 : T.length) > 0 ? C : 96, (null == c ? void 0 : c.categoryShowType) === l.CATEGORY_SHOW_TYPE.FIRST_CATE_TOP && (u = null != c && c.showSpuCategoryIcon ? 292 : 206, 
                        o.setData({
                            selectCategoryIndex: h,
                            selectCategory: "c".concat(s[h].id)
                        })), a.dishType || (a = n.find(function(e) {
                            var i;
                            return null == (i = e[t]) ? void 0 : i.dishType;
                        }) || a || {});
                        break;
                    }
                }
                a ? (!r && o.entity.get(l.TYPES.DISH).openDish(a.dishType, {
                    spuId: t
                }), o.scrollToDish(t, u), null == d.default || d.default.getLimoRuntime().triggerEvent("manualSlideIsShow", !1)) : o.entity.get(l.TYPES.LIMO).limoShowToast({
                    title: "「".concat(i || "该菜品", "」当前门店暂不可售"),
                    duration: 3e3
                }), o.clearDishOptionCaches();
            });
        },
        scrollToDish: function(t, e) {
            if (e > -1) {
                var i = d.default.getLimoRuntime().createSelectorQuery().in(this).select(".menu-list");
                i.node().exec(function(n) {
                    var o, a;
                    null == n || null == (o = n[0]) || null == (a = o.node) || a.scrollIntoView("#d".concat(t)), 
                    i.scrollOffset().exec(function(t) {
                        d.default.getLimoRuntime().getSystemInfo({
                            success: function(i) {
                                var n, o, a = i.windowWidth;
                                null == t || null == (n = t[0]) || null == (o = n.node) || o.scrollTo({
                                    top: t[1].scrollTop - e * (a / 750)
                                });
                            }
                        });
                    });
                });
            }
        },
        clearDishOptionCaches: function() {
            var t, e, i, n, o;
            null == (t = this.entity) || t.get(l.TYPES.OPTIONS).delete("spuId"), null == (e = this.entity) || e.get(l.TYPES.OPTIONS).delete("dishType"), 
            null == (i = this.entity) || i.get(l.TYPES.OPTIONS).delete("dishName"), null == (n = this.entity) || n.get(l.TYPES.OPTIONS).delete("cateId"), 
            null == (o = this.entity) || o.get(l.TYPES.OPTIONS).delete("cateName");
        },
        onInvalidList: function(t) {
            var e = t.currentTarget.dataset, i = e.catId, n = e.catSecIdx, a = this.data.categories.findIndex(function(t) {
                return t.id === i;
            });
            void 0 !== n ? this.setData(o({}, "categories[".concat(a, "].children[").concat(n, "].spread"), !this.data.categories[a].children[n].spread)) : this.setData(o({}, "categories[".concat(a, "].spread"), !this.data.categories[a].spread));
        },
        setMenuExtra: function() {
            var t = this.entity.get(l.TYPES.MENU_EXTRA).spuExtra;
            this.setData({
                spuExtra: t
            });
        },
        handleDealCouponCate: function(t) {
            this.setData({
                dealCouponCates: t
            });
        },
        dealCouponCount: function(t) {
            var e = t.cateCount;
            this.data.dealCouponCates.length && this.setData({
                "dealCouponCates[0].count": e
            });
        },
        showTooltip: function(t) {
            var e = this, i = t.currentTarget.dataset || {}, n = i.id, o = i.prompt;
            n && this.createSelectorQuery().select("#prompt".concat(n)).boundingClientRect().exec(function(t) {
                if (t && t[0]) {
                    var i = t[0], n = i.left, a = i.top, s = i.height;
                    e.entity.get(l.TYPES.LIMO).limoShowTooltip({
                        text: o,
                        placement: "bottom",
                        position: {
                            x: n + 1,
                            y: a + s + 8
                        }
                    });
                }
            });
        },
        initCustomStyle: function(t) {
            var e = t.activeSetting, i = void 0 === e ? {} : e, n = t.commonSetting, o = void 0 === n ? {} : n, a = i.textColor, c = void 0 === a ? "#222222" : a, r = i.backgroundColor, l = i.icon, u = void 0 === l ? "none" : l, d = o.textColor, h = void 0 === d ? "#999999" : d, g = o.backgroundColor, p = o.icon, T = void 0 === p ? "none" : p, C = {
                "--category--active--text--color": c,
                "--category--active--background--color": r,
                "--category--active--background--img": "url(".concat(u, ")"),
                "--category--common--text--color": h,
                "--category--common--background--color": g,
                "--category--common--background--img": "url(".concat(T, ")"),
                "--category-divideLine": t.divideLine ? "''" : "none"
            }, f = Object.entries(C).map(function(t) {
                var e = s(t, 2), i = e[0], n = e[1];
                return "".concat(i, ": ").concat(n);
            }).join(";");
            this.setData({
                categoryStyle: f
            });
        }
    }
});