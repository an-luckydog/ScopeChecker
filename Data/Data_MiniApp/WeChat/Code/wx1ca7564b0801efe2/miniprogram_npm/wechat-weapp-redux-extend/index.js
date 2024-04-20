require("../../b/helpers/Arrayincludes");

var t, e = require("../../b/helpers/typeof");

t = function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0);
    }([ function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var o = r(n(4)), i = n(5), u = r(n(1));
        t.exports = {
            Provider: o.default,
            connectPage: i.connectPage,
            connectComponent: i.connectComponent,
            storeConfig: u.default
        };
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            name: "store"
        }, r = {
            set: function(t, e) {
                n[t] = e;
            },
            get: function(t) {
                return n[t];
            }
        };
        e.default = r;
    }, function(t, e) {
        t.exports = {
            getIn: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = e.reduce(function(t, e) {
                    return t && void 0 !== t[e] ? t[e] : null;
                }, t) || n;
                return r;
            },
            assign: function(t) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), n = 1; arguments.length > n; n++) {
                    var r = arguments[n];
                    if (null != r) for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o]);
                }
                return e;
            },
            isNeedDelay: function(t, e) {
                var n = !0;
                return Object.keys(t).forEach(function(t) {
                    /\.userAvatars(\[\d+\])?$/.test(t) || (n = !1);
                }), n;
            }
        };
    }, function(t, e) {
        t.exports = function(t) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(t);
            try {
                throw Error(t);
            } catch (t) {}
        };
    }, function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(n(3)), i = n(2), u = r(n(1));
        e.default = function(t, e) {
            return function(t) {
                var e = [ "subscribe", "dispatch", "getState" ].filter(function(e) {
                    return !t.hasOwnProperty(e);
                });
                e.length > 0 && (0, o.default)("Store似乎不是一个合法的Redux Store对象: 缺少这些方法: " + e.join(", ") + "。");
            }(t), e && u.default.set("name", e), function(n) {
                return (0, i.assign)({}, n, function(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                }({}, e, t));
            };
        };
    }, function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var o = (r(n(6)), n(7)), i = r(o), u = r(n(3)), f = r(n(8)), c = r(n(1)), a = n(2), s = function(t) {
            return {};
        }, l = function(t) {
            return {
                dispatch: t
            };
        };
        t.exports = {
            connectPage: function(t, e, n, r) {
                var o = !!t, d = t || s, p = "function" == typeof getApp && getApp({
                    allowDefault: !0
                }), b = r || c.default.get("name");
                p[b] || (p[b] = n);
                var h = void 0;
                return h = "function" == typeof e ? e : e ? (0, f.default)(e) : l, function(t) {
                    function e(t) {
                        if (this.unsubscribe) {
                            var e = this.store.getState(), n = d(e, t);
                            if (this.data && n && Object.keys(n)) {
                                var r = {};
                                for (var o in n) r[o] = this.data[o];
                                var u = (0, i.default)(n, r);
                                if (0 !== Object.keys(u).length) {
                                    var f = JSON.parse(JSON.stringify(u));
                                    (0, a.isNeedDelay)(f) || (Date.now(), this.setData(f, function() {}));
                                }
                            }
                        }
                    }
                    var r = t.onLoad, f = t.onUnload;
                    return (0, a.assign)({}, t, h(n.dispatch), {
                        onLoad: function(t) {
                            p[b] || (p[b] = n), this.store = n, this.store || (0, u.default)("Store对象不存在!"), 
                            o && (this.unsubscribe = this.store.subscribe(e.bind(this, t)), e.call(this, t)), 
                            "function" == typeof r && r.call(this, t);
                        },
                        onUnload: function() {
                            "function" == typeof f && f.call(this), "function" == typeof this.unsubscribe && this.unsubscribe();
                        }
                    });
                };
            },
            connectComponent: function(t, e, n, r, o) {
                var d = !!t, p = t || s, b = "function" == typeof getApp && getApp({
                    allowDefault: !0
                }), h = r || c.default.get("name");
                b[h] || (b[h] = n);
                var v = void 0;
                return v = "function" == typeof e ? e : e ? (0, f.default)(e) : l, function(t) {
                    function e(t) {
                        var e = v(n.dispatch);
                        Object.keys(e).forEach(function(n) {
                            n === o && e[n](t);
                        });
                    }
                    function r(t) {
                        if (this.unsubscribe) {
                            var e = this.store.getState(), n = p(e, t);
                            if (this.data && n && Object.keys(n)) {
                                var r = {};
                                for (var o in n) r[o] = this.data[o];
                                var u = (0, i.default)(n, r);
                                if (0 !== Object.keys(u).length) {
                                    var f = JSON.parse(JSON.stringify(u));
                                    Date.now(), this.setData(f, function() {});
                                }
                            }
                        }
                    }
                    var f = t.ready, c = t.detached, s = (0, a.assign)({}, t.methods || {}, v(n.dispatch), {
                        updateStart: function() {
                            console.log("updateStart"), e(!0);
                        },
                        updateEnd: function() {
                            console.log("updateEnd"), e(!1);
                        }
                    });
                    return (0, a.assign)({}, t, {
                        ready: function(t) {
                            b[h] || (b[h] = n), this.store = n, this.store || (0, u.default)("Store对象不存在!"), 
                            d && (this.unsubscribe = this.store.subscribe(r.bind(this, t)), r.call(this, t)), 
                            "function" == typeof f && f.call(this, t);
                        },
                        detached: function() {
                            "function" == typeof c && c.call(this), "function" == typeof this.unsubscribe && this.unsubscribe();
                        },
                        methods: s
                    });
                };
            }
        };
    }, function(t, e) {
        function n(t) {
            return Object.prototype.toString.call(t);
        }
        var r = "[object Number]", o = "[object String]", i = "[object Array]", u = "[object Object]";
        t.exports = function t(e, f) {
            if (e === f) return !0;
            var c = n(e);
            if (c !== n(f)) return !1;
            if (c === r || c === o) return e === f;
            if (c === u) {
                if (Object.keys(e).length !== Object.keys(f).length) return !1;
                for (var a in e) if (t(e[a]) !== t(f[a])) return !1;
                return !0;
            }
            if (c === i) {
                if (f.length != f.length) return !1;
                for (var s = 0; e.length > s; s++) if (t(e[s]) !== t(f[s])) return !1;
                return !0;
            }
            return !0;
        };
    }, function(t, e) {
        function n(t, e) {
            for (var n in e) if (void 0 === t[n] && void 0 !== e[n]) return !0;
            return !1;
        }
        function r(t, e) {
            return e.includes(".") ? t + '["' + e + '"]' : ("" == t ? "" : t + ".") + e;
        }
        function o(t, e, n) {
            if (i(n) != c) if ("" === e) for (var r in n) t[r] = n[r]; else t[e] = n;
        }
        function i(t) {
            return Object.prototype.toString.call(t);
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t, e) {
            var c = {};
            return function t(e, r) {
                if (e !== r) {
                    var o = i(e), c = i(r);
                    if (o == f && c == f) {
                        if (!n(e, r)) for (var a in r) {
                            var s = e[a];
                            t(s, r[a]);
                        }
                    } else o == u && c == u && (r.length > e.length || r.forEach(function(n, r) {
                        t(e[r], n);
                    }));
                }
            }(t, e), function t(e, c, a, s) {
                if (e !== c) {
                    var l = i(e), d = i(c);
                    if (l == f) if (d != f || n(e, c) && "" !== a) o(s, a, e); else {
                        var p = function(l) {
                            var d = e[l], p = c[l], b = i(d), h = i(p);
                            if (b != u && b != f) d !== c[l] && o(s, r(a, l), d); else if (b == u) h != u || p.length > d.length ? o(s, r(a, l), d) : d.forEach(function(e, n) {
                                t(e, p[n], r(a, l) + "[" + n + "]", s);
                            }); else if (b == f) if (h != f || n(d, p)) o(s, r(a, l), d); else for (var v in d) {
                                var y = r(a, l) + (v.includes(".") ? '["' + v + '"]' : "." + v);
                                t(d[v], p[v], y, s);
                            }
                        };
                        for (var b in e) p(b);
                    } else l == u ? d != u || c.length > e.length ? o(s, a, e) : e.forEach(function(e, n) {
                        t(e, c[n], a + "[" + n + "]", s);
                    }) : o(s, a, e);
                }
            }(t, e, "", c), c;
        };
        var u = "[object Array]", f = "[object Object]", c = "[object Function]";
    }, function(t, n) {
        function r(t, e) {
            return function() {
                return e(t.apply(void 0, arguments));
            };
        }
        var o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        };
        t.exports = function(t) {
            return function(e) {
                return function(t, e) {
                    if ("function" == typeof t) return r(t, e);
                    if ("object" !== (void 0 === t ? "undefined" : o(t)) || null === t) throw Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : void 0 === t ? "undefined" : o(t)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                    for (var n = Object.keys(t), i = {}, u = 0; n.length > u; u++) {
                        var f = n[u], c = t[f];
                        "function" == typeof c && (i[f] = r(c, e));
                    }
                    return i;
                }(t, e);
            };
        };
    } ]);
}, "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) && "object" == ("undefined" == typeof module ? "undefined" : e(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) ? exports.WeAppRedux = t() : (void 0).WeAppRedux = t();