var o, t = getApp();

Page({
    data: {
        noteType: "",
        couldNotSigin: "display:none",
        sigInBtn: "display:none",
        activityName: "",
        couldEnroll: !1,
        RECRUITMENT_ID: ""
    },
    getCompanyMsg: function() {
        console.log("toCompany");
        wx.navigateTo({
            url: "../../company/companyIntroduces?id=" + this.data.RECRUITMENT_ID
        });
    },
    onLoad: function(t) {
        o = t;
    },
    onReady: function() {
        var n = this;
        wx.request({
            url: t.globalData.serverAddress + "/firm/getRecruitmentInformationList",
            data: {
                recruitmentId: o.id
            },
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: t.globalData.Cookie
            },
            dataType: "json",
            success: function(o) {
                if (1 == o.data.success) {
                    var t = o.data.data[0];
                    n.setData({
                        RECRUITMENT_ID: t.USER_ID,
                        activityName: t.TITLE,
                        startTime: t.CREATE_TIME.substring(0, 16),
                        activityIntroduce: t.CONTENT
                    });
                } else wx.showToast({
                    title: "获取详情失败，请重新获取！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});