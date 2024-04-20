var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.exposeDishItemNew = exports.appendExposeDishItem = exports.EXPOSE_DISH_TYPE = void 0;

var t = require("../../../b/helpers/objectSpread2"), a = e(require("../../../miniprogram_npm/seamless-immutable/index.js")), s = require("../../../lib/env"), r = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), n = require("../../../lib/mix/util"), i = require("../../../constants/bizConstants"), E = require("./util"), u = e(require("../../../api/rmsStorage")), D = require("../../cartHelper"), o = require("../../LXHelper"), l = {
    CATEGORY: "CATEGORY",
    DISHLIST: "DISHLIST",
    SEARCHLIST: "SEARCHLIST",
    BOSSRECOMMEND: "BOSSRECOMMEND",
    DPRECOMMEND: "DPRECOMMEND",
    NETRECOMMENDPAGE: "NETRECOMMENDPAGE",
    ORDERRECOMMOND: "ORDERRECOMMOND",
    ORDERDISHLIST: "ORDERDISHLIST",
    CART: "CART",
    DISHDETAIL: "DISHDETAIL",
    BANNER: "BANNER",
    ADMODE: "ADMODE",
    MATCHRECOMMEND: "MATCHRECOMMEND",
    ADDON: "ADDON",
    COUPON_DISH_PANEL: "COUPON_DISH_PANEL",
    COUPON_DISH: "COUPON_DISH"
};

exports.EXPOSE_DISH_TYPE = l;

var m = {};

Object.keys(l).forEach(function(e) {
    m[e] = [];
});

var p = "", S = null;

function O(e, t) {
    var s, o, m = (0, n.getMixUrlParam)("shopId");
    switch (e) {
      case l.CATEGORY:
      case l.ORDERDISHLIST:
        break;

      case l.DISHLIST:
      case l.BOSSRECOMMEND:
      case l.SEARCHLIST:
      case l.NETRECOMMENDPAGE:
      case l.ORDERRECOMMOND:
      case l.CART:
        var p = t.item && t.item.dishType === i.DISH_TYPE.NORMAL && !((0, D.judgeMultiDish)(t.item) || (0, 
        D.judgeComplexSpuDish)(t.item)) && a.default.getIn(t.item, [ "skuMenuItems", 0, "skuId" ]);
        p || (p = t.item && t.item.skuId), t.spuId = (null == t || null == (s = t.item) ? void 0 : s.spuId) || t.spuId, 
        t.skuId = p || "", t.spuName = (null == t || null == (o = t.item) ? void 0 : o.spuName) || t.spuName, 
        t.hotSaleTag = (0, E.dealHotSaleTag)(t.item && t.item.hotSellingImgTag && t.item.hotSellingImgTag.type), 
        -1 === t.recommendShowType || r.default.isNullOrUndefined(t.recommendShowType) || (t.recommendShowType = t.recommendShowType > 0 ? 1 : 0);
        var S = u.default.getExtraInfo(m), O = a.default.getIn(S, [ "shopConfig", "menuStyle", "dishShowType" ]) || 0;
        t.dishShowType = O;
    }
    delete t.item;
}

exports.appendExposeDishItem = function(e, a) {
    var r;
    a instanceof Array ? (r = a.map(function(a) {
        return O(e, a), t(t({}, a), {}, {
            t: Date.now(),
            addFrom: e
        });
    }), m[e] = m[e].concat(r)) : (r = t(t({}, a), {}, {
        t: Date.now(),
        addFrom: e
    }), O(e, r), m[e].push(r)), p && !s.isNativeMp || (e === l.CATEGORY || e === l.DISHLIST || e === l.BOSSRECOMMEND || e === l.CART ? p = "b_saaspay_io0djuze_mv" : e === l.SEARCHLIST ? p = "b_saaspay_xgjpgsg7_mv" : e === l.ORDERRECOMMOND || e === l.ORDERDISHLIST ? p = "b_saaspay_lr9m8l1w_mv" : e === l.NETRECOMMENDPAGE && (p = "b_saaspay_4tl96hwp_mv")), 
    S || (S = setInterval(function() {
        Object.keys(m).find(function(e) {
            return m[e].length;
        }) && (p && (0, o.sendMV)(p, null, null, {
            exposeData: t({}, m)
        }), Object.keys(l).forEach(function(e) {
            m[e] = [];
        }));
    }, 2e3));
};

exports.exposeDishItemNew = function(e) {
    e instanceof Array ? e.map(function(e) {
        return (0, o.sendMV)("b_saaspay_we46nheq_mv", null, null, t(t({}, e), {}, {
            t: Date.now()
        })), null;
    }) : (0, o.sendMV)("b_saaspay_we46nheq_mv", null, null, t(t({}, e), {}, {
        t: Date.now()
    }));
};