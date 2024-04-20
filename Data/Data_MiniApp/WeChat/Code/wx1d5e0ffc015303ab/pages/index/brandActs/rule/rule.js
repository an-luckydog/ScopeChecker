(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/brandActs/rule/rule" ], {
    "18fa": function(a, e, l) {
        l.r(e);
        var t = l("63a7"), n = l.n(t);
        for (var i in t) [ "default" ].indexOf(i) < 0 && function(a) {
            l.d(e, a, function() {
                return t[a];
            });
        }(i);
        e.default = n.a;
    },
    "63a7": function(a, e, l) {
        (function(a) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var l = {
                data: function() {
                    return {
                        ruleImg: "",
                        loadEnd: !1,
                        ruleImg01: "",
                        ruleImg02: ""
                    };
                },
                onLoad: function(e) {
                    if (a.showLoading({
                        title: "加载中"
                    }), "spring" == e.type) this.ruleImg = getApp().globalData.imgUrl + "/hb2020/2.0/kaixiangRule202300724_new.png?v=1"; else if ("mayDay" == e.type) this.ruleImg = getApp().globalData.imgUrl + "/hb2020/rule_mayday.png"; else if ("dw" == e.type) this.ruleImg = getApp().globalData.imgUrl + "/hb2020/rule_dw.png"; else if ("8" == e.type) this.ruleImg = getApp().globalData.imgUrl + "/hb2020/bingdundunRule20230724.png"; else if ("2020" == e.type) this.ruleImg = getApp().globalData.imgUrl + "/hb2020/laoshanguize2022New.png"; else if ("laoshan2023" == e.type) this.ruleImg = getApp().globalData.imgUrl + "/hb2020/ruleLaoshan20230724.png"; else if ("active31-2023" == e.type) this.ruleImg = getApp().globalData.imgUrl + "/hb2020/2.0/laoshan20230724.png", 
                    this.ruleImg01 = getApp().globalData.imgUrl + "/hb2020/2.0/laoshan20231030-01.jpg", 
                    this.ruleImg02 = getApp().globalData.imgUrl + "/hb2020/2.0/laoshan20231030-02.jpg"; else switch (getApp().globalData.reply.activityVersion) {
                      case "8":
                        this.ruleImg = getApp().globalData.imgUrl + "/hb2020/bingdundunRule20230724.png";
                        break;

                      case "7":
                        "201609141-024" == getApp().globalData.reply.skukey || "201609141-023" == getApp().globalData.reply.skukey ? this.ruleImg = getApp().globalData.imgUrl + "/hb2020/laoshanguize2022New.png" : this.ruleImg = getApp().globalData.imgUrl + "/hb2020/rule_7.jpg";
                        break;

                      default:
                        this.ruleImg = getApp().globalData.imgUrl + "/hb2020/kaixiangRule2022New2.png";
                    }
                },
                onShareAppMessage: function() {
                    return {
                        title: "青岛啤酒乐享河北",
                        path: "/pages/index/index"
                    };
                },
                methods: {
                    back: function() {
                        a.navigateBack({
                            delta: 1
                        });
                    },
                    imgLoad: function(e) {
                        a.hideLoading(), this.loadEnd = !0;
                    }
                }
            };
            e.default = l;
        }).call(this, l("543d").default);
    },
    "7a07": function(a, e, l) {
        l.d(e, "b", function() {
            return t;
        }), l.d(e, "c", function() {
            return n;
        }), l.d(e, "a", function() {});
        var t = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    "8f16": function(a, e, l) {},
    cdc8: function(a, e, l) {
        var t = l("8f16");
        l.n(t).a;
    },
    d0ce: function(a, e, l) {
        l.r(e);
        var t = l("7a07"), n = l("18fa");
        for (var i in n) [ "default" ].indexOf(i) < 0 && function(a) {
            l.d(e, a, function() {
                return n[a];
            });
        }(i);
        l("cdc8");
        var g = l("f0c5"), u = Object(g.a)(n.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = u.exports;
    },
    fa49: function(a, e, l) {
        (function(a, e) {
            var t = l("4ea4");
            l("a7b2"), t(l("66fd"));
            var n = t(l("d0ce"));
            a.__webpack_require_UNI_MP_PLUGIN__ = l, e(n.default);
        }).call(this, l("bc2e").default, l("543d").createPage);
    }
}, [ [ "fa49", "common/runtime", "common/vendor" ] ] ]);