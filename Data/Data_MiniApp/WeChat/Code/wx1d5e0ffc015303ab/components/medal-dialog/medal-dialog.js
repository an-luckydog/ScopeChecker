(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/medal-dialog/medal-dialog" ], {
    2917: function(n, e, a) {},
    "3caa": function(n, e, a) {
        a.d(e, "b", function() {
            return t;
        }), a.d(e, "c", function() {
            return l;
        }), a.d(e, "a", function() {
            return o;
        });
        var o = {
            uniPopup: function() {
                return a.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(a.bind(null, "0dae"));
            }
        }, t = function() {
            this.$createElement;
            this._self._c;
        }, l = [];
    },
    "4e60": function(n, e, a) {
        a.r(e);
        var o = a("f986"), t = a.n(o);
        for (var l in o) [ "default" ].indexOf(l) < 0 && function(n) {
            a.d(e, n, function() {
                return o[n];
            });
        }(l);
        e.default = t.a;
    },
    a49e: function(n, e, a) {
        a.r(e);
        var o = a("3caa"), t = a("4e60");
        for (var l in t) [ "default" ].indexOf(l) < 0 && function(n) {
            a.d(e, n, function() {
                return t[n];
            });
        }(l);
        a("c561");
        var i = a("f0c5"), u = Object(i.a)(t.default, o.b, o.c, !1, null, "85593ff6", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    c561: function(n, e, a) {
        var o = a("2917");
        a.n(o).a;
    },
    f986: function(n, e, a) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = a("0488"), t = {
                props: {
                    medalFlag: {
                        type: [ Number, String ],
                        default: ""
                    }
                },
                data: function() {
                    return {
                        img120Th: o.config.img120Th,
                        medalList: [ {
                            medalFlag: 1,
                            img: "Islander/island/medal01.png"
                        }, {
                            medalFlag: 2,
                            img: "four-120th/xunzhang/6_03.png"
                        }, {
                            medalFlag: 3,
                            img: "four-120th/xunzhang/4_03.png"
                        }, {
                            medalFlag: 4,
                            img: "four-120th/xunzhang/3_03.png"
                        }, {
                            medalFlag: 5,
                            img: "four-120th/xunzhang/2_03.png"
                        }, {
                            medalFlag: 6,
                            img: "four-120th/xunzhang/1_03.png"
                        } ]
                    };
                },
                computed: {
                    imgUrl: function() {
                        var n = this, e = this.medalList.filter(function(e) {
                            return e.medalFlag == n.medalFlag;
                        });
                        return e.length ? this.img120Th + e[0].img : "";
                    }
                },
                onLoad: function(n) {},
                methods: {
                    handleOpenPop: function() {
                        this.$refs.media_popup.open("center");
                    },
                    closePop: function() {
                        this.$refs.media_popup.close();
                    },
                    goWall: function() {
                        n.navigateTo({
                            url: "/pages_120th/Islander/medalWall"
                        }), this.closePop();
                    }
                }
            };
            e.default = t;
        }).call(this, a("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/medal-dialog/medal-dialog-create-component", {
    "components/medal-dialog/medal-dialog-create-component": function(n, e, a) {
        a("543d").createComponent(a("a49e"));
    }
}, [ [ "components/medal-dialog/medal-dialog-create-component" ] ] ]);