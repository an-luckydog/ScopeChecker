var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../miniprogram_npm/seamless-immutable/index.js")), r = require("../actions/menuInfo"), a = (0, 
t.default)({
    parentCategory: 0,
    childCategory: null,
    showCategoryListPanel: !1,
    isManualJumpCate: !1,
    isShowOrderListToast: !1
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    switch (u.type) {
      case r.SET_PARENT_CATEGORY:
        return t.default.merge(e, {
            parentCategory: u.parentCategory
        });

      case r.SET_CHILD_CATEGORY:
        return t.default.merge(e, {
            childCategory: u.childCategory
        });

      case r.TOGGLE_CATEGORY_LIST_PANEL:
        return t.default.merge(e, {
            showCategoryListPanel: u.showCategoryListPanel
        });

      case r.TOGGLE_MANUAL_JUMP_CATE:
        return t.default.merge(e, {
            isManualJumpCate: u.isManualJumpCate
        });

      default:
        return e;
    }
};