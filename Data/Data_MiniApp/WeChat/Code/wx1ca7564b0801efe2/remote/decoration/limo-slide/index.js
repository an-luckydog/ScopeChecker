var e = require("../../../b/helpers/interopRequireDefault"), t = require("../../../b/helpers/defineProperty"), i = e(require("../../../miniprogram_npm/@limo/core/index.js")), r = require("../../../miniprogram_npm/@limo/container/behaviors/index"), a = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), n = e(require("../decor-comp-behavior/index")), o = require("../common-helpers/compressImage"), m = require("../common-helpers/decorationUtils");

Component({
    behaviors: [ n.default, r.commonBehavior, r.limoShim ],
    properties: {
        circular: {
            type: Boolean,
            value: !0
        },
        bannerInterval: {
            type: Number,
            value: 3
        },
        currentIndex: {
            type: Number,
            value: 0
        },
        autoplay: {
            type: Boolean,
            value: !0
        },
        imgList: {
            type: Array,
            value: []
        },
        advId: {
            type: String,
            value: ""
        },
        defaultImgUrl: {
            type: String,
            value: "http://p1.meituan.net/scarlett/497822ef22088452f7e10d47a3ec7cfc1457.png"
        },
        heightImg: {
            type: Number,
            value: 160
        },
        componentId: {
            type: Number,
            value: -1
        },
        imgMode: {
            type: String,
            value: "scaleToFill"
        },
        current: {
            type: Number,
            value: 0
        },
        duration: {
            type: Number,
            value: 500
        },
        slideType: {
            type: Number,
            value: 0
        }
    },
    data: {
        compName: "limo-slide"
    },
    pageLifetimes: {
        show: function() {
            this.limoPageShow();
        }
    },
    attached: function() {
        this.limoAttached(), this.limoPageShow();
    },
    methods: {
        limoPageShow: function() {
            i.default.getLimoRuntime().sendMV("b_eco_s413bo1n_mv", {
                custom: {
                    id: this.id
                }
            });
        },
        limoAttached: function() {
            this.imgStartTime = Date.now(), this.currentAdvIdMap = t({}, this.properties.advId, 1);
        },
        redirectTo: function(e) {
            var t, r = e.currentTarget.dataset.adItem, n = e.currentTarget.dataset ? e.currentTarget.dataset.redirectType : 1, o = e.currentTarget.dataset.index, m = null == (t = this.properties.imgList[o]) ? void 0 : t.action;
            if (i.default.getLimoRuntime().sendMC("b_eco_s413bo1n_mc", {
                custom: {
                    id: this.id,
                    flame: o
                }
            }), this.triggerEvent("swiperRedirectEvent", {
                index: o
            }), m) (0, a.tapActionHandler)(m, {
                compInst: this
            }); else if (r) switch (n) {
              case 1:
              default:
                i.default.getLimoRuntime().navigateTo({
                    url: r
                });
                break;

              case 2:
                i.default.getLimoRuntime().redirectTo({
                    url: r
                });
            }
        },
        swiperSwitchChange: function(e) {
            if (e && e.detail) {
                this.setData({
                    currentIndex: e.detail.current
                }), this.triggerEvent("swiperSwitchChangeEvent", {
                    index: e.detail.current
                });
                var t = this.properties.imgList;
                (0, m.reportAd)(t, this, e.detail.current);
            }
        },
        moduleEvent: function(e) {
            i.default.getLimoRuntime().limoUseCustomHandler.advertiseReporter && i.default.getLimoRuntime().limoUseCustomHandler.advertiseReporter.report(e.detail), 
            this.triggerEvent("swiperModuleEvent", e.detail);
        },
        onImageLoad: function() {
            (0, o.reportSuccess)(o.COMP_TYPE.SLIDE, this.imgStartTime);
        },
        onImageError: function(e) {
            var t;
            (0, o.reportFail)(o.COMP_TYPE.SLIDE, this.imgStartTime, null == e || null == (t = e.detail) ? void 0 : t.errMsg);
        }
    }
});