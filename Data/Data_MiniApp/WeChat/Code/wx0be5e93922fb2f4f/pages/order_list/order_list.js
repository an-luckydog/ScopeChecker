var t, e = require("../../@babel/runtime/helpers/interopRequireDefault").default, a = e(require("../../utils/http.js")), o = e(require("../../utils/util.js")), n = require("../../utils/qrcode.min.js"), r = getApp(), i = 400 / (750 / wx.getSystemInfoSync().windowWidth);

Page({
    data: {
        code_w: i,
        duration: 300,
        imgUrl: a.default.imgUrl,
        activeIndex: 0,
        index: 0,
        orderListFlg: !0,
        loaded: !0,
        total: 10,
        params: {},
        height: 700,
        qrCodeDialog: !1,
        openLock: !1,
        tabArr: [ {
            index: 0,
            title: "进行订单"
        }, {
            index: 1,
            title: "历史订单"
        } ],
        userInfo: {},
        categoryCur: 0,
        categoryData: [],
        orderListArr: [],
        cabinetInfo: {},
        infoTime: "",
        errorDialog: !1,
        telPhoneDig: !1
    },
    onLoad: function(e) {
        this.setData({
            activeIndex: e.activeIndex
        }), t = new n("canvas", {
            text: "",
            width: i,
            height: i,
            colorDark: "#000000",
            colorLight: "white",
            correctLevel: n.CorrectLevel.H
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this, e = [];
        this.data.tabArr.forEach(function(t, a) {
            e.push({
                id: t.id,
                categoryCur: a,
                requesting: !1,
                end: !1,
                emptyShow: !1,
                listData: []
            });
        }), this.setData({
            categoryData: e
        }), wx.getStorage({
            key: "userInfo",
            success: function(e) {
                var a = {
                    memberId: e.data.id,
                    status: t.data.activeIndex,
                    pageNum: 1,
                    pageSize: 10
                };
                t.setData({
                    userInfo: e.data,
                    params: a
                }, setTimeout(function() {
                    t.refresh();
                }, 350));
            },
            fail: function() {}
        });
    },
    refresh: function() {
        var t = this;
        this.setData({
            "params.pageNum": 1
        }, function() {
            t.orderList("refresh", t.data.params);
        });
    },
    orderList: function(t, e) {
        var o = this, n = this.data.categoryData[this.data.activeIndex];
        "refresh" !== t && n.end || (n.requesting = !0, this.setCurrentData(this.data.activeIndex, this.data.total, n), 
        a.default.orderList(e, !1).then(function(e) {
            var a = e.records || {
                datas: [],
                over: !1
            }, r = a || [];
            n.requesting = !1, r.map(function(t, e) {
                1 == t.cellType ? t.lockName = "小柜（".concat(t.cellNo, "）号") : 2 == t.cellType ? t.lockName = "中柜（".concat(t.cellNo, "）号") : 3 == t.cellType && (t.lockName = "大柜（".concat(t.cellNo, "）号"));
            }), "refresh" == t ? (n.listData = r, n.end = a.over, o.setData({
                "params.pageNum": o.data.params.pageNum + 1
            })) : (n.listData = n.listData.concat(r), n.end = a.over, o.setData({
                "params.pageNum": o.data.params.pageNum + 1
            })), 0 == n.listData.length ? o.setData({
                orderListFlg: !1
            }) : o.setData({
                orderListFlg: !0
            }), n.listData.length < e.total ? n.end = !1 : n.end = !0, o.setCurrentData(o.data.activeIndex, e.total, n);
        }));
    },
    setCurrentData: function(t, e, a) {
        var o = this.data.categoryData;
        o[t] = a, this.setData({
            categoryData: o,
            total: e
        });
    },
    more: function() {
        this.orderList("more", this.data.params);
    },
    animationFinish: function(t) {
        var e = this, a = this;
        this.setData({
            duration: 300
        }), setTimeout(function() {
            0 === e.data.categoryData[t.detail.current].listData.length && a.setData({
                "params.pageNum": 1,
                "params.status": t.detail.current,
                activeIndex: t.detail.current
            }, function() {
                a.orderList("refresh", a.data.params);
            });
        }, 0);
    },
    tabClcik: function(t) {
        var e = this;
        this.setData({
            activeIndex: t.currentTarget.id,
            "params.pageNum": 1,
            "params.status": t.currentTarget.id
        }, function() {
            e.orderList("refresh", e.data.params);
        });
    },
    bindChangeFuc: function(e) {
        var o = this, n = e.currentTarget.dataset.status, r = e.currentTarget.dataset.item;
        r.statusTarget = n;
        var i = r.id;
        r.storeId, r.lockName;
        this.setData({
            cabinetInfo: r
        });
        var s = {
            orderId: i
        };
        if (0 == n) this.payClick(s); else if (1 == n) t.makeCode("".concat(a.default.apiRoot, "/open/qr?orderId=").concat(r.id)), 
        this.setData({
            openLock: !1,
            errorDialog: !0
        }), this.setData({
            openLock: !0
        }); else if (2 == n) wx.navigateTo({
            url: "/pages/order_renew/order_renew?orderId=".concat(r.id, "&storeId=").concat(r.storeId, "&lockName=").concat(r.lockName, "&cellType=").concat(r.cellType)
        }); else if (11 == n) {
            var c = this.formatTimeIosFuc("2020-05-25 01:33:21");
            this.formateTime(c);
            a.default.qrcodeHttp({
                orderId: this.data.cabinetInfo.id
            }, !1).then(function(e) {
                t.makeCode("".concat(e)), o.setData({
                    qrCodeDialog: !0
                });
            });
        }
    },
    sureOpenLock: function() {
        var e = this, o = this;
        a.default.byorder({
            orderId: this.data.cabinetInfo.id
        }, !1).then(function(n) {
            201 == n.code ? (t.makeCode("".concat(n.data)), e.setData({
                qrCodeDialog: !0,
                openLock: !1,
                errorDialog: !0
            })) : (a.default.over({
                orderId: e.data.cabinetInfo.id
            }, !1).then(function(t) {
                wx.showToast({
                    title: "结束订单",
                    icon: "none",
                    duration: 2e3
                }), e.setData({
                    "params.pageNum": 1
                }, function() {
                    o.orderList("refresh", o.data.params);
                });
            }), e.setData({
                openLock: !1,
                qrCodeDialog: !1,
                errorDialog: !1
            }), wx.showToast({
                title: "开锁成功",
                icon: "none",
                duration: 2e3
            }));
        });
    },
    cloneOpenLock: function() {
        var t = this, e = this;
        11 == e.data.cabinetInfo.statusTarget ? e.setData({
            qrCodeDialog: !1
        }) : a.default.over({
            orderId: this.data.cabinetInfo.id
        }, !1).then(function(a) {
            wx.showToast({
                title: "结束订单",
                icon: "none",
                duration: 2e3
            }), t.setData({
                "params.pageNum": 1
            }, function() {
                e.orderList("refresh", e.data.params);
            }), t.setData({
                openLock: !1,
                qrCodeDialog: !1,
                errorDialog: !1
            });
        });
    },
    cloneOpenLock2: function() {
        this.setData({
            openLock: !1,
            qrCodeDialog: !1,
            errorDialog: !1
        });
    },
    payClick: function(t) {
        var e = this;
        a.default.againPay(t, !1).then(function(t) {
            var a, o = JSON.parse(t);
            a = {
                timeStamp: o.timeStamp,
                package: o.package,
                paySign: o.paySign,
                appid: o.appId,
                nonceStr: o.nonceStr,
                signType: "MD5",
                success: function(t) {
                    this.setData({
                        "params.pageNum": 1
                    }, function() {
                        e.orderList("refresh", e.data.params);
                    }), e.setData({
                        LoadingShow: !1
                    });
                },
                fail: function(t) {
                    wx.showToast({
                        title: "支付失败",
                        icon: "none",
                        duration: 2e3
                    });
                },
                complete: function(t) {}
            }, wx.requestPayment(a);
        });
    },
    toDetailFuc: function(t) {
        wx.navigateTo({
            url: "/pages/order_detail/order_detail?orderId=" + t.currentTarget.id + "&activeIndex=" + this.data.activeIndex,
            success: function(t) {},
            fail: function(t) {}
        });
    },
    toIndex: function() {
        wx.navigateTo({
            url: "/pages/index/index",
            success: function(t) {},
            fail: function(t) {}
        });
    },
    formateTime: function(t) {
        var e = new Date(), a = new Date(t);
        console.log(a, "-startMeetingTime", a - e);
        var o = e - a, n = Math.floor(o / 864e5), r = o % 864e5, i = Math.floor(r / 36e5), s = r % 36e5, c = Math.floor(s / 6e4), d = s % 6e4, u = Math.round(d / 1e3);
        return +(n > 0 ? n + "天" : "") + (i > 0 ? i + "小时" : "") + (c > 0 ? c + "分钟" : "") + (u > 0 ? u + "秒" : "");
    },
    formatTimeIosFuc: function(t) {
        var e = t;
        return wx.getSystemInfo({
            success: function(a) {
                -1 != a.system.indexOf("iOS") && (e = t.replace(/-/g, "/"));
            }
        }), e;
    },
    handleContact: function(t) {
        console.log(t.detail.path), console.log(t.detail.query);
    },
    telPhone: function() {
        this.setData({
            telPhoneDig: !0
        });
    },
    telPhoneClear: function() {
        this.setData({
            telPhoneDig: !1
        });
    },
    phoneCall: function(t) {
        wx.makePhoneCall({
            phoneNumber: t.currentTarget.dataset.replyPhone,
            success: function() {
                console.log("成功拨打电话");
            }
        });
    },
    goScanCodeFunc: function() {
        wx.scanCode({
            success: function(t) {
                if ("QR_CODE" == t.scanType) if (-1 != t.result.indexOf(r.globalData.QRCodePrefix)) {
                    var e = o.default.getUrlParam(t.result, "storeid");
                    wx.navigateTo({
                        url: "/pages/choice_cabinet/choice_cabinet?storeId=" + e,
                        success: function(t) {},
                        fail: function(t) {}
                    });
                } else wx.showToast({
                    title: "请扫描柜子的二维码",
                    icon: "none",
                    duration: 3e3
                }); else wx.showToast({
                    title: "请扫描二维码",
                    icon: "none",
                    duration: 3e3
                });
            },
            fail: function() {
                console.log("扫码失败");
            }
        });
    }
});