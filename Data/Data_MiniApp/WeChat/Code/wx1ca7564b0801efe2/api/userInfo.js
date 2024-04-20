var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = e(require("../lib/mix/request")), t = require("../lib/mix/util"), a = {
    getUserInfo: function(e) {
        return r.default.get((0, t.getHost)() + "/diancan/api/access/control/query_all_info_by_userId", {
            params: e
        });
    },
    alipayLogin: function(e) {
        return r.default.get("/diancan/api/alipay/login", {
            baseURL: (0, t.getHost)(),
            params: e
        });
    }
};

exports.default = a;