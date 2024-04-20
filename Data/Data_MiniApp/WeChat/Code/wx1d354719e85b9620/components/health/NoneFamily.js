(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/health/NoneFamily" ], {
    "3dbf": function(t, e, n) {
        n.r(e);
        var a = n("753fb"), o = n("917a");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        var c = n("f0c5"), l = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = l.exports;
    },
    "753fb": function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "917a": function(t, e, n) {
        n.r(e);
        var a = n("b99a"), o = n.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = o.a;
    },
    b99a: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        e.default = {
            name: "none-family",
            data: function() {
                return {
                    imgUrl: this.$store.state.env.VUE_APP_RESOURCE_URL,
                    list: [ {
                        icon: this.$store.state.env.VUE_APP_RESOURCE_URL + "health/ic_health_case.png",
                        tit: "查看就诊病历",
                        txt: "全生命周期就诊病历一键获取"
                    }, {
                        icon: this.$store.state.env.VUE_APP_RESOURCE_URL + "health/ic_health_data.png",
                        tit: "查看测量数据",
                        txt: "绑定设备，数据自动上传"
                    }, {
                        icon: this.$store.state.env.VUE_APP_RESOURCE_URL + "health/ic_health_report.png",
                        tit: "查询体检报告",
                        txt: "快速查询，便捷引用"
                    } ]
                };
            },
            methods: {
                goFamilyListPage: function() {
                    this.$Router.push({
                        path: "/pages/person/family/add"
                    });
                }
            }
        };
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/health/NoneFamily-create-component", {
    "components/health/NoneFamily-create-component": function(t, e, n) {
        n("543d").createComponent(n("3dbf"));
    }
}, [ [ "components/health/NoneFamily-create-component" ] ] ]);