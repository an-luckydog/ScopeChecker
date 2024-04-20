var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../../b/helpers/objectSpread2"), i = e(require("../../../@limo/core/index.js")), o = require("../../../@limo/container/behaviors/index"), a = require("../menu-constants/bizConstant"), n = require("../common-lib/utils"), s = require("../../limo-ui/ui-constant/enum");

Component({
    behaviors: [ o.commonBehavior, o.limoShim ],
    properties: {
        shopHeadInfo: {
            type: Object,
            value: {},
            observer: function(e, t) {
                e !== t && this.init();
            }
        },
        progressInfoOpacity: {
            type: Number,
            value: 1
        },
        expandInfo: {
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
        multiShop: {
            type: Number,
            value: 0
        },
        progressInfo: {
            type: Object,
            value: {}
        },
        progressType: {
            type: Number,
            value: 0
        }
    },
    data: {
        HEAD_RIGHT_TYPE: a.HEAD_RIGHT_TYPE,
        BIZ_TYPE_MAP: a.BIZ_TYPE_MAP,
        mustTagClass: "",
        togglePosition: "",
        titleOverflow: !1,
        textContent: "",
        headCouponTagList: [],
        wmTitleOverflow: !1,
        wmTitleClassName: "",
        shopNotices: []
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var e;
            this.init(), (0, n.isTakeAwayOrSelfPick)(null == (e = this.data.shopHeadInfo) ? void 0 : e.bizType) ? this.initTakeAwayTitleFormat() : this.initShopTitleFormat();
        },
        init: function() {
            var e, t = this.data, o = t.shopHeadInfo, l = void 0 === o ? {} : o, r = t.expandInfo, u = l.couponTagList, p = void 0 === u ? [] : u, h = l.shopNotices, T = void 0 === h ? [] : h;
            if (l && !(0, n.isEmptyObject)(l)) {
                var c = (null == l ? void 0 : l.shopNotice) || (null == r || null == (e = r.serviceFee) ? void 0 : e.content) || (null != r && r.shopDetailInfo ? "查看门店信息" : ""), _ = (l || {}).shopTagList, v = void 0 === _ ? [] : _, E = "";
                c ? E = a.HEAD_RIGHT_TYPE.TEXT_ZONE : (null == v ? void 0 : v.length) > 0 && (E = a.HEAD_RIGHT_TYPE.TAG);
                var d = p.slice(0, 7);
                this.initMustTag();
                var g, f = null == p ? void 0 : p.filter(function(e) {
                    return e.colorType === s.LABEL_TYPE.COUPON_COLLECT_CURRENCY;
                }), m = null == p ? void 0 : p.filter(function(e) {
                    return e.colorType !== s.LABEL_TYPE.COUPON_COLLECT_CURRENCY;
                });
                if (i.default.getLimoRuntime().sendMC) c && (g = "b_saaspay_vula1kfz_mv"), f.length && (g = "b_saaspay_nkazj7po_mv"), 
                m.length && (g = "b_saaspay_uv12pt8e_mv"), g && i.default.getLimoRuntime().sendMC({
                    valLab: null,
                    bid: g,
                    options: {}
                });
                this.setData({
                    togglePosition: E,
                    textContent: c,
                    shopNotices: T,
                    headCouponTagList: d
                });
            }
        },
        initMustTag: function() {
            var e = this.data.shopHeadInfo.shopRankTag;
            if (e) {
                var t = "";
                switch (e.rankType) {
                  case 0:
                  case 1:
                    t = a.MENU_RANG_TYPE[null == e ? void 0 : e.rankType];
                    break;

                  default:
                    t = a.MENU_RANG_TYPE[2];
                }
                this.setData({
                    shopRankTag: e,
                    mustTagClass: t
                });
            }
        },
        toggleShopInfoFlag: function() {
            this.triggerEvent("triggierShopInfoFlag");
            try {
                i.default.getLimoRuntime().sendMC({
                    valLab: null,
                    bid: "b_saaspay_kldh290x_mc",
                    options: {}
                }), i.default.getLimoRuntime().sendMC({
                    valLab: null,
                    bid: "b_saaspay_vula1kfz_mc",
                    options: {}
                });
            } catch (e) {}
        },
        clickCouponEvent: function(e) {
            e.detail.colorType !== s.LABEL_TYPE.COUPON_COLLECT_CURRENCY ? this.triggerEvent("openUserCouponsPanelEvent") : this.triggerEvent("collectCouponFunc", t({}, e.detail));
        },
        changeShopFunc: function() {
            this.triggerEvent("changeShopFunc");
        },
        initShopTitleFormat: function() {
            var e = this.data.shopHeadInfo;
            (0, n.getStrCount)(e.shopName) > 16 && e.shopLogo && this.setData({
                titleOverflow: !0
            });
        },
        initTakeAwayTitleFormat: function() {
            var e = this.data.shopHeadInfo, t = e.shopName, i = e.shopLogo, o = e.showTakeAwaySwitch, s = (0, 
            n.getStrCount)(t), l = !1, r = "title-overflow ", u = "";
            switch (+o + (i ? 1 : 0)) {
              case a.SHOP_NAME_FLAG.PLAIN:
                u = "TITLE_PLAIN";
                break;

              case a.SHOP_NAME_FLAG.SINGLE_ELEMENT:
                u = "TITLE_WITH_SWITCH", i && (u = "TITLE_WITH_LOGO");
                break;

              case a.SHOP_NAME_FLAG.FULL_ELEMENT:
                u = "TITLE_WITH_LOGO_SWITCH";
                break;

              default:
                u = "TITLE_PLAIN";
            }
            s > a.SHOP_NAME_COUNT_THRESHOLD[u] && (l = !0, r += a.SHOP_NAME_CLASS[u]), l && this.setData({
                wmTitleClassName: r,
                wmTitleOverflow: l
            });
        },
        closeOrderProgress: function() {
            this.triggerEvent("closeProgress");
        }
    }
});