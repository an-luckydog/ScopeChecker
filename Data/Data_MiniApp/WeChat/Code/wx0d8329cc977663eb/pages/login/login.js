var a = getApp(), e = require("../../static/md5/md5.js");

Page({
    data: {
        message: "",
        passwordtype: "password",
        user_id: "",
        code: "",
        reason: "",
        disable: "",
        userName: "",
        password: ""
    },
    setName: function(a) {
        this.data.userName = a.detail.value;
    },
    setPassword: function(a) {
        this.data.password = a.detail.value;
    },
    login: function() {
        var s = this;
        wx.showLoading({
            title: "登陆中..."
        }), wx.login({
            success: function(o) {
                o.code ? (console.log("发送请求"), wx.request({
                    url: a.globalData.serverAddress + "/login/checkLogin",
                    method: "POST",
                    data: {
                        code: o.code,
                        userId: s.data.userName,
                        password: e.hex_md5(s.data.password)
                    },
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        e.header["set-cookie"] ? a.globalData.Cookie = e.header["set-cookie"] : a.globalData.Cookie = e.header["Set-Cookie"], 
                        wx.hideLoading(), null == e.data.error && 1 == e.data.success ? (a.globalData.userInfo = e.data.data, 
                        a.globalData.haveOffer = e.data.data.unReadRecruitmentInformationCount, wx.switchTab({
                            url: "/pages/index/index"
                        })) : s.setData({
                            message: e.data.error
                        });
                    },
                    fail: function(a) {
                        wx.hideLoading(), console.log("登录错误信息", a), s.setData({
                            message: a.errMsg
                        });
                    }
                })) : (wx.hideLoading(), console.log("微信登录失败！" + o.errMsg), s.setData({
                    message: "微信登录失败！"
                }));
            },
            fail: function(a) {
                wx.hideLoading(), console.log(a);
            }
        });
    },
    formSubmit: function(a) {
        this.setData({
            user_id: a.detail.value.account,
            password: a.detail.value.password
        }), this.login();
    },
    toPassWord: function() {
        this.setData({
            focus2: !0
        });
    }
});