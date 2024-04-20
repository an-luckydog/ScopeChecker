Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SET_COUPON_PARAMS = exports.SET_COUPON_LIST = exports.SET_COUPON_EXTRA = exports.RESET_COUPON_DATA = void 0, 
exports.resetCouponDataAction = function() {
    return {
        type: "RESET_COUPON_DATA"
    };
}, exports.setCouponExtraAction = function(t) {
    return {
        type: "SET_COUPON_EXTRA",
        payload: t
    };
}, exports.setCouponListAction = function(t) {
    return {
        type: "SET_COUPON_LIST",
        payload: t
    };
}, exports.setCouponParamsAction = function(t) {
    return {
        type: "SET_COUPON_PARAMS",
        payload: t
    };
};

exports.SET_COUPON_LIST = "SET_COUPON_LIST";

exports.SET_COUPON_EXTRA = "SET_COUPON_EXTRA";

exports.SET_COUPON_PARAMS = "SET_COUPON_PARAMS";

exports.RESET_COUPON_DATA = "RESET_COUPON_DATA";