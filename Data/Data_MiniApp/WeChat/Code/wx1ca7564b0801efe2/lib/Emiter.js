var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var s = require("../b/helpers/classCallCheck"), t = require("../b/helpers/createClass"), r = e(require("./mix/log")), i = function() {
    function e() {
        s(this, e), this.listeners = {};
    }
    return t(e, [ {
        key: "on",
        value: function(e, s) {
            this.listeners.hasOwnProperty(e) || (this.listeners[e] = []), this.listeners[e].push(s);
        }
    }, {
        key: "once",
        value: function(e, s) {
            s.once = !0, this.listeners.hasOwnProperty(e) || (this.listeners[e] = []), this.listeners[e].push(s);
        }
    }, {
        key: "off",
        value: function(e, s) {
            if (this.listeners.hasOwnProperty(e)) {
                var t = [];
                this.listeners[e].forEach(function(e) {
                    e === s && t.push(e);
                }), this.listeners[e].length = 0, this.listeners[e] = t;
            }
        }
    }, {
        key: "clean",
        value: function() {
            var e = this;
            Object.keys(this.listeners).forEach(function(s) {
                e.listeners[s].length = 0, e.listeners[s] = [];
            });
        }
    }, {
        key: "emit",
        value: function(e, s) {
            var t = this;
            setTimeout(function() {
                if (t.listeners.hasOwnProperty(e)) {
                    var i = [];
                    t.listeners[e].forEach(function(t) {
                        try {
                            t(s);
                        } catch (s) {
                            s = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(s);
                            r.default.addLog("[Pike]", "emit ".concat(e, " happened error: ").concat(s + ""));
                        }
                        t.once || i.push(t);
                    }), t.listeners[e].length = 0, t.listeners[e] = i;
                }
            }, 0);
        }
    } ]), e;
}();

exports.default = i;