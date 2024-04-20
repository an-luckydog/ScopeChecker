var t = require("../../utils/tools.js"), a = getApp();

Page({
    data: {
        nickName: "",
        userId: "",
        nickFlag: "hide",
        btnActive: !1
    },
    onLoad: function(a) {
        var e = this;
        wx.getStorage({
            key: "userId",
            success: function(t) {
                e.setData({
                    userId: t.data
                });
            }
        }), t.setpageshow();
    },
    onReady: function() {},
    onShow: function() {
        t.setpageshow();
    },
    onHide: function() {
        t.hide();
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    set_nick_name: function(t) {
        this.setData({
            nickName: t.detail.value
        }), a.setDelBtn(this, t, "nickFlag"), t.detail.value.length > 1 ? this.setData({
            btnActive: !0
        }) : this.setData({
            btnActive: !1
        });
    },
    clear_nick_name: function() {
        this.setData({
            nickName: "",
            nickFlag: "hide"
        });
    },
    modify_nick_name: function(t) {
        if (this.data.btnActive) {
            var e = this;
            if (this.data.nickName.length >= 2) {
                var n = this.data.nickName;
                a.post_ajax_course("/users/checkUserName", {
                    userName: this.data.nickName
                }, function(t) {
                    if (200 === t.statusCode) {
                        if (-2 == t.data.state) {
                            if (n.length > 7) return void a.onShowToast(t.data.stateInfo);
                            n = t.data.resInfo[0];
                        }
                        -2 != t.data.state && 0 != t.data.state || a.post_ajax_course("/users/updateUserName", {
                            userId: e.data.userId,
                            oldUserName: "0",
                            newUserName: n
                        }, function(t) {
                            200 === t.statusCode ? 0 == t.data.state ? (wx.setStorageSync("userName", n), wx.navigateBack({
                                delta: 2
                            })) : a.onShowToast(t.data.stateInfo) : a.onShowToast("昵称修改失败!");
                        });
                    } else a.onShowToast("昵称修改失败");
                });
            }
        }
    }
});