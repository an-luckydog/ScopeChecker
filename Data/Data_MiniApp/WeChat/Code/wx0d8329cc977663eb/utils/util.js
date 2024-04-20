function e(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

module.exports = {
    formatTime: function(t) {
        var n = t.getFullYear(), r = t.getMonth() + 1, u = t.getDate(), o = t.getHours(), s = t.getMinutes();
        t.getSeconds();
        return [ n, r, u ].map(e).join("-") + " " + [ o, s ].map(e).join(":");
    },
    formatTimeTwo: function(t, n) {
        var r = [ "Y", "M", "D", "h", "m", "s" ], u = [], o = new Date(t);
        u.push(o.getFullYear()), u.push(e(o.getMonth() + 1)), u.push(e(o.getDate())), u.push(e(o.getHours())), 
        u.push(e(o.getMinutes())), u.push(e(o.getSeconds()));
        for (var s in u) n = n.replace(r[s], u[s]);
        return n;
    }
};