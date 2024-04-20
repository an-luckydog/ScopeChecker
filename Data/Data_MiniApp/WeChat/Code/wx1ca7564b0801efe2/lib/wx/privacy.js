var r = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initPrivacy = void 0;

var e = r(require("../../b/regenerator")), a = require("../../b/helpers/asyncToGenerator"), n = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), i = require("./app-info"), t = (wx, 
function() {
    var r = a(e.default.mark(function r() {
        var a;
        return e.default.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if ((0, i.isMerchantWxApp)()) {
                    r.next = 11;
                    break;
                }
                return r.prev = 1, r.next = 4, n.LazyLoad.requireAsync("../../../async-main/privacy.js");

              case 4:
                a = r.sent, a.PrivacyWx, a.initPrivacy({
                    app: "meituansaas_wxapp",
                    devMode: !1,
                    errorReport: function(r) {
                        var e = r.apiName, a = r.err, i = r.args, t = r.enablePrivacyAPI;
                        n.Log.addError("[隐私api调用异常]", "\n          apiName: ".concat(e, ",\n          errMsg: ").concat(JSON.stringify(a), ",\n          callArgs: ").concat(JSON.stringify(i), ",\n          enablePrivacyAPI: ").concat(JSON.stringify(t), "\n        "));
                    }
                }), r.next = 11;
                break;

              case 8:
                r.prev = 8, r.t0 = r.catch(1), n.Log.addError({
                    name: "隐私合规文件异步加载失败",
                    msg: JSON.stringify(r.t0)
                }, {
                    category: "resourceError"
                });

              case 11:
              case "end":
                return r.stop();
            }
        }, r, null, [ [ 1, 8 ] ]);
    }));
    return function() {
        return r.apply(this, arguments);
    };
}());

exports.initPrivacy = t;