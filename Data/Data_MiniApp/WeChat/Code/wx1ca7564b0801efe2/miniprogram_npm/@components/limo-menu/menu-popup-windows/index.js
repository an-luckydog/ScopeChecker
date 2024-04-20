var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../@limo/container/behaviors/index"), a = e(require("../../../../api/rmsStorage")), o = e(require("../../../../lib/mix/confirm"));

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        adPopupDecoration: {
            type: Object,
            value: {},
            observer: function(e) {
                var t = this.data.shopId;
                if (null != e && e.ad && (e.advId || !a.default.getHasShowAdBoardAtMenu(t))) {
                    a.default.setHasShowAdBoardAtMenu(t);
                    var o = e || {}, i = o.ad, u = void 0 === i ? {} : i, n = o.advId, s = void 0 === n ? "" : n, l = o.modalConfigResource, d = o.show, r = o.preview;
                    this.setData({
                        ad: u,
                        advId: s,
                        adLayout: (null == e ? void 0 : e.layout) || {},
                        show: d,
                        preview: r,
                        modalConfigResource: l
                    });
                }
            }
        },
        takeCoupon: {
            type: Object,
            value: {},
            observer: function(e, t) {
                var a = this.data, o = a.adPopupDecoration, i = a.takeCoupon, u = a.buffetLimitMealTips;
                null != o && o.show || null == i || !i.show || (null == e ? void 0 : e.resultCode) === (null == t ? void 0 : t.resultCode) ? null != o && o.show || this.showBuffetLimitMealTips(u) : this.closeAdModalEvent();
            }
        },
        buffetLimitMealTips: {
            type: String,
            value: ""
        },
        shopId: {
            type: String
        }
    },
    data: {
        newTakeCouponData: {},
        ad: {},
        adLayout: {},
        advId: ""
    },
    methods: {
        closeAdModalEvent: function() {
            var e = this.data, t = e.takeCoupon, o = e.shopId, i = e.buffetLimitMealTips;
            a.default.getHasTakeCouponAtMenu(o) ? this.showBuffetLimitMealTips(i) : this.setData({
                newTakeCouponData: t
            });
        },
        takeCouponHandle: function() {
            this.triggerEvent("takeawayHandle");
        },
        handleCloseTakeCouponDialog: function() {
            var e = this.data.buffetLimitMealTips;
            this.showBuffetLimitMealTips(e);
        },
        showBuffetLimitMealTips: function(e) {
            var t = this.data.shopId;
            (null == e ? void 0 : e.length) > 0 && (0, o.default)({
                title: "温馨提示",
                body: e,
                buttons: [ {
                    text: "我知道了",
                    type: "submit",
                    callback: function() {
                        a.default.setBuffetLimitMealTipsFlag(t);
                    }
                } ]
            });
        },
        prevent: function() {}
    }
});