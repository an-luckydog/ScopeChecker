(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/coupon-common/no-chance" ], {
    4305: function(n, e, o) {},
    6601: function(n, e, o) {
        var c = o("4305");
        o.n(c).a;
    },
    8533: function(n, e, o) {
        o.r(e);
        var c = o("cff8"), t = o("a368");
        for (var u in t) [ "default" ].indexOf(u) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(u);
        o("6601");
        var a = o("f0c5"), i = Object(a.a)(t.default, c.b, c.c, !1, null, "f5e2cc4e", null, !1, c.a, void 0);
        e.default = i.exports;
    },
    a368: function(n, e, o) {
        o.r(e);
        var c = o("c656"), t = o.n(c);
        for (var u in c) [ "default" ].indexOf(u) < 0 && function(n) {
            o.d(e, n, function() {
                return c[n];
            });
        }(u);
        e.default = t.a;
    },
    c656: function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = o("0488"), t = {
            name: "no-chance",
            props: {
                chanceType: {
                    type: Number,
                    default: 0
                },
                upperLimitText: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    img120Th: c.config.img120Th
                };
            },
            computed: {
                btnText: function() {
                    return 1 == this.chanceType ? "前往扫码" : "我知道了";
                }
            },
            methods: {
                handleOpen: function() {
                    this.$refs.no_chance_pup.open("center");
                },
                handleClosePop: function() {
                    this.$refs.no_chance_pup.close();
                },
                handleBtn: function() {
                    var n = this;
                    1 == this.chanceType ? (this.$emit("data", {
                        isScan: !0
                    }), setTimeout(function() {
                        n.handleClosePop();
                    }, 2e3)) : this.$refs.no_chance_pup.close();
                }
            },
            watch: {
                boxShow: {
                    handler: function(n, e) {
                        n != e && (console.log("--------------------"), console.log(this.$refs));
                    },
                    immediate: !0
                }
            }
        };
        e.default = t;
    },
    cff8: function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return u;
        }), o.d(e, "a", function() {
            return c;
        });
        var c = {
            uniPopup: function() {
                return o.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(o.bind(null, "0dae"));
            }
        }, t = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/coupon-common/no-chance-create-component", {
    "components/coupon-common/no-chance-create-component": function(n, e, o) {
        o("543d").createComponent(o("8533"));
    }
}, [ [ "components/coupon-common/no-chance-create-component" ] ] ]);