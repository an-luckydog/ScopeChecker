(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/privacy/privacy" ], {
    "0713": function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(n) {
                e.ischecked = !e.ischecked;
            });
        }, a = [];
    },
    "0c5d": function(e, n, t) {
        t.r(n);
        var o = t("f104"), a = t.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(i);
        n.default = a.a;
    },
    b0bc: function(e, n, t) {},
    d220: function(e, n, t) {
        var o = t("b0bc");
        t.n(o).a;
    },
    f104: function(e, n, t) {
        (function(e, o) {
            var a = t("4ea4");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = a(t("2eee")), c = a(t("c973")), r = t("0488"), s = t("cd4a"), u = t("c703"), l = {
                name: "privacy",
                props: {
                    from: {
                        type: String,
                        default: ""
                    }
                },
                components: {
                    comeAgainPup: function() {
                        t.e("components/comeAgain/index").then(function() {
                            return resolve(t("3c27"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                onShow: function() {
                    console.log("onShow----");
                },
                mounted: function() {
                    var e = this;
                    console.log("mounted-----------"), getApp().watch(this.handleGlob, "isNewPrivacySetting"), 
                    (0, s.handleWxYS)().then(function(n) {
                        e.handleOpenPop();
                    });
                },
                data: function() {
                    return {
                        scanImgUrl: r.scanImgUrl,
                        isRefuse: !1,
                        showContent: !0,
                        showPrivacy: !1,
                        ischecked: !1,
                        isNewPrivacySetting: "",
                        activationType: "0"
                    };
                },
                methods: {
                    openComeAgain: function() {
                        var e = this;
                        return new Promise(function(n, t) {
                            (0, u.queryUserStatus)().then(function(t) {
                                0 == t.result.code && t.result.argsMap.isRegister && "1" == t.result.argsMap.isRegister ? (e.$refs.comeAgainPupRef.handleOpenPop(), 
                                e.activationType = t.result.argsMap.isOneYear || 0, e.$emit("update:activationType", e.activationType), 
                                n(!0)) : n(!1);
                            }).catch(function() {
                                n(!1);
                            });
                        });
                    },
                    acitvation: function() {
                        var n = this;
                        return (0, c.default)(i.default.mark(function t() {
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e.showLoading({
                                        title: "加载中..."
                                    }), t.abrupt("return", new Promise(function(t, a) {
                                        var i = {
                                            activationType: n.activationType
                                        };
                                        (0, u.activationApi)(i).then(function(a) {
                                            0 == a.result.code && 0 == a.result.businessCode ? (o.showModal({
                                                title: "0" == n.activationType ? "激活成功！" : "注册成功！",
                                                content: "",
                                                showCancel: !1,
                                                confirmText: "确定",
                                                confirmColor: "#3CC51F",
                                                success: function() {
                                                    n.$refs.comeAgainPupRef.handleClose(), e.setStorage({
                                                        key: "privacyRuleFlag",
                                                        data: 1
                                                    }), setTimeout(function() {
                                                        n.$emit("unLoadPrivacy", !1);
                                                    }, 2e3);
                                                }
                                            }), t(!0)) : (o.showModal({
                                                title: a.result.msg || ("0" == n.activationType ? "激活失败！" : "注册失败！"),
                                                content: "",
                                                showCancel: !1,
                                                confirmText: "确定",
                                                confirmColor: "#E02020",
                                                success: function() {}
                                            }), t(!1));
                                        }).catch(function() {
                                            o.showModal({
                                                title: "0" == n.activationType ? "激活失败！" : "注册失败！",
                                                content: "",
                                                showCancel: !1,
                                                confirmText: "确定",
                                                confirmColor: "#E02020",
                                                success: function() {}
                                            }), t(!1);
                                        });
                                    }).finally(function() {
                                        e.hideLoading();
                                    }));

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    handleGlob: function(e) {
                        this.isNewPrivacySetting = e;
                    },
                    handleOpenPop: function() {
                        this.showPrivacy = 1 != e.getStorageSync("privacyRuleFlag"), "scan" != this.from && (this.showPrivacy || this.openComeAgain());
                    },
                    toPrivacy: function(n) {
                        e.navigateTo({
                            url: "/pagesScan/webView/webViewPrivacy?type=privacy"
                        });
                    },
                    refuse: function() {
                        var e;
                        o.reportEvent("ty_yinsishouquan_butongyi", {
                            ghzname2: (null === (e = getApp().globalData.curProvince) || void 0 === e ? void 0 : e.province) || "青岛啤酒"
                        }), this.isRefuse = !0;
                    },
                    again: function() {
                        var e, n = this;
                        o.reportEvent("ty_yinsishouquan_butongyi", {
                            ghzname2: (null === (e = getApp().globalData.curProvince) || void 0 === e ? void 0 : e.province) || "青岛啤酒"
                        }), this.isRefuse = !1, this.showContent = !1, setTimeout(function() {
                            n.showContent = !0;
                        }, 200);
                    },
                    confirm: function(n) {
                        var t = this;
                        return (0, c.default)(i.default.mark(function n() {
                            var a, c;
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (o.reportEvent("ty_yinsishouquan_tongyi", {
                                        gzhname: (null === (a = getApp().globalData.curProvince) || void 0 === a ? void 0 : a.province) || "青岛啤酒"
                                    }), "scan" != t.from) {
                                        n.next = 5;
                                        break;
                                    }
                                    t.ischecked ? (e.setStorage({
                                        key: "privacyRuleFlag",
                                        data: 1
                                    }), t.showPrivacy = !1, t.$emit("unLoadPrivacy", !1)) : e.showToast({
                                        icon: "none",
                                        title: "请先勾选并同意协议"
                                    }), n.next = 19;
                                    break;

                                  case 5:
                                    if (!t.ischecked) {
                                        n.next = 18;
                                        break;
                                    }
                                    return t.showPrivacy = !1, c = !1, n.next = 10, t.openComeAgain();

                                  case 10:
                                    if (n.t0 = n.sent, n.t0) {
                                        n.next = 13;
                                        break;
                                    }
                                    n.t0 = !1;

                                  case 13:
                                    c = n.t0, console.log("数据userStatus", c), c || (e.setStorage({
                                        key: "privacyRuleFlag",
                                        data: 1
                                    }), t.$emit("unLoadPrivacy", !1)), n.next = 19;
                                    break;

                                  case 18:
                                    e.showToast({
                                        icon: "none",
                                        title: "请先勾选并同意协议"
                                    });

                                  case 19:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            n.default = l;
        }).call(this, t("543d").default, t("bc2e").default);
    },
    fc8e: function(e, n, t) {
        t.r(n);
        var o = t("0713"), a = t("0c5d");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        t("d220");
        var c = t("f0c5"), r = Object(c.a)(a.default, o.b, o.c, !1, null, "d39e49cc", null, !1, o.a, void 0);
        n.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/privacy/privacy-create-component", {
    "components/privacy/privacy-create-component": function(e, n, t) {
        t("543d").createComponent(t("fc8e"));
    }
}, [ [ "components/privacy/privacy-create-component" ] ] ]);