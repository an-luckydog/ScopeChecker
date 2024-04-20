var t = require("../@babel/runtime/helpers/objectSpread2"), e = getApp(), n = require("../utils/Base64");

require("../utils/util").encryptData;

module.exports = {
    getCommodityBaseById: function(n) {
        return new Promise(function(o, a) {
            e.post_ajax_course("/commodity/commodityBaseById", t(t({}, n), {}, {
                appType: 6,
                os: 9
            }), function(t) {
                0 === t.data.state ? o(t) : a();
            }, 2, null, a);
        });
    },
    getAgreementTemplateById: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/agreementTemplate/getAgreementTemplateById", t, function(t) {
                0 === t.data.state ? n(t.data.resInfo) : o();
            }, 2, o);
        });
    },
    getFindAuthorityListByCommodityId: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/authorityUsers/findAuthorityListByCommodityId", t, function(t) {
                0 === t.data.state ? n(t) : o();
            }, 2, o);
        });
    },
    getCommoditychapterlist: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/commodity/chapter/list", t, function(t) {
                0 === t.data.state ? n(t) : o();
            }, 2, o);
        });
    },
    getCommoditycomment: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/commodity/comment", t, function(t) {
                0 === t.data.state ? n(t) : o();
            }, 8, o);
        });
    },
    getCommoditybuystatus: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_course("/commodity/buy/status", t, function(t) {
                0 === t.data.state ? n(t) : o();
            }, 2, null, o);
        });
    },
    getCommoditycommodityStatus: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/commodity/commodityStatus", t, function(t) {
                0 === t.data.state ? n(t) : o();
            }, 2, o);
        });
    },
    getPayOrderpromotionCheck: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/payOrder/promotionCheck", t, function(t) {
                200 === t.statusCode ? n(t) : o();
            }, 2, o);
        });
    },
    getFindVoucherByUserIdAndType: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/pay/findVoucherByUserIdAndType", t, function(t) {
                0 === t.data.state ? n(t) : o();
            }, 8, o);
        });
    },
    getExchageCommodity: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/pay/exchageCommodity", t, function(t) {
                0 === t.data.state ? n(t.data.resInfo) : o();
            }, 8, o);
        });
    },
    getValidateBalance: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/pay/validateBalance", t, function(t) {
                0 === t.data.state ? n(t.data.resInfo) : o();
            }, 8, o);
        });
    },
    trackOclick: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
        return new Promise(function(a, r) {
            o || (o = {
                "content-type": "application/json;charset=utf-8"
            });
            var i = wx.getStorageSync("openId"), u = t, s = t.extendParam;
            delete t.extendParam, u.appType = u.appType ? u.appType : 1, u.platform = u.platform ? u.platform : 9, 
            u.channel = u.channel ? u.channel : "nomal", u.deviceId = i, u = e.appendParams(u), 
            u = e.getSign(u), t.signature = u, s && (t.extendParam = s);
            var c = {
                track: n.encode(JSON.stringify(t))
            };
            wx.request({
                url: e.ai_pur + "/track/v2/oclick",
                header: o,
                data: c,
                method: "POST",
                success: function(t) {
                    a(t);
                },
                fail: function() {
                    r(res);
                }
            });
        });
    },
    createOrderVoucher: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/voucher/voucher-c/save", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t.data) : o();
            }, 10, o);
        });
    },
    duiaDetail: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/user/duiaDetail", t, function(t) {
                200 === t.statusCode && 0 === t.data.state ? n(t.data.resInfo) : o();
            }, 1, o);
        });
    },
    getLoginToken: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/app/ra/lg", t, function(t) {
                0 === t.data.state && 200 === t.statusCode ? n(t.data) : o();
            }, 11, o);
        });
    },
    judgeTicket: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/app/ra/check", t, function(t) {
                200 === t.statusCode ? n(t.data) : o();
            }, 11, o);
        });
    },
    getOrderByVoucher: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/order/voucher-c/get", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 10, o);
        });
    },
    getOrderAddress: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/userMailing/orderAddress", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 10, o);
        });
    },
    checkComStatus: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/commodity/cAp/status", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 10, o);
        });
    },
    getDiscountList: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/discount/list", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 10, o);
        });
    },
    createOrder: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/order/createOrder", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 10, o);
        });
    },
    pay: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_course("", t, function(t) {
                200 === t.statusCode ? n(t) : o();
            }, 4, null, o);
        });
    },
    getAgreementTips: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/order/agreementTips", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 10, o);
        });
    },
    payOrderDetail: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/payOrder/detail", t, function(t) {
                200 === t.statusCode ? n(t) : o();
            }, 2, o);
        });
    },
    saveOrderOfOpenId: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/order/saveOrderOfOpenId", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 10, o);
        });
    },
    getLogisticList: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/payOrder/logisticListDetail", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 12, o);
        });
    },
    getMailAddress: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/payOrder/mailAddress", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 12, o);
        });
    },
    getOrderDetail: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/payOrder/orderDetail", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 12, o);
        });
    },
    remind: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/payOrder/remind", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 12, o);
        });
    },
    getOrderList: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/payOrder/orderList", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 12, o);
        });
    },
    cancelOrder: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/user/order/cancel", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 12, o);
        });
    },
    deleteOrder: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/user/order/delete", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 12, o);
        });
    },
    sendMessage: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/payOrder/message", t, function(t) {
                200 === t.data.code && 200 === t.statusCode ? n(t) : o();
            }, 2, o);
        });
    },
    checkDiscount: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax_token("/order/discount/check", t, function(t) {
                200 === t.statusCode ? n(t) : o();
            }, 10, o);
        });
    },
    findByCommodity: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/rm/findByCommodity", t, function(t) {
                200 === t.statusCode ? n(t) : o();
            }, 4, o);
        });
    },
    findBuyRecord: function(t) {
        return new Promise(function(n, o) {
            e.post_ajax("/rm/commodityNewRecord", t, function(t) {
                200 === t.statusCode ? n(t) : o();
            }, 4, o);
        });
    }
};