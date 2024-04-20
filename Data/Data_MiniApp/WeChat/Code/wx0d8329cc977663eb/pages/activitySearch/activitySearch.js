getApp();

Page({
    data: {
        funArray: [ "理想信念", "文化艺术", "体育素质", "学术科技", "实践服务", "社会工作" ],
        rankArray: [ "省级", "校级", "院级" ],
        favor: [ {
            value: "1",
            name: "是"
        }, {
            value: "0",
            name: "否"
        } ],
        join: [ {
            value: "1",
            name: "是"
        }, {
            value: "0",
            name: "否"
        } ],
        index1: "",
        dates: "",
        rank: "",
        cId: "",
        index2: ""
    },
    goDetail: function() {
        wx.navigateTo({
            url: "../actContent/act"
        });
    },
    favorChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value);
        a.detail.value;
        this.setData({
            index1: a.detail.value
        });
    },
    joinChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value);
        a.detail.value;
        this.setData({
            index2: a.detail.value
        });
    },
    bindfunPickerChange: function(a) {
        console.log("....." + a);
        a.detail.value;
        var e = parseInt(a.detail.value);
        e += 1, this.setData({
            funIndex: a.detail.value,
            cId: e
        });
    },
    bindrankPickerChange: function(a) {
        var e = this, t = a.detail.value, n = e.data.rankArray[t];
        this.setData({
            rankIndex: a.detail.value,
            rank: n
        });
    },
    bindDateChange: function(a) {
        console.log(a.detail.value), this.setData({
            dates: a.detail.value
        });
    },
    clickButton: function(a) {
        wx.navigateTo({
            url: "../activityResault/activityResault?best=" + this.data.index1 + "&&activitytimestart=" + this.data.dates + "&&level=" + this.data.rank + "&&categoryId=" + this.data.cId + "&&can=" + this.data.index2
        });
    },
    onLoad: function() {}
});