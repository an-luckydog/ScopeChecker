var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = require("../b/helpers/objectSpread2"), i = require("../b/helpers/toConsumableArray"), n = e(require("../b/regenerator")), u = require("../b/helpers/asyncToGenerator"), s = require("../b/helpers/classCallCheck"), a = require("../b/helpers/createClass"), o = e(require("../miniprogram_npm/@limo/core/index.js")), c = require("../commons/inversify"), l = e(require("../commons/jsonLogic")), h = require("../commons/constants"), p = 0, f = 1, d = function(e) {
    if ("string" == typeof e) try {
        return JSON.parse(e);
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return e;
    }
    return e;
}, m = (0, c.injectable)()(t = function(e) {
    return (0, c.inject)(h.TYPES.REQUEST)(e, void 0, 0);
}(t = function(e) {
    return (0, c.inject)(h.TYPES.LIMO_FACTORY)(e, void 0, 1);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ "undefined" == typeof Request ? Object : Request, Function ])(t = function() {
    function e(t, r) {
        s(this, e), this.request = t, this.limoFactory = r, this.historyDishes = [], this.rulesMap = {};
    }
    var t;
    return a(e, [ {
        key: "run",
        value: (t = u(n.default.mark(function e(t) {
            var r, i;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if ((r = t.ruleTypes) && r.length) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return");

                  case 3:
                    return e.next = 5, this.request.post("/@biz/rule/list", {
                        ruleTypes: r
                    });

                  case 5:
                    (i = e.sent) && i.data && (this.rulesMap = i.data.rulesMap || {});

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return t.apply(this, arguments);
        })
    }, {
        key: "checkDishRule",
        value: function(e) {
            var t = e.deltaCount, r = e.count, i = e.stockCount;
            return !((null != r ? r : 0) + t > +(null != i ? i : 1 / 0) && (o.default.getLimoRuntime().showToast({
                icon: "none",
                title: "当前库存不足",
                duration: 1e3
            }), 1));
        }
    }, {
        key: "checkDishLimit",
        value: function(e) {
            var t = this.rulesMap[p] || [];
            if (!t.length) return !0;
            var r = this.mergeDishList(e), n = this.mergeDishList([].concat(i(this.historyDishes), i(r)));
            try {
                return this.execute(t, {
                    cur_dishes: r,
                    all_dishes: n
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return !1;
            }
        }
    }, {
        key: "checkOrderConfirmDishLimit",
        value: function(e, t) {
            var r = this.rulesMap[p] || [];
            if (!r.length) return !0;
            try {
                return this.execute(r, {
                    cur_dishes: this.mergeDishList(e),
                    all_dishes: this.mergeDishList([].concat(i(e), i(t)))
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return !1;
            }
        }
    }, {
        key: "checkMandatoryDishLimit",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", n = this.rulesMap[f] || [], u = this.mergeDishList(e), s = n.map(function(e) {
                return r(r({}, e), {}, {
                    msg: t ? i || e.msg : ""
                });
            }), a = t ? u.map(function(e) {
                return r(r({}, e), {}, {
                    target: t
                });
            }) : u;
            try {
                return this.execute(s, {
                    cur_dishes: a,
                    all_dishes: a,
                    skuId: t
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return !1;
            }
        }
    }, {
        key: "checkPackageGroups",
        value: function(e, t) {
            var r = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return !e || !e.comboRuleMap || t.every(function(t) {
                var n, u = t.groupId, s = t.items, a = ((null == (n = e.comboRuleMap) ? void 0 : n["".concat(u)]) || []).filter(function(e) {
                    return e.mode === i;
                });
                return r.execute(a, {
                    group_dishes: r.mergeDishList(s)
                });
            });
        }
    }, {
        key: "clearRules",
        value: function() {
            this.rulesMap = {};
        }
    }, {
        key: "execute",
        value: function(e, t) {
            var r = this;
            return e.every(function(e) {
                var i = e.rule, n = e.msg, u = l.default.apply(d(i), t);
                if (!u && n) {
                    var s, a = l.default.apply(d(n), t);
                    a && (null == (s = r.limoFactory()) || s.limoShowToast({
                        title: a,
                        icon: "none",
                        duration: 2e3
                    }));
                }
                return u;
            });
        }
    }, {
        key: "mergeDishList",
        value: function(e) {
            return e.reduce(function(e, t) {
                var r = e.find(function(e) {
                    return e.skuId === t.skuId;
                });
                return r ? (r.count += t.count, r.name = r.name || t.name) : e.push(JSON.parse(JSON.stringify(t))), 
                e;
            }, []);
        }
    } ]), e;
}()) || t) || t) || t) || t) || t;

exports.default = m;