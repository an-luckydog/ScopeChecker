Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Request = void 0;

var e = require("../../../b/helpers/classCallCheck"), t = require("../../../b/helpers/createClass"), i = require("../utils/id"), s = function() {
    function s(t, r, h, n, u) {
        e(this, s), this.id = void 0, this.serviceIdentifier = void 0, this.parentContext = void 0, 
        this.parentRequest = void 0, this.bindings = void 0, this.childRequests = void 0, 
        this.target = void 0, this.requestScope = void 0, this.id = (0, i.id)(), this.serviceIdentifier = t, 
        this.parentContext = r, this.parentRequest = h, this.target = u, this.childRequests = [], 
        this.bindings = Array.isArray(n) ? n : [ n ], this.requestScope = null === h ? new Map() : null;
    }
    return t(s, [ {
        key: "addChildRequest",
        value: function(e, t, i) {
            var r = new s(e, this.parentContext, this, t, i);
            return this.childRequests.push(r), r;
        }
    } ]), s;
}();

exports.Request = s;