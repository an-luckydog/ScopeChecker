var e = require("../../../@limo/container/behaviors/index"), t = require("../ui-constant/enum");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        text: {
            type: String,
            value: ""
        },
        label: {
            type: String,
            value: ""
        },
        colorType: {
            type: Number,
            value: t.LABEL_TYPE.BORDER_RED,
            observer: function() {
                this.handlePropertiesChange();
            }
        },
        size: {
            type: String,
            value: t.UI_SIZE.SMALL,
            observer: function() {
                this.handlePropertiesChange();
            }
        },
        styleString: {
            type: String,
            value: ""
        },
        customClass: {
            type: String,
            value: "",
            observer: function() {
                this.handlePropertiesChange();
            }
        }
    },
    data: {
        labelClass: "",
        LABEL_TYPE: t.LABEL_TYPE
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.handlePropertiesChange();
        },
        handlePropertiesChange: function() {
            var e = this.data, t = e.customClass, a = e.colorType, i = e.size, n = "label-container label-container-".concat(i, " label-type-").concat(a, " ").concat(t);
            n !== this.data.labelClass && this.setData({
                labelClass: n
            });
        }
    }
});