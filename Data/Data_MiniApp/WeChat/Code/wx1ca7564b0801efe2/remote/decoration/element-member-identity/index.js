var e = require("../../../miniprogram_npm/@limo/container/behaviors/index"), t = require("../common-helpers/formatStyle");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        nickName: {
            type: String,
            value: ""
        },
        cardTypeName: {
            type: String,
            value: ""
        },
        cardGradeName: {
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
        tagStyle: "",
        nameStyle: ""
    },
    methods: {
        formateElementConfig: function() {
            var e, a = this.properties.elConfig;
            if (a) {
                var r = a.nameStyle, o = a.tagStyle, n = 2 * (o.fontSize || 0) + "rpx", i = (0, 
                t.formatStyle)(o);
                (null == (e = o.background) || !e.backgroundImg) && (i += ";border-radius: ".concat(n, " ").concat(n, " ").concat(n, " 0;")), 
                this.setData({
                    tagStyle: i,
                    nameStyle: (0, t.formatStyle)(r)
                });
            }
        }
    }
});