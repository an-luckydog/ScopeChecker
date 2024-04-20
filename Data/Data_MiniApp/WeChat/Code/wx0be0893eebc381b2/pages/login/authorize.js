var e = require("../../@babel/runtime/helpers/regeneratorRuntime"), t = require("../../@babel/runtime/helpers/asyncToGenerator"), r = getApp(), o = require("../../utils/tools.js");

Page({
    data: {
        ss_source: "",
        public: !1
    },
    onLoad: function(e) {
        console.log("options"), console.log(e), 0 == r.repeat_gzh() && 1 == r.repeat_gzhkk() && (this.setData({
            public: !0
        }), wx.setStorageSync("repeat_gzh", 1)), e.source && this.setData({
            ss_source: e.source
        }), o.setpageshow();
    },
    onShow: function() {
        o.setpageshow();
    },
    onUnload: function() {
        this.setData({
            public: !1
        }), wx.setStorageSync("repeat_gzh", 1);
    },
    callBack: function(o) {
        var a = this;
        return t(e().mark(function t() {
            var n;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = a, console.log(o), !r.get_open_id() || "" === r.get_open_id()) {
                        e.next = 7;
                        break;
                    }
                    return wx.redirectTo({
                        url: "login?source=" + n.data.ss_source
                    }), e.abrupt("return");

                  case 7:
                    return e.prev = 7, wx.showLoading({
                        title: "正在加载..."
                    }), e.next = 11, r.getUserProfile();

                  case 11:
                    wx.hideLoading(), wx.getStorageSync("userId") ? wx.navigateBack({
                        delta: 1
                    }) : wx.redirectTo({
                        url: "login?source=" + n.data.ss_source
                    }), e.next = 19;
                    break;

                  case 15:
                    e.prev = 15, e.t0 = e.catch(7), wx.hideLoading(), a.showModal();

                  case 19:
                    return e.abrupt("return");

                  case 20:
                  case "end":
                    return e.stop();
                }
            }, t, null, [ [ 7, 15 ] ]);
        }))();
    },
    onHide: function() {
        this.setData({
            public: !1
        }), wx.setStorageSync("repeat_gzh", 1), o.hide();
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