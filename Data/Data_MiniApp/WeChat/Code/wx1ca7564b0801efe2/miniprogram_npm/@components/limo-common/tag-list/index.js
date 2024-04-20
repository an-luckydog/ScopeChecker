var e = require("../../../@limo/container/behaviors/index"), i = require("../../limo-ui/ui-constant/enum");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    data: {
        LABEL_TYPE: i.LABEL_TYPE,
        BKG_PRICE_3: 16
    },
    properties: {
        tagList: {
            type: Array,
            value: []
        },
        size: {
            type: String,
            value: i.UI_SIZE.SMALL
        },
        customClass: {
            type: String,
            value: ""
        },
        tagClass: {
            type: String,
            value: ""
        },
        bigPrice: {
            type: Boolean,
            value: !1
        }
    }
});