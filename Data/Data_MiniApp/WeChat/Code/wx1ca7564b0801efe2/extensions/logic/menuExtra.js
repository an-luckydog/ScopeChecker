var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = e(require("../../b/regenerator")), i = require("../../b/helpers/asyncToGenerator"), n = require("../../b/helpers/classCallCheck"), s = require("../../b/helpers/createClass"), u = require("../../commons/inversify"), a = require("../../commons/constants"), o = require("../../commons/types"), c = e(require("../../commons/emitter")), p = e(require("../../entities/rule")), l = (0, 
u.injectable)()(t = function(e) {
    return (0, u.inject)(a.TYPES.REQUEST)(e, void 0, 0);
}(t = function(e) {
    return (0, u.inject)(a.TYPES.EMITTER)(e, void 0, 1);
}(t = function(e) {
    return (0, u.inject)(a.TYPES.RULE)(e, void 0, 2);
}(t = function(e) {
    return (0, u.inject)(a.TYPES.OPTIONS)(e, void 0, 3);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ void 0 === o.Request ? Object : o.Request, void 0 === c.default ? Object : c.default, void 0 === p.default ? Object : p.default, "undefined" == typeof Map ? Object : Map ])(t = function() {
    function e(t, r, i, s) {
        n(this, e), this.request = t, this.emitter = r, this.rule = i, this.options = s, 
        this._spuExtra = {};
    }
    var t;
    return s(e, [ {
        key: "spuExtra",
        get: function() {
            return this._spuExtra;
        }
    }, {
        key: "clear",
        value: function() {
            this._spuExtra = {}, this.emitter.emit(a.EVENTS.SET_MENU_EXTRA);
        }
    }, {
        key: "run",
        value: (t = i(r.default.mark(function e(t) {
            var i, n, s, u, o;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (i = t.extraEnumList, n = t.ruleEnumList, s = this.options.get("poiId"), n && n.length && this.rule.run({
                        ruleTypes: n
                    }), i && i.length) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return");

                  case 3:
                    return u = this.options.get("bizType"), e.next = 6, this.request.post("/@biz/menu/extra", {
                        extraEnumList: i,
                        poiId: s
                    });

                  case 6:
                    (o = e.sent) && o.data && u === this.options.get("bizType") && (this._spuExtra = o.data.spuExtraInfoMap || {}, 
                    this.emitter.emit(a.EVENTS.SET_MENU_EXTRA));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return t.apply(this, arguments);
        })
    } ]), e;
}()) || t) || t) || t) || t) || t) || t) || t;

exports.default = l;