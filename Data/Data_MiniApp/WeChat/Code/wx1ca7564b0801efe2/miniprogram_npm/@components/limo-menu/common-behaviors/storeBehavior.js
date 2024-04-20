Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, require("../../../../b/helpers/Arrayincludes");

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

function o(n, s) {
    if (n !== s) {
        var c = i(n), a = i(s);
        if (c === e && a === e) {
            if (!r(n, s)) for (var f in s) o(n[f], s[f]);
        } else c === t && a === t && n.length >= s.length && s.forEach(function(t, e) {
            o(n[e], t);
        });
    }
}

function s(t, e, n) {
    if ("[object Function]" !== i(n)) if ("" === e) for (var r in n) t[r] = n[r]; else t[e] = n;
}

function c(o, a, f, u) {
    if (o !== a) {
        var h = i(o), l = i(a);
        if (h === e) if (l !== e || r(o, a) && "" !== f) s(u, f, o); else {
            var v = function(h) {
                var l = o[h], v = a[h], b = i(l), d = i(v);
                if (b !== t && b !== e) l !== a[h] && s(u, n(f, h), l); else if (b === t) d !== t || l.length < v.length ? s(u, n(f, h), l) : l.forEach(function(t, e) {
                    c(t, v[e], "".concat(n(f, h), "[").concat(e, "]"), u);
                }); else if (b === e) if (d !== e || r(l, v)) s(u, n(f, h), l); else for (var p in l) {
                    var y = n(f, h) + (p.includes(".") ? '["'.concat(p, '"]') : "." + p);
                    c(l[p], v[p], y, u);
                }
            };
            for (var b in o) v(b);
        } else h === t ? l !== t || o.length < a.length ? s(u, f, o) : o.forEach(function(t, e) {
            c(t, a[e], "".concat(f, "[").concat(e, "]"), u);
        }) : s(u, f, o);
    }
}

var a = Behavior({
    methods: {
        commonBehaviorsStoreBehavior_limoReady: function(t) {
            function e(t) {
                if (this.unsubscribe) {
                    var e = this.store.getState(), i = this.mapToState(e, t);
                    if (i && Object.keys(i)) {
                        var n = {};
                        for (var r in i) n[r] = this.isH5 ? this[r] : this.data[r];
                        var s = function(t, e) {
                            var i = {};
                            return o(t, e), c(t, e, "", i), i;
                        }(i, n);
                        if (0 !== Object.keys(s).length) if (this.isH5) {
                            var a = {};
                            Object.keys(s).forEach(function(t) {
                                var e = t.replace(/[/.|/[].*/, "");
                                a[e] = JSON.parse(JSON.stringify(i[e]));
                            }), this.setData(a);
                        } else {
                            var f = JSON.parse(JSON.stringify(s));
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