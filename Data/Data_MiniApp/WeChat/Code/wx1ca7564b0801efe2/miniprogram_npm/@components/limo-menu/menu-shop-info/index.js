var e = require("../../../@limo/container/behaviors/index"), t = require("../../../../lib/navigator"), o = require("../../../../types/common.d.js");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        backgroundImgUrl: {
            type: String,
            value: ""
        },
        shopHeadInfo: {
            type: Object,
            value: {}
        },
        peopleCountText: {
            type: String,
            value: ""
        },
        tableName: {
            type: String,
            value: ""
        },
        headActionList: {
            type: Array,
            value: []
        },
        shopTagList: {
            type: Array,
            value: []
        },
        expandInfo: {
            type: Object,
            value: {}
        },
        shopId: {
            type: String,
            value: ""
        },
        tableNum: {
            type: Number
        },
        searchBannerOpacity: {
            type: Number,
            value: 0,
            observer: function(e) {
                if ("number" != typeof e) return 1;
                this.setData({
                    headerMiddleInfoProgressInfoOpacity: 1 - e
                });
            }
        },
        hideSearch: {
            type: Boolean,
            value: !1
        },
        waiMaiConfig: {
            type: Object,
            value: {}
        },
        pickUpConfig: {
            type: Object,
            value: {}
        },
        orderConfig: {
            type: Object,
            value: {}
        },
        progressInfo: {
            type: Object,
            value: {},
            observer: function(e) {
                this.setProgressData(e);
            }
        },
        urlParams: {
            type: Object,
            value: {}
        },
        grouponCouponData: {
            type: Object,
            value: {}
        },
        isVirtualTabbar: {
            type: Boolean,
            value: !1
        },
        backgroundColor: {
            type: String,
            value: ""
        }
    },
    data: {
        headerMiddleInfoProgressInfoOpacity: 1,
        showShopFlag: !1,
        progressData: {}
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var e = this.properties.progressInfo;
            this.setProgressData(e);
        },
        toggleShopInfoFlag: function() {
            var e = this.data.showShopFlag;
            this.triggerEvent("expandShopInfo", {
                showShopFlag: !e
            }, {
                bubbles: !0,
                composed: !0
            }), this.setData({
                showShopFlag: !e
            });
        },
        switchBizFunc: function(e) {
            var t = e.detail.bizTypeStatus;
            this.triggerEvent("switchBiz", {
                bizTypeStatus: t
            });
        },
        getLocationInfoFunc: function() {
            this.triggerEvent("getLocationInfo", {
                bubbles: !0,
                composed: !0
            });
        },
        goToAddressPageFunc: function() {
            this.triggerEvent("goToAddressPage", {
                bubbles: !0,
                composed: !0
            });
        },
        collectCouponAction: function(e) {
            this.triggerEvent("collectCoupon", {
                from: e.detail.from
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        changeShop: function() {
            var e;
            (null == (e = this.data.orderConfig) ? void 0 : e.multiShop) === o.MultiShop.MULTIPLE && (0, 
            t.jumpToShopList)();
        },
        closeMenuOrderProgress: function() {
            this.triggerEvent("closeOrderProgress"), this.setProgressData({});
        },
        setProgressData: function(e) {
            this.setData({
                progressData: e
            });
        },
        openUserCouponsPanel: function() {
            var e = this.data, t = e.urlParams, o = e.grouponCouponData;
            this.revoke("openPanelEvent", {
                type: "user-coupons-panel",
                panelProps: {
                    urlParams: t,
                    grouponCouponData: o
                },
                maskClosable: !0
            });
        }
    }
});