var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../../b/helpers/objectSpread2"), r = e(require("../../../../b/regenerator")), a = require("../../../../b/helpers/asyncToGenerator"), i = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), n = e(require("../../../../commons/component")), s = require("../../../../commons/constants");

(0, n.default)({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        status: {
            type: Number,
            value: 0
        },
        recommendInfo: {
            type: Object,
            value: {}
        }
    },
    data: {
        title: "",
        subTitle: "",
        shopList: [],
        loading: !0,
        requestError: !1,
        hasTabBar: !0
    },
    lifetimes: {
        attached: function() {
            var e = this;
            return a(r.default.mark(function t() {
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.fetchRecommend();

                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        }
    },
    methods: {
        fetchRecommend: function() {
            var e = this;
            return a(r.default.mark(function a() {
                var i, n, o, u, c, l, d, p, h, m;
                return r.default.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (e.setData({
                            loading: !0,
                            requestError: !1,
                            hasTabBar: !(null == (i = e.getTabBar) || !i.call(e))
                        }), n = e.data, o = n.status, u = n.recommendInfo, !(Object.keys(u).length > 0)) {
                            r.next = 6;
                            break;
                        }
                        e.setData(t(t({}, u), {}, {
                            loading: !1
                        })), r.next = 20;
                        break;

                      case 6:
                        return r.prev = 6, r.next = 9, e.entity.get(s.TYPES.SHOP_RECOMMEND).requestRecommend({
                            shopStatus: o
                        });

                      case 9:
                        if ((c = r.sent) && c.title) {
                            r.next = 12;
                            break;
                        }
                        return r.abrupt("return", void e.setData({
                            requestError: !0
                        }));

                      case 12:
                        l = c.title, d = c.subTitle, p = void 0 === d ? "" : d, h = c.shopList, m = void 0 === h ? [] : h, 
                        e.setData({
                            title: l,
                            subTitle: p,
                            shopList: m
                        }), r.next = 19;
                        break;

                      case 16:
                        r.prev = 16, r.t0 = r.catch(6), e.setData({
                            requestError: !0
                        });

                      case 19:
                        e.setData({
                            loading: !1
                        });

                      case 20:
                      case "end":
                        return r.stop();
                    }
                }, a, null, [ [ 6, 16 ] ]);
            }))();
        },
        closeDialog: function() {
            this.entity.get(s.TYPES.LIMO).limoCloseDialog("shop-status-panel");
        },
        toShopMenu: function(e) {
            var t = e.detail.poiId, r = this.data.shopList.find(function(e) {
                return e.poiId === t;
            });
            if (r && r.redirectUrl) {
                var a = r.redirectUrl, i = this.entity.get(s.TYPES.TRIANGLE).parse(a);
                this.entity.get(s.TYPES.EMITTER).emit(s.EVENTS.REFRESH_PAGE, i), this.closeDialog();
            }
        }
    }
});