(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "23be": function(e, t, n) {
        n.r(t);
        var r = n("e4a4"), o = n.n(r);
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        t.default = o.a;
    },
    "3dfd": function(e, t, n) {
        n.r(t);
        var r = n("23be");
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("5c0b");
        var i = n("f0c5"), c = Object(i.a)(r.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = c.exports;
    },
    "56d7": function(e, t, n) {
        (function(e) {
            n("6cdc");
            var t = i(n("66fd")), r = i(n("3dfd")), o = i(n("e884"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            n("c9c2"), n("9bd1"), n("cba4"), n("6acd"), n("5a65"), wx.__webpack_require_UNI_MP_PLUGIN__ = n, 
            t.default.config.productionTip = !1, r.default.mpType = "app", e(new t.default(a(a({}, r.default), {}, {
                store: o.default
            }))).$mount();
        }).call(this, n("543d").createApp);
    },
    "5c0b": function(e, t, n) {
        var r = n("cbcc");
        n.n(r).a;
    },
    cbcc: function(e, t, n) {},
    e4a4: function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = {
            globalData: {},
            onLaunch: function(e) {
                var t = this;
                console.warn("APP:onLaunch", new Date()), this.$util.checkVersion(), this.$service.app.getBaseConfigInfo({
                    hospitalId: this.$store.state.env.VUE_APP_ORGID
                }).then(function(e) {
                    var n, r, i = (null == e || null === (n = e.data) || void 0 === n ? void 0 : n.hospitalTag) === t.$CONSTANT.HOSPITAL.HOSPITAL_TAGS["朝聚"], c = (null == e || null === (r = e.data) || void 0 === r ? void 0 : r.hospitalTag) === t.$CONSTANT.HOSPITAL.HOSPITAL_TAGS["北辰"];
                    t.$store.commit("app/setBaseConfig", o(o({}, e.data), {}, {
                        isChaoJu: i,
                        isBeiChen: c
                    }));
                    var a = new Date().getTime();
                    t.$store.commit("app/setTimeDifference", e.data.timestamp ? a - e.data.timestamp : 0);
                }).catch(function() {}), this.$face.initVerify();
            },
            onShow: function(e) {
                var t, n;
                console.warn("APP:onShow", new Date(), this), this.$cache.set("forbiddenYibao", !0);
                var r = {
                    scene: e.scene || 1e3,
                    path: e.path || "",
                    query: e.query || {},
                    shareTicket: e.shareTicket || "",
                    referrerInfo: {
                        appId: (null === (t = e.referrerInfo) || void 0 === t ? void 0 : t.appId) || "",
                        extraData: (null === (n = e.referrerInfo) || void 0 === n ? void 0 : n.extraData) || {}
                    }
                };
                this.$store.commit("app/setOrigin", r), this.$store.state.user.accessToken && this.$IM.initNIM().then(function(e) {
                    console.log("APP onShow initNIM success", e);
                }).catch(function(e) {
                    console.log("APP onShow initNIM fail", e);
                });
            },
            onHide: function() {
                console.warn("APP:onHide", new Date()), this.$cache.set("forbiddenYibao", !1);
            }
        };
        t.default = c;
    }
}, [ [ "56d7", "common/runtime", "common/vendor" ] ] ]);