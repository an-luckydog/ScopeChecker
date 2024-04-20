Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createUserInfoRequest = void 0;

var e = require("../../lib/wx/app-info"), t = require("../../constants/decorate"), r = require("../../api/portal");

exports.createUserInfoRequest = function(a) {
    var n = a.restaurantViewId, i = a.tenantId;
    return (0, r.getIndividualitySelfCenterInfo)({
        restaurantViewId: n,
        tenantId: i,
        previewFlag: (0, e.getNewApp)().diancanGlobalData.getPreview(t.CONTAINER_NAME.USER_INFO)
    });
};