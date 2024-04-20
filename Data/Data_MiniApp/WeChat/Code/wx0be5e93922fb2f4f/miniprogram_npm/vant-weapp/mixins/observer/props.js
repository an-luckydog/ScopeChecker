Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.observeProps = function(e) {
    if (!e) return;
    Object.keys(e).forEach(function(r) {
        var t = e[r];
        null !== t && "type" in t || (t = {
            type: t
        });
        var s = t.observer;
        t.observer = function() {
            if (s) {
                "string" == typeof s && (s = this[s]);
                for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                s.apply(this, r);
            }
            this.set();
        }, e[r] = t;
    });
};