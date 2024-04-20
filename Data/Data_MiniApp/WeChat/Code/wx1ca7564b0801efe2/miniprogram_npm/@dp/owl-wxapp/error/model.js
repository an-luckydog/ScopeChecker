Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../util/util"), e = require("../constant/index"), r = [ "project", "pageUrl", "resourceUrl", "category", "sec_category", "level", "timestamp", "content", "dynamicMetric" ], i = [ "rowNum", "colNum", "tags" ].concat(r), n = {
    project: "p",
    category: "type",
    sec_category: "name",
    timestamp: "eventTs",
    dynamicMetric: "dynamicMetrics"
}, s = function() {
    function s(t) {
        if (t) {
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
            this.parse();
        }
    }
    var o = s.prototype;
    return o.parse = function() {
        this.category = this.category || e.CATEGORY.SCRIPT, this.level = this.level || e.LEVEL.ERROR, 
        this.timestamp = this.timestamp || Date.now(), this.sec_category = this.sec_category || "Unknown error";
    }, o.update = function(t) {
        for (var e in t) void 0 !== t[e] && -1 !== i.indexOf(e) && (this[e] = t[e]);
        return this;
    }, o.updateTags = function(e) {
        return this.tags = (0, t.extend)(this.tags || {}, e), this;
    }, o.toJson = function() {
        var e = this, i = {};
        if (r.map(function(t) {
            var r = n[t] || t;
            void 0 !== e[t] && (i[r] = e[t]);
        }), this.tags && (i.dynamicMetrics = (0, t.extend)(i.dynamicMetrics || {}, this.tags)), 
        i.content && "string" != typeof i.content) try {
            i.content = JSON.stringify(i.content);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            i.content = "";
        }
        return i;
    }, s;
}();

s.LEVEL = e.LEVEL, s.CATEGORY = e.CATEGORY;

var o = s;

exports.default = o;