var _typeof = require("./typeof");

function _regeneratorRuntime() {
    "use strict";
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */    module.exports = _regeneratorRuntime = function() {
        return t;
    };
    var t = {}, r = Object.prototype, e = r.hasOwnProperty, n = Object.defineProperty || function(t, r, e) {
        t[r] = e.value;
    }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
    function u(t, r, e) {
        return Object.defineProperty(t, r, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[r];
    }
    try {
        u({}, "");
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        u = function(t, r, e) {
            return t[r] = e;
        };
    }
    function h(t, r, e, o) {
        var i = r && r.prototype instanceof s ? r : s, a = Object.create(i.prototype), c = new O(o || []);
        return n(a, "_invoke", {
            value: L(t, e, c)
        }), a;
    }
    function l(t, r, e) {
        try {
            return {
                type: "normal",
                arg: t.call(r, e)
            };
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return {
                type: "throw",
                arg: t
            };
        }
    }
    t.wrap = h;
    var f = {};
    function s() {}
    function p() {}
    function v() {}
    var y = {};
    u(y, i, function() {
        return this;
    });
    var d = Object.getPrototypeOf, g = d && d(d(j([])));
    g && g !== r && e.call(g, i) && (y = g);
    var m = v.prototype = s.prototype = Object.create(y);
    function w(t) {
        [ "next", "throw", "return" ].forEach(function(r) {
            u(t, r, function(t) {
                return this._invoke(r, t);
            });
        });
    }
    function x(t, r) {
        var o;
        n(this, "_invoke", {
            value: function(n, i) {
                function a() {
                    return new r(function(o, a) {
                        !function n(o, i, a, c) {
                            var u = l(t[o], t, i);
                            if ("throw" !== u.type) {
                                var h = u.arg, f = h.value;
                                return f && "object" == _typeof(f) && e.call(f, "__await") ? r.resolve(f.__await).then(function(t) {
                                    n("next", t, a, c);
                                }, function(t) {
                                    n("throw", t, a, c);
                                }) : r.resolve(f).then(function(t) {
                                    h.value = t, a(h);
                                }, function(t) {
                                    return n("throw", t, a, c);
                                });
                            }
                            c(u.arg);
                        }(n, i, o, a);
                    });
                }
                return o = o ? o.then(a, a) : a();
            }
        });
    }
    function L(t, r, e) {
        var n = "suspendedStart";
        return function(o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
                if ("throw" === o) throw i;
                return {
                    value: void 0,
                    done: !0
                };
            }
            for (e.method = o, e.arg = i; ;) {
                var a = e.delegate;
                if (a) {
                    var c = b(a, e);
                    if (c) {
                        if (c === f) continue;
                        return c;
                    }
                }
                if ("next" === e.method) e.sent = e._sent = e.arg; else if ("throw" === e.method) {
                    if ("suspendedStart" === n) throw n = "completed", e.arg;
                    e.dispatchException(e.arg);
                } else "return" === e.method && e.abrupt("return", e.arg);
                n = "executing";
                var u = l(t, r, e);
                if ("normal" === u.type) {
                    if (n = e.done ? "completed" : "suspendedYield", u.arg === f) continue;
                    return {
                        value: u.arg,
                        done: e.done
                    };
                }
                "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg);
            }
        };
    }
    function b(t, r) {
        var e = r.method, n = t.iterator[e];
        if (void 0 === n) return r.delegate = null, "throw" === e && t.iterator.return && (r.method = "return", 
        r.arg = void 0, b(t, r), "throw" === r.method) || "return" !== e && (r.method = "throw", 
        r.arg = new TypeError("The iterator does not provide a '" + e + "' method")), f;
        var o = l(n, t.iterator, r.arg);
        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, 
        f;
        var i = o.arg;
        return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", 
        r.arg = void 0), r.delegate = null, f) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), 
        r.delegate = null, f);
    }
    function E(t) {
        var r = {
            tryLoc: t[0]
        };
        1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), 
        this.tryEntries.push(r);
    }
    function _(t) {
        var r = t.completion || {};
        r.type = "normal", delete r.arg, t.completion = r;
    }
    function O(t) {
        this.tryEntries = [ {
            tryLoc: "root"
        } ], t.forEach(E, this), this.reset(!0);
    }
    function j(t) {
        if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var n = -1, o = function r() {
                    for (;++n < t.length; ) if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                    return r.value = void 0, r.done = !0, r;
                };
                return o.next = o;
            }
        }
        return {
            next: k
        };
    }
    function k() {
        return {
            value: void 0,
            done: !0
        };
    }
    return p.prototype = v, n(m, "constructor", {
        value: v,
        configurable: !0
    }), n(v, "constructor", {
        value: p,
        configurable: !0
    }), p.displayName = u(v, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
        var r = "function" == typeof t && t.constructor;
        return !!r && (r === p || "GeneratorFunction" === (r.displayName || r.name));
    }, t.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, u(t, c, "GeneratorFunction")), 
        t.prototype = Object.create(m), t;
    }, t.awrap = function(t) {
        return {
            __await: t
        };
    }, w(x.prototype), u(x.prototype, a, function() {
        return this;
    }), t.AsyncIterator = x, t.async = function(r, e, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new x(h(r, e, n, o), i);
        return t.isGeneratorFunction(e) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, w(m), u(m, c, "Generator"), u(m, i, function() {
        return this;
    }), u(m, "toString", function() {
        return "[object Generator]";
    }), t.keys = function(t) {
        var r = Object(t), e = [];
        for (var n in r) e.push(n);
        return e.reverse(), function t() {
            for (;e.length; ) {
                var n = e.pop();
                if (n in r) return t.value = n, t.done = !1, t;
            }
            return t.done = !0, t;
        };
    }, t.values = j, O.prototype = {
        constructor: O,
        reset: function(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
            this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), 
            !t) for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function(t) {
            if (this.done) throw t;
            var r = this;
            function n(e, n) {
                return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), 
                !!n;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                    var c = e.call(i, "catchLoc"), u = e.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    } else {
                        if (!u) throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(t, r) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, 
            f) : this.complete(a);
        },
        complete: function(t, r) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
            this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), 
            f;
        },
        finish: function(t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), _(e), f;
            }
        },
        catch: function(t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                    var n = e.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        _(e);
                    }
                    return o;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(t, r, e) {
            return this.delegate = {
                iterator: j(t),
                resultName: r,
                nextLoc: e
            }, "next" === this.method && (this.arg = void 0), f;
        }
    }, t;
}

module.exports = _regeneratorRuntime;