var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = e(require("../../miniprogram_npm/seamless-immutable/index.js")), r = require("../actions/report"), t = (0, 
i.default)({
    dishOperationType: 0,
    dishOperationTime: 0
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return a.type === r.SET_DISH_OPERATION ? i.default.merge(e, {
        dishOperationType: a.dishOperationType,
        dishOperationTime: a.dishOperationTime
    }) : e;
};