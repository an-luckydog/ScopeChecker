Component({
    data: {
        color: "#fff",
        selectedColor: "#FED25D",
        borderStyle: "black",
        backgroundColor: "#fff",
        list: [ {
            pagePath: "/pages/index/index",
            iconPath: "/static/icon-index-spring.png",
            selectedIconPath: "/static/icon-index-spring.png",
            text: "首页"
        }, {
            pagePath: "/pages/scan/openscan",
            iconPath: "/static/icon-scan-spring.png",
            selectedIconPath: "/static/icon-scan-spring.png",
            text: "",
            bulge: !0
        }, {
            pagePath: "/pages/mybag/mybag",
            iconPath: "/static/icon-center-spring.png",
            selectedIconPath: "/static/icon-center-spring.png",
            text: "我的"
        } ],
        navList: [ {
            text: "首页",
            iconPath: "https://xcxsite.vjifen.com/v/static/qp120/hbTab/no-index.png",
            selectIconPath: "https://xcxsite.vjifen.com/v/static/qp120/hbTab/select-index.png",
            pagePath: "/pages/index/index"
        }, {
            text: "商城",
            iconPath: "https://xcxsite.vjifen.com/v/static/qp120/hbTab/no-shop.png",
            selectIconPath: "https://xcxsite.vjifen.com/v/static/qp120/hbTab/select-shop.png",
            pagePath: "/pages/mall/mall"
        }, {
            text: "扫码",
            iconPath: "https://xcxsite.vjifen.com/v/static/qp120/index/code.png",
            selectIconPath: "https://xcxsite.vjifen.com/v/static/qp120/index/code.png",
            pagePath: "/pages/scan/openScan",
            bulge: !0
        }, {
            text: "周年庆",
            iconPath: "https://xcxsite.vjifen.com/v/static/qp120/hbTab/select-120.png",
            selectIconPath: "https://xcxsite.vjifen.com/v/static/qp120/hbTab/select-120.png",
            pagePath: "/pages/activitys/task",
            is120: !0
        }, {
            text: "我的",
            iconPath: "https://xcxsite.vjifen.com/v/static/qp120/hbTab/no-my.png",
            selectIconPath: "https://xcxsite.vjifen.com/v/static/qp120/hbTab/select-my.png",
            pagePath: "/pages/personal/personal"
        } ]
    },
    onLaunch: function() {
        console.log("============"), console.log(getApp().globalData.popUpStatus);
    },
    attached: function() {},
    methods: {
        switchTab: function(t) {
            console.log(this.data.list);
            var e = t.currentTarget.dataset.path;
            wx.switchTab({
                url: e
            });
        },
        handleSwitchTab: function(t) {
            var e = t.currentTarget.dataset.path;
            wx.switchTab({
                url: e
            });
        }
    }
});