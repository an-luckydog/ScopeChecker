var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

module.exports = {
    encode: function(o) {
        var t, a, e, n, h, C, c, d = "", i = 0;
        for (o = function(r) {
            r = r.replace(/\r\n/g, "\n");
            for (var o = "", t = 0; t < r.length; t++) {
                var a = r.charCodeAt(t);
                a < 128 ? o += String.fromCharCode(a) : a > 127 && a < 2048 ? (o += String.fromCharCode(a >> 6 | 192), 
                o += String.fromCharCode(63 & a | 128)) : (o += String.fromCharCode(a >> 12 | 224), 
                o += String.fromCharCode(a >> 6 & 63 | 128), o += String.fromCharCode(63 & a | 128));
            }
            return o;
        }(o); i < o.length; ) n = (t = o.charCodeAt(i++)) >> 2, h = (3 & t) << 4 | (a = o.charCodeAt(i++)) >> 4, 
        C = (15 & a) << 2 | (e = o.charCodeAt(i++)) >> 6, c = 63 & e, isNaN(a) ? C = c = 64 : isNaN(e) && (c = 64), 
        d = d + r.charAt(n) + r.charAt(h) + r.charAt(C) + r.charAt(c);
        return d;
    }
};