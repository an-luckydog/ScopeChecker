var e = require("../../../../b/helpers/interopRequireDefault")(require("../../../@limo/core/index.js")), t = require("../../../@limo/container/behaviors/index");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    options: {
        multipleSlots: !0
    },
    properties: {
        offsetTop: {
            type: Number,
            value: 0,
            observer: function(e) {
                e > 0 && this.getComponentHeight();
            }
        },
        fixed: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        height: 0
    },
    methods: {
        getComponentHeight: function() {
            var t = this;
            (e.default.getLimoRuntime().isAliPayMp ? my.createSelectorQuery() : this.createSelectorQuery()).select(".ui-sticky").boundingClientRect(function(e) {
                e && t.setData({
                    height: e.height
                });
            }).exec();
        }
    }
});