var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.tryGetFromScope = exports.saveToScope = void 0;

var t = e(require("../../../b/regenerator")), r = require("../../../b/helpers/asyncToGenerator"), n = require("../constants/literal_types"), c = require("../utils/async");

exports.tryGetFromScope = function(e, t) {
    return t.scope === n.BindingScopeEnum.Singleton && t.activated ? t.cache : t.scope === n.BindingScopeEnum.Request && e.has(t.id) ? e.get(t.id) : null;
};

exports.saveToScope = function(e, t, r) {
    t.scope === n.BindingScopeEnum.Singleton && i(t, r), t.scope === n.BindingScopeEnum.Request && o(e, t, r);
};

var o = function(e, t, r) {
    e.has(t.id) || e.set(t.id, r);
}, i = function(e, t) {
    e.cache = t, e.activated = !0, (0, c.isPromise)(t) && a(e, t);
}, a = function() {
    var e = r(t.default.mark(function e(r, n) {
        var c;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, n;

              case 3:
                c = e.sent, r.cache = c, e.next = 10;
                break;

              case 7:
                throw e.prev = 7, e.t0 = e.catch(0), r.cache = null, r.activated = !1, e.t0;

              case 10:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 0, 7 ] ]);
    }));
    return function(t, r) {
        return e.apply(this, arguments);
    };
}();