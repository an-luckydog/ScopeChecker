var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initSafetyRequest = void 0;

var r = require("../../miniprogram_npm/@mtfe/weapp-safety-request/index.js"), i = e(require("../../miniprogram_npm/@mtfe/wx-jsguard/index.js")), n = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), t = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), a = require("../../miniprogram_npm/@dp/owl-wxapp/index.js"), p = e(require("../../miniprogram_npm/@mtfe/saas-user-auth/index.js")), o = require("../../config/index");

exports.initSafetyRequest = function(e) {
    try {
        (0, r.init)({
            jsGuardInstant: i.default.init({
                appid: t.default.MPInfo.getAppId(),
                openid: p.default.getOpenId(),
                owl: a.owl,
                noSensor: !!t.default.MPInfo.isMerchant()
            }),
            owlInstant: a.owl,
            yodaPath: "../../member/miniprogram_npm/@mtfe/yoda-static-weapp/modules/index/index",
            yodaEnv: "production" === e ? "prod" : "test",
            params: function() {
                return {
                    csecappid: t.default.MPInfo.getAppId(),
                    csecversionname: o.BUILD_PUBLIC_VERSION
                };
            }
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        n.Log.addError({
            name: "初始化安全基线失败",
            msg: JSON.stringify(e)
        });
    }
};