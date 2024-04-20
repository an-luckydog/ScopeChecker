var e = require("../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("./entity")), r = Behavior({
    created: function() {
        var e = (0, t.getPageId)(this);
        this.entity = t.default.children.get(e);
    }
});

exports.default = r;