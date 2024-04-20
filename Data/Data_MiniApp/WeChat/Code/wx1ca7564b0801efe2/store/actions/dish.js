var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.GET_NET_RECOMMENDATION = exports.GET_DISH_LIST = exports.GET_BOSS_RECOMMENDATION = void 0, 
exports.setDishList = t;

var r = require("./add-on"), s = require("../../modules/menu/dish/DishSdk"), i = (e(require("../../api/rmsStorage")), 
e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")));

exports.GET_DISH_LIST = "GET_DISH_LIST";

exports.GET_BOSS_RECOMMENDATION = "GET_BOSS_RECOMMENDATION";

function t(e, t) {
    return function(E) {
        i.default.isNullOrUndefined(t) || (E({
            type: "GET_DISH_LIST",
            dishList: t
        }), E((0, r.setSkuMap)(t)), s.DishSdk.setDishList(e, t));
    };
}

exports.GET_NET_RECOMMENDATION = "GET_NET_RECOMMENDATION";