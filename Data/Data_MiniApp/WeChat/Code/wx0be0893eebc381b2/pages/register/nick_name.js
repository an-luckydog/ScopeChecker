var e = getApp(), t = require("../../utils/Base64.js"), a = require("../../utils/tools.js");

Page({
    data: {
        mobile: "",
        password: "",
        nickName: "",
        veriCode: "",
        serialNumber: "",
        clearNickFlag: "hide",
        btnActive: !1,
        otherSourceCl: null,
        union_id: null,
        WXUser: null,
        ss_source: ""
    },
    onLoad: function(e) {
        e.source && this.setData({
            ss_source: e.source
        });
        this.setData({
            mobile: e.mobile,
            password: e.password,
            veriCode: e.veriCode,
            serialNumber: e.serialNumber
        });
        var t = wx.getStorageSync("other_source_cl");
        null != t && "" != t && this.setData({
            otherSourceCl: t
        });
        var s = wx.getStorageSync("union_id"), o = wx.getStorageSync("WXUser");
        this.setData({
            union_id: s,
            WXUser: o
        }), a.setpageshow();
    },
    onReady: function() {},
    onShow: function() {
        a.setpageshow();
    },
    onHide: function() {
        a.hide();
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    set_nick_name: function(e) {
        e.detail.value.length > 0 ? this.setData({
            clearNickFlag: "show"
        }) : this.setData({
            clearNickFlag: "hide"
        }), this.setData({
            nickName: e.detail.value
        }), e.detail.value.length > 1 ? this.setData({
            btnActive: !0
        }) : this.setData({
            btnActive: !1
        });
    },
    clear_nick_name: function() {
        this.setData({
            nickName: "",
            clearNickFlag: "hide"
        });
    },
    register_complete: function() {
        if (wx.getStorageSync("user")) e.onShowToast("您已登陆成功，请返回首页"); else if (this.data.btnActive) if (0 != this.data.nickName.length) {
            if (this.data.nickName.length < 2) e.onShowToast("请输入正确的昵称!"); else if (this.data.nickName.length >= 2) {
                var a = this.data.nickName, s = this;
                e.post_ajax_course("/users/checkUserName", {
                    userName: this.data.nickName
                }, function(o) {
                    if (200 === o.statusCode) {
                        if (-2 == o.data.state) {
                            if (a.length > 7) return void e.onShowToast(o.data.stateInfo);
                            a = o.data.resInfo[0];
                        }
                        if (-3 == o.data.state) return void e.onShowToast("昵称只能输入的汉字、英文、数字");
                        if (-2 == o.data.state || 0 == o.data.state) {
                            e.showLoading("加载中...");
                            var i = {
                                loginAccount: s.data.mobile,
                                passWord: s.data.password,
                                userName: a,
                                loginType: "113",
                                token: "020000000000",
                                code: s.data.veriCode,
                                registType: 1
                            }, n = {
                                skuCode: wx.getStorageSync("sku_id") ? wx.getStorageSync("sku_id") : -1,
                                platform: 9,
                                channel: "nomal",
                                scene: "my_index",
                                position: "r_wdzcwz_myregister",
                                action: "rfinish",
                                deviceId: wx.getStorageSync("open_id") || "007",
                                userId: -1,
                                serialNumber: s.data.serialNumber,
                                mobile: s.data.mobile,
                                wx: -1,
                                idfaOrImei: -1,
                                cplanner: -1,
                                debug: !1
                            };
                            null != s.data.otherSourceCl ? (i.cl = s.data.otherSourceCl, n.appType = 997) : n.appType = 1, 
                            console.log("z注册完成"), console.log(n), "live" == s.data.ss_source && (n.scene = "live_index", 
                            n.position = "r_zbfyzc_liveregister"), "video" == s.data.ss_source && (n.scene = "video_index", 
                            n.position = "r_video"), n.signature = e.getSign(e.appendParams(n)), console.log(n), 
                            i.track = t.encode(JSON.stringify(n)), e.post_ajax_course("/users/regist", i, function(t) {
                                if (200 === t.statusCode) if (0 == t.data.state) {
                                    s.data.otherSourceCl && (wx.getStorageSync("sku_id") ? wx.setStorageSync("firstSKU", 1) : wx.setStorageSync("firstSKU", 0)), 
                                    wx.setStorageSync("user", t.data.resInfo);
                                    var a = t.data.resInfo;
                                    e.userId = a.id, e.userName = a.username, e.user.id = a.id, e.user.username = a.username, 
                                    e.user.mobile = a.mobile, e.user_vip = a.vip, e.registDate = a.registDate, wx.setStorageSync("user_vip", e.user_vip), 
                                    wx.setStorageSync("userInfo", a), wx.setStorageSync("registDate", e.registDate), 
                                    wx.setStorageSync("userId", e.userId), wx.setStorageSync("userName", e.userName), 
                                    wx.setStorageSync("mobile", e.user.mobile);
                                    var o = {}, i = s.data.WXUser.nickName;
                                    i = i.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "？"), o.openId = wx.getStorageSync("open_id"), 
                                    o.appType = 1, o.userId = t.data.resInfo.id, o.unionid = wx.getStorageSync("union_id"), 
                                    o.nickname = i, e.post_ajax_course("/users/wxBinding", o, function(t) {
                                        e.hideLoading(), 0 !== t.data.state ? -2 === t.data.state && (e.clearUser(!0), wx.showModal({
                                            title: "提示",
                                            content: "您的对啊账号已被其他微信绑定，请到APP上解绑后再登录",
                                            showCancel: !1,
                                            confirmColor: "#5DB540",
                                            success: function(e) {
                                                wx.reLaunch({
                                                    url: "../mine/mine"
                                                });
                                            }
                                        })) : wx.navigateTo({
                                            url: "../login/authorize_end"
                                        });
                                    }, 2);
                                } else e.onShowToast(t.data.stateInfo); else e.onShowToast("注册失败!");
                            });
                        }
                    } else e.onShowToast("注册失败");
                });
            }
        } else e.onShowToast("请输入用户昵称!"); else e.onShowToast("请输入用户昵称!");
    }
});