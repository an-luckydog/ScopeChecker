var e = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MetadataReader = void 0;

var t = require("../../../b/helpers/classCallCheck"), a = require("../../../b/helpers/createClass"), r = e(require("../constants/metadata_keys")), s = function() {
    function e() {
        t(this, e);
    }
    return a(e, [ {
        key: "getConstructorMetadata",
        value: function(e) {
            return {
                compilerGeneratedMetadata: Reflect.getMetadata(r.PARAM_TYPES, e),
                userGeneratedMetadata: Reflect.getMetadata(r.TAGGED, e) || {}
            };
        }
    }, {
        key: "getPropertiesMetadata",
        value: function(e) {
            return Reflect.getMetadata(r.TAGGED_PROP, e);
        }
    } ]), e;
}();

exports.MetadataReader = s;