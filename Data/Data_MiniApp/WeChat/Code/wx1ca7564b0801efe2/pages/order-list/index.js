var e = require("../../b/helpers/interopRequireDefault"), t = e(require("../../b/regenerator")), r = require("../../b/helpers/asyncToGenerator"), i = e(require("../../commons/page")), a = require("./entities/page"), n = require("../../commons/constants"), o = require("./common/constants"), u = require("./limo"), s = e(require("../../miniprogram_npm/@limo/core/index.js")), l = e(require("../../lib/mix/request"));

(0, i.default)({
    entities: a.entities,
    fmpUrl: "/order/list/fmp",
    moduleDefaultLayout: u.moduleDefaultLayout,
    layoutData: u.layoutData,
    cid: "c_saaspay_954q9pjb",
    first: !0,
    data: {
        errorInfo: null,
        navBarHeight: 0,
        paddingTop: 0,
        height: 0
    },
    onShow: function() {
        this.first || this.refreshPage();
    },
    onLoad: function() {
        var e;
        this.__limoCore = s.default.LimoCoreFactory(), null == s.default || s.default.getLimoRuntime().proxy({
            request: l.default
        });
        var t = s.default.getLimoRuntime().getSystemInfoSync().statusBarHeight, r = void 0 === t ? 44 : t, i = s.default.getLimoRuntime().getMenuButtonBoundingClientRect(), a = i.top, u = void 0 === a ? 0 : a, f = i.height, h = void 0 === f ? 0 : f, d = Number(2 * (u - r)) + Number(h) + Number(r);
        this.setData({
            navBarHeight: d,
            paddingTop: u,
            height: h
        }), null == (e = this.entity) || e.get(n.TYPES.EMITTER).on(o.LIST_EVENTS.REFRESH, this.refreshPage, this);
    },
    onUnload: function() {
        var e;
        null == (e = this.entity) || e.get(n.TYPES.EMITTER).off(o.LIST_EVENTS.REFRESH, this.refreshPage, this);
    },
    refreshPage: function() {
        var e, t, r, i = null == (e = this.entity) ? void 0 : e.get(o.LIST_TYPES.LIST);
        null == i || i.resetOrderList(), null == i || i.setPage(o.DEFAULT_PAGE), null == (t = this.fetchFmpData) || t.call(this), 
        null == (r = this.entity) || r.get(n.TYPES.EMITTER).emit(o.LIST_EVENTS.RELOAD);
    },
    prepareFmpParams: function() {
        var e = this;
        return r(t.default.mark(function r() {
            var i, a;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return a = null == (i = e.entity) ? void 0 : i.get(o.LIST_TYPES.LIST), t.abrupt("return", {
                        pageNo: null == a ? void 0 : a.page,
                        pageSize: null == a ? void 0 : a.size
                    });

                  case 2:
                  case "end":
                    return t.stop();
                }
            }, r);
        }))();
    },
    fmpSuccess: function() {
        var e;
        this.setData({
            errorInfo: null
        });
        var t = null == (e = this.entity) ? void 0 : e.get(o.LIST_TYPES.LIST);
        this.first = !1;
        var r = (null == t ? void 0 : t.page) || 1;
        null == t || t.setPage(r + 1);
    },
    fmpError: function(e) {
        e.data;
        var t = e.code;
        e.msg;
        this.setData({
            loading: !1
        }), t === o.RES_CODE.NETWORK_ERROR ? this.setData({
            errorInfo: {
                errorTitle: "网络异常，请稍后重试"
            }
        }) : this.setData({
            errorInfo: {
                errorTitle: "网络异常，请重试",
                btnText: "重新加载"
            }
        });
    }
});