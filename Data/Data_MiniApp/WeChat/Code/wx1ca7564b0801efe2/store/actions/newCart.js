var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearOperation = function(e) {
    return function(t) {
        t(c(e, {
            lastSeqId: 0,
            operationList: []
        }));
    };
}, exports.operationDispatch = function(e) {
    var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return function(p, d) {
        var h = d().cart.shopId;
        if (r.default.getHasOpenTogether(h) || r.default.getNewAdvanceFlag(h)) {
            var E = "", D = [];
            if (s && s.canWeight) switch (E = o.OPERATE_TYPE.WEIGHT_OP, e) {
              case o.OPERATE_TYPE.MINUS:
                D.push((0, n.transferToOperateDish)(s, 0));
                break;

              case o.OPERATE_TYPE.MODIFY:
              case o.OPERATE_TYPE.ADD:
              case o.OPERATE_TYPE.SET:
                D.push((0, n.transferToOperateDish)(s));
            } else switch (E = e, e) {
              case o.OPERATE_TYPE.ADD:
              case o.OPERATE_TYPE.MINUS:
                if (E = o.OPERATE_TYPE.ADD_MINUS, D = (0, n.calculateCartDishListDiff)(u, f), !(D = (0, 
                i.filterSameRefactorCartDishInfo)(D)).length) return;
                break;

              case o.OPERATE_TYPE.MODIFY:
                if (!(D = (0, n.calculateCartDishListDiff)(u, f)).length) return;
                break;

              case o.OPERATE_TYPE.CLEAR_CART:
                Object.keys(f).forEach(function(e) {
                    f[e].forEach(function(e) {
                        D.push((0, n.transferToOperateDish)(e));
                    });
                });
                break;

              case o.OPERATE_TYPE.SET:
                D.push((0, n.transferToOperateDish)(s));
            }
            p(function(e, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return function(i, o) {
                    var s = o().cart, u = s.shopId, f = s.userOperation, l = f.operationList, p = void 0 === l ? [] : l, d = f.lastSeqId, h = void 0 === d ? 0 : d, E = p.length, D = E ? p[E - 1].seqId + 1 : h + 1, O = (0, 
                    t.default)({
                        seqId: D,
                        createTime: Date.now(),
                        operaType: e,
                        operateCartDishList: r,
                        auto: n
                    });
                    p = p.concat([ O ]), f = t.default.set(f, "operationList", p), a.default.sendInfo({
                        name: "[newCart][_updateOperation]",
                        content: {
                            operationItem: O
                        }
                    }), i(c(u, f));
                };
            }(E, D, l));
        }
    };
}, exports.sendOperationList = function() {
    return function(e, t) {
        var r = t().cart, a = r.userOperation, n = (r.refactorLocalCart || {}).version, i = a.lastSeqId, o = a.operationList, u = o.length;
        if (u) {
            var c = o.findIndex(function(e) {
                return e.seqId === i + 1;
            });
            c = -1 === c ? 0 : c;
            var f = o.slice(c, u);
            s.default.sendNewOperateCart({
                operationList: f,
                localVersion: n && n > 0 ? n : null
            });
        }
    };
}, exports.transOriginCartFromSimple = void 0, exports.updateCartBySRP = function(e, a, n, o) {
    return function(s, c) {
        var f = c().cart.refactorLocalCart, l = (0, i.transferCartDishListToRefactorCartDishMap)(n);
        f = t.default.setIn(f, [ "refactorCartDishMap" ], l);
        var p = (0, t.default)({
            cartDishList: n,
            refactorLocalCart: f
        });
        o && (p = t.default.merge(p, {
            cartDishSortMapList: o
        }), r.default.setCartDishSortMapList(e, a, o)), s((0, u.updateCartDishInfo)(p)), 
        r.default.setCartDishList(e, a, n), r.default.setRefactorLocalCart(e, a, f);
    };
}, exports.updateNewLocalCartVersion = function(e, a, n) {
    return function(i, o) {
        var s = o().cart.refactorLocalCart || {}, c = t.default.merge(s, {
            version: n || 0
        });
        i((0, u.updateCartDishInfo)({
            refactorLocalCart: c
        })), r.default.setRefactorLocalCart(e, a, c);
    };
}, exports.updateOperationLastSeqId = function(e) {
    return function(r, a) {
        var n = a().cart, i = n.shopId, o = n.userOperation, s = o.operationList, u = void 0 === s ? [] : s;
        r(c(i, o = t.default.merge(o, {
            lastSeqId: e,
            operationList: u.filter(function(t) {
                return t.seqId > e;
            })
        })));
    };
}, exports.updateUserOperation = c;

var t = e(require("../../miniprogram_npm/seamless-immutable/index.js")), r = e(require("../../api/rmsStorage")), a = e(require("../../lib/wx/log")), n = require("../../modules/cartHelper"), i = require("../../modules/menu/cart/cartDataTransfer"), o = require("../../constants/cartConstants"), s = e(require("../../api/cartPike")), u = require("./baseCart");

function c(e, t) {
    return function(a) {
        a((0, u.updateCartDishInfo)({
            userOperation: t
        })), r.default.setUserOperation(e, t);
    };
}

exports.transOriginCartFromSimple = function(e, t) {
    for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
    return function(r, i) {
        var o = (i().cart || {}).cartDishList, s = e.itemNo, u = null;
        Object.keys(o).find(function(e) {
            return o[e].find(function(e) {
                return e.goodsNo === s && (u = e, !0);
            });
        }), t && u ? r(t.apply(void 0, [ u ].concat(n))) : a.default.sendInfo({
            name: "[newCart][_originCartDish]",
            content: {
                originCartDish: u
            }
        });
    };
};