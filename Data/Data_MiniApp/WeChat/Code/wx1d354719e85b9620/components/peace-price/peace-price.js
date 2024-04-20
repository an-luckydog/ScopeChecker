(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/peace-price/peace-price" ], {
    "1c29": function(e, t, n) {
        n.r(t);
        var i = n("4f57"), c = n.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = c.a;
    },
    "24e6": function(e, t, n) {
        var i = n("feb2");
        n.n(i).a;
    },
    "4f57": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            data: function() {
                return {
                    unitFontSize: 32,
                    integerFontSize: 32,
                    decimalFontSize: 24
                };
            },
            components: {},
            props: {
                price: {
                    type: [ Number, String ],
                    default: ""
                },
                color: {
                    type: String,
                    default: "#FF3A30"
                },
                bold: {
                    type: Boolean,
                    default: !0
                },
                size: {
                    type: String,
                    default: "medium"
                },
                unitSize: {
                    type: [ Number, String ],
                    default: 0
                },
                integerSize: {
                    type: [ Number, String ],
                    default: 0
                },
                decimalSize: {
                    type: [ Number, String ],
                    default: 0
                },
                showUnit: {
                    type: Boolean,
                    default: !0
                }
            },
            watch: {
                size: {
                    handler: function(e, t) {
                        var n = 32, i = 32, c = 24;
                        switch (e) {
                          case "large":
                          case "medium":
                            n = 32, i = 32, c = 24;
                            break;

                          case "small":
                            n = 28, i = 28, c = 20;
                        }
                        this.unitFontSize = n, this.integerFontSize = i, this.decimalFontSize = c;
                    },
                    immediate: !0
                }
            },
            methods: {
                getPriceInteger: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    return (e = this.formatPrice(e, t, n)).split(".")[0];
                },
                getPriceDecimal: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    return (e = this.formatPrice(e, t, n)) && e.split(".")[1] ? "." + e.split(".")[1] : "";
                },
                formatPrice: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    return e = Number(e), (e = isNaN(e) ? 0 : e / t).toFixed(n);
                }
            }
        };
        t.default = i;
    },
    "51e1": function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this, t = (e.$createElement, e._self._c, e.getPriceInteger(e.price)), n = e.getPriceDecimal(e.price);
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: t,
                    m1: n
                }
            });
        }, c = [];
    },
    c840: function(e, t, n) {
        n.r(t);
        var i = n("51e1"), c = n("1c29");
        for (var r in c) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(r);
        n("24e6");
        var o = n("f0c5"), a = Object(o.a)(c.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = a.exports;
    },
    feb2: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/peace-price/peace-price-create-component", {
    "components/peace-price/peace-price-create-component": function(e, t, n) {
        n("543d").createComponent(n("c840"));
    }
}, [ [ "components/peace-price/peace-price-create-component" ] ] ]);