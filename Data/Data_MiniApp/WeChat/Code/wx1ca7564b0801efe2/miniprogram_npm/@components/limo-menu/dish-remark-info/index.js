var e = require("../../../@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        remarkText: {
            type: String,
            value: "",
            observer: function(e) {
                this.setData({
                    newRemarkText: e
                });
            }
        }
    },
    data: {
        tips: "添加口味、偏好等要求"
    },
    methods: {
        editRemarkFn: function() {
            this.triggerEvent("editRemark");
        }
    }
});