var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = exports.COUPON_PAGE_SIZE = void 0;

var r = require("../../b/helpers/objectSpread2"), t = e(require("../../miniprogram_npm/seamless-immutable/index.js")), a = require("../actions/coupon");

exports.COUPON_PAGE_SIZE = 100;

var o = {
    totalItemSize: 0,
    totalCouponNum: "",
    url: "",
    cacheId: null
}, u = {
    tableNum: "",
    mtShopId: "",
    cardId: "",
    bizType: 130,
    offset: 0,
    pageSize: 100,
    cacheId: null
}, p = (0, t.default)({
    couponList: [],
    couponExtra: o,
    couponParams: u
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p, l = arguments.length > 1 ? arguments[1] : void 0;
    switch (l.type) {
      case a.SET_COUPON_LIST:
        return t.default.merge(e, {
            couponList: l.payload
        });

      case a.SET_COUPON_EXTRA:
        return t.default.merge(e, {
            couponExtra: l.payload
        });

      case a.SET_COUPON_PARAMS:
        return t.default.merge(e, {
            couponParams: l.payload
        });

      case a.RESET_COUPON_DATA:
        return t.default.merge(e, {
            couponList: [],
            couponExtra: r({}, o),
            couponParams: r({}, u)
        });

      default:
        return e;
    }
};