Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isClonable = function(o) {
    return "object" == e(o) && null !== o && "clone" in o && "function" == typeof o.clone;
};

var e = require("../../../b/helpers/typeof");