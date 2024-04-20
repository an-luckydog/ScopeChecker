var e = require("../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sendMC = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = n(t, r);
    i.default.getLimoRuntime().sendMC({
        valLab: l,
        bid: e,
        options: o
    });
}, exports.sendMV = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = n(t, r);
    i.default.getLimoRuntime().sendMV({
        valLab: l,
        bid: e,
        options: o
    });
};

var t = require("../../../../b/helpers/objectSpread2"), i = e(require("../../../@limo/core/index.js")), n = function(e, i) {
    return e || (e = {}), e.custom = t(t({}, e.custom), i || {}), e;
};