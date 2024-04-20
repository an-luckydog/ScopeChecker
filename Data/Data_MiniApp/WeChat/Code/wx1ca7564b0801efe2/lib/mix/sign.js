var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSignWithPOI = exports.checkNeedSign = void 0;

var r = e(require("../../api/rmsStorage-main")), t = require("./util"), i = [ "menuHead", "menu", "dishMenu", "pageMenu", "postOrder" ];

exports.getSignWithPOI = function(e) {
    var i = (0, t.getMixUrlParam)("sign") || r.default.getSignWithPOI(e) || "";
    return i && r.default.setSignWithPOI(i, e), i;
};

exports.checkNeedSign = function(e) {
    return !!e && i.some(function(r) {
        return -1 !== e.indexOf(r);
    });
};