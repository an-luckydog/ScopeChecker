var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.OWL = void 0, exports.app = function(e, r) {
    void 0 === r && (r = App), (0, v.default)(m, e, r);
}, exports.owl = void 0, exports.page = function(e, t) {
    var i = Page;
    t ? "function" == typeof t ? i = t : "object" == r(t) && (i = t.page || Page, y(t)) : i = Page, 
    (0, M.default)(m, e, i);
}, exports.registerProject = y, exports.request = function(e, r, t) {
    return void 0 === r && (r = m), (0, q.default)(e, r, t);
}, exports.subPage = function(e, r, t) {
    void 0 === r && (r = null), void 0 === t && (t = Page), (0, M.default)(m, e, t, r);
};

var r = require("../../../b/helpers/typeof"), t = e(require("./config")), i = e(require("./error/index")), o = e(require("./page/index")), n = e(require("./resource/index")), a = e(require("./pv/index")), s = e(require("./metric/index")), u = e(require("./metric/indexV2")), p = e(require("./log/index")), c = e(require("./memory/index")), g = e(require("./nativeAPI/index")), l = require("./env"), f = e(require("./error/model")), d = e(require("./util/pageid")), h = require("./util/util"), M = e(require("./page")), v = e(require("./app")), q = e(require("./resource/request")), w = require("./constant/index"), x = function() {
    function e(e) {
        var r = new t.default(e);
        this.logManager = new p.default(r, this), this.error = new i.default(r, this.logManager), 
        this.pageSpeed = new o.default(r), this.resource = new n.default(r, this.error, this.logManager), 
        this.pvManager = new a.default(r), this.metricV2 = new u.default(r), this.memory = new c.default(r, this.error), 
        this.api = new g.default(r, this.error, this.metricV2), this.cfgManager = r, this.init();
    }
    var r = e.prototype;
    return r.init = function() {
        var e = this;
        (0, l.getEnv)().then(function(r) {
            e.cfgManager.setExtension(r);
        });
    }, r.config = function(e) {
        this.cfgManager.set(e), this.logManager.syncUserId();
    }, r.setMetric = function(e, r, t) {
        this.metricV2.setMetric(e, r, t);
    }, r.reportMetric = function() {
        this.metricV2.report();
    }, r.newMetric = function() {
        return new s.default(this.cfgManager);
    }, r.report = function() {
        this.error.report(), this.pageSpeed.report(), this.resource.report();
    }, r.reportPv = function(e) {
        this.pvManager.report(e);
    }, r.resetPv = function(e) {
        try {
            e = e || {}, this.cfgManager.set({
                pageId: e.pageId || "owl-" + (0, d.default)()
            }), this.pvManager.report({
                cTags: (0, h.isFlatObj)(e.cTags) ? e.cTags : this.cfgManager.getCustomTags()
            });
        } catch (e) {}
    }, e;
}(), m = new x({
    isDump: !0,
    isOriginal: !0
});

function y(e) {
    try {
        e.rules = e.rules || [], w.owlMap[e.project] || (w.owlMap[e.project] = {
            p: e.project,
            rules: []
        }), e.rules.forEach(function(r) {
            w.owlMap[e.project].rules.push(r);
        });
    } catch (e) {}
}

exports.owl = m, exports.OWL = x, m.OWL = x, m.errorModel = f.default, m.start = function(e) {
    if (!this.isStarted) {
        var r = e.project;
        e.monitorApi || (e.monitorApi = {}), e.monitorApi.apis || (e.monitorApi.apis = [ "login", "getLocation" ]), 
        w.owlMap[r] = {
            p: r,
            rules: []
        }, w.owlMap._main_ = w.owlMap[r], this.isStarted = !0, this.cfgManager.set(e), this.api.startOverWrite(), 
        this.logManager.init(), this.memory.on();
    }
};