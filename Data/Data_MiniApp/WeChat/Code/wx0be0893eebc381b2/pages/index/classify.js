var t, e, a = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../@babel/runtime/helpers/asyncToGenerator"), o = require("../../utils/tools"), i = getApp();

Page({
    data: {
        active: 0,
        activeName: null,
        reqs: 0,
        indexs: 0,
        failed: !1,
        tu_imgs: i.p_url,
        bookTypeList: [],
        bookList: [],
        no_book: !1,
        page: 1,
        platform: i.platform(),
        isConnected: !0,
        networkType: i.networkType,
        attenyion: !0,
        qrList: []
    },
    onLoad: function(e) {
        i.opns = 0, i.pagesInit(), i.showLoading("加载中..."), (t = this).load = !0;
        var a = e.type ? e.type : 0;
        t.setData({
            bookList: [],
            activeType: a
        }), t.height(), t.top_menu(), wx.getNetworkType({
            success: function(e) {
                if (t.setData({
                    networkType: e.networkType
                }), "none" == e.networkType) return !1;
            }
        });
    },
    onReady: function() {
        var t = this;
        wx.onNetworkStatusChange(function(e) {
            e.networkType && t.setData({
                networkType: e.networkType,
                isConnected: e.isConnected
            });
        });
    },
    onShow: function() {
        if (t.load) return t.load = !1, !1;
        i.showLoading("加载中..."), t.setData({
            bookList: [],
            page: 1,
            activeName: null
        }), t.top_menu();
    },
    onHide: function() {
        i.call_backss_fun = null, t.setData({
            bookList: []
        });
    },
    onUnload: function() {
        this.setData({
            bookList: []
        }), t = null;
    },
    top_menu: function() {
        var t = this;
        i.get_open_id() && "" !== i.get_open_id() ? i.post_ajax("/word/qr-log", {}, function(e) {
            var a = e.data.resInfo.filter(function(t) {
                return t.type == (1 === i.env ? 16 : -1 === i.env ? 18 : 16);
            });
            t.getType(a);
        }) : this.getType();
    },
    getType: function(e) {
        var a = this.data.activeType;
        i.post_ajax("/book/getType", {}, function(n) {
            if (0 == n.data.state) {
                var o = n.data.resInfo;
                for (var i in o) if ("我的专属" == o[i].value) {
                    var s = o[i];
                    o.splice(i, 1), e && e.length && o.splice(1, 0, s);
                    break;
                }
                t.setData({
                    bookTypeList: o,
                    qrList: e
                }, function() {
                    t.setActive(a);
                });
            }
        }, 4);
    },
    setActive: function(e) {
        this.data.bookTypeList.filter(function(t) {
            return t.id == e;
        }).length > 0 ? this.setData({
            active: e
        }, function() {
            t.menu();
        }) : t.menu();
    },
    menu: function() {
        if (t.height(), "我的专属" == this.data.activeName) return i.hideLoading(), t.setData({
            bookList: this.data.qrList
        }), void wx.stopPullDownRefresh();
        i.post_ajax("/book/getList", {
            type: t.data.active,
            page: t.data.page,
            count: 10
        }, function(e) {
            if (200 == e.statusCode) if (0 == e.data.state) {
                if (t.setData({
                    reqs: 0,
                    failed: !1
                }), i.hideLoading(), e.data.resInfo) {
                    i.get_open_id() && "" !== i.get_open_id() ? t.setData({
                        attenyion: !0
                    }) : (i.attenyion = !1, t.setData({
                        attenyion: !1
                    }));
                    var a = "";
                    if (a = 1 == t.data.page ? [] : t.data.bookList, e.data.resInfo.bookList) for (var n = 0; n < e.data.resInfo.bookList.length; n++) a.push(e.data.resInfo.bookList[n]); else i.onShowToast("已经到底了~");
                    t.setData({
                        bookList: a
                    });
                }
            } else {
                if (t.setData({
                    reqs: t.data.reqs + 1
                }), t.data.reqs > 3) return i.hideLoading(), t.setData({
                    reqs: 0,
                    failed: !0
                }), !1;
                i.showLoading("加载中..."), t.menu();
            } else {
                if (t.setData({
                    reqs: t.data.reqs + 1
                }), t.data.reqs > 3) return i.hideLoading(), t.setData({
                    reqs: 0,
                    failed: !0
                }), !1;
                i.showLoading("加载中..."), t.menu();
            }
            t.data.bookList.length <= 0 ? t.setData({
                no_book: !0
            }) : t.setData({
                no_book: !1
            }), wx.stopPullDownRefresh();
        }, 4);
    },
    active: function(e) {
        var a = e.currentTarget.dataset.id, n = e.currentTarget.dataset.index;
        if (t.data.active == a) return !1;
        i.showLoading("加载中..."), t.setData({
            active: a,
            activeName: this.data.bookTypeList[n].value,
            indexs: n,
            bookList: [],
            page: 1
        }), t.menu();
    },
    height: function(e) {
        wx.createSelectorQuery().select(".top_nav").boundingClientRect(function(e) {
            wx.getSystemInfo({
                success: function(a) {
                    "getSystemInfo:ok" == a.errMsg && wx.createSelectorQuery().select(".nav_bottom").boundingClientRect(function(a) {
                        wx.getSystemInfo({
                            success: function(n) {
                                "getSystemInfo:ok" == n.errMsg && t.setData({
                                    scroll_height: n.windowHeight - e.height - a.height
                                });
                            }
                        });
                    }).exec();
                }
            });
        }).exec();
    },
    yanh: function(e, a) {
        if (0 === i.opns) return i.get_open_id() && "" !== i.get_open_id() ? void t.list_li(e, a) : void (i.call_backss_fun = function() {
            t.setData({
                opns: i.opns
            }), console.log("5555555"), t.list_li(e, a);
        });
        t.list_li(e, a);
    },
    list_li: function(e, a) {
        if (i.get_open_id() && "" !== i.get_open_id()) {
            t.setData({
                attenyion: !0
            });
            var n = "";
            n = "" !== a && a >= 0 ? a : e.currentTarget.dataset.index;
            var o = t.data.bookList[n].id, s = t.data.bookList[n].name, r = t.data.bookList[n].type;
            wx.setStorageSync("sku_id", o), wx.setStorageSync("sku_name", s), wx.setStorageSync("book_type", r), 
            wx.reLaunch({
                url: "index?sku_id=" + o
            }), i.hideLoading(), i.post_ajax("/book/addStudyNumber", {
                bookId: o
            }, function(t) {
                t.statusCode;
            }, 4);
        } else i.attenyion = !1, t.setData({
            attenyion: !1
        });
    },
    goLogin: function() {
        o.goLogin();
    },
    onPullDownRefresh: function() {
        i.showLoading("加载中..."), t.setData({
            bookList: [],
            page: 1
        }), t.menu();
    },
    onReachBottom: function(e) {
        t.setData({
            page: t.data.page + 1
        }), t.menu();
    },
    bindscrolltolower: function(e) {
        t.setData({
            page: t.data.page + 1
        }), t.menu();
    },
    onShareAppMessage: function() {
        return {
            title: "超牢固的背单词方法",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    bindGetUserInfo: (e = n(a().mark(function e(n) {
        var o;
        return a().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, i.getUserProfile();

              case 2:
                e.sent, o = n.currentTarget.dataset.index, i.showLoading("加载中..."), t.yanh(0, o);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(t) {
        return e.apply(this, arguments);
    }),
    failed: function() {
        i.showLoading("加载中..."), t.setData({
            bookList: []
        }), t.menu();
    }
});