(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/gaoyia-parse/parse" ], {
    "126e": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    dcea: function(e, t, n) {
        (function(e) {
            var a = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("cf0d")), i = {
                name: "wxParse",
                props: {
                    userSelect: {
                        type: String,
                        default: "text"
                    },
                    imgOptions: {
                        type: [ Object, Boolean ],
                        default: function() {
                            return {
                                loop: !1,
                                indicator: "number",
                                longPressActions: !1
                            };
                        }
                    },
                    loading: {
                        type: Boolean,
                        default: !1
                    },
                    className: {
                        type: String,
                        default: ""
                    },
                    content: {
                        type: String,
                        default: ""
                    },
                    noData: {
                        type: String,
                        default: '<div style="color: red;">数据不能为空</div>'
                    },
                    startHandler: {
                        type: Function,
                        default: function() {
                            return function(e) {
                                e.attr.class = null, e.attr.style = null;
                            };
                        }
                    },
                    endHandler: {
                        type: Function,
                        default: null
                    },
                    charsHandler: {
                        type: Function,
                        default: null
                    },
                    imageProp: {
                        type: Object,
                        default: function() {
                            return {
                                mode: "aspectFit",
                                padding: 0,
                                lazyLoad: !1,
                                domain: ""
                            };
                        }
                    }
                },
                components: {
                    wxParseTemplate: function() {
                        n.e("components/gaoyia-parse/components/wxParseTemplate0").then(function() {
                            return resolve(n("d497"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        nodes: {},
                        imageUrls: [],
                        wxParseWidth: {
                            value: 0
                        }
                    };
                },
                computed: {},
                mounted: function() {
                    this.setHtml();
                },
                methods: {
                    setHtml: function() {
                        var e = this;
                        this.getWidth().then(function(t) {
                            e.wxParseWidth.value = t;
                        });
                        var t = this.content, n = this.noData, a = this.imageProp, i = t || n, s = {
                            start: this.startHandler,
                            end: this.endHandler,
                            chars: this.charsHandler
                        }, r = (0, o.default)(i, s, a, this);
                        this.imageUrls = r.imageUrls, this.nodes = [], r.nodes.forEach(function(t) {
                            setTimeout(function() {
                                e.nodes.push(t);
                            }, 0);
                        });
                    },
                    getWidth: function() {
                        var t = this;
                        return new Promise(function(n, a) {
                            e.createSelectorQuery().in(t).select(".wxParse").fields({
                                size: !0,
                                scrollOffset: !0
                            }, function(e) {
                                n(e.width);
                            }).exec();
                        });
                    },
                    navigate: function(e, t, n) {
                        console.log(e, n), this.$emit("navigate", e, t);
                    },
                    preview: function(t, n) {
                        this.imageUrls.length && "boolean" != typeof this.imgOptions && e.previewImage({
                            current: t,
                            urls: this.imageUrls,
                            loop: this.imgOptions.loop,
                            indicator: this.imgOptions.indicator,
                            longPressActions: this.imgOptions.longPressActions
                        }), this.$emit("preview", t, n);
                    },
                    removeImageUrl: function(e) {
                        var t = this.imageUrls;
                        t.splice(t.indexOf(e), 1);
                    }
                },
                provide: function() {
                    return {
                        parseWidth: this.wxParseWidth,
                        parseSelect: this.userSelect
                    };
                },
                watch: {
                    content: function() {
                        this.setHtml();
                    }
                }
            };
            t.default = i;
        }).call(this, n("543d").default);
    },
    e800: function(e, t, n) {
        n.r(t);
        var a = n("126e"), o = n("f3f3");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        var s = n("f0c5"), r = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = r.exports;
    },
    f3f3: function(e, t, n) {
        n.r(t);
        var a = n("dcea"), o = n.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/gaoyia-parse/parse-create-component", {
    "components/gaoyia-parse/parse-create-component": function(e, t, n) {
        n("543d").createComponent(n("e800"));
    }
}, [ [ "components/gaoyia-parse/parse-create-component" ] ] ]);