Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ModuleActivationStore = void 0;

var e = require("../../../b/helpers/classCallCheck"), t = require("../../../b/helpers/createClass"), n = require("./lookup"), o = function() {
    function o() {
        e(this, o), this._map = new Map();
    }
    return t(o, [ {
        key: "remove",
        value: function(e) {
            if (this._map.has(e)) {
                var t = this._map.get(e);
                return this._map.delete(e), t;
            }
            return this._getEmptyHandlersStore();
        }
    }, {
        key: "addDeactivation",
        value: function(e, t, n) {
            this._getModuleActivationHandlers(e).onDeactivations.add(t, n);
        }
    }, {
        key: "addActivation",
        value: function(e, t, n) {
            this._getModuleActivationHandlers(e).onActivations.add(t, n);
        }
    }, {
        key: "clone",
        value: function() {
            var e = new o();
            return this._map.forEach(function(t, n) {
                e._map.set(n, {
                    onActivations: t.onActivations.clone(),
                    onDeactivations: t.onDeactivations.clone()
                });
            }), e;
        }
    }, {
        key: "_getModuleActivationHandlers",
        value: function(e) {
            var t = this._map.get(e);
            return void 0 === t && (t = this._getEmptyHandlersStore(), this._map.set(e, t)), 
            t;
        }
    }, {
        key: "_getEmptyHandlersStore",
        value: function() {
            return {
                onActivations: new n.Lookup(),
                onDeactivations: new n.Lookup()
            };
        }
    } ]), o;
}();

exports.ModuleActivationStore = o;