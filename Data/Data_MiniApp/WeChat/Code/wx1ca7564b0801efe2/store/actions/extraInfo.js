var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SET_URL_PARAMS = exports.SET_REMARK = exports.SET_MP_USER_INFO = exports.SET_EXTRA_INFO = void 0, 
exports.setExtraInfo = function(e, _) {
    return function(E) {
        E(t(_)), r.default.setExtraInfo(e, _);
    };
}, exports.setMpUserInfo = function(e) {
    return {
        type: "SET_MP_USER_INFO",
        mpUserInfo: e
    };
}, exports.setUrlParams = function(e) {
    return {
        type: "SET_URL_PARAMS",
        urlParams: e
    };
};

var r = e(require("../../api/rmsStorage"));

exports.SET_EXTRA_INFO = "SET_EXTRA_INFO";

exports.SET_URL_PARAMS = "SET_URL_PARAMS";

exports.SET_MP_USER_INFO = "SET_MP_USER_INFO";

function t(e) {
    return {
        type: "SET_EXTRA_INFO",
        headInfo: e
    };
}

exports.SET_REMARK = "SET_REMARK";