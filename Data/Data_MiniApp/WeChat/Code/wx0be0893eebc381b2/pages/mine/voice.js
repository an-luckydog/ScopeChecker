var t = getApp();

Page({
    data: {
        swif1: !0,
        swif2: !0
    },
    onLoad: function(e) {
        t.pagesInit();
    },
    onReady: function() {},
    onShow: function() {
        0 == t.swif1() ? this.setData({
            swif1: !0
        }) : this.setData({
            swif1: !1
        }), 0 == t.swif2() ? this.setData({
            swif2: !0
        }) : this.setData({
            swif2: !1
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    switch1: function(e) {
        e.detail.value ? (wx.setStorageSync("swif1", 0), t.mta.Event.stat("open_option_voice", {}), 
        getApp().mtj.trackEvent("open_option_voice")) : (wx.setStorageSync("swif1", 1), 
        t.mta.Event.stat("close_option_voice", {}), getApp().mtj.trackEvent("close_option_voice"));
    },
    switch2: function(e) {
        e.detail.value ? (wx.setStorageSync("swif2", 0), t.mta.Event.stat("open_word_voice", {}), 
        getApp().mtj.trackEvent("open_word_voice")) : (wx.setStorageSync("swif2", 1), t.mta.Event.stat("close_word_voice", {}), 
        getApp().mtj.trackEvent("close_word_voice"));
    }
});