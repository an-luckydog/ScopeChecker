var e = getApp(), t = e.globalData.imgUrl, o = e.globalData.apiRoot, n = require("./config.js");

module.exports = {
    imgUrl: t,
    apiRoot: o,
    storeDetail: function(e, t) {
        return n.postRequest({
            url: "/store/detail",
            data: e,
            notShowLoading: t,
            header: "application/x-www-form-urlencoded"
        });
    },
    decode: function(t, o) {
        return n.postRequest({
            url: "/wxa/open/".concat(e.globalData.appID, "/decode?t=1563700885"),
            data: t,
            notShowLoading: o,
            header: "application/x-www-form-urlencoded"
        });
    },
    login: function(t, o) {
        return n.postRequest({
            url: "/wxa/open/".concat(e.globalData.appID, "/login"),
            data: t,
            notShowLoading: o,
            header: "application/x-www-form-urlencoded"
        });
    },
    goPay: function(e, t) {
        return n.postRequest({
            url: "/wxpay/pay",
            data: e,
            notShowLoading: t
        });
    },
    orderList: function(e, t) {
        return n.getRequest({
            url: "/order/center/list",
            data: e,
            notShowLoading: t
        });
    },
    againPay: function(e, t) {
        return n.postRequest({
            url: "/wxpay/againPay",
            data: e,
            notShowLoading: t
        });
    },
    orderinfo: function(e, t) {
        return n.getRequest({
            url: "/order/center/orderinfo",
            data: e,
            notShowLoading: t,
            header: "application/x-www-form-urlencoded"
        });
    },
    freeOrder: function(e, t) {
        return n.postRequest({
            url: "/wxpay/freeOrder",
            data: e,
            notShowLoading: t
        });
    },
    caclOutTime: function(e, t) {
        return n.getRequest({
            url: "/wxpay/caclOutTime",
            data: e,
            notShowLoading: t
        });
    },
    priceList: function(e, t) {
        return n.getRequest({
            url: "/order/price/list",
            data: e,
            notShowLoading: t
        });
    },
    renewal: function(e, t) {
        return n.postRequest({
            url: "/wxpay/renewal",
            data: e,
            notShowLoading: t
        });
    },
    getPhone: function(t, o) {
        return n.postRequest({
            url: "/wxa/open/".concat(e.globalData.appID, "/getPhone"),
            data: t,
            notShowLoading: o,
            header: "application/x-www-form-urlencoded"
        });
    },
    byorder: function(e, t) {
        return n.getRequest({
            url: "/open/byorder",
            data: e,
            notShowLoading: t,
            header: "application/x-www-form-urlencoded"
        });
    },
    qrcodeHttp: function(e, t) {
        return n.getRequest({
            url: "/open/qr",
            data: e,
            notShowLoading: t,
            header: "application/x-www-form-urlencoded"
        });
    },
    over: function(e, t) {
        return n.getRequest({
            url: "/wxpay/close",
            data: e,
            notShowLoading: t,
            header: "application/x-www-form-urlencoded"
        });
    },
    checkCabinet: function(e, t) {
        return n.getRequest({
            url: "/cabinet/checkCabinet",
            data: e,
            notShowLoading: t,
            header: "application/x-www-form-urlencoded"
        });
    },
    getPriceAfterDeduction: function(e, t) {
        return n.postRequest({
            url: "/wxpay/count/amount",
            data: e,
            notShowLoading: t
        });
    },
    getIntegralList: function(e, t) {
        return n.getRequest({
            url: "/integral/rule",
            data: e,
            notShowLoading: t
        });
    }
};