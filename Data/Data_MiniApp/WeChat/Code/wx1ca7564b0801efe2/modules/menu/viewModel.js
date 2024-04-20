var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.saveActivityTypeList = exports.getPageTitle = void 0;

var t = require("../../constants/bizConstants"), i = e(require("../../api/rmsStorage"));

exports.getPageTitle = function(e) {
    var t = e || {}, i = t.shopName;
    return t.shopLogo ? "欢迎点餐" : i || "扫码点餐";
};

exports.saveActivityTypeList = function(e) {
    if (e) {
        var r = e.takeCoupon;
        if (r) {
            var s = r.resultCode, o = r.activityTypeList;
            s === t.TAKE_COUPON_RESULT.NO_LOGIN ? i.default.setActivityTypeList(o) : i.default.setActivityTypeList(void 0);
        }
    }
};