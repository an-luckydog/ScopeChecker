var e = require("../../../../b/helpers/interopRequireDefault"), r = require("../../../../miniprogram_npm/@limo/container/behaviors/index");

(0, e(require("../../../../commons/component")).default)({
    behaviors: [ r.commonBehavior, r.limoShim ],
    properties: {
        tipTextList: {
            type: Array,
            value: []
        }
    }
});