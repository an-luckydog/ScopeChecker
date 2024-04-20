var e = require("../../b/helpers/interopRequireDefault"), r = require("../../miniprogram_npm/@limo/container/behaviors/index"), s = e(require("../../commons/component")), a = e(require("../../commons/behaviors/dish"));

(0, s.default)({
    behaviors: [ a.default, r.commonBehavior, r.limoShim ],
    options: {
        multipleSlots: !0
    },
    observers: {
        "dish.tags": function(e) {
            var r = {
                corner: null,
                memberTag: null,
                promoTags: [],
                recTags: [],
                dishTags: []
            };
            null == e || e.forEach(function(e) {
                switch (e.type) {
                  case 0:
                    r.corner = e;
                    break;

                  case 1:
                    r.promoTags.push(e);
                    break;

                  case 2:
                    r.recTags.push(e);
                    break;

                  case 3:
                    r.memberTag = e;
                    break;

                  case 4:
                    r.dishTags.push(e);
                }
            }), this.setData(r);
        }
    }
});