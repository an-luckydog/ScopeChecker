var e = getApp();

Component({
    data: {
        selected: 0,
        redD: e.globalData.haveOffer,
        color: "#111",
        selectedColor: "#6CB7F4",
        list: [ {
            pagePath: "/pages/index/index",
            iconPath: "/pages/images/home1.png",
            selectedIconPath: "/pages/images/home.png",
            text: "首页"
        }, {
            pagePath: "/pages/my/my",
            iconPath: "/pages/images/person1.png",
            selectedIconPath: "/pages/images/person.png",
            text: "我的"
        } ]
    },
    attached: function() {},
    methods: {
        switchTab: function(a) {
            var t = a.currentTarget.dataset;
            wx.switchTab({
                url: t.path
            }), this.setData({
                selected: t.index,
                redD: e.globalData.haveOffer
            });
        }
    }
});