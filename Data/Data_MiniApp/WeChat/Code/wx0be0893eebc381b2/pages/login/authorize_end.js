var a = getApp(), t = require("../../utils/tools.js");

Page({
    data: {
        userInfo: null,
        goNextPageData: {
            specialId: 0,
            comList: [ {
                comId: 0,
                checked: 0,
                guaType: 0
            } ]
        }
    },
    onLoad: function(a) {
        console.log("onload");
        var o = getCurrentPages();
        t.setpageshow(), console.log(o);
    },
    onShow: function() {
        t.setpageshow(), console.log("onshow");
        var a = wx.getStorageSync("userInfo");
        this.setData({
            userInfo: a
        });
    },
    onHide: function() {
        t.hide();
    },
    callBack: function() {
        console.log("callBack");
        var a = getCurrentPages();
        for (var t in a) {
            if ("pages/register/register_cl" === a[t].route) {
                wx.reLaunch({
                    url: "/pages/index/classify"
                });
                break;
            }
            if ("pages/login/login" === a[t].route) {
                wx.navigateBack({
                    delta: a.length - t
                });
                break;
            }
        }
    },
    getData: function(t, o) {
        var e = this;
        a.post_ajax("/rm/checkBuy", {
            commodityId: o
        }, function(n) {
            -2 == n.data.state ? wx.showToast({
                title: "".concat(n.data.stateInfo || "您的账号下已有正在进行的活动，请不要重复购买"),
                icon: "none",
                complete: function() {
                    wx.reLaunch({
                        url: "/backChallenge/list/detail?id=".concat(o)
                    });
                }
            }) : a.post_ajax("/rm/findByCommodity", {
                commodityId: o
            }, function(a) {
                var n = a.data.resInfo;
                e.setData({
                    joinStatus: n.joinStatus,
                    id: n.act.id
                }), 1 == n.joinStatus ? wx.reLaunch({
                    url: "/backChallenge/myChallenge/index?id=".concat(n.act.id)
                }) : 1 == t ? wx.requestSubscribeMessage({
                    tmplIds: [ "JkXs2ErptgfNLI2ZhqtqpznH4gUs5Gdg-yPITm_ogZA" ],
                    success: function(a) {
                        wx.reLaunch({
                            url: "/backChallenge/list/detail?id=".concat(o)
                        });
                    }
                }, function(a) {
                    wx.showToast({
                        title: "订阅消息调用失败，请手动设置订阅权限",
                        icon: "none",
                        duration: 2e3
                    });
                }) : 2 == t ? e.getPageData(o) : 3 == t && wx.reLaunch({
                    url: "/backChallenge/myChallenge/index?id=".concat(n.act.id)
                });
            }, 1);
        });
    },
    myPay: function() {
        var a = JSON.stringify(this.data.goNextPageData);
        wx.reLaunch({
            url: "/commodity/order/order_confirm?comIds=".concat(a)
        });
    },
    getPageData: function(t) {
        var o = this;
        a.post_ajax_course("/commodity/commodityBase", {
            id: t
        }, function(a) {
            if (0 !== a.data.state) return !1;
            var e = a.data.resInfo;
            console.log(e);
            var n = o.data.goNextPageData;
            n.comList[0].comId = t, 0 == e.status && o.setData({
                commodityStatus: !1
            }), e.guaMul && 2 !== n.comList[0].guaType && (n.comList[0].guaType = 1), 2 === e.addressMark && (1 === e.bookType ? n.comList[0].bookType || (n.comList[0].bookType = 1) : n.comList[0].bookType = 0), 
            o.setData({
                goNextPageData: n
            }, function() {
                o.myPay();
            });
        }, 2);
    }
});