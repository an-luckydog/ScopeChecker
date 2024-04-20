var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, exports.getWMHeaderWX = x;

var r = e(require("../../b/regenerator")), t = require("../../b/helpers/typeof"), a = require("../../b/helpers/objectSpread2"), n = require("../../b/helpers/asyncToGenerator"), i = e(require("../../miniprogram_npm/@analytics/wechat-sdk/index.js")), o = require("../../constants/bizConstants-main"), u = require("../env"), s = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), d = require("./app-info"), c = require("../mix/util"), p = require("./auth"), l = require("../mix/sign"), m = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), h = e(require("../../api/rmsStorage-main")), f = e(require("./log")), g = e(require("../../miniprogram_npm/@mtfe/saas-user-auth/index.js")), I = require("../../config/index.js");

function x(e) {
    var r, t = +(0, c.getMixUrlParam)("bizType") || "", a = {};
    return (0, c.isUnitePage)() && u.isWxNative && (a = {
        "x-biz-type": (null == e || null == (r = e.header) ? void 0 : r["x-biz-type"]) || t,
        businessLine: 600,
        "X-miniappId": (0, d.getAppId)(),
        "X-appVersion": I.VERSION
    }), a;
}

var b = {
    method: "GET"
}, v = i.default.get("lxcuid"), q = function() {
    var e = n(r.default.mark(function e(n) {
        var i, q, P, S, k, U, y, O, C, X, j, N, R, T, E, M, D, L, _, W, V, w, z, G, K, A, F, H, J, $;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (i = a(a(a({}, b), n), {}, {
                    timeout: n.timeout || o.PROD_TIMEOUT
                }), q = i.url, P = i.method, S = void 0 === P ? "GET" : P, k = i.baseURL, U = i.data, 
                y = i.params, O = void 0 === y ? {} : y, U && (O = U), q) {
                    e.next = 4;
                    break;
                }
                throw Error("Please set `url` in request params!");

              case 4:
                return C = (0, d.getAppId)(), e.next = 7, g.default.getUserInfoSync();

              case 7:
                return X = e.sent, j = X.openId, N = X.unionId, R = X.userTokenStr, T = (0, p.getUserInfoSync)(), 
                E = encodeURIComponent(JSON.stringify({
                    nickname: T.nickname || "",
                    headimgurl: T.headimgurl || ""
                })), M = g.default.getMemberToken(), D = (0, d.getPerceptionFrom)(), L = k || (0, 
                c.getHost)() + "/diancan/api/", i.url = function(e, r) {
                    return /^https?:\/\/.+$/.test(r) ? r : r ? "".concat(e.replace(/\/+$/, ""), "/").concat(r.replace(/^\/+/, "")) : e;
                }(L, q), _ = (0, c.getMixUrlParam)("shopId") || O.shopId || O.mtShopId || "", "POST" === S && (i.url += "?mtShopId=" + _), 
                _ && (0, l.checkNeedSign)(i.url) && (W = (0, l.getSignWithPOI)(_)) && O && "object" == t(O) && (O.sign = W), 
                (V = h.default.getCustomChannel()) && O && "object" == t(O) && (O.customChannel = V), 
                w = O.tenantId || (0, c.getMixUrlParam)("tenantId"), z = x(i), G = (0, d.getCloudDataCacheKey)(), 
                i.header = a(a({
                    poiId: _
                }, i.header), {}, {
                    tenantId: w,
                    lxcuid: v,
                    "X-Platform": (0, u.getXPlatform)(),
                    "X-OpenId": j,
                    "X-UnionId": N,
                    "X-UserInfo": E,
                    "X-appId": C,
                    "X-token": M,
                    "X-user": R,
                    "X-WxappVersion": I.VERSION,
                    "X-cardInfo": h.default.getCardInfo(),
                    "X-From": D,
                    "X-cacheKey": G,
                    appCode: (0, c.getAppCode)()
                }, z), i.data = s.default.removeInvalidValue(O), K = Number((0, c.getMixUrlParam)("tenantId") || ""), 
                A = Number(O.tenantId || ""), F = Number((0, c.getMixUrlParam)("shopId") || (0, 
                c.getMixUrlParam)("mtShopId") || ""), H = Number(O.shopId || O.mtShopId || ""), 
                (F && H && F !== H || K && A && A !== K) && f.default.addError("request shopId or tenantId 异常", {
                    msg: "url: ".concat(i.url, ",shopIdOnParams:").concat(F, ",shopIdOnData: ").concat(H, ",tenantIdOnData:").concat(A, ",tenantIdOnParams: ").concat(K)
                }), e.prev = 25, e.next = 28, (0, m.request)(i, function(e) {
                    return f.default.ajaxReportError(q, e, i);
                });

              case 28:
                return function(e, r) {
                    var t = e.header;
                    s.default.isWxNative && t && (r.indexOf("/miniprogram/route") > -1 || r.indexOf("/launch/confirm") > -1) && (t["cache-key"] ? (0, 
                    d.setCloudDataCacheKey)(t["cache-key"]) : (0, d.setCloudDataCacheKey)(""), t["cookie-info"] ? (0, 
                    d.setCookieInfo)(JSON.parse(t["cookie-info"])) : (0, d.setCookieInfo)({}));
                }(J = e.sent, (null == i ? void 0 : i.url) || ""), e.next = 32, (0, p.silentLogin)(J, i);

              case 32:
                return $ = e.sent, e.abrupt("return", $ ? Promise.resolve($) : Promise.reject(Error("静默登录失败, 可能已经登陆过了但是信息丢失")));

              case 36:
                return e.prev = 36, e.t0 = e.catch(25), e.abrupt("return", Promise.reject(e.t0));

              case 39:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 25, 36 ] ]);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}();

q.get = function(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        url: ""
    };
    return q({
        url: e,
        method: "GET",
        params: r.params,
        timeout: r.timeout,
        baseURL: r.baseURL || "",
        header: r.headers,
        openShark: r.openShark,
        success: r.success,
        fail: r.fail
    });
}, q.post = function(e, r) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        url: ""
    };
    return q({
        url: e,
        method: "POST",
        params: r,
        timeout: t.timeout,
        baseURL: t.baseURL || "",
        header: t.headers,
        openShark: t.openShark,
        success: t.success,
        fail: t.fail
    });
};

var P = q;

exports.default = P;