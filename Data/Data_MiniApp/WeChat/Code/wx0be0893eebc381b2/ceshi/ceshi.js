var n = getApp();

Page({
    data: {},
    onLoad: function(o) {
        n.pagesInit();
        var t = wx.createCanvasContext("myCanvas");
        this.cmid(t, 0, 0, 345, 400, 10);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    cmid: function(n, o, t, e, a, c) {
        n.stroke(), n.beginPath(), n.setStrokeStyle("transparent"), n.moveTo(o + c, t), 
        n.arcTo(o + e, t, o + e, t + a, c), n.arcTo(o + e, t + a, o, t + a, c), n.arcTo(o, t + a, o, t, c), 
        n.arcTo(o, t, o + e, t, c), n.clip(), n.stroke(), n.setFillStyle("#fff"), n.fillRect(0, 0, e, a), 
        n.closePath(), n.draw(!0);
    }
});