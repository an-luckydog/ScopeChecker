var e = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../@babel/runtime/helpers/asyncToGenerator"), o = require("../../utils/util.js"), t = getApp(), r = require("../../utils/tools.js");

Page({
    data: {
        mobile: "",
        mobileFlag: "hide",
        btnActive: !1,
        userHttp: !0,
        public: !1
    },
    onLoad: function(e) {
        if (console.log("options"), console.log(e), 0 == t.repeat_gzh() && 1 == t.repeat_gzhkk() && (this.setData({
            public: !0
        }), wx.setStorageSync("repeat_gzh", 1)), null != e && null != e.q && "" != e.q) {
            var n = o.duiaURIdecode(e.q), a = o.getUrlParam(n, "cl");
            null != a && "" != a && (console.log("66666666666"), console.log(a), wx.setStorageSync("other_source_cl", a), 
            t.post_ajax_course("/users/scanCede", {
                cl: a
            }, function(e) {}));
        }
        r.setpageshow();
    },
    onReady: function() {},
    onShow: function() {
        return r.setpageshow(), t.showLoading("加载中"), wx.getStorageSync("user") ? (t.hideLoading(), 
        void wx.reLaunch({
            url: "/pages/index/classify"
        })) : wx.getStorageSync("userInfo") ? (t.hideLoading(), void wx.navigateTo({
            url: "../login/login"
        })) : void 0;
    },
    onHide: function() {
        r.hide(), this.setData({
            public: !1
        }), wx.setStorageSync("repeat_gzh", 1);
    },
    onUnload: function() {
        this.setData({
            public: !1
        }), wx.setStorageSync("repeat_gzh", 1);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    callBack: function(o) {
        var r = this;
        return n(e().mark(function n() {
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return console.log(o), e.prev = 1, e.next = 4, t.getUserProfile();

                  case 4:
                    e.next = 10;
                    break;

                  case 6:
                    return e.prev = 6, e.t0 = e.catch(1), r.showModal(), e.abrupt("return");

                  case 10:
                    t.showLoading("加载中"), t.getWXParameter().then(function(e) {
                        t.decryptWXGetUserInfo().then(function(e) {
                            wx.setStorageSync("union_id", e.unionId), e.openid && wx.setStorageSync("open_id", e.openid), 
                            t.hideLoading(), wx.navigateTo({
                                url: "../login/login"
                            });
                        }, function(e) {
                            t.hideLoading();
                        });
                    }, function(e) {
                        t.hideLoading();
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, n, null, [ [ 1, 6 ] ]);
        }))();
    },
    showModal: function() {
        wx.showModal({
            title: "提示",
            content: "您已拒绝授权，请重新点击并授权",
            showCancel: !1,
            confirmColor: "#5DB540"
        });
    }
});