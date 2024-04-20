var t = getApp(), e = require("../../utils/tools.js");

Page({
    data: {
        mobile: "",
        password: "",
        veriCode: "",
        pwdFlag: "hide",
        btnActive: !1,
        serialNumber: "",
        ss_source: ""
    },
    onLoad: function(t) {
        t.source && this.setData({
            ss_source: t.source
        }), this.setData({
            mobile: t.mobile,
            veriCode: t.veriCode,
            serialNumber: t.serialNumber
        }), e.setpageshow();
    },
    onReady: function() {},
    onShow: function() {
        e.setpageshow();
    },
    onHide: function() {
        e.hide();
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    set_password: function(e) {
        this.setData({
            password: e.detail.value
        }), t.setDelBtn(this, e, "pwdFlag"), e.detail.value.length >= 6 ? this.setData({
            btnActive: !0
        }) : this.setData({
            btnActive: !1
        });
    },
    clear_password: function() {
        this.setData({
            password: "",
            pwdFlag: "hide",
            btnActive: !1
        });
    },
    next_step: function() {
        this.data.btnActive && (0 != this.data.password.length ? /^[a-zA-Z0-9]{6,20}$/.test(this.data.password) ? wx.navigateTo({
            url: "nick_name?mobile=" + this.data.mobile + "&password=" + this.data.password + "&veriCode=" + this.data.veriCode + "&serialNumber=" + this.data.serialNumber + "&source=" + this.data.ss_source
        }) : t.onShowToast("请输入正确的密码!") : t.onShowToast("请输入密码!"));
    }
});