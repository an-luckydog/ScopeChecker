var t = require("../../../b/helpers/interopRequireDefault")(require("../../../miniprogram_npm/@limo/core/index.js")), i = require("../../../miniprogram_npm/@limo/container/behaviors/index.js"), e = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js");

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        imgInfo: {
            type: Object,
            value: {
                imgUrl: {
                    type: String,
                    value: "https://p0.meituan.net/scarlett/32573a683dc238f12b09d2e04752f7864604.png"
                },
                ratio: {
                    type: Number,
                    value: 1
                },
                redirectUrl: {
                    type: String,
                    value: ""
                }
            }
        },
        floatLayout: {
            type: Object,
            value: {},
            observer: function(t) {
                var i = this.properties.imgInfo, e = [], a = (null == i ? void 0 : i.ratio) || 1, s = (null == t ? void 0 : t.floatSize) || 140, o = Math.round(s / a) || 140;
                e.push("width:".concat(s, "rpx")), e.push("height:".concat(o, "rpx")), this.setData({
                    radiusStyle: e.join(";"),
                    setRight: t.floatRight || 0,
                    startRight: t.floatRight || 0,
                    setHeight: .7 * t.height > 10 ? .7 * t.height : 10,
                    floatWidth: s / 2,
                    floatHeight: o / 2
                });
            }
        },
        position: {
            type: String,
            value: "fixed"
        }
    },
    data: {
        radiusStyle: "",
        viewHeight: 0,
        viewWidth: 0,
        setRight: 0,
        setHeight: 0,
        floatWidth: 0,
        floatHeight: 0,
        startRight: 0,
        setTransition: "none",
        setOpacity: 1
    },
    pageLifetimes: {
        show: function() {
            this.limoPageShow();
        }
    },
    methods: {
        limoPageShow: function() {
            var i = this;
            t.default.getLimoRuntime().sendMV("b_eco_cm87f962_mv");
            var e = t.default.getLimoRuntime().getSystemInfoSync(), a = e.screenHeight, s = e.windowWidth;
            this.setData({
                viewHeight: a,
                viewWidth: s
            }), this.registerEvent("isScroll", function(t) {
                var e = i.data, a = e.setRight, s = e.floatWidth, o = e.startRight, r = e.viewWidth;
                if (t.isScroll) {
                    var n = .8 * -(s + o);
                    a > r / 2 && (n = r - .2 * s), i.setData({
                        setRight: n,
                        setTransition: "all 0.5s;transition-delay: 0.15s",
                        setOpacity: .5
                    }), i.timer ? (clearInterval(i.timer), i.setTimer()) : i.setTimer();
                }
            });
        },
        setTimer: function() {
            var t = this, i = this.data, e = i.setRight, a = i.floatWidth, s = i.startRight, o = i.viewWidth;
            this.timer = setTimeout(function() {
                var i = s;
                e > o / 2 && (i = o - a - s), t.setData({
                    setRight: i,
                    setTransition: "all 0.5s",
                    setOpacity: 1
                });
            }, 1e3);
        },
        touchMove: function(t) {
            var i = this.data, e = i.floatWidth, a = i.floatHeight, s = i.viewHeight, o = i.viewWidth, r = t.changedTouches[0], n = r.clientX, h = r.clientY;
            this.setData({
                setTransition: "none",
                setRight: o - n - e / 2,
                setHeight: 100 * (s - h - a / 2) / s
            });
        },
        touchEnd: function() {
            var t = this.data, i = t.setRight, e = t.setHeight, a = t.viewWidth, s = t.startRight, o = t.floatWidth;
            e < 10 && this.setData({
                setHeight: 10
            }), e > 80 && this.setData({
                setHeight: 80
            }), i > a / 2 ? this.setData({
                setTransition: "all 0.5s",
                setRight: a - o - s
            }) : this.setData({
                setRight: s,
                setTransition: "all 0.5s"
            });
        },
        floatClick: function() {
            var i = this.properties.imgInfo;
            if (i) {
                var a = i.action;
                if (t.default.getLimoRuntime().sendMC("b_eco_cm87f962_mc"), a) (0, e.tapActionHandler)(a, {
                    compInst: this
                }); else {
                    var s = i.redirectUrl || "";
                    if (s) switch (i.type ? i.type : 1) {
                      case 1:
                      default:
                        t.default.getLimoRuntime().navigateTo({
                            url: s
                        });
                        break;

                      case 2:
                        t.default.getLimoRuntime().redirectTo({
                            url: s
                        });
                    }
                }
            }
        }
    },
    attached: function() {
        this.limoPageShow();
    }
});