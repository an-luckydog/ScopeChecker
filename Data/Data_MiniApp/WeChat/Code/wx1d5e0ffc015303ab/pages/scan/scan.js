(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/scan/scan" ], {
    "5c36": function(e, t, a) {
        (function(e, i) {
            var n = a("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(a("2eee")), r = n(a("c973")), c = (a("4514"), a("8921")), l = a("c703"), s = a("0173"), u = [], p = [], d = {
                data: function() {
                    return {
                        isShowPrivacy: !1,
                        isMustHasLocation: !1,
                        qr: "",
                        MZTLongitude: "",
                        MZTLatitude: "",
                        innerScan: "",
                        notMyCode: !1,
                        mztSkuKey: "",
                        waitActivation: "",
                        welfareStationAssistanceFlag: !1,
                        activationType: "0"
                    };
                },
                components: {
                    aboutLocation: function() {
                        a.e("components/aboustLocation").then(function() {
                            return resolve(a("9aee"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    comeAgainPup: function() {
                        a.e("components/comeAgain/index").then(function() {
                            return resolve(a("3c27"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                onLoad: function(e) {
                    console.log("optionsQ", e), null != e && e.longitude && (this.MZTLongitude = null == e ? void 0 : e.longitude, 
                    this.MZTLatitude = null == e ? void 0 : e.latitude);
                    var t = decodeURIComponent(e.q);
                    this.waitActivationRecordKey = e.recordInfoKey || "", e.maskCode && (t = "HTTPS://Q.LSA0.CN/M/000/".concat(e.maskCode), 
                    this.mztSkuKey = (null == e ? void 0 : e.mztSkuKey) || ""), p = this.parseUrl(t, e.projectFlag), 
                    console.log("onload urlParseResult", p), this.innerScan = e.innerScan ? e.innerScan : "";
                },
                onShow: function() {
                    var t = this;
                    return (0, r.default)(o.default.mark(function a() {
                        var i;
                        return o.default.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (!(1 == t.notMyCode || p.length < 1)) {
                                    a.next = 4;
                                    break;
                                }
                                return a.abrupt("return", e.showModal({
                                    title: "温馨提示",
                                    content: "请使用微信扫一扫",
                                    showCancel: !1,
                                    complete: function(t) {
                                        t.confirm && e.switchTab({
                                            url: "/pages/index/index"
                                        });
                                    }
                                }));

                              case 4:
                                if ("GIFTCARD" != p[1]) {
                                    a.next = 7;
                                    break;
                                }
                                return getApp().globalData.giftCardQrcode = p[2], a.abrupt("return", e.switchTab({
                                    url: "/pages/personal/personal"
                                }));

                              case 7:
                                return a.next = 9, (0, c.getXCXOpenid)();

                              case 9:
                                if (i = a.sent, getApp().globalData.xcxOpenid = i, t.checkPrivacy(), !e.getStorageSync("privacyRuleFlag") || 1 != e.getStorageSync("privacyRuleFlag")) {
                                    a.next = 16;
                                    break;
                                }
                                return a.abrupt("return", t.continueScan());

                              case 16:
                                return a.abrupt("return");

                              case 17:
                              case "end":
                                return a.stop();
                            }
                        }, a);
                    }))();
                },
                onHide: function() {},
                onUnload: function() {
                    u = [], p = [], this.notMyCode = !1;
                },
                methods: {
                    acitvation: function() {
                        var t = this;
                        return (0, r.default)(o.default.mark(function a() {
                            return o.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return e.showLoading({
                                        title: "加载中..."
                                    }), a.abrupt("return", new Promise(function(a, n) {
                                        var o = {
                                            activationType: t.activationType
                                        };
                                        (0, l.activationApi)(o).then(function(n) {
                                            0 == n.result.code && 0 == n.result.businessCode ? (i.showModal({
                                                title: "0" == t.activationType ? "激活成功！" : "注册成功！",
                                                content: "",
                                                showCancel: !1,
                                                confirmText: "确定",
                                                confirmColor: "#3CC51F",
                                                success: function() {
                                                    e.switchTab({
                                                        url: "/pages/index/index"
                                                    });
                                                }
                                            }), a(!0)) : (i.showModal({
                                                title: n.result.msg || ("0" == t.activationType ? "激活失败！" : "注册失败！"),
                                                content: "",
                                                showCancel: !1,
                                                confirmText: "确定",
                                                confirmColor: "#E02020",
                                                success: function() {}
                                            }), a(!1));
                                        }).catch(function() {
                                            i.showModal({
                                                title: "0" == t.activationType ? "激活失败！" : "注册失败！",
                                                content: "",
                                                showCancel: !1,
                                                confirmText: "确定",
                                                confirmColor: "#E02020",
                                                success: function() {}
                                            }), a(!1);
                                        });
                                    }).finally(function() {
                                        e.hideLoading();
                                    }));

                                  case 2:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    },
                    location_colse: function() {
                        e.showLoading({
                            mask: !0
                        }), this.sweepQrcode();
                    },
                    location_iknow: function() {
                        var t = this;
                        e.showModal({
                            title: "温馨提示",
                            content: "开启手机定位有机会获得更大的红包哦！确定不开启手机定位参与本次扫码活动吗？",
                            cancelText: "先开定位",
                            confirmColor: "#808080",
                            confirmText: "直接参与",
                            complete: function(a) {
                                console.log(a), a.confirm ? t.sweepQrcode() : e.switchTab({
                                    url: "/pages/index/index"
                                });
                            }
                        });
                    },
                    continueScan: function() {
                        var e = this;
                        return (0, r.default)(o.default.mark(function t() {
                            var a;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, (0, c.getGHOpenid)();

                                  case 2:
                                    if (a = t.sent, console.log("getApp().globalData.openid", a), a) {
                                        t.next = 6;
                                        break;
                                    }
                                    return t.abrupt("return", !1);

                                  case 6:
                                    return t.next = 8, e.$refs.compslocation.locationFn();

                                  case 8:
                                    if (0 === t.sent) {
                                        t.next = 13;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 13:
                                    console.log("onshow ready sweep", p, getApp().globalData.openid, getApp().globalData.latitude);

                                  case 14:
                                    e.sweepQrcode();

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    unLoadPrivacy: function() {
                        this.isShowPrivacy = !1, this.continueScan();
                    },
                    checkPrivacy: function() {
                        var e = this;
                        this.isShowPrivacy = !1, setTimeout(function() {
                            e.isShowPrivacy = !0;
                        }, 100);
                    },
                    parseUrl: function(e, t) {
                        if (-1 != e.indexOf("VJ1.TV/")) u = e.split("VJ1.TV/")[1].split("/"), this.isMZT(u, t); else if (-1 != e.indexOf("vj1.tv/")) u = e.split("vj1.tv/")[1].split("/"), 
                        this.isMZT(u, t); else if (-1 != e.indexOf("Q.LSA0.CN/M/")) {
                            var a = e.split("Q.LSA0.CN/M/")[1].split("/")[0], i = e.split("Q.LSA0.CN/M/" + a + "/")[1].split(",")[0];
                            getApp().globalData.mztSpecialFlag = a, getApp().globalData.projectScanFlag = "ACMZT", 
                            u = [ a, i ], console.log("urlParseRes"), console.log(u), e.projectFlag && (u[0] = e.projectFlag);
                        } else -1 != e.indexOf("xt.vjifen.com") ? (-1 != e.indexOf("&") ? (u[0] = e.split("c=")[1].split("&")[0], 
                        u[1] = e.split("v=")[1]) : u = e.split("xt.vjifen.com/")[1].split("/"), this.isMZT(u, t)) : u = [];
                        return u;
                    },
                    isMZT: function(e, t) {
                        "W" == e[0] || "ZT" == e[0] ? (getApp().globalData.projectScanFlag = "ZT", e[0] = t || "e") : "e" == e[0] ? getApp().globalData.projectScanFlag = "" : (getApp().globalData.projectScanFlag = "", 
                        this.notMyCode = !0);
                    },
                    sweepQrcode: function() {
                        var t = this;
                        return (0, r.default)(o.default.mark(function a() {
                            var i, n, r, c, l;
                            return o.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return t.qr = p[1], n = t, a.next = 4, (0, s.sweep)({
                                        mztSpecialFlag: getApp().globalData.mztSpecialFlag || "",
                                        projectFlag: getApp().globalData.projectScanFlag || p[0],
                                        longitude: t.MZTLongitude || getApp().globalData.longitude,
                                        latitude: t.MZTLatitude || getApp().globalData.latitude,
                                        sweepstr: p[1],
                                        testField: "saoma",
                                        insideScanFlag: "Y" == t.innerScan ? "1" : "0",
                                        waitActivationRecordKey: t.waitActivationRecordKey || (null === (i = getApp().globalData) || void 0 === i ? void 0 : i.sqwaPrizeKey) || ""
                                    });

                                  case 4:
                                    if (r = a.sent, c = r.result, l = r.reply, e.hideLoading(), 0 != c.code) {
                                        a.next = 26;
                                        break;
                                    }
                                    if (getApp().globalData.sqwaPrizeKey = "", "41" != c.businessCode) {
                                        a.next = 15;
                                        break;
                                    }
                                    return n.$refs.comeAgainPupRef.handleOpenPop(), n.activationType = c.argsMap.isOneYear || 0, 
                                    n.$emit("update:activationType", n.activationType), a.abrupt("return", !1);

                                  case 15:
                                    if (getApp().globalData.sweepReply = l, getApp().globalData.sweepResult = c, getApp().globalData.replyTime = l.replyTime, 
                                    getApp().globalData.haveTel = l.phonenum, n.waitActivation = l.waitActivation || "", 
                                    n.welfareStationAssistanceFlag = l.welfareStationAssistanceFlag || "", 1 != l.redPacketRain || 0 == l.currentMoney && 0 == l.currentVpoints) {
                                        a.next = 23;
                                        break;
                                    }
                                    return a.abrupt("return", e.redirectTo({
                                        url: "/pagesScan/result/hongbaoRain"
                                    }));

                                  case 23:
                                    "9" == l.activityVersion ? t.baipiUi(c.businessCode) : "2" == l.activityVersion ? t.laoshanUi(c, l) : "10" == l.activityVersion ? t.jumpWorldcup(c, l) : "11" == l.activityVersion || "C" == l.activityVersion ? t.jump120TH(c, l) : t.jumpFun(c, l), 
                                    a.next = 27;
                                    break;

                                  case 26:
                                    e.showModal({
                                        title: "扫码接口提示",
                                        content: "系统开了个小差",
                                        showCancel: !1,
                                        complete: function(t) {
                                            t.confirm && e.switchTab({
                                                url: "/pages/index/index"
                                            });
                                        }
                                    });

                                  case 27:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    },
                    baipiUi: function(t) {
                        var a = "", i = "";
                        if (this.waitActivation && (a = "&waitActivation=" + JSON.stringify(this.waitActivation)), 
                        this.welfareStationAssistanceFlag && (i = "&welfareStationAssistanceFlag=" + this.welfareStationAssistanceFlag), 
                        12 == t || 13 == t) e.redirectTo({
                            url: "/pagesScan/resultBaipi/getMsg?bizcode=" + t
                        }); else if (30 == t) {
                            var n, o;
                            e.redirectTo({
                                url: "/pagesScan/webView/webviewHexiao?mztFlag=".concat(null === (n = getApp().globalData.sweepReply) || void 0 === n || null === (o = n.checkPrizeRecord) || void 0 === o ? void 0 : o.mztFlag, "&qrcode=").concat(this.qr)
                            });
                        } else 0 == t && getApp().globalData.sweepReply.ticketInfo ? e.redirectTo({
                            url: "/pagesScan/resultBaipi/index?bizcode=999" + a + i
                        }) : e.redirectTo({
                            url: "/pagesScan/resultBaipi/index?bizcode=" + t + a + i
                        });
                    },
                    laoshanUi: function(t, a) {
                        var i = "", n = "";
                        this.waitActivation && (i = "&waitActivation=" + JSON.stringify(this.waitActivation)), 
                        this.welfareStationAssistanceFlag && (n = "&welfareStationAssistanceFlag=" + this.welfareStationAssistanceFlag);
                        var o = t.businessCode;
                        0 == o ? (a.doublePrize ? getApp().globalData.doublePrize = a.doublePrize : getApp().globalData.doublePrize = !1, 
                        a.ticketInfo ? (getApp().globalData.ticketInfo = a.ticketInfo, e.setStorage({
                            key: "discountCardFlag",
                            data: 1
                        })) : getApp().globalData.ticketInfo = !1, 0 == a.allowanceAStatus && e.setStorage({
                            key: "doubleCardFlag",
                            data: 1
                        }), e.redirectTo({
                            url: "/pagesScan/resultLaoshan/getCash?bizcode=" + o + i + n
                        })) : 7 == o || 21 == o ? -1 != a.grandPrizeType.toUpperCase().indexOf("Z00") ? "重复扫码" == t.msg ? e.redirectTo({
                            url: "/pagesScan/resultLaoshan/getFail?bizcode=" + o
                        }) : (e.setStorage({
                            key: "zxCardFlag",
                            data: 1
                        }), e.redirectTo({
                            url: "/pagesScan/resultLaoshan/getCash?test=1" + i + n
                        })) : e.redirectTo({
                            url: "/pagesScan/resultLaoshan/getCash?bizcode=" + o + i + n
                        }) : 12 == o || 13 == o ? e.redirectTo({
                            url: "/pagesScan/resultLaoshan/getMsg?bizcode=" + o
                        }) : 30 == o ? -1 != a.checkPrizeRecord.grandPrizeType.toUpperCase().indexOf("Z00") ? e.redirectTo({
                            url: "/pagesScan/result/fail/fail?bizcode=2"
                        }) : e.redirectTo({
                            url: "/pagesScan/webView/webviewHexiao?mztFlag=".concat(getApp().globalData.sweepReply.checkPrizeRecord.mztFlag, "&qrcode=").concat(this.qr)
                        }) : 25 == o ? e.showModal({
                            title: "温馨提示",
                            content: "序列号错误，请重新输入",
                            showCancel: !1,
                            complete: function(e) {}
                        }) : -2 == o ? e.showModal({
                            title: "温馨提示",
                            content: "操作频繁请稍后再试~",
                            showCancel: !1,
                            complete: function(t) {
                                t.confirm && e.switchTab({
                                    url: "/pages/index/index"
                                });
                            }
                        }) : e.redirectTo({
                            url: "/pagesScan/resultLaoshan/getFail?bizcode=" + o
                        });
                    },
                    jumpFun: function(t, a) {
                        var i = "", n = "";
                        this.waitActivation && (i = "&waitActivation=" + JSON.stringify(this.waitActivation)), 
                        this.welfareStationAssistanceFlag && (n = "&welfareStationAssistanceFlag=" + this.welfareStationAssistanceFlag);
                        var o = t.businessCode;
                        console.log("businessCode"), console.log(o), 0 == o ? (a.doublePrize ? getApp().globalData.doublePrize = a.doublePrize : getApp().globalData.doublePrize = !1, 
                        a.ticketInfo ? (getApp().globalData.ticketInfo = a.ticketInfo, e.setStorage({
                            key: "discountCardFlag",
                            data: 1
                        })) : getApp().globalData.ticketInfo = !1, 0 == a.allowanceAStatus && e.setStorage({
                            key: "doubleCardFlag",
                            data: 1
                        }), e.redirectTo({
                            url: "/pagesScan/result/getcash/getcash?bizcode=" + o + i + n
                        })) : 7 == o || 21 == o ? a.grandPrizeType && -1 != a.grandPrizeType.toUpperCase().indexOf("Z00") ? "重复扫码" == t.msg ? e.redirectTo({
                            url: "/pagesScan/result/fail/fail?bizcode=" + o
                        }) : (e.setStorage({
                            key: "zxCardFlag",
                            data: 1
                        }), e.redirectTo({
                            url: "/pagesScan/result/getcash/getcash?test=1" + i + n
                        })) : e.redirectTo({
                            url: "/pagesScan/result/prize/prize?bizcode=" + o
                        }) : 12 == o || 13 == o ? e.redirectTo({
                            url: "/pagesScan/result/getMsg/getMsg?bizcode=" + o
                        }) : 30 == o ? -1 != a.checkPrizeRecord.grandPrizeType.toUpperCase().indexOf("Z00") ? e.redirectTo({
                            url: "/pagesScan/result/fail/fail?bizcode=2"
                        }) : e.redirectTo({
                            url: "/pagesScan/webView/webviewHexiao?mztFlag=".concat(getApp().globalData.sweepReply.checkPrizeRecord.mztFlag, "&qrcode=").concat(this.qr)
                        }) : 25 == o ? e.showModal({
                            title: "温馨提示",
                            content: "序列号错误，请重新输入",
                            showCancel: !1,
                            complete: function(e) {}
                        }) : -2 == o ? e.showModal({
                            title: "温馨提示",
                            content: "操作频繁请稍后再试~",
                            showCancel: !1,
                            complete: function(t) {
                                t.confirm && e.switchTab({
                                    url: "/pages/index/index"
                                });
                            }
                        }) : e.redirectTo({
                            url: "/pagesScan/result/fail/fail?bizcode=" + o
                        });
                    },
                    jumpWorldcup: function(t, a) {
                        var i = "", n = "";
                        this.waitActivation && (i = "&waitActivation=" + JSON.stringify(this.waitActivation)), 
                        this.welfareStationAssistanceFlag && (n = "&welfareStationAssistanceFlag=" + this.welfareStationAssistanceFlag);
                        var o = t.businessCode;
                        0 == o && a.vpointsCoupon ? e.redirectTo({
                            url: "/pages_worldcup/result?bizcode=coupon" + i + n
                        }) : 0 == o && !a.ticketInfo || 11 == o || 33 == o ? e.redirectTo({
                            url: "/pages_worldcup/result?bizcode=" + o + i + n
                        }) : 7 == o || 21 == o ? -1 != getApp().globalData.sweepReply.grandPrizeType.toUpperCase().indexOf("Z00") ? "重复扫码" == getApp().globalData.sweepResult.msg ? e.redirectTo({
                            url: "/pages_worldcup/fail?bizcode=2"
                        }) : e.redirectTo({
                            url: "/pages_worldcup/result?bizcode=zxk" + i + n
                        }) : e.redirectTo({
                            url: "/pages_worldcup/result?bizcode=" + o + i + n
                        }) : 12 == o || 13 == o ? e.redirectTo({
                            url: "/pagesScan/result/getMsg/getMsg?bizcode=" + o
                        }) : 30 == o ? e.redirectTo({
                            url: "/pagesScan/webView/webviewHexiao?mztFlag=".concat(a.checkPrizeRecord.mztFlag, "&qrcode=").concat(this.qr)
                        }) : 24 == o || (0 == o && a.ticketInfo ? e.redirectTo({
                            url: "/pages_worldcup/result?bizcode=ticket" + i + n
                        }) : e.redirectTo({
                            url: "/pages_worldcup/fail?bizcode=" + o
                        }));
                    },
                    jump120TH: function(t, a) {
                        var i = "", n = "";
                        this.waitActivation && (i = "&waitActivation=" + JSON.stringify(this.waitActivation)), 
                        this.welfareStationAssistanceFlag && (n = "&welfareStationAssistanceFlag=" + this.welfareStationAssistanceFlag);
                        var o = t.businessCode;
                        0 == o && a.vpointsCoupon ? e.redirectTo({
                            url: "/pagesScan/result120th/result?bizcode=coupon" + i + n
                        }) : 0 == o && !getApp().globalData.sweepReply.ticketInfo || 33 == o ? e.redirectTo({
                            url: "/pagesScan/result120th/result?bizcode=" + o + i + n
                        }) : 7 == o || 21 == o ? -1 != getApp().globalData.sweepReply.grandPrizeType.toUpperCase().indexOf("Z00") ? "重复扫码" == getApp().globalData.sweepResult.msg ? e.redirectTo({
                            url: "/pagesScan/result120th/fail?bizcode=2"
                        }) : e.redirectTo({
                            url: "/pagesScan/result120th/result?bizcode=zxk" + i + n
                        }) : e.redirectTo({
                            url: "/pagesScan/result120th/result?bizcode=" + o + i + n
                        }) : 12 == o || 13 == o ? e.redirectTo({
                            url: "/pagesScan/result/getMsg/getMsg?bizcode=" + o
                        }) : 30 == o ? e.redirectTo({
                            url: "/pagesScan/webView/webviewHexiao?mztFlag=".concat(a.checkPrizeRecord.mztFlag, "&qrcode=").concat(this.qr)
                        }) : 24 == o ? e.redirectTo({
                            url: "/pagesScan/result120th/result?bizcode=" + o + i + n
                        }) : 0 == o && getApp().globalData.sweepReply.ticketInfo ? e.redirectTo({
                            url: "/pagesScan/result120th/result?bizcode=ticket" + i + n
                        }) : e.redirectTo({
                            url: "/pagesScan/result120th/fail?bizcode=" + o
                        });
                    }
                }
            };
            t.default = d;
        }).call(this, a("543d").default, a("bc2e").default);
    },
    "73ae": function(e, t, a) {
        (function(e, t) {
            var i = a("4ea4");
            a("a7b2"), i(a("66fd"));
            var n = i(a("b0df"));
            e.__webpack_require_UNI_MP_PLUGIN__ = a, t(n.default);
        }).call(this, a("bc2e").default, a("543d").createPage);
    },
    b0df: function(e, t, a) {
        a.r(t);
        var i = a("f643"), n = a("ce96");
        for (var o in n) [ "default" ].indexOf(o) < 0 && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        var r = a("f0c5"), c = Object(r.a)(n.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = c.exports;
    },
    ce96: function(e, t, a) {
        a.r(t);
        var i = a("5c36"), n = a.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = n.a;
    },
    f643: function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {
            return i;
        });
        var i = {
            privacy: function() {
                return Promise.all([ a.e("common/vendor"), a.e("components/privacy/privacy") ]).then(a.bind(null, "fc8e"));
            }
        }, n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
}, [ [ "73ae", "common/runtime", "common/vendor" ] ] ]);