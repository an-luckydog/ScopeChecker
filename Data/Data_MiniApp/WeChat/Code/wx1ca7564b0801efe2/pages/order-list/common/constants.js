Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.URGE_TIME = exports.REWARD_BG = exports.RES_CODE = exports.ORDER_EVENTS = exports.LIST_TYPES = exports.LIST_EVENTS = exports.INVOICE_TYPE = exports.INVOICE_STATUS = exports.INVOICE_SOURCE = exports.DISH_DEFAULT_PAGE = exports.DEFAULT_SIZE = exports.DEFAULT_PAGE = void 0;

var E = {
    LIST: Symbol("list"),
    EVENT: Symbol("event"),
    INVOICE: Symbol("invoice")
}, e = {
    REFRESH: Symbol.for("REFRESH"),
    RELOAD: Symbol.for("RELOAD")
};

exports.INVOICE_TYPE = {
    PAPER: 1,
    ELECTRONIC: 2
}, exports.INVOICE_STATUS = {
    NONE: -2,
    DISABLE: 1,
    ENABLE: 2,
    PREPARE: 3,
    WAITING: 4,
    COMPLETED: 5,
    FAILURE: 6
}, exports.INVOICE_SOURCE = {
    CODE: 1,
    WEB: 2,
    RECEPTION: 3,
    API: 4,
    MANUAL: 5
}, exports.URGE_TIME = 1e4, exports.ORDER_EVENTS = {
    GO_COMMENT: "goComment",
    GO_COMMENT_DETAIL: "goCommentDetail",
    GO_INVOICE: "goInvoice",
    INVOICE_STATUS: "invoiceStatus",
    REMINDER: "reminder",
    GO_PAY: "goPay",
    CANCEL_ORDER: "cancelOrder"
}, exports.REWARD_BG = {
    1: "https://p0.meituan.net/ingee/88332d8643389908b1475a7402842c9120408.png",
    2: "https://p0.meituan.net/scarlett/f41b0f1e31c23ece01380474fa868a367854.png"
}, exports.DISH_DEFAULT_PAGE = 2, exports.DEFAULT_SIZE = 10, exports.DEFAULT_PAGE = 1, 
exports.RES_CODE = {
    SUCCESS: 200,
    NETWORK_ERROR: 500
}, exports.LIST_EVENTS = e, exports.LIST_TYPES = E;