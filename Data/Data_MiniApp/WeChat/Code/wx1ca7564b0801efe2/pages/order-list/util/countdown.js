Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Countdown = void 0;

var t = require("../../../b/helpers/classCallCheck"), e = require("../../../b/helpers/createClass"), i = function() {
    function i(e, o, n) {
        t(this, i), this.expireSeconds = e, this.callback = o, this.displayCallback = n, 
        this.timeoutId = null;
    }
    return e(i, [ {
        key: "start",
        value: function() {
            !this.expireSeconds || this.expireSeconds <= 0 ? this.clearTimeout() : this.countdownWithTimeout(this.expireSeconds);
        }
    }, {
        key: "countdownWithTimeout",
        value: function(t) {
            var e = this;
            this.displayCallback(this.formatDisplayTime(t)), t <= 0 ? this.callback() : this.timeoutId = setTimeout(function() {
                e.countdownWithTimeout(t - 1);
            }, 1e3);
        }
    }, {
        key: "clearTimeout",
        value: function(t) {
            function e() {
                return t.apply(this, arguments);
            }
            return e.toString = function() {
                return t.toString();
            }, e;
        }(function() {
            this.timeoutId && clearTimeout(this.timeoutId);
        })
    }, {
        key: "formatDisplayTime",
        value: function(t) {
            var e = Math.floor(t / 60);
            return "".concat(String(e).padStart(2, "0"), ":").concat(String(t % 60).padStart(2, "0"));
        }
    } ]), i;
}();

exports.Countdown = i;