var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPreOrderInfo = function(e, o) {
    if (Number(o) === r.DISH_SOURCE.RESERVE) {
        var i = t.default.getPreorderInfo(e) || {};
        return {
            peopleCount: (null == i ? void 0 : i.peopleCount) || 1,
            selectedTime: (0, l.formatReserveTime)(null == i ? void 0 : i.selectedTime) || 0,
            mealType: (null == i ? void 0 : i.mealType) || 0
        };
    }
    return {
        selectedTime: 0,
        peopleCount: 0,
        mealType: 0
    };
}, exports.getValidateAllowOdAfterClose = void 0;

var r = require("../constants/bizConstants"), t = e(require("../api/rmsStorage")), l = require("../lib/reserveTime");

exports.getValidateAllowOdAfterClose = function() {
    return t.default.getValidateAllowOdAfterClose();
};