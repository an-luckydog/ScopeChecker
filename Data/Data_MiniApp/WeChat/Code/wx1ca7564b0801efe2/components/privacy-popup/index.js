var e = require("../../b/helpers/interopRequireDefault"), t = e(require("../../miniprogram_npm/@limo/core/index.js")), a = require("../../miniprogram_npm/@limo/container/behaviors/index.js"), i = e(require("../../lib/mix/log")), n = require("../../lib/mix/util"), r = require("../../lib/wx/util"), o = e(require("../../lib/mix/request")), s = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), l = i.default, u = console.log, d = [], c = !1;

Component({
    behaviors: [ a.commonBehavior, a.limoShim ],
    data: {
        showPrivacy: !1,
        needShowPrivacy: !1,
        appName: "",
        templateIds: [],
        agreements: []
    },
    created: function() {
        u("页面隐私弹窗组件接入初始化created。");
    },
    attached: function() {
        this.limoAttached();
    },
    ready: function() {
        this.limoReady();
    },
    pageLifetimes: {
        show: function() {
            this.limoPageShow();
        }
    },
    methods: {
        limoPageShow: function() {
            this.initPrivacy();
        },
        limoAttached: function() {
            this.initPrivacy(), s.default.isWxNative && u("页面隐私弹窗组件接入初始化完成。");
        },
        limoReady: function() {
            u("页面隐私弹窗组件接入初始化ready。");
        },
        getShopId: function() {
            return ((0, n.getMixUrlParam)() || (0, r.getTabbarPageOptions)({}, (0, n.getMixPathName)()) || {}).shopId || "";
        },
        initPrivacy: function() {
            var e = this;
            s.default.isWxNative && (null == wx.onNeedPrivacyAuthorization || wx.onNeedPrivacyAuthorization(function(e) {
                u("[页面隐私弹窗组件] onNeedPrivacyAuthorization: ", c), c ? e({
                    event: "disagree"
                }) : d.push(e);
            }), (0, n.getMixPathName)().indexOf("diancan-menu/pages/agreements-page/index") > -1 || (0, 
            n.getMixPathName)().indexOf("diancan-menu/pages/debug/index") > -1 || (0, n.getMixPathName)().indexOf("diancan-menu/pages/error-tip/index") > -1 || (0, 
            n.getMixPathName)().indexOf("pages/splash/index") > -1 || (null == wx.getPrivacySetting || wx.getPrivacySetting({
                success: function(t) {
                    var a;
                    u("[页面隐私弹窗组件] getPrivacySetting: ", t, c);
                    var n = !c && t.needAuthorization;
                    e.setData({
                        appName: null == (a = t.privacyContractName) ? void 0 : a.trim().replace(/《(.*)隐私保护指引》/, "$1"),
                        needShowPrivacy: n
                    }), n && i.default.reportMetric("show_privacy_dialog", 1);
                }
            }), !c && Promise.all([ this.getWxAgreement(), this.getMtAgreement() ]).then(function(t) {
                var a = t[0], i = t[1], n = ((null == i ? void 0 : i.agreements) || []).concat((null == a ? void 0 : a.agreements) || []);
                e.setData({
                    agreements: n.length ? n : e.data.agreements,
                    showPrivacy: !!n.length,
                    templateIds: (null == i ? void 0 : i.templateIds) || []
                });
            })));
        },
        handleDisagree: function() {
            i.default.reportMetric("user_refuse_privacy", 1), i.default.addLog("用户点击了拒绝隐私弹窗"), 
            d.forEach(function(e) {
                return e({
                    event: "disagree"
                });
            }), this.setData({
                showPrivacy: !1
            }), c = !0, getApp({
                allowDefault: !0
            }).refused_privacy = !0;
        },
        handleAgree: function() {
            var e = this;
            i.default.reportMetric("user_agree_privacy", 1), i.default.addLog("用户点击了同意隐私弹窗"), 
            d.forEach(function(e) {
                return e({
                    buttonId: "agree-btn",
                    event: "agree"
                });
            });
            var a = this.data.templateIds;
            a.length ? (0, o.default)({
                url: (0, n.getHost)() + "/diancan/api/agreement/signAgreements",
                method: "POST",
                data: {
                    sceneId: 3,
                    signPlatform: 4,
                    agreementTemplateIds: a
                },
                success: function(a) {
                    var i;
                    e.setData({
                        showPrivacy: !1
                    }), 200 === (null == a || null == (i = a.data) ? void 0 : i.code) && t.default.getLimoRuntime().showToast({
                        icon: "none",
                        title: "签署成功",
                        duration: 2e3
                    });
                },
                fail: function(t) {
                    l.addError("签署隐私协议失败", t), e.setData({
                        showPrivacy: !1
                    });
                }
            }) : this.setData({
                showPrivacy: !1
            });
        },
        getWxAgreement: function() {
            var e;
            return null != (e = wx) && e.getPrivacySetting ? new Promise(function(e) {
                var t;
                null == (t = wx) || null == t.getPrivacySetting || t.getPrivacySetting({
                    success: function(t) {
                        var a;
                        e({
                            agreements: [ {
                                title: null == (a = t.privacyContractName) ? void 0 : a.replace(/《(.*)》/, "$1"),
                                id: ""
                            } ]
                        });
                    },
                    fail: function() {
                        e({
                            agreements: []
                        });
                    }
                });
            }) : Promise.resolve({
                agreements: [],
                templateIds: []
            });
        },
        getMtAgreement: function() {
            return this.getShopId() ? new Promise(function(e) {
                (0, o.default)({
                    url: (0, n.getHost)() + "/diancan/api/agreement/queryNeedSignAgreements",
                    method: "POST",
                    data: {
                        bizLine: 600,
                        sceneId: 3,
                        isCacheUser: !1,
                        fromMenu: !0
                    },
                    complete: function(t) {
                        var a, i = [], n = [], r = ((null == t || null == (a = t.data) ? void 0 : a.data) || {}).agreementVOs;
                        null == r || r.forEach(function(e) {
                            var t = e.agreementTemplateVO, a = null == t ? void 0 : t.id;
                            a && (i.push(a), n.push(t));
                        }), i.length > 0 ? e({
                            agreements: n,
                            templateIds: i
                        }) : e({
                            agreements: [],
                            templateIds: []
                        });
                    },
                    fail: function(t) {
                        l.addError("获取隐私协议失败", t), e({
                            agreements: [],
                            templateIds: []
                        });
                    }
                });
            }) : Promise.resolve({
                agreements: [],
                templateIds: []
            });
        },
        onAgreementClick: function(e) {
            var a, i, n, r = null == e || null == (a = e.currentTarget) || null == (i = a.dataset) ? void 0 : i.tempid;
            r ? t.default.getLimoRuntime().navigateTo({
                url: "/diancan-menu/pages/agreements-page/index?tempId=".concat(r, "&shopId=").concat(this.getShopId())
            }) : null == (n = wx) || null == n.openPrivacyContract || n.openPrivacyContract();
        }
    }
});