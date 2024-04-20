var t = require("../../../../b/helpers/objectSpread2"), e = require("../../../@limo/container/behaviors/index"), a = require("../ui-lib/util");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        customClass: {
            type: String,
            value: "",
            observer: function() {
                this.calculateClassName();
            }
        },
        hotSellingData: {
            type: Object,
            value: {
                size: "DEFAULT"
            }
        }
    },
    data: {
        hotSellingClass: "",
        hotSellingTextClass: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.calculateClassName();
        },
        calculateClassName: function() {
            var e = this.data, s = e.customClass, l = e.hotSellingData, i = l.type, o = l.size, c = l.textCount, n = "hs-container hs-".concat(i, " hs-").concat(o, " ").concat((0, 
            a.dealClassName)(s)), h = c > 4 ? "st-more" : "st-" + c;
            this.setData(t({
                hotSellingClass: n,
                hotSellingTextClass: h
            }, l));
        }
    }
});