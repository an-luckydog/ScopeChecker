Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../../b/helpers/typeof"), t = require("../constant/context"), r = require("../env"), n = require("../util/util"), i = function() {
    function i(e, t, r) {
        this.err = t, this.cfgManager = e, this.metric = r, e.config.isOriginal || this.startOverWrite();
    }
    var o = i.prototype;
    return o.startOverWrite = function() {
        var e = this;
        try {
            var r = this.cfgManager.get("monitorApi").apis || [];
            r.filter(function(e) {
                return !e.match(/^on/g) && !e.match(/Sync$/g) && "request" !== e;
            }), r.forEach(function(r) {
                t.context[r] && "function" == typeof t.context[r] && Object.defineProperty(t.context, r, {
                    configurable: !0,
                    enumerable: !0,
                    value: e.getOverWriteFn(r)
                });
            });
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            this.err.reportSystemError(e);
        }
    }, o.getOverWriteFn = function(i) {
        var o = t.context[i], a = this.metric, c = this.err, s = this.cfgManager, p = s.config;
        return function() {
            try {
                var u, l = (0, n.getMpVers)(p), g = Date.now();
                arguments && void 0 === arguments[0] && (arguments[0] = {}, arguments.length = arguments.length || 1);
                var f = arguments && arguments[0];
                if ("object" != e(f)) return o.apply(this, arguments);
                var h = s.extensions, v = (0, r.getEnvSync)(), m = {}, y = {
                    apiName: t.sign + "." + i,
                    pageUrl: (0, r.getPageUrl)(s.get("pageUrl")),
                    mpVer: l.mpVer,
                    mpLibVer: l.mpLibVer,
                    network: v.network || h.network || "Unknown",
                    os: h.os || ""
                }, x = f.success;
                f.success = function() {
                    u = u || Date.now(), y.result = !0, x && x.apply(this, arguments);
                };
                var d = f.fail;
                f.fail = function() {
                    try {
                        u = u || Date.now();
                        var e = arguments && arguments[0] || {};
                        e.errMsg && e.errMsg.match(i + ":fail cancel") ? y.result = !0 : (y.result = !1, 
                        m = e);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        c.reportSystemError(e);
                    }
                    d && d.apply(this, arguments);
                };
                var M = f.complete;
                f.complete = function() {
                    try {
                        u = u || Date.now();
                        var e = s.get("monitorApi"), r = e.sample;
                        Math.random() < r && (a.setMetric("WxOriginApi_default", u - g, y), y.result || c.pushError({
                            level: e.logLevel,
                            sec_category: "【mp_api_error】: " + t.sign + "." + i,
                            content: m
                        }, !0));
                    } catch (e) {}
                    M && M.apply(this, arguments);
                };
            } catch (u) {
                u = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(u);
                this.err.reportSystemError(u);
            }
            return o.apply(this, arguments);
        };
    }, i;
}();

exports.default = i;