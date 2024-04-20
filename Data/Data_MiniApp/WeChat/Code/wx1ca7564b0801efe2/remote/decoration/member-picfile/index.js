var e = require("../../../miniprogram_npm/@limo/container/behaviors/index"), t = require("../common-helpers/getMemberHead");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        picUrl: {
            type: String,
            value: "",
            observer: function(e) {
                this.initData(e);
            }
        },
        picStyle: {
            type: String,
            value: ""
        }
    },
    data: {
        headImg: "",
        sizeStyle: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.initData(this.properties.picUrl);
        },
        initData: function(e) {
            var i = ((0, t.queryMemberAvatar)(e) || {}).headUrl, r = this.properties.picStyle;
            this.setData({
                headImg: i,
                sizeStyle: r
            });
        }
    }
});