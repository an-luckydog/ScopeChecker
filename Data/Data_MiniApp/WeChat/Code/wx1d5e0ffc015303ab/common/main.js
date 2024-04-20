require("../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "0206": function(e, t, a) {
        (function(e, t, o) {
            var n = a("4ea4"), i = n(a("9523"));
            a("a7b2");
            var r = n(a("66fd")), c = n(a("d473")), s = n(a("1d17"));
            a("76d6"), a("6365");
            var l = n(a("03bc"));
            function p(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), a.push.apply(a, o);
                }
                return a;
            }
            for (var d in e.__webpack_require_UNI_MP_PLUGIN__ = a, t.removeStorageSync("beforePath"), 
            s.default) if (s.default.hasOwnProperty(d)) {
                var u = s.default[d];
                r.default.filter(d, u);
            }
            r.default.component("app", function() {
                Promise.all([ a.e("common/vendor"), a.e("components/privacy/privacy") ]).then(function() {
                    return resolve(a("fc8e"));
                }.bind(null, a)).catch(a.oe);
            }), r.default.config.productionTip = !1, r.default.prototype.$md5 = l.default, r.default.prototype.$ToPrivacyWX = function() {
                t.openPrivacyContract({
                    success: function(e) {
                        console.log("openPrivacyContract success");
                    },
                    fail: function(e) {
                        console.error("openPrivacyContract fail", e);
                    }
                });
            }, c.default.mpType = "app", o(new r.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(a), !0).forEach(function(t) {
                        (0, i.default)(e, t, a[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                    });
                }
                return e;
            }({}, c.default))).$mount(), r.default.mixin({
                methods: {
                    setTabBarIndex: function(e) {
                        "function" == typeof this.$mp.page.getTabBar && this.$mp.page.getTabBar() && this.$mp.page.getTabBar().setData({
                            selected: e
                        });
                    }
                }
            });
        }).call(this, a("bc2e").default, a("543d").default, a("543d").createApp);
    },
    "322c": function(e, t, a) {},
    "70f0": function(e, t, a) {
        var o = a("322c");
        a.n(o).a;
    },
    7294: function(e, t, a) {
        (function(e, o) {
            var n = a("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i, r = n(a("9523")), c = a("76d6"), s = a("0488"), l = {}, p = (i = {
                onLaunch: function(t) {
                    l.methodName = "onLaunch", l.timeStamp = new Date().getTime(), l.path = t.path, 
                    l.scene = t.scene, this.$scope.globalData.scene = t.scene, this.checkIsIPhoneX(), 
                    this.updateApp(), this.share(), e.loadFontFace({
                        family: "Winner-NarrowMedium",
                        source: 'url("https://w.vjifen.com/v/font/Winner-NarrowMedium.ttf")',
                        global: !0,
                        complete: function(e) {
                            console.log("loadFontFace", e);
                        }
                    });
                },
                globalData: (0, r.default)({
                    zhongqiuImgs: "https://xcxsite.vjifen.com/v/zhongqiudonghua/",
                    GDqp2021: "https://xcxsite.vjifen.com/v/static/hnqp2022/saoDianDe",
                    getIndexAd: !0,
                    imgUrl: "https://xcxsite.vjifen.com/v/static",
                    hbMallImg: "https://xcxsite.vjifen.com/v/hbMall/"
                }, "zhongqiuImgs", "https://xcxsite.vjifen.com/v/zhongqiudonghua/"),
                methods: {
                    watch: function(e, t) {
                        var a = this.globalData;
                        console.log(a), Object.defineProperty(a, t, {
                            configurable: !0,
                            enumerable: !0,
                            set: function(t) {
                                this._consumerGoodsStatus = t, e(t);
                            },
                            get: function(e) {
                                return this._consumerGoodsStatus;
                            }
                        });
                    },
                    share: function() {
                        o.onAppRoute(function(e) {
                            var t = getCurrentPages(), a = t[t.length - 1], n = a.route;
                            [ "pagesMall/mall/goodsDetail", "pagesMall/pintuan/ptDetail", "pagesGiftCard/giftOrderInfo", "pagesGiftCard/giftPayOrGive", "pages_120th/index/index", "pages_120th/Islander/picIslanders", "pages_120th/welfareCenter/ferrisWheel" ].includes(n) || (o.showShareMenu({
                                withShareTicket: !0
                            }), a.onShareAppMessage = function() {
                                return {
                                    title: "即刻探索青岛啤酒畅享汇",
                                    imageUrl: getApp().globalData.swiperList[0].picUrl || "",
                                    path: "pages/index/index"
                                };
                            });
                        });
                    },
                    updateApp: function() {
                        var t = e.getUpdateManager();
                        t.onCheckForUpdate(function(e) {
                            console.log("版本", e.hasUpdate);
                        }), t.onUpdateReady(function() {
                            e.showModal({
                                title: "更新提示",
                                content: "新版本已经准备好，是否重启应用？",
                                success: function(e) {
                                    e.confirm && t.applyUpdate();
                                }
                            });
                        }), t.onUpdateFailed(function() {});
                    },
                    checkIsIPhoneX: function() {
                        var t = this;
                        e.getSystemInfo({
                            complete: function(a) {
                                e.setStorage({
                                    key: "userSystemInfo",
                                    data: a
                                });
                                var n = o.getSystemInfoSync().screenHeight, i = o.getSystemInfoSync().safeArea.bottom;
                                t.$scope.globalData.screenHeight = n, t.$scope.globalData.safeBottom = n - i, t.$scope.globalData.safeAreaTop = o.getSystemInfoSync().safeArea.top || 30, 
                                -1 === a.model.indexOf("iPhone X") && -1 === a.model.indexOf("iPhone 11") || (t.$scope.globalData.isIphoneX = !0), 
                                "android" == a.platform ? (t.$scope.globalData.safeHeight = a.statusBarHeight ? a.statusBarHeight : 20, 
                                t.$scope.globalData.customBarHeight = 48, t.$scope.globalData.safeTop = a.statusBarHeight + 8, 
                                t.$scope.globalData.phoneModel = "android") : (t.$scope.globalData.safeHeight = a.statusBarHeight ? a.statusBarHeight : 20, 
                                t.$scope.globalData.customBarHeight = 44, t.$scope.globalData.safeTop = a.statusBarHeight + 4, 
                                t.$scope.globalData.phoneModel = "ios"), a.screenHeight / a.screenWidth > 1.8 ? (t.$scope.globalData.isLongScreen = !0, 
                                t.$scope.globalData.isBigScreen = !0) : (t.$scope.globalData.isLongScreen = !1, 
                                t.$scope.globalData.isBigScreen = !1);
                            }
                        });
                    }
                }
            }, (0, r.default)(i, "globalData", {
                imgUrl: "https://xcxsite.vjifen.com/v/static",
                goodsImgRoot: "https://img.vjifen.com/images/vma/",
                hbMallImg: "https://xcxsite.vjifen.com/v/hbMall/",
                zhongqiuImgs: "https://xcxsite.vjifen.com/v/zhongqiudonghua/",
                sgUrl: "https://xcxact.vjifen.com",
                openscan: !0,
                getIndexAd: !0
            }), (0, r.default)(i, "onShow", function(t) {
                var a = t.path;
                this.$scope.globalData.onShowOptionsPath = a;
                var o = {
                    province: "河北省",
                    projectServerName: "hebei",
                    projectFlag: "e",
                    appid: "wx3c864d331a1a74bb",
                    vjfAppid: "wxe2a3ba29612c0e0e",
                    payAppid: "wxa42a20606316e2e9"
                };
                this.$scope.globalData.curProvince = o || "", this.$scope.globalData.projectServerName = null == o ? void 0 : o.projectServerName, 
                this.$scope.globalData.projectFlag = null == o ? void 0 : o.projectFlag, e.setStorageSync("curProvince", o), 
                e.setStorageSync("projectServerName", null == o ? void 0 : o.projectServerName), 
                e.setStorageSync("projectFlag", null == o ? void 0 : o.projectFlag);
            }), (0, r.default)(i, "onHide", function() {
                console.log("App Hide");
                var t = getCurrentPages()[getCurrentPages().length - 1].route, a = {
                    openid: this.$scope.globalData.openid || e.getStorageSync("openid").openid,
                    userid: this.$scope.globalData.xcxOpenid || e.getStorageSync("xcxOpenid").xcxOpenid,
                    dataType: 0,
                    serverName: "hebei",
                    appid: "wx1d5e0ffc015303ab",
                    methodList: [ {
                        methodName: "AppHide",
                        timeStamp: new Date().getTime(),
                        path: t,
                        quitStatus: "0",
                        scene: this.$scope.globalData.scene
                    } ]
                };
                "{}" != JSON.stringify(l) && (a.methodList.push(l), l = {}), (0, c.report)(a), s.config.isOnline && e.setClipboardData({
                    data: getApp().globalData.copeText || "",
                    complete: function() {
                        e.showToast({
                            title: "",
                            icon: "loading",
                            duration: 0
                        }), e.hideToast();
                    }
                });
            }), (0, r.default)(i, "onError", function(t) {
                if ("0" == this.$scope.globalData.errorStatus) {
                    var a = {
                        timeStamp: new Date().getTime(),
                        openid: this.$scope.globalData.openid || e.getStorageSync("openid").openid,
                        userid: this.$scope.globalData.xcxOpenid || e.getStorageSync("xcxOpenid").xcxOpenid,
                        dataType: 1,
                        serverName: "hebei",
                        appid: "wx1d5e0ffc015303ab",
                        errMsg: t.stack
                    };
                    (0, c.report)(a);
                }
            }), i);
            t.default = p;
        }).call(this, a("543d").default, a("bc2e").default);
    },
    d473: function(e, t, a) {
        a.r(t);
        var o = a("dd88");
        for (var n in o) [ "default" ].indexOf(n) < 0 && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        a("70f0");
        var i = a("f0c5"), r = Object(i.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = r.exports;
    },
    dd88: function(e, t, a) {
        a.r(t);
        var o = a("7294"), n = a.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = n.a;
    }
}, [ [ "0206", "common/runtime", "common/vendor" ] ] ]);