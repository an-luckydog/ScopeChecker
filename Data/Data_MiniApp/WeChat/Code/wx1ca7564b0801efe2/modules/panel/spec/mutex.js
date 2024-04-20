var t = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initAttrsMatrix = exports.dealDefaultMutex = void 0;

require("../../../b/helpers/toConsumableArray"), t(require("../../../lib/mix/confirm"));

var e = require("../../../constants/bizConstants");

exports.initAttrsMatrix = function(t) {
    var r, n = t.methods, u = t.tastes, i = t.skuMenuItems, o = [], a = null == t || null == (r = t.specAttrs) || null == (r = r[0]) ? void 0 : r.specValues;
    null == i || i.map(function(t) {
        var r;
        if (null != t && null != (r = t.specAttrs) && r[0]) {
            var n = t.specAttrs[0], u = n.value, i = n.valueId, s = null == a || null == a.find ? void 0 : a.find(function(t) {
                return t.key === i + "";
            }), d = (null == s ? void 0 : s.mutexCodes) || [];
            o.push({
                type: e.ATTR_TYPE.SPEC,
                groupId: "",
                id: t.skuId + "",
                mutexCodes: d,
                name: u
            });
        }
    });
    var s = (n || []).concat(u || []).map(function(t) {
        return (t.items || []).map(function(e) {
            return {
                type: t.type,
                groupId: t.groupId,
                id: e.id,
                mutexCodes: e.mutexCodes,
                name: e.name
            };
        });
    });
    return [ o ].concat(s);
};

var r = function(t, e) {
    return t.find(function(t) {
        return t.type === e.type && t.groupId === e.groupId && t.id === e.id;
    });
}, n = function(t, e, n) {
    var u;
    if (t.forEach(function(t) {
        u || (u = r(t, e));
    }), u && u.mutexCodes) return u.mutexCodes.forEach(function(e, r) {
        var u = e.toString(2).padStart(t[r].length, "0").split("").map(function(t) {
            return +t;
        });
        n && n(u, r);
    }), u;
};

exports.dealDefaultMutex = function(t, e, r) {
    var u = r || t.map(function(t) {
        return Array(t.length).fill(0);
    }), i = !0;
    return t.forEach(function(t, r) {
        var n = t.findIndex(function(t) {
            return e.type === t.type && e.groupId === t.groupId && e.id === t.id;
        });
        n > -1 && 1 === u[r][n] && (i = !1);
    }), i && n(t, e, function(t, e) {
        t.forEach(function(t, r) {
            t && (u[e][r] = 1);
        });
    }), {
        mutexMatrix: u,
        success: i
    };
};