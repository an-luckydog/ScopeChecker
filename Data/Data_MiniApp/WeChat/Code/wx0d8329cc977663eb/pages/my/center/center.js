var e = getApp();

Page({
    data: {},
    onLoad: function(e) {
        this.getUserMsg();
    },
    onReady: function() {},
    onShareAppMessage: function() {},
    getUserMsg: function() {
        var a = this;
        wx.request({
            url: e.globalData.serverAddress + "/userManage/getStudentUserList",
            method: "post",
            data: {
                userId: e.globalData.userInfo.userId
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: e.globalData.Cookie
            },
            dataType: "json",
            success: function(e) {
                if (1 == e.data.success) {
                    var s = e.data.data[0];
                    console.log(s), a.setData({
                        userName: s.USERNAME,
                        userId: s.USER_ID,
                        userSchool: s.UNIT_NAME,
                        userMajor: s.MAJOR_NAME,
                        userClass: s.CLASS_NAME
                    });
                } else wx.showToast({
                    title: "获取个人信息失败，请重新获取！",
                    icon: "none",
                    duration: 2e3
                });
            }
        }), wx.request({
            url: e.globalData.serverAddress + "/score/getScoreRankByUserId",
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: e.globalData.Cookie
            },
            dataType: "json",
            success: function(e) {
                if (1 == e.data.success) {
                    var s = e.data.data;
                    console.log(s), a.setData({
                        userAllScore: s.totalScore,
                        userClassRanking: s.rankInClass,
                        userMajorRanking: s.rankInMajor
                    });
                } else wx.showToast({
                    title: "获取个人信息失败，请重新获取！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
});