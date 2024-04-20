var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../miniprogram_npm/seamless-immutable/index.js")), u = e(require("../lib/storageUtil")), n = e(require("../lib/sessionStorage")), a = e(require("./storageKeys")), f = {
    setMemberSelectedCoupon: function(e, t, n) {
        u.default.set(a.default.MEMBER_SELECTED_COUPON.key, n, "".concat(e, "_").concat(t));
    },
    getMemberSelectedCoupon: function(e, t) {
        return u.default.get(a.default.MEMBER_SELECTED_COUPON.key, "".concat(e, "_").concat(t));
    },
    getDiningStyleVO: function(e, t) {
        return u.default.get(a.default.DINING_STYLE_VO.key, "".concat(e, "_").concat(t || ""));
    },
    setDiningStyleVO: function(e, t, n) {
        u.default.set(a.default.DINING_STYLE_VO.key, n, "".concat(e, "_").concat(t || ""));
    },
    setMenuOps: function(e) {
        u.default.set(a.default.MENU_OPTIONS.key, e);
    },
    getMenuOps: function() {
        return u.default.get(a.default.MENU_OPTIONS.key);
    },
    getPickBizId: function() {
        var e = a.default.PICK_BIZ_ID.key;
        return u.default.get(e) ? u.default.get(e).val : null;
    },
    setCartDishList: function(e, t, n) {
        var f = a.default.CART_DISH_LIST.key;
        u.default.set(f, n, "".concat(e, "_").concat(t || ""));
    },
    getCartDishList: function(e, n) {
        var f = a.default.CART_DISH_LIST.key, d = u.default.get(f, "".concat(e, "_").concat(n || "")) || {};
        return (0, t.default)(d);
    },
    setRefactorLocalCart: function(e, t, n) {
        var f = a.default.REFACTOR_LOCAL_CART.key;
        u.default.set(f, n, "".concat(e, "_").concat(t || ""));
    },
    getRefactorLocalCart: function(e, n) {
        var f = a.default.REFACTOR_LOCAL_CART.key, d = u.default.get(f, "".concat(e, "_").concat(n || "")) || {};
        return (0, t.default)(d);
    },
    setPartialCloudCartInfo: function(e, t) {
        u.default.set(a.default.CLOUD_OLD_CART_INFO.key, t, e);
    },
    getPartialCloudCartInfo: function(e) {
        var n = u.default.get(a.default.CLOUD_OLD_CART_INFO.key, e) || {};
        return (0, t.default)(n);
    },
    setUserOperation: function(e, t) {
        u.default.set(a.default.USER_OPERATION.key, t, e);
    },
    getUserOperation: function(e) {
        var n = u.default.get(a.default.USER_OPERATION.key, e) || {};
        return (0, t.default)(n);
    },
    setCartDishSortMapList: function(e, t, n) {
        var f = a.default.CART_DISH_SORT_MAP_LIST.key;
        u.default.set(f, n, "".concat(e, "_").concat(t || ""));
    },
    getCartDishSortMapList: function(e, n) {
        var f = a.default.CART_DISH_SORT_MAP_LIST.key, d = u.default.get(f, "".concat(e, "_").concat(n || "")) || [];
        return (0, t.default)(d);
    },
    setDishList: function(e, t) {
        u.default.set(a.default.DISH_LIST.key, t, e);
    },
    getDishList: function(e, n) {
        var f = u.default.get(a.default.DISH_LIST.key, e) || {};
        return n ? f : (0, t.default)(f);
    },
    setSelectCard: function(e, t) {
        u.default.set(a.default.MEM_CARD.key, t, e);
    },
    getSelectCard: function(e) {
        return u.default.get(a.default.MEM_CARD.key, e) || "";
    },
    setExtraInfo: function(e, t) {
        u.default.set(a.default.EXTRA_INFO.key, t, e);
    },
    getExtraInfo: function(e) {
        var n = u.default.get(a.default.EXTRA_INFO.key, e) || {};
        return (0, t.default)(n);
    },
    setBossRecommendationList: function(e, t) {
        u.default.set(a.default.BOSS_RECOMMENDATION.key, t, e);
    },
    getBossRecommendationList: function(e) {
        var n = u.default.get(a.default.BOSS_RECOMMENDATION.key, e) || [];
        return (0, t.default)(n);
    },
    setNetRecommendationList: function(e, t) {
        u.default.set(a.default.NET_RECOMMENDATION.key, t, e);
    },
    getNetRecommendationList: function(e) {
        var n = u.default.get(a.default.NET_RECOMMENDATION.key, e) || [];
        return (0, t.default)(n);
    },
    setMenuCalculateCache: function(e, t) {
        u.default.set(a.default.MENU_CACHE_ID.key, t, e);
    },
    getMenuCalculateCache: function(e) {
        return u.default.get(a.default.MENU_CACHE_ID.key, e) || {};
    },
    setCartPrice: function(e, t) {
        u.default.set(a.default.CART_PRICE.key, t, e);
    },
    getCartPrice: function(e) {
        var n = u.default.get(a.default.CART_PRICE.key, e) || {};
        return (0, t.default)(n);
    },
    setHasOpenTogether: function(e, t) {
        u.default.set(a.default.HAS_OPEN_TOGETHER.key, t, e);
    },
    getHasOpenTogether: function(e) {
        return !0 === u.default.get(a.default.HAS_OPEN_TOGETHER.key, e);
    },
    setNewAdvanceFlag: function(e, t) {
        u.default.set(a.default.NEW_ADVICE_FLAG.key, t, e);
    },
    getNewAdvanceFlag: function(e) {
        return !0 === u.default.get(a.default.NEW_ADVICE_FLAG.key, e);
    },
    setRandomUserId: function(e) {
        u.default.set(a.default.RANDOM_USER_ID.key, e);
    },
    getRandomUserId: function() {
        return u.default.get(a.default.RANDOM_USER_ID.key);
    },
    setRandomAppId: function(e) {
        u.default.set(a.default.RANDOM_APP_ID.key, e);
    },
    getRandomAppId: function() {
        return u.default.get(a.default.RANDOM_APP_ID.key);
    },
    setPayOpenId: function(e) {
        u.default.set(a.default.PAY_OPEN_ID.key, e);
    },
    getPayOpenId: function() {
        return u.default.get(a.default.PAY_OPEN_ID.key);
    },
    setFirstAddDishTime: function(e) {
        u.default.set(a.default.FIRST_ADD_DISH_TIME.key, e);
    },
    getFirstAddDishTime: function() {
        return u.default.get(a.default.FIRST_ADD_DISH_TIME.key);
    },
    getHasSendTime: function(e, t) {
        var n = u.default.get(a.default.SEND_TIME_MAP.key, e) || {}, f = n[t];
        return n[t] = !0, u.default.set(a.default.SEND_TIME_MAP.key, n, e), f;
    },
    getHasSendLXInSession: function(e) {
        var t = n.default.get(a.default.SEND_LX_IN_SESSION_MAP.key) || {}, u = t[e];
        return t[e] = !0, n.default.set(a.default.SEND_LX_IN_SESSION_MAP.key, t), u;
    },
    setPVPageSign: function(e, t) {
        n.default.set(a.default.PAGE_SIGN.key, t, e);
    },
    getPVPageSign: function(e) {
        return n.default.get(a.default.PAGE_SIGN.key, e) || "";
    },
    setUseMenuCache: function(e, t) {
        u.default.set(a.default.USE_MENU_CACHE.key, t, e);
    },
    useMenuCache: function(e) {
        return u.default.get(a.default.USE_MENU_CACHE.key, e);
    },
    setUseMenuCacheForNonMenuPage: function(e, t) {
        u.default.set(a.default.USE_MENU_CACHE_FOR_NON_MENU_PAGE.key, t, e);
    },
    getUseMenuCacheForNonMenuPage: function(e) {
        var t = u.default.get(a.default.USE_MENU_CACHE_FOR_NON_MENU_PAGE.key, e);
        return null === t || t;
    },
    setEntrance: function(e) {
        u.default.set(a.default.ENTRANCE.key, e);
    },
    getEntrance: function() {
        return u.default.get(a.default.ENTRANCE.key) || "";
    },
    setPriceCategoryCode: function(e, t) {
        u.default.set(a.default.PRICE_CATEGORY_CODE.key, t, e);
    },
    getPriceCategoryCode: function(e) {
        return u.default.get(a.default.PRICE_CATEGORY_CODE.key, e);
    },
    setHasTakeCouponAtMenu: function(e, t) {
        u.default.set(a.default.HAS_TAKE_COUPON_AT_MENU_FLAG.key, t, e);
    },
    getHasTakeCouponAtMenu: function(e) {
        return u.default.get(a.default.HAS_TAKE_COUPON_AT_MENU_FLAG.key, e);
    },
    setHasClickTakeCouponAtMenu: function(e, t) {
        u.default.set(a.default.HAS_CLICK_TAKE_COUPON_AT_MENU_FLAG.key, t, e);
    },
    getHasClickTakeCouponAtMenu: function(e) {
        return u.default.get(a.default.HAS_CLICK_TAKE_COUPON_AT_MENU_FLAG.key, e);
    },
    setHasShowReceiveCouponAtMenu: function(e, t) {
        u.default.set(a.default.HAS_SHOW_RECEIVE_COUPON_AT_MENU_FLAG.key, t, e);
    },
    getHasShowReceiveCouponAtMenu: function(e) {
        return u.default.get(a.default.HAS_SHOW_RECEIVE_COUPON_AT_MENU_FLAG.key, e);
    },
    setHasShowAdBoardAtMenu: function(e) {
        u.default.set(a.default.HAS_SHOW_AD_BOARD_AT_MENU_FLAG.key, !0, e);
    },
    getHasShowAdBoardAtMenu: function(e) {
        return u.default.get(a.default.HAS_SHOW_AD_BOARD_AT_MENU_FLAG.key, e);
    },
    setHasShowAdBoardAtPortal: function(e) {
        u.default.set(a.default.HAS_SHOW_AD_BOARD_AT_PORTAL_FLAG.key, !0, e);
    },
    getHasShowAdBoardAtPortal: function(e) {
        return u.default.get(a.default.HAS_SHOW_AD_BOARD_AT_PORTAL_FLAG.key, e);
    },
    setSliceStep: function(e) {
        n.default.set(a.default.SLICE_STEP.key, e);
    },
    getSliceStep: function() {
        return n.default.get(a.default.SLICE_STEP.key);
    },
    setOpenedOrderIds: function(e) {
        u.default.set(a.default.COUPON_PACKAGE_OPENED_ORDERIDS.key, e);
    },
    getOpenedOrderIds: function() {
        return u.default.get(a.default.COUPON_PACKAGE_OPENED_ORDERIDS.key);
    },
    setPreorderInfo: function(e, t) {
        u.default.set(a.default.PREORDER_INFO.key, t, e);
    },
    getPreorderInfo: function(e) {
        return u.default.get(a.default.PREORDER_INFO.key, e) || {};
    },
    setPreorderUserInfo: function(e) {
        u.default.set(a.default.PREORDER_USER_INFO.key, e);
    },
    getPreorderUserInfo: function() {
        return u.default.get(a.default.PREORDER_USER_INFO.key) || {};
    },
    setReCalculate: function(e) {
        u.default.set(a.default.ORDER_RECALCULATE.key, e);
    },
    getReCalculate: function() {
        return u.default.get(a.default.ORDER_RECALCULATE.key) || !1;
    },
    setDealCoupons: function(e, t) {
        n.default.set(a.default.DEAL_COUPONS.key, t, e);
    },
    getDealCoupons: function(e, u) {
        return u ? n.default.get(a.default.DEAL_COUPONS.key, e) || [] : (0, t.default)(n.default.get(a.default.DEAL_COUPONS.key, e) || []);
    },
    setGrouponDishInfo: function(e, t) {
        n.default.set(a.default.GROUPON_DISH_INFO.key, t, e);
    },
    getGrouponDishInfo: function(e) {
        return (0, t.default)(n.default.get(a.default.GROUPON_DISH_INFO.key, e) || []);
    },
    setGrouponCouponList: function(e, t) {
        n.default.set(a.default.GROUPON_COUPON_LIST.key, t, e);
    },
    getGrouponCouponList: function(e) {
        return (0, t.default)(n.default.get(a.default.GROUPON_COUPON_LIST.key, e) || []);
    },
    setLxBizParams: function(e) {
        n.default.set(a.default.LX_BIZ_PARAMS.key, e);
    },
    getLxBizParams: function() {
        return n.default.get(a.default.LX_BIZ_PARAMS.key);
    },
    setSearchHistory: function(e, t) {
        u.default.set(a.default.DISH_SEARCH_HISTORY.key, e, t);
    },
    getSearchHistory: function(e) {
        return u.default.get(a.default.DISH_SEARCH_HISTORY.key, e);
    },
    setTabBarData: function(e, t) {
        n.default.set(a.default.TAB_BAR_DATA.key, t, e);
    },
    getTabBarData: function(e) {
        return n.default.get(a.default.TAB_BAR_DATA.key, e) || [];
    },
    setCardInfo: function(e) {
        u.default.set(a.default.CARD_INFO.key, e);
    },
    getCardInfo: function() {
        return u.default.get(a.default.CARD_INFO.key) || "";
    },
    setWxappVersion: function(e) {
        n.default.set(a.default.WXAPP_VERSION.key, e);
    },
    getWxappVersion: function() {
        return n.default.get(a.default.WXAPP_VERSION.key);
    },
    setChargeIds: function(e, t) {
        u.default.set(a.default.RECHARGE_IDS.key, t, e);
    },
    getChargeIds: function(e) {
        return u.default.get(a.default.RECHARGE_IDS.key, e) || [];
    },
    removeChargeIds: function(e) {
        return u.default.remove(a.default.RECHARGE_IDS.key, e) || [];
    },
    setChargeParams: function(e, t) {
        u.default.set(a.default.CHARGE_PARAMS.key, t, e);
    },
    getChargeParams: function(e) {
        return u.default.get(a.default.CHARGE_PARAMS.key, e) || {};
    },
    setSelectedChargeItem: function(e, t) {
        u.default.set(a.default.PRE_CHARGE_ITEM.key, t, e);
    },
    removeSelectedChargeItem: function(e) {
        u.default.remove(a.default.PRE_CHARGE_ITEM.key, e);
    },
    getSelectedChargeItem: function(e) {
        return u.default.get(a.default.PRE_CHARGE_ITEM.key, e) || {};
    },
    setActivityTypeList: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return n.default.set(a.default.ACTIVITY_TYPE_LIST.key, JSON.stringify(e));
    },
    getActivityTypeList: function() {
        return n.default.get(a.default.ACTIVITY_TYPE_LIST.key) || "";
    },
    getAppMock: function() {
        return u.default.get(a.default.APP_MOCK.key) || !1;
    },
    setAppMock: function(e) {
        u.default.set(a.default.APP_MOCK.key, e);
    },
    setAddDishTipAfterOrderedFlag: function(e) {
        u.default.set(a.default.ADD_DISH_TIP_AFTER_ORDERED.key, !0, e);
    },
    getAddDishTipAfterOrderedFlag: function(e) {
        return u.default.get(a.default.ADD_DISH_TIP_AFTER_ORDERED.key, e);
    },
    getBizMode: function() {
        return u.default.get(a.default.BIZ_MODE.key) || "0";
    },
    setBizMode: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0";
        u.default.set(a.default.BIZ_MODE.key, e);
    },
    setLoginFromRegisterPanelTag: function(e) {
        n.default.set(a.default.LOGIN_SUCCESS_FROM_REGISTER_PANEL.key, e);
    },
    getLoginFromRegisterPanelTag: function() {
        return n.default.get(a.default.LOGIN_SUCCESS_FROM_REGISTER_PANEL.key) || !1;
    },
    setShowRegisterPanelTag: function(e, t) {
        u.default.set(a.default.SHOW_REGISTER_PANEL_TAG.key, t, e);
    },
    getShowRegisterPanelTag: function(e) {
        return u.default.get(a.default.SHOW_REGISTER_PANEL_TAG.key, e);
    },
    setTimeOutId: function(e) {
        u.default.set(a.default.TIME_OUT_ID.key, e);
    },
    getTimeOutId: function() {
        return u.default.get(a.default.TIME_OUT_ID.key) || 0;
    },
    setSignWithPOI: function(e, t) {
        return u.default.set(a.default.REQUEST_SIGN.key, e, t);
    },
    getSignWithPOI: function(e) {
        return u.default.get(a.default.REQUEST_SIGN.key, e);
    },
    isRefusedReviewOrderAuth: function(e) {
        return u.default.get(a.default.REFUSED_REVIEW_ORDER_AUTH.key, e);
    },
    setRefusedReviewOrderAuth: function(e, t) {
        u.default.set(a.default.REFUSED_REVIEW_ORDER_AUTH.key, t, e);
    },
    setUserOpenId: function(e) {
        return u.default.set(a.default.USER_OPEN_ID.key, e);
    },
    getUserOpenId: function() {
        return u.default.get(a.default.USER_OPEN_ID.key) || 0;
    },
    setTenantId: function(e) {
        return u.default.set(a.default.TENANT_ID.key, e);
    },
    getTenantId: function() {
        return u.default.get(a.default.TENANT_ID.key) || 0;
    },
    setUserInfo: function(e, t) {
        return u.default.set(a.default.USER_INFO.key, t, "" + e);
    },
    getUserInfo: function(e) {
        return u.default.get(a.default.USER_INFO.key, "" + e) || {};
    },
    setIsToastFromMTLoginOnce: function(e) {
        return u.default.set(a.default.IS_TOAST_MT_LOGIN.key, e);
    },
    getIsToastFromMTLoginOnce: function() {
        return u.default.get(a.default.IS_TOAST_MT_LOGIN.key) || !1;
    },
    getMemberPriceTip: function(e) {
        return u.default.get(a.default.MEMBER_PRICE_TIP.key, e);
    },
    setMemberPriceTip: function(e, t) {
        return u.default.set(a.default.MEMBER_PRICE_TIP.key, t, e);
    },
    setConfirmedResponseSystemTempTips: function(e) {
        n.default.set(a.default.CONFIRMED_RESPONSE_SYSTEM_TEMP_TIPS.key, e);
    },
    getConfirmedResponseSystemTempTips: function() {
        return n.default.get(a.default.CONFIRMED_RESPONSE_SYSTEM_TEMP_TIPS.key) || [];
    },
    setInvalidDishes: function(e, t) {
        u.default.set(a.default.UNVERIFIED_DISH_CONFIRM.key, t, e);
    },
    getInvalidDishes: function(e) {
        return u.default.get(a.default.UNVERIFIED_DISH_CONFIRM.key, e) || !1;
    },
    setLimoModal: function(e) {
        return e ? u.default.set(a.default.LIMO_MODAL.key, !0, e) : null;
    },
    getLimoModal: function(e) {
        return e && u.default.get(a.default.LIMO_MODAL.key, e) || null;
    },
    setOrderRemarkFlag: function() {
        n.default.set(a.default.ORDER_REMARK_FLAG.key, !0);
    },
    getOrderRemarkFlag: function() {
        return n.default.get(a.default.ORDER_REMARK_FLAG.key) || !1;
    },
    setDefaultRechargeItem: function(e) {
        n.default.set(a.default.ORDER_CONFIRM_DEFAULT_RECHARGE_ITEM.key, e);
    },
    getDefaultRechargeItem: function() {
        return n.default.get(a.default.ORDER_CONFIRM_DEFAULT_RECHARGE_ITEM.key) || {};
    },
    setFirstEnterOrderConfirmFlag: function(e) {
        u.default.set(a.default.FIRST_ENTER_ORDER_CONFRIM_PAGE.key, e);
    },
    getFirstEnterOrderConfirmFlag: function() {
        return u.default.get(a.default.FIRST_ENTER_ORDER_CONFRIM_PAGE.key) || !1;
    },
    setFirstEnterOrderConfirmTitleData: function(e) {
        n.default.set(a.default.FIRST_ENTER_ORDER_CONFRIM_DATA.key, e);
    },
    getFirstEnterOrderConfirmTitleData: function() {
        return n.default.get(a.default.FIRST_ENTER_ORDER_CONFRIM_DATA.key) || {};
    },
    setOrderRemarkData: function(e) {
        n.default.set(a.default.ORDER_REMARK_DATA.key, e);
    },
    getOrderRemarkData: function() {
        return n.default.get(a.default.ORDER_REMARK_DATA.key) || !1;
    },
    setOrderGiftDishList: function(e) {
        n.default.set(a.default.ORDER_GIFT_FLAG.key, e);
    },
    getOrderGiftDishList: function() {
        return n.default.get(a.default.ORDER_GIFT_FLAG.key) || [];
    },
    setCaptchaCode: function(e, t) {
        u.default.set(a.default.CAPTCHA_CODE.key, e, t);
    },
    getCaptchaCode: function(e) {
        return u.default.get(a.default.CAPTCHA_CODE.key, e);
    },
    setLocationRefusedTime: function(e) {
        u.default.set(a.default.LOCATION_REFUSED_TIME.key, !0, e);
    },
    getLocationRefusedTime: function(e) {
        return u.default.get(a.default.LOCATION_REFUSED_TIME.key, e) || !1;
    },
    setDisableVipDiamondAnimation: function() {
        u.default.set(a.default.VIP_DIAMOND_ANIMATION.key, !0);
    },
    getDisableVipDiamondAnimation: function() {
        return u.default.get(a.default.VIP_DIAMOND_ANIMATION.key);
    },
    setSessionBackup: function(e) {
        u.default.set(a.default.SESSION_BACKUP.key, e);
    },
    setUserAddressList: function(e) {
        n.default.set(a.default.USER_ADDRESS_LIST.key, e);
    },
    getUserAddressList: function() {
        return n.default.get(a.default.USER_ADDRESS_LIST.key) || [];
    },
    setUserSelectedAddress: function(e) {
        n.default.set(a.default.USER_SELECTED_ADDRESS.key, e), u.default.set(a.default.USER_SELECTED_ADDRESS.key, e);
    },
    getUserSelectedAddress: function() {
        var e = n.default.get(a.default.USER_SELECTED_ADDRESS.key) || "";
        return e ? u.default.set(a.default.USER_SELECTED_ADDRESS.key, e) : e = u.default.get(a.default.USER_SELECTED_ADDRESS.key) || "", 
        e;
    },
    setUserSelectedAddressFlag: function(e) {
        u.default.set(a.default.MENU_ADDRESS_MODAL_SHOW_FLAG.key, e);
    },
    getUserSelectedAddressFlag: function() {
        return u.default.get(a.default.MENU_ADDRESS_MODAL_SHOW_FLAG.key) || !1;
    },
    setDeliveryInfo: function(e, t) {
        u.default.set(a.default.DELIVERY_INFO.key, t, e);
    },
    getDeliveryInfo: function(e) {
        return u.default.get(a.default.DELIVERY_INFO.key, e);
    },
    setCustomChannel: function(e) {
        e && u.default.set(a.default.CUSTOM_CHANNEL.key, e);
    },
    getCustomChannel: function() {
        return u.default.get(a.default.CUSTOM_CHANNEL.key);
    },
    removeCustomChannel: function() {
        u.default.remove(a.default.CUSTOM_CHANNEL.key);
    },
    getSelectedCity: function() {
        return n.default.get(a.default.SELECTED_CITY.key);
    },
    setSelectedCity: function(e) {
        n.default.set(a.default.SELECTED_CITY.key, e);
    },
    removeSelectedCity: function() {
        n.default.remove(a.default.SELECTED_CITY.key);
    },
    removeBizTabDisplayStatus: function() {
        n.default.remove(a.default.BIZ_TAB_EXISTED.key);
    },
    setHistoryRemarkList: function(e, t) {
        n.default.set(a.default.HISTORY_REMARK_LIST.key, t, e);
    },
    getHistoryRemarkList: function(e) {
        return n.default.get(a.default.HISTORY_REMARK_LIST.key, e) || [];
    },
    setMemberEnterFromTakeCouponPanel: function(e, t) {
        n.default.set(a.default.MEMBER_ENTER_FROM_TAKE_COUPON_PANEL.key, t, e);
    },
    getMemberEnterFromTakeCouponPanel: function(e) {
        return n.default.get(a.default.MEMBER_ENTER_FROM_TAKE_COUPON_PANEL.key, e) || !1;
    },
    setActTypeList: function(e, t) {
        n.default.set(a.default.ACT_TYPE.key, e, t);
    },
    getActTypeList: function(e) {
        return n.default.get(a.default.ACT_TYPE.key, e) || !1;
    },
    getCouponSubscriptionFlag: function(e) {
        return u.default.get(a.default.COUPON_SUBSCRIPTION.key, e) || !1;
    },
    setCouponSubscriptionFlag: function(e) {
        u.default.set(a.default.COUPON_SUBSCRIPTION.key, !0, e);
    },
    setOrderDetailLimoModal: function(e) {
        return e ? u.default.set(a.default.ORDER_DETAIL_LIMO_MODAL.key, !0, e) : null;
    },
    getOrderDetailLimoModal: function(e) {
        return e && u.default.get(a.default.ORDER_DETAIL_LIMO_MODAL.key, e) || null;
    },
    setShopConfirmValidationSkip: function(e) {
        n.default.set(a.default.SKIP_SHOP_CONFIRM_VALIDATION.key, e);
    },
    getShopConfirmValidationSkip: function() {
        return n.default.get(a.default.SKIP_SHOP_CONFIRM_VALIDATION.key) || !1;
    },
    setOrderProgress: function(e) {
        return e ? u.default.set(a.default.MENU_ORDER_PROGRESS.key, !0, e) : null;
    },
    getOrderProgress: function(e) {
        return e && u.default.get(a.default.MENU_ORDER_PROGRESS.key, e) || null;
    },
    setLimitOrderDishTag: function(e) {
        n.default.set(a.default.LIMIT_ORDER_DISH_TAG.key, e);
    },
    getLimitOrderDishTag: function() {
        return n.default.get(a.default.LIMIT_ORDER_DISH_TAG.key) || !1;
    },
    setShowMustDishToastInMenu: function(e, t, n) {
        u.default.set(a.default.SHOW_MUST_DISH_TOAST_IN_MENU.key, n, "".concat(e, "_").concat(t || ""));
    },
    getShowMustDishToastInMenu: function(e, t) {
        return !0 === u.default.get(a.default.SHOW_MUST_DISH_TOAST_IN_MENU.key, "".concat(e, "_").concat(t || ""));
    },
    getRecSceneFlag: function() {
        return !!n.default.get(a.default.REC_SCENE_FLAG.key);
    },
    setRecSceneFlag: function(e) {
        n.default.set(a.default.REC_SCENE_FLAG.key, e);
    },
    getShopCache: function() {
        var e;
        return null != (e = u.default.get(a.default.SHOP_CACHE.key)) ? e : "";
    },
    setShopCache: function(e) {
        u.default.set(a.default.SHOP_CACHE.key, null != e ? e : "");
    },
    getValidateAllowOdAfterClose: function() {
        var e;
        return null != (e = n.default.get(a.default.VALIDATE_ALLOW_OD_AFTER_CLOSE.key)) ? e : "";
    },
    setValidateAllowOdAfterClose: function(e) {
        n.default.set(a.default.VALIDATE_ALLOW_OD_AFTER_CLOSE.key, e);
    },
    setMultiShop: function(e) {
        n.default.set(a.default.MULTI_SHOP.key, e);
    },
    getMultiShop: function() {
        var e;
        return null != (e = n.default.get(a.default.MULTI_SHOP.key)) ? e : "";
    },
    setBuffetLimitMealTipsFlag: function(e) {
        u.default.set(a.default.BUFFET_LIMIT_MEAL_TIPS_FLAG.key, !1, e);
    },
    getBuffetLimitMealTipsFlag: function(e) {
        var t;
        return null == (t = u.default.get(a.default.BUFFET_LIMIT_MEAL_TIPS_FLAG.key, e)) || t;
    },
    setOpenScreen: function(e) {
        return e ? u.default.set(a.default.OPEN_SCREEN.key, !0, e) : null;
    },
    getOpenScreen: function(e) {
        return e && u.default.get(a.default.OPEN_SCREEN.key, e) || null;
    },
    setMenuOrderPeopleCount: function(e, t) {
        u.default.set(a.default.MENU_ORDER_PEOPLE_COUNT.key, t, e);
    },
    getMenuOrderPeopleCount: function(e) {
        return u.default.get(a.default.MENU_ORDER_PEOPLE_COUNT.key, e) || 1;
    },
    setSelectedDishData: function(e, t) {
        n.default.set(a.default.SELECTED_DISH.key, t, e);
    },
    getSelectedDishData: function(e) {
        return n.default.get(a.default.SELECTED_DISH.key, e) || {};
    },
    setHasCartAutoPop: function(e, t) {
        u.default.set(a.default.HAS_CART_AUTO_POP.key, e, t);
    },
    getHasCartAutoPop: function(e) {
        return u.default.get(a.default.HAS_CART_AUTO_POP.key, e) || !1;
    }
};

exports.default = f;