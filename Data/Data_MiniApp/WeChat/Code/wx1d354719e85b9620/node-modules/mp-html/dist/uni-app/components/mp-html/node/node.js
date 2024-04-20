(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/mp-html/dist/uni-app/components/mp-html/node/node" ], {
    1938: function(t, n, o) {
        o.r(n);
        var e = o("f0a2"), i = o.n(e);
        for (var r in e) [ "default" ].indexOf(r) < 0 && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(r);
        n.default = i.a;
    },
    "712d": function(t, n, o) {
        n.a = function(t) {
            t.options.wxsCallMethods || (t.options.wxsCallMethods = []);
        };
    },
    "8f41": function(t, n, o) {},
    c06e: function(t, n, o) {
        var e = o("8f41");
        o.n(e).a;
    },
    c5c1: function(t, n, o) {
        o.r(n);
        var e = o("f4f7"), i = o("1938");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            o.d(n, t, function() {
                return i[t];
            });
        }(r);
        o("c06e");
        var s = o("f0c5"), a = o("712d"), c = Object(s.a)(i.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        "function" == typeof a.a && Object(a.a)(c), n.default = c.exports;
    },
    f0a2: function(t, n, o) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                name: "node",
                options: {
                    virtualHost: !0
                },
                data: function() {
                    return {
                        ctrl: {}
                    };
                },
                props: {
                    name: String,
                    attrs: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    childs: Array,
                    opts: Array
                },
                components: {
                    node: function() {
                        Promise.resolve().then(function() {
                            return resolve(o("c5c1"));
                        }.bind(null, o)).catch(o.oe);
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick(function() {
                        for (t.root = t.$parent; "mp-html" !== t.root.$options.name; t.root = t.root.$parent) ;
                    });
                },
                beforeDestroy: function() {},
                methods: {
                    toJSON: function() {},
                    play: function(n) {
                        if (this.root.$emit("play"), this.root.pauseVideo) {
                            for (var o = !1, e = n.target.id, i = this.root._videos.length; i--; ) this.root._videos[i].id === e ? o = !0 : this.root._videos[i].pause();
                            if (!o) {
                                var r = t.createVideoContext(e, this);
                                r.id = e, this.root._videos.push(r);
                            }
                        }
                    },
                    imgTap: function(n) {
                        var o = this.childs[n.currentTarget.dataset.i];
                        o.a ? this.linkTap(o.a) : o.attrs.ignore || (this.root.$emit("imgtap", o.attrs), 
                        this.root.previewImg && t.previewImage({
                            showmenu: this.root.showImgMenu,
                            current: parseInt(o.attrs.i),
                            urls: this.root.imgList
                        }));
                    },
                    imgLongTap: function(t) {},
                    imgLoad: function(t) {
                        var n = t.currentTarget.dataset.i;
                        this.childs[n].w ? (this.opts[1] && !this.ctrl[n] || -1 === this.ctrl[n]) && this.$set(this.ctrl, n, 1) : this.$set(this.ctrl, n, t.detail.width);
                    },
                    linkTap: function(n) {
                        var o = n.currentTarget ? this.childs[n.currentTarget.dataset.i] : {}, e = o.attrs || n, i = e.href;
                        this.root.$emit("linktap", Object.assign({
                            innerText: this.root.getText(o.children || [])
                        }, e)), i && ("#" === i[0] ? this.root.navigateTo(i.substring(1)).catch(function() {}) : i.split("?")[0].includes("://") ? this.root.copyLink && t.setClipboardData({
                            data: i,
                            success: function() {
                                return t.showToast({
                                    title: "链接已复制"
                                });
                            }
                        }) : t.navigateTo({
                            url: i,
                            fail: function() {
                                t.switchTab({
                                    url: i,
                                    fail: function() {}
                                });
                            }
                        }));
                    },
                    mediaError: function(t) {
                        var n = t.currentTarget.dataset.i, o = this.childs[n];
                        if ("video" === o.name || "audio" === o.name) {
                            var e = (this.ctrl[n] || 0) + 1;
                            if (e > o.src.length && (e = 0), e < o.src.length) return void this.$set(this.ctrl, n, e);
                        } else "img" === o.name && this.opts[2] && this.$set(this.ctrl, n, -1);
                        this.root && this.root.$emit("error", {
                            source: o.name,
                            attrs: o.attrs,
                            errMsg: t.detail.errMsg
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, o("543d").default);
    },
    f4f7: function(t, n, o) {
        o.d(n, "b", function() {
            return e;
        }), o.d(n, "c", function() {
            return i;
        }), o.d(n, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/mp-html/dist/uni-app/components/mp-html/node/node-create-component", {
    "node-modules/mp-html/dist/uni-app/components/mp-html/node/node-create-component": function(t, n, o) {
        o("543d").createComponent(o("c5c1"));
    }
}, [ [ "node-modules/mp-html/dist/uni-app/components/mp-html/node/node-create-component" ] ] ]);