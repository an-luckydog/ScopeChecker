Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../b/helpers/classCallCheck"), r = require("../../../b/helpers/createClass"), t = new (function() {
    function t() {
        e(this, t), this.currency = "¥", this.currency = "¥";
    }
    return r(t, [ {
        key: "updateCurrency",
        value: function(e) {
            e && (this.currency = e);
        }
    }, {
        key: "getCurrency",
        value: function() {
            return this.currency;
        }
    } ]), t;
}())();

exports.default = t;