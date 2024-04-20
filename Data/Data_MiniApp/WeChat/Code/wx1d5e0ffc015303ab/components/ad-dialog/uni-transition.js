(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ad-dialog/uni-transition" ], {
    1750: function(t, n, e) {},
    "25d6": function(t, n, e) {
        var i = e("4ea4");
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = i(e("9523"));
        function r(t, n) {
            var e = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                n && (i = i.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                })), e.push.apply(e, i);
            }
            return e;
        }
        function a(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? arguments[n] : {};
                n % 2 ? r(Object(e), !0).forEach(function(n) {
                    (0, o.default)(t, n, e[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : r(Object(e)).forEach(function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                });
            }
            return t;
        }
        var s = {
            name: "uniTransition",
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                modeClass: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                duration: {
                    type: Number,
                    default: 300
                },
                styles: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            data: function() {
                return {
                    isShow: !1,
                    ani: []
                };
            },
            watch: {
                show: {
                    handler: function(t) {
                        t ? this.open() : this.close();
                    },
                    immediate: !0
                }
            },
            computed: {
                stylesObject: function() {
                    var t = a(a({}, this.styles), {}, {
                        "transition-duration": this.duration / 1e3 + "s"
                    }), n = "";
                    for (var e in t) {
                        n += this.toLine(e) + ":" + t[e] + ";";
                    }
                    return n;
                }
            },
            methods: {
                change: function() {
                    this.$emit("click", {
                        detail: this.isShow
                    });
                },
                open: function() {
                    var t = this;
                    clearTimeout(this.timer), this.isShow = !0, this.ani = this.getClasses(!1), this.$nextTick(function() {
                        setTimeout(function() {
                            t._animation(!0);
                        }, 50);
                    });
                },
                close: function(t) {
                    clearTimeout(this.timer), this._animation(!1);
                },
                _animation: function(t) {
                    var n = this, e = this.getClasses(t);
                    this.ani = e, console.log("_animation", t), console.log(this.ani), this.timer = setTimeout(function() {
                        t || (n.isShow = !1), n.$emit("change", {
                            detail: n.isShow
                        });
                    }, this.duration);
                },
                getClasses: function(t) {
                    var n = [];
                    return this.modeClass.forEach(function(e) {
                        n.push(e + "-" + (t ? "active" : "in"));
                    }), n;
                },
                _modeClassArr: function(t) {
                    var n = this.modeClass;
                    if ("string" != typeof n) {
                        var e = "";
                        return n.forEach(function(n) {
                            e += n + "-" + t + ",";
                        }), e.substr(0, e.length - 1);
                    }
                    return n + "-" + t;
                },
                toLine: function(t) {
                    return t.replace(/([A-Z])/g, "-$1").toLowerCase();
                }
            }
        };
        n.default = s;
    },
    "56b0": function(t, n, e) {
        var i = e("1750");
        e.n(i).a;
    },
    "68d6": function(t, n, e) {
        e.r(n);
        var i = e("feb8"), o = e("fad8");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        e("56b0");
        var a = e("f0c5"), s = Object(a.a)(o.default, i.b, i.c, !1, null, "af099df6", null, !1, i.a, void 0);
        n.default = s.exports;
    },
    fad8: function(t, n, e) {
        e.r(n);
        var i = e("25d6"), o = e.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(r);
        n.default = o.a;
    },
    feb8: function(t, n, e) {
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ad-dialog/uni-transition-create-component", {
    "components/ad-dialog/uni-transition-create-component": function(t, n, e) {
        e("543d").createComponent(e("68d6"));
    }
}, [ [ "components/ad-dialog/uni-transition-create-component" ] ] ]);