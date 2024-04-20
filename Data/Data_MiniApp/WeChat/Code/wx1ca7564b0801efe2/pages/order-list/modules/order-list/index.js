var e = require("../../../../b/helpers/interopRequireDefault"), t = e(require("../../../../b/regenerator")), r = require("../../../../b/helpers/asyncToGenerator"), i = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), s = e(require("../../../../commons/component")), a = require("../../common/constants"), n = require("../../../../commons/constants");

(0, s.default)({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        list: {
            type: Array,
            value: []
        }
    },
    observers: {
        list: function(e) {
            this.setData({
                localOrderList: e
            }), this.entity.get(a.LIST_TYPES.LIST).setOrderList(e);
        }
    },
    data: {
        localOrderList: [],
        isLoading: !1,
        noHasMore: !1,
        code: "dc-orderList"
    },
    lifetimes: {
        attached: function() {
            var e;
            null == (e = this.entity) || e.get(n.TYPES.EMITTER).on(a.LIST_EVENTS.RELOAD, this.resetList, this);
        },
        detached: function() {
            var e;
            null == (e = this.entity) || e.get(n.TYPES.EMITTER).off(a.LIST_EVENTS.RELOAD, this.resetList, this);
        }
    },
    methods: {
        resetList: function() {
            var e = this.data.list;
            this.setData({
                localOrderList: e,
                noHasMore: !1
            }), this.entity.get(a.LIST_TYPES.LIST).setOrderList(e);
        },
        loadMoreOrderList: function() {
            var e = this;
            return r(t.default.mark(function r() {
                var i, s, n;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!e.data.noHasMore && !e.data.isLoading) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return e.setData({
                            isLoading: !0
                        }), t.next = 5, e.entity.get(a.LIST_TYPES.LIST).getMoreOrderList();

                      case 5:
                        if (t.t0 = t.sent, t.t0) {
                            t.next = 8;
                            break;
                        }
                        t.t0 = {
                            orderList: [],
                            noHasMore: !1
                        };

                      case 8:
                        i = t.t0, s = i.orderList, n = i.noHasMore, e.setData({
                            localOrderList: s
                        }, function() {
                            e.setData({
                                isLoading: !1,
                                noHasMore: n
                            });
                        });

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, r);
            }))();
        }
    }
});