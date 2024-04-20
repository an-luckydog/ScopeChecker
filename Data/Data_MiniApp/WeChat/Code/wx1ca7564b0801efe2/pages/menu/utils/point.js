var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setFmpMenuListSuccess = exports.menuLoadFailPoint = void 0;

var r = e(require("../../../lib/wx/log"));

exports.setFmpMenuListSuccess = function() {
    r.default.addCustom("setFmpDataSuccess", 1, {
        who: 2
    });
};

exports.menuLoadFailPoint = function(e) {
    var t = e.errorType, o = e.errorMsg;
    r.default.addError("菜单页面加载失败-".concat(t, "-").concat(o));
};