var r = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toErrorTip = void 0;

var e = require("../b/helpers/objectSpread2"), t = r(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), i = require("./wx/util"), o = require("./mix/util"), u = require("../constants/path");

exports.toErrorTip = function(r) {
    var a = 100 === r.type ? null == r ? void 0 : r.url : function() {
        if (t.default.isNativeMp) {
            var r = (0, i.getWxCurrentPage)(), e = r.route, o = r.options;
            return "/".concat(e, "?").concat(t.default.stringify(o));
        }
        return window.location.href;
    }();
    t.default.isNativeMp ? t.default.redirectTo({
        url: "".concat(u.PATH["error-tip"], "?").concat(t.default.stringify(e(e({}, r), {}, {
            url: a
        })))
    }) : t.default.redirectTo({
        url: "".concat((0, o.getHost)(), "/diancan/web/error-tip?").concat(t.default.stringify(e(e({}, r), {}, {
            url: a
        })))
    });
};