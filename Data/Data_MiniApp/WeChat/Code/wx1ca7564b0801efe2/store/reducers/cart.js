var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var a = e(require("../../miniprogram_npm/seamless-immutable/index.js")), t = require("../actions/baseCart"), r = (0, 
a.default)({
    cartDishList: {},
    refactorLocalCart: {
        version: 0,
        refactorCartDishMap: {}
    },
    userOperation: {
        lastSeqId: 0,
        operationList: []
    },
    cartDishSortMapList: [],
    promotionMap: {},
    spuDish: {},
    menuSkuDish: {},
    cartSkuDish: {},
    menuPackageSku: {},
    cartPackageSku: {},
    cartPrice: {},
    shopId: null,
    tableNum: null,
    skuIndex: 0,
    totalPrice: 0,
    promotionPrice: 0,
    cartCount: null,
    calcValue: "",
    calcStatus: 2,
    showCartPanel: !1,
    showMultiPanel: !1,
    showPackagePanel: !1,
    packageDetail: [],
    showCalculatorPanel: !1,
    showRecommendPanel: !1,
    showRemarksPanel: !1,
    showDishDetailPanel: !1,
    cartVisible: !0,
    miniCartVisible: !0,
    multiVisible: !0,
    packageVisible: !0,
    packageTastes: !1,
    modifyTastes: !1,
    weightTastes: !1,
    editDishSpuId: null,
    editDishGoodsNo: null,
    userInfo: [],
    goodsUserInfo: {},
    promotionCalculateVersion: 0,
    peopleCount: 0,
    firstEnterCalc: !0,
    fromRecommend: !1,
    hasAddDishFromRecommend: !1,
    newDishPanelTag: !1,
    showRegisterPanel: !1,
    currentSpuId: "",
    currentSkuId: "",
    currentDiscount: "",
    containerOpenExtraData: {},
    showContainerPanelTag: !1,
    isShowCountCalc: !1,
    dishAddFrom: "",
    dishDetailFrom: "",
    autoUseDealCoupon: !1,
    detailPanelSpuId: "",
    sn: 0,
    __newReportConfig__: null,
    cartDiscountData: {},
    processId: ""
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return o.type === t.UPDATE_CART ? a.default.merge(e, o.payload) : e;
};