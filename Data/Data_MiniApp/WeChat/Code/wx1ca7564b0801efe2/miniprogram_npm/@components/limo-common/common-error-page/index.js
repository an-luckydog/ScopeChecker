var e = require("../../../../b/helpers/interopRequireDefault")(require("../../../@limo/core/index.js")), t = require("../../../@limo/container/behaviors/index");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        btnConfig: {
            type: Object
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
            value: "https://p1.meituan.net/travelcube/515c5072f1d7f729af1d52ccc80d579c13006.png"
        },
        className: {
            type: String,
            value: ""
        },
        tabBarConfig: {
            type: Object,
            value: {}
        }
    },
    data: {
        btnType: 2,
        btnSize: "middle",
        errorSubTitle: ""
    },
    methods: {
        onLoad: function() {
            this.__limoCore = e.default.LimoCoreFactory(), this.initData(this.properties);
        },
        initData: function(e) {
            var t = e.errorTitle, r = e.errorText || ("页面加载失败了" === t ? "请稍后刷新重试" : "");
            r && this.setData({
                errorSubTitle: r
            });
        },
        handleUiBtnClick: function() {
            var e;
            this.triggerEvent("errorButtonClick", null == (e = this.data) || null == (e = e.btnConfig) ? void 0 : e.optionData);
        },
        handleTabBarRender: function(e) {
            var t = e.detail.tabBarList, r = void 0 === t ? [] : t;
            this.triggerEvent("tabBarRender", {
                tabBarList: r
            });
        }
    }
});