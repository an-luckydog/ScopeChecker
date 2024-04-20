var n = getApp(), o = require("../../utils/tools.js");

Page({
    data: {
        url: n.userPrivacy + "/agreement"
    },
    onLoad: function(n) {
        o.setpageshow();
    },
    onReady: function() {},
    onShow: function() {
        o.setpageshow();
    },
    onHide: function() {
        o.hide();
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});