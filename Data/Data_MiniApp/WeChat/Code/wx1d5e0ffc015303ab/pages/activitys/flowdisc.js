require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activitys/flowdisc" ], {
    "0791": function(e, t, n) {
        (function(e, t) {
            var i = n("4ea4");
            n("a7b2"), i(n("66fd"));
            var a = i(n("cc15"));
            e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default);
        }).call(this, n("bc2e").default, n("543d").createPage);
    },
    "081e": function(e, t, n) {},
    "252a": function(e, t, n) {
        n.r(t);
        var i = n("9fff"), a = n.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = a.a;
    },
    "4b76": function(e, t, n) {},
    5179: function(e, t, n) {
        var i = n("4b76");
        n.n(i).a;
    },
    "5bec": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return i;
        });
        var i = {
            privacy: function() {
                return Promise.all([ n.e("common/vendor"), n.e("components/privacy/privacy") ]).then(n.bind(null, "fc8e"));
            }
        }, a = function() {
            var e = this, t = (e.$createElement, e._self._c, e.list.length), n = [ "0", "1" ].includes(e.prizeBasicInfo.turntablePrizeType), i = e.noNumPop2 || "6" == e.prizeBasicInfo.turntablePrizeType || "0" == e.prizeBasicInfo.turntablePrizeType || "1" != e.prizeBasicInfo.turntablePrizeType ? null : e._f("toThousands")(e.prizeBasicInfo.vpoints);
            e._isMounted || (e.e0 = function(t) {
                e.isActivation = !1;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    g1: n,
                    f0: i
                }
            });
        }, r = [];
    },
    "9fff": function(e, t, n) {
        (function(e) {
            var i = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(n("2eee")), r = i(n("9523")), o = i(n("c973")), l = n("0488"), s = n("9b31"), u = n("8921");
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, i);
                }
                return n;
            }
            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        (0, r.default)(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            var p = e.createCanvasContext("myCanvas"), d = null, g = 0, h = 0, y = [], b = {
                data: function() {
                    return {
                        isShowPrivacy: !1,
                        discImg: "",
                        isSmallScreen: !getApp().globalData.isLongScreen || "",
                        safeTop: getApp().globalData.safeAreaTop,
                        imgUrl: l.flowDiscImgs,
                        goodsImgRoot: l.config.goodsImgRoot,
                        discloadend: !1,
                        list: "",
                        isHasData: !1,
                        prizeBasicInfo: "",
                        ticketInfo: "",
                        vpointsCouponInfo: "",
                        zxkInfo: "",
                        resultOpacity: 0,
                        animationData: "",
                        disablelotteryPrize: !1,
                        prizeList: "",
                        turntableActivityCogInfo: "",
                        turntableDrawNumber: "",
                        isOnloadPop: !1,
                        showPopStatus: !1,
                        turntablePopStatus: "",
                        scanSkuYuNumber: "",
                        scanSkuYuTimer: "",
                        drainageType: "0",
                        unionid: "",
                        longitude: "",
                        latitude: "",
                        getZXK: !1,
                        noNumPop: !1,
                        prizePayMoney: "",
                        noNumPop2: !1,
                        terminalInfo: "",
                        newUserStatus: "",
                        isActivation: !1,
                        waitActivation: ""
                    };
                },
                components: {
                    screenTextScroll: function() {
                        n.e("components/screenTextScroll").then(function() {
                            return resolve(n("947d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    appTitle: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/app-title") ]).then(function() {
                            return resolve(n("f252"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    aboutLocation: function() {
                        n.e("components/aboustLocation").then(function() {
                            return resolve(n("9aee"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    redPackMoneyScan: function() {
                        n.e("components/red-pack-scan/red-pack-scan").then(function() {
                            return resolve(n("5b03"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                onLoad: function(e) {
                    var t = this;
                    return (0, o.default)(a.default.mark(function n() {
                        var i, r, o, l;
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (console.log("-----带来--------------"), console.log(e), e.projectServerName && e.drainagePopStatus && e.skuKey && (i = f({}, e), 
                                t.terminalInfo = i), t.isOnloadPop = !0, e.turntablePopStatus && (t.turntablePopStatus = e.turntablePopStatus, 
                                t.scanSkuYuNumber = e.scanSkuYuNumber || "", t.scanSkuYuTimer = e.scanSkuYuTimer || "", 
                                t.unionid = e.unionid, t.longitude = e.longitude, t.latitude = e.latitude), 0 != g) {
                                    n.next = 13;
                                    break;
                                }
                                return n.next = 8, t.queryMsgH();

                              case 8:
                                r = n.sent, o = r.width, l = r.height, g = o, h = l;

                              case 13:
                                console.log(g, h);

                              case 14:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                onShow: function() {
                    var t = this;
                    return (0, o.default)(a.default.mark(function n() {
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                console.log("onShow宽高-----------"), console.log(g, h), t.isShowPrivacy = 1 != e.getStorageSync("privacyRuleFlag"), 
                                t.isShowPrivacy || t.initAuthori();

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                onUnload: function() {},
                computed: {},
                methods: {
                    agreePrivacy: function() {
                        this.isShowPrivacy = !1, this.initAuthori();
                    },
                    initAuthori: function() {
                        var t = this;
                        return (0, o.default)(a.default.mark(function n() {
                            var i, r;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, (0, u.getXCXOpenid)();

                                  case 2:
                                    return n.sent, n.next = 5, (0, u.getGHOpenid)();

                                  case 5:
                                    if (i = n.sent, console.log("getApp().globalData.openid"), console.log(getApp().globalData.openid), 
                                    console.log(e.getStorageSync("openid")), !i) {
                                        n.next = 30;
                                        break;
                                    }
                                    if (t.handleGetRedEnvelope(), t.showPopStatus = !0, !t.longitude && !t.latitude) {
                                        n.next = 16;
                                        break;
                                    }
                                    t.queryPrize(), n.next = 30;
                                    break;

                                  case 16:
                                    if (getApp().globalData.latitude) {
                                        n.next = 29;
                                        break;
                                    }
                                    return n.next = 19, t.$refs.compslocation.locationFn();

                                  case 19:
                                    if (r = n.sent, console.log("locationStatus", r), 0 === r) {
                                        n.next = 25;
                                        break;
                                    }
                                    return n.abrupt("return");

                                  case 25:
                                    console.log(getApp().globalData.latitude), t.queryPrize();

                                  case 27:
                                    n.next = 30;
                                    break;

                                  case 29:
                                    t.queryPrize();

                                  case 30:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    closeTurntablePopStatus: function() {
                        this.isOnloadPop = !1, this.showPopStatus = !1;
                    },
                    queryMsgH: function() {
                        return new Promise(function(t, n) {
                            e.createSelectorQuery().selectAll("#canvas-disc-init").boundingClientRect(function(e) {
                                t({
                                    width: e[0].width,
                                    height: e[0].height
                                });
                            }).exec();
                        });
                    },
                    queryImg: function(t) {
                        return new Promise(function(n, i) {
                            e.getImageInfo({
                                src: t,
                                success: function(e) {
                                    n(e.path);
                                },
                                fail: function(e) {
                                    console.log("queryImg fail", e);
                                }
                            });
                        });
                    },
                    call: function(t) {
                        e.makePhoneCall({
                            phoneNumber: t
                        });
                    },
                    discLoad: function(e) {
                        e && (this.discloadend = !0);
                    },
                    run: function(t) {
                        (d = e.createAnimation({
                            duration: 1500,
                            delay: 0,
                            timingFunction: "ease-in-out"
                        })).rotate(1080 - t.deg).step(), this.animationData = d.export();
                    },
                    runEnd: function(e) {
                        var t = this;
                        this.disablelotteryPrize = !1;
                        var n = null;
                        clearInterval(n), setTimeout(function() {
                            n = setInterval(function() {
                                t.resultOpacity >= 1 ? (t.resultOpacity = 1, clearInterval(n), n = null) : t.resultOpacity += .1;
                            }, 20);
                        }, 500);
                    },
                    lotteryPrize: function(t) {
                        var n = this;
                        if (!this.disablelotteryPrize) {
                            if (0 == this.turntableDrawNumber) return "0" == this.prizeBasicInfo.turntablePrizeType && (this.prizeBasicInfo.turntablePrizeType = ""), 
                            this.noNumPop = !0, void (this.resultOpacity = 1);
                            this.disablelotteryPrize = !0, t && (this.resultOpacity = 0, this.initAni()), (0, 
                            s.request)("/turntable/executeTurntableLuckDraw", "POST", {
                                openid: getApp().globalData.openid,
                                activityKey: this.turntableActivityCogInfo.activityKey,
                                longitude: this.longitude ? this.longitude : getApp().globalData.longitude ? getApp().globalData.longitude : "00",
                                latitude: this.latitude ? this.latitude : getApp().globalData.latitude ? getApp().globalData.latitude : "00",
                                drainageType: this.drainageType
                            }).then(function(t) {
                                if (0 == t.result.code && 0 == t.result.businessCode) {
                                    n.turntableDrawNumber = t.reply.turntableDrawNumber;
                                    var i = n.prizeList.find(function(e) {
                                        return e.infoKey == t.reply.turntablePrizeInfo.infoKey;
                                    });
                                    "2" == t.reply.turntablePrizeInfo.turntablePrizeType && (t.reply.turntablePrizeInfo.prizeWinPic = t.reply.prizeRecord.prizeWinPic), 
                                    i = Object.assign(i, t.reply.turntablePrizeInfo, {
                                        prizeInfoKey: t.reply.prizeInfoKey,
                                        turntablePrizeName: i.turntablePrizeName.replace("/", ""),
                                        grandPrizeType: i.prizeType ? i.prizeType : ""
                                    }), n.prizeBasicInfo = i, n.run(i), n.getZXK = !!t.reply.isZun && t.reply.isZun, 
                                    "1" == t.reply.turntablePrizeInfo.turntablePrizeType || "4" == t.reply.turntablePrizeInfo.turntablePrizeType && (n.ticketInfo = t.reply.ticketInfo), 
                                    "5" == t.reply.turntablePrizeInfo.turntablePrizeType && (n.vpointsCouponInfo = t.reply.vpointsCoupon), 
                                    "2" == t.reply.turntablePrizeInfo.turntablePrizeType && t.reply.isZun && (n.zxkInfo = t.reply.goodsInfoList, 
                                    n.prizePayMoney = t.reply.prizePayMoney), n.noNumPop2 = !1;
                                } else {
                                    if (0 == t.result.code && 9 == t.result.businessCode) return "0" == n.prizeBasicInfo.turntablePrizeType && (n.prizeBasicInfo.turntablePrizeType = ""), 
                                    n.noNumPop2 = !0, n.resultOpacity = 1, void (n.disablelotteryPrize = !1);
                                    e.showToast({
                                        title: t.result.msg,
                                        icon: "none"
                                    }), n.disablelotteryPrize = !1, n.noNumPop2 = !1;
                                }
                            }).catch(function(t) {
                                e.showToast({
                                    title: res.result.msg,
                                    icon: "none"
                                }), n.disablelotteryPrize = !1;
                            });
                        }
                    },
                    toMallCoupon: function() {
                        this.resultOpacity = 0, this.initAni(), e.navigateTo({
                            url: "/pagesMall/mall/goodsDetail?id=" + this.vpointsCouponInfo.goodsId
                        });
                    },
                    toGetPrize: function(t) {
                        "tozunxiang" == t ? e.redirectTo({
                            url: "/pagesMall/mall/zunxiangCardList?cardType=3"
                        }) : e.redirectTo({
                            url: "/pagesScan/resultCommon/getPrize?prizeInfo=" + JSON.stringify(this.prizeBasicInfo)
                        });
                    },
                    toLotteryList: function() {
                        e.navigateTo({
                            url: "/pagesActivitys/disc/flowDiscLotteryList"
                        });
                    },
                    closeResult: function() {
                        this.resultOpacity = 0, this.initAni(), this.noNumPop = !1, this.prizeBasicInfo.turntablePrizeType = null;
                    },
                    toMyBag: function() {
                        e.navigateTo({
                            url: "/pagesScan/winningRecord/winningRecord"
                        });
                    },
                    toMypijiuhua: function() {
                        e.navigateTo({
                            url: "/pagesPersonal/scoreList/scoreList"
                        });
                    },
                    toRule: function() {
                        var t = this.goodsImgRoot + this.turntableActivityCogInfo.rulePic;
                        e.navigateTo({
                            url: "/pages/module/imgWrap?target=" + t
                        });
                    },
                    initAni: function() {
                        d.rotate(0).step({
                            duration: 0
                        }), this.animationData = d.export();
                    },
                    initPrize: function(e) {
                        var t = e.map(function(e, t) {
                            return 3 == e.turntablePrizeType && e.turntablePrizeName.length > 3 ? Object.assign(e, {
                                turntablePrizeName: e.turntablePrizeName.slice(0, 2) + "/" + e.turntablePrizeName.slice(2),
                                deg: 360 / y.length * (t + .5)
                            }) : Object.assign(e, {
                                deg: 360 / y.length * (t + .5),
                                turntablePic: l.config.goodsImgRoot + e.turntablePic
                            });
                        });
                        return this.prizeList = t, t;
                    },
                    queryPrize: function() {
                        var t = this;
                        return (0, o.default)(a.default.mark(function n() {
                            var i;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return e.showLoading({
                                        title: "加载中..."
                                    }), n.next = 3, (0, s.request)("/turntable/queryTurntableActivityInfo", "POST", {
                                        activityType: "0",
                                        drainageType: t.drainageType
                                    });

                                  case 3:
                                    i = n.sent, e.hideLoading(), 0 == i.result.code && 0 == i.result.businessCode ? 0 == i.reply.flag ? (y = i.reply.turntableActivityCogInfo.turntablePrizeCogList, 
                                    t.turntableActivityCogInfo = i.reply.turntableActivityCogInfo, t.turntableDrawNumber = i.reply.turntableDrawNumber, 
                                    t.initDisc(t.initPrize(y))) : 1 == i.reply.flag ? e.showModal({
                                        title: "温馨提示",
                                        content: "活动未开始",
                                        showCancel: !1,
                                        complete: function(t) {
                                            e.navigateBack({
                                                fail: function() {
                                                    e.redirectTo({
                                                        url: "/page_saodiande/saoDianDe/center"
                                                    });
                                                }
                                            });
                                        }
                                    }) : 2 == i.reply.flag ? e.showModal({
                                        title: "温馨提示",
                                        content: "活动已结束",
                                        showCancel: !1,
                                        complete: function(t) {
                                            e.navigateBack({
                                                fail: function() {
                                                    e.redirectTo({
                                                        url: "/page_saodiande/saoDianDe/center"
                                                    });
                                                }
                                            });
                                        }
                                    }) : e.showModal({
                                        title: "温馨提示",
                                        content: "活动暂时未开启",
                                        showCancel: !1,
                                        complete: function(t) {
                                            e.navigateBack({
                                                fail: function() {
                                                    e.redirectTo({
                                                        url: "/page_saodiande/saoDianDe/center"
                                                    });
                                                }
                                            });
                                        }
                                    }) : e.showModal({
                                        title: "温馨提示",
                                        content: i.result.msg,
                                        showCancel: !1,
                                        complete: function(t) {
                                            e.navigateBack({
                                                fail: function() {
                                                    e.redirectTo({
                                                        url: "/page_saodiande/saoDianDe/center"
                                                    });
                                                }
                                            });
                                        }
                                    });

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    queryPMD: function() {
                        var e = this;
                        return (0, o.default)(a.default.mark(function t() {
                            var n, i, r;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, (0, s.request)("/marquee/queryMarqueeInfo", "POST", {
                                        winType: 2
                                    });

                                  case 2:
                                    n = t.sent, i = n.result, r = n.reply, 0 == i.code && 0 == i.businessCode && (e.list = r);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    initDisc: function(t) {
                        var n = this;
                        return (0, o.default)(a.default.mark(function i() {
                            var r, o, l, s, u, c, f, d, y, b, P, m, v, z, w, I, T;
                            return a.default.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    if (r = e.getStorageSync("oldPrizeJson"), o = e.getStorageSync("oldDisc"), JSON.stringify(t) != r || !o) {
                                        i.next = 7;
                                        break;
                                    }
                                    return n.discImg = o, e.hideLoading(), n.queryPMD(), i.abrupt("return");

                                  case 7:
                                    for (e.setStorage({
                                        key: "oldPrizeJson",
                                        data: JSON.stringify(t)
                                    }), p.clearRect(0, 0, g, h), l = t.length, s = {
                                        show: !0,
                                        color: "#000",
                                        alternately: !0,
                                        index: 0,
                                        width: 5,
                                        x: 0,
                                        y: 0
                                    }, u = g / 2 * .8, c = g / 2, f = h / 2, d = 2 * Math.PI / l, y = 12, b = 18, P = 3, 
                                    m = {
                                        sectorColor: [ "#21B15F", "#FFFFFF" ],
                                        fontColor: [ "#FFFFFF", "#FC8607" ],
                                        imgWidth: 60,
                                        imgHeight: 60
                                    }, v = (Math.sqrt(u * u - Math.pow(m.imgWidth / 2, 2)) - m.imgHeight / 2) / u, z = u - Math.sqrt(u * u - Math.pow(m.imgWidth / 2, 2)), 
                                    console.log("图片绘制比%", v), console.log("文字在图片正下方的偏移量px", z), p.arc(c, f, u, 0, 2 * Math.PI), 
                                    p.fillStyle = "#FFFFFF", p.fill(), w = 0; w < l; w++) p.beginPath(), s.show && (s.alternately ? w % 2 == s.index ? p.setShadow(s.x, s.y, s.width, s.color) : p.setShadow(0, 0, 0, s.color) : p.setShadow(s.x, s.y, s.width, s.color)), 
                                    p.moveTo(c, f), p.lineTo(c + u * Math.cos(d * w - .5 * Math.PI), f + u * Math.sin(d * w - .5 * Math.PI)), 
                                    p.arc(c, f, u, d * w - .5 * Math.PI, d * (w + 1) - .5 * Math.PI), p.fillStyle = m.sectorColor[w % m.sectorColor.length], 
                                    p.fill();
                                    I = 0;

                                  case 22:
                                    if (!(I < l)) {
                                        i.next = 49;
                                        break;
                                    }
                                    if (p.beginPath(), p.fillStyle = m.fontColor[I % m.fontColor.length], "3" == t[I].turntablePrizeType) {
                                        i.next = 39;
                                        break;
                                    }
                                    return i.next = 28, n.queryImg(t[I].turntablePic);

                                  case 28:
                                    T = i.sent, p.translate(c + u * v * Math.cos(d * (I + .5) - .5 * Math.PI), f + u * v * Math.sin(d * (I + .5) - .5 * Math.PI)), 
                                    p.rotate((I + .5) * d), p.drawImage(T, -m.imgWidth / 2, -m.imgHeight / 2, m.imgWidth, m.imgHeight), 
                                    p.setFontSize(y), p.setTextAlign("center"), -1 != t[I].turntablePrizeName.indexOf("/") ? (p.fillText(t[I].turntablePrizeName.split("/")[0], 0, m.imgHeight / 2 + y + z), 
                                    p.fillText(t[I].turntablePrizeName.split("/")[1], 0, m.imgHeight / 2 + y + z + y + 5)) : p.fillText(t[I].turntablePrizeName, 0, m.imgHeight / 2 + y + z), 
                                    p.rotate(-(I + .5) * d), p.translate(-(c + u * v * Math.cos(d * (I + .5) - .5 * Math.PI)), -(f + u * v * Math.sin(d * (I + .5) - .5 * Math.PI))), 
                                    i.next = 46;
                                    break;

                                  case 39:
                                    p.translate(c + .7 * u * Math.cos(d * (I + .5) - .5 * Math.PI), f + .7 * u * Math.sin(d * (I + .5) - .5 * Math.PI)), 
                                    p.rotate((I + .5) * d), p.setFontSize(b), p.setTextAlign("center"), -1 != t[I].turntablePrizeName.indexOf("/") ? (p.fillText(t[I].turntablePrizeName.split("/")[0], 0, 0), 
                                    p.fillText(t[I].turntablePrizeName.split("/")[1], 0, b + 5)) : p.fillText(t[I].turntablePrizeName, 0, 0), 
                                    p.rotate(-(I + .5) * d), p.translate(-(c + .7 * u * Math.cos(d * (I + .5) - .5 * Math.PI)), -(f + .7 * u * Math.sin(d * (I + .5) - .5 * Math.PI)));

                                  case 46:
                                    I++, i.next = 22;
                                    break;

                                  case 49:
                                    p.draw(!1, function(t) {
                                        setTimeout(function() {
                                            e.canvasToTempFilePath({
                                                x: (g - 2 * u) / 2 - s.width,
                                                y: (g - 2 * u) / 2 - s.width,
                                                width: 2 * (u + s.width),
                                                height: 2 * (u + s.width),
                                                destWidth: 2 * u * P,
                                                destHeight: 2 * u * P,
                                                canvasId: "myCanvas",
                                                success: function(t) {
                                                    var i = "data:image/png;base64," + e.getFileSystemManager().readFileSync(t.tempFilePath, "base64");
                                                    e.setStorage({
                                                        key: "oldDisc",
                                                        data: i
                                                    }), n.discImg = t.tempFilePath, e.hideLoading(), n.queryPMD();
                                                },
                                                fail: function(t) {
                                                    console.log("discImg fail", t), e.hideLoading(), e.showToast({
                                                        title: "加载失败请重试",
                                                        icon: "none"
                                                    }), n.queryPMD();
                                                }
                                            });
                                        }, 600);
                                    });

                                  case 50:
                                  case "end":
                                    return i.stop();
                                }
                            }, i);
                        }))();
                    },
                    handleGetRedEnvelope: function() {
                        var e = this;
                        return new Promise(function(t, n) {
                            console.log("this.terminalInfo"), console.log(e.terminalInfo);
                            var i = f({
                                newUserStatus: e.newUserStatus
                            }, e.terminalInfo);
                            (0, s.requestPost)("/turntable/drainagePop", i).then(function(n) {
                                var i = n.result, a = n.reply;
                                0 == i.businessCode && 0 == i.code && 2 == a.pop && a.waitActivation && a.waitActivation.earnMoney ? (e.waitActivation = a.waitActivation, 
                                e.isActivation = !0) : e.isActivation = !1, t(!0);
                            }).catch(function(n) {
                                e.isActivation = !1, t(!0);
                            });
                        });
                    }
                }
            };
            t.default = b;
        }).call(this, n("543d").default);
    },
    cc15: function(e, t, n) {
        n.r(t);
        var i = n("5bec"), a = n("252a");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        n("ecae"), n("5179");
        var o = n("f0c5"), l = Object(o.a)(a.default, i.b, i.c, !1, null, "5ea32d1f", null, !1, i.a, void 0);
        t.default = l.exports;
    },
    ecae: function(e, t, n) {
        var i = n("081e");
        n.n(i).a;
    }
}, [ [ "0791", "common/runtime", "common/vendor" ] ] ]);