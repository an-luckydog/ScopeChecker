var a = getApp(), e = "", t = "";

Page({
    data: {
        evaluateGrade: 5,
        starSrc: [ "../images/evaluate-g.png", "../images/evaluate-g.png", "../images/evaluate-g.png", "../images/evaluate-g.png", "../images/evaluate-g.png" ]
    },
    onLoad: function(a) {
        t = a, this.setData({
            activityName: a.name,
            unit: a.unit
        });
    },
    setEvaluate: function(a) {
        switch (a.currentTarget.id) {
          case "evaluate1":
            this.showStar(1);
            break;

          case "evaluate2":
            this.showStar(2);
            break;

          case "evaluate3":
            this.showStar(3);
            break;

          case "evaluate4":
            this.showStar(4);
            break;

          case "evaluate5":
            this.showStar(5);
        }
    },
    showStar: function(a) {
        for (var e = [ "../images/evaluate-b.png", "../images/evaluate-b.png", "../images/evaluate-b.png", "../images/evaluate-b.png", "../images/evaluate-b.png" ], t = 0; t < parseInt(a); t++) e[t] = "../images/evaluate-g.png";
        this.setData({
            starSrc: e,
            evaluateGrade: a
        });
    },
    joinActivity: function() {
        var i = this;
        if (0 == e.length) return wx.showToast({
            title: "请填写评价！",
            icon: "none",
            duration: 2e3
        }), 0;
        wx.showLoading({
            title: "提交中！"
        }), wx.request({
            url: a.globalData.serverAddress + "/activity/updateSecondActivityAttend",
            data: {
                activityId: t.id,
                evaluation: e,
                star: i.data.evaluateGrade
            },
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                Cookie: a.globalData.Cookie
            },
            dataType: "json",
            success: function(a) {
                wx.hideLoading(), 1 == a.data.success ? wx.showToast({
                    title: "签到成功！",
                    duration: 2e3,
                    success: function() {
                        wx.switchTab({
                            url: "/pages/index/index"
                        });
                    }
                }) : wx.showToast({
                    title: a.data.error,
                    icon: "none",
                    duration: 2e3,
                    success: function() {}
                });
            },
            fail: function(a) {
                wx.hideLoading(), wx.showToast({
                    title: "签到失败！",
                    icon: "none",
                    duration: 2e3,
                    success: function() {}
                });
            }
        });
    },
    addText: function(a) {
        e = a.detail.value;
    }
});