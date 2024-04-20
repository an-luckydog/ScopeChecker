var e = getApp(), t = require("../../wxParse/wxParse.js");

Page({
    data: {},
    onLoad: function(a) {
        var o = this;
        wx.request({
            url: e.globalData.serverAddress + "/activity/getNewsList",
            data: {
                newsId: a.id
            },
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: e.globalData.Cookie
            },
            dataType: "json",
            success: function(e) {
                1 == e.data.success && (e = e.data.data[0], t.wxParse("article", "html", e.CONTENT, o, 5), 
                o.setData({
                    newsTitle: e.TITLE
                }));
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});