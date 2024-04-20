Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../b/helpers/defineProperty"), a = require("../b/helpers/toConsumableArray");

require("../b/helpers/Arrayincludes");

var o = require("../b/helpers/objectSpread2"), i = require("../b/helpers/typeof"), e = [ "z-index", "flex" ], n = {
    zIndex: "z-index",
    marginTop: "margin-top",
    marginBottom: "margin-bottom",
    marginLeft: "margin-left",
    marginRight: "margin-right",
    paddingTop: "padding-top",
    paddingBottom: "padding-bottom",
    paddingLeft: "padding-left",
    paddingRight: "padding-right",
    background: "background",
    radius: "border-radius",
    borderBottomRightRadius: "border-bottom-right-radius",
    borderBottomLeftRadius: "border-bottom-left-radius",
    borderTopRightRadius: "border-top-right-radius",
    borderTopLeftRadius: "border-top-left-radius"
}, l = {
    marginVertical: [ n.marginTop, n.marginBottom ],
    marginHorizontal: [ n.marginLeft, n.marginRight ],
    paddingVertical: [ n.paddingTop, n.paddingBottom ],
    paddingHorizontal: [ n.paddingLeft, n.paddingRight ]
};

function r(t, a) {
    return isNaN(a) || e.includes(t) ? a : "".concat(function(t) {
        var a = Number(t);
        return Number.isNaN(a) ? 0 : a;
    }(a), "rpx");
}

function s(t) {
    var a = [];
    return Object.keys(t).forEach(function(o) {
        (function(t) {
            return null != t && "undefined" !== t && "null" !== t;
        })(t[o]) && (n[o] ? a.push("".concat(n[o], ":").concat(r(n[o], t[o]))) : l[o] ? l[o].forEach(function(i) {
            a.push("".concat(i, ":").concat(r(i, t[o])));
        }) : a.push("".concat(o, ":").concat(r(o, t[o]))));
    }), {
        layoutStyle: a.join(";")
    };
}

function u(t, a) {
    if (t === a) return !0;
    if (Number.isNaN(t) && Number.isNaN(a)) return !0;
    if (Array.isArray(t) && Array.isArray(a)) {
        if (t.length !== a.length) return !1;
        for (var o = 0; o < t.length; o++) if (!u(t[o], a[o])) return !1;
        return !0;
    }
    if ("object" == i(t) && "object" == i(a) && null !== t && null !== a) {
        var e = Object.keys(t), n = Object.keys(a);
        if (e.length !== n.length) return !1;
        for (var l = 0, r = e; l < r.length; l++) {
            var s = r[l];
            if (!a.hasOwnProperty(s) || !u(t[s], a[s])) return !1;
        }
        return !0;
    }
    return !1;
}

function d() {
    return !this.isH5 && !!this.getTabBar && !!this.getTabBar();
}

function c() {
    var t;
    return !(this.isH5 || !this.getTabBar) && (null == (t = this.getTabBar()) ? void 0 : t.data.showNativeTabBar);
}

function h(t, a) {
    try {
        var i, e = null == (i = this.moduleDefaultProperties) ? void 0 : i[t];
        if (!e) return a;
        var n = o({}, e);
        return Object.keys(n).forEach(function(t) {
            void 0 !== a[t] && null !== a[t] && (n[t] = a[t]);
        }), n;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return a;
    }
}

function m(t) {
    if ("string" != typeof t) return t || {};
    try {
        return JSON.parse(t || "{}");
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return {};
    }
}

var f = [ "view", "scroll-view" ];

function p(t, a) {
    var o = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    f.includes(t.name) && (i += 1), Array.isArray(t.extendList) && t.extendList.length > 0 && (t.extendList = t.extendList.map(function(t) {
        var a = t.name;
        return (t = h.call(o, t.name, t || {})).name = a, t;
    })), Array.isArray(t.modules) && t.modules.length > 0 && (t.modules = t.modules.filter(function(t) {
        var e;
        !o.isH5 && f.includes(t.name) && i > 0 && i < 5 && (t.name = "".concat(t.name, "-").concat(i));
        var n, l, r = t.data || (null == a || null == (e = a[t.id]) ? void 0 : e.data);
        return !!r && (t.data = h.call(o, t.name, r || {}), t.layout = (null == (n = o.moduleDefaultLayout) ? void 0 : n[t.id]) || t.layout || (null == a || null == (l = a[t.id]) ? void 0 : l.layout) || {}, 
        t.layoutStyle = s(t.layout).layoutStyle, p.call(o, t, a, i < 5 ? i : 0), !0);
    }));
}

function g(t) {
    var a = t.moduleData, i = t.layoutData, e = [], n = {};
    for (var l in i.modules) {
        var r, d, c, g, v = i.modules[l], y = v.name, b = v.id, T = v.modules, x = void 0 === T ? [] : T;
        if (a[b] || f.includes(y)) {
            var D = m(null == (r = a[b]) ? void 0 : r.data), M = o(o({}, (null == (d = this.moduleDefaultLayout) ? void 0 : d[b]) || {}), m(null == (c = a[b]) ? void 0 : c.layout)), C = m(null == (g = a[b]) ? void 0 : g.extendList), w = s(M || {}), B = o({
                moduleId: b,
                moduleName: y,
                data: h.call(this, y, D),
                modules: x,
                extendList: C
            }, w);
            p.call(this, B, a), !f.includes(y) || B.modules.find(function(t) {
                return t.name;
            }) ? (e[l] = B, u(B, this.lastModules[l]) || (n["modules[".concat(l, "]")] = B)) : n["modules[".concat(l, "]")] = {};
        } else n["modules[".concat(l, "]")] = {};
    }
    if (e.length < this.lastModules.length) for (var N = e.length; N < this.lastModules.length; N++) n["modules[".concat(N, "]")] = {};
    var S = s(m(a[i.id].layout) || {}).layoutStyle;
    return u(S, this.data.layoutStyle) || (n.layoutStyle = S), this.lastModules = e, 
    n;
}

function v(t) {
    var o = t.map(function(t) {
        return t.show && t.options.zIndex || 0;
    });
    return o.indexOf(Math.max.apply(Math, a(o)));
}

function y(t) {
    if (t && t.options) {
        var a = t.options.afterClose;
        "function" == typeof a && a();
    }
}

var b = {
    initRender: function(t, a) {
        var o = t.moduleData, i = m(t.layoutData);
        if (i.modules) try {
            var e = g.call(this, {
                moduleData: o,
                layoutData: i
            }), n = d.call(this);
            n !== this.data.hasTabBar && (e.hasTabBar = n), this.setData(e, function() {
                "function" == typeof a && a();
            });
        } catch (o) {
            o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
            console.error(o);
        }
    },
    limoShowDialog: function(o, i, e) {
        var n, l, r, s = i || {}, u = e || {}, m = null != (l = u.autoHideTabBar) && l;
        u.position = u.position || "center", u.maskClosable = void 0 === u.maskClosable || u.maskClosable, 
        u.closeMask = !!u.closeMask, u.customStyle = "";
        var f = this.isH5 ? a(this.dialogs) : a(this.data.dialogs), p = f.findIndex(function(t) {
            return t.moduleId === o;
        });
        this.dialogTop = null != (r = this.dialogTop) ? r : 0, ++this.dialogTop, u.zIndex = +u.zIndex || 1e3 + this.dialogTop, 
        d.call(this) && !m && c.call(this) && (u.customStyle = "margin-bottom: calc(96rpx + var(--safe-area-bottom));"), 
        p > -1 ? this.setData((t(n = {}, "dialogs[".concat(p, "].show"), this.dialogTop), 
        t(n, "dialogs[".concat(p, "].data"), h.call(this, o, s)), t(n, "dialogs[".concat(p, "].options"), u), 
        n)) : this.setData(t({}, "dialogs[".concat(f.length, "]"), {
            moduleName: o,
            moduleId: o,
            show: this.dialogTop,
            data: h.call(this, o, s),
            options: u
        })), d.call(this) && c.call(this) && m && this.getTabBar().setData({
            showNativeTabBar: !1
        });
    },
    limoCloseDialog: function(o) {
        var i = this.isH5 ? a(this.dialogs) : a(this.data.dialogs), e = o ? i.findIndex(function(t) {
            return t.moduleId === o;
        }) : v(i);
        e > -1 && 0 !== i[e].show && (this.dialogTop = Math.max.apply(Math, a(i.map(function(t) {
            return t.show;
        }))), this.setData(t({}, "dialogs[".concat(e, "].show"), 0)), y(i[e]), d.call(this) && !c.call(this) && 0 === this.dialogTop && this.getTabBar().setData({
            showNativeTabBar: !0
        }));
    },
    onMaskTap: function() {
        var o, i = this.isH5 ? a(this.dialogs) : a(this.data.dialogs), e = v(i), n = i[e];
        n && null != n && null != (o = n.options) && o.maskClosable && 0 !== n.show && (this.dialogTop = Math.max.apply(Math, a(i.map(function(t) {
            return t.show;
        }))), this.setData(t({}, "dialogs[".concat(e, "].show"), 0)), this.dialogAfterClose(n));
    },
    dialogAfterClose: y,
    onMaskTouchMove: function(t) {
        t && "function" == typeof t.stopPropagation && t.stopPropagation();
    },
    limoShowModal: function(t) {
        var a = t.title, o = t.content, i = t.showCancel, e = t.confirmText, n = t.cancelText, l = t.onCancel, r = t.onConfirm;
        this.limoModalCancelFunc = l, this.limoModalConfirmFunc = r;
        var s = i;
        "boolean" != typeof s && (s = !0);
        var u = {
            title: a,
            content: o,
            showCancel: s,
            confirmText: e,
            cancelText: n
        };
        d.call(this) && (u.customStyle = "margin-bottom: calc(96rpx + var(--safe-area-bottom));"), 
        this.setData({
            modal: u
        });
    },
    limoShowToast: function(t) {
        var a = this, o = t.title, i = t.mask, e = t.duration, n = void 0 === e ? 1500 : e, l = t.complete;
        if (this.toastTimer) this.toastQueue || (this.toastQueue = []), this.toastQueue.push({
            title: o,
            mask: i,
            duration: n,
            complete: l
        }); else {
            var r = {
                title: o,
                mask: i
            };
            d.call(this) && (r.customStyle = "margin-bottom: calc(96rpx + var(--safe-area-bottom));"), 
            this.setData({
                toast: r
            }), this.toastTimer = setTimeout(function() {
                a.toastTimer = null, a.setData({
                    toast: null
                }, function() {
                    var t;
                    "function" == typeof l && l(), (null == (t = a.toastQueue) ? void 0 : t.length) > 0 && a.limoShowToast(a.toastQueue.shift());
                });
            }, n);
        }
    },
    limoShowTooltip: function(t) {
        var a = t.text, o = t.placement, i = t.position, e = "left: ".concat(i.x, "px;top: ").concat(i.y, "px;");
        this.setData({
            tooltip: {
                text: a,
                placement: o,
                positionStyle: e
            }
        });
    },
    onTooltipTouchMove: function() {
        this.setData({
            tooltip: null
        });
    },
    onLimoConfirm: function() {
        "function" == typeof this.limoModalConfirmFunc && (this.limoModalConfirmFunc(), 
        this.limoModalConfirmFunc = null), this.setData({
            modal: null
        });
    },
    onLimoCancel: function() {
        "function" == typeof this.limoModalCancelFunc && (this.limoModalCancelFunc(), this.limoModalCancelFunc = null), 
        this.setData({
            modal: null
        });
    },
    collectModulesData: function() {
        for (var t = this.data.modules || {}, a = {}, i = 0; i < t.length; i += 1) {
            var e, n = t[i].moduleId, l = this.$selectComponent ? this.$selectComponent : this.selectComponent;
            l && n && "function" == typeof (null == l || null == (e = l("#".concat(n))) ? void 0 : e.exportData) && (a = o(o({}, a), null == l ? void 0 : l("#".concat(n)).exportData()));
        }
        return a;
    }
};

exports.default = b;