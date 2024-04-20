var e = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), r = require("../@babel/runtime/helpers/slicedToArray"), n = require("../@babel/runtime/helpers/createForOfIteratorHelper"), u = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

function i(e) {
    var t, u = Object.create(null), i = n(e);
    try {
        for (i.s(); !(t = i.n()).done; ) {
            var o = r(t.value, 2), a = o[0], s = o[1];
            u[a] = s;
        }
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        i.e(e);
    } finally {
        i.f();
    }
    return u;
}

function o(e) {
    for (var t = new Map(), r = 0, n = Object.keys(e); r < n.length; r++) {
        var u = n[r];
        t.set(u, e[u]);
    }
    return t;
}

var a = function() {
    function r() {
        e(this, r);
    }
    return t(r, null, [ {
        key: "imageZoomHeightUtil",
        value: function(e, t, r) {
            var n = {};
            return r ? (n.imageWidth = r, n.imageHeight = r * t / e) : wx.getSystemInfo({
                success: function(u) {
                    r = u.windowWidth, n.imageWidth = r, n.imageHeight = r * t / e;
                }
            }), n;
        }
    }, {
        key: "imageZoomWidthUtil",
        value: function(e, t, r) {
            var n = {};
            return r ? (n.imageWidth = r * e / t, n.imageHeight = r) : wx.getSystemInfo({
                success: function(u) {
                    r = u.windowHeight, n.imageWidth = r * e / t, n.imageHeight = r;
                }
            }), n;
        }
    } ]), r;
}();

module.exports = {
    formatTime: function(e) {
        var t = e.getFullYear(), r = e.getMonth() + 1, n = e.getDate(), i = e.getHours(), o = e.getMinutes(), a = e.getSeconds();
        return [ t, r, n ].map(u).join("/") + " " + [ i, o, a ].map(u).join(":");
    },
    formatDate: function(e) {
        var t = e ? e.split(":") : "00:00";
        if (3 == t.length) {
            var r = t[0], n = t[1], u = t[2];
            return Number(3600 * r) + Number(60 * n) + Number(u);
        }
        if (2 == t.length) {
            n = t[0], u = t[1];
            return Number(60 * n) + Number(u);
        }
        u = t[0];
        return Number(u);
    },
    starsArray: function(e) {
        for (var t = [], r = 0; r < 5; r++) r < e ? t.push(1) : t.push(0);
        return t;
    },
    format: function(e, t) {
        var r = {
            M: (e = new Date(e)).getMonth() + 1,
            d: e.getDate(),
            h: e.getHours(),
            m: e.getMinutes(),
            s: e.getSeconds(),
            q: Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        return t = t.replace(/([yMdhmsqS])+/g, function(t, n) {
            var u = r[n];
            return void 0 !== u ? (t.length > 1 && (u = (u = "0" + u).substr(u.length - 2)), 
            u) : "y" === n ? (e.getFullYear() + "").substr(4 - t.length) : t;
        });
    },
    formatFloat: function(e) {
        var t = Math.pow(10, 2);
        return (parseInt(e * t, 10) / t).toFixed(1);
    },
    stringToJson: function(e) {
        return JSON.parse(e);
    },
    jsonToString: function(e) {
        return JSON.stringify(e);
    },
    mapToJson: function(e) {
        return JSON.stringify(i(e));
    },
    jsonToMap: function(e) {
        return o(JSON.parse(e));
    },
    strMapToObj: i,
    objToStrMap: o,
    timeConver: function(e) {
        if (e && "number" == typeof e) {
            var t = new Date(e), r = t.getMonth() + 1, n = t.getDate();
            return r < 10 && (r = "0" + r), n < 10 && (n = "0" + n), t.getFullYear() + "." + r + "." + n;
        }
        return !1;
    },
    duiaURIdecode: function(e) {
        var t = e;
        return null != t && "" != t && (t = decodeURIComponent(t)), t;
    },
    getUrlParam: function(e, t) {
        for (var r, n, u = e.indexOf("?"), i = (e = e.substr(u + 1)).split("&"), o = {}, a = 0; a < i.length; a++) (u = i[a].indexOf("=")) > 0 && (r = i[a].substring(0, u), 
        n = i[a].substr(u + 1), o[r] = n);
        return null != o[t] && "" != o[t] ? o[t] : "";
    },
    Util: a,
    formatNickname: function(e) {
        return e.length > 2 ? e.substr(0, 1) + "**" + e.substr(e.length - 1, e.length) : e.substr(0, 1) + "*";
    },
    throttle: function(e, t) {
        var r;
        return function() {
            var n = this, u = arguments;
            r || (r = setTimeout(function() {
                r = null, e.apply(n, u);
            }, t));
        };
    }
};