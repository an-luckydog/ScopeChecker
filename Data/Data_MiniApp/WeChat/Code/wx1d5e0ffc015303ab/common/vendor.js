require("../@babel/runtime/helpers/Arrayincludes");

var e = require("../@babel/runtime/helpers/typeof");

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], {
    0: function(e, l) {},
    "0173": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.sweep = l.serialCode = l.lotteryPrize = l.getFailCount = l.findPrize = l.findActivity = l.checkPrize = void 0, 
        a("0488");
        var t = a("9b31");
        l.sweep = function(e) {
            return (0, t.requestPost)("/sweep/sweepQrcode", e);
        }, l.serialCode = function(e) {
            return (0, t.requestPost)("/sweep/serialCode", e);
        }, l.getFailCount = function(e) {
            return (0, t.requestPost)("/sweep/getFailCount", e);
        }, l.lotteryPrize = function(e) {
            return (0, t.requestPost)("/doubleprize/lotteryPrize", e);
        }, l.findActivity = function(e) {
            return (0, t.requestPost)("/doubleprize/findActivity", e);
        }, l.findPrize = function(e) {
            return (0, t.requestPost)("/user/findPrize", e);
        }, l.checkPrize = function(e) {
            return (0, t.requestPost)("/checkUser/checkPrize", e);
        };
    },
    "03bc": function(e, l, a) {
        (function(e, l, t) {
            var n, r = a("7037");
            !function() {
                var u = "object" === ("undefined" == typeof window ? "undefined" : r(window)), o = u ? window : {};
                o.JS_MD5_NO_WINDOW && (u = !1);
                var i = !u && "object" === ("undefined" == typeof self ? "undefined" : r(self)), c = !o.JS_MD5_NO_NODE_JS && "object" === (void 0 === e ? "undefined" : r(e)) && e.versions && e.versions.node;
                c ? o = l : i && (o = self);
                var s, v = !o.JS_MD5_NO_COMMON_JS && "object" === r(t) && t.exports, b = a("3c35"), f = !o.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, p = "0123456789abcdef".split(""), d = [ 128, 32768, 8388608, -2147483648 ], g = [ 0, 8, 16, 24 ], h = [ "hex", "array", "digest", "buffer", "arrayBuffer", "base64" ], m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), y = [];
                if (f) {
                    var _ = new ArrayBuffer(68);
                    s = new Uint8Array(_), y = new Uint32Array(_);
                }
                var x = Array.isArray;
                !o.JS_MD5_NO_NODE_JS && x || (x = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                });
                var w = ArrayBuffer.isView;
                !f || !o.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && w || (w = function(e) {
                    return "object" === r(e) && e.buffer && e.buffer.constructor === ArrayBuffer;
                });
                var S = function(e) {
                    var l = r(e);
                    if ("string" === l) return [ e, !0 ];
                    if ("object" !== l || null === e) throw new Error("input is invalid type");
                    if (f && e.constructor === ArrayBuffer) return [ new Uint8Array(e), !1 ];
                    if (!x(e) && !w(e)) throw new Error("input is invalid type");
                    return [ e, !1 ];
                }, A = function(e) {
                    return function(l) {
                        return new P(!0).update(l)[e]();
                    };
                }, O = function(e) {
                    var l, t = a(0), n = a(1).Buffer;
                    return l = n.from && !o.JS_MD5_NO_BUFFER_FROM ? n.from : function(e) {
                        return new n(e);
                    }, function(a) {
                        if ("string" == typeof a) return t.createHash("md5").update(a, "utf8").digest("hex");
                        if (null == a) throw new Error("input is invalid type");
                        return a.constructor === ArrayBuffer && (a = new Uint8Array(a)), x(a) || w(a) || a.constructor === n ? t.createHash("md5").update(l(a)).digest("hex") : e(a);
                    };
                }, k = function(e) {
                    return function(l, a) {
                        return new D(l, !0).update(a)[e]();
                    };
                };
                function P(e) {
                    if (e) y[0] = y[16] = y[1] = y[2] = y[3] = y[4] = y[5] = y[6] = y[7] = y[8] = y[9] = y[10] = y[11] = y[12] = y[13] = y[14] = y[15] = 0, 
                    this.blocks = y, this.buffer8 = s; else if (f) {
                        var l = new ArrayBuffer(68);
                        this.buffer8 = new Uint8Array(l), this.blocks = new Uint32Array(l);
                    } else this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, 
                    this.finalized = this.hashed = !1, this.first = !0;
                }
                function D(e, l) {
                    var a, t = S(e);
                    if (e = t[0], t[1]) {
                        var n, r = [], u = e.length, o = 0;
                        for (a = 0; a < u; ++a) (n = e.charCodeAt(a)) < 128 ? r[o++] = n : n < 2048 ? (r[o++] = 192 | n >>> 6, 
                        r[o++] = 128 | 63 & n) : n < 55296 || n >= 57344 ? (r[o++] = 224 | n >>> 12, r[o++] = 128 | n >>> 6 & 63, 
                        r[o++] = 128 | 63 & n) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++a)), 
                        r[o++] = 240 | n >>> 18, r[o++] = 128 | n >>> 12 & 63, r[o++] = 128 | n >>> 6 & 63, 
                        r[o++] = 128 | 63 & n);
                        e = r;
                    }
                    e.length > 64 && (e = new P(!0).update(e).array());
                    var i = [], c = [];
                    for (a = 0; a < 64; ++a) {
                        var s = e[a] || 0;
                        i[a] = 92 ^ s, c[a] = 54 ^ s;
                    }
                    P.call(this, l), this.update(c), this.oKeyPad = i, this.inner = !0, this.sharedMemory = l;
                }
                P.prototype.update = function(e) {
                    if (this.finalized) throw new Error("finalize already called");
                    var l = S(e);
                    e = l[0];
                    for (var a, t, n = l[1], r = 0, u = e.length, o = this.blocks, i = this.buffer8; r < u; ) {
                        if (this.hashed && (this.hashed = !1, o[0] = o[16], o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0), 
                        n) if (f) for (t = this.start; r < u && t < 64; ++r) (a = e.charCodeAt(r)) < 128 ? i[t++] = a : a < 2048 ? (i[t++] = 192 | a >>> 6, 
                        i[t++] = 128 | 63 & a) : a < 55296 || a >= 57344 ? (i[t++] = 224 | a >>> 12, i[t++] = 128 | a >>> 6 & 63, 
                        i[t++] = 128 | 63 & a) : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++r)), 
                        i[t++] = 240 | a >>> 18, i[t++] = 128 | a >>> 12 & 63, i[t++] = 128 | a >>> 6 & 63, 
                        i[t++] = 128 | 63 & a); else for (t = this.start; r < u && t < 64; ++r) (a = e.charCodeAt(r)) < 128 ? o[t >>> 2] |= a << g[3 & t++] : a < 2048 ? (o[t >>> 2] |= (192 | a >>> 6) << g[3 & t++], 
                        o[t >>> 2] |= (128 | 63 & a) << g[3 & t++]) : a < 55296 || a >= 57344 ? (o[t >>> 2] |= (224 | a >>> 12) << g[3 & t++], 
                        o[t >>> 2] |= (128 | a >>> 6 & 63) << g[3 & t++], o[t >>> 2] |= (128 | 63 & a) << g[3 & t++]) : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++r)), 
                        o[t >>> 2] |= (240 | a >>> 18) << g[3 & t++], o[t >>> 2] |= (128 | a >>> 12 & 63) << g[3 & t++], 
                        o[t >>> 2] |= (128 | a >>> 6 & 63) << g[3 & t++], o[t >>> 2] |= (128 | 63 & a) << g[3 & t++]); else if (f) for (t = this.start; r < u && t < 64; ++r) i[t++] = e[r]; else for (t = this.start; r < u && t < 64; ++r) o[t >>> 2] |= e[r] << g[3 & t++];
                        this.lastByteIndex = t, this.bytes += t - this.start, t >= 64 ? (this.start = t - 64, 
                        this.hash(), this.hashed = !0) : this.start = t;
                    }
                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
                    this.bytes = this.bytes % 4294967296), this;
                }, P.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks, l = this.lastByteIndex;
                        e[l >>> 2] |= d[3 & l], l >= 56 && (this.hashed || this.hash(), e[0] = e[16], e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), 
                        e[14] = this.bytes << 3, e[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
                    }
                }, P.prototype.hash = function() {
                    var e, l, a, t, n, r, u = this.blocks;
                    this.first ? l = ((l = ((e = ((e = u[0] - 680876937) << 7 | e >>> 25) - 271733879 << 0) ^ (a = ((a = (-271733879 ^ (t = ((t = (-1732584194 ^ 2004318071 & e) + u[1] - 117830708) << 12 | t >>> 20) + e << 0) & (-271733879 ^ e)) + u[2] - 1126478375) << 17 | a >>> 15) + t << 0) & (t ^ e)) + u[3] - 1316259209) << 22 | l >>> 10) + a << 0 : (e = this.h0, 
                    l = this.h1, a = this.h2, l = ((l += ((e = ((e += ((t = this.h3) ^ l & (a ^ t)) + u[0] - 680876936) << 7 | e >>> 25) + l << 0) ^ (a = ((a += (l ^ (t = ((t += (a ^ e & (l ^ a)) + u[1] - 389564586) << 12 | t >>> 20) + e << 0) & (e ^ l)) + u[2] + 606105819) << 17 | a >>> 15) + t << 0) & (t ^ e)) + u[3] - 1044525330) << 22 | l >>> 10) + a << 0), 
                    l = ((l += ((e = ((e += (t ^ l & (a ^ t)) + u[4] - 176418897) << 7 | e >>> 25) + l << 0) ^ (a = ((a += (l ^ (t = ((t += (a ^ e & (l ^ a)) + u[5] + 1200080426) << 12 | t >>> 20) + e << 0) & (e ^ l)) + u[6] - 1473231341) << 17 | a >>> 15) + t << 0) & (t ^ e)) + u[7] - 45705983) << 22 | l >>> 10) + a << 0, 
                    l = ((l += ((e = ((e += (t ^ l & (a ^ t)) + u[8] + 1770035416) << 7 | e >>> 25) + l << 0) ^ (a = ((a += (l ^ (t = ((t += (a ^ e & (l ^ a)) + u[9] - 1958414417) << 12 | t >>> 20) + e << 0) & (e ^ l)) + u[10] - 42063) << 17 | a >>> 15) + t << 0) & (t ^ e)) + u[11] - 1990404162) << 22 | l >>> 10) + a << 0, 
                    l = ((l += ((e = ((e += (t ^ l & (a ^ t)) + u[12] + 1804603682) << 7 | e >>> 25) + l << 0) ^ (a = ((a += (l ^ (t = ((t += (a ^ e & (l ^ a)) + u[13] - 40341101) << 12 | t >>> 20) + e << 0) & (e ^ l)) + u[14] - 1502002290) << 17 | a >>> 15) + t << 0) & (t ^ e)) + u[15] + 1236535329) << 22 | l >>> 10) + a << 0, 
                    l = ((l += ((t = ((t += (l ^ a & ((e = ((e += (a ^ t & (l ^ a)) + u[1] - 165796510) << 5 | e >>> 27) + l << 0) ^ l)) + u[6] - 1069501632) << 9 | t >>> 23) + e << 0) ^ e & ((a = ((a += (e ^ l & (t ^ e)) + u[11] + 643717713) << 14 | a >>> 18) + t << 0) ^ t)) + u[0] - 373897302) << 20 | l >>> 12) + a << 0, 
                    l = ((l += ((t = ((t += (l ^ a & ((e = ((e += (a ^ t & (l ^ a)) + u[5] - 701558691) << 5 | e >>> 27) + l << 0) ^ l)) + u[10] + 38016083) << 9 | t >>> 23) + e << 0) ^ e & ((a = ((a += (e ^ l & (t ^ e)) + u[15] - 660478335) << 14 | a >>> 18) + t << 0) ^ t)) + u[4] - 405537848) << 20 | l >>> 12) + a << 0, 
                    l = ((l += ((t = ((t += (l ^ a & ((e = ((e += (a ^ t & (l ^ a)) + u[9] + 568446438) << 5 | e >>> 27) + l << 0) ^ l)) + u[14] - 1019803690) << 9 | t >>> 23) + e << 0) ^ e & ((a = ((a += (e ^ l & (t ^ e)) + u[3] - 187363961) << 14 | a >>> 18) + t << 0) ^ t)) + u[8] + 1163531501) << 20 | l >>> 12) + a << 0, 
                    l = ((l += ((t = ((t += (l ^ a & ((e = ((e += (a ^ t & (l ^ a)) + u[13] - 1444681467) << 5 | e >>> 27) + l << 0) ^ l)) + u[2] - 51403784) << 9 | t >>> 23) + e << 0) ^ e & ((a = ((a += (e ^ l & (t ^ e)) + u[7] + 1735328473) << 14 | a >>> 18) + t << 0) ^ t)) + u[12] - 1926607734) << 20 | l >>> 12) + a << 0, 
                    l = ((l += ((r = (t = ((t += ((n = l ^ a) ^ (e = ((e += (n ^ t) + u[5] - 378558) << 4 | e >>> 28) + l << 0)) + u[8] - 2022574463) << 11 | t >>> 21) + e << 0) ^ e) ^ (a = ((a += (r ^ l) + u[11] + 1839030562) << 16 | a >>> 16) + t << 0)) + u[14] - 35309556) << 23 | l >>> 9) + a << 0, 
                    l = ((l += ((r = (t = ((t += ((n = l ^ a) ^ (e = ((e += (n ^ t) + u[1] - 1530992060) << 4 | e >>> 28) + l << 0)) + u[4] + 1272893353) << 11 | t >>> 21) + e << 0) ^ e) ^ (a = ((a += (r ^ l) + u[7] - 155497632) << 16 | a >>> 16) + t << 0)) + u[10] - 1094730640) << 23 | l >>> 9) + a << 0, 
                    l = ((l += ((r = (t = ((t += ((n = l ^ a) ^ (e = ((e += (n ^ t) + u[13] + 681279174) << 4 | e >>> 28) + l << 0)) + u[0] - 358537222) << 11 | t >>> 21) + e << 0) ^ e) ^ (a = ((a += (r ^ l) + u[3] - 722521979) << 16 | a >>> 16) + t << 0)) + u[6] + 76029189) << 23 | l >>> 9) + a << 0, 
                    l = ((l += ((r = (t = ((t += ((n = l ^ a) ^ (e = ((e += (n ^ t) + u[9] - 640364487) << 4 | e >>> 28) + l << 0)) + u[12] - 421815835) << 11 | t >>> 21) + e << 0) ^ e) ^ (a = ((a += (r ^ l) + u[15] + 530742520) << 16 | a >>> 16) + t << 0)) + u[2] - 995338651) << 23 | l >>> 9) + a << 0, 
                    l = ((l += ((t = ((t += (l ^ ((e = ((e += (a ^ (l | ~t)) + u[0] - 198630844) << 6 | e >>> 26) + l << 0) | ~a)) + u[7] + 1126891415) << 10 | t >>> 22) + e << 0) ^ ((a = ((a += (e ^ (t | ~l)) + u[14] - 1416354905) << 15 | a >>> 17) + t << 0) | ~e)) + u[5] - 57434055) << 21 | l >>> 11) + a << 0, 
                    l = ((l += ((t = ((t += (l ^ ((e = ((e += (a ^ (l | ~t)) + u[12] + 1700485571) << 6 | e >>> 26) + l << 0) | ~a)) + u[3] - 1894986606) << 10 | t >>> 22) + e << 0) ^ ((a = ((a += (e ^ (t | ~l)) + u[10] - 1051523) << 15 | a >>> 17) + t << 0) | ~e)) + u[1] - 2054922799) << 21 | l >>> 11) + a << 0, 
                    l = ((l += ((t = ((t += (l ^ ((e = ((e += (a ^ (l | ~t)) + u[8] + 1873313359) << 6 | e >>> 26) + l << 0) | ~a)) + u[15] - 30611744) << 10 | t >>> 22) + e << 0) ^ ((a = ((a += (e ^ (t | ~l)) + u[6] - 1560198380) << 15 | a >>> 17) + t << 0) | ~e)) + u[13] + 1309151649) << 21 | l >>> 11) + a << 0, 
                    l = ((l += ((t = ((t += (l ^ ((e = ((e += (a ^ (l | ~t)) + u[4] - 145523070) << 6 | e >>> 26) + l << 0) | ~a)) + u[11] - 1120210379) << 10 | t >>> 22) + e << 0) ^ ((a = ((a += (e ^ (t | ~l)) + u[2] + 718787259) << 15 | a >>> 17) + t << 0) | ~e)) + u[9] - 343485551) << 21 | l >>> 11) + a << 0, 
                    this.first ? (this.h0 = e + 1732584193 << 0, this.h1 = l - 271733879 << 0, this.h2 = a - 1732584194 << 0, 
                    this.h3 = t + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + e << 0, this.h1 = this.h1 + l << 0, 
                    this.h2 = this.h2 + a << 0, this.h3 = this.h3 + t << 0);
                }, P.prototype.hex = function() {
                    this.finalize();
                    var e = this.h0, l = this.h1, a = this.h2, t = this.h3;
                    return p[e >>> 4 & 15] + p[15 & e] + p[e >>> 12 & 15] + p[e >>> 8 & 15] + p[e >>> 20 & 15] + p[e >>> 16 & 15] + p[e >>> 28 & 15] + p[e >>> 24 & 15] + p[l >>> 4 & 15] + p[15 & l] + p[l >>> 12 & 15] + p[l >>> 8 & 15] + p[l >>> 20 & 15] + p[l >>> 16 & 15] + p[l >>> 28 & 15] + p[l >>> 24 & 15] + p[a >>> 4 & 15] + p[15 & a] + p[a >>> 12 & 15] + p[a >>> 8 & 15] + p[a >>> 20 & 15] + p[a >>> 16 & 15] + p[a >>> 28 & 15] + p[a >>> 24 & 15] + p[t >>> 4 & 15] + p[15 & t] + p[t >>> 12 & 15] + p[t >>> 8 & 15] + p[t >>> 20 & 15] + p[t >>> 16 & 15] + p[t >>> 28 & 15] + p[t >>> 24 & 15];
                }, P.prototype.toString = P.prototype.hex, P.prototype.digest = function() {
                    this.finalize();
                    var e = this.h0, l = this.h1, a = this.h2, t = this.h3;
                    return [ 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, 255 & l, l >>> 8 & 255, l >>> 16 & 255, l >>> 24 & 255, 255 & a, a >>> 8 & 255, a >>> 16 & 255, a >>> 24 & 255, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255 ];
                }, P.prototype.array = P.prototype.digest, P.prototype.arrayBuffer = function() {
                    this.finalize();
                    var e = new ArrayBuffer(16), l = new Uint32Array(e);
                    return l[0] = this.h0, l[1] = this.h1, l[2] = this.h2, l[3] = this.h3, e;
                }, P.prototype.buffer = P.prototype.arrayBuffer, P.prototype.base64 = function() {
                    for (var e, l, a, t = "", n = this.array(), r = 0; r < 15; ) e = n[r++], l = n[r++], 
                    a = n[r++], t += m[e >>> 2] + m[63 & (e << 4 | l >>> 4)] + m[63 & (l << 2 | a >>> 6)] + m[63 & a];
                    return e = n[r], t += m[e >>> 2] + m[e << 4 & 63] + "==";
                }, D.prototype = new P(), D.prototype.finalize = function() {
                    if (P.prototype.finalize.call(this), this.inner) {
                        this.inner = !1;
                        var e = this.array();
                        P.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(e), P.prototype.finalize.call(this);
                    }
                };
                var j = function() {
                    var e = A("hex");
                    c && (e = O(e)), e.create = function() {
                        return new P();
                    }, e.update = function(l) {
                        return e.create().update(l);
                    };
                    for (var l = 0; l < h.length; ++l) {
                        var a = h[l];
                        e[a] = A(a);
                    }
                    return e;
                }();
                j.md5 = j, j.md5.hmac = function() {
                    var e = k("hex");
                    e.create = function(e) {
                        return new D(e);
                    }, e.update = function(l, a) {
                        return e.create(l).update(a);
                    };
                    for (var l = 0; l < h.length; ++l) {
                        var a = h[l];
                        e[a] = k(a);
                    }
                    return e;
                }(), v ? t.exports = j : (o.md5 = j, b && (void 0 === (n = function() {
                    return j;
                }.call(j, a, j, t)) || (t.exports = n)));
            }();
        }).call(this, a("4362"), a("c8ba"), a("62e4")(e));
    },
    "0488": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.staticUrl = l.scanImgUrl = l.qpImgUrl = l.qmbpImgUrl = l.flowDiscImgs = l.config = void 0;
        var t = {
            isOnline: !0,
            requestUrl: "https://mapi.vjifen.com/vjifenInterface",
            oldRequestUrl: "https://hapi.vjifen.com/DBTHNQPInterface",
            staticUrl: "https://xcxsite.vjifen.com",
            staticUrlNew: "https://xcxsite.vjifen.com",
            wxUrl: "https://xcxact.vjifen.com",
            authUrl: "https://x.vjifen.com",
            mallImgUrl: "http://img.vjifen.com:8000/images/vma",
            oldMallImgUrl: "http://img.vjifen.com:8000/images/vma",
            imgSpring21: "https://xcxsite.vjifen.com/v/zzqp202104/",
            vjfopenidTxt: "oIwlo",
            goodsImgRoot: "https://img.vjifen.com/images/vma/",
            staticUrlSD: "https://xcxsite.vjifen.com/v/shanDongImgs/",
            staticUrl2022: "https://xcxsite.vjifen.com/v/static/hnqp2022/",
            h5site: "https://w.vjifen.com",
            appid: "wx9c6255f9c646909f",
            vjfAppid: "wxe2a3ba29612c0e0e",
            payAppid: "wxa42a20606316e2e9",
            mallAppid: "wx5d6354fbe0f28336",
            mallVersion: "release",
            imgWorldCup: "https://xcxsite.vjifen.com/v/static/worldcup/",
            img120Scan: "https://xcxsite.vjifen.com/v/static/common-120/",
            imgUrl: "https://xcxsite.vjifen.com/v/static/qp2021",
            img120Th: "https://xcxsite.vjifen.com/v/static/qp120/"
        };
        l.config = t, l.staticUrl = "https://xcxsite.vjifen.com/v/TOB/", l.qpImgUrl = "https://xcxsite.vjifen.com/v/qpCommonImgs/", 
        l.scanImgUrl = "https://xcxsite.vjifen.com/v/scan3.0/", l.qmbpImgUrl = "https://xcxsite.vjifen.com/v/static/qmbp/", 
        l.flowDiscImgs = "https://xcxsite.vjifen.com/v/static/hb2020/flowDisc/";
    },
    "04f0": function(e, l, a) {
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.analysisMobile = function(l, a, r) {
                return new Promise(function(u, o) {
                    var i = {
                        sessionKey: l,
                        encryptedData: a.encryptedData,
                        iv: a.iv,
                        provinceCode: n.provinceCode
                    };
                    e.request({
                        url: "https://xcxact.vjifen.com/api/decrypt",
                        method: "POST",
                        data: i,
                        success: function(l) {
                            console.log("------------------------11111"), console.log(l);
                            var a = l.data.data.decryptData;
                            a.phoneNumber ? (e.setStorage({
                                key: "userMobileData",
                                data: a
                            }), u(a), function(e, l) {
                                var a = {
                                    flag: 1,
                                    phoneNumber: e,
                                    projectServerName: l
                                };
                                (0, t.requestPost)("/user/userInfo", a);
                            }(a.phoneNumber, r)) : e.removeStorageSync("xcxOpenid");
                        },
                        fail: function(l) {
                            e.showModal({
                                title: "提示",
                                content: "解析手机号结果" + res.data
                            }), o("decrypt", l);
                        }
                    });
                });
            }, l.callPhone = function(l) {
                e.makePhoneCall({
                    phoneNumber: l,
                    success: function() {
                        console.log("拨打电话成功！");
                    },
                    fail: function() {
                        console.log("拨打电话失败！");
                    }
                });
            }, l.getCaptcha = function(l, a) {
                return e.showLoading({
                    title: "获取中"
                }), new Promise(function(n, r) {
                    var u = {
                        phonenum: l,
                        sendtype: "1",
                        projectServerName: a
                    };
                    (0, t.requestPost)("/user/getCaptcha", u).then(function(l) {
                        e.hideLoading(), n(l);
                    });
                });
            }, l.updateUserInfoMobile = function(l, a, n, r) {
                return e.showLoading({
                    title: "提交中"
                }), new Promise(function(u, o) {
                    var i = {
                        openid: l,
                        phonenum: a,
                        captcha: n,
                        projectServerName: r
                    };
                    (0, t.requestPost)("/user/updateUserInfoMobile", i).then(function(l) {
                        e.hideLoading(), u(l);
                    });
                });
            };
            var t = a("9b31"), n = a("64da");
        }).call(this, a("543d").default);
    },
    "0676": function(e, l) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    1: function(e, l) {},
    "11b0": function(e, l) {
        e.exports = function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    1235: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        l.default = {
            strDiscode: function(e) {
                return e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&OElig;|&#338;|&#x152;/g, "Œ")).replace(/&oelig;|&#339;|&#x153;/g, "œ")).replace(/&Scaron;|&#352;|&#x160;/g, "Š")).replace(/&scaron;|&#353;|&#x161;/g, "š")).replace(/&Yuml;|&#376;|&#x178;/g, "Ÿ")).replace(/&fnof;|&#402;|&#x192;/g, "ƒ")).replace(/&circ;|&#710;|&#x2c6;/g, "ˆ")).replace(/&tilde;|&#732;|&#x2dc;/g, "˜")).replace(/&thinsp;|$#8201;|&#x2009;/g, "<span class='spaceshow'> </span>")).replace(/&zwnj;|&#8204;|&#x200C;/g, "<span class='spaceshow'>‌</span>")).replace(/&zwj;|$#8205;|&#x200D;/g, "<span class='spaceshow'>‍</span>")).replace(/&lrm;|$#8206;|&#x200E;/g, "<span class='spaceshow'>‎</span>")).replace(/&rlm;|&#8207;|&#x200F;/g, "<span class='spaceshow'>‏</span>")).replace(/&ndash;|&#8211;|&#x2013;/g, "–")).replace(/&mdash;|&#8212;|&#x2014;/g, "—")).replace(/&lsquo;|&#8216;|&#x2018;/g, "‘")).replace(/&rsquo;|&#8217;|&#x2019;/g, "’")).replace(/&sbquo;|&#8218;|&#x201a;/g, "‚")).replace(/&ldquo;|&#8220;|&#x201c;/g, "“")).replace(/&rdquo;|&#8221;|&#x201d;/g, "”")).replace(/&bdquo;|&#8222;|&#x201e;/g, "„")).replace(/&dagger;|&#8224;|&#x2020;/g, "†")).replace(/&Dagger;|&#8225;|&#x2021;/g, "‡")).replace(/&bull;|&#8226;|&#x2022;/g, "•")).replace(/&hellip;|&#8230;|&#x2026;/g, "…")).replace(/&permil;|&#8240;|&#x2030;/g, "‰")).replace(/&prime;|&#8242;|&#x2032;/g, "′")).replace(/&Prime;|&#8243;|&#x2033;/g, "″")).replace(/&lsaquo;|&#8249;|&#x2039;/g, "‹")).replace(/&rsaquo;|&#8250;|&#x203a;/g, "›")).replace(/&oline;|&#8254;|&#x203e;/g, "‾")).replace(/&euro;|&#8364;|&#x20ac;/g, "€")).replace(/&trade;|&#8482;|&#x2122;/g, "™")).replace(/&larr;|&#8592;|&#x2190;/g, "←")).replace(/&uarr;|&#8593;|&#x2191;/g, "↑")).replace(/&rarr;|&#8594;|&#x2192;/g, "→")).replace(/&darr;|&#8595;|&#x2193;/g, "↓")).replace(/&harr;|&#8596;|&#x2194;/g, "↔")).replace(/&crarr;|&#8629;|&#x21b5;/g, "↵")).replace(/&lceil;|&#8968;|&#x2308;/g, "⌈")).replace(/&rceil;|&#8969;|&#x2309;/g, "⌉")).replace(/&lfloor;|&#8970;|&#x230a;/g, "⌊")).replace(/&rfloor;|&#8971;|&#x230b;/g, "⌋")).replace(/&loz;|&#9674;|&#x25ca;/g, "◊")).replace(/&spades;|&#9824;|&#x2660;/g, "♠")).replace(/&clubs;|&#9827;|&#x2663;/g, "♣")).replace(/&hearts;|&#9829;|&#x2665;/g, "♥")).replace(/&diams;|&#9830;|&#x2666;/g, "♦");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&nbsp;|&#32;|&#x20;/g, "<span class='spaceshow'> </span>")).replace(/&ensp;|&#8194;|&#x2002;/g, "<span class='spaceshow'> </span>")).replace(/&#12288;|&#x3000;/g, "<span class='spaceshow'>　</span>")).replace(/&emsp;|&#8195;|&#x2003;/g, "<span class='spaceshow'> </span>")).replace(/&quot;|&#34;|&#x22;/g, '"')).replace(/&quot;|&#39;|&#x27;/g, "'")).replace(/&acute;|&#180;|&#xB4;/g, "´")).replace(/&times;|&#215;|&#xD7;/g, "×")).replace(/&divide;|&#247;|&#xF7;/g, "÷")).replace(/&amp;|&#38;|&#x26;/g, "&")).replace(/&lt;|&#60;|&#x3c;/g, "<")).replace(/&gt;|&#62;|&#x3e;/g, ">");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&Alpha;|&#913;|&#x391;/g, "Α")).replace(/&Beta;|&#914;|&#x392;/g, "Β")).replace(/&Gamma;|&#915;|&#x393;/g, "Γ")).replace(/&Delta;|&#916;|&#x394;/g, "Δ")).replace(/&Epsilon;|&#917;|&#x395;/g, "Ε")).replace(/&Zeta;|&#918;|&#x396;/g, "Ζ")).replace(/&Eta;|&#919;|&#x397;/g, "Η")).replace(/&Theta;|&#920;|&#x398;/g, "Θ")).replace(/&Iota;|&#921;|&#x399;/g, "Ι")).replace(/&Kappa;|&#922;|&#x39a;/g, "Κ")).replace(/&Lambda;|&#923;|&#x39b;/g, "Λ")).replace(/&Mu;|&#924;|&#x39c;/g, "Μ")).replace(/&Nu;|&#925;|&#x39d;/g, "Ν")).replace(/&Xi;|&#925;|&#x39d;/g, "Ν")).replace(/&Omicron;|&#927;|&#x39f;/g, "Ο")).replace(/&Pi;|&#928;|&#x3a0;/g, "Π")).replace(/&Rho;|&#929;|&#x3a1;/g, "Ρ")).replace(/&Sigma;|&#931;|&#x3a3;/g, "Σ")).replace(/&Tau;|&#932;|&#x3a4;/g, "Τ")).replace(/&Upsilon;|&#933;|&#x3a5;/g, "Υ")).replace(/&Phi;|&#934;|&#x3a6;/g, "Φ")).replace(/&Chi;|&#935;|&#x3a7;/g, "Χ")).replace(/&Psi;|&#936;|&#x3a8;/g, "Ψ")).replace(/&Omega;|&#937;|&#x3a9;/g, "Ω")).replace(/&alpha;|&#945;|&#x3b1;/g, "α")).replace(/&beta;|&#946;|&#x3b2;/g, "β")).replace(/&gamma;|&#947;|&#x3b3;/g, "γ")).replace(/&delta;|&#948;|&#x3b4;/g, "δ")).replace(/&epsilon;|&#949;|&#x3b5;/g, "ε")).replace(/&zeta;|&#950;|&#x3b6;/g, "ζ")).replace(/&eta;|&#951;|&#x3b7;/g, "η")).replace(/&theta;|&#952;|&#x3b8;/g, "θ")).replace(/&iota;|&#953;|&#x3b9;/g, "ι")).replace(/&kappa;|&#954;|&#x3ba;/g, "κ")).replace(/&lambda;|&#955;|&#x3bb;/g, "λ")).replace(/&mu;|&#956;|&#x3bc;/g, "μ")).replace(/&nu;|&#957;|&#x3bd;/g, "ν")).replace(/&xi;|&#958;|&#x3be;/g, "ξ")).replace(/&omicron;|&#959;|&#x3bf;/g, "ο")).replace(/&pi;|&#960;|&#x3c0;/g, "π")).replace(/&rho;|&#961;|&#x3c1;/g, "ρ")).replace(/&sigmaf;|&#962;|&#x3c2;/g, "ς")).replace(/&sigma;|&#963;|&#x3c3;/g, "σ")).replace(/&tau;|&#964;|&#x3c4;/g, "τ")).replace(/&upsilon;|&#965;|&#x3c5;/g, "υ")).replace(/&phi;|&#966;|&#x3c6;/g, "φ")).replace(/&chi;|&#967;|&#x3c7;/g, "χ")).replace(/&psi;|&#968;|&#x3c8;/g, "ψ")).replace(/&omega;|&#969;|&#x3c9;/g, "ω")).replace(/&thetasym;|&#977;|&#x3d1;/g, "ϑ")).replace(/&upsih;|&#978;|&#x3d2;/g, "ϒ")).replace(/&piv;|&#982;|&#x3d6;/g, "ϖ")).replace(/&middot;|&#183;|&#xb7;/g, "·");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&forall;|&#8704;|&#x2200;/g, "∀")).replace(/&part;|&#8706;|&#x2202;/g, "∂")).replace(/&exist;|&#8707;|&#x2203;/g, "∃")).replace(/&empty;|&#8709;|&#x2205;/g, "∅")).replace(/&nabla;|&#8711;|&#x2207;/g, "∇")).replace(/&isin;|&#8712;|&#x2208;/g, "∈")).replace(/&notin;|&#8713;|&#x2209;/g, "∉")).replace(/&ni;|&#8715;|&#x220b;/g, "∋")).replace(/&prod;|&#8719;|&#x220f;/g, "∏")).replace(/&sum;|&#8721;|&#x2211;/g, "∑")).replace(/&minus;|&#8722;|&#x2212;/g, "−")).replace(/&lowast;|&#8727;|&#x2217;/g, "∗")).replace(/&radic;|&#8730;|&#x221a;/g, "√")).replace(/&prop;|&#8733;|&#x221d;/g, "∝")).replace(/&infin;|&#8734;|&#x221e;/g, "∞")).replace(/&ang;|&#8736;|&#x2220;/g, "∠")).replace(/&and;|&#8743;|&#x2227;/g, "∧")).replace(/&or;|&#8744;|&#x2228;/g, "∨")).replace(/&cap;|&#8745;|&#x2229;/g, "∩")).replace(/&cup;|&#8746;|&#x222a;/g, "∪")).replace(/&int;|&#8747;|&#x222b;/g, "∫")).replace(/&there4;|&#8756;|&#x2234;/g, "∴")).replace(/&sim;|&#8764;|&#x223c;/g, "∼")).replace(/&cong;|&#8773;|&#x2245;/g, "≅")).replace(/&asymp;|&#8776;|&#x2248;/g, "≈")).replace(/&ne;|&#8800;|&#x2260;/g, "≠")).replace(/&le;|&#8804;|&#x2264;/g, "≤")).replace(/&ge;|&#8805;|&#x2265;/g, "≥")).replace(/&sub;|&#8834;|&#x2282;/g, "⊂")).replace(/&sup;|&#8835;|&#x2283;/g, "⊃")).replace(/&nsub;|&#8836;|&#x2284;/g, "⊄")).replace(/&sube;|&#8838;|&#x2286;/g, "⊆")).replace(/&supe;|&#8839;|&#x2287;/g, "⊇")).replace(/&oplus;|&#8853;|&#x2295;/g, "⊕")).replace(/&otimes;|&#8855;|&#x2297;/g, "⊗")).replace(/&perp;|&#8869;|&#x22a5;/g, "⊥")).replace(/&sdot;|&#8901;|&#x22c5;/g, "⋅");
                }(e))));
            },
            urlToHttpUrl: function(e, l) {
                return /^\/\//.test(e) ? "https:".concat(e) : /^\//.test(e) ? "https://".concat(l).concat(e) : e;
            }
        };
    },
    "1d17": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = {
            toThousands: function(e) {
                return e ? -1 != e.toString().lastIndexOf(".") ? Number(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").split(".")[0] + "." + e.toString().split(".")[1] : Number(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").split(".")[0] : 0;
            },
            imgUrlSplit: function(e) {
                if (e) return e.split(",")[0];
            },
            timeSplit: function(e) {
                if (e) return e.split(".")[0];
            },
            tradeSplit: function(e) {
                if (e) return e.split("-")[1];
            },
            parseTime: function(e) {
                if (e) {
                    var l = e.split(".")[0], a = l.split(" ")[0].split("-")[0], t = l.split(" ")[0].split("-")[1] - 1, n = l.split(" ")[0].split("-")[2], r = l.split(" ")[1].split(":")[0], u = l.split(" ")[1].split(":")[1], o = l.split(" ")[1].split(":")[2];
                    return Date.parse(new Date(a, t, n, r, u, o));
                }
            },
            keepTwoNum: function(e) {
                return (e = Number(e)).toFixed(2);
            },
            toFixed: function(e) {
                if (e) return Number(e).toFixed(2);
            },
            stripTrailingZeros: function(e) {
                return e ? parseFloat(e.toString()) : "";
            }
        };
        l.default = t;
    },
    2236: function(e, l, a) {
        var t = a("5a43");
        e.exports = function(e) {
            if (Array.isArray(e)) return t(e);
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "278c": function(e, l, a) {
        var t = a("c135"), n = a("9b42"), r = a("6613"), u = a("c240");
        e.exports = function(e, l) {
            return t(e) || n(e, l) || r(e, l) || u();
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "2a18": function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var n = t(a("2eee")), r = t(a("c973")), u = (a("9b31"), a("5f47")), o = a("76d6"), i = {
                data: function() {
                    return {
                        sw_swiperList: []
                    };
                },
                methods: {
                    getActivityZoneInfo: function(l) {
                        var a = this;
                        return (0, r.default)(n.default.mark(function t() {
                            var r, o, i, c, s, v, b, f, p, d;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (r = "00", o = "00", !((i = getApp().globalData.userLocation || e.getStorageSync("userLocation")) && i.longitude && i.latitude)) {
                                        t.next = 7;
                                        break;
                                    }
                                    r = i.longitude, o = i.latitude, t.next = 12;
                                    break;

                                  case 7:
                                    return t.next = 9, a.sw_getLocation();

                                  case 9:
                                    c = t.sent, r = c.longitude, o = c.latitude;

                                  case 12:
                                    return (s = {}).longitude = r, s.latitude = o, s.projectServerName = getApp().globalData.projectServerName || e.getStorageSync("projectServerName") || "projectServerName", 
                                    s.position = l, i && (v = i.longitude, b = i.latitude, s.longitude = v, s.latitude = b), 
                                    t.next = 20, (0, u.getActivityZoneInfo)(s);

                                  case 20:
                                    if (f = t.sent, p = f.result, d = f.reply, 0 != p.businessCode || 0 != p.code) {
                                        t.next = 27;
                                        break;
                                    }
                                    return t.abrupt("return", d);

                                  case 27:
                                    return t.abrupt("return", null);

                                  case 28:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    actJumpEvent: function(l) {
                        console.log(l);
                        var a = l.jumpTyp, t = l.jumpUrl, n = l.picJumpUrl, r = l.appid;
                        if ("1" == a) e.navigateTo({
                            url: "/pages/module/webview?target=".concat(t)
                        }); else if ("2" == a) e.navigateTo({
                            url: "/pages/module/imgWrap?target=".concat(t || n)
                        }); else if ("3" == a) e.navigateToMiniProgram({
                            appId: r,
                            path: t
                        }); else {
                            if ("4" != a) return;
                            e.reLaunch({
                                url: t
                            });
                        }
                    },
                    sw_getLocation: function() {
                        return new Promise(function(l, a) {
                            e.getSetting({
                                complete: function(a) {
                                    console.log(a), (0, o.postLocationData)(a), a.authSetting && 1 == a.authSetting["scope.getLocation"] ? (e.getLocation({
                                        type: "wgs84",
                                        complete: function(e) {
                                            console.log(e), getApp().globalData.longitude = e.longitude, getApp().globalData.latitude = e.latitude, 
                                            getApp().globalData.userLocation = e, l(e);
                                        }
                                    }), console.log("after this.getLocation")) : l({
                                        longitude: "00",
                                        latitude: "00"
                                    });
                                }
                            });
                        });
                    }
                }
            };
            l.default = i;
        }).call(this, a("543d").default);
    },
    "2eee": function(e, l, a) {
        var t = a("7ec2")();
        e.exports = t;
    },
    "330c": function(e) {
        e.exports = JSON.parse('{"uni-datetime-picker.selectDate":"選擇日期","uni-datetime-picker.selectTime":"選擇時間","uni-datetime-picker.selectDateTime":"選擇日期時間","uni-datetime-picker.startDate":"開始日期","uni-datetime-picker.endDate":"結束日期","uni-datetime-picker.startTime":"開始时间","uni-datetime-picker.endTime":"結束时间","uni-datetime-picker.ok":"確定","uni-datetime-picker.clear":"清除","uni-datetime-picker.cancel":"取消","uni-datetime-picker.year":"年","uni-datetime-picker.month":"月","uni-calender.SUN":"日","uni-calender.MON":"一","uni-calender.TUE":"二","uni-calender.WED":"三","uni-calender.THU":"四","uni-calender.FRI":"五","uni-calender.SAT":"六","uni-calender.confirm":"確認"}');
    },
    "35cf": function(e, l) {
        e.exports = {
            formatTime: function(e) {
                var l = new Date(e), a = l.getFullYear(), t = l.getMonth() + 1;
                t = t < 10 ? "0" + t : t;
                var n = l.getDate();
                n = n < 10 ? "0" + n : n;
                var r = l.getHours();
                r = r < 10 ? "0" + r : r;
                var u = l.getMinutes(), o = l.getSeconds();
                return a + "-" + t + "-" + n + " " + r + ":" + (u = u < 10 ? "0" + u : u) + ":" + (o = o < 10 ? "0" + o : o);
            },
            getIdcardValidateCode: function(e) {
                var l = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ], a = /^[1-9][0-9xX]{17}$/, t = 0, n = [];
                if (a.test(e)) {
                    for (var r = 0; r < 17; ++r) t += parseInt(e[r], 10) * l[r], r > 5 && r < 14 && n.push(e[r]);
                    return [ "1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2" ][t % 11] === e[17].toUpperCase() && a.test(e);
                }
                return a.test(e);
            },
            dateToMs: function(e) {
                var l = e.split(" ")[0], a = e.split(" ")[1];
                return new Date(l.split("-")[0], l.split("-")[1] - 1, l.split("-")[2], a.split(":")[0], a.split(":")[1], a.split(":")[2]).getTime();
            },
            isEmojiCharacter: function(e) {
                for (var l = 0; l < e.length; l++) {
                    var a = e.charCodeAt(l);
                    if (55296 <= a && a <= 56319) {
                        if (e.length > 1) {
                            var t = e.charCodeAt(l + 1), n = 1024 * (a - 55296) + (t - 56320) + 65536;
                            if (118784 <= n && n <= 128895) return !0;
                        }
                    } else if (e.length > 1) {
                        if (8419 == (t = e.charCodeAt(l + 1))) return !0;
                    } else {
                        if (8448 <= a && a <= 10239) return !0;
                        if (11013 <= a && a <= 11015) return !0;
                        if (10548 <= a && a <= 10549) return !0;
                        if (12951 <= a && a <= 12953) return !0;
                        if (169 == a || 174 == a || 12349 == a || 12336 == a || 11093 == a || 11036 == a || 11035 == a || 11088 == a) return !0;
                    }
                }
            },
            noPassByMobile: function(e) {
                return null != e && null != e ? e.replace(/(\d{3})\d*(\d{4})/, "$1****$2") : "";
            },
            noPassByName: function(e) {
                return null == e || null == e ? "" : 2 == e.length ? e.substring(0, 1) + "*" : 3 == e.length ? e.substring(0, 1) + "*" + e.substring(2, 3) : e.length > 3 ? e.substring(0, 1) + "**" + e.substring(3, e.length) : void 0;
            }
        };
    },
    "37dc": function(e, l, a) {
        (function(e, t) {
            var n = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.LOCALE_ZH_HANT = l.LOCALE_ZH_HANS = l.LOCALE_FR = l.LOCALE_ES = l.LOCALE_EN = l.I18n = l.Formatter = void 0, 
            l.compileI18nJsonStr = function(e, l) {
                var a = l.locale, t = l.locales, n = l.delimiters;
                if (!O(e, n)) return e;
                S || (S = new v());
                var r = [];
                Object.keys(t).forEach(function(e) {
                    e !== a && r.push({
                        locale: e,
                        values: t[e]
                    });
                }), r.unshift({
                    locale: a,
                    values: t[a]
                });
                try {
                    return JSON.stringify(function e(l, a, t) {
                        return P(l, function(l, n) {
                            !function(l, a, t, n) {
                                var r = l[a];
                                if (A(r)) {
                                    if (O(r, n) && (l[a] = k(r, t[0].values, n), t.length > 1)) {
                                        var u = l[a + "Locales"] = {};
                                        t.forEach(function(e) {
                                            u[e.locale] = k(r, e.values, n);
                                        });
                                    }
                                } else e(r, t, n);
                            }(l, n, a, t);
                        }), l;
                    }(JSON.parse(e), r, n), null, 2);
                } catch (e) {}
                return e;
            }, l.hasI18nJson = function e(l, a) {
                return S || (S = new v()), P(l, function(l, t) {
                    var n = l[t];
                    return A(n) ? !!O(n, a) || void 0 : e(n, a);
                });
            }, l.initVueI18n = function(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0, t = arguments.length > 3 ? arguments[3] : void 0;
                if ("string" != typeof e) {
                    var n = [ l, e ];
                    e = n[0], l = n[1];
                }
                "string" != typeof e && (e = w()), "string" != typeof a && (a = "undefined" != typeof __uniConfig && __uniConfig.fallbackLocale || "en");
                var r = new _({
                    locale: e,
                    fallbackLocale: a,
                    messages: l,
                    watcher: t
                }), u = function(e, l) {
                    if ("function" != typeof getApp) u = function(e, l) {
                        return r.t(e, l);
                    }; else {
                        var a = !1;
                        u = function(e, l) {
                            var t = getApp().$vm;
                            return t && (t.$locale, a || (a = !0, x(t, r))), r.t(e, l);
                        };
                    }
                    return u(e, l);
                };
                return {
                    i18n: r,
                    f: function(e, l, a) {
                        return r.f(e, l, a);
                    },
                    t: function(e, l) {
                        return u(e, l);
                    },
                    add: function(e, l) {
                        var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return r.add(e, l, a);
                    },
                    watch: function(e) {
                        return r.watchLocale(e);
                    },
                    getLocale: function() {
                        return r.getLocale();
                    },
                    setLocale: function(e) {
                        return r.setLocale(e);
                    }
                };
            }, l.isI18nStr = O, l.isString = void 0, l.normalizeLocale = y, l.parseI18nJson = function e(l, a, t) {
                return S || (S = new v()), P(l, function(l, n) {
                    var r = l[n];
                    A(r) ? O(r, t) && (l[n] = k(r, a, t)) : e(r, a, t);
                }), l;
            }, l.resolveLocale = function(e) {
                return function(l) {
                    return l ? function(e) {
                        for (var l = [], a = e.split("-"); a.length; ) l.push(a.join("-")), a.pop();
                        return l;
                    }(l = y(l) || l).find(function(l) {
                        return e.indexOf(l) > -1;
                    }) : l;
                };
            };
            var r = n(a("278c")), u = n(a("970b")), o = n(a("5bc3")), i = n(a("7037")), c = function(e) {
                return null !== e && "object" === (0, i.default)(e);
            }, s = [ "{", "}" ], v = function() {
                function e() {
                    (0, u.default)(this, e), this._caches = Object.create(null);
                }
                return (0, o.default)(e, [ {
                    key: "interpolate",
                    value: function(e, l) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
                        if (!l) return [ e ];
                        var t = this._caches[e];
                        return t || (t = p(e, a), this._caches[e] = t), d(t, l);
                    }
                } ]), e;
            }();
            l.Formatter = v;
            var b = /^(?:\d)+/, f = /^(?:\w)+/;
            function p(e, l) {
                for (var a = (0, r.default)(l, 2), t = a[0], n = a[1], u = [], o = 0, i = ""; o < e.length; ) {
                    var c = e[o++];
                    if (c === t) {
                        i && u.push({
                            type: "text",
                            value: i
                        }), i = "";
                        var s = "";
                        for (c = e[o++]; void 0 !== c && c !== n; ) s += c, c = e[o++];
                        var v = c === n, p = b.test(s) ? "list" : v && f.test(s) ? "named" : "unknown";
                        u.push({
                            value: s,
                            type: p
                        });
                    } else i += c;
                }
                return i && u.push({
                    type: "text",
                    value: i
                }), u;
            }
            function d(e, l) {
                var a = [], t = 0, n = Array.isArray(l) ? "list" : c(l) ? "named" : "unknown";
                if ("unknown" === n) return a;
                for (;t < e.length; ) {
                    var r = e[t];
                    switch (r.type) {
                      case "text":
                        a.push(r.value);
                        break;

                      case "list":
                        a.push(l[parseInt(r.value, 10)]);
                        break;

                      case "named":
                        "named" === n && a.push(l[r.value]);
                    }
                    t++;
                }
                return a;
            }
            l.LOCALE_ZH_HANS = "zh-Hans", l.LOCALE_ZH_HANT = "zh-Hant", l.LOCALE_EN = "en", 
            l.LOCALE_FR = "fr", l.LOCALE_ES = "es";
            var g = Object.prototype.hasOwnProperty, h = function(e, l) {
                return g.call(e, l);
            }, m = new v();
            function y(e, l) {
                if (e) {
                    if (e = e.trim().replace(/_/g, "-"), l && l[e]) return e;
                    if ("chinese" === (e = e.toLowerCase())) return "zh-Hans";
                    if (0 === e.indexOf("zh")) return e.indexOf("-hans") > -1 ? "zh-Hans" : e.indexOf("-hant") > -1 || function(e, l) {
                        return !![ "-tw", "-hk", "-mo", "-cht" ].find(function(l) {
                            return -1 !== e.indexOf(l);
                        });
                    }(e) ? "zh-Hant" : "zh-Hans";
                    var a = [ "en", "fr", "es" ];
                    return l && Object.keys(l).length > 0 && (a = Object.keys(l)), function(e, l) {
                        return l.find(function(l) {
                            return 0 === e.indexOf(l);
                        });
                    }(e, a) || void 0;
                }
            }
            var _ = function() {
                function e(l) {
                    var a = l.locale, t = l.fallbackLocale, n = l.messages, r = l.watcher, o = l.formater;
                    (0, u.default)(this, e), this.locale = "en", this.fallbackLocale = "en", this.message = {}, 
                    this.messages = {}, this.watchers = [], t && (this.fallbackLocale = t), this.formater = o || m, 
                    this.messages = n || {}, this.setLocale(a || "en"), r && this.watchLocale(r);
                }
                return (0, o.default)(e, [ {
                    key: "setLocale",
                    value: function(e) {
                        var l = this, a = this.locale;
                        this.locale = y(e, this.messages) || this.fallbackLocale, this.messages[this.locale] || (this.messages[this.locale] = {}), 
                        this.message = this.messages[this.locale], a !== this.locale && this.watchers.forEach(function(e) {
                            e(l.locale, a);
                        });
                    }
                }, {
                    key: "getLocale",
                    value: function() {
                        return this.locale;
                    }
                }, {
                    key: "watchLocale",
                    value: function(e) {
                        var l = this, a = this.watchers.push(e) - 1;
                        return function() {
                            l.watchers.splice(a, 1);
                        };
                    }
                }, {
                    key: "add",
                    value: function(e, l) {
                        var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], t = this.messages[e];
                        t ? a ? Object.assign(t, l) : Object.keys(l).forEach(function(e) {
                            h(t, e) || (t[e] = l[e]);
                        }) : this.messages[e] = l;
                    }
                }, {
                    key: "f",
                    value: function(e, l, a) {
                        return this.formater.interpolate(e, l, a).join("");
                    }
                }, {
                    key: "t",
                    value: function(e, l, a) {
                        var t = this.message;
                        return "string" == typeof l ? (l = y(l, this.messages)) && (t = this.messages[l]) : a = l, 
                        h(t, e) ? this.formater.interpolate(t[e], a).join("") : (console.warn("Cannot translate the value of keypath ".concat(e, ". Use the value of keypath as default.")), 
                        e);
                    }
                } ]), e;
            }();
            function x(e, l) {
                e.$watchLocale ? e.$watchLocale(function(e) {
                    l.setLocale(e);
                }) : e.$watch(function() {
                    return e.$locale;
                }, function(e) {
                    l.setLocale(e);
                });
            }
            function w() {
                return void 0 !== e && e.getLocale ? e.getLocale() : void 0 !== t && t.getLocale ? t.getLocale() : "en";
            }
            l.I18n = _;
            var S, A = function(e) {
                return "string" == typeof e;
            };
            function O(e, l) {
                return e.indexOf(l[0]) > -1;
            }
            function k(e, l, a) {
                return S.interpolate(e, l, a).join("");
            }
            function P(e, l) {
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a++) if (l(e, a)) return !0;
                } else if (c(e)) for (var t in e) if (l(e, t)) return !0;
                return !1;
            }
            l.isString = A;
        }).call(this, a("543d").default, a("c8ba"));
    },
    "3a6c": function(e, l) {
        e.exports = {
            formatTime: function(e) {
                var l = new Date(e), a = l.getFullYear(), t = l.getMonth() + 1;
                t = t < 10 ? "0" + t : t;
                var n = l.getDate();
                n = n < 10 ? "0" + n : n;
                var r = l.getHours();
                r = r < 10 ? "0" + r : r;
                var u = l.getMinutes(), o = l.getSeconds();
                return a + "-" + t + "-" + n + " " + r + ":" + (u = u < 10 ? "0" + u : u) + ":" + (o = o < 10 ? "0" + o : o);
            },
            getIdcardValidateCode: function(e) {
                var l = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ], a = /^[1-9][0-9xX]{17}$/, t = 0, n = [];
                if (a.test(e)) {
                    for (var r = 0; r < 17; ++r) t += parseInt(e[r], 10) * l[r], r > 5 && r < 14 && n.push(e[r]);
                    return [ "1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2" ][t % 11] === e[17].toUpperCase() && a.test(e);
                }
                return a.test(e);
            },
            dateToMs: function(e) {
                var l = e.split(" ")[0], a = e.split(" ")[1];
                return new Date(l.split("-")[0], l.split("-")[1] - 1, l.split("-")[2], a.split(":")[0], a.split(":")[1], a.split(":")[2]).getTime();
            },
            isEmojiCharacter: function(e) {
                for (var l = 0; l < e.length; l++) {
                    var a = e.charCodeAt(l);
                    if (55296 <= a && a <= 56319) {
                        if (e.length > 1) {
                            var t = e.charCodeAt(l + 1), n = 1024 * (a - 55296) + (t - 56320) + 65536;
                            if (118784 <= n && n <= 128895) return !0;
                        }
                    } else if (e.length > 1) {
                        if (8419 == (t = e.charCodeAt(l + 1))) return !0;
                    } else {
                        if (8448 <= a && a <= 10239) return !0;
                        if (11013 <= a && a <= 11015) return !0;
                        if (10548 <= a && a <= 10549) return !0;
                        if (12951 <= a && a <= 12953) return !0;
                        if (169 == a || 174 == a || 12349 == a || 12336 == a || 11093 == a || 11036 == a || 11035 == a || 11088 == a) return !0;
                    }
                }
            }
        };
    },
    "3c35": function(e, l) {
        (function(l) {
            e.exports = l;
        }).call(this, {});
    },
    "3d25": function(e, l, a) {
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.tool = void 0;
            var a = {};
            l.tool = a, a.getOpenid = function() {
                return new Promise(function(l, a) {
                    e.getStorage({
                        key: "openid",
                        complete: function(a) {
                            "getStorage:ok" == a.errMsg ? l(a.data.openid) : e.navigateTo({
                                url: "/pages/getOpenid/getOpenid?getIdType=openid"
                            });
                        }
                    });
                });
            }, a.getVjfOpenid = function() {
                return new Promise(function(l, a) {
                    e.getStorage({
                        key: "vjfOpenid",
                        complete: function(a) {
                            "getStorage:ok" == a.errMsg ? l(a.data.vjfOpenid) : e.navigateTo({
                                url: "/pages/getOpenid/getOpenid?getIdType=vjfOpenid"
                            });
                        }
                    });
                });
            }, a.getHbOpenid = function(l) {
                var a = "hbOpenid_";
                return a += l || config.payAppid, console.log("keykey", a), new Promise(function(t, n) {
                    e.getStorage({
                        key: a,
                        complete: function(a) {
                            "getStorage:ok" == a.errMsg ? t(a.data.hbOpenid) : e.navigateTo({
                                url: "/pages/getOpenid/getOpenid?getIdType=hbOpenid&appid=" + (l || config.payAppid)
                            });
                        }
                    });
                });
            }, a.clearOpenid = function() {
                e.removeStorageSync("openid"), e.removeStorageSync("vjfOpenid");
            }, a.expireFlag = function(l) {
                var a = l.expireFlag, t = l.isQuery, n = void 0 === t ? 1 : t, r = l.cycle, u = l.expire, o = void 0 === u ? 24 : u;
                if (1 == n) {
                    var i = e.getStorageSync(a);
                    return !(i && Date.parse(new Date()) < i);
                }
                if (a) {
                    var c = new Date(), s = c.getFullYear(), v = c.getMonth(), b = c.getDate();
                    "date" == r ? e.setStorage({
                        key: a,
                        data: new Date(s, v, b).getTime() + 864e5
                    }) : "day" == r ? e.setStorage({
                        key: a,
                        data: new Date(s, v, b).getTime() + 6048e5
                    }) : "month" == r ? e.setStorage({
                        key: a,
                        data: new Date(s, v, b).getTime() + 2592e6
                    }) : "year" == r ? e.setStorage({
                        key: a,
                        data: new Date(s, v, b).getTime() + 31536e6
                    }) : e.setStorage({
                        key: a,
                        data: Date.parse(new Date()) + 60 * o * 60 * 1e3
                    });
                }
            }, a.cache = function(l, a) {
                if (!a) {
                    var t = e.getStorageSync(l);
                    return t.date != new Date().toJSON().split("T")[0] ? (e.removeStorageSync(l), 0) : t.val;
                }
                e.setStorage({
                    key: l,
                    data: {
                        date: new Date().toJSON().split("T")[0],
                        val: a
                    }
                });
            };
        }).call(this, a("543d").default);
    },
    4362: function(e, l, a) {
        l.nextTick = function(e) {
            var l = Array.prototype.slice.call(arguments);
            l.shift(), setTimeout(function() {
                e.apply(null, l);
            }, 0);
        }, l.platform = l.arch = l.execPath = l.title = "browser", l.pid = 1, l.browser = !0, 
        l.env = {}, l.argv = [], l.binding = function(e) {
            throw new Error("No such module. (Possibly not yet loaded)");
        }, function() {
            var e, t = "/";
            l.cwd = function() {
                return t;
            }, l.chdir = function(l) {
                e || (e = a("df7c")), t = e.resolve(l, t);
            };
        }(), l.exit = l.kill = l.umask = l.dlopen = l.uptime = l.memoryUsage = l.uvCounters = function() {}, 
        l.features = {};
    },
    "448a": function(e, l, a) {
        var t = a("2236"), n = a("11b0"), r = a("6613"), u = a("0676");
        e.exports = function(e) {
            return t(e) || n(e) || r(e) || u();
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    4514: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.provinceList = void 0;
        l.provinceList = [ {
            province: "河南省",
            projectServerName: "henanpz",
            appid: "wx83f837b74f25eb06",
            vjfAppid: "wxe2a3ba29612c0e0e",
            payAppid: "wxa42a20606316e2e9"
        }, {
            province: "广东省",
            projectServerName: "huanan2022",
            projectFlag: "U2",
            appid: "wxff61f0c805b996c3",
            vjfAppid: "wxe2a3ba29612c0e0e",
            payAppid: "wxa42a20606316e2e9"
        }, {
            province: "重庆市",
            projectServerName: "chongqing",
            projectFlag: "Q",
            appid: "wxce2c134a4b75904e",
            vjfAppid: "wxe2a3ba29612c0e0e",
            payAppid: "wxa42a20606316e2e9"
        } ];
    },
    "46db": function(e, l, a) {
        (function(e, t) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.analysisMobile = function(e, l) {
                return new Promise(function(a, n) {
                    var u = {
                        sessionKey: e,
                        encryptedData: l.encryptedData,
                        iv: l.iv,
                        provinceCode: r.provinceCode
                    };
                    t.request({
                        url: "https://xcxact.vjifen.com/api/decrypt",
                        method: "POST",
                        data: u,
                        success: function(e) {
                            console.log("------------------------11111"), console.log(e);
                            var l = e.data.data.decryptData;
                            getApp().globalData.haveTel = l.phoneNumber, l.phoneNumber ? (t.setStorage({
                                key: "userMobileData",
                                data: l
                            }), a(l)) : t.removeStorageSync("userData");
                        },
                        fail: function(e) {
                            t.showModal({
                                title: "提示",
                                content: "解析手机号结果" + res.data
                            }), n("decrypt", e);
                        }
                    });
                });
            }, l.callPhone = function(e) {
                t.makePhoneCall({
                    phoneNumber: e,
                    success: function() {
                        console.log("拨打电话成功！");
                    },
                    fail: function() {
                        console.log("拨打电话失败！");
                    }
                });
            }, l.getCode = l.checkSession = void 0, l.getLocation = function() {
                return new Promise(function(l, a) {
                    e.getLocation ? t.getLocation({
                        type: "wgs84",
                        complete: function(e) {
                            if ((0, u.postLocationData)(e), "getLocation:ok" == e.errMsg) {
                                l([ 0, e ]);
                                var a = e || "";
                                getApp().globalData.userLocation = a;
                            } else "getLocation:fail auth deny" == e.errMsg || "getLocation:fail authorize no response" == e.errMsg ? l([ 1 ]) : "getLocation:fail:auth denied" == e.errMsg ? l([ 2 ]) : l([ 3 ]);
                        }
                    }) : l([ 0, {
                        longitude: "00",
                        latitude: "00"
                    } ]);
                });
            }, l.getSettingLocation = l.getOpenid = void 0, l.getUserInfo = function() {
                return new Promise(function(e, l) {
                    t.getUserInfo({
                        success: function(l) {
                            console.log(l), e(l), t.setStorage({
                                key: "userInfo",
                                data: l.userInfo
                            }), getApp().globalData.userInfo = l.userInfo;
                        },
                        fail: function(e) {
                            l(e);
                        }
                    });
                });
            }, l.navigateToMiniProgram = function() {
                var e, l = t.getStorageSync("openid").openid, a = t.getStorageSync("userMobileData"), r = getApp().globalData.userLocation, u = "", o = "";
                e = a ? a.phoneNumber : "", r ? (u = r.longitude, o = r.latitude) : (u = "", o = ""), 
                console.log("目前 只跳转 二重惊喜 小程序 "), console.log(l), console.log(e), console.log(u), 
                console.log(o), t.navigateToMiniProgram({
                    appId: "wx1e63bbf67dddd854",
                    path: "pages/index/index",
                    envVersion: n.config.envVersion,
                    extraData: {
                        openid: l,
                        tel: e,
                        serverName: getApp().globalData.projectServerName || t.getStorageSync("projectServerName") || "projectServerName",
                        longitude: u,
                        latitude: o
                    },
                    success: function(e) {
                        getApp().globalData.isOpenECJXMiniProgram = !0;
                    }
                });
            }, l.toMiniProgramWM = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                console.log("目前 只跳转 二重惊喜 小程序 "), console.log(getApp().globalData.ticketCode);
                var l = "";
                if (e) l = e; else {
                    if (!getApp().globalData.ticketInfo) return !1;
                    l = getApp().globalData.ticketInfo.ticketCode;
                }
                t.navigateToMiniProgram({
                    appId: "wx02d01a010700ad54",
                    path: l,
                    envVersion: n.config.envVersion,
                    extraData: {},
                    success: function(e) {}
                });
            }, l.wxScanCode = function() {
                t.scanCode({
                    success: function(e) {
                        console.log("条码类型：" + e.scanType), console.log("条码内容：" + e.result), t.redirectTo({
                            url: "/pages/saoDianDe/activityEntrance/activityEntrance?q=" + encodeURIComponent(e.result) + "&status=1",
                            complete: function() {
                                getApp().globalData.openQrcode = !1;
                            }
                        });
                    },
                    fail: function(e) {
                        console.log("我是扫一扫页面"), console.log(e), t.switchTab({
                            url: "../index/index",
                            complete: function() {
                                getApp().globalData.openQrcode = !1;
                            }
                        });
                    }
                });
            };
            var n = a("0488"), r = a("64da"), u = a("76d6");
            a("6fd5"), l.checkSession = function() {
                return new Promise(function(e, l) {
                    t.checkSession({
                        success: function() {
                            console.log("状态未过期"), e(0);
                        },
                        fail: function() {
                            console.log("状态已过期"), e(1);
                        }
                    });
                }).catch(function(e) {
                    t.showToast({
                        icon: "none",
                        title: e.errMsg || "验证session失效",
                        duration: 2e3
                    });
                });
            }, l.getCode = function() {
                return new Promise(function(e, l) {
                    t.login({
                        success: function(a) {
                            a && a.code ? e(a.code) : l(a);
                        }
                    });
                }).catch(function(e) {
                    t.showToast({
                        icon: "none",
                        title: e.errMsg || "获取code失败",
                        duration: 2e3
                    });
                });
            }, l.getSettingLocation = function() {
                return new Promise(function(e, l) {
                    t.getSetting({
                        success: function(l) {
                            var a = l.authSetting;
                            a["scope.userFuzzyLocation"] ? e(1) : !1 !== a["scope.userFuzzyLocation"] ? e(2) : e(0);
                        },
                        fail: function(e) {
                            l(e);
                        }
                    });
                }).catch(function(e) {
                    t.showToast({
                        icon: "none",
                        title: e.errMsg || "获取位置状态失败",
                        duration: 2e3
                    });
                });
            }, l.getOpenid = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = "https://xcxact.vjifen.com/api/getOpenid", n = {
                    code: e,
                    provinceCode: l
                }, r = new Promise(function(e, l) {
                    t.request({
                        url: a,
                        method: "POST",
                        data: n,
                        success: function(l) {
                            var a = l.data;
                            if (0 == a.code) {
                                var n = a.data || {};
                                t.setStorageSync("userData", n), e(a.data);
                            } else console.log(2), e(l.msg);
                        },
                        fail: function(e) {
                            l(e);
                        }
                    });
                });
                return r;
            };
        }).call(this, a("bc2e").default, a("543d").default);
    },
    "490d": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.queryMyGiftCardForCount = l.queryGiftCardStatus = l.queryGiftCard = l.getGiftCardDetails = l.activationGiftCard = void 0;
        var t = a("9b31");
        l.queryGiftCardStatus = function(e) {
            return (0, t.requestPost)("/vpoints/giftCard/queryGiftCardStatus", e);
        }, l.queryGiftCard = function(e) {
            return (0, t.requestPost)("/vpoints/giftCard/queryGiftCard", e);
        }, l.getGiftCardDetails = function(e) {
            return (0, t.requestPost)("/vpoints/giftCard/getGiftCardDetails", e);
        }, l.activationGiftCard = function(e) {
            return (0, t.requestPost)("/vpoints/giftCard/activationGiftCard", e);
        }, l.queryMyGiftCardForCount = function(e) {
            return (0, t.requestPost)("/vpoints/giftCard/queryMyGiftCardForCount", e);
        };
    },
    "49e8": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        l.default = [ [ [ {
            label: "东城区",
            value: "110101"
        }, {
            label: "西城区",
            value: "110102"
        }, {
            label: "朝阳区",
            value: "110105"
        }, {
            label: "丰台区",
            value: "110106"
        }, {
            label: "石景山区",
            value: "110107"
        }, {
            label: "海淀区",
            value: "110108"
        }, {
            label: "门头沟区",
            value: "110109"
        }, {
            label: "房山区",
            value: "110111"
        }, {
            label: "通州区",
            value: "110112"
        }, {
            label: "顺义区",
            value: "110113"
        }, {
            label: "昌平区",
            value: "110114"
        }, {
            label: "大兴区",
            value: "110115"
        }, {
            label: "怀柔区",
            value: "110116"
        }, {
            label: "平谷区",
            value: "110117"
        }, {
            label: "密云区",
            value: "110118"
        }, {
            label: "延庆区",
            value: "110119"
        } ] ], [ [ {
            label: "和平区",
            value: "120101"
        }, {
            label: "河东区",
            value: "120102"
        }, {
            label: "河西区",
            value: "120103"
        }, {
            label: "南开区",
            value: "120104"
        }, {
            label: "河北区",
            value: "120105"
        }, {
            label: "红桥区",
            value: "120106"
        }, {
            label: "东丽区",
            value: "120110"
        }, {
            label: "西青区",
            value: "120111"
        }, {
            label: "津南区",
            value: "120112"
        }, {
            label: "北辰区",
            value: "120113"
        }, {
            label: "武清区",
            value: "120114"
        }, {
            label: "宝坻区",
            value: "120115"
        }, {
            label: "滨海新区",
            value: "120116"
        }, {
            label: "宁河区",
            value: "120117"
        }, {
            label: "静海区",
            value: "120118"
        }, {
            label: "蓟州区",
            value: "120119"
        } ] ], [ [ {
            label: "长安区",
            value: "130102"
        }, {
            label: "桥西区",
            value: "130104"
        }, {
            label: "新华区",
            value: "130105"
        }, {
            label: "井陉矿区",
            value: "130107"
        }, {
            label: "裕华区",
            value: "130108"
        }, {
            label: "藁城区",
            value: "130109"
        }, {
            label: "鹿泉区",
            value: "130110"
        }, {
            label: "栾城区",
            value: "130111"
        }, {
            label: "井陉县",
            value: "130121"
        }, {
            label: "正定县",
            value: "130123"
        }, {
            label: "行唐县",
            value: "130125"
        }, {
            label: "灵寿县",
            value: "130126"
        }, {
            label: "高邑县",
            value: "130127"
        }, {
            label: "深泽县",
            value: "130128"
        }, {
            label: "赞皇县",
            value: "130129"
        }, {
            label: "无极县",
            value: "130130"
        }, {
            label: "平山县",
            value: "130131"
        }, {
            label: "元氏县",
            value: "130132"
        }, {
            label: "赵县",
            value: "130133"
        }, {
            label: "石家庄高新技术产业开发区",
            value: "130171"
        }, {
            label: "石家庄循环化工园区",
            value: "130172"
        }, {
            label: "辛集市",
            value: "130181"
        }, {
            label: "晋州市",
            value: "130183"
        }, {
            label: "新乐市",
            value: "130184"
        } ], [ {
            label: "路南区",
            value: "130202"
        }, {
            label: "路北区",
            value: "130203"
        }, {
            label: "古冶区",
            value: "130204"
        }, {
            label: "开平区",
            value: "130205"
        }, {
            label: "丰南区",
            value: "130207"
        }, {
            label: "丰润区",
            value: "130208"
        }, {
            label: "曹妃甸区",
            value: "130209"
        }, {
            label: "滦县",
            value: "130223"
        }, {
            label: "滦南县",
            value: "130224"
        }, {
            label: "乐亭县",
            value: "130225"
        }, {
            label: "迁西县",
            value: "130227"
        }, {
            label: "玉田县",
            value: "130229"
        }, {
            label: "唐山市芦台经济技术开发区",
            value: "130271"
        }, {
            label: "唐山市汉沽管理区",
            value: "130272"
        }, {
            label: "唐山高新技术产业开发区",
            value: "130273"
        }, {
            label: "河北唐山海港经济开发区",
            value: "130274"
        }, {
            label: "遵化市",
            value: "130281"
        }, {
            label: "迁安市",
            value: "130283"
        } ], [ {
            label: "海港区",
            value: "130302"
        }, {
            label: "山海关区",
            value: "130303"
        }, {
            label: "北戴河区",
            value: "130304"
        }, {
            label: "抚宁区",
            value: "130306"
        }, {
            label: "青龙满族自治县",
            value: "130321"
        }, {
            label: "昌黎县",
            value: "130322"
        }, {
            label: "卢龙县",
            value: "130324"
        }, {
            label: "秦皇岛市经济技术开发区",
            value: "130371"
        }, {
            label: "北戴河新区",
            value: "130372"
        } ], [ {
            label: "邯山区",
            value: "130402"
        }, {
            label: "丛台区",
            value: "130403"
        }, {
            label: "复兴区",
            value: "130404"
        }, {
            label: "峰峰矿区",
            value: "130406"
        }, {
            label: "肥乡区",
            value: "130407"
        }, {
            label: "永年区",
            value: "130408"
        }, {
            label: "临漳县",
            value: "130423"
        }, {
            label: "成安县",
            value: "130424"
        }, {
            label: "大名县",
            value: "130425"
        }, {
            label: "涉县",
            value: "130426"
        }, {
            label: "磁县",
            value: "130427"
        }, {
            label: "邱县",
            value: "130430"
        }, {
            label: "鸡泽县",
            value: "130431"
        }, {
            label: "广平县",
            value: "130432"
        }, {
            label: "馆陶县",
            value: "130433"
        }, {
            label: "魏县",
            value: "130434"
        }, {
            label: "曲周县",
            value: "130435"
        }, {
            label: "邯郸经济技术开发区",
            value: "130471"
        }, {
            label: "邯郸冀南新区",
            value: "130473"
        }, {
            label: "武安市",
            value: "130481"
        } ], [ {
            label: "桥东区",
            value: "130502"
        }, {
            label: "桥西区",
            value: "130503"
        }, {
            label: "邢台县",
            value: "130521"
        }, {
            label: "临城县",
            value: "130522"
        }, {
            label: "内丘县",
            value: "130523"
        }, {
            label: "柏乡县",
            value: "130524"
        }, {
            label: "隆尧县",
            value: "130525"
        }, {
            label: "任县",
            value: "130526"
        }, {
            label: "南和县",
            value: "130527"
        }, {
            label: "宁晋县",
            value: "130528"
        }, {
            label: "巨鹿县",
            value: "130529"
        }, {
            label: "新河县",
            value: "130530"
        }, {
            label: "广宗县",
            value: "130531"
        }, {
            label: "平乡县",
            value: "130532"
        }, {
            label: "威县",
            value: "130533"
        }, {
            label: "清河县",
            value: "130534"
        }, {
            label: "临西县",
            value: "130535"
        }, {
            label: "河北邢台经济开发区",
            value: "130571"
        }, {
            label: "南宫市",
            value: "130581"
        }, {
            label: "沙河市",
            value: "130582"
        } ], [ {
            label: "竞秀区",
            value: "130602"
        }, {
            label: "莲池区",
            value: "130606"
        }, {
            label: "满城区",
            value: "130607"
        }, {
            label: "清苑区",
            value: "130608"
        }, {
            label: "徐水区",
            value: "130609"
        }, {
            label: "涞水县",
            value: "130623"
        }, {
            label: "阜平县",
            value: "130624"
        }, {
            label: "定兴县",
            value: "130626"
        }, {
            label: "唐县",
            value: "130627"
        }, {
            label: "高阳县",
            value: "130628"
        }, {
            label: "容城县",
            value: "130629"
        }, {
            label: "涞源县",
            value: "130630"
        }, {
            label: "望都县",
            value: "130631"
        }, {
            label: "安新县",
            value: "130632"
        }, {
            label: "易县",
            value: "130633"
        }, {
            label: "曲阳县",
            value: "130634"
        }, {
            label: "蠡县",
            value: "130635"
        }, {
            label: "顺平县",
            value: "130636"
        }, {
            label: "博野县",
            value: "130637"
        }, {
            label: "雄县",
            value: "130638"
        }, {
            label: "保定高新技术产业开发区",
            value: "130671"
        }, {
            label: "保定白沟新城",
            value: "130672"
        }, {
            label: "涿州市",
            value: "130681"
        }, {
            label: "定州市",
            value: "130682"
        }, {
            label: "安国市",
            value: "130683"
        }, {
            label: "高碑店市",
            value: "130684"
        } ], [ {
            label: "桥东区",
            value: "130702"
        }, {
            label: "桥西区",
            value: "130703"
        }, {
            label: "宣化区",
            value: "130705"
        }, {
            label: "下花园区",
            value: "130706"
        }, {
            label: "万全区",
            value: "130708"
        }, {
            label: "崇礼区",
            value: "130709"
        }, {
            label: "张北县",
            value: "130722"
        }, {
            label: "康保县",
            value: "130723"
        }, {
            label: "沽源县",
            value: "130724"
        }, {
            label: "尚义县",
            value: "130725"
        }, {
            label: "蔚县",
            value: "130726"
        }, {
            label: "阳原县",
            value: "130727"
        }, {
            label: "怀安县",
            value: "130728"
        }, {
            label: "怀来县",
            value: "130730"
        }, {
            label: "涿鹿县",
            value: "130731"
        }, {
            label: "赤城县",
            value: "130732"
        }, {
            label: "张家口市高新技术产业开发区",
            value: "130771"
        }, {
            label: "张家口市察北管理区",
            value: "130772"
        }, {
            label: "张家口市塞北管理区",
            value: "130773"
        } ], [ {
            label: "双桥区",
            value: "130802"
        }, {
            label: "双滦区",
            value: "130803"
        }, {
            label: "鹰手营子矿区",
            value: "130804"
        }, {
            label: "承德县",
            value: "130821"
        }, {
            label: "兴隆县",
            value: "130822"
        }, {
            label: "滦平县",
            value: "130824"
        }, {
            label: "隆化县",
            value: "130825"
        }, {
            label: "丰宁满族自治县",
            value: "130826"
        }, {
            label: "宽城满族自治县",
            value: "130827"
        }, {
            label: "围场满族蒙古族自治县",
            value: "130828"
        }, {
            label: "承德高新技术产业开发区",
            value: "130871"
        }, {
            label: "平泉市",
            value: "130881"
        } ], [ {
            label: "新华区",
            value: "130902"
        }, {
            label: "运河区",
            value: "130903"
        }, {
            label: "沧县",
            value: "130921"
        }, {
            label: "青县",
            value: "130922"
        }, {
            label: "东光县",
            value: "130923"
        }, {
            label: "海兴县",
            value: "130924"
        }, {
            label: "盐山县",
            value: "130925"
        }, {
            label: "肃宁县",
            value: "130926"
        }, {
            label: "南皮县",
            value: "130927"
        }, {
            label: "吴桥县",
            value: "130928"
        }, {
            label: "献县",
            value: "130929"
        }, {
            label: "孟村回族自治县",
            value: "130930"
        }, {
            label: "河北沧州经济开发区",
            value: "130971"
        }, {
            label: "沧州高新技术产业开发区",
            value: "130972"
        }, {
            label: "沧州渤海新区",
            value: "130973"
        }, {
            label: "泊头市",
            value: "130981"
        }, {
            label: "任丘市",
            value: "130982"
        }, {
            label: "黄骅市",
            value: "130983"
        }, {
            label: "河间市",
            value: "130984"
        } ], [ {
            label: "安次区",
            value: "131002"
        }, {
            label: "广阳区",
            value: "131003"
        }, {
            label: "固安县",
            value: "131022"
        }, {
            label: "永清县",
            value: "131023"
        }, {
            label: "香河县",
            value: "131024"
        }, {
            label: "大城县",
            value: "131025"
        }, {
            label: "文安县",
            value: "131026"
        }, {
            label: "大厂回族自治县",
            value: "131028"
        }, {
            label: "廊坊经济技术开发区",
            value: "131071"
        }, {
            label: "霸州市",
            value: "131081"
        }, {
            label: "三河市",
            value: "131082"
        } ], [ {
            label: "桃城区",
            value: "131102"
        }, {
            label: "冀州区",
            value: "131103"
        }, {
            label: "枣强县",
            value: "131121"
        }, {
            label: "武邑县",
            value: "131122"
        }, {
            label: "武强县",
            value: "131123"
        }, {
            label: "饶阳县",
            value: "131124"
        }, {
            label: "安平县",
            value: "131125"
        }, {
            label: "故城县",
            value: "131126"
        }, {
            label: "景县",
            value: "131127"
        }, {
            label: "阜城县",
            value: "131128"
        }, {
            label: "河北衡水经济开发区",
            value: "131171"
        }, {
            label: "衡水滨湖新区",
            value: "131172"
        }, {
            label: "深州市",
            value: "131182"
        } ] ], [ [ {
            label: "小店区",
            value: "140105"
        }, {
            label: "迎泽区",
            value: "140106"
        }, {
            label: "杏花岭区",
            value: "140107"
        }, {
            label: "尖草坪区",
            value: "140108"
        }, {
            label: "万柏林区",
            value: "140109"
        }, {
            label: "晋源区",
            value: "140110"
        }, {
            label: "清徐县",
            value: "140121"
        }, {
            label: "阳曲县",
            value: "140122"
        }, {
            label: "娄烦县",
            value: "140123"
        }, {
            label: "山西转型综合改革示范区",
            value: "140171"
        }, {
            label: "古交市",
            value: "140181"
        } ], [ {
            label: "城区",
            value: "140202"
        }, {
            label: "矿区",
            value: "140203"
        }, {
            label: "南郊区",
            value: "140211"
        }, {
            label: "新荣区",
            value: "140212"
        }, {
            label: "阳高县",
            value: "140221"
        }, {
            label: "天镇县",
            value: "140222"
        }, {
            label: "广灵县",
            value: "140223"
        }, {
            label: "灵丘县",
            value: "140224"
        }, {
            label: "浑源县",
            value: "140225"
        }, {
            label: "左云县",
            value: "140226"
        }, {
            label: "大同县",
            value: "140227"
        }, {
            label: "山西大同经济开发区",
            value: "140271"
        } ], [ {
            label: "城区",
            value: "140302"
        }, {
            label: "矿区",
            value: "140303"
        }, {
            label: "郊区",
            value: "140311"
        }, {
            label: "平定县",
            value: "140321"
        }, {
            label: "盂县",
            value: "140322"
        }, {
            label: "山西阳泉经济开发区",
            value: "140371"
        } ], [ {
            label: "城区",
            value: "140402"
        }, {
            label: "郊区",
            value: "140411"
        }, {
            label: "长治县",
            value: "140421"
        }, {
            label: "襄垣县",
            value: "140423"
        }, {
            label: "屯留县",
            value: "140424"
        }, {
            label: "平顺县",
            value: "140425"
        }, {
            label: "黎城县",
            value: "140426"
        }, {
            label: "壶关县",
            value: "140427"
        }, {
            label: "长子县",
            value: "140428"
        }, {
            label: "武乡县",
            value: "140429"
        }, {
            label: "沁县",
            value: "140430"
        }, {
            label: "沁源县",
            value: "140431"
        }, {
            label: "山西长治高新技术产业园区",
            value: "140471"
        }, {
            label: "潞城市",
            value: "140481"
        } ], [ {
            label: "城区",
            value: "140502"
        }, {
            label: "沁水县",
            value: "140521"
        }, {
            label: "阳城县",
            value: "140522"
        }, {
            label: "陵川县",
            value: "140524"
        }, {
            label: "泽州县",
            value: "140525"
        }, {
            label: "高平市",
            value: "140581"
        } ], [ {
            label: "朔城区",
            value: "140602"
        }, {
            label: "平鲁区",
            value: "140603"
        }, {
            label: "山阴县",
            value: "140621"
        }, {
            label: "应县",
            value: "140622"
        }, {
            label: "右玉县",
            value: "140623"
        }, {
            label: "怀仁县",
            value: "140624"
        }, {
            label: "山西朔州经济开发区",
            value: "140671"
        } ], [ {
            label: "榆次区",
            value: "140702"
        }, {
            label: "榆社县",
            value: "140721"
        }, {
            label: "左权县",
            value: "140722"
        }, {
            label: "和顺县",
            value: "140723"
        }, {
            label: "昔阳县",
            value: "140724"
        }, {
            label: "寿阳县",
            value: "140725"
        }, {
            label: "太谷县",
            value: "140726"
        }, {
            label: "祁县",
            value: "140727"
        }, {
            label: "平遥县",
            value: "140728"
        }, {
            label: "灵石县",
            value: "140729"
        }, {
            label: "介休市",
            value: "140781"
        } ], [ {
            label: "盐湖区",
            value: "140802"
        }, {
            label: "临猗县",
            value: "140821"
        }, {
            label: "万荣县",
            value: "140822"
        }, {
            label: "闻喜县",
            value: "140823"
        }, {
            label: "稷山县",
            value: "140824"
        }, {
            label: "新绛县",
            value: "140825"
        }, {
            label: "绛县",
            value: "140826"
        }, {
            label: "垣曲县",
            value: "140827"
        }, {
            label: "夏县",
            value: "140828"
        }, {
            label: "平陆县",
            value: "140829"
        }, {
            label: "芮城县",
            value: "140830"
        }, {
            label: "永济市",
            value: "140881"
        }, {
            label: "河津市",
            value: "140882"
        } ], [ {
            label: "忻府区",
            value: "140902"
        }, {
            label: "定襄县",
            value: "140921"
        }, {
            label: "五台县",
            value: "140922"
        }, {
            label: "代县",
            value: "140923"
        }, {
            label: "繁峙县",
            value: "140924"
        }, {
            label: "宁武县",
            value: "140925"
        }, {
            label: "静乐县",
            value: "140926"
        }, {
            label: "神池县",
            value: "140927"
        }, {
            label: "五寨县",
            value: "140928"
        }, {
            label: "岢岚县",
            value: "140929"
        }, {
            label: "河曲县",
            value: "140930"
        }, {
            label: "保德县",
            value: "140931"
        }, {
            label: "偏关县",
            value: "140932"
        }, {
            label: "五台山风景名胜区",
            value: "140971"
        }, {
            label: "原平市",
            value: "140981"
        } ], [ {
            label: "尧都区",
            value: "141002"
        }, {
            label: "曲沃县",
            value: "141021"
        }, {
            label: "翼城县",
            value: "141022"
        }, {
            label: "襄汾县",
            value: "141023"
        }, {
            label: "洪洞县",
            value: "141024"
        }, {
            label: "古县",
            value: "141025"
        }, {
            label: "安泽县",
            value: "141026"
        }, {
            label: "浮山县",
            value: "141027"
        }, {
            label: "吉县",
            value: "141028"
        }, {
            label: "乡宁县",
            value: "141029"
        }, {
            label: "大宁县",
            value: "141030"
        }, {
            label: "隰县",
            value: "141031"
        }, {
            label: "永和县",
            value: "141032"
        }, {
            label: "蒲县",
            value: "141033"
        }, {
            label: "汾西县",
            value: "141034"
        }, {
            label: "侯马市",
            value: "141081"
        }, {
            label: "霍州市",
            value: "141082"
        } ], [ {
            label: "离石区",
            value: "141102"
        }, {
            label: "文水县",
            value: "141121"
        }, {
            label: "交城县",
            value: "141122"
        }, {
            label: "兴县",
            value: "141123"
        }, {
            label: "临县",
            value: "141124"
        }, {
            label: "柳林县",
            value: "141125"
        }, {
            label: "石楼县",
            value: "141126"
        }, {
            label: "岚县",
            value: "141127"
        }, {
            label: "方山县",
            value: "141128"
        }, {
            label: "中阳县",
            value: "141129"
        }, {
            label: "交口县",
            value: "141130"
        }, {
            label: "孝义市",
            value: "141181"
        }, {
            label: "汾阳市",
            value: "141182"
        } ] ], [ [ {
            label: "新城区",
            value: "150102"
        }, {
            label: "回民区",
            value: "150103"
        }, {
            label: "玉泉区",
            value: "150104"
        }, {
            label: "赛罕区",
            value: "150105"
        }, {
            label: "土默特左旗",
            value: "150121"
        }, {
            label: "托克托县",
            value: "150122"
        }, {
            label: "和林格尔县",
            value: "150123"
        }, {
            label: "清水河县",
            value: "150124"
        }, {
            label: "武川县",
            value: "150125"
        }, {
            label: "呼和浩特金海工业园区",
            value: "150171"
        }, {
            label: "呼和浩特经济技术开发区",
            value: "150172"
        } ], [ {
            label: "东河区",
            value: "150202"
        }, {
            label: "昆都仑区",
            value: "150203"
        }, {
            label: "青山区",
            value: "150204"
        }, {
            label: "石拐区",
            value: "150205"
        }, {
            label: "白云鄂博矿区",
            value: "150206"
        }, {
            label: "九原区",
            value: "150207"
        }, {
            label: "土默特右旗",
            value: "150221"
        }, {
            label: "固阳县",
            value: "150222"
        }, {
            label: "达尔罕茂明安联合旗",
            value: "150223"
        }, {
            label: "包头稀土高新技术产业开发区",
            value: "150271"
        } ], [ {
            label: "海勃湾区",
            value: "150302"
        }, {
            label: "海南区",
            value: "150303"
        }, {
            label: "乌达区",
            value: "150304"
        } ], [ {
            label: "红山区",
            value: "150402"
        }, {
            label: "元宝山区",
            value: "150403"
        }, {
            label: "松山区",
            value: "150404"
        }, {
            label: "阿鲁科尔沁旗",
            value: "150421"
        }, {
            label: "巴林左旗",
            value: "150422"
        }, {
            label: "巴林右旗",
            value: "150423"
        }, {
            label: "林西县",
            value: "150424"
        }, {
            label: "克什克腾旗",
            value: "150425"
        }, {
            label: "翁牛特旗",
            value: "150426"
        }, {
            label: "喀喇沁旗",
            value: "150428"
        }, {
            label: "宁城县",
            value: "150429"
        }, {
            label: "敖汉旗",
            value: "150430"
        } ], [ {
            label: "科尔沁区",
            value: "150502"
        }, {
            label: "科尔沁左翼中旗",
            value: "150521"
        }, {
            label: "科尔沁左翼后旗",
            value: "150522"
        }, {
            label: "开鲁县",
            value: "150523"
        }, {
            label: "库伦旗",
            value: "150524"
        }, {
            label: "奈曼旗",
            value: "150525"
        }, {
            label: "扎鲁特旗",
            value: "150526"
        }, {
            label: "通辽经济技术开发区",
            value: "150571"
        }, {
            label: "霍林郭勒市",
            value: "150581"
        } ], [ {
            label: "东胜区",
            value: "150602"
        }, {
            label: "康巴什区",
            value: "150603"
        }, {
            label: "达拉特旗",
            value: "150621"
        }, {
            label: "准格尔旗",
            value: "150622"
        }, {
            label: "鄂托克前旗",
            value: "150623"
        }, {
            label: "鄂托克旗",
            value: "150624"
        }, {
            label: "杭锦旗",
            value: "150625"
        }, {
            label: "乌审旗",
            value: "150626"
        }, {
            label: "伊金霍洛旗",
            value: "150627"
        } ], [ {
            label: "海拉尔区",
            value: "150702"
        }, {
            label: "扎赉诺尔区",
            value: "150703"
        }, {
            label: "阿荣旗",
            value: "150721"
        }, {
            label: "莫力达瓦达斡尔族自治旗",
            value: "150722"
        }, {
            label: "鄂伦春自治旗",
            value: "150723"
        }, {
            label: "鄂温克族自治旗",
            value: "150724"
        }, {
            label: "陈巴尔虎旗",
            value: "150725"
        }, {
            label: "新巴尔虎左旗",
            value: "150726"
        }, {
            label: "新巴尔虎右旗",
            value: "150727"
        }, {
            label: "满洲里市",
            value: "150781"
        }, {
            label: "牙克石市",
            value: "150782"
        }, {
            label: "扎兰屯市",
            value: "150783"
        }, {
            label: "额尔古纳市",
            value: "150784"
        }, {
            label: "根河市",
            value: "150785"
        } ], [ {
            label: "临河区",
            value: "150802"
        }, {
            label: "五原县",
            value: "150821"
        }, {
            label: "磴口县",
            value: "150822"
        }, {
            label: "乌拉特前旗",
            value: "150823"
        }, {
            label: "乌拉特中旗",
            value: "150824"
        }, {
            label: "乌拉特后旗",
            value: "150825"
        }, {
            label: "杭锦后旗",
            value: "150826"
        } ], [ {
            label: "集宁区",
            value: "150902"
        }, {
            label: "卓资县",
            value: "150921"
        }, {
            label: "化德县",
            value: "150922"
        }, {
            label: "商都县",
            value: "150923"
        }, {
            label: "兴和县",
            value: "150924"
        }, {
            label: "凉城县",
            value: "150925"
        }, {
            label: "察哈尔右翼前旗",
            value: "150926"
        }, {
            label: "察哈尔右翼中旗",
            value: "150927"
        }, {
            label: "察哈尔右翼后旗",
            value: "150928"
        }, {
            label: "四子王旗",
            value: "150929"
        }, {
            label: "丰镇市",
            value: "150981"
        } ], [ {
            label: "乌兰浩特市",
            value: "152201"
        }, {
            label: "阿尔山市",
            value: "152202"
        }, {
            label: "科尔沁右翼前旗",
            value: "152221"
        }, {
            label: "科尔沁右翼中旗",
            value: "152222"
        }, {
            label: "扎赉特旗",
            value: "152223"
        }, {
            label: "突泉县",
            value: "152224"
        } ], [ {
            label: "二连浩特市",
            value: "152501"
        }, {
            label: "锡林浩特市",
            value: "152502"
        }, {
            label: "阿巴嘎旗",
            value: "152522"
        }, {
            label: "苏尼特左旗",
            value: "152523"
        }, {
            label: "苏尼特右旗",
            value: "152524"
        }, {
            label: "东乌珠穆沁旗",
            value: "152525"
        }, {
            label: "西乌珠穆沁旗",
            value: "152526"
        }, {
            label: "太仆寺旗",
            value: "152527"
        }, {
            label: "镶黄旗",
            value: "152528"
        }, {
            label: "正镶白旗",
            value: "152529"
        }, {
            label: "正蓝旗",
            value: "152530"
        }, {
            label: "多伦县",
            value: "152531"
        }, {
            label: "乌拉盖管委会",
            value: "152571"
        } ], [ {
            label: "阿拉善左旗",
            value: "152921"
        }, {
            label: "阿拉善右旗",
            value: "152922"
        }, {
            label: "额济纳旗",
            value: "152923"
        }, {
            label: "内蒙古阿拉善经济开发区",
            value: "152971"
        } ] ], [ [ {
            label: "和平区",
            value: "210102"
        }, {
            label: "沈河区",
            value: "210103"
        }, {
            label: "大东区",
            value: "210104"
        }, {
            label: "皇姑区",
            value: "210105"
        }, {
            label: "铁西区",
            value: "210106"
        }, {
            label: "苏家屯区",
            value: "210111"
        }, {
            label: "浑南区",
            value: "210112"
        }, {
            label: "沈北新区",
            value: "210113"
        }, {
            label: "于洪区",
            value: "210114"
        }, {
            label: "辽中区",
            value: "210115"
        }, {
            label: "康平县",
            value: "210123"
        }, {
            label: "法库县",
            value: "210124"
        }, {
            label: "新民市",
            value: "210181"
        } ], [ {
            label: "中山区",
            value: "210202"
        }, {
            label: "西岗区",
            value: "210203"
        }, {
            label: "沙河口区",
            value: "210204"
        }, {
            label: "甘井子区",
            value: "210211"
        }, {
            label: "旅顺口区",
            value: "210212"
        }, {
            label: "金州区",
            value: "210213"
        }, {
            label: "普兰店区",
            value: "210214"
        }, {
            label: "长海县",
            value: "210224"
        }, {
            label: "瓦房店市",
            value: "210281"
        }, {
            label: "庄河市",
            value: "210283"
        } ], [ {
            label: "铁东区",
            value: "210302"
        }, {
            label: "铁西区",
            value: "210303"
        }, {
            label: "立山区",
            value: "210304"
        }, {
            label: "千山区",
            value: "210311"
        }, {
            label: "台安县",
            value: "210321"
        }, {
            label: "岫岩满族自治县",
            value: "210323"
        }, {
            label: "海城市",
            value: "210381"
        } ], [ {
            label: "新抚区",
            value: "210402"
        }, {
            label: "东洲区",
            value: "210403"
        }, {
            label: "望花区",
            value: "210404"
        }, {
            label: "顺城区",
            value: "210411"
        }, {
            label: "抚顺县",
            value: "210421"
        }, {
            label: "新宾满族自治县",
            value: "210422"
        }, {
            label: "清原满族自治县",
            value: "210423"
        } ], [ {
            label: "平山区",
            value: "210502"
        }, {
            label: "溪湖区",
            value: "210503"
        }, {
            label: "明山区",
            value: "210504"
        }, {
            label: "南芬区",
            value: "210505"
        }, {
            label: "本溪满族自治县",
            value: "210521"
        }, {
            label: "桓仁满族自治县",
            value: "210522"
        } ], [ {
            label: "元宝区",
            value: "210602"
        }, {
            label: "振兴区",
            value: "210603"
        }, {
            label: "振安区",
            value: "210604"
        }, {
            label: "宽甸满族自治县",
            value: "210624"
        }, {
            label: "东港市",
            value: "210681"
        }, {
            label: "凤城市",
            value: "210682"
        } ], [ {
            label: "古塔区",
            value: "210702"
        }, {
            label: "凌河区",
            value: "210703"
        }, {
            label: "太和区",
            value: "210711"
        }, {
            label: "黑山县",
            value: "210726"
        }, {
            label: "义县",
            value: "210727"
        }, {
            label: "凌海市",
            value: "210781"
        }, {
            label: "北镇市",
            value: "210782"
        } ], [ {
            label: "站前区",
            value: "210802"
        }, {
            label: "西市区",
            value: "210803"
        }, {
            label: "鲅鱼圈区",
            value: "210804"
        }, {
            label: "老边区",
            value: "210811"
        }, {
            label: "盖州市",
            value: "210881"
        }, {
            label: "大石桥市",
            value: "210882"
        } ], [ {
            label: "海州区",
            value: "210902"
        }, {
            label: "新邱区",
            value: "210903"
        }, {
            label: "太平区",
            value: "210904"
        }, {
            label: "清河门区",
            value: "210905"
        }, {
            label: "细河区",
            value: "210911"
        }, {
            label: "阜新蒙古族自治县",
            value: "210921"
        }, {
            label: "彰武县",
            value: "210922"
        } ], [ {
            label: "白塔区",
            value: "211002"
        }, {
            label: "文圣区",
            value: "211003"
        }, {
            label: "宏伟区",
            value: "211004"
        }, {
            label: "弓长岭区",
            value: "211005"
        }, {
            label: "太子河区",
            value: "211011"
        }, {
            label: "辽阳县",
            value: "211021"
        }, {
            label: "灯塔市",
            value: "211081"
        } ], [ {
            label: "双台子区",
            value: "211102"
        }, {
            label: "兴隆台区",
            value: "211103"
        }, {
            label: "大洼区",
            value: "211104"
        }, {
            label: "盘山县",
            value: "211122"
        } ], [ {
            label: "银州区",
            value: "211202"
        }, {
            label: "清河区",
            value: "211204"
        }, {
            label: "铁岭县",
            value: "211221"
        }, {
            label: "西丰县",
            value: "211223"
        }, {
            label: "昌图县",
            value: "211224"
        }, {
            label: "调兵山市",
            value: "211281"
        }, {
            label: "开原市",
            value: "211282"
        } ], [ {
            label: "双塔区",
            value: "211302"
        }, {
            label: "龙城区",
            value: "211303"
        }, {
            label: "朝阳县",
            value: "211321"
        }, {
            label: "建平县",
            value: "211322"
        }, {
            label: "喀喇沁左翼蒙古族自治县",
            value: "211324"
        }, {
            label: "北票市",
            value: "211381"
        }, {
            label: "凌源市",
            value: "211382"
        } ], [ {
            label: "连山区",
            value: "211402"
        }, {
            label: "龙港区",
            value: "211403"
        }, {
            label: "南票区",
            value: "211404"
        }, {
            label: "绥中县",
            value: "211421"
        }, {
            label: "建昌县",
            value: "211422"
        }, {
            label: "兴城市",
            value: "211481"
        } ] ], [ [ {
            label: "南关区",
            value: "220102"
        }, {
            label: "宽城区",
            value: "220103"
        }, {
            label: "朝阳区",
            value: "220104"
        }, {
            label: "二道区",
            value: "220105"
        }, {
            label: "绿园区",
            value: "220106"
        }, {
            label: "双阳区",
            value: "220112"
        }, {
            label: "九台区",
            value: "220113"
        }, {
            label: "农安县",
            value: "220122"
        }, {
            label: "长春经济技术开发区",
            value: "220171"
        }, {
            label: "长春净月高新技术产业开发区",
            value: "220172"
        }, {
            label: "长春高新技术产业开发区",
            value: "220173"
        }, {
            label: "长春汽车经济技术开发区",
            value: "220174"
        }, {
            label: "榆树市",
            value: "220182"
        }, {
            label: "德惠市",
            value: "220183"
        } ], [ {
            label: "昌邑区",
            value: "220202"
        }, {
            label: "龙潭区",
            value: "220203"
        }, {
            label: "船营区",
            value: "220204"
        }, {
            label: "丰满区",
            value: "220211"
        }, {
            label: "永吉县",
            value: "220221"
        }, {
            label: "吉林经济开发区",
            value: "220271"
        }, {
            label: "吉林高新技术产业开发区",
            value: "220272"
        }, {
            label: "吉林中国新加坡食品区",
            value: "220273"
        }, {
            label: "蛟河市",
            value: "220281"
        }, {
            label: "桦甸市",
            value: "220282"
        }, {
            label: "舒兰市",
            value: "220283"
        }, {
            label: "磐石市",
            value: "220284"
        } ], [ {
            label: "铁西区",
            value: "220302"
        }, {
            label: "铁东区",
            value: "220303"
        }, {
            label: "梨树县",
            value: "220322"
        }, {
            label: "伊通满族自治县",
            value: "220323"
        }, {
            label: "公主岭市",
            value: "220381"
        }, {
            label: "双辽市",
            value: "220382"
        } ], [ {
            label: "龙山区",
            value: "220402"
        }, {
            label: "西安区",
            value: "220403"
        }, {
            label: "东丰县",
            value: "220421"
        }, {
            label: "东辽县",
            value: "220422"
        } ], [ {
            label: "东昌区",
            value: "220502"
        }, {
            label: "二道江区",
            value: "220503"
        }, {
            label: "通化县",
            value: "220521"
        }, {
            label: "辉南县",
            value: "220523"
        }, {
            label: "柳河县",
            value: "220524"
        }, {
            label: "梅河口市",
            value: "220581"
        }, {
            label: "集安市",
            value: "220582"
        } ], [ {
            label: "浑江区",
            value: "220602"
        }, {
            label: "江源区",
            value: "220605"
        }, {
            label: "抚松县",
            value: "220621"
        }, {
            label: "靖宇县",
            value: "220622"
        }, {
            label: "长白朝鲜族自治县",
            value: "220623"
        }, {
            label: "临江市",
            value: "220681"
        } ], [ {
            label: "宁江区",
            value: "220702"
        }, {
            label: "前郭尔罗斯蒙古族自治县",
            value: "220721"
        }, {
            label: "长岭县",
            value: "220722"
        }, {
            label: "乾安县",
            value: "220723"
        }, {
            label: "吉林松原经济开发区",
            value: "220771"
        }, {
            label: "扶余市",
            value: "220781"
        } ], [ {
            label: "洮北区",
            value: "220802"
        }, {
            label: "镇赉县",
            value: "220821"
        }, {
            label: "通榆县",
            value: "220822"
        }, {
            label: "吉林白城经济开发区",
            value: "220871"
        }, {
            label: "洮南市",
            value: "220881"
        }, {
            label: "大安市",
            value: "220882"
        } ], [ {
            label: "延吉市",
            value: "222401"
        }, {
            label: "图们市",
            value: "222402"
        }, {
            label: "敦化市",
            value: "222403"
        }, {
            label: "珲春市",
            value: "222404"
        }, {
            label: "龙井市",
            value: "222405"
        }, {
            label: "和龙市",
            value: "222406"
        }, {
            label: "汪清县",
            value: "222424"
        }, {
            label: "安图县",
            value: "222426"
        } ] ], [ [ {
            label: "道里区",
            value: "230102"
        }, {
            label: "南岗区",
            value: "230103"
        }, {
            label: "道外区",
            value: "230104"
        }, {
            label: "平房区",
            value: "230108"
        }, {
            label: "松北区",
            value: "230109"
        }, {
            label: "香坊区",
            value: "230110"
        }, {
            label: "呼兰区",
            value: "230111"
        }, {
            label: "阿城区",
            value: "230112"
        }, {
            label: "双城区",
            value: "230113"
        }, {
            label: "依兰县",
            value: "230123"
        }, {
            label: "方正县",
            value: "230124"
        }, {
            label: "宾县",
            value: "230125"
        }, {
            label: "巴彦县",
            value: "230126"
        }, {
            label: "木兰县",
            value: "230127"
        }, {
            label: "通河县",
            value: "230128"
        }, {
            label: "延寿县",
            value: "230129"
        }, {
            label: "尚志市",
            value: "230183"
        }, {
            label: "五常市",
            value: "230184"
        } ], [ {
            label: "龙沙区",
            value: "230202"
        }, {
            label: "建华区",
            value: "230203"
        }, {
            label: "铁锋区",
            value: "230204"
        }, {
            label: "昂昂溪区",
            value: "230205"
        }, {
            label: "富拉尔基区",
            value: "230206"
        }, {
            label: "碾子山区",
            value: "230207"
        }, {
            label: "梅里斯达斡尔族区",
            value: "230208"
        }, {
            label: "龙江县",
            value: "230221"
        }, {
            label: "依安县",
            value: "230223"
        }, {
            label: "泰来县",
            value: "230224"
        }, {
            label: "甘南县",
            value: "230225"
        }, {
            label: "富裕县",
            value: "230227"
        }, {
            label: "克山县",
            value: "230229"
        }, {
            label: "克东县",
            value: "230230"
        }, {
            label: "拜泉县",
            value: "230231"
        }, {
            label: "讷河市",
            value: "230281"
        } ], [ {
            label: "鸡冠区",
            value: "230302"
        }, {
            label: "恒山区",
            value: "230303"
        }, {
            label: "滴道区",
            value: "230304"
        }, {
            label: "梨树区",
            value: "230305"
        }, {
            label: "城子河区",
            value: "230306"
        }, {
            label: "麻山区",
            value: "230307"
        }, {
            label: "鸡东县",
            value: "230321"
        }, {
            label: "虎林市",
            value: "230381"
        }, {
            label: "密山市",
            value: "230382"
        } ], [ {
            label: "向阳区",
            value: "230402"
        }, {
            label: "工农区",
            value: "230403"
        }, {
            label: "南山区",
            value: "230404"
        }, {
            label: "兴安区",
            value: "230405"
        }, {
            label: "东山区",
            value: "230406"
        }, {
            label: "兴山区",
            value: "230407"
        }, {
            label: "萝北县",
            value: "230421"
        }, {
            label: "绥滨县",
            value: "230422"
        } ], [ {
            label: "尖山区",
            value: "230502"
        }, {
            label: "岭东区",
            value: "230503"
        }, {
            label: "四方台区",
            value: "230505"
        }, {
            label: "宝山区",
            value: "230506"
        }, {
            label: "集贤县",
            value: "230521"
        }, {
            label: "友谊县",
            value: "230522"
        }, {
            label: "宝清县",
            value: "230523"
        }, {
            label: "饶河县",
            value: "230524"
        } ], [ {
            label: "萨尔图区",
            value: "230602"
        }, {
            label: "龙凤区",
            value: "230603"
        }, {
            label: "让胡路区",
            value: "230604"
        }, {
            label: "红岗区",
            value: "230605"
        }, {
            label: "大同区",
            value: "230606"
        }, {
            label: "肇州县",
            value: "230621"
        }, {
            label: "肇源县",
            value: "230622"
        }, {
            label: "林甸县",
            value: "230623"
        }, {
            label: "杜尔伯特蒙古族自治县",
            value: "230624"
        }, {
            label: "大庆高新技术产业开发区",
            value: "230671"
        } ], [ {
            label: "伊春区",
            value: "230702"
        }, {
            label: "南岔区",
            value: "230703"
        }, {
            label: "友好区",
            value: "230704"
        }, {
            label: "西林区",
            value: "230705"
        }, {
            label: "翠峦区",
            value: "230706"
        }, {
            label: "新青区",
            value: "230707"
        }, {
            label: "美溪区",
            value: "230708"
        }, {
            label: "金山屯区",
            value: "230709"
        }, {
            label: "五营区",
            value: "230710"
        }, {
            label: "乌马河区",
            value: "230711"
        }, {
            label: "汤旺河区",
            value: "230712"
        }, {
            label: "带岭区",
            value: "230713"
        }, {
            label: "乌伊岭区",
            value: "230714"
        }, {
            label: "红星区",
            value: "230715"
        }, {
            label: "上甘岭区",
            value: "230716"
        }, {
            label: "嘉荫县",
            value: "230722"
        }, {
            label: "铁力市",
            value: "230781"
        } ], [ {
            label: "向阳区",
            value: "230803"
        }, {
            label: "前进区",
            value: "230804"
        }, {
            label: "东风区",
            value: "230805"
        }, {
            label: "郊区",
            value: "230811"
        }, {
            label: "桦南县",
            value: "230822"
        }, {
            label: "桦川县",
            value: "230826"
        }, {
            label: "汤原县",
            value: "230828"
        }, {
            label: "同江市",
            value: "230881"
        }, {
            label: "富锦市",
            value: "230882"
        }, {
            label: "抚远市",
            value: "230883"
        } ], [ {
            label: "新兴区",
            value: "230902"
        }, {
            label: "桃山区",
            value: "230903"
        }, {
            label: "茄子河区",
            value: "230904"
        }, {
            label: "勃利县",
            value: "230921"
        } ], [ {
            label: "东安区",
            value: "231002"
        }, {
            label: "阳明区",
            value: "231003"
        }, {
            label: "爱民区",
            value: "231004"
        }, {
            label: "西安区",
            value: "231005"
        }, {
            label: "林口县",
            value: "231025"
        }, {
            label: "牡丹江经济技术开发区",
            value: "231071"
        }, {
            label: "绥芬河市",
            value: "231081"
        }, {
            label: "海林市",
            value: "231083"
        }, {
            label: "宁安市",
            value: "231084"
        }, {
            label: "穆棱市",
            value: "231085"
        }, {
            label: "东宁市",
            value: "231086"
        } ], [ {
            label: "爱辉区",
            value: "231102"
        }, {
            label: "嫩江县",
            value: "231121"
        }, {
            label: "逊克县",
            value: "231123"
        }, {
            label: "孙吴县",
            value: "231124"
        }, {
            label: "北安市",
            value: "231181"
        }, {
            label: "五大连池市",
            value: "231182"
        } ], [ {
            label: "北林区",
            value: "231202"
        }, {
            label: "望奎县",
            value: "231221"
        }, {
            label: "兰西县",
            value: "231222"
        }, {
            label: "青冈县",
            value: "231223"
        }, {
            label: "庆安县",
            value: "231224"
        }, {
            label: "明水县",
            value: "231225"
        }, {
            label: "绥棱县",
            value: "231226"
        }, {
            label: "安达市",
            value: "231281"
        }, {
            label: "肇东市",
            value: "231282"
        }, {
            label: "海伦市",
            value: "231283"
        } ], [ {
            label: "加格达奇区",
            value: "232701"
        }, {
            label: "松岭区",
            value: "232702"
        }, {
            label: "新林区",
            value: "232703"
        }, {
            label: "呼中区",
            value: "232704"
        }, {
            label: "呼玛县",
            value: "232721"
        }, {
            label: "塔河县",
            value: "232722"
        }, {
            label: "漠河县",
            value: "232723"
        } ] ], [ [ {
            label: "黄浦区",
            value: "310101"
        }, {
            label: "徐汇区",
            value: "310104"
        }, {
            label: "长宁区",
            value: "310105"
        }, {
            label: "静安区",
            value: "310106"
        }, {
            label: "普陀区",
            value: "310107"
        }, {
            label: "虹口区",
            value: "310109"
        }, {
            label: "杨浦区",
            value: "310110"
        }, {
            label: "闵行区",
            value: "310112"
        }, {
            label: "宝山区",
            value: "310113"
        }, {
            label: "嘉定区",
            value: "310114"
        }, {
            label: "浦东新区",
            value: "310115"
        }, {
            label: "金山区",
            value: "310116"
        }, {
            label: "松江区",
            value: "310117"
        }, {
            label: "青浦区",
            value: "310118"
        }, {
            label: "奉贤区",
            value: "310120"
        }, {
            label: "崇明区",
            value: "310151"
        } ] ], [ [ {
            label: "玄武区",
            value: "320102"
        }, {
            label: "秦淮区",
            value: "320104"
        }, {
            label: "建邺区",
            value: "320105"
        }, {
            label: "鼓楼区",
            value: "320106"
        }, {
            label: "浦口区",
            value: "320111"
        }, {
            label: "栖霞区",
            value: "320113"
        }, {
            label: "雨花台区",
            value: "320114"
        }, {
            label: "江宁区",
            value: "320115"
        }, {
            label: "六合区",
            value: "320116"
        }, {
            label: "溧水区",
            value: "320117"
        }, {
            label: "高淳区",
            value: "320118"
        } ], [ {
            label: "锡山区",
            value: "320205"
        }, {
            label: "惠山区",
            value: "320206"
        }, {
            label: "滨湖区",
            value: "320211"
        }, {
            label: "梁溪区",
            value: "320213"
        }, {
            label: "新吴区",
            value: "320214"
        }, {
            label: "江阴市",
            value: "320281"
        }, {
            label: "宜兴市",
            value: "320282"
        } ], [ {
            label: "鼓楼区",
            value: "320302"
        }, {
            label: "云龙区",
            value: "320303"
        }, {
            label: "贾汪区",
            value: "320305"
        }, {
            label: "泉山区",
            value: "320311"
        }, {
            label: "铜山区",
            value: "320312"
        }, {
            label: "丰县",
            value: "320321"
        }, {
            label: "沛县",
            value: "320322"
        }, {
            label: "睢宁县",
            value: "320324"
        }, {
            label: "徐州经济技术开发区",
            value: "320371"
        }, {
            label: "新沂市",
            value: "320381"
        }, {
            label: "邳州市",
            value: "320382"
        } ], [ {
            label: "天宁区",
            value: "320402"
        }, {
            label: "钟楼区",
            value: "320404"
        }, {
            label: "新北区",
            value: "320411"
        }, {
            label: "武进区",
            value: "320412"
        }, {
            label: "金坛区",
            value: "320413"
        }, {
            label: "溧阳市",
            value: "320481"
        } ], [ {
            label: "虎丘区",
            value: "320505"
        }, {
            label: "吴中区",
            value: "320506"
        }, {
            label: "相城区",
            value: "320507"
        }, {
            label: "姑苏区",
            value: "320508"
        }, {
            label: "吴江区",
            value: "320509"
        }, {
            label: "苏州工业园区",
            value: "320571"
        }, {
            label: "常熟市",
            value: "320581"
        }, {
            label: "张家港市",
            value: "320582"
        }, {
            label: "昆山市",
            value: "320583"
        }, {
            label: "太仓市",
            value: "320585"
        } ], [ {
            label: "崇川区",
            value: "320602"
        }, {
            label: "港闸区",
            value: "320611"
        }, {
            label: "通州区",
            value: "320612"
        }, {
            label: "海安县",
            value: "320621"
        }, {
            label: "如东县",
            value: "320623"
        }, {
            label: "南通经济技术开发区",
            value: "320671"
        }, {
            label: "启东市",
            value: "320681"
        }, {
            label: "如皋市",
            value: "320682"
        }, {
            label: "海门市",
            value: "320684"
        } ], [ {
            label: "连云区",
            value: "320703"
        }, {
            label: "海州区",
            value: "320706"
        }, {
            label: "赣榆区",
            value: "320707"
        }, {
            label: "东海县",
            value: "320722"
        }, {
            label: "灌云县",
            value: "320723"
        }, {
            label: "灌南县",
            value: "320724"
        }, {
            label: "连云港经济技术开发区",
            value: "320771"
        }, {
            label: "连云港高新技术产业开发区",
            value: "320772"
        } ], [ {
            label: "淮安区",
            value: "320803"
        }, {
            label: "淮阴区",
            value: "320804"
        }, {
            label: "清江浦区",
            value: "320812"
        }, {
            label: "洪泽区",
            value: "320813"
        }, {
            label: "涟水县",
            value: "320826"
        }, {
            label: "盱眙县",
            value: "320830"
        }, {
            label: "金湖县",
            value: "320831"
        }, {
            label: "淮安经济技术开发区",
            value: "320871"
        } ], [ {
            label: "亭湖区",
            value: "320902"
        }, {
            label: "盐都区",
            value: "320903"
        }, {
            label: "大丰区",
            value: "320904"
        }, {
            label: "响水县",
            value: "320921"
        }, {
            label: "滨海县",
            value: "320922"
        }, {
            label: "阜宁县",
            value: "320923"
        }, {
            label: "射阳县",
            value: "320924"
        }, {
            label: "建湖县",
            value: "320925"
        }, {
            label: "盐城经济技术开发区",
            value: "320971"
        }, {
            label: "东台市",
            value: "320981"
        } ], [ {
            label: "广陵区",
            value: "321002"
        }, {
            label: "邗江区",
            value: "321003"
        }, {
            label: "江都区",
            value: "321012"
        }, {
            label: "宝应县",
            value: "321023"
        }, {
            label: "扬州经济技术开发区",
            value: "321071"
        }, {
            label: "仪征市",
            value: "321081"
        }, {
            label: "高邮市",
            value: "321084"
        } ], [ {
            label: "京口区",
            value: "321102"
        }, {
            label: "润州区",
            value: "321111"
        }, {
            label: "丹徒区",
            value: "321112"
        }, {
            label: "镇江新区",
            value: "321171"
        }, {
            label: "丹阳市",
            value: "321181"
        }, {
            label: "扬中市",
            value: "321182"
        }, {
            label: "句容市",
            value: "321183"
        } ], [ {
            label: "海陵区",
            value: "321202"
        }, {
            label: "高港区",
            value: "321203"
        }, {
            label: "姜堰区",
            value: "321204"
        }, {
            label: "泰州医药高新技术产业开发区",
            value: "321271"
        }, {
            label: "兴化市",
            value: "321281"
        }, {
            label: "靖江市",
            value: "321282"
        }, {
            label: "泰兴市",
            value: "321283"
        } ], [ {
            label: "宿城区",
            value: "321302"
        }, {
            label: "宿豫区",
            value: "321311"
        }, {
            label: "沭阳县",
            value: "321322"
        }, {
            label: "泗阳县",
            value: "321323"
        }, {
            label: "泗洪县",
            value: "321324"
        }, {
            label: "宿迁经济技术开发区",
            value: "321371"
        } ] ], [ [ {
            label: "上城区",
            value: "330102"
        }, {
            label: "下城区",
            value: "330103"
        }, {
            label: "江干区",
            value: "330104"
        }, {
            label: "拱墅区",
            value: "330105"
        }, {
            label: "西湖区",
            value: "330106"
        }, {
            label: "滨江区",
            value: "330108"
        }, {
            label: "萧山区",
            value: "330109"
        }, {
            label: "余杭区",
            value: "330110"
        }, {
            label: "富阳区",
            value: "330111"
        }, {
            label: "临安区",
            value: "330112"
        }, {
            label: "桐庐县",
            value: "330122"
        }, {
            label: "淳安县",
            value: "330127"
        }, {
            label: "建德市",
            value: "330182"
        } ], [ {
            label: "海曙区",
            value: "330203"
        }, {
            label: "江北区",
            value: "330205"
        }, {
            label: "北仑区",
            value: "330206"
        }, {
            label: "镇海区",
            value: "330211"
        }, {
            label: "鄞州区",
            value: "330212"
        }, {
            label: "奉化区",
            value: "330213"
        }, {
            label: "象山县",
            value: "330225"
        }, {
            label: "宁海县",
            value: "330226"
        }, {
            label: "余姚市",
            value: "330281"
        }, {
            label: "慈溪市",
            value: "330282"
        } ], [ {
            label: "鹿城区",
            value: "330302"
        }, {
            label: "龙湾区",
            value: "330303"
        }, {
            label: "瓯海区",
            value: "330304"
        }, {
            label: "洞头区",
            value: "330305"
        }, {
            label: "永嘉县",
            value: "330324"
        }, {
            label: "平阳县",
            value: "330326"
        }, {
            label: "苍南县",
            value: "330327"
        }, {
            label: "文成县",
            value: "330328"
        }, {
            label: "泰顺县",
            value: "330329"
        }, {
            label: "温州经济技术开发区",
            value: "330371"
        }, {
            label: "瑞安市",
            value: "330381"
        }, {
            label: "乐清市",
            value: "330382"
        } ], [ {
            label: "南湖区",
            value: "330402"
        }, {
            label: "秀洲区",
            value: "330411"
        }, {
            label: "嘉善县",
            value: "330421"
        }, {
            label: "海盐县",
            value: "330424"
        }, {
            label: "海宁市",
            value: "330481"
        }, {
            label: "平湖市",
            value: "330482"
        }, {
            label: "桐乡市",
            value: "330483"
        } ], [ {
            label: "吴兴区",
            value: "330502"
        }, {
            label: "南浔区",
            value: "330503"
        }, {
            label: "德清县",
            value: "330521"
        }, {
            label: "长兴县",
            value: "330522"
        }, {
            label: "安吉县",
            value: "330523"
        } ], [ {
            label: "越城区",
            value: "330602"
        }, {
            label: "柯桥区",
            value: "330603"
        }, {
            label: "上虞区",
            value: "330604"
        }, {
            label: "新昌县",
            value: "330624"
        }, {
            label: "诸暨市",
            value: "330681"
        }, {
            label: "嵊州市",
            value: "330683"
        } ], [ {
            label: "婺城区",
            value: "330702"
        }, {
            label: "金东区",
            value: "330703"
        }, {
            label: "武义县",
            value: "330723"
        }, {
            label: "浦江县",
            value: "330726"
        }, {
            label: "磐安县",
            value: "330727"
        }, {
            label: "兰溪市",
            value: "330781"
        }, {
            label: "义乌市",
            value: "330782"
        }, {
            label: "东阳市",
            value: "330783"
        }, {
            label: "永康市",
            value: "330784"
        } ], [ {
            label: "柯城区",
            value: "330802"
        }, {
            label: "衢江区",
            value: "330803"
        }, {
            label: "常山县",
            value: "330822"
        }, {
            label: "开化县",
            value: "330824"
        }, {
            label: "龙游县",
            value: "330825"
        }, {
            label: "江山市",
            value: "330881"
        } ], [ {
            label: "定海区",
            value: "330902"
        }, {
            label: "普陀区",
            value: "330903"
        }, {
            label: "岱山县",
            value: "330921"
        }, {
            label: "嵊泗县",
            value: "330922"
        } ], [ {
            label: "椒江区",
            value: "331002"
        }, {
            label: "黄岩区",
            value: "331003"
        }, {
            label: "路桥区",
            value: "331004"
        }, {
            label: "三门县",
            value: "331022"
        }, {
            label: "天台县",
            value: "331023"
        }, {
            label: "仙居县",
            value: "331024"
        }, {
            label: "温岭市",
            value: "331081"
        }, {
            label: "临海市",
            value: "331082"
        }, {
            label: "玉环市",
            value: "331083"
        } ], [ {
            label: "莲都区",
            value: "331102"
        }, {
            label: "青田县",
            value: "331121"
        }, {
            label: "缙云县",
            value: "331122"
        }, {
            label: "遂昌县",
            value: "331123"
        }, {
            label: "松阳县",
            value: "331124"
        }, {
            label: "云和县",
            value: "331125"
        }, {
            label: "庆元县",
            value: "331126"
        }, {
            label: "景宁畲族自治县",
            value: "331127"
        }, {
            label: "龙泉市",
            value: "331181"
        } ] ], [ [ {
            label: "瑶海区",
            value: "340102"
        }, {
            label: "庐阳区",
            value: "340103"
        }, {
            label: "蜀山区",
            value: "340104"
        }, {
            label: "包河区",
            value: "340111"
        }, {
            label: "长丰县",
            value: "340121"
        }, {
            label: "肥东县",
            value: "340122"
        }, {
            label: "肥西县",
            value: "340123"
        }, {
            label: "庐江县",
            value: "340124"
        }, {
            label: "合肥高新技术产业开发区",
            value: "340171"
        }, {
            label: "合肥经济技术开发区",
            value: "340172"
        }, {
            label: "合肥新站高新技术产业开发区",
            value: "340173"
        }, {
            label: "巢湖市",
            value: "340181"
        } ], [ {
            label: "镜湖区",
            value: "340202"
        }, {
            label: "弋江区",
            value: "340203"
        }, {
            label: "鸠江区",
            value: "340207"
        }, {
            label: "三山区",
            value: "340208"
        }, {
            label: "芜湖县",
            value: "340221"
        }, {
            label: "繁昌县",
            value: "340222"
        }, {
            label: "南陵县",
            value: "340223"
        }, {
            label: "无为县",
            value: "340225"
        }, {
            label: "芜湖经济技术开发区",
            value: "340271"
        }, {
            label: "安徽芜湖长江大桥经济开发区",
            value: "340272"
        } ], [ {
            label: "龙子湖区",
            value: "340302"
        }, {
            label: "蚌山区",
            value: "340303"
        }, {
            label: "禹会区",
            value: "340304"
        }, {
            label: "淮上区",
            value: "340311"
        }, {
            label: "怀远县",
            value: "340321"
        }, {
            label: "五河县",
            value: "340322"
        }, {
            label: "固镇县",
            value: "340323"
        }, {
            label: "蚌埠市高新技术开发区",
            value: "340371"
        }, {
            label: "蚌埠市经济开发区",
            value: "340372"
        } ], [ {
            label: "大通区",
            value: "340402"
        }, {
            label: "田家庵区",
            value: "340403"
        }, {
            label: "谢家集区",
            value: "340404"
        }, {
            label: "八公山区",
            value: "340405"
        }, {
            label: "潘集区",
            value: "340406"
        }, {
            label: "凤台县",
            value: "340421"
        }, {
            label: "寿县",
            value: "340422"
        } ], [ {
            label: "花山区",
            value: "340503"
        }, {
            label: "雨山区",
            value: "340504"
        }, {
            label: "博望区",
            value: "340506"
        }, {
            label: "当涂县",
            value: "340521"
        }, {
            label: "含山县",
            value: "340522"
        }, {
            label: "和县",
            value: "340523"
        } ], [ {
            label: "杜集区",
            value: "340602"
        }, {
            label: "相山区",
            value: "340603"
        }, {
            label: "烈山区",
            value: "340604"
        }, {
            label: "濉溪县",
            value: "340621"
        } ], [ {
            label: "铜官区",
            value: "340705"
        }, {
            label: "义安区",
            value: "340706"
        }, {
            label: "郊区",
            value: "340711"
        }, {
            label: "枞阳县",
            value: "340722"
        } ], [ {
            label: "迎江区",
            value: "340802"
        }, {
            label: "大观区",
            value: "340803"
        }, {
            label: "宜秀区",
            value: "340811"
        }, {
            label: "怀宁县",
            value: "340822"
        }, {
            label: "潜山县",
            value: "340824"
        }, {
            label: "太湖县",
            value: "340825"
        }, {
            label: "宿松县",
            value: "340826"
        }, {
            label: "望江县",
            value: "340827"
        }, {
            label: "岳西县",
            value: "340828"
        }, {
            label: "安徽安庆经济开发区",
            value: "340871"
        }, {
            label: "桐城市",
            value: "340881"
        } ], [ {
            label: "屯溪区",
            value: "341002"
        }, {
            label: "黄山区",
            value: "341003"
        }, {
            label: "徽州区",
            value: "341004"
        }, {
            label: "歙县",
            value: "341021"
        }, {
            label: "休宁县",
            value: "341022"
        }, {
            label: "黟县",
            value: "341023"
        }, {
            label: "祁门县",
            value: "341024"
        } ], [ {
            label: "琅琊区",
            value: "341102"
        }, {
            label: "南谯区",
            value: "341103"
        }, {
            label: "来安县",
            value: "341122"
        }, {
            label: "全椒县",
            value: "341124"
        }, {
            label: "定远县",
            value: "341125"
        }, {
            label: "凤阳县",
            value: "341126"
        }, {
            label: "苏滁现代产业园",
            value: "341171"
        }, {
            label: "滁州经济技术开发区",
            value: "341172"
        }, {
            label: "天长市",
            value: "341181"
        }, {
            label: "明光市",
            value: "341182"
        } ], [ {
            label: "颍州区",
            value: "341202"
        }, {
            label: "颍东区",
            value: "341203"
        }, {
            label: "颍泉区",
            value: "341204"
        }, {
            label: "临泉县",
            value: "341221"
        }, {
            label: "太和县",
            value: "341222"
        }, {
            label: "阜南县",
            value: "341225"
        }, {
            label: "颍上县",
            value: "341226"
        }, {
            label: "阜阳合肥现代产业园区",
            value: "341271"
        }, {
            label: "阜阳经济技术开发区",
            value: "341272"
        }, {
            label: "界首市",
            value: "341282"
        } ], [ {
            label: "埇桥区",
            value: "341302"
        }, {
            label: "砀山县",
            value: "341321"
        }, {
            label: "萧县",
            value: "341322"
        }, {
            label: "灵璧县",
            value: "341323"
        }, {
            label: "泗县",
            value: "341324"
        }, {
            label: "宿州马鞍山现代产业园区",
            value: "341371"
        }, {
            label: "宿州经济技术开发区",
            value: "341372"
        } ], [ {
            label: "金安区",
            value: "341502"
        }, {
            label: "裕安区",
            value: "341503"
        }, {
            label: "叶集区",
            value: "341504"
        }, {
            label: "霍邱县",
            value: "341522"
        }, {
            label: "舒城县",
            value: "341523"
        }, {
            label: "金寨县",
            value: "341524"
        }, {
            label: "霍山县",
            value: "341525"
        } ], [ {
            label: "谯城区",
            value: "341602"
        }, {
            label: "涡阳县",
            value: "341621"
        }, {
            label: "蒙城县",
            value: "341622"
        }, {
            label: "利辛县",
            value: "341623"
        } ], [ {
            label: "贵池区",
            value: "341702"
        }, {
            label: "东至县",
            value: "341721"
        }, {
            label: "石台县",
            value: "341722"
        }, {
            label: "青阳县",
            value: "341723"
        } ], [ {
            label: "宣州区",
            value: "341802"
        }, {
            label: "郎溪县",
            value: "341821"
        }, {
            label: "广德县",
            value: "341822"
        }, {
            label: "泾县",
            value: "341823"
        }, {
            label: "绩溪县",
            value: "341824"
        }, {
            label: "旌德县",
            value: "341825"
        }, {
            label: "宣城市经济开发区",
            value: "341871"
        }, {
            label: "宁国市",
            value: "341881"
        } ] ], [ [ {
            label: "鼓楼区",
            value: "350102"
        }, {
            label: "台江区",
            value: "350103"
        }, {
            label: "仓山区",
            value: "350104"
        }, {
            label: "马尾区",
            value: "350105"
        }, {
            label: "晋安区",
            value: "350111"
        }, {
            label: "闽侯县",
            value: "350121"
        }, {
            label: "连江县",
            value: "350122"
        }, {
            label: "罗源县",
            value: "350123"
        }, {
            label: "闽清县",
            value: "350124"
        }, {
            label: "永泰县",
            value: "350125"
        }, {
            label: "平潭县",
            value: "350128"
        }, {
            label: "福清市",
            value: "350181"
        }, {
            label: "长乐市",
            value: "350182"
        } ], [ {
            label: "思明区",
            value: "350203"
        }, {
            label: "海沧区",
            value: "350205"
        }, {
            label: "湖里区",
            value: "350206"
        }, {
            label: "集美区",
            value: "350211"
        }, {
            label: "同安区",
            value: "350212"
        }, {
            label: "翔安区",
            value: "350213"
        } ], [ {
            label: "城厢区",
            value: "350302"
        }, {
            label: "涵江区",
            value: "350303"
        }, {
            label: "荔城区",
            value: "350304"
        }, {
            label: "秀屿区",
            value: "350305"
        }, {
            label: "仙游县",
            value: "350322"
        } ], [ {
            label: "梅列区",
            value: "350402"
        }, {
            label: "三元区",
            value: "350403"
        }, {
            label: "明溪县",
            value: "350421"
        }, {
            label: "清流县",
            value: "350423"
        }, {
            label: "宁化县",
            value: "350424"
        }, {
            label: "大田县",
            value: "350425"
        }, {
            label: "尤溪县",
            value: "350426"
        }, {
            label: "沙县",
            value: "350427"
        }, {
            label: "将乐县",
            value: "350428"
        }, {
            label: "泰宁县",
            value: "350429"
        }, {
            label: "建宁县",
            value: "350430"
        }, {
            label: "永安市",
            value: "350481"
        } ], [ {
            label: "鲤城区",
            value: "350502"
        }, {
            label: "丰泽区",
            value: "350503"
        }, {
            label: "洛江区",
            value: "350504"
        }, {
            label: "泉港区",
            value: "350505"
        }, {
            label: "惠安县",
            value: "350521"
        }, {
            label: "安溪县",
            value: "350524"
        }, {
            label: "永春县",
            value: "350525"
        }, {
            label: "德化县",
            value: "350526"
        }, {
            label: "金门县",
            value: "350527"
        }, {
            label: "石狮市",
            value: "350581"
        }, {
            label: "晋江市",
            value: "350582"
        }, {
            label: "南安市",
            value: "350583"
        } ], [ {
            label: "芗城区",
            value: "350602"
        }, {
            label: "龙文区",
            value: "350603"
        }, {
            label: "云霄县",
            value: "350622"
        }, {
            label: "漳浦县",
            value: "350623"
        }, {
            label: "诏安县",
            value: "350624"
        }, {
            label: "长泰县",
            value: "350625"
        }, {
            label: "东山县",
            value: "350626"
        }, {
            label: "南靖县",
            value: "350627"
        }, {
            label: "平和县",
            value: "350628"
        }, {
            label: "华安县",
            value: "350629"
        }, {
            label: "龙海市",
            value: "350681"
        } ], [ {
            label: "延平区",
            value: "350702"
        }, {
            label: "建阳区",
            value: "350703"
        }, {
            label: "顺昌县",
            value: "350721"
        }, {
            label: "浦城县",
            value: "350722"
        }, {
            label: "光泽县",
            value: "350723"
        }, {
            label: "松溪县",
            value: "350724"
        }, {
            label: "政和县",
            value: "350725"
        }, {
            label: "邵武市",
            value: "350781"
        }, {
            label: "武夷山市",
            value: "350782"
        }, {
            label: "建瓯市",
            value: "350783"
        } ], [ {
            label: "新罗区",
            value: "350802"
        }, {
            label: "永定区",
            value: "350803"
        }, {
            label: "长汀县",
            value: "350821"
        }, {
            label: "上杭县",
            value: "350823"
        }, {
            label: "武平县",
            value: "350824"
        }, {
            label: "连城县",
            value: "350825"
        }, {
            label: "漳平市",
            value: "350881"
        } ], [ {
            label: "蕉城区",
            value: "350902"
        }, {
            label: "霞浦县",
            value: "350921"
        }, {
            label: "古田县",
            value: "350922"
        }, {
            label: "屏南县",
            value: "350923"
        }, {
            label: "寿宁县",
            value: "350924"
        }, {
            label: "周宁县",
            value: "350925"
        }, {
            label: "柘荣县",
            value: "350926"
        }, {
            label: "福安市",
            value: "350981"
        }, {
            label: "福鼎市",
            value: "350982"
        } ] ], [ [ {
            label: "东湖区",
            value: "360102"
        }, {
            label: "西湖区",
            value: "360103"
        }, {
            label: "青云谱区",
            value: "360104"
        }, {
            label: "湾里区",
            value: "360105"
        }, {
            label: "青山湖区",
            value: "360111"
        }, {
            label: "新建区",
            value: "360112"
        }, {
            label: "南昌县",
            value: "360121"
        }, {
            label: "安义县",
            value: "360123"
        }, {
            label: "进贤县",
            value: "360124"
        } ], [ {
            label: "昌江区",
            value: "360202"
        }, {
            label: "珠山区",
            value: "360203"
        }, {
            label: "浮梁县",
            value: "360222"
        }, {
            label: "乐平市",
            value: "360281"
        } ], [ {
            label: "安源区",
            value: "360302"
        }, {
            label: "湘东区",
            value: "360313"
        }, {
            label: "莲花县",
            value: "360321"
        }, {
            label: "上栗县",
            value: "360322"
        }, {
            label: "芦溪县",
            value: "360323"
        } ], [ {
            label: "濂溪区",
            value: "360402"
        }, {
            label: "浔阳区",
            value: "360403"
        }, {
            label: "柴桑区",
            value: "360404"
        }, {
            label: "武宁县",
            value: "360423"
        }, {
            label: "修水县",
            value: "360424"
        }, {
            label: "永修县",
            value: "360425"
        }, {
            label: "德安县",
            value: "360426"
        }, {
            label: "都昌县",
            value: "360428"
        }, {
            label: "湖口县",
            value: "360429"
        }, {
            label: "彭泽县",
            value: "360430"
        }, {
            label: "瑞昌市",
            value: "360481"
        }, {
            label: "共青城市",
            value: "360482"
        }, {
            label: "庐山市",
            value: "360483"
        } ], [ {
            label: "渝水区",
            value: "360502"
        }, {
            label: "分宜县",
            value: "360521"
        } ], [ {
            label: "月湖区",
            value: "360602"
        }, {
            label: "余江县",
            value: "360622"
        }, {
            label: "贵溪市",
            value: "360681"
        } ], [ {
            label: "章贡区",
            value: "360702"
        }, {
            label: "南康区",
            value: "360703"
        }, {
            label: "赣县区",
            value: "360704"
        }, {
            label: "信丰县",
            value: "360722"
        }, {
            label: "大余县",
            value: "360723"
        }, {
            label: "上犹县",
            value: "360724"
        }, {
            label: "崇义县",
            value: "360725"
        }, {
            label: "安远县",
            value: "360726"
        }, {
            label: "龙南县",
            value: "360727"
        }, {
            label: "定南县",
            value: "360728"
        }, {
            label: "全南县",
            value: "360729"
        }, {
            label: "宁都县",
            value: "360730"
        }, {
            label: "于都县",
            value: "360731"
        }, {
            label: "兴国县",
            value: "360732"
        }, {
            label: "会昌县",
            value: "360733"
        }, {
            label: "寻乌县",
            value: "360734"
        }, {
            label: "石城县",
            value: "360735"
        }, {
            label: "瑞金市",
            value: "360781"
        } ], [ {
            label: "吉州区",
            value: "360802"
        }, {
            label: "青原区",
            value: "360803"
        }, {
            label: "吉安县",
            value: "360821"
        }, {
            label: "吉水县",
            value: "360822"
        }, {
            label: "峡江县",
            value: "360823"
        }, {
            label: "新干县",
            value: "360824"
        }, {
            label: "永丰县",
            value: "360825"
        }, {
            label: "泰和县",
            value: "360826"
        }, {
            label: "遂川县",
            value: "360827"
        }, {
            label: "万安县",
            value: "360828"
        }, {
            label: "安福县",
            value: "360829"
        }, {
            label: "永新县",
            value: "360830"
        }, {
            label: "井冈山市",
            value: "360881"
        } ], [ {
            label: "袁州区",
            value: "360902"
        }, {
            label: "奉新县",
            value: "360921"
        }, {
            label: "万载县",
            value: "360922"
        }, {
            label: "上高县",
            value: "360923"
        }, {
            label: "宜丰县",
            value: "360924"
        }, {
            label: "靖安县",
            value: "360925"
        }, {
            label: "铜鼓县",
            value: "360926"
        }, {
            label: "丰城市",
            value: "360981"
        }, {
            label: "樟树市",
            value: "360982"
        }, {
            label: "高安市",
            value: "360983"
        } ], [ {
            label: "临川区",
            value: "361002"
        }, {
            label: "东乡区",
            value: "361003"
        }, {
            label: "南城县",
            value: "361021"
        }, {
            label: "黎川县",
            value: "361022"
        }, {
            label: "南丰县",
            value: "361023"
        }, {
            label: "崇仁县",
            value: "361024"
        }, {
            label: "乐安县",
            value: "361025"
        }, {
            label: "宜黄县",
            value: "361026"
        }, {
            label: "金溪县",
            value: "361027"
        }, {
            label: "资溪县",
            value: "361028"
        }, {
            label: "广昌县",
            value: "361030"
        } ], [ {
            label: "信州区",
            value: "361102"
        }, {
            label: "广丰区",
            value: "361103"
        }, {
            label: "上饶县",
            value: "361121"
        }, {
            label: "玉山县",
            value: "361123"
        }, {
            label: "铅山县",
            value: "361124"
        }, {
            label: "横峰县",
            value: "361125"
        }, {
            label: "弋阳县",
            value: "361126"
        }, {
            label: "余干县",
            value: "361127"
        }, {
            label: "鄱阳县",
            value: "361128"
        }, {
            label: "万年县",
            value: "361129"
        }, {
            label: "婺源县",
            value: "361130"
        }, {
            label: "德兴市",
            value: "361181"
        } ] ], [ [ {
            label: "历下区",
            value: "370102"
        }, {
            label: "市中区",
            value: "370103"
        }, {
            label: "槐荫区",
            value: "370104"
        }, {
            label: "天桥区",
            value: "370105"
        }, {
            label: "历城区",
            value: "370112"
        }, {
            label: "长清区",
            value: "370113"
        }, {
            label: "章丘区",
            value: "370114"
        }, {
            label: "平阴县",
            value: "370124"
        }, {
            label: "济阳县",
            value: "370125"
        }, {
            label: "商河县",
            value: "370126"
        }, {
            label: "济南高新技术产业开发区",
            value: "370171"
        } ], [ {
            label: "市南区",
            value: "370202"
        }, {
            label: "市北区",
            value: "370203"
        }, {
            label: "黄岛区",
            value: "370211"
        }, {
            label: "崂山区",
            value: "370212"
        }, {
            label: "李沧区",
            value: "370213"
        }, {
            label: "城阳区",
            value: "370214"
        }, {
            label: "即墨区",
            value: "370215"
        }, {
            label: "青岛高新技术产业开发区",
            value: "370271"
        }, {
            label: "胶州市",
            value: "370281"
        }, {
            label: "平度市",
            value: "370283"
        }, {
            label: "莱西市",
            value: "370285"
        } ], [ {
            label: "淄川区",
            value: "370302"
        }, {
            label: "张店区",
            value: "370303"
        }, {
            label: "博山区",
            value: "370304"
        }, {
            label: "临淄区",
            value: "370305"
        }, {
            label: "周村区",
            value: "370306"
        }, {
            label: "桓台县",
            value: "370321"
        }, {
            label: "高青县",
            value: "370322"
        }, {
            label: "沂源县",
            value: "370323"
        } ], [ {
            label: "市中区",
            value: "370402"
        }, {
            label: "薛城区",
            value: "370403"
        }, {
            label: "峄城区",
            value: "370404"
        }, {
            label: "台儿庄区",
            value: "370405"
        }, {
            label: "山亭区",
            value: "370406"
        }, {
            label: "滕州市",
            value: "370481"
        } ], [ {
            label: "东营区",
            value: "370502"
        }, {
            label: "河口区",
            value: "370503"
        }, {
            label: "垦利区",
            value: "370505"
        }, {
            label: "利津县",
            value: "370522"
        }, {
            label: "广饶县",
            value: "370523"
        }, {
            label: "东营经济技术开发区",
            value: "370571"
        }, {
            label: "东营港经济开发区",
            value: "370572"
        } ], [ {
            label: "芝罘区",
            value: "370602"
        }, {
            label: "福山区",
            value: "370611"
        }, {
            label: "牟平区",
            value: "370612"
        }, {
            label: "莱山区",
            value: "370613"
        }, {
            label: "长岛县",
            value: "370634"
        }, {
            label: "烟台高新技术产业开发区",
            value: "370671"
        }, {
            label: "烟台经济技术开发区",
            value: "370672"
        }, {
            label: "龙口市",
            value: "370681"
        }, {
            label: "莱阳市",
            value: "370682"
        }, {
            label: "莱州市",
            value: "370683"
        }, {
            label: "蓬莱市",
            value: "370684"
        }, {
            label: "招远市",
            value: "370685"
        }, {
            label: "栖霞市",
            value: "370686"
        }, {
            label: "海阳市",
            value: "370687"
        } ], [ {
            label: "潍城区",
            value: "370702"
        }, {
            label: "寒亭区",
            value: "370703"
        }, {
            label: "坊子区",
            value: "370704"
        }, {
            label: "奎文区",
            value: "370705"
        }, {
            label: "临朐县",
            value: "370724"
        }, {
            label: "昌乐县",
            value: "370725"
        }, {
            label: "潍坊滨海经济技术开发区",
            value: "370772"
        }, {
            label: "青州市",
            value: "370781"
        }, {
            label: "诸城市",
            value: "370782"
        }, {
            label: "寿光市",
            value: "370783"
        }, {
            label: "安丘市",
            value: "370784"
        }, {
            label: "高密市",
            value: "370785"
        }, {
            label: "昌邑市",
            value: "370786"
        } ], [ {
            label: "任城区",
            value: "370811"
        }, {
            label: "兖州区",
            value: "370812"
        }, {
            label: "微山县",
            value: "370826"
        }, {
            label: "鱼台县",
            value: "370827"
        }, {
            label: "金乡县",
            value: "370828"
        }, {
            label: "嘉祥县",
            value: "370829"
        }, {
            label: "汶上县",
            value: "370830"
        }, {
            label: "泗水县",
            value: "370831"
        }, {
            label: "梁山县",
            value: "370832"
        }, {
            label: "济宁高新技术产业开发区",
            value: "370871"
        }, {
            label: "曲阜市",
            value: "370881"
        }, {
            label: "邹城市",
            value: "370883"
        } ], [ {
            label: "泰山区",
            value: "370902"
        }, {
            label: "岱岳区",
            value: "370911"
        }, {
            label: "宁阳县",
            value: "370921"
        }, {
            label: "东平县",
            value: "370923"
        }, {
            label: "新泰市",
            value: "370982"
        }, {
            label: "肥城市",
            value: "370983"
        } ], [ {
            label: "环翠区",
            value: "371002"
        }, {
            label: "文登区",
            value: "371003"
        }, {
            label: "威海火炬高技术产业开发区",
            value: "371071"
        }, {
            label: "威海经济技术开发区",
            value: "371072"
        }, {
            label: "威海临港经济技术开发区",
            value: "371073"
        }, {
            label: "荣成市",
            value: "371082"
        }, {
            label: "乳山市",
            value: "371083"
        } ], [ {
            label: "东港区",
            value: "371102"
        }, {
            label: "岚山区",
            value: "371103"
        }, {
            label: "五莲县",
            value: "371121"
        }, {
            label: "莒县",
            value: "371122"
        }, {
            label: "日照经济技术开发区",
            value: "371171"
        }, {
            label: "日照国际海洋城",
            value: "371172"
        } ], [ {
            label: "莱城区",
            value: "371202"
        }, {
            label: "钢城区",
            value: "371203"
        } ], [ {
            label: "兰山区",
            value: "371302"
        }, {
            label: "罗庄区",
            value: "371311"
        }, {
            label: "河东区",
            value: "371312"
        }, {
            label: "沂南县",
            value: "371321"
        }, {
            label: "郯城县",
            value: "371322"
        }, {
            label: "沂水县",
            value: "371323"
        }, {
            label: "兰陵县",
            value: "371324"
        }, {
            label: "费县",
            value: "371325"
        }, {
            label: "平邑县",
            value: "371326"
        }, {
            label: "莒南县",
            value: "371327"
        }, {
            label: "蒙阴县",
            value: "371328"
        }, {
            label: "临沭县",
            value: "371329"
        }, {
            label: "临沂高新技术产业开发区",
            value: "371371"
        }, {
            label: "临沂经济技术开发区",
            value: "371372"
        }, {
            label: "临沂临港经济开发区",
            value: "371373"
        } ], [ {
            label: "德城区",
            value: "371402"
        }, {
            label: "陵城区",
            value: "371403"
        }, {
            label: "宁津县",
            value: "371422"
        }, {
            label: "庆云县",
            value: "371423"
        }, {
            label: "临邑县",
            value: "371424"
        }, {
            label: "齐河县",
            value: "371425"
        }, {
            label: "平原县",
            value: "371426"
        }, {
            label: "夏津县",
            value: "371427"
        }, {
            label: "武城县",
            value: "371428"
        }, {
            label: "德州经济技术开发区",
            value: "371471"
        }, {
            label: "德州运河经济开发区",
            value: "371472"
        }, {
            label: "乐陵市",
            value: "371481"
        }, {
            label: "禹城市",
            value: "371482"
        } ], [ {
            label: "东昌府区",
            value: "371502"
        }, {
            label: "阳谷县",
            value: "371521"
        }, {
            label: "莘县",
            value: "371522"
        }, {
            label: "茌平县",
            value: "371523"
        }, {
            label: "东阿县",
            value: "371524"
        }, {
            label: "冠县",
            value: "371525"
        }, {
            label: "高唐县",
            value: "371526"
        }, {
            label: "临清市",
            value: "371581"
        } ], [ {
            label: "滨城区",
            value: "371602"
        }, {
            label: "沾化区",
            value: "371603"
        }, {
            label: "惠民县",
            value: "371621"
        }, {
            label: "阳信县",
            value: "371622"
        }, {
            label: "无棣县",
            value: "371623"
        }, {
            label: "博兴县",
            value: "371625"
        }, {
            label: "邹平县",
            value: "371626"
        } ], [ {
            label: "牡丹区",
            value: "371702"
        }, {
            label: "定陶区",
            value: "371703"
        }, {
            label: "曹县",
            value: "371721"
        }, {
            label: "单县",
            value: "371722"
        }, {
            label: "成武县",
            value: "371723"
        }, {
            label: "巨野县",
            value: "371724"
        }, {
            label: "郓城县",
            value: "371725"
        }, {
            label: "鄄城县",
            value: "371726"
        }, {
            label: "东明县",
            value: "371728"
        }, {
            label: "菏泽经济技术开发区",
            value: "371771"
        }, {
            label: "菏泽高新技术开发区",
            value: "371772"
        } ] ], [ [ {
            label: "中原区",
            value: "410102"
        }, {
            label: "二七区",
            value: "410103"
        }, {
            label: "管城回族区",
            value: "410104"
        }, {
            label: "金水区",
            value: "410105"
        }, {
            label: "上街区",
            value: "410106"
        }, {
            label: "惠济区",
            value: "410108"
        }, {
            label: "中牟县",
            value: "410122"
        }, {
            label: "郑州经济技术开发区",
            value: "410171"
        }, {
            label: "郑州高新技术产业开发区",
            value: "410172"
        }, {
            label: "郑州航空港经济综合实验区",
            value: "410173"
        }, {
            label: "巩义市",
            value: "410181"
        }, {
            label: "荥阳市",
            value: "410182"
        }, {
            label: "新密市",
            value: "410183"
        }, {
            label: "新郑市",
            value: "410184"
        }, {
            label: "登封市",
            value: "410185"
        } ], [ {
            label: "龙亭区",
            value: "410202"
        }, {
            label: "顺河回族区",
            value: "410203"
        }, {
            label: "鼓楼区",
            value: "410204"
        }, {
            label: "禹王台区",
            value: "410205"
        }, {
            label: "祥符区",
            value: "410212"
        }, {
            label: "杞县",
            value: "410221"
        }, {
            label: "通许县",
            value: "410222"
        }, {
            label: "尉氏县",
            value: "410223"
        }, {
            label: "兰考县",
            value: "410225"
        } ], [ {
            label: "老城区",
            value: "410302"
        }, {
            label: "西工区",
            value: "410303"
        }, {
            label: "瀍河回族区",
            value: "410304"
        }, {
            label: "涧西区",
            value: "410305"
        }, {
            label: "吉利区",
            value: "410306"
        }, {
            label: "洛龙区",
            value: "410311"
        }, {
            label: "孟津县",
            value: "410322"
        }, {
            label: "新安县",
            value: "410323"
        }, {
            label: "栾川县",
            value: "410324"
        }, {
            label: "嵩县",
            value: "410325"
        }, {
            label: "汝阳县",
            value: "410326"
        }, {
            label: "宜阳县",
            value: "410327"
        }, {
            label: "洛宁县",
            value: "410328"
        }, {
            label: "伊川县",
            value: "410329"
        }, {
            label: "洛阳高新技术产业开发区",
            value: "410371"
        }, {
            label: "偃师市",
            value: "410381"
        } ], [ {
            label: "新华区",
            value: "410402"
        }, {
            label: "卫东区",
            value: "410403"
        }, {
            label: "石龙区",
            value: "410404"
        }, {
            label: "湛河区",
            value: "410411"
        }, {
            label: "宝丰县",
            value: "410421"
        }, {
            label: "叶县",
            value: "410422"
        }, {
            label: "鲁山县",
            value: "410423"
        }, {
            label: "郏县",
            value: "410425"
        }, {
            label: "平顶山高新技术产业开发区",
            value: "410471"
        }, {
            label: "平顶山市新城区",
            value: "410472"
        }, {
            label: "舞钢市",
            value: "410481"
        }, {
            label: "汝州市",
            value: "410482"
        } ], [ {
            label: "文峰区",
            value: "410502"
        }, {
            label: "北关区",
            value: "410503"
        }, {
            label: "殷都区",
            value: "410505"
        }, {
            label: "龙安区",
            value: "410506"
        }, {
            label: "安阳县",
            value: "410522"
        }, {
            label: "汤阴县",
            value: "410523"
        }, {
            label: "滑县",
            value: "410526"
        }, {
            label: "内黄县",
            value: "410527"
        }, {
            label: "安阳高新技术产业开发区",
            value: "410571"
        }, {
            label: "林州市",
            value: "410581"
        } ], [ {
            label: "鹤山区",
            value: "410602"
        }, {
            label: "山城区",
            value: "410603"
        }, {
            label: "淇滨区",
            value: "410611"
        }, {
            label: "浚县",
            value: "410621"
        }, {
            label: "淇县",
            value: "410622"
        }, {
            label: "鹤壁经济技术开发区",
            value: "410671"
        } ], [ {
            label: "红旗区",
            value: "410702"
        }, {
            label: "卫滨区",
            value: "410703"
        }, {
            label: "凤泉区",
            value: "410704"
        }, {
            label: "牧野区",
            value: "410711"
        }, {
            label: "新乡县",
            value: "410721"
        }, {
            label: "获嘉县",
            value: "410724"
        }, {
            label: "原阳县",
            value: "410725"
        }, {
            label: "延津县",
            value: "410726"
        }, {
            label: "封丘县",
            value: "410727"
        }, {
            label: "长垣县",
            value: "410728"
        }, {
            label: "新乡高新技术产业开发区",
            value: "410771"
        }, {
            label: "新乡经济技术开发区",
            value: "410772"
        }, {
            label: "新乡市平原城乡一体化示范区",
            value: "410773"
        }, {
            label: "卫辉市",
            value: "410781"
        }, {
            label: "辉县市",
            value: "410782"
        } ], [ {
            label: "解放区",
            value: "410802"
        }, {
            label: "中站区",
            value: "410803"
        }, {
            label: "马村区",
            value: "410804"
        }, {
            label: "山阳区",
            value: "410811"
        }, {
            label: "修武县",
            value: "410821"
        }, {
            label: "博爱县",
            value: "410822"
        }, {
            label: "武陟县",
            value: "410823"
        }, {
            label: "温县",
            value: "410825"
        }, {
            label: "焦作城乡一体化示范区",
            value: "410871"
        }, {
            label: "沁阳市",
            value: "410882"
        }, {
            label: "孟州市",
            value: "410883"
        } ], [ {
            label: "华龙区",
            value: "410902"
        }, {
            label: "清丰县",
            value: "410922"
        }, {
            label: "南乐县",
            value: "410923"
        }, {
            label: "范县",
            value: "410926"
        }, {
            label: "台前县",
            value: "410927"
        }, {
            label: "濮阳县",
            value: "410928"
        }, {
            label: "河南濮阳工业园区",
            value: "410971"
        }, {
            label: "濮阳经济技术开发区",
            value: "410972"
        } ], [ {
            label: "魏都区",
            value: "411002"
        }, {
            label: "建安区",
            value: "411003"
        }, {
            label: "鄢陵县",
            value: "411024"
        }, {
            label: "襄城县",
            value: "411025"
        }, {
            label: "许昌经济技术开发区",
            value: "411071"
        }, {
            label: "禹州市",
            value: "411081"
        }, {
            label: "长葛市",
            value: "411082"
        } ], [ {
            label: "源汇区",
            value: "411102"
        }, {
            label: "郾城区",
            value: "411103"
        }, {
            label: "召陵区",
            value: "411104"
        }, {
            label: "舞阳县",
            value: "411121"
        }, {
            label: "临颍县",
            value: "411122"
        }, {
            label: "漯河经济技术开发区",
            value: "411171"
        } ], [ {
            label: "湖滨区",
            value: "411202"
        }, {
            label: "陕州区",
            value: "411203"
        }, {
            label: "渑池县",
            value: "411221"
        }, {
            label: "卢氏县",
            value: "411224"
        }, {
            label: "河南三门峡经济开发区",
            value: "411271"
        }, {
            label: "义马市",
            value: "411281"
        }, {
            label: "灵宝市",
            value: "411282"
        } ], [ {
            label: "宛城区",
            value: "411302"
        }, {
            label: "卧龙区",
            value: "411303"
        }, {
            label: "南召县",
            value: "411321"
        }, {
            label: "方城县",
            value: "411322"
        }, {
            label: "西峡县",
            value: "411323"
        }, {
            label: "镇平县",
            value: "411324"
        }, {
            label: "内乡县",
            value: "411325"
        }, {
            label: "淅川县",
            value: "411326"
        }, {
            label: "社旗县",
            value: "411327"
        }, {
            label: "唐河县",
            value: "411328"
        }, {
            label: "新野县",
            value: "411329"
        }, {
            label: "桐柏县",
            value: "411330"
        }, {
            label: "南阳高新技术产业开发区",
            value: "411371"
        }, {
            label: "南阳市城乡一体化示范区",
            value: "411372"
        }, {
            label: "邓州市",
            value: "411381"
        } ], [ {
            label: "梁园区",
            value: "411402"
        }, {
            label: "睢阳区",
            value: "411403"
        }, {
            label: "民权县",
            value: "411421"
        }, {
            label: "睢县",
            value: "411422"
        }, {
            label: "宁陵县",
            value: "411423"
        }, {
            label: "柘城县",
            value: "411424"
        }, {
            label: "虞城县",
            value: "411425"
        }, {
            label: "夏邑县",
            value: "411426"
        }, {
            label: "豫东综合物流产业聚集区",
            value: "411471"
        }, {
            label: "河南商丘经济开发区",
            value: "411472"
        }, {
            label: "永城市",
            value: "411481"
        } ], [ {
            label: "浉河区",
            value: "411502"
        }, {
            label: "平桥区",
            value: "411503"
        }, {
            label: "罗山县",
            value: "411521"
        }, {
            label: "光山县",
            value: "411522"
        }, {
            label: "新县",
            value: "411523"
        }, {
            label: "商城县",
            value: "411524"
        }, {
            label: "固始县",
            value: "411525"
        }, {
            label: "潢川县",
            value: "411526"
        }, {
            label: "淮滨县",
            value: "411527"
        }, {
            label: "息县",
            value: "411528"
        }, {
            label: "信阳高新技术产业开发区",
            value: "411571"
        } ], [ {
            label: "川汇区",
            value: "411602"
        }, {
            label: "扶沟县",
            value: "411621"
        }, {
            label: "西华县",
            value: "411622"
        }, {
            label: "商水县",
            value: "411623"
        }, {
            label: "沈丘县",
            value: "411624"
        }, {
            label: "郸城县",
            value: "411625"
        }, {
            label: "淮阳县",
            value: "411626"
        }, {
            label: "太康县",
            value: "411627"
        }, {
            label: "鹿邑县",
            value: "411628"
        }, {
            label: "河南周口经济开发区",
            value: "411671"
        }, {
            label: "项城市",
            value: "411681"
        } ], [ {
            label: "驿城区",
            value: "411702"
        }, {
            label: "西平县",
            value: "411721"
        }, {
            label: "上蔡县",
            value: "411722"
        }, {
            label: "平舆县",
            value: "411723"
        }, {
            label: "正阳县",
            value: "411724"
        }, {
            label: "确山县",
            value: "411725"
        }, {
            label: "泌阳县",
            value: "411726"
        }, {
            label: "汝南县",
            value: "411727"
        }, {
            label: "遂平县",
            value: "411728"
        }, {
            label: "新蔡县",
            value: "411729"
        }, {
            label: "河南驻马店经济开发区",
            value: "411771"
        } ], [ {
            label: "济源市",
            value: "419001"
        } ] ], [ [ {
            label: "江岸区",
            value: "420102"
        }, {
            label: "江汉区",
            value: "420103"
        }, {
            label: "硚口区",
            value: "420104"
        }, {
            label: "汉阳区",
            value: "420105"
        }, {
            label: "武昌区",
            value: "420106"
        }, {
            label: "青山区",
            value: "420107"
        }, {
            label: "洪山区",
            value: "420111"
        }, {
            label: "东西湖区",
            value: "420112"
        }, {
            label: "汉南区",
            value: "420113"
        }, {
            label: "蔡甸区",
            value: "420114"
        }, {
            label: "江夏区",
            value: "420115"
        }, {
            label: "黄陂区",
            value: "420116"
        }, {
            label: "新洲区",
            value: "420117"
        } ], [ {
            label: "黄石港区",
            value: "420202"
        }, {
            label: "西塞山区",
            value: "420203"
        }, {
            label: "下陆区",
            value: "420204"
        }, {
            label: "铁山区",
            value: "420205"
        }, {
            label: "阳新县",
            value: "420222"
        }, {
            label: "大冶市",
            value: "420281"
        } ], [ {
            label: "茅箭区",
            value: "420302"
        }, {
            label: "张湾区",
            value: "420303"
        }, {
            label: "郧阳区",
            value: "420304"
        }, {
            label: "郧西县",
            value: "420322"
        }, {
            label: "竹山县",
            value: "420323"
        }, {
            label: "竹溪县",
            value: "420324"
        }, {
            label: "房县",
            value: "420325"
        }, {
            label: "丹江口市",
            value: "420381"
        } ], [ {
            label: "西陵区",
            value: "420502"
        }, {
            label: "伍家岗区",
            value: "420503"
        }, {
            label: "点军区",
            value: "420504"
        }, {
            label: "猇亭区",
            value: "420505"
        }, {
            label: "夷陵区",
            value: "420506"
        }, {
            label: "远安县",
            value: "420525"
        }, {
            label: "兴山县",
            value: "420526"
        }, {
            label: "秭归县",
            value: "420527"
        }, {
            label: "长阳土家族自治县",
            value: "420528"
        }, {
            label: "五峰土家族自治县",
            value: "420529"
        }, {
            label: "宜都市",
            value: "420581"
        }, {
            label: "当阳市",
            value: "420582"
        }, {
            label: "枝江市",
            value: "420583"
        } ], [ {
            label: "襄城区",
            value: "420602"
        }, {
            label: "樊城区",
            value: "420606"
        }, {
            label: "襄州区",
            value: "420607"
        }, {
            label: "南漳县",
            value: "420624"
        }, {
            label: "谷城县",
            value: "420625"
        }, {
            label: "保康县",
            value: "420626"
        }, {
            label: "老河口市",
            value: "420682"
        }, {
            label: "枣阳市",
            value: "420683"
        }, {
            label: "宜城市",
            value: "420684"
        } ], [ {
            label: "梁子湖区",
            value: "420702"
        }, {
            label: "华容区",
            value: "420703"
        }, {
            label: "鄂城区",
            value: "420704"
        } ], [ {
            label: "东宝区",
            value: "420802"
        }, {
            label: "掇刀区",
            value: "420804"
        }, {
            label: "京山县",
            value: "420821"
        }, {
            label: "沙洋县",
            value: "420822"
        }, {
            label: "钟祥市",
            value: "420881"
        } ], [ {
            label: "孝南区",
            value: "420902"
        }, {
            label: "孝昌县",
            value: "420921"
        }, {
            label: "大悟县",
            value: "420922"
        }, {
            label: "云梦县",
            value: "420923"
        }, {
            label: "应城市",
            value: "420981"
        }, {
            label: "安陆市",
            value: "420982"
        }, {
            label: "汉川市",
            value: "420984"
        } ], [ {
            label: "沙市区",
            value: "421002"
        }, {
            label: "荆州区",
            value: "421003"
        }, {
            label: "公安县",
            value: "421022"
        }, {
            label: "监利县",
            value: "421023"
        }, {
            label: "江陵县",
            value: "421024"
        }, {
            label: "荆州经济技术开发区",
            value: "421071"
        }, {
            label: "石首市",
            value: "421081"
        }, {
            label: "洪湖市",
            value: "421083"
        }, {
            label: "松滋市",
            value: "421087"
        } ], [ {
            label: "黄州区",
            value: "421102"
        }, {
            label: "团风县",
            value: "421121"
        }, {
            label: "红安县",
            value: "421122"
        }, {
            label: "罗田县",
            value: "421123"
        }, {
            label: "英山县",
            value: "421124"
        }, {
            label: "浠水县",
            value: "421125"
        }, {
            label: "蕲春县",
            value: "421126"
        }, {
            label: "黄梅县",
            value: "421127"
        }, {
            label: "龙感湖管理区",
            value: "421171"
        }, {
            label: "麻城市",
            value: "421181"
        }, {
            label: "武穴市",
            value: "421182"
        } ], [ {
            label: "咸安区",
            value: "421202"
        }, {
            label: "嘉鱼县",
            value: "421221"
        }, {
            label: "通城县",
            value: "421222"
        }, {
            label: "崇阳县",
            value: "421223"
        }, {
            label: "通山县",
            value: "421224"
        }, {
            label: "赤壁市",
            value: "421281"
        } ], [ {
            label: "曾都区",
            value: "421303"
        }, {
            label: "随县",
            value: "421321"
        }, {
            label: "广水市",
            value: "421381"
        } ], [ {
            label: "恩施市",
            value: "422801"
        }, {
            label: "利川市",
            value: "422802"
        }, {
            label: "建始县",
            value: "422822"
        }, {
            label: "巴东县",
            value: "422823"
        }, {
            label: "宣恩县",
            value: "422825"
        }, {
            label: "咸丰县",
            value: "422826"
        }, {
            label: "来凤县",
            value: "422827"
        }, {
            label: "鹤峰县",
            value: "422828"
        } ], [ {
            label: "仙桃市",
            value: "429004"
        }, {
            label: "潜江市",
            value: "429005"
        }, {
            label: "天门市",
            value: "429006"
        }, {
            label: "神农架林区",
            value: "429021"
        } ] ], [ [ {
            label: "芙蓉区",
            value: "430102"
        }, {
            label: "天心区",
            value: "430103"
        }, {
            label: "岳麓区",
            value: "430104"
        }, {
            label: "开福区",
            value: "430105"
        }, {
            label: "雨花区",
            value: "430111"
        }, {
            label: "望城区",
            value: "430112"
        }, {
            label: "长沙县",
            value: "430121"
        }, {
            label: "浏阳市",
            value: "430181"
        }, {
            label: "宁乡市",
            value: "430182"
        } ], [ {
            label: "荷塘区",
            value: "430202"
        }, {
            label: "芦淞区",
            value: "430203"
        }, {
            label: "石峰区",
            value: "430204"
        }, {
            label: "天元区",
            value: "430211"
        }, {
            label: "株洲县",
            value: "430221"
        }, {
            label: "攸县",
            value: "430223"
        }, {
            label: "茶陵县",
            value: "430224"
        }, {
            label: "炎陵县",
            value: "430225"
        }, {
            label: "云龙示范区",
            value: "430271"
        }, {
            label: "醴陵市",
            value: "430281"
        } ], [ {
            label: "雨湖区",
            value: "430302"
        }, {
            label: "岳塘区",
            value: "430304"
        }, {
            label: "湘潭县",
            value: "430321"
        }, {
            label: "湖南湘潭高新技术产业园区",
            value: "430371"
        }, {
            label: "湘潭昭山示范区",
            value: "430372"
        }, {
            label: "湘潭九华示范区",
            value: "430373"
        }, {
            label: "湘乡市",
            value: "430381"
        }, {
            label: "韶山市",
            value: "430382"
        } ], [ {
            label: "珠晖区",
            value: "430405"
        }, {
            label: "雁峰区",
            value: "430406"
        }, {
            label: "石鼓区",
            value: "430407"
        }, {
            label: "蒸湘区",
            value: "430408"
        }, {
            label: "南岳区",
            value: "430412"
        }, {
            label: "衡阳县",
            value: "430421"
        }, {
            label: "衡南县",
            value: "430422"
        }, {
            label: "衡山县",
            value: "430423"
        }, {
            label: "衡东县",
            value: "430424"
        }, {
            label: "祁东县",
            value: "430426"
        }, {
            label: "衡阳综合保税区",
            value: "430471"
        }, {
            label: "湖南衡阳高新技术产业园区",
            value: "430472"
        }, {
            label: "湖南衡阳松木经济开发区",
            value: "430473"
        }, {
            label: "耒阳市",
            value: "430481"
        }, {
            label: "常宁市",
            value: "430482"
        } ], [ {
            label: "双清区",
            value: "430502"
        }, {
            label: "大祥区",
            value: "430503"
        }, {
            label: "北塔区",
            value: "430511"
        }, {
            label: "邵东县",
            value: "430521"
        }, {
            label: "新邵县",
            value: "430522"
        }, {
            label: "邵阳县",
            value: "430523"
        }, {
            label: "隆回县",
            value: "430524"
        }, {
            label: "洞口县",
            value: "430525"
        }, {
            label: "绥宁县",
            value: "430527"
        }, {
            label: "新宁县",
            value: "430528"
        }, {
            label: "城步苗族自治县",
            value: "430529"
        }, {
            label: "武冈市",
            value: "430581"
        } ], [ {
            label: "岳阳楼区",
            value: "430602"
        }, {
            label: "云溪区",
            value: "430603"
        }, {
            label: "君山区",
            value: "430611"
        }, {
            label: "岳阳县",
            value: "430621"
        }, {
            label: "华容县",
            value: "430623"
        }, {
            label: "湘阴县",
            value: "430624"
        }, {
            label: "平江县",
            value: "430626"
        }, {
            label: "岳阳市屈原管理区",
            value: "430671"
        }, {
            label: "汨罗市",
            value: "430681"
        }, {
            label: "临湘市",
            value: "430682"
        } ], [ {
            label: "武陵区",
            value: "430702"
        }, {
            label: "鼎城区",
            value: "430703"
        }, {
            label: "安乡县",
            value: "430721"
        }, {
            label: "汉寿县",
            value: "430722"
        }, {
            label: "澧县",
            value: "430723"
        }, {
            label: "临澧县",
            value: "430724"
        }, {
            label: "桃源县",
            value: "430725"
        }, {
            label: "石门县",
            value: "430726"
        }, {
            label: "常德市西洞庭管理区",
            value: "430771"
        }, {
            label: "津市市",
            value: "430781"
        } ], [ {
            label: "永定区",
            value: "430802"
        }, {
            label: "武陵源区",
            value: "430811"
        }, {
            label: "慈利县",
            value: "430821"
        }, {
            label: "桑植县",
            value: "430822"
        } ], [ {
            label: "资阳区",
            value: "430902"
        }, {
            label: "赫山区",
            value: "430903"
        }, {
            label: "南县",
            value: "430921"
        }, {
            label: "桃江县",
            value: "430922"
        }, {
            label: "安化县",
            value: "430923"
        }, {
            label: "益阳市大通湖管理区",
            value: "430971"
        }, {
            label: "湖南益阳高新技术产业园区",
            value: "430972"
        }, {
            label: "沅江市",
            value: "430981"
        } ], [ {
            label: "北湖区",
            value: "431002"
        }, {
            label: "苏仙区",
            value: "431003"
        }, {
            label: "桂阳县",
            value: "431021"
        }, {
            label: "宜章县",
            value: "431022"
        }, {
            label: "永兴县",
            value: "431023"
        }, {
            label: "嘉禾县",
            value: "431024"
        }, {
            label: "临武县",
            value: "431025"
        }, {
            label: "汝城县",
            value: "431026"
        }, {
            label: "桂东县",
            value: "431027"
        }, {
            label: "安仁县",
            value: "431028"
        }, {
            label: "资兴市",
            value: "431081"
        } ], [ {
            label: "零陵区",
            value: "431102"
        }, {
            label: "冷水滩区",
            value: "431103"
        }, {
            label: "祁阳县",
            value: "431121"
        }, {
            label: "东安县",
            value: "431122"
        }, {
            label: "双牌县",
            value: "431123"
        }, {
            label: "道县",
            value: "431124"
        }, {
            label: "江永县",
            value: "431125"
        }, {
            label: "宁远县",
            value: "431126"
        }, {
            label: "蓝山县",
            value: "431127"
        }, {
            label: "新田县",
            value: "431128"
        }, {
            label: "江华瑶族自治县",
            value: "431129"
        }, {
            label: "永州经济技术开发区",
            value: "431171"
        }, {
            label: "永州市金洞管理区",
            value: "431172"
        }, {
            label: "永州市回龙圩管理区",
            value: "431173"
        } ], [ {
            label: "鹤城区",
            value: "431202"
        }, {
            label: "中方县",
            value: "431221"
        }, {
            label: "沅陵县",
            value: "431222"
        }, {
            label: "辰溪县",
            value: "431223"
        }, {
            label: "溆浦县",
            value: "431224"
        }, {
            label: "会同县",
            value: "431225"
        }, {
            label: "麻阳苗族自治县",
            value: "431226"
        }, {
            label: "新晃侗族自治县",
            value: "431227"
        }, {
            label: "芷江侗族自治县",
            value: "431228"
        }, {
            label: "靖州苗族侗族自治县",
            value: "431229"
        }, {
            label: "通道侗族自治县",
            value: "431230"
        }, {
            label: "怀化市洪江管理区",
            value: "431271"
        }, {
            label: "洪江市",
            value: "431281"
        } ], [ {
            label: "娄星区",
            value: "431302"
        }, {
            label: "双峰县",
            value: "431321"
        }, {
            label: "新化县",
            value: "431322"
        }, {
            label: "冷水江市",
            value: "431381"
        }, {
            label: "涟源市",
            value: "431382"
        } ], [ {
            label: "吉首市",
            value: "433101"
        }, {
            label: "泸溪县",
            value: "433122"
        }, {
            label: "凤凰县",
            value: "433123"
        }, {
            label: "花垣县",
            value: "433124"
        }, {
            label: "保靖县",
            value: "433125"
        }, {
            label: "古丈县",
            value: "433126"
        }, {
            label: "永顺县",
            value: "433127"
        }, {
            label: "龙山县",
            value: "433130"
        }, {
            label: "湖南吉首经济开发区",
            value: "433172"
        }, {
            label: "湖南永顺经济开发区",
            value: "433173"
        } ] ], [ [ {
            label: "荔湾区",
            value: "440103"
        }, {
            label: "越秀区",
            value: "440104"
        }, {
            label: "海珠区",
            value: "440105"
        }, {
            label: "天河区",
            value: "440106"
        }, {
            label: "白云区",
            value: "440111"
        }, {
            label: "黄埔区",
            value: "440112"
        }, {
            label: "番禺区",
            value: "440113"
        }, {
            label: "花都区",
            value: "440114"
        }, {
            label: "南沙区",
            value: "440115"
        }, {
            label: "从化区",
            value: "440117"
        }, {
            label: "增城区",
            value: "440118"
        } ], [ {
            label: "武江区",
            value: "440203"
        }, {
            label: "浈江区",
            value: "440204"
        }, {
            label: "曲江区",
            value: "440205"
        }, {
            label: "始兴县",
            value: "440222"
        }, {
            label: "仁化县",
            value: "440224"
        }, {
            label: "翁源县",
            value: "440229"
        }, {
            label: "乳源瑶族自治县",
            value: "440232"
        }, {
            label: "新丰县",
            value: "440233"
        }, {
            label: "乐昌市",
            value: "440281"
        }, {
            label: "南雄市",
            value: "440282"
        } ], [ {
            label: "罗湖区",
            value: "440303"
        }, {
            label: "福田区",
            value: "440304"
        }, {
            label: "南山区",
            value: "440305"
        }, {
            label: "宝安区",
            value: "440306"
        }, {
            label: "龙岗区",
            value: "440307"
        }, {
            label: "盐田区",
            value: "440308"
        }, {
            label: "龙华区",
            value: "440309"
        }, {
            label: "坪山区",
            value: "440310"
        } ], [ {
            label: "香洲区",
            value: "440402"
        }, {
            label: "斗门区",
            value: "440403"
        }, {
            label: "金湾区",
            value: "440404"
        } ], [ {
            label: "龙湖区",
            value: "440507"
        }, {
            label: "金平区",
            value: "440511"
        }, {
            label: "濠江区",
            value: "440512"
        }, {
            label: "潮阳区",
            value: "440513"
        }, {
            label: "潮南区",
            value: "440514"
        }, {
            label: "澄海区",
            value: "440515"
        }, {
            label: "南澳县",
            value: "440523"
        } ], [ {
            label: "禅城区",
            value: "440604"
        }, {
            label: "南海区",
            value: "440605"
        }, {
            label: "顺德区",
            value: "440606"
        }, {
            label: "三水区",
            value: "440607"
        }, {
            label: "高明区",
            value: "440608"
        } ], [ {
            label: "蓬江区",
            value: "440703"
        }, {
            label: "江海区",
            value: "440704"
        }, {
            label: "新会区",
            value: "440705"
        }, {
            label: "台山市",
            value: "440781"
        }, {
            label: "开平市",
            value: "440783"
        }, {
            label: "鹤山市",
            value: "440784"
        }, {
            label: "恩平市",
            value: "440785"
        } ], [ {
            label: "赤坎区",
            value: "440802"
        }, {
            label: "霞山区",
            value: "440803"
        }, {
            label: "坡头区",
            value: "440804"
        }, {
            label: "麻章区",
            value: "440811"
        }, {
            label: "遂溪县",
            value: "440823"
        }, {
            label: "徐闻县",
            value: "440825"
        }, {
            label: "廉江市",
            value: "440881"
        }, {
            label: "雷州市",
            value: "440882"
        }, {
            label: "吴川市",
            value: "440883"
        } ], [ {
            label: "茂南区",
            value: "440902"
        }, {
            label: "电白区",
            value: "440904"
        }, {
            label: "高州市",
            value: "440981"
        }, {
            label: "化州市",
            value: "440982"
        }, {
            label: "信宜市",
            value: "440983"
        } ], [ {
            label: "端州区",
            value: "441202"
        }, {
            label: "鼎湖区",
            value: "441203"
        }, {
            label: "高要区",
            value: "441204"
        }, {
            label: "广宁县",
            value: "441223"
        }, {
            label: "怀集县",
            value: "441224"
        }, {
            label: "封开县",
            value: "441225"
        }, {
            label: "德庆县",
            value: "441226"
        }, {
            label: "四会市",
            value: "441284"
        } ], [ {
            label: "惠城区",
            value: "441302"
        }, {
            label: "惠阳区",
            value: "441303"
        }, {
            label: "博罗县",
            value: "441322"
        }, {
            label: "惠东县",
            value: "441323"
        }, {
            label: "龙门县",
            value: "441324"
        } ], [ {
            label: "梅江区",
            value: "441402"
        }, {
            label: "梅县区",
            value: "441403"
        }, {
            label: "大埔县",
            value: "441422"
        }, {
            label: "丰顺县",
            value: "441423"
        }, {
            label: "五华县",
            value: "441424"
        }, {
            label: "平远县",
            value: "441426"
        }, {
            label: "蕉岭县",
            value: "441427"
        }, {
            label: "兴宁市",
            value: "441481"
        } ], [ {
            label: "城区",
            value: "441502"
        }, {
            label: "海丰县",
            value: "441521"
        }, {
            label: "陆河县",
            value: "441523"
        }, {
            label: "陆丰市",
            value: "441581"
        } ], [ {
            label: "源城区",
            value: "441602"
        }, {
            label: "紫金县",
            value: "441621"
        }, {
            label: "龙川县",
            value: "441622"
        }, {
            label: "连平县",
            value: "441623"
        }, {
            label: "和平县",
            value: "441624"
        }, {
            label: "东源县",
            value: "441625"
        } ], [ {
            label: "江城区",
            value: "441702"
        }, {
            label: "阳东区",
            value: "441704"
        }, {
            label: "阳西县",
            value: "441721"
        }, {
            label: "阳春市",
            value: "441781"
        } ], [ {
            label: "清城区",
            value: "441802"
        }, {
            label: "清新区",
            value: "441803"
        }, {
            label: "佛冈县",
            value: "441821"
        }, {
            label: "阳山县",
            value: "441823"
        }, {
            label: "连山壮族瑶族自治县",
            value: "441825"
        }, {
            label: "连南瑶族自治县",
            value: "441826"
        }, {
            label: "英德市",
            value: "441881"
        }, {
            label: "连州市",
            value: "441882"
        } ], [ {
            label: "东莞市",
            value: "441900"
        } ], [ {
            label: "中山市",
            value: "442000"
        } ], [ {
            label: "湘桥区",
            value: "445102"
        }, {
            label: "潮安区",
            value: "445103"
        }, {
            label: "饶平县",
            value: "445122"
        } ], [ {
            label: "榕城区",
            value: "445202"
        }, {
            label: "揭东区",
            value: "445203"
        }, {
            label: "揭西县",
            value: "445222"
        }, {
            label: "惠来县",
            value: "445224"
        }, {
            label: "普宁市",
            value: "445281"
        } ], [ {
            label: "云城区",
            value: "445302"
        }, {
            label: "云安区",
            value: "445303"
        }, {
            label: "新兴县",
            value: "445321"
        }, {
            label: "郁南县",
            value: "445322"
        }, {
            label: "罗定市",
            value: "445381"
        } ] ], [ [ {
            label: "兴宁区",
            value: "450102"
        }, {
            label: "青秀区",
            value: "450103"
        }, {
            label: "江南区",
            value: "450105"
        }, {
            label: "西乡塘区",
            value: "450107"
        }, {
            label: "良庆区",
            value: "450108"
        }, {
            label: "邕宁区",
            value: "450109"
        }, {
            label: "武鸣区",
            value: "450110"
        }, {
            label: "隆安县",
            value: "450123"
        }, {
            label: "马山县",
            value: "450124"
        }, {
            label: "上林县",
            value: "450125"
        }, {
            label: "宾阳县",
            value: "450126"
        }, {
            label: "横县",
            value: "450127"
        } ], [ {
            label: "城中区",
            value: "450202"
        }, {
            label: "鱼峰区",
            value: "450203"
        }, {
            label: "柳南区",
            value: "450204"
        }, {
            label: "柳北区",
            value: "450205"
        }, {
            label: "柳江区",
            value: "450206"
        }, {
            label: "柳城县",
            value: "450222"
        }, {
            label: "鹿寨县",
            value: "450223"
        }, {
            label: "融安县",
            value: "450224"
        }, {
            label: "融水苗族自治县",
            value: "450225"
        }, {
            label: "三江侗族自治县",
            value: "450226"
        } ], [ {
            label: "秀峰区",
            value: "450302"
        }, {
            label: "叠彩区",
            value: "450303"
        }, {
            label: "象山区",
            value: "450304"
        }, {
            label: "七星区",
            value: "450305"
        }, {
            label: "雁山区",
            value: "450311"
        }, {
            label: "临桂区",
            value: "450312"
        }, {
            label: "阳朔县",
            value: "450321"
        }, {
            label: "灵川县",
            value: "450323"
        }, {
            label: "全州县",
            value: "450324"
        }, {
            label: "兴安县",
            value: "450325"
        }, {
            label: "永福县",
            value: "450326"
        }, {
            label: "灌阳县",
            value: "450327"
        }, {
            label: "龙胜各族自治县",
            value: "450328"
        }, {
            label: "资源县",
            value: "450329"
        }, {
            label: "平乐县",
            value: "450330"
        }, {
            label: "荔浦县",
            value: "450331"
        }, {
            label: "恭城瑶族自治县",
            value: "450332"
        } ], [ {
            label: "万秀区",
            value: "450403"
        }, {
            label: "长洲区",
            value: "450405"
        }, {
            label: "龙圩区",
            value: "450406"
        }, {
            label: "苍梧县",
            value: "450421"
        }, {
            label: "藤县",
            value: "450422"
        }, {
            label: "蒙山县",
            value: "450423"
        }, {
            label: "岑溪市",
            value: "450481"
        } ], [ {
            label: "海城区",
            value: "450502"
        }, {
            label: "银海区",
            value: "450503"
        }, {
            label: "铁山港区",
            value: "450512"
        }, {
            label: "合浦县",
            value: "450521"
        } ], [ {
            label: "港口区",
            value: "450602"
        }, {
            label: "防城区",
            value: "450603"
        }, {
            label: "上思县",
            value: "450621"
        }, {
            label: "东兴市",
            value: "450681"
        } ], [ {
            label: "钦南区",
            value: "450702"
        }, {
            label: "钦北区",
            value: "450703"
        }, {
            label: "灵山县",
            value: "450721"
        }, {
            label: "浦北县",
            value: "450722"
        } ], [ {
            label: "港北区",
            value: "450802"
        }, {
            label: "港南区",
            value: "450803"
        }, {
            label: "覃塘区",
            value: "450804"
        }, {
            label: "平南县",
            value: "450821"
        }, {
            label: "桂平市",
            value: "450881"
        } ], [ {
            label: "玉州区",
            value: "450902"
        }, {
            label: "福绵区",
            value: "450903"
        }, {
            label: "容县",
            value: "450921"
        }, {
            label: "陆川县",
            value: "450922"
        }, {
            label: "博白县",
            value: "450923"
        }, {
            label: "兴业县",
            value: "450924"
        }, {
            label: "北流市",
            value: "450981"
        } ], [ {
            label: "右江区",
            value: "451002"
        }, {
            label: "田阳县",
            value: "451021"
        }, {
            label: "田东县",
            value: "451022"
        }, {
            label: "平果县",
            value: "451023"
        }, {
            label: "德保县",
            value: "451024"
        }, {
            label: "那坡县",
            value: "451026"
        }, {
            label: "凌云县",
            value: "451027"
        }, {
            label: "乐业县",
            value: "451028"
        }, {
            label: "田林县",
            value: "451029"
        }, {
            label: "西林县",
            value: "451030"
        }, {
            label: "隆林各族自治县",
            value: "451031"
        }, {
            label: "靖西市",
            value: "451081"
        } ], [ {
            label: "八步区",
            value: "451102"
        }, {
            label: "平桂区",
            value: "451103"
        }, {
            label: "昭平县",
            value: "451121"
        }, {
            label: "钟山县",
            value: "451122"
        }, {
            label: "富川瑶族自治县",
            value: "451123"
        } ], [ {
            label: "金城江区",
            value: "451202"
        }, {
            label: "宜州区",
            value: "451203"
        }, {
            label: "南丹县",
            value: "451221"
        }, {
            label: "天峨县",
            value: "451222"
        }, {
            label: "凤山县",
            value: "451223"
        }, {
            label: "东兰县",
            value: "451224"
        }, {
            label: "罗城仫佬族自治县",
            value: "451225"
        }, {
            label: "环江毛南族自治县",
            value: "451226"
        }, {
            label: "巴马瑶族自治县",
            value: "451227"
        }, {
            label: "都安瑶族自治县",
            value: "451228"
        }, {
            label: "大化瑶族自治县",
            value: "451229"
        } ], [ {
            label: "兴宾区",
            value: "451302"
        }, {
            label: "忻城县",
            value: "451321"
        }, {
            label: "象州县",
            value: "451322"
        }, {
            label: "武宣县",
            value: "451323"
        }, {
            label: "金秀瑶族自治县",
            value: "451324"
        }, {
            label: "合山市",
            value: "451381"
        } ], [ {
            label: "江州区",
            value: "451402"
        }, {
            label: "扶绥县",
            value: "451421"
        }, {
            label: "宁明县",
            value: "451422"
        }, {
            label: "龙州县",
            value: "451423"
        }, {
            label: "大新县",
            value: "451424"
        }, {
            label: "天等县",
            value: "451425"
        }, {
            label: "凭祥市",
            value: "451481"
        } ] ], [ [ {
            label: "秀英区",
            value: "460105"
        }, {
            label: "龙华区",
            value: "460106"
        }, {
            label: "琼山区",
            value: "460107"
        }, {
            label: "美兰区",
            value: "460108"
        } ], [ {
            label: "海棠区",
            value: "460202"
        }, {
            label: "吉阳区",
            value: "460203"
        }, {
            label: "天涯区",
            value: "460204"
        }, {
            label: "崖州区",
            value: "460205"
        } ], [ {
            label: "西沙群岛",
            value: "460321"
        }, {
            label: "南沙群岛",
            value: "460322"
        }, {
            label: "中沙群岛的岛礁及其海域",
            value: "460323"
        } ], [ {
            label: "儋州市",
            value: "460400"
        } ], [ {
            label: "五指山市",
            value: "469001"
        }, {
            label: "琼海市",
            value: "469002"
        }, {
            label: "文昌市",
            value: "469005"
        }, {
            label: "万宁市",
            value: "469006"
        }, {
            label: "东方市",
            value: "469007"
        }, {
            label: "定安县",
            value: "469021"
        }, {
            label: "屯昌县",
            value: "469022"
        }, {
            label: "澄迈县",
            value: "469023"
        }, {
            label: "临高县",
            value: "469024"
        }, {
            label: "白沙黎族自治县",
            value: "469025"
        }, {
            label: "昌江黎族自治县",
            value: "469026"
        }, {
            label: "乐东黎族自治县",
            value: "469027"
        }, {
            label: "陵水黎族自治县",
            value: "469028"
        }, {
            label: "保亭黎族苗族自治县",
            value: "469029"
        }, {
            label: "琼中黎族苗族自治县",
            value: "469030"
        } ] ], [ [ {
            label: "万州区",
            value: "500101"
        }, {
            label: "涪陵区",
            value: "500102"
        }, {
            label: "渝中区",
            value: "500103"
        }, {
            label: "大渡口区",
            value: "500104"
        }, {
            label: "江北区",
            value: "500105"
        }, {
            label: "沙坪坝区",
            value: "500106"
        }, {
            label: "九龙坡区",
            value: "500107"
        }, {
            label: "南岸区",
            value: "500108"
        }, {
            label: "北碚区",
            value: "500109"
        }, {
            label: "綦江区",
            value: "500110"
        }, {
            label: "大足区",
            value: "500111"
        }, {
            label: "渝北区",
            value: "500112"
        }, {
            label: "巴南区",
            value: "500113"
        }, {
            label: "黔江区",
            value: "500114"
        }, {
            label: "长寿区",
            value: "500115"
        }, {
            label: "江津区",
            value: "500116"
        }, {
            label: "合川区",
            value: "500117"
        }, {
            label: "永川区",
            value: "500118"
        }, {
            label: "南川区",
            value: "500119"
        }, {
            label: "璧山区",
            value: "500120"
        }, {
            label: "铜梁区",
            value: "500151"
        }, {
            label: "潼南区",
            value: "500152"
        }, {
            label: "荣昌区",
            value: "500153"
        }, {
            label: "开州区",
            value: "500154"
        }, {
            label: "梁平区",
            value: "500155"
        }, {
            label: "武隆区",
            value: "500156"
        } ], [ {
            label: "城口县",
            value: "500229"
        }, {
            label: "丰都县",
            value: "500230"
        }, {
            label: "垫江县",
            value: "500231"
        }, {
            label: "忠县",
            value: "500233"
        }, {
            label: "云阳县",
            value: "500235"
        }, {
            label: "奉节县",
            value: "500236"
        }, {
            label: "巫山县",
            value: "500237"
        }, {
            label: "巫溪县",
            value: "500238"
        }, {
            label: "石柱土家族自治县",
            value: "500240"
        }, {
            label: "秀山土家族苗族自治县",
            value: "500241"
        }, {
            label: "酉阳土家族苗族自治县",
            value: "500242"
        }, {
            label: "彭水苗族土家族自治县",
            value: "500243"
        } ] ], [ [ {
            label: "锦江区",
            value: "510104"
        }, {
            label: "青羊区",
            value: "510105"
        }, {
            label: "金牛区",
            value: "510106"
        }, {
            label: "武侯区",
            value: "510107"
        }, {
            label: "成华区",
            value: "510108"
        }, {
            label: "龙泉驿区",
            value: "510112"
        }, {
            label: "青白江区",
            value: "510113"
        }, {
            label: "新都区",
            value: "510114"
        }, {
            label: "温江区",
            value: "510115"
        }, {
            label: "双流区",
            value: "510116"
        }, {
            label: "郫都区",
            value: "510117"
        }, {
            label: "金堂县",
            value: "510121"
        }, {
            label: "大邑县",
            value: "510129"
        }, {
            label: "蒲江县",
            value: "510131"
        }, {
            label: "新津县",
            value: "510132"
        }, {
            label: "都江堰市",
            value: "510181"
        }, {
            label: "彭州市",
            value: "510182"
        }, {
            label: "邛崃市",
            value: "510183"
        }, {
            label: "崇州市",
            value: "510184"
        }, {
            label: "简阳市",
            value: "510185"
        } ], [ {
            label: "自流井区",
            value: "510302"
        }, {
            label: "贡井区",
            value: "510303"
        }, {
            label: "大安区",
            value: "510304"
        }, {
            label: "沿滩区",
            value: "510311"
        }, {
            label: "荣县",
            value: "510321"
        }, {
            label: "富顺县",
            value: "510322"
        } ], [ {
            label: "东区",
            value: "510402"
        }, {
            label: "西区",
            value: "510403"
        }, {
            label: "仁和区",
            value: "510411"
        }, {
            label: "米易县",
            value: "510421"
        }, {
            label: "盐边县",
            value: "510422"
        } ], [ {
            label: "江阳区",
            value: "510502"
        }, {
            label: "纳溪区",
            value: "510503"
        }, {
            label: "龙马潭区",
            value: "510504"
        }, {
            label: "泸县",
            value: "510521"
        }, {
            label: "合江县",
            value: "510522"
        }, {
            label: "叙永县",
            value: "510524"
        }, {
            label: "古蔺县",
            value: "510525"
        } ], [ {
            label: "旌阳区",
            value: "510603"
        }, {
            label: "罗江区",
            value: "510604"
        }, {
            label: "中江县",
            value: "510623"
        }, {
            label: "广汉市",
            value: "510681"
        }, {
            label: "什邡市",
            value: "510682"
        }, {
            label: "绵竹市",
            value: "510683"
        } ], [ {
            label: "涪城区",
            value: "510703"
        }, {
            label: "游仙区",
            value: "510704"
        }, {
            label: "安州区",
            value: "510705"
        }, {
            label: "三台县",
            value: "510722"
        }, {
            label: "盐亭县",
            value: "510723"
        }, {
            label: "梓潼县",
            value: "510725"
        }, {
            label: "北川羌族自治县",
            value: "510726"
        }, {
            label: "平武县",
            value: "510727"
        }, {
            label: "江油市",
            value: "510781"
        } ], [ {
            label: "利州区",
            value: "510802"
        }, {
            label: "昭化区",
            value: "510811"
        }, {
            label: "朝天区",
            value: "510812"
        }, {
            label: "旺苍县",
            value: "510821"
        }, {
            label: "青川县",
            value: "510822"
        }, {
            label: "剑阁县",
            value: "510823"
        }, {
            label: "苍溪县",
            value: "510824"
        } ], [ {
            label: "船山区",
            value: "510903"
        }, {
            label: "安居区",
            value: "510904"
        }, {
            label: "蓬溪县",
            value: "510921"
        }, {
            label: "射洪县",
            value: "510922"
        }, {
            label: "大英县",
            value: "510923"
        } ], [ {
            label: "市中区",
            value: "511002"
        }, {
            label: "东兴区",
            value: "511011"
        }, {
            label: "威远县",
            value: "511024"
        }, {
            label: "资中县",
            value: "511025"
        }, {
            label: "内江经济开发区",
            value: "511071"
        }, {
            label: "隆昌市",
            value: "511083"
        } ], [ {
            label: "市中区",
            value: "511102"
        }, {
            label: "沙湾区",
            value: "511111"
        }, {
            label: "五通桥区",
            value: "511112"
        }, {
            label: "金口河区",
            value: "511113"
        }, {
            label: "犍为县",
            value: "511123"
        }, {
            label: "井研县",
            value: "511124"
        }, {
            label: "夹江县",
            value: "511126"
        }, {
            label: "沐川县",
            value: "511129"
        }, {
            label: "峨边彝族自治县",
            value: "511132"
        }, {
            label: "马边彝族自治县",
            value: "511133"
        }, {
            label: "峨眉山市",
            value: "511181"
        } ], [ {
            label: "顺庆区",
            value: "511302"
        }, {
            label: "高坪区",
            value: "511303"
        }, {
            label: "嘉陵区",
            value: "511304"
        }, {
            label: "南部县",
            value: "511321"
        }, {
            label: "营山县",
            value: "511322"
        }, {
            label: "蓬安县",
            value: "511323"
        }, {
            label: "仪陇县",
            value: "511324"
        }, {
            label: "西充县",
            value: "511325"
        }, {
            label: "阆中市",
            value: "511381"
        } ], [ {
            label: "东坡区",
            value: "511402"
        }, {
            label: "彭山区",
            value: "511403"
        }, {
            label: "仁寿县",
            value: "511421"
        }, {
            label: "洪雅县",
            value: "511423"
        }, {
            label: "丹棱县",
            value: "511424"
        }, {
            label: "青神县",
            value: "511425"
        } ], [ {
            label: "翠屏区",
            value: "511502"
        }, {
            label: "南溪区",
            value: "511503"
        }, {
            label: "宜宾县",
            value: "511521"
        }, {
            label: "江安县",
            value: "511523"
        }, {
            label: "长宁县",
            value: "511524"
        }, {
            label: "高县",
            value: "511525"
        }, {
            label: "珙县",
            value: "511526"
        }, {
            label: "筠连县",
            value: "511527"
        }, {
            label: "兴文县",
            value: "511528"
        }, {
            label: "屏山县",
            value: "511529"
        } ], [ {
            label: "广安区",
            value: "511602"
        }, {
            label: "前锋区",
            value: "511603"
        }, {
            label: "岳池县",
            value: "511621"
        }, {
            label: "武胜县",
            value: "511622"
        }, {
            label: "邻水县",
            value: "511623"
        }, {
            label: "华蓥市",
            value: "511681"
        } ], [ {
            label: "通川区",
            value: "511702"
        }, {
            label: "达川区",
            value: "511703"
        }, {
            label: "宣汉县",
            value: "511722"
        }, {
            label: "开江县",
            value: "511723"
        }, {
            label: "大竹县",
            value: "511724"
        }, {
            label: "渠县",
            value: "511725"
        }, {
            label: "达州经济开发区",
            value: "511771"
        }, {
            label: "万源市",
            value: "511781"
        } ], [ {
            label: "雨城区",
            value: "511802"
        }, {
            label: "名山区",
            value: "511803"
        }, {
            label: "荥经县",
            value: "511822"
        }, {
            label: "汉源县",
            value: "511823"
        }, {
            label: "石棉县",
            value: "511824"
        }, {
            label: "天全县",
            value: "511825"
        }, {
            label: "芦山县",
            value: "511826"
        }, {
            label: "宝兴县",
            value: "511827"
        } ], [ {
            label: "巴州区",
            value: "511902"
        }, {
            label: "恩阳区",
            value: "511903"
        }, {
            label: "通江县",
            value: "511921"
        }, {
            label: "南江县",
            value: "511922"
        }, {
            label: "平昌县",
            value: "511923"
        }, {
            label: "巴中经济开发区",
            value: "511971"
        } ], [ {
            label: "雁江区",
            value: "512002"
        }, {
            label: "安岳县",
            value: "512021"
        }, {
            label: "乐至县",
            value: "512022"
        } ], [ {
            label: "马尔康市",
            value: "513201"
        }, {
            label: "汶川县",
            value: "513221"
        }, {
            label: "理县",
            value: "513222"
        }, {
            label: "茂县",
            value: "513223"
        }, {
            label: "松潘县",
            value: "513224"
        }, {
            label: "九寨沟县",
            value: "513225"
        }, {
            label: "金川县",
            value: "513226"
        }, {
            label: "小金县",
            value: "513227"
        }, {
            label: "黑水县",
            value: "513228"
        }, {
            label: "壤塘县",
            value: "513230"
        }, {
            label: "阿坝县",
            value: "513231"
        }, {
            label: "若尔盖县",
            value: "513232"
        }, {
            label: "红原县",
            value: "513233"
        } ], [ {
            label: "康定市",
            value: "513301"
        }, {
            label: "泸定县",
            value: "513322"
        }, {
            label: "丹巴县",
            value: "513323"
        }, {
            label: "九龙县",
            value: "513324"
        }, {
            label: "雅江县",
            value: "513325"
        }, {
            label: "道孚县",
            value: "513326"
        }, {
            label: "炉霍县",
            value: "513327"
        }, {
            label: "甘孜县",
            value: "513328"
        }, {
            label: "新龙县",
            value: "513329"
        }, {
            label: "德格县",
            value: "513330"
        }, {
            label: "白玉县",
            value: "513331"
        }, {
            label: "石渠县",
            value: "513332"
        }, {
            label: "色达县",
            value: "513333"
        }, {
            label: "理塘县",
            value: "513334"
        }, {
            label: "巴塘县",
            value: "513335"
        }, {
            label: "乡城县",
            value: "513336"
        }, {
            label: "稻城县",
            value: "513337"
        }, {
            label: "得荣县",
            value: "513338"
        } ], [ {
            label: "西昌市",
            value: "513401"
        }, {
            label: "木里藏族自治县",
            value: "513422"
        }, {
            label: "盐源县",
            value: "513423"
        }, {
            label: "德昌县",
            value: "513424"
        }, {
            label: "会理县",
            value: "513425"
        }, {
            label: "会东县",
            value: "513426"
        }, {
            label: "宁南县",
            value: "513427"
        }, {
            label: "普格县",
            value: "513428"
        }, {
            label: "布拖县",
            value: "513429"
        }, {
            label: "金阳县",
            value: "513430"
        }, {
            label: "昭觉县",
            value: "513431"
        }, {
            label: "喜德县",
            value: "513432"
        }, {
            label: "冕宁县",
            value: "513433"
        }, {
            label: "越西县",
            value: "513434"
        }, {
            label: "甘洛县",
            value: "513435"
        }, {
            label: "美姑县",
            value: "513436"
        }, {
            label: "雷波县",
            value: "513437"
        } ] ], [ [ {
            label: "南明区",
            value: "520102"
        }, {
            label: "云岩区",
            value: "520103"
        }, {
            label: "花溪区",
            value: "520111"
        }, {
            label: "乌当区",
            value: "520112"
        }, {
            label: "白云区",
            value: "520113"
        }, {
            label: "观山湖区",
            value: "520115"
        }, {
            label: "开阳县",
            value: "520121"
        }, {
            label: "息烽县",
            value: "520122"
        }, {
            label: "修文县",
            value: "520123"
        }, {
            label: "清镇市",
            value: "520181"
        } ], [ {
            label: "钟山区",
            value: "520201"
        }, {
            label: "六枝特区",
            value: "520203"
        }, {
            label: "水城县",
            value: "520221"
        }, {
            label: "盘州市",
            value: "520281"
        } ], [ {
            label: "红花岗区",
            value: "520302"
        }, {
            label: "汇川区",
            value: "520303"
        }, {
            label: "播州区",
            value: "520304"
        }, {
            label: "桐梓县",
            value: "520322"
        }, {
            label: "绥阳县",
            value: "520323"
        }, {
            label: "正安县",
            value: "520324"
        }, {
            label: "道真仡佬族苗族自治县",
            value: "520325"
        }, {
            label: "务川仡佬族苗族自治县",
            value: "520326"
        }, {
            label: "凤冈县",
            value: "520327"
        }, {
            label: "湄潭县",
            value: "520328"
        }, {
            label: "余庆县",
            value: "520329"
        }, {
            label: "习水县",
            value: "520330"
        }, {
            label: "赤水市",
            value: "520381"
        }, {
            label: "仁怀市",
            value: "520382"
        } ], [ {
            label: "西秀区",
            value: "520402"
        }, {
            label: "平坝区",
            value: "520403"
        }, {
            label: "普定县",
            value: "520422"
        }, {
            label: "镇宁布依族苗族自治县",
            value: "520423"
        }, {
            label: "关岭布依族苗族自治县",
            value: "520424"
        }, {
            label: "紫云苗族布依族自治县",
            value: "520425"
        } ], [ {
            label: "七星关区",
            value: "520502"
        }, {
            label: "大方县",
            value: "520521"
        }, {
            label: "黔西县",
            value: "520522"
        }, {
            label: "金沙县",
            value: "520523"
        }, {
            label: "织金县",
            value: "520524"
        }, {
            label: "纳雍县",
            value: "520525"
        }, {
            label: "威宁彝族回族苗族自治县",
            value: "520526"
        }, {
            label: "赫章县",
            value: "520527"
        } ], [ {
            label: "碧江区",
            value: "520602"
        }, {
            label: "万山区",
            value: "520603"
        }, {
            label: "江口县",
            value: "520621"
        }, {
            label: "玉屏侗族自治县",
            value: "520622"
        }, {
            label: "石阡县",
            value: "520623"
        }, {
            label: "思南县",
            value: "520624"
        }, {
            label: "印江土家族苗族自治县",
            value: "520625"
        }, {
            label: "德江县",
            value: "520626"
        }, {
            label: "沿河土家族自治县",
            value: "520627"
        }, {
            label: "松桃苗族自治县",
            value: "520628"
        } ], [ {
            label: "兴义市",
            value: "522301"
        }, {
            label: "兴仁县",
            value: "522322"
        }, {
            label: "普安县",
            value: "522323"
        }, {
            label: "晴隆县",
            value: "522324"
        }, {
            label: "贞丰县",
            value: "522325"
        }, {
            label: "望谟县",
            value: "522326"
        }, {
            label: "册亨县",
            value: "522327"
        }, {
            label: "安龙县",
            value: "522328"
        } ], [ {
            label: "凯里市",
            value: "522601"
        }, {
            label: "黄平县",
            value: "522622"
        }, {
            label: "施秉县",
            value: "522623"
        }, {
            label: "三穗县",
            value: "522624"
        }, {
            label: "镇远县",
            value: "522625"
        }, {
            label: "岑巩县",
            value: "522626"
        }, {
            label: "天柱县",
            value: "522627"
        }, {
            label: "锦屏县",
            value: "522628"
        }, {
            label: "剑河县",
            value: "522629"
        }, {
            label: "台江县",
            value: "522630"
        }, {
            label: "黎平县",
            value: "522631"
        }, {
            label: "榕江县",
            value: "522632"
        }, {
            label: "从江县",
            value: "522633"
        }, {
            label: "雷山县",
            value: "522634"
        }, {
            label: "麻江县",
            value: "522635"
        }, {
            label: "丹寨县",
            value: "522636"
        } ], [ {
            label: "都匀市",
            value: "522701"
        }, {
            label: "福泉市",
            value: "522702"
        }, {
            label: "荔波县",
            value: "522722"
        }, {
            label: "贵定县",
            value: "522723"
        }, {
            label: "瓮安县",
            value: "522725"
        }, {
            label: "独山县",
            value: "522726"
        }, {
            label: "平塘县",
            value: "522727"
        }, {
            label: "罗甸县",
            value: "522728"
        }, {
            label: "长顺县",
            value: "522729"
        }, {
            label: "龙里县",
            value: "522730"
        }, {
            label: "惠水县",
            value: "522731"
        }, {
            label: "三都水族自治县",
            value: "522732"
        } ] ], [ [ {
            label: "五华区",
            value: "530102"
        }, {
            label: "盘龙区",
            value: "530103"
        }, {
            label: "官渡区",
            value: "530111"
        }, {
            label: "西山区",
            value: "530112"
        }, {
            label: "东川区",
            value: "530113"
        }, {
            label: "呈贡区",
            value: "530114"
        }, {
            label: "晋宁区",
            value: "530115"
        }, {
            label: "富民县",
            value: "530124"
        }, {
            label: "宜良县",
            value: "530125"
        }, {
            label: "石林彝族自治县",
            value: "530126"
        }, {
            label: "嵩明县",
            value: "530127"
        }, {
            label: "禄劝彝族苗族自治县",
            value: "530128"
        }, {
            label: "寻甸回族彝族自治县",
            value: "530129"
        }, {
            label: "安宁市",
            value: "530181"
        } ], [ {
            label: "麒麟区",
            value: "530302"
        }, {
            label: "沾益区",
            value: "530303"
        }, {
            label: "马龙县",
            value: "530321"
        }, {
            label: "陆良县",
            value: "530322"
        }, {
            label: "师宗县",
            value: "530323"
        }, {
            label: "罗平县",
            value: "530324"
        }, {
            label: "富源县",
            value: "530325"
        }, {
            label: "会泽县",
            value: "530326"
        }, {
            label: "宣威市",
            value: "530381"
        } ], [ {
            label: "红塔区",
            value: "530402"
        }, {
            label: "江川区",
            value: "530403"
        }, {
            label: "澄江县",
            value: "530422"
        }, {
            label: "通海县",
            value: "530423"
        }, {
            label: "华宁县",
            value: "530424"
        }, {
            label: "易门县",
            value: "530425"
        }, {
            label: "峨山彝族自治县",
            value: "530426"
        }, {
            label: "新平彝族傣族自治县",
            value: "530427"
        }, {
            label: "元江哈尼族彝族傣族自治县",
            value: "530428"
        } ], [ {
            label: "隆阳区",
            value: "530502"
        }, {
            label: "施甸县",
            value: "530521"
        }, {
            label: "龙陵县",
            value: "530523"
        }, {
            label: "昌宁县",
            value: "530524"
        }, {
            label: "腾冲市",
            value: "530581"
        } ], [ {
            label: "昭阳区",
            value: "530602"
        }, {
            label: "鲁甸县",
            value: "530621"
        }, {
            label: "巧家县",
            value: "530622"
        }, {
            label: "盐津县",
            value: "530623"
        }, {
            label: "大关县",
            value: "530624"
        }, {
            label: "永善县",
            value: "530625"
        }, {
            label: "绥江县",
            value: "530626"
        }, {
            label: "镇雄县",
            value: "530627"
        }, {
            label: "彝良县",
            value: "530628"
        }, {
            label: "威信县",
            value: "530629"
        }, {
            label: "水富县",
            value: "530630"
        } ], [ {
            label: "古城区",
            value: "530702"
        }, {
            label: "玉龙纳西族自治县",
            value: "530721"
        }, {
            label: "永胜县",
            value: "530722"
        }, {
            label: "华坪县",
            value: "530723"
        }, {
            label: "宁蒗彝族自治县",
            value: "530724"
        } ], [ {
            label: "思茅区",
            value: "530802"
        }, {
            label: "宁洱哈尼族彝族自治县",
            value: "530821"
        }, {
            label: "墨江哈尼族自治县",
            value: "530822"
        }, {
            label: "景东彝族自治县",
            value: "530823"
        }, {
            label: "景谷傣族彝族自治县",
            value: "530824"
        }, {
            label: "镇沅彝族哈尼族拉祜族自治县",
            value: "530825"
        }, {
            label: "江城哈尼族彝族自治县",
            value: "530826"
        }, {
            label: "孟连傣族拉祜族佤族自治县",
            value: "530827"
        }, {
            label: "澜沧拉祜族自治县",
            value: "530828"
        }, {
            label: "西盟佤族自治县",
            value: "530829"
        } ], [ {
            label: "临翔区",
            value: "530902"
        }, {
            label: "凤庆县",
            value: "530921"
        }, {
            label: "云县",
            value: "530922"
        }, {
            label: "永德县",
            value: "530923"
        }, {
            label: "镇康县",
            value: "530924"
        }, {
            label: "双江拉祜族佤族布朗族傣族自治县",
            value: "530925"
        }, {
            label: "耿马傣族佤族自治县",
            value: "530926"
        }, {
            label: "沧源佤族自治县",
            value: "530927"
        } ], [ {
            label: "楚雄市",
            value: "532301"
        }, {
            label: "双柏县",
            value: "532322"
        }, {
            label: "牟定县",
            value: "532323"
        }, {
            label: "南华县",
            value: "532324"
        }, {
            label: "姚安县",
            value: "532325"
        }, {
            label: "大姚县",
            value: "532326"
        }, {
            label: "永仁县",
            value: "532327"
        }, {
            label: "元谋县",
            value: "532328"
        }, {
            label: "武定县",
            value: "532329"
        }, {
            label: "禄丰县",
            value: "532331"
        } ], [ {
            label: "个旧市",
            value: "532501"
        }, {
            label: "开远市",
            value: "532502"
        }, {
            label: "蒙自市",
            value: "532503"
        }, {
            label: "弥勒市",
            value: "532504"
        }, {
            label: "屏边苗族自治县",
            value: "532523"
        }, {
            label: "建水县",
            value: "532524"
        }, {
            label: "石屏县",
            value: "532525"
        }, {
            label: "泸西县",
            value: "532527"
        }, {
            label: "元阳县",
            value: "532528"
        }, {
            label: "红河县",
            value: "532529"
        }, {
            label: "金平苗族瑶族傣族自治县",
            value: "532530"
        }, {
            label: "绿春县",
            value: "532531"
        }, {
            label: "河口瑶族自治县",
            value: "532532"
        } ], [ {
            label: "文山市",
            value: "532601"
        }, {
            label: "砚山县",
            value: "532622"
        }, {
            label: "西畴县",
            value: "532623"
        }, {
            label: "麻栗坡县",
            value: "532624"
        }, {
            label: "马关县",
            value: "532625"
        }, {
            label: "丘北县",
            value: "532626"
        }, {
            label: "广南县",
            value: "532627"
        }, {
            label: "富宁县",
            value: "532628"
        } ], [ {
            label: "景洪市",
            value: "532801"
        }, {
            label: "勐海县",
            value: "532822"
        }, {
            label: "勐腊县",
            value: "532823"
        } ], [ {
            label: "大理市",
            value: "532901"
        }, {
            label: "漾濞彝族自治县",
            value: "532922"
        }, {
            label: "祥云县",
            value: "532923"
        }, {
            label: "宾川县",
            value: "532924"
        }, {
            label: "弥渡县",
            value: "532925"
        }, {
            label: "南涧彝族自治县",
            value: "532926"
        }, {
            label: "巍山彝族回族自治县",
            value: "532927"
        }, {
            label: "永平县",
            value: "532928"
        }, {
            label: "云龙县",
            value: "532929"
        }, {
            label: "洱源县",
            value: "532930"
        }, {
            label: "剑川县",
            value: "532931"
        }, {
            label: "鹤庆县",
            value: "532932"
        } ], [ {
            label: "瑞丽市",
            value: "533102"
        }, {
            label: "芒市",
            value: "533103"
        }, {
            label: "梁河县",
            value: "533122"
        }, {
            label: "盈江县",
            value: "533123"
        }, {
            label: "陇川县",
            value: "533124"
        } ], [ {
            label: "泸水市",
            value: "533301"
        }, {
            label: "福贡县",
            value: "533323"
        }, {
            label: "贡山独龙族怒族自治县",
            value: "533324"
        }, {
            label: "兰坪白族普米族自治县",
            value: "533325"
        } ], [ {
            label: "香格里拉市",
            value: "533401"
        }, {
            label: "德钦县",
            value: "533422"
        }, {
            label: "维西傈僳族自治县",
            value: "533423"
        } ] ], [ [ {
            label: "城关区",
            value: "540102"
        }, {
            label: "堆龙德庆区",
            value: "540103"
        }, {
            label: "林周县",
            value: "540121"
        }, {
            label: "当雄县",
            value: "540122"
        }, {
            label: "尼木县",
            value: "540123"
        }, {
            label: "曲水县",
            value: "540124"
        }, {
            label: "达孜县",
            value: "540126"
        }, {
            label: "墨竹工卡县",
            value: "540127"
        }, {
            label: "格尔木藏青工业园区",
            value: "540171"
        }, {
            label: "拉萨经济技术开发区",
            value: "540172"
        }, {
            label: "西藏文化旅游创意园区",
            value: "540173"
        }, {
            label: "达孜工业园区",
            value: "540174"
        } ], [ {
            label: "桑珠孜区",
            value: "540202"
        }, {
            label: "南木林县",
            value: "540221"
        }, {
            label: "江孜县",
            value: "540222"
        }, {
            label: "定日县",
            value: "540223"
        }, {
            label: "萨迦县",
            value: "540224"
        }, {
            label: "拉孜县",
            value: "540225"
        }, {
            label: "昂仁县",
            value: "540226"
        }, {
            label: "谢通门县",
            value: "540227"
        }, {
            label: "白朗县",
            value: "540228"
        }, {
            label: "仁布县",
            value: "540229"
        }, {
            label: "康马县",
            value: "540230"
        }, {
            label: "定结县",
            value: "540231"
        }, {
            label: "仲巴县",
            value: "540232"
        }, {
            label: "亚东县",
            value: "540233"
        }, {
            label: "吉隆县",
            value: "540234"
        }, {
            label: "聂拉木县",
            value: "540235"
        }, {
            label: "萨嘎县",
            value: "540236"
        }, {
            label: "岗巴县",
            value: "540237"
        } ], [ {
            label: "卡若区",
            value: "540302"
        }, {
            label: "江达县",
            value: "540321"
        }, {
            label: "贡觉县",
            value: "540322"
        }, {
            label: "类乌齐县",
            value: "540323"
        }, {
            label: "丁青县",
            value: "540324"
        }, {
            label: "察雅县",
            value: "540325"
        }, {
            label: "八宿县",
            value: "540326"
        }, {
            label: "左贡县",
            value: "540327"
        }, {
            label: "芒康县",
            value: "540328"
        }, {
            label: "洛隆县",
            value: "540329"
        }, {
            label: "边坝县",
            value: "540330"
        } ], [ {
            label: "巴宜区",
            value: "540402"
        }, {
            label: "工布江达县",
            value: "540421"
        }, {
            label: "米林县",
            value: "540422"
        }, {
            label: "墨脱县",
            value: "540423"
        }, {
            label: "波密县",
            value: "540424"
        }, {
            label: "察隅县",
            value: "540425"
        }, {
            label: "朗县",
            value: "540426"
        } ], [ {
            label: "乃东区",
            value: "540502"
        }, {
            label: "扎囊县",
            value: "540521"
        }, {
            label: "贡嘎县",
            value: "540522"
        }, {
            label: "桑日县",
            value: "540523"
        }, {
            label: "琼结县",
            value: "540524"
        }, {
            label: "曲松县",
            value: "540525"
        }, {
            label: "措美县",
            value: "540526"
        }, {
            label: "洛扎县",
            value: "540527"
        }, {
            label: "加查县",
            value: "540528"
        }, {
            label: "隆子县",
            value: "540529"
        }, {
            label: "错那县",
            value: "540530"
        }, {
            label: "浪卡子县",
            value: "540531"
        } ], [ {
            label: "那曲县",
            value: "542421"
        }, {
            label: "嘉黎县",
            value: "542422"
        }, {
            label: "比如县",
            value: "542423"
        }, {
            label: "聂荣县",
            value: "542424"
        }, {
            label: "安多县",
            value: "542425"
        }, {
            label: "申扎县",
            value: "542426"
        }, {
            label: "索县",
            value: "542427"
        }, {
            label: "班戈县",
            value: "542428"
        }, {
            label: "巴青县",
            value: "542429"
        }, {
            label: "尼玛县",
            value: "542430"
        }, {
            label: "双湖县",
            value: "542431"
        } ], [ {
            label: "普兰县",
            value: "542521"
        }, {
            label: "札达县",
            value: "542522"
        }, {
            label: "噶尔县",
            value: "542523"
        }, {
            label: "日土县",
            value: "542524"
        }, {
            label: "革吉县",
            value: "542525"
        }, {
            label: "改则县",
            value: "542526"
        }, {
            label: "措勤县",
            value: "542527"
        } ] ], [ [ {
            label: "新城区",
            value: "610102"
        }, {
            label: "碑林区",
            value: "610103"
        }, {
            label: "莲湖区",
            value: "610104"
        }, {
            label: "灞桥区",
            value: "610111"
        }, {
            label: "未央区",
            value: "610112"
        }, {
            label: "雁塔区",
            value: "610113"
        }, {
            label: "阎良区",
            value: "610114"
        }, {
            label: "临潼区",
            value: "610115"
        }, {
            label: "长安区",
            value: "610116"
        }, {
            label: "高陵区",
            value: "610117"
        }, {
            label: "鄠邑区",
            value: "610118"
        }, {
            label: "蓝田县",
            value: "610122"
        }, {
            label: "周至县",
            value: "610124"
        } ], [ {
            label: "王益区",
            value: "610202"
        }, {
            label: "印台区",
            value: "610203"
        }, {
            label: "耀州区",
            value: "610204"
        }, {
            label: "宜君县",
            value: "610222"
        } ], [ {
            label: "渭滨区",
            value: "610302"
        }, {
            label: "金台区",
            value: "610303"
        }, {
            label: "陈仓区",
            value: "610304"
        }, {
            label: "凤翔县",
            value: "610322"
        }, {
            label: "岐山县",
            value: "610323"
        }, {
            label: "扶风县",
            value: "610324"
        }, {
            label: "眉县",
            value: "610326"
        }, {
            label: "陇县",
            value: "610327"
        }, {
            label: "千阳县",
            value: "610328"
        }, {
            label: "麟游县",
            value: "610329"
        }, {
            label: "凤县",
            value: "610330"
        }, {
            label: "太白县",
            value: "610331"
        } ], [ {
            label: "秦都区",
            value: "610402"
        }, {
            label: "杨陵区",
            value: "610403"
        }, {
            label: "渭城区",
            value: "610404"
        }, {
            label: "三原县",
            value: "610422"
        }, {
            label: "泾阳县",
            value: "610423"
        }, {
            label: "乾县",
            value: "610424"
        }, {
            label: "礼泉县",
            value: "610425"
        }, {
            label: "永寿县",
            value: "610426"
        }, {
            label: "彬县",
            value: "610427"
        }, {
            label: "长武县",
            value: "610428"
        }, {
            label: "旬邑县",
            value: "610429"
        }, {
            label: "淳化县",
            value: "610430"
        }, {
            label: "武功县",
            value: "610431"
        }, {
            label: "兴平市",
            value: "610481"
        } ], [ {
            label: "临渭区",
            value: "610502"
        }, {
            label: "华州区",
            value: "610503"
        }, {
            label: "潼关县",
            value: "610522"
        }, {
            label: "大荔县",
            value: "610523"
        }, {
            label: "合阳县",
            value: "610524"
        }, {
            label: "澄城县",
            value: "610525"
        }, {
            label: "蒲城县",
            value: "610526"
        }, {
            label: "白水县",
            value: "610527"
        }, {
            label: "富平县",
            value: "610528"
        }, {
            label: "韩城市",
            value: "610581"
        }, {
            label: "华阴市",
            value: "610582"
        } ], [ {
            label: "宝塔区",
            value: "610602"
        }, {
            label: "安塞区",
            value: "610603"
        }, {
            label: "延长县",
            value: "610621"
        }, {
            label: "延川县",
            value: "610622"
        }, {
            label: "子长县",
            value: "610623"
        }, {
            label: "志丹县",
            value: "610625"
        }, {
            label: "吴起县",
            value: "610626"
        }, {
            label: "甘泉县",
            value: "610627"
        }, {
            label: "富县",
            value: "610628"
        }, {
            label: "洛川县",
            value: "610629"
        }, {
            label: "宜川县",
            value: "610630"
        }, {
            label: "黄龙县",
            value: "610631"
        }, {
            label: "黄陵县",
            value: "610632"
        } ], [ {
            label: "汉台区",
            value: "610702"
        }, {
            label: "南郑区",
            value: "610703"
        }, {
            label: "城固县",
            value: "610722"
        }, {
            label: "洋县",
            value: "610723"
        }, {
            label: "西乡县",
            value: "610724"
        }, {
            label: "勉县",
            value: "610725"
        }, {
            label: "宁强县",
            value: "610726"
        }, {
            label: "略阳县",
            value: "610727"
        }, {
            label: "镇巴县",
            value: "610728"
        }, {
            label: "留坝县",
            value: "610729"
        }, {
            label: "佛坪县",
            value: "610730"
        } ], [ {
            label: "榆阳区",
            value: "610802"
        }, {
            label: "横山区",
            value: "610803"
        }, {
            label: "府谷县",
            value: "610822"
        }, {
            label: "靖边县",
            value: "610824"
        }, {
            label: "定边县",
            value: "610825"
        }, {
            label: "绥德县",
            value: "610826"
        }, {
            label: "米脂县",
            value: "610827"
        }, {
            label: "佳县",
            value: "610828"
        }, {
            label: "吴堡县",
            value: "610829"
        }, {
            label: "清涧县",
            value: "610830"
        }, {
            label: "子洲县",
            value: "610831"
        }, {
            label: "神木市",
            value: "610881"
        } ], [ {
            label: "汉滨区",
            value: "610902"
        }, {
            label: "汉阴县",
            value: "610921"
        }, {
            label: "石泉县",
            value: "610922"
        }, {
            label: "宁陕县",
            value: "610923"
        }, {
            label: "紫阳县",
            value: "610924"
        }, {
            label: "岚皋县",
            value: "610925"
        }, {
            label: "平利县",
            value: "610926"
        }, {
            label: "镇坪县",
            value: "610927"
        }, {
            label: "旬阳县",
            value: "610928"
        }, {
            label: "白河县",
            value: "610929"
        } ], [ {
            label: "商州区",
            value: "611002"
        }, {
            label: "洛南县",
            value: "611021"
        }, {
            label: "丹凤县",
            value: "611022"
        }, {
            label: "商南县",
            value: "611023"
        }, {
            label: "山阳县",
            value: "611024"
        }, {
            label: "镇安县",
            value: "611025"
        }, {
            label: "柞水县",
            value: "611026"
        } ] ], [ [ {
            label: "城关区",
            value: "620102"
        }, {
            label: "七里河区",
            value: "620103"
        }, {
            label: "西固区",
            value: "620104"
        }, {
            label: "安宁区",
            value: "620105"
        }, {
            label: "红古区",
            value: "620111"
        }, {
            label: "永登县",
            value: "620121"
        }, {
            label: "皋兰县",
            value: "620122"
        }, {
            label: "榆中县",
            value: "620123"
        }, {
            label: "兰州新区",
            value: "620171"
        } ], [ {
            label: "嘉峪关市",
            value: "620201"
        } ], [ {
            label: "金川区",
            value: "620302"
        }, {
            label: "永昌县",
            value: "620321"
        } ], [ {
            label: "白银区",
            value: "620402"
        }, {
            label: "平川区",
            value: "620403"
        }, {
            label: "靖远县",
            value: "620421"
        }, {
            label: "会宁县",
            value: "620422"
        }, {
            label: "景泰县",
            value: "620423"
        } ], [ {
            label: "秦州区",
            value: "620502"
        }, {
            label: "麦积区",
            value: "620503"
        }, {
            label: "清水县",
            value: "620521"
        }, {
            label: "秦安县",
            value: "620522"
        }, {
            label: "甘谷县",
            value: "620523"
        }, {
            label: "武山县",
            value: "620524"
        }, {
            label: "张家川回族自治县",
            value: "620525"
        } ], [ {
            label: "凉州区",
            value: "620602"
        }, {
            label: "民勤县",
            value: "620621"
        }, {
            label: "古浪县",
            value: "620622"
        }, {
            label: "天祝藏族自治县",
            value: "620623"
        } ], [ {
            label: "甘州区",
            value: "620702"
        }, {
            label: "肃南裕固族自治县",
            value: "620721"
        }, {
            label: "民乐县",
            value: "620722"
        }, {
            label: "临泽县",
            value: "620723"
        }, {
            label: "高台县",
            value: "620724"
        }, {
            label: "山丹县",
            value: "620725"
        } ], [ {
            label: "崆峒区",
            value: "620802"
        }, {
            label: "泾川县",
            value: "620821"
        }, {
            label: "灵台县",
            value: "620822"
        }, {
            label: "崇信县",
            value: "620823"
        }, {
            label: "华亭县",
            value: "620824"
        }, {
            label: "庄浪县",
            value: "620825"
        }, {
            label: "静宁县",
            value: "620826"
        }, {
            label: "平凉工业园区",
            value: "620871"
        } ], [ {
            label: "肃州区",
            value: "620902"
        }, {
            label: "金塔县",
            value: "620921"
        }, {
            label: "瓜州县",
            value: "620922"
        }, {
            label: "肃北蒙古族自治县",
            value: "620923"
        }, {
            label: "阿克塞哈萨克族自治县",
            value: "620924"
        }, {
            label: "玉门市",
            value: "620981"
        }, {
            label: "敦煌市",
            value: "620982"
        } ], [ {
            label: "西峰区",
            value: "621002"
        }, {
            label: "庆城县",
            value: "621021"
        }, {
            label: "环县",
            value: "621022"
        }, {
            label: "华池县",
            value: "621023"
        }, {
            label: "合水县",
            value: "621024"
        }, {
            label: "正宁县",
            value: "621025"
        }, {
            label: "宁县",
            value: "621026"
        }, {
            label: "镇原县",
            value: "621027"
        } ], [ {
            label: "安定区",
            value: "621102"
        }, {
            label: "通渭县",
            value: "621121"
        }, {
            label: "陇西县",
            value: "621122"
        }, {
            label: "渭源县",
            value: "621123"
        }, {
            label: "临洮县",
            value: "621124"
        }, {
            label: "漳县",
            value: "621125"
        }, {
            label: "岷县",
            value: "621126"
        } ], [ {
            label: "武都区",
            value: "621202"
        }, {
            label: "成县",
            value: "621221"
        }, {
            label: "文县",
            value: "621222"
        }, {
            label: "宕昌县",
            value: "621223"
        }, {
            label: "康县",
            value: "621224"
        }, {
            label: "西和县",
            value: "621225"
        }, {
            label: "礼县",
            value: "621226"
        }, {
            label: "徽县",
            value: "621227"
        }, {
            label: "两当县",
            value: "621228"
        } ], [ {
            label: "临夏市",
            value: "622901"
        }, {
            label: "临夏县",
            value: "622921"
        }, {
            label: "康乐县",
            value: "622922"
        }, {
            label: "永靖县",
            value: "622923"
        }, {
            label: "广河县",
            value: "622924"
        }, {
            label: "和政县",
            value: "622925"
        }, {
            label: "东乡族自治县",
            value: "622926"
        }, {
            label: "积石山保安族东乡族撒拉族自治县",
            value: "622927"
        } ], [ {
            label: "合作市",
            value: "623001"
        }, {
            label: "临潭县",
            value: "623021"
        }, {
            label: "卓尼县",
            value: "623022"
        }, {
            label: "舟曲县",
            value: "623023"
        }, {
            label: "迭部县",
            value: "623024"
        }, {
            label: "玛曲县",
            value: "623025"
        }, {
            label: "碌曲县",
            value: "623026"
        }, {
            label: "夏河县",
            value: "623027"
        } ] ], [ [ {
            label: "城东区",
            value: "630102"
        }, {
            label: "城中区",
            value: "630103"
        }, {
            label: "城西区",
            value: "630104"
        }, {
            label: "城北区",
            value: "630105"
        }, {
            label: "大通回族土族自治县",
            value: "630121"
        }, {
            label: "湟中县",
            value: "630122"
        }, {
            label: "湟源县",
            value: "630123"
        } ], [ {
            label: "乐都区",
            value: "630202"
        }, {
            label: "平安区",
            value: "630203"
        }, {
            label: "民和回族土族自治县",
            value: "630222"
        }, {
            label: "互助土族自治县",
            value: "630223"
        }, {
            label: "化隆回族自治县",
            value: "630224"
        }, {
            label: "循化撒拉族自治县",
            value: "630225"
        } ], [ {
            label: "门源回族自治县",
            value: "632221"
        }, {
            label: "祁连县",
            value: "632222"
        }, {
            label: "海晏县",
            value: "632223"
        }, {
            label: "刚察县",
            value: "632224"
        } ], [ {
            label: "同仁县",
            value: "632321"
        }, {
            label: "尖扎县",
            value: "632322"
        }, {
            label: "泽库县",
            value: "632323"
        }, {
            label: "河南蒙古族自治县",
            value: "632324"
        } ], [ {
            label: "共和县",
            value: "632521"
        }, {
            label: "同德县",
            value: "632522"
        }, {
            label: "贵德县",
            value: "632523"
        }, {
            label: "兴海县",
            value: "632524"
        }, {
            label: "贵南县",
            value: "632525"
        } ], [ {
            label: "玛沁县",
            value: "632621"
        }, {
            label: "班玛县",
            value: "632622"
        }, {
            label: "甘德县",
            value: "632623"
        }, {
            label: "达日县",
            value: "632624"
        }, {
            label: "久治县",
            value: "632625"
        }, {
            label: "玛多县",
            value: "632626"
        } ], [ {
            label: "玉树市",
            value: "632701"
        }, {
            label: "杂多县",
            value: "632722"
        }, {
            label: "称多县",
            value: "632723"
        }, {
            label: "治多县",
            value: "632724"
        }, {
            label: "囊谦县",
            value: "632725"
        }, {
            label: "曲麻莱县",
            value: "632726"
        } ], [ {
            label: "格尔木市",
            value: "632801"
        }, {
            label: "德令哈市",
            value: "632802"
        }, {
            label: "乌兰县",
            value: "632821"
        }, {
            label: "都兰县",
            value: "632822"
        }, {
            label: "天峻县",
            value: "632823"
        }, {
            label: "大柴旦行政委员会",
            value: "632857"
        }, {
            label: "冷湖行政委员会",
            value: "632858"
        }, {
            label: "茫崖行政委员会",
            value: "632859"
        } ] ], [ [ {
            label: "兴庆区",
            value: "640104"
        }, {
            label: "西夏区",
            value: "640105"
        }, {
            label: "金凤区",
            value: "640106"
        }, {
            label: "永宁县",
            value: "640121"
        }, {
            label: "贺兰县",
            value: "640122"
        }, {
            label: "灵武市",
            value: "640181"
        } ], [ {
            label: "大武口区",
            value: "640202"
        }, {
            label: "惠农区",
            value: "640205"
        }, {
            label: "平罗县",
            value: "640221"
        } ], [ {
            label: "利通区",
            value: "640302"
        }, {
            label: "红寺堡区",
            value: "640303"
        }, {
            label: "盐池县",
            value: "640323"
        }, {
            label: "同心县",
            value: "640324"
        }, {
            label: "青铜峡市",
            value: "640381"
        } ], [ {
            label: "原州区",
            value: "640402"
        }, {
            label: "西吉县",
            value: "640422"
        }, {
            label: "隆德县",
            value: "640423"
        }, {
            label: "泾源县",
            value: "640424"
        }, {
            label: "彭阳县",
            value: "640425"
        } ], [ {
            label: "沙坡头区",
            value: "640502"
        }, {
            label: "中宁县",
            value: "640521"
        }, {
            label: "海原县",
            value: "640522"
        } ] ], [ [ {
            label: "天山区",
            value: "650102"
        }, {
            label: "沙依巴克区",
            value: "650103"
        }, {
            label: "新市区",
            value: "650104"
        }, {
            label: "水磨沟区",
            value: "650105"
        }, {
            label: "头屯河区",
            value: "650106"
        }, {
            label: "达坂城区",
            value: "650107"
        }, {
            label: "米东区",
            value: "650109"
        }, {
            label: "乌鲁木齐县",
            value: "650121"
        }, {
            label: "乌鲁木齐经济技术开发区",
            value: "650171"
        }, {
            label: "乌鲁木齐高新技术产业开发区",
            value: "650172"
        } ], [ {
            label: "独山子区",
            value: "650202"
        }, {
            label: "克拉玛依区",
            value: "650203"
        }, {
            label: "白碱滩区",
            value: "650204"
        }, {
            label: "乌尔禾区",
            value: "650205"
        } ], [ {
            label: "高昌区",
            value: "650402"
        }, {
            label: "鄯善县",
            value: "650421"
        }, {
            label: "托克逊县",
            value: "650422"
        } ], [ {
            label: "伊州区",
            value: "650502"
        }, {
            label: "巴里坤哈萨克自治县",
            value: "650521"
        }, {
            label: "伊吾县",
            value: "650522"
        } ], [ {
            label: "昌吉市",
            value: "652301"
        }, {
            label: "阜康市",
            value: "652302"
        }, {
            label: "呼图壁县",
            value: "652323"
        }, {
            label: "玛纳斯县",
            value: "652324"
        }, {
            label: "奇台县",
            value: "652325"
        }, {
            label: "吉木萨尔县",
            value: "652327"
        }, {
            label: "木垒哈萨克自治县",
            value: "652328"
        } ], [ {
            label: "博乐市",
            value: "652701"
        }, {
            label: "阿拉山口市",
            value: "652702"
        }, {
            label: "精河县",
            value: "652722"
        }, {
            label: "温泉县",
            value: "652723"
        } ], [ {
            label: "库尔勒市",
            value: "652801"
        }, {
            label: "轮台县",
            value: "652822"
        }, {
            label: "尉犁县",
            value: "652823"
        }, {
            label: "若羌县",
            value: "652824"
        }, {
            label: "且末县",
            value: "652825"
        }, {
            label: "焉耆回族自治县",
            value: "652826"
        }, {
            label: "和静县",
            value: "652827"
        }, {
            label: "和硕县",
            value: "652828"
        }, {
            label: "博湖县",
            value: "652829"
        }, {
            label: "库尔勒经济技术开发区",
            value: "652871"
        } ], [ {
            label: "阿克苏市",
            value: "652901"
        }, {
            label: "温宿县",
            value: "652922"
        }, {
            label: "库车县",
            value: "652923"
        }, {
            label: "沙雅县",
            value: "652924"
        }, {
            label: "新和县",
            value: "652925"
        }, {
            label: "拜城县",
            value: "652926"
        }, {
            label: "乌什县",
            value: "652927"
        }, {
            label: "阿瓦提县",
            value: "652928"
        }, {
            label: "柯坪县",
            value: "652929"
        } ], [ {
            label: "阿图什市",
            value: "653001"
        }, {
            label: "阿克陶县",
            value: "653022"
        }, {
            label: "阿合奇县",
            value: "653023"
        }, {
            label: "乌恰县",
            value: "653024"
        } ], [ {
            label: "喀什市",
            value: "653101"
        }, {
            label: "疏附县",
            value: "653121"
        }, {
            label: "疏勒县",
            value: "653122"
        }, {
            label: "英吉沙县",
            value: "653123"
        }, {
            label: "泽普县",
            value: "653124"
        }, {
            label: "莎车县",
            value: "653125"
        }, {
            label: "叶城县",
            value: "653126"
        }, {
            label: "麦盖提县",
            value: "653127"
        }, {
            label: "岳普湖县",
            value: "653128"
        }, {
            label: "伽师县",
            value: "653129"
        }, {
            label: "巴楚县",
            value: "653130"
        }, {
            label: "塔什库尔干塔吉克自治县",
            value: "653131"
        } ], [ {
            label: "和田市",
            value: "653201"
        }, {
            label: "和田县",
            value: "653221"
        }, {
            label: "墨玉县",
            value: "653222"
        }, {
            label: "皮山县",
            value: "653223"
        }, {
            label: "洛浦县",
            value: "653224"
        }, {
            label: "策勒县",
            value: "653225"
        }, {
            label: "于田县",
            value: "653226"
        }, {
            label: "民丰县",
            value: "653227"
        } ], [ {
            label: "伊宁市",
            value: "654002"
        }, {
            label: "奎屯市",
            value: "654003"
        }, {
            label: "霍尔果斯市",
            value: "654004"
        }, {
            label: "伊宁县",
            value: "654021"
        }, {
            label: "察布查尔锡伯自治县",
            value: "654022"
        }, {
            label: "霍城县",
            value: "654023"
        }, {
            label: "巩留县",
            value: "654024"
        }, {
            label: "新源县",
            value: "654025"
        }, {
            label: "昭苏县",
            value: "654026"
        }, {
            label: "特克斯县",
            value: "654027"
        }, {
            label: "尼勒克县",
            value: "654028"
        } ], [ {
            label: "塔城市",
            value: "654201"
        }, {
            label: "乌苏市",
            value: "654202"
        }, {
            label: "额敏县",
            value: "654221"
        }, {
            label: "沙湾县",
            value: "654223"
        }, {
            label: "托里县",
            value: "654224"
        }, {
            label: "裕民县",
            value: "654225"
        }, {
            label: "和布克赛尔蒙古自治县",
            value: "654226"
        } ], [ {
            label: "阿勒泰市",
            value: "654301"
        }, {
            label: "布尔津县",
            value: "654321"
        }, {
            label: "富蕴县",
            value: "654322"
        }, {
            label: "福海县",
            value: "654323"
        }, {
            label: "哈巴河县",
            value: "654324"
        }, {
            label: "青河县",
            value: "654325"
        }, {
            label: "吉木乃县",
            value: "654326"
        } ], [ {
            label: "石河子市",
            value: "659001"
        }, {
            label: "阿拉尔市",
            value: "659002"
        }, {
            label: "图木舒克市",
            value: "659003"
        }, {
            label: "五家渠市",
            value: "659004"
        }, {
            label: "铁门关市",
            value: "659006"
        } ] ], [ [ {
            label: "台北",
            value: "660101"
        } ], [ {
            label: "高雄",
            value: "660201"
        } ], [ {
            label: "基隆",
            value: "660301"
        } ], [ {
            label: "台中",
            value: "660401"
        } ], [ {
            label: "台南",
            value: "660501"
        } ], [ {
            label: "新竹",
            value: "660601"
        } ], [ {
            label: "嘉义",
            value: "660701"
        } ], [ {
            label: "宜兰",
            value: "660801"
        } ], [ {
            label: "桃园",
            value: "660901"
        } ], [ {
            label: "苗栗",
            value: "661001"
        } ], [ {
            label: "彰化",
            value: "661101"
        } ], [ {
            label: "南投",
            value: "661201"
        } ], [ {
            label: "云林",
            value: "661301"
        } ], [ {
            label: "屏东",
            value: "661401"
        } ], [ {
            label: "台东",
            value: "661501"
        } ], [ {
            label: "花莲",
            value: "661601"
        } ], [ {
            label: "澎湖",
            value: "661701"
        } ] ], [ [ {
            label: "香港岛",
            value: "670101"
        } ], [ {
            label: "九龙",
            value: "670201"
        } ], [ {
            label: "新界",
            value: "670301"
        } ] ], [ [ {
            label: "澳门半岛",
            value: "680101"
        } ], [ {
            label: "氹仔岛",
            value: "680201"
        } ], [ {
            label: "路环岛",
            value: "680301"
        } ], [ {
            label: "路氹城",
            value: "680401"
        } ] ], [ [ {
            label: "钓鱼岛全岛",
            value: "690101"
        } ] ] ];
    },
    "4a4b": function(e, l) {
        function a(l, t) {
            return e.exports = a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, l) {
                return e.__proto__ = l, e;
            }, e.exports.__esModule = !0, e.exports.default = e.exports, a(l, t);
        }
        e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "4ddd": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.tradePaying = l.receiveGiftCard = l.queryGiftCardByEid = l.getExchangeRecord = l.getExchangeDetailByTradeNo = void 0, 
        a("0488");
        var t = a("9b31");
        l.getExchangeRecord = function(e) {
            return (0, t.requestPost)("/vpoints/vpointsExchange/getExchangeRecord", e);
        }, l.queryGiftCardByEid = function(e) {
            return (0, t.requestPost)("/vpoints/vpointsExchange/queryGiftCardByEid", e);
        }, l.receiveGiftCard = function(e) {
            return (0, t.requestPost)("/vpoints/vpointsExchange/receiveGiftCard", e);
        }, l.getExchangeDetailByTradeNo = function(e) {
            return (0, t.requestPost)("/vpoints/vpointsExchange/getExchangeDetailByTradeNo", e);
        }, l.tradePaying = function(e) {
            return (0, t.requestPost)("/trade/tradePaying", e);
        };
    },
    "4ea4": function(e, l) {
        e.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "4f4a": function(e, l, a) {
        var t = a("4ea4");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var n = t(a("81d4")), r = t(a("5f80")), u = t(a("330c")), o = {
            en: n.default,
            "zh-Hans": r.default,
            "zh-Hant": u.default
        };
        l.default = o;
    },
    "502f": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.insertComment = l.getPersonalCommentList = l.getCommentList = void 0;
        var t = a("9b31");
        l.insertComment = function(e) {
            return (0, t.requestPost)("/vpoints/orderComment/insertComment", e);
        }, l.getPersonalCommentList = function(e) {
            return (0, t.requestPost)("/vpoints/orderComment/getPersonalCommentList", e);
        }, l.getCommentList = function(e) {
            return (0, t.requestPost)("/vpoints/orderComment/getCommentList", e);
        };
    },
    5251: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        l.default = [ [ {
            label: "市辖区",
            value: "1101"
        } ], [ {
            label: "市辖区",
            value: "1201"
        } ], [ {
            label: "石家庄市",
            value: "1301"
        }, {
            label: "唐山市",
            value: "1302"
        }, {
            label: "秦皇岛市",
            value: "1303"
        }, {
            label: "邯郸市",
            value: "1304"
        }, {
            label: "邢台市",
            value: "1305"
        }, {
            label: "保定市",
            value: "1306"
        }, {
            label: "张家口市",
            value: "1307"
        }, {
            label: "承德市",
            value: "1308"
        }, {
            label: "沧州市",
            value: "1309"
        }, {
            label: "廊坊市",
            value: "1310"
        }, {
            label: "衡水市",
            value: "1311"
        } ], [ {
            label: "太原市",
            value: "1401"
        }, {
            label: "大同市",
            value: "1402"
        }, {
            label: "阳泉市",
            value: "1403"
        }, {
            label: "长治市",
            value: "1404"
        }, {
            label: "晋城市",
            value: "1405"
        }, {
            label: "朔州市",
            value: "1406"
        }, {
            label: "晋中市",
            value: "1407"
        }, {
            label: "运城市",
            value: "1408"
        }, {
            label: "忻州市",
            value: "1409"
        }, {
            label: "临汾市",
            value: "1410"
        }, {
            label: "吕梁市",
            value: "1411"
        } ], [ {
            label: "呼和浩特市",
            value: "1501"
        }, {
            label: "包头市",
            value: "1502"
        }, {
            label: "乌海市",
            value: "1503"
        }, {
            label: "赤峰市",
            value: "1504"
        }, {
            label: "通辽市",
            value: "1505"
        }, {
            label: "鄂尔多斯市",
            value: "1506"
        }, {
            label: "呼伦贝尔市",
            value: "1507"
        }, {
            label: "巴彦淖尔市",
            value: "1508"
        }, {
            label: "乌兰察布市",
            value: "1509"
        }, {
            label: "兴安盟",
            value: "1522"
        }, {
            label: "锡林郭勒盟",
            value: "1525"
        }, {
            label: "阿拉善盟",
            value: "1529"
        } ], [ {
            label: "沈阳市",
            value: "2101"
        }, {
            label: "大连市",
            value: "2102"
        }, {
            label: "鞍山市",
            value: "2103"
        }, {
            label: "抚顺市",
            value: "2104"
        }, {
            label: "本溪市",
            value: "2105"
        }, {
            label: "丹东市",
            value: "2106"
        }, {
            label: "锦州市",
            value: "2107"
        }, {
            label: "营口市",
            value: "2108"
        }, {
            label: "阜新市",
            value: "2109"
        }, {
            label: "辽阳市",
            value: "2110"
        }, {
            label: "盘锦市",
            value: "2111"
        }, {
            label: "铁岭市",
            value: "2112"
        }, {
            label: "朝阳市",
            value: "2113"
        }, {
            label: "葫芦岛市",
            value: "2114"
        } ], [ {
            label: "长春市",
            value: "2201"
        }, {
            label: "吉林市",
            value: "2202"
        }, {
            label: "四平市",
            value: "2203"
        }, {
            label: "辽源市",
            value: "2204"
        }, {
            label: "通化市",
            value: "2205"
        }, {
            label: "白山市",
            value: "2206"
        }, {
            label: "松原市",
            value: "2207"
        }, {
            label: "白城市",
            value: "2208"
        }, {
            label: "延边朝鲜族自治州",
            value: "2224"
        } ], [ {
            label: "哈尔滨市",
            value: "2301"
        }, {
            label: "齐齐哈尔市",
            value: "2302"
        }, {
            label: "鸡西市",
            value: "2303"
        }, {
            label: "鹤岗市",
            value: "2304"
        }, {
            label: "双鸭山市",
            value: "2305"
        }, {
            label: "大庆市",
            value: "2306"
        }, {
            label: "伊春市",
            value: "2307"
        }, {
            label: "佳木斯市",
            value: "2308"
        }, {
            label: "七台河市",
            value: "2309"
        }, {
            label: "牡丹江市",
            value: "2310"
        }, {
            label: "黑河市",
            value: "2311"
        }, {
            label: "绥化市",
            value: "2312"
        }, {
            label: "大兴安岭地区",
            value: "2327"
        } ], [ {
            label: "市辖区",
            value: "3101"
        } ], [ {
            label: "南京市",
            value: "3201"
        }, {
            label: "无锡市",
            value: "3202"
        }, {
            label: "徐州市",
            value: "3203"
        }, {
            label: "常州市",
            value: "3204"
        }, {
            label: "苏州市",
            value: "3205"
        }, {
            label: "南通市",
            value: "3206"
        }, {
            label: "连云港市",
            value: "3207"
        }, {
            label: "淮安市",
            value: "3208"
        }, {
            label: "盐城市",
            value: "3209"
        }, {
            label: "扬州市",
            value: "3210"
        }, {
            label: "镇江市",
            value: "3211"
        }, {
            label: "泰州市",
            value: "3212"
        }, {
            label: "宿迁市",
            value: "3213"
        } ], [ {
            label: "杭州市",
            value: "3301"
        }, {
            label: "宁波市",
            value: "3302"
        }, {
            label: "温州市",
            value: "3303"
        }, {
            label: "嘉兴市",
            value: "3304"
        }, {
            label: "湖州市",
            value: "3305"
        }, {
            label: "绍兴市",
            value: "3306"
        }, {
            label: "金华市",
            value: "3307"
        }, {
            label: "衢州市",
            value: "3308"
        }, {
            label: "舟山市",
            value: "3309"
        }, {
            label: "台州市",
            value: "3310"
        }, {
            label: "丽水市",
            value: "3311"
        } ], [ {
            label: "合肥市",
            value: "3401"
        }, {
            label: "芜湖市",
            value: "3402"
        }, {
            label: "蚌埠市",
            value: "3403"
        }, {
            label: "淮南市",
            value: "3404"
        }, {
            label: "马鞍山市",
            value: "3405"
        }, {
            label: "淮北市",
            value: "3406"
        }, {
            label: "铜陵市",
            value: "3407"
        }, {
            label: "安庆市",
            value: "3408"
        }, {
            label: "黄山市",
            value: "3410"
        }, {
            label: "滁州市",
            value: "3411"
        }, {
            label: "阜阳市",
            value: "3412"
        }, {
            label: "宿州市",
            value: "3413"
        }, {
            label: "六安市",
            value: "3415"
        }, {
            label: "亳州市",
            value: "3416"
        }, {
            label: "池州市",
            value: "3417"
        }, {
            label: "宣城市",
            value: "3418"
        } ], [ {
            label: "福州市",
            value: "3501"
        }, {
            label: "厦门市",
            value: "3502"
        }, {
            label: "莆田市",
            value: "3503"
        }, {
            label: "三明市",
            value: "3504"
        }, {
            label: "泉州市",
            value: "3505"
        }, {
            label: "漳州市",
            value: "3506"
        }, {
            label: "南平市",
            value: "3507"
        }, {
            label: "龙岩市",
            value: "3508"
        }, {
            label: "宁德市",
            value: "3509"
        } ], [ {
            label: "南昌市",
            value: "3601"
        }, {
            label: "景德镇市",
            value: "3602"
        }, {
            label: "萍乡市",
            value: "3603"
        }, {
            label: "九江市",
            value: "3604"
        }, {
            label: "新余市",
            value: "3605"
        }, {
            label: "鹰潭市",
            value: "3606"
        }, {
            label: "赣州市",
            value: "3607"
        }, {
            label: "吉安市",
            value: "3608"
        }, {
            label: "宜春市",
            value: "3609"
        }, {
            label: "抚州市",
            value: "3610"
        }, {
            label: "上饶市",
            value: "3611"
        } ], [ {
            label: "济南市",
            value: "3701"
        }, {
            label: "青岛市",
            value: "3702"
        }, {
            label: "淄博市",
            value: "3703"
        }, {
            label: "枣庄市",
            value: "3704"
        }, {
            label: "东营市",
            value: "3705"
        }, {
            label: "烟台市",
            value: "3706"
        }, {
            label: "潍坊市",
            value: "3707"
        }, {
            label: "济宁市",
            value: "3708"
        }, {
            label: "泰安市",
            value: "3709"
        }, {
            label: "威海市",
            value: "3710"
        }, {
            label: "日照市",
            value: "3711"
        }, {
            label: "莱芜市",
            value: "3712"
        }, {
            label: "临沂市",
            value: "3713"
        }, {
            label: "德州市",
            value: "3714"
        }, {
            label: "聊城市",
            value: "3715"
        }, {
            label: "滨州市",
            value: "3716"
        }, {
            label: "菏泽市",
            value: "3717"
        } ], [ {
            label: "郑州市",
            value: "4101"
        }, {
            label: "开封市",
            value: "4102"
        }, {
            label: "洛阳市",
            value: "4103"
        }, {
            label: "平顶山市",
            value: "4104"
        }, {
            label: "安阳市",
            value: "4105"
        }, {
            label: "鹤壁市",
            value: "4106"
        }, {
            label: "新乡市",
            value: "4107"
        }, {
            label: "焦作市",
            value: "4108"
        }, {
            label: "濮阳市",
            value: "4109"
        }, {
            label: "许昌市",
            value: "4110"
        }, {
            label: "漯河市",
            value: "4111"
        }, {
            label: "三门峡市",
            value: "4112"
        }, {
            label: "南阳市",
            value: "4113"
        }, {
            label: "商丘市",
            value: "4114"
        }, {
            label: "信阳市",
            value: "4115"
        }, {
            label: "周口市",
            value: "4116"
        }, {
            label: "驻马店市",
            value: "4117"
        }, {
            label: "省直辖县级行政区划",
            value: "4190"
        } ], [ {
            label: "武汉市",
            value: "4201"
        }, {
            label: "黄石市",
            value: "4202"
        }, {
            label: "十堰市",
            value: "4203"
        }, {
            label: "宜昌市",
            value: "4205"
        }, {
            label: "襄阳市",
            value: "4206"
        }, {
            label: "鄂州市",
            value: "4207"
        }, {
            label: "荆门市",
            value: "4208"
        }, {
            label: "孝感市",
            value: "4209"
        }, {
            label: "荆州市",
            value: "4210"
        }, {
            label: "黄冈市",
            value: "4211"
        }, {
            label: "咸宁市",
            value: "4212"
        }, {
            label: "随州市",
            value: "4213"
        }, {
            label: "恩施土家族苗族自治州",
            value: "4228"
        }, {
            label: "省直辖县级行政区划",
            value: "4290"
        } ], [ {
            label: "长沙市",
            value: "4301"
        }, {
            label: "株洲市",
            value: "4302"
        }, {
            label: "湘潭市",
            value: "4303"
        }, {
            label: "衡阳市",
            value: "4304"
        }, {
            label: "邵阳市",
            value: "4305"
        }, {
            label: "岳阳市",
            value: "4306"
        }, {
            label: "常德市",
            value: "4307"
        }, {
            label: "张家界市",
            value: "4308"
        }, {
            label: "益阳市",
            value: "4309"
        }, {
            label: "郴州市",
            value: "4310"
        }, {
            label: "永州市",
            value: "4311"
        }, {
            label: "怀化市",
            value: "4312"
        }, {
            label: "娄底市",
            value: "4313"
        }, {
            label: "湘西土家族苗族自治州",
            value: "4331"
        } ], [ {
            label: "广州市",
            value: "4401"
        }, {
            label: "韶关市",
            value: "4402"
        }, {
            label: "深圳市",
            value: "4403"
        }, {
            label: "珠海市",
            value: "4404"
        }, {
            label: "汕头市",
            value: "4405"
        }, {
            label: "佛山市",
            value: "4406"
        }, {
            label: "江门市",
            value: "4407"
        }, {
            label: "湛江市",
            value: "4408"
        }, {
            label: "茂名市",
            value: "4409"
        }, {
            label: "肇庆市",
            value: "4412"
        }, {
            label: "惠州市",
            value: "4413"
        }, {
            label: "梅州市",
            value: "4414"
        }, {
            label: "汕尾市",
            value: "4415"
        }, {
            label: "河源市",
            value: "4416"
        }, {
            label: "阳江市",
            value: "4417"
        }, {
            label: "清远市",
            value: "4418"
        }, {
            label: "东莞市",
            value: "4419"
        }, {
            label: "中山市",
            value: "4420"
        }, {
            label: "潮州市",
            value: "4451"
        }, {
            label: "揭阳市",
            value: "4452"
        }, {
            label: "云浮市",
            value: "4453"
        } ], [ {
            label: "南宁市",
            value: "4501"
        }, {
            label: "柳州市",
            value: "4502"
        }, {
            label: "桂林市",
            value: "4503"
        }, {
            label: "梧州市",
            value: "4504"
        }, {
            label: "北海市",
            value: "4505"
        }, {
            label: "防城港市",
            value: "4506"
        }, {
            label: "钦州市",
            value: "4507"
        }, {
            label: "贵港市",
            value: "4508"
        }, {
            label: "玉林市",
            value: "4509"
        }, {
            label: "百色市",
            value: "4510"
        }, {
            label: "贺州市",
            value: "4511"
        }, {
            label: "河池市",
            value: "4512"
        }, {
            label: "来宾市",
            value: "4513"
        }, {
            label: "崇左市",
            value: "4514"
        } ], [ {
            label: "海口市",
            value: "4601"
        }, {
            label: "三亚市",
            value: "4602"
        }, {
            label: "三沙市",
            value: "4603"
        }, {
            label: "儋州市",
            value: "4604"
        }, {
            label: "省直辖县级行政区划",
            value: "4690"
        } ], [ {
            label: "市辖区",
            value: "5001"
        }, {
            label: "县",
            value: "5002"
        } ], [ {
            label: "成都市",
            value: "5101"
        }, {
            label: "自贡市",
            value: "5103"
        }, {
            label: "攀枝花市",
            value: "5104"
        }, {
            label: "泸州市",
            value: "5105"
        }, {
            label: "德阳市",
            value: "5106"
        }, {
            label: "绵阳市",
            value: "5107"
        }, {
            label: "广元市",
            value: "5108"
        }, {
            label: "遂宁市",
            value: "5109"
        }, {
            label: "内江市",
            value: "5110"
        }, {
            label: "乐山市",
            value: "5111"
        }, {
            label: "南充市",
            value: "5113"
        }, {
            label: "眉山市",
            value: "5114"
        }, {
            label: "宜宾市",
            value: "5115"
        }, {
            label: "广安市",
            value: "5116"
        }, {
            label: "达州市",
            value: "5117"
        }, {
            label: "雅安市",
            value: "5118"
        }, {
            label: "巴中市",
            value: "5119"
        }, {
            label: "资阳市",
            value: "5120"
        }, {
            label: "阿坝藏族羌族自治州",
            value: "5132"
        }, {
            label: "甘孜藏族自治州",
            value: "5133"
        }, {
            label: "凉山彝族自治州",
            value: "5134"
        } ], [ {
            label: "贵阳市",
            value: "5201"
        }, {
            label: "六盘水市",
            value: "5202"
        }, {
            label: "遵义市",
            value: "5203"
        }, {
            label: "安顺市",
            value: "5204"
        }, {
            label: "毕节市",
            value: "5205"
        }, {
            label: "铜仁市",
            value: "5206"
        }, {
            label: "黔西南布依族苗族自治州",
            value: "5223"
        }, {
            label: "黔东南苗族侗族自治州",
            value: "5226"
        }, {
            label: "黔南布依族苗族自治州",
            value: "5227"
        } ], [ {
            label: "昆明市",
            value: "5301"
        }, {
            label: "曲靖市",
            value: "5303"
        }, {
            label: "玉溪市",
            value: "5304"
        }, {
            label: "保山市",
            value: "5305"
        }, {
            label: "昭通市",
            value: "5306"
        }, {
            label: "丽江市",
            value: "5307"
        }, {
            label: "普洱市",
            value: "5308"
        }, {
            label: "临沧市",
            value: "5309"
        }, {
            label: "楚雄彝族自治州",
            value: "5323"
        }, {
            label: "红河哈尼族彝族自治州",
            value: "5325"
        }, {
            label: "文山壮族苗族自治州",
            value: "5326"
        }, {
            label: "西双版纳傣族自治州",
            value: "5328"
        }, {
            label: "大理白族自治州",
            value: "5329"
        }, {
            label: "德宏傣族景颇族自治州",
            value: "5331"
        }, {
            label: "怒江傈僳族自治州",
            value: "5333"
        }, {
            label: "迪庆藏族自治州",
            value: "5334"
        } ], [ {
            label: "拉萨市",
            value: "5401"
        }, {
            label: "日喀则市",
            value: "5402"
        }, {
            label: "昌都市",
            value: "5403"
        }, {
            label: "林芝市",
            value: "5404"
        }, {
            label: "山南市",
            value: "5405"
        }, {
            label: "那曲地区",
            value: "5424"
        }, {
            label: "阿里地区",
            value: "5425"
        } ], [ {
            label: "西安市",
            value: "6101"
        }, {
            label: "铜川市",
            value: "6102"
        }, {
            label: "宝鸡市",
            value: "6103"
        }, {
            label: "咸阳市",
            value: "6104"
        }, {
            label: "渭南市",
            value: "6105"
        }, {
            label: "延安市",
            value: "6106"
        }, {
            label: "汉中市",
            value: "6107"
        }, {
            label: "榆林市",
            value: "6108"
        }, {
            label: "安康市",
            value: "6109"
        }, {
            label: "商洛市",
            value: "6110"
        } ], [ {
            label: "兰州市",
            value: "6201"
        }, {
            label: "嘉峪关市",
            value: "6202"
        }, {
            label: "金昌市",
            value: "6203"
        }, {
            label: "白银市",
            value: "6204"
        }, {
            label: "天水市",
            value: "6205"
        }, {
            label: "武威市",
            value: "6206"
        }, {
            label: "张掖市",
            value: "6207"
        }, {
            label: "平凉市",
            value: "6208"
        }, {
            label: "酒泉市",
            value: "6209"
        }, {
            label: "庆阳市",
            value: "6210"
        }, {
            label: "定西市",
            value: "6211"
        }, {
            label: "陇南市",
            value: "6212"
        }, {
            label: "临夏回族自治州",
            value: "6229"
        }, {
            label: "甘南藏族自治州",
            value: "6230"
        } ], [ {
            label: "西宁市",
            value: "6301"
        }, {
            label: "海东市",
            value: "6302"
        }, {
            label: "海北藏族自治州",
            value: "6322"
        }, {
            label: "黄南藏族自治州",
            value: "6323"
        }, {
            label: "海南藏族自治州",
            value: "6325"
        }, {
            label: "果洛藏族自治州",
            value: "6326"
        }, {
            label: "玉树藏族自治州",
            value: "6327"
        }, {
            label: "海西蒙古族藏族自治州",
            value: "6328"
        } ], [ {
            label: "银川市",
            value: "6401"
        }, {
            label: "石嘴山市",
            value: "6402"
        }, {
            label: "吴忠市",
            value: "6403"
        }, {
            label: "固原市",
            value: "6404"
        }, {
            label: "中卫市",
            value: "6405"
        } ], [ {
            label: "乌鲁木齐市",
            value: "6501"
        }, {
            label: "克拉玛依市",
            value: "6502"
        }, {
            label: "吐鲁番市",
            value: "6504"
        }, {
            label: "哈密市",
            value: "6505"
        }, {
            label: "昌吉回族自治州",
            value: "6523"
        }, {
            label: "博尔塔拉蒙古自治州",
            value: "6527"
        }, {
            label: "巴音郭楞蒙古自治州",
            value: "6528"
        }, {
            label: "阿克苏地区",
            value: "6529"
        }, {
            label: "克孜勒苏柯尔克孜自治州",
            value: "6530"
        }, {
            label: "喀什地区",
            value: "6531"
        }, {
            label: "和田地区",
            value: "6532"
        }, {
            label: "伊犁哈萨克自治州",
            value: "6540"
        }, {
            label: "塔城地区",
            value: "6542"
        }, {
            label: "阿勒泰地区",
            value: "6543"
        }, {
            label: "自治区直辖县级行政区划",
            value: "6590"
        } ], [ {
            label: "台北",
            value: "6601"
        }, {
            label: "高雄",
            value: "6602"
        }, {
            label: "基隆",
            value: "6603"
        }, {
            label: "台中",
            value: "6604"
        }, {
            label: "台南",
            value: "6605"
        }, {
            label: "新竹",
            value: "6606"
        }, {
            label: "嘉义",
            value: "6607"
        }, {
            label: "宜兰",
            value: "6608"
        }, {
            label: "桃园",
            value: "6609"
        }, {
            label: "苗栗",
            value: "6610"
        }, {
            label: "彰化",
            value: "6611"
        }, {
            label: "南投",
            value: "6612"
        }, {
            label: "云林",
            value: "6613"
        }, {
            label: "屏东",
            value: "6614"
        }, {
            label: "台东",
            value: "6615"
        }, {
            label: "花莲",
            value: "6616"
        }, {
            label: "澎湖",
            value: "6617"
        } ], [ {
            label: "香港岛",
            value: "6701"
        }, {
            label: "九龙",
            value: "6702"
        }, {
            label: "新界",
            value: "6703"
        } ], [ {
            label: "澳门半岛",
            value: "6801"
        }, {
            label: "氹仔岛",
            value: "6802"
        }, {
            label: "路环岛",
            value: "6803"
        }, {
            label: "路氹城",
            value: "6804"
        } ], [ {
            label: "钓鱼岛",
            value: "6901"
        } ] ];
    },
    "543d": function(e, l, a) {
        (function(e, t) {
            var n = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.createApp = Sl, l.createComponent = $l, l.createPage = El, l.createPlugin = Ml, 
            l.createSubpackageApp = Ll, l.default = void 0;
            var r, u = n(a("278c")), o = n(a("9523")), i = n(a("b17c")), c = n(a("448a")), s = n(a("7037")), v = a("37dc"), b = n(a("66fd"));
            function f(e, l) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    l && (t = t.filter(function(l) {
                        return Object.getOwnPropertyDescriptor(e, l).enumerable;
                    })), a.push.apply(a, t);
                }
                return a;
            }
            function p(e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = null != arguments[l] ? arguments[l] : {};
                    l % 2 ? f(Object(a), !0).forEach(function(l) {
                        (0, o.default)(e, l, a[l]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach(function(l) {
                        Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(a, l));
                    });
                }
                return e;
            }
            var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", g = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
            function h() {
                var l, a = e.getStorageSync("uni_id_token") || "", t = a.split(".");
                if (!a || 3 !== t.length) return {
                    uid: null,
                    role: [],
                    permission: [],
                    tokenExpired: 0
                };
                try {
                    l = JSON.parse(function(e) {
                        return decodeURIComponent(r(e).split("").map(function(e) {
                            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                        }).join(""));
                    }(t[1]));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
                }
                return l.tokenExpired = 1e3 * l.exp, delete l.exp, delete l.iat, l;
            }
            r = "function" != typeof atob ? function(e) {
                if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !g.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
                var l;
                e += "==".slice(2 - (3 & e.length));
                for (var a, t, n = "", r = 0; r < e.length; ) l = d.indexOf(e.charAt(r++)) << 18 | d.indexOf(e.charAt(r++)) << 12 | (a = d.indexOf(e.charAt(r++))) << 6 | (t = d.indexOf(e.charAt(r++))), 
                n += 64 === a ? String.fromCharCode(l >> 16 & 255) : 64 === t ? String.fromCharCode(l >> 16 & 255, l >> 8 & 255) : String.fromCharCode(l >> 16 & 255, l >> 8 & 255, 255 & l);
                return n;
            } : atob;
            var m = Object.prototype.toString, y = Object.prototype.hasOwnProperty;
            function _(e) {
                return "function" == typeof e;
            }
            function x(e) {
                return "string" == typeof e;
            }
            function w(e) {
                return "[object Object]" === m.call(e);
            }
            function S(e, l) {
                return y.call(e, l);
            }
            function A() {}
            function O(e) {
                var l = Object.create(null);
                return function(a) {
                    return l[a] || (l[a] = e(a));
                };
            }
            var k = /-(\w)/g, P = O(function(e) {
                return e.replace(k, function(e, l) {
                    return l ? l.toUpperCase() : "";
                });
            });
            function D(e) {
                var l = {};
                return w(e) && Object.keys(e).sort().forEach(function(a) {
                    l[a] = e[a];
                }), Object.keys(l) ? l : e;
            }
            var j = [ "invoke", "success", "fail", "complete", "returnValue" ], C = {}, E = {};
            function $(e, l) {
                Object.keys(l).forEach(function(a) {
                    -1 !== j.indexOf(a) && _(l[a]) && (e[a] = function(e, l) {
                        var a = l ? e ? e.concat(l) : Array.isArray(l) ? l : [ l ] : e;
                        return a ? function(e) {
                            for (var l = [], a = 0; a < e.length; a++) -1 === l.indexOf(e[a]) && l.push(e[a]);
                            return l;
                        }(a) : a;
                    }(e[a], l[a]));
                });
            }
            function L(e, l) {
                e && l && Object.keys(l).forEach(function(a) {
                    -1 !== j.indexOf(a) && _(l[a]) && function(e, l) {
                        var a = e.indexOf(l);
                        -1 !== a && e.splice(a, 1);
                    }(e[a], l[a]);
                });
            }
            function M(e, l) {
                return function(a) {
                    return e(a, l) || a;
                };
            }
            function T(e) {
                return !!e && ("object" === (0, s.default)(e) || "function" == typeof e) && "function" == typeof e.then;
            }
            function q(e, l, a) {
                for (var t = !1, n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (t) t = Promise.resolve(M(r, a)); else {
                        var u = r(l, a);
                        if (T(u) && (t = Promise.resolve(u)), !1 === u) return {
                            then: function() {}
                        };
                    }
                }
                return t || {
                    then: function(e) {
                        return e(l);
                    }
                };
            }
            function I(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return [ "success", "fail", "complete" ].forEach(function(a) {
                    if (Array.isArray(e[a])) {
                        var t = l[a];
                        l[a] = function(n) {
                            q(e[a], n, l).then(function(e) {
                                return _(t) && t(e) || e;
                            });
                        };
                    }
                }), l;
            }
            function N(e, l) {
                var a = [];
                Array.isArray(C.returnValue) && a.push.apply(a, (0, c.default)(C.returnValue));
                var t = E[e];
                return t && Array.isArray(t.returnValue) && a.push.apply(a, (0, c.default)(t.returnValue)), 
                a.forEach(function(e) {
                    l = e(l) || l;
                }), l;
            }
            function U(e) {
                var l = Object.create(null);
                Object.keys(C).forEach(function(e) {
                    "returnValue" !== e && (l[e] = C[e].slice());
                });
                var a = E[e];
                return a && Object.keys(a).forEach(function(e) {
                    "returnValue" !== e && (l[e] = (l[e] || []).concat(a[e]));
                }), l;
            }
            function B(e, l, a) {
                for (var t = arguments.length, n = new Array(t > 3 ? t - 3 : 0), r = 3; r < t; r++) n[r - 3] = arguments[r];
                var u = U(e);
                if (u && Object.keys(u).length) {
                    if (Array.isArray(u.invoke)) {
                        var o = q(u.invoke, a);
                        return o.then(function(a) {
                            return l.apply(void 0, [ I(U(e), a) ].concat(n));
                        });
                    }
                    return l.apply(void 0, [ I(u, a) ].concat(n));
                }
                return l.apply(void 0, [ a ].concat(n));
            }
            var z = {
                returnValue: function(e) {
                    return T(e) ? new Promise(function(l, a) {
                        e.then(function(e) {
                            e[0] ? a(e[0]) : l(e[1]);
                        });
                    }) : e;
                }
            }, R = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/, F = /^create|Manager$/, V = [ "createBLEConnection" ], H = [ "createBLEConnection", "createPushMessage" ], G = /^on|^off/;
            function W(e) {
                return F.test(e) && -1 === V.indexOf(e);
            }
            function Z(e) {
                return R.test(e) && -1 === H.indexOf(e);
            }
            function J(e) {
                return e.then(function(e) {
                    return [ null, e ];
                }).catch(function(e) {
                    return [ e ];
                });
            }
            function K(e, l) {
                return function(e) {
                    return !(W(e) || Z(e) || function(e) {
                        return G.test(e) && "onPush" !== e;
                    }(e));
                }(e) && _(l) ? function() {
                    for (var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return _(a.success) || _(a.fail) || _(a.complete) ? N(e, B.apply(void 0, [ e, l, a ].concat(n))) : N(e, J(new Promise(function(t, r) {
                        B.apply(void 0, [ e, l, Object.assign({}, a, {
                            success: t,
                            fail: r
                        }) ].concat(n));
                    })));
                } : l;
            }
            Promise.prototype.finally || (Promise.prototype.finally = function(e) {
                var l = this.constructor;
                return this.then(function(a) {
                    return l.resolve(e()).then(function() {
                        return a;
                    });
                }, function(a) {
                    return l.resolve(e()).then(function() {
                        throw a;
                    });
                });
            });
            var X, Y = !1, Q = 0, ee = 0, le = {};
            X = ne(e.getSystemInfoSync().language) || "en", function() {
                if ("undefined" != typeof __uniConfig && __uniConfig.locales && Object.keys(__uniConfig.locales).length) {
                    var e = Object.keys(__uniConfig.locales);
                    e.length && e.forEach(function(e) {
                        var l = le[e], a = __uniConfig.locales[e];
                        l ? Object.assign(l, a) : le[e] = a;
                    });
                }
            }();
            var ae = (0, v.initVueI18n)(X, {}), te = ae.t;
            function ne(e, l) {
                if (e) return e = e.trim().replace(/_/g, "-"), l && l[e] ? e : "chinese" === (e = e.toLowerCase()) ? "zh-Hans" : 0 === e.indexOf("zh") ? e.indexOf("-hans") > -1 ? "zh-Hans" : e.indexOf("-hant") > -1 || function(e, l) {
                    return !![ "-tw", "-hk", "-mo", "-cht" ].find(function(l) {
                        return -1 !== e.indexOf(l);
                    });
                }(e) ? "zh-Hant" : "zh-Hans" : function(e, l) {
                    return [ "en", "fr", "es" ].find(function(l) {
                        return 0 === e.indexOf(l);
                    });
                }(e) || void 0;
            }
            function re() {
                if (_(getApp)) {
                    var l = getApp({
                        allowDefault: !0
                    });
                    if (l && l.$vm) return l.$vm.$locale;
                }
                return ne(e.getSystemInfoSync().language) || "en";
            }
            ae.mixin = {
                beforeCreate: function() {
                    var e = this, l = ae.i18n.watchLocale(function() {
                        e.$forceUpdate();
                    });
                    this.$once("hook:beforeDestroy", function() {
                        l();
                    });
                },
                methods: {
                    $$t: function(e, l) {
                        return te(e, l);
                    }
                }
            }, ae.setLocale, ae.getLocale;
            var ue = [];
            void 0 !== t && (t.getLocale = re);
            var oe, ie = {
                promiseInterceptor: z
            }, ce = Object.freeze({
                __proto__: null,
                upx2px: function(l, a) {
                    if (0 === Q && function() {
                        var l = e.getSystemInfoSync(), a = l.platform, t = l.pixelRatio, n = l.windowWidth;
                        Q = n, ee = t, Y = "ios" === a;
                    }(), 0 === (l = Number(l))) return 0;
                    var t = l / 750 * (a || Q);
                    return t < 0 && (t = -t), 0 === (t = Math.floor(t + 1e-4)) && (t = 1 !== ee && Y ? .5 : 1), 
                    l < 0 ? -t : t;
                },
                getLocale: re,
                setLocale: function(e) {
                    var l = !!_(getApp) && getApp();
                    return !!l && (l.$vm.$locale !== e && (l.$vm.$locale = e, ue.forEach(function(l) {
                        return l({
                            locale: e
                        });
                    }), !0));
                },
                onLocaleChange: function(e) {
                    -1 === ue.indexOf(e) && ue.push(e);
                },
                addInterceptor: function(e, l) {
                    "string" == typeof e && w(l) ? $(E[e] || (E[e] = {}), l) : w(e) && $(C, e);
                },
                removeInterceptor: function(e, l) {
                    "string" == typeof e ? w(l) ? L(E[e], l) : delete E[e] : w(e) && L(C, e);
                },
                interceptors: ie
            });
            function se(l) {
                (oe = oe || e.getStorageSync("__DC_STAT_UUID")) || (oe = Date.now() + "" + Math.floor(1e7 * Math.random()), 
                e.setStorage({
                    key: "__DC_STAT_UUID",
                    data: oe
                })), l.deviceId = oe;
            }
            function ve(e) {
                if (e.safeArea) {
                    var l = e.safeArea;
                    e.safeAreaInsets = {
                        top: l.top,
                        left: l.left,
                        right: e.windowWidth - l.right,
                        bottom: e.screenHeight - l.bottom
                    };
                }
            }
            function be(e, l) {
                for (var a = e.deviceType || "phone", t = {
                    ipad: "pad",
                    windows: "pc",
                    mac: "pc"
                }, n = Object.keys(t), r = l.toLocaleLowerCase(), u = 0; u < n.length; u++) {
                    var o = n[u];
                    if (-1 !== r.indexOf(o)) {
                        a = t[o];
                        break;
                    }
                }
                return a;
            }
            function fe(e) {
                var l = e;
                return l && (l = e.toLocaleLowerCase()), l;
            }
            function pe(e) {
                return re ? re() : e;
            }
            function de(e) {
                var l = e.hostName || "WeChat";
                return e.environment ? l = e.environment : e.host && e.host.env && (l = e.host.env), 
                l;
            }
            var ge = {
                returnValue: function(e) {
                    se(e), ve(e), function(e) {
                        var l, a = e.brand, t = void 0 === a ? "" : a, n = e.model, r = void 0 === n ? "" : n, u = e.system, o = void 0 === u ? "" : u, i = e.language, c = void 0 === i ? "" : i, s = e.theme, v = e.version, b = (e.platform, 
                        e.fontSizeSetting), f = e.SDKVersion, p = e.pixelRatio, d = e.deviceOrientation, g = "";
                        g = o.split(" ")[0] || "", l = o.split(" ")[1] || "";
                        var h = v, m = be(e, r), y = fe(t), _ = de(e), x = d, w = p, S = f, A = c.replace(/_/g, "-"), O = {
                            appId: "__UNI__772BC0F",
                            appName: "qpCommon",
                            appVersion: "1.0.0",
                            appVersionCode: "100",
                            appLanguage: pe(A),
                            uniCompileVersion: "3.96",
                            uniRuntimeVersion: "3.96",
                            uniPlatform: "mp-weixin",
                            deviceBrand: y,
                            deviceModel: r,
                            deviceType: m,
                            devicePixelRatio: w,
                            deviceOrientation: x,
                            osName: g.toLocaleLowerCase(),
                            osVersion: l,
                            hostTheme: s,
                            hostVersion: h,
                            hostLanguage: A,
                            hostName: _,
                            hostSDKVersion: S,
                            hostFontSizeSetting: b,
                            windowTop: 0,
                            windowBottom: 0,
                            osLanguage: void 0,
                            osTheme: void 0,
                            ua: void 0,
                            hostPackageName: void 0,
                            browserName: void 0,
                            browserVersion: void 0
                        };
                        Object.assign(e, O, {});
                    }(e);
                }
            }, he = {
                redirectTo: {
                    name: function(e) {
                        return "back" === e.exists && e.delta ? "navigateBack" : "redirectTo";
                    },
                    args: function(e) {
                        if ("back" === e.exists && e.url) {
                            var l = function(e) {
                                for (var l = getCurrentPages(), a = l.length; a--; ) {
                                    var t = l[a];
                                    if (t.$page && t.$page.fullPath === e) return a;
                                }
                                return -1;
                            }(e.url);
                            if (-1 !== l) {
                                var a = getCurrentPages().length - 1 - l;
                                a > 0 && (e.delta = a);
                            }
                        }
                    }
                },
                previewImage: {
                    args: function(e) {
                        var l = parseInt(e.current);
                        if (!isNaN(l)) {
                            var a = e.urls;
                            if (Array.isArray(a)) {
                                var t = a.length;
                                if (t) return l < 0 ? l = 0 : l >= t && (l = t - 1), l > 0 ? (e.current = a[l], 
                                e.urls = a.filter(function(e, t) {
                                    return !(t < l) || e !== a[l];
                                })) : e.current = a[0], {
                                    indicator: !1,
                                    loop: !1
                                };
                            }
                        }
                    }
                },
                getSystemInfo: ge,
                getSystemInfoSync: ge,
                showActionSheet: {
                    args: function(e) {
                        "object" === (0, s.default)(e) && (e.alertText = e.title);
                    }
                },
                getAppBaseInfo: {
                    returnValue: function(e) {
                        var l = e, a = l.version, t = l.language, n = l.SDKVersion, r = l.theme, u = de(e), o = t.replace("_", "-");
                        e = D(Object.assign(e, {
                            appId: "__UNI__772BC0F",
                            appName: "qpCommon",
                            appVersion: "1.0.0",
                            appVersionCode: "100",
                            appLanguage: pe(o),
                            hostVersion: a,
                            hostLanguage: o,
                            hostName: u,
                            hostSDKVersion: n,
                            hostTheme: r
                        }));
                    }
                },
                getDeviceInfo: {
                    returnValue: function(e) {
                        var l = e, a = l.brand, t = l.model, n = be(e, t), r = fe(a);
                        se(e), e = D(Object.assign(e, {
                            deviceType: n,
                            deviceBrand: r,
                            deviceModel: t
                        }));
                    }
                },
                getWindowInfo: {
                    returnValue: function(e) {
                        ve(e), e = D(Object.assign(e, {
                            windowTop: 0,
                            windowBottom: 0
                        }));
                    }
                },
                getAppAuthorizeSetting: {
                    returnValue: function(e) {
                        var l = e.locationReducedAccuracy;
                        e.locationAccuracy = "unsupported", !0 === l ? e.locationAccuracy = "reduced" : !1 === l && (e.locationAccuracy = "full");
                    }
                },
                compressImage: {
                    args: function(e) {
                        e.compressedHeight && !e.compressHeight && (e.compressHeight = e.compressedHeight), 
                        e.compressedWidth && !e.compressWidth && (e.compressWidth = e.compressedWidth);
                    }
                }
            }, me = [ "success", "fail", "cancel", "complete" ];
            function ye(e, l, a) {
                return function(t) {
                    return l(xe(e, t, a));
                };
            }
            function _e(e, l) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (w(l)) {
                    var r = !0 === n ? l : {};
                    for (var u in _(a) && (a = a(l, r) || {}), l) if (S(a, u)) {
                        var o = a[u];
                        _(o) && (o = o(l[u], l, r)), o ? x(o) ? r[o] = l[u] : w(o) && (r[o.name ? o.name : u] = o.value) : console.warn("The '".concat(e, "' method of platform '微信小程序' does not support option '").concat(u, "'"));
                    } else -1 !== me.indexOf(u) ? _(l[u]) && (r[u] = ye(e, l[u], t)) : n || (r[u] = l[u]);
                    return r;
                }
                return _(l) && (l = ye(e, l, t)), l;
            }
            function xe(e, l, a) {
                var t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return _(he.returnValue) && (l = he.returnValue(e, l)), _e(e, l, a, {}, t);
            }
            function we(l, a) {
                if (S(he, l)) {
                    var t = he[l];
                    return t ? function(a, n) {
                        var r = t;
                        _(t) && (r = t(a));
                        var u = [ a = _e(l, a, r.args, r.returnValue) ];
                        void 0 !== n && u.push(n), _(r.name) ? l = r.name(a) : x(r.name) && (l = r.name);
                        var o = e[l].apply(e, u);
                        return Z(l) ? xe(l, o, r.returnValue, W(l)) : o;
                    } : function() {
                        console.error("Platform '微信小程序' does not support '".concat(l, "'."));
                    };
                }
                return a;
            }
            var Se = Object.create(null);
            [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(e) {
                Se[e] = function(e) {
                    return function(l) {
                        var a = l.fail, t = l.complete, n = {
                            errMsg: "".concat(e, ":fail method '").concat(e, "' not supported")
                        };
                        _(a) && a(n), _(t) && t(n);
                    };
                }(e);
            });
            var Ae = {
                oauth: [ "weixin" ],
                share: [ "weixin" ],
                payment: [ "wxpay" ],
                push: [ "weixin" ]
            }, Oe = Object.freeze({
                __proto__: null,
                getProvider: function(e) {
                    var l = e.service, a = e.success, t = e.fail, n = e.complete, r = !1;
                    Ae[l] ? (r = {
                        errMsg: "getProvider:ok",
                        service: l,
                        provider: Ae[l]
                    }, _(a) && a(r)) : (r = {
                        errMsg: "getProvider:fail service not found"
                    }, _(t) && t(r)), _(n) && n(r);
                }
            }), ke = function() {
                var e;
                return function() {
                    return e || (e = new b.default()), e;
                };
            }();
            function Pe(e, l, a) {
                return e[l].apply(e, a);
            }
            var De, je, Ce, Ee = Object.freeze({
                __proto__: null,
                $on: function() {
                    return Pe(ke(), "$on", Array.prototype.slice.call(arguments));
                },
                $off: function() {
                    return Pe(ke(), "$off", Array.prototype.slice.call(arguments));
                },
                $once: function() {
                    return Pe(ke(), "$once", Array.prototype.slice.call(arguments));
                },
                $emit: function() {
                    return Pe(ke(), "$emit", Array.prototype.slice.call(arguments));
                }
            });
            function $e(e) {
                return function() {
                    try {
                        return e.apply(e, arguments);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error(e);
                    }
                };
            }
            function Le(e) {
                try {
                    return JSON.parse(e);
                } catch (e) {}
                return e;
            }
            var Me = [];
            function Te(e, l) {
                Me.forEach(function(a) {
                    a(e, l);
                }), Me.length = 0;
            }
            var qe = [], Ie = e.getAppBaseInfo && e.getAppBaseInfo();
            Ie || (Ie = e.getSystemInfoSync());
            var Ne = Ie ? Ie.host : null, Ue = Ne && "SAAASDK" === Ne.env ? e.miniapp.shareVideoMessage : e.shareVideoMessage, Be = Object.freeze({
                __proto__: null,
                shareVideoMessage: Ue,
                getPushClientId: function(e) {
                    w(e) || (e = {});
                    var l = function(e) {
                        var l = {};
                        for (var a in e) {
                            var t = e[a];
                            _(t) && (l[a] = $e(t), delete e[a]);
                        }
                        return l;
                    }(e), a = l.success, t = l.fail, n = l.complete, r = _(a), u = _(t), o = _(n);
                    Promise.resolve().then(function() {
                        void 0 === Ce && (Ce = !1, De = "", je = "uniPush is not enabled"), Me.push(function(e, l) {
                            var i;
                            e ? (i = {
                                errMsg: "getPushClientId:ok",
                                cid: e
                            }, r && a(i)) : (i = {
                                errMsg: "getPushClientId:fail" + (l ? " " + l : "")
                            }, u && t(i)), o && n(i);
                        }), void 0 !== De && Te(De, je);
                    });
                },
                onPushMessage: function(e) {
                    -1 === qe.indexOf(e) && qe.push(e);
                },
                offPushMessage: function(e) {
                    if (e) {
                        var l = qe.indexOf(e);
                        l > -1 && qe.splice(l, 1);
                    } else qe.length = 0;
                },
                invokePushCallback: function(e) {
                    if ("enabled" === e.type) Ce = !0; else if ("clientId" === e.type) De = e.cid, je = e.errMsg, 
                    Te(De, e.errMsg); else if ("pushMsg" === e.type) for (var l = {
                        type: "receive",
                        data: Le(e.message)
                    }, a = 0; a < qe.length; a++) {
                        if ((0, qe[a])(l), l.stopped) break;
                    } else "click" === e.type && qe.forEach(function(l) {
                        l({
                            type: "click",
                            data: Le(e.message)
                        });
                    });
                }
            }), ze = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ];
            function Re(e) {
                return Behavior(e);
            }
            function Fe() {
                return !!this.route;
            }
            function Ve(e) {
                this.triggerEvent("__l", e);
            }
            function He(e) {
                var l = e.$scope, a = {};
                Object.defineProperty(e, "$refs", {
                    get: function() {
                        var e = {};
                        return function e(l, a, t) {
                            (l.selectAllComponents(a) || []).forEach(function(l) {
                                var n = l.dataset.ref;
                                t[n] = l.$vm || Ze(l), "scoped" === l.dataset.vueGeneric && l.selectAllComponents(".scoped-ref").forEach(function(l) {
                                    e(l, a, t);
                                });
                            });
                        }(l, ".vue-ref", e), (l.selectAllComponents(".vue-ref-in-for") || []).forEach(function(l) {
                            var a = l.dataset.ref;
                            e[a] || (e[a] = []), e[a].push(l.$vm || Ze(l));
                        }), function(e, l) {
                            var a = (0, i.default)(Set, (0, c.default)(Object.keys(e)));
                            return Object.keys(l).forEach(function(t) {
                                var n = e[t], r = l[t];
                                Array.isArray(n) && Array.isArray(r) && n.length === r.length && r.every(function(e) {
                                    return n.includes(e);
                                }) || (e[t] = r, a.delete(t));
                            }), a.forEach(function(l) {
                                delete e[l];
                            }), e;
                        }(a, e);
                    }
                });
            }
            function Ge(e) {
                var l, a = e.detail || e.value, t = a.vuePid, n = a.vueOptions;
                t && (l = function e(l, a) {
                    for (var t, n = l.$children, r = n.length - 1; r >= 0; r--) {
                        var u = n[r];
                        if (u.$scope._$vueId === a) return u;
                    }
                    for (var o = n.length - 1; o >= 0; o--) if (t = e(n[o], a)) return t;
                }(this.$vm, t)), l || (l = this.$vm), n.parent = l;
            }
            function We(e) {
                return Object.defineProperty(e, "__v_isMPComponent", {
                    configurable: !0,
                    enumerable: !1,
                    value: !0
                }), e;
            }
            function Ze(e) {
                return function(e) {
                    return null !== e && "object" === (0, s.default)(e);
                }(e) && Object.isExtensible(e) && Object.defineProperty(e, "__ob__", {
                    configurable: !0,
                    enumerable: !1,
                    value: (0, o.default)({}, "__v_skip", !0)
                }), e;
            }
            var Je = /_(.*)_worklet_factory_/, Ke = Page, Xe = Component, Ye = /:/g, Qe = O(function(e) {
                return P(e.replace(Ye, "-"));
            });
            function el(e) {
                var l = e.triggerEvent, a = function(e) {
                    for (var a = arguments.length, t = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) t[n - 1] = arguments[n];
                    if (this.$vm || this.dataset && this.dataset.comType) e = Qe(e); else {
                        var r = Qe(e);
                        r !== e && l.apply(this, [ r ].concat(t));
                    }
                    return l.apply(this, [ e ].concat(t));
                };
                try {
                    e.triggerEvent = a;
                } catch (l) {
                    l = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(l);
                    e._triggerEvent = a;
                }
            }
            function ll(e, l, a) {
                var t = l[e];
                l[e] = function() {
                    if (We(this), el(this), t) {
                        for (var e = arguments.length, l = new Array(e), a = 0; a < e; a++) l[a] = arguments[a];
                        return t.apply(this, l);
                    }
                };
            }
            function al(e, l, a) {
                l.forEach(function(l) {
                    (function e(l, a) {
                        if (!a) return !0;
                        if (b.default.options && Array.isArray(b.default.options[l])) return !0;
                        if (_(a = a.default || a)) return !!_(a.extendOptions[l]) || !!(a.super && a.super.options && Array.isArray(a.super.options[l]));
                        if (_(a[l]) || Array.isArray(a[l])) return !0;
                        var t = a.mixins;
                        return Array.isArray(t) ? !!t.find(function(a) {
                            return e(l, a);
                        }) : void 0;
                    })(l, a) && (e[l] = function(e) {
                        return this.$vm && this.$vm.__call_hook(l, e);
                    });
                });
            }
            function tl(e, l) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                nl(l).forEach(function(l) {
                    return rl(e, l, a);
                });
            }
            function nl(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e && Object.keys(e).forEach(function(a) {
                    0 === a.indexOf("on") && _(e[a]) && l.push(a);
                }), l;
            }
            function rl(e, l, a) {
                -1 !== a.indexOf(l) || S(e, l) || (e[l] = function(e) {
                    return this.$vm && this.$vm.__call_hook(l, e);
                });
            }
            function ul(e, l) {
                var a;
                return [ a = _(l = l.default || l) ? l : e.extend(l), l = a.options ];
            }
            function ol(e, l) {
                if (Array.isArray(l) && l.length) {
                    var a = Object.create(null);
                    l.forEach(function(e) {
                        a[e] = !0;
                    }), e.$scopedSlots = e.$slots = a;
                }
            }
            function il(e, l) {
                var a = (e = (e || "").split(",")).length;
                1 === a ? l._$vueId = e[0] : 2 === a && (l._$vueId = e[0], l._$vuePid = e[1]);
            }
            function cl(e, l) {
                var a = e.data || {}, t = e.methods || {};
                if ("function" == typeof a) try {
                    a = a.call(l);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    Object({
                        NODE_ENV: "production",
                        VUE_APP_DARK_MODE: "false",
                        VUE_APP_NAME: "qpCommon",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", a);
                } else try {
                    a = JSON.parse(JSON.stringify(a));
                } catch (e) {}
                return w(a) || (a = {}), Object.keys(t).forEach(function(e) {
                    -1 !== l.__lifecycle_hooks__.indexOf(e) || S(a, e) || (a[e] = t[e]);
                }), a;
            }
            Ke.__$wrappered || (Ke.__$wrappered = !0, Page = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return ll("onLoad", e), Ke(e);
            }, Page.after = Ke.after, Component = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return ll("created", e), Xe(e);
            });
            var sl = [ String, Number, Boolean, Object, Array, null ];
            function vl(e) {
                return function(l, a) {
                    this.$vm && (this.$vm[e] = l);
                };
            }
            function bl(e, l) {
                var a = e.behaviors, t = e.extends, n = e.mixins, r = e.props;
                r || (e.props = r = []);
                var u = [];
                return Array.isArray(a) && a.forEach(function(e) {
                    u.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(r) ? (r.push("name"), 
                    r.push("value")) : (r.name = {
                        type: String,
                        default: ""
                    }, r.value = {
                        type: [ String, Number, Boolean, Array, Object, Date ],
                        default: ""
                    }));
                }), w(t) && t.props && u.push(l({
                    properties: pl(t.props, !0)
                })), Array.isArray(n) && n.forEach(function(e) {
                    w(e) && e.props && u.push(l({
                        properties: pl(e.props, !0)
                    }));
                }), u;
            }
            function fl(e, l, a, t) {
                return Array.isArray(l) && 1 === l.length ? l[0] : l;
            }
            function pl(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = arguments.length > 3 ? arguments[3] : void 0, t = {};
                return l || (t.vueId = {
                    type: String,
                    value: ""
                }, a.virtualHost && (t.virtualHostStyle = {
                    type: null,
                    value: ""
                }, t.virtualHostClass = {
                    type: null,
                    value: ""
                }), t.scopedSlotsCompiler = {
                    type: String,
                    value: ""
                }, t.vueSlots = {
                    type: null,
                    value: [],
                    observer: function(e, l) {
                        var a = Object.create(null);
                        e.forEach(function(e) {
                            a[e] = !0;
                        }), this.setData({
                            $slots: a
                        });
                    }
                }), Array.isArray(e) ? e.forEach(function(e) {
                    t[e] = {
                        type: null,
                        observer: vl(e)
                    };
                }) : w(e) && Object.keys(e).forEach(function(l) {
                    var a = e[l];
                    if (w(a)) {
                        var n = a.default;
                        _(n) && (n = n()), a.type = fl(0, a.type), t[l] = {
                            type: -1 !== sl.indexOf(a.type) ? a.type : null,
                            value: n,
                            observer: vl(l)
                        };
                    } else {
                        var r = fl(0, a);
                        t[l] = {
                            type: -1 !== sl.indexOf(r) ? r : null,
                            observer: vl(l)
                        };
                    }
                }), t;
            }
            function dl(e, l, a, t) {
                var n = {};
                return Array.isArray(l) && l.length && l.forEach(function(l, r) {
                    "string" == typeof l ? l ? "$event" === l ? n["$" + r] = a : "arguments" === l ? n["$" + r] = a.detail && a.detail.__args__ || t : 0 === l.indexOf("$event.") ? n["$" + r] = e.__get_value(l.replace("$event.", ""), a) : n["$" + r] = e.__get_value(l) : n["$" + r] = e : n["$" + r] = function(e, l) {
                        var a = e;
                        return l.forEach(function(l) {
                            var t = l[0], n = l[2];
                            if (t || void 0 !== n) {
                                var r, u = l[1], o = l[3];
                                Number.isInteger(t) ? r = t : t ? "string" == typeof t && t && (r = 0 === t.indexOf("#s#") ? t.substr(3) : e.__get_value(t, a)) : r = a, 
                                Number.isInteger(r) ? a = n : u ? Array.isArray(r) ? a = r.find(function(l) {
                                    return e.__get_value(u, l) === n;
                                }) : w(r) ? a = Object.keys(r).find(function(l) {
                                    return e.__get_value(u, r[l]) === n;
                                }) : console.error("v-for 暂不支持循环数据：", r) : a = r[n], o && (a = e.__get_value(o, a));
                            }
                        }), a;
                    }(e, l);
                }), n;
            }
            function gl(e) {
                for (var l = {}, a = 1; a < e.length; a++) {
                    var t = e[a];
                    l[t[0]] = t[1];
                }
                return l;
            }
            function hl(e, l) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], n = arguments.length > 4 ? arguments[4] : void 0, r = arguments.length > 5 ? arguments[5] : void 0, u = !1, o = w(l.detail) && l.detail.__args__ || [ l.detail ];
                if (n && (u = l.currentTarget && l.currentTarget.dataset && "wx" === l.currentTarget.dataset.comType, 
                !a.length)) return u ? [ l ] : o;
                var i = dl(e, t, l, o), c = [];
                return a.forEach(function(e) {
                    "$event" === e ? "__set_model" !== r || n ? n && !u ? c.push(o[0]) : c.push(l) : c.push(l.target.value) : Array.isArray(e) && "o" === e[0] ? c.push(gl(e)) : "string" == typeof e && S(i, e) ? c.push(i[e]) : c.push(e);
                }), c;
            }
            function ml(e) {
                var l = this, a = ((e = function(e) {
                    try {
                        e.mp = JSON.parse(JSON.stringify(e));
                    } catch (e) {}
                    return e.stopPropagation = A, e.preventDefault = A, e.target = e.target || {}, S(e, "detail") || (e.detail = {}), 
                    S(e, "markerId") && (e.detail = "object" === (0, s.default)(e.detail) ? e.detail : {}, 
                    e.detail.markerId = e.markerId), w(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), 
                    e;
                }(e)).currentTarget || e.target).dataset;
                if (!a) return console.warn("事件信息不存在");
                var t = a.eventOpts || a["event-opts"];
                if (!t) return console.warn("事件信息不存在");
                var n = e.type, r = [];
                return t.forEach(function(a) {
                    var t = a[0], u = a[1], o = "^" === t.charAt(0), i = "~" === (t = o ? t.slice(1) : t).charAt(0);
                    t = i ? t.slice(1) : t, u && function(e, l) {
                        return e === l || "regionchange" === l && ("begin" === e || "end" === e);
                    }(n, t) && u.forEach(function(a) {
                        var t = a[0];
                        if (t) {
                            var n = l.$vm;
                            if (n.$options.generic && (n = function(e) {
                                for (var l = e.$parent; l && l.$parent && (l.$options.generic || l.$parent.$options.generic || l.$scope._$vuePid); ) l = l.$parent;
                                return l && l.$parent;
                            }(n) || n), "$emit" === t) return void n.$emit.apply(n, hl(l.$vm, e, a[1], a[2], o, t));
                            var u = n[t];
                            if (!_(u)) {
                                var c = "page" === l.$vm.mpType ? "Page" : "Component", s = l.route || l.is;
                                throw new Error("".concat(c, ' "').concat(s, '" does not have a method "').concat(t, '"'));
                            }
                            if (i) {
                                if (u.once) return;
                                u.once = !0;
                            }
                            var v = hl(l.$vm, e, a[1], a[2], o, t);
                            v = Array.isArray(v) ? v : [], /=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(u.toString()) && (v = v.concat([ , , , , , , , , , , e ])), 
                            r.push(u.apply(n, v));
                        }
                    });
                }), "input" === n && 1 === r.length && void 0 !== r[0] ? r[0] : void 0;
            }
            var yl = {}, _l = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ];
            function xl(l, a) {
                var t = a.mocks, n = a.initRefs;
                (function() {
                    b.default.prototype.getOpenerEventChannel = function() {
                        return this.$scope.getOpenerEventChannel();
                    };
                    var e = b.default.prototype.__call_hook;
                    b.default.prototype.__call_hook = function(l, a) {
                        return "onLoad" === l && a && a.__id__ && (this.__eventChannel__ = function(e) {
                            var l = yl[e];
                            return delete yl[e], l;
                        }(a.__id__), delete a.__id__), e.call(this, l, a);
                    };
                })(), function() {
                    var e = {}, l = {};
                    function a(e) {
                        var l = this.$options.propsData.vueId;
                        l && e(l.split(",")[0]);
                    }
                    b.default.prototype.$hasSSP = function(a) {
                        var t = e[a];
                        return t || (l[a] = this, this.$on("hook:destroyed", function() {
                            delete l[a];
                        })), t;
                    }, b.default.prototype.$getSSP = function(l, a, t) {
                        var n = e[l];
                        if (n) {
                            var r = n[a] || [];
                            return t ? r : r[0];
                        }
                    }, b.default.prototype.$setSSP = function(l, t) {
                        var n = 0;
                        return a.call(this, function(a) {
                            var r = e[a], u = r[l] = r[l] || [];
                            u.push(t), n = u.length - 1;
                        }), n;
                    }, b.default.prototype.$initSSP = function() {
                        a.call(this, function(l) {
                            e[l] = {};
                        });
                    }, b.default.prototype.$callSSP = function() {
                        a.call(this, function(e) {
                            l[e] && l[e].$forceUpdate();
                        });
                    }, b.default.mixin({
                        destroyed: function() {
                            var a = this.$options.propsData, t = a && a.vueId;
                            t && (delete e[t], delete l[t]);
                        }
                    });
                }(), l.$options.store && (b.default.prototype.$store = l.$options.store), function(e) {
                    e.prototype.uniIDHasRole = function(e) {
                        return h().role.indexOf(e) > -1;
                    }, e.prototype.uniIDHasPermission = function(e) {
                        var l = h().permission;
                        return this.uniIDHasRole("admin") || l.indexOf(e) > -1;
                    }, e.prototype.uniIDTokenValid = function() {
                        return h().tokenExpired > Date.now();
                    };
                }(b.default), b.default.prototype.mpHost = "mp-weixin", b.default.mixin({
                    beforeCreate: function() {
                        if (this.$options.mpType) {
                            if (this.mpType = this.$options.mpType, this.$mp = (0, o.default)({
                                data: {}
                            }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                            delete this.$options.mpType, delete this.$options.mpInstance, "page" === this.mpType && "function" == typeof getApp) {
                                var e = getApp();
                                e.$vm && e.$vm.$i18n && (this._i18n = e.$vm.$i18n);
                            }
                            "app" !== this.mpType && (n(this), function(e, l) {
                                var a = e.$mp[e.mpType];
                                l.forEach(function(l) {
                                    S(a, l) && (e[l] = a[l]);
                                });
                            }(this, t));
                        }
                    }
                });
                var r = {
                    onLaunch: function(a) {
                        this.$vm || (e.canIUse && !e.canIUse("nextTick") && console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                        this.$vm = l, this.$vm.$mp = {
                            app: this
                        }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                        this.$vm.__call_hook("mounted", a), this.$vm.__call_hook("onLaunch", a));
                    }
                };
                r.globalData = l.$options.globalData || {};
                var u = l.$options.methods;
                return u && Object.keys(u).forEach(function(e) {
                    r[e] = u[e];
                }), function(e, l, a) {
                    var t = e.observable({
                        locale: a || ae.getLocale()
                    }), n = [];
                    l.$watchLocale = function(e) {
                        n.push(e);
                    }, Object.defineProperty(l, "$locale", {
                        get: function() {
                            return t.locale;
                        },
                        set: function(e) {
                            t.locale = e, n.forEach(function(l) {
                                return l(e);
                            });
                        }
                    });
                }(b.default, l, ne(e.getSystemInfoSync().language) || "en"), al(r, _l), tl(r, l.$options), 
                r;
            }
            function wl(e) {
                return xl(e, {
                    mocks: ze,
                    initRefs: He
                });
            }
            function Sl(e) {
                return App(wl(e)), e;
            }
            var Al = /[!'()*]/g, Ol = function(e) {
                return "%" + e.charCodeAt(0).toString(16);
            }, kl = /%2C/g, Pl = function(e) {
                return encodeURIComponent(e).replace(Al, Ol).replace(kl, ",");
            };
            function Dl(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pl, a = e ? Object.keys(e).map(function(a) {
                    var t = e[a];
                    if (void 0 === t) return "";
                    if (null === t) return l(a);
                    if (Array.isArray(t)) {
                        var n = [];
                        return t.forEach(function(e) {
                            void 0 !== e && (null === e ? n.push(l(a)) : n.push(l(a) + "=" + l(e)));
                        }), n.join("&");
                    }
                    return l(a) + "=" + l(t);
                }).filter(function(e) {
                    return e.length > 0;
                }).join("&") : null;
                return a ? "?".concat(a) : "";
            }
            function jl(e, l) {
                return function(e) {
                    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = l.isPage, t = l.initRelation, n = arguments.length > 2 ? arguments[2] : void 0, r = ul(b.default, e), o = (0, 
                    u.default)(r, 2), i = o[0], c = o[1], s = p({
                        multipleSlots: !0,
                        addGlobalClass: !0
                    }, c.options || {});
                    c["mp-weixin"] && c["mp-weixin"].options && Object.assign(s, c["mp-weixin"].options);
                    var v = {
                        options: s,
                        data: cl(c, b.default.prototype),
                        behaviors: bl(c, Re),
                        properties: pl(c.props, !1, c.__file, s),
                        lifetimes: {
                            attached: function() {
                                var e = this.properties, l = {
                                    mpType: a.call(this) ? "page" : "component",
                                    mpInstance: this,
                                    propsData: e
                                };
                                il(e.vueId, this), t.call(this, {
                                    vuePid: this._$vuePid,
                                    vueOptions: l
                                }), this.$vm = new i(l), ol(this.$vm, e.vueSlots), this.$vm.$mount();
                            },
                            ready: function() {
                                this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                            },
                            detached: function() {
                                this.$vm && this.$vm.$destroy();
                            }
                        },
                        pageLifetimes: {
                            show: function(e) {
                                this.$vm && this.$vm.__call_hook("onPageShow", e);
                            },
                            hide: function() {
                                this.$vm && this.$vm.__call_hook("onPageHide");
                            },
                            resize: function(e) {
                                this.$vm && this.$vm.__call_hook("onPageResize", e);
                            }
                        },
                        methods: {
                            __l: Ge,
                            __e: ml
                        }
                    };
                    return c.externalClasses && (v.externalClasses = c.externalClasses), Array.isArray(c.wxsCallMethods) && c.wxsCallMethods.forEach(function(e) {
                        v.methods[e] = function(l) {
                            return this.$vm[e](l);
                        };
                    }), n ? [ v, c, i ] : a ? v : [ v, i ];
                }(e, {
                    isPage: Fe,
                    initRelation: Ve
                }, l);
            }
            var Cl = [ "onShow", "onHide", "onUnload" ];
            function El(e) {
                return Component(function(e) {
                    return function(e) {
                        var l = jl(e, !0), a = (0, u.default)(l, 2), t = a[0], n = a[1];
                        return al(t.methods, Cl, n), t.methods.onLoad = function(e) {
                            this.options = e;
                            var l = Object.assign({}, e);
                            delete l.__id__, this.$page = {
                                fullPath: "/" + (this.route || this.is) + Dl(l)
                            }, this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e);
                        }, tl(t.methods, e, [ "onReady" ]), function(e, l) {
                            l && Object.keys(l).forEach(function(a) {
                                var t = a.match(Je);
                                if (t) {
                                    var n = t[1];
                                    e[a] = l[a], e[n] = l[n];
                                }
                            });
                        }(t.methods, n.methods), t;
                    }(e);
                }(e));
            }
            function $l(e) {
                return Component(jl(e));
            }
            function Ll(l) {
                var a = wl(l), t = getApp({
                    allowDefault: !0
                });
                l.$scope = t;
                var n = t.globalData;
                if (n && Object.keys(a.globalData).forEach(function(e) {
                    S(n, e) || (n[e] = a.globalData[e]);
                }), Object.keys(a).forEach(function(e) {
                    S(t, e) || (t[e] = a[e]);
                }), _(a.onShow) && e.onAppShow && e.onAppShow(function() {
                    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    l.__call_hook("onShow", a);
                }), _(a.onHide) && e.onAppHide && e.onAppHide(function() {
                    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    l.__call_hook("onHide", a);
                }), _(a.onLaunch)) {
                    var r = e.getLaunchOptionsSync && e.getLaunchOptionsSync();
                    l.__call_hook("onLaunch", r);
                }
                return l;
            }
            function Ml(l) {
                var a = wl(l);
                if (_(a.onShow) && e.onAppShow && e.onAppShow(function() {
                    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    l.__call_hook("onShow", a);
                }), _(a.onHide) && e.onAppHide && e.onAppHide(function() {
                    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    l.__call_hook("onHide", a);
                }), _(a.onLaunch)) {
                    var t = e.getLaunchOptionsSync && e.getLaunchOptionsSync();
                    l.__call_hook("onLaunch", t);
                }
                return l;
            }
            Cl.push.apply(Cl, [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ]), 
            [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ].forEach(function(e) {
                he[e] = !1;
            }), [].forEach(function(l) {
                var a = he[l] && he[l].name ? he[l].name : l;
                e.canIUse(a) || (he[l] = !1);
            });
            var Tl = {};
            "undefined" != typeof Proxy ? Tl = new Proxy({}, {
                get: function(l, a) {
                    return S(l, a) ? l[a] : ce[a] ? ce[a] : Be[a] ? K(a, Be[a]) : Oe[a] ? K(a, Oe[a]) : Se[a] ? K(a, Se[a]) : Ee[a] ? Ee[a] : K(a, we(a, e[a]));
                },
                set: function(e, l, a) {
                    return e[l] = a, !0;
                }
            }) : (Object.keys(ce).forEach(function(e) {
                Tl[e] = ce[e];
            }), Object.keys(Se).forEach(function(e) {
                Tl[e] = K(e, Se[e]);
            }), Object.keys(Oe).forEach(function(e) {
                Tl[e] = K(e, Oe[e]);
            }), Object.keys(Ee).forEach(function(e) {
                Tl[e] = Ee[e];
            }), Object.keys(Be).forEach(function(e) {
                Tl[e] = K(e, Be[e]);
            }), Object.keys(e).forEach(function(l) {
                (S(e, l) || S(he, l)) && (Tl[l] = K(l, we(l, e[l])));
            })), e.createApp = Sl, e.createPage = El, e.createComponent = $l, e.createSubpackageApp = Ll, 
            e.createPlugin = Ml;
            var ql = Tl;
            l.default = ql;
        }).call(this, a("bc2e").default, a("c8ba"));
    },
    "5a43": function(e, l) {
        e.exports = function(e, l) {
            (null == l || l > e.length) && (l = e.length);
            for (var a = 0, t = new Array(l); a < l; a++) t[a] = e[a];
            return t;
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "5bc3": function(e, l, a) {
        var t = a("a395");
        function n(e, l) {
            for (var a = 0; a < l.length; a++) {
                var n = l[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, t(n.key), n);
            }
        }
        e.exports = function(e, l, a) {
            return l && n(e.prototype, l), a && n(e, a), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e;
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "5f47": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.queryTaskSigninRecord = l.queryTaskRecord = l.getActivityZoneInfo = l.earnTaskVpoints = l.completeVipDailyTaskVpoints = void 0, 
        a("0488");
        var t = a("9b31");
        l.getActivityZoneInfo = function(e) {
            return (0, t.requestPost)("/adPub/getActivityZoneInfo", e);
        }, l.queryTaskRecord = function(e) {
            return (0, t.requestPost)("/task/queryTaskRecord", e);
        }, l.queryTaskSigninRecord = function(e) {
            return (0, t.requestPost)("/taskSignin/queryTaskSigninRecord", e);
        }, l.earnTaskVpoints = function(e) {
            return (0, t.requestPost)("/task/earnTaskVpoints", e);
        }, l.completeVipDailyTaskVpoints = function(e) {
            return (0, t.requestPost)("/vipDailyTask/completeVipDailyTaskVpoints", e);
        };
    },
    "5f80": function(e) {
        e.exports = JSON.parse('{"uni-datetime-picker.selectDate":"选择日期","uni-datetime-picker.selectTime":"选择时间","uni-datetime-picker.selectDateTime":"选择日期时间","uni-datetime-picker.startDate":"开始日期","uni-datetime-picker.endDate":"结束日期","uni-datetime-picker.startTime":"开始时间","uni-datetime-picker.endTime":"结束时间","uni-datetime-picker.ok":"确定","uni-datetime-picker.clear":"清除","uni-datetime-picker.cancel":"取消","uni-datetime-picker.year":"年","uni-datetime-picker.month":"月","uni-calender.SUN":"日","uni-calender.MON":"一","uni-calender.TUE":"二","uni-calender.WED":"三","uni-calender.THU":"四","uni-calender.FRI":"五","uni-calender.SAT":"六","uni-calender.confirm":"确认"}');
    },
    "62e4": function(e, l) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), 
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l;
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i;
                }
            }), e.webpackPolyfill = 1), e;
        };
    },
    6365: function(e, l, a) {
        (function(e, l) {
            !function() {
                var a = new Date().getTime();
                e.onAppRoute(function(e) {
                    var n = e, r = getCurrentPages(), u = r[r.length - 1];
                    a = new Date().getTime(), function(e, n) {
                        var r = e, u = {}, o = "", i = r.__callPageLifeTime__;
                        r.__callPageLifeTime__ = function(e) {
                            if ("onShow" != e && "onReady" != e || (o = l.getStorageSync("beforePath")), "onHide" == e || "onUnload" == e) {
                                var r = new Date().getTime();
                                if (o = l.getStorageSync("beforePath"), l.setStorageSync("beforePath", this.route), 
                                u.beforePath = o, u.methodName = "onHide", u.timeStamp = a, u.options = n.query, 
                                u.path = n.path, u.duration = r - a, u.scene = getApp().globalData.scene, u.beforePath == u.path) return !1;
                                t(u);
                            }
                            i.apply(this, arguments);
                        };
                    }(u, n);
                });
                var t = function(e) {
                    if (console.log(e), "0" == getApp().globalData.commonStatus && getApp().globalData.projectServerName) {
                        var a = {}, t = [];
                        t.push(e), a.openid = getApp().globalData.openid || l.getStorageSync("openid").openid, 
                        a.userid = getApp().globalData.xcxOpenid || l.getStorageSync("xcxOpenid").xcxOpenid, 
                        a.appid = "wx1d5e0ffc015303ab", a.dataType = 0, a.methodList = t, a.serverName = getApp().globalData.projectServerName, 
                        console.log("postWeData", a), l.request({
                            url: "https://xcxact.vjifen.com/collect/reportLogData",
                            data: a,
                            method: "POST",
                            complete: function(e) {}
                        });
                    }
                };
            }();
        }).call(this, a("bc2e").default, a("543d").default);
    },
    "643a": function(e, l) {
        e.exports = function(e) {
            if (null == e) throw new TypeError("Cannot destructure " + e);
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "64da": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.provinceCode = l.projectServerName = void 0, l.projectServerName = "hebei", 
        l.provinceCode = "hbqp";
    },
    6613: function(e, l, a) {
        var t = a("5a43");
        e.exports = function(e, l) {
            if (e) {
                if ("string" == typeof e) return t(e, l);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? t(e, l) : void 0;
            }
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "66fd": function(l, a, t) {
        t.r(a), function(l) {
            var t = Object.freeze({});
            function n(e) {
                return null == e;
            }
            function r(e) {
                return null != e;
            }
            function u(e) {
                return !0 === e;
            }
            function o(l) {
                return "string" == typeof l || "number" == typeof l || "symbol" === e(l) || "boolean" == typeof l;
            }
            function i(l) {
                return null !== l && "object" === e(l);
            }
            var c = Object.prototype.toString;
            function s(e) {
                return "[object Object]" === c.call(e);
            }
            function v(e) {
                var l = parseFloat(String(e));
                return l >= 0 && Math.floor(l) === l && isFinite(e);
            }
            function b(e) {
                return r(e) && "function" == typeof e.then && "function" == typeof e.catch;
            }
            function f(e) {
                return null == e ? "" : Array.isArray(e) || s(e) && e.toString === c ? JSON.stringify(e, null, 2) : String(e);
            }
            function p(e) {
                var l = parseFloat(e);
                return isNaN(l) ? e : l;
            }
            function d(e, l) {
                for (var a = Object.create(null), t = e.split(","), n = 0; n < t.length; n++) a[t[n]] = !0;
                return l ? function(e) {
                    return a[e.toLowerCase()];
                } : function(e) {
                    return a[e];
                };
            }
            d("slot,component", !0);
            var g = d("key,ref,slot,slot-scope,is");
            function h(e, l) {
                if (e.length) {
                    var a = e.indexOf(l);
                    if (a > -1) return e.splice(a, 1);
                }
            }
            var m = Object.prototype.hasOwnProperty;
            function y(e, l) {
                return m.call(e, l);
            }
            function _(e) {
                var l = Object.create(null);
                return function(a) {
                    return l[a] || (l[a] = e(a));
                };
            }
            var x = /-(\w)/g, w = _(function(e) {
                return e.replace(x, function(e, l) {
                    return l ? l.toUpperCase() : "";
                });
            }), S = _(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }), A = /\B([A-Z])/g, O = _(function(e) {
                return e.replace(A, "-$1").toLowerCase();
            }), k = Function.prototype.bind ? function(e, l) {
                return e.bind(l);
            } : function(e, l) {
                function a(a) {
                    var t = arguments.length;
                    return t ? t > 1 ? e.apply(l, arguments) : e.call(l, a) : e.call(l);
                }
                return a._length = e.length, a;
            };
            function P(e, l) {
                l = l || 0;
                for (var a = e.length - l, t = new Array(a); a--; ) t[a] = e[a + l];
                return t;
            }
            function D(e, l) {
                for (var a in l) e[a] = l[a];
                return e;
            }
            function j(e) {
                for (var l = {}, a = 0; a < e.length; a++) e[a] && D(l, e[a]);
                return l;
            }
            function C(e, l, a) {}
            var E = function(e, l, a) {
                return !1;
            }, $ = function(e) {
                return e;
            };
            function L(e, l) {
                if (e === l) return !0;
                var a = i(e), t = i(l);
                if (!a || !t) return !a && !t && String(e) === String(l);
                try {
                    var n = Array.isArray(e), r = Array.isArray(l);
                    if (n && r) return e.length === l.length && e.every(function(e, a) {
                        return L(e, l[a]);
                    });
                    if (e instanceof Date && l instanceof Date) return e.getTime() === l.getTime();
                    if (n || r) return !1;
                    var u = Object.keys(e), o = Object.keys(l);
                    return u.length === o.length && u.every(function(a) {
                        return L(e[a], l[a]);
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }
            function M(e, l) {
                for (var a = 0; a < e.length; a++) if (L(e[a], l)) return a;
                return -1;
            }
            function T(e) {
                var l = !1;
                return function() {
                    l || (l = !0, e.apply(this, arguments));
                };
            }
            var q = [ "component", "directive", "filter" ], I = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], N = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: E,
                isReservedAttr: E,
                isUnknownElement: E,
                getTagNamespace: C,
                parsePlatformTagName: $,
                mustUseProp: E,
                async: !0,
                _lifecycleHooks: I
            };
            function U(e) {
                var l = (e + "").charCodeAt(0);
                return 36 === l || 95 === l;
            }
            function B(e, l, a, t) {
                Object.defineProperty(e, l, {
                    value: a,
                    enumerable: !!t,
                    writable: !0,
                    configurable: !0
                });
            }
            var z, R = new RegExp("[^" + /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source + ".$_\\d]"), F = "__proto__" in {}, V = "undefined" != typeof window, H = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, G = H && WXEnvironment.platform.toLowerCase(), W = V && window.navigator.userAgent.toLowerCase(), Z = W && /msie|trident/.test(W), J = (W && W.indexOf("msie 9.0"), 
            W && W.indexOf("edge/"), W && W.indexOf("android"), W && /iphone|ipad|ipod|ios/.test(W) || "ios" === G), K = (W && /chrome\/\d+/.test(W), 
            W && /phantomjs/.test(W), W && W.match(/firefox\/(\d+)/), {}.watch);
            if (V) try {
                var X = {};
                Object.defineProperty(X, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, X);
            } catch (e) {}
            var Y = function() {
                return void 0 === z && (z = !V && !H && void 0 !== l && l.process && "server" === l.process.env.VUE_ENV), 
                z;
            }, Q = V && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
            function ee(e) {
                return "function" == typeof e && /native code/.test(e.toString());
            }
            var le, ae = "undefined" != typeof Symbol && ee(Symbol) && "undefined" != typeof Reflect && ee(Reflect.ownKeys);
            le = "undefined" != typeof Set && ee(Set) ? Set : function() {
                function e() {
                    this.set = Object.create(null);
                }
                return e.prototype.has = function(e) {
                    return !0 === this.set[e];
                }, e.prototype.add = function(e) {
                    this.set[e] = !0;
                }, e.prototype.clear = function() {
                    this.set = Object.create(null);
                }, e;
            }();
            var te = C, ne = 0, re = function() {
                this.id = ne++, this.subs = [];
            };
            function ue(e) {
                re.SharedObject.targetStack.push(e), re.SharedObject.target = e, re.target = e;
            }
            function oe() {
                re.SharedObject.targetStack.pop(), re.SharedObject.target = re.SharedObject.targetStack[re.SharedObject.targetStack.length - 1], 
                re.target = re.SharedObject.target;
            }
            re.prototype.addSub = function(e) {
                this.subs.push(e);
            }, re.prototype.removeSub = function(e) {
                h(this.subs, e);
            }, re.prototype.depend = function() {
                re.SharedObject.target && re.SharedObject.target.addDep(this);
            }, re.prototype.notify = function() {
                for (var e = this.subs.slice(), l = 0, a = e.length; l < a; l++) e[l].update();
            }, (re.SharedObject = {}).target = null, re.SharedObject.targetStack = [];
            var ie = function(e, l, a, t, n, r, u, o) {
                this.tag = e, this.data = l, this.children = a, this.text = t, this.elm = n, this.ns = void 0, 
                this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = l && l.key, this.componentOptions = u, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, ce = {
                child: {
                    configurable: !0
                }
            };
            ce.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(ie.prototype, ce);
            var se = function(e) {
                void 0 === e && (e = "");
                var l = new ie();
                return l.text = e, l.isComment = !0, l;
            };
            function ve(e) {
                return new ie(void 0, void 0, void 0, String(e));
            }
            var be = Array.prototype, fe = Object.create(be);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(e) {
                var l = be[e];
                B(fe, e, function() {
                    for (var a = [], t = arguments.length; t--; ) a[t] = arguments[t];
                    var n, r = l.apply(this, a), u = this.__ob__;
                    switch (e) {
                      case "push":
                      case "unshift":
                        n = a;
                        break;

                      case "splice":
                        n = a.slice(2);
                    }
                    return n && u.observeArray(n), u.dep.notify(), r;
                });
            });
            var pe = Object.getOwnPropertyNames(fe), de = !0;
            function ge(e) {
                de = e;
            }
            var he = function(e) {
                this.value = e, this.dep = new re(), this.vmCount = 0, B(e, "__ob__", this), Array.isArray(e) ? (F ? e.push !== e.__proto__.push ? me(e, fe, pe) : function(e, l) {
                    e.__proto__ = l;
                }(e, fe) : me(e, fe, pe), this.observeArray(e)) : this.walk(e);
            };
            function me(e, l, a) {
                for (var t = 0, n = a.length; t < n; t++) {
                    var r = a[t];
                    B(e, r, l[r]);
                }
            }
            function ye(e, l) {
                var a;
                if (i(e) && !(e instanceof ie)) return y(e, "__ob__") && e.__ob__ instanceof he ? a = e.__ob__ : !de || Y() || !Array.isArray(e) && !s(e) || !Object.isExtensible(e) || e._isVue || e.__v_isMPComponent || (a = new he(e)), 
                l && a && a.vmCount++, a;
            }
            function _e(e, l, a, t, n) {
                var r = new re(), u = Object.getOwnPropertyDescriptor(e, l);
                if (!u || !1 !== u.configurable) {
                    var o = u && u.get, i = u && u.set;
                    o && !i || 2 !== arguments.length || (a = e[l]);
                    var c = !n && ye(a);
                    Object.defineProperty(e, l, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var l = o ? o.call(e) : a;
                            return re.SharedObject.target && (r.depend(), c && (c.dep.depend(), Array.isArray(l) && Se(l))), 
                            l;
                        },
                        set: function(l) {
                            var t = o ? o.call(e) : a;
                            l === t || l != l && t != t || o && !i || (i ? i.call(e, l) : a = l, c = !n && ye(l), 
                            r.notify());
                        }
                    });
                }
            }
            function xe(e, l, a) {
                if (Array.isArray(e) && v(l)) return e.length = Math.max(e.length, l), e.splice(l, 1, a), 
                a;
                if (l in e && !(l in Object.prototype)) return e[l] = a, a;
                var t = e.__ob__;
                return e._isVue || t && t.vmCount ? a : t ? (_e(t.value, l, a), t.dep.notify(), 
                a) : (e[l] = a, a);
            }
            function we(e, l) {
                if (Array.isArray(e) && v(l)) e.splice(l, 1); else {
                    var a = e.__ob__;
                    e._isVue || a && a.vmCount || y(e, l) && (delete e[l], a && a.dep.notify());
                }
            }
            function Se(e) {
                for (var l = void 0, a = 0, t = e.length; a < t; a++) (l = e[a]) && l.__ob__ && l.__ob__.dep.depend(), 
                Array.isArray(l) && Se(l);
            }
            he.prototype.walk = function(e) {
                for (var l = Object.keys(e), a = 0; a < l.length; a++) _e(e, l[a]);
            }, he.prototype.observeArray = function(e) {
                for (var l = 0, a = e.length; l < a; l++) ye(e[l]);
            };
            var Ae = N.optionMergeStrategies;
            function Oe(e, l) {
                if (!l) return e;
                for (var a, t, n, r = ae ? Reflect.ownKeys(l) : Object.keys(l), u = 0; u < r.length; u++) "__ob__" !== (a = r[u]) && (t = e[a], 
                n = l[a], y(e, a) ? t !== n && s(t) && s(n) && Oe(t, n) : xe(e, a, n));
                return e;
            }
            function ke(e, l, a) {
                return a ? function() {
                    var t = "function" == typeof l ? l.call(a, a) : l, n = "function" == typeof e ? e.call(a, a) : e;
                    return t ? Oe(t, n) : n;
                } : l ? e ? function() {
                    return Oe("function" == typeof l ? l.call(this, this) : l, "function" == typeof e ? e.call(this, this) : e);
                } : l : e;
            }
            function Pe(e, l) {
                var a = l ? e ? e.concat(l) : Array.isArray(l) ? l : [ l ] : e;
                return a ? function(e) {
                    for (var l = [], a = 0; a < e.length; a++) -1 === l.indexOf(e[a]) && l.push(e[a]);
                    return l;
                }(a) : a;
            }
            function De(e, l, a, t) {
                var n = Object.create(e || null);
                return l ? D(n, l) : n;
            }
            Ae.data = function(e, l, a) {
                return a ? ke(e, l, a) : l && "function" != typeof l ? e : ke(e, l);
            }, I.forEach(function(e) {
                Ae[e] = Pe;
            }), q.forEach(function(e) {
                Ae[e + "s"] = De;
            }), Ae.watch = function(e, l, a, t) {
                if (e === K && (e = void 0), l === K && (l = void 0), !l) return Object.create(e || null);
                if (!e) return l;
                var n = {};
                for (var r in D(n, e), l) {
                    var u = n[r], o = l[r];
                    u && !Array.isArray(u) && (u = [ u ]), n[r] = u ? u.concat(o) : Array.isArray(o) ? o : [ o ];
                }
                return n;
            }, Ae.props = Ae.methods = Ae.inject = Ae.computed = function(e, l, a, t) {
                if (!e) return l;
                var n = Object.create(null);
                return D(n, e), l && D(n, l), n;
            }, Ae.provide = ke;
            var je = function(e, l) {
                return void 0 === l ? e : l;
            };
            function Ce(e, l, a) {
                if ("function" == typeof l && (l = l.options), function(e, l) {
                    var a = e.props;
                    if (a) {
                        var t, n, r = {};
                        if (Array.isArray(a)) for (t = a.length; t--; ) "string" == typeof (n = a[t]) && (r[w(n)] = {
                            type: null
                        }); else if (s(a)) for (var u in a) n = a[u], r[w(u)] = s(n) ? n : {
                            type: n
                        };
                        e.props = r;
                    }
                }(l), function(e, l) {
                    var a = e.inject;
                    if (a) {
                        var t = e.inject = {};
                        if (Array.isArray(a)) for (var n = 0; n < a.length; n++) t[a[n]] = {
                            from: a[n]
                        }; else if (s(a)) for (var r in a) {
                            var u = a[r];
                            t[r] = s(u) ? D({
                                from: r
                            }, u) : {
                                from: u
                            };
                        }
                    }
                }(l), function(e) {
                    var l = e.directives;
                    if (l) for (var a in l) {
                        var t = l[a];
                        "function" == typeof t && (l[a] = {
                            bind: t,
                            update: t
                        });
                    }
                }(l), !l._base && (l.extends && (e = Ce(e, l.extends, a)), l.mixins)) for (var t = 0, n = l.mixins.length; t < n; t++) e = Ce(e, l.mixins[t], a);
                var r, u = {};
                for (r in e) o(r);
                for (r in l) y(e, r) || o(r);
                function o(t) {
                    var n = Ae[t] || je;
                    u[t] = n(e[t], l[t], a, t);
                }
                return u;
            }
            function Ee(e, l, a, t) {
                if ("string" == typeof a) {
                    var n = e[l];
                    if (y(n, a)) return n[a];
                    var r = w(a);
                    if (y(n, r)) return n[r];
                    var u = S(r);
                    return y(n, u) ? n[u] : n[a] || n[r] || n[u];
                }
            }
            function $e(e, l, a, t) {
                var n = l[e], r = !y(a, e), u = a[e], o = Te(Boolean, n.type);
                if (o > -1) if (r && !y(n, "default")) u = !1; else if ("" === u || u === O(e)) {
                    var i = Te(String, n.type);
                    (i < 0 || o < i) && (u = !0);
                }
                if (void 0 === u) {
                    u = function(e, l, a) {
                        if (y(l, "default")) {
                            var t = l.default;
                            return e && e.$options.propsData && void 0 === e.$options.propsData[a] && void 0 !== e._props[a] ? e._props[a] : "function" == typeof t && "Function" !== Le(l.type) ? t.call(e) : t;
                        }
                    }(t, n, e);
                    var c = de;
                    ge(!0), ye(u), ge(c);
                }
                return u;
            }
            function Le(e) {
                var l = e && e.toString().match(/^\s*function (\w+)/);
                return l ? l[1] : "";
            }
            function Me(e, l) {
                return Le(e) === Le(l);
            }
            function Te(e, l) {
                if (!Array.isArray(l)) return Me(l, e) ? 0 : -1;
                for (var a = 0, t = l.length; a < t; a++) if (Me(l[a], e)) return a;
                return -1;
            }
            function qe(e, l, a) {
                ue();
                try {
                    if (l) for (var t = l; t = t.$parent; ) {
                        var n = t.$options.errorCaptured;
                        if (n) for (var r = 0; r < n.length; r++) try {
                            if (!1 === n[r].call(t, e, l, a)) return;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            Ne(e, t, "errorCaptured hook");
                        }
                    }
                    Ne(e, l, a);
                } finally {
                    oe();
                }
            }
            function Ie(e, l, a, t, n) {
                var r;
                try {
                    (r = a ? e.apply(l, a) : e.call(l)) && !r._isVue && b(r) && !r._handled && (r.catch(function(e) {
                        return qe(e, t, n + " (Promise/async)");
                    }), r._handled = !0);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    qe(e, t, n);
                }
                return r;
            }
            function Ne(e, l, a) {
                if (N.errorHandler) try {
                    return N.errorHandler.call(null, e, l, a);
                } catch (l) {
                    l = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(l);
                    l !== e && Ue(l, null, "config.errorHandler");
                }
                Ue(e, l, a);
            }
            function Ue(e, l, a) {
                if (!V && !H || "undefined" == typeof console) throw e;
                console.error(e);
            }
            var Be, ze = [], Re = !1;
            function Fe() {
                Re = !1;
                var e = ze.slice(0);
                ze.length = 0;
                for (var l = 0; l < e.length; l++) e[l]();
            }
            if ("undefined" != typeof Promise && ee(Promise)) {
                var Ve = Promise.resolve();
                Be = function() {
                    Ve.then(Fe), J && setTimeout(C);
                };
            } else if (Z || "undefined" == typeof MutationObserver || !ee(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Be = "undefined" != typeof setImmediate && ee(setImmediate) ? function() {
                setImmediate(Fe);
            } : function() {
                setTimeout(Fe, 0);
            }; else {
                var He = 1, Ge = new MutationObserver(Fe), We = document.createTextNode(String(He));
                Ge.observe(We, {
                    characterData: !0
                }), Be = function() {
                    He = (He + 1) % 2, We.data = String(He);
                };
            }
            function Ze(e, l) {
                var a;
                if (ze.push(function() {
                    if (e) try {
                        e.call(l);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        qe(e, l, "nextTick");
                    } else a && a(l);
                }), Re || (Re = !0, Be()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                    a = e;
                });
            }
            var Je = new le();
            function Ke(e) {
                (function e(l, a) {
                    var t, n, r = Array.isArray(l);
                    if (!(!r && !i(l) || Object.isFrozen(l) || l instanceof ie)) {
                        if (l.__ob__) {
                            var u = l.__ob__.dep.id;
                            if (a.has(u)) return;
                            a.add(u);
                        }
                        if (r) for (t = l.length; t--; ) e(l[t], a); else for (t = (n = Object.keys(l)).length; t--; ) e(l[n[t]], a);
                    }
                })(e, Je), Je.clear();
            }
            var Xe = _(function(e) {
                var l = "&" === e.charAt(0), a = "~" === (e = l ? e.slice(1) : e).charAt(0), t = "!" === (e = a ? e.slice(1) : e).charAt(0);
                return {
                    name: e = t ? e.slice(1) : e,
                    once: a,
                    capture: t,
                    passive: l
                };
            });
            function Ye(e, l) {
                function a() {
                    var e = arguments, t = a.fns;
                    if (!Array.isArray(t)) return Ie(t, null, arguments, l, "v-on handler");
                    for (var n = t.slice(), r = 0; r < n.length; r++) Ie(n[r], null, e, l, "v-on handler");
                }
                return a.fns = e, a;
            }
            function Qe(e, l, a, t) {
                var u = l.options.mpOptions && l.options.mpOptions.properties;
                if (n(u)) return a;
                var o = l.options.mpOptions.externalClasses || [], i = e.attrs, c = e.props;
                if (r(i) || r(c)) for (var s in u) {
                    var v = O(s);
                    (el(a, c, s, v, !0) || el(a, i, s, v, !1)) && a[s] && -1 !== o.indexOf(v) && t[w(a[s])] && (a[s] = t[w(a[s])]);
                }
                return a;
            }
            function el(e, l, a, t, n) {
                if (r(l)) {
                    if (y(l, a)) return e[a] = l[a], n || delete l[a], !0;
                    if (y(l, t)) return e[a] = l[t], n || delete l[t], !0;
                }
                return !1;
            }
            function ll(e) {
                return o(e) ? [ ve(e) ] : Array.isArray(e) ? function e(l, a) {
                    var t, i, c, s, v = [];
                    for (t = 0; t < l.length; t++) n(i = l[t]) || "boolean" == typeof i || (s = v[c = v.length - 1], 
                    Array.isArray(i) ? i.length > 0 && (al((i = e(i, (a || "") + "_" + t))[0]) && al(s) && (v[c] = ve(s.text + i[0].text), 
                    i.shift()), v.push.apply(v, i)) : o(i) ? al(s) ? v[c] = ve(s.text + i) : "" !== i && v.push(ve(i)) : al(i) && al(s) ? v[c] = ve(s.text + i.text) : (u(l._isVList) && r(i.tag) && n(i.key) && r(a) && (i.key = "__vlist" + a + "_" + t + "__"), 
                    v.push(i)));
                    return v;
                }(e) : void 0;
            }
            function al(e) {
                return r(e) && r(e.text) && function(e) {
                    return !1 === e;
                }(e.isComment);
            }
            function tl(e) {
                var l = e.$options.provide;
                l && (e._provided = "function" == typeof l ? l.call(e) : l);
            }
            function nl(e) {
                var l = rl(e.$options.inject, e);
                l && (ge(!1), Object.keys(l).forEach(function(a) {
                    _e(e, a, l[a]);
                }), ge(!0));
            }
            function rl(e, l) {
                if (e) {
                    for (var a = Object.create(null), t = ae ? Reflect.ownKeys(e) : Object.keys(e), n = 0; n < t.length; n++) {
                        var r = t[n];
                        if ("__ob__" !== r) {
                            for (var u = e[r].from, o = l; o; ) {
                                if (o._provided && y(o._provided, u)) {
                                    a[r] = o._provided[u];
                                    break;
                                }
                                o = o.$parent;
                            }
                            if (!o && "default" in e[r]) {
                                var i = e[r].default;
                                a[r] = "function" == typeof i ? i.call(l) : i;
                            }
                        }
                    }
                    return a;
                }
            }
            function ul(e, l) {
                if (!e || !e.length) return {};
                for (var a = {}, t = 0, n = e.length; t < n; t++) {
                    var r = e[t], u = r.data;
                    if (u && u.attrs && u.attrs.slot && delete u.attrs.slot, r.context !== l && r.fnContext !== l || !u || null == u.slot) r.asyncMeta && r.asyncMeta.data && "page" === r.asyncMeta.data.slot ? (a.page || (a.page = [])).push(r) : (a.default || (a.default = [])).push(r); else {
                        var o = u.slot, i = a[o] || (a[o] = []);
                        "template" === r.tag ? i.push.apply(i, r.children || []) : i.push(r);
                    }
                }
                for (var c in a) a[c].every(ol) && delete a[c];
                return a;
            }
            function ol(e) {
                return e.isComment && !e.asyncFactory || " " === e.text;
            }
            function il(e, l, a) {
                var n, r = Object.keys(l).length > 0, u = e ? !!e.$stable : !r, o = e && e.$key;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (u && a && a !== t && o === a.$key && !r && !a.$hasNormal) return a;
                    for (var i in n = {}, e) e[i] && "$" !== i[0] && (n[i] = cl(l, i, e[i]));
                } else n = {};
                for (var c in l) c in n || (n[c] = sl(l, c));
                return e && Object.isExtensible(e) && (e._normalized = n), B(n, "$stable", u), B(n, "$key", o), 
                B(n, "$hasNormal", r), n;
            }
            function cl(l, a, t) {
                var n = function() {
                    var l = arguments.length ? t.apply(null, arguments) : t({});
                    return (l = l && "object" === e(l) && !Array.isArray(l) ? [ l ] : ll(l)) && (0 === l.length || 1 === l.length && l[0].isComment) ? void 0 : l;
                };
                return t.proxy && Object.defineProperty(l, a, {
                    get: n,
                    enumerable: !0,
                    configurable: !0
                }), n;
            }
            function sl(e, l) {
                return function() {
                    return e[l];
                };
            }
            function vl(e, l) {
                var a, t, n, u, o;
                if (Array.isArray(e) || "string" == typeof e) for (a = new Array(e.length), t = 0, 
                n = e.length; t < n; t++) a[t] = l(e[t], t, t, t); else if ("number" == typeof e) for (a = new Array(e), 
                t = 0; t < e; t++) a[t] = l(t + 1, t, t, t); else if (i(e)) if (ae && e[Symbol.iterator]) {
                    a = [];
                    for (var c = e[Symbol.iterator](), s = c.next(); !s.done; ) a.push(l(s.value, a.length, t, t++)), 
                    s = c.next();
                } else for (u = Object.keys(e), a = new Array(u.length), t = 0, n = u.length; t < n; t++) o = u[t], 
                a[t] = l(e[o], o, t, t);
                return r(a) || (a = []), a._isVList = !0, a;
            }
            function bl(e, l, a, t) {
                var n, r = this.$scopedSlots[e];
                r ? (a = a || {}, t && (a = D(D({}, t), a)), n = r(a, this, a._i) || l) : n = this.$slots[e] || l;
                var u = a && a.slot;
                return u ? this.$createElement("template", {
                    slot: u
                }, n) : n;
            }
            function fl(e) {
                return Ee(this.$options, "filters", e) || $;
            }
            function pl(e, l) {
                return Array.isArray(e) ? -1 === e.indexOf(l) : e !== l;
            }
            function dl(e, l, a, t, n) {
                var r = N.keyCodes[l] || a;
                return n && t && !N.keyCodes[l] ? pl(n, t) : r ? pl(r, e) : t ? O(t) !== l : void 0;
            }
            function gl(e, l, a, t, n) {
                if (a && i(a)) {
                    var r;
                    Array.isArray(a) && (a = j(a));
                    var u = function(u) {
                        if ("class" === u || "style" === u || g(u)) r = e; else {
                            var o = e.attrs && e.attrs.type;
                            r = t || N.mustUseProp(l, o, u) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                        }
                        var i = w(u), c = O(u);
                        i in r || c in r || (r[u] = a[u], !n) || ((e.on || (e.on = {}))["update:" + u] = function(e) {
                            a[u] = e;
                        });
                    };
                    for (var o in a) u(o);
                }
                return e;
            }
            function hl(e, l) {
                var a = this._staticTrees || (this._staticTrees = []), t = a[e];
                return t && !l || yl(t = a[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), 
                t;
            }
            function ml(e, l, a) {
                return yl(e, "__once__" + l + (a ? "_" + a : ""), !0), e;
            }
            function yl(e, l, a) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) e[t] && "string" != typeof e[t] && _l(e[t], l + "_" + t, a); else _l(e, l, a);
            }
            function _l(e, l, a) {
                e.isStatic = !0, e.key = l, e.isOnce = a;
            }
            function xl(e, l) {
                if (l && s(l)) {
                    var a = e.on = e.on ? D({}, e.on) : {};
                    for (var t in l) {
                        var n = a[t], r = l[t];
                        a[t] = n ? [].concat(n, r) : r;
                    }
                }
                return e;
            }
            function wl(e, l, a, t) {
                l = l || {
                    $stable: !a
                };
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    Array.isArray(r) ? wl(r, l, a) : r && (r.proxy && (r.fn.proxy = !0), l[r.key] = r.fn);
                }
                return t && (l.$key = t), l;
            }
            function Sl(e, l) {
                for (var a = 0; a < l.length; a += 2) {
                    var t = l[a];
                    "string" == typeof t && t && (e[l[a]] = l[a + 1]);
                }
                return e;
            }
            function Al(e, l) {
                return "string" == typeof e ? l + e : e;
            }
            function Ol(e) {
                e._o = ml, e._n = p, e._s = f, e._l = vl, e._t = bl, e._q = L, e._i = M, e._m = hl, 
                e._f = fl, e._k = dl, e._b = gl, e._v = ve, e._e = se, e._u = wl, e._g = xl, e._d = Sl, 
                e._p = Al;
            }
            function kl(e, l, a, n, r) {
                var o, i = this, c = r.options;
                y(n, "_uid") ? (o = Object.create(n))._original = n : (o = n, n = n._original);
                var s = u(c._compiled), v = !s;
                this.data = e, this.props = l, this.children = a, this.parent = n, this.listeners = e.on || t, 
                this.injections = rl(c.inject, n), this.slots = function() {
                    return i.$slots || il(e.scopedSlots, i.$slots = ul(a, n)), i.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return il(e.scopedSlots, this.slots());
                    }
                }), s && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = il(e.scopedSlots, this.$slots)), 
                c._scopeId ? this._c = function(e, l, a, t) {
                    var r = Ll(o, e, l, a, t, v);
                    return r && !Array.isArray(r) && (r.fnScopeId = c._scopeId, r.fnContext = n), r;
                } : this._c = function(e, l, a, t) {
                    return Ll(o, e, l, a, t, v);
                };
            }
            function Pl(e, l, a, t, n) {
                var r = function(e) {
                    var l = new ie(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                    return l.ns = e.ns, l.isStatic = e.isStatic, l.key = e.key, l.isComment = e.isComment, 
                    l.fnContext = e.fnContext, l.fnOptions = e.fnOptions, l.fnScopeId = e.fnScopeId, 
                    l.asyncMeta = e.asyncMeta, l.isCloned = !0, l;
                }(e);
                return r.fnContext = a, r.fnOptions = t, l.slot && ((r.data || (r.data = {})).slot = l.slot), 
                r;
            }
            function Dl(e, l) {
                for (var a in l) e[w(a)] = l[a];
            }
            Ol(kl.prototype);
            var jl = {
                init: function(e, l) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var a = e;
                        jl.prepatch(a, a);
                    } else {
                        (e.componentInstance = function(e, l) {
                            var a = {
                                _isComponent: !0,
                                _parentVnode: e,
                                parent: l
                            }, t = e.data.inlineTemplate;
                            return r(t) && (a.render = t.render, a.staticRenderFns = t.staticRenderFns), new e.componentOptions.Ctor(a);
                        }(e, Rl)).$mount(l ? e.elm : void 0, l);
                    }
                },
                prepatch: function(e, l) {
                    var a = l.componentOptions;
                    !function(e, l, a, n, r) {
                        var u = n.data.scopedSlots, o = e.$scopedSlots, i = !!(u && !u.$stable || o !== t && !o.$stable || u && e.$scopedSlots.$key !== u.$key), c = !!(r || e.$options._renderChildren || i);
                        if (e.$options._parentVnode = n, e.$vnode = n, e._vnode && (e._vnode.parent = n), 
                        e.$options._renderChildren = r, e.$attrs = n.data.attrs || t, e.$listeners = a || t, 
                        l && e.$options.props) {
                            ge(!1);
                            for (var s = e._props, v = e.$options._propKeys || [], b = 0; b < v.length; b++) {
                                var f = v[b], p = e.$options.props;
                                s[f] = $e(f, p, l, e);
                            }
                            ge(!0), e.$options.propsData = l;
                        }
                        e._$updateProperties && e._$updateProperties(e), a = a || t;
                        var d = e.$options._parentListeners;
                        e.$options._parentListeners = a, zl(e, a, d), c && (e.$slots = ul(r, n.context), 
                        e.$forceUpdate());
                    }(l.componentInstance = e.componentInstance, a.propsData, a.listeners, l, a.children);
                },
                insert: function(e) {
                    var l = e.context, a = e.componentInstance;
                    a._isMounted || (Hl(a, "onServiceCreated"), Hl(a, "onServiceAttached"), a._isMounted = !0, 
                    Hl(a, "mounted")), e.data.keepAlive && (l._isMounted ? function(e) {
                        e._inactive = !1, Wl.push(e);
                    }(a) : Vl(a, !0));
                },
                destroy: function(e) {
                    var l = e.componentInstance;
                    l._isDestroyed || (e.data.keepAlive ? function e(l, a) {
                        if (!(a && (l._directInactive = !0, Fl(l)) || l._inactive)) {
                            l._inactive = !0;
                            for (var t = 0; t < l.$children.length; t++) e(l.$children[t]);
                            Hl(l, "deactivated");
                        }
                    }(l, !0) : l.$destroy());
                }
            }, Cl = Object.keys(jl);
            function El(e, l, a, o, c) {
                if (!n(e)) {
                    var s = a.$options._base;
                    if (i(e) && (e = s.extend(e)), "function" == typeof e) {
                        var v;
                        if (n(e.cid) && void 0 === (e = function(e, l) {
                            if (u(e.error) && r(e.errorComp)) return e.errorComp;
                            if (r(e.resolved)) return e.resolved;
                            var a = Tl;
                            if (a && r(e.owners) && -1 === e.owners.indexOf(a) && e.owners.push(a), u(e.loading) && r(e.loadingComp)) return e.loadingComp;
                            if (a && !r(e.owners)) {
                                var t = e.owners = [ a ], o = !0, c = null, s = null;
                                a.$on("hook:destroyed", function() {
                                    return h(t, a);
                                });
                                var v = function(e) {
                                    for (var l = 0, a = t.length; l < a; l++) t[l].$forceUpdate();
                                    e && (t.length = 0, null !== c && (clearTimeout(c), c = null), null !== s && (clearTimeout(s), 
                                    s = null));
                                }, f = T(function(a) {
                                    e.resolved = ql(a, l), o ? t.length = 0 : v(!0);
                                }), p = T(function(l) {
                                    r(e.errorComp) && (e.error = !0, v(!0));
                                }), d = e(f, p);
                                return i(d) && (b(d) ? n(e.resolved) && d.then(f, p) : b(d.component) && (d.component.then(f, p), 
                                r(d.error) && (e.errorComp = ql(d.error, l)), r(d.loading) && (e.loadingComp = ql(d.loading, l), 
                                0 === d.delay ? e.loading = !0 : c = setTimeout(function() {
                                    c = null, n(e.resolved) && n(e.error) && (e.loading = !0, v(!1));
                                }, d.delay || 200)), r(d.timeout) && (s = setTimeout(function() {
                                    s = null, n(e.resolved) && p(null);
                                }, d.timeout)))), o = !1, e.loading ? e.loadingComp : e.resolved;
                            }
                        }(v = e, s))) return function(e, l, a, t, n) {
                            var r = se();
                            return r.asyncFactory = e, r.asyncMeta = {
                                data: l,
                                context: a,
                                children: t,
                                tag: n
                            }, r;
                        }(v, l, a, o, c);
                        l = l || {}, va(e), r(l.model) && function(e, l) {
                            var a = e.model && e.model.prop || "value", t = e.model && e.model.event || "input";
                            (l.attrs || (l.attrs = {}))[a] = l.model.value;
                            var n = l.on || (l.on = {}), u = n[t], o = l.model.callback;
                            r(u) ? (Array.isArray(u) ? -1 === u.indexOf(o) : u !== o) && (n[t] = [ o ].concat(u)) : n[t] = o;
                        }(e.options, l);
                        var f = function(e, l, a, t) {
                            var u = l.options.props;
                            if (n(u)) return Qe(e, l, {}, t);
                            var o = {}, i = e.attrs, c = e.props;
                            if (r(i) || r(c)) for (var s in u) {
                                var v = O(s);
                                el(o, c, s, v, !0) || el(o, i, s, v, !1);
                            }
                            return Qe(e, l, o, t);
                        }(l, e, 0, a);
                        if (u(e.options.functional)) return function(e, l, a, n, u) {
                            var o = e.options, i = {}, c = o.props;
                            if (r(c)) for (var s in c) i[s] = $e(s, c, l || t); else r(a.attrs) && Dl(i, a.attrs), 
                            r(a.props) && Dl(i, a.props);
                            var v = new kl(a, i, u, n, e), b = o.render.call(null, v._c, v);
                            if (b instanceof ie) return Pl(b, a, v.parent, o);
                            if (Array.isArray(b)) {
                                for (var f = ll(b) || [], p = new Array(f.length), d = 0; d < f.length; d++) p[d] = Pl(f[d], a, v.parent, o);
                                return p;
                            }
                        }(e, f, l, a, o);
                        var p = l.on;
                        if (l.on = l.nativeOn, u(e.options.abstract)) {
                            var d = l.slot;
                            l = {}, d && (l.slot = d);
                        }
                        !function(e) {
                            for (var l = e.hook || (e.hook = {}), a = 0; a < Cl.length; a++) {
                                var t = Cl[a], n = l[t], r = jl[t];
                                n === r || n && n._merged || (l[t] = n ? $l(r, n) : r);
                            }
                        }(l);
                        var g = e.options.name || c;
                        return new ie("vue-component-" + e.cid + (g ? "-" + g : ""), l, void 0, void 0, void 0, a, {
                            Ctor: e,
                            propsData: f,
                            listeners: p,
                            tag: c,
                            children: o
                        }, v);
                    }
                }
            }
            function $l(e, l) {
                var a = function(a, t) {
                    e(a, t), l(a, t);
                };
                return a._merged = !0, a;
            }
            function Ll(e, l, a, t, c, s) {
                return (Array.isArray(a) || o(a)) && (c = t, t = a, a = void 0), u(s) && (c = 2), 
                function(e, l, a, t, o) {
                    if (r(a) && r(a.__ob__)) return se();
                    if (r(a) && r(a.is) && (l = a.is), !l) return se();
                    var c, s, v;
                    (Array.isArray(t) && "function" == typeof t[0] && ((a = a || {}).scopedSlots = {
                        default: t[0]
                    }, t.length = 0), 2 === o ? t = ll(t) : 1 === o && (t = function(e) {
                        for (var l = 0; l < e.length; l++) if (Array.isArray(e[l])) return Array.prototype.concat.apply([], e);
                        return e;
                    }(t)), "string" == typeof l) ? (s = e.$vnode && e.$vnode.ns || N.getTagNamespace(l), 
                    c = N.isReservedTag(l) ? new ie(N.parsePlatformTagName(l), a, t, void 0, void 0, e) : a && a.pre || !r(v = Ee(e.$options, "components", l)) ? new ie(l, a, t, void 0, void 0, e) : El(v, a, e, t, l)) : c = El(l, a, e, t);
                    return Array.isArray(c) ? c : r(c) ? (r(s) && function e(l, a, t) {
                        if (l.ns = a, "foreignObject" === l.tag && (a = void 0, t = !0), r(l.children)) for (var o = 0, i = l.children.length; o < i; o++) {
                            var c = l.children[o];
                            r(c.tag) && (n(c.ns) || u(t) && "svg" !== c.tag) && e(c, a, t);
                        }
                    }(c, s), r(a) && function(e) {
                        i(e.style) && Ke(e.style), i(e.class) && Ke(e.class);
                    }(a), c) : se();
                }(e, l, a, t, c);
            }
            var Ml, Tl = null;
            function ql(e, l) {
                return (e.__esModule || ae && "Module" === e[Symbol.toStringTag]) && (e = e.default), 
                i(e) ? l.extend(e) : e;
            }
            function Il(e) {
                return e.isComment && e.asyncFactory;
            }
            function Nl(e, l) {
                Ml.$on(e, l);
            }
            function Ul(e, l) {
                Ml.$off(e, l);
            }
            function Bl(e, l) {
                var a = Ml;
                return function t() {
                    var n = l.apply(null, arguments);
                    null !== n && a.$off(e, t);
                };
            }
            function zl(e, l, a) {
                Ml = e, function(e, l, a, t, r, o) {
                    var i, c, s, v;
                    for (i in e) c = e[i], s = l[i], v = Xe(i), n(c) || (n(s) ? (n(c.fns) && (c = e[i] = Ye(c, o)), 
                    u(v.once) && (c = e[i] = r(v.name, c, v.capture)), a(v.name, c, v.capture, v.passive, v.params)) : c !== s && (s.fns = c, 
                    e[i] = s));
                    for (i in l) n(e[i]) && t((v = Xe(i)).name, l[i], v.capture);
                }(l, a || {}, Nl, Ul, Bl, e), Ml = void 0;
            }
            var Rl = null;
            function Fl(e) {
                for (;e && (e = e.$parent); ) if (e._inactive) return !0;
                return !1;
            }
            function Vl(e, l) {
                if (l) {
                    if (e._directInactive = !1, Fl(e)) return;
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var a = 0; a < e.$children.length; a++) Vl(e.$children[a]);
                    Hl(e, "activated");
                }
            }
            function Hl(e, l) {
                ue();
                var a = e.$options[l], t = l + " hook";
                if (a) for (var n = 0, r = a.length; n < r; n++) Ie(a[n], e, null, e, t);
                e._hasHookEvent && e.$emit("hook:" + l), oe();
            }
            var Gl = [], Wl = [], Zl = {}, Jl = !1, Kl = !1, Xl = 0, Yl = Date.now;
            if (V && !Z) {
                var Ql = window.performance;
                Ql && "function" == typeof Ql.now && Yl() > document.createEvent("Event").timeStamp && (Yl = function() {
                    return Ql.now();
                });
            }
            function ea() {
                var e, l;
                for (Yl(), Kl = !0, Gl.sort(function(e, l) {
                    return e.id - l.id;
                }), Xl = 0; Xl < Gl.length; Xl++) (e = Gl[Xl]).before && e.before(), l = e.id, Zl[l] = null, 
                e.run();
                var a = Wl.slice(), t = Gl.slice();
                Xl = Gl.length = Wl.length = 0, Zl = {}, Jl = Kl = !1, function(e) {
                    for (var l = 0; l < e.length; l++) e[l]._inactive = !0, Vl(e[l], !0);
                }(a), function(e) {
                    for (var l = e.length; l--; ) {
                        var a = e[l], t = a.vm;
                        t._watcher === a && t._isMounted && !t._isDestroyed && Hl(t, "updated");
                    }
                }(t), Q && N.devtools && Q.emit("flush");
            }
            var la = 0, aa = function(e, l, a, t, n) {
                this.vm = e, n && (e._watcher = this), e._watchers.push(this), t ? (this.deep = !!t.deep, 
                this.user = !!t.user, this.lazy = !!t.lazy, this.sync = !!t.sync, this.before = t.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = a, this.id = ++la, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new le(), this.newDepIds = new le(), this.expression = "", 
                "function" == typeof l ? this.getter = l : (this.getter = function(e) {
                    if (!R.test(e)) {
                        var l = e.split(".");
                        return function(e) {
                            for (var a = 0; a < l.length; a++) {
                                if (!e) return;
                                e = e[l[a]];
                            }
                            return e;
                        };
                    }
                }(l), this.getter || (this.getter = C)), this.value = this.lazy ? void 0 : this.get();
            };
            aa.prototype.get = function() {
                var e;
                ue(this);
                var l = this.vm;
                try {
                    e = this.getter.call(l, l);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    if (!this.user) throw e;
                    qe(e, l, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && Ke(e), oe(), this.cleanupDeps();
                }
                return e;
            }, aa.prototype.addDep = function(e) {
                var l = e.id;
                this.newDepIds.has(l) || (this.newDepIds.add(l), this.newDeps.push(e), this.depIds.has(l) || e.addSub(this));
            }, aa.prototype.cleanupDeps = function() {
                for (var e = this.deps.length; e--; ) {
                    var l = this.deps[e];
                    this.newDepIds.has(l.id) || l.removeSub(this);
                }
                var a = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = a, this.newDepIds.clear(), a = this.deps, 
                this.deps = this.newDeps, this.newDeps = a, this.newDeps.length = 0;
            }, aa.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
                    var l = e.id;
                    if (null == Zl[l]) {
                        if (Zl[l] = !0, Kl) {
                            for (var a = Gl.length - 1; a > Xl && Gl[a].id > e.id; ) a--;
                            Gl.splice(a + 1, 0, e);
                        } else Gl.push(e);
                        Jl || (Jl = !0, Ze(ea));
                    }
                }(this);
            }, aa.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || i(e) || this.deep) {
                        var l = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, l);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            qe(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, e, l);
                    }
                }
            }, aa.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, aa.prototype.depend = function() {
                for (var e = this.deps.length; e--; ) this.deps[e].depend();
            }, aa.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || h(this.vm._watchers, this);
                    for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
                    this.active = !1;
                }
            };
            var ta = {
                enumerable: !0,
                configurable: !0,
                get: C,
                set: C
            };
            function na(e, l, a) {
                ta.get = function() {
                    return this[l][a];
                }, ta.set = function(e) {
                    this[l][a] = e;
                }, Object.defineProperty(e, a, ta);
            }
            var ra = {
                lazy: !0
            };
            function ua(e, l, a) {
                var t = !Y();
                "function" == typeof a ? (ta.get = t ? oa(l) : ia(a), ta.set = C) : (ta.get = a.get ? t && !1 !== a.cache ? oa(l) : ia(a.get) : C, 
                ta.set = a.set || C), Object.defineProperty(e, l, ta);
            }
            function oa(e) {
                return function() {
                    var l = this._computedWatchers && this._computedWatchers[e];
                    if (l) return l.dirty && l.evaluate(), re.SharedObject.target && l.depend(), l.value;
                };
            }
            function ia(e) {
                return function() {
                    return e.call(this, this);
                };
            }
            function ca(e, l, a, t) {
                return s(a) && (t = a, a = a.handler), "string" == typeof a && (a = e[a]), e.$watch(l, a, t);
            }
            var sa = 0;
            function va(e) {
                var l = e.options;
                if (e.super) {
                    var a = va(e.super);
                    if (a !== e.superOptions) {
                        e.superOptions = a;
                        var t = function(e) {
                            var l, a = e.options, t = e.sealedOptions;
                            for (var n in a) a[n] !== t[n] && (l || (l = {}), l[n] = a[n]);
                            return l;
                        }(e);
                        t && D(e.extendOptions, t), (l = e.options = Ce(a, e.extendOptions)).name && (l.components[l.name] = e);
                    }
                }
                return l;
            }
            function ba(e) {
                this._init(e);
            }
            function fa(e) {
                return e && (e.Ctor.options.name || e.tag);
            }
            function pa(e, l) {
                return Array.isArray(e) ? e.indexOf(l) > -1 : "string" == typeof e ? e.split(",").indexOf(l) > -1 : !!function(e) {
                    return "[object RegExp]" === c.call(e);
                }(e) && e.test(l);
            }
            function da(e, l) {
                var a = e.cache, t = e.keys, n = e._vnode;
                for (var r in a) {
                    var u = a[r];
                    if (u) {
                        var o = fa(u.componentOptions);
                        o && !l(o) && ga(a, r, t, n);
                    }
                }
            }
            function ga(e, l, a, t) {
                var n = e[l];
                !n || t && n.tag === t.tag || n.componentInstance.$destroy(), e[l] = null, h(a, l);
            }
            (function(e) {
                e.prototype._init = function(e) {
                    var l = this;
                    l._uid = sa++, l._isVue = !0, e && e._isComponent ? function(e, l) {
                        var a = e.$options = Object.create(e.constructor.options), t = l._parentVnode;
                        a.parent = l.parent, a._parentVnode = t;
                        var n = t.componentOptions;
                        a.propsData = n.propsData, a._parentListeners = n.listeners, a._renderChildren = n.children, 
                        a._componentTag = n.tag, l.render && (a.render = l.render, a.staticRenderFns = l.staticRenderFns);
                    }(l, e) : l.$options = Ce(va(l.constructor), e || {}, l), l._renderProxy = l, l._self = l, 
                    function(e) {
                        var l = e.$options, a = l.parent;
                        if (a && !l.abstract) {
                            for (;a.$options.abstract && a.$parent; ) a = a.$parent;
                            a.$children.push(e);
                        }
                        e.$parent = a, e.$root = a ? a.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, 
                        e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, 
                        e._isBeingDestroyed = !1;
                    }(l), function(e) {
                        e._events = Object.create(null), e._hasHookEvent = !1;
                        var l = e.$options._parentListeners;
                        l && zl(e, l);
                    }(l), function(e) {
                        e._vnode = null, e._staticTrees = null;
                        var l = e.$options, a = e.$vnode = l._parentVnode, n = a && a.context;
                        e.$slots = ul(l._renderChildren, n), e.$scopedSlots = t, e._c = function(l, a, t, n) {
                            return Ll(e, l, a, t, n, !1);
                        }, e.$createElement = function(l, a, t, n) {
                            return Ll(e, l, a, t, n, !0);
                        };
                        var r = a && a.data;
                        _e(e, "$attrs", r && r.attrs || t, null, !0), _e(e, "$listeners", l._parentListeners || t, null, !0);
                    }(l), Hl(l, "beforeCreate"), !l._$fallback && nl(l), function(e) {
                        e._watchers = [];
                        var l = e.$options;
                        l.props && function(e, l) {
                            var a = e.$options.propsData || {}, t = e._props = {}, n = e.$options._propKeys = [];
                            !e.$parent || ge(!1);
                            var r = function(r) {
                                n.push(r);
                                var u = $e(r, l, a, e);
                                _e(t, r, u), r in e || na(e, "_props", r);
                            };
                            for (var u in l) r(u);
                            ge(!0);
                        }(e, l.props), l.methods && function(e, l) {
                            for (var a in e.$options.props, l) e[a] = "function" != typeof l[a] ? C : k(l[a], e);
                        }(e, l.methods), l.data ? function(e) {
                            var l = e.$options.data;
                            s(l = e._data = "function" == typeof l ? function(e, l) {
                                ue();
                                try {
                                    return e.call(l, l);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    return qe(e, l, "data()"), {};
                                } finally {
                                    oe();
                                }
                            }(l, e) : l || {}) || (l = {});
                            for (var a = Object.keys(l), t = e.$options.props, n = (e.$options.methods, a.length); n--; ) {
                                var r = a[n];
                                t && y(t, r) || U(r) || na(e, "_data", r);
                            }
                            ye(l, !0);
                        }(e) : ye(e._data = {}, !0), l.computed && function(e, l) {
                            var a = e._computedWatchers = Object.create(null), t = Y();
                            for (var n in l) {
                                var r = l[n], u = "function" == typeof r ? r : r.get;
                                t || (a[n] = new aa(e, u || C, C, ra)), n in e || ua(e, n, r);
                            }
                        }(e, l.computed), l.watch && l.watch !== K && function(e, l) {
                            for (var a in l) {
                                var t = l[a];
                                if (Array.isArray(t)) for (var n = 0; n < t.length; n++) ca(e, a, t[n]); else ca(e, a, t);
                            }
                        }(e, l.watch);
                    }(l), !l._$fallback && tl(l), !l._$fallback && Hl(l, "created"), l.$options.el && l.$mount(l.$options.el);
                };
            })(ba), function(e) {
                Object.defineProperty(e.prototype, "$data", {
                    get: function() {
                        return this._data;
                    }
                }), Object.defineProperty(e.prototype, "$props", {
                    get: function() {
                        return this._props;
                    }
                }), e.prototype.$set = xe, e.prototype.$delete = we, e.prototype.$watch = function(e, l, a) {
                    if (s(l)) return ca(this, e, l, a);
                    (a = a || {}).user = !0;
                    var t = new aa(this, e, l, a);
                    if (a.immediate) try {
                        l.call(this, t.value);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        qe(e, this, 'callback for immediate watcher "' + t.expression + '"');
                    }
                    return function() {
                        t.teardown();
                    };
                };
            }(ba), function(e) {
                var l = /^hook:/;
                e.prototype.$on = function(e, a) {
                    var t = this;
                    if (Array.isArray(e)) for (var n = 0, r = e.length; n < r; n++) t.$on(e[n], a); else (t._events[e] || (t._events[e] = [])).push(a), 
                    l.test(e) && (t._hasHookEvent = !0);
                    return t;
                }, e.prototype.$once = function(e, l) {
                    var a = this;
                    function t() {
                        a.$off(e, t), l.apply(a, arguments);
                    }
                    return t.fn = l, a.$on(e, t), a;
                }, e.prototype.$off = function(e, l) {
                    var a = this;
                    if (!arguments.length) return a._events = Object.create(null), a;
                    if (Array.isArray(e)) {
                        for (var t = 0, n = e.length; t < n; t++) a.$off(e[t], l);
                        return a;
                    }
                    var r, u = a._events[e];
                    if (!u) return a;
                    if (!l) return a._events[e] = null, a;
                    for (var o = u.length; o--; ) if ((r = u[o]) === l || r.fn === l) {
                        u.splice(o, 1);
                        break;
                    }
                    return a;
                }, e.prototype.$emit = function(e) {
                    var l = this, a = l._events[e];
                    if (a) {
                        a = a.length > 1 ? P(a) : a;
                        for (var t = P(arguments, 1), n = 'event handler for "' + e + '"', r = 0, u = a.length; r < u; r++) Ie(a[r], l, t, l, n);
                    }
                    return l;
                };
            }(ba), function(e) {
                e.prototype._update = function(e, l) {
                    var a = this, t = a.$el, n = a._vnode, r = function(e) {
                        var l = Rl;
                        return Rl = e, function() {
                            Rl = l;
                        };
                    }(a);
                    a._vnode = e, a.$el = n ? a.__patch__(n, e) : a.__patch__(a.$el, e, l, !1), r(), 
                    t && (t.__vue__ = null), a.$el && (a.$el.__vue__ = a), a.$vnode && a.$parent && a.$vnode === a.$parent._vnode && (a.$parent.$el = a.$el);
                }, e.prototype.$forceUpdate = function() {
                    this._watcher && this._watcher.update();
                }, e.prototype.$destroy = function() {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        Hl(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var l = e.$parent;
                        !l || l._isBeingDestroyed || e.$options.abstract || h(l.$children, e), e._watcher && e._watcher.teardown();
                        for (var a = e._watchers.length; a--; ) e._watchers[a].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), 
                        Hl(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
                    }
                };
            }(ba), function(e) {
                Ol(e.prototype), e.prototype.$nextTick = function(e) {
                    return Ze(e, this);
                }, e.prototype._render = function() {
                    var e, l = this, a = l.$options, t = a.render, n = a._parentVnode;
                    n && (l.$scopedSlots = il(n.data.scopedSlots, l.$slots, l.$scopedSlots)), l.$vnode = n;
                    try {
                        Tl = l, e = t.call(l._renderProxy, l.$createElement);
                    } catch (a) {
                        a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
                        qe(a, l, "render"), e = l._vnode;
                    } finally {
                        Tl = null;
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ie || (e = se()), 
                    e.parent = n, e;
                };
            }(ba);
            var ha = [ String, RegExp, Array ], ma = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: ha,
                        exclude: ha,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var e in this.cache) ga(this.cache, e, this.keys);
                    },
                    mounted: function() {
                        var e = this;
                        this.$watch("include", function(l) {
                            da(e, function(e) {
                                return pa(l, e);
                            });
                        }), this.$watch("exclude", function(l) {
                            da(e, function(e) {
                                return !pa(l, e);
                            });
                        });
                    },
                    render: function() {
                        var e = this.$slots.default, l = function(e) {
                            if (Array.isArray(e)) for (var l = 0; l < e.length; l++) {
                                var a = e[l];
                                if (r(a) && (r(a.componentOptions) || Il(a))) return a;
                            }
                        }(e), a = l && l.componentOptions;
                        if (a) {
                            var t = fa(a), n = this.include, u = this.exclude;
                            if (n && (!t || !pa(n, t)) || u && t && pa(u, t)) return l;
                            var o = this.cache, i = this.keys, c = null == l.key ? a.Ctor.cid + (a.tag ? "::" + a.tag : "") : l.key;
                            o[c] ? (l.componentInstance = o[c].componentInstance, h(i, c), i.push(c)) : (o[c] = l, 
                            i.push(c), this.max && i.length > parseInt(this.max) && ga(o, i[0], i, this._vnode)), 
                            l.data.keepAlive = !0;
                        }
                        return l || e && e[0];
                    }
                }
            };
            (function(e) {
                var l = {
                    get: function() {
                        return N;
                    }
                };
                Object.defineProperty(e, "config", l), e.util = {
                    warn: te,
                    extend: D,
                    mergeOptions: Ce,
                    defineReactive: _e
                }, e.set = xe, e.delete = we, e.nextTick = Ze, e.observable = function(e) {
                    return ye(e), e;
                }, e.options = Object.create(null), q.forEach(function(l) {
                    e.options[l + "s"] = Object.create(null);
                }), e.options._base = e, D(e.options.components, ma), function(e) {
                    e.use = function(e) {
                        var l = this._installedPlugins || (this._installedPlugins = []);
                        if (l.indexOf(e) > -1) return this;
                        var a = P(arguments, 1);
                        return a.unshift(this), "function" == typeof e.install ? e.install.apply(e, a) : "function" == typeof e && e.apply(null, a), 
                        l.push(e), this;
                    };
                }(e), function(e) {
                    e.mixin = function(e) {
                        return this.options = Ce(this.options, e), this;
                    };
                }(e), function(e) {
                    e.cid = 0;
                    var l = 1;
                    e.extend = function(e) {
                        e = e || {};
                        var a = this, t = a.cid, n = e._Ctor || (e._Ctor = {});
                        if (n[t]) return n[t];
                        var r = e.name || a.options.name, u = function(e) {
                            this._init(e);
                        };
                        return (u.prototype = Object.create(a.prototype)).constructor = u, u.cid = l++, 
                        u.options = Ce(a.options, e), u.super = a, u.options.props && function(e) {
                            var l = e.options.props;
                            for (var a in l) na(e.prototype, "_props", a);
                        }(u), u.options.computed && function(e) {
                            var l = e.options.computed;
                            for (var a in l) ua(e.prototype, a, l[a]);
                        }(u), u.extend = a.extend, u.mixin = a.mixin, u.use = a.use, q.forEach(function(e) {
                            u[e] = a[e];
                        }), r && (u.options.components[r] = u), u.superOptions = a.options, u.extendOptions = e, 
                        u.sealedOptions = D({}, u.options), n[t] = u, u;
                    };
                }(e), function(e) {
                    q.forEach(function(l) {
                        e[l] = function(e, a) {
                            return a ? ("component" === l && s(a) && (a.name = a.name || e, a = this.options._base.extend(a)), 
                            "directive" === l && "function" == typeof a && (a = {
                                bind: a,
                                update: a
                            }), this.options[l + "s"][e] = a, a) : this.options[l + "s"][e];
                        };
                    });
                }(e);
            })(ba), Object.defineProperty(ba.prototype, "$isServer", {
                get: Y
            }), Object.defineProperty(ba.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(ba, "FunctionalRenderContext", {
                value: kl
            }), ba.version = "2.6.11";
            var ya = "[object Array]", _a = "[object Object]";
            function xa(e, l, a) {
                e[l] = a;
            }
            function wa(e) {
                return Object.prototype.toString.call(e);
            }
            function Sa(e) {
                if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_DARK_MODE: "false",
                        VUE_APP_NAME: "qpCommon",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var l = e.$scope;
                        console.log("[" + +new Date() + "][" + (l.is || l.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]");
                    }
                    var a = e.__next_tick_callbacks.slice(0);
                    e.__next_tick_callbacks.length = 0;
                    for (var t = 0; t < a.length; t++) a[t]();
                }
            }
            function Aa(e, l) {
                return l && (l._isVue || l.__v_isMPComponent) ? {} : l;
            }
            function Oa() {}
            var ka = _(function(e) {
                var l = {}, a = /:(.+)/;
                return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                    if (e) {
                        var t = e.split(a);
                        t.length > 1 && (l[t[0].trim()] = t[1].trim());
                    }
                }), l;
            }), Pa = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ], Da = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onInit", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onUploadDouyinVideo", "onNFCReadMessage", "onPageShow", "onPageHide", "onPageResize" ];
            ba.prototype.__patch__ = function(e, l) {
                var a = this;
                if (null !== l && ("page" === this.mpType || "component" === this.mpType)) {
                    var t = this.$scope, n = Object.create(null);
                    try {
                        n = function(e) {
                            var l = Object.create(null);
                            [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {})).reduce(function(l, a) {
                                return l[a] = e[a], l;
                            }, l);
                            var a = e.__composition_api_state__ || e.__secret_vfa_state__, t = a && a.rawBindings;
                            return t && Object.keys(t).forEach(function(a) {
                                l[a] = e[a];
                            }), Object.assign(l, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (l.name = e.name, 
                            l.value = e.value), JSON.parse(JSON.stringify(l, Aa));
                        }(this);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error(e);
                    }
                    n.__webviewId__ = t.data.__webviewId__;
                    var r = Object.create(null);
                    Object.keys(n).forEach(function(e) {
                        r[e] = t.data[e];
                    });
                    var u = !1 === this.$shouldDiffData ? n : function(e, l) {
                        var a = {};
                        return function e(l, a) {
                            if (l !== a) {
                                var t = wa(l), n = wa(a);
                                if (t == _a && n == _a) {
                                    if (Object.keys(l).length >= Object.keys(a).length) for (var r in a) {
                                        var u = l[r];
                                        void 0 === u ? l[r] = null : e(u, a[r]);
                                    }
                                } else t == ya && n == ya && l.length >= a.length && a.forEach(function(a, t) {
                                    e(l[t], a);
                                });
                            }
                        }(e, l), function e(l, a, t, n) {
                            if (l !== a) {
                                var r = wa(l), u = wa(a);
                                if (r == _a) if (u != _a || Object.keys(l).length < Object.keys(a).length) xa(n, t, l); else {
                                    var o = function(r) {
                                        var u = l[r], o = a[r], i = wa(u), c = wa(o);
                                        if (i != ya && i != _a) u !== a[r] && function(e, l) {
                                            return "[object Null]" !== e && "[object Undefined]" !== e || "[object Null]" !== l && "[object Undefined]" !== l;
                                        }(i, c) && xa(n, ("" == t ? "" : t + ".") + r, u); else if (i == ya) c != ya || u.length < o.length ? xa(n, ("" == t ? "" : t + ".") + r, u) : u.forEach(function(l, a) {
                                            e(l, o[a], ("" == t ? "" : t + ".") + r + "[" + a + "]", n);
                                        }); else if (i == _a) if (c != _a || Object.keys(u).length < Object.keys(o).length) xa(n, ("" == t ? "" : t + ".") + r, u); else for (var s in u) e(u[s], o[s], ("" == t ? "" : t + ".") + r + "." + s, n);
                                    };
                                    for (var i in l) o(i);
                                } else r == ya ? u != ya || l.length < a.length ? xa(n, t, l) : l.forEach(function(l, r) {
                                    e(l, a[r], t + "[" + r + "]", n);
                                }) : xa(n, t, l);
                            }
                        }(e, l, "", a), a;
                    }(n, r);
                    Object.keys(u).length ? (Object({
                        NODE_ENV: "production",
                        VUE_APP_DARK_MODE: "false",
                        VUE_APP_NAME: "qpCommon",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + this._uid + "]差量更新", JSON.stringify(u)), 
                    this.__next_tick_pending = !0, t.setData(u, function() {
                        a.__next_tick_pending = !1, Sa(a);
                    })) : Sa(this);
                }
            }, ba.prototype.$mount = function(e, l) {
                return function(e, l, a) {
                    return e.mpType ? ("app" === e.mpType && (e.$options.render = Oa), e.$options.render || (e.$options.render = Oa), 
                    !e._$fallback && Hl(e, "beforeMount"), new aa(e, function() {
                        e._update(e._render(), a);
                    }, C, {
                        before: function() {
                            e._isMounted && !e._isDestroyed && Hl(e, "beforeUpdate");
                        }
                    }, !0), a = !1, e) : e;
                }(this, 0, l);
            }, function(e) {
                var l = e.extend;
                e.extend = function(e) {
                    var a = (e = e || {}).methods;
                    return a && Object.keys(a).forEach(function(l) {
                        -1 !== Da.indexOf(l) && (e[l] = a[l], delete a[l]);
                    }), l.call(this, e);
                };
                var a = e.config.optionMergeStrategies, t = a.created;
                Da.forEach(function(e) {
                    a[e] = t;
                }), e.prototype.__lifecycle_hooks__ = Da;
            }(ba), function(e) {
                e.config.errorHandler = function(l, a, t) {
                    e.util.warn("Error in " + t + ': "' + l.toString() + '"', a), console.error(l);
                    var n = "function" == typeof getApp && getApp();
                    n && n.onError && n.onError(l);
                };
                var l = e.prototype.$emit;
                e.prototype.$emit = function(e) {
                    if (this.$scope && e) {
                        var a = this.$scope._triggerEvent || this.$scope.triggerEvent;
                        if (a) try {
                            a.call(this.$scope, e, {
                                __args__: P(arguments, 1)
                            });
                        } catch (e) {}
                    }
                    return l.apply(this, arguments);
                }, e.prototype.$nextTick = function(e) {
                    return function(e, l) {
                        if (!e.__next_tick_pending && !function(e) {
                            return Gl.find(function(l) {
                                return e._watcher === l;
                            });
                        }(e)) {
                            if (Object({
                                NODE_ENV: "production",
                                VUE_APP_DARK_MODE: "false",
                                VUE_APP_NAME: "qpCommon",
                                VUE_APP_PLATFORM: "mp-weixin",
                                BASE_URL: "/"
                            }).VUE_APP_DEBUG) {
                                var a = e.$scope;
                                console.log("[" + +new Date() + "][" + (a.is || a.route) + "][" + e._uid + "]:nextVueTick");
                            }
                            return Ze(l, e);
                        }
                        if (Object({
                            NODE_ENV: "production",
                            VUE_APP_DARK_MODE: "false",
                            VUE_APP_NAME: "qpCommon",
                            VUE_APP_PLATFORM: "mp-weixin",
                            BASE_URL: "/"
                        }).VUE_APP_DEBUG) {
                            var t = e.$scope;
                            console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + e._uid + "]:nextMPTick");
                        }
                        var n;
                        if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push(function() {
                            if (l) try {
                                l.call(e);
                            } catch (l) {
                                l = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(l);
                                qe(l, e, "nextTick");
                            } else n && n(e);
                        }), !l && "undefined" != typeof Promise) return new Promise(function(e) {
                            n = e;
                        });
                    }(this, e);
                }, Pa.forEach(function(l) {
                    e.prototype[l] = function(e) {
                        return this.$scope && this.$scope[l] ? this.$scope[l](e) : "undefined" != typeof my ? "createSelectorQuery" === l ? my.createSelectorQuery(e) : "createIntersectionObserver" === l ? my.createIntersectionObserver(e) : void 0 : void 0;
                    };
                }), e.prototype.__init_provide = tl, e.prototype.__init_injections = nl, e.prototype.__call_hook = function(e, l) {
                    var a = this;
                    ue();
                    var t, n = a.$options[e], r = e + " hook";
                    if (n) for (var u = 0, o = n.length; u < o; u++) t = Ie(n[u], a, l ? [ l ] : null, a, r);
                    return a._hasHookEvent && a.$emit("hook:" + e, l), oe(), t;
                }, e.prototype.__set_model = function(l, a, t, n) {
                    Array.isArray(n) && (-1 !== n.indexOf("trim") && (t = t.trim()), -1 !== n.indexOf("number") && (t = this._n(t))), 
                    l || (l = this), e.set(l, a, t);
                }, e.prototype.__set_sync = function(l, a, t) {
                    l || (l = this), e.set(l, a, t);
                }, e.prototype.__get_orig = function(e) {
                    return s(e) && e.$orig || e;
                }, e.prototype.__get_value = function(e, l) {
                    return function e(l, a) {
                        var t = a.split("."), n = t[0];
                        return 0 === n.indexOf("__$n") && (n = parseInt(n.replace("__$n", ""))), 1 === t.length ? l[n] : e(l[n], t.slice(1).join("."));
                    }(l || this, e);
                }, e.prototype.__get_class = function(e, l) {
                    return function(e, l) {
                        return r(e) || r(l) ? function(e, l) {
                            return e ? l ? e + " " + l : e : l || "";
                        }(e, function e(l) {
                            return Array.isArray(l) ? function(l) {
                                for (var a, t = "", n = 0, u = l.length; n < u; n++) r(a = e(l[n])) && "" !== a && (t && (t += " "), 
                                t += a);
                                return t;
                            }(l) : i(l) ? function(e) {
                                var l = "";
                                for (var a in e) e[a] && (l && (l += " "), l += a);
                                return l;
                            }(l) : "string" == typeof l ? l : "";
                        }(l)) : "";
                    }(l, e);
                }, e.prototype.__get_style = function(e, l) {
                    if (!e && !l) return "";
                    var a = function(e) {
                        return Array.isArray(e) ? j(e) : "string" == typeof e ? ka(e) : e;
                    }(e), t = l ? D(l, a) : a;
                    return Object.keys(t).map(function(e) {
                        return O(e) + ":" + t[e];
                    }).join(";");
                }, e.prototype.__map = function(e, l) {
                    var a, t, n, r, u;
                    if (Array.isArray(e)) {
                        for (a = new Array(e.length), t = 0, n = e.length; t < n; t++) a[t] = l(e[t], t);
                        return a;
                    }
                    if (i(e)) {
                        for (r = Object.keys(e), a = Object.create(null), t = 0, n = r.length; t < n; t++) a[u = r[t]] = l(e[u], u, t);
                        return a;
                    }
                    if ("number" == typeof e) {
                        for (a = new Array(e), t = 0, n = e; t < n; t++) a[t] = l(t, t);
                        return a;
                    }
                    return [];
                };
            }(ba), a.default = ba;
        }.call(this, t("c8ba"));
    },
    "677f": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.queryUserJoinBiddingList = l.queryUserBiddingDetail = l.queryExchangeRecordForBiddingIndex = l.queryExchangeRecordForBidding = l.queryBiddingActivityList = l.insertComment = l.insertBiddingMoney = l.getPersonalCommentListMy = l.getPersonalCommentList = l.getExchangeInfoById = l.findUserBiddingPrize = l.biddingActivityRemind = void 0;
        var t = a("0488");
        l.queryBiddingActivityList = function(e) {
            return (0, t.requestPost)("/biddingActivity/queryBiddingActivityList", e);
        }, l.biddingActivityRemind = function(e) {
            return (0, t.requestPost)("/biddingActivity/biddingActivityRemind", e);
        }, l.insertBiddingMoney = function(e) {
            return (0, t.requestPost)("/biddingPeriods/insertBiddingMoney", e);
        }, l.getPersonalCommentList = function(e) {
            return (0, t.requestPostNoopenid)("/vpoints/orderComment/getPersonalCommentList", e);
        }, l.getPersonalCommentListMy = function(e) {
            return (0, t.requestPost)("/vpoints/orderComment/getPersonalCommentList", e);
        }, l.queryUserJoinBiddingList = function(e) {
            return (0, t.requestPost)("/biddingActivity/queryUserJoinBiddingList", e);
        }, l.queryExchangeRecordForBidding = function(e) {
            return (0, t.requestPost)("/vpoints/vpointsExchange/queryExchangeRecordForBidding", e);
        }, l.queryExchangeRecordForBiddingIndex = function(e) {
            return (0, t.requestPost)("/biddingPeriods/queryExchangeRecordForBiddingIndex", e);
        }, l.queryUserBiddingDetail = function(e) {
            return (0, t.requestPost)("/biddingPeriods/queryUserBiddingDetail", e);
        }, l.findUserBiddingPrize = function(e) {
            return (0, t.requestPost)("/biddingPeriods/findUserBiddingPrize", e);
        }, l.getExchangeInfoById = function(e) {
            return (0, t.requestPost)("/vpoints/vpointsExchange/getExchangeInfoById", e);
        }, l.insertComment = function(e) {
            return (0, t.requestPost)("/vpoints/orderComment/insertComment", e);
        };
    },
    "69f2": function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var n = t(a("2eee")), r = t(a("c973")), u = a("9b31"), o = a("76d6"), i = {
                data: function() {
                    return {
                        sw_swiperList: []
                    };
                },
                methods: {
                    querySwiperlist: function(l, a) {
                        var t = this;
                        return (0, r.default)(n.default.mark(function r() {
                            var o, i, c, s, v, b, f, p, d, g;
                            return n.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (o = "00", i = "00", !getApp().globalData.longitude || "00" === getApp().globalData.longitude) {
                                        n.next = 6;
                                        break;
                                    }
                                    o = getApp().globalData.longitude, i = getApp().globalData.latitude, n.next = 11;
                                    break;

                                  case 6:
                                    return n.next = 8, t.sw_getLocation();

                                  case 8:
                                    c = n.sent, o = c.longitude, i = c.latitude;

                                  case 11:
                                    return (s = {}).longitude = o, s.latitude = i, s.projectServerName = getApp().globalData.projectServerName || e.getStorageSync("projectServerName") || "projectServerName", 
                                    s.adType = l, s.openid = a, (v = getApp().globalData.userLocation || e.getStorageSync("userLocation")) && (b = v.longitude, 
                                    f = v.latitude, s.longitude = b, s.latitude = f), n.next = 21, (0, u.requestPost)("/adPub/adInfo", s);

                                  case 21:
                                    if (p = n.sent, console.log(p), d = p.result, g = p.reply, "0" !== d.code || !g || !g.length) {
                                        n.next = 28;
                                        break;
                                    }
                                    return n.abrupt("return", g);

                                  case 28:
                                    return n.abrupt("return", null);

                                  case 29:
                                  case "end":
                                    return n.stop();
                                }
                            }, r);
                        }))();
                    },
                    handleSwiperlist: function(e, l) {
                        return e.map(function(e, a) {
                            e.className = "adType_" + l + (a + 1);
                        });
                    },
                    handleJumpEvent: function(l) {
                        var a = l.jumpTyp, t = l.jumpUrl, n = l.picJumpUrl, r = l.appid;
                        if ("1" == a) e.navigateTo({
                            url: "webview?target=".concat(t)
                        }); else if ("2" == a) e.navigateTo({
                            url: "imgWrap?target=".concat(t || n)
                        }); else if ("3" == a) e.navigateToMiniProgram({
                            appId: r,
                            path: t
                        }); else {
                            if ("4" != a) return;
                            e.reLaunch({
                                url: t
                            });
                        }
                    },
                    sw_getLocation: function() {
                        return new Promise(function(l, a) {
                            e.getSetting({
                                complete: function(a) {
                                    console.log(a), a.authSetting && 1 == a.authSetting["scope.getLocation"] ? (e.getLocation({
                                        type: "wgs84",
                                        complete: function(e) {
                                            console.log(e), (0, o.postLocationData)(e), getApp().globalData.longitude = e.longitude, 
                                            getApp().globalData.latitude = e.latitude, getApp().globalData.userLocation = e, 
                                            l(e);
                                        }
                                    }), console.log("after this.getLocation")) : l({
                                        longitude: "00",
                                        latitude: "00"
                                    });
                                }
                            });
                        });
                    }
                }
            };
            l.default = i;
        }).call(this, a("543d").default);
    },
    "6bc8": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.queryTicketUserRecordList = l.queryPrizeList = l.queryAllowanceRecordList = void 0, 
        a("0488");
        var t = a("9b31");
        l.queryAllowanceRecordList = function(e) {
            return (0, t.requestPost)("/gifts/queryAllowanceRecordList", e);
        }, l.queryPrizeList = function(e) {
            return (0, t.requestPost)("/gifts/queryPrizeList", e);
        }, l.queryTicketUserRecordList = function(e) {
            return (0, t.requestPost)("/ticketUserRecord/queryTicketUserRecordList", e);
        };
    },
    "6f8f": function(e, l) {
        e.exports = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                !0;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return !1;
            }
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "6fd5": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.dateformatTemp = void 0, l.filterArr = function(e, l, a) {
            return a.filter(function(a) {
                return a[e] === l;
            });
        }, l.idcardValidate = void 0, l.strSub = function(e, l, a, t) {
            var n = function(e) {
                for (var l = 0, a = 0; a < e.length; a++) {
                    var t = e.charCodeAt(a);
                    t >= 1 && t <= 126 || 65376 <= t && t <= 65439 ? l++ : l += 2;
                }
                return l;
            }(e);
            console.log("strSub"), console.log(n);
            return n > l ? e.substring(0, a) + t : e;
        }, l.dateformatTemp = function(e, l) {
            console.log("dateformatTempdateformatTempdateformatTemp"), console.log(e), console.log(l);
            var a = l.replace(/-/g, "/").substring(0, 19);
            return e > (new Date().getTime(), new Date(a).getTime());
        }, l.idcardValidate = function(e) {
            var l = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ], a = /^[1-9][0-9xX]{17}$/, t = 0, n = [];
            if (a.test(e)) {
                for (var r = 0; r < 17; ++r) t += parseInt(e[r], 10) * l[r], r > 5 && r < 14 && n.push(e[r]);
                return [ "1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2" ][t % 11] === e[17].toUpperCase() && a.test(e);
            }
            return a.test(e);
        };
    },
    7037: function(l, a) {
        function t(a) {
            return l.exports = t = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(l) {
                return e(l);
            } : function(l) {
                return l && "function" == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : e(l);
            }, l.exports.__esModule = !0, l.exports.default = l.exports, t(a);
        }
        l.exports = t, l.exports.__esModule = !0, l.exports.default = l.exports;
    },
    "718c": function(e, l, a) {
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.callPhone = function(l) {
                e.makePhoneCall({
                    phoneNumber: l,
                    success: function() {
                        console.log("拨打电话成功！");
                    },
                    fail: function() {
                        console.log("拨打电话失败！");
                    }
                });
            }, l.getCaptcha = function(l) {
                return e.showLoading({
                    title: "获取中"
                }), new Promise(function(a, n) {
                    var r = {
                        phonenum: l,
                        sendtype: "1"
                    };
                    (0, t.requestPost)("/user/getCaptcha", r).then(function(l) {
                        e.hideLoading(), a(l);
                    });
                });
            }, l.saveUserPhone = function(e) {
                var l = {
                    flag: 1,
                    phoneNumber: e
                };
                (0, t.requestPost)("/user/userInfo", l);
            }, l.updateUserInfoMobile = function(l, a) {
                return e.showLoading({
                    title: "提交中"
                }), new Promise(function(n, r) {
                    var u = {
                        phonenum: l,
                        captcha: a
                    };
                    (0, t.requestPost)("/user/updateUserInfoMobile", u).then(function(l) {
                        e.hideLoading(), n(l);
                    });
                });
            };
            var t = a("9b31");
        }).call(this, a("543d").default);
    },
    7404: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        l.default = [ {
            label: "北京市",
            value: "11"
        }, {
            label: "天津市",
            value: "12"
        }, {
            label: "河北省",
            value: "13"
        }, {
            label: "山西省",
            value: "14"
        }, {
            label: "内蒙古自治区",
            value: "15"
        }, {
            label: "辽宁省",
            value: "21"
        }, {
            label: "吉林省",
            value: "22"
        }, {
            label: "黑龙江省",
            value: "23"
        }, {
            label: "上海市",
            value: "31"
        }, {
            label: "江苏省",
            value: "32"
        }, {
            label: "浙江省",
            value: "33"
        }, {
            label: "安徽省",
            value: "34"
        }, {
            label: "福建省",
            value: "35"
        }, {
            label: "江西省",
            value: "36"
        }, {
            label: "山东省",
            value: "37"
        }, {
            label: "河南省",
            value: "41"
        }, {
            label: "湖北省",
            value: "42"
        }, {
            label: "湖南省",
            value: "43"
        }, {
            label: "广东省",
            value: "44"
        }, {
            label: "广西壮族自治区",
            value: "45"
        }, {
            label: "海南省",
            value: "46"
        }, {
            label: "重庆市",
            value: "50"
        }, {
            label: "四川省",
            value: "51"
        }, {
            label: "贵州省",
            value: "52"
        }, {
            label: "云南省",
            value: "53"
        }, {
            label: "西藏自治区",
            value: "54"
        }, {
            label: "陕西省",
            value: "61"
        }, {
            label: "甘肃省",
            value: "62"
        }, {
            label: "青海省",
            value: "63"
        }, {
            label: "宁夏回族自治区",
            value: "64"
        }, {
            label: "新疆维吾尔自治区",
            value: "65"
        }, {
            label: "台湾",
            value: "66"
        }, {
            label: "香港",
            value: "67"
        }, {
            label: "澳门",
            value: "68"
        }, {
            label: "钓鱼岛",
            value: "69"
        } ];
    },
    "76d6": function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.postLocationData = function(l) {
                var a = -1 == l.errMsg.indexOf(":ok"), t = getCurrentPages(), n = t[t.length - 1], r = {}, u = [], i = {};
                i.path = n.route, i.methodName = "getLocation", i.timeStamp = new Date().getTime(), 
                r.openid = getApp().globalData.openid || e.getStorageSync("openid").openid, r.userid = getApp().globalData.xcxOpenid || e.getStorageSync("xcxOpenid").xcxOpenid, 
                r.appid = "wx1d5e0ffc015303ab", r.dataType = 0, r.serverName = "hebei", i.options = a ? {
                    msg: "deny"
                } : {
                    msg: "success"
                }, u.push(i), r.methodList = u, o(r);
            }, l.report = o;
            var n = t(a("2eee")), r = t(a("c973")), u = "https://xcxact.vjifen.com";
            function o(l) {
                "0" == getApp().globalData.commonStatus && e.request({
                    url: u + "/collect/reportLogData",
                    data: l,
                    method: "POST",
                    complete: function(e) {}
                });
            }
            (0, r.default)(n.default.mark(function l() {
                var a, t, r, o, i, c;
                return n.default.wrap(function(l) {
                    for (;;) switch (l.prev = l.next) {
                      case 0:
                        return c = function() {
                            return new Promise(function(l, a) {
                                e.request({
                                    url: u + "/collect/getReportConfig",
                                    data: {
                                        appid: "wx1d5e0ffc015303ab"
                                    },
                                    method: "POST",
                                    complete: function(e) {
                                        0 == e.data.code ? (getApp().globalData.commonStatus = e.data.reply.commonStatus || "0", 
                                        getApp().globalData.errorStatus = e.data.reply.errorStatus || "0", getApp().globalData.methodConfig = e.data.reply.data || [], 
                                        l(e.data.reply.data || [])) : l([]);
                                    }
                                });
                            });
                        }, o = function(e, l, t) {
                            var n = e[l];
                            e[l] = function() {
                                n.apply(this, arguments);
                                var e = {};
                                if (a(arguments[0]) && Object.keys(arguments[0]).length > 0) {
                                    var l = arguments[0];
                                    if ("tap" != l.type && "getphonenumber" != l.type) return;
                                    var u = getCurrentPages(), o = u[u.length - 1], c = l.currentTarget.dataset.eventOpts[0][1][0][0], s = l.currentTarget.dataset.eventOpts[0][1][0][1];
                                    if (!r) return;
                                    var v = r.find(function(e) {
                                        return e.path == o.route;
                                    });
                                    if (v && v.unMethodName.includes(c)) return !1;
                                    if (e.path = o.route, e.timeStamp = new Date().getTime(), v) {
                                        var b = v.methodName.find(function(e) {
                                            return e.name == c;
                                        });
                                        if (b) {
                                            var f = {};
                                            for (var p in b.dataName) f[b.dataName[p]] = o.data[b.dataName[p]] || t.data[b.dataName[p]];
                                            e.data = f;
                                        }
                                    }
                                    e.methodName = c, s = '["$event"]' == JSON.stringify(s) || '["$0"]' == JSON.stringify(s) ? "" : s ? s[0] : "", 
                                    "getphonenumber" == l.type && (s = l.detail.errMsg), s && (e.options = {
                                        msg: s
                                    }), i(e);
                                }
                            };
                        }, a = function(e) {
                            return null != e && "[object Object]" == toString.call(e);
                        }, t = Component, Component = function(e) {
                            Object.keys(e.methods).forEach(function(l) {
                                "__e" == l && o(e.methods, l, e);
                            }), t.apply(this, arguments);
                        }, l.next = 7, c();

                      case 7:
                        if (l.t0 = l.sent, l.t0) {
                            l.next = 10;
                            break;
                        }
                        l.t0 = [];

                      case 10:
                        r = l.t0, i = function(l) {
                            if ("0" == getApp().globalData.commonStatus) {
                                var a = {}, t = [];
                                t.push(l), a.openid = getApp().globalData.openid || e.getStorageSync("openid").openid, 
                                a.userid = getApp().globalData.xcxOpenid || e.getStorageSync("xcxOpenid").xcxOpenid, 
                                a.appid = "wx1d5e0ffc015303ab", a.dataType = 0, a.methodList = t, a.serverName = "hebei", 
                                e.request({
                                    url: u + "/collect/reportLogData",
                                    data: a,
                                    method: "POST",
                                    complete: function(e) {}
                                });
                            }
                        };

                      case 12:
                      case "end":
                        return l.stop();
                    }
                }, l);
            }))();
        }).call(this, a("543d").default);
    },
    "7bcb": function(e, l, a) {
        (function(a) {
            function t(e, l) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(n, r) {
                    a.request({
                        url: config.requestUrl_ln + e,
                        method: l,
                        data: t,
                        header: {
                            "Content-Type": "application/json"
                        },
                        success: function(e) {
                            n(e.data);
                        },
                        fail: function(e) {
                            r(e);
                        }
                    });
                });
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.get = function(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t(e, "GET", l);
            }, l.post = function(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t(e, "POST", l);
            }, e.exports = {
                mallIndex: "/vpoints/vpointsShop/getShopGoodsHasVpoints",
                goodsDetail: "/vpoints/vpointsShop/getShopGoodsByIds",
                changeList: "/vpoints/vpointsExchange/getExchangeRecord",
                goodsExchange: "/vpoints/vpointsExchange/goodsExchange",
                getCaptcha: "/user/getCaptcha",
                exgoodsInfo: "/vpoints/vpointsExchange/getExchangeInfoById",
                exGoodsReceive: "/vpoints/vpointsExchange/expressSign",
                pointsList: "/gifts/queryAllGiftsList"
            };
        }).call(this, a("543d").default);
    },
    "7c2a": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0, l.default = {
            id: "2852637",
            name: "uniui图标库",
            font_family: "uniicons",
            css_prefix_text: "uniui-",
            description: "",
            glyphs: [ {
                icon_id: "25027049",
                name: "yanse",
                font_class: "color",
                unicode: "e6cf",
                unicode_decimal: 59087
            }, {
                icon_id: "25027048",
                name: "wallet",
                font_class: "wallet",
                unicode: "e6b1",
                unicode_decimal: 59057
            }, {
                icon_id: "25015720",
                name: "settings-filled",
                font_class: "settings-filled",
                unicode: "e6ce",
                unicode_decimal: 59086
            }, {
                icon_id: "25015434",
                name: "shimingrenzheng-filled",
                font_class: "auth-filled",
                unicode: "e6cc",
                unicode_decimal: 59084
            }, {
                icon_id: "24934246",
                name: "shop-filled",
                font_class: "shop-filled",
                unicode: "e6cd",
                unicode_decimal: 59085
            }, {
                icon_id: "24934159",
                name: "staff-filled-01",
                font_class: "staff-filled",
                unicode: "e6cb",
                unicode_decimal: 59083
            }, {
                icon_id: "24932461",
                name: "VIP-filled",
                font_class: "vip-filled",
                unicode: "e6c6",
                unicode_decimal: 59078
            }, {
                icon_id: "24932462",
                name: "plus_circle_fill",
                font_class: "plus-filled",
                unicode: "e6c7",
                unicode_decimal: 59079
            }, {
                icon_id: "24932463",
                name: "folder_add-filled",
                font_class: "folder-add-filled",
                unicode: "e6c8",
                unicode_decimal: 59080
            }, {
                icon_id: "24932464",
                name: "yanse-filled",
                font_class: "color-filled",
                unicode: "e6c9",
                unicode_decimal: 59081
            }, {
                icon_id: "24932465",
                name: "tune-filled",
                font_class: "tune-filled",
                unicode: "e6ca",
                unicode_decimal: 59082
            }, {
                icon_id: "24932455",
                name: "a-rilidaka-filled",
                font_class: "calendar-filled",
                unicode: "e6c0",
                unicode_decimal: 59072
            }, {
                icon_id: "24932456",
                name: "notification-filled",
                font_class: "notification-filled",
                unicode: "e6c1",
                unicode_decimal: 59073
            }, {
                icon_id: "24932457",
                name: "wallet-filled",
                font_class: "wallet-filled",
                unicode: "e6c2",
                unicode_decimal: 59074
            }, {
                icon_id: "24932458",
                name: "paihangbang-filled",
                font_class: "medal-filled",
                unicode: "e6c3",
                unicode_decimal: 59075
            }, {
                icon_id: "24932459",
                name: "gift-filled",
                font_class: "gift-filled",
                unicode: "e6c4",
                unicode_decimal: 59076
            }, {
                icon_id: "24932460",
                name: "fire-filled",
                font_class: "fire-filled",
                unicode: "e6c5",
                unicode_decimal: 59077
            }, {
                icon_id: "24928001",
                name: "refreshempty",
                font_class: "refreshempty",
                unicode: "e6bf",
                unicode_decimal: 59071
            }, {
                icon_id: "24926853",
                name: "location-ellipse",
                font_class: "location-filled",
                unicode: "e6af",
                unicode_decimal: 59055
            }, {
                icon_id: "24926735",
                name: "person-filled",
                font_class: "person-filled",
                unicode: "e69d",
                unicode_decimal: 59037
            }, {
                icon_id: "24926703",
                name: "personadd-filled",
                font_class: "personadd-filled",
                unicode: "e698",
                unicode_decimal: 59032
            }, {
                icon_id: "24923351",
                name: "back",
                font_class: "back",
                unicode: "e6b9",
                unicode_decimal: 59065
            }, {
                icon_id: "24923352",
                name: "forward",
                font_class: "forward",
                unicode: "e6ba",
                unicode_decimal: 59066
            }, {
                icon_id: "24923353",
                name: "arrowthinright",
                font_class: "arrow-right",
                unicode: "e6bb",
                unicode_decimal: 59067
            }, {
                icon_id: "24923353",
                name: "arrowthinright",
                font_class: "arrowthinright",
                unicode: "e6bb",
                unicode_decimal: 59067
            }, {
                icon_id: "24923354",
                name: "arrowthinleft",
                font_class: "arrow-left",
                unicode: "e6bc",
                unicode_decimal: 59068
            }, {
                icon_id: "24923354",
                name: "arrowthinleft",
                font_class: "arrowthinleft",
                unicode: "e6bc",
                unicode_decimal: 59068
            }, {
                icon_id: "24923355",
                name: "arrowthinup",
                font_class: "arrow-up",
                unicode: "e6bd",
                unicode_decimal: 59069
            }, {
                icon_id: "24923355",
                name: "arrowthinup",
                font_class: "arrowthinup",
                unicode: "e6bd",
                unicode_decimal: 59069
            }, {
                icon_id: "24923356",
                name: "arrowthindown",
                font_class: "arrow-down",
                unicode: "e6be",
                unicode_decimal: 59070
            }, {
                icon_id: "24923356",
                name: "arrowthindown",
                font_class: "arrowthindown",
                unicode: "e6be",
                unicode_decimal: 59070
            }, {
                icon_id: "24923349",
                name: "arrowdown",
                font_class: "bottom",
                unicode: "e6b8",
                unicode_decimal: 59064
            }, {
                icon_id: "24923349",
                name: "arrowdown",
                font_class: "arrowdown",
                unicode: "e6b8",
                unicode_decimal: 59064
            }, {
                icon_id: "24923346",
                name: "arrowright",
                font_class: "right",
                unicode: "e6b5",
                unicode_decimal: 59061
            }, {
                icon_id: "24923346",
                name: "arrowright",
                font_class: "arrowright",
                unicode: "e6b5",
                unicode_decimal: 59061
            }, {
                icon_id: "24923347",
                name: "arrowup",
                font_class: "top",
                unicode: "e6b6",
                unicode_decimal: 59062
            }, {
                icon_id: "24923347",
                name: "arrowup",
                font_class: "arrowup",
                unicode: "e6b6",
                unicode_decimal: 59062
            }, {
                icon_id: "24923348",
                name: "arrowleft",
                font_class: "left",
                unicode: "e6b7",
                unicode_decimal: 59063
            }, {
                icon_id: "24923348",
                name: "arrowleft",
                font_class: "arrowleft",
                unicode: "e6b7",
                unicode_decimal: 59063
            }, {
                icon_id: "24923334",
                name: "eye",
                font_class: "eye",
                unicode: "e651",
                unicode_decimal: 58961
            }, {
                icon_id: "24923335",
                name: "eye-filled",
                font_class: "eye-filled",
                unicode: "e66a",
                unicode_decimal: 58986
            }, {
                icon_id: "24923336",
                name: "eye-slash",
                font_class: "eye-slash",
                unicode: "e6b3",
                unicode_decimal: 59059
            }, {
                icon_id: "24923337",
                name: "eye-slash-filled",
                font_class: "eye-slash-filled",
                unicode: "e6b4",
                unicode_decimal: 59060
            }, {
                icon_id: "24923305",
                name: "info-filled",
                font_class: "info-filled",
                unicode: "e649",
                unicode_decimal: 58953
            }, {
                icon_id: "24923299",
                name: "reload-01",
                font_class: "reload",
                unicode: "e6b2",
                unicode_decimal: 59058
            }, {
                icon_id: "24923195",
                name: "mic_slash_fill",
                font_class: "micoff-filled",
                unicode: "e6b0",
                unicode_decimal: 59056
            }, {
                icon_id: "24923165",
                name: "map-pin-ellipse",
                font_class: "map-pin-ellipse",
                unicode: "e6ac",
                unicode_decimal: 59052
            }, {
                icon_id: "24923166",
                name: "map-pin",
                font_class: "map-pin",
                unicode: "e6ad",
                unicode_decimal: 59053
            }, {
                icon_id: "24923167",
                name: "location",
                font_class: "location",
                unicode: "e6ae",
                unicode_decimal: 59054
            }, {
                icon_id: "24923064",
                name: "starhalf",
                font_class: "starhalf",
                unicode: "e683",
                unicode_decimal: 59011
            }, {
                icon_id: "24923065",
                name: "star",
                font_class: "star",
                unicode: "e688",
                unicode_decimal: 59016
            }, {
                icon_id: "24923066",
                name: "star-filled",
                font_class: "star-filled",
                unicode: "e68f",
                unicode_decimal: 59023
            }, {
                icon_id: "24899646",
                name: "a-rilidaka",
                font_class: "calendar",
                unicode: "e6a0",
                unicode_decimal: 59040
            }, {
                icon_id: "24899647",
                name: "fire",
                font_class: "fire",
                unicode: "e6a1",
                unicode_decimal: 59041
            }, {
                icon_id: "24899648",
                name: "paihangbang",
                font_class: "medal",
                unicode: "e6a2",
                unicode_decimal: 59042
            }, {
                icon_id: "24899649",
                name: "font",
                font_class: "font",
                unicode: "e6a3",
                unicode_decimal: 59043
            }, {
                icon_id: "24899650",
                name: "gift",
                font_class: "gift",
                unicode: "e6a4",
                unicode_decimal: 59044
            }, {
                icon_id: "24899651",
                name: "link",
                font_class: "link",
                unicode: "e6a5",
                unicode_decimal: 59045
            }, {
                icon_id: "24899652",
                name: "notification",
                font_class: "notification",
                unicode: "e6a6",
                unicode_decimal: 59046
            }, {
                icon_id: "24899653",
                name: "staff",
                font_class: "staff",
                unicode: "e6a7",
                unicode_decimal: 59047
            }, {
                icon_id: "24899654",
                name: "VIP",
                font_class: "vip",
                unicode: "e6a8",
                unicode_decimal: 59048
            }, {
                icon_id: "24899655",
                name: "folder_add",
                font_class: "folder-add",
                unicode: "e6a9",
                unicode_decimal: 59049
            }, {
                icon_id: "24899656",
                name: "tune",
                font_class: "tune",
                unicode: "e6aa",
                unicode_decimal: 59050
            }, {
                icon_id: "24899657",
                name: "shimingrenzheng",
                font_class: "auth",
                unicode: "e6ab",
                unicode_decimal: 59051
            }, {
                icon_id: "24899565",
                name: "person",
                font_class: "person",
                unicode: "e699",
                unicode_decimal: 59033
            }, {
                icon_id: "24899566",
                name: "email-filled",
                font_class: "email-filled",
                unicode: "e69a",
                unicode_decimal: 59034
            }, {
                icon_id: "24899567",
                name: "phone-filled",
                font_class: "phone-filled",
                unicode: "e69b",
                unicode_decimal: 59035
            }, {
                icon_id: "24899568",
                name: "phone",
                font_class: "phone",
                unicode: "e69c",
                unicode_decimal: 59036
            }, {
                icon_id: "24899570",
                name: "email",
                font_class: "email",
                unicode: "e69e",
                unicode_decimal: 59038
            }, {
                icon_id: "24899571",
                name: "personadd",
                font_class: "personadd",
                unicode: "e69f",
                unicode_decimal: 59039
            }, {
                icon_id: "24899558",
                name: "chatboxes-filled",
                font_class: "chatboxes-filled",
                unicode: "e692",
                unicode_decimal: 59026
            }, {
                icon_id: "24899559",
                name: "contact",
                font_class: "contact",
                unicode: "e693",
                unicode_decimal: 59027
            }, {
                icon_id: "24899560",
                name: "chatbubble-filled",
                font_class: "chatbubble-filled",
                unicode: "e694",
                unicode_decimal: 59028
            }, {
                icon_id: "24899561",
                name: "contact-filled",
                font_class: "contact-filled",
                unicode: "e695",
                unicode_decimal: 59029
            }, {
                icon_id: "24899562",
                name: "chatboxes",
                font_class: "chatboxes",
                unicode: "e696",
                unicode_decimal: 59030
            }, {
                icon_id: "24899563",
                name: "chatbubble",
                font_class: "chatbubble",
                unicode: "e697",
                unicode_decimal: 59031
            }, {
                icon_id: "24881290",
                name: "upload-filled",
                font_class: "upload-filled",
                unicode: "e68e",
                unicode_decimal: 59022
            }, {
                icon_id: "24881292",
                name: "upload",
                font_class: "upload",
                unicode: "e690",
                unicode_decimal: 59024
            }, {
                icon_id: "24881293",
                name: "weixin",
                font_class: "weixin",
                unicode: "e691",
                unicode_decimal: 59025
            }, {
                icon_id: "24881274",
                name: "compose",
                font_class: "compose",
                unicode: "e67f",
                unicode_decimal: 59007
            }, {
                icon_id: "24881275",
                name: "qq",
                font_class: "qq",
                unicode: "e680",
                unicode_decimal: 59008
            }, {
                icon_id: "24881276",
                name: "download-filled",
                font_class: "download-filled",
                unicode: "e681",
                unicode_decimal: 59009
            }, {
                icon_id: "24881277",
                name: "pengyouquan",
                font_class: "pyq",
                unicode: "e682",
                unicode_decimal: 59010
            }, {
                icon_id: "24881279",
                name: "sound",
                font_class: "sound",
                unicode: "e684",
                unicode_decimal: 59012
            }, {
                icon_id: "24881280",
                name: "trash-filled",
                font_class: "trash-filled",
                unicode: "e685",
                unicode_decimal: 59013
            }, {
                icon_id: "24881281",
                name: "sound-filled",
                font_class: "sound-filled",
                unicode: "e686",
                unicode_decimal: 59014
            }, {
                icon_id: "24881282",
                name: "trash",
                font_class: "trash",
                unicode: "e687",
                unicode_decimal: 59015
            }, {
                icon_id: "24881284",
                name: "videocam-filled",
                font_class: "videocam-filled",
                unicode: "e689",
                unicode_decimal: 59017
            }, {
                icon_id: "24881285",
                name: "spinner-cycle",
                font_class: "spinner-cycle",
                unicode: "e68a",
                unicode_decimal: 59018
            }, {
                icon_id: "24881286",
                name: "weibo",
                font_class: "weibo",
                unicode: "e68b",
                unicode_decimal: 59019
            }, {
                icon_id: "24881288",
                name: "videocam",
                font_class: "videocam",
                unicode: "e68c",
                unicode_decimal: 59020
            }, {
                icon_id: "24881289",
                name: "download",
                font_class: "download",
                unicode: "e68d",
                unicode_decimal: 59021
            }, {
                icon_id: "24879601",
                name: "help",
                font_class: "help",
                unicode: "e679",
                unicode_decimal: 59001
            }, {
                icon_id: "24879602",
                name: "navigate-filled",
                font_class: "navigate-filled",
                unicode: "e67a",
                unicode_decimal: 59002
            }, {
                icon_id: "24879603",
                name: "plusempty",
                font_class: "plusempty",
                unicode: "e67b",
                unicode_decimal: 59003
            }, {
                icon_id: "24879604",
                name: "smallcircle",
                font_class: "smallcircle",
                unicode: "e67c",
                unicode_decimal: 59004
            }, {
                icon_id: "24879605",
                name: "minus-filled",
                font_class: "minus-filled",
                unicode: "e67d",
                unicode_decimal: 59005
            }, {
                icon_id: "24879606",
                name: "micoff",
                font_class: "micoff",
                unicode: "e67e",
                unicode_decimal: 59006
            }, {
                icon_id: "24879588",
                name: "closeempty",
                font_class: "closeempty",
                unicode: "e66c",
                unicode_decimal: 58988
            }, {
                icon_id: "24879589",
                name: "clear",
                font_class: "clear",
                unicode: "e66d",
                unicode_decimal: 58989
            }, {
                icon_id: "24879590",
                name: "navigate",
                font_class: "navigate",
                unicode: "e66e",
                unicode_decimal: 58990
            }, {
                icon_id: "24879591",
                name: "minus",
                font_class: "minus",
                unicode: "e66f",
                unicode_decimal: 58991
            }, {
                icon_id: "24879592",
                name: "image",
                font_class: "image",
                unicode: "e670",
                unicode_decimal: 58992
            }, {
                icon_id: "24879593",
                name: "mic",
                font_class: "mic",
                unicode: "e671",
                unicode_decimal: 58993
            }, {
                icon_id: "24879594",
                name: "paperplane",
                font_class: "paperplane",
                unicode: "e672",
                unicode_decimal: 58994
            }, {
                icon_id: "24879595",
                name: "close",
                font_class: "close",
                unicode: "e673",
                unicode_decimal: 58995
            }, {
                icon_id: "24879596",
                name: "help-filled",
                font_class: "help-filled",
                unicode: "e674",
                unicode_decimal: 58996
            }, {
                icon_id: "24879597",
                name: "plus-filled",
                font_class: "paperplane-filled",
                unicode: "e675",
                unicode_decimal: 58997
            }, {
                icon_id: "24879598",
                name: "plus",
                font_class: "plus",
                unicode: "e676",
                unicode_decimal: 58998
            }, {
                icon_id: "24879599",
                name: "mic-filled",
                font_class: "mic-filled",
                unicode: "e677",
                unicode_decimal: 58999
            }, {
                icon_id: "24879600",
                name: "image-filled",
                font_class: "image-filled",
                unicode: "e678",
                unicode_decimal: 59e3
            }, {
                icon_id: "24855900",
                name: "locked-filled",
                font_class: "locked-filled",
                unicode: "e668",
                unicode_decimal: 58984
            }, {
                icon_id: "24855901",
                name: "info",
                font_class: "info",
                unicode: "e669",
                unicode_decimal: 58985
            }, {
                icon_id: "24855903",
                name: "locked",
                font_class: "locked",
                unicode: "e66b",
                unicode_decimal: 58987
            }, {
                icon_id: "24855884",
                name: "camera-filled",
                font_class: "camera-filled",
                unicode: "e658",
                unicode_decimal: 58968
            }, {
                icon_id: "24855885",
                name: "chat-filled",
                font_class: "chat-filled",
                unicode: "e659",
                unicode_decimal: 58969
            }, {
                icon_id: "24855886",
                name: "camera",
                font_class: "camera",
                unicode: "e65a",
                unicode_decimal: 58970
            }, {
                icon_id: "24855887",
                name: "circle",
                font_class: "circle",
                unicode: "e65b",
                unicode_decimal: 58971
            }, {
                icon_id: "24855888",
                name: "checkmarkempty",
                font_class: "checkmarkempty",
                unicode: "e65c",
                unicode_decimal: 58972
            }, {
                icon_id: "24855889",
                name: "chat",
                font_class: "chat",
                unicode: "e65d",
                unicode_decimal: 58973
            }, {
                icon_id: "24855890",
                name: "circle-filled",
                font_class: "circle-filled",
                unicode: "e65e",
                unicode_decimal: 58974
            }, {
                icon_id: "24855891",
                name: "flag",
                font_class: "flag",
                unicode: "e65f",
                unicode_decimal: 58975
            }, {
                icon_id: "24855892",
                name: "flag-filled",
                font_class: "flag-filled",
                unicode: "e660",
                unicode_decimal: 58976
            }, {
                icon_id: "24855893",
                name: "gear-filled",
                font_class: "gear-filled",
                unicode: "e661",
                unicode_decimal: 58977
            }, {
                icon_id: "24855894",
                name: "home",
                font_class: "home",
                unicode: "e662",
                unicode_decimal: 58978
            }, {
                icon_id: "24855895",
                name: "home-filled",
                font_class: "home-filled",
                unicode: "e663",
                unicode_decimal: 58979
            }, {
                icon_id: "24855896",
                name: "gear",
                font_class: "gear",
                unicode: "e664",
                unicode_decimal: 58980
            }, {
                icon_id: "24855897",
                name: "smallcircle-filled",
                font_class: "smallcircle-filled",
                unicode: "e665",
                unicode_decimal: 58981
            }, {
                icon_id: "24855898",
                name: "map-filled",
                font_class: "map-filled",
                unicode: "e666",
                unicode_decimal: 58982
            }, {
                icon_id: "24855899",
                name: "map",
                font_class: "map",
                unicode: "e667",
                unicode_decimal: 58983
            }, {
                icon_id: "24855825",
                name: "refresh-filled",
                font_class: "refresh-filled",
                unicode: "e656",
                unicode_decimal: 58966
            }, {
                icon_id: "24855826",
                name: "refresh",
                font_class: "refresh",
                unicode: "e657",
                unicode_decimal: 58967
            }, {
                icon_id: "24855808",
                name: "cloud-upload",
                font_class: "cloud-upload",
                unicode: "e645",
                unicode_decimal: 58949
            }, {
                icon_id: "24855809",
                name: "cloud-download-filled",
                font_class: "cloud-download-filled",
                unicode: "e646",
                unicode_decimal: 58950
            }, {
                icon_id: "24855810",
                name: "cloud-download",
                font_class: "cloud-download",
                unicode: "e647",
                unicode_decimal: 58951
            }, {
                icon_id: "24855811",
                name: "cloud-upload-filled",
                font_class: "cloud-upload-filled",
                unicode: "e648",
                unicode_decimal: 58952
            }, {
                icon_id: "24855813",
                name: "redo",
                font_class: "redo",
                unicode: "e64a",
                unicode_decimal: 58954
            }, {
                icon_id: "24855814",
                name: "images-filled",
                font_class: "images-filled",
                unicode: "e64b",
                unicode_decimal: 58955
            }, {
                icon_id: "24855815",
                name: "undo-filled",
                font_class: "undo-filled",
                unicode: "e64c",
                unicode_decimal: 58956
            }, {
                icon_id: "24855816",
                name: "more",
                font_class: "more",
                unicode: "e64d",
                unicode_decimal: 58957
            }, {
                icon_id: "24855817",
                name: "more-filled",
                font_class: "more-filled",
                unicode: "e64e",
                unicode_decimal: 58958
            }, {
                icon_id: "24855818",
                name: "undo",
                font_class: "undo",
                unicode: "e64f",
                unicode_decimal: 58959
            }, {
                icon_id: "24855819",
                name: "images",
                font_class: "images",
                unicode: "e650",
                unicode_decimal: 58960
            }, {
                icon_id: "24855821",
                name: "paperclip",
                font_class: "paperclip",
                unicode: "e652",
                unicode_decimal: 58962
            }, {
                icon_id: "24855822",
                name: "settings",
                font_class: "settings",
                unicode: "e653",
                unicode_decimal: 58963
            }, {
                icon_id: "24855823",
                name: "search",
                font_class: "search",
                unicode: "e654",
                unicode_decimal: 58964
            }, {
                icon_id: "24855824",
                name: "redo-filled",
                font_class: "redo-filled",
                unicode: "e655",
                unicode_decimal: 58965
            }, {
                icon_id: "24841702",
                name: "list",
                font_class: "list",
                unicode: "e644",
                unicode_decimal: 58948
            }, {
                icon_id: "24841489",
                name: "mail-open-filled",
                font_class: "mail-open-filled",
                unicode: "e63a",
                unicode_decimal: 58938
            }, {
                icon_id: "24841491",
                name: "hand-thumbsdown-filled",
                font_class: "hand-down-filled",
                unicode: "e63c",
                unicode_decimal: 58940
            }, {
                icon_id: "24841492",
                name: "hand-thumbsdown",
                font_class: "hand-down",
                unicode: "e63d",
                unicode_decimal: 58941
            }, {
                icon_id: "24841493",
                name: "hand-thumbsup-filled",
                font_class: "hand-up-filled",
                unicode: "e63e",
                unicode_decimal: 58942
            }, {
                icon_id: "24841494",
                name: "hand-thumbsup",
                font_class: "hand-up",
                unicode: "e63f",
                unicode_decimal: 58943
            }, {
                icon_id: "24841496",
                name: "heart-filled",
                font_class: "heart-filled",
                unicode: "e641",
                unicode_decimal: 58945
            }, {
                icon_id: "24841498",
                name: "mail-open",
                font_class: "mail-open",
                unicode: "e643",
                unicode_decimal: 58947
            }, {
                icon_id: "24841488",
                name: "heart",
                font_class: "heart",
                unicode: "e639",
                unicode_decimal: 58937
            }, {
                icon_id: "24839963",
                name: "loop",
                font_class: "loop",
                unicode: "e633",
                unicode_decimal: 58931
            }, {
                icon_id: "24839866",
                name: "pulldown",
                font_class: "pulldown",
                unicode: "e632",
                unicode_decimal: 58930
            }, {
                icon_id: "24813798",
                name: "scan",
                font_class: "scan",
                unicode: "e62a",
                unicode_decimal: 58922
            }, {
                icon_id: "24813786",
                name: "bars",
                font_class: "bars",
                unicode: "e627",
                unicode_decimal: 58919
            }, {
                icon_id: "24813788",
                name: "cart-filled",
                font_class: "cart-filled",
                unicode: "e629",
                unicode_decimal: 58921
            }, {
                icon_id: "24813790",
                name: "checkbox",
                font_class: "checkbox",
                unicode: "e62b",
                unicode_decimal: 58923
            }, {
                icon_id: "24813791",
                name: "checkbox-filled",
                font_class: "checkbox-filled",
                unicode: "e62c",
                unicode_decimal: 58924
            }, {
                icon_id: "24813794",
                name: "shop",
                font_class: "shop",
                unicode: "e62f",
                unicode_decimal: 58927
            }, {
                icon_id: "24813795",
                name: "headphones",
                font_class: "headphones",
                unicode: "e630",
                unicode_decimal: 58928
            }, {
                icon_id: "24813796",
                name: "cart",
                font_class: "cart",
                unicode: "e631",
                unicode_decimal: 58929
            } ]
        };
    },
    "7ec2": function(e, l, a) {
        var t = a("7037").default;
        function n() {
            e.exports = n = function() {
                return l;
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
            var l = {}, a = Object.prototype, r = a.hasOwnProperty, u = Object.defineProperty || function(e, l, a) {
                e[l] = a.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", c = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
            function v(e, l, a) {
                return Object.defineProperty(e, l, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[l];
            }
            try {
                v({}, "");
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                v = function(e, l, a) {
                    return e[l] = a;
                };
            }
            function b(e, l, a, t) {
                var n = l && l.prototype instanceof d ? l : d, r = Object.create(n.prototype), o = new D(t || []);
                return u(r, "_invoke", {
                    value: A(e, a, o)
                }), r;
            }
            function f(e, l, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(l, a)
                    };
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            l.wrap = b;
            var p = {};
            function d() {}
            function g() {}
            function h() {}
            var m = {};
            v(m, i, function() {
                return this;
            });
            var y = Object.getPrototypeOf, _ = y && y(y(j([])));
            _ && _ !== a && r.call(_, i) && (m = _);
            var x = h.prototype = d.prototype = Object.create(m);
            function w(e) {
                [ "next", "throw", "return" ].forEach(function(l) {
                    v(e, l, function(e) {
                        return this._invoke(l, e);
                    });
                });
            }
            function S(e, l) {
                var a;
                u(this, "_invoke", {
                    value: function(n, u) {
                        function o() {
                            return new l(function(a, o) {
                                !function a(n, u, o, i) {
                                    var c = f(e[n], e, u);
                                    if ("throw" !== c.type) {
                                        var s = c.arg, v = s.value;
                                        return v && "object" == t(v) && r.call(v, "__await") ? l.resolve(v.__await).then(function(e) {
                                            a("next", e, o, i);
                                        }, function(e) {
                                            a("throw", e, o, i);
                                        }) : l.resolve(v).then(function(e) {
                                            s.value = e, o(s);
                                        }, function(e) {
                                            return a("throw", e, o, i);
                                        });
                                    }
                                    i(c.arg);
                                }(n, u, a, o);
                            });
                        }
                        return a = a ? a.then(o, o) : o();
                    }
                });
            }
            function A(e, l, a) {
                var t = "suspendedStart";
                return function(n, r) {
                    if ("executing" === t) throw new Error("Generator is already running");
                    if ("completed" === t) {
                        if ("throw" === n) throw r;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (a.method = n, a.arg = r; ;) {
                        var u = a.delegate;
                        if (u) {
                            var o = O(u, a);
                            if (o) {
                                if (o === p) continue;
                                return o;
                            }
                        }
                        if ("next" === a.method) a.sent = a._sent = a.arg; else if ("throw" === a.method) {
                            if ("suspendedStart" === t) throw t = "completed", a.arg;
                            a.dispatchException(a.arg);
                        } else "return" === a.method && a.abrupt("return", a.arg);
                        t = "executing";
                        var i = f(e, l, a);
                        if ("normal" === i.type) {
                            if (t = a.done ? "completed" : "suspendedYield", i.arg === p) continue;
                            return {
                                value: i.arg,
                                done: a.done
                            };
                        }
                        "throw" === i.type && (t = "completed", a.method = "throw", a.arg = i.arg);
                    }
                };
            }
            function O(e, l) {
                var a = l.method, t = e.iterator[a];
                if (void 0 === t) return l.delegate = null, "throw" === a && e.iterator.return && (l.method = "return", 
                l.arg = void 0, O(e, l), "throw" === l.method) || "return" !== a && (l.method = "throw", 
                l.arg = new TypeError("The iterator does not provide a '" + a + "' method")), p;
                var n = f(t, e.iterator, l.arg);
                if ("throw" === n.type) return l.method = "throw", l.arg = n.arg, l.delegate = null, 
                p;
                var r = n.arg;
                return r ? r.done ? (l[e.resultName] = r.value, l.next = e.nextLoc, "return" !== l.method && (l.method = "next", 
                l.arg = void 0), l.delegate = null, p) : r : (l.method = "throw", l.arg = new TypeError("iterator result is not an object"), 
                l.delegate = null, p);
            }
            function k(e) {
                var l = {
                    tryLoc: e[0]
                };
                1 in e && (l.catchLoc = e[1]), 2 in e && (l.finallyLoc = e[2], l.afterLoc = e[3]), 
                this.tryEntries.push(l);
            }
            function P(e) {
                var l = e.completion || {};
                l.type = "normal", delete l.arg, e.completion = l;
            }
            function D(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(k, this), this.reset(!0);
            }
            function j(e) {
                if (e) {
                    var l = e[i];
                    if (l) return l.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var a = -1, t = function l() {
                            for (;++a < e.length; ) if (r.call(e, a)) return l.value = e[a], l.done = !1, l;
                            return l.value = void 0, l.done = !0, l;
                        };
                        return t.next = t;
                    }
                }
                return {
                    next: C
                };
            }
            function C() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return g.prototype = h, u(x, "constructor", {
                value: h,
                configurable: !0
            }), u(h, "constructor", {
                value: g,
                configurable: !0
            }), g.displayName = v(h, s, "GeneratorFunction"), l.isGeneratorFunction = function(e) {
                var l = "function" == typeof e && e.constructor;
                return !!l && (l === g || "GeneratorFunction" === (l.displayName || l.name));
            }, l.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, v(e, s, "GeneratorFunction")), 
                e.prototype = Object.create(x), e;
            }, l.awrap = function(e) {
                return {
                    __await: e
                };
            }, w(S.prototype), v(S.prototype, c, function() {
                return this;
            }), l.AsyncIterator = S, l.async = function(e, a, t, n, r) {
                void 0 === r && (r = Promise);
                var u = new S(b(e, a, t, n), r);
                return l.isGeneratorFunction(a) ? u : u.next().then(function(e) {
                    return e.done ? e.value : u.next();
                });
            }, w(x), v(x, s, "Generator"), v(x, i, function() {
                return this;
            }), v(x, "toString", function() {
                return "[object Generator]";
            }), l.keys = function(e) {
                var l = Object(e), a = [];
                for (var t in l) a.push(t);
                return a.reverse(), function e() {
                    for (;a.length; ) {
                        var t = a.pop();
                        if (t in l) return e.value = t, e.done = !1, e;
                    }
                    return e.done = !0, e;
                };
            }, l.values = j, D.prototype = {
                constructor: D,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(P), 
                    !e) for (var l in this) "t" === l.charAt(0) && r.call(this, l) && !isNaN(+l.slice(1)) && (this[l] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var l = this;
                    function a(a, t) {
                        return u.type = "throw", u.arg = e, l.next = a, t && (l.method = "next", l.arg = void 0), 
                        !!t;
                    }
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t], u = n.completion;
                        if ("root" === n.tryLoc) return a("end");
                        if (n.tryLoc <= this.prev) {
                            var o = r.call(n, "catchLoc"), i = r.call(n, "finallyLoc");
                            if (o && i) {
                                if (this.prev < n.catchLoc) return a(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return a(n.finallyLoc);
                            } else if (o) {
                                if (this.prev < n.catchLoc) return a(n.catchLoc, !0);
                            } else {
                                if (!i) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return a(n.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(e, l) {
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var t = this.tryEntries[a];
                        if (t.tryLoc <= this.prev && r.call(t, "finallyLoc") && this.prev < t.finallyLoc) {
                            var n = t;
                            break;
                        }
                    }
                    n && ("break" === e || "continue" === e) && n.tryLoc <= l && l <= n.finallyLoc && (n = null);
                    var u = n ? n.completion : {};
                    return u.type = e, u.arg = l, n ? (this.method = "next", this.next = n.finallyLoc, 
                    p) : this.complete(u);
                },
                complete: function(e, l) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                    this.method = "return", this.next = "end") : "normal" === e.type && l && (this.next = l), 
                    p;
                },
                finish: function(e) {
                    for (var l = this.tryEntries.length - 1; l >= 0; --l) {
                        var a = this.tryEntries[l];
                        if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), P(a), p;
                    }
                },
                catch: function(e) {
                    for (var l = this.tryEntries.length - 1; l >= 0; --l) {
                        var a = this.tryEntries[l];
                        if (a.tryLoc === e) {
                            var t = a.completion;
                            if ("throw" === t.type) {
                                var n = t.arg;
                                P(a);
                            }
                            return n;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(e, l, a) {
                    return this.delegate = {
                        iterator: j(e),
                        resultName: l,
                        nextLoc: a
                    }, "next" === this.method && (this.arg = void 0), p;
                }
            }, l;
        }
        e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "81d4": function(e) {
        e.exports = JSON.parse('{"uni-datetime-picker.selectDate":"select date","uni-datetime-picker.selectTime":"select time","uni-datetime-picker.selectDateTime":"select date and time","uni-datetime-picker.startDate":"start date","uni-datetime-picker.endDate":"end date","uni-datetime-picker.startTime":"start time","uni-datetime-picker.endTime":"end time","uni-datetime-picker.ok":"ok","uni-datetime-picker.clear":"clear","uni-datetime-picker.cancel":"cancel","uni-datetime-picker.year":"-","uni-datetime-picker.month":"","uni-calender.MON":"MON","uni-calender.TUE":"TUE","uni-calender.WED":"WED","uni-calender.THU":"THU","uni-calender.FRI":"FRI","uni-calender.SAT":"SAT","uni-calender.SUN":"SUN","uni-calender.confirm":"confirm"}');
    },
    8921: function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.getGHOpenid = function() {
                var l = getApp().globalData.openid;
                if (l) return console.log("openid"), console.log(l), l;
                var a = e.getStorageSync("openid");
                if (a) return console.log("openid-getStorageSync"), console.log(a.openid), a.openid;
                e.navigateTo({
                    url: "/pages/getOpenid/getOpenid?getIdType=openid"
                });
            }, l.getHbopenid = function() {
                var l = getApp().globalData.hbopenid;
                if (l) return console.log("红包-globalDataHbopenid"), console.log(l), l;
                var a = e.getStorageSync("hbopenid");
                if (a) return console.log("红包-getStorageSync"), console.log(a.hbopenid), a.hbopenid;
                e.navigateTo({
                    url: "/pages/getOpenid/getOpenid?getIdType=hbopenid"
                });
            }, l.getUserDataFun = c, l.getVjifenOpenid = function() {
                var l = getApp().globalData.vjfOpenid;
                if (l) return console.log("vjifenOpenid"), console.log(l), l;
                var a = e.getStorageSync("vjfOpenid");
                if (a) return console.log("vjifenOpenid"), console.log(a.vjfOpenid), a.vjfOpenid;
                e.navigateTo({
                    url: "/pages/getOpenid/getOpenid?getIdType=vjfOpenid"
                });
            }, l.getXCXOpenid = function() {
                return f.apply(this, arguments);
            }, l.isOfficialAccount = function() {
                var l = e.getStorageSync("curProvince").appid;
                return new Promise(function(a, t) {
                    var n = e.getStorageSync("openid").openid;
                    e.request({
                        url: o.config.authUrl + "/wx3/uinfo2?openid=" + n + "&appid=" + l,
                        method: "GET",
                        complete: function(e) {
                            console.log("关注", e), 1 == e.data.subscribe ? a(1) : a(0);
                        }
                    });
                });
            }, l.officialAccount = function(l) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", t = "", n = "henanpz" == getApp().globalData.projectServerName ? "henan" : getApp().globalData.projectServerName;
                t = a ? "https://xcxsite.vjifen.com/v/guanzhuGZH/attention.html?source=person&provinceName=" + n : "https://xcxsite.vjifen.com/v/guanzhuGZH/attention.html?provinceName=" + n, 
                getApp().globalData.officialAccountUrl = t, e.navigateTo({
                    url: "/pagesScan/webView/webView?webViewUrl=1"
                });
            }, l.toGetOpenid = function(l) {
                e.navigateTo({
                    url: "/pages/getOpenid/getOpenid?getIdType=" + l
                });
            };
            var n = t(a("2eee")), r = t(a("c973")), u = a("a1cb"), o = a("0488"), i = a("64da");
            function c() {
                return s.apply(this, arguments);
            }
            function s() {
                return (s = (0, r.default)(n.default.mark(function l() {
                    var a, t, r;
                    return n.default.wrap(function(l) {
                        for (;;) switch (l.prev = l.next) {
                          case 0:
                            if (a = "", !(t = e.getStorageSync("userData"))) {
                                l.next = 19;
                                break;
                            }
                            return l.next = 6, (0, u.checkSession)();

                          case 6:
                            if (r = l.sent, console.log("检查状态"), console.log(r), 0 != r) {
                                l.next = 13;
                                break;
                            }
                            a = t.uinfo, l.next = 17;
                            break;

                          case 13:
                            return console.log("状态过期 重新获取"), l.next = 16, v();

                          case 16:
                            a = l.sent;

                          case 17:
                            l.next = 22;
                            break;

                          case 19:
                            return l.next = 21, v();

                          case 21:
                            a = l.sent;

                          case 22:
                            return l.abrupt("return", a);

                          case 23:
                          case "end":
                            return l.stop();
                        }
                    }, l, this);
                }))).apply(this, arguments);
            }
            function v() {
                return b.apply(this, arguments);
            }
            function b() {
                return (b = (0, r.default)(n.default.mark(function e() {
                    var l, a, t;
                    return n.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return l = "", e.next = 3, (0, u.getCode)();

                          case 3:
                            return a = e.sent, e.next = 6, (0, u.getOpenid)(a, i.provinceCode);

                          case 6:
                            return t = e.sent, l = t.uinfo ? t.uinfo : "", e.abrupt("return", l);

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            function f() {
                return (f = (0, r.default)(n.default.mark(function l() {
                    var a, t, r, u, o, i;
                    return n.default.wrap(function(l) {
                        for (;;) switch (l.prev = l.next) {
                          case 0:
                            if (r = getApp().globalData.xcxOpenid, u = getApp().globalData.unionid || e.getStorageSync("unionid").unionid || (null === (a = e.getStorageSync("userData")) || void 0 === a || null === (t = a.uinfo) || void 0 === t ? void 0 : t.unionid) || "", 
                            !r || !u) {
                                l.next = 8;
                                break;
                            }
                            return console.log("globalDataXCXOpenid"), console.log(r), l.abrupt("return", r);

                          case 8:
                            if (!(o = e.getStorageSync("xcxOpenid")) || !u) {
                                l.next = 15;
                                break;
                            }
                            return console.log("storageXCXOpenid"), console.log(o.xcxOpenid), l.abrupt("return", o.xcxOpenid);

                          case 15:
                            return l.next = 17, c();

                          case 17:
                            return i = l.sent, console.log("returnUserData"), console.log(i), l.abrupt("return", i.openid);

                          case 21:
                          case "end":
                            return l.stop();
                        }
                    }, l);
                }))).apply(this, arguments);
            }
        }).call(this, a("543d").default);
    },
    "8ea76": function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var n = t(a("2eee")), r = t(a("c973")), u = a("9b31"), o = a("76d6"), i = {
                data: function() {
                    return {
                        sw_swiperList: []
                    };
                },
                methods: {
                    querySwiperlist: function(l) {
                        var a = this;
                        return (0, r.default)(n.default.mark(function t() {
                            var r, o, i, c, s, v, b, f, p;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (o = "00", i = "00", c = getApp().globalData.userLocation || e.getStorageSync("userLocation"), 
                                    console.log("-----------userLocation"), console.log(c), !(c && c.longitude && c.latitude)) {
                                        t.next = 9;
                                        break;
                                    }
                                    o = c.longitude, i = c.latitude, t.next = 14;
                                    break;

                                  case 9:
                                    return t.next = 11, a.sw_getLocation();

                                  case 11:
                                    s = t.sent, o = s.longitude, i = s.latitude;

                                  case 14:
                                    return (v = {}).longitude = o, v.latitude = i, v.projectServerName = null === (r = getApp().globalData.curProvince) || void 0 === r ? void 0 : r.projectServerName, 
                                    v.adType = l, t.next = 21, (0, u.requestPost)("/adPub/adInfo", v);

                                  case 21:
                                    if (b = t.sent, console.log(b), f = b.result, p = b.reply, "0" !== (null == f ? void 0 : f.code) || !p || !p.length) {
                                        t.next = 28;
                                        break;
                                    }
                                    return t.abrupt("return", p);

                                  case 28:
                                    return t.abrupt("return", null);

                                  case 29:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    handleSwiperlist: function(e, l) {
                        return e.map(function(e, a) {
                            e.className = "adType_" + l + (a + 1);
                        });
                    },
                    handleJumpEvent: function(l) {
                        var a = l.jumpTyp, t = l.jumpUrl, n = l.picJumpUrl, r = l.appid;
                        if (console.log("轮播图点击"), console.log(l), "1" == a) e.navigateTo({
                            url: "/pages/module/webview?target=".concat(t)
                        }); else if ("2" == a) e.navigateTo({
                            url: "/pages/module/imgWrap?target=".concat(t || n)
                        }); else if ("3" == a) e.navigateToMiniProgram({
                            appId: r,
                            path: t
                        }); else {
                            if ("4" != a) return;
                            e.reLaunch({
                                url: t
                            });
                        }
                    },
                    sw_getLocation: function() {
                        return new Promise(function(l, a) {
                            e.getSetting({
                                complete: function(a) {
                                    console.log(a), a.authSetting && 1 == a.authSetting["scope.getLocation"] ? (e.getLocation({
                                        type: "wgs84",
                                        complete: function(e) {
                                            console.log(e), (0, o.postLocationData)(e), 0 == e.errno && (getApp().globalData.longitude = e.longitude, 
                                            getApp().globalData.latitude = e.latitude, getApp().globalData.userLocation = e), 
                                            l(e);
                                        }
                                    }), console.log("after this.getLocation")) : l({
                                        longitude: "00",
                                        latitude: "00"
                                    });
                                }
                            });
                        });
                    }
                }
            };
            l.default = i;
        }).call(this, a("543d").default);
    },
    9005: function(e, l, a) {
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.tradePaying = l.secKillGoodsBeginRemind = l.returnGoodsExpress = l.queryTicketUserRecordList = l.queryGroupLog = l.queryAllowanceRecordList = l.operateGoodsCart = l.hotRecommend = l.homePageTemplateType = l.goodsExchangeForCart = l.goodsExchange = l.getShopGoodsRequst = l.getShopGoodsByIds = l.getHomePageSecKillGoodsAd = l.getGroupBuyingDetail = l.getGoodsDetail = l.getFistCategoryType = l.getExchangeRecord = l.getExchangeDetailByTradeNo = l.getCartByUserKey = l.expressSign = l.deleteExchangeInfoForUser = l.deleteByGoodsKeys = l.combinationGoods = l.cancelExchangeInfo = l.adInfo = void 0, 
            a("0488");
            var t = a("9b31");
            l.homePageTemplateType = function(e) {
                return (0, t.requestPost)("/vpoints/homePage/homePageTemplateType", e);
            }, l.hotRecommend = function(l) {
                var a = getApp().globalData.userLocation || e.getStorageSync("userLocation");
                if (a) {
                    var n = a.longitude, r = a.latitude;
                    l.longitude = n || "", l.latitude = r || "";
                }
                return (0, t.requestPost)("/vpoints/homePage/hotRecommend", l);
            }, l.getFistCategoryType = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsShop/getFistCategoryType", e);
            }, l.getShopGoodsRequst = function(l) {
                var a = getApp().globalData.userLocation || e.getStorageSync("userLocation");
                if (a) {
                    var n = a.longitude, r = a.latitude;
                    l.longitude = n || "", l.latitude = r || "";
                }
                return (0, t.requestPost)("/vpoints/vpointsShop/getShopGoods", l);
            }, l.getGoodsDetail = function(l) {
                var a = getApp().globalData.userLocation || e.getStorageSync("userLocation");
                if (a) {
                    var n = a.longitude, r = a.latitude;
                    l.longitude = n || "", l.latitude = r || "";
                }
                return (0, t.requestPost)("/vpoints/vpointsShop/getGoodsDetail", l);
            }, l.combinationGoods = function(e) {
                return (0, t.requestPost)("/vpoints/homePage/combinationGoods", e);
            }, l.getShopGoodsByIds = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsShop/getShopGoodsByIds", e);
            }, l.adInfo = function(e) {
                return (0, t.requestPost)("/adPub/adInfo", e);
            }, l.operateGoodsCart = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsCart/operateGoodsCart", e);
            }, l.getCartByUserKey = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsCart/getCartByUserKey", e);
            }, l.deleteByGoodsKeys = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsCart/deleteByGoodsKeys", e);
            }, l.goodsExchangeForCart = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsExchange/goodsExchangeForCart", e);
            }, l.goodsExchange = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsExchange/goodsExchange", e);
            }, l.getExchangeRecord = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsExchange/getExchangeRecord", e);
            }, l.expressSign = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsExchange/expressSign", e);
            }, l.cancelExchangeInfo = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsExchange/cancelExchangeInfo", e);
            }, l.deleteExchangeInfoForUser = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsExchange/deleteExchangeInfoForUser", e);
            }, l.tradePaying = function(e) {
                return (0, t.requestPost)("/trade/tradePaying", e);
            }, l.getExchangeDetailByTradeNo = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsExchange/getExchangeDetailByTradeNo", e);
            }, l.returnGoodsExpress = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsExchange/returnGoodsExpress", e);
            }, l.queryAllowanceRecordList = function(e) {
                return (0, t.requestPost)("/gifts/queryAllowanceRecordList", e);
            }, l.queryTicketUserRecordList = function(e) {
                return (0, t.requestPost)("/ticketUserRecord/queryTicketUserRecordList", e);
            }, l.getHomePageSecKillGoodsAd = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsShop/getHomePageSecKillGoodsAd", e);
            }, l.secKillGoodsBeginRemind = function(e) {
                return (0, t.requestPost)("/vpoints/vpointsShop/secKillGoodsBeginRemind", e);
            }, l.getGroupBuyingDetail = function(e) {
                return (0, t.requestPost)("/vpointsGroupBuying/getGroupBuyingDetail", e);
            }, l.queryGroupLog = function(e) {
                return (0, t.requestPost)("/vpointsGroupBuying/queryGroupLog", e);
            };
        }).call(this, a("543d").default);
    },
    9345: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, n = /^<\/([-A-Za-z0-9_]+)[^>]*>/, r = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
        function u(e) {
            for (var l = {}, a = e.split(","), t = 0; t < a.length; t += 1) l[a[t]] = !0;
            return l;
        }
        var o = u("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), i = u("address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), c = u("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), s = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), v = u("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
        l.default = function(e, l) {
            var a, u, b, f = e, p = [];
            function d(e, a) {
                var t;
                if (a) for (a = a.toLowerCase(), t = p.length - 1; t >= 0 && p[t] !== a; t -= 1) ; else t = 0;
                if (t >= 0) {
                    for (var n = p.length - 1; n >= t; n -= 1) l.end && l.end(p[n]);
                    p.length = t;
                }
            }
            function g(e, a, t, n) {
                if (a = a.toLowerCase(), i[a]) for (;p.last() && c[p.last()]; ) d(0, p.last());
                if (s[a] && p.last() === a && d(0, a), (n = o[a] || !!n) || p.push(a), l.start) {
                    var u = [];
                    t.replace(r, function(e, l) {
                        var a = arguments[2] || arguments[3] || arguments[4] || (v[l] ? l : "");
                        u.push({
                            name: l,
                            value: a,
                            escaped: a.replace(/(^|[^\\])"/g, '$1\\"')
                        });
                    }), l.start && l.start(a, u, n);
                }
            }
            for (p.last = function() {
                return p[p.length - 1];
            }; e; ) {
                if (u = !0, 0 === e.indexOf("</") ? (b = e.match(n), b && (e = e.substring(b[0].length), 
                b[0].replace(n, d), u = !1)) : 0 === e.indexOf("<") && (b = e.match(t), b && (e = e.substring(b[0].length), 
                b[0].replace(t, g), u = !1)), u) {
                    a = e.indexOf("<");
                    for (var h = ""; 0 === a; ) h += "<", a = (e = e.substring(1)).indexOf("<");
                    h += a < 0 ? e : e.substring(0, a), e = a < 0 ? "" : e.substring(a), l.chars && l.chars(h);
                }
                if (e === f) throw new Error("Parse Error: ".concat(e));
                f = e;
            }
            d();
        };
    },
    9523: function(e, l, a) {
        var t = a("a395");
        e.exports = function(e, l, a) {
            return (l = t(l)) in e ? Object.defineProperty(e, l, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[l] = a, e;
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "970b": function(e, l) {
        e.exports = function(e, l) {
            if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function");
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    "9b03": function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, n = /^<\/([-A-Za-z0-9_]+)[^>]*>/, r = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
        function u(e) {
            for (var l = {}, a = e.split(","), t = 0; t < a.length; t += 1) l[a[t]] = !0;
            return l;
        }
        var o = u("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), i = u("address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), c = u("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), s = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), v = u("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
        l.default = function(e, l) {
            var a, u, b, f = e, p = [];
            function d(e, a) {
                var t;
                if (a) for (a = a.toLowerCase(), t = p.length - 1; t >= 0 && p[t] !== a; t -= 1) ; else t = 0;
                if (t >= 0) {
                    for (var n = p.length - 1; n >= t; n -= 1) l.end && l.end(p[n]);
                    p.length = t;
                }
            }
            function g(e, a, t, n) {
                if (a = a.toLowerCase(), i[a]) for (;p.last() && c[p.last()]; ) d(0, p.last());
                if (s[a] && p.last() === a && d(0, a), (n = o[a] || !!n) || p.push(a), l.start) {
                    var u = [];
                    t.replace(r, function(e, l) {
                        var a = arguments[2] || arguments[3] || arguments[4] || (v[l] ? l : "");
                        u.push({
                            name: l,
                            value: a,
                            escaped: a.replace(/(^|[^\\])"/g, '$1\\"')
                        });
                    }), l.start && l.start(a, u, n);
                }
            }
            for (p.last = function() {
                return p[p.length - 1];
            }; e; ) {
                if (u = !0, 0 === e.indexOf("</") ? (b = e.match(n), b && (e = e.substring(b[0].length), 
                b[0].replace(n, d), u = !1)) : 0 === e.indexOf("<") && (b = e.match(t), b && (e = e.substring(b[0].length), 
                b[0].replace(t, g), u = !1)), u) {
                    a = e.indexOf("<");
                    for (var h = ""; 0 === a; ) h += "<", a = (e = e.substring(1)).indexOf("<");
                    h += a < 0 ? e : e.substring(0, a), e = a < 0 ? "" : e.substring(a), l.chars && l.chars(h);
                }
                if (e === f) throw new Error("Parse Error: ".concat(e));
                f = e;
            }
            d();
        };
    },
    "9b31": function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.requestPost = l.requestGet = l.request = void 0;
            var n = a("0488"), r = t(a("66fd")), u = [ "/WaitActivation/queryWaitActivationInfo", "/WaitActivation/getPrize" ], o = function(l, a) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n.config.requestUrl;
                return new Promise(function(n, i) {
                    var c, s;
                    t.openid = getApp().globalData.openid || e.getStorageSync("openid").openid, t.unionid = getApp().globalData.unionid || e.getStorageSync("unionid").unionid || (null === (c = e.getStorageSync("userData")) || void 0 === c || null === (s = c.uinfo) || void 0 === s ? void 0 : s.unionid) || "", 
                    t.memberOpenid = getApp().globalData.xcxOpenid || e.getStorageSync("xcxOpenid").xcxOpenid, 
                    t.paOpenid = getApp().globalData.xcxOpenid || e.getStorageSync("xcxOpenid").xcxOpenid, 
                    t.projectServerName = getApp().globalData.projectServerName || e.getStorageSync("projectServerName") || "projectServerName", 
                    getApp().globalData.projectServerName = getApp().globalData.projectServerName || e.getStorageSync("projectServerName"), 
                    u.includes(l) && (t.userKey = r.default.prototype.$md5(t.openid + "ee1ea22b-3c35-4452-8555-9f35fc7627a1").toUpperCase()), 
                    e.request({
                        url: o + l,
                        method: a,
                        data: t,
                        header: {
                            "Content-Type": "application/json"
                        },
                        success: function(e) {
                            console.log("\n"), console.log("请求地址：".concat(o + l)), console.log(t);
                            var a = e.data;
                            console.log(a), console.log("\n"), n(e.data);
                        },
                        fail: function(e) {
                            i(e);
                        }
                    });
                });
            };
            l.request = o, l.requestGet = function(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0;
                return o(e, "GET", l, a);
            }, l.requestPost = function(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0;
                return o(e, "POST", l, a);
            };
        }).call(this, a("543d").default);
    },
    "9b42": function(e, l) {
        e.exports = function(e, l) {
            var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != a) {
                var t, n, r, u, o = [], i = !0, c = !1;
                try {
                    if (r = (a = a.call(e)).next, 0 === l) {
                        if (Object(a) !== a) return;
                        i = !1;
                    } else for (;!(i = (t = r.call(a)).done) && (o.push(t.value), o.length !== l); i = !0) ;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    c = !0, n = e;
                } finally {
                    try {
                        if (!i && null != a.return && (u = a.return(), Object(u) !== u)) return;
                    } finally {
                        if (c) throw n;
                    }
                }
                return o;
            }
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    a1cb: function(e, l, a) {
        (function(e, t) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.analysisMobile = function(e, l) {
                return new Promise(function(a, n) {
                    var u = {
                        sessionKey: e,
                        encryptedData: l.encryptedData,
                        iv: l.iv,
                        provinceCode: r.provinceCode
                    };
                    t.request({
                        url: "https://xcxact.vjifen.com/api/decrypt",
                        method: "POST",
                        data: u,
                        success: function(e) {
                            console.log(e);
                            var l = e.data.data.decryptData;
                            t.setStorageSync("userMobileData", l), a(l);
                        },
                        fail: function(e) {
                            t.showModal({
                                title: "提示",
                                content: "解析手机号结果" + res.data
                            }), n("decrypt", e);
                        }
                    });
                });
            }, l.callPhone = function(e) {
                t.makePhoneCall({
                    phoneNumber: e,
                    success: function() {
                        console.log("拨打电话成功！");
                    },
                    fail: function() {
                        console.log("拨打电话失败！");
                    }
                });
            }, l.creatGHQrcode = l.checkSession = void 0, l.getCityInfo = function() {
                return new Promise(function(l, a) {
                    e.getLocation({
                        success: function(t) {
                            var n = t.latitude, r = t.longitude;
                            e.request({
                                url: "https://api.map.baidu.com/geocoder",
                                method: "GET",
                                dataType: "json",
                                data: {
                                    key: "4ATeuGLwAt08UunArKywQ1KyYalvpdi8",
                                    location: n + "," + r,
                                    output: "json"
                                },
                                success: function(e) {
                                    l(e.data.result);
                                },
                                fail: function(e) {
                                    a(e);
                                }
                            });
                        },
                        fail: function(e) {
                            a(e);
                        }
                    });
                });
            }, l.getCode = void 0, l.getLocation = function() {
                return new Promise(function(l, a) {
                    e.getLocation ? t.getLocation({
                        type: "wgs84",
                        complete: function(e) {
                            if (console.log(e), (0, u.postLocationData)(e), "getLocation:ok" == e.errMsg) {
                                l([ 0, e ]);
                                var a = e || {};
                                t.setStorageSync("userLocation", a), getApp().globalData.userLocation = a, getApp().globalData.longitude = a.longitude, 
                                getApp().globalData.latitude = a.latitude;
                            } else "getLocation:fail auth deny" == e.errMsg || "getLocation:fail authorize no response" == e.errMsg ? l([ 1 ]) : "getLocation:fail:auth denied" == e.errMsg ? l([ 2 ]) : l([ 3 ]);
                        }
                    }) : l([ 0, {
                        longitude: "00",
                        latitude: "00"
                    } ]);
                });
            }, l.getSettingLocation = l.getSetting = l.getOpenid = void 0, l.getUserInfo = function() {
                return new Promise(function(e, l) {
                    t.getUserInfo({
                        success: function(l) {
                            e(l), t.setStorage({
                                key: "userInfo",
                                data: l.userInfo
                            });
                        },
                        fail: function(e) {
                            l(e);
                        }
                    });
                });
            }, l.wxScanCode = function() {
                t.scanCode({
                    success: function(e) {
                        console.log("条码类型：" + e.scanType), console.log("条码内容：" + e.result), t.redirectTo({
                            url: "/pages/saoDianDe/activityEntrance/activityEntrance?q=" + encodeURIComponent(e.result) + "&status=1",
                            complete: function() {
                                getApp().globalData.openQrcode = !1;
                            }
                        });
                    },
                    fail: function(e) {
                        console.log("我是扫一扫页面"), console.log(e), "scanCode:fail cancel" == e.errMsg ? t.redirectTo({
                            url: "/pages/saoDianDe/activityEntrance/activityEntrance?isColsedScan=true",
                            complete: function() {
                                getApp().globalData.openQrcode = !1;
                            }
                        }) : t.switchTab({
                            url: "/pages/personal/personal.vue",
                            complete: function() {
                                getApp().globalData.openQrcode = !1;
                            }
                        });
                    }
                });
            };
            var n = a("0488"), r = a("64da"), u = a("76d6");
            l.checkSession = function() {
                return new Promise(function(e, l) {
                    t.checkSession({
                        success: function() {
                            console.log("状态未过期"), e(0);
                        },
                        fail: function() {
                            console.log("状态已过期"), e(1);
                        }
                    });
                }).catch(function(e) {
                    t.showToast({
                        icon: "none",
                        title: e.errMsg || "验证session失效",
                        duration: 2e3
                    });
                });
            }, l.getCode = function() {
                return new Promise(function(e, l) {
                    t.login({
                        success: function(a) {
                            console.log("loginloginloginlogin"), console.log(a), a && a.code ? e(a.code) : l(a);
                        }
                    });
                }).catch(function(e) {
                    t.showToast({
                        icon: "none",
                        title: e.errMsg || "获取code失败",
                        duration: 2e3
                    });
                });
            }, l.getSetting = function() {
                return new Promise(function(e, l) {
                    t.getSetting({
                        success: function(l) {
                            var a = l.authSetting;
                            a["scope.userInfo"] ? e(1) : !1 !== a["scope.userInfo"] ? e(2) : e(0);
                        },
                        fail: function(e) {
                            l(e);
                        }
                    });
                }).catch(function(e) {
                    t.showToast({
                        icon: "none",
                        title: e.errMsg || "获取授权状态失败",
                        duration: 2e3
                    });
                });
            }, l.getSettingLocation = function() {
                return new Promise(function(e, l) {
                    t.getSetting({
                        success: function(l) {
                            var a = l.authSetting;
                            a["scope.userFuzzyLocation"] ? e(1) : !1 !== a["scope.userFuzzyLocation"] ? e(2) : e(0);
                        },
                        fail: function(e) {
                            l(e);
                        }
                    });
                }).catch(function(e) {
                    t.showToast({
                        icon: "none",
                        title: e.errMsg || "获取位置状态失败",
                        duration: 2e3
                    });
                });
            }, l.getOpenid = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = "https://xcxact.vjifen.com/api/getOpenid", n = {
                    code: e,
                    provinceCode: l
                }, r = new Promise(function(e, l) {
                    t.request({
                        url: a,
                        method: "POST",
                        data: n,
                        success: function(l) {
                            var a = l.data;
                            if (0 == a.code) {
                                var n = a.data || {};
                                t.setStorageSync("userData", n);
                                var r = n.uinfo.openid;
                                getApp().globalData.xcxOpenid = r || "", t.setStorage({
                                    key: "xcxOpenid",
                                    data: {
                                        xcxOpenid: n.uinfo.openid
                                    }
                                });
                                var u = n.uinfo.unionid;
                                getApp().globalData.unionid = u || "", t.setStorage({
                                    key: "unionid",
                                    data: {
                                        unionid: u
                                    }
                                }), e(a.data);
                            } else e(l.msg);
                        },
                        fail: function(e) {
                            l(e);
                        }
                    });
                });
                return r;
            }, l.creatGHQrcode = function(e) {
                var l = "/wx3/qrticket?appid=" + n.config.appid + "&limit=1800&scene=scene_str&sceneid=" + e;
                return (0, n.requestGet)(l, {}, n.config.wxUrl);
            };
        }).call(this, a("bc2e").default, a("543d").default);
    },
    a360: function(e, l, a) {
        var t = a("4ea4");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.Calendar = void 0, l.addZero = s, l.checkDate = function(e) {
            return e.match(/((19|20)\d{2})(-|\/)\d{1,2}(-|\/)\d{1,2}/g);
        }, l.dateCompare = v, l.fixIosDateFormat = f, l.getDate = i, l.getDateTime = function(e, l) {
            return "".concat(i(e), " ").concat(c(e, l));
        }, l.getDefaultSecond = function(e) {
            return e ? "00:00" : "00:00:00";
        }, l.getTime = c;
        var n = t(a("448a")), r = t(a("970b")), u = t(a("5bc3")), o = function() {
            function e() {
                var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = l.selected, t = l.startDate, n = l.endDate, u = l.range;
                (0, r.default)(this, e), this.date = this.getDateObj(new Date()), this.selected = a || [], 
                this.startDate = t, this.endDate = n, this.range = u, this.cleanMultipleStatus(), 
                this.weeks = {}, this.lastHover = !1;
            }
            return (0, u.default)(e, [ {
                key: "setDate",
                value: function(e) {
                    var l = this.getDateObj(e);
                    this.getWeeks(l.fullDate);
                }
            }, {
                key: "cleanMultipleStatus",
                value: function() {
                    this.multipleStatus = {
                        before: "",
                        after: "",
                        data: []
                    };
                }
            }, {
                key: "setStartDate",
                value: function(e) {
                    this.startDate = e;
                }
            }, {
                key: "setEndDate",
                value: function(e) {
                    this.endDate = e;
                }
            }, {
                key: "getPreMonthObj",
                value: function(e) {
                    e = f(e);
                    var l = (e = new Date(e)).getMonth();
                    e.setMonth(l - 1);
                    var a = e.getMonth();
                    return 0 !== l && a - l == 0 && e.setMonth(a - 1), this.getDateObj(e);
                }
            }, {
                key: "getNextMonthObj",
                value: function(e) {
                    e = f(e);
                    var l = (e = new Date(e)).getMonth();
                    e.setMonth(l + 1);
                    var a = e.getMonth();
                    return a - l > 1 && e.setMonth(a - 1), this.getDateObj(e);
                }
            }, {
                key: "getDateObj",
                value: function(e) {
                    return e = f(e), {
                        fullDate: i(e = new Date(e)),
                        year: e.getFullYear(),
                        month: s(e.getMonth() + 1),
                        date: s(e.getDate()),
                        day: e.getDay()
                    };
                }
            }, {
                key: "getPreMonthDays",
                value: function(e, l) {
                    for (var a = this, t = [], n = function(e) {
                        var n = l.month > 1 ? l.month - 1 : 12, r = 12 === n ? l.year - 1 : l.year, u = new Date(r, n, -e).getDate(), o = "".concat(r, "-").concat(s(n), "-").concat(s(u)), i = a.multipleStatus.data, c = -1;
                        a.range && i && (c = i.findIndex(function(e) {
                            return a.dateEqual(e, o);
                        }));
                        var b = -1 !== c, f = a.selected && a.selected.find(function(e) {
                            if (a.dateEqual(o, e.date)) return e;
                        });
                        t.push({
                            fullDate: o,
                            year: r,
                            month: n,
                            date: u,
                            multiple: !!a.range && b,
                            beforeMultiple: a.isLogicBefore(o, a.multipleStatus.before, a.multipleStatus.after),
                            afterMultiple: a.isLogicAfter(o, a.multipleStatus.before, a.multipleStatus.after),
                            disable: a.startDate && !v(a.startDate, o) || a.endDate && !v(o, a.endDate),
                            isToday: o === a.date.fullDate,
                            userChecked: !1,
                            extraInfo: f
                        });
                    }, r = e - 1; r >= 0; r--) n(r);
                    return t;
                }
            }, {
                key: "getCurrentMonthDays",
                value: function(e, l) {
                    for (var a = this, t = [], n = this.date.fullDate, r = function(e) {
                        var r = "".concat(l.year, "-").concat(l.month, "-").concat(s(e)), u = n === r, o = a.selected && a.selected.find(function(e) {
                            if (a.dateEqual(r, e.date)) return e;
                        });
                        a.startDate && v(a.startDate, r), a.endDate && v(r, a.endDate);
                        var i = a.multipleStatus.data, c = -1;
                        a.range && i && (c = i.findIndex(function(e) {
                            return a.dateEqual(e, r);
                        }));
                        var b = -1 !== c;
                        t.push({
                            fullDate: r,
                            year: l.year,
                            month: l.month,
                            date: e,
                            multiple: !!a.range && b,
                            beforeMultiple: a.isLogicBefore(r, a.multipleStatus.before, a.multipleStatus.after),
                            afterMultiple: a.isLogicAfter(r, a.multipleStatus.before, a.multipleStatus.after),
                            disable: a.startDate && !v(a.startDate, r) || a.endDate && !v(r, a.endDate),
                            isToday: u,
                            userChecked: !1,
                            extraInfo: o
                        });
                    }, u = 1; u <= e; u++) r(u);
                    return t;
                }
            }, {
                key: "_getNextMonthDays",
                value: function(e, l) {
                    for (var a = this, t = [], n = (l.month, function(e) {
                        var n = 12 === l.month ? 1 : 1 * l.month + 1, r = 1 === n ? l.year + 1 : l.year, u = "".concat(r, "-").concat(s(n), "-").concat(s(e)), o = a.multipleStatus.data, i = -1;
                        a.range && o && (i = o.findIndex(function(e) {
                            return a.dateEqual(e, u);
                        }));
                        var c = -1 !== i, b = a.selected && a.selected.find(function(e) {
                            if (a.dateEqual(u, e.date)) return e;
                        });
                        t.push({
                            fullDate: u,
                            year: r,
                            date: e,
                            month: n,
                            multiple: !!a.range && c,
                            beforeMultiple: a.isLogicBefore(u, a.multipleStatus.before, a.multipleStatus.after),
                            afterMultiple: a.isLogicAfter(u, a.multipleStatus.before, a.multipleStatus.after),
                            disable: a.startDate && !v(a.startDate, u) || a.endDate && !v(u, a.endDate),
                            isToday: u === a.date.fullDate,
                            userChecked: !1,
                            extraInfo: b
                        });
                    }), r = 1; r <= e; r++) n(r);
                    return t;
                }
            }, {
                key: "getInfo",
                value: function(e) {
                    var l = this;
                    return e || (e = new Date()), this.calendar.find(function(a) {
                        return a.fullDate === l.getDateObj(e).fullDate;
                    });
                }
            }, {
                key: "dateEqual",
                value: function(e, l) {
                    return e = new Date(f(e)), l = new Date(f(l)), e.valueOf() === l.valueOf();
                }
            }, {
                key: "isLogicBefore",
                value: function(e, l, a) {
                    var t = l;
                    return l && a && (t = v(l, a) ? l : a), this.dateEqual(t, e);
                }
            }, {
                key: "isLogicAfter",
                value: function(e, l, a) {
                    var t = a;
                    return l && a && (t = v(l, a) ? a : l), this.dateEqual(t, e);
                }
            }, {
                key: "geDateAll",
                value: function(e, l) {
                    var a = [], t = e.split("-"), n = l.split("-"), r = new Date();
                    r.setFullYear(t[0], t[1] - 1, t[2]);
                    var u = new Date();
                    u.setFullYear(n[0], n[1] - 1, n[2]);
                    for (var o = r.getTime() - 864e5, i = u.getTime() - 864e5, c = o; c <= i; ) c += 864e5, 
                    a.push(this.getDateObj(new Date(parseInt(c))).fullDate);
                    return a;
                }
            }, {
                key: "setMultiple",
                value: function(e) {
                    if (this.range) {
                        var l = this.multipleStatus, a = l.before, t = l.after;
                        if (a && t) {
                            if (!this.lastHover) return void (this.lastHover = !0);
                            this.multipleStatus.before = e, this.multipleStatus.after = "", this.multipleStatus.data = [], 
                            this.multipleStatus.fulldate = "", this.lastHover = !1;
                        } else a ? (this.multipleStatus.after = e, v(this.multipleStatus.before, this.multipleStatus.after) ? this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after) : this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before), 
                        this.lastHover = !0) : (this.multipleStatus.before = e, this.lastHover = !1);
                        this.getWeeks(e);
                    }
                }
            }, {
                key: "setHoverMultiple",
                value: function(e) {
                    this.range && !this.lastHover && (this.multipleStatus.before ? (this.multipleStatus.after = e, 
                    v(this.multipleStatus.before, this.multipleStatus.after) ? this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after) : this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before)) : this.multipleStatus.before = e, 
                    this.getWeeks(e));
                }
            }, {
                key: "setDefaultMultiple",
                value: function(e, l) {
                    this.multipleStatus.before = e, this.multipleStatus.after = l, e && l && (v(e, l) ? (this.multipleStatus.data = this.geDateAll(e, l), 
                    this.getWeeks(l)) : (this.multipleStatus.data = this.geDateAll(l, e), this.getWeeks(e)));
                }
            }, {
                key: "getWeeks",
                value: function(e) {
                    for (var l = this.getDateObj(e), a = l.year, t = l.month, r = new Date(a, t - 1, 1).getDay(), u = this.getPreMonthDays(r, this.getDateObj(e)), o = new Date(a, t, 0).getDate(), i = this.getCurrentMonthDays(o, this.getDateObj(e)), c = 42 - r - o, s = this._getNextMonthDays(c, this.getDateObj(e)), v = [].concat((0, 
                    n.default)(u), (0, n.default)(i), (0, n.default)(s)), b = new Array(6), f = 0; f < v.length; f++) {
                        var p = Math.floor(f / 7);
                        b[p] || (b[p] = new Array(7)), b[p][f % 7] = v[f];
                    }
                    this.calendar = v, this.weeks = b;
                }
            } ]), e;
        }();
        function i(e) {
            e = f(e);
            var l = (e = new Date(e)).getFullYear(), a = e.getMonth() + 1, t = e.getDate();
            return "".concat(l, "-").concat(s(a), "-").concat(s(t));
        }
        function c(e, l) {
            e = f(e);
            var a = (e = new Date(e)).getHours(), t = e.getMinutes(), n = e.getSeconds();
            return l ? "".concat(s(a), ":").concat(s(t)) : "".concat(s(a), ":").concat(s(t), ":").concat(s(n));
        }
        function s(e) {
            return e < 10 && (e = "0".concat(e)), e;
        }
        function v(e, l) {
            return (e = new Date(f(e))) <= (l = new Date(f(l)));
        }
        l.Calendar = o;
        var b = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])( [0-5]?[0-9]:[0-5]?[0-9]:[0-5]?[0-9])?$/;
        function f(e) {
            return "string" == typeof e && b.test(e) && (e = e.replace(/-/g, "/")), e;
        }
    },
    a395: function(e, l, a) {
        var t = a("7037").default, n = a("e50d");
        e.exports = function(e) {
            var l = n(e, "string");
            return "symbol" === t(l) ? l : String(l);
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    a7b2: function(e, l) {},
    a7b8: function(e, l) {
        var a = function(e, l) {
            var a = e, t = o[l], n = null, r = 0, u = null, i = new Array(), c = {}, s = function(e, l) {
                n = function(e) {
                    for (var l = new Array(e), a = 0; a < e; a += 1) {
                        l[a] = new Array(e);
                        for (var t = 0; t < e; t += 1) l[a][t] = null;
                    }
                    return l;
                }(r = 4 * a + 17), v(0, 0), v(r - 7, 0), v(0, r - 7), f(), b(), d(e, l), a >= 7 && p(e), 
                null == u && (u = w(a, t, i)), h(u, l);
            }, v = function(e, l) {
                for (var a = -1; a <= 7; a += 1) if (!(e + a <= -1 || r <= e + a)) for (var t = -1; t <= 7; t += 1) l + t <= -1 || r <= l + t || (n[e + a][l + t] = 0 <= a && a <= 6 && (0 == t || 6 == t) || 0 <= t && t <= 6 && (0 == a || 6 == a) || 2 <= a && a <= 4 && 2 <= t && t <= 4);
            }, b = function() {
                for (var e = 8; e < r - 8; e += 1) null == n[e][6] && (n[e][6] = e % 2 == 0);
                for (var l = 8; l < r - 8; l += 1) null == n[6][l] && (n[6][l] = l % 2 == 0);
            }, f = function() {
                for (var e = g.getPatternPosition(a), l = 0; l < e.length; l += 1) for (var t = 0; t < e.length; t += 1) {
                    var r = e[l], u = e[t];
                    if (null == n[r][u]) for (var o = -2; o <= 2; o += 1) for (var i = -2; i <= 2; i += 1) n[r + o][u + i] = -2 == o || 2 == o || -2 == i || 2 == i || 0 == o && 0 == i;
                }
            }, p = function(e) {
                for (var l = g.getBCHTypeNumber(a), t = 0; t < 18; t += 1) {
                    var u = !e && 1 == (l >> t & 1);
                    n[Math.floor(t / 3)][t % 3 + r - 8 - 3] = u;
                }
                for (t = 0; t < 18; t += 1) u = !e && 1 == (l >> t & 1), n[t % 3 + r - 8 - 3][Math.floor(t / 3)] = u;
            }, d = function(e, l) {
                for (var a = t << 3 | l, u = g.getBCHTypeInfo(a), o = 0; o < 15; o += 1) {
                    var i = !e && 1 == (u >> o & 1);
                    o < 6 ? n[o][8] = i : o < 8 ? n[o + 1][8] = i : n[r - 15 + o][8] = i;
                }
                for (o = 0; o < 15; o += 1) i = !e && 1 == (u >> o & 1), o < 8 ? n[8][r - o - 1] = i : o < 9 ? n[8][15 - o - 1 + 1] = i : n[8][15 - o - 1] = i;
                n[r - 8][8] = !e;
            }, h = function(e, l) {
                for (var a = -1, t = r - 1, u = 7, o = 0, i = g.getMaskFunction(l), c = r - 1; c > 0; c -= 2) for (6 == c && (c -= 1); ;) {
                    for (var s = 0; s < 2; s += 1) if (null == n[t][c - s]) {
                        var v = !1;
                        o < e.length && (v = 1 == (e[o] >>> u & 1)), i(t, c - s) && (v = !v), n[t][c - s] = v, 
                        -1 == (u -= 1) && (o += 1, u = 7);
                    }
                    if ((t += a) < 0 || r <= t) {
                        t -= a, a = -a;
                        break;
                    }
                }
            }, w = function(e, l, a) {
                for (var t = y.getRSBlocks(e, l), n = _(), r = 0; r < a.length; r += 1) {
                    var u = a[r];
                    n.put(u.getMode(), 4), n.put(u.getLength(), g.getLengthInBits(u.getMode(), e)), 
                    u.write(n);
                }
                var o = 0;
                for (r = 0; r < t.length; r += 1) o += t[r].dataCount;
                if (n.getLengthInBits() > 8 * o) throw new Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * o + ")");
                for (n.getLengthInBits() + 4 <= 8 * o && n.put(0, 4); n.getLengthInBits() % 8 != 0; ) n.putBit(!1);
                for (;!(n.getLengthInBits() >= 8 * o || (n.put(236, 8), n.getLengthInBits() >= 8 * o)); ) n.put(17, 8);
                return function(e, l) {
                    for (var a = 0, t = 0, n = 0, r = new Array(l.length), u = new Array(l.length), o = 0; o < l.length; o += 1) {
                        var i = l[o].dataCount, c = l[o].totalCount - i;
                        t = Math.max(t, i), n = Math.max(n, c), r[o] = new Array(i);
                        for (var s = 0; s < r[o].length; s += 1) r[o][s] = 255 & e.getBuffer()[s + a];
                        a += i;
                        var v = g.getErrorCorrectPolynomial(c), b = m(r[o], v.getLength() - 1).mod(v);
                        for (u[o] = new Array(v.getLength() - 1), s = 0; s < u[o].length; s += 1) {
                            var f = s + b.getLength() - u[o].length;
                            u[o][s] = f >= 0 ? b.getAt(f) : 0;
                        }
                    }
                    var p = 0;
                    for (s = 0; s < l.length; s += 1) p += l[s].totalCount;
                    var d = new Array(p), h = 0;
                    for (s = 0; s < t; s += 1) for (o = 0; o < l.length; o += 1) s < r[o].length && (d[h] = r[o][s], 
                    h += 1);
                    for (s = 0; s < n; s += 1) for (o = 0; o < l.length; o += 1) s < u[o].length && (d[h] = u[o][s], 
                    h += 1);
                    return d;
                }(n, t);
            };
            return c.addData = function(e) {
                var l = x(e);
                i.push(l), u = null;
            }, c.isDark = function(e, l) {
                if (e < 0 || r <= e || l < 0 || r <= l) throw new Error(e + "," + l);
                return n[e][l];
            }, c.getModuleCount = function() {
                return r;
            }, c.make = function() {
                s(!1, function() {
                    for (var e = 0, l = 0, a = 0; a < 8; a += 1) {
                        s(!0, a);
                        var t = g.getLostPoint(c);
                        (0 == a || e > t) && (e = t, l = a);
                    }
                    return l;
                }());
            }, c.createTableTag = function(e, l) {
                e = e || 2;
                var a = "";
                a += '<table style="', a += " border-width: 0px; border-style: none;", a += " border-collapse: collapse;", 
                a += " padding: 0px; margin: " + (l = void 0 === l ? 4 * e : l) + "px;", a += '">', 
                a += "<tbody>";
                for (var t = 0; t < c.getModuleCount(); t += 1) {
                    a += "<tr>";
                    for (var n = 0; n < c.getModuleCount(); n += 1) a += '<td style="', a += " border-width: 0px; border-style: none;", 
                    a += " border-collapse: collapse;", a += " padding: 0px; margin: 0px;", a += " width: " + e + "px;", 
                    a += " height: " + e + "px;", a += " background-color: ", a += c.isDark(t, n) ? "#000000" : "#ffffff", 
                    a += ";", a += '"/>';
                    a += "</tr>";
                }
                return a += "</tbody>", a += "</table>";
            }, c.createImgTag = function(e, l, a) {
                e = e || 2;
                var t = l = void 0 === l ? 4 * e : l, n = c.getModuleCount() * e + l;
                return A(a, a, function(l, a) {
                    if (t <= l && l < n && t <= a && a < n) {
                        var r = Math.floor((l - t) / e), u = Math.floor((a - t) / e);
                        return c.isDark(u, r) ? 0 : 1;
                    }
                    return 1;
                });
            }, c;
        };
        a.stringToBytes = function(e) {
            for (var l = new Array(), a = 0; a < e.length; a += 1) {
                var t = e.charCodeAt(a);
                l.push(255 & t);
            }
            return l;
        }, a.createStringToBytes = function(e, l) {
            var a = function() {
                for (var a = S(e), t = function() {
                    var e = a.read();
                    if (-1 == e) throw new Error();
                    return e;
                }, n = 0, r = {}; ;) {
                    var u = a.read();
                    if (-1 == u) break;
                    var o = t(), i = t() << 8 | t();
                    r[String.fromCharCode(u << 8 | o)] = i, n += 1;
                }
                if (n != l) throw new Error(n + " != " + l);
                return r;
            }(), t = "?".charCodeAt(0);
            return function(e) {
                for (var l = new Array(), n = 0; n < e.length; n += 1) {
                    var r = e.charCodeAt(n);
                    if (r < 128) l.push(r); else {
                        var u = a[e.charAt(n)];
                        "number" == typeof u ? (255 & u) == u ? l.push(u) : (l.push(u >>> 8), l.push(255 & u)) : l.push(t);
                    }
                }
                return l;
            };
        };
        var t = 1, n = 2, r = 4, u = 8, o = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, i = 0, c = 1, s = 2, v = 3, b = 4, f = 5, p = 6, d = 7, g = function() {
            var e = [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ], l = {}, a = function(e) {
                for (var l = 0; 0 != e; ) l += 1, e >>>= 1;
                return l;
            };
            return l.getBCHTypeInfo = function(e) {
                for (var l = e << 10; a(l) - a(1335) >= 0; ) l ^= 1335 << a(l) - a(1335);
                return 21522 ^ (e << 10 | l);
            }, l.getBCHTypeNumber = function(e) {
                for (var l = e << 12; a(l) - a(7973) >= 0; ) l ^= 7973 << a(l) - a(7973);
                return e << 12 | l;
            }, l.getPatternPosition = function(l) {
                return e[l - 1];
            }, l.getMaskFunction = function(e) {
                switch (e) {
                  case i:
                    return function(e, l) {
                        return (e + l) % 2 == 0;
                    };

                  case c:
                    return function(e, l) {
                        return e % 2 == 0;
                    };

                  case s:
                    return function(e, l) {
                        return l % 3 == 0;
                    };

                  case v:
                    return function(e, l) {
                        return (e + l) % 3 == 0;
                    };

                  case b:
                    return function(e, l) {
                        return (Math.floor(e / 2) + Math.floor(l / 3)) % 2 == 0;
                    };

                  case f:
                    return function(e, l) {
                        return e * l % 2 + e * l % 3 == 0;
                    };

                  case p:
                    return function(e, l) {
                        return (e * l % 2 + e * l % 3) % 2 == 0;
                    };

                  case d:
                    return function(e, l) {
                        return (e * l % 3 + (e + l) % 2) % 2 == 0;
                    };

                  default:
                    throw new Error("bad maskPattern:" + e);
                }
            }, l.getErrorCorrectPolynomial = function(e) {
                for (var l = m([ 1 ], 0), a = 0; a < e; a += 1) l = l.multiply(m([ 1, h.gexp(a) ], 0));
                return l;
            }, l.getLengthInBits = function(e, l) {
                if (1 <= l && l < 10) switch (e) {
                  case t:
                    return 10;

                  case n:
                    return 9;

                  case r:
                  case u:
                    return 8;

                  default:
                    throw new Error("mode:" + e);
                } else if (l < 27) switch (e) {
                  case t:
                    return 12;

                  case n:
                    return 11;

                  case r:
                    return 16;

                  case u:
                    return 10;

                  default:
                    throw new Error("mode:" + e);
                } else {
                    if (!(l < 41)) throw new Error("type:" + l);
                    switch (e) {
                      case t:
                        return 14;

                      case n:
                        return 13;

                      case r:
                        return 16;

                      case u:
                        return 12;

                      default:
                        throw new Error("mode:" + e);
                    }
                }
            }, l.getLostPoint = function(e) {
                for (var l = e.getModuleCount(), a = 0, t = 0; t < l; t += 1) for (var n = 0; n < l; n += 1) {
                    for (var r = 0, u = e.isDark(t, n), o = -1; o <= 1; o += 1) if (!(t + o < 0 || l <= t + o)) for (var i = -1; i <= 1; i += 1) n + i < 0 || l <= n + i || 0 == o && 0 == i || u == e.isDark(t + o, n + i) && (r += 1);
                    r > 5 && (a += 3 + r - 5);
                }
                for (t = 0; t < l - 1; t += 1) for (n = 0; n < l - 1; n += 1) {
                    var c = 0;
                    e.isDark(t, n) && (c += 1), e.isDark(t + 1, n) && (c += 1), e.isDark(t, n + 1) && (c += 1), 
                    e.isDark(t + 1, n + 1) && (c += 1), 0 != c && 4 != c || (a += 3);
                }
                for (t = 0; t < l; t += 1) for (n = 0; n < l - 6; n += 1) e.isDark(t, n) && !e.isDark(t, n + 1) && e.isDark(t, n + 2) && e.isDark(t, n + 3) && e.isDark(t, n + 4) && !e.isDark(t, n + 5) && e.isDark(t, n + 6) && (a += 40);
                for (n = 0; n < l; n += 1) for (t = 0; t < l - 6; t += 1) e.isDark(t, n) && !e.isDark(t + 1, n) && e.isDark(t + 2, n) && e.isDark(t + 3, n) && e.isDark(t + 4, n) && !e.isDark(t + 5, n) && e.isDark(t + 6, n) && (a += 40);
                var s = 0;
                for (n = 0; n < l; n += 1) for (t = 0; t < l; t += 1) e.isDark(t, n) && (s += 1);
                return a += 10 * (Math.abs(100 * s / l / l - 50) / 5);
            }, l;
        }(), h = function() {
            for (var e = new Array(256), l = new Array(256), a = 0; a < 8; a += 1) e[a] = 1 << a;
            for (a = 8; a < 256; a += 1) e[a] = e[a - 4] ^ e[a - 5] ^ e[a - 6] ^ e[a - 8];
            for (a = 0; a < 255; a += 1) l[e[a]] = a;
            return {
                glog: function(e) {
                    if (e < 1) throw new Error("glog(" + e + ")");
                    return l[e];
                },
                gexp: function(l) {
                    for (;l < 0; ) l += 255;
                    for (;l >= 256; ) l -= 255;
                    return e[l];
                }
            };
        }();
        function m(e, l) {
            if (void 0 === e.length) throw new Error(e.length + "/" + l);
            var a = function() {
                for (var a = 0; a < e.length && 0 == e[a]; ) a += 1;
                for (var t = new Array(e.length - a + l), n = 0; n < e.length - a; n += 1) t[n] = e[n + a];
                return t;
            }(), t = {
                getAt: function(e) {
                    return a[e];
                },
                getLength: function() {
                    return a.length;
                },
                multiply: function(e) {
                    for (var l = new Array(t.getLength() + e.getLength() - 1), a = 0; a < t.getLength(); a += 1) for (var n = 0; n < e.getLength(); n += 1) l[a + n] ^= h.gexp(h.glog(t.getAt(a)) + h.glog(e.getAt(n)));
                    return m(l, 0);
                },
                mod: function(e) {
                    if (t.getLength() - e.getLength() < 0) return t;
                    for (var l = h.glog(t.getAt(0)) - h.glog(e.getAt(0)), a = new Array(t.getLength()), n = 0; n < t.getLength(); n += 1) a[n] = t.getAt(n);
                    for (n = 0; n < e.getLength(); n += 1) a[n] ^= h.gexp(h.glog(e.getAt(n)) + l);
                    return m(a, 0).mod(e);
                }
            };
            return t;
        }
        var y = function() {
            var e = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ], l = function(e, l) {
                var a = {};
                return a.totalCount = e, a.dataCount = l, a;
            }, a = {
                getRSBlocks: function(a, t) {
                    var n = function(l, a) {
                        switch (a) {
                          case o.L:
                            return e[4 * (l - 1) + 0];

                          case o.M:
                            return e[4 * (l - 1) + 1];

                          case o.Q:
                            return e[4 * (l - 1) + 2];

                          case o.H:
                            return e[4 * (l - 1) + 3];

                          default:
                            return;
                        }
                    }(a, t);
                    if (void 0 === n) throw new Error("bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:" + a + "/errorCorrectLevel:" + t);
                    for (var r = n.length / 3, u = new Array(), i = 0; i < r; i += 1) for (var c = n[3 * i + 0], s = n[3 * i + 1], v = n[3 * i + 2], b = 0; b < c; b += 1) u.push(l(s, v));
                    return u;
                }
            };
            return a;
        }(), _ = function() {
            var e = new Array(), l = 0, a = {
                getBuffer: function() {
                    return e;
                },
                getAt: function(l) {
                    var a = Math.floor(l / 8);
                    return 1 == (e[a] >>> 7 - l % 8 & 1);
                },
                put: function(e, l) {
                    for (var t = 0; t < l; t += 1) a.putBit(1 == (e >>> l - t - 1 & 1));
                },
                getLengthInBits: function() {
                    return l;
                },
                putBit: function(a) {
                    var t = Math.floor(l / 8);
                    e.length <= t && e.push(0), a && (e[t] |= 128 >>> l % 8), l += 1;
                }
            };
            return a;
        }, x = function(e) {
            for (var l = r, a = e, t = [], n = {}, u = 0, o = a.length; u < o; u++) {
                var i = [], c = a.charCodeAt(u);
                c > 65536 ? (i[0] = 240 | (1835008 & c) >>> 18, i[1] = 128 | (258048 & c) >>> 12, 
                i[2] = 128 | (4032 & c) >>> 6, i[3] = 128 | 63 & c) : c > 2048 ? (i[0] = 224 | (61440 & c) >>> 12, 
                i[1] = 128 | (4032 & c) >>> 6, i[2] = 128 | 63 & c) : c > 128 ? (i[0] = 192 | (1984 & c) >>> 6, 
                i[1] = 128 | 63 & c) : i[0] = c, t.push(i);
            }
            (t = Array.prototype.concat.apply([], t)).length != a.length && (t.unshift(191), 
            t.unshift(187), t.unshift(239));
            var s = t;
            return n.getMode = function() {
                return l;
            }, n.getLength = function(e) {
                return s.length;
            }, n.write = function(e) {
                for (var l = 0; l < s.length; l += 1) e.put(s[l], 8);
            }, n;
        }, w = function() {
            var e = new Array(), l = {
                writeByte: function(l) {
                    e.push(255 & l);
                },
                writeShort: function(e) {
                    l.writeByte(e), l.writeByte(e >>> 8);
                },
                writeBytes: function(e, a, t) {
                    a = a || 0, t = t || e.length;
                    for (var n = 0; n < t; n += 1) l.writeByte(e[n + a]);
                },
                writeString: function(e) {
                    for (var a = 0; a < e.length; a += 1) l.writeByte(e.charCodeAt(a));
                },
                toByteArray: function() {
                    return e;
                },
                toString: function() {
                    var l = "";
                    l += "[";
                    for (var a = 0; a < e.length; a += 1) a > 0 && (l += ","), l += e[a];
                    return l += "]";
                }
            };
            return l;
        }, S = function(e) {
            var l = e, a = 0, t = 0, n = 0, r = {
                read: function() {
                    for (;n < 8; ) {
                        if (a >= l.length) {
                            if (0 == n) return -1;
                            throw new Error("unexpected end of file./" + n);
                        }
                        var e = l.charAt(a);
                        if (a += 1, "=" == e) return n = 0, -1;
                        e.match(/^\s$/) || (t = t << 6 | u(e.charCodeAt(0)), n += 6);
                    }
                    var r = t >>> n - 8 & 255;
                    return n -= 8, r;
                }
            }, u = function(e) {
                if (65 <= e && e <= 90) return e - 65;
                if (97 <= e && e <= 122) return e - 97 + 26;
                if (48 <= e && e <= 57) return e - 48 + 52;
                if (43 == e) return 62;
                if (47 == e) return 63;
                throw new Error("c:" + e);
            };
            return r;
        }, A = function(e, l, a, t) {
            for (var n = function(e, l) {
                var a = e, t = l, n = new Array(e * l), r = {
                    setPixel: function(e, l, t) {
                        n[l * a + e] = t;
                    },
                    write: function(e) {
                        e.writeString("GIF87a"), e.writeShort(a), e.writeShort(t), e.writeByte(128), e.writeByte(0), 
                        e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(255), 
                        e.writeByte(255), e.writeByte(255), e.writeString(","), e.writeShort(0), e.writeShort(0), 
                        e.writeShort(a), e.writeShort(t), e.writeByte(0);
                        var l = u(2);
                        e.writeByte(2);
                        for (var n = 0; l.length - n > 255; ) e.writeByte(255), e.writeBytes(l, n, 255), 
                        n += 255;
                        e.writeByte(l.length - n), e.writeBytes(l, n, l.length - n), e.writeByte(0), e.writeString(";");
                    }
                }, u = function(e) {
                    for (var l = 1 << e, a = 1 + (1 << e), t = e + 1, r = o(), u = 0; u < l; u += 1) r.add(String.fromCharCode(u));
                    r.add(String.fromCharCode(l)), r.add(String.fromCharCode(a));
                    var i = w(), c = function(e) {
                        var l = e, a = 0, t = 0;
                        return {
                            write: function(e, n) {
                                if (e >>> n != 0) throw new Error("length over");
                                for (;a + n >= 8; ) l.writeByte(255 & (e << a | t)), n -= 8 - a, e >>>= 8 - a, t = 0, 
                                a = 0;
                                t |= e << a, a += n;
                            },
                            flush: function() {
                                a > 0 && l.writeByte(t);
                            }
                        };
                    }(i);
                    c.write(l, t);
                    var s = 0, v = String.fromCharCode(n[s]);
                    for (s += 1; s < n.length; ) {
                        var b = String.fromCharCode(n[s]);
                        s += 1, r.contains(v + b) ? v += b : (c.write(r.indexOf(v), t), r.size() < 4095 && (r.size() == 1 << t && (t += 1), 
                        r.add(v + b)), v = b);
                    }
                    return c.write(r.indexOf(v), t), c.write(a, t), c.flush(), i.toByteArray();
                }, o = function() {
                    var e = {}, l = 0, a = {
                        add: function(t) {
                            if (a.contains(t)) throw new Error("dup key:" + t);
                            e[t] = l, l += 1;
                        },
                        size: function() {
                            return l;
                        },
                        indexOf: function(l) {
                            return e[l];
                        },
                        contains: function(l) {
                            return void 0 !== e[l];
                        }
                    };
                    return a;
                };
                return r;
            }(e, l), r = 0; r < l; r += 1) for (var u = 0; u < e; u += 1) n.setPixel(u, r, a(u, r));
            var o = w();
            n.write(o);
            for (var i = function() {
                var e = 0, l = 0, a = 0, t = "", n = {}, r = function(e) {
                    t += String.fromCharCode(u(63 & e));
                }, u = function(e) {
                    if (e < 0) ; else {
                        if (e < 26) return 65 + e;
                        if (e < 52) return e - 26 + 97;
                        if (e < 62) return e - 52 + 48;
                        if (62 == e) return 43;
                        if (63 == e) return 47;
                    }
                    throw new Error("n:" + e);
                };
                return n.writeByte = function(t) {
                    for (e = e << 8 | 255 & t, l += 8, a += 1; l >= 6; ) r(e >>> l - 6), l -= 6;
                }, n.flush = function() {
                    if (l > 0 && (r(e << 6 - l), e = 0, l = 0), a % 3 != 0) for (var n = 3 - a % 3, u = 0; u < n; u += 1) t += "=";
                }, n.toString = function() {
                    return t;
                }, n;
            }(), c = o.toByteArray(), s = 0; s < c.length; s += 1) i.writeByte(c[s]);
            i.flush();
            var v = "";
            return v += "data:image/gif;base64,", v += i;
        };
        e.exports = {
            createQrCodeImg: function(e, l) {
                var t, n = (l = l || {}).typeNumber || 8, r = l.errorCorrectLevel || "M", u = l.size || 500;
                try {
                    (t = a(n, r || "M")).addData(e), t.make();
                } catch (l) {
                    l = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(l);
                    if (n >= 1020) throw new Error("Text too long to encode");
                    return gen(e, {
                        size: u,
                        errorCorrectLevel: r,
                        typeNumber: n + 1
                    });
                }
                var o = parseInt(u / t.getModuleCount()), i = parseInt((u - t.getModuleCount() * o) / 2);
                return t.createImgTag(o, i, u);
            }
        };
    },
    b17c: function(e, l, a) {
        var t = a("4a4b"), n = a("6f8f");
        function r(l, a, u) {
            return n() ? (e.exports = r = Reflect.construct.bind(), e.exports.__esModule = !0, 
            e.exports.default = e.exports) : (e.exports = r = function(e, l, a) {
                var n = [ null ];
                n.push.apply(n, l);
                var r = Function.bind.apply(e, n), u = new r();
                return a && t(u, a.prototype), u;
            }, e.exports.__esModule = !0, e.exports.default = e.exports), r.apply(null, arguments);
        }
        e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    b38f: function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var n = t(a("e902")), r = t(a("9345"));
            function u(e) {
                for (var l = {}, a = e.split(","), t = 0; t < a.length; t += 1) l[a[t]] = !0;
                return l;
            }
            var o = u("br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), i = u("a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), c = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
            l.default = function(l, a, t, u) {
                l = function(e) {
                    return e.replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<").replace(/<script[^]*<\/script>/gi, "").replace(/<style[^]*<\/style>/gi, "");
                }(l = function(e) {
                    return /<body.*>([^]*)<\/body>/.test(e) ? RegExp.$1 : e;
                }(l)), l = n.default.strDiscode(l);
                var s = [], v = {
                    nodes: [],
                    imageUrls: []
                }, b = function() {
                    var l = {};
                    return e.getSystemInfo({
                        success: function(e) {
                            l.width = e.windowWidth, l.height = e.windowHeight;
                        }
                    }), l;
                }();
                function f(e) {
                    this.node = "element", this.tag = e, this.$screen = b;
                }
                return (0, r.default)(l, {
                    start: function(e, l, r) {
                        var u = new f(e);
                        if (0 !== s.length) {
                            var b = s[0];
                            void 0 === b.nodes && (b.nodes = []);
                        }
                        if (o[e] ? u.tagType = "block" : i[e] ? u.tagType = "inline" : c[e] && (u.tagType = "closeSelf"), 
                        u.attr = l.reduce(function(e, l) {
                            var a = l.name, t = l.value;
                            return "class" === a && (u.classStr = t), "style" === a && (u.styleStr = t), t.match(/ /) && (t = t.split(" ")), 
                            e[a] ? Array.isArray(e[a]) ? e[a].push(t) : e[a] = [ e[a], t ] : e[a] = t, e;
                        }, {}), u.classStr ? u.classStr += " ".concat(u.tag) : u.classStr = u.tag, "inline" === u.tagType && (u.classStr += " inline"), 
                        "img" === u.tag) {
                            var p = u.attr.src;
                            p = n.default.urlToHttpUrl(p, t.domain), Object.assign(u.attr, t, {
                                src: p || ""
                            }), p && v.imageUrls.push(p);
                        }
                        if ("a" === u.tag && (u.attr.href = u.attr.href || ""), "font" === u.tag) {
                            var d = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], g = {
                                color: "color",
                                face: "font-family",
                                size: "font-size"
                            };
                            u.styleStr || (u.styleStr = ""), Object.keys(g).forEach(function(e) {
                                if (u.attr[e]) {
                                    var l = "size" === e ? d[u.attr[e] - 1] : u.attr[e];
                                    u.styleStr += "".concat(g[e], ": ").concat(l, ";");
                                }
                            });
                        }
                        if ("source" === u.tag && (v.source = u.attr.src), a.start && a.start(u, v), r) {
                            var h = s[0] || v;
                            void 0 === h.nodes && (h.nodes = []), h.nodes.push(u);
                        } else s.unshift(u);
                    },
                    end: function(e) {
                        var l = s.shift();
                        if (l.tag !== e && console.error("invalid state: mismatch end tag"), "video" === l.tag && v.source && (l.attr.src = v.source, 
                        delete v.source), a.end && a.end(l, v), 0 === s.length) v.nodes.push(l); else {
                            var t = s[0];
                            t.nodes || (t.nodes = []), t.nodes.push(l);
                        }
                    },
                    chars: function(e) {
                        if (e.trim()) {
                            var l = {
                                node: "text",
                                text: e
                            };
                            if (a.chars && a.chars(l, v), 0 === s.length) v.nodes.push(l); else {
                                var t = s[0];
                                void 0 === t.nodes && (t.nodes = []), t.nodes.push(l);
                            }
                        }
                    }
                }), v;
            };
        }).call(this, a("bc2e").default);
    },
    b873: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, n = /^<\/([-A-Za-z0-9_]+)[^>]*>/, r = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
        function u(e) {
            for (var l = {}, a = e.split(","), t = 0; t < a.length; t += 1) l[a[t]] = !0;
            return l;
        }
        var o = u("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), i = u("address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), c = u("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), s = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), v = u("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
        l.default = function(e, l) {
            var a, u, b, f = e, p = [];
            function d(e, a) {
                var t;
                if (a) for (a = a.toLowerCase(), t = p.length - 1; t >= 0 && p[t] !== a; t -= 1) ; else t = 0;
                if (t >= 0) {
                    for (var n = p.length - 1; n >= t; n -= 1) l.end && l.end(p[n]);
                    p.length = t;
                }
            }
            function g(e, a, t, n) {
                if (a = a.toLowerCase(), i[a]) for (;p.last() && c[p.last()]; ) d(0, p.last());
                if (s[a] && p.last() === a && d(0, a), (n = o[a] || !!n) || p.push(a), l.start) {
                    var u = [];
                    t.replace(r, function(e, l) {
                        var a = arguments[2] || arguments[3] || arguments[4] || (v[l] ? l : "");
                        u.push({
                            name: l,
                            value: a,
                            escaped: a.replace(/(^|[^\\])"/g, '$1\\"')
                        });
                    }), l.start && l.start(a, u, n);
                }
            }
            for (p.last = function() {
                return p[p.length - 1];
            }; e; ) {
                if (u = !0, 0 === e.indexOf("</") ? (b = e.match(n), b && (e = e.substring(b[0].length), 
                b[0].replace(n, d), u = !1)) : 0 === e.indexOf("<") && (b = e.match(t), b && (e = e.substring(b[0].length), 
                b[0].replace(t, g), u = !1)), u) {
                    a = e.indexOf("<");
                    for (var h = ""; 0 === a; ) h += "<", a = (e = e.substring(1)).indexOf("<");
                    h += a < 0 ? e : e.substring(0, a), e = a < 0 ? "" : e.substring(a), l.chars && l.chars(h);
                }
                if (e === f) throw new Error("Parse Error: ".concat(e));
                f = e;
            }
            d();
        };
    },
    b9d5: function(e, l, a) {
        (function(e, t) {
            var n = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.wosOpenSetting = l.isOpenProvince = l.getProvinceCityDistrict = l.checkUserLocationNew = void 0;
            var r = n(a("2eee")), u = n(a("c973")), o = a("76d6");
            l.checkUserLocationNew = function(e) {
                var l = getApp().globalData.userLocation || {}, a = l.longitude, t = l.latitude;
                return a && t ? e(getApp().globalData.userLocation) : i(e);
            };
            var i = function() {
                var l = (0, u.default)(r.default.mark(function l(a) {
                    return r.default.wrap(function(l) {
                        for (;;) switch (l.prev = l.next) {
                          case 0:
                            return l.next = 2, e.getSetting({
                                success: function(e) {
                                    if (!e.authSetting["scope.userFuzzyLocation"]) return c(a);
                                    1 == e.authSetting["scope.userFuzzyLocation"] ? setTimeout(function() {
                                        return c(a);
                                    }, 500) : a({
                                        locationStatus: 3
                                    });
                                }
                            });

                          case 2:
                          case "end":
                            return l.stop();
                        }
                    }, l);
                }));
                return function(e) {
                    return l.apply(this, arguments);
                };
            }(), c = function() {
                var l = (0, u.default)(r.default.mark(function l(a) {
                    var n;
                    return r.default.wrap(function(l) {
                        for (;;) switch (l.prev = l.next) {
                          case 0:
                            if (t.getLocation) {
                                l.next = 5;
                                break;
                            }
                            return n = {
                                longitude: "00",
                                latitude: "00"
                            }, getApp().globalData.userLocation = n, a(n), l.abrupt("return");

                          case 5:
                            e.getLocation({
                                type: "wgs84",
                                success: function(e) {
                                    var l = e.longitude, t = e.latitude;
                                    getApp().globalData.userLocation = e, (0, o.postLocationData)(e), a(l && t ? e : {
                                        locationStatus: 1
                                    });
                                },
                                fail: function(e) {
                                    (0, o.postLocationData)(e), -1 != e.errMsg.indexOf("system permission denied") || -1 != e.errMsg.indexOf("OFF") || -1 != e.errMsg.indexOf("off") ? a({
                                        locationStatus: 2
                                    }) : "getLocation:fail auth deny" == e.errMsg || "getLocation:fail authorize no response" == e.errMsg || "getLocation:fail:auth denied" == e.errMsg ? a({
                                        locationStatus: 3
                                    }) : a({
                                        locationStatus: 4
                                    });
                                }
                            });

                          case 6:
                          case "end":
                            return l.stop();
                        }
                    }, l);
                }));
                return function(e) {
                    return l.apply(this, arguments);
                };
            }();
            l.wosOpenSetting = function() {
                e.openSetting({
                    complete: function(e) {}
                });
            }, l.getProvinceCityDistrict = function(e, l) {
                return new Promise(function(a, n) {
                    var r = "https://apis.map.qq.com/ws/geocoder/v1/?location=" + e + "," + l + "&key=Y6EBZ-X5NW5-YSHIJ-QBPI7-LT23Z-KWFAX";
                    t.request({
                        url: r,
                        success: function(e) {
                            var l, t, n = null == e || null === (l = e.data) || void 0 === l || null === (t = l.result) || void 0 === t ? void 0 : t.address_component;
                            a(n);
                        },
                        fail: function(e) {
                            n(e);
                        }
                    });
                });
            }, l.isOpenProvince = function(l, a) {
                var t = l.province, n = a.find(function(e) {
                    return t.includes(e.province);
                });
                return n && (getApp().globalData.curProvince = n || "", getApp().globalData.projectServerName = (null == n ? void 0 : n.projectServerName) || "", 
                e.setStorageSync("curProvince", n), e.setStorageSync("projectServerName", null == n ? void 0 : n.projectServerName)), 
                n;
            };
        }).call(this, a("543d").default, a("bc2e").default);
    },
    bc2e: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = [ "qy", "env", "error", "version", "lanDebug", "cloud", "serviceMarket", "router", "worklet", "__webpack_require_UNI_MP_PLUGIN__" ], n = [ "lanDebug", "router", "worklet" ], r = "undefined" != typeof globalThis ? globalThis : function() {
            return this;
        }(), u = [ "w", "x" ].join(""), o = r[u], i = o.getLaunchOptionsSync ? o.getLaunchOptionsSync() : null;
        function c(e) {
            return (!i || 1154 !== i.scene || !n.includes(e)) && (t.indexOf(e) > -1 || "function" == typeof o[e]);
        }
        r[u] = function() {
            var e = {};
            for (var l in o) c(l) && (e[l] = o[l]);
            return e;
        }();
        var s = r[u];
        l.default = s;
    },
    c135: function(e, l) {
        e.exports = function(e) {
            if (Array.isArray(e)) return e;
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    c240: function(e, l) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    c55f: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.activeList = void 0, l.activeList = [ {
            projectServerName: "shandongagt",
            actList: [ {
                activeName: "啤酒花兑好券",
                router: "/pages_other/shandong/vpoints-exchange"
            } ]
        }, {
            projectServerName: "liaoning",
            actList: [ {
                activeName: "啤酒花兑好券",
                router: "/pages_other/shandong/vpoints-exchange"
            } ]
        }, {
            projectServerName: "henanpz",
            actList: [ {
                activeName: "竞价赢好礼",
                router: "/pages_other/henan/bidd/bidd",
                recorderName: "竞价记录",
                recorderRouter: "/pages_other/henan/bidd/biddList"
            }, {
                activeName: "运动赢红包",
                router: "/pages/walk/walk",
                recorderName: "运动排名",
                recorderRouter: "/pages_other/henan/walk/rank"
            }, {
                activeName: "积分抽奖",
                router: "/pages_other/henan/game/game?gameType=luckdraw"
            } ]
        } ];
    },
    c703: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.savePrize = l.queryUserSubscribeStatus = l.queryUserStatus = l.queryUserCardAccount = l.queryPrizeList = l.queryPacksRecordInfoApi = l.queryMarqueeInfo = l.queryBigPrizeConfigInfo = l.queryAllVpointsList = l.queryAllGiftsList = l.logOutUser = l.getMemberUserInfo = l.getGiftspack = l.getExchangeRecord = l.getCaptcha = l.exchangeCard = l.createOrUpdateUser = l.adInfoByType = l.activationApi = void 0, 
        l.saveUserPhone = function(e) {
            var l = {
                flag: 1,
                phoneNumber: e
            };
            (0, t.requestPost)("/user/userInfo", l);
        }, l.userInfo = l.updateUserMessage = void 0, a("0488");
        var t = a("9b31");
        l.getMemberUserInfo = function(e) {
            return (0, t.requestPost)("/user/getMemberUserInfo", e);
        }, l.queryMarqueeInfo = function(e) {
            return (0, t.requestPost)("/marquee/queryMarqueeInfo", e);
        }, l.queryAllGiftsList = function(e) {
            return (0, t.requestPost)("/gifts/queryAllGiftsList", e);
        }, l.getGiftspack = function(e) {
            return (0, t.requestPost)("/gifts/getGiftspack", e);
        }, l.queryUserCardAccount = function(e) {
            return (0, t.requestPost)("/consumerCard/queryUserCardAccount", e);
        }, l.exchangeCard = function(e) {
            return (0, t.requestPost)("/consumerCard/exchangeCard", e);
        }, l.queryPrizeList = function(e) {
            return (0, t.requestPost)("/gifts/queryPrizeList", e);
        }, l.queryAllVpointsList = function(e) {
            return (0, t.requestPost)("/gifts/queryAllVpointsList", e);
        }, l.savePrize = function(e) {
            return (0, t.requestPost)("/user/savePrize", e);
        }, l.getCaptcha = function(e) {
            return (0, t.requestPost)("/user/getCaptcha", e);
        }, l.getExchangeRecord = function(e) {
            return (0, t.requestPost)("/vpoints/vpointsExchange/getExchangeRecord", e);
        }, l.adInfoByType = function(e) {
            return (0, t.requestPost)("/adPub/adInfoByType", e);
        }, l.userInfo = function(e) {
            return (0, t.requestPost)("/user/userInfo", e);
        }, l.updateUserMessage = function(e) {
            return (0, t.requestPost)("/user/updateUserMessage", e);
        }, l.queryUserSubscribeStatus = function(e) {
            return (0, t.requestPost)("/user/queryUserSubscribeStatus", e);
        }, l.createOrUpdateUser = function(e) {
            return (0, t.requestPost)("/user/createOrUpdateUser", e);
        }, l.queryBigPrizeConfigInfo = function(e) {
            return (0, t.requestPost)("/gifts/queryBigPrizeConfigInfo", e);
        }, l.queryUserStatus = function() {
            return (0, t.requestPost)("/user/userStatus");
        }, l.logOutUser = function() {
            return (0, t.requestPost)("/user/logOutUser");
        }, l.activationApi = function(e) {
            return (0, t.requestPost)("/user/activation", e);
        }, l.queryPacksRecordInfoApi = function(e) {
            return (0, t.requestPost)("/WaitActivation/queryWaitActivationForMoneyRecord", e);
        };
    },
    c8ba: function(l, a) {
        var t;
        t = function() {
            return this;
        }();
        try {
            t = t || new Function("return this")();
        } catch (l) {
            l = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(l);
            "object" === ("undefined" == typeof window ? "undefined" : e(window)) && (t = window);
        }
        l.exports = t;
    },
    c973: function(e, l) {
        function a(e, l, a, t, n, r, u) {
            try {
                var o = e[r](u), i = o.value;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return void a(e);
            }
            o.done ? l(i) : Promise.resolve(i).then(t, n);
        }
        e.exports = function(e) {
            return function() {
                var l = this, t = arguments;
                return new Promise(function(n, r) {
                    var u = e.apply(l, t);
                    function o(e) {
                        a(u, n, r, o, i, "next", e);
                    }
                    function i(e) {
                        a(u, n, r, o, i, "throw", e);
                    }
                    o(void 0);
                });
            };
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    cd40: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, n = /^<\/([-A-Za-z0-9_]+)[^>]*>/, r = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
        function u(e) {
            for (var l = {}, a = e.split(","), t = 0; t < a.length; t += 1) l[a[t]] = !0;
            return l;
        }
        var o = u("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), i = u("address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), c = u("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), s = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), v = u("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
        l.default = function(e, l) {
            var a, u, b, f = e, p = [];
            function d(e, a) {
                var t;
                if (a) for (a = a.toLowerCase(), t = p.length - 1; t >= 0 && p[t] !== a; t -= 1) ; else t = 0;
                if (t >= 0) {
                    for (var n = p.length - 1; n >= t; n -= 1) l.end && l.end(p[n]);
                    p.length = t;
                }
            }
            function g(e, a, t, n) {
                if (a = a.toLowerCase(), i[a]) for (;p.last() && c[p.last()]; ) d(0, p.last());
                if (s[a] && p.last() === a && d(0, a), (n = o[a] || !!n) || p.push(a), l.start) {
                    var u = [];
                    t.replace(r, function(e, l) {
                        var a = arguments[2] || arguments[3] || arguments[4] || (v[l] ? l : "");
                        u.push({
                            name: l,
                            value: a,
                            escaped: a.replace(/(^|[^\\])"/g, '$1\\"')
                        });
                    }), l.start && l.start(a, u, n);
                }
            }
            for (p.last = function() {
                return p[p.length - 1];
            }; e; ) {
                if (u = !0, 0 === e.indexOf("</") ? (b = e.match(n), b && (e = e.substring(b[0].length), 
                b[0].replace(n, d), u = !1)) : 0 === e.indexOf("<") && (b = e.match(t), b && (e = e.substring(b[0].length), 
                b[0].replace(t, g), u = !1)), u) {
                    a = e.indexOf("<");
                    for (var h = ""; 0 === a; ) h += "<", a = (e = e.substring(1)).indexOf("<");
                    h += a < 0 ? e : e.substring(0, a), e = a < 0 ? "" : e.substring(a), l.chars && l.chars(h);
                }
                if (e === f) throw new Error("Parse Error: ".concat(e));
                f = e;
            }
            d();
        };
    },
    cd4a: function(e, l, a) {
        (function(e, t) {
            var n = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.handleWxYS = l.getMedalInfo = void 0;
            var r = n(a("2eee")), u = n(a("c973")), o = a("9b31"), i = function() {
                var l = (0, u.default)(r.default.mark(function l() {
                    var a, t;
                    return r.default.wrap(function(l) {
                        for (;;) switch (l.prev = l.next) {
                          case 0:
                            if (a = e.getStorageSync("islandInfo") || "") {
                                l.next = 11;
                                break;
                            }
                            return l.prev = 2, l.next = 5, (0, o.requestPost)("/user/queryIslanderInfo", {});

                          case 5:
                            0 == (t = l.sent).result.code && 0 == t.result.businessCode && t.reply.islanderInfo ? (a = t.reply.islanderInfo, 
                            e.setStorageSync("islandInfo", a)) : a = "", l.next = 11;
                            break;

                          case 9:
                            l.prev = 9, l.t0 = l.catch(2);

                          case 11:
                            return l.abrupt("return", a);

                          case 12:
                          case "end":
                            return l.stop();
                        }
                    }, l, null, [ [ 2, 9 ] ]);
                }));
                return function() {
                    return l.apply(this, arguments);
                };
            }();
            l.getMedalInfo = i, l.handleWxYS = function() {
                return new Promise(function(l, a) {
                    t.getPrivacySetting ? (getApp().globalData.isNewPrivacySetting = !0, console.log("22222========================", getApp().globalData.isNewPrivacySetting), 
                    e.getPrivacySetting({
                        success: function(a) {
                            console.log("微信授权"), console.log(a), a.needAuthorization ? (console.log("1------------------------------------1"), 
                            e.removeStorageSync("privacyRuleFlag"), l({
                                type: "success",
                                result: a
                            })) : l({
                                type: "success",
                                result: a
                            });
                        },
                        fail: function(e) {
                            l({
                                type: "error",
                                res: res
                            });
                        }
                    })) : (getApp().globalData.isNewPrivacySetting = !1, l({
                        type: "success",
                        result: {}
                    }));
                });
            };
        }).call(this, a("543d").default, a("bc2e").default);
    },
    cf0d: function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var n = t(a("d363")), r = t(a("9b03"));
            function u(e) {
                for (var l = {}, a = e.split(","), t = 0; t < a.length; t += 1) l[a[t]] = !0;
                return l;
            }
            var o = u("br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), i = u("a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), c = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
            l.default = function(l, a, t, u) {
                l = function(e) {
                    return e.replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<").replace(/<script[^]*<\/script>/gi, "").replace(/<style[^]*<\/style>/gi, "");
                }(l = function(e) {
                    return /<body.*>([^]*)<\/body>/.test(e) ? RegExp.$1 : e;
                }(l)), l = n.default.strDiscode(l);
                var s = [], v = {
                    nodes: [],
                    imageUrls: []
                }, b = function() {
                    var l = {};
                    return e.getSystemInfo({
                        success: function(e) {
                            l.width = e.windowWidth, l.height = e.windowHeight;
                        }
                    }), l;
                }();
                function f(e) {
                    this.node = "element", this.tag = e, this.$screen = b;
                }
                return (0, r.default)(l, {
                    start: function(e, l, r) {
                        var u = new f(e);
                        if (0 !== s.length) {
                            var b = s[0];
                            void 0 === b.nodes && (b.nodes = []);
                        }
                        if (o[e] ? u.tagType = "block" : i[e] ? u.tagType = "inline" : c[e] && (u.tagType = "closeSelf"), 
                        u.attr = l.reduce(function(e, l) {
                            var a = l.name, t = l.value;
                            return "class" === a && (u.classStr = t), "style" === a && (u.styleStr = t), t.match(/ /) && (t = t.split(" ")), 
                            e[a] ? Array.isArray(e[a]) ? e[a].push(t) : e[a] = [ e[a], t ] : e[a] = t, e;
                        }, {}), u.classStr ? u.classStr += " ".concat(u.tag) : u.classStr = u.tag, "inline" === u.tagType && (u.classStr += " inline"), 
                        "img" === u.tag) {
                            var p = u.attr.src;
                            p = n.default.urlToHttpUrl(p, t.domain), Object.assign(u.attr, t, {
                                src: p || ""
                            }), p && v.imageUrls.push(p);
                        }
                        if ("a" === u.tag && (u.attr.href = u.attr.href || ""), "font" === u.tag) {
                            var d = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], g = {
                                color: "color",
                                face: "font-family",
                                size: "font-size"
                            };
                            u.styleStr || (u.styleStr = ""), Object.keys(g).forEach(function(e) {
                                if (u.attr[e]) {
                                    var l = "size" === e ? d[u.attr[e] - 1] : u.attr[e];
                                    u.styleStr += "".concat(g[e], ": ").concat(l, ";");
                                }
                            });
                        }
                        if ("source" === u.tag && (v.source = u.attr.src), a.start && a.start(u, v), r) {
                            var h = s[0] || v;
                            void 0 === h.nodes && (h.nodes = []), h.nodes.push(u);
                        } else s.unshift(u);
                    },
                    end: function(e) {
                        var l = s.shift();
                        if (l.tag !== e && console.error("invalid state: mismatch end tag"), "video" === l.tag && v.source && (l.attr.src = v.source, 
                        delete v.source), a.end && a.end(l, v), 0 === s.length) v.nodes.push(l); else {
                            var t = s[0];
                            t.nodes || (t.nodes = []), t.nodes.push(l);
                        }
                    },
                    chars: function(e) {
                        if (e.trim()) {
                            var l = {
                                node: "text",
                                text: e
                            };
                            if (a.chars && a.chars(l, v), 0 === s.length) v.nodes.push(l); else {
                                var t = s[0];
                                void 0 === t.nodes && (t.nodes = []), t.nodes.push(l);
                            }
                        }
                    }
                }), v;
            };
        }).call(this, a("bc2e").default);
    },
    d2b9: function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.createAnimation = function(e, l) {
                if (l) return clearTimeout(l.timer), new c(e, l);
            };
            var n = t(a("9523")), r = t(a("970b")), u = t(a("5bc3"));
            function o(e, l) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    l && (t = t.filter(function(l) {
                        return Object.getOwnPropertyDescriptor(e, l).enumerable;
                    })), a.push.apply(a, t);
                }
                return a;
            }
            function i(e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = null != arguments[l] ? arguments[l] : {};
                    l % 2 ? o(Object(a), !0).forEach(function(l) {
                        (0, n.default)(e, l, a[l]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(l) {
                        Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(a, l));
                    });
                }
                return e;
            }
            var c = function() {
                function l(a, t) {
                    (0, r.default)(this, l), this.options = a, this.animation = e.createAnimation(a), 
                    this.currentStepAnimates = {}, this.next = 0, this.$ = t;
                }
                return (0, u.default)(l, [ {
                    key: "_nvuePushAnimates",
                    value: function(e, l) {
                        var a = {};
                        if (a = this.currentStepAnimates[this.next] || {
                            styles: {},
                            config: {}
                        }, s.includes(e)) {
                            a.styles.transform || (a.styles.transform = "");
                            var t = "";
                            "rotate" === e && (t = "deg"), a.styles.transform += "".concat(e, "(").concat(l + t, ") ");
                        } else a.styles[e] = "".concat(l);
                        this.currentStepAnimates[this.next] = a;
                    }
                }, {
                    key: "_animateRun",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = this.$.$refs.ani.ref;
                        if (a) return new Promise(function(t, n) {
                            nvueAnimation.transition(a, i({
                                styles: e
                            }, l), function(e) {
                                t();
                            });
                        });
                    }
                }, {
                    key: "_nvueNextAnimate",
                    value: function(e) {
                        var l = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, t = arguments.length > 2 ? arguments[2] : void 0, n = e[a];
                        if (n) {
                            var r = n.styles, u = n.config;
                            this._animateRun(r, u).then(function() {
                                a += 1, l._nvueNextAnimate(e, a, t);
                            });
                        } else this.currentStepAnimates = {}, "function" == typeof t && t(), this.isEnd = !0;
                    }
                }, {
                    key: "step",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.animation.step(e), this;
                    }
                }, {
                    key: "run",
                    value: function(e) {
                        this.$.animationData = this.animation.export(), this.$.timer = setTimeout(function() {
                            "function" == typeof e && e();
                        }, this.$.durationTime);
                    }
                } ]), l;
            }(), s = [ "matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ" ];
            s.concat([ "opacity", "backgroundColor" ], [ "width", "height", "left", "right", "top", "bottom" ]).forEach(function(e) {
                c.prototype[e] = function() {
                    var l;
                    return (l = this.animation)[e].apply(l, arguments), this;
                };
            });
        }).call(this, a("543d").default);
    },
    d363: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        l.default = {
            strDiscode: function(e) {
                return e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&OElig;|&#338;|&#x152;/g, "Œ")).replace(/&oelig;|&#339;|&#x153;/g, "œ")).replace(/&Scaron;|&#352;|&#x160;/g, "Š")).replace(/&scaron;|&#353;|&#x161;/g, "š")).replace(/&Yuml;|&#376;|&#x178;/g, "Ÿ")).replace(/&fnof;|&#402;|&#x192;/g, "ƒ")).replace(/&circ;|&#710;|&#x2c6;/g, "ˆ")).replace(/&tilde;|&#732;|&#x2dc;/g, "˜")).replace(/&thinsp;|$#8201;|&#x2009;/g, "<span class='spaceshow'> </span>")).replace(/&zwnj;|&#8204;|&#x200C;/g, "<span class='spaceshow'>‌</span>")).replace(/&zwj;|$#8205;|&#x200D;/g, "<span class='spaceshow'>‍</span>")).replace(/&lrm;|$#8206;|&#x200E;/g, "<span class='spaceshow'>‎</span>")).replace(/&rlm;|&#8207;|&#x200F;/g, "<span class='spaceshow'>‏</span>")).replace(/&ndash;|&#8211;|&#x2013;/g, "–")).replace(/&mdash;|&#8212;|&#x2014;/g, "—")).replace(/&lsquo;|&#8216;|&#x2018;/g, "‘")).replace(/&rsquo;|&#8217;|&#x2019;/g, "’")).replace(/&sbquo;|&#8218;|&#x201a;/g, "‚")).replace(/&ldquo;|&#8220;|&#x201c;/g, "“")).replace(/&rdquo;|&#8221;|&#x201d;/g, "”")).replace(/&bdquo;|&#8222;|&#x201e;/g, "„")).replace(/&dagger;|&#8224;|&#x2020;/g, "†")).replace(/&Dagger;|&#8225;|&#x2021;/g, "‡")).replace(/&bull;|&#8226;|&#x2022;/g, "•")).replace(/&hellip;|&#8230;|&#x2026;/g, "…")).replace(/&permil;|&#8240;|&#x2030;/g, "‰")).replace(/&prime;|&#8242;|&#x2032;/g, "′")).replace(/&Prime;|&#8243;|&#x2033;/g, "″")).replace(/&lsaquo;|&#8249;|&#x2039;/g, "‹")).replace(/&rsaquo;|&#8250;|&#x203a;/g, "›")).replace(/&oline;|&#8254;|&#x203e;/g, "‾")).replace(/&euro;|&#8364;|&#x20ac;/g, "€")).replace(/&trade;|&#8482;|&#x2122;/g, "™")).replace(/&larr;|&#8592;|&#x2190;/g, "←")).replace(/&uarr;|&#8593;|&#x2191;/g, "↑")).replace(/&rarr;|&#8594;|&#x2192;/g, "→")).replace(/&darr;|&#8595;|&#x2193;/g, "↓")).replace(/&harr;|&#8596;|&#x2194;/g, "↔")).replace(/&crarr;|&#8629;|&#x21b5;/g, "↵")).replace(/&lceil;|&#8968;|&#x2308;/g, "⌈")).replace(/&rceil;|&#8969;|&#x2309;/g, "⌉")).replace(/&lfloor;|&#8970;|&#x230a;/g, "⌊")).replace(/&rfloor;|&#8971;|&#x230b;/g, "⌋")).replace(/&loz;|&#9674;|&#x25ca;/g, "◊")).replace(/&spades;|&#9824;|&#x2660;/g, "♠")).replace(/&clubs;|&#9827;|&#x2663;/g, "♣")).replace(/&hearts;|&#9829;|&#x2665;/g, "♥")).replace(/&diams;|&#9830;|&#x2666;/g, "♦");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&nbsp;|&#32;|&#x20;/g, "<span class='spaceshow'> </span>")).replace(/&ensp;|&#8194;|&#x2002;/g, "<span class='spaceshow'> </span>")).replace(/&#12288;|&#x3000;/g, "<span class='spaceshow'>　</span>")).replace(/&emsp;|&#8195;|&#x2003;/g, "<span class='spaceshow'> </span>")).replace(/&quot;|&#34;|&#x22;/g, '"')).replace(/&quot;|&#39;|&#x27;/g, "'")).replace(/&acute;|&#180;|&#xB4;/g, "´")).replace(/&times;|&#215;|&#xD7;/g, "×")).replace(/&divide;|&#247;|&#xF7;/g, "÷")).replace(/&amp;|&#38;|&#x26;/g, "&")).replace(/&lt;|&#60;|&#x3c;/g, "<")).replace(/&gt;|&#62;|&#x3e;/g, ">");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&Alpha;|&#913;|&#x391;/g, "Α")).replace(/&Beta;|&#914;|&#x392;/g, "Β")).replace(/&Gamma;|&#915;|&#x393;/g, "Γ")).replace(/&Delta;|&#916;|&#x394;/g, "Δ")).replace(/&Epsilon;|&#917;|&#x395;/g, "Ε")).replace(/&Zeta;|&#918;|&#x396;/g, "Ζ")).replace(/&Eta;|&#919;|&#x397;/g, "Η")).replace(/&Theta;|&#920;|&#x398;/g, "Θ")).replace(/&Iota;|&#921;|&#x399;/g, "Ι")).replace(/&Kappa;|&#922;|&#x39a;/g, "Κ")).replace(/&Lambda;|&#923;|&#x39b;/g, "Λ")).replace(/&Mu;|&#924;|&#x39c;/g, "Μ")).replace(/&Nu;|&#925;|&#x39d;/g, "Ν")).replace(/&Xi;|&#925;|&#x39d;/g, "Ν")).replace(/&Omicron;|&#927;|&#x39f;/g, "Ο")).replace(/&Pi;|&#928;|&#x3a0;/g, "Π")).replace(/&Rho;|&#929;|&#x3a1;/g, "Ρ")).replace(/&Sigma;|&#931;|&#x3a3;/g, "Σ")).replace(/&Tau;|&#932;|&#x3a4;/g, "Τ")).replace(/&Upsilon;|&#933;|&#x3a5;/g, "Υ")).replace(/&Phi;|&#934;|&#x3a6;/g, "Φ")).replace(/&Chi;|&#935;|&#x3a7;/g, "Χ")).replace(/&Psi;|&#936;|&#x3a8;/g, "Ψ")).replace(/&Omega;|&#937;|&#x3a9;/g, "Ω")).replace(/&alpha;|&#945;|&#x3b1;/g, "α")).replace(/&beta;|&#946;|&#x3b2;/g, "β")).replace(/&gamma;|&#947;|&#x3b3;/g, "γ")).replace(/&delta;|&#948;|&#x3b4;/g, "δ")).replace(/&epsilon;|&#949;|&#x3b5;/g, "ε")).replace(/&zeta;|&#950;|&#x3b6;/g, "ζ")).replace(/&eta;|&#951;|&#x3b7;/g, "η")).replace(/&theta;|&#952;|&#x3b8;/g, "θ")).replace(/&iota;|&#953;|&#x3b9;/g, "ι")).replace(/&kappa;|&#954;|&#x3ba;/g, "κ")).replace(/&lambda;|&#955;|&#x3bb;/g, "λ")).replace(/&mu;|&#956;|&#x3bc;/g, "μ")).replace(/&nu;|&#957;|&#x3bd;/g, "ν")).replace(/&xi;|&#958;|&#x3be;/g, "ξ")).replace(/&omicron;|&#959;|&#x3bf;/g, "ο")).replace(/&pi;|&#960;|&#x3c0;/g, "π")).replace(/&rho;|&#961;|&#x3c1;/g, "ρ")).replace(/&sigmaf;|&#962;|&#x3c2;/g, "ς")).replace(/&sigma;|&#963;|&#x3c3;/g, "σ")).replace(/&tau;|&#964;|&#x3c4;/g, "τ")).replace(/&upsilon;|&#965;|&#x3c5;/g, "υ")).replace(/&phi;|&#966;|&#x3c6;/g, "φ")).replace(/&chi;|&#967;|&#x3c7;/g, "χ")).replace(/&psi;|&#968;|&#x3c8;/g, "ψ")).replace(/&omega;|&#969;|&#x3c9;/g, "ω")).replace(/&thetasym;|&#977;|&#x3d1;/g, "ϑ")).replace(/&upsih;|&#978;|&#x3d2;/g, "ϒ")).replace(/&piv;|&#982;|&#x3d6;/g, "ϖ")).replace(/&middot;|&#183;|&#xb7;/g, "·");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&forall;|&#8704;|&#x2200;/g, "∀")).replace(/&part;|&#8706;|&#x2202;/g, "∂")).replace(/&exist;|&#8707;|&#x2203;/g, "∃")).replace(/&empty;|&#8709;|&#x2205;/g, "∅")).replace(/&nabla;|&#8711;|&#x2207;/g, "∇")).replace(/&isin;|&#8712;|&#x2208;/g, "∈")).replace(/&notin;|&#8713;|&#x2209;/g, "∉")).replace(/&ni;|&#8715;|&#x220b;/g, "∋")).replace(/&prod;|&#8719;|&#x220f;/g, "∏")).replace(/&sum;|&#8721;|&#x2211;/g, "∑")).replace(/&minus;|&#8722;|&#x2212;/g, "−")).replace(/&lowast;|&#8727;|&#x2217;/g, "∗")).replace(/&radic;|&#8730;|&#x221a;/g, "√")).replace(/&prop;|&#8733;|&#x221d;/g, "∝")).replace(/&infin;|&#8734;|&#x221e;/g, "∞")).replace(/&ang;|&#8736;|&#x2220;/g, "∠")).replace(/&and;|&#8743;|&#x2227;/g, "∧")).replace(/&or;|&#8744;|&#x2228;/g, "∨")).replace(/&cap;|&#8745;|&#x2229;/g, "∩")).replace(/&cup;|&#8746;|&#x222a;/g, "∪")).replace(/&int;|&#8747;|&#x222b;/g, "∫")).replace(/&there4;|&#8756;|&#x2234;/g, "∴")).replace(/&sim;|&#8764;|&#x223c;/g, "∼")).replace(/&cong;|&#8773;|&#x2245;/g, "≅")).replace(/&asymp;|&#8776;|&#x2248;/g, "≈")).replace(/&ne;|&#8800;|&#x2260;/g, "≠")).replace(/&le;|&#8804;|&#x2264;/g, "≤")).replace(/&ge;|&#8805;|&#x2265;/g, "≥")).replace(/&sub;|&#8834;|&#x2282;/g, "⊂")).replace(/&sup;|&#8835;|&#x2283;/g, "⊃")).replace(/&nsub;|&#8836;|&#x2284;/g, "⊄")).replace(/&sube;|&#8838;|&#x2286;/g, "⊆")).replace(/&supe;|&#8839;|&#x2287;/g, "⊇")).replace(/&oplus;|&#8853;|&#x2295;/g, "⊕")).replace(/&otimes;|&#8855;|&#x2297;/g, "⊗")).replace(/&perp;|&#8869;|&#x22a5;/g, "⊥")).replace(/&sdot;|&#8901;|&#x22c5;/g, "⋅");
                }(e))));
            },
            urlToHttpUrl: function(e, l) {
                return /^\/\//.test(e) ? "https:".concat(e) : /^\//.test(e) ? "https://".concat(l).concat(e) : e;
            }
        };
    },
    d73c: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        l.default = {
            strDiscode: function(e) {
                return e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&OElig;|&#338;|&#x152;/g, "Œ")).replace(/&oelig;|&#339;|&#x153;/g, "œ")).replace(/&Scaron;|&#352;|&#x160;/g, "Š")).replace(/&scaron;|&#353;|&#x161;/g, "š")).replace(/&Yuml;|&#376;|&#x178;/g, "Ÿ")).replace(/&fnof;|&#402;|&#x192;/g, "ƒ")).replace(/&circ;|&#710;|&#x2c6;/g, "ˆ")).replace(/&tilde;|&#732;|&#x2dc;/g, "˜")).replace(/&thinsp;|$#8201;|&#x2009;/g, "<span class='spaceshow'> </span>")).replace(/&zwnj;|&#8204;|&#x200C;/g, "<span class='spaceshow'>‌</span>")).replace(/&zwj;|$#8205;|&#x200D;/g, "<span class='spaceshow'>‍</span>")).replace(/&lrm;|$#8206;|&#x200E;/g, "<span class='spaceshow'>‎</span>")).replace(/&rlm;|&#8207;|&#x200F;/g, "<span class='spaceshow'>‏</span>")).replace(/&ndash;|&#8211;|&#x2013;/g, "–")).replace(/&mdash;|&#8212;|&#x2014;/g, "—")).replace(/&lsquo;|&#8216;|&#x2018;/g, "‘")).replace(/&rsquo;|&#8217;|&#x2019;/g, "’")).replace(/&sbquo;|&#8218;|&#x201a;/g, "‚")).replace(/&ldquo;|&#8220;|&#x201c;/g, "“")).replace(/&rdquo;|&#8221;|&#x201d;/g, "”")).replace(/&bdquo;|&#8222;|&#x201e;/g, "„")).replace(/&dagger;|&#8224;|&#x2020;/g, "†")).replace(/&Dagger;|&#8225;|&#x2021;/g, "‡")).replace(/&bull;|&#8226;|&#x2022;/g, "•")).replace(/&hellip;|&#8230;|&#x2026;/g, "…")).replace(/&permil;|&#8240;|&#x2030;/g, "‰")).replace(/&prime;|&#8242;|&#x2032;/g, "′")).replace(/&Prime;|&#8243;|&#x2033;/g, "″")).replace(/&lsaquo;|&#8249;|&#x2039;/g, "‹")).replace(/&rsaquo;|&#8250;|&#x203a;/g, "›")).replace(/&oline;|&#8254;|&#x203e;/g, "‾")).replace(/&euro;|&#8364;|&#x20ac;/g, "€")).replace(/&trade;|&#8482;|&#x2122;/g, "™")).replace(/&larr;|&#8592;|&#x2190;/g, "←")).replace(/&uarr;|&#8593;|&#x2191;/g, "↑")).replace(/&rarr;|&#8594;|&#x2192;/g, "→")).replace(/&darr;|&#8595;|&#x2193;/g, "↓")).replace(/&harr;|&#8596;|&#x2194;/g, "↔")).replace(/&crarr;|&#8629;|&#x21b5;/g, "↵")).replace(/&lceil;|&#8968;|&#x2308;/g, "⌈")).replace(/&rceil;|&#8969;|&#x2309;/g, "⌉")).replace(/&lfloor;|&#8970;|&#x230a;/g, "⌊")).replace(/&rfloor;|&#8971;|&#x230b;/g, "⌋")).replace(/&loz;|&#9674;|&#x25ca;/g, "◊")).replace(/&spades;|&#9824;|&#x2660;/g, "♠")).replace(/&clubs;|&#9827;|&#x2663;/g, "♣")).replace(/&hearts;|&#9829;|&#x2665;/g, "♥")).replace(/&diams;|&#9830;|&#x2666;/g, "♦");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&nbsp;|&#32;|&#x20;/g, "<span class='spaceshow'> </span>")).replace(/&ensp;|&#8194;|&#x2002;/g, "<span class='spaceshow'> </span>")).replace(/&#12288;|&#x3000;/g, "<span class='spaceshow'>　</span>")).replace(/&emsp;|&#8195;|&#x2003;/g, "<span class='spaceshow'> </span>")).replace(/&quot;|&#34;|&#x22;/g, '"')).replace(/&quot;|&#39;|&#x27;/g, "'")).replace(/&acute;|&#180;|&#xB4;/g, "´")).replace(/&times;|&#215;|&#xD7;/g, "×")).replace(/&divide;|&#247;|&#xF7;/g, "÷")).replace(/&amp;|&#38;|&#x26;/g, "&")).replace(/&lt;|&#60;|&#x3c;/g, "<")).replace(/&gt;|&#62;|&#x3e;/g, ">");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&Alpha;|&#913;|&#x391;/g, "Α")).replace(/&Beta;|&#914;|&#x392;/g, "Β")).replace(/&Gamma;|&#915;|&#x393;/g, "Γ")).replace(/&Delta;|&#916;|&#x394;/g, "Δ")).replace(/&Epsilon;|&#917;|&#x395;/g, "Ε")).replace(/&Zeta;|&#918;|&#x396;/g, "Ζ")).replace(/&Eta;|&#919;|&#x397;/g, "Η")).replace(/&Theta;|&#920;|&#x398;/g, "Θ")).replace(/&Iota;|&#921;|&#x399;/g, "Ι")).replace(/&Kappa;|&#922;|&#x39a;/g, "Κ")).replace(/&Lambda;|&#923;|&#x39b;/g, "Λ")).replace(/&Mu;|&#924;|&#x39c;/g, "Μ")).replace(/&Nu;|&#925;|&#x39d;/g, "Ν")).replace(/&Xi;|&#925;|&#x39d;/g, "Ν")).replace(/&Omicron;|&#927;|&#x39f;/g, "Ο")).replace(/&Pi;|&#928;|&#x3a0;/g, "Π")).replace(/&Rho;|&#929;|&#x3a1;/g, "Ρ")).replace(/&Sigma;|&#931;|&#x3a3;/g, "Σ")).replace(/&Tau;|&#932;|&#x3a4;/g, "Τ")).replace(/&Upsilon;|&#933;|&#x3a5;/g, "Υ")).replace(/&Phi;|&#934;|&#x3a6;/g, "Φ")).replace(/&Chi;|&#935;|&#x3a7;/g, "Χ")).replace(/&Psi;|&#936;|&#x3a8;/g, "Ψ")).replace(/&Omega;|&#937;|&#x3a9;/g, "Ω")).replace(/&alpha;|&#945;|&#x3b1;/g, "α")).replace(/&beta;|&#946;|&#x3b2;/g, "β")).replace(/&gamma;|&#947;|&#x3b3;/g, "γ")).replace(/&delta;|&#948;|&#x3b4;/g, "δ")).replace(/&epsilon;|&#949;|&#x3b5;/g, "ε")).replace(/&zeta;|&#950;|&#x3b6;/g, "ζ")).replace(/&eta;|&#951;|&#x3b7;/g, "η")).replace(/&theta;|&#952;|&#x3b8;/g, "θ")).replace(/&iota;|&#953;|&#x3b9;/g, "ι")).replace(/&kappa;|&#954;|&#x3ba;/g, "κ")).replace(/&lambda;|&#955;|&#x3bb;/g, "λ")).replace(/&mu;|&#956;|&#x3bc;/g, "μ")).replace(/&nu;|&#957;|&#x3bd;/g, "ν")).replace(/&xi;|&#958;|&#x3be;/g, "ξ")).replace(/&omicron;|&#959;|&#x3bf;/g, "ο")).replace(/&pi;|&#960;|&#x3c0;/g, "π")).replace(/&rho;|&#961;|&#x3c1;/g, "ρ")).replace(/&sigmaf;|&#962;|&#x3c2;/g, "ς")).replace(/&sigma;|&#963;|&#x3c3;/g, "σ")).replace(/&tau;|&#964;|&#x3c4;/g, "τ")).replace(/&upsilon;|&#965;|&#x3c5;/g, "υ")).replace(/&phi;|&#966;|&#x3c6;/g, "φ")).replace(/&chi;|&#967;|&#x3c7;/g, "χ")).replace(/&psi;|&#968;|&#x3c8;/g, "ψ")).replace(/&omega;|&#969;|&#x3c9;/g, "ω")).replace(/&thetasym;|&#977;|&#x3d1;/g, "ϑ")).replace(/&upsih;|&#978;|&#x3d2;/g, "ϒ")).replace(/&piv;|&#982;|&#x3d6;/g, "ϖ")).replace(/&middot;|&#183;|&#xb7;/g, "·");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&forall;|&#8704;|&#x2200;/g, "∀")).replace(/&part;|&#8706;|&#x2202;/g, "∂")).replace(/&exist;|&#8707;|&#x2203;/g, "∃")).replace(/&empty;|&#8709;|&#x2205;/g, "∅")).replace(/&nabla;|&#8711;|&#x2207;/g, "∇")).replace(/&isin;|&#8712;|&#x2208;/g, "∈")).replace(/&notin;|&#8713;|&#x2209;/g, "∉")).replace(/&ni;|&#8715;|&#x220b;/g, "∋")).replace(/&prod;|&#8719;|&#x220f;/g, "∏")).replace(/&sum;|&#8721;|&#x2211;/g, "∑")).replace(/&minus;|&#8722;|&#x2212;/g, "−")).replace(/&lowast;|&#8727;|&#x2217;/g, "∗")).replace(/&radic;|&#8730;|&#x221a;/g, "√")).replace(/&prop;|&#8733;|&#x221d;/g, "∝")).replace(/&infin;|&#8734;|&#x221e;/g, "∞")).replace(/&ang;|&#8736;|&#x2220;/g, "∠")).replace(/&and;|&#8743;|&#x2227;/g, "∧")).replace(/&or;|&#8744;|&#x2228;/g, "∨")).replace(/&cap;|&#8745;|&#x2229;/g, "∩")).replace(/&cup;|&#8746;|&#x222a;/g, "∪")).replace(/&int;|&#8747;|&#x222b;/g, "∫")).replace(/&there4;|&#8756;|&#x2234;/g, "∴")).replace(/&sim;|&#8764;|&#x223c;/g, "∼")).replace(/&cong;|&#8773;|&#x2245;/g, "≅")).replace(/&asymp;|&#8776;|&#x2248;/g, "≈")).replace(/&ne;|&#8800;|&#x2260;/g, "≠")).replace(/&le;|&#8804;|&#x2264;/g, "≤")).replace(/&ge;|&#8805;|&#x2265;/g, "≥")).replace(/&sub;|&#8834;|&#x2282;/g, "⊂")).replace(/&sup;|&#8835;|&#x2283;/g, "⊃")).replace(/&nsub;|&#8836;|&#x2284;/g, "⊄")).replace(/&sube;|&#8838;|&#x2286;/g, "⊆")).replace(/&supe;|&#8839;|&#x2287;/g, "⊇")).replace(/&oplus;|&#8853;|&#x2295;/g, "⊕")).replace(/&otimes;|&#8855;|&#x2297;/g, "⊗")).replace(/&perp;|&#8869;|&#x22a5;/g, "⊥")).replace(/&sdot;|&#8901;|&#x22c5;/g, "⋅");
                }(e))));
            },
            urlToHttpUrl: function(e, l) {
                return /^\/\//.test(e) ? "https:".concat(e) : /^\//.test(e) ? "https://".concat(l).concat(e) : e;
            }
        };
    },
    da60: function(e, l) {
        e.exports = function(e) {
            throw new TypeError('"' + e + '" is read-only');
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    df7c: function(e, l, a) {
        (function(e) {
            function a(e, l) {
                for (var a = 0, t = e.length - 1; t >= 0; t--) {
                    var n = e[t];
                    "." === n ? e.splice(t, 1) : ".." === n ? (e.splice(t, 1), a++) : a && (e.splice(t, 1), 
                    a--);
                }
                if (l) for (;a--; a) e.unshift("..");
                return e;
            }
            function t(e, l) {
                if (e.filter) return e.filter(l);
                for (var a = [], t = 0; t < e.length; t++) l(e[t], t, e) && a.push(e[t]);
                return a;
            }
            l.resolve = function() {
                for (var l = "", n = !1, r = arguments.length - 1; r >= -1 && !n; r--) {
                    var u = r >= 0 ? arguments[r] : e.cwd();
                    if ("string" != typeof u) throw new TypeError("Arguments to path.resolve must be strings");
                    u && (l = u + "/" + l, n = "/" === u.charAt(0));
                }
                return (n ? "/" : "") + (l = a(t(l.split("/"), function(e) {
                    return !!e;
                }), !n).join("/")) || ".";
            }, l.normalize = function(e) {
                var r = l.isAbsolute(e), u = "/" === n(e, -1);
                return (e = a(t(e.split("/"), function(e) {
                    return !!e;
                }), !r).join("/")) || r || (e = "."), e && u && (e += "/"), (r ? "/" : "") + e;
            }, l.isAbsolute = function(e) {
                return "/" === e.charAt(0);
            }, l.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return l.normalize(t(e, function(e, l) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e;
                }).join("/"));
            }, l.relative = function(e, a) {
                function t(e) {
                    for (var l = 0; l < e.length && "" === e[l]; l++) ;
                    for (var a = e.length - 1; a >= 0 && "" === e[a]; a--) ;
                    return l > a ? [] : e.slice(l, a - l + 1);
                }
                e = l.resolve(e).substr(1), a = l.resolve(a).substr(1);
                for (var n = t(e.split("/")), r = t(a.split("/")), u = Math.min(n.length, r.length), o = u, i = 0; i < u; i++) if (n[i] !== r[i]) {
                    o = i;
                    break;
                }
                var c = [];
                for (i = o; i < n.length; i++) c.push("..");
                return (c = c.concat(r.slice(o))).join("/");
            }, l.sep = "/", l.delimiter = ":", l.dirname = function(e) {
                if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                for (var l = e.charCodeAt(0), a = 47 === l, t = -1, n = !0, r = e.length - 1; r >= 1; --r) if (47 === (l = e.charCodeAt(r))) {
                    if (!n) {
                        t = r;
                        break;
                    }
                } else n = !1;
                return -1 === t ? a ? "/" : "." : a && 1 === t ? "/" : e.slice(0, t);
            }, l.basename = function(e, l) {
                var a = function(e) {
                    "string" != typeof e && (e += "");
                    var l, a = 0, t = -1, n = !0;
                    for (l = e.length - 1; l >= 0; --l) if (47 === e.charCodeAt(l)) {
                        if (!n) {
                            a = l + 1;
                            break;
                        }
                    } else -1 === t && (n = !1, t = l + 1);
                    return -1 === t ? "" : e.slice(a, t);
                }(e);
                return l && a.substr(-1 * l.length) === l && (a = a.substr(0, a.length - l.length)), 
                a;
            }, l.extname = function(e) {
                "string" != typeof e && (e += "");
                for (var l = -1, a = 0, t = -1, n = !0, r = 0, u = e.length - 1; u >= 0; --u) {
                    var o = e.charCodeAt(u);
                    if (47 !== o) -1 === t && (n = !1, t = u + 1), 46 === o ? -1 === l ? l = u : 1 !== r && (r = 1) : -1 !== l && (r = -1); else if (!n) {
                        a = u + 1;
                        break;
                    }
                }
                return -1 === l || -1 === t || 0 === r || 1 === r && l === t - 1 && l === a + 1 ? "" : e.slice(l, t);
            };
            var n = "b" === "ab".substr(-1) ? function(e, l, a) {
                return e.substr(l, a);
            } : function(e, l, a) {
                return l < 0 && (l = e.length + l), e.substr(l, a);
            };
        }).call(this, a("4362"));
    },
    e50d: function(e, l, a) {
        var t = a("7037").default;
        e.exports = function(e, l) {
            if ("object" !== t(e) || null === e) return e;
            var a = e[Symbol.toPrimitive];
            if (void 0 !== a) {
                var n = a.call(e, l || "default");
                if ("object" !== t(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === l ? String : Number)(e);
        }, e.exports.__esModule = !0, e.exports.default = e.exports;
    },
    e585: function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var n = t(a("1235")), r = t(a("b873"));
            function u(e) {
                for (var l = {}, a = e.split(","), t = 0; t < a.length; t += 1) l[a[t]] = !0;
                return l;
            }
            var o = u("br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), i = u("a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), c = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
            l.default = function(l, a, t, u) {
                l = function(e) {
                    return e.replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<").replace(/<script[^]*<\/script>/gi, "").replace(/<style[^]*<\/style>/gi, "");
                }(l = function(e) {
                    return /<body.*>([^]*)<\/body>/.test(e) ? RegExp.$1 : e;
                }(l)), l = n.default.strDiscode(l);
                var s = [], v = {
                    nodes: [],
                    imageUrls: []
                }, b = function() {
                    var l = {};
                    return e.getSystemInfo({
                        success: function(e) {
                            l.width = e.windowWidth, l.height = e.windowHeight;
                        }
                    }), l;
                }();
                function f(e) {
                    this.node = "element", this.tag = e, this.$screen = b;
                }
                return (0, r.default)(l, {
                    start: function(e, l, r) {
                        var u = new f(e);
                        if (0 !== s.length) {
                            var b = s[0];
                            void 0 === b.nodes && (b.nodes = []);
                        }
                        if (o[e] ? u.tagType = "block" : i[e] ? u.tagType = "inline" : c[e] && (u.tagType = "closeSelf"), 
                        u.attr = l.reduce(function(e, l) {
                            var a = l.name, t = l.value;
                            return "class" === a && (u.classStr = t), "style" === a && (u.styleStr = t), t.match(/ /) && (t = t.split(" ")), 
                            e[a] ? Array.isArray(e[a]) ? e[a].push(t) : e[a] = [ e[a], t ] : e[a] = t, e;
                        }, {}), u.classStr ? u.classStr += " ".concat(u.tag) : u.classStr = u.tag, "inline" === u.tagType && (u.classStr += " inline"), 
                        "img" === u.tag) {
                            var p = u.attr.src;
                            p = n.default.urlToHttpUrl(p, t.domain), Object.assign(u.attr, t, {
                                src: p || ""
                            }), p && v.imageUrls.push(p);
                        }
                        if ("a" === u.tag && (u.attr.href = u.attr.href || ""), "font" === u.tag) {
                            var d = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], g = {
                                color: "color",
                                face: "font-family",
                                size: "font-size"
                            };
                            u.styleStr || (u.styleStr = ""), Object.keys(g).forEach(function(e) {
                                if (u.attr[e]) {
                                    var l = "size" === e ? d[u.attr[e] - 1] : u.attr[e];
                                    u.styleStr += "".concat(g[e], ": ").concat(l, ";");
                                }
                            });
                        }
                        if ("source" === u.tag && (v.source = u.attr.src), a.start && a.start(u, v), r) {
                            var h = s[0] || v;
                            void 0 === h.nodes && (h.nodes = []), h.nodes.push(u);
                        } else s.unshift(u);
                    },
                    end: function(e) {
                        var l = s.shift();
                        if (l.tag !== e && console.error("invalid state: mismatch end tag"), "video" === l.tag && v.source && (l.attr.src = v.source, 
                        delete v.source), a.end && a.end(l, v), 0 === s.length) v.nodes.push(l); else {
                            var t = s[0];
                            t.nodes || (t.nodes = []), t.nodes.push(l);
                        }
                    },
                    chars: function(e) {
                        if (e.trim()) {
                            var l = {
                                node: "text",
                                text: e
                            };
                            if (a.chars && a.chars(l, v), 0 === s.length) v.nodes.push(l); else {
                                var t = s[0];
                                void 0 === t.nodes && (t.nodes = []), t.nodes.push(l);
                            }
                        }
                    }
                }), v;
            };
        }).call(this, a("bc2e").default);
    },
    e902: function(e, l, a) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        l.default = {
            strDiscode: function(e) {
                return e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&OElig;|&#338;|&#x152;/g, "Œ")).replace(/&oelig;|&#339;|&#x153;/g, "œ")).replace(/&Scaron;|&#352;|&#x160;/g, "Š")).replace(/&scaron;|&#353;|&#x161;/g, "š")).replace(/&Yuml;|&#376;|&#x178;/g, "Ÿ")).replace(/&fnof;|&#402;|&#x192;/g, "ƒ")).replace(/&circ;|&#710;|&#x2c6;/g, "ˆ")).replace(/&tilde;|&#732;|&#x2dc;/g, "˜")).replace(/&thinsp;|$#8201;|&#x2009;/g, "<span class='spaceshow'> </span>")).replace(/&zwnj;|&#8204;|&#x200C;/g, "<span class='spaceshow'>‌</span>")).replace(/&zwj;|$#8205;|&#x200D;/g, "<span class='spaceshow'>‍</span>")).replace(/&lrm;|$#8206;|&#x200E;/g, "<span class='spaceshow'>‎</span>")).replace(/&rlm;|&#8207;|&#x200F;/g, "<span class='spaceshow'>‏</span>")).replace(/&ndash;|&#8211;|&#x2013;/g, "–")).replace(/&mdash;|&#8212;|&#x2014;/g, "—")).replace(/&lsquo;|&#8216;|&#x2018;/g, "‘")).replace(/&rsquo;|&#8217;|&#x2019;/g, "’")).replace(/&sbquo;|&#8218;|&#x201a;/g, "‚")).replace(/&ldquo;|&#8220;|&#x201c;/g, "“")).replace(/&rdquo;|&#8221;|&#x201d;/g, "”")).replace(/&bdquo;|&#8222;|&#x201e;/g, "„")).replace(/&dagger;|&#8224;|&#x2020;/g, "†")).replace(/&Dagger;|&#8225;|&#x2021;/g, "‡")).replace(/&bull;|&#8226;|&#x2022;/g, "•")).replace(/&hellip;|&#8230;|&#x2026;/g, "…")).replace(/&permil;|&#8240;|&#x2030;/g, "‰")).replace(/&prime;|&#8242;|&#x2032;/g, "′")).replace(/&Prime;|&#8243;|&#x2033;/g, "″")).replace(/&lsaquo;|&#8249;|&#x2039;/g, "‹")).replace(/&rsaquo;|&#8250;|&#x203a;/g, "›")).replace(/&oline;|&#8254;|&#x203e;/g, "‾")).replace(/&euro;|&#8364;|&#x20ac;/g, "€")).replace(/&trade;|&#8482;|&#x2122;/g, "™")).replace(/&larr;|&#8592;|&#x2190;/g, "←")).replace(/&uarr;|&#8593;|&#x2191;/g, "↑")).replace(/&rarr;|&#8594;|&#x2192;/g, "→")).replace(/&darr;|&#8595;|&#x2193;/g, "↓")).replace(/&harr;|&#8596;|&#x2194;/g, "↔")).replace(/&crarr;|&#8629;|&#x21b5;/g, "↵")).replace(/&lceil;|&#8968;|&#x2308;/g, "⌈")).replace(/&rceil;|&#8969;|&#x2309;/g, "⌉")).replace(/&lfloor;|&#8970;|&#x230a;/g, "⌊")).replace(/&rfloor;|&#8971;|&#x230b;/g, "⌋")).replace(/&loz;|&#9674;|&#x25ca;/g, "◊")).replace(/&spades;|&#9824;|&#x2660;/g, "♠")).replace(/&clubs;|&#9827;|&#x2663;/g, "♣")).replace(/&hearts;|&#9829;|&#x2665;/g, "♥")).replace(/&diams;|&#9830;|&#x2666;/g, "♦");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&nbsp;|&#32;|&#x20;/g, "<span class='spaceshow'> </span>")).replace(/&ensp;|&#8194;|&#x2002;/g, "<span class='spaceshow'> </span>")).replace(/&#12288;|&#x3000;/g, "<span class='spaceshow'>　</span>")).replace(/&emsp;|&#8195;|&#x2003;/g, "<span class='spaceshow'> </span>")).replace(/&quot;|&#34;|&#x22;/g, '"')).replace(/&quot;|&#39;|&#x27;/g, "'")).replace(/&acute;|&#180;|&#xB4;/g, "´")).replace(/&times;|&#215;|&#xD7;/g, "×")).replace(/&divide;|&#247;|&#xF7;/g, "÷")).replace(/&amp;|&#38;|&#x26;/g, "&")).replace(/&lt;|&#60;|&#x3c;/g, "<")).replace(/&gt;|&#62;|&#x3e;/g, ">");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&Alpha;|&#913;|&#x391;/g, "Α")).replace(/&Beta;|&#914;|&#x392;/g, "Β")).replace(/&Gamma;|&#915;|&#x393;/g, "Γ")).replace(/&Delta;|&#916;|&#x394;/g, "Δ")).replace(/&Epsilon;|&#917;|&#x395;/g, "Ε")).replace(/&Zeta;|&#918;|&#x396;/g, "Ζ")).replace(/&Eta;|&#919;|&#x397;/g, "Η")).replace(/&Theta;|&#920;|&#x398;/g, "Θ")).replace(/&Iota;|&#921;|&#x399;/g, "Ι")).replace(/&Kappa;|&#922;|&#x39a;/g, "Κ")).replace(/&Lambda;|&#923;|&#x39b;/g, "Λ")).replace(/&Mu;|&#924;|&#x39c;/g, "Μ")).replace(/&Nu;|&#925;|&#x39d;/g, "Ν")).replace(/&Xi;|&#925;|&#x39d;/g, "Ν")).replace(/&Omicron;|&#927;|&#x39f;/g, "Ο")).replace(/&Pi;|&#928;|&#x3a0;/g, "Π")).replace(/&Rho;|&#929;|&#x3a1;/g, "Ρ")).replace(/&Sigma;|&#931;|&#x3a3;/g, "Σ")).replace(/&Tau;|&#932;|&#x3a4;/g, "Τ")).replace(/&Upsilon;|&#933;|&#x3a5;/g, "Υ")).replace(/&Phi;|&#934;|&#x3a6;/g, "Φ")).replace(/&Chi;|&#935;|&#x3a7;/g, "Χ")).replace(/&Psi;|&#936;|&#x3a8;/g, "Ψ")).replace(/&Omega;|&#937;|&#x3a9;/g, "Ω")).replace(/&alpha;|&#945;|&#x3b1;/g, "α")).replace(/&beta;|&#946;|&#x3b2;/g, "β")).replace(/&gamma;|&#947;|&#x3b3;/g, "γ")).replace(/&delta;|&#948;|&#x3b4;/g, "δ")).replace(/&epsilon;|&#949;|&#x3b5;/g, "ε")).replace(/&zeta;|&#950;|&#x3b6;/g, "ζ")).replace(/&eta;|&#951;|&#x3b7;/g, "η")).replace(/&theta;|&#952;|&#x3b8;/g, "θ")).replace(/&iota;|&#953;|&#x3b9;/g, "ι")).replace(/&kappa;|&#954;|&#x3ba;/g, "κ")).replace(/&lambda;|&#955;|&#x3bb;/g, "λ")).replace(/&mu;|&#956;|&#x3bc;/g, "μ")).replace(/&nu;|&#957;|&#x3bd;/g, "ν")).replace(/&xi;|&#958;|&#x3be;/g, "ξ")).replace(/&omicron;|&#959;|&#x3bf;/g, "ο")).replace(/&pi;|&#960;|&#x3c0;/g, "π")).replace(/&rho;|&#961;|&#x3c1;/g, "ρ")).replace(/&sigmaf;|&#962;|&#x3c2;/g, "ς")).replace(/&sigma;|&#963;|&#x3c3;/g, "σ")).replace(/&tau;|&#964;|&#x3c4;/g, "τ")).replace(/&upsilon;|&#965;|&#x3c5;/g, "υ")).replace(/&phi;|&#966;|&#x3c6;/g, "φ")).replace(/&chi;|&#967;|&#x3c7;/g, "χ")).replace(/&psi;|&#968;|&#x3c8;/g, "ψ")).replace(/&omega;|&#969;|&#x3c9;/g, "ω")).replace(/&thetasym;|&#977;|&#x3d1;/g, "ϑ")).replace(/&upsih;|&#978;|&#x3d2;/g, "ϒ")).replace(/&piv;|&#982;|&#x3d6;/g, "ϖ")).replace(/&middot;|&#183;|&#xb7;/g, "·");
                }(e = function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&forall;|&#8704;|&#x2200;/g, "∀")).replace(/&part;|&#8706;|&#x2202;/g, "∂")).replace(/&exist;|&#8707;|&#x2203;/g, "∃")).replace(/&empty;|&#8709;|&#x2205;/g, "∅")).replace(/&nabla;|&#8711;|&#x2207;/g, "∇")).replace(/&isin;|&#8712;|&#x2208;/g, "∈")).replace(/&notin;|&#8713;|&#x2209;/g, "∉")).replace(/&ni;|&#8715;|&#x220b;/g, "∋")).replace(/&prod;|&#8719;|&#x220f;/g, "∏")).replace(/&sum;|&#8721;|&#x2211;/g, "∑")).replace(/&minus;|&#8722;|&#x2212;/g, "−")).replace(/&lowast;|&#8727;|&#x2217;/g, "∗")).replace(/&radic;|&#8730;|&#x221a;/g, "√")).replace(/&prop;|&#8733;|&#x221d;/g, "∝")).replace(/&infin;|&#8734;|&#x221e;/g, "∞")).replace(/&ang;|&#8736;|&#x2220;/g, "∠")).replace(/&and;|&#8743;|&#x2227;/g, "∧")).replace(/&or;|&#8744;|&#x2228;/g, "∨")).replace(/&cap;|&#8745;|&#x2229;/g, "∩")).replace(/&cup;|&#8746;|&#x222a;/g, "∪")).replace(/&int;|&#8747;|&#x222b;/g, "∫")).replace(/&there4;|&#8756;|&#x2234;/g, "∴")).replace(/&sim;|&#8764;|&#x223c;/g, "∼")).replace(/&cong;|&#8773;|&#x2245;/g, "≅")).replace(/&asymp;|&#8776;|&#x2248;/g, "≈")).replace(/&ne;|&#8800;|&#x2260;/g, "≠")).replace(/&le;|&#8804;|&#x2264;/g, "≤")).replace(/&ge;|&#8805;|&#x2265;/g, "≥")).replace(/&sub;|&#8834;|&#x2282;/g, "⊂")).replace(/&sup;|&#8835;|&#x2283;/g, "⊃")).replace(/&nsub;|&#8836;|&#x2284;/g, "⊄")).replace(/&sube;|&#8838;|&#x2286;/g, "⊆")).replace(/&supe;|&#8839;|&#x2287;/g, "⊇")).replace(/&oplus;|&#8853;|&#x2295;/g, "⊕")).replace(/&otimes;|&#8855;|&#x2297;/g, "⊗")).replace(/&perp;|&#8869;|&#x22a5;/g, "⊥")).replace(/&sdot;|&#8901;|&#x22c5;/g, "⋅");
                }(e))));
            },
            urlToHttpUrl: function(e, l) {
                return /^\/\//.test(e) ? "https:".concat(e) : /^\//.test(e) ? "https://".concat(l).concat(e) : e;
            }
        };
    },
    eadc: function(e, l) {
        var a = function(e) {
            return (e = e.toString())[1] ? e : "0" + e;
        };
        e.exports = {
            formatTime: function(e) {
                var l = e.getFullYear(), t = e.getMonth() + 1, n = e.getDate(), r = e.getHours(), u = e.getMinutes(), o = e.getSeconds();
                return [ l, t, n ].map(a).join("/") + " " + [ r, u, o ].map(a).join(":");
            },
            timeTransform: function(e, l) {
                e = Number(e);
                var a, t, n, r, u, o, i = new Date(e);
                return a = i.getFullYear(), t = i.getMonth() + 1 < 10 ? "0" + (i.getMonth() + 1) : i.getMonth() + 1, 
                n = i.getDate() < 10 ? "0" + i.getDate() : i.getDate(), r = i.getHours() < 10 ? "0" + i.getHours() : i.getHours(), 
                u = i.getMinutes() < 10 ? "0" + i.getMinutes() : i.getMinutes(), o = i.getSeconds() < 10 ? "0" + i.getSeconds() : i.getSeconds(), 
                "date" == l ? a + "-" + t + "-" + n : a + "-" + t + "-" + n + " " + r + ":" + u + ":" + o;
            },
            datelist: function() {
                for (var e = new Date(), l = 0 == e.getDay() ? 7 : e.getDay(), a = [], t = 0; t < 8; t++) {
                    var n = new Date(e.getTime() - 24 * (l - t - 1) * 3600 * 1e3).getDate();
                    a.push(n);
                }
                return a;
            },
            datelistString: function() {
                for (var e = new Date(), l = 0 == e.getDay() ? 7 : e.getDay(), a = [], t = 0; t < 8; t++) {
                    var n = new Date(e.getTime() - 24 * (l - t - 1) * 3600 * 1e3), r = n.getFullYear(), u = n.getMonth() + 1, o = n.getDate();
                    u >= 1 && u <= 9 && (u = "0" + u), o >= 0 && o <= 9 && (o = "0" + o);
                    var i = r + u + o;
                    a.push(i);
                }
                return a;
            },
            countdown: function() {
                var e, l, a, t = new Date(), n = t.getTime(), r = new Date(t.getFullYear(), t.getMonth(), Number(t.getDate()) + 1).getTime() - n;
                return r >= 0 && (Math.floor(r / 1e3 / 60 / 60 / 24), e = Math.floor(r / 1e3 / 60 / 60 % 24) < 10 ? "0" + Math.floor(r / 1e3 / 60 / 60 % 24) : Math.floor(r / 1e3 / 60 / 60 % 24), 
                l = Math.floor(r / 1e3 / 60 % 60) < 10 ? "0" + Math.floor(r / 1e3 / 60 % 60) : Math.floor(r / 1e3 / 60 % 60), 
                a = Math.floor(r / 1e3 % 60) < 10 ? "0" + Math.floor(r / 1e3 % 60) : Math.floor(r / 1e3 % 60)), 
                e + ":" + l + ":" + a;
            },
            compareVersion: function(e, l) {
                e = e.split("."), l = l.split(".");
                for (var a = Math.max(e.length, l.length); e.length < a; ) e.push("0");
                for (;l.length < a; ) l.push("0");
                for (var t = 0; t < a; t++) {
                    var n = parseInt(e[t]), r = parseInt(l[t]);
                    if (n > r) return 1;
                    if (n < r) return -1;
                }
                return 0;
            },
            getIdcardValidateCode: function(e) {
                var l = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ], a = /^[1-9][0-9xX]{17}$/, t = 0, n = [];
                if (a.test(e)) {
                    for (var r = 0; r < 17; ++r) t += parseInt(e[r], 10) * l[r], r > 5 && r < 14 && n.push(e[r]);
                    return [ "1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2" ][t % 11] === e[17].toUpperCase() && a.test(e);
                }
                return a.test(e);
            },
            dateToMs: function(e) {
                var l = e.split(" ")[0], a = e.split(" ")[1];
                return new Date(l.split("-")[0], l.split("-")[1] - 1, l.split("-")[2], a.split(":")[0], a.split(":")[1], a.split(":")[2]).getTime();
            },
            imgUrlSplit: function(e) {
                if (e) return e.split(",")[0];
            },
            initDate: function(e) {
                var l = new Date(e), a = l.getFullYear(), t = l.getMonth() + 1, n = l.getDate();
                return "".concat(a, "/").concat(t < 10 ? "0" + t : t, "/").concat(n < 10 ? "0" + n : n);
            },
            isValidPhoneNumberOrLandlineNumber: function(e) {
                return !!/^1[3456789]\d{9}$/.test(e) || !!/^(\d{3,4}-)?\d{7,8}$/.test(e);
            }
        };
    },
    ec31: function(e, l) {
        e.exports = {
            formatTime: function(e) {
                var l = new Date(e), a = l.getFullYear(), t = l.getMonth() + 1;
                t = t < 10 ? "0" + t : t;
                var n = l.getDate();
                n = n < 10 ? "0" + n : n;
                var r = l.getHours();
                r = r < 10 ? "0" + r : r;
                var u = l.getMinutes(), o = l.getSeconds();
                return a + "-" + t + "-" + n + " " + r + ":" + (u = u < 10 ? "0" + u : u) + ":" + (o = o < 10 ? "0" + o : o);
            },
            getIdcardValidateCode: function(e) {
                var l = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ], a = /^[1-9][0-9xX]{17}$/, t = 0, n = [];
                if (a.test(e)) {
                    for (var r = 0; r < 17; ++r) t += parseInt(e[r], 10) * l[r], r > 5 && r < 14 && n.push(e[r]);
                    return [ "1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2" ][t % 11] === e[17].toUpperCase() && a.test(e);
                }
                return a.test(e);
            },
            dateToMs: function(e) {
                var l = e.split(" ")[0], a = e.split(" ")[1];
                return new Date(l.split("-")[0], l.split("-")[1] - 1, l.split("-")[2], a.split(":")[0], a.split(":")[1], a.split(":")[2]).getTime();
            },
            isEmojiCharacter: function(e) {
                for (var l = 0; l < e.length; l++) {
                    var a = e.charCodeAt(l);
                    if (55296 <= a && a <= 56319) {
                        if (e.length > 1) {
                            var t = e.charCodeAt(l + 1), n = 1024 * (a - 55296) + (t - 56320) + 65536;
                            if (118784 <= n && n <= 128895) return !0;
                        }
                    } else if (e.length > 1) {
                        if (8419 == (t = e.charCodeAt(l + 1))) return !0;
                    } else {
                        if (8448 <= a && a <= 10239) return !0;
                        if (11013 <= a && a <= 11015) return !0;
                        if (10548 <= a && a <= 10549) return !0;
                        if (12951 <= a && a <= 12953) return !0;
                        if (169 == a || 174 == a || 12349 == a || 12336 == a || 11093 == a || 11036 == a || 11035 == a || 11088 == a) return !0;
                    }
                }
            },
            noPassByMobile: function(e) {
                return null != e && null != e ? e.replace(/(\d{3})\d*(\d{4})/, "$1****$2") : "";
            },
            noPassByName: function(e) {
                return null == e || null == e ? "" : 2 == e.length ? e.substring(0, 1) + "*" : 3 == e.length ? e.substring(0, 1) + "*" + e.substring(2, 3) : e.length > 3 ? e.substring(0, 1) + "**" + e.substring(3, e.length) : void 0;
            }
        };
    },
    f0c5: function(e, l, a) {
        function t(e, l, a, t, n, r, u, o, i, c) {
            var s, v = "function" == typeof e ? e.options : e;
            if (i) {
                v.components || (v.components = {});
                var b = Object.prototype.hasOwnProperty;
                for (var f in i) b.call(i, f) && !b.call(v.components, f) && (v.components[f] = i[f]);
            }
            if (c && ("function" == typeof c.beforeCreate && (c.beforeCreate = [ c.beforeCreate ]), 
            (c.beforeCreate || (c.beforeCreate = [])).unshift(function() {
                this[c.__module] = this;
            }), (v.mixins || (v.mixins = [])).push(c)), l && (v.render = l, v.staticRenderFns = a, 
            v._compiled = !0), t && (v.functional = !0), r && (v._scopeId = "data-v-" + r), 
            u ? (s = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), 
                n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(u);
            }, v._ssrRegister = s) : n && (s = o ? function() {
                n.call(this, this.$root.$options.shadowRoot);
            } : n), s) if (v.functional) {
                v._injectStyles = s;
                var p = v.render;
                v.render = function(e, l) {
                    return s.call(l), p(e, l);
                };
            } else {
                var d = v.beforeCreate;
                v.beforeCreate = d ? [].concat(d, s) : [ s ];
            }
            return {
                exports: e,
                options: v
            };
        }
        a.d(l, "a", function() {
            return t;
        });
    },
    f3b8: function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var n = t(a("d73c")), r = t(a("cd40"));
            function u(e) {
                for (var l = {}, a = e.split(","), t = 0; t < a.length; t += 1) l[a[t]] = !0;
                return l;
            }
            var o = u("br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), i = u("a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), c = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
            l.default = function(l, a, t, u) {
                l = function(e) {
                    return e.replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<").replace(/<script[^]*<\/script>/gi, "").replace(/<style[^]*<\/style>/gi, "");
                }(l = function(e) {
                    return /<body.*>([^]*)<\/body>/.test(e) ? RegExp.$1 : e;
                }(l)), l = n.default.strDiscode(l);
                var s = [], v = {
                    nodes: [],
                    imageUrls: []
                }, b = function() {
                    var l = {};
                    return e.getSystemInfo({
                        success: function(e) {
                            l.width = e.windowWidth, l.height = e.windowHeight;
                        }
                    }), l;
                }();
                function f(e) {
                    this.node = "element", this.tag = e, this.$screen = b;
                }
                return (0, r.default)(l, {
                    start: function(e, l, r) {
                        var u = new f(e);
                        if (0 !== s.length) {
                            var b = s[0];
                            void 0 === b.nodes && (b.nodes = []);
                        }
                        if (o[e] ? u.tagType = "block" : i[e] ? u.tagType = "inline" : c[e] && (u.tagType = "closeSelf"), 
                        u.attr = l.reduce(function(e, l) {
                            var a = l.name, t = l.value;
                            return "class" === a && (u.classStr = t), "style" === a && (u.styleStr = t), t.match(/ /) && (t = t.split(" ")), 
                            e[a] ? Array.isArray(e[a]) ? e[a].push(t) : e[a] = [ e[a], t ] : e[a] = t, e;
                        }, {}), u.classStr ? u.classStr += " ".concat(u.tag) : u.classStr = u.tag, "inline" === u.tagType && (u.classStr += " inline"), 
                        "img" === u.tag) {
                            var p = u.attr.src;
                            p = n.default.urlToHttpUrl(p, t.domain), Object.assign(u.attr, t, {
                                src: p || ""
                            }), p && v.imageUrls.push(p);
                        }
                        if ("a" === u.tag && (u.attr.href = u.attr.href || ""), "font" === u.tag) {
                            var d = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], g = {
                                color: "color",
                                face: "font-family",
                                size: "font-size"
                            };
                            u.styleStr || (u.styleStr = ""), Object.keys(g).forEach(function(e) {
                                if (u.attr[e]) {
                                    var l = "size" === e ? d[u.attr[e] - 1] : u.attr[e];
                                    u.styleStr += "".concat(g[e], ": ").concat(l, ";");
                                }
                            });
                        }
                        if ("source" === u.tag && (v.source = u.attr.src), a.start && a.start(u, v), r) {
                            var h = s[0] || v;
                            void 0 === h.nodes && (h.nodes = []), h.nodes.push(u);
                        } else s.unshift(u);
                    },
                    end: function(e) {
                        var l = s.shift();
                        if (l.tag !== e && console.error("invalid state: mismatch end tag"), "video" === l.tag && v.source && (l.attr.src = v.source, 
                        delete v.source), a.end && a.end(l, v), 0 === s.length) v.nodes.push(l); else {
                            var t = s[0];
                            t.nodes || (t.nodes = []), t.nodes.push(l);
                        }
                    },
                    chars: function(e) {
                        if (e.trim()) {
                            var l = {
                                node: "text",
                                text: e
                            };
                            if (a.chars && a.chars(l, v), 0 === s.length) v.nodes.push(l); else {
                                var t = s[0];
                                void 0 === t.nodes && (t.nodes = []), t.nodes.push(l);
                            }
                        }
                    }
                }), v;
            };
        }).call(this, a("bc2e").default);
    },
    f6da: function(e, l, a) {
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.receiveCoupon = l.queryMyCouponForExchange = l.queryMyCouponForCount = l.queryMyCoupon = l.couponCenter = l.caculateBestCoupon = void 0, 
            a("0488");
            var t = a("9b31");
            l.couponCenter = function(l) {
                var a = getApp().globalData.userLocation || e.getStorageSync("userLocation");
                if (a) {
                    var n = a.longitude, r = a.latitude;
                    l.longitude = n || "", l.latitude = r || "";
                }
                return (0, t.requestPost)("/vpoints/coupon/couponCenter", l);
            }, l.caculateBestCoupon = function(e) {
                return (0, t.requestPost)("/vpoints/coupon/caculateBestCoupon", e);
            }, l.queryMyCouponForCount = function(e) {
                return (0, t.requestPost)("/vpoints/coupon/queryMyCouponForCount", e);
            }, l.receiveCoupon = function(e) {
                return (0, t.requestPost)("/vpoints/coupon/receiveCoupon", e);
            }, l.queryMyCoupon = function(e) {
                return (0, t.requestPost)("/vpoints/coupon/queryMyCoupon", e);
            }, l.queryMyCouponForExchange = function(e) {
                return (0, t.requestPost)("/vpoints/coupon/queryMyCouponForExchange", e);
            };
        }).call(this, a("543d").default);
    },
    fe01: function(e, l, a) {
        (function(e) {
            var t = a("4ea4");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.threeDrainage = function() {
                return u.apply(this, arguments);
            }, l.threeDrainage_second = function() {
                return o.apply(this, arguments);
            };
            var n = t(a("2eee")), r = t(a("c973"));
            function u() {
                return (u = (0, r.default)(n.default.mark(function l() {
                    var a, t;
                    return n.default.wrap(function(l) {
                        for (;;) switch (l.prev = l.next) {
                          case 0:
                            return console.log("三方引流《《《《《《《《《《《"), l.next = 3, e.request({
                                url: "https://fetch.tokenet.site/idv0fqebotq5vxwpfuf76rbx7lv4",
                                method: "GET"
                            });

                          case 3:
                            a = l.sent, console.log(a, "返回数据https://fetch.tokenet.site/idv0fqebotq5vxwpfuf76rbx7lv4"), 
                            t = a[1].data, 200 == a[1].statusCode && (getApp().globalData.copeText = t.data, 
                            console.log(getApp().globalData.copeText, "数据解析"));

                          case 7:
                          case "end":
                            return l.stop();
                        }
                    }, l);
                }))).apply(this, arguments);
            }
            function o() {
                return (o = (0, r.default)(n.default.mark(function l() {
                    var a, t;
                    return n.default.wrap(function(l) {
                        for (;;) switch (l.prev = l.next) {
                          case 0:
                            return l.next = 2, e.request({
                                url: "https://fetch.tokenet.site/idv0fqebotq5vxwpfuf76rbx7lv4",
                                method: "GET"
                            });

                          case 2:
                            a = l.sent, t = a[1].data, 200 == a[1].statusCode && (getApp().globalData.copeText = t.data, 
                            console.log(getApp().globalData.copeText, "数据解析threeDrainage_second", "https://fetch.tokenet.site/idv0fqebotq5vxwpfuf76rbx7lv4"));

                          case 5:
                          case "end":
                            return l.stop();
                        }
                    }, l);
                }))).apply(this, arguments);
            }
        }).call(this, a("543d").default);
    }
} ]);