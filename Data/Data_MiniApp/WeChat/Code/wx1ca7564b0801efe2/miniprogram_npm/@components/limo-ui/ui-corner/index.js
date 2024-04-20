var e = require("../../../@limo/container/behaviors/index"), t = require("../ui-constant/enum"), s = require("../ui-lib/util");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        text: {
            type: String,
            value: ""
        },
        customClass: {
            type: String,
            value: ""
        },
        size: {
            type: String,
            value: t.UI_SIZE.SMALL
        },
        styleString: {
            type: String,
            value: ""
        },
        textStyle: {
            type: String,
            value: ""
        },
        colorType: {
            type: Number,
            value: t.CORNER_TYPE.DEFAULT
        },
        needFooter: {
            type: Boolean,
            value: !1
        },
        remText: {
            type: String,
            value: ""
        }
    },
    data: {
        cornerClass: "",
        textClass: "",
        footerClass: "",
        remTextCLass: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.calculateClass();
        },
        calculateClass: function() {
            var e = this.calculateClassName(), t = e.cornerClass, s = e.textClass, r = e.footerClass, a = e.remTextCLass;
            this.setData({
                cornerClass: t,
                textClass: s,
                footerClass: r,
                remTextCLass: a
            });
        },
        calculateClassName: function() {
            var e = this.data, r = e.customClass, a = void 0 === r ? "" : r, o = e.size, l = void 0 === o ? t.UI_SIZE.SMALL : o, c = e.colorType, i = void 0 === c ? t.CORNER_TYPE.DEFAULT : c, n = this.data, m = n.text, u = n.remText, C = "", x = "";
            return m && u && (C = "left-border", x = "right-border"), m && !u && (C = "box-border"), 
            !m && u && (x = "box-border"), {
                cornerClass: "rms-corner rms-corner-".concat(l, " ").concat((0, s.dealClassName)(a)),
                textClass: "rms-corner-text rms-text-".concat(i, " rms-text-").concat(l, " ").concat(C, " ellipsis"),
                remTextCLass: "rem-text rms-sub-".concat(l, " ").concat(x, " ellipsis"),
                footerClass: "rms-corner-footer rms-footer-".concat(i, " rms-footer-").concat(l)
            };
        }
    }
});