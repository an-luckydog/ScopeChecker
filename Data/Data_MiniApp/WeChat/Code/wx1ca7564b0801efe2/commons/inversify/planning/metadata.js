var e = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Metadata = void 0;

var t = require("../../../b/helpers/classCallCheck"), r = require("../../../b/helpers/createClass"), a = e(require("../constants/metadata_keys")), i = function() {
    function e(r, a) {
        t(this, e), this.key = void 0, this.value = void 0, this.key = r, this.value = a;
    }
    return r(e, [ {
        key: "toString",
        value: function() {
            return this.key === a.NAMED_TAG ? "named: ".concat(String(this.value).toString(), " ") : "tagged: { key:".concat(this.key.toString(), ", value: ").concat(String(this.value), " }");
        }
    } ]), e;
}();

exports.Metadata = i;