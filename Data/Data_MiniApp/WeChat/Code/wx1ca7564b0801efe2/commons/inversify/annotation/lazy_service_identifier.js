Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LazyServiceIdentifier = void 0;

var e = require("../../../b/helpers/classCallCheck"), r = require("../../../b/helpers/createClass"), i = function() {
    function i(r) {
        e(this, i), this._cb = void 0, this._cb = r;
    }
    return r(i, [ {
        key: "unwrap",
        value: function() {
            return this._cb();
        }
    } ]), i;
}();

exports.LazyServiceIdentifier = i;