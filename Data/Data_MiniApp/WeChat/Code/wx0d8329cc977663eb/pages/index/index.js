function t(t, a, i, e) {
    var o = t * Math.PI / 180, s = i * Math.PI / 180, n = o - s, c = a * Math.PI / 180 - e * Math.PI / 180, l = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(n / 2), 2) + Math.cos(o) * Math.cos(s) * Math.pow(Math.sin(c / 2), 2)));
    return l *= 6378.137, 1e3 * (l = Math.round(1e4 * l) / 1e4);
}

function a(t) {
    wx.request({
        url: i.globalData.serverAddress + "/activity/updateActivityAttend",
        data: {
            activityId: t
        },
        method: "post",
        header: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: i.globalData.Cookie
        },
        dataType: "json",
        success: function(t) {
            1 == t.data.success ? wx.showToast({
                title: "签到成功",
                duration: 2e3,
                success: function() {}
            }) : wx.showToast({
                icon: "none",
                title: t.data.error,
                duration: 2e3,
                success: function() {}
            });
        }
    });
}

var i = getApp();

Page({
    data: {
        movies: [],
        catalogs: [ {
            catalogName: "活动列表",
            select: 0
        }, {
            catalogName: "新闻资讯",
            select: 1
        } ],
        catalogSelect: 0,
        notice: [],
        noList: "display:none;",
        noMsgDisplay: "display:none",
        loadingDisplay: "display:none",
        activityListLength: 8,
        newsListLength: 8,
        listRecordsTotal: 0,
        newlistRecordsTotal: 0,
        activitylist: []
    },
    onLoad: function(t) {
        this.getPhotoUrl(), this.getActivityList(8), wx.startLocationUpdate();
    },
    onReady: function() {},
    onUnload: function() {},
    onShow: function() {
        "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
            selected: 0,
            redD: i.globalData.haveOffer
        });
    },
    onReachBottom: function() {
        var t = this;
        0 == this.data.catalogSelect ? this.data.activityListLength < this.data.listRecordsTotal ? (this.data.activityListLength += 10, 
        this.setData({
            loadingDisplay: "display:block"
        }), this.getActivityList(this.data.activityListLength)) : (this.setData({
            noMsgDisplay: "display:block"
        }), setTimeout(function() {
            t.setData({
                noMsgDisplay: "display:none"
            });
        }, 1500)) : this.data.newsListLength < this.data.newlistRecordsTotal ? (this.data.newsListLength += 10, 
        this.setData({
            loadingDisplay: "display:block"
        }), this.getNewsList(this.data.newsListLength)) : (this.setData({
            noMsgDisplay: "display:block"
        }), setTimeout(function() {
            t.setData({
                noMsgDisplay: "display:none"
            });
        }, 1500));
    },
    chooseCatalog: function() {
        1 == this.data.catalogSelect ? (this.getActivityList(this.data.activityListLength), 
        this.setData({
            catalogSelect: 0
        })) : (this.getNewsList(this.data.newsListLength), this.setData({
            catalogSelect: 1
        }));
    },
    getActivityList: function(t) {
        console.log("获取活动列表！" + new Date()), console.log("请求头参数Cookie：", i.globalData.Cookie);
        var a = this;
        wx.request({
            url: i.globalData.serverAddress + "/activity/getActivityList",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: i.globalData.Cookie
            },
            method: "POST",
            dataType: "json",
            data: {
                start: 0,
                length: t
            },
            success: function(t) {
                if (console.log("获取活动列表：", t.data), a.data.activitylist = [], 1 == t.data.success) {
                    0 == t.data.data.length && a.setData({
                        noList: "display:block;text-align: center;padding:30rpx"
                    }), a.data.listRecordsTotal = t.data.recordsTotal;
                    var i = t.data.data;
                    for (var e in i) {
                        var o = {
                            name: i[e].PROJECT_NAME,
                            startTime: i[e].ACTIVITY_START.substring(0, 16),
                            endTime: i[e].ACTIVITY_END.substring(0, 16),
                            where: i[e].ACTIVITY_PLACE,
                            score: i[e].PROJECT_SCORE,
                            content: i[e].ACTIVITY_CONTENT,
                            unit: i[e].UNIT_NAME,
                            id: i[e].ACTIVITY_ID
                        };
                        a.data.activitylist.push(o);
                    }
                    a.setData({
                        activitylist: a.data.activitylist,
                        loadingDisplay: "display:none"
                    });
                } else wx.showToast({
                    title: "获取活动列表失败，请重新获取！",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(t) {
                wx.hideLoading(), console.log("获取活动列表异常", t);
            }
        });
    },
    getNewsList: function(t) {
        var a = this;
        console.log("获取新闻列表！" + new Date()), wx.request({
            url: i.globalData.serverAddress + "/activity/getNewsList",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: i.globalData.Cookie
            },
            method: "POST",
            dataType: "json",
            data: {
                start: 0,
                length: t
            },
            success: function(t) {
                if (a.data.newsList = [], 1 == t.data.success) {
                    0 == t.data.data.length && a.setData({
                        noList: "display:block;text-align: center;padding:30rpx"
                    }), a.data.newlistRecordsTotal = t.data.recordsTotal;
                    var i = t.data.data;
                    for (var e in i) {
                        var o = {
                            name: i[e].TITLE,
                            startTime: i[e].CREATE_TIME,
                            content: i[e].CONTENT.replace(/<p>|&nbsp;|&emsp;|<br>|<b>|<i[\w\W]{0,10}>|<u>|<\/p>|<\/b>|<\/i>|<\/u>|<img[\s\S]+">/g, ""),
                            id: i[e].NEWS_ID
                        };
                        a.data.newsList.push(o);
                    }
                    a.setData({
                        newsList: a.data.newsList,
                        loadingDisplay: "display:none"
                    });
                } else wx.showToast({
                    title: "获取活动列表失败，请重新获取！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    inActivity: function(t) {
        wx.navigateTo({
            url: "../activity/activity?id=" + t.target.id + "&type=0"
        });
    },
    inNews: function(t) {
        wx.navigateTo({
            url: "../activity/news?id=" + t.target.id
        });
    },
    getPhotoUrl: function() {
        var t = this;
        console.log("获取图片！" + new Date()), wx.request({
            url: i.globalData.serverAddress + "/photo/getBannerUrl",
            method: "post",
            dataType: "json",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                Cookie: i.globalData.Cookie
            },
            success: function(a) {
                if (a.data.data.length >= 4) for (var i = [], e = a.data.data.length - 1; e >= a.data.data.length - 4; e--) {
                    var o = "http://" + a.data.data[e].photoUrl;
                    i.push({
                        url: o
                    });
                }
                t.setData({
                    movies: i
                });
            }
        });
    },
    goactsearch: function() {
        wx.navigateTo({
            url: "../activityList/activityList"
        });
    },
    goactjoin: function() {
        wx.navigateTo({
            url: "../activityJoin/activityJoin"
        });
    },
    goaward: function() {
        e();
    },
    goactscore: function() {
        wx.navigateTo({
            url: "../scoreInquiry/score"
        });
    }
});

var e = function(i) {
    wx.showLoading({
        title: "正在获取位置信息...",
        mask: !0
    }), wx.getLocation({
        type: "gcj02",
        altitude: !0,
        success: function(i) {
            var e = i.latitude, o = i.longitude;
            console.log(i.accuracy, "精度");
            var s = i.accuracy + 60;
            if (s > 460) return wx.hideLoading(), wx.showToast({
                title: "您当前的位置情况较差，请开启手机定位或选择开阔地点重新扫码签到",
                icon: "none",
                duration: 2e3
            }), 0;
            wx.scanCode({
                onlyFromCamera: !0,
                success: function(i) {
                    wx.hideLoading(), console.log(i.result.split("&")[1], i.result.split("&")[2]), console.log(e, o), 
                    console.log(t(e, o, i.result.split("&")[1], i.result.split("&")[2])), t(e, o, i.result.split("&")[1], i.result.split("&")[2]) <= s ? a(i.result.split("&")[0]) : wx.showToast({
                        title: "您未在活动指定范围内！",
                        icon: "none",
                        duration: 2e3
                    });
                },
                fail: function() {
                    wx.hideLoading();
                }
            });
        },
        fail: function() {
            wx.hideLoading(), wx.showToast({
                title: "获取定位失败，请开启手机定位功能或授予定位权限",
                icon: "none",
                duration: 2e3
            }), wx.getSetting({
                success: function(t) {
                    t.authSetting["scope.userLocation"] || wx.showModal({
                        title: "是否授权当前位置",
                        content: "需要获取您的地理位置，请确认授权，否则地图功能将无法使用",
                        success: function(t) {
                            t.confirm && wx.openSetting({
                                success: function(t) {
                                    !0 === t.authSetting["scope.userLocation"] ? wx.showToast({
                                        title: "授权成功",
                                        icon: "success",
                                        duration: 1e3
                                    }) : wx.showToast({
                                        title: "授权失败",
                                        icon: "success",
                                        duration: 1e3
                                    });
                                }
                            });
                        }
                    });
                },
                fail: function(t) {
                    wx.showToast({
                        title: "调用授权窗口失败",
                        icon: "none",
                        duration: 1e3
                    });
                }
            });
        }
    });
};