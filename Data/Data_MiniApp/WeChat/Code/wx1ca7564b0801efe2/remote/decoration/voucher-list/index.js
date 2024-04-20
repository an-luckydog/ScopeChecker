var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../b/regenerator")), r = require("../../../b/helpers/asyncToGenerator"), o = e(require("../../../miniprogram_npm/@limo/core/index.js")), n = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ n.commonBehavior, n.limoShim ],
    properties: {
        requestInfo: {
            type: Object,
            value: {},
            observer: function(e) {
                this.getVoucherList(e);
            }
        },
        customStyle: {
            type: String,
            value: ""
        }
    },
    data: {
        voucherList: [],
        loading: !1
    },
    methods: {
        getVoucherList: function(e) {
            var n = this;
            return r(t.default.mark(function r() {
                var i, a, s;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        n.setData({
                            loading: !0
                        }), i = e.requestHost, a = e.headers, s = e.body, i && o.default.getLimoRuntime().request({
                            url: "".concat(i, "/api/v1/crm/frontend/product/coupon-product/query-by-tenant"),
                            header: a,
                            data: s,
                            method: "POST",
                            success: function(e) {
                                n.handleResponse(e);
                            },
                            fail: function() {
                                n.requestResult();
                            }
                        });

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, r);
            }))();
        },
        handleResponse: function(e) {
            var t = null == e ? void 0 : e.data, r = [];
            if (t && 0 === t.code) {
                var o = Date.now();
                r = t.data.filter(function(e) {
                    return e.endTime > o;
                });
            }
            this.requestResult(r);
        },
        requestResult: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            this.setData({
                voucherList: e,
                loading: !1
            }), this.triggerEvent("requestResult", {
                voucherList: e
            });
        },
        onCloseModal: function() {
            this.triggerEvent("closeModal");
        }
    }
});