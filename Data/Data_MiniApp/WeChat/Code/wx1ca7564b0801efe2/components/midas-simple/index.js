var e = require("../../b/helpers/interopRequireDefault")(require("../../miniprogram_npm/@limo/core/index.js")), t = require("../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        top: {
            type: Number,
            value: 0
        },
        bottom: {
            type: Number,
            value: 0
        },
        right: {
            type: Number,
            value: 0
        },
        left: {
            type: Number,
            value: 0
        },
        impressionExtra: {
            type: String,
            value: ""
        },
        switch: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        midasId: ""
    },
    methods: {
        limoReady: function() {
            this.data.switch && (this.setData({
                midasId: "midas-id-".concat(Date.now().toString(16)).concat(parseInt(1e10 * Math.random(), 10).toString(16))
            }), this.initObserve());
        },
        triggerImpression: function(e) {
            var t = this;
            e.intersectionRect.top <= 0 ? this.timer && this.scrollIn && clearTimeout(this.timer) : (this.scrollIn = !0, 
            this.timer = setTimeout(function() {
                t.scrollIn = !1, t.triggerEvent("impressionend", t.data.impressionExtra);
            }, 1e3));
        },
        initObserve: function() {
            var t = this, i = this.data || {}, r = i.top, o = void 0 === r ? 0 : r, n = i.bottom, s = void 0 === n ? 0 : n, a = i.right, m = void 0 === a ? 0 : a, c = i.left, u = void 0 === c ? 0 : c;
            e.default.getLimoRuntime().createIntersectionObserver && (this.intersectionObserver = e.default.getLimoRuntime().createIntersectionObserver(this).relativeToViewport({
                top: o,
                bottom: s,
                right: m,
                left: u
            }), this.intersectionObserver && setTimeout(function() {
                t.intersectionObserver.observe("#" + t.data.midasId, function(e) {
                    return t.triggerImpression(e);
                });
            }, 10));
        }
    },
    ready: function() {
        this.limoReady();
    },
    detached: function() {
        this.intersectionObserver && this.intersectionObserver.disconnect();
    }
});