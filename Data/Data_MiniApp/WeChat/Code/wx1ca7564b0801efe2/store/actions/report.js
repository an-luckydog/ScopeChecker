Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SET_DISH_OPERATION = void 0, exports.setDishOperationAction = function(e, t) {
    return {
        type: "SET_DISH_OPERATION",
        dishOperationType: e,
        dishOperationTime: t
    };
};

exports.SET_DISH_OPERATION = "SET_DISH_OPERATION";