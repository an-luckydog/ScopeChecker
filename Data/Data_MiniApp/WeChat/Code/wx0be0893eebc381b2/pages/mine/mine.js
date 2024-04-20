var e, t = require("../../@babel/runtime/helpers/interopRequireDefault").default, o = require("../../@babel/runtime/helpers/defineProperty"), a = t(require("../../utils/tools.js")), n = t(require("../../utils/wxUtils.js")), s = getApp();

Page({
    data: (e = {
        weixin: "Alicewonder",
        paramValue: s.paramValue,
        state: !1,
        siji_miss: !0,
        toc: !1,
        isLogin: "hide",
        is_dian: !1,
        is_download: !1,
        orderedRedDot: !1,
        classRedDot: !1
    }, o(e, "weixin", ""), o(e, "isConnected", !0), o(e, "networkType", s.networkType), 
    e),
    onLoad: function(e) {
        var t = this;
        s.pagesInit(), s.post_ajax("/common/getParams", {
            appType: 6
        }, function(e) {
            if (200 == e.statusCode) {
                var o = e.data.resInfo;
                for (var a in o) "paramValue" == o[a].paramKey && o[a].paramValue == t.data.paramValue && t.setData({
                    siji_miss: !1
                });
            }
        }, 2), 100 == e.ids && this.setData({
            toc: !0
        }), this.getRot();
    },
    onReady: function() {
        var e = this;
        wx.onNetworkStatusChange(function(t) {
            t.networkType && e.setData({
                networkType: t.networkType,
                isConnected: t.isConnected
            });
        });
    },
    onShow: function() {
        this.weixin();
        0 == s.get_red_spot() && 1 == wx.getStorageSync("clock_p") ? this.setData({
            is_dian: !0
        }) : this.setData({
            is_dian: !1
        }), this.getRot();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "超牢固的背单词方法",
            path: "/pages/index/index",
            success: function(e) {},
            fail: function(e) {}
        };
    },
    getRot: function() {
        wx.getStorageSync("userId") && this.setData({
            isLogin: "show"
        }), wx.getStorageSync("orderedRedDot") && this.setData({
            orderedRedDot: !0
        }), wx.getStorageSync("classRedDot") && this.setData({
            classRedDot: !0
        });
    },
    weixin: function() {
        var e = this;
        s.post_ajax("/user/getServiceWechatId", {}, function(t) {
            200 == t.statusCode && t.data.resInfo && e.setData({
                weixin: t.data.resInfo.wechatId,
                state: t.data.resInfo.state
            });
        }, 4);
    },
    fuzhi: function() {
        wx.setClipboardData({
            data: this.data.weixin,
            success: function(e) {
                wx.getClipboardData({
                    success: function(e) {
                        wx.showToast({
                            icon: "none",
                            title: "微信号已复制"
                        });
                    }
                });
            }
        });
    },
    tixing: function() {
        n.default.requestSubscribeMessage([ "2FPQMU9xJT3DqHuClE93pzvqQIUpIJKqjTq9dfIvhz4", "uXstS1dlyGCZLWWckzvHKo1g0N04wL0i5s7zOWKIK-k" ]).then(function(e) {
            wx.navigateTo({
                url: "remind"
            });
        }, function(e) {
            wx.showToast({
                title: "订阅消息调用失败，请手动设置订阅权限",
                icon: "none",
                duration: 2e3
            });
        }), this.data.toc && wx.setStorageSync("red_spot", 1);
    },
    voice: function() {
        wx.navigateTo({
            url: "voice"
        });
    },
    mylist: function() {
        wx.getStorageSync("userId") ? (wx.navigateTo({
            url: "../../commodity/order/order_list"
        }), wx.getStorageSync("orderedRedDot") && (wx.removeStorageSync("orderedRedDot"), 
        this.setData({
            orderedRedDot: !1
        }))) : a.default.goLogin();
    },
    go_answer_report: function() {
        this.setData({
            is_download: !0
        }), wx.getStorageSync("classRedDot") && (wx.removeStorageSync("classRedDot"), this.setData({
            classRedDot: !1
        }));
    },
    cancel_download: function() {
        this.setData({
            is_download: !1
        });
    },
    untieUnionId: function() {
        var e = this;
        wx.showModal({
            title: "提示",
            mask: !0,
            content: "解绑并退出登录后\r\n无法查看你所购买的课程信息",
            cancelText: "解绑退出",
            confirmText: "再想想",
            cancelColor: "#111111",
            confirmColor: "#FF9D0D",
            success: function(t) {
                t.cancel && wx.getNetworkType({
                    success: function(t) {
                        "none" !== t.networkType ? s.post_ajax("/user/unbind-mobile", {
                            timestamp: Date.now()
                        }, function(t) {
                            if (200 === t.statusCode) {
                                var o = t.data;
                                0 === o.state ? (wx.removeStorageSync("userId"), wx.removeStorageSync("user"), e.setData({
                                    isLogin: "hide"
                                }), wx.showToast({
                                    title: "解绑成功"
                                })) : wx.showToast({
                                    title: o.stateInfo
                                });
                            } else wx.showToast({
                                title: "解绑失败"
                            });
                        }) : wx.showToast({
                            title: "暂无网络"
                        });
                    }
                });
            }
        });
    },
    subMessage: function() {
        wx.navigateTo({
            url: "subscribeMessage"
        });
    },
    agreement: function() {
        wx.navigateTo({
            url: "agreement"
        });
    }
});