var e = require("../../../b/helpers/interopRequireDefault");

require("../../../b/helpers/Arrayincludes");

var t, r = e(require("../../../b/regenerator")), n = require("../../../b/helpers/asyncToGenerator"), i = require("../../../b/helpers/objectSpread2"), a = e(require("../../../miniprogram_npm/@limo/core/index.js")), s = require("../../../miniprogram_npm/@limo/container/behaviors/index"), o = require("../common-helpers/formatStyle"), m = require("../common-helpers/getMemberHead"), l = require("../common-helpers/memberHelper"), c = require("../common-helpers/memberCanvas"), u = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), p = [ "element-member-balance", "element-member-point", "element-member-coupon", "element-member-card", "element-member-identity", "element-member-progress", "element-member-head" ], d = "member-canvas-cache";

Component({
    behaviors: [ s.commonBehavior, s.limoShim ],
    properties: {
        loginCanvasConfig: {
            type: Object,
            value: {},
            observer: function(e) {
                if (!this.properties.needSecondRequest) {
                    var t = (e || {}).elements;
                    this.setElementList(t, "props");
                }
            }
        },
        feBasicResource: {
            type: String,
            value: "",
            observer: function() {
                this.formatPanelStyle();
            }
        },
        isLogin: {
            type: Boolean,
            value: !1,
            observer: function() {
                this.formatPanelStyle();
            }
        },
        needSecondRequest: {
            type: Boolean,
            value: !1,
            observer: function(e, t) {
                e && e !== t && this.getElementList(this.properties.businessData);
            }
        },
        isMemberCanvas: {
            type: Boolean,
            value: !0
        },
        loginAction: {
            type: Object,
            value: {}
        },
        businessData: {
            type: Object,
            value: {},
            observer: function(e, t) {
                e && JSON.stringify(e) !== JSON.stringify(t) && this.getElementList(e);
            }
        }
    },
    data: {
        elementList: [],
        componentStyle: "",
        showCanvas: !0
    },
    isLoading: !1,
    pageLifetimes: {
        show: function() {
            this.limoPageShow();
        }
    },
    attached: function() {
        this.limoAttached(), this.limoPageShow();
    },
    detached: function() {
        this.properties.isH5Preview || u.Observer.getInstance().unsubscribe("updateMemberCardId", t);
    },
    methods: {
        limoPageShow: function() {
            this.getElementList(this.properties.businessData);
        },
        limoAttached: function() {
            var e = this;
            this.setData({
                showCanvas: !a.default.getLimoRuntime().isH5
            });
            var r = this.properties.isMemberCanvas;
            if (a.default.getLimoRuntime().sendMV("b_eco_wdnvusa4_mv", {
                custom: {
                    canvas_type: Number(r),
                    id: this.id
                }
            }), !this.properties.isH5Preview) {
                var n = u.Observer.getInstance();
                t = function(t) {
                    var r;
                    e.getElementList(i(i({}, null == (r = e.properties) ? void 0 : r.businessData), {}, {
                        cardId: t
                    }));
                }, n.subscribe("updateMemberCardId", t);
            }
            this.getElementsFormStorage();
        },
        getElementList: function(e) {
            var t = this;
            return n(r.default.mark(function n() {
                var i, s, o, m, l, p, d, f;
                return r.default.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (t.isLoading || !t.properties.isMemberCanvas || !t.properties.needSecondRequest) {
                            r.next = 21;
                            break;
                        }
                        if (!e || !Object.keys(e).length) {
                            r.next = 20;
                            break;
                        }
                        return i = JSON.parse(t.properties.feBasicResource), s = i.variableMap, o = e.cardId, 
                        m = JSON.parse(e.memberElementNames), l = (0, c.generateGraphQL)(m, s || {}), t.isLoading = !0, 
                        r.prev = 4, r.next = 7, new Promise(function(e, t) {
                            a.default.getLimoRuntime().request({
                                method: "POST",
                                url: (0, u.getDefaultHost)() + "/api/v1/rmsmina/c/secondary/query",
                                data: {
                                    graphQLMap: {
                                        memberCanvasData: 'query {Member(cardId:"'.concat(o, '") {').concat(l, "}}")
                                    }
                                },
                                success: function(t) {
                                    return e(t.data);
                                },
                                fail: function(e) {
                                    return t(e);
                                },
                                complete: function(t) {
                                    return e(t.data);
                                }
                            });
                        });

                      case 7:
                        if (200 === (p = r.sent).code && p.data) {
                            r.next = 10;
                            break;
                        }
                        throw p.message;

                      case 10:
                        if (d = p.data.results.memberCanvasData.Member) {
                            r.next = 13;
                            break;
                        }
                        return r.abrupt("return");

                      case 13:
                        f = (0, c.formatMemberElements)(m, d), t.setElementList(f, "request", d, s), r.next = 20;
                        break;

                      case 17:
                        r.prev = 17, r.t0 = r.catch(4), t.setElementList([], "request"), u.Log.addError({
                            name: "会员画布二次接口请求失败",
                            msg: JSON.stringify(r.t0)
                        });

                      case 20:
                        t.isLoading = !1;

                      case 21:
                      case "end":
                        return r.stop();
                    }
                }, n, null, [ [ 4, 17 ] ]);
            }))();
        },
        getElementsFormStorage: function() {
            var e = this;
            this.properties.isMemberCanvas && this.properties.isLogin && (0, l.getStorageData)({
                key: d,
                success: function(t) {
                    e.setData({
                        elementList: t.length ? t : []
                    });
                }
            });
        },
        setElementList: function(e, t, r, n) {
            var s, l;
            if (e) {
                var u = "props" === t ? e : null != (s = null == (l = this.properties.loginCanvasConfig) ? void 0 : l.elements) ? s : [], f = [];
                u.forEach(function(a) {
                    var s = a.feBasicResource, l = a.elementName, u = {};
                    if (("request" !== t || (u = e.find(function(e) {
                        return e.elementName === l;
                    }), !p.includes(l) || u)) && s && l) {
                        var d = JSON.parse(s), h = d.elConfig, b = d.componentStyle, v = i(i(i(i({}, a), u), d), {}, {
                            elConfig: h || {}
                        });
                        if ("element-member-head" === l) {
                            var g = (0, m.queryMemberAvatar)(v.avatarUrl).headUrl;
                            v.img = g;
                        }
                        "element-rich-text" === l && r && n && (v.elConfig.content = (0, c.replaceVariable)(h.content, r, n, "it.defaultNickName")), 
                        f.push({
                            elementName: (0, c.formatElementName)(l),
                            componentStyle: (0, o.formatStyle)(b),
                            config: v
                        });
                    }
                }), a.default.getLimoRuntime().setStorage({
                    key: d,
                    data: {
                        data: f,
                        expireTime: Date.now()
                    }
                }), this.setData({
                    elementList: f
                });
            }
        },
        formatPanelStyle: function() {
            var e = this.properties, t = e.feBasicResource, r = e.isLogin, n = e.isMemberCanvas;
            if (t) {
                var a = JSON.parse(t), s = a.notLoginComponentStyle, m = a.loginComponentStyle, l = a.basicComponentStyle, c = n ? r ? m : s : l;
                this.setData({
                    componentStyle: (0, o.formatStyle)(i({}, c))
                });
            }
        },
        handleLogin: function() {
            var e = this.properties, t = e.loginAction, r = e.isLogin;
            t && !r && (0, u.tapActionHandler)(t, {
                compInst: this
            });
        },
        handleHotClick: function(e) {
            if (e && e.detail) {
                var t = e.detail, r = t.index, n = t.link, i = this.properties.isMemberCanvas;
                a.default.getLimoRuntime().sendMC("b_eco_wdnvusa4_mc", {
                    custom: {
                        canvas_type: Number(i),
                        index: r,
                        link: n,
                        id: this.id
                    }
                });
            }
        },
        compClick: function(e) {
            this.triggerEvent("decorationCompClick", e);
        }
    }
});