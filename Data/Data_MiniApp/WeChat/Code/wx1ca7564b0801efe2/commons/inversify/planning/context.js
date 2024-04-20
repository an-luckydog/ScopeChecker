Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Context = void 0;

var e = require("../../../b/helpers/classCallCheck"), t = require("../../../b/helpers/createClass"), i = require("../utils/id"), r = function() {
    function r(t) {
        e(this, r), this.id = void 0, this.container = void 0, this.plan = void 0, this.currentRequest = void 0, 
        this.id = (0, i.id)(), this.container = t;
    }
    return t(r, [ {
        key: "addPlan",
        value: function(e) {
            this.plan = e;
        }
    }, {
        key: "setCurrentRequest",
        value: function(e) {
            this.currentRequest = e;
        }
    } ]), r;
}();

exports.Context = r;