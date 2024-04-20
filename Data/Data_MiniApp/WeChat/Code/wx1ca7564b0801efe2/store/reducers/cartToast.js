var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = e(require("../../miniprogram_npm/seamless-immutable/index.js")), t = require("../actions/cartToast"), i = (0, 
r.default)({
    isShow: !1,
    text: "",
    operateDish: {},
    clearDish: {},
    fromOrderConfirm: !1,
    toastList: []
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    switch (o.type) {
      case t.SHOW_TEXT:
        return r.default.merge(i, {
            text: o.text,
            isShow: o.isShow,
            img: o.img,
            fromOrderConfirm: o.fromOrderConfirm
        });

      case t.SHOW_LIST:
        return r.default.merge(i, {
            toastList: o.list,
            isShow: o.isShow,
            fromOrderConfirm: o.fromOrderConfirm
        });

      case t.HIDE:
        return i;

      default:
        return e;
    }
};