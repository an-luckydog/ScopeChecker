var e = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        customClass: {
            type: String,
            value: ""
        },
        config: {
            type: Object,
            value: {},
            observer: function(e) {
                var t = null == e ? void 0 : e.value, i = null == e ? void 0 : e.type, a = {
                    text: t && 1 === i,
                    image: t && 2 === i,
                    btn: t && 3 === i,
                    link: t && 4 === i
                }, n = a.btn ? "btn" : "";
                this.setData({
                    elementVisible: a,
                    wrapperClassName: n
                });
            }
        },
        displayStyle: {
            type: String,
            value: ""
        },
        hasWrapper: {
            type: Boolean,
            value: !1
        },
        wrapperStyle: {
            type: String,
            value: ""
        }
    },
    data: {
        elementVisible: {
            text: !1,
            image: !1,
            btn: !1,
            link: !1
        },
        wrapperClassName: ""
    },
    methods: {
        handleTap: function() {
            var e = this.properties.config || {}, t = e.action, i = e.type;
            3 === i ? t && this.triggerEvent("handleBtnClick", {
                action: t
            }) : 4 === i && t && this.navigateTo(t);
        }
    }
});