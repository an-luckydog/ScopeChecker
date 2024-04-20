var e = require("../../b/helpers/interopRequireDefault"), t = e(require("../../miniprogram_npm/@limo/core/index.js")), i = require("../../miniprogram_npm/@limo/container/behaviors/index.js"), o = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js"));

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        titleInfo: {
            type: Object,
            value: {},
            observer: function(e) {
                this.updateTitle(e);
            }
        },
        showHomeBtn: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        navBarHeight: 0,
        menuHeight: 0,
        menuMargin: 0,
        titleStyle: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var e = o.default.MPInfo.getSystemInfo().statusBarHeight || 44, i = t.default.getLimoRuntime().getMenuButtonBoundingClientRect(), n = 2 * (i.top - e) + i.height + e, r = i.height, a = i.top;
            this.setData({
                navBarHeight: n,
                menuHeight: r,
                menuMargin: a
            });
        },
        updateTitle: function(e) {
            var t = e || {}, i = t.titleBgColor, o = t.titleColor;
            this.setData({
                titleStyle: "background-color:".concat(i, ";color:").concat(o, ";")
            });
        },
        backToHome: function() {
            t.default.getLimoRuntime().redirectTo({
                url: "/pages/splash/index"
            });
        }
    }
});