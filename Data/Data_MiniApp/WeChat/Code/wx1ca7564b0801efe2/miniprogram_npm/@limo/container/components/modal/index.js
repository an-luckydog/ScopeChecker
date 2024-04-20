function t() {
    return (t = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
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
        preventTapBubble: function() {},
        onClickCloseButton: function() {
            this.setData(t({}, this.data, {
                show: !1
            }));
        },
        onTapBackdrop: function() {
            this.onClickCloseButton();
        },
        onClickBaseComponent: function(t) {
            var n = t.currentTarget.dataset.action;
            this.onClickCloseButton(), this.triggerEvent(n);
        }
    }
});