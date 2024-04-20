var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.composePage = void 0;

var r = require("../../miniprogram_npm/wechat-weapp-redux-extend/index.js"), t = e(require("../menu"));

exports.composePage = function(e, o, n) {
    return (0, r.connectPage)(e, o, t.default, "rmsDiancanStore")(n);
};