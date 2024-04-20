var t = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSpecDesc = exports.getCartAttrs = exports.getAllSelectedAttrs = exports.checkClusterStatus = void 0, 
exports.initRenderCluster = function(t, e, n) {
    var u = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o = !1, s = [], d = t.attrGroups, f = t.specs, T = l(f, n), m = T.specCluster, g = T.defaultSpec, v = [ m ].concat(r(d.map(function(t) {
        var e = t.choiceSetting, r = t.type, n = t.groups, l = e ? a[r] : "", d = 0, f = (null == e ? void 0 : e.repeatChoice) === i.REPEAT_CHOICE.MULTI && 1 !== e.maxChoice, h = n.map(function(t) {
            var n = t.title, a = t.groupId, h = t.choiceSetting, T = t.attrs;
            d += T.length, f = !e && h ? h.repeatChoice === i.REPEAT_CHOICE.MULTI && 1 !== h.maxChoice : f;
            var m = !l && h ? (0, c.transSubTitle)(h, T.length, 0) : [], g = T.map(function(t) {
                var e = t.id, n = t.name, c = t.price, l = t.stockCount, d = t.defaultSelected, h = t.mutexCode;
                return r === i.ATTR_TYPE.TASTE && !o && f && (o = p(n, Number(c))), d && s.push({
                    type: r,
                    groupId: a,
                    id: e
                }), {
                    id: e,
                    name: n,
                    price: u || r !== i.ATTR_TYPE.METHOD ? Number(c) : 0,
                    mutexCode: h,
                    stockCount: +(null != l ? l : -1),
                    star: d,
                    disablePlus: !1,
                    mutex: !1,
                    count: 0
                };
            });
            return {
                title: n,
                groupId: a,
                choiceSetting: h,
                attrs: g,
                subTitle: m,
                repeatable: f,
                choiceNum: T.length
            };
        }), T = l && e ? (0, c.transSubTitle)(e, d, 0) : [];
        return {
            type: r,
            choiceSetting: e,
            title: l,
            subTitle: T,
            groups: h,
            choiceNum: d
        };
    })));
    return [ g ].concat(r(e || s)).forEach(function(t) {
        v = h(v, t, t.count || 1);
    }), {
        clusters: v,
        itemWholeLine: o
    };
}, exports.updateAttrStatus = exports.transSpecCartDish = void 0;

var e, r = require("../../b/helpers/toConsumableArray"), n = require("../../b/helpers/defineProperty"), u = t(require("../../miniprogram_npm/@limo/core/index.js")), i = require("../../commons/constants"), o = require("./mutex"), c = require("./title"), a = (n(e = {}, i.ATTR_TYPE.METHOD, "做法"), 
n(e, i.ATTR_TYPE.TASTE, "加料"), e), s = function(t) {
    return t.split("").reduce(function(t, e) {
        return t + (e.charCodeAt(0) > 127 || 94 === e.charCodeAt(0) ? 2 : 1);
    }, 0);
}, p = function(t, e) {
    return (e ? s("¥".concat(e)) : 0) + (t ? s(t) : 0) > 20;
};

function l(t, e) {
    var r = (t || []).map(function(t) {
        var e = t.skuId, r = t.specName, n = t.stockCount;
        return {
            id: e,
            name: r,
            stockCount: +(null != n ? n : -1),
            price: 0,
            star: !1,
            mutex: !1,
            count: 0,
            disablePlus: !1,
            mutexCode: t.mutexCode,
            pic: t.pic
        };
    });
    return {
        specCluster: {
            type: i.ATTR_TYPE.SPEC,
            choiceNum: 1,
            title: "规格",
            choiceSetting: null,
            groups: [ {
                groupId: "-1",
                repeatable: !1,
                title: "",
                choiceSetting: {
                    maxChoice: 1,
                    minChoice: 1,
                    repeatChoice: i.REPEAT_CHOICE.SINGLE
                },
                attrs: r,
                choiceNum: 1
            } ]
        },
        defaultSpec: {
            type: i.ATTR_TYPE.SPEC,
            id: e,
            groupId: "-1"
        }
    };
}

var d = function(t, e) {
    var r = e || {}, n = r.type, u = r.groupId, i = r.id, o = t.find(function(t) {
        return t.type === n;
    });
    if (!o) return {};
    var c = (o.groups || []).find(function(t) {
        return t.groupId === u;
    });
    return c ? {
        cluster: o,
        group: c,
        attr: c.attrs.find(function(t) {
            return t.id === i;
        })
    } : {};
}, f = function(t, e, r) {
    if (!t) return {
        addable: !0
    };
    var n = t.maxChoice, i = t.minChoice, o = -1 === n ? 1 / 0 : n, a = -1 === i ? 0 : i, s = r ? (0, 
    c.transSubTitle)(t, r, e) : [];
    return e > o ? (u.default.getLimoRuntime().showToast({
        title: "最多".concat(o, "份，已达到上限~"),
        icon: "none"
    }), {
        addable: !1,
        finish: !0,
        subTitle: s
    }) : e === o ? {
        addable: !0,
        disablePlus: !0,
        subTitle: s
    } : e < a ? {
        addable: !1,
        subTitle: s,
        failText: i !== n ? "最少选".concat(i, "份，已选").concat(e, "份~") : "请选".concat(n, "份，已选").concat(e, "份，还差").concat(n - e, "份~")
    } : {
        addable: !0,
        subTitle: s
    };
}, h = function(t, e, r) {
    var n = JSON.parse(JSON.stringify(t)), i = d(n, e), c = i.cluster, a = i.group, s = i.attr;
    if (!c || !a || !s) return t;
    var p = s.mutex, l = s.stockCount, h = s.count, m = null != h ? h : 0;
    if (p || 0 === l) return t;
    var g = T(n), v = c.choiceSetting || a.choiceSetting;
    if (a.repeatable) {
        if (s.count = m + r, s.count < 0) return t;
    } else 0 === m && v && 1 === v.maxChoice && g.filter(function(t) {
        return c.choiceSetting && t.type === c.type || a.choiceSetting && t.groupId === a.groupId;
    }).forEach(function(t) {
        var e = d(n, t).attr;
        e && (e.count = 0);
    }), s.count = 0 === m ? 1 : 0;
    var E = l >= 0 ? l : 1 / 0;
    if (s.disablePlus = s.count >= E, s.count > E) return u.default.getLimoRuntime().showToast({
        title: "库存不足，请选择其他加料~",
        icon: "none"
    }), t;
    var S = (g = T(n)).filter(function(t) {
        return c.choiceSetting && t.type === c.type || a.choiceSetting && t.groupId === a.groupId;
    }).reduce(function(t, e) {
        var r;
        return t + (null != (r = e.count) ? r : 0);
    }, 0), C = c.choiceSetting ? c : a, x = f(C.choiceSetting, S, C.choiceNum), I = x.disablePlus, b = x.subTitle;
    if (C.disablePlus = I || !1, C.subTitle = b, x.finish) return t;
    var A = (0, o.initAttrsMatrix)(t);
    return (0, o.transMutexMatrix)(T(n), A).forEach(function(t, e) {
        t.forEach(function(t, r) {
            var u = A[e][r], i = d(n, u).attr;
            i && (i.mutex = 1 === t);
        });
    }), n;
};

exports.updateAttrStatus = h;

var T = function(t) {
    var e = [];
    return t.forEach(function(t) {
        var r = t.type;
        t.groups.forEach(function(t) {
            var n = t.groupId;
            t.attrs.filter(function(t) {
                return t.count > 0;
            }).forEach(function(t) {
                var u = t.id, i = t.count, o = t.name, c = t.price;
                e.push({
                    type: r,
                    groupId: n,
                    id: u,
                    count: i,
                    name: o,
                    price: c
                });
            });
        });
    }), e;
};

exports.getAllSelectedAttrs = T;

exports.checkClusterStatus = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = T(t), n = [], i = !0, o = function(t, e, u) {
        if (!e) return !0;
        var i = r.filter(t).reduce(function(t, e) {
            var r;
            return t + (null != (r = e.count) ? r : 0);
        }, 0), o = f(e, i), c = o.addable, a = o.failText;
        return a && n.push("[".concat(u, "]").concat(a)), c;
    };
    return t.forEach(function(t) {
        var e;
        if (i) {
            var r = t.choiceSetting, n = t.groups, u = t.type, c = t.title;
            (i = null != (e = o(function(t) {
                return t.type === u;
            }, r, c)) && e) && !r && n.forEach(function(t) {
                var e;
                if (i) {
                    var r = t.choiceSetting, n = t.groupId, u = t.title;
                    i = null != (e = o(function(t) {
                        return t.groupId === n;
                    }, r, u)) && e;
                }
            });
        }
    }), e && n.length && u.default.getLimoRuntime().showToast({
        title: n[0],
        icon: "none"
    }), i;
};

var m = function(t, e, r) {
    var n = t.specs, u = t.name, o = (n || []).find(function(t) {
        return t.skuId === e;
    });
    if (!o) return {};
    var c = o.specName;
    return {
        desc: T(r).filter(function(t) {
            return !!t.name;
        }).map(function(t) {
            var e = t.type, r = t.name, n = t.count;
            return e === i.ATTR_TYPE.TASTE ? "".concat(r, "*").concat(n) : r || "";
        }).join("/"),
        dishName: c && n.length > 1 ? "".concat(u, "-").concat(c) : u
    };
};

exports.getSpecDesc = m;

exports.transSpecCartDish = function(t, e) {
    var r = e.spuId, n = e.skuId, u = e.clusters, o = e.count, c = e.dishRemarks, a = t.extendList, s = m(t, n, u), p = s.desc, l = s.dishName, d = [], f = [];
    return T(u).filter(function(t) {
        return t.type === i.ATTR_TYPE.METHOD || t.type === i.ATTR_TYPE.TASTE;
    }).forEach(function(t) {
        var e = t.type, r = t.groupId, n = t.id, u = t.count;
        if (u) {
            var o = e === i.ATTR_TYPE.METHOD ? d : f, c = o.findIndex(function(t) {
                return t.groupId === r;
            }), a = {
                skuId: n,
                count: u
            };
            -1 === c ? o.push({
                groupId: r,
                items: [ a ]
            }) : o[c].items.push(a);
        }
    }), {
        spuId: r,
        skuId: n,
        name: l,
        count: o,
        desc: p,
        methods: d,
        tastes: f,
        extendList: a,
        dishRemarks: c
    };
};

exports.getCartAttrs = function(t) {
    var e = t.methods, n = t.tastes, u = function(t, e) {
        return (t || []).reduce(function(t, r) {
            var n = r.groupId, u = r.items.map(function(t) {
                return {
                    groupId: "".concat(n),
                    id: t.skuId,
                    type: e,
                    count: t.count
                };
            });
            return t.concat(u);
        }, []);
    };
    return [].concat(r(u(e, i.ATTR_TYPE.METHOD)), r(u(n, i.ATTR_TYPE.TASTE)));
};