Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../env"), t = require("../util/util"), r = function() {
    function r(e) {
        this.cfgManager = e;
    }
    return r.prototype.report = function(r) {
        void 0 === r && (r = {});
        try {
            var n = this.cfgManager, o = n.config, i = n.extensions, p = (0, t.getMpVers)(o), a = r.pageUrl || (0, 
            e.getPageUrl)(o.pageUrl), s = o.isDump ? (0, t.findOwlProject)(a) : "", u = {
                p: o.project,
                dump: s === o.project ? "" : s,
                pageUrl: a,
                pvId: r.pageId || o.pageId,
                mpVer: p.mpVer,
                mpLibVer: r.wxLibVersion || p.mpLibVer,
                network: r.network || i.network || "",
                os: i.os || "",
                container: i.container || "",
                unionId: o.unionId,
                ts: Date.now(),
                ctags: r.cTags || {}
            };
            (0, t.requestQueue)({
                url: n.getApiPath("pv"),
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(u)
            });
        } catch (e) {}
    }, r;
}();

exports.default = r;