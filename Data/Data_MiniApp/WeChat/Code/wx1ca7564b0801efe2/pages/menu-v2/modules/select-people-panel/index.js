var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), o = e(require("../../../../commons/component")), i = require("../../../../commons/constants");

(0, o.default)({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        peopleCount: {
            type: String,
            value: ""
        }
    },
    data: {
        hasTabBar: !0,
        peopleList: [ "1", "2", "3", "4", "5", "6", "7", "-1" ],
        showPeopleCount: "1"
    },
    lifetimes: {
        attached: function() {
            this.setData({
                showPeopleCount: this.data.peopleCount
            });
        }
    },
    methods: {
        closeSelectPeoplePanel: function() {
            this.entity.get(i.TYPES.LIMO).limoCloseDialog("select-people-panel");
        },
        selectPeopleCount: function(e) {
            var t = e.currentTarget.dataset.peopleCount;
            -1 == +t ? (this.entity.get(i.TYPES.LIMO).limoShowDialog("calculator-panel", {
                calcStatus: i.CALCULATOR_STATUS.PEOPLE_COUNT
            }, {
                position: "bottom"
            }), this.closeSelectPeoplePanel()) : (this.setData({
                showPeopleCount: t
            }), this.updatePeopleCount(t));
        },
        updatePeopleCount: function(e) {
            var t, o, l = this;
            setTimeout(function() {
                l.closeSelectPeoplePanel();
            }, 100), null == (t = this.entity) || t.get(i.EVENTS.SET_OPTION)("peopleCount", e), 
            null == (o = this.entity) || o.get(i.TYPES.EMITTER).emit(i.EVENTS.CHANGE_PEOPLE, {
                peopleCount: e
            });
        }
    }
});