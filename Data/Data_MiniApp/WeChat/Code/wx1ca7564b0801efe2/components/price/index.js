var e = require("../../b/helpers/interopRequireDefault"), t = require("../../miniprogram_npm/@limo/container/behaviors/index"), o = e(require("../../commons/component")), i = require("../../commons/constants");

(0, o.default)({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        price: {
            type: Object,
            value: {}
        },
        memberTag: {
            type: Object,
            value: {}
        },
        size: {
            type: String,
            value: ""
        },
        showEst: {
            type: Boolean,
            value: !0
        },
        needTip: {
            type: Boolean,
            value: !0
        },
        tooltip: {
            type: String,
            value: "bottom"
        },
        color: {
            type: String,
            value: ""
        }
    },
    methods: {
        showEstTip: function() {
            var e = this, t = this.data, o = t.tooltip;
            t.needTip && this.createSelectorQuery().select(".p-tag").boundingClientRect().exec(function(t) {
                if (t && t[0]) {
                    var r = t[0], n = r.left, a = r.width, p = r.top, l = r.height, m = "bottom" === o ? n + a / 2 : n, s = p + ("bottom" === o ? 10 + l : -l);
                    e.entity.get(i.TYPES.LIMO).limoShowTooltip({
                        text: "根据您当前持有的优惠券、可享受的优惠活动等进行的单件商品最低应付金额预估（不包含配送费、打包费），最终请以实际金额为准",
                        placement: o,
                        position: {
                            x: m,
                            y: s
                        }
                    });
                }
            });
        }
    }
});