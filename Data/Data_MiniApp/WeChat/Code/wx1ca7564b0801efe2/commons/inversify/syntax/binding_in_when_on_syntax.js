Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BindingInWhenOnSyntax = void 0;

var n = require("../../../b/helpers/classCallCheck"), e = require("../../../b/helpers/createClass"), t = require("./binding_in_syntax"), i = require("./binding_on_syntax"), a = require("./binding_when_syntax"), r = function() {
    function r(e) {
        n(this, r), this._bindingInSyntax = void 0, this._bindingWhenSyntax = void 0, this._bindingOnSyntax = void 0, 
        this._binding = void 0, this._binding = e, this._bindingWhenSyntax = new a.BindingWhenSyntax(this._binding), 
        this._bindingOnSyntax = new i.BindingOnSyntax(this._binding), this._bindingInSyntax = new t.BindingInSyntax(e);
    }
    return e(r, [ {
        key: "inRequestScope",
        value: function() {
            return this._bindingInSyntax.inRequestScope();
        }
    }, {
        key: "inSingletonScope",
        value: function() {
            return this._bindingInSyntax.inSingletonScope();
        }
    }, {
        key: "inTransientScope",
        value: function() {
            return this._bindingInSyntax.inTransientScope();
        }
    }, {
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
    } ]), r;
}();

exports.BindingInWhenOnSyntax = r;