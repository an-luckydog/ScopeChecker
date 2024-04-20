(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/red-pack-scan/red-pack-scan" ], {
    "5b03": function(n, t, e) {
        e.r(t);
        var a = e("f8d3"), c = e("b6f4");
        for (var o in c) [ "default" ].indexOf(o) < 0 && function(n) {
            e.d(t, n, function() {
                return c[n];
            });
        }(o);
        e("781a");
        var i = e("f0c5"), r = Object(i.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = r.exports;
    },
    6635: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = e("0488"), c = {
            props: {
                waitActivation: {
                    type: [ Object, String ],
                    default: {}
                },
                txMoney: {
                    type: [ Number, String ],
                    default: 0
                },
                typebg: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    img120Th: a.qpImgUrl,
                    isBigScreen: getApp().globalData.isBigScreen
                };
            },
            methods: {
                handleCloseredpackPup: function() {
                    this.$emit("handleCloseredpackPup");
                }
            }
        };
        t.default = c;
    },
    "6a40": function(n, t, e) {},
    "781a": function(n, t, e) {
        var a = e("6a40"), c = e.n(a);
        c.a;
    },
    b6f4: function(n, t, e) {
        e.r(t);
        var a = e("6635"), c = e.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(o);
        t.default = c.a;
    },
    f8d3: function(n, t, e) {
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return c;
        }), e.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            var n = (this._self._c, this._f("stripTrailingZeros")(this.waitActivation.earnMoney || "")), t = this.txMoney ? this._f("stripTrailingZeros")(this.waitActivation.earnMoney || "") : null;
            this.$mp.data = Object.assign({}, {
                $root: {
                    f0: n,
                    f1: t
                }
            });
        }, c = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/red-pack-scan/red-pack-scan-create-component", {
    "components/red-pack-scan/red-pack-scan-create-component": function(n, t, e) {
        e("543d").createComponent(e("5b03"));
    }
}, [ [ "components/red-pack-scan/red-pack-scan-create-component" ] ] ]);