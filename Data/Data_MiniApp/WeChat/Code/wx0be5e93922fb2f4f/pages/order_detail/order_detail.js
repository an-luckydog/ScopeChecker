var t = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http.js"));

Page({
    data: {
        orderId: "",
        activeIndex: 0,
        data: {},
        imgUrl: t.default.imgUrl
    },
    onLoad: function(t) {
        console.log(t, "------"), this.setData({
            orderId: t.orderId,
            activeIndex: t.activeIndex
        }, this.orderList({
            orderId: t.orderId
        }, t.activeIndex));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    orderList: function(e, a) {
        var s = this;
        t.default.orderinfo(e, !1).then(function(t) {
            var e = t;
            e.activeIndex = a, 1 == e.status ? e.statusName = "进行中" : 2 == e.status ? e.statusName = "已超时" : 0 == e.status ? e.statusName = "未支付" : 3 == e.status ? e.statusName = "已完成" : 4 == e.status ? e.statusName = "已退款" : 5 == e.status ? e.statusName = "部分退款" : 7 == e.status && (e.statusName = "已取消"), 
            s.setData({
                data: e
            });
        });
    }
});