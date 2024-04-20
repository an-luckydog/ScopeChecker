(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/getOpenid/getOpenid" ], {
    "22d9": function(e, t, o) {
        o.r(t);
        var a = o("5f44"), n = o("fa26");
        for (var c in n) [ "default" ].indexOf(c) < 0 && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(c);
        var i = o("f0c5"), r = Object(i.a)(n.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = r.exports;
    },
    "281e": function(e, t, o) {
        (function(e) {
            var a = o("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(o("9523")), c = o("0488"), i = o("6fd5"), r = {
                data: function() {
                    return {
                        src: "",
                        payAppid: "",
                        status: "",
                        filterData: ""
                    };
                },
                onLoad: function(t) {
                    var o = getApp().globalData.curProvince || e.getStorageSync("curProvince");
                    if (console.log("curProvince"), console.log(getApp().globalData.curProvince), console.log(e.getStorageSync("curProvince")), 
                    console.log(o), o) {
                        var a = [ {
                            getType: "openid",
                            status: 1,
                            webViewSrc: "".concat(c.config.authUrl, "/wx3/u2mpFromSg?appid=").concat(o.appid)
                        }, {
                            getType: "hbopenid",
                            status: 2,
                            webViewSrc: "".concat(c.config.authUrl, "/wx3/u2mpFromSg?appid=").concat(o.payAppid)
                        }, {
                            getType: "vjfOpenid",
                            status: 3,
                            webViewSrc: "".concat(c.config.authUrl, "/wx3/u2mpFromSg?appid=").concat(o.vjfAppid)
                        } ], n = t.getIdType || "openid", r = (0, i.filterArr)("getType", n, a)[0];
                        this.filterData = r, this.src = r.webViewSrc, console.log("我是 获取 getOpenids 页面"), 
                        console.log(t), console.log(n), console.log(r), console.log(this.src);
                    }
                },
                methods: {
                    getOpenid: function(t) {
                        if (console.log(t), console.log(t.detail.data[0].openid), t.detail && t.detail.data[0].openid) {
                            var o = t.detail.data[0].openid, a = this.filterData.getType;
                            getApp().globalData[a] = o;
                            var c = (0, n.default)({}, a, o);
                            e.setStorageSync(a, c);
                        }
                    }
                }
            };
            t.default = r;
        }).call(this, o("543d").default);
    },
    "5f44": function(e, t, o) {
        o.d(t, "b", function() {
            return a;
        }), o.d(t, "c", function() {
            return n;
        }), o.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    f4a6: function(e, t, o) {
        (function(e, t) {
            var a = o("4ea4");
            o("a7b2"), a(o("66fd"));
            var n = a(o("22d9"));
            e.__webpack_require_UNI_MP_PLUGIN__ = o, t(n.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
    },
    fa26: function(e, t, o) {
        o.r(t);
        var a = o("281e"), n = o.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            o.d(t, e, function() {
                return a[e];
            });
        }(c);
        t.default = n.a;
    }
}, [ [ "f4a6", "common/runtime", "common/vendor" ] ] ]);