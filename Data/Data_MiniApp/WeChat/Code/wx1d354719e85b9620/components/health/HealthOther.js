(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/health/HealthOther" ], {
    "7ae0": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("894f"));
        var a = {
            name: "health-other",
            props: {
                data: Object,
                noData: Boolean,
                loaded: Boolean
            },
            components: {
                NonePage: function() {
                    n.e("components/health/NonePage").then(function() {
                        return resolve(n("e7c4"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    imgUrl: this.$store.state.env.VUE_APP_RESOURCE_URL
                };
            },
            filters: {
                sliceStr: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return e ? e.slice(t, n) : "";
                }
            },
            methods: {
                goFirstDetail: function(e) {
                    o.default.goFirstDetail(e);
                }
            }
        };
        t.default = a;
    },
    94875: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.loaded && !e.noData ? e.__map(e.data, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    f0: e._f("sliceStr")(n, 5, 10),
                    f1: e._f("sliceStr")(n, 0, 4)
                };
            }) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, a = [];
    },
    b015: function(e, t, n) {
        n.r(t);
        var o = n("94875"), a = n("ff10");
        for (var l in a) [ "default" ].indexOf(l) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(l);
        var r = n("f0c5"), c = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    ff10: function(e, t, n) {
        n.r(t);
        var o = n("7ae0"), a = n.n(o);
        for (var l in o) [ "default" ].indexOf(l) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(l);
        t.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/health/HealthOther-create-component", {
    "components/health/HealthOther-create-component": function(e, t, n) {
        n("543d").createComponent(n("b015"));
    }
}, [ [ "components/health/HealthOther-create-component" ] ] ]);