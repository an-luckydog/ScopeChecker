var t = getApp();

Page({
    data: {
        errorType: "加分失败",
        modelDisplay: "display:none",
        eActivityDisplay: "display:none",
        saveContent: "",
        problemShow: "display:none"
    },
    onLoad: function(t) {},
    onReady: function() {},
    selectType: function() {
        var t = this, a = [ "加分失败", "分数异常", "活动举报", "软件问题" ];
        wx.showActionSheet({
            itemList: a,
            success: function(i) {
                t.setData({
                    errorType: a[i.tapIndex]
                });
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        });
    },
    showModel: function() {
        this.setData({
            modelDisplay: "display:block",
            problemShow: "display:none",
            focus: !0
        });
        var t = this;
        wx.onKeyboardHeightChange(function(a) {
            if (0 == a.height) if ("" == t.data.saveContent) t.setData({
                modelDisplay: "display:none"
            }); else {
                var i = {
                    detail: {
                        value: t.data.saveContent
                    }
                };
                t.searchActivity(i);
            }
        });
    },
    saveContent: function(t) {
        this.setData({
            saveContent: t.detail.value
        });
    },
    forSearchActivity: function() {
        var t = {
            detail: {
                value: this.data.saveContent
            }
        };
        this.searchActivity(t);
    },
    searchActivity: function(a) {
        var i = this;
        wx.request({
            url: t.globalData.serverAddress + "/activity/getActivityList",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                Cookie: t.globalData.Cookie
            },
            method: "POST",
            dataType: "json",
            data: {
                activityName: a.detail.value
            },
            success: function(t) {
                if (console.log(t.data.success), 1 == t.data.success) {
                    var a = t.data.data;
                    i.data.activitylist = [];
                    for (var e in a) {
                        var s = {
                            name: a[e].PROJECT_NAME,
                            startTime: a[e].ACTIVITY_START.substring(0, 16),
                            endTime: a[e].ACTIVITY_END.substring(0, 16),
                            where: a[e].ACTIVITY_PLACE,
                            score: a[e].PROJECT_SCORE,
                            content: a[e].ACTIVITY_CONTENT,
                            unit: a[e].UNIT_NAME,
                            id: a[e].ACTIVITY_ID
                        };
                        i.data.activitylist.push(s);
                    }
                    i.setData({
                        activitylist: i.data.activitylist
                    });
                } else wx.showToast({
                    title: "获取活动列表失败，请重新获取！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    chooseActivity: function(t) {
        var a = this;
        console.log(t.currentTarget.id);
        for (var i = 0; i < this.data.activitylist.length; i++) if (this.data.activitylist[i].id == t.currentTarget.id) {
            this.setData({
                eActivityName: this.data.activitylist[i].name,
                eActivityContent: this.data.activitylist[i].content,
                eActivityWhere: this.data.activitylist[i].where,
                eActivityStartTime: this.data.activitylist[i].startTime,
                eActivityDisplay: "display:block",
                modelDisplay: "display:none"
            }), setTimeout(function() {
                a.setData({
                    problemShow: "display:block"
                });
            }, 20);
            break;
        }
    }
});