var o = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.lightThemeColor = exports.darkThemeColor = exports.TYPES = exports.TRANSFER_BIZ_TYPE_TO_ROUTE = exports.SUB_DISH_ADD_TYPE = exports.SPEC_ADD_TYPE = exports.SOLD_OUT_TEXT = exports.SEARCH_ADDRESS_KEY = exports.SCENE_TYPE = exports.REPEAT_CHOICE = exports.PAGE_FROM = exports.NOT_CAN_SALE = exports.LOGICS = exports.IS_NATIVE_MP = exports.IS_NATIVE_ALIPAY = exports.GROUP_TYPE = exports.GROUP_CHOICE_TYPE = exports.EVENTS = exports.DISH_TYPE = exports.DISH_STATUS = exports.DISH_SHOW_TYPE = exports.COUPON_EXTENDS = exports.CATEGORY_SHOW_TYPE = exports.CART_PROCESS_EVENT = exports.CALCULATOR_STATUS = exports.BIZ_TYPE = exports.ATTR_TYPE = exports.ADD_TYPE = void 0;

var _ = o(require("../miniprogram_npm/@limo/core/index.js")), E = {
    OPTIONS: Symbol.for("Options"),
    GLOBAL_OPTIONS: Symbol.for("Global_Options"),
    REQUEST: Symbol.for("Request"),
    EMITTER: Symbol.for("Emitter"),
    LOG: Symbol.for("Log"),
    LX: Symbol.for("Lx"),
    TRIANGLE: Symbol.for("Triangle"),
    RMS_SDK: Symbol.for("Rms-SDK"),
    SAAS_USER: Symbol.for("Saas-User-Auth-SDK"),
    SHOP: Symbol.for("Shop"),
    MENU: Symbol.for("Menu"),
    CART: Symbol.for("Cart"),
    DISH: Symbol.for("Dish"),
    LIMO: Symbol.for("Limo"),
    LIMO_FACTORY: Symbol.for("Limo_Factory"),
    THEME: Symbol.for("Theme"),
    RULE: Symbol.for("RULE"),
    SHOP_RECOMMEND: Symbol.for("shop-recommend-zt"),
    MENU_EXTRA: Symbol.for("menu-extra"),
    CART_CHECK: Symbol.for("Cart_Check"),
    JOINT_ORDER: Symbol.for("JointOrder"),
    SELECT_PEOPLE: Symbol.for("select-people-ph"),
    MEMBER: Symbol.for("member"),
    PRIVACY_AGREEMENT: Symbol.for("privacyAgreementEntity"),
    EVENT_CHANNEL: Symbol.for("event_channel"),
    MENU_COUPON: Symbol.for("Menu_Coupon")
}, S = {
    CART_CACHE: Symbol.for("cached-cartId"),
    DISH_MANDATORY: Symbol.for("mandatory-rule")
}, r = {
    INIT: Symbol.for("Init"),
    INIT_SUB_PAGE: Symbol.for("INIT_SUB_PAGE"),
    SET_EMITTER: Symbol.for("Set_Emitter"),
    DESTROY: Symbol.for("Destroy"),
    DISH_CHANGE: Symbol.for("Dish_Change"),
    DISH_OPEN: Symbol.for("Dish_Open"),
    CART_CHANGE: Symbol.for("Cart_Change"),
    PACKAGE_SPEC_DISH: Symbol.for("Package_Spec_Dish"),
    SET_OPTIONS: Symbol.for("Set_Options"),
    SET_GLOBAL_OPTIONS: Symbol.for("Set_Global_Options"),
    SET_OPTION: Symbol.for("Set_Option"),
    CLEAR_OPTIONS: Symbol.for("Clear_Options"),
    RUN_EXTENDS: Symbol.for("Run_Extends"),
    SHOP_CACHE: Symbol.for("Shop_Cache"),
    REFRESH_PAGE: Symbol.for("Refresh_Page"),
    GET_LOCATION: Symbol.for("Get_Location"),
    GET_USER_GEO: Symbol.for("Get_User_Geo"),
    SET_MENU_EXTRA: Symbol.for("Set_Menu_Extra"),
    CATE_NAVIGATE: Symbol.for("Cate_Navigate"),
    MENU_HEAD_LOADING: Symbol.for("Menu_Head_Loading"),
    SET_PD_INFO: Symbol.for("Set_Joint_Order_Info"),
    CHANGE_PEOPLE: Symbol.for("CHANGE_PEOPLE"),
    CHECK_LOCATION_AUTH: Symbol.for("CHECK_LOCATION_AUTH"),
    CART_CAL_ERROR: Symbol.for("Cart_Cal_Error"),
    PD_OPEN: Symbol.for("PingDan_Open"),
    DEAL_COUPON_CATEGORY: Symbol.for("Deal_Coupon_Category"),
    DEAL_COUPON_CHANGE: Symbol.for("Deal_Coupon_Change"),
    MINUS_PACKAGE_SPEC_DISH: Symbol.for("Minus_Package_Spec_Dish"),
    OPEN_CART_LIST: Symbol.for("Open_Cart_List"),
    JUMP_PAGE: Symbol.for("Jump_Page"),
    DISH_REMARK: Symbol.for("Dish_Remark"),
    MENU_LIST_SCROLLING: Symbol.for("Menu_List_Scrolling"),
    LOGIN_SUCCESS: Symbol.for("Login_Success"),
    COUPON_PANEL_DISH: Symbol.for("Coupon_Panel_Dish"),
    RECOMMEND_MATCH_DISH: Symbol.for("recommend-match-dish")
};

exports.DISH_TYPE = {
    SIMPLE_SPU: 1,
    COMPLEX_SPU: 2,
    SIMPLE_COMBO: 3,
    COMPLEX_COMBO: 4,
    WEIGHT_SPU: 5,
    STATIC_SPU: 6,
    DEFAULT: -1
}, exports.REPEAT_CHOICE = {
    MULTI: 1,
    SINGLE: 2
}, exports.EVENTS = r, exports.LOGICS = S, exports.TYPES = E;

exports.ADD_TYPE = {
    NONE: 0,
    DIRECT: 1,
    PANEL: 2
};

exports.SUB_DISH_ADD_TYPE = {
    ADD: 0,
    REPLACE: 1
}, exports.SPEC_ADD_TYPE = {
    CART: 0,
    PACKAGE: 1,
    ORDER_CONFIRM: 2,
    GIFT: 3,
    COUPON: 4
}, exports.ATTR_TYPE = {
    SPEC: 0,
    METHOD: 1,
    TASTE: 2
};

exports.DISH_STATUS = {
    CAN_SALE: 1,
    SOLD_OUT: 3,
    TIME_NOT_SALE: 2,
    CANNOT_SELECT: 4
};

exports.GROUP_TYPE = {
    FIXED: 10,
    OPTIONAL: 20
};

exports.GROUP_CHOICE_TYPE = {
    NON_REPEATABLE: 1,
    REPEATABLE: 2
};

exports.SOLD_OUT_TEXT = "今日售罄";

exports.NOT_CAN_SALE = "非可售时间";

exports.TRANSFER_BIZ_TYPE_TO_ROUTE = {
    100: "zt",
    110: "wm",
    120: "sc",
    130: "zc"
};

exports.BIZ_TYPE = {
    ZT: "100",
    WM: "110",
    SC: "120",
    ZC: "130"
};

exports.SEARCH_ADDRESS_KEY = "m183a4270f334ac882c1e77ab369d09w";

var e, T = ((e = {}).MENU = "MENU", e.ORDER_CONFIRM = "ORDER_CONFIRM", e.SHOP_LIST = "SHOP_LIST", 
e.ADDRESS_LIST = "ADDRESS_LIST", e.ADDRESS_EDIT = "ADDRESS_EDIT", e.MAP_SELECT = "MAP_SELECT", 
e.MUST_DISH = "MUST_DISH", e);

exports.PAGE_FROM = T;

var t = function(o) {
    return o.JOINT_ORDER = "JOINT_ORDER", o;
}({});

exports.SCENE_TYPE = t;

(function(o) {
    o.TAKEAWAY = "takeaway", o.WE_SMALL = "cloudMall", o.PERSONAL_CENTER = "personalCenter", 
    o.MEMBER_GROWTH = "memberGrowth";
})({}), function(o) {
    o.MENU = "pages/menu-v2/index", o.ORDER_CONFIRM = "orderPackages/pages/order-confirm/index";
}({});

exports.darkThemeColor = {
    "--text-color-primary": "rgba(255,255,255,0.90)",
    "--text-color-secondary": "rgba(255,255,255,0.6)",
    "--text-color-placeholder": "rgba(255,255,255,0.4)"
};

exports.lightThemeColor = {
    "--text-color-primary": "#222222",
    "--text-color-secondary": "#666666",
    "--text-color-placeholder": "#999999"
};

var O = function(o) {
    return o[o.DEFAULT = 1] = "DEFAULT", o[o.LARGE = 2] = "LARGE", o;
}({});

exports.DISH_SHOW_TYPE = O;

exports.CALCULATOR_STATUS = {
    WEIGHT: 1,
    ADD: 2,
    PEOPLE_COUNT: 3
};

var A = {
    ADD_TO_CART_PROCESS: Symbol.for("ADD_TO_CART_PROCESS")
};

exports.CART_PROCESS_EVENT = A;

exports.COUPON_EXTENDS = [ "deal-dish-extend", "mb-dish-extend" ];

var C = "undefined" != typeof wx && !!_.default.getLimoRuntime().getSystemInfoSync;

exports.IS_NATIVE_MP = C;

var P = "undefined" != typeof my && !!my.getSystemInfoSync;

exports.IS_NATIVE_ALIPAY = P;

exports.CATEGORY_SHOW_TYPE = {
    DEFAULT: 0,
    FIRST_CATE_TOP: 1
};