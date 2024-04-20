(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/red-pack/red-pack" ], {
    "18d3": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = e("0488"), o = {
            props: {
                waitActivation: {
                    type: [ Object, String ],
                    default: {}
                },
                txMoney: {
                    type: [ Number, String ],
                    default: 0
                }
            },
            data: function() {
                return {
                    img120Th: a.config.img120Th
                };
            }
        };
        t.default = o;
    },
    "40e8": function(n, t, e) {
        e.r(t);
        var a = e("7935"), o = e("f5f4");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        e("d9a2");
        var i = e("f0c5"), r = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = r.exports;
    },
    7935: function(n, t, e) {
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return o;
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
        }, o = [];
    },
    a0b7: function(n, t, e) {},
    d9a2: function(n, t, e) {
        var a = e("a0b7");
        e.n(a).a;
    },
    f5f4: function(n, t, e) {
        e.r(t);
        var a = e("18d3"), o = e.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        t.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/red-pack/red-pack-create-component", {
    "components/red-pack/red-pack-create-component": function(n, t, e) {
        e("543d").createComponent(e("40e8"));
    }
}, [ [ "components/red-pack/red-pack-create-component" ] ] ]);