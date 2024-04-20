Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Binding = void 0;

var i = require("../../../b/helpers/classCallCheck"), t = require("../../../b/helpers/createClass"), e = require("../constants/literal_types"), n = require("../utils/id"), s = function() {
    function s(t, o) {
        i(this, s), this.id = void 0, this.moduleId = void 0, this.activated = void 0, this.serviceIdentifier = void 0, 
        this.implementationType = void 0, this.cache = void 0, this.dynamicValue = void 0, 
        this.scope = void 0, this.type = void 0, this.factory = void 0, this.provider = void 0, 
        this.constraint = void 0, this.onActivation = void 0, this.onDeactivation = void 0, 
        this.id = (0, n.id)(), this.activated = !1, this.serviceIdentifier = t, this.scope = o, 
        this.type = e.BindingTypeEnum.Invalid, this.constraint = function() {
            return !0;
        }, this.implementationType = null, this.cache = null, this.factory = null, this.provider = null, 
        this.onActivation = null, this.onDeactivation = null, this.dynamicValue = null;
    }
    return t(s, [ {
        key: "clone",
        value: function() {
            var i = new s(this.serviceIdentifier, this.scope);
            return i.activated = i.scope === e.BindingScopeEnum.Singleton && this.activated, 
            i.implementationType = this.implementationType, i.dynamicValue = this.dynamicValue, 
            i.scope = this.scope, i.type = this.type, i.factory = this.factory, i.provider = this.provider, 
            i.constraint = this.constraint, i.onActivation = this.onActivation, i.onDeactivation = this.onDeactivation, 
            i.cache = this.cache, i;
        }
    } ]), s;
}();

exports.Binding = s;