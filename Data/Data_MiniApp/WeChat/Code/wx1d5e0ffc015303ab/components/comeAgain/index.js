(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/comeAgain/index" ], {
    "28cf": function(n, e, t) {
        (function(n, t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = {
                props: {
                    activationType: {
                        type: String,
                        default: "0"
                    }
                },
                data: function() {
                    return {};
                },
                methods: {
                    exitProgram: function() {
                        n.exitMiniProgram({
                            success: function(n) {
                                t.clearStorageSync();
                            }
                        });
                    },
                    handleClose: function() {
                        this.$refs.waitActivation_pup.close();
                    },
                    handleOpenPop: function() {
                        this.$refs.waitActivation_pup.open("center");
                    },
                    activate: function() {
                        this.$emit("acitvation");
                    }
                }
            };
            e.default = o;
        }).call(this, t("bc2e").default, t("543d").default);
    },
    "2bb5": function(n, e, t) {
        var o = t("d9e9");
        t.n(o).a;
    },
    "3c27": function(n, e, t) {
        t.r(e);
        var o = t("ded8"), c = t("d178");
        for (var i in c) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(i);
        t("2bb5");
        var a = t("f0c5"), u = Object(a.a)(c.default, o.b, o.c, !1, null, "3b6e3b4f", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    d178: function(n, e, t) {
        t.r(e);
        var o = t("28cf"), c = t.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        e.default = c.a;
    },
    d9e9: function(n, e, t) {},
    ded8: function(n, e, t) {
        t.d(e, "b", function() {
            return c;
        }), t.d(e, "c", function() {
            return i;
        }), t.d(e, "a", function() {
            return o;
        });
        var o = {
            uniPopup: function() {
                return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null, "0dae"));
            }
        }, c = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/comeAgain/index-create-component", {
    "components/comeAgain/index-create-component": function(n, e, t) {
        t("543d").createComponent(t("3c27"));
    }
}, [ [ "components/comeAgain/index-create-component" ] ] ]);