(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/magic-list", "components/timeCount" ], {
    "0b92": function(t, e, n) {
        var o = n("2ec1");
        n.n(o).a;
    },
    "0e28": function(t, e, n) {
        n.r(e);
        var o = n("822f"), a = n("dfee");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("2cd4");
        var r = n("f0c5"), c = Object(r.a)(a.default, o.b, o.c, !1, null, "237b4825", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "2cd4": function(t, e, n) {
        var o = n("b7ec");
        n.n(o).a;
    },
    "2ec1": function(t, e, n) {},
    "556b": function(t, e, n) {
        n.r(e);
        var o = n("be7e"), a = n("cede");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("0b92");
        var r = n("f0c5"), c = Object(r.a)(a.default, o.b, o.c, !1, null, "d21d90c8", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "69e4": function(t, e, n) {
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n("0488"), i = (o(n("556b")), {
                data: function() {
                    return {
                        qpImgUrl: a.qpImgUrl,
                        goodsImgRoot: a.config.goodsImgRoot
                    };
                },
                props: {
                    magicList: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    source: {
                        type: String,
                        default: ""
                    }
                },
                methods: {
                    toMagicGoods: function(e) {
                        t.navigateTo({
                            url: "/pagesMall/mall/goodsDetailZunXiang?id=" + e
                        });
                    }
                }
            });
            e.default = i;
        }).call(this, n("543d").default);
    },
    "822f": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.magicList.length), n = t.__map(t.magicList, function(n, o) {
                return {
                    $orig: t.__get_orig(n),
                    f0: t._f("toThousands")(n.realPay / 100),
                    g1: e > 0 ? n.goodsUrl.split(",") : null
                };
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: e,
                    l0: n
                }
            });
        }, a = [];
    },
    "8b14e": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            data: function() {
                return {
                    time: {},
                    isStart: !1
                };
            },
            props: {
                start_time: String,
                end_time: String,
                fontColor: String
            },
            mounted: function() {
                console.log("daojishi"), this.countDown();
            },
            methods: {
                timeFormat: function(t) {
                    return t < 10 ? "0" + t : t;
                },
                countDown: function() {
                    var t = this, e = setInterval(function() {
                        var n = new Date().getTime(), o = new Date(t.end_time.replace(/-/g, "/")).getTime(), a = new Date(t.start_time.replace(/-/g, "/")).getTime();
                        if (a - n <= 0) if (o - n <= 0) console.log("结束倒计时"), clearInterval(e); else {
                            t.isStart = !0;
                            var i = (o - n) / 1e3, r = parseInt(i / 86400), c = parseInt(i % 86400 / 3600 + 24 * r), u = parseInt(i % 86400 % 3600 / 60), f = parseInt(i % 86400 % 3600 % 60);
                            t.time = {
                                day: t.timeFormat(r),
                                hour: t.timeFormat(c),
                                min: t.timeFormat(u),
                                sec: t.timeFormat(f)
                            };
                        } else if (a - n > 0) {
                            t.isStart = !1;
                            var l = (a - n) / 1e3, s = parseInt(l / 86400), d = parseInt(l % 86400 / 3600 + 24 * s), m = parseInt(l % 86400 % 3600 / 60), p = parseInt(l % 86400 % 3600 % 60);
                            t.time = {
                                day: t.timeFormat(s),
                                hour: t.timeFormat(d),
                                min: t.timeFormat(m),
                                sec: t.timeFormat(p)
                            };
                        }
                    }, 1e3);
                }
            }
        };
        e.default = o;
    },
    b7ec: function(t, e, n) {},
    be7e: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    cede: function(t, e, n) {
        n.r(e);
        var o = n("8b14e"), a = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    dfee: function(t, e, n) {
        n.r(e);
        var o = n("69e4"), a = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/magic-list-create-component", {
    "components/magic-list-create-component": function(t, e, n) {
        n("543d").createComponent(n("0e28"));
    }
}, [ [ "components/magic-list-create-component" ] ] ]);