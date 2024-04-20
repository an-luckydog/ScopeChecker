(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ad-dialog/ad-dialog" ], {
    3472: function(t, a, e) {
        e.r(a);
        var i = e("7127"), o = e.n(i);
        for (var n in i) [ "default" ].indexOf(n) < 0 && function(t) {
            e.d(a, t, function() {
                return i[t];
            });
        }(n);
        a.default = o.a;
    },
    "54ed": function(t, a, e) {
        var i = e("9eed");
        e.n(i).a;
    },
    7127: function(t, a, e) {
        (function(t, i) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var o = {
                components: {
                    UniTransition: function() {
                        e.e("components/ad-dialog/uni-transition").then(function() {
                            return resolve(e("68d6"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    AdDialogItem: function() {
                        e.e("components/ad-dialog/ad-dialog-item").then(function() {
                            return resolve(e("07f2"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                props: {
                    listData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    showDialog: Boolean,
                    showType: {
                        type: String,
                        default: "oneByone"
                    },
                    modeClass: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    duration: {
                        type: Number,
                        default: 300
                    },
                    currentMoney: {
                        type: String,
                        default: "0.00"
                    },
                    showScanLadder: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        curIndex: 1,
                        transition_show: this.showDialog,
                        waitingEnd: !1,
                        title: "",
                        gzhName: ""
                    };
                },
                computed: {
                    listData_dialog: function() {
                        return this.listData.slice().map(function(t, a) {
                            return t.hide = !1, t.key = a + 1, t.className = t.adLoc + "_" + t.key, t;
                        }).reverse();
                    },
                    isShowListData_dialog: function() {
                        return {
                            listData_dialog: this.listData_dialog,
                            showDialog: this.showDialog
                        };
                    }
                },
                methods: {
                    tapDialog: function(a) {
                        console.log("tapDialog", a);
                        var e = a.jumpTyp, o = a.jumpUrl, n = a.picJumpUrl, l = a.appid, c = a.title;
                        if (t.reportAnalytics("click_ad_alert", {
                            title: c,
                            ghname: getApp().globalData.gzhName
                        }), this.title = c, "1" == e) i.navigateTo({
                            url: "/pages/module/webview?target=".concat(o)
                        }); else if ("2" == e) i.navigateTo({
                            url: "/pages/module/imgWrap?target=".concat(o || n)
                        }); else if ("3" == e) i.navigateToMiniProgram({
                            appId: l,
                            path: o
                        }); else {
                            if ("4" != e) return;
                            i.reLaunch({
                                url: o
                            });
                        }
                    },
                    transitionChange: function(t) {
                        var a = t.detail;
                        console.log("========transitionChange========="), console.log(a), a || this.$emit("update:showDialog", !1);
                    },
                    closeCurDialog: function(a) {
                        var e = this;
                        a.hide = !0, t.reportAnalytics("click_close_ad_alert", {
                            title: a.title,
                            ghname: getApp().globalData.gzhName
                        }), this.curIndex = a.key + 1, this.listData_dialog.every(function(t) {
                            return t.hide;
                        }) && (this.transition_show = !1, console.log(this.duration), setTimeout(function() {
                            e.$emit("closeCurDialogCallBack", !1);
                        }, this.duration)), this.$emit("closeCurDialog", a);
                    },
                    setAutoClose: function() {
                        this.listData_dialog;
                    },
                    handleAdPicData: function(t) {
                        try {
                            var a = Object.prototype.toString.call(t).slice(8, -1).toLowerCase(), e = [], i = [], o = [], n = [];
                            if ("array" !== a) return {
                                adPic_1: e,
                                adPic_2: i,
                                adPic_3: o,
                                adPic_4: n
                            };
                            for (var l = 0; l < t.length; l++) {
                                var c = t[l];
                                c.closeTime = 1e3 * c.closeTime || 3e3, c.autoClose = 2 == c.closeType, 1 == c.adLoc ? e.push(c) : 2 == c.adLoc ? i.push(c) : 3 == c.adLoc ? o.push(c) : 4 == c.adLoc && n.push(c);
                            }
                            return {
                                adPic_1: e,
                                adPic_2: i,
                                adPic_3: o,
                                adPic_4: n
                            };
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            return {
                                adPic_1: [],
                                adPic_2: [],
                                adPic_3: [],
                                adPic_4: []
                            };
                        }
                    }
                },
                watch: {
                    isShowListData_dialog: {
                        handler: function(t, a) {
                            var e = this;
                            if (console.log("isShowListData_dialog", t), t.showDialog && t.listData_dialog.length > 0) {
                                this.transition_show = !0, this.title = t.listData_dialog[0].title || "";
                                var i = t.listData_dialog[t.listData_dialog.length - 1].frontDelayed || 0;
                                setTimeout(function() {
                                    e.waitingEnd = !0;
                                }, 1e3 * i);
                            }
                        },
                        deep: !0
                    }
                }
            };
            a.default = o;
        }).call(this, e("bc2e").default, e("543d").default);
    },
    "9eed": function(t, a, e) {},
    b051: function(t, a, e) {
        e.r(a);
        var i = e("f91e"), o = e("3472");
        for (var n in o) [ "default" ].indexOf(n) < 0 && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(n);
        e("54ed");
        var l = e("f0c5"), c = Object(l.a)(o.default, i.b, i.c, !1, null, "08305c76", null, !1, i.a, void 0);
        a.default = c.exports;
    },
    f91e: function(t, a, e) {
        e.d(a, "b", function() {
            return i;
        }), e.d(a, "c", function() {
            return o;
        }), e.d(a, "a", function() {});
        var i = function() {
            this.$createElement;
            var t = (this._self._c, this.listData.length && this.waitingEnd);
            this.$mp.data = Object.assign({}, {
                $root: {
                    g0: t
                }
            });
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ad-dialog/ad-dialog-create-component", {
    "components/ad-dialog/ad-dialog-create-component": function(t, a, e) {
        e("543d").createComponent(e("b051"));
    }
}, [ [ "components/ad-dialog/ad-dialog-create-component" ] ] ]);