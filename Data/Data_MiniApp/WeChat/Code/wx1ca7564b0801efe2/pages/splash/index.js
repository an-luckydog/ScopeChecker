var e = require("../../b/helpers/interopRequireDefault"), r = require("../../b/helpers/typeof");

require("../../b/helpers/Arrayincludes");

var t, a = e(require("../../b/regenerator")), n = require("../../b/helpers/asyncToGenerator"), o = e(require("../../miniprogram_npm/@limo/core/index.js")), i = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), l = require("../../lib/wx/app-info"), s = require("../../lib/wx/plugin/default"), d = e(require("../../lib/wx/log")), p = e(require("../../lib/wx/request")), u = e(require("../../api/rmsStorage-main")), c = require("../../constants/path"), f = e(require("../../miniprogram_npm/@mtfe/saas-user-auth/index.js")), m = require("../../lib/wx/page"), h = require("../../lib/navigator-main"), R = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), g = ((t = g || {})[t.PAGE_NOT_FOUND = 404] = "PAGE_NOT_FOUND", 
t[t.API_NOT_RES = 405] = "API_NOT_RES", t[t.API_ERROR = 406] = "API_ERROR", t[t.RES_ERROR_PAGE = 407] = "RES_ERROR_PAGE", 
t), C = function(e, r) {
    (0, h.toErrorTip)({
        errorTip: r,
        type: e
    });
};

(0, m.ProxyPage)({
    data: {
        showFullLoading: !0
    },
    onLoad: function(e) {
        var r = this;
        return n(a.default.mark(function t() {
            var n, i, l, s, p, u, c, f, h;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return r.__limoCore = o.default.LimoCoreFactory(), (0, m.initPageOnLoad)(), r.fmpStartReport(), 
                    n = e.p, i = void 0 === n ? "" : n, l = e.q, s = void 0 === l ? "" : l, p = e.s, 
                    u = void 0 === p ? "" : p, c = e.scene, f = c ? decodeURIComponent(c) : "", h = u || s, 
                    d.default.sendInfo({
                        name: "splash",
                        content: {
                            options: e
                        }
                    }), r.setData({
                        options: e
                    }), t.next = 6, r.handlePerception(h, i, f);

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    onUnload: function() {
        this.loadSuccess();
    },
    initCache: function(e) {
        u.default.setTenantId(0), d.default.sendInfo({
            name: "[perception][setPerception]",
            content: {
                p: e
            }
        }), (0, l.setPerceptionFrom)({
            p: e
        });
        var r = u.default.getValidateAllowOdAfterClose();
        (0, l.clearSessionStorage)(), u.default.setValidateAllowOdAfterClose(r);
    },
    preHandleQrCodeCustomChannel: function(e) {
        try {
            var r = decodeURIComponent(e).split("?")[1], t = i.default.parse(r);
            null != t && t.customChannel ? u.default.setCustomChannel(t.customChannel) : u.default.removeCustomChannel();
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            d.default.addError("preHandleQrCodeCustomChannel err: ", e);
        }
    },
    handlePerception: function(e, r, t) {
        var o = this;
        return n(a.default.mark(function n() {
            var i, l, s;
            return a.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return o.initCache(r), o.preHandleQrCodeCustomChannel(r || e), i = {}, a.prev = 2, 
                    a.next = 5, (0, p.default)({
                        url: "/miniprogram/route",
                        params: {
                            qrcode: e || "",
                            perception: r || t || "",
                            shopCache: u.default.getShopCache()
                        }
                    });

                  case 5:
                    i = a.sent, o.handlePerceptionRes(i, e, r), a.next = 14;
                    break;

                  case 9:
                    a.prev = 9, a.t0 = a.catch(2), d.default.addError("情景感知异常：", a.t0), l = a.t0 || {}, 
                    s = l.errMsg, o.jumpStartReport(), o.loadFail(g.API_ERROR), function(e) {
                        !e || -1 === e.indexOf("timeout") && -1 === e.indexOf("超时") ? C(6, "情景感知失败") : C(6, "请求超时，请重新扫码");
                    }(s);

                  case 14:
                  case "end":
                    return a.stop();
                }
            }, n, null, [ [ 2, 9 ] ]);
        }))();
    },
    handlePerceptionRes: function(e, r, t) {
        var a = this, n = e || {}, o = n.data, l = n.code, s = n.msg, p = n.routeBiz, m = o || {}, h = m.memberToken, v = m.tenantId, x = m.extra, P = null != x ? x : {}, _ = P.validateAllowOdAfterClose, A = void 0 === _ ? "" : _, O = P.shopCache;
        if (200 === l && o) {
            u.default.setTenantId(v), f.default.setMemberToken(h, v), O && u.default.setShopCache(O), 
            r && u.default.setValidateAllowOdAfterClose(A);
            var E = o.redirectUrl || "";
            if (E && E.includes("error-tip") && (this.loadFail(g.RES_ERROR_PAGE), E.includes("type=12")) && (E = "".concat(E, "&url=").concat(encodeURIComponent("".concat(c.PATH.splash, "?q=").concat(r || t)))), 
            E && E.includes("promotionMonitoring")) try {
                var S, q;
                R.LXReporter.initAppPromotionMonitoring(i.default.parse((null == (S = E) || null == (q = S.split("?")) ? void 0 : q[1]) || "").promotionMonitoring);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                d.default.sendInfo({
                    name: "[promotionMonitoring][init error]",
                    content: {
                        redirectUrl: E
                    }
                });
            }
            var T = i.default.appendQuery(E, {
                perceptionPage: "true"
            }), w = "diancan" === p ? T : E, b = 0 === w.indexOf("/pages/index/index") || 0 === w.indexOf("pages/index/index");
            this.jumpStartReport(b), i.default.redirectTo({
                url: w,
                success: function() {
                    a.loadSuccess();
                },
                fail: function() {
                    a.loadFail(g.PAGE_NOT_FOUND), C(0, w + "页面不存在");
                }
            });
        } else d.default.sendInfo({
            name: "[perception][res error]",
            content: {
                res: e
            }
        }), this.jumpStartReport(), this.loadFail(g.API_NOT_RES), C(0, s || ("diancan" === p ? "网络错误" : "情景感知错误"));
    },
    fmpStartReport: function() {
        var e = (0, l.getNewApp)();
        if ("object" == r(e.report)) try {
            e.report.splashLoadTime = Date.now(), e.report.launchTimeFromScan > 0 && d.default.addPerformance(2, e.report.splashLoadTime - e.report.launchTimeFromScan, "pages/splash/index");
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            d.default.addError("上报splash load耗时异常", e);
        }
    },
    jumpStartReport: function(e) {
        var t = (0, l.getNewApp)();
        if ("object" == r(t.report)) try {
            if (t.report.splashJumpStart = Date.now(), t.report.splashLoadTime > 0) {
                var a = t.report.splashJumpStart - t.report.splashLoadTime;
                d.default.addPerformance(3, a, "pages/splash/index"), e && d.default.addPerformance(4, a, "pages/splash/index");
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            d.default.addError("上报splash跳转准备耗时异常", e);
        }
    }
}, s.plugins);