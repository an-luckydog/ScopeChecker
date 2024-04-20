var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getLocation = void 0;

var t = require("../b/helpers/objectSpread2"), i = require("./env"), r = require("./wx/app-info"), o = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js"));

exports.getLocation = function(e) {
    var n = null == e ? void 0 : e.authDialogConfig, a = !(null == e || !e.showAuthSettingDialog);
    return i.isNativeMp && (0, r.isMerchantWxApp)() && !n && (n = {
        title: "您未开启地理位置授权",
        content: "商家需要获取您的位置，用于匹配附近门店或提供其它线上服务",
        confirmText: "去授权",
        cancelText: "取消"
    }), o.default.getLocation(t(t({}, e), {}, {
        authDialogConfig: n,
        showAuthSettingDialog: a
    }));
};