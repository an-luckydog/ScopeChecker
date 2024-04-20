var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("./wx/app-info"), r = require("./mix/util"), a = e(require("./storage")), i = e(require("./mix/log")), n = e(require("../constants/storage")), o = require("./env"), s = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = "new_rms_menuorder", a = new Set([ n.default.CARD_INFO.key, n.default.SHOP_CACHE.key, n.default.UNVERIFIED_DISH_CONFIRM.key ]);
    return ((0, r.isUnitePage)() && !a.has(e) || "USER_SELECTED_ADDRESS" === e) && (t = "rms-waimai-h5"), 
    t;
}, u = function(e, t) {
    var r = s(e);
    return t ? "".concat(r, "_").concat(e, "_").concat(t) : "".concat(r, "_").concat(e);
}, c = {}, f = {
    set: function(e, r, a) {
        var i = n.default[e], s = u(e, a);
        if (o.isNativeMp && "DISH_LIST" === e) (0, t.getNewApp)().diancanGlobalData.setDishList(s, r); else if (i.storeTime) {
            var c = Date.now() + Number(i.storeTime);
            this._set(s, r, c);
        } else this._set(s, r);
    },
    get: function(e, r) {
        var a = u(e, r);
        return o.isNativeMp && "DISH_LIST" === e && (0, t.getNewApp)().diancanGlobalData.getDishList(a) || this._get(a);
    },
    remove: function(e, t) {
        var r = u(e, t);
        this._remove(r);
    },
    clearExpiredItem: function() {
        var e = this, t = s(), r = a.default.getAllStorage();
        Object.keys(r).forEach(function(r) {
            RegExp("^".concat(t, ".*")).test(r) && e._get(r);
        });
    },
    _set: function(e, t, r) {
        var n = this, o = s() + "_DISH_LIST";
        try {
            a.default.set(e, t, r);
        } catch (s) {
            s = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(s);
            i.default.addError("localStorage 爆栈", "key: ".concat(e, ", ").concat(s)), this._remove(e);
            var u = a.default.getAllStorage();
            Object.keys(u).forEach(function(e) {
                e.indexOf(o) > -1 && n._remove(e);
            }), e.indexOf(o) < 0 && !c[e] && (c[e] = (Number(c[e]) || 0) + 1, this._set(e, t, r));
        }
    },
    _get: function(e) {
        return a.default.get(e);
    },
    _remove: function(e) {
        a.default.remove(e);
    }
};

exports.default = f;