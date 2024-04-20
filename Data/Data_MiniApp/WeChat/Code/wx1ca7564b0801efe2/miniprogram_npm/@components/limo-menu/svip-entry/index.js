var e = require("../../../../b/helpers/interopRequireDefault"), r = require("../../../@limo/container/behaviors/index"), i = e(require("../../../@mtfe/rms-triangle-c/index.js"));

Component({
    behaviors: [ r.commonBehavior, r.limoShim ],
    properties: {
        richText: {
            type: Array,
            value: {}
        },
        svipCardDetailUrl: {
            type: String,
            value: ""
        }
    },
    methods: {
        jumpToSvipCardPage: function() {
            var e = this.data.svipCardDetailUrl;
            e.length && i.default.navigateTo({
                url: e
            });
        }
    }
});