var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../lib/mix/request")), r = require("../lib/mix/util"), a = require("../lib/util"), i = t.default, n = {
    requestFmpData: function(e) {
        return i.get((0, r.getHost)() + "/diancan/api/odc/menu/load-fmp-info", {
            params: e,
            withCredentials: !0,
            timeout: 1e4,
            openShark: a.sharkSwitch.getSharkSwitch()
        });
    },
    requestSpu: function(e) {
        return i.get((0, r.getHost)() + "/diancan/api/odc/dishes/page-query-dish-info", {
            params: e,
            withCredentials: !0,
            timeout: 1e4,
            openShark: a.sharkSwitch.getSharkSwitch()
        });
    },
    requestMenuExtra: function(e) {
        return i.get((0, r.getHost)() + "/diancan/api/odc/menu/query-menu-extra", {
            params: e,
            timeout: 4e3
        });
    },
    requestAddress: function(e) {
        return i.get((0, r.getTakeAwayHost)() + "/api/rmstakeaway/queryAddressByGeo", {
            params: e,
            timeout: 4e3
        });
    },
    queryTableShareConfig: function(e) {
        return i.get((0, r.getHost)() + "/api/v1/rmsmina/c/queryShareInfo", {
            params: e
        });
    },
    getGrouponInfo: function(e) {
        return i.post((0, r.getHost)() + "/diancan/api/odc/menu/query-groupon-coupon-info", {
            params: e
        });
    },
    queryCouponList: function(e) {
        return i.post((0, r.getHost)() + "/diancan/api/to/couponAssistantInfo", e);
    }
};

exports.default = n;