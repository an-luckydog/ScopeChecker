var e = require("../../b/helpers/interopRequireDefault"), r = require("../../miniprogram_npm/@limo/container/behaviors/index"), t = e(require("../../commons/component")), i = require("../../commons/constants");

(0, t.default)({
    behaviors: [ r.commonBehavior, r.limoShim ],
    properties: {
        btnText: {
            type: String,
            value: ""
        },
        errorTitle: {
            type: String,
            value: ""
        },
        errorText: {
            type: String,
            value: ""
        },
        iconUrl: {
            type: String,
            value: ""
        },
        customClass: {
            type: String,
            value: ""
        },
        fullPage: {
            type: Boolean,
            value: !0
        },
        errorType: {
            type: Number,
            value: 0
        }
    },
    data: {
        errorSubTitle: "",
        errorIcon: ""
    },
    lifetimes: {
        attached: function() {
            this.initData();
        }
    },
    methods: {
        initData: function() {
            var e = this.properties, r = e.errorTitle, t = e.errorText, i = e.iconUrl, o = t || ("页面加载失败了" === r ? "请稍后刷新重试" : "");
            this.setData({
                errorSubTitle: o,
                errorIcon: i || "https://p0.meituan.net/ingee/ec7d41dc805032661f3086dd2b80e666111154.png"
            });
        },
        handleUiBtnClick: function() {
            403 === this.data.errorType ? this.entity.get(i.TYPES.SHOP).toShopList(!0) : this.triggerEvent("errorButtonClick");
        }
    }
});