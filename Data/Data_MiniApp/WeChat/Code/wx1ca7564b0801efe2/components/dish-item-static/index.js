var e = require("../../b/helpers/interopRequireDefault"), i = require("../../miniprogram_npm/@limo/container/behaviors/index"), t = e(require("../../commons/component")), s = require("../../commons/constants");

(0, t.default)({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        dish: {
            type: Object,
            value: {}
        },
        dishShowType: {
            type: Number,
            value: 1
        },
        type: {
            type: String,
            value: ""
        }
    },
    observers: {
        dish: function(e) {
            e.spuId && this.entity.get(s.TYPES.DISH).setStaticDish(e);
        }
    },
    methods: {
        openStaticDetail: function() {
            var e = this.data.dish, i = e.spuId, t = e.dishType;
            this.entity.get(s.TYPES.DISH).openDish(t, {
                spuId: i
            });
        }
    }
});