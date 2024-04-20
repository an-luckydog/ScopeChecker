Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.collocationDishAddMC = function(t, o) {
    var s = r(e(e({}, t), {}, {
        addDishQuantity: o
    }));
    (0, n.sendMC)("b_saaspay_bsz9zphw_mc", null, null, {
        clickData: s
    });
}, exports.collocationDishMV = function(e) {
    var t = r(e);
    (0, n.sendMV)("b_saaspay_we46nheq_mv", null, null, t);
}, exports.menuCollocationMV = function(e) {
    var t = r(e);
    (0, n.sendMV)("b_saaspay_o9p4trgs_mv", null, null, t);
};

var e = require("../../b/helpers/objectSpread2"), n = require("../LXHelper"), r = function(e) {
    if (!e) return {};
    var n = {};
    return Object.keys(e).forEach(function(r) {
        n[function(e) {
            for (var n = [], r = 0, t = 0; t < e.length; t++) e[t].match(/[A-Z]/) && (n.push(e.slice(r, t)), 
            r = t);
            return n.push(e.slice(r)), n.length ? n.join("_").toLowerCase() : e;
        }(r)] = e[r];
    }), n;
};