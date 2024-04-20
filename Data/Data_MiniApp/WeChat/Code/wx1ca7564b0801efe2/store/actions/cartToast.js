Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SHOW_TEXT = exports.SHOW_LIST = exports.HIDE = void 0, exports.hide = function() {
    return {
        type: e
    };
}, exports.showText = function(e, t, r) {
    return {
        type: "CART_TOAST_SHOW_TEXT",
        text: e,
        isShow: !0,
        fromOrderConfirm: t,
        img: r
    };
}, exports.showToastList = function(e, t) {
    return {
        type: "SHOW_LIST",
        list: e,
        isShow: !0,
        fromOrderConfirm: t
    };
};

exports.SHOW_TEXT = "CART_TOAST_SHOW_TEXT";

var e = "CART_TOAST_HIDE";

exports.HIDE = e;

exports.SHOW_LIST = "SHOW_LIST";