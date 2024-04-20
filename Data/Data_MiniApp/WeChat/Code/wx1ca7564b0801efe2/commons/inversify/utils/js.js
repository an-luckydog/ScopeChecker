Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFirstArrayDuplicate = function(r) {
    var t, a = new Set(), o = e(r);
    try {
        for (o.s(); !(t = o.n()).done; ) {
            var s = t.value;
            if (a.has(s)) return s;
            a.add(s);
        }
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        o.e(e);
    } finally {
        o.f();
    }
};

var e = require("../../../b/helpers/createForOfIteratorHelper");