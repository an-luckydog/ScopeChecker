var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.unBindThirdAccount = exports.queryBindStatus = exports.getSortCodeByUserId = exports.getShareInfo = exports.getNaviBar = exports.getIndividualitySelfCenterInfo = exports.getDecoratePortalInfo = exports.getCardWithoutVip = void 0;

require("../b/helpers/objectSpread2");

var t = e(require("../lib/mix/request")), r = require("../lib/mix/util");

e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), e(require("./rmsStorage-main"));

exports.getNaviBar = function(e) {
    return (0, t.default)({
        method: "get",
        url: "/queryNaviBar",
        params: e
    });
};

exports.getShareInfo = function(e) {
    return (0, t.default)({
        method: "get",
        url: (0, r.getHost)() + "/api/v1/rmsmina/c/queryShareInfo",
        params: e
    });
};

exports.getIndividualitySelfCenterInfo = function(e) {
    return e.ts = Date.now(), (0, t.default)({
        method: "get",
        url: (0, r.getHost)() + "/api/v1/rmsmina/c/querySelfcenterInfo",
        params: e,
        openShark: !0
    });
};

exports.getCardWithoutVip = function(e, a) {
    return t.default.post((0, r.getLoginHost)() + "/api/v1/crm/frontend/card/add-wct-card", e, {
        withCredentials: !0,
        headers: a || {}
    });
};

exports.unBindThirdAccount = function(e) {
    return t.default.post((0, r.getHost)() + "/diancan/api/relate/unbind", e, {
        withCredentials: !0
    });
};

exports.getSortCodeByUserId = function(e) {
    return (0, t.default)({
        method: "get",
        url: (0, r.getHost)() + "/diancan/api/token/require",
        params: e,
        withCredentials: !0
    });
};

exports.queryBindStatus = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e.ts = Date.now(), t.default.post((0, r.getHost)() + "/diancan/api/relate/queryBindDetail", e, {
        withCredentials: !0
    });
};

exports.getDecoratePortalInfo = function(e) {
    return (0, t.default)({
        method: "get",
        url: (0, r.getHost)() + "/api/v1/rmsmina/c/queryPortalInfo",
        params: e,
        timeout: 1e4
    });
};