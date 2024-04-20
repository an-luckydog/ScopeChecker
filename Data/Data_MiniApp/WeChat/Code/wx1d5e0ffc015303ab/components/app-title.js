(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/app-title" ], {
    "27bb": function(t, e, n) {
        var a = n("5d7f");
        n.n(a).a;
    },
    2834: function(t, e, n) {
        n.r(e);
        var a = n("c5a3"), o = n.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        e.default = o.a;
    },
    "5d7f": function(t, e, n) {},
    be3e: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    c5a3: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n("0488"), o = {
                data: function() {
                    return {
                        backImg: "https://xcxsite.vjifen.com/v/static/changchengjiuhao/icon_back.png",
                        logo: a.qpImgUrl + "index/logo.png"
                    };
                },
                props: {
                    title: {
                        type: String,
                        default: "青岛啤酒"
                    },
                    safeHeight: Number,
                    bgColor: {
                        type: String,
                        default: "none"
                    },
                    color: {
                        type: String,
                        default: "#000"
                    },
                    navStyle: {
                        type: String,
                        default: "white"
                    },
                    textAlign: {
                        type: String,
                        default: "center"
                    },
                    showBack: {
                        type: Boolean,
                        default: !1
                    },
                    showLogo: {
                        type: Boolean,
                        default: !1
                    },
                    showTitle: {
                        type: Boolean,
                        default: !0
                    },
                    backIndex: {
                        type: Boolean,
                        default: !1
                    },
                    backCenter: {
                        type: Boolean,
                        default: !1
                    },
                    iconFont: {
                        type: Boolean,
                        default: !1
                    },
                    txtColor: {
                        type: String,
                        default: "#fff"
                    },
                    iconTxt: {
                        type: String,
                        default: ""
                    }
                },
                mounted: function() {
                    "black" == this.$props.navStyle && (this.backImg = "https://xcxsite.vjifen.com/v/static/changchengjiuhao/icon_back_black.png");
                },
                watch: {
                    navStyle: function(t) {
                        "black" == t && (this.backImg = "https://xcxsite.vjifen.com/v/static/changchengjiuhao/icon_back_black.png");
                    }
                },
                methods: {
                    back: function() {
                        console.log(getCurrentPages()), getCurrentPages().length <= 1 ? t.switchTab({
                            url: "/pages/index/index"
                        }) : t.navigateBack({});
                    },
                    toIndex: function() {
                        t.switchTab({
                            url: "/pages/index/index"
                        });
                    },
                    toCenter: function() {
                        t.switchTab({
                            url: "/pages/center/center"
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    },
    f252: function(t, e, n) {
        n.r(e);
        var a = n("be3e"), o = n("2834");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        n("27bb");
        var i = n("f0c5"), l = Object(i.a)(o.default, a.b, a.c, !1, null, "7569e207", null, !1, a.a, void 0);
        e.default = l.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/app-title-create-component", {
    "components/app-title-create-component": function(t, e, n) {
        n("543d").createComponent(n("f252"));
    }
}, [ [ "components/app-title-create-component" ] ] ]);