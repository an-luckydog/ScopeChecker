var t = require("../../../../b/helpers/interopRequireDefault"), e = t(require("../../../../b/regenerator")), n = require("../../../../b/helpers/asyncToGenerator"), o = require("../../../../b/helpers/objectSpread2"), r = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), i = require("../../util/countdown"), a = require("../../common/constants"), s = t(require("../../../../commons/component")), u = require("../../../../commons/constants");

(0, s.default)({
    behaviors: [ r.commonBehavior, r.limoShim ],
    properties: {
        orderData: {
            type: Object,
            value: {}
        }
    },
    observers: {
        orderData: function(t) {
            var e, n, r;
            this.setData(o(o({}, t), {}, {
                localDishList: (null == t || null == (e = t.orderDishInfo) ? void 0 : e.dishList) || []
            }));
            var i = null == (n = t.orderStatus) || null == (r = n.countDownInfo) ? void 0 : r.expireSeconds;
            i && this.initCountdown(i);
        }
    },
    data: {
        orderbaseInfo: null,
        orderStatus: null,
        orderDishInfo: null,
        extendDisplayInfo: [],
        actionBtnList: [],
        statusMsgColor: "",
        expireSeconds: "",
        localDishList: [],
        defaultImg: "https://p0.meituan.net/scarlett/ca45859124838c068622a75a818b064a1640.jpg",
        noHasMore: !1,
        REWARD_BG: a.REWARD_BG,
        isLoading: !1
    },
    methods: {
        initCountdown: function(t) {
            var e = this;
            this.clearCountDown(), t > 0 && !this.countdown && (this.countdown = new i.Countdown(t || 0, function() {
                e.setData({
                    expireSeconds: ""
                }), t && e.entity.get(u.TYPES.EMITTER).emit(a.LIST_EVENTS.REFRESH);
            }, function(t) {
                e.setData({
                    expireSeconds: t
                });
            }), this.countdown.start()), t || this.clearCountDown();
        },
        gotoDetail: function() {
            this.entity.get(u.TYPES.LX).sendMC({
                valLab: null,
                bid: "b_saaspay_go2t8s76_mc",
                options: {}
            });
            var t = (this.data.orderbaseInfo || {}).redirectSchema;
            this.entity.get(a.LIST_TYPES.EVENT).wxNavigateTo(t, "orderDetail", this.clearCountDown.bind(this));
        },
        scrolllower: function() {
            var t = this;
            return n(e.default.mark(function n() {
                var o, r, i, s, u, c, l, d;
                return e.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = t.data, r = o.localDishList, i = o.orderbaseInfo, s = o.noHasMore, u = (i || {}).orderViewId, 
                        !s && !t.data.isLoading) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        return t.setData({
                            isLoading: !0
                        }), e.next = 6, t.entity.get(a.LIST_TYPES.LIST).getMoreDishList(u);

                      case 6:
                        if (e.t0 = e.sent, e.t0) {
                            e.next = 9;
                            break;
                        }
                        e.t0 = {
                            moreDishList: [],
                            code: 0
                        };

                      case 9:
                        c = e.t0, l = c.moreDishList, d = c.code, null != l && l.length ? t.setData({
                            localDishList: r.concat(l),
                            isLoading: !1
                        }) : t.setData({
                            isLoading: !1,
                            noHasMore: d === a.RES_CODE.SUCCESS
                        });

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, n);
            }))();
        },
        clearCountDown: function() {
            var t;
            null == (t = this.countdown) || t.clearTimeout(), this.countdown = null, this.setData({
                expireSeconds: ""
            });
        },
        btnClick: function(t) {
            var e = this.data.orderbaseInfo, n = void 0 === e ? {} : e, r = (t.currentTarget.dataset || t.currentTarget).btn;
            this.entity.get(a.LIST_TYPES.EVENT).emitEvent(o(o({}, r), n), this.clearCountDown.bind(this));
        }
    }
});