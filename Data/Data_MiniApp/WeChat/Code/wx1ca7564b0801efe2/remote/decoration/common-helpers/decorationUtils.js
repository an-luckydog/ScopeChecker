var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportAd = function(e, t, d) {
    var i;
    if (!e) return;
    var o = null == (i = e[d]) ? void 0 : i.advId;
    o && t.currentAdvIdMap && !t.currentAdvIdMap[o] && (t.currentAdvIdMap[o] = 1, r.default.getLimoRuntime().limoUseCustomHandler.advertiseReporter && r.default.getLimoRuntime().limoUseCustomHandler.advertiseReporter.report({
        moduleId: o,
        eventType: 1
    }));
};

var r = e(require("../../../miniprogram_npm/@limo/core/index.js"));