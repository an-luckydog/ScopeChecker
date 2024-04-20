var e = require("../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = require("../../../../b/helpers/objectSpread2"), n = e(require("../../../../b/regenerator")), s = require("../../../../b/helpers/asyncToGenerator"), a = require("../../../../b/helpers/classCallCheck"), i = require("../../../../b/helpers/createClass"), o = require("../../../../commons/inversify"), u = require("../../../../commons/constants"), c = require("../../../../commons/types"), l = (0, 
o.injectable)()(t = function(e) {
    return (0, o.inject)(u.TYPES.REQUEST)(e, void 0, 0);
}(t = function(e) {
    return (0, o.inject)(u.TYPES.LIMO)(e, void 0, 1);
}(t = function(e) {
    return (0, o.inject)(u.TYPES.LOG)(e, void 0, 2);
}(t = function(e) {
    return (0, o.inject)(u.EVENTS.GET_LOCATION)(e, void 0, 3);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ void 0 === c.Request ? Object : c.Request, void 0 === c.ILimo ? Object : c.ILimo, Object, Object ])(t = function() {
    function e(t, r, n, s) {
        a(this, e), this.request = t, this.limo = r, this.log = n, this.getLocation = s;
    }
    var t, o;
    return i(e, [ {
        key: "run",
        value: (o = s(n.default.mark(function e(t) {
            var r, s, a, i, o;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.shopStatus, e.next = 3, this.requestRecommend(t);

                  case 3:
                    if (s = e.sent) {
                        e.next = 6;
                        break;
                    }
                    return e.abrupt("return");

                  case 6:
                    a = s.title, i = s.subTitle, o = s.shopList, a && o && o.length && this.showStatusPanel({
                        status: r,
                        recommendInfo: {
                            title: a,
                            subTitle: i,
                            shopList: o
                        }
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return o.apply(this, arguments);
        })
    }, {
        key: "requestRecommend",
        value: (t = s(n.default.mark(function e(t) {
            var s, a, i, o, u;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return s = {}, e.prev = 1, e.next = 4, this.getLocation({
                        canUseSessionCache: !0,
                        defaultTimeout: 5e5,
                        showAuthSettingDialog: !1
                    });

                  case 4:
                    a = e.sent, i = a.lat, o = a.lng, s = {
                        latitude: i,
                        longitude: o
                    }, e.next = 13;
                    break;

                  case 10:
                    e.prev = 10, e.t0 = e.catch(1), console.error(e.t0);

                  case 13:
                    return e.prev = 13, e.next = 16, this.request.post("/@biz/shop/recommend", r(r({}, t), s));

                  case 16:
                    if ((u = e.sent) && 200 === u.code && u.data) {
                        e.next = 19;
                        break;
                    }
                    return e.abrupt("return");

                  case 19:
                    return e.abrupt("return", u.data);

                  case 22:
                    e.prev = 22, e.t1 = e.catch(13), this.log.addError("推荐门店接口失败", "error:".concat(JSON.stringify(null != e.t1 ? e.t1 : "")));

                  case 25:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 10 ], [ 13, 22 ] ]);
        })), function(e) {
            return t.apply(this, arguments);
        })
    }, {
        key: "showStatusPanel",
        value: function(e) {
            this.limo.limoShowDialog("shop-status-panel", e, {
                position: "bottom",
                maskClosable: !0
            });
        }
    } ]), e;
}()) || t) || t) || t) || t) || t) || t) || t;

exports.default = l;