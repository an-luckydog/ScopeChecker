var t = require("../../b/helpers/interopRequireDefault"), e = require("../../b/helpers/objectSpread2");

require("../../b/helpers/Arrayincludes");

var n = t(require("../../b/regenerator")), i = require("../../b/helpers/asyncToGenerator"), s = require("../../miniprogram_npm/@limo/container/behaviors/index"), r = t(require("../../commons/component")), a = require("../../commons/constants"), u = require("./spec"), o = require("./mutex"), c = require("./factory"), d = t(require("../../commons/behaviors/tradeDish")), l = function(t) {
    var e = t.currentTarget.dataset || {};
    return {
        type: e.type,
        groupId: e.groupid,
        id: e.id,
        name: e.name
    };
};

(0, r.default)({
    behaviors: [ d.default, s.commonBehavior, s.limoShim ],
    properties: {
        spuId: {
            type: String,
            value: ""
        },
        cartDishInfo: {
            type: Object,
            value: {}
        },
        autoScroll: {
            type: Boolean,
            value: !1
        },
        callbackInfo: {
            type: Object,
            value: {}
        },
        addType: {
            type: Number,
            value: 0
        },
        extraParams: {
            type: Object,
            value: {}
        },
        panelType: {
            type: String,
            value: ""
        }
    },
    lifetimes: {
        ready: function() {
            var t;
            this.initData(), null == (t = this.entity) || t.get(a.TYPES.EMITTER).on("DISH_PANEL_REFRESH", this.refreshPanel, this);
        },
        detached: function() {
            var t;
            null == (t = this.entity) || t.get(a.TYPES.EMITTER).off("DISH_PANEL_REFRESH", this.refreshPanel, this);
        }
    },
    data: {
        skuId: "",
        dishInfo: {},
        addDishInfo: {},
        clusters: [],
        itemWholeLine: !1,
        isLoading: !0,
        showRemark: !1
    },
    observers: {
        "clusters.**, skuId": function(t, e) {
            this.refreshPanel(t, e);
        },
        "dishInfo.remarkSwitch, addType": function(t, e) {
            this.setData({
                showRemark: t && e === a.SPEC_ADD_TYPE.CART
            });
        }
    },
    methods: {
        extractDishInfo: function(t) {
            var e = this.data, n = e.addType, i = e.cartDishInfo, s = e.extraParams, r = t.spuId, a = t.currentPrice, u = t.originalPrice, o = t.desc, d = t.detailDesc, l = t.dishType, h = t.incBoughtCount, p = t.minBoughtCount, f = t.maxBoughtCount, m = t.name, g = t.pic, I = t.status, D = t.unit, k = t.saleQuantity, v = t.marketingLabel, S = t.remarkSwitch, P = t.defaultRemark, y = t.showRecommendPairing, T = null != i && i.skuId ? i.skuId : "", C = null != i && i.count ? i.count : p || "1";
            return this.instance = (0, c.getSpecInstance)(n, this.entity, t), {
                spuId: r,
                extendList: s.extendList,
                currentPrice: a,
                originalPrice: u,
                desc: o,
                detailDesc: d,
                dishType: l,
                incBoughtCount: h,
                minBoughtCount: p,
                maxBoughtCount: f,
                name: m,
                pic: g,
                status: I,
                unit: D,
                saleQuantity: k,
                cartSkuId: T,
                cartCount: C,
                marketingLabel: v,
                addType: this.instance.buttonText,
                hideOperation: this.instance.hideOperation,
                remarkSwitch: S,
                defaultRemark: P,
                showRecommendPairing: y
            };
        },
        initData: function() {
            var t = this;
            return i(n.default.mark(function e() {
                var i, s, r, o, c, d, l, h, p, f, m, g, I, D, k, v, S;
                return n.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return i = t.data, s = i.isLoading, r = i.addType, o = i.spuId, c = i.cartDishInfo, 
                        d = i.extraParams, s || t.setData({
                            isLoading: !0
                        }), e.next = 4, t.entity.get(a.TYPES.DISH).getSpecDetail(o, d);

                      case 4:
                        if (l = e.sent) {
                            e.next = 7;
                            break;
                        }
                        return e.abrupt("return", void t.setData({
                            isLoading: !1,
                            dishInfo: {}
                        }));

                      case 7:
                        t.orgDish = l, h = t.extractDishInfo(l), p = l.specs, f = p.find(function(t) {
                            return t.skuId === (null == c ? void 0 : c.skuId);
                        }) || p.find(function(t) {
                            var e;
                            return t.defaultSelected && 0 != +(null != (e = t.stockCount) ? e : -1);
                        }) || p[0] || {}, m = f.skuId, g = void 0 === m ? "" : m, I = c && Object.keys(c).length > 0 ? (0, 
                        u.getCartAttrs)(c) : void 0, D = (0, u.initRenderCluster)(t.orgDish, I, g, t.instance.methodPrice), 
                        k = D.clusters, v = D.itemWholeLine, S = {
                            skuId: g,
                            dishInfo: h,
                            clusters: k,
                            itemWholeLine: v,
                            isLoading: !1
                        }, l.plugins && r === a.SPEC_ADD_TYPE.CART && (S.plugins = l.plugins, S.updatedPlugins = (null == c ? void 0 : c.plugins) || {}), 
                        t.setData(S, function() {
                            t.entity.get(a.TYPES.DISH).panelSuccess(o);
                        });

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        refreshPanel: function(t, e) {
            t = t || this.data.clusters, e = e || this.data.skuId, this.setData({
                addDishInfo: this.getAddDishInfos(e, t)
            });
        },
        isValidNumber: function(t) {
            return /^-?\d+(\.\d+)?$/.test(t);
        },
        getAddDishInfos: function(t, n) {
            var i, s = this.orgDish, r = s.specs, o = s.unit, c = null == r ? void 0 : r.find(function(e) {
                return (null == e ? void 0 : e.skuId) === t;
            });
            if (!c) return {};
            var d = c.stockCount, l = c.extendList, h = c.costPointCount, p = (0, u.getAllSelectedAttrs)(n), f = (0, 
            u.getSpecDesc)(this.orgDish, t, n), m = f.desc, g = f.dishName, I = ((this.data.extraParams || {}).extendList || []).filter(function(t) {
                return a.COUPON_EXTENDS.includes(t[0]);
            }), D = {
                skuId: t,
                addable: (0, u.checkClusterStatus)(n),
                priceInfo: e(e({}, this.instance.getPrice(c, p)), {}, {
                    unit: o,
                    costPointCount: h
                }),
                desc: m,
                stockCount: d,
                specName: g,
                tags: ((null == (i = this.orgDish) ? void 0 : i.tags) || []).concat((null == c ? void 0 : c.tags) || []),
                extendList: (l || []).concat(I)
            };
            return D = this.getPluginDesc(D);
        },
        selectAttr: function(t) {
            this.operateAttr(t, 1);
        },
        reduceAttr: function(t) {
            this.operateAttr(t, -1);
        },
        operateAttr: function(t, e) {
            var n = l(t), i = n.id, s = n.name, r = n.type, o = this.data, c = o.clusters, d = o.spuId, h = o.skuId;
            if (+r === a.ATTR_TYPE.SPEC) {
                if (i === h) return;
                this.setData({
                    skuId: i
                });
            }
            this.entity.get(a.TYPES.LX).sendMC("b_saaspay_iehgo9l3_mc", null, null, {
                spuId: d,
                groupType: r,
                skuId: i,
                name: s,
                op: e < 0 ? "reduce" : ""
            }), this.setData({
                clusters: (0, u.updateAttrStatus)(c, n, e)
            });
        },
        mutexClick: function(t) {
            var e = l(t), n = this.data.clusters, i = (0, u.getAllSelectedAttrs)(n), s = (0, 
            o.dealAttrMutexConfirm)(i, n, e);
            s && this.entity.get(a.TYPES.LIMO).limoShowModal({
                content: s,
                confirmText: "确定",
                showCancel: !1
            });
        },
        confirmDish: function(t) {
            var s = this;
            return i(n.default.mark(function i() {
                var r, o, c, d, l, h, p, f, m, g, I, D, k, v, S, P, y, T, C, b, E, x;
                return n.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (r = t.detail || {}, o = r.count, c = void 0 === o ? 0 : o, d = r.dishRemarks, 
                        l = void 0 === d ? [] : d, h = s.data, p = h.spuId, f = h.skuId, m = h.clusters, 
                        g = h.addDishInfo, I = h.cartDishInfo, D = h.callbackInfo, k = h.dishInfo, v = h.panelType, 
                        (0, u.checkClusterStatus)(m, !0)) {
                            n.next = 3;
                            break;
                        }
                        return n.abrupt("return");

                      case 3:
                        return S = g.priceInfo, P = g.extendList, y = k.cartCount, T = void 0 === y ? 0 : y, 
                        C = (0, u.transSpecCartDish)(s.orgDish, {
                            spuId: p,
                            skuId: f,
                            clusters: m,
                            count: c,
                            dishRemarks: l
                        }), P && (C.extendList = P), C = s.confirmDishPlugin(C), b = (null == I ? void 0 : I.skuId) === f ? c - T : c, 
                        n.next = 9, s.instance.confirm(C, e(e({}, I), {}, {
                            callbackInfo: D,
                            deltaCount: b,
                            priceInfo: S
                        }));

                      case 9:
                        E = n.sent, "add-multi-panel" === v ? E && (null == (x = s.entity) || x.get(a.TYPES.LIMO).limoCloseDialog("add-multi-panel")) : E && s.entity.get(a.TYPES.DISH).closeDish(a.DISH_TYPE.COMPLEX_SPU);

                      case 11:
                      case "end":
                        return n.stop();
                    }
                }, i);
            }))();
        }
    }
});