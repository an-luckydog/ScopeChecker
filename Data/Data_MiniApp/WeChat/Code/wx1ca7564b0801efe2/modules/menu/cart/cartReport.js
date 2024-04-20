var C = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sendCartInitPoint = exports.sendCartCalculatePoint = exports.INIT_CLOUD_CART_PROCEDURE = exports.CART_ORDER_CALCULATOR_PROCEDURE = void 0;

var _, T = C(require("../../../lib/mix/log")).default, A = ((_ = {})[_.GET_CLOUD_COUNT = 1] = "GET_CLOUD_COUNT", 
_[_.GET_CLOUD_CALLBACK_COUNT = 2] = "GET_CLOUD_CALLBACK_COUNT", _[_.GET_CLOUD_VALIDATION_COUNT = 3] = "GET_CLOUD_VALIDATION_COUNT", 
_[_.GET_CLOUD_SUCCESS_COUNT = 4] = "GET_CLOUD_SUCCESS_COUNT", _[_.HANDLE_CART_DISH_START = 5] = "HANDLE_CART_DISH_START", 
_[_.UPDATE_LOCAL_CART_SUCCESS = 6] = "UPDATE_LOCAL_CART_SUCCESS", _[_.CART_INIT_COUNT = 7] = "CART_INIT_COUNT", 
_[_.CART_PIKE_INIT = 8] = "CART_PIKE_INIT", _[_.CART_PIKE_CONNECT = 9] = "CART_PIKE_CONNECT", 
_[_.HANDLE_CART_DISH_FINISH = 10] = "HANDLE_CART_DISH_FINISH", _);

exports.INIT_CLOUD_CART_PROCEDURE = A;

var R = function(C) {
    return C[C.CART_ORDER_CALCULATE_START = 1] = "CART_ORDER_CALCULATE_START", C[C.CART_ORDER_CALCULATE_CALLBACK = 2] = "CART_ORDER_CALCULATE_CALLBACK", 
    C[C.CART_ORDER_CALCULATE_VALIDATION = 3] = "CART_ORDER_CALCULATE_VALIDATION", C[C.CART_ORDER_CALCULATE_FINISH = 4] = "CART_ORDER_CALCULATE_FINISH", 
    C;
}({});

exports.CART_ORDER_CALCULATOR_PROCEDURE = R;

exports.sendCartInitPoint = function(C) {
    T.addCustom("initCloudCart", 1, {
        step: C
    });
};

exports.sendCartCalculatePoint = function(C) {
    T.addCustom("cartOrderCalculate", 1, {
        step: C
    });
};