var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("./wx/app-info"), a = require("./mix/util"), n = require("../constants/bizConstants-main"), r = require("./env"), i = e(require("./storageUtil")), o = "SESSION_BACKUP", s = function() {
    var e = i.default.get(o);
    e && e.length && e.forEach(function(e) {
        window.sessionStorage.getItem(e.key) || window.sessionStorage.setItem(e.key, e.value);
    });
}, c = +(0, a.getMixUrlParam)("fromVip"), u = +(0, a.getMixUrlParam)("bizType"), l = !1, g = function(e, t) {
    var n = "new_rms_menuorder";
    return (0, a.isUnitePage)() && "CARD_INFO" !== e || "USER_SELECTED_ADDRESS" === e ? (n = "rms-waimai-h5", 
    t ? "".concat(n, "$").concat(e, "$").concat(t) : "".concat(n, "$").concat(e)) : t ? "".concat(n, "_").concat(e, "_").concat(t) : "".concat(n, "_").concat(e);
}, p = {
    set: function(e, a, n) {
        var i, o = g(e, n);
        r.isNativeMp ? null == (i = (0, t.getNewApp)().diancanGlobalData) || i.setSessionStorageValue(o, a) : window.sessionStorage.setItem(o, JSON.stringify(a));
    },
    get: function(e, a) {
        var i = g(e, a);
        if (l || !c || u !== n.BIZ_TYPE_MAP.TAKEAWAY && u !== n.BIZ_TYPE_MAP.PICKUP || (s(), 
        l = !0), r.isNativeMp) try {
            var o;
            return null == (o = (0, t.getNewApp)().diancanGlobalData) ? void 0 : o.getSessionStorageValue(i);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return null;
        } else {
            var p = window.sessionStorage.getItem(i);
            try {
                return JSON.parse("" + p);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return null;
            }
        }
    },
    remove: function(e, a) {
        var n, i = g(e, a);
        r.isNativeMp ? null == (n = (0, t.getNewApp)().diancanGlobalData) || n.setSessionStorageValue(i, null) : window.sessionStorage.removeItem(i);
    }
};

exports.default = p;