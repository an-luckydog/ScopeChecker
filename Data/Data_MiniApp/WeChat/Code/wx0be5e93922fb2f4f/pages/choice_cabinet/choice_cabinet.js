var t = require("../../@babel/runtime/helpers/interopRequireDefault").default, e = t(require("../../utils/http.js")), a = t(require("../../utils/config.js")), i = getApp();

Page({
    data: {
        loginState: !1,
        phoneState: !1,
        rejectPhone: !1,
        timeIndex: 1,
        timeVal: "",
        timeChoose: 1,
        columns: [],
        params: {
            name: "",
            tel: "",
            cabinet: "",
            timeVal: 1,
            storeId: null,
            integralRuleCondition: ""
        },
        dataObj: {},
        storeInfo: {},
        cabinetList: {},
        chenckedCabinet: "",
        total: 0,
        pricesList: [],
        time: "",
        isTimeShow: !1,
        isIntegralShow: !1,
        isCostShow: !1,
        isAgreementShow: !1,
        isCheckCabinetShow: !0,
        activeCheckedFlag: null,
        numArr: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ],
        tabs: [ {
            name: "全部"
        }, {
            name: "大柜"
        }, {
            name: "中柜"
        }, {
            name: "小柜"
        } ],
        tabsCont: [ {
            name: "全部内容"
        }, {
            name: "大柜内容"
        }, {
            name: "中柜内容"
        }, {
            name: "小柜内容"
        } ],
        position: "top",
        activeIndex: 0,
        cabinetTitle: e.default.imgUrl + "/choice/title.png",
        cabinetBg: e.default.imgUrl + "/choice/bg.png",
        isFullSucreen: i.globalData.bottom,
        imgUrl: e.default.imgUrl,
        background: [],
        indicatorDots: !0,
        vertical: !1,
        autoplay: !1,
        interval: 2e3,
        duration: 500,
        noSelect: e.default.imgUrl + "/info/no-check.png",
        hasSelect: e.default.imgUrl + "/info/check.png",
        selectIndex: [ {
            sureid: !0
        } ],
        userInfo: {},
        activeIndexFlg: 0,
        loading: !1,
        isRefresh: !1,
        minimumLease: 0,
        deductionNameList: [],
        deductionList: [],
        deductionFlag: !1,
        integralName: "",
        integralIndex: 0,
        totalIntegral: "",
        deductionIntegral: 0,
        integralGradeName: "",
        timeSatisfy: !1,
        ruleName: ""
    },
    toggleTab: function(t) {
        if (this.data.activeIndex === t.currentTarget.dataset.index) return !1;
        this.setData({
            activeIndex: t.currentTarget.dataset.index
        });
    },
    swiperChange: function(t) {
        var e = t.detail.current;
        this.setData({
            activeIndex: e
        });
    },
    onLoad: function(t) {
        console.log(t, "options"), this.setData({
            "params.storeId": t.storeId
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getDetailData({
            msg: ""
        });
        var t = this;
        wx.getStorage({
            key: "userInfo",
            success: function(e) {
                t.setData({
                    userInfo: e.data,
                    loginState: !0
                }), e.data.phone && t.setData({
                    phoneState: !0,
                    "params.tel": e.data.phone
                });
            },
            fail: function() {
                t.setData({
                    loginState: !1
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    selectRep: function(t) {
        var e = t.currentTarget.dataset.selectindex, a = this.data.selectIndex;
        a[e].sureid = !a[e].sureid, this.setData({
            selectIndex: a
        });
    },
    checkCabinetFunc: function(t) {
        var e = t.currentTarget.dataset.cell;
        0 == e.status && this.setData({
            activeCheckedFlag: t.currentTarget.dataset.index,
            "params.cabinet": e,
            activeIndexFlg: this.data.activeIndex
        });
    },
    startCheckFunc: function() {
        this.setData({
            isCheckCabinetShow: !0
        });
    },
    checkedSuccessCabinetFunc: function() {
        var t = this.data.params.cabinet, e = "";
        t ? 0 == t.status && (1 == t.sizeType && (e = "小柜"), 2 == t.sizeType && (e = "中柜"), 
        3 == t.sizeType && (e = "大柜"), this.setData({
            chenckedCabinet: e + "(" + t.cabinetNo + "号)",
            isCheckCabinetShow: !1
        }), this.data.time && this.countPriceFunc()) : wx.showToast({
            title: "请选择您租用的柜子",
            icon: "none",
            duration: 2e3
        });
    },
    closeCabinetFunc: function() {
        var t = null, e = "";
        this.data.chenckedCabinet ? (e = this.data.params.cabinet, t = this.data.activeCheckedFlag) : (e = "", 
        t = null), this.setData({
            "params.cabinet": e,
            isCheckCabinetShow: !1,
            activeCheckedFlag: t
        });
    },
    payClick: function() {
        0 != this.data.storeInfo.status ? this.data.params.cabinet.cabinetNo ? this.data.time ? this.data.params.name ? this.data.params.tel ? /^1\d{10}$/.test(this.data.params.tel) ? this.data.selectIndex[0].sureid ? this.subscribeMessageFunc() : wx.showToast({
            title: "请勾选用户协议",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "请填写正确的手机号",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "请填写联系方式！",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "请填写姓名！",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "请选择您租用的时间",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "请选择您租用的柜子",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "该门店已下线",
            icon: "none",
            duration: 3e3
        });
    },
    subscribeMessageFunc: function() {
        var t = "xKiEfyF0FXlpTkGj6SRfFHBNhKGeY_hMsxhT5KJei3Y", e = "MuhUGJu-2aMEuxS2k0o9dTPLfVe2GBQI4Nn0aidPl_s", a = this;
        wx.requestSubscribeMessage({
            tmplIds: [ t, e ],
            success: function(i) {
                console.log(i, "订阅成功"), "accept" == i[t] || "accept" == i[e] ? (wx.showToast({
                    title: "订阅成功"
                }), a.checkCabinet()) : (console.log(i, "订阅失败"), wx.showToast({
                    title: "订阅失败"
                }), a.checkCabinet());
            },
            fail: function(t) {
                console.error(t), a.checkCabinet();
            }
        });
    },
    checkCabinet: function() {
        var t = this, a = {
            cabinetId: this.data.params.cabinet.id
        };
        e.default.checkCabinet(a, !1).then(function(e) {
            300 == e.code ? (t.getDetailData({
                msg: e.msg
            }), t.setData({
                isRefresh: !0,
                activeCheckedFlag: null,
                activeIndexFlg: 0
            })) : t.payMoneyFunc();
        });
    },
    payMoneyFunc: function() {
        var t = this;
        this.setData({
            loading: !0
        });
        var a = this.data.params.integralRuleCondition, i = {};
        a && ((i = JSON.parse(JSON.stringify(a))).selectFlag = "Y");
        var n = {
            frontTotalAmount: this.data.total,
            memberId: this.data.userInfo.id,
            openId: this.data.userInfo.openId,
            memberPhone: this.data.params.tel,
            lockNo: this.data.params.cabinet.lockNo,
            cellNo: this.data.params.cabinet.cabinetNo,
            cabinetId: this.data.params.cabinet.id,
            materialId: this.data.params.cabinet.materialId,
            materialNo: this.data.params.cabinet.materialNo,
            materialVersion: this.data.params.cabinet.materialVersion,
            storeId: this.data.storeInfo.id,
            storeName: this.data.storeInfo.storeName,
            cellType: this.data.params.cabinet.sizeType,
            rentalTime: this.data.params.timeChoose,
            priceComment: this.data.storeInfo.priceComment,
            integralRuleConditionDTO: i
        };
        0 == this.data.total ? (console.log(t.data, "去支付金额", this.data.total), e.default.freeOrder(n, !1).then(function(e) {
            wx.redirectTo({
                url: "/pages/pay_success/pay_success?orderId=".concat(e, "&cabinetNo=").concat(t.data.params.cabinet.cabinetNo)
            }), t.setData({
                LoadingShow: !1,
                loading: !1
            });
        })) : e.default.goPay(n, !1).then(function(e) {
            var a, i = JSON.parse(e.pay), n = e.orderId;
            a = {
                timeStamp: i.timeStamp,
                package: i.package,
                paySign: i.paySign,
                appid: i.appId,
                nonceStr: i.nonceStr,
                signType: "MD5",
                success: function(e) {
                    wx.redirectTo({
                        url: "/pages/pay_success/pay_success?orderId=".concat(n, "&cabinetNo=").concat(t.data.params.cabinet.cabinetNo)
                    }), t.setData({
                        LoadingShow: !1
                    });
                },
                fail: function(t) {
                    wx.redirectTo({
                        url: "/pages/order_list/order_list?activeIndex=0"
                    });
                },
                complete: function(e) {
                    console.log(e, "zhifu3"), t.setData({
                        loading: !1
                    });
                }
            }, wx.requestPayment(a);
        });
    },
    openAddress: function(t) {
        var e = t.currentTarget.dataset.item.latitude, a = t.currentTarget.dataset.item.longitude, i = t.currentTarget.dataset.item.storeName;
        wx.navigateTo({
            url: "/pages/map/index?longitude=" + a + "&latitude=" + e + "&storeName=" + i
        });
    },
    getStoreListFunc: function() {
        wx.navigateTo({
            url: "/pages/store_list/store_list"
        });
    },
    bindNameInput: function(t) {
        this.setData({
            "params.name": t.detail.value
        });
    },
    bindTelInput: function(t) {
        this.setData({
            "params.tel": t.detail.value
        });
    },
    openCostFunc: function() {
        this.setData({
            isCostShow: !0
        });
    },
    closeCostFunc: function() {
        this.setData({
            isCostShow: !1
        });
    },
    openAgreeFunc: function() {
        this.setData({
            isAgreementShow: !0
        });
    },
    closeAgreementFunc: function() {
        this.setData({
            isAgreementShow: !1
        });
    },
    startTimeFunc: function() {
        this.setData({
            isTimeShow: !0
        });
    },
    sureTimeFunc: function() {
        var t = this.data.timeIndex;
        console.log(t, "timeIndex"), 1 == t && this.setData({
            timeVal: this.data.minimumLease + "小时",
            timeChoose: this.data.minimumLease
        }), this.data.params.cabinet.sizeType ? (this.setData({
            isTimeShow: !1,
            time: this.data.timeVal,
            "params.timeVal": t,
            "params.timeChoose": this.data.timeChoose,
            "params.integralRuleCondition": "",
            integralName: "",
            integralIndex: 0,
            deductionIntegral: 0
        }), this.countPriceFunc()) : wx.showToast({
            title: "请先选择您租用的柜子！",
            icon: "none",
            duration: 2e3
        });
    },
    closeTimeFunc: function() {
        this.setData({
            isTimeShow: !1,
            time: "",
            "params.integralRuleCondition": "",
            integralName: "",
            integralIndex: 0,
            deductionFlag: !1,
            timeSatisfy: !1
        });
    },
    onChange: function(t) {
        var e = t.detail, a = (e.picker, e.value), i = e.index;
        this.setData({
            timeIndex: i + 1,
            timeVal: a,
            timeChoose: Number(a.split("小时")[0])
        });
    },
    countPriceFunc: function() {
        var t = this.data.pricesList, e = this.data.params.timeChoose, a = this.data.params.cabinet.sizeType;
        if (t.length >= 1) {
            for (var i = 0, n = 0; n < t.length; n++) {
                var s = 0;
                e >= t[n].limitEnd && (s = this.calcPrice(a, t[n].limitEnd - t[n].limitStart, t[n])), 
                t[n].limitStart, e > t[n].limitStart && e <= t[n].limitEnd && (s = this.calcPrice(a, e - t[n].limitStart, t[n])), 
                i += s;
            }
            this.setData({
                total: i.toFixed(2)
            }), this.data.phoneState && this.data.params.tel && 0 != this.data.total ? (this.setData({
                timeSatisfy: !0
            }), this.getIntegralList()) : this.setData({
                timeSatisfy: !1
            });
        }
    },
    calcPrice: function(t, e, a) {
        var i = 0;
        switch (t) {
          case 1:
            i = a.smallPrice * e;
            break;

          case 2:
            i = a.midPrice * e;
            break;

          case 3:
            i = a.bigPrice * e;
        }
        return i;
    },
    getDetailData: function(t) {
        var e = this, i = t.msg;
        a.default.postRequest({
            url: "/store/detail",
            data: {
                storeId: this.data.params.storeId
            },
            notShowLoading: !1,
            header: "application/x-www-form-urlencoded"
        }).then(function(t) {
            for (var a = t.storeInfo.minimumLease, n = [], s = a, o = a + 30; s < o; s++) n.push(s + "小时");
            e.setData({
                columns: n,
                minimumLease: a
            }), i && wx.showToast({
                title: i,
                icon: "none",
                duration: 4e3
            }), 0 == t.storeInfo.status && wx.showToast({
                title: "该门店已下线",
                icon: "none",
                duration: 5e3
            });
            var r = t.cabinetList, c = [], d = [];
            for (var l in r) if (c[0] = {
                name: "全部"
            }, r[l].length > 0 && "all" != l) {
                var u = "";
                1 == l && (u = "小"), 2 == l && (u = "中"), 3 == l && (u = "大"), c.push({
                    name: u + "柜"
                }), d[0] = r.all, d.push(r[l]);
            }
            e.setData({
                dataObj: t,
                storeInfo: t.storeInfo,
                cabinetList: t.cabinetList,
                tabsCont: d,
                tabs: c,
                pricesList: t.priceList,
                background: t.fileInfos
            });
        });
    },
    getPriceLConfig: function() {
        var t = this;
        a.default.getRequest({
            url: "/order/price/list",
            data: {
                storeId: this.data.params.storeId
            },
            notShowLoading: !0
        }).then(function(e) {
            t.setData({
                pricesList: e
            });
        });
    },
    onGotUserInfo: function() {
        var t = this;
        wx.getUserProfile({
            desc: "用于完善会员资料",
            success: function(a) {
                wx.login({
                    success: function(i) {
                        if (i.code) {
                            wx.setStorageSync("loginCode", i.code);
                            var n = {
                                code: i.code
                            };
                            e.default.decode(n, !1).then(function(e) {
                                989 == e.code ? t.loginFuc(a) : (wx.setStorage({
                                    key: "userInfo",
                                    data: e
                                }), t.setData({
                                    loginState: !0,
                                    userInfo: e
                                }), e.phone ? t.setData({
                                    phoneState: !0,
                                    "params.tel": e.phone
                                }) : t.setData({
                                    phoneState: !1
                                }));
                            });
                        }
                    }
                });
            }
        });
    },
    loginFuc: function(t) {
        var a = this;
        wx.login({
            success: function(i) {
                var n = i;
                wx.setStorageSync("loginCode", n.code);
                var s = {
                    code: n.code,
                    signature: t.signature,
                    rawData: t.rawData,
                    encryptedData: t.encryptedData,
                    iv: t.iv
                };
                e.default.login(s, !1).then(function(t) {
                    wx.setStorage({
                        key: "userInfo",
                        data: t.data
                    }), a.setData({
                        loginState: !0,
                        userInfo: t.data
                    }), t.data.phone ? a.setData({
                        phoneState: !0,
                        "params.tel": t.data.phone
                    }) : a.setData({
                        phoneState: !1
                    });
                });
            }
        });
    },
    getPhoneNumber: function(t) {
        var a = this;
        t.detail.encryptedData && t.detail.iv ? wx.login({
            success: function(n) {
                if (n.code) {
                    wx.setStorageSync("loginCode", n.code);
                    var s = {
                        appid: i.globalData.appID,
                        iv: t.detail.iv,
                        encryptedData: t.detail.encryptedData,
                        code: n.code
                    };
                    e.default.getPhone(s, !1).then(function(t) {
                        a.setData({
                            "params.tel": t.phone
                        }), wx.setStorage({
                            key: "userInfo",
                            data: t
                        }), a.setData({
                            phoneState: !0
                        }), 0 != a.data.total && (a.setData({
                            timeSatisfy: !0
                        }), a.getIntegralList());
                    }).catch(function() {
                        a.setData({
                            phoneState: !1
                        });
                    });
                }
            }
        }) : this.setData({
            rejectPhone: !0
        });
    },
    getIntegralList: function() {
        var t = this;
        e.default.getIntegralList({
            storeId: this.data.storeInfo.id,
            phone: this.data.params.tel
        }, !1).then(function(e) {
            var a = e.filter(function(t) {
                return "Y" === t.useAbleFlag;
            });
            if (0 === a.length) t.setData({
                deductionFlag: !1,
                deductionList: [],
                deductionNameList: [],
                deductionIntegral: 0
            }); else {
                a.unshift({
                    freeTime: "不使用抵扣"
                }), t.setData({
                    deductionFlag: !0,
                    deductionList: a,
                    totalIntegral: a[1].surplusPoint,
                    integralGradeName: a[1].integralGradeName,
                    ruleName: a[1].ruleName
                });
                var i = [];
                a.forEach(function(t) {
                    i.push(t.freeTime);
                }), t.setData({
                    deductionNameList: i
                });
            }
        });
    },
    integralSelect: function() {
        this.setData({
            isIntegralShow: !0
        });
    },
    sureIntegralFunc: function() {
        var t = this.data, e = t.deductionList, a = t.integralIndex;
        this.setData({
            isIntegralShow: !1,
            "params.integralRuleCondition": 0 == a ? "" : e[a],
            integralName: e[a].freeTime,
            deductionIntegral: e[a].integralCore || 0
        }), this.integralCountPriceFn();
    },
    closeIntegralFunc: function() {
        this.setData({
            isIntegralShow: !1
        });
    },
    onIntegralChange: function(t) {
        var e = t.detail, a = (e.picker, e.value, e.index);
        this.setData({
            integralIndex: a
        });
    },
    integralCountPriceFn: function() {
        var t = this, a = this.data.params.integralRuleCondition, i = {};
        a && ((i = JSON.parse(JSON.stringify(a))).selectFlag = "Y"), e.default.getPriceAfterDeduction({
            cellType: this.data.params.cabinet.sizeType,
            rentalTime: this.data.params.timeChoose,
            integralRuleConditionDTO: i,
            storeId: this.data.storeInfo.id
        }, !1).then(function(e) {
            t.setData({
                total: e.toFixed(2)
            });
        });
    }
});