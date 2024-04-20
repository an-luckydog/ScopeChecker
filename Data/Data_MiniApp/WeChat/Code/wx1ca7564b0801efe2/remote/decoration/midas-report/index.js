var e = require("../../../b/helpers/interopRequireDefault")(require("../../../miniprogram_npm/@limo/core/index.js")), t = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        moduleId: {
            type: String,
            value: "",
            observer: function() {
                this.hasSend = !1;
            }
        },
        paddingTop: {
            type: String,
            value: ""
        },
        paddingRight: {
            type: String,
            value: ""
        },
        paddingBottom: {
            type: String,
            value: ""
        },
        paddingLeft: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {
        limoReady: function() {
            var t = this;
            if (this.properties.moduleId) {
                this.hasSend = !1;
                var i = parseFloat(this.properties.paddingTop) || 0, r = parseFloat(this.properties.paddingRight) || 0, o = parseFloat(this.properties.paddingBottom) || 0, n = parseFloat(this.properties.paddingLeft) || 0;
                this.listItemContainer || (this.listItemContainer = e.default.getLimoRuntime().createIntersectionObserver(this)), 
                this.listItemContainer.relativeToViewport({
                    top: i,
                    bottom: o,
                    right: r,
                    left: n
                }).observe(".midas-wraper", function(e) {
                    (e || {}).intersectionRatio > 0 && !t.hasSend && (t.triggerEvent("moduleEvent", {
                        moduleId: t.properties.moduleId,
                        eventType: 1
                    }), t.hasSend = !0);
                });
            }
        },
        onClick: function() {
            this.properties.moduleId && this.triggerEvent("moduleEvent", {
                moduleId: this.properties.moduleId,
                eventType: 2
            });
        }
    },
    ready: function() {
        this.limoReady();
    }
});