var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.silentLogin = function(e) {
    return a.apply(this, arguments);
};

var r = e(require("../b/regenerator")), t = require("../b/helpers/asyncToGenerator"), n = e(require("../miniprogram_npm/@mtfe/saas-user-auth/index.js"));

function a() {
    return (a = t(r.default.mark(function e(t) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (n.default.getMemberToken()) {
                    e.next = 14;
                    break;
                }
                return e.prev = 1, e.next = 4, n.default.getMemberTokenSync();

              case 4:
                if (e.t0 = e.sent, !e.t0) {
                    e.next = 7;
                    break;
                }
                e.t0 = t;

              case 7:
                if (e.t1 = e.t0, !e.t1) {
                    e.next = 10;
                    break;
                }
                t();

              case 10:
                e.next = 14;
                break;

              case 12:
                e.prev = 12, e.t2 = e.catch(1);

              case 14:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 12 ] ]);
    }))).apply(this, arguments);
}