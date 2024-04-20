Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.complianceCheck = function(t, r) {
    if (!(0, e.isMMP)()) return !0;
    try {
        if ("api" === t) for (var i = [ "pageUrl", "resUrl", "content" ], n = 0; n < 3; n++) if (r[i[n]] && (void 0 === (o = decodeURIComponent(r[i[n]])) && (o = ""), 
        /latitude/i.test(o) || /longitude/i.test(o) || /lat=/i.test(o) || /lng=/i.test(o) || /1\d{2}\*\*\*\*\d{4}/.test(o))) return !1;
        return !0;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return !1;
    }
    var o;
};

var e = require("./util");