Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../../../../b/helpers/typeof"), e = require("../util/util"), a = "metric", i = function() {
    function i(t) {
        this.cfgManager = t, this.data = {}, this.cacheCount = 0;
    }
    var r = i.prototype;
    return r.setMetric = function(i, r, o) {
        var n = this;
        void 0 === o && (o = {});
        try {
            if (!i || "string" != typeof i || "number" != typeof r || "object" != t(o)) return;
            var c = this.cfgManager.get(a);
            if (c && "number" == typeof c.sample && Math.random() > c.sample) return;
            var s = this.cfgManager.config.project;
            this.cfgManager.config.isDump && (s = (0, e.findOwlProject)()), this.data[s] || (this.data[s] = []), 
            this.data[s].push({
                key: i,
                vs: [ r ],
                tvs: o
            }), this.cacheCount++, this.timeout && (clearTimeout(this.timeout), this.timeout = null), 
            this.cacheCount >= (c.trigger || 15) ? this.report() : this.timeout = setTimeout(function() {
                n.report();
            }, c.delay || 1500);
        } catch (t) {}
    }, r.report = function() {
        var t = this;
        try {
            if (!this.data || 0 == this.cacheCount) return;
            var i = Object.keys(this.data), r = this.cfgManager.getApiPath(a, 2);
            i.forEach(function(a) {
                var i = [].concat(t.data[a]), o = a === t.cfgManager.config.project ? "" : "&dump=" + a, n = t.cfgManager.config.isDump ? r + o : r;
                (0, e.requestQueue)({
                    url: n,
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    data: "data=" + encodeURIComponent(JSON.stringify(i))
                });
            }), this.data = {}, this.cacheCount = 0;
        } catch (t) {}
    }, i;
}();

exports.default = i;