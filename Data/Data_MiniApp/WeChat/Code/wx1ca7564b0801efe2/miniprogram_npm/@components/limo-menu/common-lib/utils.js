Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isTakeAwayOrSelfPick = exports.isNullOrUndefined = exports.isEmptyObject = exports.getStrCount = exports.getIn = exports.get = exports.dealClassName = exports.createMethodArr = void 0, 
exports.strlen = function(e) {
    for (var t = 0, r = 0; r < (null == e ? void 0 : e.length); r++) {
        var n = e.charCodeAt(r);
        n >= 1 && n <= 126 || n >= 65376 && n <= 65439 ? t++ : t += 2;
    }
    return t;
};

exports.dealClassName = function(e) {
    return e ? e.split(" ").map(function(e) {
        return "^" + e;
    }).join(" ") : "";
};

exports.isNullOrUndefined = function(e) {
    return null == e;
};

exports.createMethodArr = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = [];
    return e.forEach(function(e) {
        e.items.forEach(function(e) {
            t.push(e.name);
        });
    }), t;
};

exports.get = function(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return e.reduce(function(e, t) {
        return e && e[t] ? e[t] : null;
    }, t) || r;
};

exports.getIn = function(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    return t.reduce(function(e, t) {
        return e && void 0 !== e[t] ? e[t] : void 0;
    }, e) || r;
};

exports.isEmptyObject = function(e) {
    return e && 0 === Object.keys(e).length;
};

exports.getStrCount = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e ? e.replace(/[\x30-\x39\x41-\x5a\x61-\x7a]/g, "__").replace(/[^\x00-\xff]/g, "____").length / 4 : 0;
};

exports.isTakeAwayOrSelfPick = function(e) {
    return 3 === (e = Number(e)) || 4 === e;
};