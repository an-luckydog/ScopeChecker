var e = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createMockRequest = function(e, n, t, r) {
    var a = new d.Target(i.TargetTypeEnum.Variable, "", n, new u.Metadata(t, r)), s = new o.Context(e);
    return new l.Request(n, s, null, [], a);
}, exports.getBindingDictionary = f, exports.plan = function(e, n, t, i, r, a, u) {
    var s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7], c = new o.Context(n), l = v(t, i, r, "", a, u);
    try {
        return g(e, s, r, c, null, l), c;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        throw e;
    }
};

var n = require("../bindings/binding_count"), t = e(require("../constants/error_msgs")), i = require("../constants/literal_types"), r = e(require("../constants/metadata_keys")), a = require("../utils/serialization"), o = require("./context"), u = require("./metadata"), s = require("./plan"), c = require("./reflection_utils"), l = require("./request"), d = require("./target");

function f(e) {
    return e._bindingDictionary;
}

function v(e, n, t, i, a, o) {
    var s = e ? r.MULTI_INJECT_TAG : r.INJECT_TAG, c = new u.Metadata(s, t), l = new d.Target(n, i, t, c);
    if (void 0 !== a) {
        var f = new u.Metadata(a, o);
        l.metadata.push(f);
    }
    return l;
}

function p(e, i, r, o, u) {
    var s, c = q(r.container, u.serviceIdentifier);
    return c.length === n.BindingCount.NoBindingsAvailable && r.container.options.autoBindInjectable && "function" == typeof u.serviceIdentifier && e.getConstructorMetadata(u.serviceIdentifier).compilerGeneratedMetadata && (r.container.bind(u.serviceIdentifier).toSelf(), 
    c = q(r.container, u.serviceIdentifier)), s = i ? c : c.filter(function(e) {
        var n = new l.Request(e.serviceIdentifier, r, o, e, u);
        return e.constraint(n);
    }), function(e, i, r) {
        switch (i.length) {
          case n.BindingCount.NoBindingsAvailable:
            if (r.isOptional()) return i;
            var o = (0, a.getServiceIdentifierAsString)(e), u = t.NOT_REGISTERED;
            throw u += " ".concat(o), new Error(u);

          case n.BindingCount.OnlyOneBindingAvailable:
            return i;

          case n.BindingCount.MultipleBindingsAvailable:
          default:
            if (r.isArray()) return i;
            var s = (0, a.getServiceIdentifierAsString)(e), c = "".concat(t.AMBIGUOUS_MATCH, " ").concat(s);
            throw new Error(c);
        }
    }(u.serviceIdentifier, s, u, r.container), s;
}

function g(e, n, r, a, o, u) {
    var d, f;
    if (null === o) {
        d = p(e, n, a, null, u), f = new l.Request(r, a, null, d, u);
        var v = new s.Plan(a, f);
        a.addPlan(v);
    } else d = p(e, n, a, o, u), f = o.addChildRequest(u.serviceIdentifier, d, u);
    d.forEach(function(n) {
        var r = null;
        if (u.isArray()) r = f.addChildRequest(n.serviceIdentifier, n, u); else {
            if (n.cache) return;
            r = f;
        }
        if (n.type === i.BindingTypeEnum.Instance && null !== n.implementationType) {
            var o = (0, c.getDependencies)(e, n.implementationType);
            if (!a.container.options.skipBaseClassChecks) {
                var s = (0, c.getBaseClassDependencyCount)(e, n.implementationType);
                if (o.length < s) {
                    var l = t.ARGUMENTS_LENGTH_MISMATCH((0, c.getFunctionName)(n.implementationType));
                    throw new Error(l);
                }
            }
            o.forEach(function(n) {
                g(e, !1, n.serviceIdentifier, a, r, n);
            });
        }
    });
}

function q(e, n) {
    var t = [], i = f(e);
    return i.hasKey(n) ? t = i.get(n) : null !== e.parent && (t = q(e.parent, n)), t;
}