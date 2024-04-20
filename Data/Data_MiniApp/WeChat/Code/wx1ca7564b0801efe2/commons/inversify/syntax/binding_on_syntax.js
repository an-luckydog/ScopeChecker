Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BindingOnSyntax = void 0;

var n = require("../../../b/helpers/classCallCheck"), i = require("../../../b/helpers/createClass"), e = require("./binding_when_syntax"), t = function() {
    function t(i) {
        n(this, t), this._binding = void 0, this._binding = i;
    }
    return i(t, [ {
        key: "onActivation",
        value: function(n) {
            return this._binding.onActivation = n, new e.BindingWhenSyntax(this._binding);
        }
    }, {
        key: "onDeactivation",
        value: function(n) {
            return this._binding.onDeactivation = n, new e.BindingWhenSyntax(this._binding);
        }
    } ]), t;
}();

exports.BindingOnSyntax = t;