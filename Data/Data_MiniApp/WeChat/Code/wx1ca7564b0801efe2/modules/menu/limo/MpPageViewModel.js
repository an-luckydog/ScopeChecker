Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MpPageViewModel = void 0;

var e = require("../../../b/helpers/createClass"), r = require("../../../b/helpers/classCallCheck"), i = require("../../../b/helpers/inherits"), s = require("../../../b/helpers/createSuper"), a = function(a) {
    i(t, a);
    var l = s(t);
    function t(e) {
        var i;
        r(this, t), i = l.call(this, e);
        var s = e.options;
        return i.urlParams = s || {}, i;
    }
    return e(t);
}(require("./AbMenuPageViewModel").AbMenuPageViewModel);

exports.MpPageViewModel = a;