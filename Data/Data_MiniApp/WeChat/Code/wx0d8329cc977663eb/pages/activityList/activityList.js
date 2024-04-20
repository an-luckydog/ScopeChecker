var a = getApp(), t = require("../../utils/util.js");

Page({
    data: {
        announcementLength: 4,
        announcemenRecordsTotal: 0,
        loadingDisplay: "display:none",
        noMsgDisplay: "display:none",
        hasLocation: !1,
        noList: "display:none"
    },
    onLoad: function(a) {},
    onReady: function() {
        this.setAnnouncement(10);
    },
    setAnnouncement: function(n) {
        null == n && (n = 4);
        var e = this;
        wx.request({
            url: a.globalData.serverAddress + "/announcement/listPage",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: a.globalData.Cookie
            },
            method: "POST",
            dataType: "json",
            data: {
                start: 0,
                length: n
            },
            success: function(a) {
                e.data.announcemenRecordsTotal = a.data.recordsTotal;
                var n = [];
                0 == a.data.data.length && e.setData({
                    noList: "display:block;text-align: center;padding:30rpx"
                });
                for (var o in a.data.data) n.push({
                    id: a.data.data[o].ID,
                    name: a.data.data[o].TITLE,
                    content: a.data.data[o].ACT_CONTENT,
                    where: a.data.data[o].ACT_PLACE,
                    startTime: t.formatTime(new Date(a.data.data[o].ACT_START_DATE))
                });
                e.setData({
                    activitylist: n,
                    loadingDisplay: "display:none"
                });
            }
        });
    },
    onReachBottom: function() {
        var a = this;
        this.data.announcementLength < this.data.announcemenRecordsTotal ? (this.data.announcementLength += 10, 
        this.setData({
            loadingDisplay: "display:block"
        }), this.setAnnouncement(this.data.announcementLength)) : (this.setData({
            noMsgDisplay: "display:block"
        }), setTimeout(function() {
            a.setData({
                noMsgDisplay: "display:none"
            });
        }, 1500));
    }
});