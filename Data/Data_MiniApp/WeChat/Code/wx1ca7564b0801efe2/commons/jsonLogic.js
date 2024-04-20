Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = require("../b/helpers/typeof"), t = require("../b/helpers/classCallCheck"), n = require("../b/helpers/createClass"), e = function() {
    function e() {
        t(this, e);
    }
    return n(e, null, [ {
        key: "is_logic",
        value: function(t) {
            return "object" == r(t) && null !== t && !Array.isArray(t) && 1 === Object.keys(t).length;
        }
    }, {
        key: "truthy",
        value: function(r) {
            return !(Array.isArray(r) && 0 === r.length || !r);
        }
    }, {
        key: "get_operator",
        value: function(r) {
            return Object.keys(r)[0];
        }
    }, {
        key: "apply",
        value: function(r, t) {
            var n = this;
            if (Array.isArray(r)) return r.map(function(r) {
                return n.apply(r, t);
            });
            if (!this.is_logic(r)) return r;
            var e, i, u, a, o, f = this.get_operator(r), l = r[f];
            if (Array.isArray(l) || (l = [ l ]), "if" === f || "?:" == f) {
                for (e = 0; e < l.length - 1; e += 2) if (this.truthy(this.apply(l[e], t))) return this.apply(l[e + 1], t);
                return l.length === e + 1 ? this.apply(l[e], t) : null;
            }
            if ("and" === f) {
                for (e = 0; e < l.length; e += 1) if (i = this.apply(l[e], t), !this.truthy(i)) return i;
                return i;
            }
            if ("or" === f) {
                for (e = 0; e < l.length; e += 1) if (i = this.apply(l[e], t), this.truthy(i)) return i;
                return i;
            }
            if ("filter" === f) return a = this.apply(l[0], t), u = l[1], Array.isArray(a) ? a.filter(function(r) {
                return n.truthy(n.apply(u, r));
            }) : [];
            if ("map" === f) return a = this.apply(l[0], t), u = l[1], Array.isArray(a) ? a.map(function(r) {
                return n.apply(u, r);
            }) : [];
            if ("reduce" === f) return a = this.apply(l[0], t), u = l[1], o = void 0 !== l[2] ? l[2] : null, 
            Array.isArray(a) ? a.reduce(function(r, t) {
                return n.apply(u, {
                    current: t,
                    accumulator: r
                });
            }, o) : o;
            if ("all" === f) {
                if (a = this.apply(l[0], t), u = l[1], !Array.isArray(a) || !a.length) return !1;
                for (e = 0; e < a.length; e += 1) if (!this.truthy(this.apply(u, a[e]))) return !1;
                return !0;
            }
            if ("none" === f) {
                if (a = this.apply(l[0], t), u = l[1], !Array.isArray(a) || !a.length) return !0;
                for (e = 0; e < a.length; e += 1) if (this.truthy(this.apply(u, a[e]))) return !1;
                return !0;
            }
            if ("some" === f) {
                if (a = this.apply(l[0], t), u = l[1], !Array.isArray(a) || !a.length) return !1;
                for (e = 0; e < a.length; e += 1) if (this.truthy(this.apply(u, a[e]))) return !0;
                return !1;
            }
            if ("find" === f) {
                if (a = this.apply(l[0], t), u = l[1], !Array.isArray(a)) return null;
                var s = a.find(function(r) {
                    return n.truthy(n.apply(u, r));
                });
                return s ? this.apply(l[2], s) : null;
            }
            if (l = l.map(function(r) {
                return n.apply(r, t);
            }), this.operations.hasOwnProperty(f) && "function" == typeof this.operations[f]) return this.operations[f].apply(t, l);
            if (f.indexOf(".") > 0) {
                var p, y = String(f).split("."), h = this.operations;
                for (e = 0; e < y.length; e++) {
                    if (!h.hasOwnProperty(y[e])) throw new Error("Unrecognized operation " + f + " (failed at " + y.slice(0, e + 1).join(".") + ")");
                    p = h[y[e]];
                }
                if ("function" == typeof p) return p.apply(t, l);
            }
            throw new Error("Unrecognized operation " + f);
        }
    } ]), e;
}();

exports.default = e, e.operations = {
    "==": function(r, t) {
        return r == t;
    },
    "===": function(r, t) {
        return r === t;
    },
    "!=": function(r, t) {
        return r != t;
    },
    "!==": function(r, t) {
        return r !== t;
    },
    ">": function(r, t) {
        return r > t;
    },
    ">=": function(r, t) {
        return r >= t;
    },
    "<": function(r, t, n) {
        return void 0 === n ? r < t : r < t && t < n;
    },
    "<=": function(r, t, n) {
        return void 0 === n ? r <= t : r <= t && t <= n;
    },
    "!!": function(r) {
        return this.truthy(r);
    },
    "!": function(r) {
        return !this.truthy(r);
    },
    "%": function(r, t) {
        return r % t;
    },
    in: function(r, t) {
        return !(!t || void 0 === t.indexOf) && -1 !== t.indexOf(r);
    },
    cat: function() {
        for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
        return t.join("");
    },
    substr: function(r, t, n) {
        if (n < 0) {
            var e = String(r).substr(t);
            return e.substr(0, e.length + n);
        }
        return String(r).substr(t, n);
    },
    "+": function() {
        for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
        return t.reduce(function(r, t) {
            return parseFloat(r) + parseFloat(t);
        }, 0);
    },
    "*": function() {
        for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
        return t.reduce(function(r, t) {
            return parseFloat(r) * parseFloat(t);
        });
    },
    "-": function(r, t) {
        return void 0 === t ? -r : r - t;
    },
    "/": function(r, t) {
        return r / t;
    },
    min: function() {
        for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
        return Math.min.apply(this, t);
    },
    max: function() {
        for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
        return Math.max.apply(this, t);
    },
    merge: function() {
        for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
        return t.reduce(function(r, t) {
            return r.concat(t);
        }, []);
    },
    var: function(r, t) {
        var n = void 0 === t ? null : t, e = this;
        if (void 0 === r || "" === r || null === r) return e;
        for (var i = String(r).split("."), u = 0; u < i.length; u++) {
            if (null == e) return n;
            if (void 0 === (e = e[i[u]])) return n;
        }
        return e;
    }
};