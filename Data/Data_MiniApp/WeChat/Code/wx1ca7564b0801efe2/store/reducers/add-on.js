var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../miniprogram_npm/seamless-immutable/index.js")), r = require("../actions/add-on"), s = (0, 
t.default)({
    addOnList: [],
    skuMap: {},
    isShow: !1,
    tips: [],
    id: ""
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        type: "",
        addOnList: [],
        skuMap: {},
        isShow: !1,
        tips: [],
        id: ""
    };
    switch (a.type) {
      case r.GET_ADD_ON:
      case r.SET_ADD_ON:
        return t.default.merge(e, {
            addOnList: a.addOnList
        });

      case r.SET_SKU_MAP:
        return t.default.merge(e, {
            skuMap: a.skuMap
        });

      case r.SET_ADD_ON_SHOW:
        return t.default.merge(e, {
            isShow: a.isShow
        });

      case r.SET_ADD_ON_TIPS:
        return t.default.merge(e, {
            tips: a.tips
        });

      case r.SET_ADD_ON_ID:
        return t.default.merge(e, {
            id: a.id
        });

      default:
        return e;
    }
};