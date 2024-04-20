Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ContainerSnapshot = void 0;

var e = require("../../../b/helpers/classCallCheck"), i = require("../../../b/helpers/createClass"), t = function() {
    function t() {
        e(this, t), this.bindings = void 0, this.activations = void 0, this.deactivations = void 0, 
        this.middleware = void 0, this.moduleActivationStore = void 0;
    }
    return i(t, null, [ {
        key: "of",
        value: function(e, i, o, n, s) {
            var r = new t();
            return r.bindings = e, r.middleware = i, r.deactivations = n, r.activations = o, 
            r.moduleActivationStore = s, r;
        }
    } ]), t;
}();

exports.ContainerSnapshot = t;