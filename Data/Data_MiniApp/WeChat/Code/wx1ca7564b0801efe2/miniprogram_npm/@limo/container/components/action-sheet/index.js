function t() {
    return (t = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
    }).apply(this, arguments);
}

Component({
    properties: {
        data: {
            type: Object,
            observer: function(t) {
                t && this.setData(t);
            }
        }
    },
    methods: {
        onClickCloseButton: function() {
            this.setData(t({}, this.data, {
                show: !1
            }));
        },
        onClickBaseActionSheet: function(t) {
            var e = t.currentTarget.dataset, n = e.item, r = e.index, a = parseInt(r, 10);
            try {
                this.onClickCloseButton(), this.triggerEvent(n ? "ok" : "cancel", {
                    tapIndex: a
                });
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                this.triggerEvent("cancel", {
                    tapIndex: a
                });
            }
            this.triggerEvent("complete", {
                tapIndex: a
            });
        }
    }
});