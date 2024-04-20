Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.transPkgGroupTitle = function(t, n) {
    return n ? [ c("（".concat(t, "，已选 "), "NORMAL"), c("".concat(n), "IMPORTANT"), c(" 份)", "NORMAL") ] : [ c("（".concat(t, ")"), "NORMAL") ];
}, exports.transSubTitle = function(o, e, r) {
    var a = o.maxChoice, u = o.minChoice, i = o.repeatChoice;
    return u === a ? -1 === u ? [] : n("请选择 ".concat(u), r) : -1 === u ? function(o, e, r, a) {
        return r === t.REPEAT_CHOICE.SINGLE && o >= a ? [ c("(可多选)", "NORMAL") ] : n("最多选 ".concat(o), e);
    }(a, r, i, e) : -1 === a ? n("请选择 ".concat(u), r) : function(c, o, e, r, a) {
        return r === t.REPEAT_CHOICE.SINGLE && c >= a ? n("最少选 ".concat(o), e) : n("请选 ".concat(o, "-").concat(c), e);
    }(a, u, r, i, e);
};

var t = require("../../commons/constants"), c = function(t, c) {
    return {
        text: t,
        type: c
    };
}, n = function(t, n) {
    return n ? [ c("(".concat(t, " 份，已选 "), "NORMAL"), c("".concat(n), "IMPORTANT"), c("份)", "NORMAL") ] : [ c("(".concat(t, " 份)"), "NORMAL") ];
};