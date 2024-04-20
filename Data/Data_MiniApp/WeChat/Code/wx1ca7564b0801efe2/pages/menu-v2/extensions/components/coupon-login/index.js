var e = require("../../../../../b/helpers/interopRequireDefault"), t = e(require("../../../../../b/regenerator")), r = require("../../../../../b/helpers/objectSpread2"), n = require("../../../../../b/helpers/objectWithoutProperties"), i = require("../../../../../b/helpers/asyncToGenerator"), a = require("../../../../../miniprogram_npm/@limo/container/behaviors/index"), o = e(require("../../../../../commons/component")), s = require("../../../../../commons/constants"), u = [ "assistantCategoryInfo" ];

(0, o.default)({
    behaviors: [ a.commonBehavior, a.limoShim ],
    properties: {
        needPullCate: {
            type: Boolean,
            value: !1
        },
        isBind: {
            type: Boolean,
            value: !1
        }
    },
    lifetimes: {
        attached: function() {
            var e;
            this.pullCate(), this.entity.get(s.TYPES.EMITTER).on(s.EVENTS.LOGIN_SUCCESS, this.pullCate, this), 
            null == (e = this.entity) || e.get(s.TYPES.LX).sendMV("b_eco_aolar5n6_mv");
        },
        detached: function() {
            this.entity.get(s.TYPES.EMITTER).off(s.EVENTS.LOGIN_SUCCESS, this.pullCate, this);
        }
    },
    observers: {
        needPullCate: function(e) {
            e ? this.pullCate() : this.entity.get(s.TYPES.EMITTER).emit(s.EVENTS.DEAL_COUPON_CATEGORY, []);
        }
    },
    methods: {
        toLogin: function() {
            var e;
            this.entity.get(s.TYPES.MEMBER).checkLogin(), null == (e = this.entity) || e.get(s.TYPES.LX).sendMC("b_eco_ew02ycnk_mc");
        },
        pullCate: function() {
            var e = this;
            return i(t.default.mark(function i() {
                var a, o, l;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (e.data.needPullCate) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return t.next = 4, e.entity.get(s.TYPES.MENU_COUPON).fetchFirstPage();

                      case 4:
                        if (a = t.sent) {
                            t.next = 7;
                            break;
                        }
                        return t.abrupt("return");

                      case 7:
                        o = a.assistantCategoryInfo, l = n(a, u), e.entity.get(s.TYPES.EMITTER).emit(s.EVENTS.DEAL_COUPON_CATEGORY, [ r(r({}, o), l) ]);

                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, i);
            }))();
        }
    }
});