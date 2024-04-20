var t = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        text: {
            type: String,
            value: ""
        },
        colorType: {
            type: Number,
            value: 0
        },
        size: {
            type: String,
            value: "small"
        },
        customStyle: {
            type: String,
            value: ""
        },
        customClass: {
            type: String,
            value: ""
        }
    },
    data: {
        labelClass: "",
        dpImg: 4,
        price2: 6
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.getLabelClass();
        },
        getLabelClass: function() {
            var t = this.data, e = t.size, a = t.colorType, l = t.customClass;
            this.setData({
                labelClass: "label-container label-container-".concat(e, " label-type-").concat(a, " ").concat(l)
            });
        }
    }
});