var e = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatTime: function(t) {
        var n = t.getFullYear(), r = t.getMonth() + 1, o = t.getDate(), u = t.getHours(), i = t.getMinutes(), s = t.getSeconds();
        return [ n, r, o ].map(e).join("/") + " " + [ u, i, s ].map(e).join(":");
    },
    getUrlParam: function(e, t) {
        var n = e.substr(e.indexOf("?") + 1), r = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"), o = n.match(r);
        return o ? decodeURIComponent(o[2]) : null;
    },
    formatTimeIos: function(e) {
        var t = e;
        return wx.getSystemInfo({
            success: function(n) {
                -1 != n.system.indexOf("iOS") && (t = e.replace(/-/g, "/"));
            }
        }), t;
    }
};