var e = require("../../b/helpers/interopRequireDefault"), t = require("../../miniprogram_npm/@limo/container/behaviors/index");

(0, e(require("../../commons/component")).default)({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        processProgress: {
            type: Object,
            value: {}
        },
        processText: {
            type: Array,
            value: []
        }
    },
    data: {
        inlineText: "",
        inlineStyle: ""
    },
    observers: {
        processProgress: function(e) {
            this.formateStyle(e);
        },
        processText: function(e) {
            this.formateTextNode(e);
        }
    },
    lifetimes: {
        attached: function() {
            var e = this.data, t = e.processText, o = e.processProgress;
            this.formateTextNode(t), this.formateStyle(o);
        }
    },
    methods: {
        formateStyle: function(e) {
            if (e) {
                var t = e.processColor, o = e.process, r = {
                    "background-color": t,
                    width: "".concat(o || 100, "%")
                }, s = Object.keys(r).reduce(function(e, t) {
                    return "".concat(e).concat(t, ":").concat(r[t], ";");
                }, "");
                this.setData({
                    inlineStyle: s
                });
            }
        },
        formateTextNode: function(e) {
            if (e) {
                var t = e.reduce(function(e, t) {
                    var o = t.style, r = t.text;
                    return "".concat(e).concat(o ? '<span style="'.concat(o, '">').concat(r, "</span>") : r);
                }, "");
                t = "<p>".concat(t, "</p>"), this.setData({
                    inlineText: t
                });
            } else this.setData({
                inlineText: ""
            });
        }
    }
});