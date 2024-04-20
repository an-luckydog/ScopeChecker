var e = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        processStyle: {
            type: Object,
            value: {},
            observer: function(e) {
                this.formateProcessStyle(e);
            }
        },
        inlineText: {
            type: String,
            value: ""
        },
        wrapperStyle: {
            type: String,
            value: ""
        }
    },
    data: {
        inlineStyle: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var e = this.properties.processStyle;
            this.formateProcessStyle(e);
        },
        formateProcessStyle: function(e) {
            if (e) {
                var t = Object.keys(e), i = "";
                t && t.forEach(function(t) {
                    i += "".concat(t, ": ").concat(e[t], ";");
                }), this.setData({
                    inlineStyle: i
                });
            }
        }
    }
});