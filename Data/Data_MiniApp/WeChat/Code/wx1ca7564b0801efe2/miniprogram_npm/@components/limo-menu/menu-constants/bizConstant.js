Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SHOP_NAME_FLAG = exports.SHOP_NAME_COUNT_THRESHOLD = exports.SHOP_NAME_CLASS = exports.ORDER_SHOP_NAME_COUNT_THRESHOLD = exports.MENU_RANG_TYPE = exports.HEAD_RIGHT_TYPE = exports.BIZ_TYPE_MAP = void 0;

exports.BIZ_TYPE_MAP = {
    ORDER: 1,
    PRE_ORDER: 2,
    TAKEAWAY: 3,
    PICKUP: 4
};

exports.MENU_RANG_TYPE = {
    1: "musteat-tag",
    2: "dianpin-icon"
};

exports.HEAD_RIGHT_TYPE = {
    RANK: "shopRankTag",
    NOTICE: "shopNotice",
    DETAIL: "shopDetailInfo",
    TAG: "shopTagList",
    TEXT_ZONE: "textZone"
};

exports.SHOP_NAME_CLASS = {
    TITLE_WITH_LOGO_SWITCH: "title-with-logo-switch",
    TITLE_WITH_LOGO: "title-with-logo",
    TITLE_WITH_SWITCH: "title-with-switch",
    TITLE_PLAIN: "title-plain"
};

exports.SHOP_NAME_COUNT_THRESHOLD = {
    TITLE_WITH_LOGO_SWITCH: 9,
    TITLE_WITH_LOGO: 15,
    TITLE_WITH_SWITCH: 12,
    TITLE_PLAIN: 18
};

exports.ORDER_SHOP_NAME_COUNT_THRESHOLD = {
    TITLE_PLAIN: 14,
    TITLE_WITH_LOGO: 16
};

var _, T = ((_ = {})[_.PLAIN = 0] = "PLAIN", _[_.SINGLE_ELEMENT = 1] = "SINGLE_ELEMENT", 
_[_.FULL_ELEMENT = 2] = "FULL_ELEMENT", _);

exports.SHOP_NAME_FLAG = T;