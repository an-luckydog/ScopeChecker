var e = require("../../../../b/helpers/interopRequireDefault")(require("../../../@limo/core/index.js")), t = require("../../../@limo/container/behaviors/index"), i = require("../../../../modules/LXHelper");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        hide: {
            type: Boolean,
            value: !1
        },
        loginMode: {
            type: Number
        },
        count: {
            type: String,
            value: ""
        },
        couponStyle: {
            type: Object,
            value: {}
        }
    },
    data: {
        ready: !1,
        x: 0,
        y: 0
    },
    lifetimes: {
        created: function() {},
        ready: function() {
            var t = this, i = e.default.getLimoRuntime().createSelectorQuery().in(this);
            i.selectAll(".coupon-af,.coupon-af__main").boundingClientRect(), i.exec(function(e) {
                var i = e[0][0], n = e[0][1], o = i.width - n.width - 48, r = i.height - n.height - 48;
                t.setData({
                    x: o,
                    y: r
                }), setTimeout(function() {
                    t.setData({
                        ready: !0
                    });
                }, 200);
            });
        },
        attached: function() {
            (0, i.sendMV)("b_eco_r5n4jnxf_mv");
        }
    },
    methods: {
        onTap: function() {
            var e = this.data, t = e.ready, n = e.hide, o = e.loginMode;
            t && !n && (o ? this.triggerEvent("login", o) : ((0, i.sendMC)("b_eco_r5n4jnxf_mc"), 
            this.triggerEvent("click")));
        }
    }
});