var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r, t = e(require("../b/regenerator")), u = require("../b/helpers/asyncToGenerator"), a = e(require("../lib/mix/request")), i = require("../lib/mix/util"), n = {
    requestPromotionCalculate: (r = u(t.default.mark(function e(r) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", a.default.post((0, i.getHost)() + "/diancan/api/odc/calculate/cart-calculate", r));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e) {
        return r.apply(this, arguments);
    })
};

exports.default = n;