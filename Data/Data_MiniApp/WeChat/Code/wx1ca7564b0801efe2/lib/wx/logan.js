var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initLogan = void 0;

var r = e(require("../../b/regenerator")), n = require("../../b/helpers/asyncToGenerator"), t = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), a = require("./logConfig"), o = function() {
    var e = n(r.default.mark(function e() {
        var n;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, t.LazyLoad.requireAsync("../../../async-main/logan.js");

              case 3:
                n = e.sent.Logan, t.Log.init({
                    topic: "app.com.sankuai.rmsmenuorderfe.miniapp.logan",
                    devMode: "production" !== (0, t.getEnv)(),
                    userConfig: a.LLOG_CONFIG
                }, n), e.next = 10;
                break;

              case 7:
                e.prev = 7, e.t0 = e.catch(0), t.Log.addError({
                    name: "logan加载失败",
                    msg: JSON.stringify(e.t0)
                }, {
                    category: "resourceError"
                });

              case 10:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 0, 7 ] ]);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}();

exports.initLogan = o;