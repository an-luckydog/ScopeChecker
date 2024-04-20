var t = require("../../@babel/runtime/helpers/interopRequireDefault").default, a = t(require("../../utils/http.js")), e = t(require("../../utils/config.js")), s = require("../../component/template/tab.js"), o = getApp();

Page({
    data: {
        userInfo: {},
        loginState: !1,
        loading: !1,
        loaded: !1,
        orderingNum: 0,
        params: {
            latitude: 31.260706743526,
            longitude: 121.4954633187,
            searchKeys: "",
            pageNum: 1,
            pageSize: 10
        },
        storeList: [],
        dataObj: {},
        imgUrl: a.default.imgUrl,
        isFullSucreen: o.globalData.bottomMore,
        isGetUserInfoFlag: !1
    },
    onLoad: function(t) {
        var a = this;
        wx.getStorage({
            key: "userInfo",
            success: function(t) {
                a.setData({
                    userInfo: t.data,
                    loginState: !0,
                    isGetUserInfoFlag: !0
                }), s.tabbar("tabBar", 2, a, a.data.isGetUserInfoFlag, a.data.isFullSucreen);
            },
            fail: function() {
                a.setData({
                    isGetUserInfoFlag: !1
                }), s.tabbar("tabBar", 2, a, a.data.isGetUserInfoFlag, a.data.isFullSucreen);
            }
        }), wx.getStorage({
            key: "locationData",
            success: function(t) {
                a.setData({
                    "params.latitude": t.data.latitude,
                    "params.longitude": t.data.longitude,
                    "params.pageNum": 1,
                    "params.pageSize": 10
                });
            },
            fail: function() {
                a.setData({
                    "params.pageNum": 1,
                    "params.pageSize": 10
                }), a.getDataList();
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        wx.getStorage({
            key: "userInfo",
            success: function(a) {
                t.setData({
                    userInfo: a.data,
                    loginState: !0,
                    isGetUserInfoFlag: !0
                }), s.tabbar("tabBar", 2, t, t.data.isGetUserInfoFlag, t.data.isFullSucreen), t.getOrderingData();
            },
            fail: function() {
                t.setData({
                    isGetUserInfoFlag: !1
                }), s.tabbar("tabBar", 2, t, t.data.isGetUserInfoFlag, t.data.isFullSucreen);
            }
        }), this.getLocationFUnc();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = this;
        wx.getStorage({
            key: "locationData",
            success: function(a) {
                t.setData({
                    "params.latitude": a.data.latitude,
                    "params.longitude": a.data.longitude,
                    "params.searchKeys": "",
                    "params.pageNum": 1,
                    "params.pageSize": 10,
                    storeList: []
                }, function() {
                    t.getDataList();
                });
            },
            fail: function() {
                t.setData({
                    params: {
                        latitude: 31.260706743526,
                        longitude: 121.4954633187,
                        searchKeys: "",
                        pageNum: 1,
                        pageSize: 10
                    },
                    loaded: !1,
                    storeList: []
                }), t.getDataList();
            }
        });
    },
    onReachBottom: function() {
        this.data.storeList.length < this.data.dataObj.total && (console.log("hhhhhhhhhh哈哈哈"), 
        this.setData({
            loading: !0,
            "params.pageNum": this.data.params.pageNum + 1
        }), this.getDataList());
    },
    onShareAppMessage: function() {},
    searchKeysInput: function(t) {
        this.setData({
            "params.searchKeys": t.detail.value
        });
    },
    searchClick: function() {
        this.setData({
            "params.pageNum": 1,
            "params.pageSize": 10,
            storeList: []
        }), this.getDataList();
    },
    doSearch: function(t) {
        this.setData({
            "params.searchKeys": t.detail.value,
            "params.pageNum": 1,
            "params.pageSize": 10,
            storeList: []
        }), this.getDataList();
    },
    listClick: function(t) {
        wx.navigateTo({
            url: "/pages/choice_cabinet/choice_cabinet?storeId=" + t.currentTarget.dataset.item.id,
            success: function(t) {},
            fail: function(t) {}
        });
    },
    getDataList: function() {
        var t = this;
        e.default.postRequest({
            url: "/store/list",
            data: this.data.params,
            notShowLoading: !1
        }).then(function(a) {
            t.setData({
                dataObj: a,
                storeList: t.data.storeList.concat(a.storeList),
                loading: !1,
                loaded: !1
            }), t.data.storeList.length == t.data.dataObj.total && t.setData({
                loaded: !0
            }), wx.stopPullDownRefresh();
        });
    },
    goMapFunc: function(t) {
        var a = t.currentTarget.dataset.item.latitude, e = t.currentTarget.dataset.item.longitude, s = t.currentTarget.dataset.item.storeName;
        wx.navigateTo({
            url: "/pages/map/index?longitude=" + e + "&latitude=" + a + "&storeName=" + s
        });
    },
    goScanCodeFunc: function() {
        var t = this;
        wx.scanCode({
            success: function(a) {
                if ("QR_CODE" == a.scanType) if (-1 != a.result.indexOf(o.globalData.QRCodePrefix)) if (t.data.orderingNum > 0) wx.navigateTo({
                    url: "/pages/order_list/order_list?activeIndex=0",
                    success: function(t) {},
                    fail: function(t) {}
                }); else {
                    var e = util.getUrlParam(a.result, "storeid");
                    wx.navigateTo({
                        url: "/pages/choice_cabinet/choice_cabinet?storeId=" + e,
                        success: function(t) {},
                        fail: function(t) {}
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
    getLocationFUnc: function() {
        var t = this;
        wx.getSetting({
            withSubscriptions: !0,
            success: function(a) {
                console.log("333333"), null != a.authSetting["scope.userLocation"] && 1 != a.authSetting["scope.userLocation"] ? wx.showModal({
                    title: "请求授权当前位置",
                    content: "需要获取您的地理位置，请确认授权",
                    success: function(a) {
                        a.cancel ? (wx.showToast({
                            title: "拒绝授权",
                            icon: "none",
                            duration: 1e3
                        }), t.getDataList()) : a.confirm && wx.openSetting({
                            success: function(a) {
                                1 == a.authSetting["scope.userLocation"] ? (wx.showToast({
                                    title: "授权成功",
                                    icon: "success",
                                    duration: 1e3
                                }), t.goAddress()) : (wx.showToast({
                                    title: "授权失败",
                                    icon: "none",
                                    duration: 1e3
                                }), t.getDataList());
                            }
                        });
                    }
                }) : (null == a.authSetting["scope.userLocation"] || console.log("授权成功"), t.goAddress());
            }
        });
    },
    goAddress: function() {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                wx.setStorage({
                    key: "locationData",
                    data: a
                }), t.setData({
                    storeList: [],
                    "params.latitude": a.latitude,
                    "params.longitude": a.longitude,
                    "params.pageNum": 1,
                    "params.pageSize": 10
                }), t.getDataList(), console.log("jfjjfjfjjjff----");
            },
            fail: function() {
                t.setData({
                    storeList: [],
                    "params.pageNum": 1,
                    "params.pageSize": 10
                });
            }
        });
    },
    onGotUserInfo: function(t) {
        var e = this;
        t.detail.userInfo ? wx.login({
            success: function(t) {
                if (console.log(t, "--wx.login--", o.globalData.appID, "---app.globalData.appID"), 
                t.code) {
                    wx.setStorageSync("loginCode", t.code);
                    var n = {
                        code: t.code
                    };
                    a.default.decode(n, !1).then(function(t) {
                        console.log(t, "--decode--code"), 989 == t.code ? e.loginFuc() : (console.log("else   else-------decode--code"), 
                        wx.setStorage({
                            key: "userInfo",
                            data: t
                        }), e.setData({
                            loginState: !0,
                            isGetUserInfoFlag: !0,
                            userInfo: t
                        }), s.tabbar("tabBar", 2, e, e.data.isGetUserInfoFlag, e.data.isFullSucreen), e.getOrderingData());
                    });
                }
            }
        }) : wx.showToast({
            title: "您已取消登录",
            icon: "none"
        });
    },
    loginFuc: function() {
        var t = this;
        wx.login({
            success: function(e) {
                var o = e;
                wx.setStorageSync("loginCode", o.code), wx.getUserInfo({
                    success: function(e) {
                        var n = this, i = e, r = {
                            code: o.code,
                            signature: i.signature,
                            rawData: i.rawData,
                            encryptedData: i.encryptedData,
                            iv: i.iv
                        };
                        a.default.login(r, !1).then(function(a) {
                            console.log(a, "登陆------"), wx.setStorage({
                                key: "userInfo",
                                data: a.data
                            }), t.setData({
                                loginState: !0,
                                isGetUserInfoFlag: !0,
                                userInfo: a.data
                            }), s.tabbar("tabBar", 2, n, n.data.isGetUserInfoFlag, n.data.isFullSucreen);
                        });
                    }
                });
            }
        });
    },
    getOrderingData: function(t, a) {
        var s = this;
        e.default.postRequest({
            url: "/index/order",
            data: {
                memberId: this.data.userInfo.id
            },
            notShowLoading: !1,
            header: "application/x-www-form-urlencoded"
        }).then(function(e) {
            e > 0 ? t && "wxScan" == t && wx.navigateTo({
                url: "/pages/order_list/order_list?activeIndex=0",
                success: function(t) {},
                fail: function(t) {}
            }) : t && "wxScan" == t && a && wx.navigateTo({
                url: "/pages/choice_cabinet/choice_cabinet?storeId=" + a,
                success: function(t) {},
                fail: function(t) {}
            }), s.setData({
                orderingNum: e
            });
        });
    }
});