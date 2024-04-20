var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../b/regenerator")), i = require("../b/helpers/asyncToGenerator"), n = require("../b/helpers/classCallCheck"), r = require("../b/helpers/createClass"), s = require("../b/helpers/inherits"), u = require("../b/helpers/createSuper"), a = require("./wx/pike"), o = require("./mix/util"), c = e(require("./Emiter")), l = e(require("./mix/log")), p = require("../miniprogram_npm/@mtfe/rms-sdk/index.js"), h = function(e) {
    s(h, e);
    var c = u(h);
    function h(e) {
        var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        n(this, h), t = c.call(this);
        var r = "production" === (0, o.getEnv)(), s = "ST" === (0, o.getEnv)() || "staging" === (0, 
        o.getEnv)();
        return t.swimlane = "", t.params = e || {}, t.waitTime = i.waitTime || 5e3, r ? (t.env = "product", 
        t.businessId = i.productBusinessId) : s ? (t.env = "stage", t.businessId = i.stageBusinessId) : (t.env = "test", 
        t.businessId = i.testBusinessId), t.pike = null, t.pikeConstructor = null, i.Pike ? (t.pikeConstructor = i.Pike, 
        t._initConnect(i.Pike)) : (0, a.initPike)().then(function(e) {
            e && (t.pikeConstructor = e, t._initConnect(e));
        }), t;
    }
    return r(h, [ {
        key: "_initConnect",
        value: function(e) {
            this.close(), this.pike = new e(this.businessId, {
                autoConnect: !1,
                extra: this.params,
                query: {},
                env: this.env,
                swimlane: this.swimlane,
                keepAlive: !0,
                isDebug: !0
            }), this._registerEvent(), this.pike.open();
        }
    }, {
        key: "_registerEvent",
        value: function() {
            var e = this;
            this.pike.onConnect(function() {}), this.pike.onReady(function() {
                e.emit("connect");
            }), this.pike.onReconnect(function() {}), this.pike.onMessage(function(t) {
                e.emit("message", h._tryParseJson(t));
            }), this.pike.onClose(function(e) {});
        }
    }, {
        key: "close",
        value: function() {
            this.pike && this.pike.close();
        }
    }, {
        key: "send",
        value: function(e) {
            var n = this;
            if (this.pike && this.pike.isReady()) (0, p.transaction)("PIKE_SEND", function() {
                var r = i(t.default.mark(function i(r) {
                    return t.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, t.next = 3, n.pike.send(e, null, null);

                          case 3:
                            t.next = 8;
                            break;

                          case 5:
                            t.prev = 5, t.t0 = t.catch(0), r.fail(500);

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, i, null, [ [ 0, 5 ] ]);
                }));
                return function(e) {
                    return r.apply(this, arguments);
                };
            }()); else try {
                l.default.addError("[Pike] Status Check Error", "msg:" + JSON.stringify(e), {
                    level: "info"
                });
            } catch (e) {}
        }
    } ], [ {
        key: "_tryParseJson",
        value: function(e) {
            try {
                return JSON.parse(e);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return e;
            }
        }
    } ]), h;
}(c.default);

exports.default = h;