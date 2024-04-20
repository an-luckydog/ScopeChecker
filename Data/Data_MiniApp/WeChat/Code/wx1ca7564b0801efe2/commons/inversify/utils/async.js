Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isPromise = r, exports.isPromiseOrContainsPromise = function(e) {
    return !!r(e) || Array.isArray(e) && e.some(r);
};

var e = require("../../../b/helpers/typeof");

function r(r) {
    return ("object" == e(r) && null !== r || "function" == typeof r) && "function" == typeof r.then;
}