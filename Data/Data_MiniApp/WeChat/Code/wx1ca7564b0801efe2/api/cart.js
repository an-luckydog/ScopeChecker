var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../lib/mix/request")), r = require("../lib/mix/util"), a = require("../lib/util"), i = {
    getCloudData: function(e) {
        return t.default.post("/cart/getCartInfo", e, {
            timeout: 8e3,
            openShark: a.sharkSwitch.getSharkSwitch()
        });
    },
    checkDish: function(e) {
        return t.default.post((0, r.getHost)() + "/diancan/api/odc/order/check-dish", e, {
            openShark: a.sharkSwitch.getSharkSwitch()
        });
    },
    checkCartId: function(e) {
        return t.default.get("/cart/checkCartId", {
            params: e,
            openShark: a.sharkSwitch.getSharkSwitch()
        });
    }
};

exports.default = i;