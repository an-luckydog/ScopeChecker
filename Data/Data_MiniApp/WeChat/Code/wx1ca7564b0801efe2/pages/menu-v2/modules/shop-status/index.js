var t, e = require("../../../../b/helpers/interopRequireDefault"), n = require("../../../../b/helpers/objectSpread2"), r = e(require("../../../../b/regenerator")), a = require("../../../../b/helpers/asyncToGenerator"), i = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), o = e(require("../../../../commons/component")), s = require("../../../../commons/constants");

(0, o.default)({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        status: {
            type: Number,
            value: 0
        },
        tips: {
            type: String,
            value: ""
        }
    },
    data: {
        tabBar: !0,
        isShowRecommend: !0,
        USER_GEO_AUTH_FAILED: 6
    },
    lifetimes: {
        attached: function() {
            var t = this.entity.get(s.TYPES.OPTIONS).get("bizType") || "100";
            this.setData({
                tabBar: !!this.getTabBar(),
                isShowRecommend: t === s.BIZ_TYPE.ZT
            });
        }
    },
    observers: {
        status: (t = a(r.default.mark(function t(e) {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (t.t0 = e === this.data.USER_GEO_AUTH_FAILED, !t.t0) {
                        t.next = 4;
                        break;
                    }
                    return t.next = 4, this.getLocationAndRefresh({
                        showAuthSettingDialog: !1,
                        hiddenModalTag: !0
                    });

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        })), function(e) {
            return t.apply(this, arguments);
        })
    },
    methods: {
        onTap: function() {
            var t = this;
            return a(r.default.mark(function e() {
                return r.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        (t.entity.get(s.TYPES.OPTIONS).get("bizType") || "100") === s.BIZ_TYPE.ZT && t.entity.get(s.TYPES.SHOP_RECOMMEND).showStatusPanel({
                            status: t.data.status
                        });

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        getLocationAndRefresh: function(t) {
            var e = this;
            return a(r.default.mark(function a() {
                var i, o, u;
                return r.default.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (e.isGettingLocation) {
                            r.next = 14;
                            break;
                        }
                        return e.isGettingLocation = !0, r.prev = 2, r.next = 5, e.entity.get(s.EVENTS.GET_LOCATION)(n({}, t));

                      case 5:
                        i = r.sent, o = i.lat, (u = i.lng) && o && e.entity.get(s.TYPES.EMITTER).emit(s.EVENTS.REFRESH_PAGE, {
                            longitude: u,
                            latitude: o
                        }), e.isGettingLocation = !1, r.next = 14;
                        break;

                      case 11:
                        r.prev = 11, r.t0 = r.catch(2), console.log("error", r.t0), e.isGettingLocation = !1;

                      case 14:
                      case "end":
                        return r.stop();
                    }
                }, a, null, [ [ 2, 11 ] ]);
            }))();
        },
        goToAuth: function() {
            this.getLocationAndRefresh({
                showAuthSettingDialog: !0
            });
        }
    }
});