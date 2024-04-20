var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../miniprogram_npm/seamless-immutable/index.js")), a = require("../actions/panel"), r = (0, 
t.default)({
    showDishInfoModal: !1,
    dishTimeInfoModalRequestInfo: {},
    takeCouponPanelInfo: {
        takeCouponPanelTag: !1,
        sourceType: 0,
        title: []
    },
    takeCouponPanelData: {
        takeCouponList: [],
        agreementsInfo: {
            agreementList: [],
            agreementParams: {}
        }
    },
    registerActivity: {},
    showPrePriceTips: !1
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r, o = arguments.length > 1 ? arguments[1] : void 0;
    return o.type === a.UPDATE_PANEL ? t.default.merge(e, o.payload) : e;
};