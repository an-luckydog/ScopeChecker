var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../modules/userHelper"), n = require("../modules/menu/cart/cartReport"), r = e(require("../lib/PikeAdapter")), i = e(require("../lib/enhanceDebounce")), s = require("../lib/env"), a = e(require("./rmsStorage")), o = null, u = {}, d = (0, 
i.default)(function(e, t, n) {
    o && o.send(e(t, n));
}, 300, !0);

function l(e, t) {
    return {
        bizType: 1,
        msgType: 1,
        message: JSON.stringify({
            type: e,
            bizFlag: "2.0",
            data: Object.assign(t, u)
        })
    };
}

var c = {
    newMessageType: {
        OPERATE_CART: 1,
        USER_JOIN: 2,
        POST_ORDER_SUCCESS: 13
    },
    cartConfig: {},
    initConnect: function(e) {
        (0, n.sendCartInitPoint)(n.INIT_CLOUD_CART_PROCEDURE.CART_PIKE_INIT), this.cartConfig = {
            cartId: e.cartId,
            shopId: e.shopId,
            tableNum: e.tableNum
        }, u = this.cartConfig;
        var i = (0, t.getThirdUserInfo)(), d = {
            thirdUserId: (0, t.getUserIdWithPlatform)(),
            thirdNickname: (null == i ? void 0 : i.nickname) || "",
            thirdAvatar: (null == i ? void 0 : i.headimgurl) || ""
        }, l = a.default.getPickBizId();
        Object.assign(d, {
            version: 1,
            platform: (0, s.getXPlatform)(),
            appId: (0, t.getAppIdWithPlatform)()
        }), l = "rms_marketing_c_pike", o = new r.default(d, {
            productBusinessId: l,
            stageBusinessId: l,
            testBusinessId: l
        });
    },
    sendNewOperateCart: function(e) {
        return d(l, this.newMessageType.OPERATE_CART, e);
    },
    sendNewUserJoin: function() {
        return d(l, this.newMessageType.USER_JOIN, {});
    },
    onMessage: function(e) {
        o && o.on("message", e);
    },
    onReady: function(e) {
        (0, n.sendCartInitPoint)(n.INIT_CLOUD_CART_PROCEDURE.CART_PIKE_CONNECT), o && o.on("connect", e);
    },
    close: function() {
        o && o.close();
    },
    isConnected: function() {
        return null !== o && null !== o.pike && o.pike.isReady();
    }
};

exports.default = c;