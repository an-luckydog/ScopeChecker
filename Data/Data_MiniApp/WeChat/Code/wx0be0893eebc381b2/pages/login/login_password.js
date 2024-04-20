var e = require("../../utils/tools.js");

Page({
    data: {
        loginPassword: "",
        clearNickFlag: "hide"
    },
    onLoad: function(a) {
        e.setpageshow();
    },
    onReady: function() {},
    onShow: function() {
        e.setpageshow();
    },
    onHide: function() {
        e.hide();
    },
    onUnload: function() {},
    set_veri_code: function(e) {
        e.detail.value.length > 0 ? this.setData({
            clearNickFlag: "show"
        }) : this.setData({
            clearNickFlag: "hide"
        }), this.setData({
            loginPassword: e.detail.value
        });
    },
    clear_nick_name: function() {
        this.setData({
            loginPassword: "",
            clearNickFlag: "hide"
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});