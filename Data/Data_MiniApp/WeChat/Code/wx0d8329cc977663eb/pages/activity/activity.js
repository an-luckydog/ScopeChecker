var t, e = getApp();

Page({
    data: {
        noteType: "",
        couldNotSigin: "display:none",
        sigInBtn: "display:none",
        activityName: "",
        couldEnroll: !1,
        signNumber: 0
    },
    onLoad: function(a) {
        t = a, this.setData({
            noteType: a.type
        });
        var i = this;
        wx.request({
            url: e.globalData.serverAddress + "/activity/getAttendNumByUserIdAndActivityId",
            data: {
                activityId: a.id
            },
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: e.globalData.Cookie
            },
            dataType: "json",
            success: function(t) {
                1 == t.data.success ? i.setData({
                    signNumber: t.data.data.ATTEND_REGISTER
                }) : wx.showToast({
                    title: "获取活动列表失败，请重新获取！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    onReady: function() {
        var a = this;
        wx.request({
            url: e.globalData.serverAddress + "/activity/getActivityList",
            data: {
                activityId: t.id
            },
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: e.globalData.Cookie
            },
            dataType: "json",
            success: function(t) {
                if (1 == t.data.success) {
                    var e = t.data.data[0];
                    new Date().getTime() - new Date(e.ACTIVITY_END.replace(/-/g, "/")).getTime() > 9e6 ? a.setData({
                        couldNotSigin: "display:block"
                    }) : a.setData({
                        sigInBtn: "display:block"
                    }), new Date().getTime() - new Date(e.ACTIVITY_END.replace(/-/g, "/")).getTime() < 0 ? a.setData({
                        couldEnroll: !0
                    }) : a.setData({
                        couldEnroll: !1
                    }), a.setData({
                        activityName: e.PROJECT_NAME,
                        unit: e.UNIT_NAME,
                        startTime: e.ACTIVITY_START.substring(0, 16),
                        endTime: e.ACTIVITY_END.substring(0, 16),
                        activityIntroduce: e.ACTIVITY_CONTENT,
                        activityWhere: e.ACTIVITY_PLACE
                    });
                } else wx.showToast({
                    title: "获取活动列表失败，请重新获取！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    ActivityType: function(t, e) {
        var a = parseInt(new Date().getTime());
        return a < parseInt(t) ? {
            type: "未开始",
            color: "info"
        } : a > parseInt(e) ? {
            type: "已结束",
            color: "end"
        } : {
            type: "进行中",
            color: "inTime"
        };
    },
    joinActivity: function(a) {
        wx.showLoading({
            title: "报名中...",
            mask: !0
        }), wx.request({
            url: e.globalData.serverAddress + "/activity/addActivityAttend",
            data: {
                activityId: t.id
            },
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: e.globalData.Cookie
            },
            dataType: "json",
            success: function(t) {
                wx.hideLoading(), 1 == t.data.success ? wx.showToast({
                    title: "报名成功！",
                    duration: 2e3,
                    success: function() {}
                }) : wx.showToast({
                    title: t.data.error,
                    icon: "none",
                    duration: 2e3,
                    success: function() {}
                });
            }
        });
    },
    toSignIn: function(e) {
        var a = this;
        wx.navigateTo({
            url: "../signIn/signIn?id=" + t.id + "&name=" + a.data.activityName + "&unit=" + a.data.unit
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});