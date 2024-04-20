var i = require("../../../miniprogram_npm/@limo/container/behaviors/index"), e = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js");

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        img: {
            type: String,
            value: ""
        },
        action: {
            type: Object,
            value: {}
        }
    },
    methods: {
        handleClick: function() {
            var i = this.properties.action;
            i && (0, e.tapActionHandler)(i, {
                compInst: this
            });
        }
    }
});