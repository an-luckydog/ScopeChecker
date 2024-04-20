(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/drag-ball/drag-ball" ], {
    "06d4": function(t, n, i) {
        i.r(n);
        var o = i("4da2"), e = i("3578");
        for (var a in e) [ "default" ].indexOf(a) < 0 && function(t) {
            i.d(n, t, function() {
                return e[t];
            });
        }(a);
        i("3c4a");
        var d = i("f0c5"), s = Object(d.a)(e.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = s.exports;
    },
    3578: function(t, n, i) {
        i.r(n);
        var o = i("f287"), e = i.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            i.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = e.a;
    },
    "3c4a": function(t, n, i) {
        var o = i("ee39");
        i.n(o).a;
    },
    "4da2": function(t, n, i) {
        i.d(n, "b", function() {
            return o;
        }), i.d(n, "c", function() {
            return e;
        }), i.d(n, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, e = [];
    },
    ee39: function(t, n, i) {},
    f287: function(t, n, i) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = {
                name: "drag-ball",
                props: {
                    isDock: {
                        type: Boolean,
                        default: !0
                    },
                    src: {
                        type: String,
                        default: ""
                    },
                    position: {
                        type: String,
                        default: "right"
                    },
                    positionX: {
                        type: [ Number, String ],
                        default: 0
                    },
                    positionY: {
                        type: [ Number, String ],
                        default: 60
                    }
                },
                computed: {
                    imageUrl: function() {
                        return this.src || this.$store.state.env.VUE_APP_RESOURCE_URL + "index/hospital/ic_icon_customerService.png";
                    }
                },
                data: function() {
                    return {
                        windowWidth: 0,
                        windowHeight: 0,
                        startX: 0,
                        startY: 0,
                        animation: !1,
                        loaded: !1
                    };
                },
                mounted: function() {
                    var n = this, i = t.getSystemInfoSync();
                    this.windowWidth = i.windowWidth, this.windowHeight = i.windowHeight, i.windowTop && (this.windowHeight += i.windowTop), 
                    this.startX = "left" === this.position ? this.positionX : this.windowWidth - this.positionX, 
                    this.startY = this.windowHeight - this.positionY - 56, this.$nextTick(function() {
                        n.loaded = !0;
                    });
                },
                watch: {
                    positionX: {
                        handler: function(t) {
                            this.startX = "left" === this.position ? t : this.windowWidth - t;
                        }
                    },
                    positionY: {
                        handler: function(t) {
                            console.log("positionY: ", t), this.startY = this.windowHeight - t - 56;
                        }
                    }
                },
                methods: {
                    change: function(t) {
                        t.detail.x && (this.animation = !0), this.$emit("btnMove");
                    },
                    click: function() {
                        this.$emit("btnClick");
                    }
                }
            };
            n.default = i;
        }).call(this, i("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/drag-ball/drag-ball-create-component", {
    "components/drag-ball/drag-ball-create-component": function(t, n, i) {
        i("543d").createComponent(i("06d4"));
    }
}, [ [ "components/drag-ball/drag-ball-create-component" ] ] ]);