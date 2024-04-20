Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../b/helpers/objectSpread2"), i = require("../constants"), r = Behavior({
    methods: {
        isValidNumber: function(e) {
            return /^-?\d+(\.\d+)?$/.test(e);
        },
        getPluginDesc: function(r) {
            var t, n = this, l = this.entity.get(i.TYPES.TRIANGLE).plusFloat, u = (null == (t = this.entity) ? void 0 : t.get(i.TYPES.EMITTER).emit("DISH_PANEL_CALCULATE", r)) || [];
            return (null == u ? void 0 : u.length) > 0 && u.forEach(function(e) {
                e.desc && (r.desc += "/" + e.desc), n.isValidNumber(e.currentPriceDelta) && (r.priceInfo.currentPrice = l(r.priceInfo.currentPrice, +e.currentPriceDelta)), 
                n.isValidNumber(e.originalPriceDelta) && (r.priceInfo.originalPrice = l(r.priceInfo.originalPrice, +e.originalPriceDelta));
            }), e({}, r);
        },
        confirmDishPlugin: function(r) {
            var t, n = null == (t = this.entity) ? void 0 : t.get(i.TYPES.EMITTER).emit("DISH_PANEL_CONFIRM", r);
            return null == n || n.forEach(function(e) {
                var i = e.pluginId, t = e.data;
                r.plugins || (r.plugins = {}), r.plugins[i] = t;
            }), e({}, r);
        }
    }
});

exports.default = r;