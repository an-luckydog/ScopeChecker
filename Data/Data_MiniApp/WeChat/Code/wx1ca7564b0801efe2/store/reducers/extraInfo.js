var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = require("../../b/helpers/defineProperty"), a = require("../../b/helpers/objectSpread2"), t = e(require("../../miniprogram_npm/seamless-immutable/index.js")), u = require("../actions/extraInfo"), s = (0, 
t.default)({
    headInfo: {},
    hasTabBar: !1,
    urlParams: {},
    mpUserInfo: {
        nickname: "",
        headimgurl: ""
    }
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    switch (n.type) {
      case u.SET_EXTRA_INFO:
        return t.default.merge(e, {
            headInfo: n.headInfo
        });

      case u.SET_URL_PARAMS:
        return t.default.merge(e, {
            urlParams: n.urlParams
        });

      case u.SET_MP_USER_INFO:
        return t.default.merge(e, {
            mpUserInfo: n.mpUserInfo
        });

      case u.SET_REMARK:
        return t.default.merge(e, {
            remark: a(a({}, e.remark), {}, r({}, n.key, n.remark))
        });

      default:
        return e;
    }
};