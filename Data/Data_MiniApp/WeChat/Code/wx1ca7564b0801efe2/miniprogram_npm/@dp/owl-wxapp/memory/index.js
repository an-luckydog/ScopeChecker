Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = require("../constant/context"), t = require("../constant/index"), e = function() {
    function e(r, t) {
        this.err = t, this.cfgManager = r, r.config.isOriginal || this.on();
    }
    return e.prototype.on = function() {
        var e = this;
        this.cfgManager.get("error").memory && r.context.onMemoryWarning instanceof Function && r.context.onMemoryWarning(function(r) {
            try {
                var n = {
                    sec_category: "【内存告警】",
                    content: JSON.stringify(r || {}),
                    level: t.LEVEL.WARN
                };
                e.err.pushError(n, !0);
            } catch (r) {
                r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                e.err.reportSystemError(r);
            }
        });
    }, e;
}();

exports.default = e;