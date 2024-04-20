var t = require("../../../b/helpers/interopRequireDefault"), e = require("../../../b/helpers/objectSpread2"), i = require("../../../miniprogram_npm/@limo/container/behaviors/index"), r = t(require("../decor-comp-behavior/index"));

Component({
    behaviors: [ r.default, i.commonBehavior, i.limoShim ],
    properties: {
        bannerInterval: {
            type: Number,
            value: 3
        },
        advId: {
            type: String,
            value: ""
        },
        imgList: {
            type: Array,
            value: [],
            observer: function(t) {
                this.initData(t);
            }
        },
        heightImg: {
            type: Number,
            value: 160
        },
        autoplay: {
            type: Boolean,
            value: !0
        },
        opacitySpu: {
            type: Number,
            value: .8
        }
    },
    data: {
        bottomImgList: [],
        topImgList: [],
        current: 0,
        isH5: !1
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var t = this.data.imgList;
            this.initData(t);
        },
        initData: function(t) {
            var i = [], r = [];
            t && t.forEach(function(t, a) {
                i.push(e(e({}, t), {}, {
                    imgUrl: t.superStratumImgUrl
                })), r.push(e(e({}, t), {}, {
                    imgUrl: t.subStratumImgUrl,
                    index: a
                }));
            }), this.setData({
                topImgList: i,
                bottomImgList: r,
                isH5: this.isH5
            });
        },
        swiperChange: function(t) {
            var e = t.detail.index;
            this.setData({
                current: e
            });
        },
        compClick: function(t) {
            this.triggerEvent("decorationCompClick", t);
        }
    }
});