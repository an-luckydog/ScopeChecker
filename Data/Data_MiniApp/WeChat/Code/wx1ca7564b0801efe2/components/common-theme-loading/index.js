var i = require("../../miniprogram_npm/@limo/container/behaviors/index.js");

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {},
    data: {},
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {}
    }
});