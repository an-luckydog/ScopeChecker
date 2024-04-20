var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../@limo/container/behaviors/index"), r = e(require("../../../seamless-immutable/index.js")), i = e(require("../../../../store/menu")), a = e(require("../common-behaviors/storeBehavior")), o = require("../../../../store/actions/panel"), s = e(require("../../../../modules/menu/I18n/I18nService"));

Component({
    behaviors: [ a.default, t.commonBehavior, t.limoShim ],
    properties: {
        isFromMenuList: {
            type: Boolean,
            value: !1
        },
        estimatedPrice: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: ""
        }
    },
    created: function() {
        this.store = i.default;
    },
    data: {
        showComponent: !0,
        prePriceTipsTag: !1
    },
    attached: function() {
        this.limoAttached();
    },
    observers: {
        "refactorLocalCart.**, showPrePriceTips": function(e, t) {
            var r = e.refactorCartDishMap || {};
            this.data.isFromMenuList || (Object.keys(r).length ? this.setData({
                showComponent: !1
            }) : this.setData({
                showComponent: !0
            })), this.data.prePriceTipsTag && !t && this.setData({
                prePriceTipsTag: !1
            });
        }
    },
    methods: {
        limoAttached: function() {
            var e = s.default.getCurrency();
            this.setData({
                currency: e
            });
        },
        limoReady: function() {
            this.commonBehaviorsStoreBehavior_limoReady();
        },
        mapToState: function(e) {
            return {
                refactorLocalCart: r.default.getIn(e, [ "cart", "refactorLocalCart" ]) || (0, r.default)([]),
                showPrePriceTips: r.default.getIn(e, [ "panel", "showPrePriceTips" ]) || (0, r.default)(!1)
            };
        },
        showPrePriceTipsFn: function() {
            if ("RECOMMEND_DEFAULT" !== this.data.type) {
                var e = !this.data.showPrePriceTips;
                this.store.dispatch((0, o.updatePrePriceTips)(e)), this.setData({
                    prePriceTipsTag: e
                });
            }
        }
    },
    ready: function() {
        this.limoReady();
    }
});