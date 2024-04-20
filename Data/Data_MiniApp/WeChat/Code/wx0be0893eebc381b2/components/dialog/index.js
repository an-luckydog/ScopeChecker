Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        defaultBtn: {
            type: Boolean,
            value: !0
        }
    },
    data: {},
    methods: {
        handleClose: function() {
            this.triggerEvent("cancle");
        },
        handleConfirm: function() {
            this.triggerEvent("confirm");
        }
    }
});