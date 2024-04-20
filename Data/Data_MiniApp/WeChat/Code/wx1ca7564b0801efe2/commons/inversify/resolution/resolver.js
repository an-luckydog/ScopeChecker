var e = require("../../../b/helpers/interopRequireWildcard"), r = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolve = function(e) {
    return f(e.plan.rootRequest.requestScope)(e.plan.rootRequest);
};

var t = r(require("../../../b/regenerator")), n = require("../../../b/helpers/asyncToGenerator"), i = e(require("../constants/error_msgs")), u = require("../constants/literal_types"), a = require("../planning/planner"), o = require("../scope/scope"), s = require("../utils/async"), c = require("../utils/binding_utils"), p = require("../utils/exceptions"), l = require("./instantiation"), f = function e(r) {
    return function(t) {
        t.parentContext.setCurrentRequest(t);
        var n = t.bindings, i = t.childRequests, u = t.target && t.target.isArray(), a = !(t.parentRequest && t.parentRequest.target && t.target && t.parentRequest.target.matchesArray(t.target.serviceIdentifier));
        if (u && a) return i.map(function(t) {
            return e(r)(t);
        });
        if (!t.target.isOptional() || 0 !== n.length) {
            var o = n[0];
            return d(r, t, o);
        }
    };
}, v = function(e, r, t) {
    var n, a = r.childRequests;
    switch ((0, c.ensureFullyBound)(t), t.type) {
      case u.BindingTypeEnum.ConstantValue:
      case u.BindingTypeEnum.Function:
        n = t.cache;
        break;

      case u.BindingTypeEnum.Constructor:
        n = t.implementationType;
        break;

      case u.BindingTypeEnum.Instance:
        n = (0, l.resolveInstance)(t, t.implementationType, a, f(e));
        break;

      default:
        n = function(e, r) {
            var t = (0, c.getFactoryDetails)(e);
            return (0, p.tryAndThrowErrorIfStackOverflow)(function() {
                return t.factory.bind(e)(r);
            }, function() {
                return new Error(i.CIRCULAR_DEPENDENCY_IN_FACTORY(t.factoryType, r.currentRequest.serviceIdentifier.toString()));
            });
        }(t, r.parentContext);
    }
    return n;
}, d = function(e, r, t) {
    return function(e, r, t) {
        var n = (0, o.tryGetFromScope)(e, r);
        return null !== n || (n = t(), (0, o.saveToScope)(e, r, n)), n;
    }(e, t, function() {
        var n = v(e, r, t);
        return n = (0, s.isPromise)(n) ? n.then(function(e) {
            return y(r, t, e);
        }) : y(r, t, n);
    });
};

function y(e, r, t) {
    var n, i = q(e.parentContext, r, t), u = m(e.parentContext.container), o = u.next();
    do {
        n = o.value;
        var c = e.parentContext, p = e.serviceIdentifier, l = h(n, p);
        i = (0, s.isPromise)(i) ? x(l, c, i) : g(l, c, i), o = u.next();
    } while (!0 !== o.done && !(0, a.getBindingDictionary)(n).hasKey(e.serviceIdentifier));
    return i;
}

var q = function(e, r, t) {
    return "function" == typeof r.onActivation ? r.onActivation(e, t) : t;
}, g = function(e, r, t) {
    for (var n = e.next(); !n.done; ) {
        if (t = n.value(r, t), (0, s.isPromise)(t)) return x(e, r, t);
        n = e.next();
    }
    return t;
}, x = function() {
    var e = n(t.default.mark(function e(r, n, i) {
        var u, a;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, i;

              case 2:
                u = e.sent, a = r.next();

              case 4:
                if (a.done) {
                    e.next = 11;
                    break;
                }
                return e.next = 7, a.value(n, u);

              case 7:
                u = e.sent, a = r.next();

              case 9:
                e.next = 4;
                break;

              case 11:
                return e.abrupt("return", u);

              case 12:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(r, t, n) {
        return e.apply(this, arguments);
    };
}(), h = function(e, r) {
    var t = e._activations;
    return t.hasKey(r) ? t.get(r).values() : [].values();
}, m = function(e) {
    for (var r = [ e ], t = e.parent; null !== t; ) r.push(t), t = t.parent;
    return {
        next: function() {
            var e = r.pop();
            return void 0 !== e ? {
                done: !1,
                value: e
            } : {
                done: !0,
                value: void 0
            };
        }
    };
};