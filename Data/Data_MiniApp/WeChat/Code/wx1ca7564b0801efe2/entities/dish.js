var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = require("../b/helpers/defineProperty"), n = require("../b/helpers/objectSpread2"), a = e(require("../b/regenerator")), i = require("../b/helpers/objectWithoutProperties"), s = require("../b/helpers/asyncToGenerator"), u = require("../b/helpers/classCallCheck"), c = require("../b/helpers/createClass"), o = require("../commons/inversify"), h = require("../commons/constants"), d = require("../miniprogram_npm/@mtfe/rms-sdk/index.js"), l = e(require("../lib/mix/log")), p = [ "disableCache", "id" ], f = [ "disableCache", "id" ], m = [ "extendList" ], v = (0, 
o.injectable)()(t = function(e) {
    return (0, o.inject)(h.TYPES.LIMO_FACTORY)(e, void 0, 0);
}(t = function(e) {
    return (0, o.inject)(h.TYPES.EMITTER)(e, void 0, 1);
}(t = function(e) {
    return (0, o.inject)(h.TYPES.REQUEST)(e, void 0, 2);
}(t = function(e) {
    return (0, o.inject)(h.EVENTS.GET_USER_GEO)(e, void 0, 3);
}(t = function(e) {
    return (0, o.inject)(h.TYPES.OPTIONS)(e, void 0, 4);
}(t = function(e) {
    return (0, o.inject)(h.TYPES.TRIANGLE)(e, void 0, 5);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ Function, "undefined" == typeof EventEmitter ? Object : EventEmitter, "undefined" == typeof Request ? Object : Request, Object, "undefined" == typeof Map ? Object : Map, void 0 ])(t = function() {
    function e(t, r, n, a, i, s) {
        u(this, e), this.limoFactory = t, this.emitter = r, this.request = n, this.getUserGeo = a, 
        this.options = i, this.triangle = s, this.dishCache = void 0, this.dishReport = void 0, 
        this.recommendMatchCache = void 0, this.dishCache = new Map(), this.dishReport = new Map(), 
        this.recommendMatchCache = new Map();
    }
    var t, o, v, g, b, k, y, S;
    return c(e, [ {
        key: "getSpecDetail",
        value: (S = s(a.default.mark(function e(t) {
            var r, n, s, u, c, o, h = arguments;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = h.length > 1 && void 0 !== h[1] ? h[1] : {}, n = this.handleParams(t, r), 
                    s = n.disableCache, u = n.id, c = i(n, p), o = "/@biz/dish/dishdetail", !s) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 5, this.getRawDetail(o, c);

                  case 5:
                    e.t0 = e.sent, e.next = 11;
                    break;

                  case 8:
                    return e.next = 10, this.getDetail(o, c, "".concat(u).concat(c.focusSkuId ? "-".concat(c.focusSkuId) : ""));

                  case 10:
                    e.t0 = e.sent;

                  case 11:
                    return e.abrupt("return", e.t0);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return S.apply(this, arguments);
        })
    }, {
        key: "getPkgDetail",
        value: (y = s(a.default.mark(function e(t) {
            var r, n, s, u, c, o, h = arguments;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = h.length > 1 && void 0 !== h[1] ? h[1] : {}, n = this.handleParams(t, r), 
                    s = n.disableCache, u = n.id, c = i(n, f), o = "/@biz/dish/pkgdetail", !s) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 5, this.getRawDetail(o, c);

                  case 5:
                    e.t0 = e.sent, e.next = 11;
                    break;

                  case 8:
                    return e.next = 10, this.getDetail(o, c, u);

                  case 10:
                    e.t0 = e.sent;

                  case 11:
                    return e.abrupt("return", e.t0);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return y.apply(this, arguments);
        })
    }, {
        key: "handleParams",
        value: function(t, r) {
            var a = r.extendList, s = i(r, m);
            return n(n({
                spuId: t
            }, s), {}, {
                id: "".concat(e.getId(n({
                    spuId: t
                }, r))).concat(t),
                relateExtend: (a || []).map(function(e) {
                    return e[0];
                })
            });
        }
    }, {
        key: "getSpuReview",
        value: (k = s(a.default.mark(function e(t) {
            var r, n, i;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.request.post("/@biz/dish/dishreview", {
                        pageNo: 1,
                        pageSize: 10,
                        spuId: t
                    });

                  case 2:
                    return n = e.sent, i = null, e.abrupt("return", (200 === (null == n || null == (r = n.status) ? void 0 : r.code) && (i = n.data), 
                    i));

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return k.apply(this, arguments);
        })
    }, {
        key: "panelSuccess",
        value: function(e) {
            var t = this.dishReport.get(e);
            t && (t.success(), this.dishReport.delete(e));
        }
    }, {
        key: "addPackageSpecDish",
        value: function(e, t) {
            this.emitter.emit(h.EVENTS.PACKAGE_SPEC_DISH, {
                dish: e,
                callbackInfo: t
            });
        }
    }, {
        key: "getDishSaleTime",
        value: (b = s(a.default.mark(function e(t) {
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.request.post("/@biz/menu/timedish", {
                        spuId: t
                    });

                  case 2:
                    return e.abrupt("return", e.sent);

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return b.apply(this, arguments);
        })
    }, {
        key: "getDetail",
        value: (g = s(a.default.mark(function e(t, r, n) {
            var i;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this.dishCache.has(n)) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", this.dishCache.get(n));

                  case 2:
                    return e.next = 4, this.getRawDetail(t, r);

                  case 4:
                    return i = e.sent, e.abrupt("return", (i && this.dishCache.set(n, i), i));

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, t, r) {
            return g.apply(this, arguments);
        })
    }, {
        key: "setStaticDish",
        value: function(e) {
            this.dishCache.set("static-".concat(e.spuId), e);
        }
    }, {
        key: "getStaticDish",
        value: function(e) {
            if (this.dishCache.has("static-".concat(e))) return this.dishCache.get("static-".concat(e));
        }
    }, {
        key: "getRawDetail",
        value: (v = s(a.default.mark(function e(t, r) {
            var i, s, u, c, o, h, p;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i = this.options.get("addressId") || "", e.next = 3, this.getUserGeo({
                        hiddenModalTag: !0
                    });

                  case 3:
                    return s = e.sent, u = new d.Transaction(this.triangle.getReportKey(t, this.options)), 
                    c = r.spuId, e.prev = 6, e.next = 9, this.request.post(t, n({
                        userGeo: s,
                        addressId: i
                    }, r));

                  case 9:
                    if ((o = e.sent) && 200 === o.code) {
                        e.next = 12;
                        break;
                    }
                    throw u.fail(null != (h = null == o ? void 0 : o.code) ? h : 500), o;

                  case 12:
                    return p = o.data, e.abrupt("return", (this.dishReport.set(c, u), p));

                  case 16:
                    return e.prev = 16, e.t0 = e.catch(6), e.abrupt("return", (l.default.addError("菜品详情接口错误", "error:".concat(JSON.stringify(null != e.t0 ? e.t0 : ""))), 
                    null));

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 6, 16 ] ]);
        })), function(e, t) {
            return v.apply(this, arguments);
        })
    }, {
        key: "getDishPanelType",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.DISH_TYPE.DEFAULT, t = "";
            return +e === h.DISH_TYPE.SIMPLE_SPU || +e === h.DISH_TYPE.COMPLEX_SPU ? t = "multi-spec-panel" : +e === h.DISH_TYPE.COMPLEX_COMBO || +e === h.DISH_TYPE.SIMPLE_COMBO ? t = "package-dish-panel" : +e === h.DISH_TYPE.STATIC_SPU && (t = "static-dish-panel"), 
            t;
        }
    }, {
        key: "openDish",
        value: function(e, t) {
            var r, n = this.getDishPanelType(e), a = (t || {}).spuId;
            n && a && (null == (r = this.limoFactory()) || r.limoShowDialog(n, t, {
                position: "bottom",
                maskClosable: !0
            }));
        }
    }, {
        key: "closeDish",
        value: function(e) {
            var t, r = this.getDishPanelType(e);
            null == (t = this.limoFactory()) || t.limoCloseDialog(r);
        }
    }, {
        key: "clearCache",
        value: function() {
            this.dishCache.clear();
        }
    }, {
        key: "confirmRemark",
        value: (o = s(a.default.mark(function e(t) {
            var r, n, i, s;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = this.options.get("poiId") || "", e.next = 3, this.request.post("/remark/confirm", {
                        shopId: r,
                        dishRemarks: t
                    });

                  case 3:
                    return n = e.sent, i = n.code, s = n.message, e.abrupt("return", 200 === i ? "" : s || "系统错误");

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return o.apply(this, arguments);
        })
    }, {
        key: "getRecommendMatchDish",
        value: (t = s(a.default.mark(function e(t) {
            var n, i, s, u, c, o, d, l, p, f, m, v, g;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = t.spuId, i = t.cartOrderId, s = t.categoriesId, u = t.pageFrom, l = this.options.get("peopleCount") || "", 
                    p = "recommend-match-".concat(s), !(f = this.recommendMatchCache.get(p))) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return", f[n]);

                  case 4:
                    return e.next = 6, this.request.post("/@biz/dish/relateRecommend", {
                        peopleCount: l,
                        cartOrderId: i,
                        dishSpuId: n,
                        pageFrom: u
                    });

                  case 6:
                    return m = e.sent, v = m.code, g = m.data, e.abrupt("return", 200 === v && (null != g && null != (c = g.matchSingleDish) && c.length || null != (o = g.matchExistCombo) && o.length || null != (d = g.matchSmartCombo) && d.length) ? (this.recommendMatchCache.set(p, r({}, n, g)), 
                    this.emitter.emit(h.EVENTS.RECOMMEND_MATCH_DISH), g) : void 0);

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return t.apply(this, arguments);
        })
    } ], [ {
        key: "getId",
        value: function(e) {
            var t;
            return e.extendList && e.extendList.length && (t = e.extendList.map(function(e) {
                return e && e[1] && e[1].displayId || "";
            }).join("")), t || e.spuId;
        }
    } ]), e;
}()) || t) || t) || t) || t) || t) || t) || t) || t) || t;

exports.default = v;