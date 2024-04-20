var e = require("../../../../b/helpers/interopRequireDefault"), n = e(require("../../../../miniprogram_npm/@limo/core/index.js")), t = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), i = e(require("../../../../commons/component")), r = require("../../../../commons/constants");

(0, i.default)({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        templateIds: {
            type: Array,
            value: []
        },
        agreements: {
            type: Array,
            value: []
        },
        popUpWindowsType: {
            type: Number,
            value: -1
        }
    },
    methods: {
        onAgreementClick: function(e) {
            var t, i, o, a = null == e || null == (t = e.currentTarget) || null == (i = t.dataset) ? void 0 : i.tempid, m = null == (o = this.entity) ? void 0 : o.get(r.TYPES.OPTIONS).get("poiId");
            a && n.default.getLimoRuntime().navigateTo({
                url: "/diancan-menu/pages/agreements-page/index?tempId=".concat(a, "&shopId=").concat(m)
            });
        },
        onLimoCancel: function() {
            var e;
            null == (e = this.entity) || e.get(r.TYPES.PRIVACY_AGREEMENT).privacyAgreementReject();
        },
        onLimoConfirm: function() {
            var e;
            null == (e = this.entity) || e.get(r.TYPES.PRIVACY_AGREEMENT).privacyAgreementConfirm();
        }
    }
});