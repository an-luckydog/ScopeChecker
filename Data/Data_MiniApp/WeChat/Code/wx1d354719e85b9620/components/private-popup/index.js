(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/private-popup/index" ], {
    "2b94": function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return u;
        }), t.d(e, "a", function() {
            return o;
        });
        var o = {
            uPopup: function() {
                return t.e("node-modules/uview-ui/components/u-popup/u-popup").then(t.bind(null, "df25"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    "6a4e": function(n, e, t) {
        t.r(e);
        var o = t("b592"), a = t.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = a.a;
    },
    "7b5a6": function(n, e, t) {},
    "8a52": function(n, e, t) {
        var o = t("7b5a6");
        t.n(o).a;
    },
    a916: function(n, e, t) {
        t.r(e);
        var o = t("2b94"), a = t("6a4e");
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        t("8a52");
        var i = t("f0c5"), c = Object(i.a)(a.default, o.b, o.c, !1, null, "4b3a6ad6", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    b592: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            model: {
                props: "value",
                event: "input"
            },
            data: function() {
                return {
                    show: !1
                };
            },
            props: {
                urlTitle: {
                    type: String,
                    default: "《用户隐私保护提示》"
                },
                value: {
                    type: Boolean,
                    default: !0
                }
            },
            watch: {
                value: {
                    handler: function(n) {
                        this.show = n;
                    },
                    immediate: !0
                }
            },
            created: function() {},
            destroyed: function() {},
            methods: {
                openPrivacyContract: function() {
                    wx.openPrivacyContract && wx.openPrivacyContract({
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                },
                handleAgree: function() {
                    this.$emit("agreed", !0), this.close(!0);
                },
                handleDisagree: function() {
                    this.$emit("agreed", !1), this.close();
                },
                close: function() {
                    this.$emit("input", !1);
                }
            }
        };
        e.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/private-popup/index-create-component", {
    "components/private-popup/index-create-component": function(n, e, t) {
        t("543d").createComponent(t("a916"));
    }
}, [ [ "components/private-popup/index-create-component" ] ] ]);