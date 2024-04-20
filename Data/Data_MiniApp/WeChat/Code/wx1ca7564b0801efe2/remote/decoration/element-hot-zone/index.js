var e = require("../../../miniprogram_npm/@limo/container/behaviors/index"), i = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        hotZone: {
            type: Object,
            value: {}
        }
    },
    methods: {
        handleClick: function() {
            var e = this.properties.hotZone || {}, r = e.action, n = e.index, o = e.redirectUrl;
            r && ((0, i.tapActionHandler)(r, {
                compInst: this
            }), this.triggerEvent("hotClick", {
                index: n,
                link: o
            }));
        }
    }
});