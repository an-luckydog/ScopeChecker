(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activitys/disc" ], {
    "18b1": function(t, e, n) {},
    "190d": function(t, e, n) {
        n.r(e);
        var i = n("8caf"), a = n.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = a.a;
    },
    "3b5d": function(t, e, n) {
        (function(t, e) {
            var i = n("4ea4");
            n("a7b2"), i(n("66fd"));
            var a = i(n("c806"));
            t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default);
        }).call(this, n("bc2e").default, n("543d").createPage);
    },
    "409e": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var i = function() {
            this.$createElement;
            var t = (this._self._c, this._f("toThousands")(this.surplusVpoints)), e = this.list.length, n = this.list.length;
            this.$mp.data = Object.assign({}, {
                $root: {
                    f0: t,
                    g0: e,
                    g1: n
                }
            });
        }, a = [];
    },
    "46cc": function(t, e, n) {
        var i = n("5778");
        n.n(i).a;
    },
    5778: function(t, e, n) {},
    "8bed": function(t, e, n) {
        var i = n("18b1");
        n.n(i).a;
    },
    "8caf": function(t, e, n) {
        (function(t) {
            var i = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i(n("2eee")), o = i(n("c973")), r = n("0488"), l = n("9b31"), s = t.createCanvasContext("myCanvas"), c = null, u = 0, f = 0, d = [], g = {
                data: function() {
                    return {
                        discImg: "",
                        isSmallScreen: !getApp().globalData.isLongScreen || "",
                        safeTop: getApp().globalData.safeAreaTop,
                        imgUrl: r.qpImgUrl + "turntable/",
                        goodsImgRoot: r.config.goodsImgRoot,
                        discloadend: !1,
                        list: "",
                        isHasData: !1,
                        prizeBasicInfo: "",
                        ticketInfo: "",
                        resultOpacity: 0,
                        animationData: "",
                        disablelotteryPrize: !1,
                        prizeList: "",
                        turntableActivityCogInfo: "",
                        surplusVpoints: ""
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
                    }
                },
                onLoad: function() {
                    return (0, o.default)(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onShow: function() {
                    var t = this;
                    return (0, o.default)(a.default.mark(function e() {
                        var n, i, o, r;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (0 != u) {
                                    e.next = 8;
                                    break;
                                }
                                return e.next = 3, t.queryMsgH();

                              case 3:
                                n = e.sent, i = n.width, o = n.height, u = i, f = o;

                              case 8:
                                if (console.log(u, f), getApp().globalData.v_latitude) {
                                    e.next = 22;
                                    break;
                                }
                                return e.next = 12, t.$refs.compslocation.locationFn();

                              case 12:
                                if (r = e.sent, console.log("locationStatus", r), 0 === r) {
                                    e.next = 18;
                                    break;
                                }
                                return e.abrupt("return");

                              case 18:
                                console.log(getApp().globalData.v_latitude), t.queryPrize();

                              case 20:
                                e.next = 23;
                                break;

                              case 22:
                                t.queryPrize();

                              case 23:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                onUnload: function() {
                    getApp().globalData.v_latitude = null, getApp().globalData.v_longitude = null;
                },
                computed: {},
                methods: {
                    queryMsgH: function() {
                        return new Promise(function(e, n) {
                            t.createSelectorQuery().selectAll("#canvas-disc-init").boundingClientRect(function(t) {
                                e({
                                    width: t[0].width,
                                    height: t[0].height
                                });
                            }).exec();
                        });
                    },
                    queryImg: function(e) {
                        return new Promise(function(n, i) {
                            t.getImageInfo({
                                src: e,
                                success: function(t) {
                                    n(t.path);
                                },
                                fail: function(t) {
                                    console.log("queryImg fail", t);
                                }
                            });
                        });
                    },
                    call: function(e) {
                        t.makePhoneCall({
                            phoneNumber: e
                        });
                    },
                    discLoad: function(t) {
                        t && (this.discloadend = !0);
                    },
                    run: function(e) {
                        (c = t.createAnimation({
                            duration: 1500,
                            delay: 0,
                            timingFunction: "ease-in-out"
                        })).rotate(1080 - e.deg).step(), this.animationData = c.export();
                    },
                    runEnd: function(t) {
                        var e = this;
                        this.disablelotteryPrize = !1;
                        var n = null;
                        clearInterval(n), setTimeout(function() {
                            n = setInterval(function() {
                                e.resultOpacity >= 1 ? (e.resultOpacity = 1, clearInterval(n), n = null) : e.resultOpacity += .1;
                            }, 20);
                        }, 500);
                    },
                    lotteryPrize: function(e) {
                        var n = this;
                        if (!this.disablelotteryPrize) {
                            if (this.surplusVpoints < this.turntableActivityCogInfo.consumeVpoints) return t.showToast({
                                title: "您当前剩余啤酒花不足",
                                icon: "none"
                            });
                            this.disablelotteryPrize = !0, e && (this.resultOpacity = 0, this.initAni()), (0, 
                            l.request)("/turntable/executeTurntableLuckDraw", "POST", {
                                openid: getApp().globalData.openid,
                                activityKey: this.turntableActivityCogInfo.activityKey,
                                longitude: getApp().globalData.v_longitude || "00",
                                latitude: getApp().globalData.v_latitude || "00"
                            }).then(function(e) {
                                if (0 == e.result.code && 0 == e.result.businessCode) {
                                    n.surplusVpoints = e.reply.surplusVpoints;
                                    var i = n.prizeList.find(function(t) {
                                        return t.infoKey == e.reply.turntablePrizeInfo.infoKey;
                                    });
                                    i = Object.assign(i, e.reply.turntablePrizeInfo, {
                                        prizeInfoKey: e.reply.prizeInfoKey,
                                        turntablePrizeName: i.turntablePrizeName.replace("/", "")
                                    }), n.prizeBasicInfo = i, n.run(i), "4" == e.reply.turntablePrizeInfo.turntablePrizeType && (n.ticketInfo = e.reply.ticketInfo);
                                } else t.showToast({
                                    title: e.result.msg,
                                    icon: "none"
                                }), n.disablelotteryPrize = !1;
                            }).catch(function(e) {
                                t.showToast({
                                    title: res.result.msg,
                                    icon: "none"
                                }), n.disablelotteryPrize = !1;
                            });
                        }
                    },
                    toTx: function() {
                        t.navigateTo({
                            url: "/pagesScan/winningRecord/winningRecord"
                        });
                    },
                    toCoupon: function() {
                        t.navigateTo({
                            url: "/page_saodiande/saoDianDe/saveCoupon?couponImg=" + this.ticketInfo.ticketPicUrl
                        });
                    },
                    toGetPrize: function() {
                        console.log(this.prizeBasicInfo);
                        var e = this.prizeBasicInfo;
                        return t.navigateTo({
                            url: "/pagesScan/result/getPrize?prizeInfo=" + JSON.stringify(e)
                        });
                    },
                    toLotteryList: function() {
                        t.navigateTo({
                            url: "/pagesActivitys/disc/lotteryList"
                        });
                    },
                    closeResult: function() {
                        this.resultOpacity = 0, this.initAni();
                    },
                    toRule: function() {
                        var e = this.goodsImgRoot + this.turntableActivityCogInfo.rulePic;
                        t.navigateTo({
                            url: "/pages/module/imgWrap?target=" + e
                        });
                    },
                    initAni: function() {
                        c.rotate(0).step({
                            duration: 0
                        }), this.animationData = c.export();
                    },
                    initPrize: function(t) {
                        var e = t.map(function(t, e) {
                            return 3 == t.turntablePrizeType && t.turntablePrizeName.length > 3 ? Object.assign(t, {
                                turntablePrizeName: t.turntablePrizeName.slice(0, 2) + "/" + t.turntablePrizeName.slice(2),
                                deg: 360 / d.length * (e + .5)
                            }) : Object.assign(t, {
                                deg: 360 / d.length * (e + .5),
                                turntablePic: r.config.goodsImgRoot + t.turntablePic
                            });
                        });
                        return this.prizeList = e, e;
                    },
                    queryPrize: function() {
                        var e = this;
                        return (0, o.default)(a.default.mark(function n() {
                            var i;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), n.next = 3, (0, l.request)("/turntable/queryTurntableActivityInfo", "POST", {
                                        openid: getApp().globalData.openid
                                    });

                                  case 3:
                                    0 == (i = n.sent).result.code && 0 == i.result.businessCode ? 0 == i.reply.flag ? (d = i.reply.turntableActivityCogInfo.turntablePrizeCogList, 
                                    e.turntableActivityCogInfo = i.reply.turntableActivityCogInfo, e.initDisc(e.initPrize(d))) : 1 == i.reply.flag ? (t.hideLoading(), 
                                    t.showModal({
                                        title: "温馨提示",
                                        content: "活动未开始",
                                        showCancel: !1,
                                        complete: function(e) {
                                            t.navigateBack({
                                                fail: function() {
                                                    t.redirectTo({
                                                        url: "/page_saodiande/saoDianDe/center"
                                                    });
                                                }
                                            });
                                        }
                                    })) : 2 == i.reply.flag ? (t.hideLoading(), t.showModal({
                                        title: "温馨提示",
                                        content: "活动已结束",
                                        showCancel: !1,
                                        complete: function(e) {
                                            t.navigateBack({
                                                fail: function() {
                                                    t.redirectTo({
                                                        url: "/page_saodiande/saoDianDe/center"
                                                    });
                                                }
                                            });
                                        }
                                    })) : (t.hideLoading(), t.showModal({
                                        title: "温馨提示",
                                        content: "活动暂时未开启",
                                        showCancel: !1,
                                        complete: function(e) {
                                            t.navigateBack({
                                                fail: function() {
                                                    t.redirectTo({
                                                        url: "/page_saodiande/saoDianDe/center"
                                                    });
                                                }
                                            });
                                        }
                                    })) : (t.hideLoading(), t.showModal({
                                        title: "温馨提示",
                                        content: i.result.msg,
                                        showCancel: !1,
                                        complete: function(e) {
                                            t.navigateBack({
                                                fail: function() {
                                                    t.redirectTo({
                                                        url: "/page_saodiande/saoDianDe/center"
                                                    });
                                                }
                                            });
                                        }
                                    }));

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    queryUserInfo: function() {
                        var e, n, i = this, a = getApp().globalData.unionid || t.getStorageSync("unionid").unionid || (null === (e = t.getStorageSync("userData")) || void 0 === e || null === (n = e.uinfo) || void 0 === n ? void 0 : n.unionid) || "";
                        (0, l.request)("/user/userInfo", "POST", {
                            openid: getApp().globalData.openid,
                            unionid: a
                        }).then(function(t) {
                            0 == t.result.code && 0 == t.result.businessCode && (i.surplusVpoints = t.reply.accountInfo.surplusVpoints || 0);
                        }).catch(function(t) {});
                    },
                    queryPMD: function() {
                        var t = this;
                        return (0, o.default)(a.default.mark(function e() {
                            var n, i, o;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, (0, l.request)("/marquee/queryMarqueeInfo", "POST", {
                                        winType: 2
                                    });

                                  case 2:
                                    n = e.sent, i = n.result, o = n.reply, 0 == i.code && 0 == i.businessCode && (t.list = o);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    initDisc: function(e) {
                        var n = this;
                        return (0, o.default)(a.default.mark(function i() {
                            var o, r, l, c, d, g, h, p, b, m, y, v, P, I, w, z, x;
                            return a.default.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    if (o = t.getStorageSync("oldPrizeJson"), r = t.getStorageSync("oldDisc"), JSON.stringify(e) != o || !r) {
                                        i.next = 8;
                                        break;
                                    }
                                    return n.discImg = r, t.hideLoading(), n.queryUserInfo(), n.queryPMD(), i.abrupt("return");

                                  case 8:
                                    for (t.setStorage({
                                        key: "oldPrizeJson",
                                        data: JSON.stringify(e)
                                    }), s.clearRect(0, 0, u, f), l = e.length, c = {
                                        show: !0,
                                        color: "#000",
                                        alternately: !0,
                                        index: 0,
                                        width: 5,
                                        x: 0,
                                        y: 0
                                    }, d = u / 2 * .8, g = u / 2, h = f / 2, p = 2 * Math.PI / l, b = 12, m = 18, y = 3, 
                                    v = {
                                        sectorColor: [ "#21B15F", "#FFFFFF" ],
                                        fontColor: [ "#FFFFFF", "#FC8607" ],
                                        imgWidth: 60,
                                        imgHeight: 60
                                    }, P = (Math.sqrt(d * d - Math.pow(v.imgWidth / 2, 2)) - v.imgHeight / 2) / d, I = d - Math.sqrt(d * d - Math.pow(v.imgWidth / 2, 2)), 
                                    console.log("图片绘制比%", P), console.log("文字在图片正下方的偏移量px", I), s.arc(g, h, d, 0, 2 * Math.PI), 
                                    s.fillStyle = "#FFFFFF", s.fill(), w = 0; w < l; w++) s.beginPath(), c.show && (c.alternately ? w % 2 == c.index ? s.setShadow(c.x, c.y, c.width, c.color) : s.setShadow(0, 0, 0, c.color) : s.setShadow(c.x, c.y, c.width, c.color)), 
                                    s.moveTo(g, h), s.lineTo(g + d * Math.cos(p * w - .5 * Math.PI), h + d * Math.sin(p * w - .5 * Math.PI)), 
                                    s.arc(g, h, d, p * w - .5 * Math.PI, p * (w + 1) - .5 * Math.PI), s.fillStyle = v.sectorColor[w % v.sectorColor.length], 
                                    s.fill();
                                    z = 0;

                                  case 23:
                                    if (!(z < l)) {
                                        i.next = 50;
                                        break;
                                    }
                                    if (s.beginPath(), s.fillStyle = v.fontColor[z % v.fontColor.length], "3" == e[z].turntablePrizeType) {
                                        i.next = 40;
                                        break;
                                    }
                                    return i.next = 29, n.queryImg(e[z].turntablePic);

                                  case 29:
                                    x = i.sent, s.translate(g + d * P * Math.cos(p * (z + .5) - .5 * Math.PI), h + d * P * Math.sin(p * (z + .5) - .5 * Math.PI)), 
                                    s.rotate((z + .5) * p), s.drawImage(x, -v.imgWidth / 2, -v.imgHeight / 2, v.imgWidth, v.imgHeight), 
                                    s.setFontSize(b), s.setTextAlign("center"), -1 != e[z].turntablePrizeName.indexOf("/") ? (s.fillText(e[z].turntablePrizeName.split("/")[0], 0, v.imgHeight / 2 + b + I), 
                                    s.fillText(e[z].turntablePrizeName.split("/")[1], 0, v.imgHeight / 2 + b + I + b + 5)) : s.fillText(e[z].turntablePrizeName, 0, v.imgHeight / 2 + b + I), 
                                    s.rotate(-(z + .5) * p), s.translate(-(g + d * P * Math.cos(p * (z + .5) - .5 * Math.PI)), -(h + d * P * Math.sin(p * (z + .5) - .5 * Math.PI))), 
                                    i.next = 47;
                                    break;

                                  case 40:
                                    s.translate(g + .7 * d * Math.cos(p * (z + .5) - .5 * Math.PI), h + .7 * d * Math.sin(p * (z + .5) - .5 * Math.PI)), 
                                    s.rotate((z + .5) * p), s.setFontSize(m), s.setTextAlign("center"), -1 != e[z].turntablePrizeName.indexOf("/") ? (s.fillText(e[z].turntablePrizeName.split("/")[0], 0, 0), 
                                    s.fillText(e[z].turntablePrizeName.split("/")[1], 0, m + 5)) : s.fillText(e[z].turntablePrizeName, 0, 0), 
                                    s.rotate(-(z + .5) * p), s.translate(-(g + .7 * d * Math.cos(p * (z + .5) - .5 * Math.PI)), -(h + .7 * d * Math.sin(p * (z + .5) - .5 * Math.PI)));

                                  case 47:
                                    z++, i.next = 23;
                                    break;

                                  case 50:
                                    s.draw(!1, function(e) {
                                        setTimeout(function() {
                                            t.canvasToTempFilePath({
                                                x: (u - 2 * d) / 2 - c.width,
                                                y: (u - 2 * d) / 2 - c.width,
                                                width: 2 * (d + c.width),
                                                height: 2 * (d + c.width),
                                                destWidth: 2 * d * y,
                                                destHeight: 2 * d * y,
                                                canvasId: "myCanvas",
                                                success: function(e) {
                                                    var i = "data:image/png;base64," + t.getFileSystemManager().readFileSync(e.tempFilePath, "base64");
                                                    t.setStorage({
                                                        key: "oldDisc",
                                                        data: i
                                                    }), n.discImg = e.tempFilePath, t.hideLoading(), n.queryUserInfo(), n.queryPMD();
                                                },
                                                fail: function(e) {
                                                    console.log("discImg fail", e), t.hideLoading(), t.showToast({
                                                        title: "加载失败请重试",
                                                        icon: "none"
                                                    }), n.queryUserInfo(), n.queryPMD();
                                                }
                                            });
                                        }, 600);
                                    });

                                  case 51:
                                  case "end":
                                    return i.stop();
                                }
                            }, i);
                        }))();
                    }
                }
            };
            e.default = g;
        }).call(this, n("543d").default);
    },
    c806: function(t, e, n) {
        n.r(e);
        var i = n("409e"), a = n("190d");
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("46cc"), n("8bed");
        var r = n("f0c5"), l = Object(r.a)(a.default, i.b, i.c, !1, null, "044a275a", null, !1, i.a, void 0);
        e.default = l.exports;
    }
}, [ [ "3b5d", "common/runtime", "common/vendor" ] ] ]);