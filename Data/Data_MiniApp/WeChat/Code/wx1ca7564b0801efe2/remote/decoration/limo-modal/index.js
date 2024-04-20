var e = require("../../../b/helpers/interopRequireDefault"), t = require("../../../b/helpers/defineProperty"), i = e(require("../../../miniprogram_npm/@limo/core/index.js")), r = require("../../../miniprogram_npm/@limo/container/behaviors/index"), o = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), a = e(require("../decor-comp-behavior/index")), n = require("../common-helpers/compressImage"), s = require("../common-helpers/decorationUtils");

Component({
    behaviors: [ a.default, r.commonBehavior, r.limoShim ],
    properties: {
        limoModalStorage: {
            type: String
        },
        show: {
            type: Boolean,
            observer: function(e) {
                var t = e ? e && this.checkShow(this.properties.limoModalStorage) : this.checkShow(this.properties.limoModalStorage);
                this.setData({
                    newShow: this.properties.preview ? e : t
                }), t && this.saveLimoShowStorage();
            }
        },
        preview: {
            type: Boolean,
            value: !1
        },
        advId: {
            type: String,
            value: ""
        },
        modalConfigResource: {
            type: Object,
            value: {},
            observer: function(e) {
                this.updataResource(e);
            }
        }
    },
    data: {
        newShow: !1,
        imgShowList: [],
        currentIndex: 0
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
            i.default.getLimoRuntime().sendMV("b_eco_acddushn_mv");
        },
        limoAttached: function() {
            this.initData(this.properties), this.imgStartTime = Date.now(), this.currentAdvIdMap = t({}, this.properties.advId, 1);
        },
        initData: function(e) {
            var t = e || this.data, i = t.preview, r = t.modalConfigResource;
            this.setData({
                preview: i
            }), this.updataResource(r);
        },
        updataResource: function(e) {
            var t = (e || {}).imgList, i = this.tryParseJSON(t, [ {
                imgUrl: "https://p0.meituan.net/travelcube/0e2a50769924d1d85a1048327793044855287.png"
            } ]);
            this.setData({
                imgShowList: i
            });
        },
        tryParseJSON: function(e, t) {
            try {
                return JSON.parse(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return t;
            }
        },
        swiperSwitchChange: function(e) {
            if (e && e.detail) {
                this.setData({
                    currentIndex: e.detail.current
                });
                var t = this.data.imgShowList;
                (0, s.reportAd)(t, this, e.detail.current);
            }
        },
        closeConfirm: function(e) {
            e && this.setData({
                newShow: !1,
                showClass: ""
            }), this.triggerEvent("closeModalEvent");
        },
        onClick: function(e) {
            var t, r, a, n = this.data.imgShowList, s = e.currentTarget.dataset, u = s.url, m = s.index, d = s.adType, h = null == (t = n[m]) ? void 0 : t.action, c = null != (r = n[m]) && r.type && (null == (a = n[m]) ? void 0 : a.type) || 1;
            if (this.triggerEvent("clickModalEvent", {
                adType: d,
                action: h
            }), i.default.getLimoRuntime().sendMC("b_eco_acddushn_mc"), h) return (0, o.tapActionHandler)(h, {
                compInst: this
            }), void this.closeConfirm(!!h.actionValue);
            if (u) switch (c) {
              case 1:
              default:
                i.default.getLimoRuntime().navigateTo({
                    url: u
                });
                break;

              case 2:
                i.default.getLimoRuntime().redirectTo({
                    url: u
                });
            }
        },
        checkShow: function(e) {
            return !e || "true" !== e.toString();
        },
        saveLimoShowStorage: function() {
            this.properties.advId || this.triggerEvent("setLimoShowStorage");
        },
        moduleEvent: function(e) {
            i.default.getLimoRuntime().limoUseCustomHandler.advertiseReporter && i.default.getLimoRuntime().limoUseCustomHandler.advertiseReporter.report(e.detail), 
            this.triggerEvent("modalModuleEvent", e.detail);
        },
        onImageLoad: function() {
            (0, n.reportSuccess)(n.COMP_TYPE.MODAL, this.imgStartTime);
        },
        onImageError: function(e) {
            var t;
            (0, n.reportFail)(n.COMP_TYPE.MODAL, this.imgStartTime, null == e || null == (t = e.detail) ? void 0 : t.errMsg);
        }
    }
});