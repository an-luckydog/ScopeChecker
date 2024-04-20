(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ccg-redPacketRain/ccg-redPacketRain" ], {
    "010d": function(t, e, n) {
        var c = n("4ea4");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = c(n("2eee")), r = c(n("9523")), o = c(n("c973"));
        function i(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(t);
                e && (c = c.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, c);
            }
            return n;
        }
        var s = {
            name: "Index",
            data: function() {
                return {
                    showHint: !1,
                    speed: 2,
                    countdownFlag: !1,
                    isActivity: !1,
                    redPackets: [],
                    getRedPackets: [],
                    pId: 0,
                    rcTop: 0,
                    rcLeft: 0,
                    getPoint: 0,
                    times: null,
                    rednum: 4,
                    activityData: {
                        totalTime: 10
                    }
                };
            },
            onLoad: function() {},
            methods: {
                countdownStart: function() {
                    var t = this;
                    return (0, o.default)(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t.countdownFlag = !0, setTimeout(function() {
                                    t.countdownFlag = !1, t.start();
                                }, 4e3);

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                start: function() {
                    var t = this;
                    return (0, o.default)(a.default.mark(function e() {
                        var n, c, r, i, s, u, f, d, l, p, b;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t.isActivity = !0, t.getRedPackets = [], n = 0, c = 0, i = 120, s = 160, u = 0, 
                                f = 0;

                              case 5:
                                if (!(f < t.activityData.totalTime * t.speed)) {
                                    e.next = 27;
                                    break;
                                }
                                r = Math.random() > .4, d = 4, u = r ? i : s, l = 0;

                              case 10:
                                if (!(l < d)) {
                                    e.next = 23;
                                    break;
                                }
                                if (c = (b = l * (p = 750 / d)) + Math.random() * p, l + 1 == d && c + u > 700 && (c = 700 - u), 
                                t.redPackets.push({
                                    x: c,
                                    y: n + 90 * Math.random(),
                                    small: r,
                                    id: t.pId++
                                }), !(c + u > b + p)) {
                                    e.next = 20;
                                    break;
                                }
                                return l++, e.abrupt("continue", 20);

                              case 20:
                                l++, e.next = 10;
                                break;

                              case 23:
                                n += 260;

                              case 24:
                                f++, e.next = 5;
                                break;

                              case 27:
                                t.rcTop = 0 - n, t.rcLeft = 10, setTimeout(function() {
                                    t.rcTop = 0, t.rcLeft = 5;
                                }, 100), t.times = setTimeout((0, o.default)(a.default.mark(function e() {
                                    return a.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            t.isActivity = !1, t.showHint = !0;

                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                })), 1e3 * t.activityData.totalTime);

                              case 31:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                cClick: function(t, e) {
                    this.getRedPackets.push(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? i(Object(n), !0).forEach(function(e) {
                                (0, r.default)(t, e, n[e]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                        }
                        return t;
                    }({}, t)), this.getRedPackets.length >= this.rednum && (this.isActivity = !1, this.showHint = !0, 
                    clearTimeout(this.times)), this.redPackets.splice(e, 1);
                },
                close: function() {
                    this.showHint = !1, this.$emit("back");
                }
            }
        };
        e.default = s;
    },
    "427f": function(t, e, n) {
        n.r(e);
        var c = n("010d"), a = n.n(c);
        for (var r in c) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(r);
        e.default = a.a;
    },
    "9e52": function(t, e, n) {
        var c = n("b598");
        n.n(c).a;
    },
    b598: function(t, e, n) {},
    ba8d: function(t, e, n) {
        n.d(e, "b", function() {
            return c;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var c = function() {
            this.$createElement;
            var t = (this._self._c, this.getRedPackets.length);
            this.$mp.data = Object.assign({}, {
                $root: {
                    g0: t
                }
            });
        }, a = [];
    },
    ed09: function(t, e, n) {
        n.r(e);
        var c = n("ba8d"), a = n("427f");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("9e52");
        var o = n("f0c5"), i = Object(o.a)(a.default, c.b, c.c, !1, null, "c19e6866", null, !1, c.a, void 0);
        e.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ccg-redPacketRain/ccg-redPacketRain-create-component", {
    "components/ccg-redPacketRain/ccg-redPacketRain-create-component": function(t, e, n) {
        n("543d").createComponent(n("ed09"));
    }
}, [ [ "components/ccg-redPacketRain/ccg-redPacketRain-create-component" ] ] ]);