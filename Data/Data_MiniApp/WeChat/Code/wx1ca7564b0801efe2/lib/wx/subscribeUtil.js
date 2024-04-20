var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SubscribeUtil = void 0;

var r, t, s = require("../../b/helpers/classCallCheck"), a = require("../../b/helpers/createClass"), n = e(require("../../b/regenerator")), u = require("../../b/helpers/asyncToGenerator"), i = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), c = e(require("./log")), l = e(require("./request")), p = {
    getTemplateList: (t = u(n.default.mark(function e() {
        return n.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", l.default.post("/message/subscribe/templatelist", {
                    sourceType: 9,
                    sceneIds: [ 10 ]
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    })), function() {
        return t.apply(this, arguments);
    }),
    saveUserTemplateInfo: (r = u(n.default.mark(function e(r) {
        return n.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", l.default.post("/message/subscribe/saveresult", {
                    sourceType: 9,
                    subscribeList: r
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e) {
        return r.apply(this, arguments);
    })
}, o = function() {
    function e() {
        s(this, e);
    }
    var r, t, l, o;
    return a(e, [ {
        key: "doPushMessage",
        value: (o = u(n.default.mark(function e(r) {
            var t, s;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, this.getTemplateIdFn();

                  case 3:
                    if (!((t = e.sent) && t.length > 0)) {
                        e.next = 16;
                        break;
                    }
                    return e.next = 7, this.apiRequestSubscribeMessage(t);

                  case 7:
                    if (!(s = e.sent) || "requestSubscribeMessage:ok" !== s.errMsg) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 11, this.saveSubscribePush(s);

                  case 11:
                    e.next = 14;
                    break;

                  case 13:
                    c.default.addError("[订阅消息,请求小程序api]", "订阅调用用户取消", {
                        level: "warn"
                    });

                  case 14:
                    e.next = 17;
                    break;

                  case 16:
                    c.default.addError("[订阅消息,请求后端接口，数据为空]", "订阅模板为空", {
                        level: "warn"
                    });

                  case 17:
                    r && r(), e.next = 23;
                    break;

                  case 20:
                    e.prev = 20, e.t0 = e.catch(0), c.default.addError("[订阅消息能力--订阅异常]", e.t0, {
                        level: "error"
                    }), r && r();

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 20 ] ]);
        })), function(e) {
            return o.apply(this, arguments);
        })
    }, {
        key: "getTemplateIdFn",
        value: (l = u(n.default.mark(function e() {
            var r, t;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, p.getTemplateList();

                  case 2:
                    return t = e.sent, e.abrupt("return", (null == t || null == (r = t.data) ? void 0 : r.templateIdList) || []);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return l.apply(this, arguments);
        })
    }, {
        key: "saveSubscribePush",
        value: (t = u(n.default.mark(function e(r) {
            var t, s;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    for (s in t = [], r) "errMsg" !== s && t.push({
                        templateId: s,
                        subscribeStatus: r[s]
                    });
                    return e.next = 4, p.saveUserTemplateInfo(t);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return t.apply(this, arguments);
        })
    }, {
        key: "apiRequestSubscribeMessage",
        value: (r = u(n.default.mark(function e(r) {
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function(e, t) {
                        i.default.requestSubscribeMessage({
                            tmplIds: r,
                            success: function(r) {
                                return e(r);
                            },
                            fail: function(e) {
                                return t(e);
                            }
                        });
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return r.apply(this, arguments);
        })
    } ]), e;
}();

exports.SubscribeUtil = o;