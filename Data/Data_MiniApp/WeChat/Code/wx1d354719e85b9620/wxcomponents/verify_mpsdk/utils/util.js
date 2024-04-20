var r = require("../../../@babel/runtime/helpers/objectSpread2"), e = require("../../../@babel/runtime/helpers/regeneratorRuntime"), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), t = (require("./regenerator-runtime/runtime"), 
require("./log"));

var n = function(r) {
    if (!r || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(r)) return !1;
    if (!{
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    }[r.substr(0, 2)]) return !1;
    if (18 === r.length) {
        r = r.split("");
        for (var e = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ], o = 0, t = 0; t < 17; t++) o += r[t] * e[t];
        var n = [ 1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2 ][o % 11];
        if ("x" === r[17] || "X" === r[17]) return n === r[17].toUpperCase();
        if (n !== parseInt(r[17])) return !1;
    }
    return !0;
}, s = function() {
    var r = o(e().mark(function r(o, t, n, i) {
        var c, l;
        return e().wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.prev = 0, c = {
                    url: "".concat(o, "/api/liveness/getWxUserIdKey?BizToken=").concat(t)
                }, wx.showLoading({
                    title: "加载中...",
                    mask: !0
                }), r.next = 5, a(c);

              case 5:
                l = r.sent, wx.hideLoading(), i(l), r.next = 12;
                break;

              case 9:
                r.prev = 9, r.t0 = r.catch(0), console.log(r.t0), wx.hideLoading(), 15 === r.t0.ErrorCode || 14 === r.t0.ErrorCode ? (15 === r.t0.ErrorCode ? r.t0.ErrorMsg = "当前BizToken已过期，请重试" : 14 === r.t0.ErrorCode && (r.t0.ErrorMsg = "当前BizToken已验证完成"), 
                n({
                    BizToken: t,
                    ErrorCode: r.t0.ErrorCode,
                    ErrorMsg: r.t0.ErrorMsg
                })) : -1 === r.t0.ErrorCode ? wx.showModal({
                    title: "提示",
                    content: r.t0.ErrorMsg,
                    showCancel: !1
                }) : wx.showModal({
                    title: "提示",
                    content: r.t0.ErrorMsg,
                    confirmText: "重试",
                    confirmColor: "#2d72f1",
                    success: function(r) {
                        r.confirm && s(o, t, n, i);
                    }
                });

              case 12:
              case "end":
                return r.stop();
            }
        }, r, null, [ [ 0, 9 ] ]);
    }));
    return function(e, o, t, n) {
        return r.apply(this, arguments);
    };
}(), a = function(r) {
    return console.log("请求 ".concat(r.url)), new Promise(function(e, o) {
        try {
            wx.request({
                url: r.url,
                method: "POST",
                data: {},
                success: function(r) {
                    console.log("request success:", r.data), 0 === r.data.ErrorCode ? e(r.data.Data.UserIdKey) : o(r.data);
                },
                fail: function(r) {
                    console.log("requestPromise error:", r), r.errMsg.indexOf("request:fail Unable to resolve host") >= 0 || r.errMsg.indexOf("request:fail 似乎已断开与互联网的连接") >= 0 ? o({
                        ErrorCode: 101,
                        ErrorMsg: "网络异常，请稍后重试"
                    }) : "request:fail url not in domain list" === r.errMsg ? o({
                        ErrorCode: -1,
                        ErrorMsg: "接口还未添加到服务器域名，请点击右上角三个点，打开调试模式再试"
                    }) : o({
                        ErrorCode: 101,
                        ErrorMsg: r.errMsg
                    });
                }
            });
        } catch (r) {
            r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
            console.log("捕获error");
        }
    });
}, i = function() {
    var r = o(e().mark(function r(o, t, n, s, a, l) {
        var u;
        return e().wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.prev = 0, wx.showLoading({
                    title: "加载中...",
                    mask: !0
                }), r.next = 4, c(o, t, n, s, a);

              case 4:
                u = r.sent, wx.hideLoading(), l(u), r.next = 11;
                break;

              case 8:
                r.prev = 8, r.t0 = r.catch(0), console.log(r.t0), wx.hideLoading(), -1 === r.t0.ErrorCode ? wx.showModal({
                    title: "提示",
                    content: r.t0.ErrorMsg,
                    showCancel: !1
                }) : wx.showModal({
                    title: "提示",
                    content: r.t0,
                    confirmText: "重试",
                    confirmColor: "#2d72f1",
                    showCancel: !1,
                    success: function(r) {
                        r.confirm && i(o, t, n, s, a, l);
                    }
                });

              case 11:
              case "end":
                return r.stop();
            }
        }, r, null, [ [ 0, 8 ] ]);
    }));
    return function(e, o, t, n, s, a) {
        return r.apply(this, arguments);
    };
}(), c = function(r, e, o, t, n) {
    return console.log("请求 ".concat(r, "/api/liveness/getWxResult?BizToken=").concat(e)), 
    new Promise(function(s, a) {
        wx.request({
            url: "".concat(r, "/api/liveness/getWxResult?BizToken=").concat(e),
            method: "POST",
            data: {
                VerifyResult: o || "",
                ErrCode: t.toString(),
                ErrMsg: n
            },
            success: function(r) {
                console.log("request success:", r.data), r.data.ErrorCode, s(r.data);
            },
            fail: function(r) {
                console.log("requestPromise error:", r), r.errMsg.indexOf("request:fail Unable to resolve host") >= 0 || r.errMsg.indexOf("request:fail 似乎已断开与互联网的连接") >= 0 ? a({
                    ErrorCode: 101,
                    ErrorMsg: "网络异常，请稍后重试"
                }) : "request:fail url not in domain list" === r.errMsg ? a({
                    ErrorCode: -1,
                    ErrorMsg: "接口还未添加到服务器域名，请点击右上角三个点，打开调试模式再试"
                }) : a({
                    ErrorCode: 101,
                    ErrorMsg: r.errMsg
                });
            }
        });
    });
}, l = function() {
    return new Promise(function(r, e) {
        try {
            wx.getNetworkType({
                success: function(e) {
                    r(e);
                },
                fail: function(r) {
                    console.log("requestPromise error:", r), e({
                        ErrorCode: 101,
                        ErrorMsg: r.errMsg
                    });
                }
            });
        } catch (r) {
            r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
            console.log("捕获error");
        }
    });
}, u = function() {
    var n = o(e().mark(function o(n, s, a) {
        var i;
        return e().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (wx.verify_TOKEN) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return");

              case 2:
                return i = {
                    tag: n,
                    error: r({
                        version: t.version,
                        signalStrength: null
                    }, s),
                    source: "miniprogram"
                }, e.prev = 3, i.system = wx.getSystemInfoSync(), e.next = 7, l();

              case 7:
                i.error.signalStrength = e.sent, e.next = 12;
                break;

              case 10:
                e.prev = 10, e.t0 = e.catch(3);

              case 12:
                return e.abrupt("return", (a && (i.extra = a), console.log("上报错误：", i), new Promise(function(r, e) {
                    wx.request({
                        url: "".concat(wx.verifyBaseUrl, "/api/report/reportError"),
                        method: "POST",
                        data: {
                            token: wx.verify_TOKEN,
                            errorData: JSON.stringify(i)
                        },
                        success: function(e) {
                            r(e);
                        },
                        fail: function(r) {
                            e(r);
                        }
                    });
                })));

              case 13:
              case "end":
                return e.stop();
            }
        }, o, null, [ [ 3, 10 ] ]);
    }));
    return function(r, e, o) {
        return n.apply(this, arguments);
    };
}(), d = function(r, e, o) {
    return console.log("reportMonitor", r, e, o), new Promise(function(n, s) {
        wx.request({
            url: "".concat(wx.verifyBaseUrl, "/api/report/reportMonitor"),
            method: "POST",
            data: {
                token: r,
                pathName: e,
                platForm: 2,
                errorCode: String(o),
                version: t.version
            },
            success: function(r) {
                n(r);
            },
            fail: function(r) {
                s(r);
            }
        });
    });
};

module.exports = {
    requestPromise: function r(e) {
        var o = e.url, n = e.method, s = void 0 === n ? "POST" : n, a = e.data, i = e.header, c = void 0 === i ? {
            "Content-Type": "application/json"
        } : i, l = e.reTry;
        return console.log("requestPromise start:", wx.verify_TOKEN, o, a), new Promise(function(n, i) {
            wx.request({
                url: "".concat(wx.verifyBaseUrl) + o,
                method: s,
                data: a,
                header: c,
                success: function(r) {
                    console.log("requestPromise success:", r), n(r);
                },
                fail: function(s) {
                    console.log("requestPromise error:", s), l && l.tryCount && l.tryCount > 0 ? (l.tryCount--, 
                    wx.verifyBaseUrl = "https://faceid.qcloud.com", setTimeout(function() {
                        n(r(e));
                    }, l.retryDelay || 0)) : (wx.verifyBaseUrl = "https://faceid.qq.com", i(s)), u(t.requestFail, {
                        url: "".concat(wx.verifyBaseUrl) + o,
                        err: s
                    });
                }
            });
        });
    },
    validate: function(r, e) {
        switch (e) {
          case "signature":
            return /^\S{74}={2}$/.test(r);

          case "appid":
            return "string" == typeof r && /^\d{4}$/.test(r);

          case "uid":
            return r;

          case "sms_phone":
            return /^1\d{10}$/.test(r);

          case "sms_verifyCode":
            return /^\d{4}$/.test(r);

          case "idcard":
            return n(r);

          case "idname":
            return r && !r.match(/[A-z0-9]/g);

          case "idaddress":
            return !!r;

          case "end_path":
            return /^\//.test(r);

          case "token":
            return /^[a-zA-Z0-9-]{36}$/.test(r);
        }
    },
    compareVersion: function(r, e) {
        r = r.split("."), e = e.split(".");
        for (var o = Math.max(r.length, e.length); r.length < o; ) r.push("0");
        for (;e.length < o; ) e.push("0");
        for (var t = 0; t < o; t++) {
            var n = parseInt(r[t]), s = parseInt(e[t]);
            if (n > s) return 1;
            if (n < s) return -1;
        }
        return 0;
    },
    showModal: function(r, e) {
        wx.showModal({
            title: r,
            content: e.replace(/(^\s*)|(\s*$)/g, ""),
            showCancel: !1,
            confirmText: "我知道了",
            confirmColor: "#2d72f1",
            success: function(r) {
                r.confirm || r.cancel;
            }
        });
    },
    request: function r(e, o) {
        var n = e.url, s = e.method, a = void 0 === s ? "POST" : s, i = e.data, c = e.reTry, l = e.header, d = void 0 === l ? {
            "Content-Type": "application/json"
        } : l;
        console.log("requestPromise start:", n, i);
        try {
            wx.request({
                url: "".concat(wx.verifyBaseUrl) + n,
                method: a,
                data: i,
                header: d,
                success: function(r) {
                    console.log("request success:", r), 200 === r.statusCode && r.data ? 0 === r.data.ErrorCode || 0 === r.data.code ? o({
                        ErrorCode: 0,
                        Data: r.data.Data || r.data.data
                    }) : o({
                        ErrorCode: r.data.ErrorCode,
                        ErrorMsg: r.data.ErrorMsg,
                        Data: r.data.Data || r.data.data
                    }) : o({
                        ErrorCode: -107,
                        ErrorMsg: "request请求异常，请稍后重试"
                    });
                },
                fail: function(s) {
                    console.log("request error:", s), c && c.tryCount && c.tryCount > 0 ? (c.tryCount--, 
                    wx.verifyBaseUrl = "https://faceid.qcloud.com", setTimeout(function() {
                        r(e, o);
                    }, c.retryDelay || 0)) : s.errMsg.indexOf("request:fail Unable to resolve host") >= 0 || s.errMsg.indexOf("request:fail 似乎已断开与互联网的连接") >= 0 ? o({
                        ErrorCode: 101,
                        ErrorMsg: "网络异常，请稍后重试"
                    }) : o({
                        ErrorCode: -107,
                        ErrorMsg: "request请求异常，请稍后重试"
                    }), u(t.requestFail, {
                        url: "".concat(wx.verifyBaseUrl) + n,
                        err: s
                    });
                }
            });
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log("request error:", e), o({
                ErrorCode: -107,
                ErrorMsg: "request请求异常，请稍后重试"
            }), u(t.requestCatch, {
                url: "".concat(wx.verifyBaseUrl) + n,
                err: e
            });
        }
    },
    uploadFile: function(r, e) {
        var o = this;
        console.log(r), wx.uploadFile({
            url: r.url,
            filePath: r.filePath,
            name: "file",
            formData: r.data,
            success: function(r) {
                if (console.log("uploadFile| ", r), 200 === r.statusCode) {
                    console.log(r);
                    var t = JSON.parse(r.data);
                    console.log("resTemp"), console.log(t), 0 === t.ErrorCode ? (console.log(o.data), 
                    e({
                        ErrorCode: 0,
                        Data: t
                    })) : e({
                        ErrorCode: t.ErrorCode,
                        ErrorMsg: "上传视频失败，" + t.ErrorMsg
                    });
                } else e({
                    ErrorCode: 101,
                    ErrorMsg: "上传视频失败 " + r.statusCode
                });
            },
            fail: function(r) {
                console.log("upload img fail", r), e({
                    ErrorCode: 101,
                    ErrorMsg: "上传视频失败, " + r.errMsg
                });
            }
        }).onProgressUpdate(function(r) {
            o.setData({
                "livingbody.uploadProcess": r.progress - 10 < 0 ? 0 : r.progress - 10
            }), console.log("progress", r.progress), console.log("already upload data", r.totalBytesSent), 
            console.log("all upload data", r.totalBytesExpectedToSend);
        });
    },
    startNativeVerify: function(r, e, o, t, n, a) {
        var c = r ? "startFacialRecognitionVerifyAndUploadVideo" : "startFacialRecognitionVerify";
        s(o, t, n, function(n) {
            console.log("获取userIdKey成功:", n);
            var s = wx.startFacialRecognitionVerify;
            r && (s = wx.startFacialRecognitionVerifyAndUploadVideo), s({
                userIdKey: n,
                checkAliveType: e,
                success: function(r) {
                    i(o, t, r.verifyResult, r.errCode, r.errMsg, function(r) {
                        console.log(r), a(r);
                    }), d(t, c, 0);
                },
                fail: function(r) {
                    if (console.log(r), u(c, r), 90100 === r.errCode) return !1;
                    r.errCode || 0 === r.errCode ? i(o, t, r.verifyResult, r.errCode, r.errMsg, function(r) {
                        d(t, c, r.ErrorCode || -1), a(r);
                    }) : wx.showModal({
                        title: "提示",
                        content: r.errMsg,
                        showCancel: !1
                    });
                }
            });
        });
    },
    reportError: u,
    reportMonitor: d,
    checkIsSupportFacialRecognition: function(r, e, o) {
        wx.checkIsSupportFacialRecognition({
            checkAliveType: e,
            success: function() {
                o && o();
            },
            fail: function(r) {
                wx.showModal({
                    title: "提示",
                    content: r.errMsg || "当前设备不支持人脸核身操作，请更换设备后重试",
                    showCancel: !1
                }), r.errMsg && -1 === r.errMsg.indexOf("开发者工具") && u("checkIsSupportFacialRecognition", r, {
                    checkAliveType: e
                });
            }
        });
    },
    getNetWorkData: l
};