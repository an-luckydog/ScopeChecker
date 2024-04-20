var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, i = e(require("../../../b/regenerator")), r = require("../../../b/helpers/asyncToGenerator"), s = require("../../../b/helpers/classCallCheck"), n = require("../../../b/helpers/createClass"), o = require("../../../commons/inversify"), a = require("../../../commons/constants"), u = require("../common/constants"), d = (0, 
o.injectable)()(t = function(e) {
    return (0, o.inject)(a.TYPES.REQUEST)(e, void 0, 0);
}(t = function(e) {
    return (0, o.inject)(a.TYPES.LIMO)(e, void 0, 1);
}(t = function(e) {
    return (0, o.inject)(a.TYPES.LOG)(e, void 0, 2);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ "undefined" == typeof Request ? Object : Request, "undefined" == typeof ILimo ? Object : ILimo, void 0 ])(t = function() {
    function e(t, i, r) {
        s(this, e), this.request = t, this.limo = i, this.log = r, this.page = void 0, this.size = void 0, 
        this.orderList = void 0, this.dishPagination = void 0, this.page = u.DEFAULT_PAGE, 
        this.size = u.DEFAULT_SIZE, this.dishPagination = {}, this.orderList = [];
    }
    var t, o;
    return n(e, [ {
        key: "setPage",
        value: function(e) {
            this.page = e;
        }
    }, {
        key: "resetOrderList",
        value: function() {
            this.orderList = [];
        }
    }, {
        key: "setOrderList",
        value: function(e) {
            this.orderList = this.orderList.concat(e);
        }
    }, {
        key: "getMoreOrderList",
        value: (o = r(i.default.mark(function e() {
            var t, r, s, n, o, a;
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = this.page, r = this.size, e.next = 4, this.request.post("/order/list/more", {
                        pageNo: t,
                        pageSize: r
                    });

                  case 4:
                    if (s = e.sent, o = (n = s || {}).code, a = n.data, n.msg, o !== u.RES_CODE.SUCCESS || !a) {
                        e.next = 11;
                        break;
                    }
                    return e.abrupt("return", (this.page++, this.setOrderList(a), {
                        orderList: this.orderList,
                        noHasMore: !a.length
                    }));

                  case 11:
                    this.limo.limoShowToast({
                        title: "订单加载失败，稍后再试试吧",
                        icon: "none",
                        duration: 2e3
                    }), this.log.addError("订单列表分页加载失败", s);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return o.apply(this, arguments);
        })
    }, {
        key: "getMoreDishList",
        value: (t = r(i.default.mark(function e(t) {
            var r, s, n, o, a, d;
            return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return s = this.size, null != (r = this.dishPagination) && r[t] || (this.dishPagination[t] = u.DISH_DEFAULT_PAGE), 
                    e.next = 4, this.request.post("/order/dish/list/more", {
                        pageNo: this.dishPagination[t],
                        pageSize: s,
                        orderViewId: t
                    });

                  case 4:
                    if (n = e.sent, a = (o = n || {}).code, d = o.data, a !== u.RES_CODE.SUCCESS || !d) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return", (this.dishPagination[t]++, {
                        moreDishList: d,
                        code: a
                    }));

                  case 10:
                    this.limo.limoShowToast({
                        title: "菜品加载失败，稍后再试试吧",
                        icon: "none",
                        duration: 2e3
                    }), this.log.addError("订单菜品列表分页加载失败", n);

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return t.apply(this, arguments);
        })
    } ]), e;
}()) || t) || t) || t) || t) || t) || t;

exports.default = d;