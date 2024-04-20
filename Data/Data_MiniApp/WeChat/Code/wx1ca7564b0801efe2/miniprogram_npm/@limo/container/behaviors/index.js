Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports._getModules = function(t) {
    var e = this, n = t.modules, o = t.layout, r = t.container_data, i = void 0 === r ? {} : r, a = t.data, s = void 0 === a ? {} : a, u = t.moduleDefaultProperties, l = {}, d = [], f = !1, h = B(n, u).map(function(t) {
        var n = t.name;
        void 0 === l[n] ? l[n] = 0 : l[n] += 1;
        var o = l[n] ? n + "-" + l[n] : n, r = "string" == typeof t.data ? JSON.parse(t.data || "{}") : t.data || {}, i = "string" == typeof t.layout ? JSON.parse(t.layout || "{}") : t.layout || {}, a = e.lastModules.find(function(t) {
            return t.moduleId === o;
        });
        a && M(a.layout, i) || (f = !0);
        var s = e.formatLayoutInfo(i || {});
        return d.push({
            moduleId: o,
            data: c({}, r),
            layout: c({}, i)
        }), c({
            moduleId: o,
            moduleName: n,
            data: H(n, r, u)
        }, s);
    });
    this.lastModules.forEach(function(t) {
        var e = t.moduleId;
        h.some(function(t) {
            return t.moduleId === e;
        }) || (f = !0);
    });
    var p = this.formatLayoutInfo(o || {}).layoutStyle, g = !1;
    return ((this.isH5 ? this.modules : this.data.modules).length !== h.length || f) && (this.setCommonData(c({}, i, s)), 
    this.lastCommonData = c({}, i, s), this.lastModules = d, g = !0), {
        modulesChange: g,
        modules: h,
        layoutStyle: p
    };
}, exports._initMetric = void 0, exports._limoShowDialog = function(t, e, n, o) {
    var r = e || {}, i = n || {};
    i.position = i.position || "center", i.maskClosable = void 0 === i.maskClosable || i.maskClosable, 
    i.closeMask = !!i.closeMask, i.maskColor = i.maskColor || "rgba(7, 17, 27, 0.6)", 
    i.zIndex = +i.zIndex || 1e3, i.customStyle = "", !this.isH5 && !i.hideTabBarHeight && this.getTabBar && this.getTabBar() && (i.customStyle = "padding-bottom: calc(96rpx + constant(safe-area-inset-bottom));padding-bottom: calc(96rpx + env(safe-area-inset-bottom));");
    var a = this.isH5 ? [].concat(this.dialogs) : [].concat(this.data.dialogs);
    a.push({
        moduleName: t,
        moduleId: t,
        data: i.merge ? H(t, r, o) : r,
        options: i
    }), this.setData({
        dialogs: a
    });
}, exports._watchData = function(t, e) {
    return _.apply(this, arguments);
}, exports.collectModuleData = function(t) {
    return x.apply(this, arguments);
}, exports.collectModulesData = function() {
    return y.apply(this, arguments);
}, exports.containerBehavior = exports.commonBehavior = void 0, exports.destroyModule = function(t) {
    t && this.layout && this.layout.destroyModule(t);
}, exports.formatLayoutInfo = function(t) {
    var e = this, n = !1, o = !1, r = [], i = [];
    return Object.keys(t).forEach(function(a) {
        if (j(t[a])) if (S[a]) r.push(S[a] + ":" + e.transformStyle(S[a], t[a])); else if (O[a]) O[a].forEach(function(n) {
            r.push(n + ":" + e.transformStyle(n, t[a]));
        }); else if ("radiusType" === a) {
            var s = function(t) {
                return C.indexOf(t.radiusType) > -1 ? t.radius || 0 : 16;
            }(t);
            switch (t[a]) {
              case 1:
              default:
                break;

              case 2:
              case 12:
                r.push("overflow:hidden"), r.push("border-top-left-radius:" + s + "rpx"), r.push("border-top-right-radius:" + s + "rpx");
                break;

              case 3:
              case 13:
                r.push("overflow:hidden"), r.push("border-bottom-left-radius:" + s + "rpx"), r.push("border-bottom-right-radius:" + s + "rpx");
                break;

              case 4:
              case 14:
                r.push("overflow:hidden"), r.push("border-top-left-radius:" + s + "rpx"), r.push("border-top-right-radius:" + s + "rpx"), 
                r.push("border-bottom-left-radius:" + s + "rpx"), r.push("border-bottom-right-radius:" + s + "rpx");
            }
        }
        if (E[a]) i.push(E[a] + ":" + T(t[a]) + "rpx"); else if ("separatorType" === a) switch (t[a]) {
          case 0:
          default:
            break;

          case 1:
            n = !0;
            break;

          case 2:
            o = !0;
        }
    }), {
        dividerBottom: n,
        dividerTop: o,
        layoutStyle: r.join(";"),
        dividerStyle: i.join(";")
    };
}, exports.getCommonData = function() {
    return c({}, this.commonData);
}, exports.getLayoutModules = function() {
    return this.layout ? this.layout.data && this.layout.data.modules : [];
}, exports.hasModule = function(t) {
    return !(!t || !this.layout) && this.layout.hasModule(t);
}, exports.layoutDestroyModule = function(t) {
    if (t) {
        this.unLoadModule(t);
        var e = this.data.modules.filter(function(e) {
            return e.moduleId !== t;
        });
        this.lastModules = e, this.setData({
            modules: e
        });
    }
}, exports.layoutHasModule = function(t) {
    return this.lastModules.some(function(e) {
        return e.moduleId === t;
    });
}, exports.limoCloseDialog = function(t) {
    var e = this.isH5 ? [].concat(this.dialogs) : [].concat(this.data.dialogs), n = {};
    if (t) {
        var o = e.findIndex(function(e) {
            return e.moduleId === t;
        });
        o > -1 && (n = e[o], e.splice(o, 1), this.setData({
            dialogs: e
        }));
    } else n = e[e.length - 1], e.pop(), this.setData({
        dialogs: e
    });
    N(n);
}, exports.limoDidLoad = function(t) {
    try {
        if (!t || !this.initModuleLoadDurations) return;
        var e = (this.isH5 && performance && performance.now ? performance.now() : Date.now()) - this.initEntryTs;
        this.initModuleLoadDurations[t] = e;
        var n = this.isH5 ? this.modules.length : this.data.modules.length;
        if (Object.keys(this.initModuleLoadDurations).length === n && !this.isLimoInitRender) {
            var o = this.getInstance();
            o && "function" == typeof o.limoDidRender && o.limoDidRender({
                modulesCount: n,
                renderDuration: Math.ceil(e)
            }), this.isLimoInitRender = !0;
        }
    } catch (t) {}
}, exports.limoDidRender = function(t) {
    var e = void 0 === t ? {} : t, n = e.modulesCount, o = e.renderDuration;
    n && v("LimoLayoutSuccess", [ n ]), o && v("LimoLayoutDuration", [ o ]), this.isH5 ? (this.config && this.config.limoDidLoad && "function" == typeof this.config.limoDidLoad && this.config.limoDidLoad({
        modulesCount: n,
        renderDuration: o
    }), this.limoDidLoad && this.limoDidLoad.emit({
        modulesCount: n,
        renderDuration: o
    })) : (this.data.config && this.data.config.limoDidLoad && "function" == typeof this.data.config.limoDidLoad && this.data.config.limoDidLoad({
        modulesCount: n,
        renderDuration: o
    }), this.triggerEvent("limoDidLoad", {
        modulesCount: n,
        renderDuration: o
    })), this.revoke("limoDidLoad", {
        modulesCount: n,
        renderDuration: o
    });
}, exports.limoSetLayoutStyle = function(t) {
    var e = this.formatLayoutInfo(t).layoutStyle;
    this.isH5 ? this.layoutStyle = e : this.setData({
        layoutStyle: e
    });
}, exports.limoShim = void 0, exports.linked = function(t, e) {
    e && (t.is.indexOf("layout/index") > -1 ? this.layout = t : this.modules[e] = t);
}, exports.loadModule = function(t) {
    try {
        var e = this.linkedModules[t];
        return e && "function" == typeof e.limoPageShow && e.limoPageShow(), !0;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return !1;
    }
}, exports.onMaskTap = function() {
    var t = this.isH5 ? [].concat(this.dialogs) : [].concat(this.data.dialogs), e = t[t.length - 1];
    e && e.options.maskClosable && (t.pop(), this.setData({
        dialogs: t
    }), N(e));
}, exports.onMaskTouchMove = function(t) {
    t && "function" == typeof t.stopPropagation && t.stopPropagation();
}, exports.registerEvent = function(t, e) {
    var n, o = this, r = 0;
    return this.commonFunc[t] ? (r = Object.keys(this.commonFunc[t]).length, this.commonFunc[t]["" + r] = e) : this.commonFunc[t] = ((n = {})["" + r] = e, 
    n), {
        dispose: function() {
            o.commonFunc[t]["" + r] = null;
        }
    };
}, exports.reportMetric = void 0, exports.revoke = function(t, e) {
    var n = this;
    return this.commonFunc[t] && Object.keys(this.commonFunc[t]).forEach(function(o) {
        "function" == typeof n.commonFunc[t][o] && n.commonFunc[t][o](e);
    }), null;
}, exports.selectModule = function(t) {
    return this.modules[t];
}, exports.selectModules = function() {
    return this.modules;
}, exports.setCommonData = function(t) {
    void 0 === t && (t = {}), this.commonData = c({}, this.commonData, t);
}, exports.transformStyle = function(t, e) {
    return isNaN(e) || I.includes(t) ? e : T(e) + "rpx";
}, exports.triggleModelsOnHide = function() {
    for (var t = this.selectModules(), e = this.getLayoutModules(), n = function(n) {
        e.find(function(e) {
            return e.moduleId === t[n].id;
        }) && "function" == typeof t[n].onHide && t[n].onHide();
    }, o = 0; o < t.length; o += 1) n(o);
}, exports.triggleModelsOnLoad = function() {
    for (var t = this.selectModules(), e = this.getLayoutModules(), n = function(n) {
        e.find(function(e) {
            return e.moduleId === t[n].id;
        }) && "function" == typeof t[n].onLoad && t[n].onLoad();
    }, o = 0; o < t.length; o += 1) n(o);
}, exports.triggleModelsOnShow = function() {
    for (var t = this.selectModules(), e = this.getLayoutModules(), n = function(n) {
        e.find(function(e) {
            return e.moduleId === t[n].id;
        }) && "function" == typeof t[n].onShow && t[n].onShow();
    }, o = 0; o < t.length; o += 1) n(o);
}, exports.unLinked = function(t) {
    t && delete this.modules[t];
}, exports.unLoadModule = function(t) {
    try {
        var e = this.linkedModules[t];
        return e && "function" == typeof e.limoPageHide && e.limoPageHide(), !0;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return !1;
    }
}, exports.updateModule = function(t, e, n, o) {
    try {
        var r = this.linkedModules[t];
        return r && "function" == typeof r.didLimoUpdate && r.didLimoUpdate(e, o, n), !0;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return !1;
    }
}, exports.validateLayoutValue = j, exports.validateModels = function() {
    return b.apply(this, arguments);
}, require("../../../../b/helpers/Arrayincludes");

var t, e = require("../../../../b/helpers/typeof"), n = [ "ok" ], o = [ "ok", "cancel", "textCancel" ], r = [ "modules" ];

function i() {
    i = function() {
        return t;
    };
    var t = {}, n = Object.prototype, o = n.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
        t[e] = n.value;
    }, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator", u = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag";
    function l(t, e, n) {
        return Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        l({}, "");
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        l = function(t, e, n) {
            return t[e] = n;
        };
    }
    function d(t, e, n, o) {
        var i = e && e.prototype instanceof p ? e : p, a = Object.create(i.prototype), s = new S(o || []);
        return r(a, "_invoke", {
            value: k(t, n, s)
        }), a;
    }
    function f(t, e, n) {
        try {
            return {
                type: "normal",
                arg: t.call(e, n)
            };
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return {
                type: "throw",
                arg: t
            };
        }
    }
    t.wrap = d;
    var h = {};
    function p() {}
    function g() {}
    function m() {}
    var v = {};
    l(v, s, function() {
        return this;
    });
    var y = Object.getPrototypeOf, x = y && y(y(O([])));
    x && x !== n && o.call(x, s) && (v = x);
    var b = m.prototype = p.prototype = Object.create(v);
    function L(t) {
        [ "next", "throw", "return" ].forEach(function(e) {
            l(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function w(t, n) {
        function i(r, a, s, u) {
            var c = f(t[r], t, a);
            if ("throw" !== c.type) {
                var l = c.arg, d = l.value;
                return d && "object" == e(d) && o.call(d, "__await") ? n.resolve(d.__await).then(function(t) {
                    i("next", t, s, u);
                }, function(t) {
                    i("throw", t, s, u);
                }) : n.resolve(d).then(function(t) {
                    l.value = t, s(l);
                }, function(t) {
                    return i("throw", t, s, u);
                });
            }
            u(c.arg);
        }
        var a;
        r(this, "_invoke", {
            value: function(t, e) {
                function o() {
                    return new n(function(n, o) {
                        i(t, e, n, o);
                    });
                }
                return a = a ? a.then(o, o) : o();
            }
        });
    }
    function k(t, e, n) {
        var o = "suspendedStart";
        return function(r, i) {
            if ("executing" === o) throw Error("Generator is already running");
            if ("completed" === o) {
                if ("throw" === r) throw i;
                return {
                    value: void 0,
                    done: !0
                };
            }
            for (n.method = r, n.arg = i; ;) {
                var a = n.delegate;
                if (a) {
                    var s = D(a, n);
                    if (s) {
                        if (s === h) continue;
                        return s;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                    if ("suspendedStart" === o) throw o = "completed", n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = "executing";
                var u = f(t, e, n);
                if ("normal" === u.type) {
                    if (o = n.done ? "completed" : "suspendedYield", u.arg === h) continue;
                    return {
                        value: u.arg,
                        done: n.done
                    };
                }
                "throw" === u.type && (o = "completed", n.method = "throw", n.arg = u.arg);
            }
        };
    }
    function D(t, e) {
        var n = e.method, o = t.iterator[n];
        if (void 0 === o) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", 
        e.arg = void 0, D(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
        e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
        var r = f(o, t.iterator, e.arg);
        if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, 
        h;
        var i = r.arg;
        return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
        e.arg = void 0), e.delegate = null, h) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
        e.delegate = null, h);
    }
    function M(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
        this.tryEntries.push(e);
    }
    function I(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function S(t) {
        this.tryEntries = [ {
            tryLoc: "root"
        } ], t.forEach(M, this), this.reset(!0);
    }
    function O(t) {
        if (t) {
            var e = t[s];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var n = -1, r = function e() {
                    for (;++n < t.length; ) if (o.call(t, n)) return e.value = t[n], e.done = !1, e;
                    return e.value = void 0, e.done = !0, e;
                };
                return r.next = r;
            }
        }
        return {
            next: E
        };
    }
    function E() {
        return {
            value: void 0,
            done: !0
        };
    }
    return g.prototype = m, r(b, "constructor", {
        value: m,
        configurable: !0
    }), r(m, "constructor", {
        value: g,
        configurable: !0
    }), g.displayName = l(m, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name));
    }, t.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, l(t, c, "GeneratorFunction")), 
        t.prototype = Object.create(b), t;
    }, t.awrap = function(t) {
        return {
            __await: t
        };
    }, L(w.prototype), l(w.prototype, u, function() {
        return this;
    }), t.AsyncIterator = w, t.async = function(e, n, o, r, i) {
        void 0 === i && (i = Promise);
        var a = new w(d(e, n, o, r), i);
        return t.isGeneratorFunction(n) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, L(b), l(b, c, "Generator"), l(b, s, function() {
        return this;
    }), l(b, "toString", function() {
        return "[object Generator]";
    }), t.keys = function(t) {
        var e = Object(t), n = [];
        for (var o in e) n.push(o);
        return n.reverse(), function t() {
            for (;n.length; ) {
                var o = n.pop();
                if (o in e) return t.value = o, t.done = !1, t;
            }
            return t.done = !0, t;
        };
    }, t.values = O, S.prototype = {
        constructor: S,
        reset: function(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
            this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), 
            !t) for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function(t) {
            if (this.done) throw t;
            var e = this;
            function n(n, o) {
                return a.type = "throw", a.arg = t, e.next = n, o && (e.method = "next", e.arg = void 0), 
                !!o;
            }
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r], a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                    var s = o.call(i, "catchLoc"), u = o.call(i, "finallyLoc");
                    if (s && u) {
                        if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    } else if (s) {
                        if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var i = r;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
            h) : this.complete(a);
        },
        complete: function(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
            this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
            h;
        },
        finish: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), I(n), h;
            }
        },
        catch: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                    var o = n.completion;
                    if ("throw" === o.type) {
                        var r = o.arg;
                        I(n);
                    }
                    return r;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function(t, e, n) {
            return this.delegate = {
                iterator: O(t),
                resultName: e,
                nextLoc: n
            }, "next" === this.method && (this.arg = void 0), h;
        }
    }, t;
}

function a(t, e, n, o, r, i, a) {
    try {
        var s = t[i](a), u = s.value;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return void n(t);
    }
    s.done ? e(u) : Promise.resolve(u).then(o, r);
}

function s(t) {
    return function() {
        var e = this, n = arguments;
        return new Promise(function(o, r) {
            var i = t.apply(e, n);
            function s(t) {
                a(i, o, r, s, u, "next", t);
            }
            function u(t) {
                a(i, o, r, s, u, "throw", t);
            }
            s(void 0);
        });
    };
}

function u(t, e) {
    if (null == t) return {};
    var n, o, r = {}, i = Object.keys(t);
    for (o = 0; o < i.length; o++) n = i[o], e.indexOf(n) >= 0 || (r[n] = t[n]);
    return r;
}

function c() {
    return (c = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
    }).apply(this, arguments);
}

function l() {
    var t = getCurrentPages(), e = t[t.length - 1], n = this.getPageId ? this.getPageId() : "";
    return n && (e = t.find(function(t) {
        return t.getPageId() === n;
    }) || e), e && e.limoContainer;
}

var d = Behavior({
    data: {
        isIpx: function() {
            if ("boolean" != typeof t) {
                var e = wx.getSystemInfoSync(), n = e.model, o = e.screenHeight;
                t = !!/iPhone X/i.test(n.toLocaleLowerCase()) || !!(/iPhone/i.test(n.toLocaleLowerCase()) && o >= 812);
            }
            return t;
        }()
    },
    methods: {
        et: function(t) {
            var e = t.currentTarget.id.replace(/-\d$/, ""), n = this.getInstance();
            n && n.triggerEvent && n.triggerEvent(e + "-" + t.type, t.detail);
        },
        getInstance: l,
        getLayout: function() {
            var t = this.getInstance ? this.getInstance() : l();
            return t ? t.layout : null;
        },
        getLayoutData: function(t) {
            var e = this.getLayout();
            return t ? e.data.modules.find(function(e) {
                return e.moduleId === t;
            }) : e.data.modules;
        },
        batchUpdate: function(t, e) {
            var n = {};
            Object.keys(this.data).forEach(function(t) {
                "isIpx" !== t && (n[t] = "");
            }), this.setData(c({}, n, t), function() {
                "function" == typeof e && e();
            });
        },
        onShow: function() {},
        onLoad: function() {},
        onUnLoad: function() {},
        didLimoUpdate: function(t, e, n) {
            var o = this;
            this.setData(t || {}, function() {
                e && o.limoAttached && "function" == typeof o.limoAttached && o.limoAttached(), 
                n && "function" == typeof n && n();
            });
        },
        exportData: function() {
            return {};
        },
        validate: function() {
            return {
                ok: !0
            };
        },
        setCommonData: function(t) {
            var e = this.getInstance();
            e && "function" == typeof e.setCommonData && e.setCommonData(t);
        },
        getCommonData: function() {
            var t = this.getInstance();
            return t && "function" == typeof t.getCommonData ? this.isH5 ? t.getCommonData() : Promise.resolve(t.getCommonData()) : Promise.resolve({});
        },
        registerEvent: function(t, e) {
            var n = this.getInstance();
            if (n && "function" == typeof n.registerEvent) return n.registerEvent(t, e);
        },
        revoke: function(t, e) {
            var n = this.getInstance();
            return n && "function" == typeof n.revoke ? n.revoke(t, e) : null;
        },
        collectModulesData: function() {
            var t = this.getInstance();
            return t && "function" == typeof t.collectModulesData ? t.collectModulesData() : {};
        },
        collectModuleData: function(t) {
            var e = this.getInstance();
            return e && "function" == typeof e.collectModuleData ? e.collectModuleData(t) : {};
        },
        selectModules: function() {
            var t = this.getInstance();
            return t && "function" == typeof t.selectModules ? t.selectModules() : null;
        },
        selectModule: function(t) {
            var e = this.getInstance();
            return e && "function" == typeof e.selectModule ? e.selectModule(t) : null;
        },
        validateModels: function() {
            var t = this.getInstance();
            return !t || "function" != typeof t.validateModels || t.validateModels();
        },
        triggleModelsOnShow: function() {
            var t = this.getInstance();
            t && "function" == typeof t.triggleModelsOnShow && t.triggleModelsOnShow();
        },
        triggleModelsOnLoad: function() {
            var t = this.getInstance();
            t && "function" == typeof t.triggleModelsOnLoad && t.triggleModelsOnLoad();
        },
        triggleModelsOnHide: function() {
            var t = this.getInstance();
            t && "function" == typeof t.triggleModelsOnHide && t.triggleModelsOnHide();
        },
        destroyModule: function() {
            var t = this.getInstance();
            t && this.id && "function" == typeof t.destroyModule && t.destroyModule(this.id);
        },
        hasModule: function() {
            var t = this.getInstance();
            return !t || !(!t || !this.id || "function" != typeof t.hasModule) && t.hasModule(this.id);
        },
        toast: function(t) {
            var e = this.getInstance();
            e && "function" == typeof e.toast && e.toast(t);
        },
        loading: function(t) {
            var e = this.getInstance();
            e && "function" == typeof e.loading && e.loading(t);
        },
        alert: function(t) {
            var e = this.getInstance();
            e && "function" == typeof e.alert && e.alert(t);
        },
        confirm: function(t) {
            var e = this.getInstance();
            e && "function" == typeof e.confirm && e.confirm(t);
        },
        startLazyLoading: function(t) {
            var e = this.getInstance();
            e && "function" == typeof e.startLazyLoading && e.startLazyLoading(t);
        },
        clearLazyLoading: function(t) {
            var e = this.getInstance();
            e && "function" == typeof e.clearLazyLoading && e.clearLazyLoading(t);
        },
        showActionSheet: function(t) {
            var e = this.getInstance();
            e && "function" == typeof e.showActionSheet && e.showActionSheet(t);
        },
        showDialog: function() {
            var t = this.getLayout();
            t && "function" == typeof t.limoShowDialog && t.limoShowDialog.apply(t, arguments);
        },
        closeDialog: function() {
            var t = this.getLayout();
            t && "function" == typeof t.limoCloseDialog && t.limoCloseDialog.apply(t, arguments);
        },
        limoDidLoad: function() {
            var t = this.getLayout();
            t && "function" == typeof t.limoDidLoad && t.limoDidLoad.apply(t, arguments);
        },
        transformLayoutInfo: function() {
            var t = this.getLayout();
            if (t && "function" == typeof t.formatLayoutInfo) return t.formatLayoutInfo.apply(t, arguments);
        }
    }
});

exports.commonBehavior = d;

var f, h = Behavior({
    attached: function() {
        this.events = {};
    },
    methods: {
        wxLoading: function(t, e) {
            void 0 === e && (e = {}), t ? wx.showLoading(e) : wx.hideLoading();
        },
        startLazyLoading: function(t, e) {
            var n = this;
            void 0 === t && (t = -1), void 0 === e && (e = {
                title: "加载中..."
            }), this.clearLazyLoading(), this.lazyTimeout = setTimeout(function() {
                n.wxLoading(!0, e);
            }, t >= 0 ? t : 3e3);
        },
        clearLazyLoading: function() {
            this.lazyTimeout && (clearTimeout(this.lazyTimeout), this.lazyTimeout = null), this.wxLoading(!1);
        },
        loading: function(t) {
            t ? wx.showNavigationBarLoading() : wx.hideNavigationBarLoading(), this.setData({
                loading: {
                    show: !!t,
                    catchtouchmove: !1
                }
            });
        },
        onModalOk: function(t) {
            var e = t.detail;
            this.events.ok && (this.events.ok.call(this, e), this.events.ok = null);
        },
        onModalCancel: function(t) {
            var e = t.detail;
            this.events.cancel && (this.events.cancel.call(this, e), this.events.cancel = null);
        },
        onModalComplete: function(t) {
            var e = t.detail;
            this.events.complete && (this.events.complete.call(this, e), this.events.complete = null);
        },
        alert: function(t) {
            var e = t.ok, o = u(t, n);
            this.events.ok = e, this.setData({
                modal: c({
                    show: !0,
                    type: "alert"
                }, o)
            });
        },
        confirm: function(t) {
            var e = t.ok, n = t.cancel, r = t.textCancel, i = void 0 === r ? "取消" : r, a = u(t, o);
            this.events.cancel = n, this.events.ok = e, this.setData({
                modal: c({
                    show: !0,
                    type: "confirm",
                    textCancel: i
                }, a)
            });
        },
        toast: function(t) {
            var e = this, n = t.message, o = t.duration, r = void 0 === o ? 3e3 : o;
            this.toastTimer && clearTimeout(this.toastTimer), this.toastTimer = setTimeout(function() {
                e.setData({
                    toast: {
                        show: !1
                    }
                });
            }, r), this.setData({
                toast: {
                    show: !0,
                    message: n,
                    className: "",
                    showBackdrop: !1,
                    backdropClassName: ""
                }
            });
        },
        showActionSheet: function(t) {
            var e = t.alertText, n = t.itemList, o = t.itemColor, r = t.success, i = t.fail, a = t.complete;
            this.events.ok = r, this.events.cancel = i, this.events.complete = a, this.setData({
                actionSheet: {
                    show: !0,
                    alertText: e,
                    itemList: n,
                    itemColor: o
                }
            });
        },
        updateLastModuleData: function(t, e) {
            if (this.layout) {
                var n = this.layout.lastModules.find(function(e) {
                    return e.moduleId === t;
                });
                n && n.data && Object.keys(n.data).forEach(function(t) {
                    void 0 !== e[t] && (n.data[t] = e[t]);
                });
            }
        }
    }
}), p = Behavior({
    attached: function() {
        var t = this.getInstance();
        t && this.id && t.linked(this, this.id);
    },
    ready: function() {
        this.limoDidLoad && this.id && this.limoDidLoad(this.id);
    },
    error: function(t) {}
}), g = function() {
    function t(t) {
        this.skipNum = 0, this.groupData = {
            kvs: {},
            tags: {}
        }, this.groupData = t;
    }
    return t.prototype.insertData = function(t) {
        Object.assign(this.groupData.tags, t.tags);
        var e = Object.keys(t.kvs)[0], n = Object.keys(this.groupData.kvs), o = n.findIndex(function(t) {
            return t === e;
        });
        -1 === o ? this.groupData.kvs[e] = t.kvs[e] : this.groupData.kvs[n[o]] = this.groupData.kvs[n[o]].concat(t.kvs[e]);
    }, t;
}(), m = function() {
    function t(t) {
        this.pool = [], this.timer = null, this.config = void 0, this.config = t;
    }
    t.isFit = function(t, e) {
        var n = !0, o = e.tags, r = o.length, i = t.groupData, a = o, s = i.tags;
        r > s.length && (a = i.tags, s = o);
        for (var u = Object.keys(a), c = 0; c < u.length; c++) {
            var l = u[c];
            if (a[l] !== s[l] && void 0 !== s[l]) {
                n = !1;
                break;
            }
        }
        return n;
    };
    var n = t.prototype;
    return n.getUrl = function() {
        return "https://catdot.dianping.com/broker-service/metrictag?p=" + this.config.appId + "&v=1";
    }, n.creatNewGroup = function(t) {
        this.pool.push(new g(t));
    }, n.findGroupIndex = function(e) {
        for (var n = 0; n < this.pool.length; n++) if (t.isFit(this.pool[n], e)) return n;
        return -1;
    }, n.reportNewMetric = function(t) {
        var e = this, n = this.findGroupIndex(t);
        -1 === n ? this.creatNewGroup(t) : this.pool[n].insertData(t), null === this.timer && setTimeout(function() {
            e.startReport();
        }, this.config.delay);
    }, n.fetchData = function() {
        var t = s(i().mark(function t(n) {
            var o, r, a, s, u, c;
            return i().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return o = n.url, r = n.fail, a = n.data, (s = {}).method = n.method || "GET", s.cache = n.cache || "no-store", 
                    "object" == e(n.data) ? (n.header = n.header || {}, n.header["Content-Type"] = "application/json", 
                    s.body = JSON.stringify(n.data)) : s.body = a, s.mode = "no-cors", s.credentials = "include", 
                    u = {}, t.prev = 8, t.next = 11, fetch(o, s);

                  case 11:
                    return c = t.sent, t.next = 14, c.text();

                  case 14:
                    u.data = t.sent, t.next = 20;
                    break;

                  case 17:
                    t.prev = 17, t.t0 = t.catch(8), "function" == typeof r && r(t.t0);

                  case 20:
                  case "end":
                    return t.stop();
                }
            }, t, null, [ [ 8, 17 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(), n.getRequestInstance = function(t) {
        switch (t.dataType = "text", this.config.platform) {
          case "mp":
            return wx.request(t);

          case "tt":
            return tt.request(t);

          case "baidu":
            return t.dataType = "string", swan.request(t);

          case "alipay":
            return my.request(t);

          case "ks":
            return ks.request(t);

          default:
            return this.fetchData(t);
        }
    }, n.startReport = function() {
        var t = this;
        if (this.pool.length) {
            var e = [].concat(this.pool);
            this.pool.forEach(function(n, o) {
                var r = n.groupData;
                try {
                    t.getRequestInstance({
                        url: t.getUrl() + "&unionId=" + t.config.unionId,
                        method: "POST",
                        data: c({}, r, {
                            ts: Math.ceil(Date.now() / 1e3)
                        }),
                        fail: function(t) {}
                    }), delete e[o];
                } catch (t) {}
            }), this.pool = e.filter(function(t) {
                return t;
            }), null !== this.timer && (clearTimeout(this.timer), this.timer = null);
        }
    }, t;
}();

exports.limoShim = p, exports.containerBehavior = h;

var v = function(t, e, n) {
    try {
        var o;
        f.reportNewMetric({
            kvs: (o = {}, o[t] = [].concat(e), o),
            tags: c({}, f.config.getCommonTags(), n)
        });
    } catch (t) {}
};

function y() {
    return (y = s(i().mark(function t() {
        var e, n, o, r, a;
        return i().wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, this.selectModules();

              case 2:
                if (t.t0 = t.sent, t.t0) {
                    t.next = 5;
                    break;
                }
                t.t0 = {};

              case 5:
                e = t.t0, n = {}, o = Object.keys(e), r = 0;

              case 9:
                if (!(r < o.length)) {
                    t.next = 21;
                    break;
                }
                if (a = o[r], "function" != typeof e[a].exportData) {
                    t.next = 17;
                    break;
                }
                return t.next = 14, e[a].exportData();

              case 14:
                n[a] = t.sent, t.next = 18;
                break;

              case 17:
                n[a] = {};

              case 18:
                r += 1, t.next = 9;
                break;

              case 21:
                return t.abrupt("return", n);

              case 22:
              case "end":
                return t.stop();
            }
        }, t, this);
    }))).apply(this, arguments);
}

function x() {
    return (x = s(i().mark(function t(e) {
        var n;
        return i().wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, this.selectModule(e);

              case 2:
                if (!(n = t.sent) || "function" != typeof n.exportData) {
                    t.next = 7;
                    break;
                }
                return t.next = 6, n.exportData();

              case 6:
                return t.abrupt("return", t.sent);

              case 7:
                return t.abrupt("return", null);

              case 8:
              case "end":
                return t.stop();
            }
        }, t, this);
    }))).apply(this, arguments);
}

function b() {
    return (b = s(i().mark(function t() {
        var n, o, r, a, s, u;
        return i().wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, this.selectModules();

              case 2:
                if (t.t0 = t.sent, t.t0) {
                    t.next = 5;
                    break;
                }
                t.t0 = {};

              case 5:
                n = t.t0, o = this.getLayoutModules(), r = Object.keys(n), a = i().mark(function t(e) {
                    var a;
                    return i().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!o.find(function(t) {
                                return t.moduleId === n[e].id;
                            }) || "function" != typeof n[r[e]].validate) {
                                t.next = 10;
                                break;
                            }
                            return t.next = 4, n[r[e]].validate();

                          case 4:
                            if (t.t0 = t.sent, t.t0) {
                                t.next = 7;
                                break;
                            }
                            t.t0 = {
                                ok: !0
                            };

                          case 7:
                            if ((a = t.t0).ok) {
                                t.next = 10;
                                break;
                            }
                            return t.abrupt("return", {
                                v: a
                            });

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }), s = 0;

              case 10:
                if (!(s < r.length)) {
                    t.next = 18;
                    break;
                }
                return t.delegateYield(a(s), "t1", 12);

              case 12:
                if ("object" != e(u = t.t1)) {
                    t.next = 15;
                    break;
                }
                return t.abrupt("return", u.v);

              case 15:
                s += 1, t.next = 10;
                break;

              case 18:
                return t.abrupt("return", {
                    ok: !0
                });

              case 19:
              case "end":
                return t.stop();
            }
        }, t, this);
    }))).apply(this, arguments);
}

function L(t) {
    var n = e(t);
    if (null === t) return "Null";
    if (void 0 === t) return "Undefined";
    if ("boolean" === n) return "Boolean";
    if ("number" === n) return Number.isNaN(t) ? "NaN" : "Number";
    if ("string" === n) return "String";
    if (Array.isArray(t)) return "Array";
    if ("symbol" === n) return "Symbol";
    if (t instanceof RegExp) return "RegExp";
    var o = t && t.toString ? t.toString() : "";
    return [ "true", "false" ].includes(o) ? "Boolean" : Number.isNaN(Number(o)) ? o.startsWith("async") ? "Async" : "[object Promise]" === o ? "Promise" : "function" === n ? "Function" : t instanceof String ? "String" : "Object" : "Number";
}

function w(t) {
    var e = t.__proto__.toString();
    return [ "Error", "TypeError" ].includes(e) ? [ e, t.message ] : [];
}

function k(t) {
    return t.toDateString ? [ !0, t.getTime() ] : [ !1 ];
}

function D(t) {
    return t.constructor !== RegExp ? [ !1 ] : [ !0, t.toString() ];
}

exports.reportMetric = v, exports._initMetric = function(t, e, n) {
    !function(t) {
        f || (f = new m(t));
    }({
        env: e,
        getCommonTags: function() {
            return c({}, t, {
                version: n
            });
        },
        delay: 1e3,
        appId: 424,
        unionId: Date.now(),
        platform: t.platform
    });
};

var M = function t(e, n) {
    if (1 === arguments.length) return function(n) {
        return t(e, n);
    };
    var o = L(e);
    if (o !== L(n)) return !1;
    if ("Function" === o) return void 0 !== e.name && e.name === n.name;
    if ([ "NaN", "Undefined", "Null" ].includes(o)) return !0;
    if ("Number" === o) return Object.is(-0, e) === Object.is(-0, n) && e.toString() === n.toString();
    if ([ "String", "Boolean" ].includes(o)) return e.toString() === n.toString();
    if ("Array" === o) {
        var r = Array.from(e), i = Array.from(n);
        if (r.toString() !== i.toString()) return !1;
        var a = !0;
        return r.forEach(function(e, n) {
            a && (e === i[n] || t(e, i[n]) || (a = !1));
        }), a;
    }
    var s = D(e), u = D(n);
    if (s[0]) return !!u[0] && s[1] === u[1];
    if (u[0]) return !1;
    var c = k(e), l = k(n);
    if (c[0]) return !!l[0] && c[1] === l[1];
    if (l[0]) return !1;
    var d = w(e), f = w(n);
    if (d[0]) return !!f[0] && d[0] === f[0] && d[1] === f[1];
    if ("Object" === o) {
        var h = Object.keys(e);
        if (h.length !== Object.keys(n).length) return !1;
        var p = !0;
        return h.forEach(function(o) {
            if (p) {
                var r = e[o], i = n[o];
                r === i || t(r, i) || (p = !1);
            }
        }), p;
    }
    return !1;
}, I = [ "z-index", "flex" ], S = {
    flex: "flex",
    overflow: "overflow",
    height: "height",
    zIndex: "z-index",
    position: "position",
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    marginTop: "margin-top",
    marginBottom: "margin-bottom",
    marginLeft: "margin-left",
    marginRight: "margin-right",
    paddingTop: "padding-top",
    paddingBottom: "padding-bottom",
    paddingLeft: "padding-left",
    paddingRight: "padding-right",
    background: "background"
}, O = {
    marginVertical: [ S.marginTop, S.marginBottom ],
    marginHorizontal: [ S.marginLeft, S.marginRight ],
    paddingVertical: [ S.paddingTop, S.paddingBottom ],
    paddingHorizontal: [ S.paddingLeft, S.paddingRight ]
}, E = {
    separatorMarginTop: "padding-top",
    separatorMarginBottom: "padding-bottom",
    separatorMarginRight: "padding-right",
    separatorMarginLeft: "padding-left"
}, C = [ 12, 13, 14 ];

function N(t) {
    if (t && t.options) {
        var e = t.options.afterClose;
        e && "function" == typeof e && e();
    }
}

var T = function(t) {
    var e = Number(t);
    return Number.isNaN(e) ? 0 : e;
};

function j(t) {
    return null != t && "undefined" !== t && "null" !== t;
}

function P(t, e, n) {
    var o = this;
    try {
        var i = e.modules, a = u(e, r), s = [], l = [], d = [];
        t.forEach(function(t, e) {
            var r = t.moduleId;
            if (o.linkedModules[r]) {
                var u = "string" == typeof i[e].data ? JSON.parse(i[e].data || "{}") : i[e].data || {}, d = "string" == typeof i[e].layout ? JSON.parse(i[e].layout || "{}") : i[e].layout || {};
                try {
                    var f = o.lastModules.find(function(t) {
                        return t.moduleId === r;
                    });
                    f && M(f.data, u) && M(n, o.lastCommonData) || o.updateModule(r, u, a, !f), f || l.push(r), 
                    s.push({
                        moduleId: r,
                        data: c({}, u),
                        layout: c({}, d)
                    });
                } catch (t) {}
            }
        }), this.lastModules.forEach(function(t) {
            var e = t.moduleId;
            s.some(function(t) {
                return t.moduleId === e;
            }) || d.push(e);
        }), this.lastCommonData = n, this.lastModules = s, l.forEach(function(t) {
            return o.loadModule(t);
        }), d.forEach(function(t) {
            return o.unLoadModule(t);
        });
    } catch (t) {}
}

function _() {
    return (_ = s(i().mark(function t(e, n) {
        var o;
        return i().wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (e && e.modules && 0 !== e.modules.length) {
                    t.next = 2;
                    break;
                }
                return t.abrupt("return");

              case 2:
                return e.modules = B(e.modules, n), this.linkedModules = this.selectModules() || {}, 
                this.setCommonData(c({}, e.container_data || {}, e.data || {})), t.next = 7, this.getCommonData();

              case 7:
                o = t.sent, P.call(this, this.data.modules, e, o);

              case 9:
              case "end":
                return t.stop();
            }
        }, t, this);
    }))).apply(this, arguments);
}

var H = function(t, e, n) {
    var o = n[t];
    if (!o) return e;
    var r = c({}, o);
    return Object.keys(r).forEach(function(t) {
        void 0 !== e[t] && (r[t] = e[t]);
    }), r;
}, B = function(t, e) {
    var n = t;
    try {
        var o = Object.keys(e);
        Array.isArray(o) && (n = t.filter(function(t) {
            return o.includes(t.name);
        }));
    } catch (t) {}
    return n;
};