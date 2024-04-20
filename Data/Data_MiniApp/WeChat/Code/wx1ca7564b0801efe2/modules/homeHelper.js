Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getChunkedModuleData = function(e, t, n) {
    return !e || e.length <= n ? e || [] : e.slice(t, n);
}, exports.paginateModuleData = function(e, t, n, r) {
    var o = t * n, u = e.slice(o, (n + 1) * t);
    if (u.length < 1) return;
    var a = {};
    return u.forEach(function(e) {
        a["".concat(r, "[").concat(o++, "]")] = e;
    }), a;
}, exports.sortModulesByFixedComp = function(t) {
    if (!t) return [];
    var n = [], r = t.filter(function(t) {
        var r = e.indexOf(t.name) > -1;
        return r && n.push(t), !r;
    });
    return r.unshift.apply(r, n), r;
};

var e = [ "open-screen", "limo-modal" ];