var e = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        elConfig: {
            type: Object,
            value: {}
        }
    },
    methods: {}
});