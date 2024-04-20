var e = require("../../../miniprogram_npm/@limo/container/behaviors/index"), r = require("../common-helpers/formatStyle");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        memberGradeRight: {
            type: Object,
            value: {},
            observer: function() {
                this.formateMemberInfo();
            }
        },
        elConfig: {
            type: Object,
            value: {},
            observer: function() {
                this.formateMemberInfo();
            }
        }
    },
    data: {
        processStyle: {},
        pointStyle: "",
        richText: "",
        wrapperStyle: "height: 10rpx;background: rgb(102,102,102, 0.1);"
    },
    methods: {
        formateMemberInfo: function() {
            var e = this.properties, t = e.elConfig, o = e.memberGradeRight;
            if (t && o) {
                var i = o.percent, a = t.barBgColor, n = t.pointStyle, m = t.tipsStyle;
                this.setData({
                    processStyle: {
                        background: a.color,
                        width: i + "%",
                        height: "10rpx"
                    },
                    pointStyle: (0, r.formatStyle)(n),
                    tipsStyle: (0, r.formatStyle)(m)
                });
            }
        }
    }
});