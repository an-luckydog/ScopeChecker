Page({
    data: {},
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindGetUserInfo: function(n) {
        if (n.detail.userInfo) {
            console.log("用户的信息如下："), console.log(e.detail.userInfo), this.setData({
                isHide: !1
            });
        } else wx.showModal({
            title: "警告",
            content: "您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",
            showCancel: !1,
            confirmText: "返回授权",
            success: function(n) {
                n.confirm && console.log("用户点击了“返回授权”");
            }
        });
    }
});