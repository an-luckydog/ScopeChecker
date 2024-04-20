var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http.js"));

Page({
    data: {
        imgUrl: e.default.imgUrl,
        telPhoneDig: !1,
        userInfo: {}
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {
        var e = this;
        wx.getStorage({
            key: "userInfo",
            success: function(n) {
                e.setData({
                    userInfo: n.data
                }), console.log(n.data, "--res.data");
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    telPhone: function() {
        this.setData({
            telPhoneDig: !0
        });
    },
    telPhoneClear: function() {
        this.setData({
            telPhoneDig: !1
        });
    },
    phoneCall: function(e) {
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.replyPhone,
            success: function() {
                console.log("成功拨打电话");
            }
        });
    },
    handleContact: function(e) {
        console.log(e.detail.path), console.log(e.detail.query);
    },
    toOrder: function(e) {
        console.log(e.currentTarget.id, "e.currentTarget.id"), wx.navigateTo({
            url: "/pages/order_list/order_list?activeIndex=" + e.currentTarget.id,
            success: function(e) {},
            fail: function(e) {}
        });
    }
});