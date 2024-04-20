var a = getApp(), o = require("../../../static/md5/md5.js");

Page({
    data: {
        focus1: !0,
        userName: a.globalData.userInfo.userId,
        oldpassword: "",
        password: "",
        password1: ""
    },
    changePassWord: function(s) {
        if (console.log(this.data.password, this.data.password1), this.data.password1 != this.data.password) return wx.showToast({
            title: "密码不一致！",
            icon: "none",
            duration: 1e3
        }), 0;
        wx.showLoading({
            title: "修改中...",
            mask: !0
        }), wx.request({
            url: a.globalData.serverAddress + "/userManage/updatePsw",
            method: "post",
            data: {
                password: o.hex_md5(this.data.oldpassword),
                newPassword: o.hex_md5(this.data.password)
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: a.globalData.Cookie
            },
            dataType: "json",
            success: function(a) {
                console.log(a), 1 == a.data.success && "修改成功" == a.data.error ? wx.showToast({
                    title: "修改成功！",
                    icon: "success",
                    duration: 2e3
                }) : wx.showToast({
                    title: "修改失败",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: "请求异常请重新请求！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    opw: function(a) {
        this.setData({
            oldpassword: a.detail.value
        });
    },
    pw: function(a) {
        this.setData({
            password: a.detail.value
        });
    },
    pw1: function(a) {
        this.setData({
            password1: a.detail.value
        });
    },
    onReady: function() {
        this.setData({
            userName: a.globalData.userInfo.userId
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});