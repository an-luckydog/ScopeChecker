var e = getApp();

Page({
    data: {
        listarray: [ {
            text: "功能介绍",
            imgsrc: "../images/my/introduce.png",
            bindtap: "introduce"
        }, {
            text: "企业发布",
            imgsrc: "../images/my/offer.png",
            bindtap: "msg"
        }, {
            text: "个人信息",
            imgsrc: "../images/my/myNote.png",
            bindtap: "myNote"
        }, {
            text: "修改密码",
            imgsrc: "../images/my/edit.png",
            bindtap: "changePassWord"
        }, {
            text: "退出登录",
            imgsrc: "../images/my/logout.png",
            bindtap: "logout"
        } ],
        showCNews: "none",
        num: e.globalData.userInfo.userName
    },
    logout: function() {
        wx.request({
            url: e.globalData.serverAddress + "/login/logOut",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: e.globalData.Cookie
            },
            success: function(e) {
                console.log(e), wx.removeStorageSync("sessionid"), wx.redirectTo({
                    url: "/pages/login/login"
                });
            }
        });
    },
    onLoad: function() {
        this.setData({
            num: e.globalData.userInfo.userName
        });
    },
    onShow: function() {
        "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
            selected: 1,
            redD: e.globalData.haveOffer
        }), console.log(e.globalData.haveOffer), 0 == e.globalData.haveOffer ? this.setData({
            showCNews: "none"
        }) : this.setData({
            showCNews: "inline-block"
        });
    },
    introduce: function() {
        wx.navigateTo({
            url: "../my/introduce/introduce"
        });
    },
    msg: function() {
        wx.navigateTo({
            url: "../my/offer/offer"
        });
    },
    myNote: function() {
        wx.navigateTo({
            url: "../my/center/center"
        });
    },
    changePassWord: function() {
        wx.navigateTo({
            url: "../my/passWord/passWord"
        });
    },
    errorReturn: function() {
        wx.navigateTo({
            url: "../error/error?"
        });
    }
});