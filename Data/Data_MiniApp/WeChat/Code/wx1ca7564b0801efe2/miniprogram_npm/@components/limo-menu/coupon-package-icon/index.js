var e = require("../../../../b/helpers/interopRequireDefault"), o = require("../../../@limo/container/behaviors/index"), t = e(require("../../../seamless-immutable/index.js")), i = e(require("../../../../store/menu")), a = e(require("../common-behaviors/storeBehavior")), r = require("../../../../lib/mix/util");

Component({
    behaviors: [ a.default, o.commonBehavior, o.limoShim ],
    properties: {
        couponPageSize: {
            type: Number,
            value: 60
        },
        imgUrl: {
            type: String,
            value: ""
        },
        sizeScale: {
            type: Number,
            value: 1
        }
    },
    data: {
        defaultImg: "https://p0.meituan.net/travelcube/d5cb096d313914959d4125f639926ffe34926.gif"
    },
    created: function() {
        this.store = i.default;
    },
    methods: {
        limoReady: function() {
            this.commonBehaviorsStoreBehavior_limoReady();
        },
        mapToState: function(e) {
            return {
                headInfo: t.default.getIn(e, [ "extraInfo", "headInfo" ]) || (0, t.default)({})
            };
        },
        openCouponPackagePanel: function() {
            var e = this.data.headInfo, o = e.memberInfo, t = e.fmpBizData, i = (null == o ? void 0 : o.cardId) || "", a = ((null == t ? void 0 : t.shopBaseInfo) || {}).orgId;
            this.showDialog("voucher-menu-select-modal", {
                modalTitle: "超值券包",
                hideClose: !1,
                requestInfo: {
                    requestHost: (0, r.getMemberHost)(),
                    body: {
                        cardId: i
                    },
                    headers: {
                        orgId: a,
                        withCredentials: !0
                    }
                }
            }, {
                position: "bottom"
            });
        }
    },
    ready: function() {
        this.limoReady();
    }
});