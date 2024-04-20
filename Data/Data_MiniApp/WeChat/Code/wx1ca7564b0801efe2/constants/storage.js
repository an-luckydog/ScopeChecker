Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _ = require("./time"), E = 3 * _.HOURS, R = {
    MENU_OPTIONS: {
        key: "MENU_OPTIONS",
        storeTime: 30 * _.MINUTES
    },
    SKIP_SHOP_CONFIRM_VALIDATION: {
        key: "SKIP_SHOP_CONFIRM_VALIDATION"
    },
    SHOP_LIST_LOCATION: {
        storeTime: 5 * _.MINUTES,
        key: "SHOP_LIST_LOCATION"
    },
    LIMO_MODAL: {
        storeTime: 3 * _.HOURS,
        key: "LIMO_MODAL"
    },
    ENTRANCE_URL: {
        storeTime: _.HOURS,
        key: "ENTRANCE_URL"
    },
    WX_URL_PARAMS_PARSE: {
        storeTime: _.YEARS,
        key: "WX_URL_PARAMS_PARSE"
    },
    CART_DISH_LIST: {
        storeTime: 3 * _.HOURS,
        key: "CART_DISH_LIST"
    },
    REFACTOR_LOCAL_CART: {
        storeTime: 3 * _.HOURS,
        key: "REFACTOR_LOCAL_CART"
    },
    USER_OPERATION: {
        storeTime: 3 * _.HOURS,
        key: "USER_OPERATION"
    },
    AHEAD_CART_DISH_LIST: {
        storeTime: _.WEEKS,
        key: "AHEAD_CART_DISH_LIST"
    },
    CART_DISH_SORT_MAP_LIST: {
        storeTime: 3 * _.HOURS,
        key: "CART_DISH_SORT_MAP_LIST"
    },
    AHEAD_CART_DISH_SORT_MAP_LIST: {
        storeTime: _.WEEKS,
        key: "AHEAD_CART_DISH_SORT_MAP_LIST"
    },
    DISH_LIST: {
        storeTime: 2 * _.HOURS,
        key: "DISH_LIST"
    },
    CATEGORY_LIST: {
        storeTime: 2 * _.HOURS,
        key: "CATEGORY_LIST"
    },
    PEOPLE_COUNT: {
        storeTime: 30 * _.MINUTES,
        key: "PEOPLE_COUNT"
    },
    AHEAD_PEOPLE_COUNT: {
        storeTime: _.WEEKS,
        key: "AHEAD_PEOPLE_COUNT"
    },
    MEM_PHONE: {
        storeTime: 2 * _.HOURS,
        key: "MEM_PHONE"
    },
    MEMBER_ID: {
        storeTime: 2 * _.HOURS,
        key: "MEMBER_ID"
    },
    MEM_CARD: {
        storeTime: 2 * _.HOURS,
        key: "MEM_CARD"
    },
    EXTRA_INFO: {
        storeTime: 2 * _.HOURS,
        key: "EXTRA_INFO"
    },
    BOSS_RECOMMENDATION: {
        storeTime: 2 * _.HOURS,
        key: "BOSS_RECOMMENDATION"
    },
    NET_RECOMMENDATION: {
        storeTime: 2 * _.HOURS,
        key: "NET_RECOMMENDATION"
    },
    HOT_SPU: {
        storeTime: 2 * _.HOURS,
        key: "HOT_SPU"
    },
    ORDERED_DISH: {
        storeTime: 2 * _.HOURS,
        key: "ORDERED_DISH"
    },
    MENU_CACHE_ID: {
        storeTime: 2 * _.HOURS,
        key: "MENU_CACHE_ID"
    },
    CART_PRICE: {
        storeTime: 30 * _.MINUTES,
        key: "CART_PRICE"
    },
    UNVERIFIED_DISH: {
        storeTime: 30 * _.MINUTES,
        key: "UNVERIFIED_DISH"
    },
    CLOUD_OLD_CART_INFO: {
        storeTime: 3 * _.HOURS,
        key: "CLOUD_OLD_CART_INFO"
    },
    HAS_OPEN_TOGETHER: {
        storeTime: _.DAYS,
        key: "HAS_OPEN_TOGETHER"
    },
    NEW_ADVICE_FLAG: {
        storeTime: _.DAYS,
        key: "NEW_ADVICE_FLAG"
    },
    ORDER_REMARK: {
        storeTime: 1 * _.DAYS,
        key: "ORDER_REMARK"
    },
    ORDER_CONFIRM_DEFAULT_RECHARGE_ITEM: {
        storeTime: 1 * _.DAYS,
        key: "ORDER_CONFIRM_DEFAULT_RECHARGE_ITEM"
    },
    FIRST_ORDER_FLAG: {
        storeTime: 30 * _.MINUTES,
        key: "FIRST_ORDER_FLAG"
    },
    FIRST_ENTER_ORDER_CONFRIM_PAGE: {
        storeTime: 30 * _.MINUTES,
        key: "FIRST_ENTER_ORDER_CONFRIM_PAGE"
    },
    FIRST_ENTER_ORDER_CONFRIM_DATA: {
        storeTime: 30 * _.MINUTES,
        key: "FIRST_ENTER_ORDER_CONFRIM_DATA"
    },
    ORDER_PAY_BLOCK: {
        storeTime: 30 * _.MINUTES,
        key: "ORDER_PAY_BLOCK"
    },
    AUTHORIZATION_INTERCEPT_FLAG: {
        storeTime: 30 * _.MINUTES,
        key: "AUTHORIZATION_INTERCEPT_FLAG"
    },
    ENTER_MENU_TIME: {
        storeTime: 30 * _.MINUTES,
        key: "ENTER_MENU_TIME"
    },
    SHOW_MUST_ORDER_FLAG: {
        storeTime: 30 * _.MINUTES,
        key: "SHOW_MUST_ORDER_FLAG"
    },
    SHOW_UNVERIED_DISH_FLAG: {
        storeTime: 30 * _.MINUTES,
        key: "SHOW_UNVERIED_DISH_FLAG"
    },
    RANDOM_USER_ID: {
        storeTime: _.DAYS,
        key: "RANDOM_USER_ID"
    },
    RANDOM_APP_ID: {
        storeTime: _.DAYS,
        key: "RANDOM_APP_ID"
    },
    PAY_OPEN_ID: {
        storeTime: 6 * _.HOURS,
        key: "PAY_OPEN_ID"
    },
    FIRST_ADD_DISH_TIME: {
        storeTime: 1 * _.HOURS,
        key: "FIRST_ADD_DISH_TIME"
    },
    SHOW_GREAT_DEALS_TOAST: {
        storeTime: 1 * _.DAYS,
        key: "SHOW_GREAT_DEALS_TOAST"
    },
    SHOW_INTELLIGENT_TOAST: {
        storeTime: 1 * _.DAYS,
        key: "SHOW_INTELLIGENT_TOAST"
    },
    SEND_TIME_MAP: {
        storeTime: _.WEEKS,
        key: "SEND_TIME_MAP"
    },
    PAGE_SIGN: {
        key: "PAGE_SIGN"
    },
    USE_MENU_CACHE: {
        storeTime: 2 * _.HOURS,
        key: "USE_MENU_CACHE"
    },
    USE_MENU_CACHE_FOR_NON_MENU_PAGE: {
        storeTime: 2 * _.HOURS,
        key: "USE_MENU_CACHE_FOR_NON_MENU_PAGE"
    },
    ENTRANCE: {
        storeTime: _.HOURS,
        key: "ENTRANCE"
    },
    SEND_LX_IN_SESSION_MAP: {
        key: "SEND_LX_IN_SESSION_MAP"
    },
    COUPON_PACKAGE_OPENED_ORDERIDS: {
        key: "COUPON_PACKAGE_OPENED_ORDERIDS"
    },
    PRICE_CATEGORY_CODE: {
        key: "PRICE_CATEGORY_CODE"
    },
    HAS_TAKE_COUPON_AT_MENU_FLAG: {
        storeTime: 1 * _.HOURS,
        key: "HAS_TAKE_COUPON_AT_MENU_FLAG"
    },
    HAS_CLICK_TAKE_COUPON_AT_MENU_FLAG: {
        storeTime: 5 * _.MINUTES,
        key: "HAS_CLICK_TAKE_COUPON_AT_MENU_FLAG"
    },
    HAS_SHOW_RECEIVE_COUPON_AT_MENU_FLAG: {
        storeTime: 3 * _.HOURS,
        key: "HAS_SHOW_RECEIVE_COUPON_AT_MENU_FLAG"
    },
    HAS_SHOW_AD_BOARD_AT_MENU_FLAG: {
        storeTime: E,
        key: "HAS_SHOW_AD_BOARD_AT_MENU_FLAG"
    },
    HAS_SHOW_AD_BOARD_AT_PORTAL_FLAG: {
        storeTime: E,
        key: "HAS_SHOW_AD_BOARD_AT_PORTAL_FLAG"
    },
    HAS_SHOW_TABLE_DISH_PROMPT_AT_ORDER_CONFIRM: {
        key: "HAS_SHOW_TABLE_DISH_PROMPT_AT_ORDER_CONFIRM"
    },
    PREORDER_INFO: {
        key: "PREORDER_INFO"
    },
    PREORDER_USER_INFO: {
        key: "PREORDER_USER_INFO"
    },
    ORDER_RECALCULATE: {
        storeTime: 2 * _.HOURS,
        key: "ORDER_RECALCULATE"
    },
    DEAL_COUPONS: {
        key: "DEAL_COUPONS"
    },
    GROUPON_DISH_INFO: {
        key: "GROUPON_DISH_INFO"
    },
    GROUPON_COUPON_LIST: {
        key: "GROUPON_COUPON_LIST"
    },
    PROMOTION_MAP: {
        key: "PROMOTION_MAP"
    },
    HAS_CLICK_MENU_ORDER_BTN: {
        key: "HAS_CLICK_MENU_ORDER_BTN"
    },
    HAS_CLICK_MENU_ORDER_BTN_WHEN_GOLD_PLAN_TIPS_ON: {
        key: "HAS_CLICK_MENU_ORDER_BTN_WHEN_GOLD_PLAN_TIPS_ON"
    },
    LX_BIZ_PARAMS: {
        key: "LX_BIZ_PARAMS"
    },
    DISH_SEARCH_HISTORY: {
        key: "DISH_SEARCH_HISTORY"
    },
    TAB_BAR_DATA: {
        key: "TAB_BAR_DATA"
    },
    CONFIRM_TO_MEMBER: {
        storeTime: 2 * _.HOURS,
        key: "CONFIRM_TO_MEMBER"
    },
    CARD_INFO: {
        storeTime: _.YEARS,
        key: "CARD_INFO"
    },
    QUERY_NAV_BAR_TAG: {
        key: "QUERY_NAV_BAR_TAG"
    },
    Q_Suffix: {
        key: "Q_Suffix"
    },
    WXAPP_VERSION: {
        key: "WXAPP_VERSION"
    },
    GOLD_PLAN_TIPS_SWITCH: {
        key: "GOLD_PLAN_TIPS_SWITCH"
    },
    RECHARGE_IDS: {
        storeTime: 3 * _.HOURS,
        key: "RECHARGE_IDS"
    },
    CHARGE_PARAMS: {
        storeTime: .5 * _.HOURS,
        key: "CHARGE_PARAMS"
    },
    PRE_CHARGE_ITEM: {
        storeTime: .5 * _.HOURS,
        key: "PRE_CHARGE_ITEM"
    },
    ACTIVITY_TYPE_LIST: {
        storeTime: 10 * _.MINUTES,
        key: "ACTIVITY_TYPE_LIST"
    },
    APP_MOCK: {
        key: "APP_MOCK"
    },
    ADD_DISH_TIP_AFTER_ORDERED: {
        storeTime: 3 * _.HOURS,
        key: "ADD_DISH_TIP_AFTER_ORDERED"
    },
    BIZ_MODE: {
        storeTime: 3 * _.HOURS,
        key: "BIZ_MODE"
    },
    PICK_BIZ_ID: {
        key: "PICK_BIZ_ID"
    },
    ORDER_NEED_MEMBER: {
        key: "ORDER_NEED_MEMBER"
    },
    LOGIN_SUCCESS_FROM_REGISTER_PANEL: {
        key: "LOGIN_SUCCESS_FROM_REGISTER_PANEL"
    },
    SHOW_REGISTER_PANEL_TAG: {
        storeTime: 3 * _.HOURS,
        key: "SHOW_REGISTER_PANEL_TAG"
    },
    REQUEST_SIGN: {
        storeTime: 24 * _.HOURS,
        key: "REQUEST_SIGN"
    },
    TIME_OUT_ID: {
        key: "TIME_OUT_ID"
    },
    REFUSED_REVIEW_ORDER_AUTH: {
        storeTime: _.DAYS,
        key: "REFUSED_REVIEW_ORDER_AUTH"
    },
    USER_OPEN_ID: {
        storeTime: 24 * _.HOURS,
        key: "USER_OPEN_ID"
    },
    TENANT_ID: {
        storeTime: 24 * _.HOURS,
        key: "TENANT_ID"
    },
    USER_AUTH_STATUS: {
        storeTime: 24 * _.HOURS,
        key: "USER_AUTH_STATUS"
    },
    USER_INFO: {
        storeTime: 24 * _.HOURS,
        key: "USER_INFO"
    },
    IS_TOAST_MT_LOGIN: {
        storeTime: _.HOURS,
        key: "IS_TOAST_MT_LOGIN"
    },
    MEMBER_PRICE_TIP: {
        storeTime: 2 * _.HOURS,
        key: "MEMBER_PRICE_TIP"
    },
    LIMO_PREVIEW_PAGE: {
        storeTime: .5 * _.HOURS,
        key: "LIMO_PREVIEW_PAGE"
    },
    CONFIRMED_RESPONSE_SYSTEM_TEMP_TIPS: {
        key: "CONFIRMED_RESPONSE_SYSTEM_TEMP_TIPS"
    },
    ORDER_REMARK_FLAG: {
        key: "ORDER_REMARK_FLAG"
    },
    ORDER_REMARK_DATA: {
        key: "ORDER_REMARK_DATA"
    },
    ORDER_GIFT_FLAG: {
        key: "ORDER_GIFT_FLAG"
    },
    ORDER_GROUP_MASK_REMARK_FLAG: {
        storeTime: 3 * _.HOURS,
        key: "ORDER_GROUP_MASK_REMARK_FLAG"
    },
    VIP_DIAMOND_ANIMATION: {
        key: "VIP_DIAMOND_ANIMATION"
    },
    UNVERIFIED_DISH_CONFIRM: {
        key: "UNVERIFIED_DISH_CONFIRM"
    },
    CAPTCHA_CODE: {
        key: "CAPTCHA_CODE"
    },
    LOCATION_REFUSED_TIME: {
        storeTime: _.DAYS,
        key: "LOCATION_REFUSED_TIME"
    },
    SLICE_STEP: {
        key: "SLICE_STEP"
    },
    USER_ADDRESS_LIST: {
        storeTime: 2 * _.HOURS,
        key: "USER_ADDRESS_LIST"
    },
    USER_SELECTED_ADDRESS: {
        storeTime: 30 * _.MINUTES,
        key: "USER_SELECTED_ADDRESS"
    },
    MENU_ADDRESS_MODAL_SHOW_FLAG: {
        storeTime: 1 * _.HOURS,
        key: "MENU_ADDRESS_MODAL_SHOW_FLAG"
    },
    DELIVERY_INFO: {
        storeTime: 2 * _.HOURS,
        key: "DELIVERY_INFO"
    },
    MULTI_SHOP: {
        key: "MULTI_SHOP"
    },
    CUSTOM_CHANNEL: {
        key: "CUSTOM_CHANNEL"
    },
    SELECTED_CITY: {
        key: "SELECTED_CITY"
    },
    BIZ_TAB_EXISTED: {
        key: "BIZ_TAB_EXISTED"
    },
    HISTORY_REMARK_LIST: {
        key: "HISTORY_REMARK_LIST"
    },
    LAUNCH_RESERVE_TIME: {
        storeTime: 10 * _.MINUTES,
        key: "LAUNCH_RESERVE_TIME"
    },
    SESSION_BACKUP: {
        storeTime: 30 * _.MINUTES,
        key: "SESSION_BACKUP"
    },
    MEMBER_ENTER_FROM_TAKE_COUPON_PANEL: {
        key: "MEMBER_ENTER_FROM_TAKE_COUPON_PANEL"
    },
    ACT_TYPE: {
        key: "ACT_TYPE"
    },
    COUPON_SUBSCRIPTION: {
        storeTime: _.DAYS,
        key: "COUPON_SUBSCRIPTION"
    },
    ORDER_DETAIL_LIMO_MODAL: {
        key: "ORDER_DETAIL_LIMO_MODAL"
    },
    MENU_ORDER_PROGRESS: {
        storeTime: 4 * _.HOURS,
        key: "MENU_ORDER_PROGRESS"
    },
    LIMIT_ORDER_DISH_TAG: {
        key: "LIMIT_ORDER_DISH_TAG"
    },
    SHOW_MUST_DISH_TOAST_IN_MENU: {
        storeTime: 10 * _.MINUTES,
        key: "SHOW_MUST_DISH_TOAST_IN_MENU"
    },
    REC_SCENE_FLAG: {
        key: "REC_SCENE_FLAG"
    },
    SHOP_CACHE: {
        storeTime: 30 * _.MINUTES,
        key: "SHOP_CACHE"
    },
    VALIDATE_ALLOW_OD_AFTER_CLOSE: {
        key: "VALIDATE_ALLOW_OD_AFTER_CLOSE"
    },
    BUFFET_LIMIT_MEAL_TIPS_FLAG: {
        storeTime: 3 * _.HOURS,
        key: "BUFFET_LIMIT_MEAL_TIPS_FLAG"
    },
    OPEN_SCREEN: {
        storeTime: _.DAYS,
        key: "OPEN_SCREEN"
    },
    MENU_ORDER_PEOPLE_COUNT: {
        storeTime: 3 * _.HOURS,
        key: "MENU_ORDER_PEOPLE_COUNT"
    },
    SELECTED_DISH: {
        key: "SELECTED_DISH"
    },
    PAY_RECHARGE_REMIND_FLAGE: {
        key: "PAY_RECHARGE_REMIND_FLAGE",
        storeTime: 1 * _.HOURS
    }
};

Object.keys(R).forEach(function(_) {
    R[_].key = _;
});

var T = R;

exports.default = T;