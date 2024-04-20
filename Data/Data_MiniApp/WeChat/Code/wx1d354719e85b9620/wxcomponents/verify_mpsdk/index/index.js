require("../../../@babel/runtime/helpers/Arrayincludes");

var i, o = require("../../../@babel/runtime/helpers/regeneratorRuntime"), e = require("../../../@babel/runtime/helpers/asyncToGenerator"), t = (require("../utils/regenerator-runtime/runtime"), 
require("../utils/util")), a = require("../utils/log"), r = require("../config").sysFailInfo, s = (require("../main"), 
[ 14, 15 ]), n = [ 2002, 2003, 2006 ], c = "";

Page({
    data: {
        curPage: null,
        cmsConfig: {},
        skipConfig: {},
        bizData: {},
        token: "",
        preClickBtnTime: 0,
        isNotCamera: !0,
        iKnowFuncs: [],
        index_rule: !1,
        show_about_dlg: !1,
        indexChecked: !1,
        indexDisableBtn: !0,
        show_auth_panel: !1,
        authInfo: "",
        isInfinityDisplay: !1,
        notice: {
            titie: "",
            content: ""
        },
        sms: {
            isForbiddenSmsBtn: !0,
            hintError: "",
            isEnableSendSms: !1,
            is60sGap: !1,
            sendSmsTtitle: "获取验证码",
            gapSec: 60,
            phoneNum: "",
            verifyCode: ""
        },
        ocr: {
            isShowTakePhoto: !1,
            isShowResult: !1,
            isShowGuide: !0,
            isShowPhotoPreView: !1,
            isPhotoFromCamera: !1,
            isFrontIdCard: !0,
            hintError: "",
            hintErrorResult: "",
            isForbiddenManualBtn: !0,
            isForbiddenResultBtn: !1,
            idcard: "",
            idname: "",
            idaddress: "",
            tempImagePath: "",
            ocrTitle: "请拍摄身份证人像面",
            verifycamFullScreen: "verifycamFullScreen",
            isToolsShow: !0,
            isEditTheOcrIsManualInput: !1,
            isInfinityDisplayOcrTitle: "",
            isInfinityDisplayOcrBottom: "",
            isInfinityDisplayOcrMiddle: "",
            frontMediaKey: "",
            backendMediaKey: ""
        },
        livingbody: {
            isShowGuide: !0,
            isShowCamera: !1,
            isShowProcess: !1,
            isShowDialog: !1,
            livingbodyNumber: "",
            isNotPrepareOk: !0,
            getCodeErrMsg: "",
            livingbodyTitle: "请保持正脸对准框内",
            isPrepare: !0,
            curNumberStatus: [ "verifyCurrentNumber", "", "", "" ],
            curNumber: [ "·", "·", "·", "·" ],
            isActionSeqNormal: "",
            livingbodyActionText: "",
            livingbodySilentText: "",
            uploadProcess: 0,
            showTestVideo: !1,
            video_preview: "",
            video_src: "",
            isInfinityDisplayHTTitle: "",
            isInfinityDisplayHTBottom: "",
            isInfinityDisplayHTMiddle: "",
            isInfinityDisplayHTActionPre: "",
            isInfinityDisplayHTNumberPre: "",
            isInfinityDisplayHTActionHint: "",
            isInfinityDisplayHTNumberHint: ""
        },
        failPage: {
            is_modal_showing: !1
        },
        successPage: {},
        failInfo: {}
    },
    onLoad: function(i) {
        var o = this;
        console.log("options=>", i), this.setData({
            cmsConfig: wx.verify_CMSConfig,
            token: wx.verify_TOKEN,
            bizData: wx.verify_BizData
        }), console.log("this.data.cmsConfig =", this.data.cmsConfig), console.log("this.data.token = ".concat(this.data.token)), 
        console.log("wx.verifyBaseUrl = ".concat(wx.verifyBaseUrl)), console.log(this.data.cmsConfig.page.ocr.backend), 
        wx.setNavigationBarTitle({
            title: this.data.cmsConfig.justForJumpVer.title,
            success: function() {
                console.log("setNavigationBarTitle success!");
            },
            fail: function(i) {
                console.log("setNavigationBarTitle failure!"), console.log(i);
            }
        }), wx.getSystemInfo({
            success: function(i) {
                console.log(i);
                var e = i.screenHeight / i.screenWidth >= 2;
                i.screenHeight > 700 && e && o.setData({
                    isInfinityDisplay: !0,
                    "ocr.isInfinityDisplayOcrBottom": "isInfinityDisplayOcrBottom",
                    "ocr.isInfinityDisplayOcrMiddle": "isInfinityDisplayOcrMiddle",
                    "ocr.isInfinityDisplayOcrTitle": "isInfinityDisplayOcrTitle",
                    "livingbody.isInfinityDisplayHTBottom": "isInfinityDisplayHTBottom",
                    "livingbody.isInfinityDisplayHTMiddle": "isInfinityDisplayHTMiddle",
                    "livingbody.isInfinityDisplayHTTitle": "isInfinityDisplayHTTitle",
                    "livingbody.isInfinityDisplayHTActionPre": "isInfinityDisplayHTActionPre",
                    "livingbody.isInfinityDisplayHTNumberPre": "isInfinityDisplayHTNumberPre",
                    "livingbody.isInfinityDisplayHTActionHint": "isInfinityDisplayHTActionHint",
                    "livingbody.isInfinityDisplayHTNumberHint": "isInfinityDisplayHTNumberHint"
                });
            }
        }), this.data.cmsConfig.IsHideIndexAlways ? this.indexToNext() : this.setData({
            curPage: 1
        });
    },
    onReady: function() {},
    onShow: function() {
        var i = this;
        this.data.show_auth_panel && setTimeout(function() {
            i.isAuthOk();
        }, 500);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    showErrorToast: function(i) {
        var o = this;
        if (console.log("showErrorToast", i), 3 === this.data.curPage) {
            if (this.data.ocr.isShowResult) return void this.setData({
                "ocr.hintErrorResult": i.error_msg
            });
            this.data.ocr.isShowTakePhoto && 101 !== i.ErrorCode && -107 !== i.ErrorCode && this.data.iKnowFuncs.push(function() {
                o.reTakePhoto();
            });
        }
        this.setData({
            showErrorMsg: !0,
            err: i
        });
    },
    switchDialog: function() {
        this.setData({
            showErrorMsg: !this.data.showErrorMsg
        }), 1 === this.data.iKnowFuncs.length && this.data.iKnowFuncs.pop()();
    },
    checkNetWork: function(i) {
        var o = this;
        wx.getNetworkType({
            success: function(e) {
                "none" !== e.networkType ? i() : (console.log("Network is none"), o.showErrorToast({
                    ErrorCode: 101,
                    ErrorMsg: "网络异常，请稍后重试"
                }));
            },
            fail: function(i) {
                console.log("Get Network exception"), o.showErrorToast({
                    ErrorCode: 101,
                    ErrorMsg: "网络异常，请稍后重试"
                });
            }
        });
    },
    checkRecordNetworkOk: function(i, o) {
        wx.getNetworkType({
            success: function(e) {
                "none" !== e.networkType ? (console.log("network is OK"), i(e.networkType)) : (console.log("Network is none"), 
                o({
                    ErrorCode: 101,
                    ErrorMsg: "网络异常，请稍后再试"
                }));
            },
            fail: function(i) {
                console.log("Get Network exception"), o({
                    ErrorCode: 101,
                    ErrorMsg: "网络异常，请稍后再试"
                });
            }
        });
    },
    returnAllCheckNetWork: function(i) {
        wx.getNetworkType({
            success: function(o) {
                i(o.networkType);
            },
            fail: function(o) {
                i("none");
            }
        });
    },
    isNotAllowClick: function() {
        var i = +new Date();
        return i - this.data.preClickBtnTime < 1e3 ? (console.log("Click button gap < 1s, not allow exec"), 
        !0) : (this.data.preClickBtnTime = i, console.log("Click button gap > 1s, allow exec"), 
        !1);
    },
    exitVerify: function(i) {
        i.BizToken = this.data.token, i.ErrorCode = 0, this.data.bizData.endPath ? wx.verifySuccessFunc(i) : wx.navigateBack({
            success: function(o) {
                wx.verifySuccessFunc(i);
            }
        });
    },
    exitVerifyFail: function(i) {
        i.BizToken = this.data.token, this.data.bizData.endPath ? -999 === i.ErrorCode ? wx.navigateBack({
            success: function() {}
        }) : (console.log("exitVerifyFail: this.data.bizData.endPath", this.data.bizData.endPath), 
        wx.verifyFailureFunc(i)) : wx.navigateBack({
            success: function() {
                -999 !== i.ErrorCode && wx.verifyFailureFunc(i);
            }
        });
    },
    switchIndexRule: function() {
        this.setData({
            index_rule: !this.data.index_rule
        });
    },
    switchAboutDlg: function() {
        this.setData({
            show_about_dlg: !this.data.show_about_dlg
        });
    },
    checkboxChange: function(i) {
        console.log("checkboxChange"), this.setData({
            indexDisableBtn: !this.data.indexDisableBtn
        });
    },
    startNativeVerify: function() {
        var i = this;
        console.log("直接调用微信原生接口");
        var o = this.data.cmsConfig, e = o.Common.WxVerifyTypeIsVideo, a = o.Common.WxCheckAliveType;
        t.startNativeVerify(e, a, wx.verifyBaseUrl, this.data.token, this.exitVerifyFail, function(o) {
            var e = {
                BizToken: i.data.token,
                ErrorCode: o.ErrorCode,
                ErrorMsg: o.ErrorMsg
            };
            0 === o.ErrorCode ? i.exitVerify(e) : i.exitVerifyFail(e);
        });
    },
    indexToNext: (i = e(o().mark(function i() {
        var e;
        return o().wrap(function(i) {
            for (;;) switch (i.prev = i.next) {
              case 0:
                this.isNotAllowClick() || (e = this, this.checkNetWork(function() {
                    var i = e.data.cmsConfig;
                    if (!e.data.cmsConfig.Common.IsWxNative || e.data.cmsConfig.Common.Flow.includes("Ocr")) {
                        var o = 2;
                        i.isHideSmsPage && (o = i.isHideOcrPage ? 4 : 3), e.setData({
                            curPage: o
                        }), (4 === o || 3 === o && !e.data.cmsConfig.page.ocr.isManualInput) && e.preLivingbodyExec();
                    } else e.startNativeVerify();
                }));

              case 1:
              case "end":
                return i.stop();
            }
        }, i, this);
    })), function() {
        return i.apply(this, arguments);
    }),
    phoneNumChanged: function(i) {
        this.setData({
            "sms.hintError": ""
        });
        var o = i.detail.value;
        this.data.sms.phoneNum = o;
        var e = t.validate(o, "sms_phone");
        console.log("isPhoneOk: ".concat(e)), e && !this.data.sms.is60sGap && this.setData({
            "sms.isEnableSendSms": !0
        }), e || this.setData({
            "sms.isEnableSendSms": !1
        });
        var a = t.validate(this.data.sms.verifyCode, "sms_verifyCode");
        e && a ? this.setData({
            "sms.isForbiddenSmsBtn": !1
        }) : this.setData({
            "sms.isForbiddenSmsBtn": !0
        }), console.log("isEnableSendSms: ".concat(this.data.sms.isEnableSendSms));
    },
    sendVerifyCodeReq: function() {
        if (!this.isNotAllowClick()) {
            var i = this;
            this.checkNetWork(function() {
                var o = {
                    url: "/api/common/sendSmsCode?BizToken=".concat(i.data.token),
                    data: {
                        PhoneNum: i.data.sms.phoneNum
                    },
                    reTry: {
                        tryCount: 3
                    }
                };
                wx.showLoading({
                    title: "短信发送中...",
                    mask: !0
                }), t.request(o, function(o) {
                    if (wx.hideLoading(), 0 === o.ErrorCode) {
                        i.setData({
                            "sms.is60sGap": !0,
                            "sms.isEnableSendSms": !1,
                            "sms.sendSmsTtitle": "重新发送"
                        });
                        var e = setInterval(function() {
                            i.data.sms.gapSec <= 1 && (clearInterval(e), i.setData({
                                "sms.is60sGap": !1,
                                "sms.gapSec": 60
                            }), t.validate(i.data.sms.phoneNum, "sms_phone") && i.setData({
                                "sms.isEnableSendSms": !0
                            })), i.setData({
                                "sms.gapSec": i.data.sms.gapSec - 1
                            });
                        }, 1e3);
                    } else {
                        if (s.includes(o.ErrorCode)) return void i.exitVerifyFail(o);
                        i.setData({
                            "sms.hintError": o.ErrorMsg
                        }), t.reportError(a.sendSmsCodeErr, o);
                    }
                });
            });
        }
    },
    verifyCodeChanged: function(i) {
        this.setData({
            "sms.hintError": ""
        }), this.data.sms.verifyCode = i.detail.value;
        var o = t.validate(this.data.sms.verifyCode, "sms_verifyCode");
        t.validate(this.data.sms.phoneNum, "sms_phone") && o ? this.setData({
            "sms.isForbiddenSmsBtn": !1
        }) : this.setData({
            "sms.isForbiddenSmsBtn": !0
        });
    },
    smsToNext: function() {
        if (!this.isNotAllowClick()) {
            var i = this;
            this.checkNetWork(function() {
                console.log(i.data.sms.phoneNum + " | " + i.data.sms.verifyCode);
                var o = {
                    url: "/api/common/verifySmsCode?BizToken=".concat(i.data.token),
                    data: {
                        PhoneNum: i.data.sms.phoneNum,
                        VerifyCode: i.data.sms.verifyCode
                    },
                    reTry: {
                        tryCount: 3
                    }
                };
                wx.showLoading({
                    title: "加载中...",
                    mask: !0
                }), t.request(o, function(o) {
                    if (wx.hideLoading(), 0 === o.ErrorCode) {
                        var e = i.data.cmsConfig;
                        if (e.isJustSms) i.exitVerify({}); else {
                            var r = 3;
                            e.isHideOcrPage && (r = 4), i.setData({
                                curPage: r
                            }), (4 === r || 3 === r && !i.data.cmsConfig.page.ocr.isManualInput) && i.preLivingbodyExec();
                        }
                    } else {
                        if (s.includes(o.ErrorCode)) return void i.exitVerifyFail(o);
                        i.setData({
                            "sms.hintError": o.ErrorMsg
                        });
                    }
                    t.reportError(a.verifySmsCodeErr, o);
                });
            });
        }
    },
    idcartManualInputChanged: function(i) {
        var o = i.detail.value;
        this.data.ocr.idcard = o, this.manualInputChanged();
    },
    idnameManualInputChanged: function(i) {
        var o = i.detail.value;
        this.data.ocr.idname = o, this.manualInputChanged();
    },
    manualInputChanged: function(i) {
        this.setData({
            "ocr.hintError": ""
        });
        var o = t.validate(this.data.ocr.idcard, "idcard"), e = t.validate(this.data.ocr.idname, "idname"), a = !0;
        o || 18 !== this.data.ocr.idcard.length ? o && (e && (a = !1), this.setData({
            "ocr.isForbiddenManualBtn": a
        })) : this.setData({
            "ocr.hintError": "身份证号有误，请确认后重新输入"
        });
    },
    manualInputGoNext: function() {
        this.ocrCommonInputGoNext(!0);
    },
    ocrCommonInputGoNext: function(i) {
        var o = this;
        this.checkNetWork(function() {
            wx.showLoading({
                title: "校验身份信息中...",
                mask: !0
            });
            var e = 0;
            "android" === wx.verifySysInfo.platform && (e = 300), setTimeout(function() {
                var e = {
                    url: "/api/ocr/updateidinfo?BizToken=".concat(o.data.token),
                    data: {
                        Name: o.data.ocr.idname,
                        IdCard: o.data.ocr.idcard
                    },
                    reTry: {
                        tryCount: 3
                    }
                };
                o.data.ocr.idaddress && (e.data.Address = o.data.ocr.idaddress), t.request(e, function(e) {
                    if (wx.hideLoading(), 0 !== e.ErrorCode) {
                        if (s.includes(e.ErrorCode)) return void o.exitVerifyFail(e);
                        var r = {
                            "ocr.hintError": e.ErrorMsg
                        };
                        return i || (r = {
                            "ocr.hintErrorResult": e.ErrorMsg
                        }), o.setData(r), void t.reportError(a.updateIdinfoErr, e);
                    }
                    o.ocrGoNext(i);
                });
            }, e);
        });
    },
    ocrGoNext: function(i) {
        var o = this, e = this;
        if (e.data.cmsConfig.page.ocr.isCheckIDInfo) {
            var r = {
                url: "/api/ocr/checkidinfo?BizToken=".concat(this.data.token),
                data: {
                    Name: this.data.ocr.idname,
                    IdCard: this.data.ocr.idcard
                },
                reTry: {
                    tryCount: 3
                }
            };
            t.request(r, function(r) {
                if (0 !== r.ErrorCode) {
                    if (s.includes(r.ErrorCode)) return void e.exitVerifyFail(r);
                    var n = {
                        "ocr.hintError": r.ErrorMsg
                    };
                    return console.log(r.ErrorMsg), i || (n = {
                        "ocr.hintErrorResult": r.ErrorMsg
                    }), e.setData(n), void t.reportError(a.checkIdinfoErr, r);
                }
                o.ocrGoNextEnd();
            });
        } else this.ocrGoNextEnd();
    },
    ocrGoNextEnd: function() {
        if (this.data.cmsConfig.isJustOcr) this.exitVerify({
            id_name: this.data.ocr.idname,
            id_number: this.data.ocr.idcard,
            id_address: this.data.ocr.idaddress
        }); else {
            if (this.data.cmsConfig.Common.IsWxNative) return void this.startNativeVerify();
            this.setData({
                curPage: 4
            }), this.preLivingbodyExec();
        }
    },
    manualInputTakePhone: function() {
        this.setData({
            "cmsConfig.page.ocr.isManualInput": !1,
            "ocr.isEditTheOcrIsManualInput": !0
        });
    },
    btnclick: function() {
        var i = this.data.cmsConfig.page.ocr.backend;
        console.log(i);
    },
    ocrStartTakePhoto: function() {
        var i = this;
        this.checkNetWork(function() {
            i.setData({
                "ocr.isShowTakePhoto": !0,
                isNotCamera: !1
            });
        });
    },
    takePhotoWithCamera: function() {
        var i = this, o = this;
        wx.createCameraContext().takePhoto({
            quality: "noraml",
            success: function(e) {
                console.log(e.tempImagePath), i.setData({
                    "ocr.tempImagePath": e.tempImagePath,
                    "ocr.isShowPhotoPreView": !0,
                    "ocr.ocrTitle": "照片预览",
                    "ocr.isPhotoFromCamera": !0
                }), console.log(o.data.ocr.tempImagePath);
            },
            fail: function(i) {
                wx.showToast({
                    title: "takePhoto function exception",
                    icon: "none"
                });
            }
        });
    },
    chooseImg: function() {
        var i = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album" ],
            success: function(o) {
                var e = o.tempFilePaths;
                i.setData({
                    "ocr.tempImagePath": e[0],
                    "ocr.isShowPhotoPreView": !0,
                    "ocr.ocrTitle": "照片预览",
                    "ocr.isPhotoFromCamera": !1
                }), i.setData({
                    "ocr.isToolsShow": !1
                }), i.setData({
                    "ocr.isToolsShow": !0
                });
            }
        });
    },
    reTakePhoto: function() {
        var i = this.data.ocr.isFrontIdCard ? "请拍摄身份证人像面" : "请拍摄身份证国徽面";
        this.setData({
            "ocr.tempImagePath": "",
            "ocr.isShowPhotoPreView": !1,
            "ocr.ocrTitle": i
        });
    },
    startUploadAndOcr: function() {
        var i = this, o = this;
        this.checkNetWork(function() {
            wx.showLoading({
                title: "系统识别中",
                mask: !0
            });
            var e = {
                file: o.data.ocr.tempImagePath
            };
            console.log("upfile data", e), wx.uploadFile({
                url: "".concat(wx.verifyBaseUrl, "/api/common/upLoadWxAppFile?BizToken=").concat(o.data.token),
                filePath: i.data.ocr.tempImagePath,
                name: "file",
                formData: e,
                success: function(e) {
                    if (console.log("uploadFile | ", e), 200 === e.statusCode) {
                        var r = JSON.parse(e.data);
                        if (0 === r.ErrorCode) {
                            var n = {
                                url: "/api/ocr/ocrinfo?BizToken=".concat(i.data.token),
                                data: {
                                    MediaKey: r.Data.MediaKey,
                                    PicType: i.data.ocr.isFrontIdCard ? 0 : 1
                                },
                                reTry: {
                                    tryCount: 3
                                }
                            };
                            console.log("ocrinfo data", n), t.request(n, function(e) {
                                if (wx.hideLoading(), 0 === e.ErrorCode) {
                                    if (i.data.ocr.isFrontIdCard && i.setData({
                                        "ocr.idcard": e.Data.id,
                                        "ocr.idname": e.Data.name,
                                        "ocr.idaddress": e.Data.address
                                    }), i.data.ocr.isFrontIdCard && i.data.cmsConfig.page.ocr.backend) return void i.setData({
                                        "ocr.tempImagePath": "",
                                        "ocr.isShowPhotoPreView": !1,
                                        "ocr.ocrTitle": "请拍摄身份证国徽面",
                                        "ocr.isFrontIdCard": !1
                                    });
                                    i.setData({
                                        "ocr.isShowResult": !0,
                                        isNotCamera: !0,
                                        "ocr.verifycamFullScreen": "verifycamFullScreen"
                                    });
                                } else {
                                    if (s.includes(e.ErrorCode)) return void o.exitVerifyFail(e);
                                    i.showErrorToast(e), t.reportError(a.ocrinfoErr, e);
                                }
                            });
                        } else wx.hideLoading(), i.showErrorToast({
                            ErrorCode: 101,
                            ErrorMsg: r.ErrorMsg
                        }), t.reportError(a.ocrinfoUploadErr, e);
                    } else wx.hideLoading(), i.showErrorToast({
                        ErrorCode: 101,
                        ErrorMsg: "上传图片失败"
                    }), t.reportError(a.ocrinfoUploadErr, e);
                },
                fail: function(o) {
                    console.log("upload img fail", o), wx.hideLoading(), i.showErrorToast({
                        ErrorCode: 101,
                        ErrorMsg: "上传图片失败"
                    }), t.reportError(a.ocrinfoUploadFail, o);
                }
            });
        });
    },
    idnameInputChanged: function(i) {
        this.data.ocr.idname = i.detail.value, this.ocrCommonInputCheck();
    },
    idcartInputChanged: function(i) {
        this.data.ocr.idcard = i.detail.value, this.ocrCommonInputCheck();
    },
    idaddressInputChanged: function(i) {
        this.data.ocr.idaddress = i.detail.value, this.ocrCommonInputCheck();
    },
    ocrCommonInputCheck: function() {
        this.setData({
            "ocr.hintErrorResult": ""
        });
        var i = t.validate(this.data.ocr.idcard, "idcard"), o = t.validate(this.data.ocr.idname, "idname"), e = t.validate(this.data.ocr.idaddress, "idaddress"), a = !0;
        i && o && (a = !1), this.data.cmsConfig.page.ocr.isAddress && !e && (a = !0), this.setData({
            "ocr.isForbiddenResultBtn": a
        });
    },
    ocrInputGoNext: function(i) {
        if (t.validate(this.data.ocr.idcard, "idcard")) if (t.validate(this.data.ocr.idname, "idname")) {
            if (this.data.cmsConfig.page.ocr.isAddress && !t.validate(this.data.ocr.idaddress, "idaddress")) return void this.setData({
                "ocr.hintErrorResult": "住址格式错误"
            });
            console.log("go next"), this.ocrCommonInputGoNext(!1);
        } else this.setData({
            "ocr.hintErrorResult": "姓名格式错误"
        }); else this.setData({
            "ocr.hintErrorResult": "身份证号格式错误"
        });
    },
    switchLivingbodyDialog: function(i) {
        this.setData({
            "livingbody.isShowDialog": !this.data.livingbody.isShowDialog
        });
    },
    preLivingbodyExec: function() {
        var i = this, o = this;
        if (4 !== this.data.curPage || 0 !== this.data.cmsConfig.livingbodyType && 1 !== this.data.cmsConfig.livingbodyType) o.getAuth(); else {
            var e = {
                url: "/api/liveness/lipcode?BizToken=".concat(o.data.token),
                data: {},
                reTry: {
                    tryCount: 3
                }
            };
            1 === o.data.cmsConfig.livingbodyType && (e.url = "/api/liveness/actioncode?BizToken=".concat(o.data.token)), 
            t.request(e, function(e) {
                if (0 === e.ErrorCode) {
                    console.log("Got the LipCode：" + e.Data.LipCode), console.log("Got the ActionCode:" + e.Data.ActionCode);
                    var r = {
                        "livingbody.livingbodyNumber": e.Data.LipCode
                    };
                    1 === o.data.cmsConfig.livingbodyType && (r = {
                        "livingbody.isActionSeqNormal": "21" === e.Data.ActionCode.join("")
                    }), i.setData(r), o.getAuth();
                } else {
                    if (s.includes(e.ErrorCode)) return void o.exitVerifyFail(e);
                    i.setData({
                        "livingbody.getCodeErrMsg": e.ErrorMsg
                    }), o.getAuth(), t.reportError(a.preLivingbodyExecErr, e);
                }
            });
        }
    },
    getAuth: function() {
        var i = this;
        wx.authorize({
            scope: "scope.camera",
            success: function() {},
            fail: function() {
                console.log("您未允许使用摄像头权限");
            },
            complete: function() {
                4 === i.data.curPage ? wx.authorize({
                    scope: "scope.record",
                    success: function() {},
                    fail: function() {
                        console.log("您未允许使用录音权限");
                    },
                    complete: function() {
                        console.log("开始判断是否有权限"), i.isAuthOk();
                    }
                }) : i.isAuthOk();
            }
        });
    },
    isAuthOk: function() {
        var i = this;
        wx.getSetting({
            success: function(o) {
                console.log("获取授权信息成功");
                var e = o.authSetting["scope.record"], t = o.authSetting["scope.camera"];
                if (4 === i.data.curPage) if (e && t) i.setData({
                    show_auth_panel: !1,
                    authInfo: "摄像头、录音功能都已授权"
                }), i.authOkToDo(), console.log("摄像头、录音功能都已授权"); else {
                    var a = "";
                    t || (a = "摄像头 "), e || (a += "录音功能"), a += "还未授权", console.log(a), i.setData({
                        show_auth_panel: !0,
                        authInfo: a
                    });
                } else t ? i.setData({
                    show_auth_panel: !1,
                    authInfo: "摄像头已授权"
                }) : i.setData({
                    show_auth_panel: !0,
                    authInfo: "摄像头未授权"
                });
            },
            fail: function(i) {
                console.log("获取收取信息失败", i);
            }
        });
    },
    authOkToDo: function() {
        console.log(this.data.livingbody.livingbodyNumber, this.data.cmsConfig.livingbodyType), 
        0 === this.data.cmsConfig.livingbodyType && "" === this.data.livingbody.livingbodyNumber || 1 === this.data.cmsConfig.livingbodyType && "" === this.data.livingbody.isActionSeqNormal ? this.theLivingBodyNumberMustBeOk() : (this.livingbodyAutoShowDialog(), 
        this.setData({
            "livingbody.isNotPrepareOk": !1
        }));
    },
    theLivingBodyNumberMustBeOk: function() {
        var i = this;
        wx.showModal({
            title: "提示",
            content: "获取code失败，" + i.data.livingbody.getCodeErrMsg,
            showCancel: !1,
            confirmText: "重新获取",
            confirmColor: "#2d72f1",
            success: function(o) {
                if (o.confirm) {
                    console.log("开始重新获取"), wx.showLoading({
                        title: "重新获取中...",
                        mask: !0
                    });
                    var e = {
                        url: "/api/liveness/lipcode?BizToken=".concat(i.data.token),
                        data: {},
                        reTry: {
                            tryCount: 3
                        }
                    };
                    1 === i.data.cmsConfig.livingbodyType && (e.url = "/api/liveness/actioncode?BizToken=".concat(i.data.token)), 
                    t.request(e, function(o) {
                        if (wx.hideLoading(), 0 === o.ErrorCode) console.log("Got the LipCode：" + o.Data.LipCode), 
                        console.log("Got the ActionCode:" + o.Data.ActionCode), i.livingbodyAutoShowDialog(), 
                        1 === i.data.cmsConfig.livingbodyType ? i.setData({
                            "livingbody.isActionSeqNormal": "21" === o.Data.ActionCode.join(""),
                            "livingbody.isNotPrepareOk": !1
                        }) : i.setData({
                            "livingbody.livingbodyNumber": o.Data.LipCode,
                            "livingbody.isNotPrepareOk": !1
                        }); else {
                            if (s.includes(o.ErrorCode)) return void i.exitVerifyFail(o);
                            i.setData({
                                "livingbody.getCodeErrMsg": o.ErrorMsg
                            }), i.theLivingBodyNumberMustBeOk(), t.reportError(a.lipcodeErr, o);
                        }
                    });
                }
            }
        });
    },
    livingbodyAutoShowDialog: function() {
        var i = wx.getStorageSync("isAlreadyShowVideoRule");
        console.log("isAlreadyShowVideoRule:" + i), i || (this.setData({
            "livingbody.isShowDialog": !this.data.livingbody.isShowDialog
        }), wx.setStorage({
            key: "isAlreadyShowVideoRule",
            data: "true"
        }));
    },
    livingbodyStartToRecord: function() {
        var i = this;
        this.checkNetWork(function() {
            console.log("go"), i.setData({
                "livingbody.isShowCamera": !0,
                isNotCamera: !1
            }), setTimeout(function() {
                i.checkRecordNetworkOk(function() {
                    c = wx.createCameraContext(), console.log("start startRecord", +new Date()), c.startRecord({
                        success: function(o) {
                            console.log("startRecord success", +new Date());
                            var e = i.data.cmsConfig.livingbodyType, t = {
                                "livingbody.isPrepare": !1
                            }, a = 0, r = 1200, s = 1e3, n = i.data.livingbody.livingbodyNumber + "", c = [ "", "", "", "" ], d = [ "·", "·", "·", "·" ], l = i.data.cmsConfig.page.livingbody.silentRecordTime - 1;
                            if (0 === e) d[a] = n[a], c[a] = "verifyCurrentNumber", t["livingbody.livingbodyTitle"] = "请大声朗读以下数字", 
                            t["livingbody.curNumberStatus"] = c, t["livingbody.curNumber"] = d, s = 1500; else if (1 === e) {
                                var u = i.data.livingbody.isActionSeqNormal;
                                t["livingbody.livingbodyTitle"] = "请做以下动作", t["livingbody.livingbodyActionText"] = u ? "眨眨眼" : "张张嘴", 
                                r = 2e3;
                            } else t["livingbody.livingbodySilentText"] = l, r = 1e3;
                            i.setData(t);
                            var h = setInterval(function() {
                                if (0 === e) {
                                    if (3 === a) return clearInterval(h), void i.stopRecordAndProcess(s);
                                    d[++a] = n[a], c[a] = "verifyCurrentNumber", i.setData({
                                        "livingbody.curNumberStatus": c,
                                        "livingbody.curNumber": d
                                    });
                                } else if (1 === e) {
                                    if (1 === a) return clearInterval(h), void i.stopRecordAndProcess(s);
                                    a++, i.setData({
                                        "livingbody.livingbodyActionText": i.data.livingbody.isActionSeqNormal ? "张张嘴" : "眨眨眼"
                                    });
                                } else {
                                    if (0 === l) return clearInterval(h), void i.stopRecordAndProcess(s);
                                    l--, i.setData({
                                        "livingbody.livingbodySilentText": l
                                    });
                                }
                            }, r);
                        },
                        fail: function(o) {
                            i.setData({
                                "livingbody.isShowGuide": !0,
                                "livingbody.isShowCamera": !1,
                                isNotCamera: !0,
                                "livingbody.isPrepare": !0
                            }), console.log("start record fail", +new Date(), o), i.showErrorToast({
                                ErrorCode: -108,
                                ErrorMsg: "网络异常，".concat(o.errMsg)
                            });
                        },
                        timeoutCallback: function(o) {
                            console.log("timeoutCallback", o), i.setData({
                                "livingbody.isShowGuide": !0,
                                "livingbody.isShowCamera": !1,
                                isNotCamera: !0,
                                "livingbody.isPrepare": !0
                            }), i.showErrorToast({
                                ErrorCode: -108,
                                ErrorMsg: "startRecord timeoutCallback, 请重试！"
                            });
                        }
                    });
                }, function(o) {
                    i.setData({
                        "livingbody.isShowGuide": !0,
                        "livingbody.isShowCamera": !1,
                        isNotCamera: !0
                    }), i.showErrorToast(o);
                });
            }, 2e3);
        });
    },
    stopRecordAndProcess: function(i) {
        var o = this;
        console.log("start stopRecord", +new Date()), setTimeout(function() {
            console.log("stopTimeGap" + i), console.log(c.stopRecord), c.stopRecord({
                success: function(i) {
                    console.log("stopRecord success", +new Date(), i), wx.getFileInfo({
                        filePath: i.tempVideoPath,
                        success: function(e) {
                            var t = Math.round(e.size / 1024);
                            t > 30720 ? (o.setData({
                                "livingbody.isShowGuide": !0,
                                "livingbody.isShowCamera": !1,
                                isNotCamera: !0,
                                "livingbody.isPrepare": !0
                            }), o.showErrorToast({
                                ErrorCode: -108,
                                ErrorMsg: "视频大小超过限制"
                            })) : o.processTheVideo(i.tempVideoPath, t + "K");
                        },
                        fail: function(i) {
                            o.setData({
                                "livingbody.isShowGuide": !0,
                                "livingbody.isShowCamera": !1,
                                isNotCamera: !0,
                                "livingbody.isPrepare": !0
                            }), o.showErrorToast({
                                ErrorCode: -108,
                                ErrorMsg: "getFileInfo异常，".concat(i.errMsg)
                            });
                        }
                    });
                },
                fail: function(i) {
                    o.setData({
                        "livingbody.isShowGuide": !0,
                        "livingbody.isShowCamera": !1,
                        isNotCamera: !0,
                        "livingbody.isPrepare": !0
                    }), o.showErrorToast({
                        ErrorCode: -108,
                        ErrorMsg: "stopRecord异常，".concat(i.errMsg)
                    });
                },
                complete: function(i) {
                    console.log("complete", i);
                }
            });
        }, i);
    },
    processTheVideo: function(i, o) {
        var e = this;
        this.checkRecordNetworkOk(function(t) {
            e.goToProcessPage(i, o);
        }, function(t) {
            e.setData({
                "livingbody.isShowGuide": !0,
                "livingbody.isShowCamera": !1,
                isNotCamera: !0,
                "livingbody.isPrepare": !0
            }), wx.showModal({
                title: "提示",
                content: "网络异常，请检查网络后重试",
                confirmText: "重试",
                confirmColor: "#2d72f1",
                success: function(t) {
                    t.confirm && e.processTheVideo(i, o);
                }
            });
        });
    },
    goToProcessPage: function(i, o) {
        this.setData({
            "livingbody.isShowGuide": !1,
            "livingbody.isShowCamera": !1,
            "livingbody.isShowProcess": !0,
            isNotCamera: !0,
            "livingbody.isPrepare": !0
        });
        var e = {
            url: "".concat(wx.verifyBaseUrl, "/api/common/upLoadWxAppFile?BizToken=").concat(this.data.token),
            filePath: i,
            data: {
                file: i
            }
        };
        this.uploadTheVideo(e, o);
    },
    uploadTheVideo: function(i, o) {
        var e = this;
        this.returnAllCheckNetWork(function(t) {
            "wifi" !== t && "none" !== t ? wx.showModal({
                title: "提示",
                content: "视频大约".concat(o, "，在移动网络环境下上传会产生手机流量，确认继续？"),
                confirmText: "继续",
                confirmColor: "#2d72f1",
                success: function(t) {
                    t.confirm ? e.uploadTheVideoMain(i, o) : e.setData({
                        "livingbody.isShowGuide": !0,
                        "livingbody.isShowCamera": !1,
                        "livingbody.isShowProcess": !1,
                        isNotCamera: !0,
                        "livingbody.isPrepare": !0
                    });
                }
            }) : e.uploadTheVideoMain(i, o);
        });
    },
    uploadTheVideoMain: function(i, o) {
        var e = this;
        t.uploadFile.call(this, i, function(t) {
            if (console.log("上传视频成功"), console.log(t), 0 === t.ErrorCode) console.log("uploadSuccess"), 
            console.log(t.Data.Data.MediaKey), e.livingbodyVerify(t.Data.Data.MediaKey); else {
                var a = "网络异常，上传视频失败";
                101 !== t.ErrorCode && (a = t.ErrorMsg), wx.showModal({
                    title: "提示",
                    content: a,
                    showCancel: !1,
                    confirmText: "重试",
                    confirmColor: "#2d72f1",
                    success: function(t) {
                        t.confirm && e.uploadTheVideo(i, o);
                    }
                });
            }
        });
    },
    livingbodyVerify: function(i) {
        var o = this, e = this.data.cmsConfig.livingbodyType, n = "/api/liveness/lipliveness";
        1 === e ? n = "/api/liveness/actionliveness" : 2 === e && (n = "/api/liveness/silentliveness");
        var c = {
            url: "".concat(n, "?BizToken=").concat(this.data.token),
            data: {
                MediaKey: i
            },
            reTry: {
                tryCount: 3
            }
        };
        t.request(c, function(e) {
            if (console.log(e), 0 === e.ErrorCode) o.data.cmsConfig.page.success.isAutoSkip ? o.exitVerify({}) : o.setData({
                curPage: 6
            }); else if (-107 === e.ErrorCode || 101 === e.ErrorCode) wx.showModal({
                title: "提示",
                content: e.error_msg,
                showCancel: !1,
                confirmText: "重试",
                confirmColor: "#2d72f1",
                success: function(e) {
                    e.confirm && o.livingbodyVerify(i);
                }
            }), t.reportError(a.livingbodyVerifyErr, e, {
                apiUrl: "".concat(wx.verifyBaseUrl).concat(n, "?BizToken=").concat(o.data.token)
            }); else if (s.includes(e.ErrorCode)) o.exitVerifyFail(e), t.reportError(a.exitVerifyFail, e, {
                apiUrl: "".concat(wx.verifyBaseUrl).concat(n, "?BizToken=").concat(o.data.token)
            }); else {
                void 0 === e.ErrorCode && (e.ErrorCode = "9999", r[9999].tips1 = e.Data);
                var c = e.ErrorCode + "", d = {};
                (d = o.data.cmsConfig.failInfo && o.data.cmsConfig.failInfo[c] ? o.data.cmsConfig.failInfo[c] : r[c] ? r[c] : {
                    img: "",
                    msg: e.ErrorMsg,
                    error_code: e.ErrorCode
                }).Data = e.Data || {}, console.log("failInfo: ", d), o.setData({
                    failInfo: d,
                    curPage: 5
                }), t.reportError(a.livingbodyVerifyErr, e, {
                    apiUrl: "".concat(wx.verifyBaseUrl).concat(n, "?BizToken=").concat(o.data.token)
                });
            }
        });
    },
    failReVerify: function() {
        if (console.log(this.data.failInfo), "无效请求" !== this.data.failInfo.msg && 14 !== this.data.failInfo.error_code) {
            var i = 4;
            if (n.includes(this.data.failInfo.error_code)) {
                if (this.data.cmsConfig.isHideOcrPage) return void this.exitVerifyFail({
                    Token: this.data.token,
                    ErrorCode: this.data.failInfo.error_code,
                    ErrorMsg: this.data.failInfo.msg
                });
                i = 3, this.setData({
                    "ocr.isShowTakePhoto": !1,
                    "ocr.isShowResult": !1,
                    "ocr.isShowGuide": !0,
                    "ocr.isShowPhotoPreView": !1,
                    "ocr.isPhotoFromCamera": !1,
                    "ocr.isFrontIdCard": !0,
                    "ocr.hintError": "",
                    "ocr.hintErrorResult": "",
                    "ocr.isForbiddenManualBtn": !0,
                    "ocr.isForbiddenResultBtn": !1,
                    "ocr.idcard": "",
                    "ocr.idname": "",
                    "ocr.idaddress": "",
                    "ocr.tempImagePath": "",
                    "ocr.ocrTitle": "请拍摄身份证人像面",
                    "ocr.isToolsShow": !0
                }), this.data.ocr.isEditTheOcrIsManualInput && this.setData({
                    "cmsConfig.page.ocr.isManualInput": !0
                });
            }
            this.setData({
                curPage: i,
                "livingbody.isShowGuide": !0,
                "livingbody.isShowCamera": !1,
                "livingbody.isShowProcess": !1,
                "livingbody.isShowDialog": !1,
                "livingbody.livingbodyNumber": "",
                "livingbody.isNotPrepareOk": !0,
                "livingbody.getCodeErrMsg": "",
                "livingbody.livingbodyTitle": "请保持正脸对准框内",
                "livingbody.isPrepare": !0,
                "livingbody.curNumberStatus": [ "verifyCurrentNumber", "", "", "" ],
                "livingbody.curNumber": [ "·", "·", "·", "·" ],
                "livingbody.isActionSeqNormal": !0,
                "livingbody.livingbodyActionText": "",
                "livingbody.livingbodySilentText": "",
                "livingbody.uploadProcess": 0
            }), this.preLivingbodyExec();
        } else this.exitVerifyFail({
            ErrorCode: 14,
            ErrorMsg: "由于活体验证时出现网络异常，导致无效请求，需要您重新验证，验证时请保持网络畅通！"
        });
    },
    successGoToNext: function() {
        this.exitVerify({});
    },
    verifyBackToIndex: function() {
        var i = {};
        i.Token = this.data.token, i.ErrorCode = -999, i.ErrorMsg = "返回首页成功，如多次验证不通过，可将当前页面截图提供给相关工作人员排查问题 " + this.data.bizData.appid + " | " + i.token, 
        this.exitVerifyFail(i);
    },
    switchfailModal: function() {
        this.setData({
            "failInfo.is_modal_showing": !this.data.failInfo.is_modal_showing
        });
    },
    ocrCameraError: function(i) {
        console.log("ocrCameraError", i);
    },
    bindstop: function(i) {
        console.log(i);
    }
});