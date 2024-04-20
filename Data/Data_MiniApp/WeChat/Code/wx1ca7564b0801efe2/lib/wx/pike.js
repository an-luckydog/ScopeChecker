var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initPike = void 0;

var r = e(require("../../b/regenerator")), t = require("../../b/helpers/asyncToGenerator"), n = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), i = function() {
    var e = t(r.default.mark(function e() {
        var t;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, n.LazyLoad.requireAsync("../../../async-main/pike.js");

              case 3:
                return t = e.sent, e.abrupt("return", (t.Pike || n.Log.addError({
                    name: "pike未正常export！！！",
                    msg: ""
                }), t.Pike));

              case 7:
                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", (n.Log.addError({
                    name: "pike加载失败",
                    msg: JSON.stringify(e.t0)
                }, {
                    category: "resourceError"
                }), null));

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

exports.initPike = i;