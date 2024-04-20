Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, t = require("../b/helpers/classCallCheck"), n = require("../b/helpers/createClass"), i = (0, 
require("../commons/inversify").injectable)()(e = function() {
    function e() {
        t(this, e), this.eventChannel = void 0;
    }
    return n(e, [ {
        key: "init",
        value: function(e) {
            this.eventChannel = e;
        }
    }, {
        key: "emit",
        value: function(e, t) {
            var n;
            null == (n = this.eventChannel) || null == n.emit || n.emit(e, t);
        }
    } ]), e;
}()) || e;

exports.default = i;