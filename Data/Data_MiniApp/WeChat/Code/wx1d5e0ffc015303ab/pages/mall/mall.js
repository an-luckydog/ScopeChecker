(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mall/mall" ], {
    "3b44": function(t, e, r) {
        var o = r("b114");
        r.n(o).a;
    },
    "66df": function(t, e, r) {
        r.r(e);
        var o = r("a362"), a = r("8feb");
        for (var n in a) [ "default" ].indexOf(n) < 0 && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(n);
        r("3b44");
        var i = r("f0c5"), s = Object(i.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    },
    "8feb": function(t, e, r) {
        r.r(e);
        var o = r("d324"), a = r.n(o);
        for (var n in o) [ "default" ].indexOf(n) < 0 && function(t) {
            r.d(e, t, function() {
                return o[t];
            });
        }(n);
        e.default = a.a;
    },
    "9d52": function(t, e, r) {
        (function(t, e) {
            var o = r("4ea4");
            r("a7b2"), o(r("66fd"));
            var a = o(r("66df"));
            t.__webpack_require_UNI_MP_PLUGIN__ = r, e(a.default);
        }).call(this, r("bc2e").default, r("543d").createPage);
    },
    a362: function(t, e, r) {
        r.d(e, "b", function() {
            return a;
        }), r.d(e, "c", function() {
            return n;
        }), r.d(e, "a", function() {
            return o;
        });
        var o = {
            actCom: function() {
                return r.e("components/act-com/act-com").then(r.bind(null, "c7c5"));
            },
            privacy: function() {
                return Promise.all([ r.e("common/vendor"), r.e("components/privacy/privacy") ]).then(r.bind(null, "fc8e"));
            },
            wxOpenSetting: function() {
                return r.e("components/wx-open-setting/wx-open-setting").then(r.bind(null, "3a64"));
            }
        }, a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.categoryDataTabs, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    g0: e.categoryName.substring(0, 6)
                };
            })), r = 0 == t.curSearchTab ? t.__map(t.categoryData, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    g1: e.categoryName.substring(0, 4)
                };
            }) : null, o = (0 == t.curSearchTab || 1 == t.curSearchTab || 2 == t.curSearchTab) && t.children.length >= 1, a = o ? null : 3 == t.curSearchTab && t.lipinkaList.length > 0, n = o || a ? null : 4 == t.curSearchTab && t.magicList.length > 0, i = t._f("toThousands")(t.totalMoney), s = t.totalVpoint > 0 ? t._f("toThousands")(t.totalVpoint) : null, c = t.cartShow ? t.__map(t.cartList, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    g5: e.goodsUrl.split(","),
                    f2: 0 != e.realPay ? t._f("toThousands")(t._f("keepTwoNum")(e.realPay / 100)) : null,
                    f3: 0 != e.realVpoints ? t._f("toThousands")(e.realVpoints) : null
                };
            }) : null, u = t.cartShow ? t._f("toThousands")(t.totalMoney) : null, l = t.cartShow && t.totalVpoint > 0 ? t._f("toThousands")(t.totalVpoint) : null;
            t._isMounted || (t.e0 = function(e) {
                t.cartShow = !1;
            }, t.e1 = function(e) {
                t.cartShow = !1;
            }, t.e2 = function(e) {
                e.stopPropagation(), t.cartShow = !0;
            }, t.e3 = function(t) {
                this.isShowPrivacy = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e,
                    l1: r,
                    g2: o,
                    g3: a,
                    g4: n,
                    f0: i,
                    f1: s,
                    l2: c,
                    f4: u,
                    f5: l
                }
            });
        }, n = [];
    },
    b114: function(t, e, r) {},
    d324: function(t, e, r) {
        (function(t) {
            var o = r("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(r("2eee")), n = o(r("9523")), i = o(r("278c")), s = o(r("c973")), c = r("0488"), u = (r("9b31"), 
            r("3d25"), o(r("69f2"))), l = r("9005"), p = r("490d"), h = r("c703"), g = r("a1cb"), d = r("8921"), f = o(r("2a18")), w = (0, 
            n.default)({
                mixins: [ u.default, f.default ],
                components: {
                    privacy: function() {
                        Promise.all([ r.e("common/vendor"), r.e("components/privacy/privacy") ]).then(function() {
                            return resolve(r("fc8e"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    wxOpenSetting: function() {
                        r.e("components/wx-open-setting/wx-open-setting").then(function() {
                            return resolve(r("3a64"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    shopComui: function() {
                        r.e("components/shop-comui").then(function() {
                            return resolve(r("bd05"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    actCom: function() {
                        r.e("components/act-com/act-com").then(function() {
                            return resolve(r("c7c5"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    appTitle: function() {
                        Promise.all([ r.e("common/vendor"), r.e("components/app-title") ]).then(function() {
                            return resolve(r("f252"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    giftcardComui: function() {
                        r.e("components/giftcard-comui").then(function() {
                            return resolve(r("f181"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    magicList: function() {
                        r.e("components/magic-list").then(function() {
                            return resolve(r("0e28"));
                        }.bind(null, r)).catch(r.oe);
                    }
                },
                data: function() {
                    return {
                        safeAreaTop: getApp().globalData.safeAreaTop ? getApp().globalData.safeAreaTop + "px" : "64rpx",
                        qpImgUrl: c.qpImgUrl + "mall/",
                        goodsImgRoot: c.config.goodsImgRoot,
                        cardCur: 0,
                        swiperList: [],
                        curTop: !1,
                        curBottom: !1,
                        curTopXL: !1,
                        curBottomXL: !1,
                        arrowUp: c.qpImgUrl + "mall/arrowDown.png",
                        arrowDown: c.qpImgUrl + "mall/arrowDown.png",
                        arrowUpXL: c.qpImgUrl + "mall/arrowDown.png",
                        arrowDownXL: c.qpImgUrl + "mall/arrowDown.png",
                        curArrow: c.qpImgUrl + "mall/arrowTop.png",
                        categoryType: "-1",
                        categoryData: [],
                        children: [],
                        currentPage: 1,
                        count: 50,
                        categoryParent: "",
                        hasMore: !1,
                        cartList: [],
                        cartNumShow: !1,
                        cartShow: !1,
                        cartNum: "0",
                        totalMoney: "0.00",
                        totalVpoint: "0",
                        pricePaixu: "",
                        formPage: "",
                        showPrivacy: !1,
                        curSearchType: 0,
                        curSearchTypepayType: "",
                        isShowPrivacy: !1,
                        scrollLeft: 0,
                        n: 0,
                        wxOpenSettingIsShow: !1,
                        wxOpenSettingIsStartAnimation: !1,
                        searchTabs: [ "全部", "秒杀", "拼团", "礼品卡", "魔盒优品" ],
                        curSearchTab: 0,
                        isGroupBuying: "",
                        secKill: "",
                        categoryDataTabs: [ {
                            categoryName: "会员商城",
                            categoryType: "1"
                        }, {
                            categoryName: "啤酒花兑换",
                            categoryType: "2"
                        } ],
                        categoryTypeTab: "0",
                        showSalesOrderType: "",
                        actLists: [],
                        surplusVpoints: 0,
                        priceOrderType: "",
                        goodsName: "",
                        lipinkaList: [],
                        magicList: [],
                        isShowSearchType: !0
                    };
                },
                computed: {},
                onLoad: function(t) {
                    this.setTabBarIndex(1);
                },
                onHide: function() {
                    getApp().globalData.mallSource = "", this.formPage = "", getApp().globalData.mallCurTab = "";
                },
                onShow: function() {
                    var t = this;
                    return (0, s.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, (0, d.getXCXOpenid)();

                              case 2:
                                return e.sent, e.next = 5, (0, d.getGHOpenid)();

                              case 5:
                                e.sent, t.init();

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                methods: {
                    handleJumpEventNew: function(e) {
                        console.log("asdfsad"), console.log(e);
                        var r = e.jumpTyp, o = e.jumpUrl, a = e.picJumpUrl, n = e.appid;
                        "1" == r ? t.navigateTo({
                            url: "/pages/module/webview?target=".concat(o)
                        }) : "2" == r ? t.navigateTo({
                            url: "/pages/module/imgWrap?target=".concat(o || a)
                        }) : "3" == r ? t.navigateToMiniProgram({
                            appId: n,
                            path: o
                        }) : "4" == r && t.reLaunch({
                            url: o
                        });
                    },
                    init: function() {
                        var t = this;
                        return (0, s.default)(a.default.mark(function e() {
                            var r, o, n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return (r = getCurrentPages())[r.length - 1], console.log(t.formPage), e.next = 5, 
                                    t.getCategory();

                                  case 5:
                                    t.getActivityZoneInfoHandel(), "zunxiangka" == getApp().globalData.mallSource && (t.n++, 
                                    o = t.categoryData, n = o.length - 1, t.categoryType = n, t.scrollLeftToEnd()), 
                                    "jfhw" == getApp().globalData.from ? (t.categoryType = "-2", t.onType(2, -2), getApp().globalData.from = !1) : "pageOfGoodsDetail" == t.formPage ? console.log("从详情回来") : (t.children = [], 
                                    0 == t.categoryParent ? (console.log(22222), console.log(getApp().globalData.mallCurTab), 
                                    1 == getApp().globalData.mallCurTab ? setTimeout(function() {
                                        t.categoryDataTabsChange(1, 2);
                                    }, 1e3) : t.getgoods(2)) : t.getgoods(t.categoryParent)), console.log("-------------querySwiperlist-home------------------"), 
                                    t.querySwiperlist("2", getApp().globalData.openid).then(function(e) {
                                        console.log(e);
                                        var r = [];
                                        e && e.forEach(function(t, e) {
                                            var o = Object.assign(t, {
                                                id: e,
                                                type: "image",
                                                url: t.picUrl,
                                                className: "mall-" + (e + 1)
                                            });
                                            r.push(o);
                                        }), t.swiperList = r;
                                    }), t.isShowPrivacy = !1, setTimeout(function() {
                                        t.isShowPrivacy = !0;
                                    }, 100), t.getCartByUserKey(), t.getUserInfoNew();

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getActivityZoneInfoHandel: function() {
                        var t = this;
                        return (0, s.default)(a.default.mark(function e() {
                            var r;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.getActivityZoneInfo(1);

                                  case 2:
                                    r = e.sent, t.actLists = null == r ? void 0 : r.adPubDTOList;

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    searchTabsChange: function(t) {
                        this.curSearchTab = t, this.curTop = !1, this.curBottom = !1, this.curTopXL = !1, 
                        this.curBottomXL = !1, this.priceOrderType = "", this.showSalesOrderType = "", this.arrowUp = this.qpImgUrl + "arrowDown.png", 
                        this.arrowDown = this.qpImgUrl + "arrowDown.png", this.arrowUpXL = this.qpImgUrl + "arrowDown.png", 
                        this.arrowDownXL = this.qpImgUrl + "arrowDown.png", this.pricePaixu = "", this.children = [], 
                        this.currentPage = 1, this.curSearchType = 0, this.curSearchTypepayType = "", 0 == t ? (this.isGroupBuying = "", 
                        this.secKill = "", this.categoryType = -1, this.categoryParent = "", this.getgoods(), 
                        this.isShowSearchType = !0) : 1 == t ? (this.isGroupBuying = "", this.secKill = "0", 
                        this.getgoods(), this.isShowSearchType = !0) : 2 == t ? (this.isGroupBuying = "1", 
                        this.secKill = "", this.getgoods(), this.isShowSearchType = !0) : 3 == t ? (this.lipinkaList = [], 
                        this.getQueryGiftCardStatus(), this.isShowSearchType = !1) : 4 == t && (this.magicList = [], 
                        this.magicGoods(), this.isShowSearchType = !1);
                    },
                    scrollLeftToEnd: function() {
                        var t = this.categoryData.length + this.n;
                        this.scrollLeft = 78 * t, console.log(this.scrollLeft);
                    },
                    toCart: function() {
                        t.navigateTo({
                            url: "/pagesMall/mall/cart"
                        });
                    },
                    getCartByUserKey: function() {
                        var t = this;
                        return (0, s.default)(a.default.mark(function e() {
                            var r, o, n, i, s, c;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, (0, l.getCartByUserKey)();

                                  case 2:
                                    if (r = e.sent, o = r.result, n = r.reply, 0 == o.code && 0 == o.businessCode) if (t.cartList = [], 
                                    t.cartList = n.list, console.log(t.cartList), (i = t.children).forEach(function(t) {
                                        t.specialChooseNum = 0;
                                    }), t.children = i, "" == t.cartList || null == t.cartList) for (s in t.cartList = [], 
                                    t.cartNumShow = !1, t.cartShow = !1, t.children) t.children[s].specialChooseNum = 0; else if (0 != t.cartList.length) for (c in t.cartList) for (s in t.cartList[c].specialChooseNum = t.cartList[c].exchangeNum, 
                                    t.children) t.children[s].goodsId == t.cartList[c].goodsId && (console.log(t.cartList[c].specialChooseNum), 
                                    t.children[s].specialChooseNum = t.cartList[c].specialChooseNum);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    addOrReduceCartItem: function(e, r) {
                        var o = arguments, n = this;
                        return (0, s.default)(a.default.mark(function i() {
                            var s, c, u, p;
                            return a.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return s = o.length > 2 && void 0 !== o[2] ? o[2] : 0, c = {
                                        goodsId: e.goodsId,
                                        operateNum: "add" == r ? "+1" : "-1",
                                        operateType: "1",
                                        joinTimeFlag: s
                                    }, a.next = 4, (0, l.operateGoodsCart)(c);

                                  case 4:
                                    if (u = a.sent, p = u.result, u.reply, 0 != p.code || 0 != p.businessCode) {
                                        a.next = 11;
                                        break;
                                    }
                                    n.getCartByUserKey(), a.next = 13;
                                    break;

                                  case 11:
                                    return t.showToast({
                                        title: p.msg,
                                        duration: 2e3,
                                        icon: "none"
                                    }), a.abrupt("return");

                                  case 13:
                                  case "end":
                                    return a.stop();
                                }
                            }, i);
                        }))();
                    },
                    delCartItem: function(e) {
                        var r = this;
                        return (0, s.default)(a.default.mark(function o() {
                            var n, i, s, c;
                            return a.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return n = [], e.forEach(function(t) {
                                        n.push(t.goodsId);
                                    }), i = {
                                        goodsId: n
                                    }, o.next = 5, (0, l.deleteByGoodsKeys)(i);

                                  case 5:
                                    s = o.sent, c = s.result, s.reply, 0 == c.code && 0 == c.businessCode ? (t.showToast({
                                        title: "已成功删除",
                                        duration: 2e3,
                                        icon: "none"
                                    }), r.getCartByUserKey()) : t.showToast({
                                        title: c.msg,
                                        duration: 2e3,
                                        icon: "none"
                                    });

                                  case 9:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    toPrivacy: function() {
                        t.navigateTo({
                            url: "/pages/webview/webview?type=privacy"
                        });
                    },
                    confirm: function() {
                        this.showPrivacy = !1;
                    },
                    addSku: function(e, r, o) {
                        var n = this;
                        return (0, s.default)(a.default.mark(function i() {
                            return a.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    if (1 != r) {
                                        a.next = 5;
                                        break;
                                    }
                                    return t.showToast({
                                        title: "抱歉，此商品暂停兑换",
                                        duration: 2e3,
                                        icon: "none"
                                    }), a.abrupt("return");

                                  case 5:
                                    if (!(n.children[e].specialChooseNum >= 50)) {
                                        a.next = 9;
                                        break;
                                    }
                                    return t.showToast({
                                        title: "已达添加上限",
                                        duration: 2e3,
                                        icon: "none"
                                    }), a.abrupt("return");

                                  case 9:
                                    if (20 != n.cartList.length) {
                                        a.next = 12;
                                        break;
                                    }
                                    return t.showToast({
                                        title: "已达可添加品类上限",
                                        duration: 2e3,
                                        icon: "none"
                                    }), a.abrupt("return");

                                  case 12:
                                    n.addOrReduceCartItem(o, "add", "0");

                                  case 13:
                                  case "end":
                                    return a.stop();
                                }
                            }, i);
                        }))();
                    },
                    emptyCart: function() {
                        var e = this;
                        return (0, s.default)(a.default.mark(function r() {
                            return a.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    console.log(e.cartList), t.showModal({
                                        title: "温馨提示",
                                        content: "您确定要删除吗？",
                                        success: function(t) {
                                            t.confirm ? (console.log("用户点击确定"), console.log(e.cartList), e.delCartItem(e.cartList)) : t.cancel && console.log("用户点击取消");
                                        }
                                    });

                                  case 2:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    reduceFuc: function(t) {
                        this.cartList[t].specialChooseNum <= 1 ? this.deleteOne(t) : this.addOrReduceCartItem(this.cartList[t], "reduce", "1");
                    },
                    increaseFuc: function(e) {
                        this.cartList[e].specialChooseNum >= 51 ? t.showToast({
                            title: "已达添加上限",
                            duration: 2e3,
                            icon: "none"
                        }) : this.addOrReduceCartItem(this.cartList[e], "add", "1");
                    },
                    deleteOne: function(e) {
                        var r = this;
                        t.showModal({
                            title: "温馨提示",
                            content: "您确定要删除吗？",
                            success: function(t) {
                                if (t.confirm) return console.log("用户点击确定"), void r.addOrReduceCartItem(r.cartList[e], "reduce", "1");
                                t.cancel && console.log("用户点击取消");
                            }
                        });
                    },
                    getCategory: function() {
                        var t = this;
                        return (0, s.default)(a.default.mark(function e() {
                            var r, o, n, i;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return r = {}, e.next = 3, (0, l.getFistCategoryType)(r);

                                  case 3:
                                    o = e.sent, n = o.result, i = o.reply, 0 == n.businessCode && 0 == n.code && (t.categoryData = i);

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    onType: function(t, e) {
                        var r = this;
                        return (0, s.default)(a.default.mark(function o() {
                            return a.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    r.curTop = !1, r.curBottom = !1, r.curTopXL = !1, r.curBottomXL = !1, r.arrowUp = r.qpImgUrl + "arrowDown.png", 
                                    r.arrowDown = r.qpImgUrl + "arrowDown.png", r.arrowUpXL = r.qpImgUrl + "arrowDown.png", 
                                    r.arrowDownXL = r.qpImgUrl + "arrowDown.png", r.pricePaixu = "", r.children = [], 
                                    r.currentPage = 1, r.categoryType = t, r.curSearchType = 0, r.curSearchTypepayType = "", 
                                    r.categoryParent = e, r.priceOrderType = "", r.showSalesOrderType = "", r.getgoods(e);

                                  case 18:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    categoryDataTabsChange: function(t, e) {
                        var r = this;
                        return (0, s.default)(a.default.mark(function o() {
                            return a.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    r.curTop = !1, r.curBottom = !1, r.curTopXL = !1, r.curBottomXL = !1, r.arrowUp = r.qpImgUrl + "arrowDown.png", 
                                    r.arrowDown = r.qpImgUrl + "arrowDown.png", r.arrowUpXL = r.qpImgUrl + "arrowDown.png", 
                                    r.arrowDownXL = r.qpImgUrl + "arrowDown.png", r.pricePaixu = "", r.children = [], 
                                    r.currentPage = 1, r.categoryTypeTab = t, r.curSearchType = 0, r.curSearchTypepayType = "", 
                                    r.priceOrderType = "", r.showSalesOrderType = "", console.log("this.curSearchTa"), 
                                    console.log(r.curSearchTab), 3 == r.curSearchTab ? (r.lipinkaList = [], r.getQueryGiftCardStatus(), 
                                    r.isShowSearchType = !1) : 4 == r.curSearchTab ? (r.magicList = [], r.magicGoods(), 
                                    r.isShowSearchType = !1) : r.getgoods(e);

                                  case 19:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    getMore: function() {
                        this.currentPage++, this.getgoods(this.categoryParent, this.pricePaixu);
                    },
                    getgoods: function(e, r) {
                        var o = this;
                        return (0, s.default)(a.default.mark(function r() {
                            var n, i, s, c, u, p;
                            return a.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return console.log("categoryParentcategoryParent", e), t.showLoading({
                                        title: "加载中..."
                                    }), n = {
                                        currentPage: o.currentPage,
                                        goodsName: o.goodsName,
                                        count: o.count,
                                        categoryParent: o.categoryParent,
                                        isCommend: "",
                                        payType: "",
                                        priceOrderType: o.priceOrderType,
                                        youPinFlag: "1",
                                        isGroupBuying: o.isGroupBuying,
                                        showSalesOrderType: o.showSalesOrderType,
                                        secKill: o.secKill
                                    }, o.priceOrderType || (n.priceOrderType = ""), console.log("this.categoryType"), 
                                    console.log(o.categoryType), "hebei" == (getApp().globalData.projectServerName || t.getStorageSync("projectServerName")) && (n.exchangeChannel = "6"), 
                                    0 == o.categoryTypeTab ? (n.exchangeChannel = "6", n.payType = "2") : 1 == o.categoryTypeTab && (n.payType = "4", 
                                    n.exchangeChannel = "6"), r.next = 11, (0, l.getShopGoodsRequst)(n);

                                  case 11:
                                    if (i = r.sent, s = i.result, c = i.reply, t.hideLoading(), 0 == s.code) if (0 == s.businessCode) {
                                        if (c && (o.children = o.children.concat(c), c.length < o.count ? o.hasMore = !1 : o.hasMore = !0, 
                                        0 != o.cartList.length)) for (u in o.cartList) for (p in o.children) o.children[p].goodsId == o.cartList[u].goodsId && (console.log(o.cartList[u].specialChooseNum), 
                                        o.children[p].specialChooseNum = o.cartList[u].specialChooseNum);
                                    } else t.showModal({
                                        title: "提示",
                                        content: s.msg
                                    }); else t.showModal({
                                        title: "提示",
                                        content: s.msg
                                    });

                                  case 16:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    getQueryGiftCardStatus: function() {
                        var t = this;
                        return (0, s.default)(a.default.mark(function e() {
                            var r, o, n, i;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return r = {}, e.next = 3, (0, p.queryGiftCardStatus)(r);

                                  case 3:
                                    o = e.sent, n = o.result, i = o.reply, 0 == n.businessCode && 0 == n.code && (t.lipinkaList = i);

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    magicGoods: function() {
                        var e = this;
                        return (0, s.default)(a.default.mark(function r() {
                            var o, n, i, s;
                            return a.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), o = {
                                        currentPage: 1,
                                        count: 5,
                                        youPinFlag: 0
                                    }, "hebei" == (getApp().globalData.projectServerName || t.getStorageSync("projectServerName")) && (o.exchangeChannel = "6"), 
                                    0 == e.categoryTypeTab ? (o.exchangeChannel = "6", o.payType = "2") : 1 == e.categoryTypeTab && (o.payType = "4", 
                                    o.exchangeChannel = "1"), r.next = 7, (0, l.getShopGoodsRequst)(o);

                                  case 7:
                                    n = r.sent, i = n.result, s = n.reply, t.hideLoading(), 0 == i.businessCode ? e.magicList = e.magicList.concat(s) : t.showModal({
                                        title: "提示",
                                        content: jo.result.msg
                                    });

                                  case 12:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    swChange: function(t) {
                        this.cardCur = t.detail.current;
                    },
                    upSort: function() {
                        this.children = [], this.currentPage = 1, this.priceOrderType = "", this.showSalesOrderType = "", 
                        this.arrowUpXL = this.qpImgUrl + "arrowDown.png", this.arrowDownXL = this.qpImgUrl + "arrowDown.png", 
                        this.curTopXL = !1, this.curBottomXL = !1, 0 == this.curTop ? (this.arrowUp = this.qpImgUrl + "arrowTop.png", 
                        this.arrowDown = this.qpImgUrl + "arrowDown.png", this.curTop = !0, this.curBottom = !1, 
                        this.pricePaixu = "up", this.priceOrderType = "0", this.getgoods(this.categoryParent, this.pricePaixu)) : (this.arrowUp = this.qpImgUrl + "arrowDown.png", 
                        this.arrowDown = this.qpImgUrl + "arrowTop.png", this.curTop = !1, this.curBottom = !0, 
                        this.pricePaixu = "down", this.priceOrderType = "1", this.getgoods(this.categoryParent, this.pricePaixu));
                    },
                    upSortXL: function() {
                        this.children = [], this.currentPage = 1, this.priceOrderType = "", this.showSalesOrderType = "", 
                        this.arrowUp = this.qpImgUrl + "arrowDown.png", this.arrowDown = this.qpImgUrl + "arrowDown.png", 
                        this.curTop = !1, this.curBottom = !1, this.pricePaixu = "", this.priceOrderType = "", 
                        0 == this.curTopXL ? (this.arrowUpXL = this.qpImgUrl + "arrowTop.png", this.arrowDownXL = this.qpImgUrl + "arrowDown.png", 
                        this.curTopXL = !0, this.curBottomXL = !1, this.showSalesOrderType = 0, this.getgoods(this.categoryParent, this.pricePaixu)) : (this.arrowUpXL = this.qpImgUrl + "arrowDown.png", 
                        this.arrowDownXL = this.qpImgUrl + "arrowTop.png", this.curTopXL = !1, this.curBottomXL = !0, 
                        this.showSalesOrderType = 1, this.getgoods(this.categoryParent, this.pricePaixu));
                    },
                    toGoodsDetail: function(e, r) {
                        0 == r ? t.navigateTo({
                            url: "/pagesMall/mall/goodsDetailZunXiang?id=" + e + "&type=" + this.categoryParent
                        }) : t.navigateTo({
                            url: "/pagesMall/mall/goodsDetail?id=" + e + "&type=" + this.categoryParent
                        });
                    },
                    showCart: function() {
                        0 != this.cartList.length ? this.cartShow = !0 : t.showToast({
                            title: "您还没有选购商品",
                            duration: 2e3,
                            icon: "none"
                        });
                    },
                    searchTypeChange: function(t) {
                        this.curTop = !1, this.curBottom = !1, this.curTopXL = !1, this.curBottomXL = !1, 
                        this.arrowUp = this.qpImgUrl + "arrowDown.png", this.arrowDown = this.qpImgUrl + "arrowDown.png", 
                        this.arrowUpXL = this.qpImgUrl + "arrowDown.png", this.arrowDownXL = this.qpImgUrl + "arrowDown.png", 
                        this.pricePaixu = "", this.children = [], this.currentPage = 1, this.curSearchType = t, 
                        this.curSearchTypepayType = 0 == t ? "" : t, this.getgoods();
                    },
                    searchName: function() {
                        this.children = [], this.currentPage = 1, this.getgoods();
                    },
                    toTop: function() {
                        t.pageScrollTo({
                            scrollTop: 0,
                            duration: 100
                        });
                    },
                    onPageScroll: function(t) {
                        t.scrollTop > 10 ? this.flag = !0 : this.flag = !1;
                    },
                    checkUserLocation: function() {
                        var t = this;
                        return (0, s.default)(a.default.mark(function e() {
                            var r, o;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return console.log("checkUserLocation---"), r = t, e.next = 4, (0, g.getSettingLocation)();

                                  case 4:
                                    o = e.sent, console.log(getApp().globalData.userLocation), getApp().globalData.userLocation ? (console.log("有微信定位地址"), 
                                    t.init()) : (console.log("没有位置"), 0 == o ? r.wxOpenSettingIsShow = !0 : (0, g.getLocation)().then(function() {
                                        var e = Array.from(arguments.length <= 0 ? void 0 : arguments[0]), r = (0, i.default)(e, 2);
                                        r[0], r[1], t.init();
                                    }));

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    wosOpenSetting: function() {
                        var e = this;
                        t.openSetting({
                            complete: function(t) {
                                console.log("我是设置里打开授权地理位置"), e.wxOpenSettingIsShow = !1, e.init();
                            }
                        });
                    },
                    WxOpenSettingColse: function(t) {
                        this.wxOpenSettingIsShow = !1, this.init();
                    },
                    getUserInfoNew: function() {
                        var t = this;
                        return (0, s.default)(a.default.mark(function e() {
                            var r, o, n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, (0, h.userInfo)();

                                  case 2:
                                    r = e.sent, o = r.result, n = r.reply, 0 == o.businessCode && 0 == o.code && (t.surplusVpoints = n.accountInfo.surplusVpoints);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    toScoreList: function() {
                        t.navigateTo({
                            url: "/pagesPersonal/scoreList/scoreList"
                        });
                    }
                }
            }, "computed", {
                numOfCart: function() {
                    var t = 0, e = 0, r = 0;
                    for (var o in this.cartList) t += parseInt(this.cartList[o].specialChooseNum), e += this.cartList[o].realPay / 100 * this.cartList[o].specialChooseNum, 
                    r += this.cartList[o].realVpoints * this.cartList[o].specialChooseNum;
                    this.cartNum = t, this.totalMoney = parseFloat(e).toFixed(2), this.totalVpoint = r, 
                    this.cartNum > 0 || this.totalMoney > 0 ? this.cartNumShow = !0 : this.cartNumShow = !1, 
                    this.cartNum >= 100 && (this.cartNum = "99+");
                }
            });
            e.default = w;
        }).call(this, r("543d").default);
    }
}, [ [ "9d52", "common/runtime", "common/vendor" ] ] ]);