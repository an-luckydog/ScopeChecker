function t(t, e) {
    return new Promise(function(o) {
        t.setData(e, o);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.behavior = void 0;

var e = Behavior({
    created: function() {
        var t = this;
        if (this.$options) {
            var e = {}, o = this.$options().computed, i = Object.keys(o);
            this.calcComputed = function() {
                var n = {};
                return i.forEach(function(i) {
                    var r = o[i].call(t);
                    e[i] !== r && (e[i] = r, n[i] = r);
                }), n;
            };
        }
    },
    attached: function() {
        this.set();
    },
    methods: {
        set: function(e, o) {
            var i = this, n = [];
            return e && n.push(t(this, e)), this.calcComputed && n.push(t(this, this.calcComputed())), 
            Promise.all(n).then(function(t) {
                return o && "function" == typeof o && o.call(i), t;
            });
        }
    }
});

exports.behavior = e;