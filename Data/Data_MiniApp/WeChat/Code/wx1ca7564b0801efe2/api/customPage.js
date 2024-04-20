var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCustomPageInfo = void 0;

var r = e(require("../lib/mix/request")), t = require("../lib/mix/util");

exports.getCustomPageInfo = function(e) {
    return (0, r.default)({
        method: "get",
        baseURL: (0, t.getHost)(),
        url: "/api/v1/rmsmina/c/queryPageInfo",
        params: e
    });
};