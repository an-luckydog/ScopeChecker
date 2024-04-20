var e = require("../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = e(require("../../../../b/regenerator")), o = require("../../../../b/helpers/asyncToGenerator"), a = require("../../../../b/helpers/classCallCheck"), i = require("../../../../b/helpers/createClass"), n = require("../../../../commons/inversify"), s = require("../../../../commons/constants"), l = require("../../../../commons/types"), u = (0, 
n.injectable)()(t = function(e) {
    return (0, n.inject)(s.TYPES.LIMO)(e, void 0, 0);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ void 0 === l.ILimo ? Object : l.ILimo ])(t = function() {
    function e(t) {
        a(this, e), this.limo = t;
    }
    var t;
    return i(e, [ {
        key: "run",
        value: (t = o(r.default.mark(function e() {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    this.showStatusPanel({
                        peopleCount: "1"
                    });

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return t.apply(this, arguments);
        })
    }, {
        key: "showStatusPanel",
        value: function(e) {
            this.limo.limoShowDialog("select-people-panel", e, {
                position: "bottom",
                maskClosable: !0,
                header: {
                    closeable: !0,
                    title: "选择就餐人数",
                    backgroundColor: "#fff"
                }
            });
        }
    } ]), e;
}()) || t) || t) || t) || t;

exports.default = u;