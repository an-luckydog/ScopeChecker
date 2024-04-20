var e = require("../../utils/tools.js"), t = getApp();

Page({
    data: {
        current: 0,
        pwdMobile: "",
        pwdPassword: "",
        veriMobile: "",
        veriMobileCode: "",
        codeSecond: "(60)",
        codeCount: 0,
        sendCodeView: "show",
        getCodeView: "hide",
        phoneState: 6,
        codeIndex: 0,
        modalFlag: "hide",
        platform: "",
        veriMobile_flag: "hide",
        veriMobileCode_flag: "hide",
        codeLogin: !1,
        userHttp: !1,
        microsoft: !1,
        ghht: "",
        ghht2: "",
        ghht3: "",
        ghht4: "",
        kkj: "",
        union_id: null,
        WXUser: null,
        serialNumber: null,
        ss_source: ""
    },
    onLoad: function(t) {
        console.log("options"), console.log(t), wx.hideShareMenu(), t.source && this.setData({
            ss_source: t.source
        }), e.setpageshow();
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        e.setpageshow(), wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    platform: e.platform
                });
            }
        });
    },
    onHide: function() {
        e.hide();
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    clear_input: function(e) {
        var t = e.currentTarget.dataset.input, a = e.currentTarget.dataset.close, o = (e.currentTarget.dataset.btn, 
        {});
        o[t] = "", o[a] = "hide", this.setData(o);
        1 == e.currentTarget.dataset.inputid ? this.setData({
            ghht: !0,
            kkj: "dsd"
        }) : 2 == e.currentTarget.dataset.inputid ? this.setData({
            ghht2: !0,
            pwdPassword: ""
        }) : 3 == e.currentTarget.dataset.inputid ? this.setData({
            ghht3: !0
        }) : 4 == e.currentTarget.dataset.inputid && this.setData({
            ghht4: !0
        });
    },
    set_input: function(e) {
        var a = e.currentTarget.dataset.name, o = e.currentTarget.dataset.doubleCheck, i = {};
        i[a] = e.detail.value, this.setData(i);
        var s = {}, n = a + "_flag";
        if (0 === e.detail.value.length ? (s[n] = "hide", this.setData(s)) : (s[n] = "show", 
        this.setData(s)), o) {
            if ("pwdMobile" === a) var d = [ [ e.detail.value, 11 ], [ this.data.pwdPassword, 6 ] ]; else if ("pwdPassword" === a) d = [ [ this.data.pwdMobile, 11 ], [ e.detail.value, 6 ] ];
            if ("veriMobile" === a) d = [ [ e.detail.value, 11 ], [ this.data.veriMobileCode, 6 ] ];
            if ("veriMobileCode" === a) d = [ [ this.data.veriMobile, 11 ], [ e.detail.value, 6 ] ];
            var r = e.currentTarget.dataset.check;
            t.activeLoginBtn(d, r, this);
        }
    },
    bindblur: function(e) {},
    codeModal: function() {
        var e = this;
        wx.showModal({
            content: "如您还未收到短信验证码可尝试电话获取",
            confirmText: "短信获取",
            cancelText: "电话获取",
            confirmColor: "#35D48F",
            success: function(t) {
                t.confirm && e.send_captcha(1), t.cancel && e.send_captcha(2);
            }
        });
    },
    send_captcha: function(e) {
        if (this.data.codeIndex > 0 && "number" != typeof e) this.codeModal(); else {
            "number" != typeof e && (e = 1);
            var a = this;
            0 != this.data.veriMobile.length ? /^1[\d]{10}/.test(this.data.veriMobile) ? (t.showLoading("加载中"), 
            t.post_ajax("/user/bind-send-code", {
                mobile: this.data.veriMobile,
                type: e
            }, function(e) {
                t.hideLoading(), 200 == e.statusCode && (a.setData({
                    codeIndex: ++a.data.codeIndex
                }), 0 == e.data.state ? (a.setData({
                    sendCodeView: "hide",
                    getCodeView: "show",
                    phoneState: 6
                }), a.setCodeSecond()) : t.onShowToast(e.data.stateInfo));
            })) : t.onShowToast("请输入正确的手机号!") : t.onShowToast("请输入手机号!");
        }
    },
    veriRegisterCode: function() {
        var e = this, a = {
            phone: this.data.veriMobile,
            code: this.data.veriMobileCode,
            verifyCodeType: 1
        };
        t.post_ajax_course("/phone/checkVerifyCode", a, function(a) {
            0 != a.data.state ? t.onShowToast(a.data.stateInfo) : wx.navigateTo({
                url: "/pages/register/register_password?mobile=" + e.data.veriMobile + "&veriCode=" + e.data.veriMobileCode + "&serialNumber=" + e.data.serialNumber + "&source=" + e.data.ss_source
            });
        });
    },
    set_captcha: function(e) {
        this.setData({
            veriMobileCode: e.detail.value
        });
    },
    send_veri_login: function(e) {
        if (this.data.codeLogin) if (this.data.userHttp) {
            var a = this;
            0 != this.data.veriMobile.length ? this.data.veriMobile.length < 11 ? t.onShowToast("请输入正确的手机号!") : 0 != this.data.veriMobileCode.length ? 11 == this.data.veriMobile.length && this.data.veriMobileCode.length > 0 && wx.getNetworkType({
                success: function(e) {
                    "none" !== e.networkType ? (t.showLoading("加载中"), 1 == a.data.phoneState ? (t.hideLoading(), 
                    a.veriRegisterCode()) : t.post_ajax("/user/bind-mobile", {
                        phone: a.data.veriMobile,
                        code: a.data.veriMobileCode
                    }, function(e) {
                        if (t.hideLoading(), 200 === e.statusCode) if (0 == e.data.state) {
                            wx.getStorageSync("book_type");
                            wx.setStorageSync("user", {
                                id: e.data.resInfo
                            }), wx.setStorageSync("userId", e.data.resInfo), wx.navigateTo({
                                url: "authorize_end"
                            });
                        } else console.log("999999"), t.onShowToast(e.data.stateInfo);
                    })) : t.onShowToast("暂无无网络");
                }
            }) : t.onShowToast("请输入验证码!") : t.onShowToast("请输入手机号!");
        } else this.setData({
            microsoft: !0
        });
    },
    saveCrm: function(e) {
        t.post_ajax("/api/inputchance/applet", {
            app: 40,
            skuId: e,
            action: 5,
            qq: -1,
            wx: -1,
            mobile: this.data.veriMobile,
            index: "r_wdzcwz_myregister",
            module: "word_index",
            serialNum: 40 + this.data.veriMobile + e
        }, function(e) {
            wx.setStorageSync("book_type", null);
        }, 13);
    },
    setCodeSecond: function() {
        var e = this, t = 60;
        this.setData({
            codeCount: 60
        }), clearInterval(e.data.intervarID), this.data.intervarID = setInterval(function() {
            t = --t, e.setData({
                codeSecond: "(" + t + ")",
                codeCount: t
            }), t <= 0 && (clearInterval(e.data.intervarID), e.setData({
                codeSecond: "(60)",
                codeCount: 0,
                sendCodeView: "show",
                getCodeView: "hide"
            }));
        }, 1e3);
    },
    selectHttp: function() {
        this.data.userHttp ? this.setData({
            userHttp: !1
        }) : this.setData({
            userHttp: !0,
            microsoft: !1
        });
    },
    userHttpUrl: function() {
        wx.navigateTo({
            url: "/pages/login/userHttp"
        });
    },
    userPrivacy: function() {
        wx.navigateTo({
            url: "/pages/login/userPrivacy"
        });
    }
});