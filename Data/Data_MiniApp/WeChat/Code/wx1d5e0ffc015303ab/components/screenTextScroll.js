(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/screenTextScroll" ], {
    3678: function(t, n, e) {
        var i = e("7cc5");
        e.n(i).a;
    },
    "55ed": function(t, n, e) {
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "7cc5": function(t, n, e) {},
    "947d": function(t, n, e) {
        e.r(n);
        var i = e("55ed"), o = e("9808");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        e("3678");
        var r = e("f0c5"), c = Object(r.a)(o.default, i.b, i.c, !1, null, "cb38ab1e", null, !1, i.a, void 0);
        n.default = c.exports;
    },
    9808: function(t, n, e) {
        e.r(n);
        var i = e("ca93"), o = e.n(i);
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(a);
        n.default = o.a;
    },
    ca93: function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = !1, i = {
                props: {
                    list: {
                        type: Array,
                        defual: function() {
                            return [];
                        }
                    },
                    color: {
                        type: String,
                        defual: "#000000"
                    }
                },
                data: function() {
                    return {
                        interval: 2e3,
                        duration: 2e3,
                        animationData: "",
                        tx: ""
                    };
                },
                computed: {},
                created: function() {
                    var t = this, n = (this.$props.list.length, 0);
                    for (var e in this.$props.list) n += this.$props.list[e];
                    this.tx = -(25 * n.length + 618) + "rpx", setTimeout(function() {
                        t.scrollAni();
                    }, 1e3);
                },
                methods: {
                    queryMsgW: function() {
                        var t = this;
                        return new Promise(function(n, e) {
                            setTimeout(function() {
                                t.createSelectorQuery().selectAll("._item").boundingClientRect(function(t) {
                                    n(t[t.length - 1].left + t[t.length - 1].width);
                                }).exec();
                            }, 3e3);
                        });
                    },
                    slideChange: function(t) {
                        this.$emit("getCurrentIndex", t.detail.current);
                    },
                    _aniEnd: function(n) {
                        if (e = !e) {
                            this.animationData = null;
                            var i = t.createAnimation({
                                delay: 0,
                                timingFunction: "linear",
                                duration: 1
                            });
                            i.translateX(0).step(), this.animationData = i.export();
                        } else this.scrollAni();
                    },
                    scrollAni: function() {
                        this.animationData = null;
                        var n = t.createAnimation({
                            delay: 0,
                            timingFunction: "linear",
                            duration: 3e3 * (this.$props.list.length + 1 || 1)
                        });
                        n.translateX(this.tx).step(), this.animationData = n.export();
                    }
                },
                watch: {
                    list: function(t) {
                        var n = this;
                        console.log("list", t), t.length;
                        var e = 0;
                        for (var i in t) e += t[i];
                        this.tx = -(25 * e.length + 618) + "rpx", setTimeout(function() {
                            n.scrollAni();
                        }, 1e3);
                    }
                }
            };
            n.default = i;
        }).call(this, e("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/screenTextScroll-create-component", {
    "components/screenTextScroll-create-component": function(t, n, e) {
        e("543d").createComponent(e("947d"));
    }
}, [ [ "components/screenTextScroll-create-component" ] ] ]);