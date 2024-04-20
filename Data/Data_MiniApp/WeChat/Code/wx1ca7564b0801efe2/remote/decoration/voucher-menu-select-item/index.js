var t = require("../../../b/helpers/interopRequireDefault"), e = t(require("../../../miniprogram_npm/@limo/core/index.js")), n = require("../../../miniprogram_npm/@limo/container/behaviors/index"), o = t(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js"));

Component({
    behaviors: [ n.commonBehavior, n.limoShim ],
    properties: {
        name: {
            type: String,
            value: ""
        },
        perCardBuyLimit: {
            type: Number,
            value: 100
        },
        salePrice: {
            type: Number,
            value: 0
        },
        startTime: {
            type: Number,
            value: 0
        },
        endTime: {
            type: Number,
            value: 0
        },
        productLabels: {
            type: Array,
            value: []
        },
        rewardCouponTotalNum: {
            type: Number,
            value: 1
        },
        productImages: {
            type: Array,
            value: []
        },
        buyCouponProductUrl: {
            type: String,
            value: ""
        },
        hideShadow: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        showCountDown: !0,
        countDownText: "",
        rightButtonTxt: ""
    },
    attached: function() {
        this.limoAttached();
    },
    detached: function() {
        this.disposeInterval();
    },
    methods: {
        limoAttached: function() {
            this.initData();
        },
        initData: function() {
            this.disposeInterval(), this.setRightButtonTxt(), this.setCountDown(), this.intervalId = setInterval(this.setCountDown.bind(this), 1e3);
        },
        disposeInterval: function() {
            var t;
            clearInterval(null != (t = this.intervalId) ? t : 0);
        },
        setCountDown: function() {
            var t = this.data, e = t.startTime, n = t.endTime - Date.now(), o = e - Date.now(), i = 2592e6, a = !0, u = "";
            o > 0 ? o <= i ? u = this.getCountDownText(Math.floor(o / 1e3), !0) : a = !1 : n <= 0 ? u = "距结束 00:00:00" : n <= i ? u = this.getCountDownText(Math.floor(n / 1e3)) : a = !1, 
            this.setData({
                showCountDown: a,
                countDownText: u
            }), this.setRightButtonTxt();
        },
        getCountDownText: function(t, e) {
            var n = e ? "开始" : "结束", o = t % 60, i = (t - o) / 60 % 60, a = ((t - o) / 60 - i) / 60 % 24, u = (((t - o) / 60 - i) / 60 - a) / 24;
            return u < 1 ? "距".concat(n, " ").concat(this.fullNumber(a), ":").concat(this.fullNumber(i), ":").concat(this.fullNumber(o)) : "距".concat(n, " ").concat(this.fullNumber(u), " 天 ").concat(this.fullNumber(a), " 时 ").concat(this.fullNumber(i), " 分");
        },
        fullNumber: function(t) {
            return "".concat(t < 10 ? "0" : "").concat(t);
        },
        setRightButtonTxt: function() {
            var t = this.data, e = t.startTime, n = t.endTime, i = "";
            i = e - Date.now() > 0 || n - Date.now() <= 0 ? "去看看" : "￥".concat((null == o.default ? void 0 : o.default.scaleNum(+this.data.salePrice, -2)) || +this.data.salePrice / 100, "抢"), 
            this.setData({
                rightButtonTxt: i
            });
        },
        handleButtonClick: function() {
            this.triggerEvent("voucherMenuModalClose"), e.default.getLimoRuntime().navigateTo({
                url: this.data.buyCouponProductUrl,
                success: function() {
                    console.log("voucher navigation succeeded");
                },
                fail: function() {
                    console.log("voucher navigation failed");
                }
            });
        }
    }
});