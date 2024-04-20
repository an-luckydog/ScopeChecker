var t = require("../b/helpers/typeof");

require("../b/helpers/Arrayincludes");

var e = new WeakMap();

function r(t, r) {
    return e.get(t) && e.get(t).get(r);
}

function n(t, e, n) {
    if (void 0 === e) throw new TypeError();
    var a = r(e, n);
    return a && a.get(t);
}

function a(n, a, o, u) {
    if (u && ![ "string", "symbol" ].includes(t(u))) throw new TypeError();
    (r(o, u) || function(t, r) {
        var n = e.get(t) || new Map();
        e.set(t, n);
        var a = n.get(r) || new Map();
        return n.set(r, a), a;
    }(o, u)).set(n, a);
}

function o(t, e, r) {
    return n(t, e, r) ? n(t, e, r) : Object.getPrototypeOf(e) ? o(t, Object.getPrototypeOf(e), r) : void 0;
}

var u = {
    decorate: function(t, e, r, n) {
        if (!Array.isArray(t) || 0 === t.length) throw new TypeError();
        return void 0 !== r ? function(t, e, r, n) {
            return t.reverse().forEach(function(t) {
                n = t(e, r, n) || n;
            }), n;
        }(t, e, r, n) : "function" == typeof e ? function(t, e) {
            return t.reverse().forEach(function(t) {
                var r = t(e);
                r && (e = r);
            }), e;
        }(t, e) : void 0;
    },
    defineMetadata: function(t, e, r, n) {
        a(t, e, r, n);
    },
    getMetadata: function(t, e, r) {
        return o(t, e, r);
    },
    getOwnMetadata: function(t, e, r) {
        return n(t, e, r);
    },
    hasMetadata: function(t, e, r) {
        return !!o(t, e, r);
    },
    hasOwnMetadata: function(t, e, r) {
        return !!n(t, e, r);
    },
    metadata: function(t, e) {
        return function(r, n) {
            a(t, e, r, n);
        };
    }
};

Object.assign(Reflect, u);