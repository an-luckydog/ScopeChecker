var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../lib/mix/request")), i = require("../lib/mix/util"), r = {
    getDishMoreDetail: function(e) {
        return t.default.post((0, i.getHost)() + "/diancan/menu/api/dishMoreDetail", e, {
            withCredentials: !0
        });
    },
    getRelatedSpuRecommend: function(e) {
        return t.default.post((0, i.getHost)() + "/diancan/api/odc/dishes/query-dish-collocation", e);
    },
    getShareDish: function(e) {
        return t.default.post((0, i.getHost)() + "/diancan/api/dish/queryShareInfo", e);
    }
};

exports.default = r;