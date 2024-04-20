var e, t = require("../../../@limo/container/behaviors/index"), o = require("../../../../modules/LXHelper"), i = ((e = i || {})[e.MEMBER_LOGIN = 1] = "MEMBER_LOGIN", 
e[e.THIRD_LOGIN = 2] = "THIRD_LOGIN", e);

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        isPadding: {
            type: Boolean,
            value: !1
        },
        imageUrl: {
            type: String,
            value: ""
        },
        customClass: {
            type: String,
            value: ""
        },
        loginMode: {
            type: Number,
            value: i.THIRD_LOGIN
        }
    },
    data: {
        loginModeMap: {
            1: {
                loginMode: i.MEMBER_LOGIN,
                triggerEvent: "",
                loginBg: "https://p0.meituan.net/travelcube/5cf8b09c2c692e6dfb30f09e83acfd4825929.png"
            },
            2: {
                loginMode: i.THIRD_LOGIN,
                triggerEvent: "gotoThirdLogin",
                loginBg: "https://p1.meituan.net/scarlett/305bb214db8e5c72d0e5eff03d2f23f6217856.png"
            }
        }
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            (0, o.sendMV)("b_eco_ew02ycnk_mv");
        },
        toLogin: function() {
            (0, o.sendMC)("b_eco_ew02ycnk_mc"), this.data.loginMode === i.MEMBER_LOGIN ? this.triggerEvent("gotoMemberLogin") : this.triggerEvent("gotoThirdLogin");
        }
    }
});