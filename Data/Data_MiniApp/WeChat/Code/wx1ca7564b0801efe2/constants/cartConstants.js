Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.UPDATE_CART_TYPE = exports.TIPS_BANNER_BUTTON_TEXT = exports.OPERATE_TYPE = exports.MUST_DISH_IN_PACKAGE_TEXT = exports.MUST_DISH_CANNOT_MINUS_TEXT = exports.MUSTDISH_PANEL_STATUS = exports.MINUS_MUST_DISH_STATUS = exports.MANDATORY_TYPE = exports.MANDATORY_RULES = void 0;

exports.OPERATE_TYPE = {
    ADD_MINUS: 1,
    ADD: 1.1,
    MINUS: 1.2,
    SET: 2,
    MODIFY: 3,
    CLEAR_CART: 4,
    WEIGHT_OP: 5
};

exports.UPDATE_CART_TYPE = {
    ADD_DISH: 1,
    FROM_CLOUD_CART: 2
};

exports.MINUS_MUST_DISH_STATUS = {
    MINUS_APPROVED: 200,
    ADD_FIXED: 201,
    MINUS_FORBIDDEN: 400,
    CANCAL: 500
};

exports.MUST_DISH_CANNOT_MINUS_TEXT = "必选菜不能被清空哦~";

exports.MUST_DISH_IN_PACKAGE_TEXT = "此菜品包含在已购套餐内，如需减少，请到购物车修改套餐";

var _, T = ((_ = {})[_.TABLE_NOT_MODIFIED = 1] = "TABLE_NOT_MODIFIED", _[_.TABLE_CAN_MODIFIED = 2] = "TABLE_CAN_MODIFIED", 
_[_.PEOPLE_CAN_MODIFIED = 3] = "PEOPLE_CAN_MODIFIED", _[_.PEOPLE_NOT_MODIFIED = 4] = "PEOPLE_NOT_MODIFIED", 
_);

exports.MANDATORY_RULES = T;

var E = function(_) {
    return _[_.FIXED = 0] = "FIXED", _[_.M_CHOOSE_N = 1] = "M_CHOOSE_N", _;
}({});

exports.MANDATORY_TYPE = E;

var I = function(_) {
    return _[_.CLOSE = 0] = "CLOSE", _[_.INVISIBLE = 1] = "INVISIBLE", _[_.VISIBLE = 2] = "VISIBLE", 
    _;
}({});

exports.MUSTDISH_PANEL_STATUS = I;

var A = function(_) {
    return _.CHANGE_SHOP = "更换门店", _.GET_AUTH = "去授权", _;
}({});

exports.TIPS_BANNER_BUTTON_TEXT = A;