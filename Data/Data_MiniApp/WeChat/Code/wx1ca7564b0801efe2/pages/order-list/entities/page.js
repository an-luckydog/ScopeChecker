var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.entities = void 0;

var i = require("../../../commons/inversify"), t = require("../common/constants"), r = e(require("./orderList")), o = e(require("./event")), n = e(require("./invoice")), u = new i.ContainerModule(function(e) {
    e(t.LIST_TYPES.LIST).to(r.default).inSingletonScope(), e(t.LIST_TYPES.EVENT).to(o.default).inSingletonScope(), 
    e(t.LIST_TYPES.INVOICE).to(n.default).inSingletonScope();
});

exports.entities = u;