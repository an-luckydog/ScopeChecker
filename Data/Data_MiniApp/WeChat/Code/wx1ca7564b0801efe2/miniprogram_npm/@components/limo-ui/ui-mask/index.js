var a = require("../../../@limo/container/behaviors/index"), t = require("../ui-lib/util");

Component({
    behaviors: [ a.commonBehavior, a.limoShim ],
    properties: {
        customClass: {
            type: String,
            value: ""
        },
        maskType: {
            type: String,
            value: "image"
        }
    },
    data: {
        maskClass: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.calculateClassName();
        },
        calculateClassName: function() {
            var a = this.data, s = a.customClass, e = a.maskType, i = "mask-container mask-".concat(e, " ").concat((0, 
            t.dealClassName)(s));
            this.setData({
                maskClass: i
            });
        }
    }
});