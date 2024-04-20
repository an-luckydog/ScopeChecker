var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, require("../b/helpers/Arrayincludes");

var t, n = require("../b/helpers/objectSpread2"), i = e(require("../b/regenerator")), o = require("../b/helpers/asyncToGenerator"), r = require("../b/helpers/classCallCheck"), s = require("../b/helpers/createClass"), u = e(require("../miniprogram_npm/@limo/core/index.js")), a = require("../commons/types"), c = require("../lib/accountBindUtil"), h = require("../constants/bizConstants"), p = require("../commons/constants"), l = require("../commons/inversify"), d = e(require("../extensions/logic/member")), f = (0, 
l.injectable)()(t = function(e) {
    return (0, l.inject)(p.TYPES.REQUEST)(e, void 0, 0);
}(t = function(e) {
    return (0, l.inject)(p.TYPES.OPTIONS)(e, void 0, 1);
}(t = function(e) {
    return (0, l.inject)(p.TYPES.EMITTER)(e, void 0, 2);
}(t = function(e) {
    return (0, l.inject)(p.EVENTS.GET_USER_GEO)(e, void 0, 3);
}(t = function(e) {
    return (0, l.inject)(p.TYPES.LIMO_FACTORY)(e, void 0, 4);
}(t = function(e) {
    return (0, l.inject)(p.TYPES.MEMBER)(e, void 0, 5);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ void 0 === a.Request ? Object : a.Request, "undefined" == typeof Map ? Object : Map, "undefined" == typeof EventEmitter ? Object : EventEmitter, Object, Object, void 0 === d.default ? Object : d.default ])(t = function() {
    function e(t, n, i, o, s, u) {
        r(this, e), this.request = t, this.options = n, this.emitter = i, this.getUserGeo = o, 
        this.limo = s, this.member = u, this.newLogin = !1, this.loginStatus = !1, this.coupons = {}, 
        this.needToast = !1, this.couponCountMap = {}, this.couponCache = void 0, this.isRequesting = void 0, 
        this.fetchedAll = !0, this.curCardId = "";
    }
    var t, a, l, d, f;
    return s(e, [ {
        key: "fetchDealCoupon",
        value: (f = o(i.default.mark(function e() {
            var t, n;
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = [], e.prev = 1, e.next = 4, this.requestCouponInfo("/@biz/dealCoupon/couponInfo");

                  case 4:
                    n = e.sent, this.loginStatus = !0, n && n.itemList.length ? (t.push(n), this.coupons = t.flatMap(function(e) {
                        return e.itemList;
                    }).reduce(function(e, t) {
                        var n = t.dealId, i = t.count;
                        return e[n] = i, e;
                    }, {})) : (this.needToast && (u.default.getLimoRuntime().showToast({
                        title: "您还没有可用的团购券哦",
                        icon: "none"
                    }), this.needToast = !1), this.coupons = {}), this.emitter.emit(p.EVENTS.DEAL_COUPON_CATEGORY, t), 
                    e.next = 11;
                    break;

                  case 8:
                    return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", (console.error(e.t0), !1));

                  case 11:
                    return e.abrupt("return", t.length > 0);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 8 ] ]);
        })), function() {
            return f.apply(this, arguments);
        })
    }, {
        key: "fetchFirstPage",
        value: (d = o(i.default.mark(function e() {
            var t, n, o, r;
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this.member.cardId) {
                        e.next = 16;
                        break;
                    }
                    if (this.member.cardId !== this.curCardId && (this.clearDealCouponCate(), this.curCardId = this.member.cardId), 
                    !this.couponCache && !this.isRequesting) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", this.couponCache);

                  case 3:
                    return e.prev = 3, this.isRequesting = this.requestCouponInfo("/@biz/couponAssistantInfo"), 
                    e.next = 7, this.isRequesting;

                  case 7:
                    return t = e.sent, this.couponCache = t, o = (n = t || {}).itemList, r = n.totalItemSize, 
                    e.abrupt("return", (this.resolveCouponDish(o), r && (this.fetchedAll = !!(o && o.length >= r)), 
                    this.isRequesting = void 0, t));

                  case 13:
                    e.prev = 13, e.t0 = e.catch(3), this.isRequesting = void 0;

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 3, 13 ] ]);
        })), function() {
            return d.apply(this, arguments);
        })
    }, {
        key: "fetchNextPage",
        value: (l = o(i.default.mark(function e() {
            var t, o, r, s, u, a, c, h, p;
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this.couponCache) {
                        e.next = 5;
                        break;
                    }
                    return e.next = 3, this.fetchFirstPage();

                  case 3:
                    return t = e.sent, e.abrupt("return", t ? t.itemList : void 0);

                  case 5:
                    if (this.fetchedAll || this.isRequesting) {
                        e.next = 23;
                        break;
                    }
                    return e.prev = 6, o = this.couponCache, r = o.cacheId, s = o.itemList, this.isRequesting = this.requestCouponInfo("/@biz/couponAssistantInfo", {
                        cacheId: r,
                        offset: (s || []).length
                    }), e.next = 11, this.isRequesting;

                  case 11:
                    if (u = e.sent) {
                        e.next = 14;
                        break;
                    }
                    return e.abrupt("return");

                  case 14:
                    return a = u.itemList, u.cacheId !== r ? this.couponCache = u : a && a.length && (this.couponCache = n(n({}, this.couponCache), {}, {
                        itemList: s.concat(a)
                    })), c = this.couponCache, h = c.itemList, p = c.totalItemSize, e.abrupt("return", (this.resolveCouponDish(h), 
                    p && (this.fetchedAll = !!(h && h.length >= p)), this.isRequesting = void 0, h));

                  case 20:
                    e.prev = 20, e.t0 = e.catch(6), this.isRequesting = void 0;

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 6, 20 ] ]);
        })), function() {
            return l.apply(this, arguments);
        })
    }, {
        key: "resolveCouponDish",
        value: function(e) {
            this.coupons = (e || []).reduce(function(e, t) {
                var n = t.couponInfo || {}, i = n.displayItemId, o = n.count;
                return i && (e[i] = o), e;
            }, {});
        }
    }, {
        key: "requestCouponInfo",
        value: (a = o(i.default.mark(function e(t) {
            var o, r, s, u, a, c, h = arguments;
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return o = h.length > 1 && void 0 !== h[1] ? h[1] : {}, e.next = 3, this.getUserGeo({
                        hiddenModalTag: !0
                    });

                  case 3:
                    return r = e.sent, s = this.options.get("bizType"), e.next = 7, this.request.post(t, n({
                        userGeo: r,
                        cardId: this.curCardId || this.member.cardId
                    }, o));

                  case 7:
                    if (u = e.sent, a = u.code, c = u.data, 200 === a && s === this.options.get("bizType")) {
                        e.next = 12;
                        break;
                    }
                    throw Error();

                  case 12:
                    return e.abrupt("return", c);

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return a.apply(this, arguments);
        })
    }, {
        key: "toLogin",
        value: function() {
            this.newLogin = !0, this.needToast = !0, (0, c.gotoThirdLoginPath)(h.ACCOUNT_BIND_CODE.MT, !1, !1);
        }
    }, {
        key: "loginCheck",
        value: (t = o(i.default.mark(function e() {
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    this.newLogin && !this.loginStatus && (this.emitter.emit(p.EVENTS.REFRESH_PAGE, {}, !1), 
                    this.newLogin = !1);

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return t.apply(this, arguments);
        })
    }, {
        key: "check",
        value: function(e) {
            var t = e.count, n = e.delCount, i = this.getDisplayId(e);
            if (!i) return !0;
            var o = this.coupons[i];
            return !(o < (this.couponCountMap[i] || 0) + t - n && (o && u.default.getLimoRuntime().showToast({
                title: "限".concat(o, "份，不能再选了"),
                icon: "none"
            }), 1));
        }
    }, {
        key: "clearDealCouponCate",
        value: function() {
            this.coupons = {}, this.couponCache = void 0, this.emitter.emit(p.EVENTS.DEAL_COUPON_CATEGORY, []), 
            this.emitter.emit(p.EVENTS.DEAL_COUPON_CHANGE, {
                countMap: {},
                cateCount: 0
            });
        }
    }, {
        key: "updateDealCouponCount",
        value: function(e) {
            var t = this, n = 0, i = {};
            e.forEach(function(e) {
                var o = t.getDisplayId(e);
                if (o) {
                    var r = e.count;
                    i[o] = (i[o] || 0) + r, n += r;
                }
            }), this.couponCountMap = i, this.emitter.emit(p.EVENTS.DEAL_COUPON_CHANGE, {
                countMap: i,
                cateCount: n
            });
        }
    }, {
        key: "getDisplayId",
        value: function(e) {
            var t = (e.extendList || []).find(function(e) {
                return p.COUPON_EXTENDS.includes(e[0]);
            });
            return t ? (t[1] || {}).displayId : "";
        }
    }, {
        key: "showCouponPanel",
        value: function() {
            var e = this;
            this.isRequesting ? (u.default.getLimoRuntime().showLoading({
                title: "加载中"
            }), this.isRequesting.then(function() {
                e.openCouponPanel(), u.default.getLimoRuntime().hideLoading();
            }).catch(function() {
                u.default.getLimoRuntime().hideLoading();
            })) : this.openCouponPanel();
        }
    }, {
        key: "openCouponPanel",
        value: function() {
            this.limo().limoShowDialog("coupon-panel", {}, {
                position: "bottom",
                maskClosable: !0,
                header: {
                    closeable: !0,
                    title: "优惠券",
                    backgroundColor: "#f4f4f4"
                }
            });
        }
    }, {
        key: "toCouponListPage",
        value: function() {
            var e = (this.couponCache || {}).url;
            e && u.default.getLimoRuntime().navigateTo({
                url: e
            });
        }
    } ]), e;
}()) || t) || t) || t) || t) || t) || t) || t) || t) || t;

exports.default = f;