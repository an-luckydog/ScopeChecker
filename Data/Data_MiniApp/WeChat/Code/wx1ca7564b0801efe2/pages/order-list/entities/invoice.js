var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, i = e(require("../../../b/regenerator")), n = require("../../../b/helpers/asyncToGenerator"), o = require("../../../b/helpers/classCallCheck"), r = require("../../../b/helpers/createClass"), a = e(require("../../../miniprogram_npm/@limo/core/index.js")), u = require("../../../commons/inversify"), c = require("../../../commons/constants"), s = require("../common/constants"), l = e(require("../../../commons/emitter")), d = (0, 
u.injectable)()(t = function(e) {
    return (0, u.inject)(c.TYPES.REQUEST)(e, void 0, 0);
}(t = function(e) {
    return (0, u.inject)(c.TYPES.TRIANGLE)(e, void 0, 1);
}(t = function(e) {
    return (0, u.inject)(c.TYPES.LIMO)(e, void 0, 2);
}(t = function(e) {
    return (0, u.inject)(c.TYPES.LOG)(e, void 0, 3);
}(t = function(e) {
    return (0, u.inject)(c.TYPES.EMITTER)(e, void 0, 4);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ "undefined" == typeof Request ? Object : Request, void 0, "undefined" == typeof ILimo ? Object : ILimo, void 0, void 0 === l.default ? Object : l.default ])(t = function() {
    function e(t, i, n, r, a) {
        o(this, e), this.request = t, this.triangle = i, this.limo = n, this.log = r, this.emitter = a;
    }
    var t, u;
    return r(e, [ {
        key: "fetchInvoice",
        value: (u = n(i.default.mark(function e(t) {
            var o, r, u, c, l, d, m, f, h, E, T, p, I, S, v, x, g = this;
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = (o = t || {}).extend, u = o.orderViewId, c = o.shopId, d = (l = r || {}).invoiceStatus, 
                    m = l.invoiceType, f = l.expireTime, h = l.url, E = l.applySource, d) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", void this.limo.limoShowToast({
                        title: "未获取到发票状态",
                        icon: "none",
                        duration: 2e3
                    }));

                  case 3:
                    if (T = E === s.INVOICE_SOURCE.MANUAL, a.default.getLimoRuntime().showLoading({
                        title: "加载中",
                        icon: "none",
                        mask: !1
                    }), d !== s.INVOICE_STATUS.ENABLE && d !== s.INVOICE_STATUS.PREPARE) {
                        e.next = 13;
                        break;
                    }
                    if (!T || d !== s.INVOICE_STATUS.ENABLE) {
                        e.next = 7;
                        break;
                    }
                    return e.abrupt("return", (this.limo.limoShowModal({
                        content: "商户正在为您手工开票，如果疑问请联系商户",
                        confirmText: "知道了",
                        showCancel: !1,
                        onConfirm: function() {}
                    }), void a.default.getLimoRuntime().hideLoading()));

                  case 7:
                    return e.next = 9, this.request.post("/common/invoice/calculate", {
                        orderViewId: u,
                        mtShopId: c,
                        poiId: c
                    });

                  case 9:
                    p = e.sent, a.default.getLimoRuntime().hideLoading(), p && p.code === s.RES_CODE.SUCCESS ? (I = p.data.amount) ? this.limo.limoShowModal({
                        title: "请确认开票金额",
                        content: "开票金额: ￥".concat(I, "，如有疑问，请联系商家"),
                        confirmText: "确定",
                        cancelText: "取消",
                        showCancel: !0,
                        onCancel: function() {
                            a.default.getLimoRuntime().hideLoading();
                        },
                        onConfirm: function() {
                            var e = n(i.default.mark(function e() {
                                return i.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, g.fetchWriteInvoice(t, I);

                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                            }));
                            return function() {
                                return e.apply(this, arguments);
                            };
                        }()
                    }) : this.limo.limoShowToast({
                        title: "未获取发票金额",
                        icon: "none",
                        duration: 2e3
                    }) : (S = p && p.msg || "获取发票金额接口请求失败~", v = p && p.code, this.limo.limoShowModal({
                        content: S,
                        confirmText: "知道了",
                        showCancel: !1,
                        onConfirm: function() {
                            -2 !== v && -4 !== v || g.emitter.emit(s.LIST_EVENTS.REFRESH);
                        }
                    })), e.next = 24;
                    break;

                  case 13:
                    if (d !== s.INVOICE_STATUS.WAITING) {
                        e.next = 23;
                        break;
                    }
                    if (x = Date.now(), !(f && f < x)) {
                        e.next = 20;
                        break;
                    }
                    return e.next = 18, this.fetchWriteInvoice(t);

                  case 18:
                    e.next = 21;
                    break;

                  case 20:
                    this.triangle.navigateTo({
                        url: h,
                        fail: function() {
                            g.log.addError("跳转开发票url失败", h);
                        }
                    });

                  case 21:
                    e.next = 24;
                    break;

                  case 23:
                    d === s.INVOICE_STATUS.COMPLETED && m === s.INVOICE_TYPE.PAPER ? this.limo.limoShowToast({
                        title: "已线下开具纸质发票~",
                        icon: "none",
                        duration: 2e3
                    }) : d === s.INVOICE_STATUS.COMPLETED || d === s.INVOICE_STATUS.FAILURE ? this.triangle.navigateTo({
                        url: h,
                        fail: function() {
                            g.log.addError("开票成功且为电子发票或开票失败跳转url失败", h);
                        }
                    }) : this.log.addError("[开票状态异常]", {
                        btn: t
                    });

                  case 24:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return u.apply(this, arguments);
        })
    }, {
        key: "fetchWriteInvoice",
        value: (t = n(i.default.mark(function e(t, n) {
            var o, r, u, c, l, d, m, f, h, E, T, p = this;
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = (o = t || {}).extend, u = o.shopId, c = o.orderViewId, d = (l = r || {}).invoiceStatus, 
                    m = l.expireTime, f = l.url, d !== s.INVOICE_STATUS.ENABLE && d !== s.INVOICE_STATUS.PREPARE && d !== s.INVOICE_STATUS.WAITING) {
                        e.next = 17;
                        break;
                    }
                    return a.default.getLimoRuntime().showLoading({
                        title: "加载中",
                        icon: "none",
                        mask: !1
                    }), e.next = 5, this.request.post("/common/invoice/write", {
                        orderViewId: c,
                        mtShopId: u,
                        expireTime: m || "",
                        url: f || "",
                        amount: n || "",
                        poiId: u
                    });

                  case 5:
                    if (e.t0 = e.sent, e.t0) {
                        e.next = 8;
                        break;
                    }
                    e.t0 = {};

                  case 8:
                    if ((h = e.t0).code !== s.RES_CODE.SUCCESS || !h.data) {
                        e.next = 16;
                        break;
                    }
                    if (E = h.data || {}, T = E.url) {
                        e.next = 13;
                        break;
                    }
                    return e.abrupt("return", void this.limo.limoShowToast({
                        title: "无法获取开票地址~",
                        icon: "none"
                    }));

                  case 13:
                    this.triangle.navigateTo({
                        url: "/diancan-menu/pages/webview/index?url=".concat(encodeURIComponent(T), "&webviewType=URL_DIRECT"),
                        fail: function() {
                            a.default.getLimoRuntime().hideLoading(), p.log.addError("开发票url跳转失败", h);
                        }
                    }), e.next = 17;
                    break;

                  case 16:
                    a.default.getLimoRuntime().hideLoading(), this.limo.limoShowToast({
                        title: (null == h ? void 0 : h.msg) || "开票接口请求失败~",
                        icon: "none",
                        duration: 2e3
                    });

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, i) {
            return t.apply(this, arguments);
        })
    } ]), e;
}()) || t) || t) || t) || t) || t) || t) || t) || t;

exports.default = d;