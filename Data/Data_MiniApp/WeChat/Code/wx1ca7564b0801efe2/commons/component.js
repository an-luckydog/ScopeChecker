var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    o.IS_NATIVE_MP && (e.behaviors = [ i.default ].concat(t(e.behaviors || []))), o.IS_NATIVE_ALIPAY && (e.mixins = [ i.default ].concat(t(e.mixins || [])), 
    e.options = r(r({}, e.options), {}, {
        lifetimes: !0,
        observers: !0
    })), Component(e);
};

var r = require("../b/helpers/objectSpread2"), t = require("../b/helpers/toConsumableArray"), i = e(require("./entityBehavior")), o = require("./constants");