var e = require("../../../b/helpers/interopRequireDefault"), i = require("../../../b/helpers/defineProperty"), t = e(require("../../../miniprogram_npm/@limo/core/index.js")), o = require("../../../miniprogram_npm/@limo/container/behaviors/index.js"), r = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), n = require("../common-helpers/formatStyle"), m = {
    1: "img",
    2: "title",
    3: "subTitle",
    4: "desc"
}, a = {
    1: "marginRight",
    2: "marginBottom",
    3: "marginTop"
};

Component({
    behaviors: [ o.commonBehavior, o.limoShim ],
    properties: {
        item: {
            type: Object,
            value: {}
        },
        themeStyle: {
            type: Object,
            value: {},
            observer: function(e) {
                this.transformThemeStyle(e);
            }
        },
        infoList: {
            type: Array,
            value: [],
            observer: function(e) {
                this.formatInfoList(e);
            }
        }
    },
    data: {
        iconConfig: {},
        showMap: {}
    },
    methods: {
        tapToJump: function() {
            var e = this.properties.item, i = e.redirectUrl, o = void 0 === i ? "" : i, n = e.name, m = void 0 === n ? "" : n, a = e.action;
            t.default.getLimoRuntime().sendMC("b_eco_2pd00krg_mc", {
                custom: {
                    button_name: m
                }
            }), a ? (0, r.tapActionHandler)(a, {
                compInst: this
            }) : o && (t.default.getLimoRuntime().sendMC("b_eco_z1ok8qdw_mc", {
                custom: {
                    redirectUrl: o
                }
            }), t.default.getLimoRuntime().navigateTo({
                url: o,
                success: function() {},
                fail: function() {}
            }));
        },
        formatInfoList: function(e) {
            if (e) {
                var i = {};
                e.forEach(function(e) {
                    i[m[e]] = !0;
                }), this.setData({
                    showMap: i
                });
            }
        },
        transformThemeStyle: function(e) {
            if (e && e.iconConfig) {
                var t = e.iconConfig, o = t.position, r = t.size, m = t.spacing;
                this.setData({
                    iconConfig: {
                        position: o,
                        style: (0, n.formatStyle)(i({
                            width: r,
                            height: r
                        }, a[Number(o)], "number" == typeof m ? m : 12))
                    }
                });
            }
        }
    }
});