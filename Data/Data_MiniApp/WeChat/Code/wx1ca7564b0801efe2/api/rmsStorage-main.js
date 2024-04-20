var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../lib/storageUtil")), u = e(require("../lib/sessionStorage")), n = e(require("../constants/storage")), a = {
    getCouponSubscriptionFlag: function(e) {
        return t.default.get(n.default.COUPON_SUBSCRIPTION.key, e) || !1;
    },
    setCouponSubscriptionFlag: function(e) {
        t.default.set(n.default.COUPON_SUBSCRIPTION.key, !0, e);
    },
    getCustomChannel: function() {
        return t.default.get(n.default.CUSTOM_CHANNEL.key);
    },
    removeCustomChannel: function() {
        t.default.remove(n.default.CUSTOM_CHANNEL.key);
    },
    setCustomChannel: function(e) {
        e && t.default.set(n.default.CUSTOM_CHANNEL.key, e);
    },
    setTabBarData: function(e, t) {
        u.default.set(n.default.TAB_BAR_DATA.key, t, e);
    },
    getTabBarData: function(e) {
        return u.default.get(n.default.TAB_BAR_DATA.key, e) || [];
    },
    setSignWithPOI: function(e, u) {
        return t.default.set(n.default.REQUEST_SIGN.key, e, u);
    },
    getSignWithPOI: function(e) {
        return t.default.get(n.default.REQUEST_SIGN.key, e);
    },
    setConfirmedResponseSystemTempTips: function(e) {
        u.default.set(n.default.CONFIRMED_RESPONSE_SYSTEM_TEMP_TIPS.key, e);
    },
    getConfirmedResponseSystemTempTips: function() {
        return u.default.get(n.default.CONFIRMED_RESPONSE_SYSTEM_TEMP_TIPS.key) || [];
    },
    setUserInfo: function(e, u) {
        return t.default.set(n.default.USER_INFO.key, u, "" + e);
    },
    getUserInfo: function(e) {
        return t.default.get(n.default.USER_INFO.key, "" + e) || {};
    },
    setUserOpenId: function(e) {
        return t.default.set(n.default.USER_OPEN_ID.key, e);
    },
    getUserOpenId: function() {
        return t.default.get(n.default.USER_OPEN_ID.key) || 0;
    },
    getCardInfo: function() {
        return t.default.get(n.default.CARD_INFO.key) || "";
    },
    getHasSendTime: function(e, u) {
        var a = t.default.get(n.default.SEND_TIME_MAP.key, e) || {}, f = a[u];
        return a[u] = !0, t.default.set(n.default.SEND_TIME_MAP.key, a, e), f;
    },
    getHasSendLXInSession: function(e) {
        var t = u.default.get(n.default.SEND_LX_IN_SESSION_MAP.key) || {}, a = t[e];
        return t[e] = !0, u.default.set(n.default.SEND_LX_IN_SESSION_MAP.key, t), a;
    },
    setRandomUserId: function(e) {
        t.default.set(n.default.RANDOM_USER_ID.key, e);
    },
    getRandomUserId: function() {
        return t.default.get(n.default.RANDOM_USER_ID.key);
    },
    setRandomAppId: function(e) {
        t.default.set(n.default.RANDOM_APP_ID.key, e);
    },
    getRandomAppId: function() {
        return t.default.get(n.default.RANDOM_APP_ID.key);
    },
    setLimoModal: function(e) {
        return e ? t.default.set(n.default.LIMO_MODAL.key, !0, e) : null;
    },
    getLimoModal: function(e) {
        return e && t.default.get(n.default.LIMO_MODAL.key, e) || null;
    },
    setOpenScreen: function(e) {
        return e ? t.default.set(n.default.OPEN_SCREEN.key, !0, e) : null;
    },
    getOpenScreen: function(e) {
        return e && t.default.get(n.default.OPEN_SCREEN.key, e) || null;
    },
    setTenantId: function(e) {
        return t.default.set(n.default.TENANT_ID.key, e);
    },
    getTenantId: function() {
        return t.default.get(n.default.TENANT_ID.key) || 0;
    },
    getValidateAllowOdAfterClose: function() {
        var e;
        return null != (e = u.default.get(n.default.VALIDATE_ALLOW_OD_AFTER_CLOSE.key)) ? e : "";
    },
    setValidateAllowOdAfterClose: function(e) {
        u.default.set(n.default.VALIDATE_ALLOW_OD_AFTER_CLOSE.key, e);
    },
    getShopCache: function() {
        var e;
        return null != (e = t.default.get(n.default.SHOP_CACHE.key)) ? e : "";
    },
    setShopCache: function(e) {
        t.default.set(n.default.SHOP_CACHE.key, null != e ? e : "");
    }
};

exports.default = a;