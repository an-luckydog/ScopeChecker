Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.formatReserveTime = function(e) {
    if (e && 3 === e.length) {
        var t = new Date(e[0]), r = t.getFullYear(), n = t.getMonth(), a = t.getDate();
        return new Date(r, n, a, e[1], e[2]).getTime();
    }
    return Date.now();
};