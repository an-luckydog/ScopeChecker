var t = require("../../../@limo/container/behaviors/index"), e = require("../ui-constant/enum"), a = require("../ui-lib/util");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        btnWrapperClassName: {
            type: String,
            value: ""
        },
        text: {
            type: String,
            value: ""
        },
        type: {
            type: Number,
            value: e.BUTTON_TYPE.DEFAULT
        },
        disabled: {
            type: Boolean,
            value: !1,
            observer: function() {
                this.calculateClassName();
            }
        },
        size: {
            type: String,
            value: e.UI_SIZE.SMALL
        },
        customStyle: {
            type: String,
            value: ""
        },
        isBigSize: {
            type: Boolean,
            value: !1
        },
        customClass: {
            type: String,
            value: "",
            observer: function() {
                this.calculateClassName();
            }
        },
        isShakeOrderButton: {
            type: Boolean,
            value: "",
            observer: function(t) {}
        }
    },
    data: {
        btnClass: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.calculateClassName();
        },
        calculateClassName: function() {
            var t = this.data, e = t.type, s = t.size, i = t.disabled, n = t.customClass, o = "rms-button rms-button-".concat(e, " rms-button-").concat(s, " rms-button-").concat(i, " ").concat((0, 
            a.dealClassName)(n));
            this.setData({
                btnClass: o
            });
        },
        btnClick: function() {
            this.data.disabled || this.triggerEvent("onClick");
        }
    }
});