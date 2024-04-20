Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.transMutexMatrix = exports.initAttrsMatrix = exports.dealAttrMutexConfirm = void 0;

var t = function(t, r) {
    return t.find(function(t) {
        return t.type === r.type && t.groupId === r.groupId && t.id === r.id;
    });
}, r = function(t) {
    var r = [];
    return t.forEach(function(t) {
        var n = t.type;
        t.groups.forEach(function(t) {
            var e = t.attrs, o = t.groupId;
            r.push(e.map(function(t) {
                var r = t.mutexCode, e = t.id, u = t.name;
                return {
                    type: n,
                    groupId: o,
                    id: e,
                    name: u,
                    mutexCode: r
                };
            }));
        });
    }), r;
};

exports.initAttrsMatrix = r;

var n = function(r, n, e) {
    var o;
    if (r.forEach(function(r) {
        o || (o = t(r, n));
    }), o && o.mutexCode) return o.mutexCode.forEach(function(t, n) {
        var o = t.toString(2).padStart(r[n].length, "0").split("").map(function(t) {
            return +t;
        });
        e && e(o, n);
    }), o;
};

exports.transMutexMatrix = function(t, r) {
    if (!r) return [];
    var e = r.map(function(t) {
        return new Array(t.length).fill(0);
    }), o = function(t, r) {
        t.forEach(function(t, n) {
            e[r][n] = t || e[r][n];
        });
    };
    return t.forEach(function(t) {
        n(r, t, o);
    }), e;
};

exports.dealAttrMutexConfirm = function(e, o, u) {
    var i = r(o), a = [], f = n(i, u, function(t, r) {
        t.forEach(function(t, n) {
            t && a.push(i[r][n]);
        });
    });
    if (a.length && f) {
        var c = a.filter(function(r) {
            return !!t(e, r);
        }).map(function(t) {
            return t.name;
        }).join("、");
        return "".concat(f.name, "不可与").concat(c, "同时选择");
    }
};