var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.showTakeCouponTipsHandle = exports.saveLocationInfo = exports.hasEnoughOptions = exports.handleTapTipsBannerButton = exports.getLocationInfo = exports.getCompleteParameters = void 0, 
require("../b/helpers/Arrayincludes");

var t = e(require("../b/regenerator")), r = require("../b/helpers/objectSpread2"), n = require("../b/helpers/asyncToGenerator"), o = (e(require("../miniprogram_npm/seamless-immutable/index.js")), 
e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js"))), a = (e(require("../api/menu")), 
e(require("../api/dish")), e(require("../api/rmsStorage"))), i = (require("./LXHelper"), 
require("./commonHelper"), require("../constants/bizConstants")), u = (require("../constants/errorTip"), 
require("../miniprogram_npm/@components/limo-ui/ui-constant/enum")), s = (require("./menu/dish/DishDataTransfer"), 
require("../constants/ajaxResCode"), require("../lib/util"), e(require("../lib/mix/log"))), l = e(require("../lib/mix/confirm")), c = e(require("../lib/mix/toast")), p = require("../lib/mix/util"), d = require("../lib/geo"), f = require("./menu/dataSource/RemoteDataSource"), m = require("../constants/cartConstants"), h = require("../lib/navigator");

exports.showTakeCouponTipsHandle = function(e, t) {
    var r, n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}, u = (0, 
    p.getMixUrlParam)("shopId"), s = a.default.getMemberEnterFromTakeCouponPanel(u);
    if (null != t && t.memberId) {
        if (o.default.isNativeMp || s) {
            var d = (null == (r = e["menu-popup-windows"]) || null == (r = r.data) || null == (r = r.takeCoupon) ? void 0 : r.activityTypeList) || [], f = (null == (n = e["menu-popup-windows"]) || null == (n = n.data) || null == (n = n.takeCoupon) ? void 0 : n.activityFailedConfirmInfo) || {};
            d.find(function(e) {
                return 2 === e;
            }) ? c.default.show({
                icon: "none",
                content: "优惠券领取成功",
                duration: 3e3
            }) : (0, l.default)({
                title: (null == f ? void 0 : f.title) || "领取失败",
                body: (null == f ? void 0 : f.body) || "当前优惠仅适用于新会员，您不符合参加条件",
                buttons: [ {
                    text: "我知道了",
                    type: "submit",
                    callback: function() {
                        i();
                    }
                } ]
            }), a.default.setMemberEnterFromTakeCouponPanel(u, !1);
        }
    } else a.default.setMemberEnterFromTakeCouponPanel(u, !1);
};

var v = function() {
    var e = n(t.default.mark(function e(r, n) {
        var o;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, Date.now(), e.next = 4, (0, d.getLocation)(r);

              case 4:
                return o = e.sent, e.abrupt("return", {
                    latitude: o.lat,
                    longitude: o.lng
                });

              case 8:
                e.prev = 8, e.t0 = e.catch(0), "USER_AUTHORIZED" !== e.t0.type && "SYS_UNAUTHORIZE" !== e.t0.type || n && n.showDialog("shop-ui-confirm", {
                    title: "无法获取地理位置",
                    content: "请前往“手机设置-隐私-定位服务”开启当前 APP 位置信息权限。",
                    btns: [ {
                        text: "确定",
                        type: u.BUTTON_TYPE.PRIMARY,
                        callback: function() {
                            n.closeDialog("shop-ui-confirm");
                        }
                    } ]
                }), s.default.addLog("获取定位失败", e.t0);

              case 11:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 0, 8 ] ]);
    }));
    return function(t, r) {
        return e.apply(this, arguments);
    };
}();

exports.getLocationInfo = v;

exports.getCompleteParameters = function(e) {
    var t = e.shopConfig, n = e.oldParameter, a = e.fmpBizData, i = null != t ? t : {}, u = i.bizMode, s = i.mtShopId, l = i.tableNum, c = i.orderBizTag, p = (null != a ? a : {}).cacheKey;
    return r(r({}, n), o.default.removeInvalidValue({
        bizMode: u,
        shopId: s,
        tableNum: l,
        cacheKey: p,
        orderBizTag: c
    }));
};

exports.hasEnoughOptions = function(e) {
    return [ "shopId" ].every(function(t) {
        return !!e[t];
    });
};

var T = function() {
    var e = n(t.default.mark(function e(r) {
        var n, o, a;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (n = r.bizType, o = r.location, a = r.cacheKey, e.t0 = Number(n) === i.BIZ_TYPE_MAP.PICKUP && o && a, 
                !e.t0) {
                    e.next = 5;
                    break;
                }
                return e.next = 5, (0, f.saveLocationInfoToCloud)({
                    cacheKey: a,
                    location: o
                });

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}();

exports.saveLocationInfo = T;

var b = function() {
    var e = n(t.default.mark(function e(r) {
        var o, a, i, u, s;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (o = r.event, a = r.onGotLocation, i = r.Limo, (u = o.detail.buttonText) !== m.TIPS_BANNER_BUTTON_TEXT.GET_AUTH) {
                    e.next = 7;
                    break;
                }
                return e.next = 5, v({
                    canUseSessionCache: !0,
                    defaultTimeout: 5e5,
                    showAuthSettingDialog: !0,
                    userSettingAuthSuccess: function() {
                        var e = n(t.default.mark(function e() {
                            var r;
                            return t.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, v({
                                        canUseSessionCache: !0
                                    });

                                  case 2:
                                    (r = e.sent) && a(r);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, i);

              case 5:
                (s = e.sent) && a(s);

              case 7:
                u === m.TIPS_BANNER_BUTTON_TEXT.CHANGE_SHOP && (0, h.jumpToShopList)();

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}();

exports.handleTapTipsBannerButton = b;