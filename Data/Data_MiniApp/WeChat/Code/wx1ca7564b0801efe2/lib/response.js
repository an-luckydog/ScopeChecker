var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.handleResponseTips = void 0;

var s = e(require("./mix/confirm")), t = require("../constants/bizConstants-main"), i = e(require("../api/rmsStorage-main"));

exports.handleResponseTips = function(e) {
    var r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if (1 === (null == e || null == (r = e.systemTempTips) ? void 0 : r.type)) {
        var o = i.default.getConfirmedResponseSystemTempTips();
        if (Array.isArray(o) && -1 === o.indexOf(n)) {
            var p, a = o.concat(n);
            i.default.setConfirmedResponseSystemTempTips(a), (0, s.default)({
                body: (null == e || null == (p = e.systemTempTips) ? void 0 : p.tips) || "当前服务繁忙，请稍后再试",
                buttons: [ {
                    text: t.CONFIRM_TEXT,
                    type: "submit"
                } ]
            });
        }
    }
};