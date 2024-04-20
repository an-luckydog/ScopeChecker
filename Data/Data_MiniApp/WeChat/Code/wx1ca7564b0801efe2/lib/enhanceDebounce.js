function t(t, r) {
    for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), l = 2; l < e; l++) n[l - 2] = arguments[l];
    if ("function" != typeof t) throw new TypeError("Expected a function");
    return setTimeout(function() {
        t.apply(void 0, n);
    }, +r || 0);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(r, e, n) {
    var l, u, a, i = function(t, e) {
        n ? (l = null, a && (a = !1, e && (u = r.apply(t, e)))) : (l = null, e && (u = r.apply(t, e)));
    }, c = function(t, r) {
        return r = null == r ? t.length - 1 : +r, function() {
            for (var e = Math.max(arguments.length - r, 0), n = Array(e), l = 0; l < e; l++) n[l] = arguments[l + r];
            switch (r) {
              case 0:
                return t.call(this, n);

              case 1:
                return t.call(this, arguments[0], n);

              case 2:
                return t.call(this, arguments[0], arguments[1], n);
            }
            var u = Array(r + 1);
            for (l = 0; l < r; l++) u[l] = arguments[l];
            return u[r] = n, t.apply(this, u);
        };
    }(function(c) {
        if (l && (a = !0, clearTimeout(l)), n) {
            var o = !l;
            l = t(i, e, this, c), o && (u = r.apply(this, c));
        } else l = t(i, e, this, c);
        return u;
    });
    return c.cancel = function() {
        clearTimeout(l), l = null;
    }, c;
};