var e = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), t = require("../../../../constants/bizConstants");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        hasMtLogin: {
            type: Boolean,
            value: !1
        },
        category: {
            type: Object,
            value: {
                categoryId: 0
            },
            observer: function(e, o) {
                if (e && e !== o) {
                    var _ = "", a = "";
                    switch (e.iconType) {
                      case t.DISH_CATEGORY_ICON_TYPE.ORDERED_DISH:
                        a = "" + (e.categoryName || ""), _ = t.DISH_CATEGORY_CLASS_MAP[t.DISH_CATEGORY_ICON_TYPE.ORDERED_DISH];
                        break;

                      case t.DISH_CATEGORY_ICON_TYPE.HOT:
                        _ = t.DISH_CATEGORY_CLASS_MAP[t.DISH_CATEGORY_ICON_TYPE.HOT], a = "";
                        break;

                      case t.DISH_CATEGORY_ICON_TYPE.DISCOUNT:
                        _ = t.DISH_CATEGORY_CLASS_MAP[t.DISH_CATEGORY_ICON_TYPE.DISCOUNT], a = "折扣";
                        break;

                      case t.DISH_CATEGORY_ICON_TYPE.RECOMMEND:
                        _ = t.DISH_CATEGORY_CLASS_MAP[t.DISH_CATEGORY_ICON_TYPE.RECOMMEND], a = "";
                        break;

                      case t.DISH_CATEGORY_ICON_TYPE.MT_SPECIAL_DISCOUNT:
                        _ = t.DISH_CATEGORY_CLASS_MAP[t.DISH_CATEGORY_ICON_TYPE.MT_SPECIAL_DISCOUNT], a = "";
                        break;

                      default:
                        _ = "", a = "" + (e.categoryName || "");
                    }
                    this.setData({
                        picClassName: _,
                        titleTxt: a
                    });
                }
            }
        },
        customClass: {
            type: String,
            value: ""
        },
        showCouponPackage: {
            type: Boolean,
            value: !1
        },
        couponCount: {
            type: String,
            value: ""
        },
        couponAssistantStyle: {
            type: Object,
            value: {}
        }
    },
    data: {
        DISH_CATEGORY_ID: t.DISH_CATEGORY_ID,
        LOGIN_IN_TEXT: "立即登录",
        picClassName: "",
        titleTxt: "",
        pointText: "",
        showMemberLogin: !1
    },
    methods: {
        dishPanelOrderd: function() {
            this.triggerEvent("moreTap");
        },
        gotoThirdLogin: function() {
            this.triggerEvent("gotoThirdLogin", null, {
                bubbles: !0,
                composed: !0
            });
        },
        onCouponAssistantCheckMore: function() {
            this.triggerEvent("onCouponAssistantCheckMore");
        }
    }
});