var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../lib/mix/request")), r = require("../lib/mix/util"), u = {
    requestSinglePage: function(e) {
        return t.default.post("pageMenu", e);
    },
    requestMenuHead: function(e) {
        return null != e && e.qrcode || null != e && e.perception ? t.default.get("preload", {
            params: e
        }) : t.default.get("menuHead", {
            params: e
        });
    },
    requestMenuExtra: function(e) {
        return t.default.get("menuExtra", {
            params: e,
            timeout: 4e3
        });
    },
    requestCallServiceAjax: function(e) {
        return t.default.get((0, r.getHost)() + "/diancan/api/odc/waiter/call-waiter", {
            params: e,
            timeout: 2e3
        });
    },
    queryAdBoard: function(e) {
        return t.default.get("queryAdBoard", {
            params: e
        });
    },
    requestLicenseAuth: function(e) {
        return t.default.get((0, r.getHost)() + "/api/v1/rmsmina/c/businessLicense/authorize", {
            params: e
        });
    },
    requestLicenseImg: function(e) {
        return t.default.get((0, r.getHost)() + "/api/v1/rmsmina/c/businessLicense/queryBusinessLicenseList", {
            params: e
        });
    }
};

exports.default = u;