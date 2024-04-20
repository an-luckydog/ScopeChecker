var e = require("../../@babel/runtime/helpers/regeneratorRuntime"), o = require("../../@babel/runtime/helpers/asyncToGenerator"), t = (require("./utils/regenerator-runtime/runtime"), 
require("./utils/util")), r = require("./utils/log"), i = require("./utils/extend.js").extend, n = function() {
    var i = o(e().mark(function o(i, n) {
        var a, s;
        return e().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, a = {
                    method: "POST",
                    url: "/api/auth/getConfig?BizToken=".concat(i),
                    reTry: {
                        tryCount: 3
                    }
                }, e.next = 4, t.requestPromise(a);

              case 4:
                200 === (s = e.sent).statusCode && s.data.Data && 0 === s.data.ErrorCode ? n({
                    ErrorCode: 0,
                    Data: s.data.Data
                }) : (s.data.ErrorCode ? n({
                    ErrorCode: s.data.ErrorCode,
                    ErrorMsg: "获取配置失败,".concat(s.data.ErrorMsg)
                }) : n({
                    ErrorCode: -104,
                    ErrorMsg: "调用失败，获取配置异常！"
                }), t.reportError(r.getCmsConfigErr, s, {
                    urL: wx.verifyBaseUrl
                })), e.next = 11;
                break;

              case 8:
                e.prev = 8, e.t0 = e.catch(0), console.log("genConfig catch error", e.t0), e.t0.errMsg.indexOf("request:fail Unable to resolve host") >= 0 || e.t0.errMsg.indexOf("request:fail 似乎已断开与互联网的连接") >= 0 ? n({
                    ErrorCode: 101,
                    ErrorMsg: "网络异常，请稍后重试"
                }) : "request:fail url not in domain list" === e.t0.errMsg ? n({
                    ErrorCode: -104,
                    ErrorMsg: "接口还未添加到服务器域名，请点击右上角三个点，打开调试模式再试"
                }) : n({
                    ErrorCode: -104,
                    ErrorMsg: "网络异常，请稍后重试"
                }), t.reportError(r.getCmsConfigCatch, e.t0, {
                    urL: wx.verifyBaseUrl
                });

              case 11:
              case "end":
                return e.stop();
            }
        }, o, null, [ [ 0, 8 ] ]);
    }));
    return function(e, o) {
        return i.apply(this, arguments);
    };
}(), a = function(e, o) {
    var t = o.Common.Flow, r = !1, i = !1, n = !1, a = !1, s = 0, l = t.indexOf("LiveFour1V1") >= 0 || t.indexOf("LiveAction1V1") >= 0 || t.indexOf("LiveSilence1V1") >= 0;
    -1 === t.indexOf("Sms") && (r = !0), -1 === t.indexOf("Ocr") && (i = !0), l && (s = t.indexOf("LiveFour1V1") >= 0 ? 0 : t.indexOf("LiveAction1V1") >= 0 ? 1 : 2), 
    l || -1 !== t.indexOf("Sms") || (n = !0), l || -1 !== t.indexOf("Ocr") || (a = !0);
    var c = {
        Common: o.Common,
        protocol: {
            title: o.Index.ProtocolTitle,
            content: o.Index.TencentProtocol,
            clientContent: o.Index.ClientProtocol
        },
        page: {
            index: {
                clientName: o.Index.ProjectName,
                businessName: o.Index.BusinessName,
                certificationCenter: o.Index.CooperationName,
                nextBtnName: o.Index.NextBtn,
                isHideTipsLogo: !o.Common.IsShowLogo,
                isHideTipsAbout: o.Common.IsHideAbout,
                protocolTitle: o.Index.ProtocolEntrance,
                authorizedProtocol: o.Index.AuthorizedProtocol
            },
            ocr: {
                backend: o.Ocr.Backend,
                sourceType: o.Ocr.SourceType,
                isAddress: o.Ocr.IsAddress,
                isManualInput: o.Ocr.IsManualInput,
                isHideTakePhoto: o.Ocr.IsHideManualInputTakePhotoBtn,
                isCheckIDInfo: o.Ocr.IsCheckIdInfo,
                allowModifyType: o.Ocr.AllowModifyType
            },
            livingbody: {
                silentRecordTime: o.LiveFour1V1.MaxDuration
            },
            success: {
                successTitle: o.Success.SubTipsName,
                successTips: o.Success.SuccessTips,
                isAutoSkip: o.Success.AutoSkip
            },
            sms: {},
            failpage: {
                isShowExitBtn: o.Fail.IsShowQuitBtn,
                exitBtnTtile: o.Fail.ExitBtnText,
                RetryBtnText: o.Fail.RetryBtnText
            }
        },
        runEnv: "release",
        navTitle: {
            smsTitle: o.Common.NavTitle.SmsTitle,
            ocrTitle: o.Common.NavTitle.OcrTitle,
            livingbodyTitle: o.Common.NavTitle.LivingbodyTitle,
            resultTitle: o.Common.NavTitle.ResultTitle
        },
        justForJumpVer: {
            title: o.Common.Title
        },
        about: {
            title: "关于腾讯云慧眼",
            content: "腾讯云慧眼由腾讯AI Lab、腾讯优图、腾讯数据平台部提供技术支持。"
        },
        IsHideIndexAlways: o.Common.IsHideIndexAlways,
        isHideSmsPage: r,
        isHideOcrPage: i,
        livingbodyType: s,
        isJustOcr: n,
        isJustSms: a,
        failInfo: o.Fail.CustomFailInfo
    }, d = {
        isHideSmsPage: c.isHideSmsPage,
        isHideOcrPage: c.isHideOcrPage,
        isJustSms: c.isJustSms,
        isJustOcr: c.isJustOcr,
        navTitle: c.navTitle
    };
    if (c.skipConfig = d, 0 !== c.livingbodyType && 1 !== c.livingbodyType) {
        var u = 4, f = c.page.livingbody.silentRecordTime;
        f && "number" == typeof f && f > 4 && (u = f), c.page.livingbody.silentRecordTime = u;
    }
    var x = c.page.ocr.allowModifyType.split("");
    return c.page.ocr.isIdnameAllowEdit = "0" === x[0], c.page.ocr.isIdnumberAllowEdit = "0" === x[1], 
    c.page.ocr.isIdaddressAllowEdit = "0" === x[2], console.log(c.page.ocr), c;
};

module.exports = {
    init: function(e) {
        wx.onNetworkStatusChange(function(e) {
            "none" !== e.networkType && "2g" !== e.networkType || wx.showToast({
                title: "网络异常",
                icon: "none"
            });
        }), wx.onMemoryWarning(function() {
            t.reportError(r.memoryWarn);
        }), wx.verifyBaseUrl || (wx.verifyBaseUrl = "https://faceid.qq.com"), wx.startVerify = function(e) {
            if (console.log("startVerify start, send data", e), e.data && e.fail && e.success) {
                if (e.data.endPath) {
                    if (!t.validate(e.data.endPath, "end_path")) return o = {
                        ErrorCode: -100,
                        ErrorMsg: "调用SDK失败，endPath格式错误！"
                    }, void wx.showModal({
                        title: "提示",
                        content: o.ErrorMsg,
                        showCancel: !1
                    });
                    e.fail = function(o) {
                        if (-999 !== o.error_code) {
                            var t;
                            t = e.data.endPath.indexOf("?") >= 0 ? e.data.endPath + "&data=" + encodeURIComponent(JSON.stringify(o)) : e.data.endPath + "?data=" + encodeURIComponent(JSON.stringify(o)), 
                            console.log(t), wx.navigateTo({
                                url: t,
                                fail: function(e) {
                                    console.log(e), wx.showModal({
                                        title: "提示",
                                        content: e.errMsg,
                                        showCancel: !1
                                    });
                                }
                            });
                        } else wx.navigateBack();
                    }, e.success = function(o) {
                        var t;
                        t = e.data.endPath.indexOf("?") >= 0 ? e.data.endPath + "&data=" + JSON.stringify(o) : e.data.endPath + "?data=" + JSON.stringify(o), 
                        console.log(t), wx.redirectTo({
                            url: t,
                            fail: function(e) {
                                console.log(e), wx.showModal({
                                    title: "提示",
                                    content: e.errMsg,
                                    showCancel: !1
                                });
                            }
                        });
                    };
                }
                wx.verifySuccessFunc = function(o) {
                    e.success(o), wx.offMemoryWarning();
                }, wx.verifyFailureFunc = function(o) {
                    e.fail(o), wx.offMemoryWarning();
                }, wx.verify_TOKEN = e.data.token, wx.verify_BizData = e.data, t.validate(e.data.token, "token") ? (console.log("data is ok", e.data), 
                wx.showLoading({
                    title: "加载中...",
                    mask: !0
                }), n(e.data.token, function(o) {
                    if (console.log(o), wx.hideLoading(), 0 === o.ErrorCode) {
                        var r = {
                            Common: {
                                Title: "腾讯云慧眼",
                                IsShowLogo: !1,
                                Flow: [ "LiveSilence1V1" ],
                                RedirectUrl: "/clearCookie",
                                NavTitle: {
                                    SmsTitle: "短信验证",
                                    OcrTitle: "上传身份证",
                                    LivingbodyTitle: "录制视频",
                                    ResultTitle: "验证结果"
                                },
                                IsWxNative: !1,
                                IsHideIndexWhenNative: !1,
                                IsHideIndexAlways: !1,
                                WxCheckAliveType: 2,
                                IsWxNativeMod: 0,
                                WxVerifyTypeIsVideo: !1
                            },
                            JustForMp: {
                                iOSVerLimit: "6.6.7",
                                androidVerLimit: "6.7.2"
                            },
                            Index: {
                                ProtocolTitle: "实名核身用户须知",
                                TencentProtocol: '<p>本服务由腾讯实名核身技术方案"腾讯慧眼"提供技术支持。您在接受服务过程中，需要调用您的手机摄像头，并且根据业务场景的不同，需要读取您的身份证个人信息，包括姓名、性别、民族、出生日期、常住户口所在地住址、公民身份号码、本人相片、证件的有效期和签发机关等信息，或者截取您的脸部图像和认证视频，从而实现身份比对。</p><p>如您使用不成功，请确保您已经按照要求正确使用本服务，或者向为您办理业务的机构咨询其他办理渠道。</p>',
                                ClientProtocol: "客户侧协议内容",
                                ProjectName: "云智慧眼",
                                BusinessName: "实名实人认证",
                                CooperationName: "合作方文案",
                                IsHideAbout: !1,
                                NextBtn: "快速验证",
                                ProtocolEntrance: "全部协议",
                                AuthorizedProtocol: '<p>您知悉并同意应用提供者：调用<span class="focus-text">相机、存储、麦克风权限</span>，收集、使用您本人的<span class="focus-text">身份信息及人脸视频、图像</span>，向合法数据持有者核实验证您的真实身份。</p>'
                            },
                            Sms: {},
                            Ocr: {
                                IsManualInput: !0,
                                Backend: !1,
                                AllowModifyType: "100",
                                IsAddress: !1,
                                IsCheckIdInfo: !1,
                                SourceType: 2,
                                IsHideManualInputTakePhotoBtn: !1
                            },
                            LiveFour1V1: {
                                MaxDuration: 4,
                                DetailType: !1,
                                ForceWatchVideoTime: 5,
                                ImportantTips: ""
                            },
                            LiveAction1V1: {},
                            LiveSilence1V1: {},
                            Fail: {
                                IsShowQuitBtn: !1,
                                ExitBtnText: "退出实名认证",
                                RetryBtnText: "重新验证",
                                CustomFailInfo: {}
                            },
                            Success: {
                                SubTipsName: "验证成功",
                                SuccessTips: "请点击下一步继续您的操作",
                                AutoSkip: !1
                            }
                        };
                        i(!0, r, o.Data.config);
                        var n = r;
                        console.log("final cmsConfig"), console.log(n), wx.verifySysInfo = wx.getSystemInfoSync(), 
                        console.log(wx.verifySysInfo);
                        var s = "ios" === wx.verifySysInfo.platform ? n.JustForMp.iOSVerLimit : n.JustForMp.androidVerLimit;
                        if ("devtools" !== wx.verifySysInfo.platform && s && t.compareVersion(s, wx.verifySysInfo.version) > 0) return wx.hideLoading(), 
                        void wx.showModal({
                            title: "提示",
                            content: "当前微信版本低于".concat(s, "，无法使用该功能，请升级到最新微信版本后重试。"),
                            showCancel: !1
                        });
                        if (wx.verifySysInfo.environment && "wxwork" === wx.verifySysInfo.environment) return wx.showModal({
                            title: "提示",
                            content: "企业微信暂不支持使用此功能，请使用微信进行操作",
                            showCancel: !1
                        }), !1;
                        if (n = a("", n), wx.verify_CMSConfig = n, n.Common.IsWxNative && !n.Common.Flow.includes("Ocr") && n.Common.IsHideIndexWhenNative) {
                            console.log("直接调用微信原生接口");
                            var l = n.Common.WxVerifyTypeIsVideo, c = n.Common.WxCheckAliveType;
                            t.startNativeVerify(l, c, wx.verifyBaseUrl, e.data.token, wx.verifyFailureFunc, function(o) {
                                var t = {
                                    BizToken: e.data.token,
                                    ErrorCode: o.ErrorCode,
                                    ErrorMsg: o.ErrorMsg
                                };
                                0 === o.ErrorCode ? wx.verifySuccessFunc(t) : wx.verifyFailureFunc(t);
                            });
                        } else console.log("进入验证页面"), wx.navigateTo({
                            url: "/pages/person/face/index?isNotice=" + !1
                        });
                    } else wx.showModal({
                        title: "提示",
                        content: o.ErrorMsg,
                        showCancel: !1
                    });
                })) : wx.showModal({
                    title: "提示",
                    content: "调用SDK失败,token格式错误！",
                    showCancel: !1
                });
            } else {
                var o = {
                    ErrorCode: -100,
                    ErrorMsg: "调用SDK失败，wx.startVerify传入参数缺少！"
                };
                wx.showModal({
                    title: "提示",
                    content: o.ErrorMsg,
                    showCancel: !1
                });
            }
        };
    }
};