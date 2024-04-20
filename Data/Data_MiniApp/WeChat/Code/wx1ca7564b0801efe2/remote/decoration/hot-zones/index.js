var t = require("../../../b/helpers/interopRequireDefault"), o = t(require("../../../miniprogram_npm/@limo/core/index.js")), e = require("../../../miniprogram_npm/@limo/container/behaviors/index.js"), i = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), n = t(require("../decor-comp-behavior/index"));

Component({
    behaviors: [ n.default, e.commonBehavior, e.limoShim ],
    properties: {
        imgUrl: {
            type: String,
            value: ""
        },
        hotZonesList: {
            type: Array,
            value: [],
            observer: function(t) {
                t && this.setData({
                    hotZonesData: this.getHotZonesData(t)
                });
            }
        }
    },
    data: {
        hotZonesData: []
    },
    pageLifetimes: {
        show: function() {
            this.limoPageShow();
        }
    },
    methods: {
        limoPageShow: function() {
            o.default.getLimoRuntime().sendMV("b_eco_vsul3roq_mv", {
                custom: {
                    id: this.id
                }
            });
        },
        getHotZonesData: function(t) {
            var o = [];
            return t.forEach(function(t) {
                var e = [];
                e.push("position:absolute"), e.push("left:".concat(t.leftTopPosition[0], "%")), 
                e.push("top:".concat(t.leftTopPosition[1], "%")), e.push("right:".concat(100 - t.rightBottomPosition[0], "%")), 
                e.push("bottom:".concat(100 - t.rightBottomPosition[1], "%")), o.push({
                    redirectUrl: t.redirectUrl,
                    hotZoneStyle: e.join(";"),
                    action: t.action
                });
            }), o;
        },
        tapToJump: function(t) {
            var e = t.currentTarget.dataset.index, n = this.data.hotZonesData[e].redirectUrl || "", a = this.data.hotZonesData[e].action, r = (a || {}).actionValue;
            o.default.getLimoRuntime().sendMC("b_eco_vsul3roq_mc", {
                custom: {
                    index: e,
                    link: r || n,
                    id: this.id
                }
            }), a ? (0, i.tapActionHandler)(a, {
                compInst: this
            }) : n && o.default.getLimoRuntime().navigateTo({
                url: n,
                success: function() {},
                fail: function() {}
            });
        }
    },
    attached: function() {
        this.limoPageShow();
    }
});