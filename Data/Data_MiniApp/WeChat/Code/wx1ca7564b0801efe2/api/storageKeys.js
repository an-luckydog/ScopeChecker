var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = require("../b/helpers/objectSpread2"), t = require("../b/helpers/slicedToArray");

require("../b/helpers/Objectentries");

var o = e(require("../constants/storage")), a = require("../constants/time"), s = {
    DINING_STYLE_VO: {
        key: "DINING_STYLE_VO",
        storeTime: 1 * a.HOURS
    },
    HAS_CART_AUTO_POP: {
        key: "HAS_CART_AUTO_POP",
        storeTime: 24 * a.HOURS
    },
    MEMBER_SELECTED_COUPON: {
        key: "MEMBER_SELECTED_COUPON",
        storeTime: 1 * a.HOURS
    }
};

o.default[Symbol.for("ADDED_MENU_KEYS")] || (o.default[Symbol.for("ADDED_MENU_KEYS")] = !0, 
Object.entries(s).forEach(function(e) {
    var a = t(e, 2), s = a[0], i = a[1];
    if (o.default[s]) throw Error("Conflicted storage key ".concat(s, ", please choose another key name."));
    o.default[s] = r(r({}, i), {}, {
        key: s
    });
}));

var i = o.default;

exports.default = i;