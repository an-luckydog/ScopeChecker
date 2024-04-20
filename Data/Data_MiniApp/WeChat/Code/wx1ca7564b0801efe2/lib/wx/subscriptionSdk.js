var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, require("../../b/helpers/Objectentries");

var r, t = e(require("../../b/regenerator")), s = require("../../b/helpers/objectSpread2"), a = require("../../b/helpers/slicedToArray"), n = require("../../b/helpers/asyncToGenerator"), i = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), u = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), c = e(require("./request")), o = ((r = o || {})[r.NO_PARAMS = 100] = "NO_PARAMS", 
r[r.NO_TEMPLATES = 101] = "NO_TEMPLATES", r[r.GETTING_TEMPLATES_FAILED = 102] = "GETTING_TEMPLATES_FAILED", 
r[r.SAVING_TEMPLATES_FAILED = 103] = "SAVING_TEMPLATES_FAILED", r), l = function() {
    var e = n(t.default.mark(function e(r) {
        var l, p, f, d, b, E, m, T, A, v, g;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (d = (f = r || {}).subscriptionParams, b = f.success, E = f.fail, m = f.complete, 
                T = f.explicit, A = void 0 !== T && T, d && Object.keys(d).length) {
                    e.next = 3;
                    break;
                }
                return e.abrupt("return", (E && E({
                    error: o.NO_PARAMS,
                    errorMessage: "没有订阅场景参数"
                }), void (m && m())));

              case 3:
                return e.prev = 3, e.next = 6, c.default.post("/message/subscribe/templatelist", d);

              case 6:
                v = e.sent, e.next = 12;
                break;

              case 9:
                return e.prev = 9, e.t0 = e.catch(3), e.abrupt("return", (u.Log.addError({
                    name: "获取订阅模版失败",
                    msg: JSON.stringify(null == e.t0 ? void 0 : e.t0.stack)
                }), E && E({
                    error: o.GETTING_TEMPLATES_FAILED,
                    errorMessage: "/subscribe/templatelist --- " + JSON.stringify(e.t0)
                }), void (m && m())));

              case 12:
                (g = (null == (l = v) || null == (p = l.data) ? void 0 : p.templateIdList) || []).length ? i.default.requestSubscribeMessage({
                    tmplIds: g,
                    explicit: A,
                    success: function() {
                        var e = n(t.default.mark(function e(r) {
                            var n, i;
                            return t.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = Object.entries(r), i = [], n.forEach(function(e) {
                                        var r = a(e, 2), t = r[0], s = r[1];
                                        "errMsg" !== t && i.push({
                                            templateId: t,
                                            subscribeStatus: s
                                        });
                                    }), e.prev = 2, e.next = 5, c.default.post("/message/subscribe/saveresult", s(s({}, d), {}, {
                                        subscribeList: i
                                    }));

                                  case 5:
                                    b && b(r), e.next = 11;
                                    break;

                                  case 8:
                                    e.prev = 8, e.t0 = e.catch(2), u.Log.addError({
                                        name: "保存订阅失败",
                                        msg: JSON.stringify(null == e.t0 ? void 0 : e.t0.stack)
                                    }), E && E({
                                        error: o.SAVING_TEMPLATES_FAILED,
                                        errorMessage: "/subscribe/saveresult ---- " + JSON.stringify(e.t0)
                                    });

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 2, 8 ] ]);
                        }));
                        return function(r) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    fail: function(e) {
                        E && E(e);
                    },
                    complete: function() {
                        m && m();
                    }
                }) : (E && E({
                    error: o.NO_TEMPLATES,
                    errorMessage: "没有可订阅的模版"
                }), m && m());

              case 14:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 3, 9 ] ]);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}();

exports.default = l;