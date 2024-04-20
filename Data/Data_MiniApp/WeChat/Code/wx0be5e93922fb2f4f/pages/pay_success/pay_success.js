var e, o = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http.js")), t = getApp(), n = require("../../utils/qrcode.min.js"), r = 400 / (750 / wx.getSystemInfoSync().windowWidth);

Page({
    data: {
        isFullSucreen: t.globalData.bottom,
        qrCodeDialog: !1,
        errorDialog: !1,
        orderId: "",
        telPhoneDig: !1,
        code_w: r,
        loading: !1,
        cabinetNo: ""
    },
    onLoad: function(o) {
        this.setData({
            orderId: o.orderId,
            cabinetNo: o.cabinetNo
        }, this.sureOpenLock(o.orderId)), e = new n("canvas", {
            text: "",
            width: r,
            height: r,
            colorDark: "#000000",
            colorLight: "white",
            correctLevel: n.CorrectLevel.H
        });
    },
    sureOpenLock: function(t) {
        var n, r = this;
        this.setData({
            loading: !0
        }), n = t instanceof Object ? this.data.orderId : t, o.default.byorder({
            orderId: n
        }, !1).then(function(o) {
            r.setData({
                loading: !1
            }), 201 == o.code ? (e.makeCode("".concat(o.data)), r.setData({
                qrCodeDialog: !0,
                errorDialog: !0
            })) : (r.setData({
                qrCodeDialog: !1,
                errorDialog: !1
            }), wx.showToast({
                title: "开锁成功",
                icon: "none",
                duration: 2e3
            }));
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    qrcodeShowFunc: function() {
        var t = this;
        o.default.qrcodeHttp({
            orderId: this.data.orderId
        }, !1).then(function(o) {
            e.makeCode("".concat(o)), t.setData({
                qrCodeDialog: !0
            });
        });
    },
    orderFunc: function() {
        wx.redirectTo({
            url: "/pages/order_list/order_list?activeIndex=0"
        });
    },
    telFunc: function() {
        this.setData({
            telPhoneDig: !0
        });
    },
    telPhoneClear: function() {
        this.setData({
            telPhoneDig: !1
        });
    },
    phoneCall: function(e) {
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.replyPhone,
            success: function() {
                console.log("成功拨打电话");
            }
        });
    },
    cloneOpenLock: function() {
        this.setData({
            openLock: !1,
            qrCodeDialog: !1,
            errorDialog: !1
        });
    }
});