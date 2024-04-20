Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../env"), e = require("../util/util"), i = require("../constant/context"), n = "page", a = "pageReady", r = "pageLoad", s = [ [ 1, "appLaunchEnd", "appLaunchStart" ], [ 2, "evaluateScriptEnd", "evaluateScriptStart" ], [ 3, "firstRenderEnd", "firstRenderStart" ], [ 7, a, r ], [ 8, r, "appLaunch" ], [ 9, a, "appLaunch" ], [ 10, a, "firstRenderEnd" ], [ 11, r, "firstRenderStart" ], [ 12, a, "appLaunchEnd" ] ], o = [ [ 3, "firstRenderEnd", "firstRenderStart" ], [ 7, a, r ], [ 10, a, "firstRenderEnd" ], [ 11, r, "firstRenderStart" ] ], p = function() {
    function a(t) {
        this.cfgManager = t, this._init(), this.speed = {}, this.firstContentfullPaint = {}, 
        this.moduleFirstRenderTime = {};
    }
    var r = a.prototype;
    return r._init = function() {
        this.timing = {}, this.points = [], this.launchStage = !1, this.recording = !1, 
        this.uploaded = !1;
    }, r.startRecording = function() {
        this.recording = !0, this.uploaded = !1;
    }, r.onAppLaunch = function(t) {
        this.timing.appLaunch = t || Date.now(), this.launchStage = !0, this.startRecording(), 
        (this.cfgManager.get("autoCatch") || {}).speed && (0, e.isFunc)(i.context.getPerformance) && ((0, 
        e.isWX)() || (0, e.isMMP)()) && (this.enableDefaultPoints = !0, this.startPerfObserver());
    }, r.startPerfObserver = function() {
        var t = this;
        if (!this.perfObserved) {
            this.perfObserved = !0;
            try {
                i.context.getPerformance().createObserver(function(e) {
                    try {
                        var i = e.getEntries();
                        i && i.length && i.forEach(function(e) {
                            var i = e.name;
                            if (t.recording && i && "route" !== i && e.duration > 0) {
                                var n = i + "Start", a = i + "End";
                                t.timing[n] || t.timing[a] || (t.timing[n] = e.startTime, t.timing[a] = e.startTime + e.duration);
                            }
                        });
                    } catch (t) {}
                }).observe({
                    entryTypes: [ "navigation", "render", "script" ]
                });
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                this.enableDefaultPoints = !1;
            }
        }
    }, r.onPageLoad = function(t) {
        this.timing.pageLoad = t || Date.now(), this.launchStage || this.recording || this.startRecording();
    }, r.onPageReady = function(t) {
        this.timing.pageReady = t || Date.now();
    }, r.reportPerf = function(i, a) {
        var r = this;
        if (!this.uploaded) {
            var p = this.cfgManager, d = p.config.autoCatch.speed, h = p.get(n).sample || .5;
            if (d && this.enableDefaultPoints && Math.random() < h && ((this.launchStage ? s : o).forEach(function(t) {
                try {
                    var e = t[0], i = t[1], n = t[2], a = r.timing[i], s = r.timing[n];
                    if ("number" == typeof e && a && s) {
                        var o = parseInt(a - s, 10) || 0;
                        r.points[e] = o < 0 ? 0 : o;
                    }
                } catch (t) {}
            }), this.points && this.points.length)) {
                var c = p.getCustomTags() || {}, u = (0, t.getEnvSync)(), g = (0, e.getMpVers)(p.config), f = a || p.config.project, l = p.get("pageUrl"), m = l ? (0, 
                t.getPageUrl)(l) : i || u.pageUrl || "", v = p.config.isDump ? (0, e.findOwlProject)(m) : "", P = {
                    p: f,
                    dump: a || (v === f ? "" : v),
                    pvId: p.config.pageId,
                    pageUrl: m,
                    mpVer: g.mpVer,
                    mpLibVer: g.mpLibVer,
                    network: u.network || "",
                    os: u.os || "",
                    unionId: p.config.unionId || "",
                    container: u.container || "",
                    ts: Date.now(),
                    ctags: c
                };
                P.speed = this.points.join("|"), (0, e.requestQueue)({
                    url: p.getApiPath(n),
                    method: "POST",
                    header: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(P)
                });
            }
            this._init(), this.uploaded = !0;
        }
    }, r.pushSpeed = function(i, n, a, r) {
        var s = this;
        void 0 === r && (r = "");
        var o = this.speed;
        o[i] || (o[i] = {}, o[i].customSpeed = []);
        try {
            (0, t.getEnv)().then(function(p) {
                if (p) {
                    var d = s.cfgManager.config, h = (0, e.getMpVers)(d), c = d.pageUrl, u = i || (0, 
                    t.getPageUrl)(c) || p.pageUrl || "", g = d.isDump ? (0, e.findOwlProject)(u) : "", f = {
                        p: d.project,
                        dump: g === d.project ? "" : g,
                        pvId: d.pageId,
                        unionId: d.unionId || "",
                        speed: "",
                        ts: Date.now()
                    }, l = {
                        pageUrl: u,
                        mpVer: h.mpVer,
                        mpLibVer: h.mpLibVer,
                        network: p.network || "",
                        os: p.os || "",
                        container: p.container || "",
                        ctags: r || {}
                    };
                    o[i] || (o[i] = {}, o[i].customSpeed = []), Object.assign(o[i], l, f), o[i].customSpeed[n] = a;
                }
            });
        } catch (t) {}
    }, r.addPoint = function(i, n) {
        if (void 0 === i && (i = {}), void 0 === n && (n = ""), !this._refresh && void 0 !== i.position) try {
            n = n || (0, t.getPageUrl)() || "";
            var a = (0, e.isFlatObj)(i.cTags) ? i.cTags : this.cfgManager.getCustomTags();
            if ("app" == n) {
                var r = i.timeStamp || Date.now();
                this.pushSpeed(n, i.position, r - this._appStart, a);
            } else {
                var s;
                if (void 0 !== i.duration) s = i; else {
                    var o = this._start || Date.now();
                    if (void 0 !== o) {
                        var p = i.timeStamp || +Date.now();
                        s = {
                            position: i.position,
                            duration: p - o
                        };
                    }
                }
                s && this.pushSpeed(n, s.position, s.duration, a);
            }
        } catch (i) {}
    }, r.appLaunch = function(t, e) {
        this._appStart = t, this._enterPage = e;
    }, r.appReady = function(t, e) {
        this.cfgManager.get("autoCatch").oldSpeed && t === this._enterPage && this.addPoint({
            position: 0,
            timeStamp: e
        }, "app");
    }, r.pageLoad = function(t) {
        this._start = t || Date.now(), this._refresh = !1;
    }, r.pageReady = function(e, i) {
        if (this.cfgManager.get("autoCatch").oldSpeed) {
            var n = this.cfgManager.get("pageUrl");
            this.addPoint({
                position: 0,
                timeStamp: e
            }, n ? (0, t.getPageUrl)(n) : i || (0, t.getPageUrl)());
        }
    }, r.pullRefresh = function() {
        this._refresh = !0;
    }, r.report = function() {
        var t = this;
        try {
            var i = this.cfgManager, a = this.speed, r = this.firstContentfullPaint, s = this.moduleFirstRenderTime, o = i.get(n).sample || .5;
            Object.keys(a).map(function(p) {
                var d = Object.assign({}, a[p]);
                if (d.customSpeed || (d.customSpeed = []), r[p]) {
                    var h = t.firstContentfullPaint[p];
                    try {
                        for (var c in h) d.customSpeed[c] = t._getPageFirstPaint(p, c) || "";
                    } catch (t) {}
                }
                d.customSpeed = d.customSpeed.join("|"), a[p] && delete a[p], s[p] && delete s[p], 
                r[p] && delete r[p], d.customSpeed && d.customSpeed.length && (Math.random() > o || (0, 
                e.requestQueue)({
                    url: i.getApiPath(n),
                    method: "POST",
                    header: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(d)
                }));
            });
        } catch (t) {}
    }, r.createFirstContentfulPaint = function(e, i) {
        if (void 0 === e && (e = [ "default" ]), void 0 === i && (i = 1), !this._refresh) try {
            var n = (0, t.getPageUrl)(this.cfgManager.get("pageUrl"));
            this.firstContentfullPaint[n] || (this.firstContentfullPaint[n] = {}), this.firstContentfullPaint[n][i] = e;
        } catch (e) {}
    }, r.addFirstContentfulPaint = function(e, i) {
        if (void 0 === e && (e = "default"), !this._refresh) try {
            var n = (0, t.getPageUrl)(this.cfgManager.get("pageUrl"));
            this.firstContentfullPaint[n] || (this.firstContentfullPaint[n] = {});
            var a = i || +new Date() - this._start;
            this.moduleFirstRenderTime[n] || (this.moduleFirstRenderTime[n] = {}), this.moduleFirstRenderTime[n][e] || (this.moduleFirstRenderTime[n][e] = a);
        } catch (e) {}
    }, r._getPageFirstPaint = function(t, e) {
        var i = this;
        try {
            var n;
            this.firstContentfullPaint[t] && (n = this.firstContentfullPaint[t][e]);
            var a = 0;
            return this.moduleFirstRenderTime[t] ? (n.map(function(e) {
                var n = i.moduleFirstRenderTime[t][e] || 0;
                a = Math.max(n, a);
            }), a) : a;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return 0;
        }
    }, r.start = function(t, e) {
        this["start-" + t + "-" + e] = Date.now();
    }, r.end = function(t, e) {
        var i = this["start-" + t + "-" + e], n = this["start-app-0"];
        n && (delete this["start-app-0"], this.pushSpeed("app", 0, Date.now() - n)), i && this.pushSpeed(t, e, Date.now() - i);
    }, a;
}();

exports.default = p;