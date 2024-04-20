Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.RAPTOR_PERFORMANCE = exports.RAPTOR_CUSTOM = exports.PAGE_TARGET = exports.DISH_OPERATION_TYPE = void 0;

exports.RAPTOR_PERFORMANCE = {
    H5: {
        MAIN_AUTH_DURATION: 14,
        MENU_AUTH_DURATION: 11,
        ADD_DISH_DURATION: 8,
        MINUS_DISH_DURATION: 9
    },
    MP: {
        AUTH_DURATION: 0,
        MAIN_FST: 2,
        APP_READY: 3,
        SHOP_LIST_FST: 1,
        ALL: {
            ADD_DISH_DURATION: 10,
            MINUS_DISH_DURATION: 11
        }
    }
};

exports.RAPTOR_CUSTOM = {
    AUTH_COUNT: "authCount",
    AUTH_SUCCESS_COUNT: "authSuccessCount",
    JUMP_BEFORE_COUNT: "jumpBeforeLoadCount",
    JUMP_AFTER_COUNT: "jumpAfterLoadCount",
    BIND_MT_AFTER_COUNT: "bindMtAfterCount",
    BIND_MT_BEFORE_COUNT: "bindMtBeforeCount",
    BIND_DP_AFTER_COUNT: "bindDPAfterCount",
    BIND_DP_BEFORE_COUNT: "bindDPBeforeCount",
    REVIEW_AUTH_COUNT: "reviewAuthCount",
    REVIEW_AUTH_SUCCESS: "reviewAuthSuccessCount",
    APP_PRELOAD_COUNT: "app_preload_count",
    APP_PRELOAD_SUCCESS_COUNT: "app_preload_success_count",
    APP_PRELOAD_HIT_COUNT: "app_preload_hit_count",
    SET_DATA_SUCCESS_CALLBACK: "setDataSuccessCallback"
};

exports.PAGE_TARGET = {
    MAIN: 1,
    MENU: 2,
    MP: 3,
    ORDER_CONFIRM: 4,
    ORDER_DETAIL: 5,
    REVIEW_PANEL: 6,
    PORTAL: 7,
    SHOP_LIST: 8,
    SPLASH: 9,
    ORDER_CONFIRM_PAY: 10,
    ON_LAUNCH: 11,
    ON_SHOW: 12,
    ON_LAUNCH_SPU: 13,
    ORDER_LIST: 14
};

exports.DISH_OPERATION_TYPE = {
    ADD: 1,
    MINUS: 2
};