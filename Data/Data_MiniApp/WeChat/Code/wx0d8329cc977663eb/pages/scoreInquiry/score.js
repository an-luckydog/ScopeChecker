var a = getApp(), e = [ [], [], [], [], [], [] ], t = [ [], [], [], [], [], [] ], s = [ 0, 0, 0, 0, 0, 0 ];

require("../../utils/util.js");

Page({
    data: {
        objectArray: [],
        index: 0,
        display: [ "display:none", "display:none", "display:none", "display:none", "display:none", "display:none" ],
        scoreSum: 0,
        score0: 0,
        score1: 0,
        score2: 0,
        score3: 0,
        score4: 0,
        score5: 0,
        list0: [],
        list1: [],
        list2: [],
        list3: [],
        list4: [],
        list5: []
    },
    onLoad: function() {
        e = [ [], [], [], [], [], [] ], t = [ [], [], [], [], [], [] ], s = [ 0, 0, 0, 0, 0, 0 ];
    },
    onReady: function() {
        this.searchScore();
    },
    showAllScore: function() {
        var a = new Date(), e = 2017;
        this.data.objectArray.push({
            year: parseInt(e),
            team: "秋季学期",
            text: e + "年秋"
        });
        for (var t = ++e; t < a.getFullYear(); t++) this.data.objectArray.push({
            year: t,
            team: "春季学期",
            text: t + "年春"
        }), this.data.objectArray.push({
            year: t,
            team: "秋季学期",
            text: t + "年秋"
        });
        a.getMonth() >= 7 ? (this.data.objectArray.push({
            year: a.getFullYear(),
            team: "春季学期",
            text: a.getFullYear() + "年春"
        }), this.data.objectArray.push({
            year: a.getFullYear(),
            team: "秋季学期",
            text: a.getFullYear() + "年秋"
        })) : this.data.objectArray.push({
            year: a.getFullYear(),
            team: "春季学期",
            text: a.getFullYear() + "年春"
        }), this.data.objectArray.push({
            year: "0",
            team: "",
            text: "全部"
        }), this.setData({
            objectArray: this.data.objectArray,
            index: this.data.objectArray.length - 2
        });
        var s = {
            detail: {
                value: this.data.objectArray.length - 2
            }
        };
        this.bindPickerChange(s);
    },
    bindPickerChange: function(a) {
        for (var r = this.data.objectArray[a.detail.value].year, o = this.data.objectArray[a.detail.value].team, i = 0; i <= 5; i++) if (0 != t[i].length) {
            s[i] = 0, e[i] = [];
            for (var d in t[i]) "0" == r ? (e[i].push(t[i][d]), s[i] += parseFloat(t[i][d].score)) : parseInt(t[i][d].scoreYear) == parseInt(r) && o == t[i][d].scoreTeam && (e[i].push(t[i][d]), 
            s[i] += parseFloat(t[i][d].score));
        } else s[i] = 0;
        for (var l = 0; l < 6; l++) 0 == Math.abs(s[l] - 0) ? this.data.display[l] = "display:block" : this.data.display[l] = "display:none";
        this.setData({
            display: this.data.display,
            index: a.detail.value,
            list0: e[0],
            list1: e[1],
            list2: e[2],
            list3: e[3],
            list4: e[4],
            list5: e[5],
            score0: s[0].toFixed(2),
            score1: s[1].toFixed(2),
            score2: s[2].toFixed(2),
            score3: s[3].toFixed(2),
            score4: s[4].toFixed(2),
            score5: s[5].toFixed(2),
            scoreSum: (s[0] + s[1] + s[2] + s[3] + s[4] + s[5]).toFixed(2)
        });
    },
    searchScore: function(r) {
        var o = this;
        wx.request({
            url: a.globalData.serverAddress + "/score/queryScore",
            header: {
                Cookie: a.globalData.Cookie
            },
            method: "get",
            dataType: "json",
            data: {
                userId: a.globalData.userInfo.userId
            },
            success: function(a) {
                if (null == a.data.data) return 0;
                for (var r in a.data.data) {
                    var i = {
                        name: a.data.data[r].PROJECT_NAME,
                        level: a.data.data[r].LEVEL,
                        score: a.data.data[r].ACTIVITY_SCORE,
                        categoryName: a.data.data[r].CATEGORY_NAME,
                        scoreYear: a.data.data[r].SCORE_YEAR,
                        scoreTeam: a.data.data[r].SCORE_TERM,
                        identity: a.data.data[r].ROLE
                    };
                    switch (null == i.name && (i.name = null == a.data.data[r].IMPORT_SCORE_NAME ? a.data.data[r].ACTIVITY_NAME : a.data.data[r].IMPORT_SCORE_NAME), 
                    a.data.data[r].CATEGORY_NAME) {
                      case "理想信念":
                        t[0].push(i), e[0].push(i);
                        break;

                      case "实践服务":
                        t[1].push(i), e[1].push(i);
                        break;

                      case "文化艺术":
                        t[2].push(i), e[2].push(i);
                        break;

                      case "学术科技":
                        t[3].push(i), e[3].push(i);
                        break;

                      case "社会工作":
                        t[4].push(i), e[4].push(i);
                        break;

                      case "体育素质":
                        t[5].push(i), e[5].push(i);
                    }
                }
                for (r = 0; r <= 5; r++) if (0 != e[r].length) for (var d in e[r]) s[r] += parseFloat(e[r][d].score); else s[r] = 0;
                o.showAllScore();
            }
        });
    }
});