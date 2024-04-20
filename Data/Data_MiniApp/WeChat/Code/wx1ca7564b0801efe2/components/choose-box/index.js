var e = require("../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        name: {
            type: String,
            value: ""
        },
        price: {
            type: Number,
            value: 0
        },
        selected: {
            type: Boolean,
            value: !1
        },
        count: {
            type: Number,
            value: 0
        },
        disablePlus: {
            type: Boolean,
            value: !1
        },
        stockCount: {
            type: Number,
            value: -1
        },
        mutex: {
            type: Boolean,
            value: !1
        },
        repeatable: {
            type: Boolean,
            value: !1
        },
        wholeLine: {
            type: Boolean,
            value: !1
        },
        star: {
            type: Boolean,
            value: !1
        },
        pic: {
            type: String,
            value: ""
        }
    },
    methods: {
        clickBox: function() {
            var e = this.data, t = e.mutex, o = e.stockCount, a = e.repeatable, i = e.selected;
            t || 0 === o || this.triggerEvent("clickChooseBox", {
                repeatable: a,
                selected: i
            });
        },
        onAdd: function() {
            var e = this.data, t = e.stockCount;
            e.mutex || 0 === t || this.triggerEvent("clickBoxAdd");
        },
        onReduce: function() {
            this.triggerEvent("clickBoxReduce");
        },
        mutexClickHandle: function() {
            this.triggerEvent("handleMutex");
        }
    }
});