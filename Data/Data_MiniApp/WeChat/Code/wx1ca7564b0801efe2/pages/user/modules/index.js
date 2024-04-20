var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.handleCardWithoutVip = function(e, t, r, a) {
    return u.apply(this, arguments);
}, exports.jumpWithCardId = function(e, t) {
    var a;
    if (e.indexOf("webview") > -1) {
        var i = e.split("="), o = r(i, 2), s = o[0], c = o[1], u = decodeURIComponent(c).split("?"), l = r(u, 2), d = l[0], f = l[1], p = {};
        f.split("&").forEach(function(e) {
            var t = e.split("="), a = r(t, 2), n = a[0], i = a[1];
            i && (p[n] = i);
        }), t && (p.cardId = t), a = "".concat(s, "=").concat(encodeURIComponent("".concat(d, "?").concat(n.default.stringify(p))));
    } else a = t ? e.replace(/(cardId=)(\d+)/, "$1" + t) : e;
    n.default.navigateTo({
        url: a
    });
};

var t = e(require("../../../b/regenerator")), r = require("../../../b/helpers/slicedToArray"), a = require("../../../b/helpers/asyncToGenerator"), n = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), i = e(require("../../../lib/mix/toast")), o = e(require("../../../lib/mix/loading")), s = require("../../../api/portal"), c = require("../../../constants/ajaxResCode-main");

function u() {
    return (u = a(t.default.mark(function e(r, a, u, l) {
        var d, f, p;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, o.default.show({
                    type: "circle",
                    hasMask: !1,
                    text: "加载中..."
                }), e.next = 4, (0, s.getCardWithoutVip)(a, u);

              case 4:
                if (e.t0 = e.sent, e.t0) {
                    e.next = 7;
                    break;
                }
                e.t0 = {};

              case 7:
                if (d = e.t0, f = d.code, p = d.message, f !== c.LOGIN_RES_CODE.SUCCESS) {
                    e.next = 16;
                    break;
                }
                return i.default.show({
                    content: "领卡成功"
                }), e.next = 14, l();

              case 14:
                e.next = 28;
                break;

              case 16:
                if (f !== c.LOGIN_RES_CODE.CHECK_SHOP || !r) {
                    e.next = 20;
                    break;
                }
                o.default.close(), n.default.navigateTo({
                    url: r
                }), e.next = 28;
                break;

              case 20:
                if (f !== c.LOGIN_RES_CODE.CARD_NON_SUPPORT) {
                    e.next = 27;
                    break;
                }
                return o.default.close(), i.default.show({
                    content: p || "领卡失败"
                }), e.next = 25, l();

              case 25:
                e.next = 28;
                break;

              case 27:
                o.default.close(), i.default.show({
                    content: p || "领卡失败"
                });

              case 28:
                e.next = 33;
                break;

              case 30:
                e.prev = 30, e.t1 = e.catch(0), o.default.close(), i.default.show({
                    content: "领卡失败"
                });

              case 33:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 0, 30 ] ]);
    }))).apply(this, arguments);
}