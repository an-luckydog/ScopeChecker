var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateFmpInfo = exports.saveLocationInfoToCloud = exports.getPageSpu = exports.getMenuFmp = void 0;

var r = require("../../../b/helpers/objectSpread2"), t = require("../../../b/helpers/typeof"), a = e(require("../../../b/regenerator")), n = require("../../../b/helpers/asyncToGenerator"), u = e(require("../../../api/menuApi")), o = require("../../../types/IResponse"), s = e(require("../../../miniprogram_npm/seamless-immutable/index.js")), i = require("../../../lib/util"), p = require("../../../constants/ajaxResCode"), c = require("../../../constants/errorTip"), l = e(require("../../../lib/mix/log")), d = e(require("../../../api/rmsStorage")), f = require("./point"), m = require("../../../lib/navigator"), b = require("../../../types/common.d.js"), E = e(require("../../../api/cloudDataApi")), R = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), v = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), h = require("../../../lib/wx/weiqian-special"), x = l.default, g = 0, D = function() {
    var e = n(a.default.mark(function e(r) {
        var n, s, i, l, E, x, g, D, I, S, O, _, C, T;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "userGeoPoint" in r && "object" == t(r.userGeoPoint) && r.userGeoPoint && (r.userGeoPoint = JSON.stringify(r.userGeoPoint)), 
                e.prev = 1, e.next = 4, u.default.requestFmpData(r);

              case 4:
                if (e.t0 = e.sent, e.t0) {
                    e.next = 7;
                    break;
                }
                e.t0 = void 0;

              case 7:
                s = e.t0, e.next = 13;
                break;

              case 10:
                return e.prev = 10, e.t1 = e.catch(1), e.abrupt("return", {
                    errorType: f.FAIL_REASON.NETWORK_ERROR,
                    errorMsg: "string" == typeof e.t1 ? e.t1 : "网络异常"
                });

              case 13:
                if (null != (n = s) && null != (n = n.data) && null != (n = n.memberInfo) && n.memberId && v.LXReporter.appendCommonParam({
                    member_id: null == (i = s) || null == (i = i.data) || null == (i = i.memberInfo) ? void 0 : i.memberId
                }), s) {
                    e.next = 16;
                    break;
                }
                return e.abrupt("return", {
                    errorType: f.FAIL_REASON.NETWORK_ERROR,
                    errorMsg: "网络异常，请重试",
                    errorIconUrl: "https://p0.meituan.net/travelcube/1ae6a3c371df4b08d7a438bc91a8ddbe64461.png"
                });

              case 16:
                E = (l = s).code, x = l.data, g = l.msg, e.t2 = E, e.next = e.t2 === p.RES_CODE.SUCCESS ? 20 : e.t2 === p.RES_CODE.REDIRECT_CODE ? 21 : 610 === e.t2 ? 22 : e.t2 === c.ERROR_TYPE.NEED_DOWNGRADE_CODE ? 23 : 450 === e.t2 ? 24 : e.t2 === c.ERROR_TYPE.NOT_HAS_USER_ID ? 25 : 1202 === e.t2 || 1200 === e.t2 ? 26 : 1201 === e.t2 ? 27 : 33;
                break;

              case 20:
                return e.abrupt("return", x);

              case 21:
                return e.abrupt("return", o.ResponseState.REDIRECT);

              case 22:
                return e.abrupt("return", {
                    errorType: f.FAIL_REASON.CAN_NOT_ORDER_DISH,
                    errorMsg: g || "暂不支持点餐"
                });

              case 23:
                return e.abrupt("return", {
                    errorType: f.FAIL_REASON.NEED_DOWNGRADE_CODE,
                    errorMsg: ""
                });

              case 24:
                return e.abrupt("return");

              case 25:
                return e.abrupt("return", {
                    errorType: f.FAIL_REASON.NEED_DOWNGRADE_CODE,
                    errorMsg: g || "未获取到用户信息"
                });

              case 26:
                return e.abrupt("return", ((0, h.checkWeiQian)() || (0, m.jumpToShopList)(), o.ResponseState.REDIRECT));

              case 27:
                if (D = s.data, S = (I = null != D ? D : {}).redirectUrl, O = I.fmpBizData, !S || !O) {
                    e.next = 32;
                    break;
                }
                return d.default.setMultiShop(b.MultiShop.MULTIPLE + ""), C = O.recSceneFlag, T = O.shopCache, 
                e.abrupt("return", (null !== C && d.default.setRecSceneFlag(!!C), T && d.default.setShopCache(T), 
                R.default.redirectTo(null == (_ = s.data) ? void 0 : _.redirectUrl), o.ResponseState.REDIRECT));

              case 32:
                return e.abrupt("break", 34);

              case 33:
                return e.abrupt("return", {
                    errorType: E,
                    errorMsg: g || "网络异常，请重试",
                    errorIconUrl: "https://p0.meituan.net/travelcube/1ae6a3c371df4b08d7a438bc91a8ddbe64461.png"
                });

              case 34:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 10 ] ]);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}();

exports.getMenuFmp = D;

var I = function() {
    var e = n(a.default.mark(function e(t) {
        var n, o, c, l, d, f, m, b, E, R, v, h, g, D, I;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t.userGeoPoint && (t.userGeoPoint = JSON.stringify(t.userGeoPoint)), e.prev = 1, 
                e.next = 4, u.default.requestSpu(t);

              case 4:
                if (e.t0 = e.sent, e.t0) {
                    e.next = 7;
                    break;
                }
                e.t0 = void 0;

              case 7:
                if (o = e.t0) {
                    e.next = 10;
                    break;
                }
                return e.abrupt("return");

              case 10:
                if (c = o.code, l = o.data, c === p.RES_CODE.SUCCESS && l) {
                    e.next = 13;
                    break;
                }
                return e.abrupt("return");

              case 13:
                if (d = l.spuDetail, f = l.totalCount, m = l.cacheId, b = l.pageSize, E = l.mtShopId, 
                n = s.default.merge(l), !(f <= b)) {
                    e.next = 16;
                    break;
                }
                return e.abrupt("return", n);

              case 16:
                for (f > 900 && E && x.sendInfo({
                    name: "超过900道菜的门店",
                    content: {
                        shopId: E,
                        totalCount: f
                    }
                }), R = d, v = Math.ceil(f / b), h = [], g = 2; g <= v; g++) h.push(u.default.requestSpu(r(r({}, t), {}, {
                    pageNum: g,
                    cacheId: m
                })));
                return e.next = 21, Promise.all(h);

              case 21:
                return D = e.sent, I = !1, e.abrupt("return", (D.every(function(e) {
                    var r = (0, i.getIn)(e, [ "data", "spuDetail" ]);
                    return 200 === (null == e ? void 0 : e.code) && r ? (Object.assign(R, r), !0) : (I = !0, 
                    !1);
                }), I ? void x.addError("获取菜单页数据失败", "菜品数据不全") : s.default.setIn(n, [ "spuDetail" ], R)));

              case 26:
                e.prev = 26, e.t1 = e.catch(1);

              case 28:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 26 ] ]);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}();

exports.getPageSpu = I;

var S = function() {
    var e = n(a.default.mark(function e(t, n) {
        var o, i, p, c, l, d, f, m, b, E, R, v, h, D, I, O;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = n, e.prev = 1, e.next = 4, u.default.requestMenuExtra(t);

              case 4:
                if ((p = e.sent) && p.data) {
                    e.next = 7;
                    break;
                }
                return e.abrupt("return", n);

              case 7:
                return c = p.data, l = c.openTableInfo, d = c.mandatoryInfos, f = c.fmpBizData, 
                b = (m = null != f ? f : {}).orderBottomVO, E = m.showDishOperation, o = s.default.setIn(n, [ "shopConfig", "mandatoryInfos" ], d), 
                o = s.default.setIn(o, [ "openTableInfo" ], l), R = null != l && l.peopleCount ? (null == l ? void 0 : l.peopleCount) + " 人用餐" : null, 
                e.abrupt("return", (o = s.default.setIn(o, [ "moduleData", "menu-shop-info", "data", "peopleCountText" ], R), 
                o = s.default.setIn(o, [ "fmpBizData" ], r(r({}, null != (i = o.fmpBizData) ? i : {}), {}, {
                    orderBottomVO: b,
                    showDishOperation: E
                }))));

              case 13:
                if (e.prev = 13, e.t0 = e.catch(1), !(g < 2)) {
                    e.next = 17;
                    break;
                }
                return e.abrupt("return", (g++, S(t, n)));

              case 17:
                v = e.t0 || {}, h = v.config, D = v.code, I = v.message, O = {
                    url: null == h ? void 0 : h.url,
                    timeout: "ECONNABORTED" === D && -1 !== I.indexOf("timeout"),
                    message: I
                }, x.addError((null == h ? void 0 : h.url) + "接口连续3次异常", O, {
                    category: "ajaxError"
                });

              case 19:
                return e.abrupt("return", o);

              case 20:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 13 ] ]);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}();

exports.updateFmpInfo = S;

var O = function() {
    var e = n(a.default.mark(function e(r) {
        var t, n;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.cacheKey, n = r.location, e.prev = 1, e.next = 4, E.default.saveLocalData({
                    cacheKey: t,
                    localData: {
                        cachedLocation: JSON.stringify(n)
                    }
                });

              case 4:
                e.next = 8;
                break;

              case 6:
                e.prev = 6, e.t0 = e.catch(1);

              case 8:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 6 ] ]);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}();

exports.saveLocationInfoToCloud = O;