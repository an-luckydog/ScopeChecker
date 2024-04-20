Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../b/helpers/createClass"), t = require("../b/helpers/classCallCheck"), n = e(function e(n, s, i) {
    t(this, e), this.fn = n, this.context = s, this.once = i;
}), s = function() {
    function s() {
        t(this, s), this.events = void 0, this.events = {};
    }
    return e(s, [ {
        key: "emit",
        value: function(e) {
            for (var t = this, n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) s[i - 1] = arguments[i];
            if (this.events[e]) return this.events[e].map(function(n) {
                return n.once && t.removeListener(e, n.fn, void 0, !0), n.fn.apply(n.context, s);
            });
        }
    }, {
        key: "on",
        value: function(e, t, s, i) {
            if ("function" != typeof t) throw new TypeError("The listener must be a function");
            var r = new n(t, s || this, i);
            this.events[e] || (this.events[e] = []), this.events[e].push(r);
        }
    }, {
        key: "once",
        value: function(e, t, n) {
            return this.on(e, t, n, !0);
        }
    }, {
        key: "removeListener",
        value: function(e, t, n, s) {
            if (this.events[e]) {
                var i = [];
                this.events[e].forEach(function(e) {
                    (e.fn !== t || s && !e.once || n && e.context !== n) && i.push(e);
                }), i.length ? this.events[e] = i : delete this.events[e];
            }
        }
    }, {
        key: "removeAllListeners",
        value: function(e) {
            e ? this.events[e] && delete this.events[e] : this.events = {};
        }
    }, {
        key: "off",
        value: function(e, t, n, s) {
            this.removeListener(e, t, n, s);
        }
    }, {
        key: "addListener",
        value: function(e, t, n) {
            this.on(e, t, n);
        }
    } ]), s;
}();

exports.default = s;