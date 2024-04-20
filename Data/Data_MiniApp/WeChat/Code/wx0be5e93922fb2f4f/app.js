App({
    onLaunch: function() {
        var t = this, n = wx.getStorageSync("logs") || [];
        if (n.unshift(Date.now()), wx.setStorageSync("logs", n), wx.login({
            success: function(t) {}
        }), wx.getSetting({
            withSubscriptions: !0,
            success: function(n) {
                n.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(n) {
                        t.globalData.userInfo = n.userInfo, t.userInfoReadyCallback && t.userInfoReadyCallback(n);
                    }
                });
            }
        }), wx.canIUse("getUpdateManager")) {
            var o = wx.getUpdateManager();
            o.onCheckForUpdate(function(t) {
                t.hasUpdate && (o.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function(t) {
                            t.confirm && o.applyUpdate();
                        }
                    });
                }), o.onUpdateFailed(function() {
                    wx.showModal({
                        title: "已经有新版本了哟~",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                    });
                }));
            });
        } else wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    },
    onShow: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(n) {
                for (var o = n.model, a = [ "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS MAX", "iPhone 11", "iPhone 11 PRO", "iPhone 11 PRO MAX" ], e = !1, s = 0; s < a.length; s++) -1 != o.indexOf(a[s]) && (e = !0);
                e && (t.globalData.bottom = 30, t.globalData.bottomMore = 50), t.globalData.StatusBar = n.statusBarHeight;
                var i = wx.getMenuButtonBoundingClientRect();
                t.globalData.Custom = i, t.globalData.CustomBar = i.bottom + i.top - n.statusBarHeight;
            }
        });
    },
    getQueryString: function(t, n) {
        var o = new RegExp("(^|&|/?)" + n + "=([^&|/?]*)(&|/?|$)", "i"), a = t.substr(1).match(o);
        return null != a ? a[2] : null;
    },
    globalData: {
        userInfo: {},
        appID: "wx0be5e93922fb2f4f",
        imgUrl: "https://wanhuui.oss-cn-beijing.aliyuncs.com/wxapp",
        apiRoot: "https://wxapp.wanhuchina.com/api",
        QRCodePrefix: "https://wxapp.wanhuchina.com/scan"
    }
});