var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../../b/helpers/objectSpread2"), i = e(require("../../../@limo/core/index.js")), a = require("../../../@limo/container/behaviors/index"), o = require("../menu-constants/bizConstant"), n = require("../../limo-ui/ui-constant/enum"), s = require("../common-lib/utils"), l = require("../../../../lib/mix/util"), u = require("../../../../lib/env"), c = require("../../../@mtfe/rms-sdk/index.js"), r = "https://p0.meituan.net/scarlett/";

Component({
    behaviors: [ a.commonBehavior, a.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        memberTags: {
            type: Array,
            value: []
        },
        promotionTags: {
            type: Array,
            value: []
        },
        serviceFee: {
            type: Object,
            value: {}
        },
        shopId: {
            type: String,
            value: ""
        },
        tenantId: {
            type: String,
            value: ""
        },
        expandInfo: {
            type: Object,
            value: {}
        },
        detail: {
            type: Object,
            value: {}
        },
        name: {
            type: String,
            value: ""
        },
        logo: {
            type: String,
            value: ""
        },
        notice: {
            type: String,
            value: ""
        },
        bizType: {
            type: Number,
            value: 0
        },
        shopHeadInfo: {
            type: Object,
            value: {},
            observer: function(e, t) {
                e !== t && this.init();
            }
        },
        waiMaiConfig: {
            type: Object,
            value: {}
        },
        pickUpConfig: {
            type: Object,
            value: {}
        },
        showTakeAwaySwitch: {
            type: Boolean,
            value: !1
        },
        showShopFlag: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        ICON_MAP: {
            101: r + "8ed65d517bd8df6eab054797acdec99a603.png",
            102: r + "f58919b3f76434dffd723b5581660dbb834.png",
            104: r + "0266668574b092f801222969686b6245661.png",
            105: r + "61876e2cab8eabe5b4d6a75e28004a04690.png",
            106: r + "7d4244517d3eeab6afe967a494ee150b714.png",
            110: r + "17dfabb68879e10bc224c5221f808f07796.png",
            111: r + "56fc6bdeb104b88ef7c46faf7b5a9688645.png",
            201: r + "56a24bbdbcc8f02d8b68f25c60fa8024565.png",
            202: r + "66975f49b625a027c580d825b3fc47c3488.png",
            203: r + "d71a790baccbab829a10c0e743afb488644.png",
            204: r + "a0d611af873362b918b5aa1df2488f7e617.png",
            205: r + "4f67028644f116bb0c3ffafddec1f1842253.png"
        },
        mustTagClass: "musteat-tag",
        isH5Page: !1,
        isShowIcon: !0,
        showPromo: !1,
        detailTitleOverflow: !1,
        wmTitleOverflow: !1,
        wmTitleClassName: "",
        couponList: [],
        moreCoupon: !1,
        isShowShopLicense: u.isNativeMp,
        shopNotices: []
    },
    ready: function() {
        this.limoReady();
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoReady: function() {
            this.setData({
                isH5Page: i.default.getLimoRuntime().isH5
            });
        },
        limoAttached: function() {
            this.init(), this.initMustTag(), this.hideIcon(), this.initShopTitleFormat();
        },
        init: function() {
            var e = this.data.shopHeadInfo, t = e.couponTagList, i = void 0 === t ? [] : t, a = e.totalCouponNum, o = void 0 === a ? 0 : a, n = e.shopNotices, s = void 0 === n ? [] : n, l = this.data, u = l.memberTags, c = void 0 === u ? [] : u, r = l.promotionTags, d = void 0 === r ? [] : r, p = i.slice(0, 10), h = (null == p ? void 0 : p.length) || (null == c ? void 0 : c.length) || (null == d ? void 0 : d.length);
            this.setData({
                couponList: p,
                showPromo: h,
                shopNotices: s,
                moreCoupon: o > 10
            });
        },
        initMustTag: function() {
            var e = this.data.shopHeadInfo.shopRankTag;
            if (e) {
                var t = e.rankType, i = "";
                switch (t) {
                  case 0:
                  case 1:
                    i = o.MENU_RANG_TYPE[t];
                    break;

                  default:
                    i = o.MENU_RANG_TYPE[2];
                }
                this.setData({
                    shopRankTag: e,
                    mustTagClass: i
                });
            }
        },
        clickCouponEvent: function(e) {
            e.detail.colorType !== n.LABEL_TYPE.COUPON_COLLECT_CURRENCY ? this.triggerEvent("openUserCouponsPanelEvent") : this.triggerEvent("collectCouponFunc", t({}, e.detail));
        },
        hideIcon: function() {
            !i.default.getLimoRuntime().isH5 || i.default.getLimoRuntime().isWx || i.default.getLimoRuntime().isNativeMp || i.default.getLimoRuntime().isAlipay || this.setData({
                isShowIcon: !1
            });
        },
        makePhone: function() {
            i.default.getLimoRuntime().makePhoneCall({
                phoneNumber: this.data.detail.phone
            });
        },
        makeAddress: function() {
            if (this.data.isShowIcon) {
                var e = this.data.detail, t = e.longitude, a = e.latitude, o = e.address, n = void 0 === o ? "暂无简介" : o;
                i.default.getLimoRuntime().openLocation({
                    latitude: a,
                    longitude: t,
                    address: n,
                    name: this.data.name || "暂无名称",
                    scale: 15
                });
            }
        },
        initShopTitleFormat: function() {
            var e = this.data, t = e.name, i = e.logo, a = e.bizType, n = e.showTakeAwaySwitch, l = (0, 
            s.getStrCount)(t);
            if (function(e) {
                return e === o.BIZ_TYPE_MAP.TAKEAWAY || e === o.BIZ_TYPE_MAP.PICKUP;
            }(a)) {
                var u = !1, c = "title-overflow ", r = "";
                switch (+n + (i ? 1 : 0)) {
                  case o.SHOP_NAME_FLAG.PLAIN:
                    r = "TITLE_PLAIN";
                    break;

                  case o.SHOP_NAME_FLAG.SINGLE_ELEMENT:
                    r = i ? "TITLE_WITH_LOGO" : "TITLE_WITH_SWITCH";
                    break;

                  case o.SHOP_NAME_FLAG.FULL_ELEMENT:
                    r = "TITLE_WITH_LOGO_SWITCH";
                    break;

                  default:
                    r = "TITLE_PLAIN";
                }
                l > o.SHOP_NAME_COUNT_THRESHOLD[r] && (u = !0, c += o.SHOP_NAME_CLASS[r]), u && this.setData({
                    wmTitleClassName: c,
                    wmTitleOverflow: u
                });
            } else l > 13 && i && this.setData({
                detailTitleOverflow: !0
            });
        },
        toggleFunc: function() {
            this.triggerEvent("triggierShopInfoFlag");
        },
        jumpHome: function() {
            i.default.getLimoRuntime().navigateTo({
                url: this.properties.shopHeadInfo.shopHomeJumpConfig.action.actionValue
            });
        },
        jumpShopLicense: function() {
            var e = this.properties, t = e.shopId, a = void 0 === t ? "" : t, o = e.tenantId, n = void 0 === o ? "" : o, s = "".concat((0, 
            l.getHost)(), "/diancan/web/shop-license?shopId=").concat(a, "&tenantId=").concat(n);
            u.isNativeMp && (s = "/diancan-menu/pages/webview/index?url=" + encodeURIComponent(s)), 
            i.default.getLimoRuntime().navigateTo({
                url: s
            });
        },
        clickNotice: function(e) {
            var t = e.target.dataset, i = t.actionType, a = t.actionValue;
            i && a && ((0, c.tapActionHandler)({
                actionType: i,
                actionValue: a
            }, {
                compInst: this
            }), this.toggleFunc());
        }
    }
});