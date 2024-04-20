var e, t = require("../../@babel/runtime/helpers/interopRequireDefault").default, a = require("../../@babel/runtime/helpers/defineProperty"), n = t(require("../../utils/http.js")), o = t(require("../../utils/config.js")), i = t(require("../../utils/util.js")), s = getApp(), r = require("../../component/template/tab.js");

Page({
    data: (e = {
        imgUrl: n.default.imgUrl,
        isGetUserInfoFlag: !1,
        isOrderingFlag: !1,
        orderingNum: 0,
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        loginState: !1,
        background: [],
        indicatorDots: !0,
        vertical: !1,
        autoplay: !1,
        interval: 2e3,
        duration: 500
    }, a(e, "imgUrl", n.default.imgUrl), a(e, "isFullSucreen", s.globalData.bottomMore), 
    e),
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function(e) {
        var t = this;
        if (r.tabbar("tabBar", 0, this, this.data.isGetUserInfoFlag, this.data.isFullSucreen), 
        console.log(e, "options"), null != e.q) {
            var a = decodeURIComponent(e.q);
            console.log(a, "options.scene");
            var n = i.default.getUrlParam(a, "storeid");
            wx.getStorage({
                key: "userInfo",
                success: function(e) {
                    t.setData({
                        userInfo: e.data,
                        loginState: !0,
                        isGetUserInfoFlag: !0
                    }), t.getOrderingData("wxScan", n);
                },
                fail: function() {
                    t.setData({
                        isOrderingFlag: !1,
                        isGetUserInfoFlag: !1
                    }), wx.navigateTo({
                        url: "/pages/choice_cabinet/choice_cabinet?storeId=" + n,
                        success: function(e) {},
                        fail: function(e) {}
                    });
                }
            });
        }
        this.getBannersList();
    },
    onShow: function() {
        var e = this;
        wx.getStorage({
            key: "userInfo",
            success: function(t) {
                e.setData({
                    userInfo: t.data,
                    loginState: !0,
                    isGetUserInfoFlag: !0
                }), r.tabbar("tabBar", 0, e, e.data.isGetUserInfoFlag, e.data.isFullSucreen), e.getOrderingData();
            },
            fail: function() {
                e.setData({
                    isOrderingFlag: !1,
                    isGetUserInfoFlag: !1
                }), r.tabbar("tabBar", 0, e, e.data.isGetUserInfoFlag, e.data.isFullSucreen);
            }
        });
    },
    goScanCodeFunc: function() {
        var e = this;
        wx.scanCode({
            success: function(t) {
                if ("QR_CODE" == t.scanType) if (-1 != t.result.indexOf(s.globalData.QRCodePrefix)) if (e.data.orderingNum > 0) wx.navigateTo({
                    url: "/pages/order_list/order_list?activeIndex=0",
                    success: function(e) {},
                    fail: function(e) {}
                }); else {
                    var a = i.default.getUrlParam(t.result, "storeid");
                    wx.navigateTo({
                        url: "/pages/choice_cabinet/choice_cabinet?storeId=" + a,
                        success: function(e) {},
                        fail: function(e) {}
                    });
                } else wx.showToast({
                    title: "请扫描柜子的二维码",
                    icon: "none",
                    duration: 3e3
                }); else wx.showToast({
                    title: "请扫描二维码",
                    icon: "none",
                    duration: 3e3
                });
            },
            fail: function() {
                console.log("扫码失败");
            }
        });
    },
    isHrefPage: function() {},
    onGotUserInfo: function() {
        var e = this;
        wx.getUserProfile({
            desc: "用于完善会员资料",
            success: function(t) {
                console.log(t), wx.login({
                    success: function(a) {
                        if (a.code) {
                            wx.setStorageSync("loginCode", a.code);
                            var o = {
                                code: a.code
                            };
                            n.default.decode(o, !1).then(function(a) {
                                console.log(a, "--decode--code"), 989 == a.code ? e.loginFuc(t) : (console.log("else   else-------decode--code"), 
                                wx.setStorage({
                                    key: "userInfo",
                                    data: a
                                }), e.setData({
                                    loginState: !0,
                                    isGetUserInfoFlag: !0,
                                    userInfo: a
                                }), r.tabbar("tabBar", 0, e, e.data.isGetUserInfoFlag, e.data.isFullSucreen), e.getOrderingData());
                            });
                        }
                    }
                });
            }
        });
    },
    loginFuc: function(e) {
        var t = this;
        wx.login({
            success: function(a) {
                var o = a;
                wx.setStorageSync("loginCode", o.code);
                var i = {
                    code: o.code,
                    signature: e.signature,
                    rawData: e.rawData,
                    encryptedData: e.encryptedData,
                    iv: e.iv
                };
                n.default.login(i, !1).then(function(e) {
                    console.log(e, "登陆------"), wx.setStorage({
                        key: "userInfo",
                        data: e.data
                    }), t.setData({
                        loginState: !0,
                        isGetUserInfoFlag: !0,
                        userInfo: e.data
                    }), r.tabbar("tabBar", 0, t, t.data.isGetUserInfoFlag, t.data.isFullSucreen);
                });
            }
        });
    },
    goNearlyFunc: function() {
        wx.navigateTo({
            url: "/pages/store_list/store_list",
            success: function(e) {},
            fail: function(e) {}
        });
    },
    goMyFunc: function() {
        wx.navigateTo({
            url: "/pages/info/info",
            success: function(e) {},
            fail: function(e) {}
        });
    },
    goOrderList: function() {
        wx.navigateTo({
            url: "/pages/order_list/order_list?activeIndex=0",
            success: function(e) {},
            fail: function(e) {}
        });
    },
    getOrderingData: function(e, t) {
        var a = this;
        o.default.postRequest({
            url: "/index/order",
            data: {
                memberId: this.data.userInfo.id
            },
            notShowLoading: !1,
            header: "application/x-www-form-urlencoded"
        }).then(function(n) {
            var o = !1;
            n > 0 ? (o = !0, e && "wxScan" == e && wx.navigateTo({
                url: "/pages/order_list/order_list?activeIndex=0",
                success: function(e) {},
                fail: function(e) {}
            })) : (o = !1, e && "wxScan" == e && t && wx.navigateTo({
                url: "/pages/choice_cabinet/choice_cabinet?storeId=" + t,
                success: function(e) {},
                fail: function(e) {}
            })), a.setData({
                isOrderingFlag: o,
                orderingNum: n
            });
        });
    },
    getBannersList: function() {
        var e = this;
        o.default.getRequest({
            url: "/index/banners",
            notShowLoading: !0
        }).then(function(t) {
            e.setData({
                background: t
            });
        });
    }
});