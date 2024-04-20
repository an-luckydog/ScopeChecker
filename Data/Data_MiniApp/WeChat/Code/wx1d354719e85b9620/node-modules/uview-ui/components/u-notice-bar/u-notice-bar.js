(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/uview-ui/components/u-notice-bar/u-notice-bar" ], {
    "1e9f": function(e, t, n) {
        n.d(t, "b", function() {
            return u;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            uRowNotice: function() {
                return n.e("node-modules/uview-ui/components/u-row-notice/u-row-notice").then(n.bind(null, "138e"));
            },
            uColumnNotice: function() {
                return n.e("node-modules/uview-ui/components/u-column-notice/u-column-notice").then(n.bind(null, "841c"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "2e9d": function(e, t, n) {},
    4200: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "u-notice-bar",
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
                volumeSize: {
                    type: [ Number, String ],
                    default: 34
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
                mode: {
                    type: String,
                    default: "horizontal"
                },
                show: {
                    type: Boolean,
                    default: !0
                },
                fontSize: {
                    type: [ Number, String ],
                    default: 28
                },
                duration: {
                    type: [ Number, String ],
                    default: 2e3
                },
                speed: {
                    type: [ Number, String ],
                    default: 160
                },
                isCircular: {
                    type: Boolean,
                    default: !0
                },
                playState: {
                    type: String,
                    default: "play"
                },
                disableTouch: {
                    type: Boolean,
                    default: !0
                },
                borderRadius: {
                    type: [ Number, String ],
                    default: 0
                },
                padding: {
                    type: [ Number, String ],
                    default: "18rpx 24rpx"
                },
                noListHidden: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: {
                isShow: function() {
                    return 0 != this.show && (1 != this.noListHidden || 0 != this.list.length);
                }
            },
            methods: {
                click: function(e) {
                    this.$emit("click", e);
                },
                close: function() {
                    this.$emit("close");
                },
                getMore: function() {
                    this.$emit("getMore");
                },
                end: function() {
                    this.$emit("end");
                }
            }
        };
        t.default = o;
    },
    a3c9: function(e, t, n) {
        n.r(t);
        var o = n("4200"), u = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = u.a;
    },
    d19c: function(e, t, n) {
        var o = n("2e9d");
        n.n(o).a;
    },
    f081: function(e, t, n) {
        n.r(t);
        var o = n("1e9f"), u = n("a3c9");
        for (var i in u) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(i);
        n("d19c");
        var a = n("f0c5"), c = Object(a.a)(u.default, o.b, o.c, !1, null, "92eb2222", null, !1, o.a, void 0);
        t.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component", {
    "node-modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component": function(e, t, n) {
        n("543d").createComponent(n("f081"));
    }
}, [ [ "node-modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component" ] ] ]);