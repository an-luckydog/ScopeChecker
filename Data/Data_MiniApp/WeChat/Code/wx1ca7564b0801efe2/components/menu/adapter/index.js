var i = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    data: {
        showFullLoading: !0
    }
});