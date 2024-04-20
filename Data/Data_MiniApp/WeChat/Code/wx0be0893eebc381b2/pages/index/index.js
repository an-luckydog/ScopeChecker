var t, a, e, n = require("../../@babel/runtime/helpers/interopRequireDefault").default, i = require("../../@babel/runtime/helpers/defineProperty"), o = require("../../@babel/runtime/helpers/regeneratorRuntime"), s = require("../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../@babel/runtime/helpers/objectSpread2"), d = n(require("../../utils/tools.js")), c = n(require("../../utils/wxUtils.js")), u = getApp(), g = require("../../utils/util.js");

Page((i(t = {
    data: {
        paramValue: u.paramValue,
        name: "啦啦啦啦",
        title: "选择类型",
        schedule: !1,
        ddfda1: !1,
        bbg: 0,
        updata: !1,
        content_lsit: [],
        up_num: u.up_num,
        times: u.times,
        siji_miss: !0,
        ddd: !0,
        top_left_dian: !1,
        circular: !0,
        current33: 4,
        vocabulary: "",
        study_time: 0,
        days_time: 0,
        tiem_data: 0,
        unlock: !0,
        ddfda2: !1,
        ddfda3: !1,
        current: 10,
        formid: [],
        week_m: [],
        current1: 0,
        reqs: 0,
        ccfr: "0",
        isConnected: !0,
        deblocking: !0,
        failed: !1,
        networkType: u.networkType,
        platform: u.platform(),
        accredit: !0,
        tissue: !0,
        fds: !0,
        bgs: 0,
        card: !0,
        practiceCount: "",
        attenyion: !0,
        weixin: "",
        userInfo: {
            avatarUrl: "",
            nickName: "未登录"
        },
        user: {
            restNum: 0,
            signDays: 0,
            totalLearnedNum: 0,
            progressStatus: 0,
            todayNum: 0,
            learnedNum: 0,
            restDays: 0,
            rank: 0
        },
        time_shi: [ {
            h: "23"
        }, {
            h: "00"
        }, {
            h: "01"
        }, {
            h: "02"
        }, {
            h: "03"
        }, {
            h: "04"
        }, {
            h: "05"
        }, {
            h: "06"
        }, {
            h: "07"
        }, {
            h: "08"
        }, {
            h: "09"
        }, {
            h: "10"
        }, {
            h: "11"
        }, {
            h: "12"
        }, {
            h: "13"
        }, {
            h: "14"
        }, {
            h: "15"
        }, {
            h: "16"
        }, {
            h: "17"
        }, {
            h: "18"
        }, {
            h: "19"
        }, {
            h: "20"
        }, {
            h: "21"
        }, {
            h: "22"
        } ],
        time_fen: [ {
            m: "50"
        }, {
            m: "00"
        }, {
            m: "10"
        }, {
            m: "20"
        }, {
            m: "30"
        }, {
            m: "40"
        } ],
        week: [ {
            nums: "一",
            sdd: !1,
            numday: 1
        }, {
            nums: "二",
            sdd: !1,
            numday: 2
        }, {
            nums: "三",
            sdd: !1,
            numday: 3
        }, {
            nums: "四",
            sdd: !1,
            numday: 4
        }, {
            nums: "五",
            sdd: !1,
            numday: 5
        }, {
            nums: "六",
            sdd: !1,
            numday: 6
        }, {
            nums: "日",
            sdd: !1,
            numday: 7
        } ],
        activity: null,
        activityUsers: null,
        curId: null,
        activityUserAnimateData: null,
        hideAnimationTime: 0,
        animateGetDataTime: 0,
        importantMessage: null,
        showImportantMessage: !1,
        importantMessageToggle: !1,
        orderRedDot: !1,
        course: null,
        thumbsUp: null,
        isIndex: 0,
        advertisement: null,
        onAd: !1,
        countTimer: null,
        isShow: !1,
        organization: "",
        hasAd: !1,
        id: "",
        alertShow: !1,
        popShow: !1,
        showTips: !0,
        bookId: null,
        showLoginBox: !1
    },
    onLoad: function(t) {
        var e, n, i;
        if (t.q) {
            var o = g.duiaURIdecode(t.q);
            e = g.getUrlParam(o, "id"), n = g.getUrlParam(o, "n"), i = g.getUrlParam(o, "t");
        }
        a = this, u.opns = 0, u.pagesInit(), a.top_to(), u.backgroundAudioManager.stop(), 
        u.backgroundAudioManager.onStop(function(t) {}), wx.getStorageSync("signoffTime") || wx.setStorageSync("signoffTime", 15758208e5), 
        wx.getStorageSync("showTips") && this.setData({
            showTips: !1
        });
        var s = wx.getStorageSync("orderedRedDot") || 0, d = wx.getStorageSync("classRedDot") || 0;
        a.setData({
            orderRedDot: s || d
        }), u.post_ajax("/common/getParams", {
            appType: 6
        }, function(t) {
            if (200 == t.statusCode) {
                var e = t.data.resInfo, n = function() {
                    if ("tissue" === e[i].paramKey && a.setData({
                        organization: e[i].paramValue.replace(/\\n/g, "\n")
                    }), "ruleWechat" === e[i].paramKey && a.setData({
                        weixin: e[i].paramValue
                    }), "paramValue" == e[i].paramKey && (e[i].paramValue == a.data.paramValue ? (a.setData({
                        siji_miss: !1,
                        ccmd: 1
                    }), wx.setStorageSync("you_is_show", !1)) : wx.setStorageSync("you_is_show", !0)), 
                    "courseId" === e[i].paramKey && 0 !== e[i].paramValue) {
                        var t = e[i].paramValue;
                        u.post_ajax_course("/commodity/commodityBaseById", {
                            id: e[i].paramValue
                        }, function(e) {
                            if (0 !== e.data.state) return !1;
                            var n = e.data.resInfo;
                            a.setData({
                                course: r(r({
                                    id: t
                                }, n), {}, {
                                    comCover: u.p_url + "/" + n.coverUrlThree
                                })
                            });
                        }, 2);
                    }
                };
                for (var i in e) n();
            }
        }, 2), a.load = !0;
        var c = wx.getStorageSync("sku_id"), l = wx.getStorageSync("sku_name"), f = wx.getLaunchOptionsSync().scene;
        if (wx.setStorageSync("scene", f), e && n && i) {
            if (wx.setStorageSync("sku_id", e), wx.setStorageSync("sku_name", n), wx.setStorageSync("book_type", parseInt(i)), 
            a.setData({
                bookId: e,
                title: n
            }), !u.get_open_id() || "" === u.get_open_id()) return a.setData({
                showLoginBox: !0
            }), !1;
            a.setData({
                showLoginBox: !1
            }), a.saveQrBook();
        } else {
            if (!(l && null !== l && "" !== l && c > 0)) return wx.redirectTo({
                url: "classify"
            }), !1;
            a.setData({
                title: l
            });
        }
        a.initActivity(), a.getAd(), a.getData(), u.showLoading("加载中..."), console.log("nnnnnnnnnnnn", u.accredit), 
        a.setData({
            accredit: u.accredit
        }), a.book_init(), wx.getNetworkType({
            success: function(t) {
                if (a.setData({
                    networkType: t.networkType
                }), "none" == t.networkType) return !1;
            }
        });
    },
    onReady: function() {
        wx.onNetworkStatusChange(function(t) {
            t.networkType && a.setData({
                networkType: t.networkType,
                isConnected: t.isConnected
            });
        });
    },
    onShow: function() {
        var t = this, e = new Date().setHours(0, 0, 0, 0);
        if (e !== wx.getStorageSync("signoffTime") && wx.getStorageSync("open_id") && (wx.setStorageSync("signoffTime", e), 
        this.setData({
            alertShow: !0
        })), u.backgroundAudioManager.stop(), u.backgroundAudioManager.onStop(function(t) {}), 
        this.setData({
            showMsg: !1
        }, function() {
            setTimeout(function() {
                t.setData({
                    showMsg: !0
                });
            }, 1e3);
        }), a.load) return a.load = !1, !1;
        a.top_to();
        var n = wx.getStorageSync("orderedRedDot") || 0, i = wx.getStorageSync("classRedDot") || 0;
        wx.getStorageSync("userId");
        a.setData({
            orderRedDot: n || i
        }), a.setData({
            networkType: u.networkType
        });
        var o = wx.getStorageSync("sku_id"), s = wx.getStorageSync("sku_name");
        if (!(s && null !== s && "" !== s && o > 0 && 0 != u.get_open_id())) return a.data.bookId || wx.redirectTo({
            url: "classify"
        }), !1;
        a.setData({
            title: s
        }), u.showLoading("加载中..."), setTimeout(function() {
            a.initActivity(), a.book_init(), a.getAd();
        }, 200);
    },
    handleGetUserInfo: function(t) {
        var e = this;
        return s(o().mark(function t() {
            return o().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, u.getUserProfile();

                  case 2:
                    u.showLoading("加载中..."), u.hideLoading(), e.saveQrBook(), e.book_init(), e.initActivity(), 
                    e.getAd(), e.getData(), e.setData({
                        opns: u.opns,
                        showLoginBox: !1
                    }), a.loader();

                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    saveQrBook: function() {
        u.post_ajax("/word/qr-book", {
            bookId: wx.getStorageSync("sku_id")
        }, function(t) {});
    },
    goLogin: function() {
        d.default.goLogin();
    },
    onHide: function() {
        this.setData({
            showMsg: !1
        });
        var t = this.data, e = t.hideAnimationTime, n = t.animateGetDataTime;
        clearTimeout(e), clearTimeout(n), clearInterval(a.data.countTimer), this.setData({
            activityUsers: null,
            curId: null
        }), wx.setStorageSync("repeat_gzh_k", 1);
    },
    onUnload: function() {
        this.setData({
            showMsg: !1
        }), a = null;
    },
    loader: function(t) {
        var e = wx.getStorageSync("sku_id"), n = wx.getStorageSync("sku_name"), i = wx.getStorageSync("userInfo");
        if (!(n && null !== n && "" !== n && e > 0 && 0 != u.get_open_id())) return wx.redirectTo({
            url: "classify"
        }), !1;
        if (a.setData({
            title: n
        }), i && "" !== i) {
            var o = a.data.userInfo;
            o.avatarUrl = i.avatarUrl, o.nickName = i.nickName, a.setData({
                userInfo: o
            });
        }
        u.post_ajax("/user/homepage", {
            bookId: e
        }, function(t) {
            if (200 == t.statusCode) if (0 == t.data.state) u.hideLoading(), setTimeout(function() {
                1 == u.repeat() && 0 == u.repeat_md() ? (a.setData({
                    ddfda1: !0
                }), a.time_bu(), wx.setStorageSync("repeat_md", 1)) : 2 == u.repeat() && 0 == u.repeat_cd() && (a.setData({
                    ddfda2: !0
                }), wx.setStorageSync("repeat_cd", 1));
            }, 800), t.data.resInfo.dayConfig && wx.setStorageSync("taday_word", t.data.resInfo.dayConfig), 
            u.repeat_gzh() > 0 || 1 != u.repeat_gzhkk() || (a.setData({
                ddfda3: !0
            }), wx.setStorageSync("repeat_gzh", 1)), a.setData({
                reqs: 0,
                failed: !1
            }), t.data.resInfo && (a.setData({
                user: t.data.resInfo,
                practiceCount: t.data.resInfo.practiceCount
            }), t.data.resInfo && (t.data.resInfo.clock || 0 != u.get_red_spot() ? (wx.setStorageSync("clock_p", 0), 
            a.setData({
                top_left_dian: !1
            })) : (wx.setStorageSync("clock_p", 1), a.setData({
                top_left_dian: !0
            })))), a.gmmf(); else if (-4 == t.data.state) u.hideLoading(), wx.showToast({
                title: "本书没有单词，请重新选择其他书籍",
                icon: "none",
                duration: 2e3
            }), setTimeout(function() {
                wx.redirectTo({
                    url: "classify"
                });
            }, 2e3); else {
                if (a.setData({
                    reqs: a.data.reqs + 1
                }), a.data.reqs > 2) return a.setData({
                    reqs: 0,
                    failed: !0
                }), !1;
                u.showLoading("加载中..."), a.loader();
            } else {
                if (a.setData({
                    reqs: a.data.reqs + 1
                }), a.data.reqs > 2) return a.setData({
                    reqs: 0,
                    failed: !0
                }), !1;
                u.showLoading("加载中..."), a.loader();
            }
        }, 4), wx.hideNavigationBarLoading();
    },
    gmmf: (e = s(o().mark(function t() {
        return o().wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (0 == u.get_open_id()) {
                    t.next = 2;
                    break;
                }
                return t.abrupt("return", !1);

              case 2:
                if (!(a.data.bgs > 0 || a.data.bbg > 2)) {
                    t.next = 4;
                    break;
                }
                return t.abrupt("return", !1);

              case 4:
                return a.setData({
                    bgs: a.data.bgs + 1
                }), t.prev = 5, t.next = 8, u.getUserProfile();

              case 8:
                t.sent, a.setData({
                    bbg: 0
                }), t.next = 16;
                break;

              case 12:
                t.prev = 12, t.t0 = t.catch(5), a.setData({
                    bgs: 0,
                    bbg: a.data.bbg + 1
                }), a.gmmf();

              case 16:
              case "end":
                return t.stop();
            }
        }, t, null, [ [ 5, 12 ] ]);
    })), function() {
        return e.apply(this, arguments);
    }),
    usercentnr: function(t) {
        wx.navigateTo({
            url: "../mine/mine?ids=100"
        });
    },
    select: function(t) {
        c.default.requestSubscribeMessage([ "l7juIDsJmOVZktmNfzzjLZ_gmxfOKyWl-EoN9PtywVo", "v9D_2-d49QyZNsJtQ0Bl_AD490uIRUByCaM00Ihtg2c", "uXstS1dlyGCZLWWckzvHKo1g0N04wL0i5s7zOWKIK-k" ]), 
        wx.navigateTo({
            url: "/pages/index/classify"
        });
    },
    stydy: function() {
        var t = this;
        u.mta.Event.stat("home_start_learning", {}), getApp().mtj.trackEvent("home_start_learning");
        if (console.log(t.data.user.lastGrou), t.data.user.lastGroup) return t.setData({
            fds: !1
        }), !1;
        if (t.data.user.needShare) return t.setData({
            unlock: !1
        }), !1;
        function a() {
            wx.navigateTo({
                url: "../../answer/answer/answer?practiceCount=" + t.data.practiceCount + "&inx=33"
            });
        }
        1 === t.data.joinStatus ? c.default.requestSubscribeMessage([ "JkXs2ErptgfNLI2ZhqtqpznH4gUs5Gdg-yPITm_ogZA", "uBFYpj9PsXcO_hEHniysM7I5uSiISj0EZzQWfI6LaII", "aING51DIVZYTuO8EsIBQxSvIpiiEE40bap-EayeuZuA" ]).then(function(t) {
            a();
        }, function(t) {
            a();
        }) : a();
    },
    ranking: function() {
        u.mta.Event.stat("click_ranking_today", {}), getApp().mtj.trackEvent("click_ranking_today"), 
        wx.navigateTo({
            url: "../../ranking/ranking"
        });
    },
    society: function() {
        a.setData({
            attenyion: !1
        }), u.mta.Event.stat("click_true_data", {}), getApp().mtj.trackEvent("click_true_data"), 
        u.post_ajax("/user/clickEvent", {
            type: 1
        }, function(t) {
            t.data.resInfo && a.setData({
                ccfr: t.data.resInfo
            });
        }, 4);
    },
    wordlist: function() {
        u.mta.Event.stat("click_word_book", {}), getApp().mtj.trackEvent("click_word_book"), 
        wx.navigateTo({
            url: "../../answer/wordlist/wordlist"
        });
    },
    jiesuo: function() {
        a.setData({
            deblocking: !1
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), a.loader(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 2e3);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = wx.getStorageSync("sku_id"), e = a.data.user;
        return a.data.user.needShare && u.post_ajax("/share/success", {
            bookId: t
        }, function(t) {
            0 == t.data.state && (e.wordLock = !1, e.needShare = !1, a.setData({
                deblocking: !0,
                mtss: !0,
                user: e
            }), a.word_init());
        }, 4), {
            title: "超牢固的背单词方法",
            path: "/pages/index/index",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    dianji: function() {
        u.accredit = !0, a.setData({
            accredit: !0
        });
    },
    book_init: function() {
        var t = wx.getStorageSync("sku_id");
        this.getImportantMessage(function(e) {
            setTimeout(function() {
                u.post_ajax("/book/init", {
                    bookId: t
                }, function(t) {
                    200 == t.statusCode ? (a.loader(), t.data.resInfo && t.data.resInfo.first && !e && a.vocabulary()) : (u.hideLoading(), 
                    a.setData({
                        reqs: 0,
                        failed: !0
                    }));
                }, 4);
            }, 300);
        });
    },
    word_init: function() {
        var t = wx.getStorageSync("sku_id");
        u.post_ajax("/word/initWord", {
            bookId: t,
            wordNum: u.taday_word()
        }, function(t) {
            if (200 == t.statusCode) {
                var e = a.data.user;
                e.todayNum = t.data.resInfo, a.setData({
                    user: e
                }), wx.navigateTo({
                    url: "../../answer/answer/answer?practiceCount=" + a.data.practiceCount + "&inx=33"
                });
            } else u.hideLoading(), a.setData({
                reqs: 0,
                failed: !0
            });
        }, 4);
    },
    ksa: function() {
        wx.navigateTo({
            url: "../../answer/account/account"
        });
    },
    card: function() {
        a.setData({
            card: !1
        });
    },
    daka: function() {
        a.setData({
            card: !0
        });
    },
    daka_l: function() {
        a.setData({
            attenyion: !0
        }), wx.setClipboardData({
            data: a.data.ccfr.message,
            success: function(t) {
                wx.getClipboardData({
                    success: function(t) {
                        wx.showToast({
                            icon: "none",
                            title: "微信号已复制",
                            duration: 2e3
                        });
                    }
                });
            }
        });
    },
    qu_xiao: function() {
        a.setData({
            tissue: !0,
            card: !0,
            attenyion: !0,
            fds: !0
        });
    },
    failed: function() {
        u.showLoading("加载中..."), a.book_init();
    },
    qiehuan: function() {
        wx.navigateTo({
            url: "classify"
        }), a.setData({
            fds: !0
        });
    },
    zaisubmit: function() {
        var t = wx.getStorageSync("sku_id");
        u.post_ajax("/book/reset", {
            bookId: t
        }, function(t) {
            0 == t.data.state && (a.setData({
                fds: !0
            }), a.book_init(), a.word_init());
        }, 4);
    },
    tan_fu: function() {
        a.data.weixin && a.data.organization && a.setData({
            tissue: !1
        }), u.mta.Event.stat("click_vehicle", {}), getApp().mtj.trackEvent("click_vehicle");
    },
    fuzhi: function() {
        wx.setClipboardData({
            data: a.data.weixin,
            success: function(t) {
                wx.getClipboardData({
                    success: function(t) {
                        a.setData({
                            tissue: !0
                        }), wx.showToast({
                            icon: "none",
                            title: "复制成功",
                            duration: 2e3
                        });
                    }
                });
            }
        });
    },
    zedangs: function() {
        a.setData({
            deblocking: !0
        });
    },
    formSubmit: function(t) {},
    clickEvent: function(t) {
        u.post_ajax("/user/clickEvent", {
            type: t.currentTarget.dataset.id
        }, function(t) {}, 4), u.mta.Event.stat("click_cet", {}), getApp().mtj.trackEvent("click_cet");
    },
    clickEvent_cd: function(t) {
        wx.navigateToMiniProgram({
            appId: "wx273e7f8a66243ded"
        });
    },
    ddfda1: function() {
        a.setData({
            ddfda1: !1
        }), wx.setStorageSync("repeat_md", 1);
    },
    ddfda2: function() {
        a.setData({
            ddfda2: !1
        }), wx.setStorageSync("repeat_cd", 1);
    },
    current: function(t) {
        a.setData({
            current: t.detail.current
        });
    },
    current33: function(t) {
        a.setData({
            current33: t.detail.current
        }), a.vocabulary_data(a.data.current33, a.data.user.restNum);
    },
    current2: function(t) {
        a.setData({
            current1: t.detail.current
        });
    },
    gaunbi: function() {
        a.setData({
            ddfda1: !1
        }), wx.setStorageSync("repeat_md", 1);
    }
}, "current2", function(t) {
    a.setData({
        current1: t.detail.current
    });
}), i(t, "week_xuan", function(t) {
    var e = t.currentTarget.dataset.index, n = a.data.week;
    if (n[e].sdd) {
        n[e].sdd = !1, a.setData({
            week: n
        });
        var i = a.data.week_m, o = a.data.formid, s = i.indexOf(n[e].numday);
        i.splice(s, 1), o.splice(e, 1), a.setData({
            week_m: i,
            formid: o
        });
    } else {
        n[e].sdd = !0, a.setData({
            week: n
        });
        var r = a.data.formid;
        r.push(t.detail.formId), a.setData({
            formid: r
        });
    }
}), i(t, "formSubmit_c", function(t) {
    u.showLoading("加载中...");
    for (var e = a.data.formid, n = [], i = 0; i < a.data.week.length; i++) 1 == a.data.week[i].sdd && n.push(a.data.week[i].numday);
    e.push(t.detail.formId);
    var o = {
        formIdList: e,
        dayList: n,
        hour: a.data.current,
        minute: 10 * a.data.current1
    };
    u.post_ajax("/user/setClock", o, function(t) {
        0 == t.data.state && (u.hideLoading(), n && "" != n ? (wx.showToast({
            title: "保存成功",
            icon: "none",
            duration: 1500
        }), u.mta.Event.stat("home_remind_preservation", {}), getApp().mtj.trackEvent("home_remind_p"), 
        setTimeout(function() {
            a.setData({
                ddfda1: !1
            });
        }, 500)) : (wx.showToast({
            title: "取消成功",
            icon: "none",
            duration: 1500
        }), setTimeout(function() {
            a.setData({
                ddfda1: !1
            });
        }, 500)), wx.setStorageSync("repeat_md", 1), wx.setStorageSync("red_spot", 1), a.setData({
            top_left_dian: !1
        }));
    }, 4);
}), i(t, "time_bu", function() {
    u.post_ajax("/user/getClock", {
        openId: u.get_open_id()
    }, function(t) {
        if (0 == t.data.state) if (t.data.resInfo && null != t.data.resInfo && t.data.resInfo.weekList) {
            if (t.data.resInfo.hour >= 0 && t.data.resInfo.minute >= 0 && a.setData({
                current: t.data.resInfo.hour,
                current1: t.data.resInfo.minute / 10
            }), t.data.resInfo.weekList) {
                for (var e = t.data.resInfo.weekList, n = a.data.week, i = 0; i < e.length; i++) for (var o = 0; o < n.length; o++) e[i] == n[o].numday && (n[o].sdd = !0);
                a.setData({
                    week: n
                });
            }
        } else {
            var s = new Date(), r = s.getDay();
            0 == r && (r = 7);
            var d = a.data.week;
            for (i = 0; i < d.length; i++) d[i].numday == s.getDay() && (7 == i ? d[0].sdd = !0 : d[i + 1].sdd = !0);
            a.setData({
                week: d
            });
        }
    }, 4);
}), i(t, "cl_up", function() {
    a.setData({
        updata: !1
    }), wx.setStorageSync("updata", 1);
}), i(t, "dddd", function() {
    a.setData({
        ddd: !1
    });
}), i(t, "ddfda3", function() {
    a.setData({
        ddfda3: !1
    });
}), i(t, "top_to", function() {
    wx.pageScrollTo({
        scrollTop: 0,
        duration: 0
    });
}), i(t, "ggggg", function() {}), i(t, "test", function() {}), i(t, "plan", function(t) {
    u.showLoading("加载中..."), a.vocabulary(), u.mta.Event.stat("click_study", {
        "001": "true"
    }), getApp().mtj.trackEvent("click_study");
}), i(t, "jihua_cl", function() {
    a.setData({
        schedule: !1
    });
}), i(t, "vocabulary", function() {
    u.post_ajax("/plan/find", {
        bookId: u.get_sku_id()
    }, function(t) {
        if (0 == t.data.state) {
            u.hideLoading(), a.setData({
                schedule: !0
            });
            var e = t.data.resInfo;
            null != e && e.wordNum && a.setData({
                current33: e.wordNum / 10 - 1
            });
            for (var n = [], i = 0; i < 30; i++) {
                var o = 10 * i + 10;
                n.push(o);
            }
            var s = n[29];
            n.splice(29, 1), n.unshift(s), a.setData({
                vocabulary: n
            }), a.vocabulary_data(a.data.current33, a.data.user.restNum);
        } else wx.showToast({
            title: "加载失败，请重试",
            icon: "none",
            duration: 1800
        });
    }, 4);
}), i(t, "vocabulary_data", function(t, e) {
    var n = .01 * (10 * t + 10), i = Math.ceil(e / (10 * t + 10)), o = new Date(Date.parse(new Date()) + 24 * i * 3600 * 1e3), s = {};
    s.mmc = o.getMonth() + 1 >= 10 ? o.getMonth() + 1 : "0" + (o.getMonth() + 1), s.mmd = o.getDate() >= 10 ? o.getDate() : "0" + o.getDate();
    var r = "";
    n.toFixed(1) >= 1 ? (a.setData({
        hous: !0
    }), r = n.toFixed(1)) : 60 * n.toFixed(1) > 10 ? (a.setData({
        hous: !1
    }), r = 60 * n.toFixed(1)) : (a.setData({
        hous: !1
    }), r = "0" + 60 * n.toFixed(1)), a.setData({
        study_time: r,
        days_time: i,
        tiem_data: s
    });
}), i(t, "jihua_button", function(t) {
    c.default.requestSubscribeMessage([ "2FPQMU9xJT3DqHuClE93pzvqQIUpIJKqjTq9dfIvhz4", "uXstS1dlyGCZLWWckzvHKo1g0N04wL0i5s7zOWKIK-k" ]).then(function(t) {}), 
    u.post_ajax("/plan/save", {
        bookId: u.get_sku_id(),
        wordNum: 10 * (a.data.current33 + 1)
    }, function(t) {
        0 == t.data.state ? (a.setData({
            schedule: !1
        }), u.mta.Event.stat("preservation_study", {
            1: 10 * (a.data.current33 + 1)
        }), getApp().mtj.trackEvent("preservation_study", {
            time: 10 * (a.data.current33 + 1)
        }), setTimeout(function() {
            wx.showToast({
                title: "计划将于次日生效",
                icon: "none",
                duration: 1800
            });
        }, 400)) : wx.showToast({
            title: "保存失败，请重试",
            icon: "none",
            duration: 1800
        });
    }, 4);
}), i(t, "gggg", function() {
    wx.navigateTo({
        url: "dd/dd",
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
    });
}), i(t, "unlock_d", function() {
    a.word_init(), a.setData({
        unlock: !0
    });
}), i(t, "bbbbbbbb", function() {
    a.setData({
        ddfda1: !0
    });
}), i(t, "initActivity", function() {
    this.getActivityData(), this.animation || (this.animation = wx.createAnimation({
        duration: 300
    })), this.animation.opacity(0).step(), this.setData({
        activityUsers: null,
        curId: null,
        activityUserAnimateData: this.animation.export()
    });
}), i(t, "getActivityData", function() {
    var t = this;
    u.post_ajax("/activity/detailNew", {
        at: 0
    }, function(a) {
        var e = a.data.resInfo;
        e && e.length > 0 && e.map(function(a) {
            switch (a.type) {
              case 0:
                t.setData({
                    activity: a
                }, function() {
                    t.getActivityUsers();
                });
                break;

              case 1:
                t.setData({
                    thumbsUp: a
                });
            }
        });
    });
}), i(t, "getActivityUsers", function() {
    var t = this, a = this.data, e = a.activity, n = a.curId;
    if (e) {
        var i = {
            aid: e.id
        };
        n && (i.curId = n), u.post_ajax("/activity/success-next", i, function(a) {
            var e = a.data.resInfo;
            e && (t.setData({
                curId: e.successId,
                activityUsers: e
            }), t.activityUserAnimate());
        });
    }
}), i(t, "activityUserAnimate", function() {
    var t = this;
    this.animation || (this.animation = wx.createAnimation({
        duration: 300
    })), this.animation.opacity(1).step(), this.setData({
        hideAnimationTime: setTimeout(function() {
            t.animation.opacity(0).step(), t.setData({
                animateGetDataTime: setTimeout(t.getActivityUsers, 2300),
                activityUserAnimateData: t.animation.export()
            });
        }, 2300),
        activityUserAnimateData: this.animation.export()
    });
}), i(t, "goActivityDetail", function(t) {
    var a = t.currentTarget.dataset;
    a.id && (getApp().mtj.trackEvent("handle_enter_activity"), u.post_ajax("/statistics/click", {
        aid: a.id,
        code: "activity_index"
    }, function(t) {}), wx.navigateTo({
        url: "/activity/index?aid=".concat(a.id)
    }));
}), i(t, "getImportantMessage", function(t) {
    var e = this;
    wx.getStorageSync("sku_id");
    u.post_ajax_course("/appJpushMessage/getNewPushMessage", {
        appType: "40",
        skuId: 4
    }, function(n) {
        var i = n.data, o = wx.getStorageSync("closeedMessage") || 0, s = wx.getStorageSync("closeedMessageDate") || 0, d = !1;
        if (i.resInfo) {
            var c = !1;
            u.updatas && 0 == u.updata() ? (u.content_lsit && a.setData({
                content_lsit: u.content_lsit
            }), u.times && a.setData({
                times: u.times
            }), u.up_num && a.setData({
                up_num: u.up_num
            }), c = !0, a.setData({
                updata: !0
            })) : a.setData({
                updata: !1
            }), o === i.resInfo.id || c ? s === u.get_year_month_day_gang(Date.now()) || o != i.resInfo.id || c || (d = !0, 
            e.setData({
                showImportantMessage: !0,
                importantMessageToggle: !0
            }), wx.setStorageSync("closeedMessageDate", u.get_year_month_day_gang(Date.now()))) : (d = !0, 
            e.setData({
                showImportantMessage: !0,
                importantMessageToggle: !0
            }), wx.setStorageSync("closeedMessage", i.resInfo.id), wx.setStorageSync("closeedMessageDate", u.get_year_month_day_gang(Date.now()))), 
            e.setData({
                importantMessage: r(r({}, i.resInfo), {}, {
                    image: "".concat(u.p_url).concat(i.resInfo.image)
                })
            });
        }
        "function" == typeof t && t(d);
    }, 1, null, function() {
        "function" == typeof t && t();
    });
}), i(t, "handleGoMessageDetail", function(t) {
    var a = this, e = this.data.importantMessage;
    switch (setTimeout(function() {
        a.setData({
            importantMessageToggle: !1
        });
    }, 100), e.type) {
      case 4:
      case 8:
        wx.navigateTo({
            url: e.typeContent
        }), getApp().mtj.trackEvent("on_lottery_in_modal"), getApp().mtj.trackEvent("handle_important_message");
        break;

      case 3:
        wx.navigateTo({
            url: "/commodity/index/detail?id=".concat(e.typeContent)
        }), getApp().mtj.trackEvent("handle_important_message");
        break;

      default:
        console.log("其他类型暂不支持");
    }
}), i(t, "handleClose", function() {
    this.setData({
        importantMessageToggle: !1
    });
}), i(t, "goCourse", function(t) {
    getApp().mtj.trackEvent("handle_index_goods"), wx.navigateTo({
        url: "/commodity/index/detail?id=" + t.currentTarget.dataset.id + "&enrollNum=" + t.currentTarget.dataset.enrollnum
    });
}), i(t, "pickBtn", function() {
    this.data.thumbsUp ? (getApp().mtj.trackEvent("handle_thumbs_up_index_enter"), u.handlePostBuryingPoint("activity_index", this.data.thumbsUp.id), 
    wx.navigateTo({
        url: "/giftReport/index?aid=".concat(this.data.thumbsUp.id)
    })) : wx.showToast({
        title: "暂无活动或已经结束",
        icon: "none"
    });
}), i(t, "swiperChange", function(t) {
    this.setData({
        isIndex: t.detail.current
    });
}), i(t, "getAd", function() {
    var t = this;
    wx.getStorageSync("sku_id");
    u.post_ajax_course("/appBanner/findBannerList", {
        appType: "40",
        skuId: 4,
        position: 1
    }, function(a) {
        var e = a.data;
        if (e.resInfo) {
            var n = e.resInfo.map(function(t) {
                return r(r({}, t), {}, {
                    image: u.p_url + t.image
                });
            });
            t.setData({
                advertisement: n,
                hasAd: !0
            });
        } else t.setData({
            onAd: !0
        });
    }, 1, null, function() {});
}), i(t, "goAdvertisement", function(t) {
    var a = this.data.advertisement, e = t.currentTarget.dataset, n = e.type, i = e.index;
    switch (n) {
      case 2:
        wx.navigateTo({
            url: "/commodity/index/detail?id=".concat(a[i].typeContent)
        });
        break;

      case 3:
        wx.navigateTo({
            url: "/backChallenge/myChallenge/joined"
        });
        break;

      case 5:
        this.data.activity && this.data.siji_miss ? wx.navigateTo({
            url: a[this.data.isIndex - 1].typeContent
        }) : (getApp().mtj.trackEvent("on_lottery_in_banner"), wx.navigateTo({
            url: a[this.data.isIndex].typeContent
        }));
    }
}), i(t, "countdownStart", function() {
    var t = this;
    this.setData({
        isShow: !0
    }), setTimeout(function() {
        t.setData({
            isShow: !1
        });
    }, 2e3);
}), i(t, "showGif", function() {
    this.countdownStart(), this.setData({
        countTimer: setInterval(this.countdownStart, 5e3)
    });
}), i(t, "getData", function() {
    var t = this;
    u.post_ajax("/rm/last", {
        at: 0
    }, function(a) {
        var e = a.data.resInfo;
        e.act && (t.setData({
            joinStatus: e.joinStatus,
            id: e.act.id,
            act: e.act
        }), e.act.endDate + 864e5 >= e.act.serverTime && e.act.beginDate <= e.act.serverTime && 1 === t.data.joinStatus && t.getPopDetail(e.act.id));
    }, 1, function(a) {
        t.setData({
            failed: !0
        });
    });
}), i(t, "getPopDetail", function(t) {
    var a = this;
    u.post_ajax("/retroactive/cfg", {
        actId: t
    }, function(t) {
        t.data.resInfo.retroactiveDate && a.setData({
            popShow: !0
        });
    }, 1);
}), i(t, "handleInto", function() {
    this.setData({
        alertShow: !1
    }), wx.navigateTo({
        url: "/backChallenge/myChallenge/index?id=".concat(this.data.id)
    });
}), i(t, "handleCloseLast", function() {
    this.setData({
        alertShow: !1
    });
}), i(t, "handleTips", function() {
    this.setData({
        showTips: !1
    }), wx.setStorageSync("showTips", !0);
}), t));