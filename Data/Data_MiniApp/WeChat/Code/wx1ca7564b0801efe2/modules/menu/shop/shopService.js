var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var a = require("../../../b/helpers/classCallCheck"), t = require("../../../b/helpers/createClass"), r = e(require("../../../api/rmsStorage")), o = require("../../../lib/mix/util"), i = new (function() {
    function e() {
        a(this, e), this.data = void 0;
        var t = (0, o.getMixUrlParam)("shopId") || 0, i = r.default.getExtraInfo(t + ""), n = i.shopConfig, s = void 0 === n ? null : n, l = i.fmpBizData, u = void 0 === l ? null : l, f = i.shopInfo, p = void 0 === f ? null : f, h = i.memberInfo, d = void 0 === h ? null : h;
        this.data = {
            shopConfig: s,
            fmpBizData: u,
            shopInfo: p,
            memberInfo: d
        };
    }
    return t(e, [ {
        key: "updateShopServiceData",
        value: function(e) {
            var a = (0, o.getMixUrlParam)("shopId") || 0, t = e || r.default.getExtraInfo(a + "");
            return this.data = {
                shopConfig: t.shopConfig,
                fmpBizData: t.fmpBizData,
                shopInfo: null == t ? void 0 : t.shopInfo,
                memberInfo: t.memberInfo
            }, this.data;
        }
    }, {
        key: "getShopServiceData",
        value: function() {
            var e;
            return null != (e = this.data) && e.shopConfig ? this.data : this.updateShopServiceData();
        }
    } ]), e;
}())();

exports.default = i;