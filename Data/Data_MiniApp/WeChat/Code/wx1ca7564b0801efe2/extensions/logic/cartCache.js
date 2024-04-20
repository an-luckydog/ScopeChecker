var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = e(require("../../b/regenerator")), n = require("../../b/helpers/asyncToGenerator"), i = require("../../b/helpers/classCallCheck"), a = require("../../b/helpers/createClass"), s = require("../../commons/inversify"), u = require("../../commons/constants"), o = (0, 
s.injectable)()(t = function(e) {
    return (0, s.inject)(u.TYPES.CART)(e, void 0, 0);
}(t = function(e) {
    return (0, s.inject)(u.TYPES.OPTIONS)(e, void 0, 1);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ "undefined" == typeof CartEntity ? Object : CartEntity, "undefined" == typeof Map ? Object : Map ])(t = function() {
    function e(t, r) {
        i(this, e), this.cart = t, this.options = r;
    }
    var t;
    return a(e, [ {
        key: "run",
        value: (t = n(r.default.mark(function e(t) {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t.againOrderViewId && (this.options.delete("againOrderViewId"), this.cart.clearCart()), 
                    e.next = 3, this.cart.mergeCart(t);

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return t.apply(this, arguments);
        })
    } ]), e;
}()) || t) || t) || t) || t) || t;

exports.default = o;