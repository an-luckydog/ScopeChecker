var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, i = require("../../b/helpers/objectSpread2"), r = require("../../b/helpers/classCallCheck"), n = require("../../b/helpers/createClass"), s = require("../../commons/constants"), a = e(require("../../commons/emitter")), o = require("../../commons/inversify"), c = (0, 
o.injectable)()(t = function(e) {
    return (0, o.inject)(s.TYPES.LIMO_FACTORY)(e, void 0, 0);
}(t = function(e) {
    return (0, o.inject)(s.TYPES.EMITTER)(e, void 0, 1);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ Function, void 0 === a.default ? Object : a.default ])(t = function() {
    function e(t, i) {
        r(this, e), this.limoFactory = t, this.emitter = i, this._cardId = "", this.loginParams = {}, 
        this.emitter.on(s.CART_PROCESS_EVENT.ADD_TO_CART_PROCESS, this.addPreCheck, this);
    }
    return n(e, [ {
        key: "run",
        value: function(e) {
            var t = e.cardId, r = e.loginParams;
            this._cardId = t, t && this.emitter.emit(s.EVENTS.LOGIN_SUCCESS), this.loginParams = i({
                poiType: 3
            }, r);
        }
    }, {
        key: "checkLogin",
        value: function() {
            return !!this._cardId || (this.limoFactory().limoShowDialog("universal-login", {
                isDialog: !0,
                useNewAuthVersion: !0,
                commonHeaders: this.loginParams,
                agreementParams: [ {
                    sceneType: 10
                } ],
                useRevoke: !0,
                revokePrefix: "universalLogin"
            }, {
                position: "bottom"
            }), !1);
        }
    }, {
        key: "addPreCheck",
        value: function(e) {
            return !Array.isArray(e.extendList) || !e.extendList.find(function(e) {
                return Array.isArray(e) && "point-dish-extend" === e[0];
            }) || this.checkLogin();
        }
    }, {
        key: "cardId",
        get: function() {
            return this._cardId;
        }
    } ]), e;
}()) || t) || t) || t) || t) || t;

exports.default = c;