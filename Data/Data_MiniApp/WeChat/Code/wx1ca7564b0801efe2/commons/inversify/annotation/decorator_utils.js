var e = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createTaggedDecorator = function(e) {
    return function(r, t, a) {
        "number" == typeof a ? function(e, r, t, a) {
            (function(e) {
                if (void 0 !== e) throw new Error(n.INVALID_DECORATOR_OPERATION);
            })(r), i(o.TAGGED, e, t.toString(), a);
        }(r, t, a, e) : function(e, r, t) {
            if (function(e) {
                return void 0 !== e.prototype;
            }(e)) throw new Error(n.INVALID_DECORATOR_OPERATION);
            i(o.TAGGED_PROP, e.constructor, r, t);
        }(r, t, e);
    };
}, exports.decorate = function(e, r, t) {
    "number" == typeof t ? c([ u(t, e) ], r) : "string" == typeof t ? Reflect.decorate([ e ], r, t) : c([ e ], r);
};

var r = require("../../../b/helpers/toConsumableArray"), t = require("../../../b/helpers/createForOfIteratorHelper"), n = e(require("../constants/error_msgs")), o = e(require("../constants/metadata_keys")), a = require("../utils/js");

function i(e, o, i, c) {
    var u, f = function(e) {
        var r = [];
        if (Array.isArray(e)) {
            r = e;
            var t = (0, a.getFirstArrayDuplicate)(r.map(function(e) {
                return e.key;
            }));
            if (void 0 !== t) throw new Error("".concat(n.DUPLICATED_METADATA, " ").concat(t.toString()));
        } else r = [ e ];
        return r;
    }(c), s = {};
    Reflect.hasOwnMetadata(e, o) && (s = Reflect.getMetadata(e, o));
    var l = s[i];
    if (void 0 === l) l = []; else {
        var A, p = t(l);
        try {
            var d = function() {
                var e = A.value;
                if (f.some(function(r) {
                    return r.key === e.key;
                })) throw new Error("".concat(n.DUPLICATED_METADATA, " ").concat(e.key.toString()));
            };
            for (p.s(); !(A = p.n()).done; ) d();
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            p.e(e);
        } finally {
            p.f();
        }
    }
    (u = l).push.apply(u, r(f)), s[i] = l, Reflect.defineMetadata(e, s, o);
}

function c(e, r) {
    Reflect.decorate(e, r);
}

function u(e, r) {
    return function(t, n) {
        r(t, n, e);
    };
}