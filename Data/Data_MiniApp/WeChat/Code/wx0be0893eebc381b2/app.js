var e = require("@babel/runtime/helpers/objectSpread2"), t = require("@babel/runtime/helpers/objectWithoutProperties"), a = [ "nickName" ], n = [ "nickName" ], r = require("/utils/feedbackApi"), o = require("/utils/md5.js"), i = (require("/utils/Base64.js"), 
require("/utils/mta_analysis.js")), u = (require("./utils/mtj-wx-sdk.js"), {});

App({
    env: 1,
    mta: i,
    paramValue: "2.6.11",
    pay_url_really: "https://pay.duia.com/wx/mpApi/pay/6",
    pay_url: "https://enxcx.duia.com",
    p_url: "https://tu.duia.com",
    api_url2: "https://mp.api.duia.com",
    api_url: "https://ketang.api.duia.com",
    ai_pur: "https://ai.api.duia.com",
    tiku_api_url: "https://ntiku.api.duia.com",
    crm_url: "https://crm-gateway.duia.com",
    userPrivacy: "https://list.duia.com",
    itemDomain: "https://item.duia.com",
    xcxDomain: "https://sso.duia.com",
    ucDomain: "https://uc.duia.com",
    paramDomain: "https://param.duia.com",
    call_backss_fun: "",
    call_back_fun: "",
    open_id: "",
    failed: !0,
    authorization: 0,
    avatar: "",
    updatas: !1,
    up_num: 0,
    times: 0,
    content_lsit: [],
    accredit: 0,
    opns: 0,
    networkType: "123",
    isConnected: !0,
    pagesInit: function() {
        this.mta.Page.init();
    },
    onLaunch: function(e) {
        i.App.init({
            appID: "500655355",
            eventID: "500655374",
            statPullDownFresh: !0,
            lauchOpts: e,
            statShareApp: !0,
            statReachBottom: !0
        });
        var t = wx.getUpdateManager();
        t.onCheckForUpdate(function(e) {
            console.log(e.hasUpdate);
        }), t.onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                showCancel: !1,
                content: "新版本已经准备好，是否重启应用？",
                success: function(e) {
                    e.confirm && t.applyUpdate();
                }
            });
        }), t.onUpdateFailed(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本下载失败",
                showCancel: !1
            });
        }), 1047 == e.scene ? (wx.setStorageSync("repeat_gzh", 0), wx.setStorageSync("repeat_gzhkk", 1)) : wx.setStorageSync("repeat_gzh", 1);
    },
    onShow: function(e) {
        var t = this;
        t.zaixian(), wx.getNetworkType({
            success: function(e) {
                if (t.networkType = e.networkType, "none" == e.networkType) return !1;
                t.dialog_authorize();
            }
        });
    },
    onHide: function() {},
    dialog_authorize: function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = this, o = wx.getStorageSync("userInfo");
        o ? (r.accredit = !1, r.call_back_fun && r.call_back_fun()) : wx.getUserProfile({
            desc: "获取用户信息",
            success: function(o) {
                var i = o.userInfo;
                if (wx.setStorageSync("userInfo", i || ""), r.accredit = !0, r.call_back_fun && r.call_back_fun(), 
                r.get_open_id() && 0 !== r.get_open_id()) return 1 === r.opns || (r.opns = 1, r.call_backss_fun && r.call_backss_fun()), 
                !1;
                wx.login({
                    success: function(o) {
                        r.post_ajax("/user/userLogin", {
                            code: o.code,
                            type: 0
                        }, function(o) {
                            var u = o.data.resInfo;
                            r.open_id = u.openId, wx.setStorageSync("open_id", r.open_id), wx.setStorageSync("sessionKey", u.sessionKey);
                            var s = i.nickName, c = t(i, a);
                            r.post_ajax("/user/save", e({
                                type: 0,
                                openId: u.openId,
                                unionId: u.unionId,
                                inviteId: n,
                                nickName: encodeURI(s)
                            }, c), function(e) {
                                var t = e.data.resInfo;
                                wx.setStorageSync("primaryKey", t.primaryKey), u.userId && (wx.setStorageSync("user", {
                                    id: t.userId
                                }), wx.setStorageSync("userId", t.userId)), r.opns = 1, r.call_backss_fun && r.call_backss_fun(t);
                            });
                        }, 4);
                    }
                });
            },
            fail: function() {
                console.log("用户点击了拒绝"), r.accredit = !1, r.call_back_fun && r.call_back_fun();
            }
        });
    },
    getUserProfile: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = this;
        return wx.showLoading({
            title: "正在加载..."
        }), new Promise(function(o, i) {
            wx.getUserProfile({
                desc: "获取用户信息",
                success: function(i) {
                    wx.hideLoading();
                    var u = i.userInfo;
                    wx.setStorageSync("userInfo", u || ""), wx.login({
                        success: function(i) {
                            r.post_ajax("/user/userLogin", {
                                code: i.code,
                                type: 0
                            }, function(i) {
                                var s = i.data.resInfo;
                                r.open_id = s.openId, wx.setStorageSync("open_id", r.open_id), wx.setStorageSync("sessionKey", s.sessionKey);
                                var c = u.nickName, d = t(u, n), p = e({
                                    type: 0,
                                    openId: s.openId,
                                    unionId: s.unionId,
                                    nickName: encodeURI(c)
                                }, d);
                                a && (p.inviteId = a), r.post_ajax("/user/save", p, function(e) {
                                    var t = e.data.resInfo;
                                    wx.setStorageSync("primaryKey", t.primaryKey), t.userId && (wx.setStorageSync("user", {
                                        id: t.userId
                                    }), wx.setStorageSync("userId", t.userId)), o(t);
                                });
                            }, 4);
                        }
                    });
                },
                fail: function() {
                    console.log("用户点击了拒绝"), wx.hideLoading(), i("拒绝授权");
                }
            });
        });
    },
    post_ajax: function(e, t, a) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, r = arguments.length > 4 ? arguments[4] : void 0, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "POST", i = e, s = JSON.parse(JSON.stringify(t)), c = this;
        "" != t && null != t || (t = {});
        var d = t;
        switch (13 != n && (d.appType = "6"), d = c.appendParams(d), d = c.getSign(d), t.signature = d, 
        n) {
          case 2:
            e = c.api_url2 + e;
            break;

          case 4:
            e = c.pay_url + e;
            break;

          case 6:
            e = c.ai_pur;
            break;

          case 8:
            e = c.api_url + e;
            break;

          case 10:
            e = c.itemDomain + e;
            break;

          case 11:
            e = c.xcxDomain + e;
            break;

          case 12:
            e = c.ucDomain + e;
            break;

          case 13:
            e = c.crm_url + e;
            break;

          case 14:
            e = c.paramDomain + e;
            break;

          default:
            e = c.pay_url + e;
        }
        function p() {
            var e = getCurrentPages();
            return e[e.length - 1];
        }
        wx.request({
            url: e,
            method: o,
            data: t,
            header: {
                "content-type": 13 == n ? "application/json" : "application/x-www-form-urlencoded",
                openId: c.get_open_id() || 0
            },
            success: function(e) {
                var t = p();
                200 == e.statusCode && -1 != e.data.state ? (t && t.setData({
                    failed: !1
                }), a(e), u[i] = null) : setTimeout(function() {
                    var e = u[i] || 1;
                    u[i] = e + 1, e < 3 ? c.post_ajax(i, s, a, n, r) : (c.hideLoading(), t && t.setData({
                        failed: !0
                    }), u[i] = null, r && "function" == typeof r && r());
                }, 800);
            },
            fail: r
        });
    },
    post_ajax_header: function(t, a, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, s = t, c = JSON.parse(JSON.stringify(a)), d = this;
        "" != a && null != a || (a = {});
        var p = a;
        switch (p.appType = "6", p = d.appendParams(p), p = d.getSign(p), a.signature = p, 
        r) {
          case 2:
            t = d.api_url2 + t;
            break;

          case 4:
            t = d.pay_url + t;
            break;

          case 6:
            t = d.ai_pur;
            break;

          case 8:
            t = d.api_url + t;
            break;

          case 10:
            t = d.itemDomain + t;
            break;

          case 11:
            t = d.xcxDomain + t;
            break;

          case 12:
            t = d.ucDomain + t;
            break;

          default:
            t = d.pay_url + t;
        }
        function l() {
            var e = getCurrentPages();
            return e[e.length - 1];
        }
        wx.request({
            url: t,
            method: "POST",
            data: a,
            header: e({
                "content-type": "application/x-www-form-urlencoded"
            }, o),
            success: function(e) {
                var t = l();
                200 == e.statusCode && -1 != e.data.state ? (t && t.setData({
                    failed: !1
                }), n(e), u[s] = null) : setTimeout(function() {
                    var e = u[s] || 1;
                    u[s] = e + 1, e < 3 ? d.post_ajax(s, c, n, r, i) : (d.hideLoading(), t && t.setData({
                        failed: !0
                    }), u[s] = null);
                }, 800);
            },
            fail: i
        });
    },
    post_ajax_course: function(e, t, a) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, r = arguments.length > 4 ? arguments[4] : void 0, o = arguments.length > 5 ? arguments[5] : void 0;
        if (t || (t = {}), r || (r = {
            "content-type": "application/x-www-form-urlencoded"
        }), !o) {
            o = function(e) {
                console.log("wx.request.fail");
            };
        }
        var i = t;
        switch (i = this.appendParams(i), i = this.getSign(i), t.signature = i, n) {
          case 1:
            e = this.api_url + e;
            break;

          case 2:
            e = this.api_url2 + e;
            break;

          case 3:
            e = that.tiku_api_url + e;
            break;

          case 4:
            e = this.pay_url_really;
            break;

          case 6:
            e = this.ai_pur;
            break;

          case 10:
            e = this.itemDomain + e;
            break;

          case 11:
            e = this.xcxDomain + e;
            break;

          case 12:
            e = this.ucDomain + e;
            break;

          default:
            e = this.api_url + e;
        }
        wx.request({
            url: e,
            method: "POST",
            data: t,
            header: r,
            success: function(e) {
                a(e);
            },
            fail: function(e) {
                console.log(327462378463278), o(e);
            }
        });
    },
    post_ajax_token: function(t, a, n, r, o) {
        var i = {
            "content-type": "application/x-www-form-urlencoded",
            Cookie: "d_t=".concat(wx.getStorageSync("d_t"))
        };
        return this.post_ajax_course(t, e({
            appType: 6
        }, a), n, r, i, o);
    },
    appendParams: function(e) {
        var t = "";
        return null != e && "" != e && (t = this.sortParam(e)), t;
    },
    sortParam: function(e) {
        var t = new Array(), a = 0;
        for (var n in e) t[a] = n, a++;
        t = t.sort();
        for (var r = "", o = 0; o < a; o++) r += 0 == o ? t[o] + "=" + e[t[o]] : "&" + t[o] + "=" + e[t[o]];
        return r;
    },
    post_json: function(e, t, a, n) {
        var r = require("/test/data" + e);
        200 == r.statusCode ? 0 == r.data.state && a(r) : n(r);
    },
    basic_dialog: function(e, t) {
        return t = t || "提醒", wx.showModal({
            title: t,
            content: e,
            showCancel: !1
        }), !1;
    },
    set_time_out: function(e, t, a) {
        a = a || 1e3, wx.showToast({
            title: e,
            success: function() {
                setTimeout(function() {
                    t();
                }, a);
            }
        });
    },
    get_minte_scond: function(e) {
        var t = "00";
        return (e = parseInt(e)) >= 60 && (e -= 60 * (t = parseInt(e / 60)), t = t > 9 ? t : "0" + t), 
        t + ":" + (e > 9 ? e : "0" + e);
    },
    substring: function(e, t, a) {
        return e.length > a ? e.substring(t, a) + "..." : e;
    },
    validate_number: function(e) {
        return /^1[3|4|5|7|8|9][0-9]\d{8}$/.test(e);
    },
    confirm_dialog: function(e, t, a) {
        e = e || "警告", wx.showModal({
            title: e,
            content: t,
            success: a
        });
    },
    showLoading: function(e) {
        1 == wx.canIUse("showLoading") && wx.showLoading({
            title: e,
            mask: !0,
            success: function() {
                setTimeout(function() {
                    wx.hideLoading();
                }, 35e3);
            }
        });
    },
    hideLoading: function() {
        1 == wx.canIUse("hideLoading") && wx.hideLoading();
    },
    dialog: function(e, t) {
        return wx.showModal({
            title: "提醒",
            content: e,
            showCancel: !0,
            success: function(e) {
                e.confirm && t();
            }
        }), !1;
    },
    date_format: function(e) {
        var t = parseInt(e), a = Math.floor(t / 3600), n = (this.fill_zero_prefix(a), this.fill_zero_prefix(Math.floor(t / 60)));
        return n + ":" + this.fill_zero_prefix(t - 3600 * a - 60 * n);
    },
    fill_zero_prefix: function(e) {
        return e < 10 ? "0" + e : e;
    },
    onShowToast: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        r.showToast({
            title: e,
            duration: t
        });
    },
    get_year_month_day: function(e) {
        var t = new Date(e), a = {};
        return a.year = t.getFullYear(), a.month = t.getMonth() + 1, a.day = t.getDate(), 
        a;
    },
    get_year_month_day_dian: function(e) {
        var t = new Date(e), a = {};
        return a.year = t.getFullYear(), a.month = t.getMonth() + 1, a.day = t.getDate(), 
        a.year + ". " + a.month + ". " + a.day;
    },
    get_year_month_day_gang: function(e) {
        var t = new Date(e), a = {};
        return a.year = t.getFullYear(), a.month = t.getMonth() + 1, a.day = t.getDate(), 
        a.year + "-" + a.month + "-" + a.day;
    },
    get_date_format: function(e) {
        var t = new Date(e), a = {};
        return a.year = t.getFullYear(), a.month = t.getMonth() + 1, a.month = a.month > 9 ? a.month : "0" + a.month, 
        a.day = t.getDate(), a.day = a.day > 9 ? a.day : "0" + a.day, a.hour = t.getHours(), 
        a.hour = a.hour > 9 ? a.hour : "0" + a.hour, a.minute = t.getMinutes(), a.minute = a.minute > 9 ? a.minute : "0" + a.minute, 
        a.second = t.getSeconds(), a.second = a.second > 9 ? a.second : "0" + a.second, 
        a;
    },
    getSign: function(e) {
        return null != e && "" != e ? o.hexMD5(e + "duiaNiuBi)JN#ERFGBN") : o.hexMD5("duiaNiuBi)JN#ERFGBN");
    },
    compare: function(e) {
        return function(t, a) {
            return t[e] - a[e];
        };
    },
    get_user_id: function() {
        return wx.getStorageSync("userId") || 0;
    },
    reminding_k: function() {
        return wx.getStorageSync("reminding_k") || 0;
    },
    collection: function() {
        return wx.getStorageSync("collection") || 0;
    },
    swif1: function() {
        return wx.getStorageSync("swif1") || 0;
    },
    repeat: function() {
        return wx.getStorageSync("repeat") || 0;
    },
    updata: function() {
        return wx.getStorageSync("updata") || 0;
    },
    repeat_md: function() {
        return wx.getStorageSync("repeat_md") || 0;
    },
    repeat_cd: function() {
        return wx.getStorageSync("repeat_cd") || 0;
    },
    repeat_gzh: function() {
        return wx.getStorageSync("repeat_gzh") || 0;
    },
    repeat_gzhkk: function() {
        return wx.getStorageSync("repeat_gzhkk") || 0;
    },
    swif2: function() {
        return wx.getStorageSync("swif2") || 0;
    },
    get_sku_id: function() {
        return wx.getStorageSync("sku_id") || 0;
    },
    get_red_spot: function() {
        return wx.getStorageSync("red_spot") || 0;
    },
    taday_word: function() {
        return wx.getStorageSync("taday_word") || 50;
    },
    get_sign: function(e) {
        return 0 == e ? wx.getStorageSync("get_sign0") || 0 : 1 == e ? wx.getStorageSync("get_sign1") || 0 : 2 == e ? wx.getStorageSync("get_sign2") || 0 : void 0;
    },
    get_open_id: function() {
        return wx.getStorageSync("open_id") || 0;
    },
    convert: function(e) {
        for (var t = []; e; ) {
            var a = e % 26;
            a || (a = 26, --e), t.push(String.fromCodePoint(a + 64)), e = ~~(e / 26);
        }
        return t.reverse().join("");
    },
    remove_html_tag: function(e) {
        return e ? e.replace(/<\/?.+?>/g, "").replace(/&nbsp;/gi, "") : "";
    },
    get_subject_modular_field: function(e, t) {
        var a = "";
        for (var n in this.subject_modular) this.subject_modular[n].pid == e && (a = this.subject_modular[n][t]);
        return a;
    },
    platform: function() {
        var e = "", t = wx.getSystemInfoSync().model;
        return e = t.indexOf("iPhone X") >= 0 || t.indexOf("iPhone11") >= 0, e;
    },
    platform_pd: function() {
        var e = "";
        return e = wx.getSystemInfoSync().model.indexOf("iPhone11") >= 0, e;
    },
    platform_s: function() {
        var e = "";
        return wx.getSystemInfo({
            success: function(t) {
                e = t.platform;
            }
        }), e;
    },
    zaixian: function() {
        var e = this;
        e.post_ajax("/common/getParams", {
            appType: 6
        }, function(t) {
            if (200 == t.statusCode) {
                var a = t.data.resInfo, n = [];
                for (var r in a) {
                    if ("maintain" == a[r].paramKey && 1 == a[r].paramValue && wx.reLaunch({
                        url: "/pages/maintain/maintain"
                    }), "upgrade" == a[r].paramKey && "1" == a[r].paramValue && (e.updatas = !0), "date" == a[r].paramKey && (e.up_num = a[r].paramValue), 
                    "times" == a[r].paramKey && (e.times = a[r].paramValue), "content1" == a[r].paramKey) {
                        var o = "1." + a[r].paramValue;
                        n.push(o);
                    }
                    if ("content2" == a[r].paramKey) {
                        var i = "2." + a[r].paramValue;
                        n.push(i);
                    }
                    if ("content3" == a[r].paramKey) {
                        var u = "3." + a[r].paramValue;
                        n.push(u);
                    }
                    if ("content4" == a[r].paramKey) {
                        var s = "4." + a[r].paramValue;
                        n.push(s);
                    }
                    if ("content5" == a[r].paramKey) {
                        var c = "5." + a[r].paramValue;
                        n.push(c);
                    }
                    if ("content6" == a[r].paramKey) {
                        var d = "6." + a[r].paramValue;
                        n.push(d);
                    }
                }
                e.content_lsit = n;
            }
        }, 2);
    },
    get_hour_minte_scond: function(e) {
        var t = "00", a = "00";
        return (e = parseInt(e)) >= 3600 && (e -= 3600 * (t = parseInt(e / 3600)), t = t > 9 ? t : "0" + t), 
        e >= 60 && (e -= 60 * (a = parseInt(e / 60)), a = a > 9 ? a : "0" + a), t + ":" + a + ":" + (e > 9 ? e : "0" + e);
    },
    backgroundAudioManager: wx.getBackgroundAudioManager(),
    checkSharePage: function(e, t) {
        null != t && null != t.share_flag && "" != t.share_flag && e.setData({
            share_flag: !0
        });
    },
    getSetting: function() {
        return new Promise(function(e, t) {
            wx.getSetting({
                success: function(t) {
                    console.log("获取授权列表成功"), e(t);
                },
                fail: function(e) {
                    console.log("获取授权列表失败"), t(e);
                }
            });
        });
    },
    activeLoginBtn: function(e, t, a) {
        var n, r, o = {};
        for (n in e) {
            var i = e[n];
            if (i[0].length < i[1]) {
                r = !1, o[t] = !1, a.setData(o);
                break;
            }
            r = !0;
        }
        r && ((o = {})[t] = !0, a.setData(o));
    },
    handlePostBuryingPoint: function(e, t, a) {
        var n = this;
        this.post_ajax("/statistics/click", {
            aid: t,
            code: e
        }, function(e) {
            0 == e.data.state && a && "function" == typeof a && a.call(n);
        });
    },
    get_to_authorization: function() {
        return wx.getStorageSync("to_authorization") || 0;
    }
});