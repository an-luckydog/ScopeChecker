var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUserInfo = exports.getTenantId = void 0;

e(require("../b/regenerator")), require("../b/helpers/asyncToGenerator");

var r, t, n, a, i = require("../b/helpers/objectSpread2"), u = e(require("../api/rmsStorage-main")), d = e(require("../api/userInfo")), s = require("../constants/ajaxResCode-main"), o = require("./env"), p = require("../constants/bizConstants-main"), I = require("./mix/util"), f = require("./wx/auth");

exports.getTenantId = function() {
    return +(0, I.getMixUrlParam)("tenantId") || u.default.getTenantId() || 0;
};

exports.getUserInfo = function() {
    if (t = {
        appId: "",
        headimgurl: "",
        nickname: "",
        openId: ""
    }, !o.isWX && !o.isAliPay && !o.isUnionPay) return t;
    var e = function() {
        if (!r) {
            if (o.isNativeMp && (r = (0, f.getOpenIdSync)())) {
                var e = u.default.getUserOpenId();
                e && e === r || u.default.setUserOpenId(r);
            }
            r || (r = u.default.getUserOpenId());
        }
        return r || "";
    }(), l = +(0, I.getMixUrlParam)("tenantId") || u.default.getTenantId() || 0, g = +(0, 
    I.getMixUrlParam)("bizType");
    return t.openId = e, t.headimgurl = "", t.nickname = "", l ? e ? u.default.getUserInfo(l) : (n || a || g === p.BIZ_TYPE_MAP.TAKEAWAY || g === p.BIZ_TYPE_MAP.PICKUP || (n = d.default.getUserInfo({
        tenantId: l,
        queryType: 0,
        bizType: 3
    }).then(function(e) {
        if (n = null, e && e.code === s.RES_CODE.SUCCESS && e.data) {
            var d = e.data, p = d.openId, I = d.userId, f = d.appId;
            a = !0, r = o.isUnionPay ? I : p, t = i(i({}, t), {}, {
                openId: r,
                appId: f
            }), u.default.setUserOpenId(r), u.default.setUserInfo(l, i(i({}, u.default.getUserInfo(l)), t));
        }
    }).catch(function() {
        n = null;
    })), t) : t;
};