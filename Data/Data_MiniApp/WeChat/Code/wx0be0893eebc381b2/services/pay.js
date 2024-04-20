var e = require("../@babel/runtime/helpers/classCallCheck"), n = require("../@babel/runtime/helpers/createClass"), t = require("../libs/api"), r = require("../pages/wxParse/wxParse").wxParse2, a = function() {
    function a() {
        e(this, a);
    }
    return n(a, [ {
        key: "pay",
        value: function(e) {
            return new Promise(function(n, r) {
                t.pay({
                    id: e
                }).then(function(e) {
                    var t = e.statusCode, a = e.data;
                    if (200 === t) {
                        var s = JSON.parse(a), o = s.timeStamp, i = s.nonceStr, u = s.prepay_id, c = s.signType, d = s.paySign;
                        wx.requestPayment({
                            nonceStr: i,
                            signType: c,
                            paySign: d,
                            timeStamp: o + "",
                            package: "prepay_id=".concat(u),
                            success: function() {
                                return n({
                                    prepay_id: u
                                });
                            },
                            fail: function(e) {
                                return r(e);
                            }
                        });
                    } else console.log("request pay failed."), r("request pay failed.");
                }).catch(function(e) {
                    return r(e);
                });
            });
        }
    }, {
        key: "sendMessage",
        value: function(e) {
            var n = e.prepayId, r = e.payNum, a = e.title;
            return new Promise(function(e, s) {
                var o = wx.getStorageSync("openId");
                t.sendMessage({
                    openId: o,
                    prepayId: n,
                    payNum: r,
                    title: a
                }).then(function(n) {
                    var t = n.statusCode, r = n.data.state;
                    200 === t && 0 === r ? (console.log("order send message success."), e("order send message success.")) : (console.log("order send message failed."), 
                    s("order send message failed."));
                }).catch(function(e) {
                    return s(e);
                });
            });
        }
    }, {
        key: "getAgreementTips",
        value: function(e) {
            return new Promise(function(n, a) {
                wx.showLoading({
                    title: "加载中"
                }), t.getAgreementTips({
                    payNum: e
                }).then(function(e) {
                    var t = e.statusCode, s = e.data, o = s.code, i = s.data;
                    if (wx.hideLoading(), 200 === t && 200 === o) {
                        var u = i.reduce(function(e, n) {
                            var t = n.tips;
                            return t && t.forEach(function(e) {
                                var n = e.content;
                                console.log(r), n && (e.content = r(n));
                            }), e[n.status] = n, e;
                        }, {}), c = Object.assign({
                            length: Object.keys(u)
                        }, u);
                        n({
                            reminderData: c
                        });
                    } else console.log("request getAgreementTips failed."), a("request getAgreementTips failed.");
                }).catch(function(e) {
                    return a(e);
                });
            });
        }
    }, {
        key: "cancelOrder",
        value: function(e) {
            return new Promise(function(n, r) {
                t.cancelOrder({
                    orderId: e
                }).then(function(e) {
                    var t = e.statusCode, a = e.data, s = a.code, o = a.message;
                    200 === t && 200 === s ? n() : r(o);
                }).catch(function(e) {
                    return r(e);
                });
            });
        }
    }, {
        key: "deleteOrder",
        value: function(e) {
            return new Promise(function(n, r) {
                t.deleteOrder({
                    orderId: e
                }).then(function(e) {
                    var t = e.statusCode, a = e.data, s = a.code, o = a.message;
                    200 === t && 200 === s ? n() : r(o);
                }).catch(function(e) {
                    return r(e);
                });
            });
        }
    } ]), a;
}();

module.exports = new a();