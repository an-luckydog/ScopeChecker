var t = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.typeConstraint = exports.traverseAncerstors = exports.taggedConstraint = exports.namedConstraint = void 0;

var e = t(require("../constants/metadata_keys")), r = require("../planning/metadata"), n = function(t) {
    return function(e) {
        var n = function(r) {
            return null !== r && null !== r.target && r.target.matchesTag(t)(e);
        };
        return n.metaData = new r.Metadata(t, e), n;
    };
}, a = n(e.NAMED_TAG);

exports.typeConstraint = function(t) {
    return function(e) {
        var r = null;
        if (null !== e) {
            if (r = e.bindings[0], "string" == typeof t) return r.serviceIdentifier === t;
            var n = e.bindings[0].implementationType;
            return t === n;
        }
        return !1;
    };
}, exports.namedConstraint = a, exports.taggedConstraint = n, exports.traverseAncerstors = function t(e, r) {
    var n = e.parentRequest;
    return null !== n && (!!r(n) || t(n, r));
};