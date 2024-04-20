var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPackageGroupLimitText = exports.getPackageGroupLimitNum = exports.dealPackageDetail = exports.TransPanelDetailsData = void 0, 
exports.initPackage = function(e, t) {
    var r, u = n.default.getIn(e, [ "skuMenuItems", 0 ]);
    r = t && t.refactorCartDishMap[u.spuId] || -1 === e.minBoughtCount ? e.incBoughtCount : e.minBoughtCount;
    var i = n.default.set(u, "count", r), s = u.packageGroups, l = (0, c.initPackageGroups)(s, a.INIT_PACKAGE.ADD);
    return i = n.default.merge(i, {
        packageGroups: l,
        categoryId: n.default.getIn(e, [ "parentCategoryId", 0 ])
    }), i = (0, o.computePackageAddPrice)(i), {
        menuPackageSku: u,
        cartPackageSku: i
    };
};

var t = require("../../../b/helpers/toConsumableArray"), r = require("../../../b/helpers/objectSpread2"), n = e(require("../../../miniprogram_npm/seamless-immutable/index.js")), u = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), a = require("../../../constants/bizConstants"), o = require("../../cartHelper"), c = require("../../operateCartHelper"), i = require("../../../constants/menu"), s = require("../../../lib/number");

var l = function(e) {
    var t = e.groupLimit, r = t;
    return e.optionType === i.PACKAGE_OPTION_TYPE.RANGE && (t = e.lowerCount || 0, r = e.upperCount || 0), 
    {
        minCount: t,
        maxCount: r
    };
};

exports.getPackageGroupLimitNum = l;

var p = function(e) {
    var t = e.specAttrs, r = e.canWeight, n = t || [], a = function(e) {
        var t = e.methods, r = e.tastes, n = function(e) {
            var t, r = Array.isArray(t = e) && t.length > 0 ? null == e ? void 0 : e.map(function(e) {
                return e || [];
            }) : [];
            return (null == r ? void 0 : r.length) > 0 ? u.default.flatDeep(r, 1) : [];
        };
        return {
            allMethods: n(t),
            allTastes: n(r)
        };
    }(e), o = a.allMethods, c = a.allTastes, i = [], s = [];
    if (r) {
        var l = e.weight, p = e.unit;
        i.push("".concat(l).concat(p));
    }
    return n.length && n.forEach(function(e) {
        return e.value && i.push(e.value);
    }), o.length && o.forEach(function(e) {
        return e.name && i.push(e.name);
    }), c.length && c.forEach(function(e) {
        return e.name && s.push("".concat(e.name, "x").concat(e.count));
    }), {
        specAndMethods: i.length > 0 ? i.join("，") : "",
        tastes: s.length > 0 ? s.join("，") : ""
    };
};

exports.TransPanelDetailsData = function(e) {
    var t = [], n = null == e ? void 0 : e.packageGroups;
    return n ? (n.forEach(function(e) {
        var n = (e.groupSkus || []).filter(function(e) {
            return e.count;
        });
        if (n.length) {
            var u = n.map(function(e) {
                var t = Number(e.extraPrice) + Number(e.addPrice) * (e.canWeight ? e.weight : e.number), n = "number" == typeof e.count && "number" == typeof e.number && e.number ? (0, 
                s.multiFloat)(e.count, e.number) : e.count;
                return r({
                    skuId: e.skuId,
                    skuName: e.skuName,
                    spuId: e.spuId,
                    count: n,
                    totalPrice: (0, s.roundFloat)(t, 2)
                }, p(e));
            });
            t.push({
                groupId: e.groupId,
                groupName: e.groupName,
                groupSkus: u
            });
        }
    }), t) : [];
};

var m = function(e) {
    var t = "" + e.groupLimit;
    return e.optionType === i.PACKAGE_OPTION_TYPE.RANGE && (t = "".concat(e.lowerCount, "~").concat(e.upperCount)), 
    t;
};

exports.getPackageGroupLimitText = m;

var g = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = [];
    return null == e || e.forEach(function(e) {
        var n;
        null == e || null == (n = e.items) || n.forEach(function(e) {
            e.name && r.push(t && null != e && e.count ? "".concat(e.name, "x").concat(e.count) : e.name);
        });
    }), r;
};

exports.dealPackageDetail = function(e, r) {
    return function(e, r, n) {
        if (!e || !r) return "";
        var u = [];
        return r.forEach(function(r) {
            var a = r.groupSkus, o = e.find(function(e) {
                return e.groupId === r.groupId;
            });
            null == a || a.forEach(function(e) {
                var r, a, c = null == o || null == (r = o.groupSkus) ? void 0 : r.find(function(t) {
                    return t.skuId === e.skuId;
                }), i = e.count, s = e.number, l = (null == c || null == (a = c.specAttrs) || null == (a = a[0]) ? void 0 : a.value) || "", p = l.length > 0 ? [ l ] : [], m = n(e), g = m.methodArr, f = m.tasteArr, d = [].concat(p, t(g), t(f)).join("，");
                if (c) {
                    var h = e.skuName;
                    d.length > 0 && (h = "".concat(h, "（").concat(d, "）"));
                    var v;
                    v = c.canWeight ? "".concat(h, "x").concat(e.weight).concat(c.unit) : s > 1 ? "".concat(h, "x").concat(s).concat(c.unit) : h, 
                    1 === i ? u.push(v) : i > 1 && u.push.apply(u, t(Array(i).fill(v)));
                }
            });
        }), u.join("+").slice(0, 50);
    }(e, r, function(e) {
        return {
            methodArr: g(e.methods),
            tasteArr: g(e.tastes, !0)
        };
    });
};