var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = require("../miniprogram_npm/redux/index.js"), u = e(require("../miniprogram_npm/redux-thunk/index.js")), d = e(require("./reducers/dish")), t = e(require("./reducers/coupon")), a = e(require("./reducers/cart")), i = e(require("./reducers/cartToast")), s = e(require("./reducers/extraInfo")), o = e(require("./reducers/menuInfo")), n = e(require("./reducers/report")), c = e(require("./reducers/mustDish")), l = e(require("./reducers/panel")), f = e(require("./reducers/add-on")), p = (0, 
r.createStore)((0, r.combineReducers)({
    dish: d.default,
    coupon: t.default,
    cart: a.default,
    cartToast: i.default,
    extraInfo: s.default,
    menuInfo: o.default,
    report: n.default,
    mustDish: c.default,
    panel: l.default,
    addOn: f.default
}), (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || r.compose)((0, r.applyMiddleware)(u.default)));

exports.default = p;