(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/aboustLocation" ], {
    "066e": function(t, o, n) {
        (function(t, e) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var a = n("0488"), i = {
                name: "aboustLocation",
                props: {
                    isMustHasLocation: {
                        type: Boolean,
                        default: !0
                    },
                    authAgainText: {
                        type: String,
                        default: "亲，需要您的授权位置\n才能参与该活动～"
                    }
                },
                data: function() {
                    return {
                        showLocTip: !1,
                        showAuthAgain: !1,
                        imgUrl: a.qpImgUrl + "turntable/"
                    };
                },
                methods: {
                    locationFn: function() {
                        var o = this;
                        return new Promise(function(n, a) {
                            if (t.getSetting({
                                success: function(t) {
                                    console.log(t), !0 === t.authSetting["scope.userFuzzyLocation"] && (o.showAuthAgain = !1);
                                }
                            }), !e.getLocation) return getApp().globalData.longitude = "00", getApp().globalData.latitude = "00", 
                            n(0);
                            t.getLocation({
                                success: function(t) {
                                    console.log(t), getApp().globalData.userLocation = t, getApp().globalData.longitude = t.longitude ? t.longitude : "00", 
                                    getApp().globalData.latitude = t.latitude ? t.latitude : "00", n(0);
                                },
                                fail: function(e) {
                                    console.log(e), "getLocation:fail authorize no response" == e.errMsg || "getLocation:fail auth deny" == e.errMsg || "getLocation:fail:auth denied" == e.errMsg ? (o.showAuthAgain = !0, 
                                    n(1)) : -1 != e.errMsg.indexOf("频繁") ? n(0) : -1 != e.errMsg.toLowerCase().indexOf("system permission denied") || -1 != e.errMsg.indexOf("OFF") || -1 != e.errMsg.indexOf("off") ? (o.showLocTip = !0, 
                                    o.showAuthAgain = !1) : (o.showLocTip = !0, o.showAuthAgain = !1, t.showToast({
                                        title: "定位失败",
                                        icon: "error"
                                    }));
                                }
                            });
                        });
                    },
                    clickResult: function(t) {
                        this.showLocTip = !1, this.$emit("location_iknow", t);
                    },
                    _closeAuth: function(o) {
                        this.isMustHasLocation ? t.navigateBack({
                            fail: function(o) {
                                t.switchTab({
                                    url: "/pages/index/index"
                                });
                            }
                        }) : this.$emit("location_colse", o);
                    }
                }
            };
            o.default = i;
        }).call(this, n("543d").default, n("bc2e").default);
    },
    "0db2": function(t, o, n) {},
    3887: function(t, o, n) {
        var e = n("0db2");
        n.n(e).a;
    },
    "77fa": function(t, o, n) {
        n.d(o, "b", function() {
            return e;
        }), n.d(o, "c", function() {
            return a;
        }), n.d(o, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "9aee": function(t, o, n) {
        n.r(o);
        var e = n("77fa"), a = n("dcf2");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(o, t, function() {
                return a[t];
            });
        }(i);
        n("3887");
        var c = n("f0c5"), u = Object(c.a)(a.default, e.b, e.c, !1, null, "a2f0f3c6", null, !1, e.a, void 0);
        o.default = u.exports;
    },
    dcf2: function(t, o, n) {
        n.r(o);
        var e = n("066e"), a = n.n(e);
        for (var i in e) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(o, t, function() {
                return e[t];
            });
        }(i);
        o.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/aboustLocation-create-component", {
    "components/aboustLocation-create-component": function(t, o, n) {
        n("543d").createComponent(n("9aee"));
    }
}, [ [ "components/aboustLocation-create-component" ] ] ]);