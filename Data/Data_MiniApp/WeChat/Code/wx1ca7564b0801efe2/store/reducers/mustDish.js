var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../miniprogram_npm/seamless-immutable/index.js")), i = require("../../constants/cartConstants"), s = require("../actions/mustDish"), u = (0, 
t.default)({
    isMustDishEnough: !0,
    multiMustDishInfo: (0, t.default)({}),
    multiDishList: (0, t.default)({}),
    aggregatedMultiMustGroup: (0, t.default)({}),
    isModifiedMultiDishLegal: !1,
    groupId: "",
    mustDishCartDiff: 0,
    mustDishPanelStatus: i.MUSTDISH_PANEL_STATUS.CLOSE
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, i = arguments.length > 1 ? arguments[1] : void 0;
    return i.type === s.UPDATE_MUST_DISH ? t.default.merge(e, i.payload) : e;
};