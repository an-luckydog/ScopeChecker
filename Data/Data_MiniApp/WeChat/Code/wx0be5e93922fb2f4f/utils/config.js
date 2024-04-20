var o = getApp().globalData.apiRoot, a = wx;

module.exports = {
    postRequest: function(t) {
        var e = t.url, n = t.data, i = t.notShowLoading, d = t.header, s = void 0 === d ? "application/json" : d;
        return new Promise(function(t, d) {
            var u = n;
            i || wx.showLoading({
                title: "正在执行...",
                mask: !0
            }), a.request({
                url: o + e,
                data: u,
                method: "POST",
                header: {
                    "Content-Type": s
                },
                success: function(o) {
                    wx.hideLoading(), 200 == o.statusCode && 200 == o.data.code ? t(o.data.data) : 989 == o.data.code ? t(o.data) : 400 == o.statusCode ? t(o.data.data) : (10021 == o.data.code ? (wx.showToast({
                        title: "长时间未使用，请重新登录",
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    }), wx.reLaunch({
                        url: "/pages/login/login"
                    })) : wx.showToast({
                        title: o.data.msg,
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    }), d("失败"));
                },
                fail: function(o) {
                    console.log("【网络错误：】", o), wx.hideLoading(), wx.showToast({
                        title: "网络出错",
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    }), d("网络出错");
                }
            });
        });
    },
    getRequest: function(t) {
        var e = t.url, n = t.data, i = t.notShowLoading, d = t.header, s = void 0 === d ? "application/json" : d;
        return new Promise(function(t, d) {
            i || wx.showLoading({
                title: "正在执行...",
                mask: !0
            });
            var u = n;
            a.request({
                url: o + e,
                data: u,
                method: "GET",
                header: {
                    "Content-Type": s
                },
                success: function(o) {
                    wx.hideLoading(), 200 == o.statusCode && 300 == o.data.code ? t(o.data) : 200 == o.statusCode && 200 == o.data.code ? t(o.data.data) : 200 == o.statusCode && 201 == o.data.code ? t(o.data) : (10021 == o.data.code && (wx.showToast({
                        title: "长时间未使用，请重新登录",
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    }), wx.reLaunch({
                        url: "/pages/login/login"
                    })), d("失败"));
                },
                fail: function(o) {
                    console.log("【网络错误：】", o), wx.hideLoading(), wx.showToast({
                        title: "网络出错",
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    }), d("网络出错");
                }
            });
        });
    },
    putRequest: function(t, e, n) {
        return new Promise(function(i, d) {
            var s = e;
            n || wx.showLoading({
                title: "正在执行...",
                mask: !0
            }), a.request({
                url: o + t,
                data: s,
                method: "PUT",
                header: {
                    token: a.getStorageSync("token")
                },
                success: function(o) {
                    wx.hideLoading(), console.log(o), 200 == o.statusCode && 0 == o.data.code || (10021 == o.data.code ? (wx.showToast({
                        title: "长时间未使用，请重新登录",
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    }), wx.reLaunch({
                        url: "/pages/login/login"
                    })) : wx.showToast({
                        title: o.data.msg,
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    })), i(o.data.data);
                },
                fail: function(o) {
                    console.log("【网络错误：】", o), wx.hideLoading(), wx.showToast({
                        title: "网络出错",
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    }), d("网络出错");
                }
            });
        });
    },
    deleteRequest: function(t, e, n) {
        return new Promise(function(i, d) {
            var s = e;
            n || wx.showLoading({
                title: "正在执行...",
                mask: !0
            }), a.request({
                url: o + t,
                data: s,
                method: "DELETE",
                header: {
                    token: a.getStorageSync("token")
                },
                success: function(o) {
                    wx.hideLoading(), console.log(o), 200 == o.statusCode && 0 == o.data.code || (10021 == o.data.code ? (wx.showToast({
                        title: "长时间未使用，请重新登录",
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    }), wx.reLaunch({
                        url: "/pages/login/login"
                    })) : wx.showToast({
                        title: o.data.msg,
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    })), i(o.data.data);
                },
                fail: function(o) {
                    console.log("【网络错误：】", o), wx.hideLoading(), wx.showToast({
                        title: "网络出错",
                        icon: "none",
                        mask: !0,
                        duration: 2e3
                    }), d("网络出错");
                }
            });
        });
    },
    getRequestLoading: function(t, e, n) {
        return new Promise(function(n, i) {
            var d = e;
            a.request({
                url: o + t,
                data: d,
                method: "GET",
                header: {
                    "content-type": "application/json",
                    token: a.getStorageSync("token"),
                    auth: " yh-for-yijia"
                },
                success: function(o) {
                    wx.hideLoading(), 200 == o.statusCode && 0 == o.data.code ? n(o.data.data) : (10021 == o.data.code && wx.reLaunch({
                        url: "/pages/login/login"
                    }), i("失败"));
                },
                fail: function(o) {
                    console.log("【网络错误：】", o), wx.hideLoading(), i("网络出错");
                }
            });
        });
    }
};