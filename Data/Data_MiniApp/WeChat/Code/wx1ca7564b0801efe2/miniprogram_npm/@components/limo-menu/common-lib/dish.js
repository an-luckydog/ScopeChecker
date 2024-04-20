var e = require("../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSpuById = void 0;

var r = e(require("../../../../api/rmsStorage"));

exports.getSpuById = function(e, t) {
    if (!t || !e) return null;
    var u = r.default.getDishList(e);
    return u ? u[t] : null;
};