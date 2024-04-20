var e = require("../../../b/helpers/interopRequireDefault"), i = require("../../../miniprogram_npm/@limo/container/behaviors/index"), r = require("../../../lib/number"), t = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), a = e(require("../../../modules/menu/I18n/I18nService"));

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        dish: {
            type: Object
        }
    },
    data: {
        actualPrice: "",
        originPrice: ""
    },
    attached: function() {
        this.limoAttached();
    },
    observers: {
        dish: function(e) {
            var i = this;
            if (e.itemPrice) {
                var a = e.itemPrice || {}, o = a.actualPrice, n = void 0 === o ? 0 : o, c = a.originPrice, u = void 0 === c ? 0 : c;
                t.default.isByteDanceMicroApp ? this.setData({
                    actualPrice: (0, r.roundFloat)(n, 2),
                    originPrice: (0, r.roundFloat)(u, 2)
                }) : wx.nextTick(function() {
                    i.setData({
                        actualPrice: (0, r.roundFloat)(n, 2),
                        originPrice: (0, r.roundFloat)(u, 2)
                    });
                });
            }
        }
    },
    methods: {
        limoAttached: function() {
            var e = a.default.getCurrency();
            this.setData({
                currency: e
            });
        }
    }
});