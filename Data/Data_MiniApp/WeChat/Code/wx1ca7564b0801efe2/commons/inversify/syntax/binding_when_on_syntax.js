Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BindingWhenOnSyntax = void 0;

var n = require("../../../b/helpers/classCallCheck"), e = require("../../../b/helpers/createClass"), t = require("./binding_on_syntax"), i = require("./binding_when_syntax"), a = function() {
    function a(e) {
        n(this, a), this._bindingWhenSyntax = void 0, this._bindingOnSyntax = void 0, this._binding = void 0, 
        this._binding = e, this._bindingWhenSyntax = new i.BindingWhenSyntax(this._binding), 
        this._bindingOnSyntax = new t.BindingOnSyntax(this._binding);
    }
    return e(a, [ {
        key: "when",
        value: function(n) {
            return this._bindingWhenSyntax.when(n);
        }
    }, {
        key: "whenTargetNamed",
        value: function(n) {
            return this._bindingWhenSyntax.whenTargetNamed(n);
        }
    }, {
        key: "whenTargetIsDefault",
        value: function() {
            return this._bindingWhenSyntax.whenTargetIsDefault();
        }
    }, {
        key: "whenTargetTagged",
        value: function(n, e) {
            return this._bindingWhenSyntax.whenTargetTagged(n, e);
        }
    }, {
        key: "whenInjectedInto",
        value: function(n) {
            return this._bindingWhenSyntax.whenInjectedInto(n);
        }
    }, {
        key: "whenParentNamed",
        value: function(n) {
            return this._bindingWhenSyntax.whenParentNamed(n);
        }
    }, {
        key: "whenParentTagged",
        value: function(n, e) {
            return this._bindingWhenSyntax.whenParentTagged(n, e);
        }
    }, {
        key: "whenAnyAncestorIs",
        value: function(n) {
            return this._bindingWhenSyntax.whenAnyAncestorIs(n);
        }
    }, {
        key: "whenNoAncestorIs",
        value: function(n) {
            return this._bindingWhenSyntax.whenNoAncestorIs(n);
        }
    }, {
        key: "whenAnyAncestorNamed",
        value: function(n) {
            return this._bindingWhenSyntax.whenAnyAncestorNamed(n);
        }
    }, {
        key: "whenAnyAncestorTagged",
        value: function(n, e) {
            return this._bindingWhenSyntax.whenAnyAncestorTagged(n, e);
        }
    }, {
        key: "whenNoAncestorNamed",
        value: function(n) {
            return this._bindingWhenSyntax.whenNoAncestorNamed(n);
        }
    }, {
        key: "whenNoAncestorTagged",
        value: function(n, e) {
            return this._bindingWhenSyntax.whenNoAncestorTagged(n, e);
        }
    }, {
        key: "whenAnyAncestorMatches",
        value: function(n) {
            return this._bindingWhenSyntax.whenAnyAncestorMatches(n);
        }
    }, {
        key: "whenNoAncestorMatches",
        value: function(n) {
            return this._bindingWhenSyntax.whenNoAncestorMatches(n);
        }
    }, {
        key: "onActivation",
        value: function(n) {
            return this._bindingOnSyntax.onActivation(n);
        }
    }, {
        key: "onDeactivation",
        value: function(n) {
            return this._bindingOnSyntax.onDeactivation(n);
        }
    } ]), a;
}();

exports.BindingWhenOnSyntax = a;