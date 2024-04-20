var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = exports.CouponSelectStatus = void 0;

var o, t = e(require("../../../b/regenerator")), n = require("../../../b/helpers/asyncToGenerator"), u = require("../../../b/helpers/objectSpread2"), s = require("../../../b/helpers/classCallCheck"), i = require("../../../b/helpers/createClass"), r = e(require("../../../api/rmsStorage")), p = e(require("../../../lib/mix/toast")), l = require("../../cartHelper"), a = require("../../../constants/bizConstants"), d = ((o = {})[o.NOT_SELECTED = 0] = "NOT_SELECTED", 
o[o.SELECTED = 1] = "SELECTED", o);

exports.CouponSelectStatus = d;

var c = new (function() {
    function e() {
        s(this, e), this.grouponCouponModel = void 0, this.dealCoupons = [], this.selectedCoupons = [], 
        this.applyCouponId = null, this.cancelCouponId = null, this.autoUseDealCoupon = !1, 
        this.grouponDishInfo = {}, this.shopId = "", this.tableNum = "", this.isFirstShowToast = !0, 
        this.pageService = void 0, this.couponInfoIndexMap = {}, this.usedMemberCouponCode = [], 
        this.currentMemberCouponId = "";
    }
    var o;
    return i(e, [ {
        key: "findCurrentCouponInfo",
        value: function(e, o) {
            var t = {};
            return e.forEach(function(e) {
                var o = null == e ? void 0 : e.couponInfo;
                (null == o ? void 0 : o.src) === a.ACTIVITY_SRC.MEMBER && o && (t[null == o ? void 0 : o.displayItemId] = o);
            }), t[o];
        }
    }, {
        key: "setSelectedCoupon",
        value: function(e) {
            this.selectedCoupons.push(e);
        }
    }, {
        key: "setSelectedCouponToStore",
        value: function() {
            r.default.setMemberSelectedCoupon(this.shopId, this.tableNum, JSON.stringify(this.selectedCoupons));
        }
    }, {
        key: "initSelectedCouponFromStore",
        value: function() {
            var e = r.default.getMemberSelectedCoupon(this.shopId, this.tableNum);
            e && (this.selectedCoupons = JSON.parse(e));
        }
    }, {
        key: "setSelectedCoupons",
        value: function(e) {
            e && (this.selectedCoupons = e, this.setSelectedCouponToStore());
        }
    }, {
        key: "getSelectedCoupons",
        value: function() {
            return this.selectedCoupons;
        }
    }, {
        key: "getSelectedCouponFromOrder",
        value: function(e, o) {
            var t = r.default.getMemberSelectedCoupon(e, o), n = [];
            if (t) return JSON.parse(t).forEach(function(e) {
                n.push(e.couponId);
            }), n;
        }
    }, {
        key: "checkCouponInfoIndexMapIndex",
        value: function(e, o) {
            var t = this, n = {};
            return this.selectedCoupons.forEach(function(e) {
                n[e.couponId] = 1, t.usedMemberCouponCode.push(e.couponId);
            }), o.couponCodes[e] && n[o.couponCodes[e]] ? this.checkCouponInfoIndexMapIndex(e + 1, o) : e;
        }
    }, {
        key: "clearSelectedCoupon",
        value: function() {
            this.selectedCoupons = [], this.couponInfoIndexMap = {}, this.currentMemberCouponId = "", 
            this.setSelectedCouponToStore();
        }
    }, {
        key: "getSelectedCoupon",
        value: function(e) {
            var o = e.displayItemId.toString();
            this.couponInfoIndexMap[o] >= 0 ? this.couponInfoIndexMap[o] += 1 : this.couponInfoIndexMap[o] = 0;
            var t = u({}, e), n = this.checkCouponInfoIndexMapIndex(this.couponInfoIndexMap[o], t);
            return {
                couponId: e.couponCodes[n],
                itemNo: "",
                couponGroupInfo: {
                    referId: e.displayItemId,
                    count: e.count,
                    type: e.type,
                    subType: e.subType,
                    src: e.src,
                    couponCodes: e.couponCodes
                }
            };
        }
    }, {
        key: "setSelectedCouponItemNo",
        value: function(e, o) {
            var t = this;
            this.selectedCoupons.forEach(function(n, u) {
                n.couponId === o && (t.selectedCoupons[u].itemNo = e);
            }), this.setSelectedCouponToStore();
        }
    }, {
        key: "delMemberCouponByCouponId",
        value: function(e) {
            var o = this, t = this.selectedCoupons.filter(function(t) {
                var n = t.couponGroupInfo.referId.toString();
                return t.couponId === e && o.couponInfoIndexMap[n] >= 0 && (o.couponInfoIndexMap[n] -= 1), 
                t.couponId !== e;
            });
            this.selectedCoupons = t, this.setSelectedCouponToStore();
        }
    }, {
        key: "delSelectedCoupon",
        value: function(e) {
            var o = this.selectedCoupons.filter(function(o) {
                return o.itemNo === e;
            });
            this.setSelectedCoupons(o);
        }
    }, {
        key: "setDealCoupons",
        value: function(e, o) {
            var t;
            this.applyCouponId = null, this.cancelCouponId = null, this.dealCoupons = JSON.parse(JSON.stringify(e)), 
            this.shopId && r.default.setDealCoupons(this.shopId, e), null == (t = this.pageService) || t.updateGrouponCouponSwiperModule(e, o);
        }
    }, {
        key: "getDealCoupons",
        value: function() {
            return this.dealCoupons;
        }
    }, {
        key: "setGrouponDishInfo",
        value: function(e) {
            this.grouponDishInfo = e, this.shopId && r.default.setGrouponDishInfo(this.shopId, e);
        }
    }, {
        key: "checkGrouponDishInfo",
        value: function(e) {
            return !("{}" !== JSON.stringify(this.grouponDishInfo) || !e.hiddenDish);
        }
    }, {
        key: "setGrouponDishInfoById",
        value: function(e, o) {
            this.grouponDishInfo[e] = o, this.setGrouponDishInfo(this.grouponDishInfo);
        }
    }, {
        key: "getApplyCouponId",
        value: function() {
            return this.applyCouponId;
        }
    }, {
        key: "setApplyCouponId",
        value: function(e) {
            this.applyCouponId = e;
        }
    }, {
        key: "getCancelCouponId",
        value: function() {
            return this.cancelCouponId;
        }
    }, {
        key: "setCancelCouponId",
        value: function(e) {
            this.cancelCouponId = e;
        }
    }, {
        key: "getAutoUseDealCoupon",
        value: function() {
            return this.autoUseDealCoupon;
        }
    }, {
        key: "setAutoUseDealCoupon",
        value: function(e) {
            this.autoUseDealCoupon = e;
        }
    }, {
        key: "updateGrouponDishInfo",
        value: function(e) {
            var o, t = this, n = {};
            null == e || null == (o = e.filter(function(e) {
                return e.selectStatus === d.SELECTED;
            })) || o.forEach(function(e) {
                var o = e.discountTempId;
                t.grouponDishInfo[o] && (n[o] = t.grouponDishInfo[o]);
            }), this.setGrouponDishInfo(n);
        }
    }, {
        key: "initDealCoupons",
        value: (o = n(t.default.mark(function e(o, n, u, s) {
            var i, p, l, a;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    this.shopId = o, this.tableNum = s, this.pageService = n, this.applyCouponId = null, 
                    this.cancelCouponId = null, this.isFirstShowToast = !0, this.grouponDishInfo = {};
                    try {
                        i = r.default.getDealCoupons(o), p = r.default.getGrouponDishInfo(o), null != i && i.length && null != u && u.length ? (l = null == i ? void 0 : i.filter(function(e) {
                            return e.selectStatus === d.SELECTED && !!p[e.discountTempId];
                        }).map(function(e) {
                            return e.discountTempId;
                        }), a = u.map(function(e) {
                            return l.indexOf(e.discountTempId) > -1 && (e.selectStatus = d.SELECTED), e;
                        }), this.setDealCoupons(a), this.setGrouponDishInfo(p)) : this.setDealCoupons(u || []);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        this.setDealCoupons([]);
                    }

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, t, n, u) {
            return o.apply(this, arguments);
        })
    }, {
        key: "setCurrentMemberCouponId",
        value: function(e) {
            this.currentMemberCouponId = e;
        }
    }, {
        key: "getCurrentMemberCouponId",
        value: function() {
            return this.currentMemberCouponId;
        }
    }, {
        key: "addMemberCouponToCart",
        value: function(e, o, t, n) {
            this.setSelectedCoupon(e), this.setCurrentMemberCouponId(e.couponId);
            var u = (0, l.getSingleSpu)(o, t);
            n && n(u);
        }
    }, {
        key: "addGrouponCouponDishToCart",
        value: function(e, o, t, n, u) {
            var s = this;
            if (o && t && e.length) {
                var i = (0, l.getSingleSpu)(o, t);
                this.setAutoUseDealCoupon(n), this.applyCouponId = e[0], n && e.forEach(function(e) {
                    var o = s.dealCoupons.findIndex(function(o) {
                        return o.discountTempId === e;
                    });
                    s.dealCoupons[o].selectStatus = d.SELECTED;
                }), u && u(i);
            }
        }
    }, {
        key: "autoUseCouponAddToCart",
        value: function(e, o, t, n, u) {
            var s, i, l = null == (s = this.dealCoupons) ? void 0 : s.filter(function(e) {
                var t;
                return "" + (null == e || null == (t = e.dishDTOS) || null == (t = t[0]) ? void 0 : t.skuId) === o;
            });
            if (!l || !l.length) return this.setAutoUseDealCoupon(!1), void (n && n());
            var a = r.default.getDishList(this.shopId);
            if (a) {
                var c = a[e], h = null == c || null == (i = c.skuMenuItems) ? void 0 : i.find(function(e) {
                    return e.skuId === o;
                }), C = null == l ? void 0 : l.filter(function(e) {
                    return e.selectStatus === d.NOT_SELECTED;
                });
                if (0 === C.length) this.showGrouponCountExceedToast(l.length), n && n(); else {
                    var f = C.map(function(e) {
                        return e.discountTempId;
                    }).splice(0, t);
                    f.length < t && this.showGrouponCountExceedToast(l.length), this.addGrouponCouponDishToCart(f, c, h, !0, u);
                }
            } else p.default.show({
                content: "抱歉，该券暂不可用"
            });
        }
    }, {
        key: "cancelDealCoupon",
        value: function(e, o) {
            var t, n;
            if ((null == (t = this.selectedCoupons) ? void 0 : t.length) > 0 && o && this.delMemberCouponByCouponId(e), 
            (null == (n = this.dealCoupons) ? void 0 : n.length) > 0) {
                var u = this.dealCoupons.findIndex(function(o) {
                    return o.discountTempId === e || o.code === e;
                }), s = this.dealCoupons;
                return s[u] && (s[u].selectStatus = 0), this.setCancelCouponId(e), this.setDealCoupons(s), 
                this.grouponDishInfo[e];
            }
        }
    }, {
        key: "recoverCouponStatus",
        value: function(e) {
            var o, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (null != (o = this.dealCoupons) && o.length) {
                var n = this.dealCoupons.map(function(o) {
                    return o.discountTempId === e ? o.selectStatus = d.NOT_SELECTED : o.discountTempId === t && (o.selectStatus = d.SELECTED), 
                    o;
                });
                this.setDealCoupons(n);
            }
        }
    }, {
        key: "showMTAccountToast",
        value: function(e, o) {
            var t = r.default.getIsToastFromMTLoginOnce();
            r.default.setIsToastFromMTLoginOnce(!1), t && !e && (!o || o.length <= 0) && p.default.show({
                content: "您还没有可用的团购券哦",
                duration: 3e3
            });
        }
    }, {
        key: "showGrouponCountExceedToast",
        value: function(e) {
            this.isFirstShowToast && p.default.show({
                content: "团购券限".concat(e, "份，超出后该菜品会按菜品售卖价计算"),
                duration: 3e3,
                icon: "none"
            }), this.isFirstShowToast = !1;
        }
    }, {
        key: "addCouponCartDish",
        value: function(e) {
            var o = this.dealCoupons, t = this.dealCoupons.findIndex(function(o) {
                return o.dealId === e && o.selectStatus === d.NOT_SELECTED;
            });
            t > -1 && (o[t].selectStatus = d.SELECTED, this.setDealCoupons(o), this.applyCouponId = o[t].discountTempId);
        }
    } ]), e;
}())();

exports.default = c;