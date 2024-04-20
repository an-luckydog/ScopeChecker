var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../miniprogram_npm/seamless-immutable/index.js")), s = require("../actions/dish"), i = (0, 
t.default)({
    dishList: {},
    dishListNOIMB: {},
    bossList: [],
    netList: [],
    recommendDishList: []
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    switch (r.type) {
      case s.GET_DISH_LIST:
        return t.default.merge(e, {
            dishList: r.dishList
        });

      case s.GET_BOSS_RECOMMENDATION:
        return t.default.merge(e, {
            bossList: r.bossList
        });

      case s.GET_NET_RECOMMENDATION:
        return t.default.merge(e, {
            netList: r.netList
        });

      default:
        return e;
    }
};