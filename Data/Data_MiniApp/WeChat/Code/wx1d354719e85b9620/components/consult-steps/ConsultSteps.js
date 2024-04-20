(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/consult-steps/ConsultSteps" ], {
    "1b80": function(n, t, e) {
        var o = e("573d");
        e.n(o).a;
    },
    4649: function(n, t, e) {
        e.r(t);
        var o = e("d173"), s = e("4758");
        for (var u in s) [ "default" ].indexOf(u) < 0 && function(n) {
            e.d(t, n, function() {
                return s[n];
            });
        }(u);
        e("1b80");
        var c = e("f0c5"), a = Object(c.a)(s.default, o.b, o.c, !1, null, "025f0f42", null, !1, o.a, void 0);
        t.default = a.exports;
    },
    4758: function(n, t, e) {
        e.r(t);
        var o = e("81f8"), s = e.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        t.default = s.a;
    },
    "573d": function(n, t, e) {},
    "81f8": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = [ "资料登记", "提交问诊", "医患交流" ], s = [ "智能预诊", "预约复诊", "医生问诊", "开方购药" ], u = {
            data: function() {
                return {
                    steps: []
                };
            },
            components: {},
            props: {
                type: {
                    type: String,
                    default: ""
                },
                step: {
                    type: String,
                    default: ""
                }
            },
            watch: {
                type: {
                    handler: function(n, t) {
                        switch (n) {
                          case "image":
                          case "video":
                          case "inquiry":
                            this.steps = o;
                            break;

                          case "returnVisit":
                            this.steps = s;
                            break;

                          default:
                            this.steps = [];
                        }
                    },
                    immediate: !0
                }
            },
            methods: {}
        };
        t.default = u;
    },
    d173: function(n, t, e) {
        e.d(t, "b", function() {
            return s;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {
            return o;
        });
        var o = {
            uIcon: function() {
                return e.e("node-modules/uview-ui/components/u-icon/u-icon").then(e.bind(null, "f86b"));
            }
        }, s = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/consult-steps/ConsultSteps-create-component", {
    "components/consult-steps/ConsultSteps-create-component": function(n, t, e) {
        e("543d").createComponent(e("4649"));
    }
}, [ [ "components/consult-steps/ConsultSteps-create-component" ] ] ]);