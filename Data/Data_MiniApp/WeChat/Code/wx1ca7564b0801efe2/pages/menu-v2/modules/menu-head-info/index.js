var e = require("../../../../b/helpers/interopRequireDefault"), t = e(require("../../../../miniprogram_npm/@limo/core/index.js")), a = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), i = e(require("../../../../commons/component")), o = require("../../../../commons/constants");

(0, i.default)({
    behaviors: [ a.commonBehavior, a.limoShim ],
    options: {
        multipleSlots: !0
    },
    properties: {
        config: {
            type: Object,
            value: {}
        },
        bizTypeList: {
            type: Array,
            value: []
        },
        orderProductionProcess: {
            type: Object,
            value: {}
        },
        componentDecorationConfigJSON: {
            type: String,
            value: ""
        },
        promoTags: {
            type: Array,
            value: []
        },
        dpTag: {
            type: Object,
            value: {}
        },
        shopName: {
            type: String,
            value: ""
        }
    },
    observers: {
        bizTypeList: function(e) {
            var t = this.data.selectedBizType;
            null == e || e.map(function(e) {
                e.selected && (t = e.bizType);
            });
            var a = this.entity.get(o.TYPES.OPTIONS);
            this.setData({
                selectedBizType: t,
                scWithoutTable: a.get("bizType") === o.BIZ_TYPE.SC && !a.get("tableNum")
            });
        },
        componentDecorationConfigJSON: function(e) {
            var t = [];
            if (e) try {
                var a;
                t = (null == (a = JSON.parse(e)) ? void 0 : a.advNoticeList) || [];
            } catch (e) {}
            this.setData({
                advNoticeList: t
            });
        }
    },
    lifetimes: {
        attached: function() {
            this.setHeaderStyle(), this.entity.get(o.TYPES.EMITTER).on(o.EVENTS.MENU_HEAD_LOADING, this.changeMenuHeadLoading, this);
        },
        detached: function() {
            this.entity.get(o.TYPES.EMITTER).off(o.EVENTS.MENU_HEAD_LOADING, this.changeMenuHeadLoading, this);
        }
    },
    data: {
        advNoticeList: [],
        headStyle: "",
        capsuleStyle: "",
        showLoading: !1,
        selectedBizType: 100,
        scWithoutTable: !1
    },
    methods: {
        setHeaderStyle: function() {
            var e = t.default.getLimoRuntime().getMenuButtonBoundingClientRect(), a = e.top, i = e.height, n = e.left, s = e.optionMenuLeft, r = this.data.config, c = r.backgroundImg, d = r.themeColor, u = void 0 === d ? "light" : d, h = r.backgroundColor, g = this.entity.get(o.TYPES.THEME)(u), l = [], p = "light" === u ? {
                "--menu-head-background-color": h || "#EBF8F2",
                "--menu-head-secondary-collect": "#666",
                "--menu-head-progress-bg": "#fff",
                "--menu-head-search-bg": "rgba(255,255,255,0.6)",
                "--menu-head-search-border": "rgba(151,151,151,0.2)",
                "--menu-head-loading-img": "url(https://p0.meituan.net/travelcube/0f1dc5976b37f377c6f1ed13025482942746.png)"
            } : {
                "--menu-head-background-color": h || "#000",
                "--menu-head-secondary-collect": "#FFCB07",
                "--menu-head-progress-bg": "rgba(255,255,255,0.7)",
                "--menu-head-search-bg": "rgba(0,0,0,0.15)",
                "--menu-head-search-border": "rgba(255,255,255,0.25)",
                "--menu-head-loading-img": "url(https://p0.meituan.net/travelcube/e4721ecf29f676eb471185d39e64c5f13431.png)"
            }, m = "light" === u ? "#000000" : "#ffffff";
            for (var b in t.default.getLimoRuntime().setNavigationBarColor({
                backgroundColor: m,
                frontColor: m
            }), p) l.push("".concat(b, ":").concat(p[b]));
            c && l.push("background:url(".concat(c, ") no-repeat;background-size:100% auto;background-position:bottom;")), 
            this.setData({
                capsuleStyle: "height:".concat(i, "px;padding-top:").concat(a, "px;width:").concat(s || n, "px;"),
                headStyle: "".concat(g, ";").concat(l.join(";"))
            });
        },
        toggleMode: function(e) {
            var t, a = (e.currentTarget.dataset || {}).mode, i = this.entity.get(o.TYPES.OPTIONS).get("bizType") || "", n = String(a) === o.BIZ_TYPE.ZT ? "b_saaspay_o2yc8uux_mc" : "b_saaspay_afoywpqx_mc";
            a === +i || this.pending || (null == (t = this.entity) || t.get(o.TYPES.LX).sendMC(n), 
            this.pending = !0, this.setData({
                selectedBizType: a
            }), this.entity.get(o.TYPES.EMITTER).emit(o.EVENTS.REFRESH_PAGE, {
                bizType: a
            }));
        },
        moreInfo: function() {
            var e;
            null == (e = this.entity) || e.get(o.TYPES.LX).sendMC("b_saaspay_vula1kfz_mc");
            var t = this.data, a = t.advNoticeList, i = t.promoTags;
            this.entity.get(o.TYPES.LIMO).limoShowDialog("shop-info-panel", {
                promoTags: i,
                advNoticeList: a
            }, {
                position: "bottom",
                maskClosable: !0
            });
        },
        toSearch: function() {
            var e;
            null == (e = this.entity) || e.get(o.TYPES.LX).sendMC("b_saaspay_vkmkhsdx_mc"), 
            t.default.getLimoRuntime().navigateTo({
                url: "/orderPackages/pages/search/index"
            });
        },
        changeMenuHeadLoading: function(e) {
            this.setData({
                showLoading: e
            }), this.pending = e, e || this.setHeaderStyle();
        },
        selectShop: function() {
            this.data.scWithoutTable && this.entity.get(o.TYPES.SHOP).toShopList();
        }
    }
});