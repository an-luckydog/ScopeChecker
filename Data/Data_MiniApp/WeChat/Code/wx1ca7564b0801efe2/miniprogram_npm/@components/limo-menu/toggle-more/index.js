var e = require("../../../@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        customStyle: {
            type: String,
            value: ""
        }
    }
});