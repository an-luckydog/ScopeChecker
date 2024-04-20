(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "6314d": function(t, e, i) {
        var o = i("951d");
        i.n(o).a;
    },
    8069: function(t, e, i) {
        i.r(e);
        var o = i("da67"), n = i.n(o);
        for (var s in o) [ "default" ].indexOf(s) < 0 && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = n.a;
    },
    "951d": function(t, e, i) {},
    b297: function(t, e, i) {
        var o = i("d347");
        i.n(o).a;
    },
    cbccb: function(t, e, i) {
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return s;
        }), i.d(e, "a", function() {
            return o;
        });
        var o = {
            uNoticeBar: function() {
                return i.e("node-modules/uview-ui/components/u-notice-bar/u-notice-bar").then(i.bind(null, "f081"));
            },
            uModal: function() {
                return i.e("node-modules/uview-ui/components/u-modal/u-modal").then(i.bind(null, "078c"));
            }
        }, n = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
    },
    d347: function(t, e, i) {},
    d537: function(t, e, i) {
        (function(t) {
            i("6cdc"), o(i("66fd"));
            var e = o(i("f75a"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = i, t(e.default);
        }).call(this, i("543d").createPage);
    },
    da67: function(t, e, i) {
        (function(t) {
            var o;
            function n(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = {
                name: "Hospital",
                components: {
                    guideAdd: function() {
                        i.e("pages/index/components/guide-add/index").then(function() {
                            return resolve(i("2b83"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    DoctorCard: function() {
                        i.e("components/doctor-card/DoctorCard").then(function() {
                            return resolve(i("8084"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    DragBall: function() {
                        i.e("components/drag-ball/drag-ball").then(function() {
                            return resolve(i("06d4"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                data: function() {
                    return {
                        imgUrl: this.$store.state.env.VUE_APP_RESOURCE_URL,
                        loading: !0,
                        query: {},
                        hsp: {},
                        deptList: [],
                        tipsDialog: {
                            show: !1,
                            type: "",
                            content: ""
                        },
                        forbiddenYibao: !1,
                        bannerList: [],
                        swiperOptions: {
                            indicatorDots: !1,
                            autoplay: !0,
                            circular: !0,
                            acceleration: !0
                        }
                    };
                },
                computed: {
                    isChaoJu: function() {
                        var t, e;
                        return !(null === (t = this.$store.state.app) || void 0 === t || null === (e = t.baseConfig) || void 0 === e || !e.isChaoJu);
                    },
                    isBeiChen: function() {
                        var t, e;
                        return !(null === (t = this.$store.state.app) || void 0 === t || null === (e = t.baseConfig) || void 0 === e || !e.isBeiChen);
                    },
                    hospitalTags: function() {
                        var t, e, i, o = null !== (t = null === (e = this.hsp) || void 0 === e || null === (i = e.nethospitalInfo) || void 0 === i ? void 0 : i.tags) && void 0 !== t ? t : [];
                        return Array.from(new Set(o)).join(" 丨 ");
                    },
                    returnVisitServiceInfo: function() {
                        var t, e, i;
                        return null !== (t = null === (e = this.hsp) || void 0 === e || null === (i = e.hospitalServiceList) || void 0 === i ? void 0 : i.find(function(t) {
                            return "4" == t.serviceLogoId;
                        })) && void 0 !== t ? t : {};
                    },
                    inquryServiceInfo: function() {
                        var t, e, i;
                        return null !== (t = null === (e = this.hsp) || void 0 === e || null === (i = e.hospitalServiceList) || void 0 === i ? void 0 : i.find(function(t) {
                            return "5" == t.serviceLogoId;
                        })) && void 0 !== t ? t : {};
                    },
                    notices: function() {
                        var t, e;
                        if ((null === (t = this.hsp) || void 0 === t || null === (e = t.notices) || void 0 === e ? void 0 : e.length) > 0) {
                            var i, o, n, s, a = null === (i = this.hsp) || void 0 === i || null === (o = i.notices) || void 0 === o ? void 0 : o[0].content.replace(/\n/g, " ");
                            return [ "【" + (null === (n = this.hsp) || void 0 === n || null === (s = n.notices) || void 0 === s ? void 0 : s[0].title) + "】" + a ];
                        }
                        return [];
                    },
                    hospitalServiceList: function() {
                        var t, e, i;
                        return null !== (t = null === (e = this.hsp) || void 0 === e || null === (i = e.hospitalServiceList) || void 0 === i ? void 0 : i.filter(function(t) {
                            return "4" != t.serviceLogoId && "5" != t.serviceLogoId;
                        })) && void 0 !== t ? t : [];
                    }
                },
                onLoad: function() {
                    this.query = {
                        netHospitalId: this.$store.state.env.VUE_APP_ORGID
                    };
                },
                onHide: function() {
                    this.closeForbiddenYibao();
                },
                onShareAppMessage: function() {
                    var t = this.hsp.nethospitalInfo;
                    return {
                        title: t.name,
                        path: "/pages/index/index",
                        imageUrl: t.icon
                    };
                },
                onShow: function() {
                    this.getHospitalInfo(), this.getAdvert(), this.queryEnableFeatureDeptList();
                },
                onPullDownRefresh: function() {
                    this.getHospitalInfo("refresh"), this.getAdvert(), this.queryEnableFeatureDeptList();
                },
                methods: (o = {
                    callPhone: function() {
                        var t, e;
                        this.$util.callPhone(null === (t = this.hsp) || void 0 === t || null === (e = t.hospitalInfo) || void 0 === e ? void 0 : e.phoneNumber);
                    },
                    gotoBriefPage: function() {
                        this.$Router.push({
                            path: "/pages/hospital/brief/index",
                            query: {
                                netHospitalId: this.query.netHospitalId
                            }
                        });
                    },
                    gotoBanner: function(t) {
                        if (!t.contentId) return !1;
                        switch (t.jumpType) {
                          case 1:
                          case 3:
                            this.$Router.push({
                                path: "/pages/hospital/advertisement/index",
                                query: {
                                    jumpUrl: t.jumpUrl
                                }
                            });
                            break;

                          case 2:
                            this.$Router.push({
                                path: t.jumpUrl
                            });
                        }
                    },
                    getHospitalInfo: function(e) {
                        var i = this;
                        this.$util.showLoading(), this.$service.hospital.getHospitalInfos({
                            nethospitalId: this.query.netHospitalId
                        }).then(function(e) {
                            var o, n;
                            i.hsp = e.data || {}, t.setNavigationBarTitle({
                                title: e.data.nethospitalInfo.name
                            });
                            var s = i.$cache.get("forbiddenYibao");
                            null !== (o = i.hsp) && void 0 !== o && null !== (n = o.nethospitalInfo) && void 0 !== n && n.isPopUp && s && (i.forbiddenYibao = !0);
                        }).finally(function() {
                            i.loading = !1, i.$util.hideLoading(), "refresh" == e && i.$util.showToast("刷新成功"), 
                            t.stopPullDownRefresh();
                        });
                    },
                    getAdvert: function() {
                        var t = this, e = {
                            hospitalId: this.query.netHospitalId,
                            displayPosition: 3
                        };
                        this.$service.hospital.getAdvert(e).then(function(e) {
                            t.bannerList = e.data;
                        });
                    },
                    queryEnableFeatureDeptList: function() {
                        var t = this;
                        this.$service.hospital.queryEnableFeatureDeptList({
                            hospitalId: this.query.netHospitalId
                        }).then(function(e) {
                            t.deptList = e.data;
                        });
                    },
                    gotoZoostalk: function() {
                        this.$util.gotoZoostalk();
                    },
                    gotoOptometryMall: function() {
                        this.$util.gotoOptometryMall();
                    },
                    gotoChainService: function() {
                        if (!this.$util.isLogin()) return this.$util.toLogin(), !1;
                        var t = this.hsp.nethospitalInfo.netHospitalId;
                        this.$Router.push({
                            path: "/pages/hospital/chain/list",
                            query: {
                                netHospitalId: t
                            }
                        });
                    },
                    goServicePage: function(t) {
                        var e = this, i = t.serviceName, o = t.serviceLogoId, n = t.isExist, s = this.hsp.nethospitalInfo.netHospitalId, a = this.hsp.nethospitalInfo.name;
                        if (999 === o && this.isChaoJu) return this.gotoZoostalk(), !1;
                        if (998 === o && this.isChaoJu) return this.gotoOptometryMall(), !1;
                        if (997 === o && this.isChaoJu) return this.gotoChainService(), !1;
                        if (2 == n) {
                            switch (o) {
                              case 1:
                                this.tipsDialog.show = !0, this.tipsDialog.type = "appoint", this.tipsDialog.content = '<div style="color:#333;">线下预约挂号功能正在建设中</div>\n<div style="color:#858585;">如需在线复诊请点击“复诊开药”<br/>其他问题请点击“在线问诊”</div>';
                                break;

                              case 2:
                                this.tipsDialog.show = !0, this.tipsDialog.type = "report", this.tipsDialog.content = '<div style="color:#333;"">在线查询报告功能正在建设中</div>\n<div style="color:#858585;">如需在线报告解读，请点击“在线问诊”、“复诊开药”</div>';
                                break;

                              case 4:
                              case 5:
                              default:
                                this.$util.showToast("该功能正在建设中，敬请期待");
                            }
                            return !1;
                        }
                        switch (o) {
                          case 3:
                          case 1:
                            this.$util.showToast("该功能正在建设中，敬请期待");
                            break;

                          case 4:
                            this.gotoReturnVisitDept();
                            break;

                          case 5:
                            this.gotoInquiryDoctorList();
                            break;

                          case 2:
                            this.$Router.push({
                                path: "/pages/report/query/index",
                                query: {
                                    hospitalName: a,
                                    netHospitalId: s,
                                    banHsp: !0,
                                    title: i,
                                    type: "view"
                                }
                            });
                            break;

                          case 6:
                            this.$util.showToast("该功能正在建设中，敬请期待");
                            break;

                          case 7:
                            var r = {
                                netHospitalId: s
                            };
                            this.$Router.push({
                                path: "/pages/diagnose/diagnoseSelectBody",
                                query: r
                            });
                            break;

                          case 8:
                            this.$util.showToast("该功能正在建设中，敬请期待");
                            break;

                          case 9:
                            this.$Router.push({
                                path: "/pages/registration/department/list",
                                query: {
                                    type: "select",
                                    page: "appoint"
                                }
                            });
                            break;

                          case 10:
                            this.$Router.push({
                                path: "/pages/registration/department/list",
                                query: {
                                    type: "select",
                                    page: "register"
                                }
                            });
                            break;

                          case 11:
                            this.$Router.push({
                                path: "/pages/patient/list",
                                query: {
                                    type: "select",
                                    page: "payment"
                                }
                            });
                            break;

                          case 12:
                            this.$Router.push({
                                path: "/pages/patient/list",
                                query: {
                                    type: "select",
                                    page: "nucleic"
                                }
                            });
                            break;

                          case 13:
                            this.$util.isLogin() ? (this.$util.showLoading(), this.$service.user.getAddressLists().then(function() {
                                e.$service.mall.getOpenMallUrl({
                                    mobile: e.$store.state.user.userInfo.tel
                                }).then(function(t) {
                                    var i = t.data;
                                    i ? e.$Router.push({
                                        path: "/pages/mall/open-mall/index",
                                        query: {
                                            pageType: "index",
                                            url: i
                                        }
                                    }) : e.$util.showToast("特色服务异常");
                                }).finally(function() {
                                    e.$util.hideLoading();
                                });
                            }).catch(function() {
                                e.$util.hideLoading();
                            })) : this.$util.toLogin();
                            break;

                          default:
                            this.$util.showToast("该功能正在建设中，敬请期待");
                        }
                    },
                    gotoReturnVisitDept: function() {
                        var t = this.hsp.nethospitalInfo.netHospitalId;
                        this.$Router.push({
                            path: "/pages/hospital/visitPrescription/hospitalHomeDept",
                            query: {
                                hospitalId: t
                            }
                        });
                    },
                    gotoInquiryDoctorList: function() {
                        var t = this.hsp.nethospitalInfo.netHospitalId;
                        this.$Router.push({
                            path: "/pages/doctor/list/list",
                            query: {
                                netHospitalId: t,
                                serviceType: "inquiry"
                            }
                        });
                    },
                    goDeptPage: function() {
                        var t = {
                            netHospitalId: this.hsp.nethospitalInfo.netHospitalId
                        };
                        this.$Router.push({
                            path: "/pages/hospital/department/hospitalHomeDept",
                            query: t
                        });
                    },
                    goDoctorListPage: function(t) {
                        var e = {
                            netHospitalId: this.hsp.nethospitalInfo.netHospitalId,
                            deptId: t.parentCode ? t.parentCode : t.code,
                            childDeptId: t.parentCode ? t.code : ""
                        };
                        this.$Router.push({
                            path: "/pages/doctor/list/list",
                            query: e
                        });
                    }
                }, n(o, "callPhone", function() {
                    var t, e;
                    this.$util.callPhone(null === (t = this.hsp) || void 0 === t || null === (e = t.nethospitalInfo) || void 0 === e ? void 0 : e.phoneNumber);
                }), n(o, "goHspListNotices", function() {
                    this.$Router.push({
                        path: "/pages/hospital/notice/hospitalListNotices",
                        query: this.query
                    });
                }), n(o, "goHospitalHomeNotice", function() {
                    0 != this.hsp.notices.length && this.$Router.push({
                        path: "/pages/hospital/notice/hospitalHomeNotice",
                        query: {
                            id: this.hsp.notices[0].id
                        }
                    });
                }), n(o, "goStarDoctorListPage", function() {
                    var t = {
                        netHospitalId: this.hsp.nethospitalInfo.netHospitalId
                    };
                    this.$Router.push({
                        path: "/pages/doctor/list/list",
                        query: t
                    });
                }), n(o, "forbiddenYibaoCallPhone", function() {
                    this.$util.callPhone(this.hsp.nethospitalInfo.phoneNumber), this.closeForbiddenYibao();
                }), n(o, "closeForbiddenYibao", function() {
                    this.$cache.set("forbiddenYibao", !1), this.forbiddenYibao = !1;
                }), o)
            };
            e.default = s;
        }).call(this, i("543d").default);
    },
    f75a: function(t, e, i) {
        i.r(e);
        var o = i("cbccb"), n = i("8069");
        for (var s in n) [ "default" ].indexOf(s) < 0 && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(s);
        i("b297"), i("6314d");
        var a = i("f0c5"), r = Object(a.a)(n.default, o.b, o.c, !1, null, "bb05456e", null, !1, o.a, void 0);
        e.default = r.exports;
    }
}, [ [ "d537", "common/runtime", "common/vendor" ] ] ]);