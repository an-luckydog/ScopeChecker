var e = require("../../../b/helpers/interopRequireDefault"), t = require("../../../miniprogram_npm/@limo/container/behaviors/index.js"), r = e(require("../decor-comp-behavior/index")), i = require("../common-helpers/compressImage");

Component({
    behaviors: [ r.default, t.commonBehavior, t.limoShim ],
    properties: {
        imgUrl: {
            type: String,
            value: ""
        },
        defaultImgUrl: {
            type: String,
            value: ""
        },
        showDefaultImg: {
            type: Boolean,
            value: !0
        },
        heightImg: {
            type: Number,
            value: 500
        },
        showShadow: {
            type: Boolean,
            value: !1
        },
        layoutStyle: {
            type: String,
            value: ""
        },
        styleType: {
            type: Number,
            value: 1
        },
        picConfigCode: {
            type: Number,
            value: 1
        },
        imgList: {
            type: Array,
            value: []
        },
        bannerInterval: {
            type: Number,
            value: 3
        }
    },
    data: {},
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.imgStartTime = Date.now();
        },
        onImageLoad: function() {
            (0, i.reportSuccess)(i.COMP_TYPE.HEAD, this.imgStartTime);
        },
        onImageError: function(e) {
            var t;
            (0, i.reportFail)(i.COMP_TYPE.HEAD, this.imgStartTime, null == e || null == (t = e.detail) ? void 0 : t.errMsg);
        }
    }
});