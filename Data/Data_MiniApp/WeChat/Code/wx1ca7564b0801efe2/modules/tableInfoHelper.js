var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.goToOpenTable = void 0;

var r = e(require("../lib/mix/confirm")), i = require("../constants/bizConstants"), t = require("../lib/env"), a = require("../lib/wx/util"), n = require("../lib/navigator"), o = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), u = r.default;

exports.goToOpenTable = function(e) {
    e && u({
        body: e,
        buttons: [ {
            text: i.CONFIRM_TEXT,
            type: "submit",
            callback: function() {
                !function(e) {
                    var r, u;
                    null != (r = u = e || (t.isNativeMp ? (0, a.getWxUrlParam)() : o.default.parse(window.location.href, !1))) && r.tableNum && (u.orderBizTag = i.ORDER_BIZ_TAG.NORMAL + ""), 
                    (0, n.mixNavigateToByName)("main", u, !0);
                }();
            }
        } ]
    });
};