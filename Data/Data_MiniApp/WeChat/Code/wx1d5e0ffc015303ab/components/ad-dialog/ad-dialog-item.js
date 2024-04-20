(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ad-dialog/ad-dialog-item" ], {
    "07f2": function(t, o, e) {
        e.r(o);
        var i = e("9fab"), n = e("25f7");
        for (var a in n) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(o, t, function() {
                return n[t];
            });
        }(a);
        e("a35b");
        var u = e("f0c5"), c = Object(u.a)(n.default, i.b, i.c, !1, null, "5646602c", null, !1, i.a, void 0);
        o.default = c.exports;
    },
    "25f7": function(t, o, e) {
        e.r(o);
        var i = e("6755"), n = e.n(i);
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(o, t, function() {
                return i[t];
            });
        }(a);
        o.default = n.a;
    },
    6755: function(t, o, e) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var i = {
            data: function() {
                return {
                    timeout: 3,
                    isAutoClose: !1,
                    timer: "",
                    isImgLoad: !1,
                    isBigScreen: getApp().globalData.isBigScreen
                };
            },
            props: {
                itemData: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                currentMoney: {
                    type: String,
                    default: "0.00"
                },
                showScanLadder: {
                    type: Boolean,
                    default: !1
                },
                initTimeout: Boolean
            },
            methods: {
                imgLoad: function(t) {
                    t.detail && (this.isImgLoad = !0);
                },
                tapDialog: function() {
                    this.$emit("tapDialog");
                },
                closeCurDialog: function() {
                    var t = this;
                    setTimeout(function() {
                        t.$emit("closeCurDialog");
                    }, 50), console.log("--------closeCurDialog-----------", +new Date()), console.log(this.itemData.picUrl);
                },
                setAutoClose: function() {
                    var t = this, o = this.itemData, e = o.closeTime, i = void 0 === e ? 3e3 : e, n = o.autoClose, a = void 0 !== n && n;
                    this.timeout = i / 1e3, this.isAutoClose = a, console.log(this.timeout, this.isAutoClose), 
                    a && (this.timer = setTimeout(function() {
                        t.closeCurDialog();
                    }, i), this.timeotf());
                },
                timeotf: function() {
                    var t = this;
                    if (this.timeout < 1) return !1;
                    setTimeout(function() {
                        t.timeout--, t.timeotf();
                    }, 1e3);
                }
            },
            created: function() {
                this.initTimeout && this.setAutoClose();
            },
            watch: {
                initTimeout: function(t, o) {
                    t !== o && t && this.setAutoClose();
                }
            }
        };
        o.default = i;
    },
    "7e96": function(t, o, e) {},
    "9fab": function(t, o, e) {
        e.d(o, "b", function() {
            return i;
        }), e.d(o, "c", function() {
            return n;
        }), e.d(o, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    a35b: function(t, o, e) {
        var i = e("7e96");
        e.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ad-dialog/ad-dialog-item-create-component", {
    "components/ad-dialog/ad-dialog-item-create-component": function(t, o, e) {
        e("543d").createComponent(e("07f2"));
    }
}, [ [ "components/ad-dialog/ad-dialog-item-create-component" ] ] ]);