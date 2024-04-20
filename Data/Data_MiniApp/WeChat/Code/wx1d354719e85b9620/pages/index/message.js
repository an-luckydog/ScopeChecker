var t = require("../../@babel/runtime/helpers/typeof");

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/message" ], {
    "0029": function(t, e, n) {
        n.r(e);
        var r = n("a7a8"), o = n("2334");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("3ead"), n("b8d3");
        var a = n("f0c5"), u = Object(a.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    },
    1940: function(t, e, n) {},
    2334: function(t, e, n) {
        n.r(e);
        var r = n("316a"), o = n.n(r);
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    "316a": function(e, n, r) {
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                return t(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
            })(e);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = r("8e0b");
        function a() {
            a = function() {
                return t;
            };
            var t = {}, e = Object.prototype, n = e.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {}, i = r.iterator || "@@iterator", u = r.asyncIterator || "@@asyncIterator", s = r.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                c({}, "");
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                c = function(t, e, n) {
                    return t[e] = n;
                };
            }
            function l(t, e, n, r) {
                var o = e && e.prototype instanceof d ? e : d, i = Object.create(o.prototype), a = new T(r || []);
                return i._invoke = function(t, e, n) {
                    var r = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === o) throw i;
                            return {
                                value: void 0,
                                done: !0
                            };
                        }
                        for (n.method = o, n.arg = i; ;) {
                            var a = n.delegate;
                            if (a) {
                                var u = S(a, n);
                                if (u) {
                                    if (u === h) continue;
                                    return u;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var s = f(t, e, n);
                            if ("normal" === s.type) {
                                if (r = n.done ? "completed" : "suspendedYield", s.arg === h) continue;
                                return {
                                    value: s.arg,
                                    done: n.done
                                };
                            }
                            "throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg);
                        }
                    };
                }(t, n, a), i;
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
            t.wrap = l;
            var h = {};
            function d() {}
            function p() {}
            function v() {}
            var y = {};
            c(y, i, function() {
                return this;
            });
            var g = Object.getPrototypeOf, m = g && g(g(b([])));
            m && m !== e && n.call(m, i) && (y = m);
            var w = v.prototype = d.prototype = Object.create(y);
            function _(t) {
                [ "next", "throw", "return" ].forEach(function(e) {
                    c(t, e, function(t) {
                        return this._invoke(e, t);
                    });
                });
            }
            function I(t, e) {
                function r(i, a, u, s) {
                    var c = f(t[i], t, a);
                    if ("throw" !== c.type) {
                        var l = c.arg, h = l.value;
                        return h && "object" == o(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                            r("next", t, u, s);
                        }, function(t) {
                            r("throw", t, u, s);
                        }) : e.resolve(h).then(function(t) {
                            l.value = t, u(l);
                        }, function(t) {
                            return r("throw", t, u, s);
                        });
                    }
                    s(c.arg);
                }
                var i;
                this._invoke = function(t, n) {
                    function o() {
                        return new e(function(e, o) {
                            r(t, n, e, o);
                        });
                    }
                    return i = i ? i.then(o, o) : o();
                };
            }
            function S(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, S(t, e), "throw" === e.method)) return h;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return h;
                }
                var r = f(n, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, 
                h;
                var o = r.arg;
                return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = void 0), e.delegate = null, h) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, h);
            }
            function N(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function T(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(N, this), this.reset(!0);
            }
            function b(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: L
                };
            }
            function L() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return p.prototype = v, c(w, "constructor", v), c(v, "constructor", p), p.displayName = c(v, s, "GeneratorFunction"), 
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, c(t, s, "GeneratorFunction")), 
                t.prototype = Object.create(w), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, _(I.prototype), c(I.prototype, u, function() {
                return this;
            }), t.AsyncIterator = I, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new I(l(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? a : a.next().then(function(t) {
                    return t.done ? t.value : a.next();
                });
            }, _(w), c(w, s, "Generator"), c(w, i, function() {
                return this;
            }), c(w, "toString", function() {
                return "[object Generator]";
            }), t.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(), function n() {
                    for (;e.length; ) {
                        var r = e.pop();
                        if (r in t) return n.value = r, n.done = !1, n;
                    }
                    return n.done = !0, n;
                };
            }, t.values = b, T.prototype = {
                constructor: T,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), 
                    !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
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
                    function r(n, r) {
                        return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], a = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var u = n.call(i, "catchLoc"), s = n.call(i, "finallyLoc");
                            if (u && s) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (u) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
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
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), E(n), h;
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                E(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), h;
                }
            }, t;
        }
        function u(t, e, n, r, o, i, a) {
            try {
                var u = t[i](a), s = u.value;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return void n(t);
            }
            u.done ? e(s) : Promise.resolve(s).then(r, o);
        }
        var s = {
            data: function() {
                return {
                    imgUrl: this.$store.state.env.VUE_APP_RESOURCE_URL
                };
            },
            components: {},
            computed: {
                sessions: function() {
                    var t;
                    return null !== (t = this.$store.getters["im/sessionsList"]) && void 0 !== t ? t : [];
                },
                sysInfo: function() {
                    return this.$store.state.im.serviceRemind;
                },
                noData: function() {
                    var t, e;
                    return !this.$util.isLogin() || 0 == (null === (t = this.sessions) || void 0 === t ? void 0 : t.length) && 0 == (null === (e = this.sysInfo.list) || void 0 === e ? void 0 : e.length);
                },
                loaded: function() {
                    var t, e;
                    return (null === (t = this.sessions) || void 0 === t ? void 0 : t.length) >= 0 || (null === (e = this.sysInfo.list) || void 0 === e ? void 0 : e.length) >= 0;
                }
            },
            watch: {
                loaded: {
                    handler: function(t) {
                        t && this.$util.hideLoading();
                    },
                    immediate: !0
                }
            },
            filters: {
                calcTimeHeader: function(t) {
                    return t ? i.util.calcTime(t) : "";
                },
                getLastMessage: function(t) {
                    var e, n;
                    switch (t.lastMsg.type) {
                      case "text":
                        return "<div style='overflow:hidden;white-space:nowrap;text-overflow:ellipsis;'>".concat(t.lastMsg.text, "</div>");

                      case "image":
                        return "[图片]";

                      case "audio":
                        return "[语音]";

                      case "video":
                        return "[视频]";

                      case "custom":
                        if (t.lastMsg.content.type === i.CONSTANT.INQUIRY.INQUIRY_MESSAGE_TYPE.病历) return "[病历]";
                        if (t.lastMsg.content.type === i.CONSTANT.INQUIRY.INQUIRY_MESSAGE_TYPE.处方) return "[处方]";
                        if (t.lastMsg.content.type === i.CONSTANT.INQUIRY.INQUIRY_MESSAGE_TYPE.视频通话) return "[视频通话]";
                        if (t.lastMsg.content.type === i.CONSTANT.INQUIRY.INQUIRY_MESSAGE_TYPE.首诊单 || t.lastMsg.content.type === i.CONSTANT.INQUIRY.INQUIRY_MESSAGE_TYPE.处方被质疑 || t.lastMsg.content.type === i.CONSTANT.INQUIRY.INQUIRY_MESSAGE_TYPE.处方审核不通过) return "[自定义消息]";
                        if (t.lastMsg.content.type === i.CONSTANT.INQUIRY.INQUIRY_MESSAGE_TYPE.结束语) return "[问诊结束语]";
                        var r, o;
                        if (null !== (e = t.lastMsg.content) && void 0 !== e && null !== (n = e.data) && void 0 !== n && n.customerContent) return "<div style='overflow:hidden;white-space:nowrap;text-overflow:ellipsis;'>".concat(null === (r = t.lastMsg.content) || void 0 === r || null === (o = r.data) || void 0 === o ? void 0 : o.customerContent, "</div>");
                    }
                }
            },
            onLoad: function() {
                i.util.isLogin() && !this.loaded && this.$util.showLoading();
            },
            onShow: function() {
                i.util.isLogin() && this.$IM.getServiceRemind();
            },
            onHide: function() {
                this.$util.hideLoading();
            },
            methods: {
                goServiceRemindList: function() {
                    var t = this;
                    return function(t) {
                        return function() {
                            var e = this, n = arguments;
                            return new Promise(function(r, o) {
                                var i = t.apply(e, n);
                                function a(t) {
                                    u(i, r, o, a, s, "next", t);
                                }
                                function s(t) {
                                    u(i, r, o, a, s, "throw", t);
                                }
                                a(void 0);
                            });
                        };
                    }(a().mark(function e() {
                        var n;
                        return a().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.$util.inAliMiniProgram();

                              case 2:
                                e.sent ? (n = {
                                    type: "jumpToApplet",
                                    data: {
                                        redirect: "remindList",
                                        type: "push",
                                        path: "/pages/consult/service-remind/list"
                                    }
                                }, t.$util.postMessageAli(n)) : t.$Router.push({
                                    path: "/pages/consult/service-remind/list"
                                });

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                selectSession: function(t) {
                    var e = {
                        type: "jumpToH5",
                        data: {
                            redirect: "chating",
                            type: "push",
                            path: "/pages/consult/chating/chating",
                            query: {
                                sessionId: "",
                                inquiryNo: ""
                            }
                        }
                    };
                    t.content.inquirySession.inquiryStatus == this.$CONSTANT.INQUIRY.INQUIRY_STATUS.已退诊 || t.content.inquirySession.inquiryStatus == this.$CONSTANT.INQUIRY.INQUIRY_STATUS.已完成 || t.content.inquirySession.inquiryStatus == this.$CONSTANT.INQUIRY.INQUIRY_STATUS.已取消 ? (e.data.query.inquiryNo = t.content.inquirySession.inquiryNo, 
                    e.data.query.sessionId = t.to) : e.data.query.sessionId = t.to, this.$util.gotoOtherPage(e);
                }
            }
        };
        n.default = s;
    },
    "3ead": function(t, e, n) {
        var r = n("919c");
        n.n(r).a;
    },
    "919c": function(t, e, n) {},
    a67c: function(t, e, n) {
        (function(t) {
            n("6cdc"), r(n("66fd"));
            var e = r(n("0029"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    a7a8: function(t, e, n) {
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var r = function() {
            var t = this, e = (t.$createElement, t._self._c, t.sysInfo.list && t.sysInfo.list.length ? t._f("calcTimeHeader")(t.sysInfo.list.length && t.sysInfo.list[0].time) : null), n = t.__map(t.sessions, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    f1: t._f("calcTimeHeader")(e.updateTime),
                    f2: t._f("getLastMessage")(e)
                };
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    f0: e,
                    l0: n
                }
            });
        }, o = [];
    },
    b8d3: function(t, e, n) {
        var r = n("1940");
        n.n(r).a;
    }
}, [ [ "a67c", "common/runtime", "common/vendor" ] ] ]);