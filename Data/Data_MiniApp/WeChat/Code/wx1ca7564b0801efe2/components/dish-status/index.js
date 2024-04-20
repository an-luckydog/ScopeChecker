var i = require("../../b/helpers/interopRequireDefault"), e = require("../../miniprogram_npm/@limo/container/behaviors/index"), o = i(require("../../commons/component")), r = require("../../commons/constants");

(0, o.default)({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        dish: {
            type: Object,
            value: {}
        },
        size: {
            type: String,
            value: "mini"
        }
    },
    methods: {
        onValidSold: function() {
            var i;
            this.entity.get(r.TYPES.LIMO).limoShowDialog("dish-time-info", {
                spuId: null == (i = this.data.dish) ? void 0 : i.spuId
            });
        }
    }
});