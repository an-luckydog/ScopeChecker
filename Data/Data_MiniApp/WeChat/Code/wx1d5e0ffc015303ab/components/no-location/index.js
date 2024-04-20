(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/no-location/index" ], {
    "0b67": function(n, o, t) {
        var e = t("9e73");
        t.n(e).a;
    },
    "9c98": function(n, o, t) {
        (function(n) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var t = {
                props: {
                    noLocation: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        staticUrl: "https://xcxsite.vjifen.com/v/scan3.0/"
                    };
                },
                methods: {
                    closeTip: function() {
                        var o = this;
                        n.showModal({
                            title: "温馨提示",
                            content: "开启手机定位有机会获得更大的红包哦！确定不开启手机定位参与本次活动吗？",
                            cancelText: "先开定位",
                            confirmColor: "#808080",
                            confirmText: "直接参与",
                            complete: function(n) {
                                console.log(n), n.confirm, o.$emit("close", {});
                            }
                        });
                    }
                }
            };
            o.default = t;
        }).call(this, t("543d").default);
    },
    "9e73": function(n, o, t) {},
    b101: function(n, o, t) {
        t.d(o, "b", function() {
            return e;
        }), t.d(o, "c", function() {
            return c;
        }), t.d(o, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    b54c: function(n, o, t) {
        t.r(o);
        var e = t("b101"), c = t("b857");
        for (var a in c) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(o, n, function() {
                return c[n];
            });
        }(a);
        t("0b67");
        var i = t("f0c5"), l = Object(i.a)(c.default, e.b, e.c, !1, null, "02dc55ee", null, !1, e.a, void 0);
        o.default = l.exports;
    },
    b857: function(n, o, t) {
        t.r(o);
        var e = t("9c98"), c = t.n(e);
        for (var a in e) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(o, n, function() {
                return e[n];
            });
        }(a);
        o.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/no-location/index-create-component", {
    "components/no-location/index-create-component": function(n, o, t) {
        t("543d").createComponent(t("b54c"));
    }
}, [ [ "components/no-location/index-create-component" ] ] ]);