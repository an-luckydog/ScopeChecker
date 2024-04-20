Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../util/util"), s = function() {
    function s(t) {
        this.cfgManager = t, this.tags = {}, this.kvs = {};
    }
    var e = s.prototype;
    return e.setTags = function(t) {
        this.tags = Object.assign(this.tags, t);
    }, e.getTags = function(t) {
        return t ? this.tags[t] : this.tags;
    }, e.clearTags = function() {
        this.tags = {};
    }, e.setMetric = function(t, s) {
        "string" == typeof t && "number" == typeof s && (this.kvs[t] || (this.kvs[t] = []), 
        this.kvs[t].push(s));
    }, e.getMetric = function(t) {
        return t ? this.kvs[t] : this.kvs;
    }, e.clearMetric = function() {
        this.kvs = {};
    }, e._rollbackTags = function(t) {
        this.tags = t || {};
    }, e._rollbackMetric = function(t) {
        for (var s in t) t.hasOwnProperty(s) && (this.kvs[s] = t[s].concat(this.kvs[s] || []));
    }, e.report = function() {
        var s = this;
        try {
            if (!this.kvs || 0 === Object.keys(this.kvs).length) return;
            var e = this.tags, i = {
                kvs: this.kvs,
                tags: this.tags,
                ts: parseInt(+new Date() / 1e3)
            };
            this.clearTags(), this.clearMetric(), (0, t.requestQueue)({
                url: this.cfgManager.getApiPath("metric"),
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: "data=" + encodeURIComponent(JSON.stringify(i)),
                fail: function() {
                    s._rollbackTags(e);
                }
            });
        } catch (t) {}
    }, s;
}();

exports.default = s;