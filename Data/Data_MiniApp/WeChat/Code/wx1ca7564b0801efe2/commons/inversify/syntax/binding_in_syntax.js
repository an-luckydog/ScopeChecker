Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BindingInSyntax = void 0;

var n = require("../../../b/helpers/classCallCheck"), i = require("../../../b/helpers/createClass"), e = require("../constants/literal_types"), t = require("./binding_when_on_syntax"), s = function() {
    function s(i) {
        n(this, s), this._binding = void 0, this._binding = i;
    }
    return i(s, [ {
        key: "inRequestScope",
        value: function() {
            return this._binding.scope = e.BindingScopeEnum.Request, new t.BindingWhenOnSyntax(this._binding);
        }
    }, {
        key: "inSingletonScope",
        value: function() {
            return this._binding.scope = e.BindingScopeEnum.Singleton, new t.BindingWhenOnSyntax(this._binding);
        }
    }, {
        key: "inTransientScope",
        value: function() {
            return this._binding.scope = e.BindingScopeEnum.Transient, new t.BindingWhenOnSyntax(this._binding);
        }
    } ]), s;
}();

exports.BindingInSyntax = s;