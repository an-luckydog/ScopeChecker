Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.convertYellowTextArrayToRichText = function(r) {
    var t;
    return null != (t = null == r ? void 0 : r.map(function(r) {
        return {
            type: Number.isNaN(Number(r)) ? e.RICH_ITEM_TEXT_TYPE.NORMAL : e.RICH_ITEM_TEXT_TYPE.IMPORTANT,
            text: r + ""
        };
    })) ? t : [];
};

var e = require("../types/common/misc");