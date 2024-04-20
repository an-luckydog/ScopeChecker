(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activitys/task" ], {
    "0540": function(t, i, e) {
        var n = e("f03b");
        e.n(n).a;
    },
    "1ad3": function(t, i, e) {
        e.d(i, "b", function() {
            return n;
        }), e.d(i, "c", function() {
            return c;
        }), e.d(i, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    "5abf": function(t, i, e) {
        e.r(i);
        var n = e("66f4"), c = e.n(n);
        for (var a in n) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(i, t, function() {
                return n[t];
            });
        }(a);
        i.default = c.a;
    },
    "66f4": function(t, i, e) {
        (function(t) {
            var n = e("4ea4");
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var c = n(e("2eee")), a = n(e("c973")), s = e("9b31");
            function o(t, i) {
                var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!e) {
                    if (Array.isArray(t) || (e = function(t, i) {
                        if (t) {
                            if ("string" == typeof t) return f(t, i);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? f(t, i) : void 0;
                        }
                    }(t)) || i && t && "number" == typeof t.length) {
                        e && (t = e);
                        var n = 0, c = function() {};
                        return {
                            s: c,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: c
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        e = e.call(t);
                    },
                    n: function() {
                        var t = e.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        o = !0, a = t;
                    },
                    f: function() {
                        try {
                            s || null == e.return || e.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function f(t, i) {
                (null == i || i > t.length) && (i = t.length);
                for (var e = 0, n = new Array(i); e < i; e++) n[e] = t[e];
                return n;
            }
            e("0488");
            var g = {
                data: function() {
                    return {
                        loaded: !1,
                        count: 0,
                        imglist: [],
                        daytimeBigImg: [ "https://xcxsite.vjifen.com/v/static/qp120/index/gif/_.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/youlun.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/__2.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/__3.gif" ],
                        nightBigImg: [ "https://xcxsite.vjifen.com/v/static/qp120/index/gif/boat3.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/yanhua(1).gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/yanhua(2).gif" ],
                        daytimeImg: [ "https://xcxsite.vjifen.com/v/static/qp120/index/gif/qiting.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/caipian.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/boat5.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/boat2.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/boat1.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/ren_1.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/__5.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/qiqiu_day.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/_1.gif" ],
                        nightImg: [ "https://xcxsite.vjifen.com/v/static/qp120/index/gif/120.png", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/qiqiu_black.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/ren_ye.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/boat4.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/boat1 (2).gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/boat1_2.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/car.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/cartalk_1.gif", "https://xcxsite.vjifen.com/v/static/qp120/index/gif/yanhua(3).gif" ],
                        gifimg: [ "https://xcxsite.vjifen.com/v/static/qp120/index/icon_1.png", "https://xcxsite.vjifen.com/v/static/qp120/index/icon_3.png", "https://xcxsite.vjifen.com/v/static/qp120/index/icon_4.png" ],
                        imgLoadOssNightList: [ "http://ossxcs.vjifen.com/qp120xm/yejianyoulun.gif", "http://ossxcs.vjifen.com/qp120xm/yejianyanhua1.gif", "http://ossxcs.vjifen.com/qp120xm/yejianyanhua2.gif" ],
                        imgLoadOssList: [ "http://ossxcs.vjifen.com/qp120xm/wurenji.gif", "http://ossxcs.vjifen.com/qp120xm/qiqiu.gif", "http://ossxcs.vjifen.com/qp120xm/tiaosan.gif", "http://ossxcs.vjifen.com/qp120xm/youlun.gif" ],
                        percent: 5,
                        times: 1,
                        timething: null,
                        active: !1,
                        pageLoading: !1,
                        isLoadImg: "1",
                        optUrl: "",
                        provinceCode: "",
                        bgday: 1,
                        newImgs: [ "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/new-daybg1.jpg", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/dayfeiting.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/dayhaiou.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/dayluoye.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/daypubu1.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/daypubu2.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/dayqiqiu.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/daysan.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/daychuan3.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/daychuan4.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/daychuan1.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/daychuan2.gif" ],
                        newNightImgs: [ "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/new-nightbg1.jpg", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/nightfeiting.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/nighthaiou.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/nightpubu1.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/nightpubu2.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/nightqiqiu.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/kmd.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/nightchuan3.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/nightchuan4.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/nightchuan1.gif", "https://xcxsite.vjifen.com/v/static/qp120/qp-120th-02/index/index-new-gif/nightchuan2.gif" ]
                    };
                },
                watch: {
                    count: function(t, i) {
                        t === this.urls.length && (console.log("所有图片加载完毕(包含加载失败的图片)"), console.log(this.count, "------------"), 
                        this.loaded = !0);
                    }
                },
                onLoad: function(i) {
                    var e = this;
                    return (0, a.default)(c.default.mark(function i() {
                        var n, a;
                        return c.default.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return (n = t.getStorageSync("projectServerName") || "") && (getApp().globalData.projectServerName = n), 
                                i.next = 4, e.handleGetLoadImg();

                              case 4:
                                e.isLoadImg = i.sent, e.pageLoading = t.getStorageSync("loading") || !1, a = "/pages_120th/index/index?isLoadImg=".concat(e.isLoadImg), 
                                e.provinceCode && (a = "/pages_120th/index/index?isLoadImg=".concat(e.isLoadImg, "&provinceCode=").concat(e.provinceCode)), 
                                e.optUrl = a, e.pageLoading ? e.handleGoIndex() : (1 === e.bgday ? e.gifimg = e.gifimg.concat(e.newImgs) : 2 === e.bgday && (e.gifimg = e.gifimg.concat(e.newNightImgs)), 
                                e.preLoad());

                              case 10:
                              case "end":
                                return i.stop();
                            }
                        }, i);
                    }))();
                },
                onShow: function() {},
                methods: {
                    handleHoursInit: function(t) {
                        var i = "", e = "";
                        t ? (i = new Date(t).getHours(), e = new Date(t).getMinutes()) : (i = new Date().getHours(), 
                        e = new Date().getMinutes()), this.bgday = i < 7 || 19 == i && e >= 3 || i > 19 ? 2 : 1;
                    },
                    handleGoIndex: function() {
                        t.reLaunch({
                            url: this.optUrl
                        });
                    },
                    handleGetLoadImg: function() {
                        var t = this;
                        return new Promise(function(i, e) {
                            (0, s.requestPost)("/user/queryLoadImageSwitch", {}).then(function(e) {
                                t.handleHoursInit(e.replyTime || ""), i(e.reply || "1");
                            }).catch(function(t) {
                                i("0");
                            });
                        });
                    },
                    time: function() {
                        var t = this;
                        this.timething = setInterval(function() {
                            t.times++, t.times >= 10 && clearInterval(t.timething);
                        }, 1e3);
                    },
                    preLoad: function() {
                        var i = this, e = this, n = 0, c = [];
                        this.timething ? clearInterval(this.timething) : this.time(), e.urls = e.gifimg;
                        try {
                            var a, s = o(e.urls);
                            try {
                                var f = function() {
                                    var i = a.value;
                                    c.push(new Promise(function(c, a) {
                                        t.getImageInfo({
                                            src: i,
                                            success: function(t) {
                                                n++, c(!0), e.count = n;
                                            },
                                            fail: function(t) {
                                                n++, e.count = n, c(!1);
                                            },
                                            complete: function() {
                                                var t = Math.floor(e.count / e.urls.length * 100);
                                                t > 5 && (e.percent = t);
                                            }
                                        });
                                    }));
                                };
                                for (s.s(); !(a = s.n()).done; ) f();
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                s.e(t);
                            } finally {
                                s.f();
                            }
                            Promise.all(c).then(function(e) {
                                t.setStorageSync("loading", !0), i.active = !0, setTimeout(function() {
                                    i.handleGoIndex();
                                }, 1800);
                            }).catch(function(t) {
                                i.handleGoIndex();
                            });
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            this.handleGoIndex(), console.log("停止加载");
                        }
                    }
                }
            };
            i.default = g;
        }).call(this, e("543d").default);
    },
    "6aab": function(t, i, e) {
        (function(t, i) {
            var n = e("4ea4");
            e("a7b2"), n(e("66fd"));
            var c = n(e("d744"));
            t.__webpack_require_UNI_MP_PLUGIN__ = e, i(c.default);
        }).call(this, e("bc2e").default, e("543d").createPage);
    },
    d744: function(t, i, e) {
        e.r(i);
        var n = e("1ad3"), c = e("5abf");
        for (var a in c) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(i, t, function() {
                return c[t];
            });
        }(a);
        e("0540");
        var s = e("f0c5"), o = Object(s.a)(c.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        i.default = o.exports;
    },
    f03b: function(t, i, e) {}
}, [ [ "6aab", "common/runtime", "common/vendor" ] ] ]);