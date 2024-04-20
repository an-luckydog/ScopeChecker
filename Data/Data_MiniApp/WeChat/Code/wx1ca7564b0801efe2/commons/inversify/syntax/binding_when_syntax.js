Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BindingWhenSyntax = void 0;

var n = require("../../../b/helpers/classCallCheck"), t = require("../../../b/helpers/createClass"), i = require("./binding_on_syntax"), e = require("./constraint_helpers"), r = function() {
    function r(t) {
        n(this, r), this._binding = void 0, this._binding = t;
    }
    return t(r, [ {
        key: "when",
        value: function(n) {
            return this._binding.constraint = n, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenTargetNamed",
        value: function(n) {
            return this._binding.constraint = (0, e.namedConstraint)(n), new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenTargetIsDefault",
        value: function() {
            return this._binding.constraint = function(n) {
                return null !== n && (null !== n.target && !n.target.isNamed() && !n.target.isTagged());
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenTargetTagged",
        value: function(n, t) {
            return this._binding.constraint = (0, e.taggedConstraint)(n)(t), new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenInjectedInto",
        value: function(n) {
            return this._binding.constraint = function(t) {
                return null !== t && (0, e.typeConstraint)(n)(t.parentRequest);
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenParentNamed",
        value: function(n) {
            return this._binding.constraint = function(t) {
                return null !== t && (0, e.namedConstraint)(n)(t.parentRequest);
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenParentTagged",
        value: function(n, t) {
            return this._binding.constraint = function(i) {
                return null !== i && (0, e.taggedConstraint)(n)(t)(i.parentRequest);
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenAnyAncestorIs",
        value: function(n) {
            return this._binding.constraint = function(t) {
                return null !== t && (0, e.traverseAncerstors)(t, (0, e.typeConstraint)(n));
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenNoAncestorIs",
        value: function(n) {
            return this._binding.constraint = function(t) {
                return null !== t && !(0, e.traverseAncerstors)(t, (0, e.typeConstraint)(n));
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenAnyAncestorNamed",
        value: function(n) {
            return this._binding.constraint = function(t) {
                return null !== t && (0, e.traverseAncerstors)(t, (0, e.namedConstraint)(n));
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenNoAncestorNamed",
        value: function(n) {
            return this._binding.constraint = function(t) {
                return null !== t && !(0, e.traverseAncerstors)(t, (0, e.namedConstraint)(n));
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenAnyAncestorTagged",
        value: function(n, t) {
            return this._binding.constraint = function(i) {
                return null !== i && (0, e.traverseAncerstors)(i, (0, e.taggedConstraint)(n)(t));
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenNoAncestorTagged",
        value: function(n, t) {
            return this._binding.constraint = function(i) {
                return null !== i && !(0, e.traverseAncerstors)(i, (0, e.taggedConstraint)(n)(t));
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenAnyAncestorMatches",
        value: function(n) {
            return this._binding.constraint = function(t) {
                return null !== t && (0, e.traverseAncerstors)(t, n);
            }, new i.BindingOnSyntax(this._binding);
        }
    }, {
        key: "whenNoAncestorMatches",
        value: function(n) {
            return this._binding.constraint = function(t) {
                return null !== t && !(0, e.traverseAncerstors)(t, n);
            }, new i.BindingOnSyntax(this._binding);
        }
    } ]), r;
}();

exports.BindingWhenSyntax = r;