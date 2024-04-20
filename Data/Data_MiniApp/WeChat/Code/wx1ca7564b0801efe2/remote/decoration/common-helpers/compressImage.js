Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.COMP_TYPE = void 0, exports.reportFail = function(o, t, i) {
    r(o, -1, t), e.Log.addError({
        name: "imgLoadFail",
        msg: i
    }, {
        category: "resourceError",
        combo: !0
    });
}, exports.reportSuccess = function(e, o) {
    r(e, 200, o);
};

var e = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js");

exports.COMP_TYPE = {
    SLIDE: "slide",
    HEAD: "head",
    MODAL: "modal"
};

function r(r, o, t) {
    e.Log.addApi("limo-" + r, 200, o, Date.now() - t);
}