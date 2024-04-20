var e = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Lookup = void 0;

var r = require("../../../b/helpers/createForOfIteratorHelper"), t = require("../../../b/helpers/classCallCheck"), n = require("../../../b/helpers/createClass"), o = e(require("../constants/error_msgs")), i = require("../utils/clonable"), a = function() {
    function e() {
        t(this, e), this._map = void 0, this._map = new Map();
    }
    return n(e, [ {
        key: "getMap",
        value: function() {
            return this._map;
        }
    }, {
        key: "add",
        value: function(e, r) {
            if (null == e) throw new Error(o.NULL_ARGUMENT);
            if (null == r) throw new Error(o.NULL_ARGUMENT);
            var t = this._map.get(e);
            void 0 !== t ? t.push(r) : this._map.set(e, [ r ]);
        }
    }, {
        key: "get",
        value: function(e) {
            if (null == e) throw new Error(o.NULL_ARGUMENT);
            var r = this._map.get(e);
            if (void 0 !== r) return r;
            throw new Error(o.KEY_NOT_FOUND);
        }
    }, {
        key: "remove",
        value: function(e) {
            if (null == e) throw new Error(o.NULL_ARGUMENT);
            if (!this._map.delete(e)) throw new Error(o.KEY_NOT_FOUND);
        }
    }, {
        key: "removeIntersection",
        value: function(e) {
            var r = this;
            this.traverse(function(t, n) {
                var o = e.hasKey(t) ? e.get(t) : void 0;
                if (void 0 !== o) {
                    var i = n.filter(function(e) {
                        return !o.some(function(r) {
                            return e === r;
                        });
                    });
                    r._setValue(t, i);
                }
            });
        }
    }, {
        key: "removeByCondition",
        value: function(e) {
            var t = this, n = [];
            return this._map.forEach(function(o, i) {
                var a, u = [], s = r(o);
                try {
                    for (s.s(); !(a = s.n()).done; ) {
                        var l = a.value;
                        e(l) ? n.push(l) : u.push(l);
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    s.e(e);
                } finally {
                    s.f();
                }
                t._setValue(i, u);
            }), n;
        }
    }, {
        key: "hasKey",
        value: function(e) {
            if (null == e) throw new Error(o.NULL_ARGUMENT);
            return this._map.has(e);
        }
    }, {
        key: "clone",
        value: function() {
            var r = new e();
            return this._map.forEach(function(e, t) {
                e.forEach(function(e) {
                    return r.add(t, (0, i.isClonable)(e) ? e.clone() : e);
                });
            }), r;
        }
    }, {
        key: "traverse",
        value: function(e) {
            this._map.forEach(function(r, t) {
                e(t, r);
            });
        }
    }, {
        key: "_setValue",
        value: function(e, r) {
            r.length > 0 ? this._map.set(e, r) : this._map.delete(e);
        }
    } ]), e;
}();

exports.Lookup = a;