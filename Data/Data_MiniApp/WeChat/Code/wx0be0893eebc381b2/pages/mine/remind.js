var t = getApp();

Page({
    data: {
        yushu: 0,
        current: 10,
        current1: 0,
        isConnected: !0,
        networkType: t.networkType,
        week_m: [],
        formid: [],
        week: [ {
            nums: "一",
            sdd: !1,
            numday: 1
        }, {
            nums: "二",
            sdd: !1,
            numday: 2
        }, {
            nums: "三",
            sdd: !1,
            numday: 3
        }, {
            nums: "四",
            sdd: !1,
            numday: 4
        }, {
            nums: "五",
            sdd: !1,
            numday: 5
        }, {
            nums: "六",
            sdd: !1,
            numday: 6
        }, {
            nums: "日",
            sdd: !1,
            numday: 7
        } ],
        time_shi: [ {
            h: "23"
        }, {
            h: "00"
        }, {
            h: "01"
        }, {
            h: "02"
        }, {
            h: "03"
        }, {
            h: "04"
        }, {
            h: "05"
        }, {
            h: "06"
        }, {
            h: "07"
        }, {
            h: "08"
        }, {
            h: "09"
        }, {
            h: "10"
        }, {
            h: "11"
        }, {
            h: "12"
        }, {
            h: "13"
        }, {
            h: "14"
        }, {
            h: "15"
        }, {
            h: "16"
        }, {
            h: "17"
        }, {
            h: "18"
        }, {
            h: "19"
        }, {
            h: "20"
        }, {
            h: "21"
        }, {
            h: "22"
        } ],
        time_fen: [ {
            m: "50"
        }, {
            m: "00"
        }, {
            m: "10"
        }, {
            m: "20"
        }, {
            m: "30"
        }, {
            m: "40"
        } ]
    },
    onLoad: function(e) {
        t.pagesInit(), this.time_bu();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "超牢固的背单词方法",
            path: "/pages/index/index",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    current: function(t) {
        this.setData({
            current: t.detail.current
        });
    },
    current2: function(t) {
        this.setData({
            current1: t.detail.current
        });
    },
    week_xuan: function(t) {
        var e = t.currentTarget.dataset.index, n = this.data.week;
        if (n[e].sdd) {
            n[e].sdd = !1, this.setData({
                week: n
            });
            var a = this.data.week_m, d = this.data.formid, s = a.indexOf(n[e].numday);
            a.splice(s, 1), d.splice(e, 1), this.setData({
                week_m: a,
                formid: d
            });
        } else {
            n[e].sdd = !0, this.setData({
                week: n
            });
            var o = this.data.formid;
            o.push(t.detail.formId), this.setData({
                formid: o
            });
        }
    },
    formSubmit: function(e) {
        var n = this;
        t.showLoading("加载中...");
        for (var a = n.data.formid, d = [], s = 0; s < n.data.week.length; s++) 1 == n.data.week[s].sdd && d.push(n.data.week[s].numday);
        a.push(e.detail.formId);
        var o = {
            formIdList: a,
            dayList: d,
            hour: n.data.current,
            minute: 10 * n.data.current1
        };
        t.post_ajax("/user/setClock", o, function(e) {
            0 == e.data.state && (d && "" != d ? (t.hideLoading(), wx.showToast({
                title: "保存成功",
                icon: "none",
                duration: 1500
            }), t.mta.Event.stat("remind_preservation", {}), getApp().mtj.trackEvent("remind_preservation"), 
            n.time_bu()) : (n.setData({
                current1: 0,
                current: 0
            }), t.hideLoading(), wx.setStorageSync("red_spot", 1), wx.showToast({
                title: "取消成功",
                icon: "none",
                duration: 1500
            })));
        }, 4);
    },
    time_bu: function() {
        var e = this;
        t.post_ajax("/user/getClock", {
            openId: t.get_open_id()
        }, function(t) {
            if (0 == t.data.state && t.data.resInfo && null != t.data.resInfo && t.data.resInfo.weekList && (console.log("9999999"), 
            t.data.resInfo.hour >= 0 && t.data.resInfo.minute >= 0 && (e.setData({
                current: t.data.resInfo.hour,
                current1: t.data.resInfo.minute / 10
            }), console.log(e.data.current1)), t.data.resInfo.weekList)) {
                for (var n = t.data.resInfo.weekList, a = e.data.week, d = 0; d < n.length; d++) for (var s = 0; s < a.length; s++) n[d] == a[s].numday && (a[s].sdd = !0);
                e.setData({
                    week: a
                });
            }
        }, 4);
    }
});