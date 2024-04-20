(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/module/userinfo" ], {
    1817: function(e, n, t) {
        t.r(n);
        var i = t("d8b9"), o = t.n(i);
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(a);
        n.default = o.a;
    },
    "4c05": function(e, n, t) {
        (function(e, n) {
            var i = t("4ea4");
            t("a7b2"), i(t("66fd"));
            var o = i(t("bca7"));
            e.__webpack_require_UNI_MP_PLUGIN__ = t, n(o.default);
        }).call(this, t("bc2e").default, t("543d").createPage);
    },
    "65a1": function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var i = function() {
            var e = this, n = (e.$createElement, e._self._c, e.isShowModify && 1 == e.modifyType ? e.nickName.length : null), t = e.isShowModify && 1 == e.modifyType ? e.nickName.length || 0 : null;
            e._isMounted || (e.e0 = function(n) {
                e.nickName = "";
            }, e.e1 = function(n) {
                e.isShowModify = !1;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    g0: n,
                    g1: t
                }
            });
        }, o = [];
    },
    "8e54": function(e, n, t) {},
    "967a": function(e, n, t) {
        var i = t("8e54");
        t.n(i).a;
    },
    bca7: function(e, n, t) {
        t.r(n);
        var i = t("65a1"), o = t("1817");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        t("967a");
        var r = t("f0c5"), d = Object(r.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = d.exports;
    },
    d8b9: function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = t("9b31"), o = {
                data: function() {
                    return {
                        isShowModify: !1,
                        modifyTitle: "设置昵称",
                        modifyType: 1,
                        nickName: "",
                        oldName: "",
                        headImgUrl: "",
                        maleHeadImgUrlAry: "",
                        femaleHeadImgUrlAry: ""
                    };
                },
                onLoad: function() {
                    this.queryHeadList();
                },
                methods: {
                    queryHeadList: function() {
                        var e = this;
                        (0, i.requestPost)("/user/userInfo", {}).then(function(n) {
                            if (0 == n.result.code && 0 == n.result.businessCode) {
                                var t, i = (null === (t = n.reply) || void 0 === t ? void 0 : t.userInfo) || {};
                                e.nickName = i.nickName || "", e.oldName = i.nickName || "", e.headImgUrl = i.headImgUrl || "", 
                                e.maleHeadImgUrlAry = i.maleHeadImgUrlAry || [], e.femaleHeadImgUrlAry = i.femaleHeadImgUrlAry || [];
                            }
                        });
                    },
                    updateUserInfo: function() {
                        var n = this;
                        e.showLoading({
                            title: "保存中",
                            mask: !0
                        }), (0, i.requestPost)("/user/updateUserMessage", {
                            headImgUrl: this.headImgUrl,
                            nickname: this.nickName || "微信用户"
                        }).then(function(t) {
                            0 == t.result.code && 0 == t.result.businessCode ? (e.showToast({
                                title: "保存成功",
                                complete: function() {
                                    n.isShowModify = !1;
                                }
                            }), n.oldName = n.nickName) : e.showToast({
                                title: "保存失败请重试",
                                icon: "error",
                                complete: function() {
                                    n.isShowModify = !1, n.nickName = n.oldName;
                                }
                            });
                        });
                    },
                    selectHead: function(e) {
                        this.headImgUrl = e;
                    },
                    showModify: function(e) {
                        this.isShowModify = !0, this.modifyType = e, this.modifyTitle;
                    }
                }
            };
            n.default = o;
        }).call(this, t("543d").default);
    }
}, [ [ "4c05", "common/runtime", "common/vendor" ] ] ]);