Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sign = exports.context = exports.channel = exports.Container = void 0;

var e, t = require("../../../../b/helpers/typeof"), n = "undefined", o = "", s = "wx", r = "wx";

function i(e) {
    return "function" == typeof e;
}

exports.sign = r, exports.channel = s, exports.Container = o, exports.context = e;

try {
    ("undefined" == typeof wx ? "undefined" : t(wx)) != n && wx && i(wx.getSystemInfo) && (exports.context = e = wx, 
    exports.Container = o = "miniProgram", ("undefined" == typeof mmp ? "undefined" : t(mmp)) != n && (exports.Container = o = "", 
    exports.sign = r = "mmp"));
} catch (e) {}

try {
    ("undefined" == typeof swan ? "undefined" : t(swan)) != n && swan && i(swan.getSystemInfo) && (exports.context = e = swan, 
    exports.Container = o = "BaiduContainer", exports.channel = s = "bd", exports.sign = r = "swan");
} catch (e) {}

try {
    ("undefined" == typeof tt ? "undefined" : t(tt)) != n && tt && i(tt.getSystemInfo) && (exports.context = e = tt, 
    exports.Container = o = "ToutiaoContainer", exports.channel = s = "tt", exports.sign = r = "tt");
} catch (e) {}

try {
    ("undefined" == typeof my ? "undefined" : t(my)) != n && my && i(my.getSystemInfo) && (exports.context = e = my, 
    exports.sign = r = "my");
} catch (e) {}

try {
    ("undefined" == typeof ks ? "undefined" : t(ks)) != n && ks && i(ks.getSystemInfo) && (exports.context = e = ks, 
    exports.Container = o = "KuaishouContainer", exports.sign = r = "ks");
} catch (e) {}

try {
    ("undefined" == typeof dd ? "undefined" : t(dd)) != n && dd && i(dd.getSystemInfo) && (exports.context = e = dd, 
    exports.Container = o = "DingDingContainer", exports.sign = r = "dd");
} catch (e) {}

try {
    ("undefined" == typeof qq ? "undefined" : t(qq)) != n && qq && i(qq.getSystemInfo) && (exports.context = e = qq, 
    exports.Container = o = "QQContainer", exports.sign = r = "qq");
} catch (e) {}