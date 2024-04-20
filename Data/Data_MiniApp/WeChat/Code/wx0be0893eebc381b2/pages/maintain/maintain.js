var t = getApp();

Page({
    data: {
        content_lsit: [],
        times: 0
    },
    onLoad: function(a) {
        var e = this;
        t.opns = 0, 0 !== t.accredit ? (this.setData({
            accredit: t.accredit
        }), e.loader()) : t.call_back_fun = function() {
            if (e.setData({
                accredit: t.accredit
            }), !e.data.accredit) return wx.redirectTo({
                url: "classify"
            }), !1;
            0 !== t.opns ? (e.setData({
                opns: t.opns
            }), e.data.accredit && e.loader()) : t.call_backss_fun = function() {
                if (e.setData({
                    opns: t.opns
                }), e.setData({
                    networkType: t.networkType
                }), !(sku_name && null !== sku_name && "" !== sku_name && sku_id > 0)) return wx.redirectTo({
                    url: "classify"
                }), !1;
                e.loader();
            };
        };
    },
    onReady: function() {},
    onShow: function() {
        var a = this;
        0 !== t.accredit ? (this.setData({
            accredit: t.accredit
        }), a.loader()) : t.call_back_fun = function() {
            if (a.setData({
                accredit: t.accredit
            }), !a.data.accredit) return wx.redirectTo({
                url: "classify"
            }), !1;
            t.opns = 0, 0 !== t.opns ? (a.setData({
                opns: t.opns
            }), a.data.accredit && a.loader()) : t.call_backss_fun = function() {
                if (a.setData({
                    opns: t.opns
                }), a.setData({
                    networkType: t.networkType
                }), !(sku_name && null !== sku_name && "" !== sku_name && sku_id > 0)) return wx.redirectTo({
                    url: "classify"
                }), !1;
                a.loader();
            };
        };
    },
    onHide: function() {},
    loader: function() {
        t.content_lsit && this.setData({
            content_lsit: t.content_lsit
        }), t.times && this.setData({
            times: t.times
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});