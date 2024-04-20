var t = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.UPDATE_MUST_DISH = void 0, exports.toggleMustDishPanelAction = function(t) {
    return function(u) {
        t ? (u(o(s.MUSTDISH_PANEL_STATUS.VISIBLE)), u(M())) : u(h());
    };
}, exports.toggleMustDishVisibleAction = function(t) {
    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return function(e, n) {
        var r = u.default.getIn(n(), [ "mustDish", "mustDishPanelStatus" ]), a = u.default.getIn(n(), [ "cart", "miniCartVisible" ]);
        r !== s.MUSTDISH_PANEL_STATUS.CLOSE && (t && !a ? (e(o(s.MUSTDISH_PANEL_STATUS.VISIBLE)), 
        i && e(M())) : e(o(s.MUSTDISH_PANEL_STATUS.INVISIBLE)));
    };
}, exports.updateModifiedMultiDishLegal = function(t) {
    return r({
        isModifiedMultiDishLegal: t
    });
}, exports.updateMustDishCartDiffAction = d, exports.updateMustDishEnoughAction = D, 
exports.updateMustDishGroupIdAction = f, exports.updateMustDishPanelInfos = M, exports.updateMustDishStatus = function(t, r) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, u.default)([]), d = arguments.length > 3 ? arguments[3] : void 0;
    return function(h, g) {
        var c, p = u.default.getIn(g(), [ "mustDish", "isModifiedMultiDishLegal" ]), I = i.default.checkCartMustDishStatus(p, t, r), m = I.isMustDishEnough, T = I.aggregatedMultiMustGroup, _ = i.default.getMultiMustDishList(t, r).multiMustDishInfo;
        if (h(D(m)), h(a(_)), h(l(T)), (null == _ || null == (c = _.multiStableList) ? void 0 : c.length) > 1 && e.default.addCustom("multiMustDishEnoughCount", 1, {
            count: m ? 0 : 1
        }), null != o && o.length) {
            var A = u.default.getIn(g(), [ "mustDish", "mustDishPanelStatus" ]);
            if (void 0 !== A && A !== s.MUSTDISH_PANEL_STATUS.CLOSE || (0, n.isInMustDishPage)()) {
                if (d) h(M()); else {
                    var E = u.default.getIn(g(), [ "mustDish", "multiDishList" ]), L = u.default.getIn(g(), [ "mustDish", "groupId" ]);
                    h(S(E = L ? i.default.updateDishCountFromMustDishPanel(o, E, L) : i.default.updateMustDishCountFromCart(o, E)));
                }
                h(f(""));
            }
        }
    };
};

var u = t(require("../../miniprogram_npm/seamless-immutable/index.js")), i = t(require("../../modules/MustDishSdk")), e = t(require("../../lib/mix/log")), s = require("../../constants/cartConstants"), n = require("../../lib/mix/util");

function r(t) {
    return {
        type: "UPDATE_MUST_DISH",
        payload: t
    };
}

exports.UPDATE_MUST_DISH = "UPDATE_MUST_DISH";

function o(t) {
    return r({
        mustDishPanelStatus: t
    });
}

function a(t) {
    return r({
        multiMustDishInfo: t
    });
}

function l(t) {
    return r({
        aggregatedMultiMustGroup: t
    });
}

function D(t) {
    return r({
        isMustDishEnough: t
    });
}

function f(t) {
    return r({
        groupId: t
    });
}

function d(t) {
    return r({
        mustDishCartDiff: t
    });
}

function h() {
    return function(t) {
        t(o(s.MUSTDISH_PANEL_STATUS.CLOSE)), t(d(0));
    };
}

function S(t) {
    return function(u) {
        u(function(t) {
            return r({
                multiDishList: t
            });
        }(t)), (!t || t && 0 === Object.keys(t).length) && u(h());
    };
}

function M() {
    return function(t, e) {
        var s = u.default.getIn(e(), [ "mustDish", "multiMustDishInfo" ]), n = u.default.getIn(e(), [ "mustDish", "aggregatedMultiMustGroup" ]);
        t(S(i.default.splitMustDishList(s, n)));
    };
}