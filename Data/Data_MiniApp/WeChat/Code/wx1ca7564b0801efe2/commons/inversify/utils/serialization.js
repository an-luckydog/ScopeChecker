Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFunctionName = function(e) {
    if (e.name) return e.name;
    var t = e.toString(), n = t.match(/^function\s*([^\s(]+)/);
    return n ? n[1] : "Anonymous function: ".concat(t);
}, exports.getServiceIdentifierAsString = function(t) {
    return "function" == typeof t ? t.name : "symbol" == e(t) ? t.toString() : t;
}, exports.getSymbolDescription = function(e) {
    return e.toString().slice(7, -1);
};

var e = require("../../../b/helpers/typeof");