var e = require("../../b/helpers/interopRequireDefault"), t = e(require("../../miniprogram_npm/@limo/core/index.js")), i = require("../../miniprogram_npm/@limo/container/behaviors/index.js"), a = (e(require("./utils")), 
e(require("../../lib/mix/log")), require("../../lib/wx/util")), r = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), o = require("../../lib/wx/app-info");

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        options: {
            type: Object,
            value: {},
            observer: function() {
                this.setTheme();
            }
        },
        clearCache: {
            type: Boolean,
            value: !1
        },
        location: {
            type: Object,
            value: {},
            observer: function(e) {
                null != e && e.latitude && (this.setData({
                    cacheLocation: e
                }), this.setTheme());
            }
        },
        needLocationCheck: {
            type: Boolean,
            value: !1
        },
        extraRequestParams: {
            type: Object,
            value: {}
        },
        themeType: {
            type: Number,
            value: 1
        },
        beta: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        themes: "",
        located: !1,
        hasReady: !1,
        cacheLocation: null,
        nativeTabbar: !1
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var e = this.properties.beta;
            if (this.setThemeByModel(), e && !this.isH5) {
                var t, i = getCurrentPages(), a = null == (t = i[i.length - 1]) ? void 0 : t.route;
                (0, o.isNativeTabbarPage)(a) && this.setData({
                    nativeTabbar: !0
                });
            }
        },
        setTheme: function() {
            var e = this.properties, t = (e.needLocationCheck, e.location, e.options), i = (e.themeType, 
            this.data.cacheLocation, null != t ? t : {});
            if (Object.keys(i).length) {
                i.shopId;
                !this.isH5 && (0, o.isMerchantWxApp)();
            }
        },
        filterOptions: function() {
            if (Object.keys(this.properties.options).length) return this.properties.options;
            var e = t.default.getLimoRuntime().getPageParams();
            if (this.isH5) return e;
            var i, r = getCurrentPages(), o = null == (i = r[r.length - 1]) ? void 0 : i.route;
            return (0, a.getTabbarPageOptions)(e, o);
        },
        setThemeByModel: function() {
            if (!this.isH5 && (0, o.isMerchantWxApp)()) {
                var e = r.ThemeModel.getInstance();
                this && this.setData({
                    themes: e.getTheme()
                });
            }
        }
    }
});