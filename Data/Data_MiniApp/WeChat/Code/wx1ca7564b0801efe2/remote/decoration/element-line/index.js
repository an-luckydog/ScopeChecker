var e = require("../../../miniprogram_npm/@limo/container/behaviors/index"), o = require("../common-helpers/formatStyle");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        elConfig: {
            type: Object,
            value: {},
            observer: function() {
                this.formateElConfig();
            }
        }
    },
    data: {
        borderStyle: ""
    },
    methods: {
        formateElConfig: function() {
            var e = this.properties.elConfig;
            if (e) {
                var r, t = e.borderStyle || {}, i = t.borderWidth, n = t.borderColor, a = t.borderStyle, l = "".concat(2 * i, "rpx ").concat(a, " ").concat(null == n ? void 0 : n.color);
                r = "row" === e.lineType ? {
                    width: "100%",
                    borderBottom: l,
                    height: i
                } : {
                    height: "100%",
                    borderLeft: l,
                    width: i
                }, this.setData({
                    borderStyle: (0, o.formatStyle)(r)
                });
            }
        }
    }
});