var e = require("../../../miniprogram_npm/@limo/container/behaviors/index"), t = require("../common-helpers/formatStyle");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        balance: {
            type: String,
            value: ""
        },
        point: {
            type: String,
            value: ""
        },
        coupon: {
            type: String,
            value: ""
        },
        elConfig: {
            type: Object,
            value: {},
            observer: function() {
                this.formateElementConfig();
            }
        }
    },
    data: {
        numStyle: "",
        unitStyle: ""
    },
    methods: {
        formateElementConfig: function() {
            var e = this.properties.elConfig;
            if (e) {
                var i = e.numStyle, o = e.unitStyle, n = e.textStyle;
                this.setData({
                    numStyle: (0, t.formatStyle)(i),
                    unitStyle: (0, t.formatStyle)(o),
                    textStyle: (0, t.formatStyle)(n)
                });
            }
        }
    }
});