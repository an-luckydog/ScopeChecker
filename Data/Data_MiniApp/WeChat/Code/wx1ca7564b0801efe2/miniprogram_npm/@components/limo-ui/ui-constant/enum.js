Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.UI_SIZE = exports.STAR_TYPE = exports.RED_POINT_TYPE = exports.RADIO_TYPE = exports.MAX_DISH_COUNT = exports.LOADING_TYPE = exports.LOADING = exports.LABEL_TYPE = exports.HOT_SELLING_TYPE = exports.HOT_SELLING_SIZE = exports.CORNER_TYPE = exports.BUTTON_TYPE = void 0;

exports.BUTTON_TYPE = {
    DEFAULT: 0,
    BORDER_GRAY: 1,
    PRIMARY: 2,
    SECONDARY: 3
};

exports.LABEL_TYPE = {
    BORDER_RED: 0,
    BORDER_YELLOW: 1,
    BORDER_BLUE: 2,
    BKG_DP: 3,
    BKG_DP_IMG: 4,
    BKG_PRICE_1: 5,
    BKG_PRICE_2: 6,
    COUPON_COLLECT: 9,
    COUPON_COLLECT_CURRENCY: 10,
    LIMIT_PURCHASE: 11,
    DISH_DESCRIPTION: 12,
    USER_GROUP_COUPON: 13,
    USER_NORMAL_COUPON: 14,
    POINT_PURCHASE: 15,
    BKG_PRICE_3: 16
};

exports.CORNER_TYPE = {
    DEFAULT: 0,
    SOLDOUT: 1
};

exports.RADIO_TYPE = {
    DEFAULT: 0,
    BORDER_YELLOW: 1
};

exports.LOADING_TYPE = {
    CIRCLE: "circle",
    SPINNER: "spinner"
};

exports.UI_SIZE = {
    LARGE: "large",
    MIDDLE: "middle",
    SMALL: "small",
    SMALLER: "smaller",
    MINI: "mini",
    EXTRALARGE: "extra-large"
};

exports.RED_POINT_TYPE = {
    NUMBER: "number",
    POINT: "point"
};

exports.MAX_DISH_COUNT = 99;

exports.HOT_SELLING_TYPE = {
    PRICE_WITH_PIC: [ 0, 6, 7 ],
    ONLY_PIC: [ 1, 2, 3, 4, 5 ]
};

exports.HOT_SELLING_SIZE = {
    DEFAULT: "DEFAULT",
    SMALL: "SMALL",
    LARGE: "LARGE",
    SUPER_LARGE: "SUPER_LARGE",
    DETAIL: "DETAIL"
};

exports.STAR_TYPE = {
    DEFAULT: "DEFAULT",
    UNSELECTED: "UNSELECTED"
};

exports.LOADING = {
    DONE: 1,
    DOING: 2,
    END: 3
};