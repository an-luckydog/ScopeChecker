(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/uview-ui/components/u-row-notice/u-row-notice" ], {
    "138e": function(t, e, n) {
        n.r(e);
        var o = n("dfd5"), i = n("dfc3");
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(u);
        n("21ed");
        var a = n("f0c5"), c = Object(a.a)(i.default, o.b, o.c, !1, null, "57ce253c", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "21ed": function(t, e, n) {
        var o = n("63af");
        n.n(o).a;
    },
    "63af": function(t, e, n) {},
    acd3: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: {
                    list: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    type: {
                        type: String,
                        default: "warning"
                    },
                    volumeIcon: {
                        type: Boolean,
                        default: !0
                    },
                    moreIcon: {
                        type: Boolean,
                        default: !1
                    },
                    closeIcon: {
                        type: Boolean,
                        default: !1
                    },
                    autoplay: {
                        type: Boolean,
                        default: !0
                    },
                    color: {
                        type: String,
                        default: ""
                    },
                    bgColor: {
                        type: String,
                        default: ""
                    },
                    show: {
                        type: Boolean,
                        default: !0
                    },
                    fontSize: {
                        type: [ Number, String ],
                        default: 26
                    },
                    volumeSize: {
                        type: [ Number, String ],
                        default: 34
                    },
                    speed: {
                        type: [ Number, String ],
                        default: 160
                    },
                    playState: {
                        type: String,
                        default: "play"
                    },
                    padding: {
                        type: [ Number, String ],
                        default: "18rpx 24rpx"
                    }
                },
                data: function() {
                    return {
                        textWidth: 0,
                        boxWidth: 0,
                        animationDuration: "10s",
                        animationPlayState: "paused",
                        showText: ""
                    };
                },
                watch: {
                    list: {
                        immediate: !0,
                        handler: function(t) {
                            var e = this;
                            this.showText = t.join("，"), this.$nextTick(function() {
                                e.initSize();
                            });
                        }
                    },
                    playState: function(t) {
                        this.animationPlayState = "play" == t ? "running" : "paused";
                    },
                    speed: function(t) {
                        this.initSize();
                    }
                },
                computed: {
                    computeColor: function() {
                        return this.color ? this.color : "none" == this.type ? "#606266" : this.type;
                    },
                    textStyle: function() {
                        var t = {};
                        return this.color ? t.color = this.color : "none" == this.type && (t.color = "#606266"), 
                        t.fontSize = this.fontSize + "rpx", t;
                    },
                    computeBgColor: function() {
                        return this.bgColor ? this.bgColor : "none" == this.type ? "transparent" : void 0;
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.initSize();
                    });
                },
                methods: {
                    initSize: function() {
                        var e = this, n = [], o = new Promise(function(n, o) {
                            t.createSelectorQuery().in(e).select("#u-notice-content").boundingClientRect().exec(function(t) {
                                e.textWidth = t[0].width, n();
                            });
                        });
                        n.push(o), Promise.all(n).then(function() {
                            e.animationDuration = "".concat(e.textWidth / t.upx2px(e.speed), "s"), e.animationPlayState = "paused", 
                            setTimeout(function() {
                                "play" == e.playState && e.autoplay && (e.animationPlayState = "running");
                            }, 10);
                        });
                    },
                    click: function(t) {
                        this.$emit("click");
                    },
                    close: function() {
                        this.$emit("close");
                    },
                    getMore: function() {
                        this.$emit("getMore");
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    dfc3: function(t, e, n) {
        n.r(e);
        var o = n("acd3"), i = n.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = i.a;
    },
    dfd5: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {
            return o;
        });
        var o = {
            uIcon: function() {
                return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null, "f86b"));
            }
        }, i = function() {
            var t = this, e = (t.$createElement, t._self._c, t.show ? t.__get_style([ t.textStyle ]) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: e
                }
            });
        }, u = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/uview-ui/components/u-row-notice/u-row-notice-create-component", {
    "node-modules/uview-ui/components/u-row-notice/u-row-notice-create-component": function(t, e, n) {
        n("543d").createComponent(n("138e"));
    }
}, [ [ "node-modules/uview-ui/components/u-row-notice/u-row-notice-create-component" ] ] ]);