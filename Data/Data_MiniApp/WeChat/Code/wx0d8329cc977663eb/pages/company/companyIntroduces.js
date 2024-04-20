var o = getApp();

Page({
    data: {
        id: ""
    },
    onLoad: function(o) {
        console.log("options", o), this.setData({
            id: o.id
        });
    },
    onReady: function() {
        var e = this;
        wx.request({
            url: o.globalData.serverAddress + "/firm/getFirmDetail",
            data: {
                userId: e.data.id
            },
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: o.globalData.Cookie
            },
            dataType: "json",
            success: function(o) {
                if (1 == o.data.success) {
                    var a = o.data.data[0];
                    e.setData({
                        companyName: a.FIRM_NAME,
                        businessScope: a.FIRM_BUSINESS_SCOPE,
                        companyType: a.FIRM_TYPE_NAME,
                        creteTime: a.FIRM_FOUNDING_TIME,
                        companyPosition: a.FIRM_PLACE,
                        yearGetMoney: a.FIRM_SALES_VOLUME,
                        peopleNumber: a.FIRM_STAFF_NUMBER,
                        companySlogan: a.FIRM_SLOGAN
                    });
                } else wx.showToast({
                    title: "获取详情失败，请重新获取！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});