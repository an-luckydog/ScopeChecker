var e = require("../../b/helpers/interopRequireDefault"), i = require("../../miniprogram_npm/@limo/container/behaviors/index"), t = e(require("../../commons/component")), o = require("../../commons/constants");

(0, t.default)({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        spuId: {
            type: String,
            value: ""
        }
    },
    observers: {
        spuId: function(e) {
            var i = this.entity.get(o.TYPES.DISH).getStaticDish(e);
            this.setData({
                dishInfo: i
            });
        }
    },
    data: {
        dishInfo: {}
    },
    methods: {
        closePanel: function() {
            this.entity.get(o.TYPES.DISH).closeDish();
        }
    }
});