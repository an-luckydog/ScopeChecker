(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/zdmkefu" ], {
    "3b32": function(e, o, t) {
        t.r(o);
        var n = t("d8bf"), a = t("50fb");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(o, e, function() {
                return a[e];
            });
        }(r);
        t("b808");
        var d = t("f0c5"), s = Object(d.a)(a.default, n.b, n.c, !1, null, "9ee9adc2", null, !1, n.a, void 0);
        o.default = s.exports;
    },
    "50fb": function(e, o, t) {
        t.r(o);
        var n = t("d810"), a = t.n(n);
        for (var r in n) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(o, e, function() {
                return n[e];
            });
        }(r);
        o.default = a.a;
    },
    b808: function(e, o, t) {
        var n = t("bc67");
        t.n(n).a;
    },
    bc67: function(e, o, t) {},
    d810: function(e, o, t) {
        (function(e) {
            var n = t("4ea4");
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var a = n(t("2eee")), r = n(t("c973")), d = t("9b31"), s = {
                data: function() {
                    return {};
                },
                props: {
                    goodsInfo: {
                        default: null,
                        type: Object
                    },
                    orderInfo: {
                        default: null,
                        type: Object
                    },
                    showKefu: {
                        default: !0,
                        type: Boolean
                    }
                },
                methods: {
                    testkf: function() {
                        var o = this;
                        return (0, r.default)(a.default.mark(function t() {
                            var n, r, s, c, f, i, u, l, p, g, m, b, I, h, x, v, S, _, y, O;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = "", r = "", !getApp().globalData.userLocation) {
                                        t.next = 10;
                                        break;
                                    }
                                    return f = getApp().globalData.userLocation, i = f.longitude, u = f.latitude, t.next = 6, 
                                    (0, d.requestPost)("/user/queryAddress", {
                                        longitude: i,
                                        latitude: u
                                    });

                                  case 6:
                                    l = t.sent, n = (null === (s = l.reply.address) || void 0 === s ? void 0 : s.province) || "", 
                                    r = (null === (c = l.reply.address) || void 0 === c ? void 0 : c.city) || "", console.log(n, r);

                                  case 10:
                                    p = {}, g = {}, m = "https://tsingtao.soboten.com/chat/h5/v6/index.html?sysnum=970d32f53aff4d148cebe35cfa48ddf3&channelid=6", 
                                    console.log(n, r), g["8f43a1ef7b8d4b08b45928d546373a48"] = n, g["3c89eb26325843d7920b06d7adac2c45"] = r, 
                                    m += "&partnerid=" + (getApp().globalData.xcxOpenid || e.getStorageSync("xcxOpenid").xcxOpenid), 
                                    o.goodsInfo && (m += "&card_title=" + o.goodsInfo.goodsName, m += "&card_url=https://img.vjifen.com/images/vma/" + o.goodsInfo.goodsUrl.split(",")[0], 
                                    m += "&card_picture=https://img.vjifen.com/images/vma/" + o.goodsInfo.goodsUrl.split(",")[0], 
                                    m += "&card_note=" + o.goodsInfo.goodsPay / 100, p["商品id"] = o.goodsInfo.goodsId), 
                                    o.orderInfo && (m += "&order_status=0", b = "", -1 == o.orderInfo.exchangeStatus ? b = "待支付" : 0 == o.orderInfo.exchangeStatus ? 0 == o.orderInfo.expressStatus ? b = "待发货" : 1 == o.orderInfo.expressStatus ? b = "待收货" : 2 == o.orderInfo.expressStatus && (b = "已完成") : 1 == o.orderInfo.exchangeStatus ? b = "交易失败" : 2 == o.orderInfo.exchangeStatus ? b = "交易处理中" : 3 == o.orderInfo.exchangeStatus ? b = "订单已关闭" : 4 == o.orderInfo.exchangeStatus ? b = "退款中" : 5 == o.orderInfo.exchangeStatus ? b = "退款成功" : 6 == o.orderInfo.exchangeStatus ? b = "退款失败" : 7 == o.orderInfo.exchangeStatus ? b = "退款审核中" : 8 == o.orderInfo.exchangeStatus ? b = "退款处理中" : 9 == o.orderInfo.exchangeStatus ? b = "退款成功" : 10 == o.orderInfo.exchangeStatus && (b = "待提交交易物流"), 
                                    I = o.orderInfo.exchangeTime.split(".")[0], h = I.split(" ")[0].split("-")[0] - 0, 
                                    x = I.split(" ")[0].split("-")[1] - 1, v = I.split(" ")[0].split("-")[2] - 0, S = I.split(" ")[1].split(":")[0] - 0, 
                                    _ = I.split(" ")[1].split(":")[1] - 0, y = I.split(" ")[1].split(":")[2] - 0, O = new Date(h, x, v, S, _, y).getTime(), 
                                    m += "&order_code=" + o.orderInfo.exchangeId, m += "&order_url=https://img.vjifen.com/images/vma/" + o.orderInfo.goodsUrl.split(",")[0], 
                                    m += "&goods_count=" + o.orderInfo.exchangeNum, m += "&create_time=" + O, m += "&total_fee=" + o.orderInfo.exchangePay, 
                                    m += "&goods=" + JSON.stringify([ {
                                        name: o.orderInfo.goodsName,
                                        pictureUrl: "https://img.vjifen.com/images/vma/" + o.orderInfo.goodsUrl.split(",")[0]
                                    } ]), m += "&status_custom=" + b, p["下单时间"] = o.orderInfo.exchangeTime.split(".")[0], 
                                    p["订单号"] = o.orderInfo.exchangeId), m += "&params=" + JSON.stringify(p), m += "&customer_fields=" + JSON.stringify(g), 
                                    console.log("8887777", m), e.navigateTo({
                                        url: "/pages/module/webview?target=" + encodeURIComponent(m.trim())
                                    });

                                  case 23:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            o.default = s;
        }).call(this, t("543d").default);
    },
    d8bf: function(e, o, t) {
        t.d(o, "b", function() {
            return n;
        }), t.d(o, "c", function() {
            return a;
        }), t.d(o, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/zdmkefu-create-component", {
    "components/zdmkefu-create-component": function(e, o, t) {
        t("543d").createComponent(t("3b32"));
    }
}, [ [ "components/zdmkefu-create-component" ] ] ]);