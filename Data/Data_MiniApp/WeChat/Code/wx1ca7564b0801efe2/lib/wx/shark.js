var r = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initShark = void 0;

var e = r(require("../../b/regenerator")), t = require("../../b/helpers/asyncToGenerator"), n = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), a = require("./logConfig"), i = function() {
    var r = t(e.default.mark(function r() {
        var t;
        return e.default.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.prev = 0, r.next = 3, n.LazyLoad.requireAsync("../../../async-main/shark.js");

              case 3:
                t = r.sent.Shark, n.Shark.init({
                    appKey: a.APP_KEY,
                    env: "production" !== (0, n.getEnv)() ? "dev" : "product"
                }, t), r.next = 10;
                break;

              case 7:
                r.prev = 7, r.t0 = r.catch(0), n.Log.addError({
                    name: "shark加载失败",
                    msg: JSON.stringify(r.t0)
                }, {
                    category: "resourceError"
                });

              case 10:
              case "end":
                return r.stop();
            }
        }, r, null, [ [ 0, 7 ] ]);
    }));
    return function() {
        return r.apply(this, arguments);
    };
}();

exports.initShark = i;