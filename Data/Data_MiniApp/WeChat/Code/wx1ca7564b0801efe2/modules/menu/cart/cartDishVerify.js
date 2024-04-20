var t = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.handleUnverifyDish = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (Array.isArray(t) && t.length > 0) {
        var n = (0, f.getUnveriedDishText)(t);
        (0, l.default)({
            body: n,
            buttons: [ {
                text: o.CONFIRM_TEXT,
                type: "submit",
                callback: function() {}
            } ]
        });
    } else if (Array.isArray(e) && e.length > 0) {
        var r = (0, f.getUnveriedDishText)(e, !0);
        (0, l.default)({
            body: r,
            buttons: [ {
                text: o.CONFIRM_TEXT,
                type: "submit",
                callback: function() {}
            } ]
        });
    }
}, exports.verifyCartDish = function(t, e, n) {
    var u, i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], l = (0, 
    r.default)({});
    if (v = (0, r.default)([]), e && Object.keys(e).forEach(function(u) {
        var i, a = e[u], f = k(t[u.toString()], a, n, o);
        (null == f || null == (i = f.newCartSkuList) ? void 0 : i.length) > 0 && (l = r.default.set(l, u, f.newCartSkuList)), 
        n = f.cartDishSortMapList;
    }), !i) {
        var s = function(t, e, n) {
            var u = (0, r.default)({}), i = e;
            if (!Object.keys(e).length) return {
                resCartDishList: e,
                resCartDishSortMapList: n
            };
            Object.keys(e).sort(function(e, n) {
                return (0, f.judgePackageSpuDish)(t[n]) - (0, f.judgePackageSpuDish)(t[e]);
            }).forEach(function(o) {
                var a = t[o];
                e[o].forEach(function(t, e) {
                    var f = a.skuMenuItems.find(function(e) {
                        return e.skuId === t.skuId;
                    });
                    if (f) {
                        var l = a.incBoughtCount, s = -1 === a.minBoughtCount ? l : a.minBoughtCount, c = s, d = u, v = !1, g = t.count || 0, h = t.weight;
                        if (h && h > 0) S(d = C(d, a, t)) || (u = d, c = Number(t.count || 0) + l, v = !0); else if (Array.isArray(t.packages) && t.packages.length > 0) for (;c <= g && !S(d = b(d, f, t)); ) u = d, 
                        c += l, v = !0; else for (;c <= g; ) {
                            var m = c === s ? s : l;
                            d = I(d, f, m);
                            for (var p = 0; p < m; p++) d = C(d, a, t);
                            if (S(d)) break;
                            u = d, c += l, v = !0;
                        }
                        var k = v ? c - l : 0;
                        if (k !== t.count && (i = r.default.setIn(i, [ o, e, "count" ], k)), 0 === k) {
                            var N = n.findIndex(function(e) {
                                return e.goodsNo === t.itemNo;
                            });
                            n = r.default.flatMap(n, function(t, e) {
                                return e === N ? [] : t;
                            });
                        }
                    }
                });
            });
            var o = (0, r.default)({});
            return Object.keys(i).forEach(function(t) {
                var e = i[t].filter(function(t) {
                    return 0 !== t.count;
                });
                0 !== e.length && (o = r.default.set(o, t, e));
            }), {
                resCartDishList: o,
                resCartDishSortMapList: n
            };
        }(t, l, n), c = s.resCartDishList, d = s.resCartDishSortMapList;
        l = c, n = d;
    }
    var g = function(t, e) {
        var n = (0, r.default)([]);
        return Object.keys(t).forEach(function(r) {
            var u = t[r], i = e[r];
            i ? null == u || u.forEach(function(t) {
                i.find(function(e) {
                    return e.itemNo === t.itemNo;
                }) || (n = n.concat([ t ]));
            }) : null == u || u.forEach(function(t) {
                n = n.concat([ t ]);
            });
        }), n;
    }(e, l);
    return {
        cartDishList: (null == (u = (0, a.transferRefactorCartDishMapToCartDishList)(l, t)) ? void 0 : u.cartDishList) || (0, 
        r.default)({}),
        cartDishSortMapList: n,
        unVerfiedDish: g,
        promptDishes: v
    };
};

var e = require("../../../b/helpers/objectSpread2"), n = require("../../../b/helpers/typeof"), r = t(require("../../../miniprogram_npm/seamless-immutable/index.js")), u = t(require("../../MustDishSdk")), i = require("../../../lib/number"), o = require("../../../constants/bizConstants"), a = require("./cartDataTransfer"), f = require("../../cartHelper"), l = t(require("../../../lib/mix/confirm")), s = t(require("../grouponCoupon/GrouponCouponSdk")), c = require("../../panel/package/utils"), d = require("../../panel/spec/mutex"), v = (0, 
r.default)([]);

function g(t, e, u, i) {
    if (!(e && e.length || u && u.length)) return !0;
    if (!u) return !e;
    for (var a = 0, f = function(f) {
        var l = e[f];
        if (!l) return {
            v: !0
        };
        var g = u.find(function(t) {
            return t.groupId === l.groupId;
        });
        if (!g) return {
            v: !1
        };
        var h = -1 === (null == g ? void 0 : g.maxChoice) ? 1 / 0 : null == g ? void 0 : g.maxChoice, m = -1 === (null == g ? void 0 : g.minChoice) ? 0 : null == g ? void 0 : g.minChoice;
        if (void 0 === h || void 0 === m) return {
            v: !1
        };
        var p = null == (s = l.items) ? void 0 : s.reduce(function(t, e) {
            return t + Number(e.count);
        }, 0);
        if (p < m || p > h) return {
            v: !1
        };
        a += p;
        for (var k = function(e) {
            var n = l.items[e];
            if (!n) return {
                v: {
                    v: !1
                }
            };
            var a = null == u ? void 0 : u.findIndex(function(t) {
                return t.groupId === l.groupId;
            });
            if (void 0 === a || -1 === a) return {
                v: {
                    v: !1
                }
            };
            var f = r.default.getIn(u, [ a, "items" ]).find(function(t) {
                return t.id === n.id;
            }), s = (null == i || null == (d = i.tasteGroupSetting) ? void 0 : d.repeatChoice) || g.repeatChoice;
            if (n.count > 1 && s === o.TASTE_REPEAT_CHOICE.SINGLE) return {
                v: {
                    v: !1
                }
            };
            if (!f) return {
                v: {
                    v: !1
                }
            };
            if (f.soldOut) return {
                v: {
                    v: !1
                }
            };
            n.name !== f.name && (v = v.concat([ t ]));
            var c = -1 === f.maxBoughtCount ? 1 / 0 : f.maxBoughtCount, h = -1 === f.minBoughtCount ? 0 : f.minBoughtCount, m = -1 === f.stockCount ? 1 / 0 : f.stockCount, p = f.incBoughtCount, k = n.count;
            return k > c || k < h || k > m || (k - h) % p != 0 ? {
                v: {
                    v: !1
                }
            } : void 0;
        }, I = 0; I < (null == l || null == (c = l.items) ? void 0 : c.length); I++) {
            var C = k(I);
            if ("object" === n(C)) return C.v;
        }
    }, l = 0; l < e.length; l++) {
        var s, c, d, g = f(l);
        if ("object" === n(g)) return g.v;
    }
    if (null != i && i.tasteGroupSetting) {
        var h = i.tasteGroupSetting.maxChoice;
        if (a < (i.tasteGroupSetting.minChoice || o.NO_LIMIT_CHOICE) || a > (h && h !== o.NO_LIMIT_CHOICE ? h : 1 / 0)) return !1;
    }
    return !0;
}

function h(t, e, r, u) {
    if (!(e && e.length || r && r.length)) return !0;
    if (!r) return !e;
    for (var i = 0, a = function(u) {
        var o = e[u];
        if (!o) return {
            v: !0
        };
        var a = o.items.length;
        i += a;
        for (var f = function(e) {
            var n = o.items[e];
            if (!n) return {
                v: {
                    v: !1
                }
            };
            var u = r.find(function(t) {
                return t.groupId === o.groupId;
            });
            if (!u || !u.items) return {
                v: {
                    v: !1
                }
            };
            var i = u.items.find(function(t) {
                return t.id === n.id;
            });
            if (!i || i.soldOut) return {
                v: {
                    v: !1
                }
            };
            n.name !== i.name && (v = v.concat([ t ]));
        }, l = 0; l < a; l++) {
            var s = f(l);
            if ("object" === n(s)) return s.v;
        }
    }, f = 0; f < e.length; f++) {
        var l = a(f);
        if ("object" === n(l)) return l.v;
    }
    if (null != u && u.methodGroupSetting) {
        var s = u.methodGroupSetting.maxChoice;
        if (i < (u.methodGroupSetting.minChoice || o.NO_LIMIT_CHOICE) || i > (s && s !== o.NO_LIMIT_CHOICE ? s : 1 / 0)) return !1;
    } else {
        for (var c = function(t) {
            var n = r[t], u = -1 === (null == n ? void 0 : n.minChoice) ? 0 : null == n ? void 0 : n.minChoice;
            if (u > 0) {
                var i = e.find(function(t) {
                    return t.groupId === n.groupId;
                });
                if (!i) return {
                    v: !1
                };
                if (i.items.length < u) return {
                    v: !1
                };
            }
        }, d = 0; d < r.length; d++) {
            var g = c(d);
            if ("object" === n(g)) return g.v;
        }
        for (var h = function(t) {
            var n = e[t];
            if (!n) return {
                v: !0
            };
            var u = r.find(function(t) {
                return t.groupId === n.groupId;
            });
            if (!r) return {
                v: !1
            };
            var i = -1 === (null == u ? void 0 : u.maxChoice) ? 1 / 0 : null == u ? void 0 : u.maxChoice, o = -1 === (null == u ? void 0 : u.minChoice) ? 0 : null == u ? void 0 : u.minChoice;
            if (void 0 === i || void 0 === o) return {
                v: !1
            };
            var a = n.items.length;
            return a < o || a > i ? {
                v: !1
            } : void 0;
        }, m = 0; m < e.length; m++) {
            var p = h(m);
            if ("object" === n(p)) return p.v;
        }
    }
    return !0;
}

function m(t, e) {
    var n, r = (0, d.initAttrsMatrix)(t);
    if (e.skuId) {
        var u = (0, d.dealDefaultMutex)(r, {
            groupId: "",
            type: o.ATTR_TYPE.SPEC,
            id: e.skuId + ""
        }, n);
        n = u.mutexMatrix;
    }
    var i = !0, a = function(t, e) {
        if (!t) return [];
        i && t.map(function(t) {
            var u = t.items, o = t.groupId;
            i && u.forEach(function(t) {
                var u = t.id, a = (0, d.dealDefaultMutex)(r, {
                    groupId: o,
                    type: e,
                    id: u
                }, n);
                n = a.mutexMatrix, a.success || (i = !1);
            });
        });
    };
    return a(e.methods, o.ATTR_TYPE.METHOD), a(e.tastes, o.ATTR_TYPE.TASTE), i;
}

function p(t, i, o) {
    var a = t.skuMenuItems.find(function(t) {
        return t.skuId === i.skuId;
    }), f = function(t, e) {
        return e && t ? !t.validity || t.soldOut || t.canWeight && !e.weight || !t.canWeight && e.weight ? null : (t.skuName !== e.skuName && (v = v.concat([ e ]), 
        e = r.default.set(e, "skuName", t.skuName)), e = u.default.updateMustCount(e)) : null;
    }(a, i);
    return f = function(t, e) {
        if (!t || !e) return null;
        var n = -1 === t.minBoughtCount ? 0 : t.minBoughtCount, r = t.incBoughtCount;
        if (t.canWeight) {
            if ((e.weight || 0) < n) return null;
        } else if (((e.count || 0) - n) % r != 0) return null;
        return e;
    }(t, f), s.default.checkGrouponDishInfo(t) && !o ? null : f ? f = Array.isArray(f.packages) && f.packages.length > 0 ? function(t, u) {
        return function(t, u) {
            if (!t || !u) return null;
            var i = t.packageGroups, o = u.packages;
            if (!i || !o) return null;
            if (i.length !== o.length) return null;
            for (var a = 0; a < o.length; a++) {
                var f = o[a], l = i[a];
                if (Number(f.groupId) !== l.groupId) return null;
                if (f.groupName !== l.groupName) return null;
                var s = r.default.getIn(o, [ a, "groupSkus" ]), d = r.default.getIn(i, [ a, "groupSkus" ]);
                if (!s || !d) return null;
                for (var p = 0, k = function(t) {
                    var n = s[t], i = d.find(function(t) {
                        return t.skuId === n.skuId;
                    });
                    if (!n || !i) return {
                        v: null
                    };
                    if (n.skuName !== i.skuName && (v = v.concat(u), n = r.default.set(n, "skuName", i.skuName)), 
                    n.number !== i.count) return {
                        v: null
                    };
                    if (n.weight !== i.weight) return {
                        v: null
                    };
                    var o = -1 === i.stockCount ? 1 / 0 : i.stockCount;
                    if ((n.weight && n.weight > 0 ? n.count * n.weight : n.count * n.number) > o) return {
                        v: null
                    };
                    if (!h(u, n.methods, i.methods, null == i ? void 0 : i.spuGroupSetting)) return {
                        v: null
                    };
                    if (!g(u, n.tastes, i.tastes, null == i ? void 0 : i.spuGroupSetting)) return {
                        v: null
                    };
                    var f = r.default.set(i, "skuMenuItems", [ i ]);
                    if (f.specAttrs && f.specAttrs[0] && (f = r.default.set(f, "specAttrs", [ {
                        specValues: [ e(e({}, f.specAttrs[0]), {}, {
                            key: f.specAttrs[0].valueId + ""
                        }) ]
                    } ])), !m(f, n)) return {
                        v: null
                    };
                    n.count > 0 && (p += n.count), u = r.default.setIn(u, [ "packages", a, "groupSkus", t ], n);
                }, I = 0; I < s.length; I++) {
                    var C = k(I);
                    if ("object" === n(C)) return C.v;
                }
                for (var b = function(t) {
                    var e = d[t], n = s.find(function(t) {
                        return t.skuId === e.skuId;
                    });
                    if (e.required && (null == n || !n.count)) return {
                        v: null
                    };
                }, S = 0; S < d.length; S++) {
                    var N = b(S);
                    if ("object" === n(N)) return N.v;
                }
                var x = (0, c.getPackageGroupLimitNum)(l), E = x.minCount, M = x.maxCount;
                if (p < E || p > M) return null;
            }
            return u;
        }(t, u);
    }(a, f) : function(t, e) {
        if (!t || !e) return null;
        if (!h(e, e.methods, t.methods, t.spuGroupSetting)) return null;
        var n = t.skuMenuItems.find(function(t) {
            return t.skuId === e.skuId;
        });
        return n || (n = t), g(e, e.tastes, t.tastes, t.spuGroupSetting) && m(t, e) ? e : null;
    }(t, f) : null;
}

function k(t, e, n, u) {
    var i = (0, r.default)([]), o = (0, r.default)([]);
    if (t && t.validity && !t.soldOut ? e.forEach(function(e) {
        var n = p(t, e, u);
        n ? i = i.concat([ n ]) : o = o.concat([ e ]);
    }) : (o = e, i = (0, r.default)([])), i && 0 !== i.length) {
        var a = (0, r.default)({});
        i.forEach(function(t) {
            var e = t.skuId;
            if (a[e]) {
                var n = a[e].concat([ t ]);
                a = r.default.set(a, t.skuId, n);
            } else a = r.default.set(a, e, [ t ]);
        }), Object.keys(a).forEach(function(e) {
            var n = a[e], u = t.skuMenuItems.find(function(t) {
                return t.skuId === r.default.getIn(n, [ 0, "skuId" ]);
            });
            if (u) {
                var f = -1 === u.stockCount ? 1 / 0 : u.stockCount, l = -1 === u.limitCount ? 1 / 0 : u.limitCount, s = u.orderedCount;
                if (0 === f || 0 === l) o = o.concat(n), i = i.filter(function(t) {
                    return t.skuId !== r.default.getIn(n, [ 0, "skuId" ]);
                }); else if (t.canWeight) {
                    var c = n[0];
                    if (c.weight > f) {
                        var d = r.default.set(c, "weight", f), v = i.findIndex(function(t) {
                            return t.itemNo === d.itemNo;
                        });
                        i = r.default.set(i, v, d);
                    }
                } else for (var g = n.reduce(function(t, e) {
                    return t + (Number(e.count) || 0);
                }, 0), h = g > f, m = g + s > l, p = function() {
                    var t = n[0], e = t.count, u = i.findIndex(function(e) {
                        return e.itemNo === t.itemNo;
                    });
                    (function(a) {
                        if (a < e) {
                            var f = r.default.set(t, "count", e - a);
                            n = r.default.set(n, 0, f), i = r.default.set(i, u, f), g -= a;
                        } else n = n.slice(0), o = o.concat([ t ]), i = r.default.flatMap(i, function(t, e) {
                            return e === u ? [] : t;
                        }), g -= e;
                    })(h ? g - f : g + s - l), h = g > f, m = g + s > l;
                }; h || m; ) p();
            }
        });
    } else i = (0, r.default)([]);
    return o.length > 0 && o.forEach(function(t) {
        var e = n.findIndex(function(e) {
            return e.goodsNo === t.itemNo;
        });
        n = r.default.flatMap(n, function(t, n) {
            return n === e ? [] : t;
        });
    }), {
        newCartSkuList: i,
        cartDishSortMapList: n
    };
}

function I(t, e, n) {
    if (-1 !== e.stockCount) {
        var u = e.stockCount, i = e.skuId;
        if (t[i]) {
            var o = t[i], a = r.default.set(o, "count", Number(r.default.getIn(t, [ i, "count" ]) || 0) + n);
            t = r.default.set(t, i, a);
        } else {
            var f = (0, r.default)({
                stockCount: u,
                count: n
            });
            t = r.default.set(t, i, f);
        }
    }
    return t;
}

function C(t, e, n) {
    var u = n.tastes, i = e.tastes;
    if (!u || !u.length) return t;
    for (var o = function(e) {
        for (var n = u[e] || {}, o = function(e) {
            var u = r.default.getIn(n, [ "items", e ]) || {}, o = null == i ? void 0 : i.findIndex(function(t) {
                return t.groupId === n.groupId;
            }), a = null == (f = r.default.getIn(i, [ o, "items" ])) ? void 0 : f.find(function(t) {
                return t.id === u.id;
            });
            a && u && (t = I(t, a, u.count));
        }, a = 0; a < n.items.length; a++) o(a);
    }, a = 0; a < u.length; a++) {
        var f;
        o(a);
    }
    return t;
}

function b(t, e, n) {
    for (var u = e.packageGroups || [], o = n.packages || [], a = 0; a < o.length; a++) for (var f = r.default.getIn(o, [ a, "groupSkus" ]), l = r.default.getIn(u, [ a, "groupSkus" ]), s = function(e) {
        var n = f[e], r = l.find(function(t) {
            return t.skuId === n.skuId;
        }), u = r.canWeight ? (0, i.multiFloat)(n.count, n.weight) : n.count * n.number;
        if (n && r && u) {
            t = I(t, r, u);
            for (var o = 0; o < u; o++) t = C(t, r, n);
        }
    }, c = 0; c < f.length; c++) s(c);
    return t;
}

function S(t) {
    if (!Object.keys(t).length) return !1;
    var e = !1;
    return Object.keys(t).forEach(function(n) {
        var r = t[n];
        r.count > r.stockCount && (e = !0);
    }), e;
}