Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TEST_TIMEOUT = exports.SHARE_INFO_SOURCE = exports.PROD_TIMEOUT = exports.PORTAL_TAB_TYPE = exports.PORTAL_BACKGROUND_TYPE = exports.LOADING = exports.DEFAULT_ERROR_TITLE = exports.CONFIRM_TEXT = exports.BIZ_TYPE_MAP = exports.ACCOUNT_BIND_CODE = void 0;

exports.CONFIRM_TEXT = "我知道了";

exports.DEFAULT_ERROR_TITLE = "页面加载失败了";

exports.PORTAL_TAB_TYPE = {
    HOME: 0,
    ORDER_MENU: 1,
    TAKEAWAY: 2,
    PRE_ORDER: 3,
    ORDER: 4,
    MINE: 8,
    PICKUP: 9,
    CUSTOM: 2014,
    ORDER_CENTER: 2022,
    TT_COUPON_LIST: 2036
};

exports.PORTAL_BACKGROUND_TYPE = {
    CONTAIN: 1,
    REPEAT: 2,
    COVER: 3
};

exports.PROD_TIMEOUT = 5e3;

exports.TEST_TIMEOUT = 5e4;

exports.BIZ_TYPE_MAP = {
    ORDER: 1,
    PRE_ORDER: 2,
    TAKEAWAY: 3,
    PICKUP: 4
};

exports.ACCOUNT_BIND_CODE = {
    MT: 51,
    DP: 61
};

exports.LOADING = {
    ERROR: -2,
    NODATA: -1,
    INIT: 0,
    DONE: 1,
    DOING: 2,
    END: 3
};

exports.SHARE_INFO_SOURCE = {
    PORTAL: 5,
    PRE_ORDER: 2,
    ORDER: 1
};