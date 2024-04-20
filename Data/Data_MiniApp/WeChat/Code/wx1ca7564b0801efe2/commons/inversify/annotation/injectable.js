var e = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.injectable = function() {
    return function(e) {
        if (Reflect.hasOwnMetadata(t.PARAM_TYPES, e)) throw new Error(r.DUPLICATED_INJECTABLE_DECORATOR);
        var a = Reflect.getMetadata(t.DESIGN_PARAM_TYPES, e) || [];
        return Reflect.defineMetadata(t.PARAM_TYPES, a, e), e;
    };
};

var r = e(require("../constants/error_msgs")), t = e(require("../constants/metadata_keys"));