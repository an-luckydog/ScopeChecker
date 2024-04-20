var e = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFactoryDetails = exports.ensureFullyBound = void 0;

var r = require("./serialization"), n = e(require("../constants/error_msgs")), t = require("../constants/literal_types"), a = require("./factory_type");

exports.ensureFullyBound = function(e) {
    var a = null;
    switch (e.type) {
      case t.BindingTypeEnum.ConstantValue:
      case t.BindingTypeEnum.Function:
        a = e.cache;
        break;

      case t.BindingTypeEnum.Constructor:
      case t.BindingTypeEnum.Instance:
        a = e.implementationType;
        break;

      case t.BindingTypeEnum.DynamicValue:
        a = e.dynamicValue;
        break;

      case t.BindingTypeEnum.Provider:
        a = e.provider;
        break;

      case t.BindingTypeEnum.Factory:
        a = e.factory;
    }
    if (null === a) {
        var i = (0, r.getServiceIdentifierAsString)(e.serviceIdentifier);
        throw new Error("".concat(n.INVALID_BINDING_TYPE, " ").concat(i));
    }
};

exports.getFactoryDetails = function(e) {
    switch (e.type) {
      case t.BindingTypeEnum.Factory:
        return {
            factory: e.factory,
            factoryType: a.FactoryType.Factory
        };

      case t.BindingTypeEnum.Provider:
        return {
            factory: e.provider,
            factoryType: a.FactoryType.Provider
        };

      case t.BindingTypeEnum.DynamicValue:
        return {
            factory: e.dynamicValue,
            factoryType: a.FactoryType.DynamicValue
        };

      default:
        throw new Error("Unexpected factory type ".concat(e.type));
    }
};