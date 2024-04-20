var e = require("./feedbackApi");

getApp();

function t() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

module.exports = {
    hide: function() {
        t().setData({
            pagesShow: !1
        });
    },
    setpageshow: function() {
        t().setData({
            pagesShow: !0
        });
    },
    showToast: function(t) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3;
        e.showToast({
            title: t,
            duration: o
        });
    },
    goLogin: function(e) {
        wx.getStorageSync("userInfo") ? wx.navigateTo({
            url: "/pages/login/login".concat(e ? "?" + e : "")
        }) : wx.navigateTo({
            url: "/pages/login/authorize".concat(e ? "?" + e : "")
        });
    }
};