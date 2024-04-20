Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.QueryableString = void 0;

var e = require("../../../b/helpers/classCallCheck"), t = require("../../../b/helpers/createClass"), r = function() {
    function r(t) {
        e(this, r), this.str = void 0, this.str = t;
    }
    return t(r, [ {
        key: "startsWith",
        value: function(e) {
            return 0 === this.str.indexOf(e);
        }
    }, {
        key: "endsWith",
        value: function(e) {
            var t, r = e.split("").reverse().join("");
            return t = this.str.split("").reverse().join(""), this.startsWith.call({
                str: t
            }, r);
        }
    }, {
        key: "contains",
        value: function(e) {
            return -1 !== this.str.indexOf(e);
        }
    }, {
        key: "equals",
        value: function(e) {
            return this.str === e;
        }
    }, {
        key: "value",
        value: function() {
            return this.str;
        }
    } ]), r;
}();

exports.QueryableString = r;