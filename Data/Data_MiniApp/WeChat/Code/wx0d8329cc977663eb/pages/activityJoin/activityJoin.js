var t = getApp(), a = require("../../utils/util.js");

Page({
    data: {
        goinActivityList: [],
        noMsgDisplay: "display:none",
        loadingDisplay: "display:none",
        activityListLength: 10,
        listRecordsTotal: 0,
        noList: "display:none"
    },
    getJoinActivityList: function(i) {
        var e = this;
        wx.request({
            url: t.globalData.serverAddress + "/activity/getActivityByUser",
            data: {
                userId: t.globalData.userInfo.userId,
                start: 1,
                length: i
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: t.globalData.Cookie
            },
            method: "post",
            dataType: "json",
            success: function(t) {
                if (1 == t.data.success) {
                    console.log(t.data.data.length), 0 == t.data.data.length && e.setData({
                        noList: "display:block;text-align: center;padding:30rpx"
                    }), e.goinActivityList = [], e.data.listRecordsTotal = t.data.recordsTotal;
                    for (var i in t.data.data) {
                        var o = {
                            startTime: t.data.data[i].ACTIVITY_START,
                            startTimeShow: a.formatTime(new Date(t.data.data[i].ACTIVITY_START)),
                            place: t.data.data[i].ACTIVITY_PLACE,
                            name: t.data.data[i].PROJECT_NAME,
                            id: t.data.data[i].ACTIVITY_ID,
                            content: t.data.data[i].ACTIVITY_CONTENT,
                            type: e.ActivityType(t.data.data[i].ACTIVITY_START, t.data.data[i].ACTIVITY_END).type,
                            color: e.ActivityType(t.data.data[i].ACTIVITY_START, t.data.data[i].ACTIVITY_END).color
                        };
                        e.goinActivityList.push(o);
                    }
                    e.setData({
                        goinActivityList: e.goinActivityList,
                        loadingDisplay: "display:none"
                    });
                } else wx.showToast({
                    title: "获取已参加活动列表失败，请重新获取！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    ActivityType: function(t, a) {
        var i = parseInt(new Date().getTime());
        return i < parseInt(t) ? {
            type: "未开始",
            color: "info"
        } : i > parseInt(a) ? {
            type: "已结束",
            color: "end"
        } : {
            type: "进行中",
            color: "inTime"
        };
    },
    inActivity: function(t) {
        wx.navigateTo({
            url: "../activity/activity?id=" + t.target.id + "&type=" + t.target.dataset.type
        });
    },
    onReady: function() {
        this.getJoinActivityList(10);
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this;
        this.data.activityListLength < this.data.listRecordsTotal ? (this.data.activityListLength += 10, 
        this.setData({
            loadingDisplay: "display:block"
        }), this.getJoinActivityList(this.data.activityListLength)) : (this.setData({
            noMsgDisplay: "display:block"
        }), setTimeout(function() {
            t.setData({
                noMsgDisplay: "display:none"
            });
        }, 1500));
    },
    onShareAppMessage: function() {}
});