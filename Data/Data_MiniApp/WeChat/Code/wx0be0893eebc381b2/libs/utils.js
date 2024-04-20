var t = require("./config").desConfig, e = require("./des").strEnc;

module.exports = {
    encrypt: function(n) {
        return e(JSON.stringify(n), t.key);
    },
    timeFormat: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".";
        if (!t) return "";
        var n = new Date(t), r = function(t) {
            return t >= 10 ? t : "0" + t;
        };
        return "".concat(n.getFullYear()).concat(e).concat(r(n.getMonth() + 1)) + "".concat(e).concat(r(n.getDate()));
    }
};