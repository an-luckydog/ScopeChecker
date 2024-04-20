module.exports = function() {
    var r = new Map();
    return {
        subscrible: function(n, t) {
            return r.set(n, t);
        },
        fire: function(n, t, e) {
            return r.get(t) && r.get(t)(n, e);
        },
        fireAll: function(n, t) {
            return r.forEach(function(r, e) {
                return r(n, t);
            });
        }
    };
};