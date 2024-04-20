Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.promisify = void 0;

var e = require("../@babel/runtime/helpers/objectSpread2");

exports.promisify = function(r) {
    return function(t) {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
        return new Promise(function(n, i) {
            return r.call.apply(r, [ wx, e(e({}, t), {}, {
                success: n,
                fail: i
            }) ].concat(o));
        });
    };
};