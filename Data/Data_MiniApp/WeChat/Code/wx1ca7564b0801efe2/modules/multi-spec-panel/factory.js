var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSpecInstance = exports.SpecPanel = void 0;

var t = require("../../b/helpers/inherits"), r = require("../../b/helpers/createSuper"), n = e(require("../../b/regenerator")), i = require("../../b/helpers/objectSpread2"), u = require("../../b/helpers/asyncToGenerator"), a = require("../../b/helpers/classCallCheck"), c = require("../../b/helpers/createClass"), s = require("../../commons/constants"), o = function(e, t, r) {
    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], u = e.get(s.TYPES.TRIANGLE), a = u.multiFloat, c = u.plusFloat, o = t.currentPrice, l = t.originalPrice, h = t.estimatedPrice, p = r.reduce(function(e, t) {
        var r = t.type, n = t.price, u = t.count, o = r === s.ATTR_TYPE.METHOD;
        return !i && o ? e : c(e, o ? n : a(n, u));
    }, 0);
    return {
        currentPrice: n ? c(Number(o), p) : p,
        originalPrice: n ? c(Number(l), p) : p,
        estimatedPrice: h,
        deltaPrice: p
    };
}, l = function() {
    function e(t, r) {
        a(this, e), this.buttonText = "选好了", this.hideOperation = !0, this.methodPrice = !0, 
        this.entity = void 0, this.orgDish = void 0, this.entity = t, this.orgDish = r;
    }
    var t;
    return c(e, [ {
        key: "getPrice",
        value: function(e, t) {
            return o(this.entity, e, t, !1, this.methodPrice);
        }
    }, {
        key: "confirm",
        value: (t = u(n.default.mark(function e(t) {
            var r, u, a, c = arguments;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = c.length > 1 && void 0 !== c[1] ? c[1] : {}, u = r.callbackInfo, a = r.priceInfo, 
                    e.abrupt("return", (u && "function" == typeof u.callbackFun && u.callbackFun(i(i({}, t), {}, {
                        addPrice: null == a ? void 0 : a.currentPrice
                    })), !0));

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return t.apply(this, arguments);
        })
    } ]), e;
}();

exports.SpecPanel = l;

var h = function(e) {
    t(f, l);
    var h, p = r(f);
    function f() {
        var e;
        a(this, f);
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return (e = p.call.apply(p, [ this ].concat(r))).buttonText = "加入购物车", e.hideOperation = !1, 
        e;
    }
    return c(f, [ {
        key: "getPrice",
        value: function(e, t) {
            return o(this.entity, e, t);
        }
    }, {
        key: "confirm",
        value: (h = u(n.default.mark(function e(t) {
            var r, u, a, c, o, l, h, p = arguments;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = p.length > 1 && void 0 !== p[1] ? p[1] : {}, this.entity.get(s.TYPES.LX).sendMC("b_saaspay_wwi61uq9_mc"), 
                    u = t.spuId, a = t.skuId, c = r.itemNo, o = r.deltaCount, l = this.orgDish.specs.find(function(e) {
                        return e.skuId === a;
                    }), h = (l || {}).stockCount, e.t0 = !!this.entity.get(s.TYPES.CART).validateDish({
                        spuId: u,
                        skuId: a,
                        stockCount: h
                    }, o || 0), !e.t0) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 7, this.entity.get(s.TYPES.CART).addToCart(i(i({}, t), {}, {
                        itemNo: c
                    }));

                  case 7:
                    e.t0 = e.sent;

                  case 8:
                    return e.abrupt("return", e.t0);

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return h.apply(this, arguments);
        })
    } ]), f;
}(), p = function(e) {
    t(p, l);
    var o, h = r(p);
    function p() {
        return a(this, p), h.apply(this, arguments);
    }
    return c(p, [ {
        key: "confirm",
        value: (o = u(n.default.mark(function e(t) {
            var r, u, a, c = arguments;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = c.length > 1 && void 0 !== c[1] ? c[1] : {}, u = r.callbackInfo, a = r.priceInfo, 
                    e.abrupt("return", (this.entity.get(s.TYPES.DISH).addPackageSpecDish(i(i({}, t), {}, {
                        addPrice: null == a ? void 0 : a.currentPrice
                    }), u || {}), !0));

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return o.apply(this, arguments);
        })
    } ]), p;
}(), f = function(e) {
    t(i, l);
    var n = r(i);
    function i() {
        return a(this, i), n.apply(this, arguments);
    }
    return c(i);
}(), d = function(e) {
    t(i, l);
    var n = r(i);
    function i() {
        var e;
        a(this, i);
        for (var t = arguments.length, r = new Array(t), u = 0; u < t; u++) r[u] = arguments[u];
        return (e = n.call.apply(n, [ this ].concat(r))).methodPrice = !1, e;
    }
    return c(i, [ {
        key: "getPrice",
        value: function(e, t) {
            return o(this.entity, e, t, !1, !1);
        }
    } ]), i;
}(), v = function(e) {
    t(p, l);
    var o, h = r(p);
    function p() {
        return a(this, p), h.apply(this, arguments);
    }
    return c(p, [ {
        key: "confirm",
        value: (o = u(n.default.mark(function e(t) {
            var r, u, a, c = arguments;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = c.length > 1 && void 0 !== c[1] ? c[1] : {}, u = r.priceInfo, a = i(i({}, t), {}, {
                        addPrice: null == u ? void 0 : u.currentPrice
                    }), e.abrupt("return", (this.entity.get(s.TYPES.EMITTER).emit(s.EVENTS.COUPON_PANEL_DISH, {
                        cartDish: a
                    }), !0));

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return o.apply(this, arguments);
        })
    } ]), p;
}();

exports.getSpecInstance = function(e, t, r) {
    switch (e) {
      case s.SPEC_ADD_TYPE.PACKAGE:
        return new p(t, r);

      case s.SPEC_ADD_TYPE.ORDER_CONFIRM:
        return new f(t, r);

      case s.SPEC_ADD_TYPE.GIFT:
        return new d(t, r);

      case s.SPEC_ADD_TYPE.COUPON:
        return new v(t, r);

      case s.SPEC_ADD_TYPE.CART:
      default:
        return new h(t, r);
    }
};