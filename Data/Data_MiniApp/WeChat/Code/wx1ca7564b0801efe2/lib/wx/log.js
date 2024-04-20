var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../../b/helpers/objectSpread2"), r = require("../../b/helpers/classCallCheck"), o = require("../../b/helpers/createClass"), n = e(require("../../miniprogram_npm/@limo/core/index.js")), i = e(require("../../miniprogram_npm/@analytics/wechat-sdk/index.js")), a = require("../../miniprogram_npm/@dp/owl-wxapp/index.js"), s = require("./util"), d = require("./logConfig"), c = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), u = new (function() {
    function e() {
        var o = this;
        r(this, e), this.resource = void 0, this.pageSpeed = void 0, this.metricTags = void 0, 
        this.reportMetric = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = t(t({}, o.metricTags), {}, {
                shopId: (0, s.getWxPageOptions)().shopId
            });
            a.owl.setMetric(e, r, n);
        }, this.init = function() {
            try {
                var e = c.default.MPInfo.getSystemInfo(), t = e.SDKVersion || "", r = e.system || "";
                o.metricTags = {
                    SDKVersion: t,
                    os: -1 !== r.indexOf("iOS") ? "iOS" : "Android"
                };
            } catch (e) {}
            o.resource = a.owl.resource, o.pageSpeed = a.owl.pageSpeed;
        }, this.addError = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                level: "error"
            }, c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, u = console || {}, l = u.error;
            if (l(e, r), "info" !== (null == d ? void 0 : d.level)) {
                var g = i.default.get("lxcuid"), f = e, p = r;
                r instanceof Error ? (f = "[".concat(e, "]").concat(r.message || r.name || ""), 
                p = r.stack || r.message || "") : "string" == typeof r && (p = r);
                try {
                    var m, h = (0, s.getWxPageOptions)(), v = h.shopId, I = h.tableNum, y = h.tenantId, x = {
                        sec_category: f,
                        content: JSON.stringify(p),
                        category: d.category || "resourceError",
                        level: d.level || "error",
                        tags: t(t({}, c), {}, {
                            lxcuid: g,
                            shopId: v,
                            tableNum: I,
                            tenantId: y || (null == n.default.getLimoRuntime().getExtConfigSync || null == (m = n.default.getLimoRuntime().getExtConfigSync()) ? void 0 : m.tenantId) || ""
                        })
                    };
                    a.owl.error.pushError(x, !0);
                } catch (e) {}
            }
            o.sendInfo({
                name: "Error",
                content: {
                    err: r
                },
                config: {
                    isImmediate: !0
                }
            });
        }, this.addLog = function() {}, this.addPoint = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, s.getWxPathName)();
            try {
                a.owl.pageSpeed.addPoint(e, t);
            } catch (e) {}
        }, this.addApi = function(e, t, r, o) {
            a.owl.resource.addApi({
                name: e,
                networkCode: t,
                statusCode: r,
                responseTime: o
            });
        }, this.sendInfo = function(e) {
            c.default.filterMap(e, function(e) {
                return "config" !== e;
            });
            var t = e.config || {}, r = t.isImmediate;
            t.isConsole;
            r && c.default.Reporter(d.TRIANGLE_INIT_CONFIG).sendSavedInfo();
        }, this.setAsyncOptions = function(e, t) {
            c.default.Reporter(d.TRIANGLE_INIT_CONFIG).setAsyncOptions(e, t);
        }, this.addPerformance = function(e, t, r) {
            o.addPoint({
                position: e,
                duration: t
            }, r);
        }, this.addCustom = function(e) {
            var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 ? arguments[2] : void 0;
            i = t({
                shopId: (0, s.getWxPageOptions)().shopId || "",
                tenantId: (null == n.default.getLimoRuntime().getExtConfigSync || null == (r = n.default.getLimoRuntime().getExtConfigSync()) ? void 0 : r.tenantId) || ""
            }, i), a.owl.setMetric(e, o, i);
        }, this.ajaxReportError = function(e, t, r) {
            var n = t || {}, i = n.data, a = n.errMsg, s = n.statusCode, d = function(e) {
                var t = e.split("?");
                return t ? t[0] : "";
            }(e), c = {
                code: -450
            };
            if (a && -1 !== a.indexOf("request:fail ")) {
                try {
                    o.sendInfo({
                        name: "[request error][".concat(d, "]"),
                        content: {
                            requestParams: r,
                            error: t
                        }
                    });
                } catch (e) {}
                var u = "[接口其他错误]: " + d, l = -450;
                -1 === a.indexOf("timeout") && -1 === a.indexOf("超时") || (l = -451, u = "[接口超时]: " + d), 
                c = {
                    code: l,
                    name: u,
                    log: JSON.stringify({
                        requestParams: r,
                        errMsg: a,
                        statusCode: s
                    })
                };
            } else c = i && (i.code || 0 === i.code) ? {
                code: i.code
            } : 200 === (null == i ? void 0 : i.status) ? {
                code: i.status
            } : {
                code: -452,
                name: "[接口NoCode异常]: " + d,
                log: JSON.stringify({
                    requestParams: r,
                    errMsg: a,
                    statusCode: s,
                    data: i
                })
            };
            return c;
        }, this.init(), this.metricTags = {};
    }
    return o(e, [ {
        key: "initOpenId",
        value: function(e) {
            try {
                a.owl.cfgManager.update("unionId", e), a.owl.errorModel.prototype.updateTags({
                    openId: e
                });
            } catch (e) {}
        }
    } ]), e;
}())();

exports.default = u;