var n = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BindingToSyntax = void 0;

var i = require("../../../b/helpers/classCallCheck"), e = require("../../../b/helpers/createClass"), t = n(require("../constants/error_msgs")), o = require("../constants/literal_types"), r = require("./binding_in_when_on_syntax"), u = require("./binding_when_on_syntax"), d = function() {
    function n(e) {
        i(this, n), this._binding = void 0, this._binding = e;
    }
    return e(n, [ {
        key: "to",
        value: function(n) {
            return this._binding.type = o.BindingTypeEnum.Instance, this._binding.implementationType = n, 
            new r.BindingInWhenOnSyntax(this._binding);
        }
    }, {
        key: "toSelf",
        value: function() {
            if ("function" != typeof this._binding.serviceIdentifier) throw new Error("".concat(t.INVALID_TO_SELF_VALUE));
            var n = this._binding.serviceIdentifier;
            return this.to(n);
        }
    }, {
        key: "toConstantValue",
        value: function(n) {
            return this._binding.type = o.BindingTypeEnum.ConstantValue, this._binding.cache = n, 
            this._binding.dynamicValue = null, this._binding.implementationType = null, this._binding.scope = o.BindingScopeEnum.Singleton, 
            new u.BindingWhenOnSyntax(this._binding);
        }
    }, {
        key: "toDynamicValue",
        value: function(n) {
            return this._binding.type = o.BindingTypeEnum.DynamicValue, this._binding.cache = null, 
            this._binding.dynamicValue = n, this._binding.implementationType = null, new r.BindingInWhenOnSyntax(this._binding);
        }
    }, {
        key: "toConstructor",
        value: function(n) {
            return this._binding.type = o.BindingTypeEnum.Constructor, this._binding.implementationType = n, 
            this._binding.scope = o.BindingScopeEnum.Singleton, new u.BindingWhenOnSyntax(this._binding);
        }
    }, {
        key: "toFactory",
        value: function(n) {
            return this._binding.type = o.BindingTypeEnum.Factory, this._binding.factory = n, 
            this._binding.scope = o.BindingScopeEnum.Singleton, new u.BindingWhenOnSyntax(this._binding);
        }
    }, {
        key: "toFunction",
        value: function(n) {
            if ("function" != typeof n) throw new Error(t.INVALID_FUNCTION_BINDING);
            var i = this.toConstantValue(n);
            return this._binding.type = o.BindingTypeEnum.Function, this._binding.scope = o.BindingScopeEnum.Singleton, 
            i;
        }
    }, {
        key: "toAutoFactory",
        value: function(n) {
            return this._binding.type = o.BindingTypeEnum.Factory, this._binding.factory = function(i) {
                return function() {
                    return i.container.get(n);
                };
            }, this._binding.scope = o.BindingScopeEnum.Singleton, new u.BindingWhenOnSyntax(this._binding);
        }
    }, {
        key: "toAutoNamedFactory",
        value: function(n) {
            return this._binding.type = o.BindingTypeEnum.Factory, this._binding.factory = function(i) {
                return function(e) {
                    return i.container.getNamed(n, e);
                };
            }, new u.BindingWhenOnSyntax(this._binding);
        }
    }, {
        key: "toProvider",
        value: function(n) {
            return this._binding.type = o.BindingTypeEnum.Provider, this._binding.provider = n, 
            this._binding.scope = o.BindingScopeEnum.Singleton, new u.BindingWhenOnSyntax(this._binding);
        }
    }, {
        key: "toService",
        value: function(n) {
            this.toDynamicValue(function(i) {
                return i.container.get(n);
            });
        }
    } ]), n;
}();

exports.BindingToSyntax = d;