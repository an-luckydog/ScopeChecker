var t = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http.js")), e = getApp(), i = 1;

Page({
    data: {
        orderId: "",
        storeId: "",
        storeInfo: {},
        timeValMust: 0,
        chenckedCabinet: "",
        columns: [ "1小时", "2小时", "3小时", "4小时", "5小时", "6小时", "7小时", "8小时", "9小时", "10小时", "11小时", "12小时", "13小时", "14小时", "15小时", "16小时", "17小时", "18小时", "19小时", "20小时", "21小时", "22小时", "23小时", "24小时", "25小时", "26小时", "27小时", "28小时", "29小时", "30小时", "31小时", "32小时", "33小时", "34小时", "35小时", "36小时", "37小时", "38小时", "39小时", "40小时", "41小时", "42小时", "43小时", "44小时", "45小时", "46小时", "47小时", "48小时", "49小时", "50小时", "51小时", "52小时", "53小时", "54小时", "55小时", "56小时", "57小时" ],
        params: {
            cabinet: "",
            timeVal: 1
        },
        cellType: 1,
        total: 0,
        sizeType: 1,
        pricesList: [],
        background: [],
        loading: !1,
        cabinetList: {},
        time: "",
        isTimeShow: !1,
        isCostShow: !1,
        isAgreementShow: !1,
        isFullSucreen: e.globalData.bottom,
        imgUrl: t.default.imgUrl,
        indicatorDots: !0,
        vertical: !1,
        autoplay: !1,
        interval: 2e3,
        duration: 500,
        noSelect: t.default.imgUrl + "/info/no-check.png",
        hasSelect: t.default.imgUrl + "/info/check.png",
        selectIndex: [ {
            sureid: !0
        } ],
        userInfo: {}
    },
    onLoad: function(t) {
        this.setData({
            storeId: t.storeId,
            orderId: t.orderId,
            chenckedCabinet: t.lockName,
            cellType: t.cellType
        }, this.storeDetail({
            orderId: t.orderId,
            storeId: t.storeId
        }));
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        wx.getStorage({
            key: "userInfo",
            success: function(e) {
                t.setData({
                    userInfo: e.data
                });
            },
            fail: function() {}
        });
    },
    storeDetail: function(e) {
        var i = this;
        console.log("------"), t.default.storeDetail({
            storeId: e.storeId
        }, !1).then(function(t) {
            i.setData({
                storeInfo: t.storeInfo,
                background: t.fileInfos
            });
        }), this.caclOutTimeFuc(e);
    },
    caclOutTimeFuc: function(e) {
        var a = this;
        t.default.caclOutTime({
            orderId: e.orderId
        }, !1).then(function(t) {
            i = t, a.setData({
                isTimeShow: !1,
                timeValMust: t,
                time: i + "小时",
                "params.timeVal": i
            }), a.priceListFuc({
                storeId: e.storeId,
                priceType: 2
            });
        });
    },
    priceListFuc: function(e) {
        var a = this;
        t.default.priceList(e, !1).then(function(t) {
            for (var e = Number(a.data.cellType), s = t, r = 0, n = 0; n < s.length; n++) {
                var o = s[n];
                i < o.limitStart || (i > o.limitEnd ? r = a.accAdd(a.calcPrice(e, parseInt(o.limitEnd - o.limitStart), o), r) : i > o.limitStart && i <= o.limitEnd && (r = a.accAdd(a.calcPrice(e, parseInt(i - o.limitStart), o), r)));
            }
            a.setData({
                total: r.toFixed(2),
                sizeType: e,
                pricesList: t
            });
        });
    },
    selectRep: function(t) {
        var e = t.currentTarget.dataset.selectindex, i = this.data.selectIndex;
        i[e].sureid = !i[e].sureid, this.setData({
            selectIndex: i
        });
    },
    payClick: function() {
        var e = this, a = this;
        if (t.default.caclOutTime({
            orderId: this.data.orderId
        }, !1).then(function(t) {
            if ((i = t) != e.data.timeValMust) return e.setData({
                isTimeShow: !1,
                timeValMust: t,
                time: i + "小时",
                "params.timeVal": i
            }), e.priceListFuc({
                storeId: s.storeId,
                priceType: 2
            }), void wx.showToast({
                title: "时间有变请确定",
                icon: "none",
                duration: 2e3
            });
        }), this.data.time) if (this.data.selectIndex[0].sureid) {
            this.setData({
                loading: !0
            });
            var s = {
                frontTotalAmount: this.data.total,
                memberId: this.data.userInfo.id,
                openId: this.data.userInfo.openId,
                memberPhone: this.data.params.tel,
                rentalTime: i,
                orderId: this.data.orderId
            };
            t.default.renewal(s, !1).then(function(t) {
                if (e.setData({
                    loading: !1
                }), "{}" == JSON.stringify(t)) return wx.redirectTo({
                    url: "/pages/order_list/order_list?activeIndex=0"
                }), void a.setData({
                    LoadingShow: !1
                });
                var i, s = JSON.parse(t);
                i = {
                    timeStamp: s.timeStamp,
                    package: s.package,
                    paySign: s.paySign,
                    appid: s.appId,
                    nonceStr: s.nonceStr,
                    signType: "MD5",
                    success: function(t) {
                        wx.redirectTo({
                            url: "/pages/order_list/order_list?activeIndex=0"
                        }), a.setData({
                            LoadingShow: !1
                        });
                    },
                    fail: function(t) {
                        wx.redirectTo({
                            url: "/pages/order_list/order_list?activeIndex=0"
                        });
                    },
                    complete: function(t) {
                        console.log(t, "zhifu3");
                    }
                }, wx.requestPayment(i);
            });
        } else wx.showToast({
            title: "请勾选用户协议",
            icon: "none",
            duration: 2e3
        }); else wx.showToast({
            title: "请选择您租用的时间",
            icon: "none",
            duration: 2e3
        });
    },
    openAddress: function(t) {
        var e = t.currentTarget.dataset.item.latitude, i = t.currentTarget.dataset.item.longitude;
        wx.navigateTo({
            url: "/pages/map/index?longitude=" + i + "&latitude=" + e
        });
    },
    openCostFunc: function() {
        this.setData({
            isCostShow: !0
        });
    },
    closeCostFunc: function() {
        this.setData({
            isCostShow: !1
        });
    },
    openAgreeFunc: function() {
        this.setData({
            isAgreementShow: !0
        });
    },
    closeAgreementFunc: function() {
        this.setData({
            isAgreementShow: !1
        });
    },
    startTimeFunc: function() {
        this.setData({
            isTimeShow: !0
        });
    },
    sureTimeFunc: function() {
        i < this.data.timeValMust ? wx.showToast({
            title: "时间必须大于".concat(this.data.timeValMust),
            icon: "none",
            duration: 2e3
        }) : (this.setData({
            isTimeShow: !1,
            time: i + "小时",
            "params.timeVal": i
        }), this.priceListFuc({
            storeId: this.data.storeId,
            priceType: 2
        }));
    },
    closeTimeFunc: function() {
        this.setData({
            isTimeShow: !1
        });
    },
    onChange: function(t) {
        var e = t.detail, a = (e.picker, e.value), s = e.index;
        i = s + 1, a;
    },
    calcPrice: function(t, e, i) {
        var a = 0;
        switch (t) {
          case 1:
            a = i.smallPrice * e;
            break;

          case 2:
            a = i.midPrice * e;
            break;

          case 3:
            a = i.bigPrice * e;
        }
        return a;
    },
    accAdd: function(t, e) {
        var i, a, s;
        try {
            i = t.toString().split(".")[1].length;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            i = 0;
        }
        try {
            a = e.toString().split(".")[1].length;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            a = 0;
        }
        return (t * (s = Math.pow(10, Math.max(i, a))) + e * s) / s;
    }
});