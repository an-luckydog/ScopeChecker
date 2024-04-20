var e = require("../../../../../b/helpers/interopRequireDefault"), t = require("../../../../../miniprogram_npm/@limo/container/behaviors/index"), o = e(require("../../../../../commons/component")), i = require("../../../../../commons/constants");

(0, o.default)({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        tableName: {
            type: String,
            value: ""
        },
        peopleCount: {
            type: String,
            value: ""
        }
    },
    data: {
        showPeopleCount: ""
    },
    lifetimes: {
        attached: function() {
            var e;
            null == (e = this.entity) || e.get(i.TYPES.EMITTER).on(i.EVENTS.CHANGE_PEOPLE, this.setPeople, this);
        },
        detached: function() {
            var e;
            null == (e = this.entity) || e.get(i.TYPES.EMITTER).off(i.EVENTS.CHANGE_PEOPLE, this.setPeople, this);
        }
    },
    observers: {
        peopleCount: function(e) {
            e && !this.showPeopleCount && this.setData({
                showPeopleCount: e
            });
        }
    },
    methods: {
        setPeople: function(e) {
            var t = e.peopleCount;
            this.setData({
                showPeopleCount: t
            });
        },
        openSelectPeoplePanel: function() {
            this.entity.get(i.TYPES.LIMO).limoShowDialog("select-people-panel", {
                peopleCount: this.data.showPeopleCount
            }, {
                position: "bottom",
                maskClosable: !0,
                header: {
                    closeable: !0,
                    title: "选择就餐人数",
                    backgroundColor: "#fff"
                }
            });
        }
    }
});