(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/progress-bar/progress-bar" ], {
    "0e2e": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            data: function() {
                return {
                    backImg: "https://xcxsite.vjifen.com/v/static/changchengjiuhao/icon_back.png",
                    posLeft: "-100",
                    isShowCurNum: !1
                };
            },
            props: {
                minNum: {
                    type: Number,
                    default: 30
                },
                maxNum: {
                    type: Number,
                    default: 50
                },
                curNum: {
                    type: Number,
                    default: 10
                },
                color: {
                    type: String,
                    default: "#036D34"
                }
            },
            watch: {
                curNum: function() {
                    var t = this;
                    console.log("当前瓶数 放生变化"), this.setPosLeft(), -100 == this.posLeft ? this.isShowCurNum = !1 : this.posLeft < -70 ? (this.isShowCurNum = !1, 
                    setTimeout(function() {
                        t.isShowCurNum = !0;
                    }, 600)) : this.isShowCurNum = !0;
                }
            },
            methods: {
                setPosLeft: function() {
                    var t = this, e = Math.round(100 * (1 - ((this.curNum - this.minNum) / (this.maxNum - this.minNum)).toFixed(2)));
                    setTimeout(function() {
                        t.posLeft = "-" + e;
                    }, 500);
                }
            }
        };
        e.default = o;
    },
    "14f0": function(t, e, n) {},
    "525b": function(t, e, n) {
        n.r(e);
        var o = n("0e2e"), r = n.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = r.a;
    },
    "5f83": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "8a3c": function(t, e, n) {
        n.r(e);
        var o = n("5f83"), r = n("525b");
        for (var u in r) [ "default" ].indexOf(u) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n("af2f");
        var s = n("f0c5"), a = Object(s.a)(r.default, o.b, o.c, !1, null, "293873f0", null, !1, o.a, void 0);
        e.default = a.exports;
    },
    af2f: function(t, e, n) {
        var o = n("14f0");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/progress-bar/progress-bar-create-component", {
    "components/progress-bar/progress-bar-create-component": function(t, e, n) {
        n("543d").createComponent(n("8a3c"));
    }
}, [ [ "components/progress-bar/progress-bar-create-component" ] ] ]);