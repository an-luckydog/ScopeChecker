(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/health" ], {
    1396: function(t, e, n) {},
    "1d3d": function(t, e, n) {
        n.r(e);
        var i = n("cf1b"), a = n("769c");
        for (var l in a) [ "default" ].indexOf(l) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(l);
        n("ab75"), n("383d");
        var o = n("f0c5"), s = Object(o.a)(a.default, i.b, i.c, !1, null, "5c2acb52", null, !1, i.a, void 0);
        e.default = s.exports;
    },
    "2ec1": function(t, e, n) {
        (function(t) {
            n("6cdc"), i(n("66fd"));
            var e = i(n("1d3d"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    "383d": function(t, e, n) {
        var i = n("1396");
        n.n(i).a;
    },
    "769c": function(t, e, n) {
        n.r(e);
        var i = n("d10c"), a = n.n(i);
        for (var l in i) [ "default" ].indexOf(l) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(l);
        e.default = a.a;
    },
    "88c8": function(t, e, n) {},
    ab75: function(t, e, n) {
        var i = n("88c8");
        n.n(i).a;
    },
    cf1b: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return l;
        }), n.d(e, "a", function() {
            return i;
        });
        var i = {
            uImage: function() {
                return n.e("node-modules/uview-ui/components/u-image/u-image").then(n.bind(null, "9df5"));
            },
            uTag: function() {
                return n.e("node-modules/uview-ui/components/u-tag/u-tag").then(n.bind(null, "2ad6"));
            },
            uLineProgress: function() {
                return n.e("node-modules/uview-ui/components/u-line-progress/u-line-progress").then(n.bind(null, "392f"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, l = [];
    },
    d10c: function(t, e, n) {
        (function(t) {
            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = [ {
                name: "全部",
                index: 1
            }, {
                name: "就诊病历",
                index: 3
            }, {
                name: "住院病历",
                index: 4
            }, {
                name: "体检报告",
                index: 5
            }, {
                name: "检验检查",
                index: 7
            }, {
                name: "其他",
                index: 6
            } ], l = {
                components: {
                    HealthAll: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/health/HealthAll") ]).then(function() {
                            return resolve(n("5f2a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HealthCase: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/health/HealthCase") ]).then(function() {
                            return resolve(n("4b1e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    NonePage: function() {
                        n.e("components/health/NonePage").then(function() {
                            return resolve(n("e7c4"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HealthInspection: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/health/HealthInspection") ]).then(function() {
                            return resolve(n("852c"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HealthOther: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/health/HealthOther") ]).then(function() {
                            return resolve(n("b015"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    NoneFamily: function() {
                        n.e("components/health/NoneFamily").then(function() {
                            return resolve(n("3dbf"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    var t;
                    return i(t = {
                        imgUrl: this.$store.state.env.VUE_APP_RESOURCE_URL,
                        loading: !0,
                        currentIndex: 0,
                        dontFirstAnimation: !0,
                        familyId: "",
                        fmlList: [],
                        family: {},
                        timestamp: 0
                    }, "loading", {
                        getAll: !1
                    }), i(t, "tabList", a), i(t, "tabIndex", 1), i(t, "p", 0), i(t, "size", 10), i(t, "loaded", !1), 
                    i(t, "loadAll", !1), i(t, "data", {}), i(t, "noData", !1), t;
                },
                onLoad: function() {},
                onShow: function() {
                    if (!this.$util.isLogin()) return this.$util.toLogin(), !1;
                    this.getFamilyList();
                },
                onReachBottom: function() {
                    if (this.fmlList.length > 0) {
                        var t = !1;
                        switch (this.tabIndex) {
                          case 1:
                            t = !this.loadAll;
                            break;

                          case 2:
                            break;

                          case 3:
                            t = !this.loadAll;
                            break;

                          case 4:
                          case 5:
                            break;

                          case 6:
                          case 7:
                            t = !this.loadAll;
                        }
                        t && this.getAllHealthList();
                    }
                },
                onPullDownRefresh: function() {
                    this.fmlList.length > 0 ? (this.resetData(), this.getAllHealthList("Refresh")) : t.stopPullDownRefresh();
                },
                methods: {
                    goHealthUserInfoPage: function() {
                        var t = this.family;
                        if (!t.id) return this.$util.showToast("请先选择家人"), !1;
                        this.$Router.push({
                            path: "/pages/health/user/index",
                            query: t
                        });
                    },
                    changeTab: function(t) {
                        this.tabIndex = t, this.resetData();
                        var e = !1;
                        switch (t) {
                          case 1:
                          case 2:
                          case 3:
                          case 6:
                          case 7:
                            e = !0;
                        }
                        e && this.getAllHealthList();
                    },
                    swiperChange: function(t) {
                        this.dontFirstAnimation = !1, this.currentIndex = t.detail.current, this.fmlList.length > 0 && (this.family = this.fmlList[this.currentIndex], 
                        this.familyId = this.fmlList[this.currentIndex].familyId, this.resetData(), this.getAllHealthList());
                    },
                    resetData: function() {
                        this.p = 0, this.loaded = !1, this.loadAll = !1, this.data = {}, this.noData = !1;
                    },
                    getFamilyList: function() {
                        var t = this;
                        this.$cache.get("familyId") ? this.familyId = this.$cache.get("familyId") || "" : this.familyId = "", 
                        this.$util.showLoading(), this.$service.health.familyLists().then(function(e) {
                            t.fmlList = e.data.list, e.data.list.map(function(e, n) {
                                "1" === e.sex ? e.sex = "男" : "0" === e.sex && (e.sex = "女"), e.id == t.familyId && (t.currentIndex = n), 
                                e.percentage = Number(e.percentage);
                            }), t.$nextTick(function() {
                                this.fmlList && (this.family = this.fmlList[this.currentIndex], this.familyId = this.fmlList[this.currentIndex].familyId, 
                                this.resetData(), this.getAllHealthList());
                            });
                        }).finally(function() {
                            t.loading = !1, t.$util.hideLoading();
                        });
                    },
                    getAllHealthList: function() {
                        var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        if (!this.loadAll) {
                            this.p++;
                            var i = {
                                familyId: this.familyId,
                                type: this.tabIndex,
                                p: this.p,
                                size: this.size
                            };
                            this.$util.showLoading(), this.$service.health.allHealthList(i).then(function(t) {
                                var n, i = e.$util.deepClone(e.data);
                                switch (t.data.list.map(function(t) {
                                    t.familyId = t.familyId || e.familyId;
                                }), e.tabIndex) {
                                  case 1:
                                  case 3:
                                  case 6:
                                  case 7:
                                    var a = {}, l = new Set(t.data.list.map(function(t) {
                                        return t.measureTime;
                                    }));
                                    if (l.size) {
                                        var o;
                                        if (l.forEach(function(e) {
                                            a[e] = t.data.list.filter(function(t) {
                                                return t.measureTime === e;
                                            });
                                        }), 0 == (null === (o = Object.keys(i)) || void 0 === o ? void 0 : o.length)) i = e.$util.deepClone(a); else for (var s in a) i[s] ? i[s] = i[s].concat(a[s]) : i[s] = a[s];
                                        e.data = e.$util.deepClone(i);
                                    }
                                }
                                e.noData = 0 == (null === (n = Object.keys(e.data)) || void 0 === n ? void 0 : n.length), 
                                e.loaded = !0, e.p * e.size >= t.data.total && (e.loadAll = !0);
                            }).finally(function() {
                                e.$util.hideLoading(), n && t.stopPullDownRefresh();
                            });
                        }
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    }
}, [ [ "2ec1", "common/runtime", "common/vendor" ] ] ]);