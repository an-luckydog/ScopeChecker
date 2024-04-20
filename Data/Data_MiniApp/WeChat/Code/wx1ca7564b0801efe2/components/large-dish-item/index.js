var r = require("../../b/helpers/interopRequireDefault"), e = require("../../b/helpers/toConsumableArray"), o = require("../../miniprogram_npm/@limo/container/behaviors/index"), s = r(require("../../commons/component")), a = r(require("../../commons/behaviors/dish"));

(0, s.default)({
    behaviors: [ a.default, o.commonBehavior, o.limoShim ],
    options: {
        multipleSlots: !0
    },
    observers: {
        "dish.tags": function(r) {
            var o = {
                corner: null,
                memberTag: null,
                promoTags: [],
                recTags: [],
                dishTags: [],
                tags: []
            }, s = {
                0: "corner",
                1: "promoTags",
                2: "recTags",
                3: "memberTag",
                4: "dishTags"
            };
            null == r || r.forEach(function(r) {
                var e = s[r.type];
                Array.isArray(o[e]) ? o[e].push(r) : o[e] = r;
            }), o.tags = [].concat(e(o.promoTags), e(o.recTags), e(o.dishTags)), this.setData(o);
        }
    }
});