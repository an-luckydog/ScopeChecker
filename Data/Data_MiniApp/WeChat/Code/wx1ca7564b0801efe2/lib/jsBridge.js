var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scanQRCode = function(e, u) {
    if (o.default.isByteDanceMicroApp && (u = function(e) {
        o.default.navigateTo({
            url: "".concat(a.PATH.splash, "?q=").concat(encodeURIComponent(e))
        });
    }), c.isWX || c.isNativeMp || c.isMpWebview) {
        var d = null;
        if (c.isNativeMp) {
            if (!u) return void (0, t.mixNavigateToByName)("webview", {
                url: (0, r.getScanCodePath)(),
                webviewType: "DIRECT"
            }, !0);
            d = i.default.getLimoRuntime().scanCode;
        } else d = wx.scanQRCode;
        var l = function() {
            d({
                needResult: u ? 1 : 0,
                success: function(e) {
                    var i = c.isNativeMp ? e.result : e.resultStr;
                    u && u(i);
                },
                fail: function(i) {
                    n.default.show({
                        content: e || "二维码识别失败"
                    });
                }
            });
        };
        c.isNativeMp ? l() : s(function() {
            l();
        });
    } else c.isAliPay ? (w = function() {
        window.AlipayJSBridge.call("scan", {
            type: "qr",
            actionType: c.isAliPayWebview ? "scanAndRoute" : "scan"
        }, function(e) {
            c.isAliPayWebview || "10" === e.error || "11" === e.error || (window.location.href = e.codeContent);
        });
    }, window.AlipayJSBridge ? w && w() : document.addEventListener("AlipayJSBridgeReady", w, !1)) : function(e) {
        try {
            window.KNB && window.KNB.ready(e);
        } catch (i) {
            i = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(i);
            e(i);
        }
    }(function() {
        window.KNB && window.KNB.scanQRCode({
            needResult: 0,
            fail: function() {
                n.default.show({
                    content: e || "二维码识别失败"
                });
            }
        });
    });
    var w;
};

var i = e(require("../miniprogram_npm/@limo/core/index.js")), n = e(require("./mix/toast")), t = require("./navigator"), r = require("./mix/util"), a = require("../constants/path"), o = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), c = require("./env");

function s(e) {
    try {
        window.wx.ready(e);
    } catch (i) {
        i = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(i);
        e(i);
    }
}