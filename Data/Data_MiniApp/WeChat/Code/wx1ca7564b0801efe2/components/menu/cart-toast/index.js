var t, e, a = require("../../../b/helpers/interopRequireDefault"), i = require("../../../miniprogram_npm/@limo/container/behaviors/index"), s = require("../../../store/actions/cartToast"), r = a(require("../../../store/menu")), o = a(require("../../../store/helpers/storeBehavior")), n = ((e = n || {}).TEXT = "cartToastText", 
e.OBJ = "cartToastInfo", e.ARRAY = "toastList", e);

Component({
    behaviors: [ o.default, i.commonBehavior, i.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        toastList: {
            type: Array,
            value: [],
            observer: function(t) {
                t && t.length > 0 && this.initList({
                    type: n.ARRAY,
                    data: t
                });
            }
        },
        cartToastImg: {
            type: String,
            value: ""
        },
        cartToastText: {
            type: String,
            value: ""
        },
        cartToastInfo: {
            type: Object,
            value: {},
            observer: function(t) {
                t && t.isHaveOperateData && this.initList({
                    type: n.OBJ,
                    data: t
                });
            }
        },
        isShow: {
            type: Boolean,
            value: !0,
            observer: function(e) {
                var a = this;
                !1 === e && (t = setTimeout(function() {
                    a.setData({
                        list: []
                    });
                }, 0));
            }
        },
        fromOrderConfirm: {
            type: Boolean,
            value: !1,
            observer: function(t) {
                t && this.setData({
                    toastClass: "cart-toast order-confirm"
                });
            }
        }
    },
    data: {
        isAutoplay: !0,
        toastClass: "cart-toast",
        list: []
    },
    observers: {
        "cartToastImg, cartToastText": function(t, e) {
            if (t || e) {
                var a = e.indexOf("#&"), i = a > 0 ? e.slice(0, a) : e;
                this.initList({
                    type: n.TEXT,
                    data: {
                        img: t,
                        text: i
                    }
                });
            }
        }
    },
    created: function() {
        this.store = r.default;
    },
    methods: {
        limoReady: function() {
            this.helpersStoreBehavior_limoReady();
        },
        initList: function(t) {
            var e, a = t.type, i = t.data, s = this.data.list || [];
            s = null == (e = s) ? void 0 : e.filter(function(t) {
                if (t.cartToastText || t.isHaveOperateData) return t;
            }), a === n.OBJ ? s.push(i) : a === n.TEXT ? s.push({
                cartToastImg: i.img,
                cartToastText: i.text
            }) : a === n.ARRAY && (s = s.concat(i)), s.push({}), this.setData({
                list: s
            });
        },
        changeSwiper: function(e) {
            if (e && e.detail) {
                var a = e.detail.current;
                if (this.setData({
                    currentIndex: a
                }), a === this.data.list.length - 1) {
                    clearTimeout(t);
                    var i = this;
                    t = setTimeout(function() {
                        i.hideToast();
                    }, 1100);
                }
            }
        },
        hideToast: function() {
            this.store.dispatch((0, s.hide)());
        }
    },
    ready: function() {
        this.limoReady();
    }
});