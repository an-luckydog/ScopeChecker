(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/peace-button/peace-button" ], {
    "1c5e": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return u;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            uLoading: function() {
                return n.e("node-modules/uview-ui/components/u-loading/u-loading").then(n.bind(null, "1bfa"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    "3f4d": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("9441"));
        var a = {
            name: "peace-button",
            props: {
                type: {
                    type: String,
                    default: "default"
                },
                size: {
                    type: String,
                    default: "large"
                },
                block: {
                    type: Boolean,
                    default: !1
                },
                round: {
                    type: Boolean,
                    default: !0
                },
                square: {
                    type: Boolean,
                    default: !1
                },
                plain: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                loading: {
                    type: Boolean,
                    default: !1
                },
                popup: {
                    type: Boolean,
                    default: !1
                },
                customStyle: {
                    type: String,
                    default: ""
                },
                throttleTime: {
                    type: [ String, Number ],
                    default: 300
                },
                hoverStopPropagation: {
                    type: Boolean,
                    default: !1
                },
                lang: {
                    type: String,
                    default: "en"
                },
                fromType: {
                    type: String,
                    default: ""
                },
                openType: {
                    type: String,
                    default: ""
                },
                appParameter: {
                    type: String,
                    default: ""
                },
                sessionFrom: {
                    type: String,
                    default: ""
                },
                sendMessageTitle: {
                    type: String,
                    default: ""
                },
                sendMessagePath: {
                    type: String,
                    default: ""
                },
                sendMessageImg: {
                    type: String,
                    default: ""
                },
                showMessageCard: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                getClass: function() {
                    var e = [ this.type, this.size, {
                        block: this.block,
                        round: this.round,
                        plain: this.plain,
                        square: this.square,
                        disabled: this.disabled,
                        popup: this.popup,
                        unclickable: this.disabled || this.loading
                    } ];
                    return (0, o.default)("button", e);
                },
                loadingSize: function() {
                    var e = 28;
                    switch (this.size) {
                      case "large":
                      case "medium":
                        e = 36;
                        break;

                      case "small":
                      case "mini":
                      default:
                        e = 28;
                    }
                    return e;
                }
            },
            data: function() {
                return {};
            },
            methods: {
                onClick: function(e) {
                    var t = this;
                    this.$u.throttle(function() {
                        !0 !== t.loading && !0 !== t.disabled && t.$emit("click", e);
                    }, this.throttleTime);
                },
                onGetPhoneNumber: function(e) {
                    this.$emit("getphonenumber", e);
                },
                onGetUserInfo: function(e) {
                    this.$emit("getuserinfo", e);
                },
                onOpenSetting: function(e) {
                    this.$emit("opensetting", e);
                },
                onLaunchApp: function(e) {
                    this.$emit("launchapp", e);
                }
            }
        };
        t.default = a;
    },
    "88d3": function(e, t, n) {
        n.r(t);
        var o = n("3f4d"), a = n.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        t.default = a.a;
    },
    "9ef7": function(e, t, n) {
        n.r(t);
        var o = n("1c5e"), a = n("88d3");
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(u);
        n("d5ad");
        var i = n("f0c5"), l = Object(i.a)(a.default, o.b, o.c, !1, null, "6a420865", null, !1, o.a, void 0);
        t.default = l.exports;
    },
    d5ad: function(e, t, n) {
        var o = n("f35d");
        n.n(o).a;
    },
    f35d: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/peace-button/peace-button-create-component", {
    "components/peace-button/peace-button-create-component": function(e, t, n) {
        n("543d").createComponent(n("9ef7"));
    }
}, [ [ "components/peace-button/peace-button-create-component" ] ] ]);