var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../../../b/helpers/typeof"), i = require("./constant/index"), n = require("./constant/context"), o = require("./util/util"), r = e(require("./util/pageid")), s = [ "region", "operator", "network", "container", "os", "unionId" ], a = "https://catfront.dianping.com", c = "/mp/api/", u = function() {
    function e(e) {
        if (this._config = {
            project: "",
            devMode: !1,
            pageUrl: "",
            version: {},
            autoCatch: {
                pv: !0,
                pagePv: !1,
                speed: !0,
                oldSpeed: !1,
                promiseRejection: !1,
                error: !0
            },
            page: {
                sample: .5
            },
            resource: {
                sample: .1,
                errSample: .2,
                delay: 1500,
                defaultNetworkCode: 500,
                sendTriggerThreshold: 10,
                isFormatDetails: !0
            },
            enableLogTrace: !1,
            error: {
                sample: 1,
                memory: !0
            },
            metric: {
                sample: 1,
                trigger: 15,
                delay: 1500
            },
            logan: {
                enable: !1
            },
            rtlLogan: {
                enable: !1
            },
            hasRecordApp: !1,
            pageId: "owl-" + (0, r.default)(),
            setCustomTags: null,
            monitorApi: {
                apis: [],
                sample: .5,
                logLevel: "error"
            }
        }, this.config = {}, this.userConfig = {}, this.url = a, e ? this.set(e) : this.config = this._config, 
        this.baseQuery = {
            v: 1,
            sdk: i.VERSION
        }, this.apiPaths = {
            error: c + "log",
            page: c + "speed",
            resource: c + "batch",
            pv: c + "pv",
            metric: "/api/metric"
        }, this.extensions = {}, !e || !e.unionId) try {
            var t = (0, o.getCacheUnionId)();
            t ? this.config.unionId = t : (this.config.unionId = (0, o.MSID)(), this.cacheUnionId(this.config.unionId));
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            this.config.unionId = "";
        }
    }
    var u = e.prototype;
    return u._update = function() {
        this.config = this._config;
        try {
            for (var e in this.userConfig) {
                var i = this.userConfig[e];
                this.config[e] = "object" != t(i) || i instanceof RegExp || i instanceof Array ? i : (0, 
                o.extend)(this.config[e], i);
            }
        } catch (e) {}
    }, u.update = function(e, t) {
        try {
            if (!e || void 0 === t) return;
            this.config[e] = t, "unionId" === e ? this.cacheUnionId(t) : "devMode" === e && this.setApiDomain(t);
        } catch (e) {}
    }, u.get = function(e) {
        return e ? this.config[e] : this.config;
    }, u.set = function(e) {
        try {
            if (!e || "object" != t(e)) return;
            for (var i in e) if (e.hasOwnProperty(i)) {
                var n = e[i];
                "devMode" === i && this.setApiDomain(n), this.userConfig[i] = "object" != t(n) || n instanceof RegExp || n instanceof Array ? n : (0, 
                o.extend)(this.userConfig[i], n);
            }
            this._update();
        } catch (e) {}
    }, u.getApiPath = function(e, t) {
        void 0 === t && (t = 1);
        var i = Object.assign({}, this.baseQuery, {
            v: t,
            p: this.config.project
        });
        return (0, o.stringify)(this.url + this.apiPaths[e], i);
    }, u.setApiDomain = function(e) {
        this.url = e ? "https://catfront.51ping.com" : a;
    }, u.getExtension = function(e) {
        return e ? this.extensions[e] : this.extensions;
    }, u.setExtension = function(e) {
        try {
            if (!e || "object" != t(e)) return;
            for (var i in e) if (e.hasOwnProperty(i)) {
                var n = e[i];
                s.indexOf(i) > -1 ? this.extensions[i] = "unionId" !== i ? n : this.config.unionId : i.indexOf("Version") > -1 && (this.config.version[i] = n);
            }
        } catch (e) {}
    }, u.cacheUnionId = function(e) {
        n.context.setStorage({
            key: i.STOREKEY + "-unionId",
            data: e
        });
    }, u.getCustomTags = function() {
        try {
            var e = this.config && this.config.setCustomTags;
            if ((0, o.isFunc)(e)) {
                var t = e();
                if ((0, o.isFlatObj)(t)) return t;
            }
            return "";
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return "";
        }
    }, e;
}();

exports.default = u;