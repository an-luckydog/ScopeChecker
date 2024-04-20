var e = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getBaseClassDependencyCount = function e(t, r) {
    var n = Object.getPrototypeOf(r.prototype).constructor;
    if (n !== Object) {
        var a = s(t, (0, i.getFunctionName)(n), n, !0), o = a.map(function(e) {
            return e.metadata.filter(function(e) {
                return e.key === c.UNMANAGED_TAG;
            });
        }), u = [].concat.apply([], o).length, l = a.length - u;
        return l > 0 ? l : e(t, n);
    }
    return 0;
}, exports.getDependencies = function(e, t) {
    return s(e, (0, i.getFunctionName)(t), t, !1);
}, Object.defineProperty(exports, "getFunctionName", {
    enumerable: !0,
    get: function() {
        return i.getFunctionName;
    }
});

var t = require("../../../b/helpers/createForOfIteratorHelper"), r = require("../../../b/helpers/toConsumableArray"), n = require("../annotation/lazy_service_identifier"), a = e(require("../constants/error_msgs")), o = require("../constants/literal_types"), c = e(require("../constants/metadata_keys")), i = require("../utils/serialization"), u = require("./target");

function s(e, n, c, i) {
    var s = e.getConstructorMetadata(c), f = s.compilerGeneratedMetadata;
    if (void 0 === f) {
        var N = "".concat(a.MISSING_INJECTABLE_ANNOTATION, " ").concat(n, ".");
        throw new Error(N);
    }
    var v = s.userGeneratedMetadata, m = Object.keys(v), d = 0 === c.length && m.length > 0, y = m.length > c.length;
    return [].concat(r(function(e, t, r, n, a) {
        for (var o = [], c = 0; c < a; c++) {
            var i = l(c, e, t, r, n);
            null !== i && o.push(i);
        }
        return o;
    }(i, n, f, v, d || y ? m.length : c.length)), r(function e(n, a, c) {
        var i, s = n.getPropertiesMetadata(a) || [], l = [], f = Object.getOwnPropertySymbols(s), N = Object.keys(s).concat(f), v = t(N);
        try {
            for (v.s(); !(i = v.n()).done; ) {
                var m = i.value, d = s[m], y = p(d), T = y.targetName || m, A = g(y.inject, y.multiInject, m, c), I = new u.Target(o.TargetTypeEnum.ClassProperty, T, A);
                I.metadata = d, l.push(I);
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            v.e(e);
        } finally {
            v.f();
        }
        var O = Object.getPrototypeOf(a.prototype).constructor;
        if (O !== Object) {
            var _ = e(n, O, c);
            l = [].concat(r(l), r(_));
        }
        return l;
    }(e, c, n)));
}

function l(e, t, r, c, i) {
    var s = i[e.toString()] || [], l = p(s), g = !0 !== l.unmanaged, f = c[e];
    if ((f = l.inject || l.multiInject || f) instanceof n.LazyServiceIdentifier && (f = f.unwrap()), 
    g) {
        if (!t && (f === Object || f === Function || void 0 === f)) {
            var N = "".concat(a.MISSING_INJECT_ANNOTATION, " argument ").concat(e, " in class ").concat(r, ".");
            throw new Error(N);
        }
        var v = new u.Target(o.TargetTypeEnum.ConstructorArgument, l.targetName, f);
        return v.metadata = s, v;
    }
    return null;
}

function g(e, t, r, n) {
    var o = e || t;
    if (void 0 === o) {
        var c = "".concat(a.MISSING_INJECTABLE_ANNOTATION, " for property ").concat(String(r), " in class ").concat(n, ".");
        throw new Error(c);
    }
    return o;
}

function p(e) {
    var t = {};
    return e.forEach(function(e) {
        t[e.key.toString()] = e.value;
    }), {
        inject: t[c.INJECT_TAG],
        multiInject: t[c.MULTI_INJECT_TAG],
        targetName: t[c.NAME_TAG],
        unmanaged: t[c.UNMANAGED_TAG]
    };
}