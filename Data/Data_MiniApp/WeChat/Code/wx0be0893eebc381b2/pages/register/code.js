var e = getApp(), t = require("../../utils/tools.js");

Page({
    data: {
        mobile: "",
        mobileStr: "",
        codeSecond: "(60)",
        codeCount: 0,
        veriCode: "",
        sendCode: "hide",
        waitCode: "show",
        codeIndex: 0,
        codeFlag: "hide",
        btnActive: !1
    },
    onLoad: function(e) {
        null != e && null != e.mobile && this.setData({
            mobile: e.mobile,
            mobileStr: e.mobile.substring(0, 3) + "****" + e.mobile.substring(7, 11)
        }), this.setCodeSecond(), t.setpageshow();
    },
    onReady: function() {},
    onShow: function() {
        t.setpageshow();
    },
    onHide: function() {
        t.hide();
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    set_veri_code: function(t) {
        e.setDelBtn(this, t, "codeFlag"), this.setData({
            veriCode: t.detail.value
        }), 6 == t.detail.value.length ? this.setData({
            btnActive: !0
        }) : this.setData({
            btnActive: !1
        });
    },
    clear_code: function() {
        this.setData({
            codeFlag: "hide",
            veriCode: ""
        });
    },
    setCodeSecond: function() {
        var e = this, t = 60;
        this.setData({
            codeCount: 60,
            sendCode: "hide",
            waitCode: "show"
        }), this.data.intervarID = setInterval(function() {
            t = --t, e.setData({
                codeSecond: "(" + t + ")",
                codeCount: t
            }), 0 == t && (clearInterval(e.data.intervarID), e.setData({
                codeSecond: "(60)",
                codeCount: 0,
                sendCode: "show",
                waitCode: "hide"
            }));
        }, 1e3);
    },
    get_code: function(t) {
        var o = this;
        this.data.codeIndex > 0 ? this.codeModal() : 0 == this.data.codeCount && (this.setCodeSecond(), 
        e.post_ajax_course("/phone/sendVerifyCode", {
            phone: this.data.mobile,
            sendType: 1,
            verifyCodeType: 1
        }, function(t) {
            200 == t.statusCode ? (o.setData({
                codeIndex: ++o.data.codeIndex
            }), 0 != t.data.state && e.onShowToast(t.data.stateInfo)) : e.onShowToast("验证码获取失败!");
        }));
    },
    next_step: function(t) {
        if (this.data.btnActive) {
            var o = this;
            0 != this.data.veriCode.length ? this.data.veriCode.length > 0 && e.post_ajax_course("/phone/checkVerifyCode", {
                phone: this.data.mobile,
                code: this.data.veriCode,
                verifyCodeType: 1
            }, function(t) {
                0 == t.data.state ? wx.navigateTo({
                    url: "register_password?mobile=" + o.data.mobile + "&veriCode=" + o.data.veriCode
                }) : e.onShowToast(t.data.stateInfo);
            }) : e.onShowToast("请输入验证码!");
        }
    },
    codeModal: function() {
        var e = this;
        wx.showModal({
            content: "如您还未收到短信验证码可尝试电话获取",
            confirmText: "短信获取",
            cancelText: "电话获取",
            confirmColor: "#35D48F",
            success: function(t) {
                t.confirm && e.sendCodeByParam(1), t.cancel && e.sendCodeByParam(2);
            }
        });
    },
    sendCodeByParam: function(t) {
        var o = this;
        e.post_ajax_course("/phone/sendVerifyCode", {
            phone: this.data.mobile,
            sendType: t,
            verifyCodeType: 1
        }, function(a) {
            200 == a.statusCode && (0 == a.data.state ? (o.setData({
                sendCode: "hide",
                waitCode: "show"
            }), 2 == t && e.onShowToast("获取成功，电话拨打中！"), o.setCodeSecond()) : e.onShowToast(a.data.stateInfo));
        });
    }
});