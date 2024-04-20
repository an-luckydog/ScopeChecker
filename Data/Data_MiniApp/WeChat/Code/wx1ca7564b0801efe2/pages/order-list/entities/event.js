var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, i = e(require("../../../b/regenerator")), n = require("../../../b/helpers/asyncToGenerator"), o = require("../../../b/helpers/classCallCheck"), r = require("../../../b/helpers/createClass"), a = e(require("../../../miniprogram_npm/@limo/core/index.js")), u = require("../../../commons/inversify"), s = require("../../../commons/constants"), c = require("../common/constants"), l = (0, 
u.injectable)()(t = function(e) {
    return (0, u.inject)(s.TYPES.REQUEST)(e, void 0, 0);
}(t = function(e) {
    return (0, u.inject)(s.TYPES.OPTIONS)(e, void 0, 1);
}(t = function(e) {
    return (0, u.inject)(s.TYPES.TRIANGLE)(e, void 0, 2);
}(t = function(e) {
    return (0, u.inject)(s.TYPES.LIMO)(e, void 0, 3);
}(t = function(e) {
    return (0, u.inject)(s.TYPES.LOG)(e, void 0, 4);
}(t = function(e) {
    return (0, u.inject)(s.TYPES.LX)(e, void 0, 5);
}(t = function(e) {
    return (0, u.inject)(c.LIST_TYPES.INVOICE)(e, void 0, 6);
}(t = function(e) {
    return (0, u.inject)(s.EVENTS.JUMP_PAGE)(e, void 0, 7);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ "undefined" == typeof Request ? Object : Request, "undefined" == typeof Map ? Object : Map, void 0, "undefined" == typeof ILimo ? Object : ILimo, void 0, void 0, void 0, void 0 ])(t = function() {
    function e(t, i, n, r, a, u, s, c) {
        o(this, e), this.request = t, this.options = i, this.triangle = n, this.limo = r, 
        this.log = a, this.lx = u, this.invoiceEntity = s, this.jumpPage = c, this.lastUrgeTime = void 0, 
        this.lastUrgeTime = -1;
    }
    var t;
    return r(e, [ {
        key: "emitEvent",
        value: function(e, t) {
            var i = e.btnType;
            i && "function" == typeof this[i] && (this.buryPoint(e), this[i](e, t));
        }
    }, {
        key: "buryPoint",
        value: function(e) {
            try {
                var t = e.btnType;
                t !== c.ORDER_EVENTS.GO_COMMENT && t !== c.ORDER_EVENTS.GO_COMMENT_DETAIL || this.lx.sendMC("b_saaspay_jyek9qgr_mc"), 
                t !== c.ORDER_EVENTS.GO_INVOICE && t !== c.ORDER_EVENTS.INVOICE_STATUS || this.lx.sendMC({
                    valLab: null,
                    bid: t === c.ORDER_EVENTS.GO_INVOICE ? "b_saaspay_ewpmgjhq_mc" : t === c.ORDER_EVENTS.INVOICE_STATUS ? "b_saaspay_95mr52bi_mc" : "",
                    options: {}
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                this.log.addError("订单列表埋点异常", e);
            }
        }
    }, {
        key: "goComment",
        value: function(e, t) {
            var i = ((null == e ? void 0 : e.extend) || {}).actionUrl;
            this.wxNavigateTo(i, "goComment", t);
        }
    }, {
        key: "watchComment",
        value: function(e, t) {
            var i = ((null == e ? void 0 : e.extend) || {}).actionUrl;
            this.wxNavigateTo(i, "watchComment", t);
        }
    }, {
        key: "urgeOrder",
        value: (t = n(i.default.mark(function e(t) {
            var n, o;
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = t.orderViewId, !(Date.now() - this.lastUrgeTime < c.URGE_TIME)) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", void this.limo.limoShowToast({
                        title: "操作过于频繁，请稍后重试",
                        icon: "none",
                        duration: 2e3
                    }));

                  case 3:
                    return a.default.getLimoRuntime().showLoading({
                        title: "催单中...",
                        icon: "none",
                        mask: !1
                    }), e.next = 6, this.request.get("/order/urgeOrder?orderViewId=".concat(n));

                  case 6:
                    if (e.t0 = e.sent, e.t0) {
                        e.next = 9;
                        break;
                    }
                    e.t0 = {};

                  case 9:
                    o = e.t0, a.default.getLimoRuntime().hideLoading(), (null == o ? void 0 : o.code) === c.RES_CODE.SUCCESS ? (this.limo.limoShowToast({
                        title: o.msg || "催单成功",
                        icon: "none",
                        duration: 2e3
                    }), this.lastUrgeTime = Date.now()) : this.limo.limoShowToast({
                        title: o.msg || "网络出错，请稍后试试～",
                        icon: "none",
                        duration: 2e3
                    });

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return t.apply(this, arguments);
        })
    }, {
        key: "invoice",
        value: function(e) {
            this.invoiceEntity.fetchInvoice(e);
        }
    }, {
        key: "invoiceStatus",
        value: function(e) {
            this.invoiceEntity.fetchInvoice(e);
        }
    }, {
        key: "wxNavigateTo",
        value: function(e, t, i) {
            e ? this.triangle.navigateTo({
                url: e,
                complete: i
            }) : this.log.addError("订单列表页跳转".concat(t, "路径异常"), e);
        }
    }, {
        key: "urgedOrder",
        value: function() {
            this.limo.limoShowToast({
                title: "您已催单，请耐心等待",
                icon: "none",
                duration: 2e3
            });
        }
    }, {
        key: "anotherOrder",
        value: function(e) {
            var t = ((null == e ? void 0 : e.extend) || {}).redirectUrl;
            t && this.jumpPage(t);
        }
    } ]), e;
}()) || t) || t) || t) || t) || t) || t) || t) || t) || t) || t) || t;

exports.default = l;