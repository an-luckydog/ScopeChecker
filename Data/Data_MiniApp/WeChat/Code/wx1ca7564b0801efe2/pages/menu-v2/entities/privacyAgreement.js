var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = e(require("../../../b/regenerator")), n = require("../../../b/helpers/asyncToGenerator"), i = require("../../../b/helpers/classCallCheck"), s = require("../../../b/helpers/createClass"), a = e(require("../../../miniprogram_npm/@limo/core/index.js")), o = require("../../../commons/inversify"), u = require("../../../commons/constants"), p = (0, 
o.injectable)()(t = function(e) {
    return (0, o.inject)(u.TYPES.LIMO)(e, void 0, 0);
}(t = function(e) {
    return (0, o.inject)(u.TYPES.REQUEST)(e, void 0, 1);
}(t = function(e) {
    return (0, o.inject)(u.TYPES.OPTIONS)(e, void 0, 2);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ "undefined" == typeof ILimo ? Object : ILimo, "undefined" == typeof Request ? Object : Request, "undefined" == typeof Map ? Object : Map ])(t = function() {
    function e(t, r, n) {
        i(this, e), this.limo = t, this.request = r, this.options = n, this.fromMenu = void 0, 
        this.shopId = void 0, this.AGREEMENT_CACHE = void 0, this.getAgreementUrl = void 0, 
        this.signAgreementUrl = void 0, this.cacheAgreement = void 0, this.needSign = void 0, 
        this.templateIds = void 0, this.agreements = void 0, this.type = void 0, this.fromMenu = !0, 
        this.shopId = "", this.AGREEMENT_CACHE = "MT_AGREEMENT", this.getAgreementUrl = "/agreement/queryNeedSignAgreements", 
        this.signAgreementUrl = "/agreement/signAgreements", this.cacheAgreement = {}, this.needSign = !0, 
        this.templateIds = [], this.agreements = [], this.type = 1;
    }
    var t, o;
    return s(e, [ {
        key: "privacyAgreementConfirm",
        value: (o = n(r.default.mark(function e() {
            var t, n;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return this.agreements, t = this.templateIds, this.type, e.next = 5, this.request.post(this.signAgreementUrl, {
                        sceneId: 3,
                        signPlatform: 4,
                        agreementTemplateIds: t
                    });

                  case 5:
                    200 === (null == (n = e.sent) ? void 0 : n.code) ? (this.limo.limoCloseDialog("privacy-agreement"), 
                    a.default.getLimoRuntime().showToast({
                        icon: "none",
                        title: "签署成功",
                        duration: 2e3
                    })) : console.log(n);

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return o.apply(this, arguments);
        })
    }, {
        key: "privacyAgreementReject",
        value: function() {
            wx.exitMiniProgram();
        }
    }, {
        key: "getAgreement",
        value: (t = n(r.default.mark(function e() {
            var t, n, i, s, a, o, u, p;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this.needSign) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (!(Object.keys(this.cacheAgreement).length > 0)) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return", this.cacheAgreement);

                  case 4:
                    return e.next = 6, this.request.post(this.getAgreementUrl, {
                        bizLine: 600,
                        sceneId: 3,
                        isCacheUser: !1,
                        fromMenu: !!this.fromMenu
                    });

                  case 6:
                    if (t = e.sent, n = t.data, i = t.code, n && 200 === i) {
                        e.next = 11;
                        break;
                    }
                    return e.abrupt("return");

                  case 11:
                    if (s = n.agreementVOs, a = n.popUpWindowsType, null !== s && 0 !== s.length) {
                        e.next = 14;
                        break;
                    }
                    return e.abrupt("return", void (this.needSign = !1));

                  case 14:
                    o = this.responseHandler(n), u = o.templateIds, p = o.agreements, this.limo.limoShowDialog("privacy-agreement", {
                        templateIds: u,
                        agreements: p,
                        popUpWindowsType: a
                    }, {
                        maskClosable: !1,
                        position: "center"
                    });

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return t.apply(this, arguments);
        })
    }, {
        key: "responseHandler",
        value: function(e) {
            var t = e.agreementVOs, r = e.popUpWindowsType;
            this.cacheAgreement = e;
            var n = [], i = [];
            return null == t || t.forEach(function(e) {
                var t = e.agreementTemplateVO, r = null == t ? void 0 : t.id;
                r && (n.push(r), i.push(t));
            }), this.templateIds = n, this.agreements = i, this.type = r, {
                templateIds: n,
                agreements: i,
                popUpWindowsType: r
            };
        }
    } ]), e;
}()) || t) || t) || t) || t) || t) || t;

exports.default = p;