var e = require("../../../@limo/container/behaviors/index"), O = require("../common-constants/bizConstant");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        iconType: {
            type: Number,
            value: 0,
            observer: function(e, O) {
                if (e !== O && e) {
                    var a = this.data.tagType;
                    this.initTag(e, a);
                }
            }
        },
        tagType: {
            type: Number,
            value: O.SHOP_PROMOTION_TAG_TYPE.PROMOTION
        },
        customClass: {
            type: String,
            value: ""
        }
    },
    data: {
        iconText: "",
        iconClassName: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var e = this.properties, O = e.iconType, a = e.tagType;
            this.initTag(O, a);
        },
        initTag: function(e, a) {
            var t = "", c = "", i = a !== O.SHOP_PROMOTION_TAG_TYPE.PROMOTION ? "member" : "", T = this.data.customClass;
            switch (e) {
              case O.PROMOTION_ICON_TYPE.DISH_WITH_FREE:
                t = "赠", c = "free-discount";
                break;

              case O.PROMOTION_ICON_TYPE.DISH_WITH_FREE_MEMBER:
                t = "赠", c = "member-discount";
                break;

              case O.PROMOTION_ICON_TYPE.DISCOUNT:
                t = "折", c = "discount";
                break;

              case O.PROMOTION_ICON_TYPE.CUT:
                t = "减", c = "cut";
                break;

              case O.PROMOTION_ICON_TYPE.GIFT:
                t = "赠", c = "gift";
                break;

              case O.PROMOTION_ICON_TYPE.CHANGE:
                t = "换", c = "change";
                break;

              case O.PROMOTION_ICON_TYPE.COUPON:
                c = "coupon";
                break;

              case O.PROMOTION_ICON_TYPE.FREE:
                t = "免", c = "discount";
                break;

              case O.PROMOTION_ICON_TYPE.GROUPON:
                t = "团", c = "groupon";
                break;

              case O.PROMOTION_ICON_TYPE.MEMBER_DISCOUNT:
                t = "折", c = "member-discount";
                break;

              case O.PROMOTION_ICON_TYPE.MEMBER_COLLECT:
                t = "集", c = "member-collect";
                break;

              case O.PROMOTION_ICON_TYPE.MEMBER_PRICE:
                c = "member-price";
            }
            this.setData({
                iconText: t,
                iconClassName: "".concat(i, " ").concat(c, " ").concat(T)
            });
        }
    }
});