Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createCustomPageRequest = void 0;

var e = require("../../api/customPage");

exports.createCustomPageRequest = function(t) {
    var a = t.restaurantViewId, n = t.tenantId, r = t.bizId, o = t.bizIdType, i = t.containerInstanceId, s = t.mtShopId;
    return (0, e.getCustomPageInfo)({
        restaurantViewId: a,
        tenantId: n,
        bizId: r,
        bizIdType: o,
        containerName: "customize-container",
        containerInstanceId: i,
        mtShopId: s || 0
    });
};