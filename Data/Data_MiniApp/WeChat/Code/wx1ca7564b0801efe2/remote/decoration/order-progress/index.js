var e = require("../../../b/helpers/interopRequireDefault")(require("../../../miniprogram_npm/@limo/core/index.js")), t = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        progressInfo: {
            type: Object,
            value: {},
            observer: function(e) {
                this.formateProgressInfo(e);
            }
        },
        templateType: {
            type: Number,
            value: 0
        },
        progressTitle: {
            type: String,
            value: "取餐进度"
        },
        hideClose: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        orderProcessText: "",
        processStyle: {}
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var e = this.properties.progressInfo;
            this.formateProgressInfo(e);
        },
        formateTextNode: function(t) {
            var r = this;
            if (t) {
                var o = "";
                t.forEach(function(e) {
                    o += r.getTextByType(e);
                });
                var s = "<p>".concat(o, "</p>");
                e.default.getLimoRuntime().isAlipay && parse(s, function(e, t) {
                    e || (s = t);
                }), this.setData({
                    orderProcessText: s
                });
            } else this.setData({
                orderProcessText: ""
            });
        },
        getTextByType: function(e, t) {
            var r = {
                NORMAL: e.text,
                IMPORTANT_NUM: '<span style="'.concat(e.style, '">').concat(e.text, "</span>"),
                IMPORTANT_TEXT: '<span style="'.concat(e.style, '">').concat(e.text, "</span>")
            };
            return 0 === t ? e.text : r[e.type];
        },
        handleClose: function() {
            this.triggerEvent("closeOrderProgress");
        },
        formateProgress: function(e) {
            if (e) {
                var t = e.processColor, r = e.process;
                this.setData({
                    processStyle: {
                        "background-color": t,
                        width: r + "%",
                        opacity: .4
                    }
                });
            }
        },
        formateProgressInfo: function(e) {
            if (e) {
                var t = e.orderProductionProcessTextVO, r = e.orderProductionProcessProgressVO, o = (t || {}).waitingInfo;
                this.formateTextNode(o), this.formateProgress(r);
            }
        }
    }
});