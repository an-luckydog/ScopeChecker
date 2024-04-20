Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.queryMemberAvatar = void 0;

var e = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), r = "https://p1.meituan.net/travelcube/7ef30faf98c6e29cce3cc10498f2a6337347.png", t = function(e, r) {
    return !e || !(!r || e !== r);
}, n = function(e, t) {
    return e ? e === r ? t || r : e : t || r;
};

exports.queryMemberAvatar = function(r) {
    var u, a = e.ThemeModel.getInstance(), i = null == a || null == (u = a.member) ? void 0 : u.defaultHeadImg;
    return {
        headUrl: n(r, i),
        isDefault: t(r, i)
    };
};