var e = require("../../../b/helpers/interopRequireDefault"), t = require("../../../miniprogram_npm/@limo/container/behaviors/index"), r = e(require("../../../modules/menu/I18n/I18nService"));

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        showTotalPrice: {
            type: Boolean
        },
        cartPriceInfo: {
            type: Object,
            value: {}
        }
    },
    data: {},
    attached: function() {
        this.limoAttached();
    },
    observers: {},
    methods: {
        limoAttached: function() {
            var e = r.default.getCurrency();
            this.setData({
                currency: e
            });
        },
        toggleCartPanel: function() {
            this.triggerEvent("toggle");
        }
    }
});