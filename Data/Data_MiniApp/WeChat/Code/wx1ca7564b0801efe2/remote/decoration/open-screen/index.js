var e = require("../../../b/helpers/interopRequireDefault")(require("../../../miniprogram_npm/@limo/core/index.js")), t = require("../../../miniprogram_npm/@limo/container/behaviors/index.js"), i = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        openInterval: {
            type: Number,
            value: 5
        },
        imgInfo: {
            type: Object,
            value: {}
        },
        advId: {
            type: String,
            value: ""
        },
        show: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                e && this.triggerEvent("setOpenScreenStorage");
            }
        }
    },
    data: {
        countdown: 0,
        showAd: !0
    },
    attached: function() {
        this.limoAttached();
    },
    detached: function() {
        clearTimeout(this.timer);
    },
    methods: {
        limoAttached: function() {
            this.playAd();
        },
        close: function() {
            this.setData({
                showAd: !1
            }), clearTimeout(this.timer), this.triggerEvent("closeAd");
        },
        onClick: function() {
            var e = this.data.imgInfo;
            null != e && e.action && ((0, i.tapActionHandler)(e.action), this.close());
        },
        playAd: function() {
            var e = this, t = this.properties, i = t.openInterval;
            t.show && (this.setData({
                countdown: i
            }), this.timer = setTimeout(function() {
                e.countTime();
            }, 1e3));
        },
        countTime: function() {
            var e = this, t = this.data.countdown;
            this.setData({
                countdown: --t
            }), t <= 0 ? this.close() : this.timer = setTimeout(function() {
                e.countTime();
            }, 1e3);
        },
        moduleEvent: function(t) {
            e.default.getLimoRuntime().limoUseCustomHandler.advertiseReporter && e.default.getLimoRuntime().limoUseCustomHandler.advertiseReporter.report(t.detail);
        }
    }
});