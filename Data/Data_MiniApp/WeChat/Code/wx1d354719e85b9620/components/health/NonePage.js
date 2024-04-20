(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/health/NonePage" ], {
    "0636": function(n, e, t) {
        var o = t("6ffb");
        t.n(o).a;
    },
    "62ee": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "none-page",
            props: {
                text: {
                    type: String,
                    default: function() {
                        return "暂无数据";
                    }
                },
                src: {
                    type: String,
                    default: function() {
                        return "common/none/ic_no_consultation.png";
                    }
                }
            },
            computed: {
                imgSrc: function() {
                    return this.imgUrl + this.src;
                }
            },
            data: function() {
                return {
                    imgUrl: this.$store.state.env.VUE_APP_RESOURCE_URL
                };
            }
        };
        e.default = o;
    },
    "6ffb": function(n, e, t) {},
    "79ce": function(n, e, t) {
        t.r(e);
        var o = t("62ee"), c = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = c.a;
    },
    e07d: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    e7c4: function(n, e, t) {
        t.r(e);
        var o = t("e07d"), c = t("79ce");
        for (var a in c) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(a);
        t("0636");
        var r = t("f0c5"), u = Object(r.a)(c.default, o.b, o.c, !1, null, "33aeccf4", null, !1, o.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/health/NonePage-create-component", {
    "components/health/NonePage-create-component": function(n, e, t) {
        t("543d").createComponent(t("e7c4"));
    }
}, [ [ "components/health/NonePage-create-component" ] ] ]);