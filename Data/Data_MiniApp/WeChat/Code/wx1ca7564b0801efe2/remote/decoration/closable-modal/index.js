var e = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        title: {
            type: String,
            value: ""
        },
        hideClose: {
            type: Boolean,
            value: !1
        },
        hasOffset: {
            type: Boolean,
            value: !0
        },
        closePosition: {
            type: String,
            value: "left"
        },
        size: {
            type: String,
            value: "small"
        },
        modalName: {
            type: String,
            value: ""
        },
        backgroundImage: {
            type: String,
            value: ""
        },
        modalStyle: {
            type: String,
            value: ""
        }
    },
    data: {
        hasTabBar: !1
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            !this.isH5 && this.getTabBar() && this.getTabBar() && this.setData({
                hasTabBar: !0
            });
        },
        closeThisModal: function() {
            var e = this.data.modalName;
            e ? this.closeDialog(e) : this.triggerEvent("close");
        }
    }
});