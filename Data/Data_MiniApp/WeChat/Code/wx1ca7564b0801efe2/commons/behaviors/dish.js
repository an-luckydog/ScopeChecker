Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../constants"), t = Behavior({
    properties: {
        dish: {
            type: Object,
            value: {}
        },
        extra: {
            type: Object,
            value: {}
        },
        showEst: {
            type: Boolean,
            value: !1
        }
    },
    observers: {
        "dish.dishType": function(t) {
            t === e.DISH_TYPE.WEIGHT_SPU && this.setData({
                slot: "add-weight"
            });
        }
    },
    data: {
        slot: "add-common",
        memberTag: null
    },
    methods: {
        openDetail: function() {
            var t, s;
            null == (t = this.entity) || t.get(e.TYPES.LX).sendMC("b_saaspay_bj6jkfqo_mc"), 
            null == (s = this.entity) || s.get(e.TYPES.LX).sendMV("b_saaspay_we46nheq_mv");
            var a = this.data.dish, i = a.dishType, d = a.spuId, o = a.extendList;
            this.entity.get(e.TYPES.DISH).openDish(i, {
                spuId: d,
                extraParams: {
                    extendList: o
                }
            });
        }
    }
});

exports.default = t;