var e = require("../../../@limo/container/behaviors/index"), i = require("../ui-constant/enum");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        type: {
            type: String,
            value: i.STAR_TYPE.DEFAULT
        }
    }
});