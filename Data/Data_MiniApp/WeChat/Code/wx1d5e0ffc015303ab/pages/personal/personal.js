(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal/personal" ], {
    "52a1": function(e, n, t) {},
    5449: function(e, n, t) {
        (function(e, n) {
            var r = t("4ea4");
            t("a7b2"), r(t("66fd"));
            var i = r(t("d2a3"));
            e.__webpack_require_UNI_MP_PLUGIN__ = t, n(i.default);
        }).call(this, t("bc2e").default, t("543d").createPage);
    },
    "636c": function(e, n, t) {
        t.r(n);
        var r = t("9fc6"), i = t.n(r);
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(o);
        n.default = i.a;
    },
    "9fc6": function(e, n, t) {
        (function(e, r) {
            var i = t("4ea4");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = i(t("2eee")), a = i(t("c973")), s = t("0488"), c = t("9b31"), l = (t("3d25"), 
            t("46db")), u = t("c703"), p = (t("6fd5"), t("8921")), g = (t("4514"), t("490d")), f = {
                name: "personalCenter",
                components: {
                    customCallPhone: function() {
                        t.e("components/custom-call-phone/custom-call-phone").then(function() {
                            return resolve(t("2398"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    privacy: function() {
                        Promise.all([ t.e("common/vendor"), t.e("components/privacy/privacy") ]).then(function() {
                            return resolve(t("fc8e"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    maskTemplate: function() {
                        t.e("components/mask-template/mask-template").then(function() {
                            return resolve(t("c301"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    progressBar: function() {
                        t.e("components/progress-bar/progress-bar").then(function() {
                            return resolve(t("8a3c"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    appTitle: function() {
                        Promise.all([ t.e("common/vendor"), t.e("components/app-title") ]).then(function() {
                            return resolve(t("f252"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    showModal: function() {
                        t.e("components/show-modal-province").then(function() {
                            return resolve(t("2e88"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                computed: {
                    safeAreaTop: function() {
                        var n = e.getStorageSync("userSystemInfo");
                        return n ? 0 == n.safeArea.top ? "30" : n.safeArea.top : "30";
                    }
                },
                data: function() {
                    return {
                        imgUrl: "https://xcxsite.vjifen.com/v/static/",
                        isLongScreen: getApp().globalData.isLongScreen,
                        safeAreaTopCur: getApp().globalData.safeAreaTop ? getApp().globalData.safeAreaTop + "px" : "64rpx",
                        categoryData: [ {
                            id: 1,
                            text: "会员日活动",
                            imageUrl: s.qpImgUrl + "personal/quanyi1.png"
                        }, {
                            id: 2,
                            text: "会员福利",
                            imageUrl: s.qpImgUrl + "personal/quanyi2.png"
                        }, {
                            id: 3,
                            text: "专属会员客服",
                            imageUrl: s.qpImgUrl + "personal/quanyi3.png"
                        }, {
                            id: 4,
                            text: "查看全部权益",
                            imageUrl: s.qpImgUrl + "personal/quanyi4.png"
                        } ],
                        qpImgUrl: s.qpImgUrl + "personal/",
                        linkAry: [],
                        showLinkList: [],
                        customCallPhoneIsShow: !1,
                        callPhoneList: [ {
                            id: 1,
                            label: "扫码活动咨询请拨打",
                            text: "4006800899"
                        }, {
                            id: 2,
                            label: "啤酒花兑奖售后请拨打",
                            text: "13791996263"
                        } ],
                        isStartAnimation: !1,
                        staticUrlSD: s.config.staticUrlSD,
                        personalCenterImg: s.config.staticUrlSD + "personalCenter/",
                        openid: "",
                        total: 0,
                        pctList: [ {
                            id: 1,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "我的红包",
                            icon: s.qpImgUrl + "personal/iconhongbao.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesScan/winningRecord/winningRecord"
                        }, {
                            id: 111,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "待激活红包",
                            icon: s.qpImgUrl + "personal/icondaijihuo.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesScan/winningRecord/waitWinningRecord"
                        }, {
                            id: 4,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "啤酒花账单",
                            icon: s.qpImgUrl + "personal/point6.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesPersonal/scoreList/scoreList"
                        }, {
                            id: 13,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "优惠券",
                            icon: s.qpImgUrl + "personal/iconyouhuiquan.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesMall/getCoupon/myCoupon"
                        }, {
                            id: 5,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "我的实物奖",
                            icon: s.qpImgUrl + "personal/iconshiwujiang.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesScan/prizeList/prizeList"
                        }, {
                            id: 6,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "礼品记录",
                            icon: s.qpImgUrl + "personal/iconlipinjilu.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesGiftCard/giftList"
                        }, {
                            id: 7,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "我的礼品卡",
                            icon: s.qpImgUrl + "personal/iconlipinka.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesLipinka/lipinkaList"
                        }, {
                            id: 8,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "尊享卡",
                            icon: s.qpImgUrl + "personal/iconzunxiangka.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesMall/mall/zunxiangCardList?cardType=3"
                        } ],
                        pctListBot: [ {
                            id: 41,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "拼团记录",
                            icon: s.qpImgUrl + "personal/iconpintuan.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesMall/pintuan/groupOrder"
                        }, {
                            id: 8,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "我的评论",
                            icon: s.qpImgUrl + "personal/iconpinglun.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesMall/mall/comment/myCommentList"
                        } ],
                        pctListBot0: [ {
                            id: 22,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "地址管理",
                            icon: s.qpImgUrl + "personal/icondiliweizhi.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesMall/mall/address/addressList"
                        }, {
                            id: 23,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "完善信息",
                            icon: s.qpImgUrl + "personal/iconwanshan.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesPersonal/userInfo/writeInfo"
                        }, {
                            id: 24,
                            isCanClick: !0,
                            isShow: !0,
                            status: 4,
                            name: "关注公众号",
                            icon: s.qpImgUrl + "personal/iconguanzhu.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesPersonal/attention/attention"
                        }, {
                            id: 255,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "串码领奖",
                            icon: s.qpImgUrl + "personal/iconchuanma.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesScan/strcode"
                        }, {
                            id: 26,
                            isCanClick: !0,
                            isShow: !0,
                            status: 2,
                            name: "客服中心",
                            icon: s.qpImgUrl + "personal/iconkefu.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: ""
                        }, {
                            id: 11,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "隐私说明",
                            icon: s.qpImgUrl + "personal/iconyinsi.png?v=33",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesScan/webView/webViewPrivacy?type=privacy"
                        } ],
                        pctListBot1: [ {
                            id: 12,
                            isCanClick: !0,
                            isShow: !0,
                            status: 1,
                            name: "账号与服务",
                            icon: s.config.staticUrl2022 + "main/service.png",
                            rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                            navUrl: "/pagesMall/service/list"
                        } ],
                        tabsArr: [ {
                            id: 1,
                            isCanClick: !0,
                            status: 1,
                            name: "待付款",
                            icon: s.qpImgUrl + "personal/tab1.png?v=33",
                            navUrl: "/pagesMall/mall/order/order?type=4"
                        }, {
                            id: 2,
                            isCanClick: !0,
                            status: 1,
                            name: "待发货",
                            icon: s.qpImgUrl + "personal/tab2.png?v=33",
                            navUrl: "/pagesMall/mall/order/order?type=0"
                        }, {
                            id: 3,
                            isCanClick: !0,
                            status: 1,
                            name: "待收货",
                            icon: s.qpImgUrl + "personal/tab3.png?v=33",
                            navUrl: "/pagesMall/mall/order/order?type=1"
                        }, {
                            id: 4,
                            isCanClick: !0,
                            status: 1,
                            name: "售后",
                            icon: s.qpImgUrl + "personal/tab4.png?v=33",
                            navUrl: "/pagesMall/mall/order/order?type=5"
                        }, {
                            id: 5,
                            isCanClick: !0,
                            status: 1,
                            name: "我的订单",
                            icon: s.qpImgUrl + "personal/tab5.png?v=33",
                            navUrl: "/pagesMall/mall/order/order?type=3"
                        } ],
                        userInfo: {
                            avatarUrl: "",
                            nickName: "微信用户"
                        },
                        isShowTixian: !1,
                        scrollViewHeight: "",
                        isHasUserInfo: "",
                        showPrivacy: !1,
                        canIUseGetUserProfile: !1,
                        isShowMaskTemplate: !1,
                        surplusBiddingNum: 0,
                        isShowPrivacy: !1,
                        isShowJiKa: !1,
                        vpsConsumerMemberInfo: {},
                        surplusVpoints: "0",
                        showTipWindow: !1,
                        provinceListArr: [],
                        isShowGuide: !1,
                        isShowExchangeCard: !1,
                        isShowExchangeCardErr: !1,
                        exchangeCardErr: "",
                        giftCardQrcode: "",
                        duifukaItem: {},
                        isShowVpointsShop: !1,
                        sessionFrom: "",
                        isHexiaoUser: ""
                    };
                },
                created: function() {},
                onLoad: function() {
                    var e = this;
                    return (0, a.default)(o.default.mark(function n() {
                        return o.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return e.setTabBarIndex(4), r.getUserProfile && (e.canIUseGetUserProfile = !0), 
                                n.next = 4, (0, p.getUserDataFun)();

                              case 4:
                                n.sent;

                              case 6:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                onShow: function() {
                    var n = this;
                    return (0, a.default)(o.default.mark(function t() {
                        var r;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, (0, p.getGHOpenid)();

                              case 2:
                                (r = t.sent) && (n.openid = r, getApp().globalData.openid = r, n.onShowFn()), e.getStorage({
                                    key: "userInfo",
                                    success: function(e) {
                                        console.log(e);
                                        var t = e.data;
                                        n.userInfo.avatarUrl = t.avatarUrl, n.userInfo.nickName = t.nickName, n.isHasUserInfo = !0;
                                    },
                                    fail: function(e) {
                                        n.userInfo.avatarUrl = "", n.userInfo.nickName = "微信用户", n.isHasUserInfo = !1;
                                    }
                                }), n.isShowPrivacy = !1, setTimeout(function() {
                                    n.isShowPrivacy = !0;
                                }, 100), n.getScrollHeight();

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onHide: function() {},
                methods: {
                    handleCloseAction: function() {
                        this.$refs.actionPopup.close();
                    },
                    handleSessionFrom: function() {
                        var n = "sobot";
                        this.userInfo.nickName && (n = n + "|" + this.userInfo.nickName + "|" + this.userInfo.headImgUrl);
                        var t = getApp().globalData.openid || e.getStorageSync("openid").openid;
                        n += "|".concat(JSON.stringify({
                            "公司": "河北"
                        }), "|partnerid=").concat(t), this.sessionFrom = n, console.log(n, "------------------");
                    },
                    toModifyUserInfo: function() {
                        if (!(getApp().globalData.openid || e.getStorageSync("openid").openid)) return e.showModal({
                            title: "提示",
                            content: "你还未参与过扫码活动",
                            showCancel: !1
                        });
                        e.navigateTo({
                            url: "/pages/module/userinfo"
                        });
                    },
                    onShowFn: function() {
                        var n = this;
                        return (0, a.default)(o.default.mark(function t() {
                            var r, i, a, c, l, p;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return r = {
                                        currentPage: 1,
                                        searchFlag: 3,
                                        count: 10
                                    }, t.next = 3, (0, u.queryAllGiftsList)(r);

                                  case 3:
                                    if (i = t.sent, a = i.result, c = i.reply, 0 != a.code || 0 != a.businessCode) {
                                        t.next = 18;
                                        break;
                                    }
                                    if (n.sortingParameters(c), n.isShowVpointsShop = 1 == c.isShowVpointsShop, n.isHexiaoUser = c.isCheckUser, 
                                    "1" != n.isHexiaoUser) {
                                        t.next = 16;
                                        break;
                                    }
                                    if (!n.pctListBot0.some(function(e) {
                                        return "核销记录" == e.name;
                                    })) {
                                        t.next = 14;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 14:
                                    l = n.pctListBot0.findIndex(function(e) {
                                        return "串码领奖" == e.name;
                                    }), n.pctListBot0.splice(l + 1, 0, {
                                        id: 27,
                                        isCanClick: !0,
                                        status: 1,
                                        name: "核销记录",
                                        icon: n.qpImgUrl + "iconhexiao.png?v=33",
                                        rightIcon: s.config.staticUrl2022 + "main/iconRight.png?v=33",
                                        navUrl: "/pagesScan/myhexiao/myhexiao"
                                    });

                                  case 16:
                                    t.next = 19;
                                    break;

                                  case 18:
                                    n.isShowVpointsShop = !1;

                                  case 19:
                                    n.getRequestuserInfo(), n.getMemberUserInHandel(), p = n, e.getStorage({
                                        key: "isShowGuide",
                                        success: function(e) {
                                            e.data && (p.isShowGuide = !1);
                                        },
                                        fail: function() {
                                            p.isShowGuide = !0;
                                        }
                                    }), n.giftCardQrcode = getApp().globalData.giftCardQrcode, n.giftCardQrcode && n.getGiftCardDetailsHandle();

                                  case 25:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    guideSure: function() {
                        this.isShowGuide = !1, e.setStorageSync("isShowGuide", !0);
                    },
                    sortingParameters: function(e) {
                        this.tabsArr[0].showCenter = e.orderNonPaymentNum, this.tabsArr[1].showCenter = e.orderNonShipmentsNum, 
                        this.tabsArr[2].showCenter = e.orderNonReceiveNum, this.tabsArr.splice(), this.total = e.total, 
                        this.surplusBiddingNum = e.surplusBiddingNum;
                    },
                    listNav: function(n) {
                        console.log("navData"), console.log(n);
                        var t = n;
                        if (t.isCanClick) if (1 == t.status) e.navigateTo({
                            url: t.navUrl
                        }); else if (2 == t.status) this.showKefuList(); else if (3 == t.status) console.log("弹出大区选择框"), 
                        this.showProSelect(); else if (4 == t.status) {
                            var r;
                            (0, p.officialAccount)(null === (r = getApp().globalData.curProvince) || void 0 === r ? void 0 : r.projectServerName, "person");
                        }
                    },
                    showKefuList: function() {
                        var n = this;
                        return (0, a.default)(o.default.mark(function t() {
                            var i;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, n.getConsumerInfo();

                                  case 2:
                                    i = n, r.showActionSheet({
                                        itemList: n.showLinkList,
                                        success: function(n) {
                                            console.log(n.tapIndex), "0" == i.linkAry[n.tapIndex].consumerCenterType ? (0, l.callPhone)(i.linkAry[n.tapIndex].servicePhonenum) : "1" == i.linkAry[n.tapIndex].consumerCenterType ? e.navigateTo({
                                                url: "/pages/module/webview?target=" + encodeURIComponent(i.linkAry[n.tapIndex].companyWechatLink)
                                            }) : "2" == i.linkAry[n.tapIndex].consumerCenterType && i.$refs.actionPopup.open("center");
                                        },
                                        fail: function(e) {
                                            console.log(e.errMsg);
                                        }
                                    });

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getConsumerInfo: function() {
                        var n = this;
                        return (0, a.default)(o.default.mark(function t() {
                            var i, a, s;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return i = {
                                        openid: getApp().globalData.openid
                                    }, t.next = 3, (0, c.requestPost)("/consumerCenter/queryConsumerCenterInfo", i);

                                  case 3:
                                    if (a = t.sent, console.log(a), 0 != a.result.code || 0 != a.result.businessCode) {
                                        t.next = 17;
                                        break;
                                    }
                                    if (console.log(a.reply.consumerCenterCogInfoList), n.linkAry = a.reply.consumerCenterCogInfoList, 
                                    n.showLinkList = [], !(n.linkAry.length > 0)) {
                                        t.next = 13;
                                        break;
                                    }
                                    for (s in n.linkAry) "0" == n.linkAry[s].consumerCenterType ? n.showLinkList.push(n.linkAry[s].servicePhonenumDescribe + "：" + n.linkAry[s].servicePhonenum) : "1" == n.linkAry[s].consumerCenterType ? n.showLinkList.push(n.linkAry[s].companyWechatDescribe) : "2" == n.linkAry[s].consumerCenterType && (n.showLinkList.push(n.linkAry[s].servicePhonenumDescribe), 
                                    n.handleSessionFrom());
                                    t.next = 15;
                                    break;

                                  case 13:
                                    return r.showToast({
                                        title: "暂无客服电话~",
                                        icon: "none",
                                        duration: 2e3
                                    }), t.abrupt("return");

                                  case 15:
                                    t.next = 18;
                                    break;

                                  case 17:
                                    e.showModal({
                                        title: "提示",
                                        content: a.result.msg
                                    });

                                  case 18:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getScrollHeight: function() {
                        var e = this;
                        r.createSelectorQuery().select("#personalCenter").boundingClientRect().select("#wr-center-top").boundingClientRect().select("#title").boundingClientRect().exec(function(n) {
                            var t = this.isLongScreen ? 16 : 40, r = parseFloat(n[0].height - n[1].height - n[2].height - 200 - t).toFixed(2);
                            e.scrollViewHeight = r || 237;
                        });
                    },
                    WxOpenSettingColse: function(e) {
                        this.customCallPhoneIsShow = !1;
                    },
                    getRequestuserInfo: function() {
                        var e = this;
                        return (0, a.default)(o.default.mark(function n() {
                            var t, r;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, (0, u.userInfo)();

                                  case 2:
                                    (t = n.sent).result, r = t.reply, e.isShowJiKa = 1 == (null == r ? void 0 : r.switchScanCard), 
                                    e.surplusVpoints = null == r ? void 0 : r.accountInfo.surplusVpoints, e.userInfo = (null == r ? void 0 : r.userInfo) || {};

                                  case 8:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    toGradeDescription: function() {
                        e.navigateTo({
                            url: "/pagesPersonal/member/gradeDescription"
                        });
                    },
                    toDescriptionEquity: function() {
                        e.navigateTo({
                            url: "/pagesPersonal/member/descriptionEquity"
                        });
                    },
                    getMemberUserInHandel: function() {
                        var e = this;
                        return (0, a.default)(o.default.mark(function n() {
                            var t, r, i;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, (0, u.getMemberUserInfo)();

                                  case 2:
                                    t = n.sent, r = t.reply, 0 == (i = t.result).code && 0 == i.businessCode && (e.vpsConsumerMemberInfo = r.vpsConsumerMemberInfo);

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getUserInfoNew: function() {
                        var e = this;
                        return (0, a.default)(o.default.mark(function n() {
                            var t, r, i;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, (0, u.userInfo)();

                                  case 2:
                                    t = n.sent, r = t.result, i = t.reply, 0 == r.businessCode && 0 == r.code && (e.userInfo.avatarUrl = i.userInfo.headImgUrl, 
                                    e.userInfo.nickName = i.userInfo.nickName, e.isHasUserInfo = !0, e.surplusVpoints = i.accountInfo.surplusVpoints);

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    showProSelect: function() {
                        var n, t = null === (n = this.vpsConsumerMemberInfo) || void 0 === n ? void 0 : n.itemScan;
                        t && t.length > 1 ? (t.forEach(function(e) {
                            e.curPro = !1, "henanpz" == e.projectServerName ? e.province = "河南省" : "hebei" == e.projectServerName ? e.province = "河北省" : "shandongagt" == e.projectServerName ? e.province = "山东省" : "huanan2022" == e.projectServerName ? e.province = "广东省" : "chongqing" == e.projectServerName ? e.province = "重庆市" : e.province = "";
                        }), this.provinceListArr = t, this.showTipWindow = !0, this.showComfrim = !1) : e.showToast({
                            icon: "none",
                            title: "暂无可切换的省区"
                        });
                    },
                    changePro: function(e) {
                        this.provinceListArr.forEach(function(e) {
                            e.curPro = !1;
                        }), this.provinceListArr[e].curPro = !0, this.provinceListArr.splice();
                    },
                    comfrimShowModel: function(n) {
                        var t = this;
                        return (0, a.default)(o.default.mark(function r() {
                            var i;
                            return o.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    t.showTipWindow = !1, i = t.provinceListArr[n], getApp().globalData.projectServerName != i.projectServerName && (getApp().globalData.curProvince = i || "", 
                                    getApp().globalData.projectServerName = i.projectServerName, getApp().globalData.projectFlag = i.projectFlag, 
                                    getApp().globalData.openid = i.openid, e.setStorageSync("openid", {
                                        openid: i.openid
                                    }), e.setStorageSync("curProvince", i), e.setStorageSync("projectServerName", null == i ? void 0 : i.projectServerName), 
                                    e.setStorageSync("projectFlag", null == i ? void 0 : i.projectFlag), e.showToast({
                                        icon: "none",
                                        title: "切换成功"
                                    }), getApp().globalData.address = "", setTimeout(function() {
                                        e.reLaunch({
                                            url: "/pages/index/index"
                                        });
                                    }, 1e3));

                                  case 3:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    getGiftCardDetailsHandle: function() {
                        var e = this;
                        return (0, a.default)(o.default.mark(function n() {
                            var t, r, i, a;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = {
                                        giftCardQrcode: e.giftCardQrcode
                                    }, n.next = 3, (0, g.getGiftCardDetails)(t);

                                  case 3:
                                    r = n.sent, i = r.result, a = r.reply, 0 == i.businessCode && 0 == i.code ? (e.isShowExchangeCard = !0, 
                                    e.duifukaItem = a) : (e.giftCardQrcode = "", getApp().globalData.giftCardQrcode = "", 
                                    e.isShowExchangeCardErr = !0, e.exchangeCardErr = i.msg);

                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    duifukaShouxia: function() {
                        var n = this;
                        return (0, a.default)(o.default.mark(function t() {
                            var r, i, a;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n.isShowExchangeCard = !1, r = {
                                        giftCardQrcode: n.giftCardQrcode
                                    }, t.next = 4, (0, g.activationGiftCard)(r);

                                  case 4:
                                    i = t.sent, a = i.result, i.reply, 0 == a.businessCode && 0 == a.code ? (n.giftCardQrcode = "", 
                                    getApp().globalData.giftCardQrcode = "", e.navigateTo({
                                        url: "/pagesLipinka/lipinkaList"
                                    })) : e.showToast({
                                        icon: "none",
                                        title: a.msg
                                    });

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    toPonitMall: function() {
                        e.navigateTo({
                            url: "/pagesMall/pointMall/home/home"
                        });
                    }
                }
            };
            n.default = f;
        }).call(this, t("543d").default, t("bc2e").default);
    },
    a8c1: function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {
            return r;
        });
        var r = {
            progressBar: function() {
                return t.e("components/progress-bar/progress-bar").then(t.bind(null, "8a3c"));
            },
            customCallPhone: function() {
                return t.e("components/custom-call-phone/custom-call-phone").then(t.bind(null, "2398"));
            },
            privacy: function() {
                return Promise.all([ t.e("common/vendor"), t.e("components/privacy/privacy") ]).then(t.bind(null, "fc8e"));
            },
            maskTemplate: function() {
                return t.e("components/mask-template/mask-template").then(t.bind(null, "c301"));
            },
            uniPopup: function() {
                return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null, "0dae"));
            }
        }, i = function() {
            var e = this, n = (e.$createElement, e._self._c, Number(e.vpsConsumerMemberInfo.showScanBefore)), t = Number(e.vpsConsumerMemberInfo.showScan), r = Number(e.vpsConsumerMemberInfo.upgradeScan);
            e._isMounted || (e.e0 = function(e) {
                this.isShowPrivacy = !1;
            }, e.e1 = function(n) {
                e.isShowMaskTemplate = !1;
            }, e.e2 = function(e) {
                this.showTipWindow = !1;
            }, e.e3 = function(n) {
                e.isShowExchangeCard = !1;
            }, e.e4 = function(n) {
                e.isShowExchangeCardErr = !1;
            }, e.e5 = function(n) {
                e.isShowExchangeCardErr = !1;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    m0: n,
                    m1: t,
                    m2: r
                }
            });
        }, o = [];
    },
    d2a3: function(e, n, t) {
        t.r(n);
        var r = t("a8c1"), i = t("636c");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(o);
        t("e393");
        var a = t("f0c5"), s = Object(a.a)(i.default, r.b, r.c, !1, null, "3152c9ee", null, !1, r.a, void 0);
        n.default = s.exports;
    },
    e393: function(e, n, t) {
        var r = t("52a1");
        t.n(r).a;
    }
}, [ [ "5449", "common/runtime", "common/vendor" ] ] ]);