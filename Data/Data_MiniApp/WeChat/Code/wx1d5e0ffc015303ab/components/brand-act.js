(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/brand-act" ], {
    "0d44": function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                data: function() {
                    return {
                        imgUrl: getApp().globalData.imgUrl
                    };
                },
                mounted: function() {},
                watch: {},
                methods: {
                    toActiveList: function() {
                        n.navigateTo({
                            url: "/pages/index/brandActs/activelist/activelist"
                        });
                    },
                    toDelicious: function() {
                        n.navigateTo({
                            url: "/pages/index/brandActs/delicious/delicious"
                        });
                    },
                    toStory: function() {
                        n.navigateTo({
                            url: "/pages/index/brandActs/story/story"
                        });
                    }
                }
            };
            t.default = e;
        }).call(this, e("543d").default);
    },
    "48c7": function(n, t, e) {
        e.r(t);
        var a = e("ce0f"), o = e("4b94");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        e("4e0b");
        var i = e("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, "3daf2ba6", null, !1, a.a, void 0);
        t.default = u.exports;
    },
    "4b94": function(n, t, e) {
        e.r(t);
        var a = e("0d44"), o = e.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        t.default = o.a;
    },
    "4e0b": function(n, t, e) {
        var a = e("a322");
        e.n(a).a;
    },
    a322: function(n, t, e) {},
    ce0f: function(n, t, e) {
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/brand-act-create-component", {
    "components/brand-act-create-component": function(n, t, e) {
        e("543d").createComponent(e("48c7"));
    }
}, [ [ "components/brand-act-create-component" ] ] ]);