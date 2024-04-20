Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getReportConfigDishParams = exports.getCommonConfigParams = exports.dealReportConfigDish = exports.COLLOCATION_DISH_TYPE = void 0;

var e = require("../../../constants/lxConstants"), s = require("../../../constants/bizConstants"), n = function(e, s) {
    var n = [];
    switch (s) {
      case 1:
        e.forEach(function(e, s) {
            n.push({
                index: s + "",
                spuId: e.spuId
            });
        });
        break;

      case 2:
        e.forEach(function(e, s) {
            n.push({
                index: s + "",
                skuId: e.skuId
            });
        });
        break;

      default:
        e.forEach(function(e, s) {
            n.push({
                index: s + "",
                dishName: e.name
            });
        });
    }
    var o = "";
    try {
        o = JSON.stringify(n);
    } catch (e) {}
    return o;
}, o = function(e, s, n, o) {
    var i = "";
    try {
        i = JSON.stringify({
            main_spu_id: e,
            main_sku_id: s,
            menu_index: n,
            func_type: o
        });
    } catch (e) {}
    return i;
};

exports.dealReportConfigDish = function(e) {
    var s, i, t = e.spuDish, r = e.opName, u = e.opType, a = e.sn, d = e.showTitle, p = e.recommendMode, E = e.menuIndex, I = e.dishType, c = e.funcType, m = e.dishDetailsFuncArea, h = e.skusInfo, C = void 0 === h ? [] : h, N = null == t ? void 0 : t.spuId, T = null == t || null == (s = t.skuMenuItems) || null == (s = s[0]) ? void 0 : s.skuId, l = null == t ? void 0 : t.spuName;
    return i = null != C && C.length ? C : [ {
        spuId: N,
        skuId: T,
        name: l
    } ], {
        opName: r,
        opType: u,
        sn: a,
        showTitle: d,
        algorithm: o(N, T, E, c),
        skuIdList: n(i, 2),
        spuIdList: n(i, 1),
        dishNameList: n(i, 3),
        dishDetailsFuncArea: m,
        recommendMode: p,
        dishType: I
    };
};

exports.COLLOCATION_DISH_TYPE = {
    MENU_SINGLE: 1,
    PANEL_SINGLE: 2,
    PACKAGE_DISH: 3,
    GROUP_DISH: 4
};

exports.getCommonConfigParams = function(n, o) {
    var i, t = e.DISH_TYPE.SINGLE, r = e.FUNC_TYPE.SINGLE, u = "单品推荐", a = 0 === o ? e.RECOMMEND_MODE.INTELLIGENCE : e.RECOMMEND_MODE.ARTIFICIAL;
    return 3 === n ? (a = e.RECOMMEND_MODE.ARTIFICIAL, t = e.DISH_TYPE.PACKAGE, r = e.FUNC_TYPE.PACKAGE, 
    u = "套餐推荐") : 4 === n && (a = e.RECOMMEND_MODE.INTELLIGENCE, u = "组合推荐", r = e.FUNC_TYPE.PACKAGE), 
    1 !== n && (i = s.DISH_DETAIL.RECOMMEND_DISH), {
        dishType: t,
        funcType: r,
        recommendMode: a,
        showTitle: u,
        dishDetailsFuncArea: i
    };
};

exports.getReportConfigDishParams = function(s, n, o, i, t, r) {
    var u = e.OP_NAME.RECOMMEND_CLASS, a = e.OP_TYPE.RECOMMEND_CLASS, d = i.dishType, p = i.funcType, E = i.recommendMode, I = i.showTitle, c = i.dishDetailsFuncArea, m = r || 0;
    return t && Object.keys(t).length && (u = t.opName, u = t.opName, m = t.menuIndex || 0), 
    {
        spuDish: s,
        opName: u,
        opType: a,
        sn: n,
        showTitle: I,
        recommendMode: E,
        menuIndex: m,
        dishType: d,
        funcType: p,
        dishDetailsFuncArea: c,
        skusInfo: o
    };
};