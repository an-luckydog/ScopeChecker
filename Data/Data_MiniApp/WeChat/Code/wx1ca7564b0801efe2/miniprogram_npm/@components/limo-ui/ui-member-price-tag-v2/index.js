var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../@limo/container/behaviors/index"), a = require("../ui-constant/enum"), i = e(require("../../../../modules/menu/I18n/I18nService"));

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        price: {
            type: String,
            value: ""
        },
        priceLabel: {
            type: String,
            value: ""
        },
        size: {
            type: String,
            value: a.UI_SIZE.SMALL
        },
        className: {
            type: String,
            value: ""
        },
        styleString: {
            type: String,
            value: ""
        },
        bigPrice: {
            type: Boolean,
            value: !1
        },
        noPrice: {
            type: Boolean,
            value: !1
        },
        priceClass: {
            type: String,
            value: ""
        },
        dgfStyle: {
            type: String,
            value: ""
        }
    },
    data: {
        customClassName: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var e = this.data, t = e.className, a = e.price, r = t, n = i.default.getCurrency();
            Number.isNaN(Number(a)) && (r += " hide-yuan-sign"), this.setData({
                customClassName: r,
                currency: n
            });
        }
    }
});