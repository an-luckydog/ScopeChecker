Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.injectBase = function(n) {
    return function(o) {
        return function(a, u, i) {
            if (void 0 === o) {
                var c = "function" == typeof a ? a.name : a.constructor.name;
                throw new Error((0, e.UNDEFINED_INJECT_ANNOTATION)(c));
            }
            return (0, t.createTaggedDecorator)(new r.Metadata(n, o))(a, u, i);
        };
    };
};

var e = require("../constants/error_msgs"), r = require("../planning/metadata"), t = require("./decorator_utils");