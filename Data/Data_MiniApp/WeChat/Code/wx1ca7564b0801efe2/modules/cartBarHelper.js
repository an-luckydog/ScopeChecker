var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getBottomTipsInfo = exports.INITIAL_BOTTOM_TIPS_INFO = void 0, exports.getCartPriceInfo = function(e, t, o, i, a) {
    var s = e ? e.cartCount : 0, u = o ? Object.keys(o).reduce(function(e, t) {
        return e + +o[t].originPrice + (o[t].campaignOrgPrice || 0);
    }, 0) : 0, p = (0, r.roundFloat)(u - t, 2), c = t > 0, P = n.default.getCurrency();
    i && (p = (0, r.roundFloat)(Object.keys(o).reduce(function(e, t) {
        return e + +o[t].actualPrice + (o[t].campaignPrice || 0);
    }, 0), 2), c = !1);
    var l = "";
    return a && (l = "积分抵扣 ".concat(P).concat(a)), {
        cartCount: s,
        showDiscountAmount: c,
        actualTotalPriceTxt: Math.max(p, 0),
        promoDiscountAmountTxt: "已优惠 ".concat(P, " ").concat(t),
        showCartCountDetail: c && 0 !== s ? "已优惠 ".concat(P, " ").concat(t) : "已点".concat(s, "份菜品"),
        originTotalPrice: (0, r.roundFloat)(u, 2),
        pointTotalDiscountAmountText: l
    };
}, exports.getCartToastInfo = function(e, r) {
    var o = e && !!Object.keys(e).length, i = r && !!Object.keys(r).length;
    return {
        isHaveOperateData: o,
        userImgSrc: o && t.default.getIn(e, [ "user", "avatar" ]),
        userDish: o && e.dishName,
        userDishCount: o && (e.dishWeight ? "".concat(e.dishWeight).concat(e.dishUnit) : e.dishCount),
        userClearDishTxt: i && "".concat(t.default.getIn(r, [ "user", "nickname" ]) || "小伙伴").concat(r.text)
    };
};

var t = e(require("../miniprogram_npm/seamless-immutable/index.js")), r = require("../lib/number"), o = require("../constants/bizConstants"), i = require("../lib/mix/util"), n = e(require("./menu/I18n/I18nService"));

var a = {
    showCartBottom: !0,
    tipMessage: "",
    timePeriod: {
        shopOpenPeriodLabel: "",
        shopOpenPeriods: []
    },
    buttonText: ""
};

exports.INITIAL_BOTTOM_TIPS_INFO = a;

exports.getBottomTipsInfo = function(e, t) {
    if (!e) return JSON.parse(JSON.stringify(a));
    var r = +(0, i.getMixUrlParam)("bizType");
    return r === o.BIZ_TYPE_MAP.TAKEAWAY || r === o.BIZ_TYPE_MAP.PICKUP ? function(e, t) {
        var r = +(0, i.getMixUrlParam)("bizType"), n = JSON.parse(JSON.stringify(a));
        if (r !== o.BIZ_TYPE_MAP.TAKEAWAY && r !== o.BIZ_TYPE_MAP.PICKUP) return n;
        if (!e) return n;
        var s, u = (null != t ? t : {}).takeAwayDeliveryFeeRule, p = null != e ? e : {}, c = p.shopClose, P = p.shopStatusTips, l = p.takeAwaySupport, T = p.selfPickUpSupport, m = p.noOpenValidTimeTips, d = p.takeAwayTips, g = p.selfPickUpTips;
        r !== o.BIZ_TYPE_MAP.TAKEAWAY || l ? r !== o.BIZ_TYPE_MAP.PICKUP || T ? u || r !== o.BIZ_TYPE_MAP.TAKEAWAY ? c && P && (n.tipMessage = P, 
        r === o.BIZ_TYPE_MAP.PICKUP && (null == m ? void 0 : m.length) > 0 ? n.timePeriod.shopOpenPeriods[0] = m : n.timePeriod = null != (s = e.openPeriod) ? s : {}) : n.tipMessage = "不在配送范围内" : n.tipMessage = g : n.tipMessage = d;
        return n.showCartBottom = !(n.tipMessage || n.timePeriod.shopOpenPeriodLabel.length || n.timePeriod.shopOpenPeriods.length), 
        n.buttonText = e.bottomButtonTip, n;
    }(e.takeAwayBottomTipVO, t) : function(e) {
        return e ? {
            showCartBottom: !e.shopClose,
            timePeriod: e.openPeriod,
            tipMessage: e.shopStatusTips,
            buttonText: e.bottomButtonTip
        } : JSON.parse(JSON.stringify(a));
    }(e.orderBottomVO);
};