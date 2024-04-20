var t = getApp();

Page({
    data: {
        goinActivityList: [],
        noMsgDisplay: "display:none",
        loadingDisplay: "display:none",
        activityListLength: 10,
        listRecordsTotal: 0,
        noList: "display:none"
    },
    getJoinActivityList: function(a) {
        var i = this;
        wx.request({
            url: t.globalData.serverAddress + "/firm/getRecruitmentInformationList",
            data: {
                start: 0,
                length: a
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: t.globalData.Cookie
            },
            method: "post",
            dataType: "json",
            success: function(t) {
                if (1 == t.data.success) {
                    console.log(t.data.data.length), 0 == t.data.data.length && i.setData({
                        noList: "display:block;text-align: center;padding:30rpx"
                    }), i.goinActivityList = [], i.data.listRecordsTotal = t.data.recordsTotal;
                    for (var a in t.data.data) {
                        var n = {
                            title: t.data.data[a].TITLE,
                            content: t.data.data[a].CONTENT,
                            id: t.data.data[a].RECRUITMENT_ID
                        };
                        i.goinActivityList.push(n);
                    }
                    i.setData({
                        goinActivityList: i.goinActivityList,
                        loadingDisplay: "display:none"
                    });
                } else wx.showToast({
                    title: "获取招聘信息列表失败，请重新获取！",
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
            url: "offerPage?id=" + t.target.id
        });
    },
    onReady: function() {
        this.getJoinActivityList(10);
    },
    onShow: function() {
        t.globalData.haveOffer = 0, this.setData({
            redD: t.globalData.haveOffer
        });
    },
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