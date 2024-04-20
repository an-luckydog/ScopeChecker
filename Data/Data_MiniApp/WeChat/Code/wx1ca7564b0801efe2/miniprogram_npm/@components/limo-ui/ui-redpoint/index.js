var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../../b/helpers/objectSpread2"), a = e(require("../../../@limo/core/index.js")), s = require("../../../@limo/container/behaviors/index"), i = require("../ui-constant/enum"), o = require("../ui-lib/util");

Component({
    behaviors: [ s.commonBehavior, s.limoShim ],
    properties: {
        count: {
            type: Number,
            value: 0,
            observer: function() {
                this.calculateClass();
            }
        },
        customClass: {
            type: String,
            value: ""
        },
        styleString: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: i.RED_POINT_TYPE.NUMBER
        }
    },
    data: {
        redPointClass: "",
        showCount: "",
        RED_POINT_TYPE: i.RED_POINT_TYPE
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.calculateClass();
        },
        calculateClass: function() {
            var e = this.calculateClassName(), a = e.redPointClass, s = e.showCount, o = {
                redPointClass: a
            };
            this.data.type === i.RED_POINT_TYPE.NUMBER && (o = t(t({}, o), {}, {
                showCount: s
            })), this.setData(o);
        },
        calculateClassName: function() {
            var e = this.data, t = e.count, s = e.customClass;
            return e.type === i.RED_POINT_TYPE.POINT ? {
                redPointClass: "rms-red-point " + (0, o.dealClassName)(s)
            } : {
                redPointClass: "rms-red-count ".concat(t > 9 ? "rms-redcount-padding" : "", " ").concat(a.default.getLimoRuntime().isIOS ? "" : "rms-red-count-android", " ").concat((0, 
                o.dealClassName)(s)),
                showCount: t > i.MAX_DISH_COUNT ? i.MAX_DISH_COUNT + "+" : t
            };
        }
    }
});