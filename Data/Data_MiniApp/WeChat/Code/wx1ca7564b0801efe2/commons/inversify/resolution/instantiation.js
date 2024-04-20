var e = require("../../../b/helpers/interopRequireWildcard"), r = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolveInstance = function(e, r, t, n) {
    !function(e, r) {
        e.scope !== c.BindingScopeEnum.Singleton && function(e, r) {
            var t = "Class cannot be instantiated in ".concat(e.scope === c.BindingScopeEnum.Request ? "request" : "transient", " scope.");
            if ("function" == typeof e.onDeactivation) throw new Error((0, u.ON_DEACTIVATION_ERROR)(r.name, t));
            if (Reflect.hasMetadata(p.PRE_DESTROY, r)) throw new Error((0, u.PRE_DESTROY_ERROR)(r.name, t));
        }(e, r);
    }(e, r);
    var s = function(e, r, t) {
        var n;
        if (r.length > 0) {
            var s = function(e, r) {
                return e.reduce(function(e, t) {
                    var n = r(t);
                    return t.target.type === c.TargetTypeEnum.ConstructorArgument ? e.constructorInjections.push(n) : (e.propertyRequests.push(t), 
                    e.propertyInjections.push(n)), e.isAsync || (e.isAsync = (0, f.isPromiseOrContainsPromise)(n)), 
                    e;
                }, {
                    constructorInjections: [],
                    propertyInjections: [],
                    propertyRequests: [],
                    isAsync: !1
                });
            }(r, t), o = i(i({}, s), {}, {
                constr: e
            });
            n = s.isAsync ? function(e) {
                return y.apply(this, arguments);
            }(o) : l(o);
        } else n = new e();
        return n;
    }(r, t, n);
    return (0, f.isPromise)(s) ? s.then(function(e) {
        return d(r, e);
    }) : d(r, s);
};

var t = require("../../../b/helpers/createForOfIteratorHelper"), n = r(require("../../../b/regenerator")), s = require("../../../b/helpers/asyncToGenerator"), o = require("../../../b/helpers/construct"), a = require("../../../b/helpers/toConsumableArray"), i = require("../../../b/helpers/objectSpread2"), u = require("../constants/error_msgs"), c = require("../constants/literal_types"), p = e(require("../constants/metadata_keys")), f = require("../utils/async");

function l(e) {
    var r = o(e.constr, a(e.constructorInjections));
    return e.propertyRequests.forEach(function(t, n) {
        var s = t.target.identifier, o = e.propertyInjections[n];
        r[s] = o;
    }), r;
}

function y() {
    return (y = s(n.default.mark(function e(r) {
        var t, s;
        return n.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, h(r.constructorInjections);

              case 2:
                return t = e.sent, e.next = 5, h(r.propertyInjections);

              case 5:
                return s = e.sent, e.abrupt("return", l(i(i({}, r), {}, {
                    constructorInjections: t,
                    propertyInjections: s
                })));

              case 7:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function h(e) {
    return R.apply(this, arguments);
}

function R() {
    return (R = s(n.default.mark(function e(r) {
        var s, o, a, i;
        return n.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                s = [], o = t(r);
                try {
                    for (o.s(); !(a = o.n()).done; ) i = a.value, Array.isArray(i) ? s.push(Promise.all(i)) : s.push(i);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    o.e(e);
                } finally {
                    o.f();
                }
                return e.abrupt("return", Promise.all(s));

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function d(e, r) {
    var t = function(e, r) {
        if (Reflect.hasMetadata(p.POST_CONSTRUCT, e)) {
            var t = Reflect.getMetadata(p.POST_CONSTRUCT, e);
            try {
                var n, s;
                return null == (n = (s = r)[t.value]) ? void 0 : n.call(s);
            } catch (r) {
                r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                if (r instanceof Error) throw new Error((0, u.POST_CONSTRUCT_ERROR)(e.name, r.message));
            }
        }
    }(e, r);
    return (0, f.isPromise)(t) ? t.then(function() {
        return r;
    }) : r;
}