Component({
    properties: {
        requesting: {
            type: Boolean,
            value: !1,
            observer: "requestingEnd"
        },
        end: {
            type: Boolean,
            value: !1
        },
        emptyShow: {
            type: Boolean,
            value: !1
        },
        listCount: {
            type: Number,
            value: 0
        },
        emptyUrl: {
            type: String,
            value: "/assets/image/empty/empty.png"
        },
        emptyText: {
            type: String,
            value: "未找到数据"
        },
        hasTop: {
            type: Boolean,
            value: !1
        },
        refreshSize: {
            type: Number,
            value: 90,
            observer: "refreshChange"
        },
        topSize: {
            type: Number,
            value: 0
        },
        bottomSize: {
            type: Number,
            value: 0
        },
        color: {
            type: String,
            value: ""
        },
        enableBackToTop: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        mode: "refresh",
        successShow: !1,
        successTran: !1,
        refreshStatus: 1,
        move: -45,
        scrollHeight1: 0,
        scrollHeight2: 0,
        timer: null,
        scrollTop: 0,
        overOnePage: !1
    },
    methods: {
        scroll: function(e) {
            var t = this;
            this.setData({
                overOnePage: !0
            }), clearTimeout(this.data.timer), this.setData({
                timer: setTimeout(function() {
                    t.setData({
                        scrollTop: e.detail.scrollTop
                    });
                }, 100)
            });
        },
        change: function(e) {
            var t = this.data.refreshStatus, s = e.detail.y;
            t >= 3 || (s > -10 ? this.setData({
                refreshStatus: 2
            }) : this.setData({
                refreshStatus: 1
            }));
        },
        touchend: function() {
            var e = this.data.refreshStatus;
            e >= 3 || (2 === e ? (wx.vibrateShort(), this.setData({
                refreshStatus: 3,
                move: 0,
                mode: "refresh"
            }), this.triggerEvent("refresh")) : 1 === e && this.setData({
                move: this.data.scrollHeight1
            }));
        },
        more: function() {
            this.properties.end || (this.setData({
                mode: "more"
            }), this.triggerEvent("more"));
        },
        requestingEnd: function(e, t) {
            var s = this;
            "more" !== this.data.mode && (!0 === t && !1 === e ? setTimeout(function() {
                s.setData({
                    successShow: !0,
                    refreshStatus: 4,
                    move: s.data.scrollHeight2
                }), setTimeout(function() {
                    s.setData({
                        successTran: !0,
                        move: s.data.scrollHeight1
                    }), setTimeout(function() {
                        s.setData({
                            refreshStatus: 1,
                            successShow: !1,
                            successTran: !1,
                            move: s.data.scrollHeight1
                        });
                    }, 350);
                }, 1500);
            }, 600) : 3 !== this.data.refreshStatus && this.setData({
                refreshStatus: 3,
                move: 0
            }));
        },
        refreshChange: function(e, t) {
            var s = this;
            e <= 80 && this.setData({
                refreshSize: 80
            }), setTimeout(function() {
                return s.init();
            }, 10);
        },
        init: function() {
            var e = this, t = (wx.getSystemInfoSync().windowWidth || 375) / 750 * 70;
            wx.createSelectorQuery().in(this).select("#refresh").boundingClientRect(function(s) {
                e.setData({
                    scrollHeight1: -s.height,
                    scrollHeight2: t - s.height
                });
            }).exec();
        }
    },
    ready: function() {
        this.init();
    }
});