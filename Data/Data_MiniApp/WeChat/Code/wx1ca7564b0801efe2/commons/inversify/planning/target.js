var e = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Target = void 0;

var t = require("../../../b/helpers/createForOfIteratorHelper"), r = require("../../../b/helpers/typeof"), a = require("../../../b/helpers/classCallCheck"), i = require("../../../b/helpers/createClass"), n = e(require("../constants/metadata_keys")), s = require("../utils/id"), u = require("../utils/serialization"), o = require("./metadata"), l = require("./queryable_string"), h = function() {
    function e(t, i, h, c) {
        a(this, e), this.id = void 0, this.type = void 0, this.serviceIdentifier = void 0, 
        this.name = void 0, this.identifier = void 0, this.key = void 0, this.metadata = void 0, 
        this.id = (0, s.id)(), this.type = t, this.serviceIdentifier = h;
        var d = "symbol" == r(i) ? (0, u.getSymbolDescription)(i) : i;
        this.name = new l.QueryableString(d || ""), this.identifier = i, this.metadata = new Array();
        var f = null;
        "string" == typeof c ? f = new o.Metadata(n.NAMED_TAG, c) : c instanceof o.Metadata && (f = c), 
        null !== f && this.metadata.push(f);
    }
    return i(e, [ {
        key: "hasTag",
        value: function(e) {
            var r, a = t(this.metadata);
            try {
                for (a.s(); !(r = a.n()).done; ) {
                    if (r.value.key === e) return !0;
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a.e(e);
            } finally {
                a.f();
            }
            return !1;
        }
    }, {
        key: "isArray",
        value: function() {
            return this.hasTag(n.MULTI_INJECT_TAG);
        }
    }, {
        key: "matchesArray",
        value: function(e) {
            return this.matchesTag(n.MULTI_INJECT_TAG)(e);
        }
    }, {
        key: "isNamed",
        value: function() {
            return this.hasTag(n.NAMED_TAG);
        }
    }, {
        key: "isTagged",
        value: function() {
            return this.metadata.some(function(e) {
                return n.NON_CUSTOM_TAG_KEYS.every(function(t) {
                    return e.key !== t;
                });
            });
        }
    }, {
        key: "isOptional",
        value: function() {
            return this.matchesTag(n.OPTIONAL_TAG)(!0);
        }
    }, {
        key: "getNamedTag",
        value: function() {
            return this.isNamed() ? this.metadata.filter(function(e) {
                return e.key === n.NAMED_TAG;
            })[0] : null;
        }
    }, {
        key: "getCustomTags",
        value: function() {
            return this.isTagged() ? this.metadata.filter(function(e) {
                return n.NON_CUSTOM_TAG_KEYS.every(function(t) {
                    return e.key !== t;
                });
            }) : null;
        }
    }, {
        key: "matchesNamedTag",
        value: function(e) {
            return this.matchesTag(n.NAMED_TAG)(e);
        }
    }, {
        key: "matchesTag",
        value: function(e) {
            var r = this;
            return function(a) {
                var i, n = t(r.metadata);
                try {
                    for (n.s(); !(i = n.n()).done; ) {
                        var s = i.value;
                        if (s.key === e && s.value === a) return !0;
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    n.e(e);
                } finally {
                    n.f();
                }
                return !1;
            };
        }
    } ]), e;
}();

exports.Target = h;