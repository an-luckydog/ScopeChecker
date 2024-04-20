Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.__DO_NOT_USE__ActionTypes = void 0, exports.applyMiddleware = function() {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
    return function(r) {
        return function() {
            var o = r.apply(void 0, arguments), i = function() {
                throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            }, u = {
                getState: o.getState,
                dispatch: function() {
                    return i.apply(void 0, arguments);
                }
            }, a = n.map(function(e) {
                return e(u);
            });
            return i = s.apply(void 0, t(a))(o.dispatch), e(e({}, o), {}, {
                dispatch: i
            });
        };
    };
}, exports.bindActionCreators = function(e, t) {
    if ("function" == typeof e) return c(e, t);
    if ("object" != n(e) || null === e) throw Error("bindActionCreators expected an object or a function, instead received ".concat(null === e ? "null" : n(e), ". ") + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    var r = {};
    for (var o in e) {
        var i = e[o];
        "function" == typeof i && (r[o] = c(i, t));
    }
    return r;
}, exports.combineReducers = function(e) {
    for (var t = Object.keys(e), r = {}, n = 0; t.length > n; n++) {
        var o = t[n];
        "function" == typeof e[o] && (r[o] = e[o]);
    }
    var i, c = Object.keys(r);
    try {
        !function(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t];
                if (void 0 === r(void 0, {
                    type: u.INIT
                })) throw Error('Reducer "'.concat(t, '" returned undefined during initialization. ') + "If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                if (void 0 === r(void 0, {
                    type: u.PROBE_UNKNOWN_ACTION()
                })) throw Error('Reducer "'.concat(t, '" returned undefined when probed with a random type. ') + "Don't try to handle ".concat(u.INIT, ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
            });
        }(r);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        i = e;
    }
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
        if (i) throw i;
        for (var n = !1, o = {}, u = 0; c.length > u; u++) {
            var s = c[u], f = e[s], d = (0, r[s])(f, t);
            if (void 0 === d) {
                var l = a(s, t);
                throw Error(l);
            }
            o[s] = d, n = n || d !== f;
        }
        return (n = n || c.length !== Object.keys(e).length) ? o : e;
    };
}, exports.compose = s, exports.createStore = function e(t, i, a) {
    if ("function" == typeof i && "function" == typeof a || "function" == typeof a && "function" == typeof arguments[3]) throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
    if ("function" == typeof i && void 0 === a && (a = i, i = void 0), void 0 !== a) {
        if ("function" != typeof a) throw Error("Expected the enhancer to be a function.");
        return a(e)(t, i);
    }
    if ("function" != typeof t) throw Error("Expected the reducer to be a function.");
    var c = t, s = i, f = [], d = f, l = !1;
    function p() {
        d === f && (d = f.slice());
    }
    function h() {
        if (l) throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return s;
    }
    function y(e) {
        if ("function" != typeof e) throw Error("Expected the listener to be a function.");
        if (l) throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
        var t = !0;
        return p(), d.push(e), function() {
            if (t) {
                if (l) throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                t = !1, p();
                var r = d.indexOf(e);
                d.splice(r, 1), f = null;
            }
        };
    }
    function b(e) {
        if (!function(e) {
            if ("object" != n(e) || null === e) return !1;
            for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t;
        }(e)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (l) throw Error("Reducers may not dispatch actions.");
        try {
            l = !0, s = c(s, e);
        } finally {
            l = !1;
        }
        for (var t = f = d, r = 0; t.length > r; r++) (0, t[r])();
        return e;
    }
    return b({
        type: u.INIT
    }), r({
        dispatch: b,
        subscribe: y,
        getState: h,
        replaceReducer: function(e) {
            if ("function" != typeof e) throw Error("Expected the nextReducer to be a function.");
            c = e, b({
                type: u.REPLACE
            });
        }
    }, o, function() {
        var e = y;
        return r({
            subscribe: function(t) {
                if ("object" != n(t) || null === t) throw new TypeError("Expected the observer to be an object.");
                function r() {
                    t.next && t.next(h());
                }
                return r(), {
                    unsubscribe: e(r)
                };
            }
        }, o, function() {
            return this;
        });
    });
};

var e = require("../../b/helpers/objectSpread2"), t = require("../../b/helpers/toConsumableArray"), r = require("../../b/helpers/defineProperty"), n = require("../../b/helpers/typeof"), o = function(e) {
    var t, r = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
    return "function" == typeof r ? r.observable ? t = r.observable : (t = r("observable"), 
    r.observable = t) : t = "@@observable", t;
}(), i = function() {
    return Math.random().toString(36).substring(7).split("").join(".");
}, u = {
    INIT: "@@redux/INIT".concat(i()),
    REPLACE: "@@redux/REPLACE".concat(i()),
    PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION".concat(i());
    }
};

function a(e, t) {
    var r = t && t.type;
    return "Given ".concat(r && 'action "'.concat(r + "", '"') || "an action", ', reducer "').concat(e, '" returned undefined. ') + "To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.";
}

function c(e, t) {
    return function() {
        return t(e.apply(this, arguments));
    };
}

function s() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return 0 === t.length ? function(e) {
        return e;
    } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments));
        };
    });
}

exports.__DO_NOT_USE__ActionTypes = u;