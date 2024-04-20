var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.iocQueryBindStatus = exports.gotoThirdLoginPath = exports.getChannelName = exports.getArrayListCubeConfig = exports.bindThirdAccount = void 0, 
exports.iocUnBindThirdAccountToServer = function(e, t, n) {
    return g.apply(this, arguments);
};

var t = e(require("../b/regenerator")), n = require("../b/helpers/asyncToGenerator"), r = e(require("../miniprogram_npm/@limo/core/index.js")), a = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), i = require("./mix/util"), s = require("../constants/bizConstants-main"), u = require("../constants/ajaxResCode-main"), c = require("../api/portal"), o = require("./env"), d = e(require("./mix/log")), C = e(require("./mix/request")), f = "bindMtAfterCount", p = "bindDPAfterCount", l = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0;
    t.ts = Date.now();
    var a = {}, s = (0, i.getHost)();
    return n && (a.rmsUser = n), r && (a.token = r), C.default.post(s + "/diancan/api/relate/third_bind", t, {
        withCredentials: !0,
        headers: a
    });
};

exports.bindThirdAccount = l;

var m = function(e) {
    switch (e) {
      case s.ACCOUNT_BIND_CODE.MT:
        return "美团";

      case s.ACCOUNT_BIND_CODE.DP:
        return "大众点评";

      default:
        return "";
    }
};

function h(e, t, n) {
    return D.apply(this, arguments);
}

function D() {
    return (D = n(t.default.mark(function e(n, r, a) {
        var o, C, h, D, g;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (n) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return");

              case 2:
                return o = m(r), n.startCB(), e.prev = 4, e.next = 7, (0, c.getSortCodeByUserId)({
                    bizType: 3
                });

              case 7:
                if (C = e.sent, h = (0, i.getMixUrlParam)("tenantId"), C.code !== u.RES_CODE.SUCCESS || !C.data || !C.data.token) {
                    e.next = 17;
                    break;
                }
                return D = C.data.token, e.next = 13, l(0, {
                    channel: r,
                    bizType: 3,
                    tenantId: h
                }, D, a);

              case 13:
                (g = e.sent) && g.code === u.RES_CODE.SUCCESS && g.success ? (r === s.ACCOUNT_BIND_CODE.MT ? d.default.addCustom(f, 1, {
                    who: 0
                }) : r === s.ACCOUNT_BIND_CODE.DP && d.default.addCustom(p, 1, {
                    who: 0
                }), n.successCB(a)) : n.failCB(g && g.message ? g.message : "登录".concat(o, "账号失败")), 
                e.next = 18;
                break;

              case 17:
                n.failCB(C && C.message ? C.message : "登录".concat(o, "账号失败"));

              case 18:
                e.next = 23;
                break;

              case 20:
                e.prev = 20, e.t0 = e.catch(4), n.failCB("登录".concat(o, "账号失败3").concat(e.t0));

              case 23:
                return e.prev = 23, n.endCB(), e.finish(23);

              case 26:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 4, 20, 23, 26 ] ]);
    }))).apply(this, arguments);
}

function g() {
    return (g = n(t.default.mark(function e(n, r, a) {
        var s, o;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!n) {
                    e.next = 13;
                    break;
                }
                return n.startCB(), e.prev = 2, s = (0, i.getMixUrlParam)("tenantId"), e.next = 6, 
                (0, c.unBindThirdAccount)({
                    channel: r,
                    bizType: 3,
                    id: a,
                    tenantId: s
                });

              case 6:
                (o = e.sent) && o.code === u.RES_CODE.SUCCESS && o.data ? n.successCB() : n.failCB(o ? o.message : "解除绑定失败"), 
                e.next = 13;
                break;

              case 10:
                e.prev = 10, e.t0 = e.catch(2), n.failCB(e.t0 && e.t0.message);

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 10 ] ]);
    }))).apply(this, arguments);
}

exports.getChannelName = m;

var x = function() {
    var e = n(t.default.mark(function e(n) {
        var r, a, d, C;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (n) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return");

              case 2:
                return n.startCB(), e.prev = 3, r = (0, i.getMixUrlParam)("tenantId"), a = o.isAliPay ? [ s.ACCOUNT_BIND_CODE.DP ] : [ s.ACCOUNT_BIND_CODE.MT, s.ACCOUNT_BIND_CODE.DP ], 
                e.next = 8, (0, c.queryBindStatus)({
                    bizType: 3,
                    channelList: a,
                    tenantId: r
                });

              case 8:
                d = e.sent, (C = d) && C.code === u.RES_CODE.SUCCESS && C.data && C.data.length > 0 ? n.successCB(d.data) : n.failCB("数据请求失败"), 
                e.next = 15;
                break;

              case 12:
                e.prev = 12, e.t0 = e.catch(3), n.failCB(e.t0 && e.t0.message ? e.t0.message : "绑定状态查询失败");

              case 15:
                return e.prev = 15, n.endCB(), e.finish(15);

              case 18:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 3, 12, 15, 18 ] ]);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}();

exports.iocQueryBindStatus = x;

exports.getArrayListCubeConfig = function(e) {
    var t = function(e) {
        switch (e) {
          case s.ACCOUNT_BIND_CODE.MT:
            return "绑定后可在手机点餐时自助核销美团团购券";

          case s.ACCOUNT_BIND_CODE.DP:
            return "绑定后将同步手机点餐订单和评价至大众点评";

          default:
            return "";
        }
    }, n = function(e) {
        switch (e) {
          case s.ACCOUNT_BIND_CODE.MT:
            return "https://p0.meituan.net/scarlett/235292193a4d4188f0bfc7c4c444e75f2435.png";

          case s.ACCOUNT_BIND_CODE.DP:
            return "https://p1.meituan.net/scarlett/5dd91472e317ecc7e973d4fff347405c2482.png";

          default:
            return "";
        }
    };
    return {
        tips: o.isAliPay ? " 绑定大众点评账号用于同步您的订单以及评价到大众点评。使用相同服务无需二次绑定。相同服务指同一服务方及其关联方提供的点餐服务对应的各类应用形态（如APP、小程序、公众号或H5等）。" : "绑定美团和大众点评账号用于核销您在美团的优惠券、同步您的订单以及评价到大众点评。使用相同服务无需二次绑定。相同服务指同一服务方及其关联方提供的点餐服务对应的各类应用形态（如APP、小程序、公众号或H5等）。",
        layoutList: e.map(function(e) {
            var r = 1 === e.bindStatus, a = r ? e.nickName : "";
            return {
                canRedirect: !0,
                adType: -1,
                activityType: -1,
                iconUrl: e.headImgUrl || n(e.channel),
                itemDisplayName: m(e.channel),
                extDesc: t(e.channel),
                redirectUrl: "",
                statusValue: a,
                statusId: e.channel,
                statusDescription: a ? "" : "未绑定",
                isBind: r,
                bindId: e.id
            };
        })
    };
};

exports.gotoThirdLoginPath = function(e, u, c, o) {
    var C = (0, i.getMixUrlParam)("tenantId");
    e === s.ACCOUNT_BIND_CODE.MT ? d.default.addCustom("bindMtBeforeCount", 1, {
        who: 0
    }) : e === s.ACCOUNT_BIND_CODE.DP && d.default.addCustom("bindDPBeforeCount", 1, {
        who: 0
    }), e === s.ACCOUNT_BIND_CODE.MT ? a.default.navigateTo("/diancan-menu/pages/login-mt/index?tenantId=" + C, !1) : e === s.ACCOUNT_BIND_CODE.DP && function(e) {
        if (e) {
            var a;
            switch ((0, i.getEnv)()) {
              case "production":
              case "ST":
              case "staging":
                a = "release";
                break;

              default:
                a = "develop";
            }
            if (!a) return e.failCB("无运行环境"), void e.endCB();
            e.startCB();
            var u = function() {
                var a = n(t.default.mark(function n(a) {
                    return t.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (t.prev = 0, !(a && a.referrerInfo && a.referrerInfo.extraData && a.referrerInfo.extraData.token)) {
                                t.next = 6;
                                break;
                            }
                            return t.next = 4, h(e, s.ACCOUNT_BIND_CODE.DP, a.referrerInfo.extraData.token);

                          case 4:
                            t.next = 7;
                            break;

                          case 6:
                            e.failCB("dp参数异常"), e.endCB();

                          case 7:
                            return t.prev = 7, r.default.getLimoRuntime().offAppShow(u), t.finish(7);

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, n, null, [ [ 0, , 7, 10 ] ]);
                }));
                return function(e) {
                    return a.apply(this, arguments);
                };
            }();
            r.default.getLimoRuntime().onAppShow(u), r.default.getLimoRuntime().navigateToMiniProgram({
                appId: "wx734c1ad7b3562129",
                path: "pages/mobile/mobile?type=mina&minaJump=mina_diancan&minaPath=}",
                extraData: {},
                envVersion: a,
                fail: function() {
                    r.default.getLimoRuntime().offAppShow(u), e.failCB("DP小程序打开失败"), e.endCB();
                }
            });
        }
    }(o);
};