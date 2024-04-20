Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, require("../../b/helpers/Arrayincludes");

var t = "[object Array]", e = "[object Object]";

function i(t) {
    return Object.prototype.toString.call(t);
}

function n(t, e) {
    return e.includes(".") ? "".concat(t, '["').concat(e, '"]') : ("" === t ? "" : t + ".") + e;
}

function r(t, e) {
    for (var i in e) if (void 0 === t[i] && void 0 !== e[i]) return !0;
    return !1;
}

function s(n, o) {
    if (n !== o) {
        var c = i(n), a = i(o);
        if (c === e && a === e) {
            if (!r(n, o)) for (var f in o) s(n[f], o[f]);
        } else c === t && a === t && n.length >= o.length && o.forEach(function(t, e) {
            s(n[e], t);
        });
    }
}

function o(t, e, n) {
    if ("[object Function]" !== i(n)) if ("" === e) for (var r in n) t[r] = n[r]; else t[e] = n;
}

function c(s, a, f, u) {
    if (s !== a) {
        var h = i(s), l = i(a);
        if (h === e) if (l !== e || r(s, a) && "" !== f) o(u, f, s); else {
            var v = function(h) {
                var l = s[h], v = a[h], b = i(l), d = i(v);
                if (b !== t && b !== e) l !== a[h] && o(u, n(f, h), l); else if (b === t) d !== t || l.length < v.length ? o(u, n(f, h), l) : l.forEach(function(t, e) {
                    c(t, v[e], "".concat(n(f, h), "[").concat(e, "]"), u);
                }); else if (b === e) if (d !== e || r(l, v)) o(u, n(f, h), l); else for (var p in l) {
                    var y = n(f, h) + (p.includes(".") ? '["'.concat(p, '"]') : "." + p);
                    c(l[p], v[p], y, u);
                }
            };
            for (var b in s) v(b);
        } else h === t ? l !== t || s.length < a.length ? o(u, f, s) : s.forEach(function(t, e) {
            c(t, a[e], "".concat(f, "[").concat(e, "]"), u);
        }) : o(u, f, s);
    }
}

var a = Behavior({
    methods: {
        helpersStoreBehavior_limoReady: function(t) {
            function e(t) {
                if (this.unsubscribe) {
                    var e = this.store.getState(), i = this.mapToState(e, t);
                    if (i && Object.keys(i)) {
                        var n = {};
                        for (var r in i) n[r] = this.isH5 ? this[r] : this.data[r];
                        var o = function(t, e) {
                            var i = {};
                            return s(t, e), c(t, e, "", i), i;
                        }(i, n);
                        if (0 !== Object.keys(o).length) if (this.isH5) {
                            var a = {};
                            Object.keys(o).forEach(function(t) {
                                var e = t.replace(/[/.|/[].*/, "");
                                a[e] = JSON.parse(JSON.stringify(i[e]));
                            }), this.setData(a);
                        } else {
                            var f = JSON.parse(JSON.stringify(o));
                            (function(t) {
                                var e = !0;
                                return Object.keys(t).forEach(function(t) {
                                    /\.userAvatars(\[\d+\])?$/.test(t) || (e = !1);
                                }), e;
                            })(f) || this.setData(f);
                        }
                    }
                }
            }
            this.store && "function" == typeof this.mapToState && (this.unsubscribe = this.store.subscribe(e.bind(this, t)), 
            e.call(this, t));
        }
    },
    detached: function() {
        "function" == typeof this.unsubscribe && this.unsubscribe();
    }
});

exports.default = a;