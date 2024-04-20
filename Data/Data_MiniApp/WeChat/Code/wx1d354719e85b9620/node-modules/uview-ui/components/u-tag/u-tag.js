(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/uview-ui/components/u-tag/u-tag" ], {
    "2ad6": function(o, t, e) {
        e.r(t);
        var n = e("4ac0"), i = e("b27b");
        for (var l in i) [ "default" ].indexOf(l) < 0 && function(o) {
            e.d(t, o, function() {
                return i[o];
            });
        }(l);
        e("3ebf");
        var r = e("f0c5"), u = Object(r.a)(i.default, n.b, n.c, !1, null, "32a6d858", null, !1, n.a, void 0);
        t.default = u.exports;
    },
    "3ebf": function(o, t, e) {
        var n = e("6525");
        e.n(n).a;
    },
    "4ac0": function(o, t, e) {
        e.d(t, "b", function() {
            return i;
        }), e.d(t, "c", function() {
            return l;
        }), e.d(t, "a", function() {
            return n;
        });
        var n = {
            uIcon: function() {
                return e.e("node-modules/uview-ui/components/u-icon/u-icon").then(e.bind(null, "f86b"));
            }
        }, i = function() {
            var o = this, t = (o.$createElement, o._self._c, o.show ? o.__get_style([ o.customStyle ]) : null), e = o.show && o.closeable ? o.__get_style([ o.iconStyle ]) : null;
            o.$mp.data = Object.assign({}, {
                $root: {
                    s0: t,
                    s1: e
                }
            });
        }, l = [];
    },
    6525: function(o, t, e) {},
    b27b: function(o, t, e) {
        e.r(t);
        var n = e("d8a6"), i = e.n(n);
        for (var l in n) [ "default" ].indexOf(l) < 0 && function(o) {
            e.d(t, o, function() {
                return n[o];
            });
        }(l);
        t.default = i.a;
    },
    d8a6: function(o, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = {
            name: "u-tag",
            props: {
                type: {
                    type: String,
                    default: "primary"
                },
                disabled: {
                    type: [ Boolean, String ],
                    default: !1
                },
                size: {
                    type: String,
                    default: "default"
                },
                shape: {
                    type: String,
                    default: "square"
                },
                text: {
                    type: [ String, Number ],
                    default: ""
                },
                bgColor: {
                    type: String,
                    default: ""
                },
                color: {
                    type: String,
                    default: ""
                },
                borderColor: {
                    type: String,
                    default: ""
                },
                closeColor: {
                    type: String,
                    default: ""
                },
                index: {
                    type: [ Number, String ],
                    default: ""
                },
                mode: {
                    type: String,
                    default: "light"
                },
                closeable: {
                    type: Boolean,
                    default: !1
                },
                show: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {};
            },
            computed: {
                customStyle: function() {
                    var o = {};
                    return this.color && (o.color = this.color), this.bgColor && (o.backgroundColor = this.bgColor), 
                    "plain" == this.mode && this.color && !this.borderColor ? o.borderColor = this.color : o.borderColor = this.borderColor, 
                    o;
                },
                iconStyle: function() {
                    if (this.closeable) {
                        var o = {};
                        return "mini" == this.size ? o.fontSize = "20rpx" : o.fontSize = "22rpx", "plain" == this.mode || "light" == this.mode ? o.color = this.type : "dark" == this.mode && (o.color = "#ffffff"), 
                        this.closeColor && (o.color = this.closeColor), o;
                    }
                },
                closeIconColor: function() {
                    return this.closeColor ? this.closeColor : this.color ? this.color : "dark" == this.mode ? "#ffffff" : this.type;
                }
            },
            methods: {
                clickTag: function() {
                    this.disabled || this.$emit("click", this.index);
                },
                close: function() {
                    this.$emit("close", this.index);
                }
            }
        };
        t.default = n;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/uview-ui/components/u-tag/u-tag-create-component", {
    "node-modules/uview-ui/components/u-tag/u-tag-create-component": function(o, t, e) {
        e("543d").createComponent(e("2ad6"));
    }
}, [ [ "node-modules/uview-ui/components/u-tag/u-tag-create-component" ] ] ]);