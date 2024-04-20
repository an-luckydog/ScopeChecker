Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SMALL_FONT_TYPE = exports.PANEL_TYPE_VAL = exports.PANEL_GROUP_TYPE_VAL = exports.PACKAGE_OPTION_TYPE = exports.EXTRA_FILTER_KEYS = exports.DISH_OPERATION_TYPE_VAL = exports.DISH_ITEM_TYPE_VAL = exports.DISH_ITEM_TYPE_MAP = exports.DISH_ITEM_ROW_NUMBER = exports.DISH_ITEM_DEFAULT_IMG = exports.DISH_ITEM_CSS_TYPE_VAL = exports.DGFStyles = exports.DGFStyleTypeEnum = void 0;

exports.DISH_ITEM_TYPE_VAL = {
    DEFAULT: "DEFAULT",
    LARGE: "LARGE",
    SMALL: "SMALL",
    SUPER_LARGE: "SUPER_LARGE",
    ORDERED: "ORDERED",
    DETAIL: "DETAIL",
    COLLOCATION: "COLLOCATION",
    ADD_ON: "ADD_ON",
    RECOMMEND_DEFAULT: "RECOMMEND_DEFAULT",
    RECOMMEND_LARGE: "RECOMMEND_LARGE",
    SEARCH: "SEARCH",
    RIGHT_LARGE: "RIGHT_LARGE",
    MULTI_PROMO: "MULTI_PROMO"
};

exports.DISH_ITEM_CSS_TYPE_VAL = {
    DEFAULT: "default",
    LARGE: "large",
    SMALL: "small",
    SUPER_LARGE: "super-large",
    ORDERED_DEFAULT: "ordered-default",
    ORDERED_SMALL: "ordered-small",
    ORDERED_LARGE: "ordered-large",
    ORDERED_SUPER_LARGE: "ordered-super-large",
    ORDERED_RIGHT_LARGE: "ordered-default",
    ADD_ON: "add-on",
    RECOMMEND_DEFAULT: "recommend-default",
    RECOMMEND_LARGE: "super-large",
    SEARCH: "default search",
    RIGHT_LARGE: "right-large",
    MULTI_PROMO: "multi-promo"
};

var E = "https://p0.meituan.net/travelcube/", e = {
    DEFAULT: E + "a0fe74f12c4255ef5519b1f04b3233de5722.png",
    LARGE: E + "60e03968c4cf79d9b8a060951646023d6232.png",
    SMALL: E + "7bcb5d296e1eb569d473ded47e3458954399.png",
    SUPER_LARGE: E + "b95c695e9ad3ad375fa95880d131ac0622182.jpg",
    DETAIL: E + "a0fe74f12c4255ef5519b1f04b3233de5722.png",
    RECOMMEND_DEFAULT: E + "acd2f07de1688d9981462c59284a768d1151.jpg@222w_166h_80q",
    RECOMMEND_LARGE: "https://p0.meituan.net/scarlett/d3a2a935c8d18fc7828f7f069fb8ba4f3410.jpg@_80q",
    SEARCH: E + "a0fe74f12c4255ef5519b1f04b3233de5722.png",
    RIGHT_LARGE: E + "b95c695e9ad3ad375fa95880d131ac0622182.jpg"
};

exports.DISH_ITEM_DEFAULT_IMG = e;

exports.DISH_ITEM_TYPE_MAP = {
    0: "DEFAULT",
    5: "LARGE",
    6: "SMALL",
    7: "SUPER_LARGE",
    8: "RIGHT_LARGE"
};

exports.DISH_ITEM_ROW_NUMBER = {
    DEFAULT: 1,
    LARGE: 2,
    SMALL: 3,
    SUPER_LARGE: 1,
    RIGHT_LARGE: 1
};

exports.DISH_OPERATION_TYPE_VAL = {
    TEXT: "TEXT",
    NUMBER: "NUMBER",
    BUTTON: "BUTTON"
};

exports.PANEL_TYPE_VAL = {
    SPEC: "SPEC",
    PACKAGE: "PACKAGE",
    FIXED_PACKAGE: "FIXED_PACKAGE",
    WEIGHT: "WEIGHT",
    DETAIL: "DETAIL"
};

exports.PANEL_GROUP_TYPE_VAL = {
    SPECS: "规格",
    METHOD: "做法",
    TASTE: "加料"
};

exports.PACKAGE_OPTION_TYPE = {
    FIXED: 0,
    RANGE: 1
};

exports.SMALL_FONT_TYPE = [ "SMALL", "RECOMMEND_DEFAULT" ];

exports.EXTRA_FILTER_KEYS = [ "id", "operationData" ];

exports.DGFStyles = {
    CLASS1: 1,
    CLASS2: 2,
    CLASS3: 3
};

exports.DGFStyleTypeEnum = {
    "menu-list": 1,
    "page-dish-list": 1,
    "dish-base-info": 2,
    "recommendation-module": 3,
    "single-dishes-info": 3,
    "collocation-dish-item": 3
};