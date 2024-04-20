Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filterAvailableCouponCodes = function(e, n) {
    return e.filter(function(e) {
        var o = n.find(function(t) {
            return t.discountTempId === e;
        });
        return (null == o ? void 0 : o.selectStatus) === t.CouponSelectStatus.NOT_SELECTED;
    });
}, exports.filterSelectedCouponCodes = n, exports.isGroupCoupon = void 0, require("../b/helpers/Arrayincludes");

var e = require("../constants/bizConstants"), t = require("./menu/grouponCoupon/GrouponCouponSdk");

function n(e, n) {
    return e.filter(function(e) {
        var o = n.find(function(t) {
            return t.discountTempId === e;
        });
        return (null == o ? void 0 : o.selectStatus) === t.CouponSelectStatus.SELECTED;
    });
}

exports.isGroupCoupon = function(t) {
    return [ e.ACTIVITY_SRC.GROUPON, e.ACTIVITY_SRC.KOU_BEI_GROUP, e.ACTIVITY_SRC.DOU_YIN, e.ACTIVITY_SRC.KS ].includes(t);
};