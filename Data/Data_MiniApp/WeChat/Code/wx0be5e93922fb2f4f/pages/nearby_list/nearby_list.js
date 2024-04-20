var n = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http.js"));

Page({
    data: {
        loading: !1,
        loaded: !1,
        list: 5,
        imgUrl: n.default.imgUrl
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        console.log("下拉动作"), this.setData({
            list: 5
        }), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        var n = this;
        console.log("上拉触底");
        var o = this;
        this.setData({
            loading: !0
        }), setTimeout(function() {
            n.setData({
                list: o.data.list + 5,
                loading: !1
            });
        }, 1e3);
    },
    onShareAppMessage: function() {},
    listClick: function(n) {
        wx.navigateTo({
            url: "/pages/choice_cabinet/choice_cabinet",
            success: function(n) {},
            fail: function(n) {}
        });
    },
    goClick: function() {
        console.log("去这里");
    }
});