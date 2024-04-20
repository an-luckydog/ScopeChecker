(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/waitActivation-pup/waitActivation-pup" ], {
    "79fa": function(e, n, t) {},
    "7c95": function(e, n, t) {
        t.r(n);
        var o = t("e467"), i = t("96018");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(a);
        t("ed06");
        var c = t("f0c5"), u = Object(c.a)(i.default, o.b, o.c, !1, null, "34614732", null, !1, o.a, void 0);
        n.default = u.exports;
    },
    8301: function(e, n, t) {
        (function(e) {
            var o = t("4ea4");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = t("0488"), a = o(t("eadc")), c = (t("9b31"), {
                props: {
                    prizeInfo: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    WelfareReplyTime: {
                        type: Number,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        img120Th: i.config.img120Th,
                        goodsImgRoot: i.config.goodsImgRoot,
                        exitMsgTmplId: "16AIbttY_u-uB2qzWQCf8JrES8yvTtVZDR-tcA66qPU",
                        sysDate: ""
                    };
                },
                methods: {
                    handleClose: function() {
                        this.$refs.waitActivation_pup.close();
                    },
                    handleOpenPop: function() {
                        this.$refs.waitActivation_pup.open("center");
                    },
                    openRules: function() {
                        e.navigateTo({
                            url: "/pages_120th/redpack/redrules"
                        });
                    },
                    openPackage: function() {
                        var n = this;
                        e.scanCode({
                            complete: function(t) {
                                -1 != t.errMsg.indexOf("ok") && (getApp().globalData.qrcode = encodeURIComponent(t.result), 
                                e.navigateTo({
                                    url: "/pages/scan/scan?q=" + encodeURIComponent(t.result) + "&recordInfoKey=" + n.prizeInfo.recordInfoKey + "&innerScan=Y"
                                }));
                            }
                        });
                    },
                    handleNotice: function(n) {
                        var t = e.getStorageSync("indexRedNotice") || "";
                        this.sysDate = a.default.initDate(this.WelfareReplyTime) || "", t && t == this.sysDate ? this.handleOpenInit(n) : this.handleRequestSubscribeMessage(n);
                    },
                    handleOpenInit: function(e) {
                        "1" == e ? this.openPackage() : this.handleClose();
                    },
                    handleRequestSubscribeMessage: function(n) {
                        var t = this;
                        e.requestSubscribeMessage({
                            tmplIds: [ t.exitMsgTmplId ],
                            success: function(e) {
                                console.log(e, "-----", e[t.exitMsgTmplId]), e[t.exitMsgTmplId] && "accept" == e[t.exitMsgTmplId] ? t.handleSubScribe(n) : t.handleOpenInit(n);
                            },
                            fail: function(e) {
                                console.log("------"), console.log(e);
                            }
                        });
                    },
                    handleSubScribe: function(n) {
                        e.setStorageSync("indexRedNotice", this.sysDate), this.handleOpenInit(n);
                    }
                }
            });
            n.default = c;
        }).call(this, t("543d").default);
    },
    96018: function(e, n, t) {
        t.r(n);
        var o = t("8301"), i = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = i.a;
    },
    e467: function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {
            return o;
        });
        var o = {
            uniPopup: function() {
                return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null, "0dae"));
            }
        }, i = function() {
            this.$createElement;
            var e = (this._self._c, this._f("stripTrailingZeros")(this.prizeInfo.money || ""));
            this.$mp.data = Object.assign({}, {
                $root: {
                    f0: e
                }
            });
        }, a = [];
    },
    ed06: function(e, n, t) {
        var o = t("79fa");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/waitActivation-pup/waitActivation-pup-create-component", {
    "components/waitActivation-pup/waitActivation-pup-create-component": function(e, n, t) {
        t("543d").createComponent(t("7c95"));
    }
}, [ [ "components/waitActivation-pup/waitActivation-pup-create-component" ] ] ]);