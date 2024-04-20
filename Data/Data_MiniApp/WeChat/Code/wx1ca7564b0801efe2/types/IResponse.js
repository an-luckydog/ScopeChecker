Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ResponseState = void 0, exports.isErrorTips = function(R) {
    return "errorType" in R;
};

(R = {})[R.DATA_ERROR = 0] = "DATA_ERROR", R[R.NET_ERROR = 1] = "NET_ERROR";

var R, e = function(R) {
    return R.REDIRECT = "REDIRECT", R.SUCCESS = "SUCCESS", R.ERROR = "ERROR", R;
}({});

exports.ResponseState = e;