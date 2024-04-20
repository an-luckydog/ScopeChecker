var t = require("../../b/helpers/interopRequireDefault"), i = require("../../miniprogram_npm/@limo/container/behaviors/index"), e = t(require("../../commons/component")), n = require("../../commons/constants");

(0, e.default)({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        solutions: {
            type: Array,
            value: []
        }
    },
    data: {
        dishCountMap: {}
    },
    lifetimes: {
        attached: function() {
            this.renderDishList(), this.entity.get(n.TYPES.EMITTER).on(n.EVENTS.DISH_CHANGE, this.onDishChange, this), 
            this.entity.get(n.TYPES.EMITTER).on(n.EVENTS.CART_CHANGE, this.renderDishList, this), 
            this.entity.get(n.TYPES.EMITTER).on(n.EVENTS.REFRESH_PAGE, this.onConfirm, this);
        },
        detached: function() {
            this.entity.get(n.TYPES.EMITTER).off(n.EVENTS.DISH_CHANGE, this.onDishChange, this), 
            this.entity.get(n.TYPES.EMITTER).off(n.EVENTS.CART_CHANGE, this.renderDishList, this), 
            this.entity.get(n.TYPES.EMITTER).off(n.EVENTS.REFRESH_PAGE, this.onConfirm, this);
        }
    },
    methods: {
        onDishChange: function(t) {
            var i = t.dishCountMap;
            this.setData({
                dishCountMap: i
            });
        },
        renderDishList: function() {
            var t = this.entity.get(n.TYPES.CART).getCartDataBySpu().dishCountMap, i = void 0 === t ? {} : t;
            this.setData({
                dishCountMap: i
            });
        },
        onConfirm: function() {
            this.entity.get(n.TYPES.LIMO).limoCloseDialog("mandatory-dish-panel");
        }
    }
});