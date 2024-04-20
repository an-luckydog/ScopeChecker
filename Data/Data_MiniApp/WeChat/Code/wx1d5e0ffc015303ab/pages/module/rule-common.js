(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/module/rule-common" ], {
    "0e19": function(e, n, t) {
        (function(e) {
            var a = t("4ea4");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = a(t("2eee")), u = a(t("c973")), o = t("0488"), c = t("64da"), d = {
                data: function() {
                    return {
                        ruleUrl: ""
                    };
                },
                onLoad: function(n) {
                    e.showLoading({
                        title: ""
                    });
                },
                created: function() {
                    this.getRuleImg();
                },
                methods: {
                    imgLoad: function(n) {
                        n.detail && e.hideLoading();
                    },
                    getRuleImg: function() {
                        var n = this;
                        return (0, u.default)(r.default.mark(function t() {
                            var a, u, d, i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return a = {
                                        skuKey: getApp().globalData.sweepReply.skukey,
                                        projectServerName: c.projectServerName
                                    }, t.next = 3, (0, o.requestPost)("/adPub/actInfo", a);

                                  case 3:
                                    u = t.sent, d = u.result, i = u.reply, 0 == d.code && i && i.picUrl ? n.ruleUrl = i.picUrl : (e.hideLoading(), 
                                    e.navigateBack());

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            n.default = d;
        }).call(this, t("543d").default);
    },
    "5be2": function(e, n, t) {},
    afdd: function(e, n, t) {
        var a = t("5be2");
        t.n(a).a;
    },
    b123: function(e, n, t) {
        (function(e, n) {
            var a = t("4ea4");
            t("a7b2"), a(t("66fd"));
            var r = a(t("d724"));
            e.__webpack_require_UNI_MP_PLUGIN__ = t, n(r.default);
        }).call(this, t("bc2e").default, t("543d").createPage);
    },
    b51a: function(e, n, t) {
        t.r(n);
        var a = t("0e19"), r = t.n(a);
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(u);
        n.default = r.a;
    },
    bad8: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    d724: function(e, n, t) {
        t.r(n);
        var a = t("bad8"), r = t("b51a");
        for (var u in r) [ "default" ].indexOf(u) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        t("afdd");
        var o = t("f0c5"), c = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    }
}, [ [ "b123", "common/runtime", "common/vendor" ] ] ]);