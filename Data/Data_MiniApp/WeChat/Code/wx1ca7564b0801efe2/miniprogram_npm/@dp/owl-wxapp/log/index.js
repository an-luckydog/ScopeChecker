Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = require("../env"), t = function() {
    function t(r, t) {
        this.cfgManager = r, this.owl = t, r.config.isOriginal || this.init();
    }
    var o = t.prototype;
    return o.logError = function(r) {
        this.owl.error && this.owl.error.reportSystemError(r);
    }, o.init = function() {
        var t = this.cfgManager.get("project");
        try {
            var o = this.cfgManager.get("logan");
            if (o && o.enable) {
                var i = o.Logan, g = o.config;
                i && (this.Logan = i, g && (this.Logan = i.config(g)), this.Logan.log("[Session]:" + JSON.stringify({
                    project: t,
                    pageUrl: (0, r.getPageUrl)()
                })));
            }
        } catch (r) {
            r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
            this.owl.error && this.owl.error.reportSystemError(r);
        }
        try {
            var e = this.cfgManager.get("rtlLogan");
            if (e && e.enable) {
                var n = e.rtlLogan;
                n && (this.rtlLogan = n, this.syncUserId(), this.rtlLogan.log("INFO", "[Session]:" + JSON.stringify({
                    project: t,
                    pageUrl: (0, r.getPageUrl)()
                }), {}, [ "owl", "session" ]));
            }
        } catch (r) {
            r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
            this.logError(r);
        }
    }, o.syncUserId = function() {
        if (this.rtlLogan) try {
            this.rtlLogan.updateUserConfig({
                userID: this.cfgManager.get("unionId")
            }, !0);
        } catch (r) {
            r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
            this.logError(r);
        }
    }, o._addLog = function(r) {
        this.addLog(r.msg), this.addRtlLog(r.level, r.msg, {}, r.tags);
    }, o.addLog = function(r) {
        try {
            if (this.Logan) {
                if ("string" != typeof r) return;
                this.Logan.log("[Log]: " + r);
            }
        } catch (r) {
            r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
            this.logError(r);
        }
    }, o.addRtlLog = function() {
        try {
            var r;
            this.rtlLogan && (r = this.rtlLogan).log.apply(r, arguments);
        } catch (r) {
            r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
            this.logError(r);
        }
    }, t;
}();

exports.default = t;