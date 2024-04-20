var e = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        bgType: {
            type: Number,
            value: 1
        },
        bgColor: {
            type: String,
            value: "DEFAULT_GOLD"
        },
        bgPicUrl: {
            type: String,
            value: ""
        }
    },
    data: {
        componentStyle: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.getCardInfo();
        },
        getCardInfo: function() {
            var e, t = this.properties, n = t.bgType, o = t.bgColor, r = t.bgPicUrl;
            e = 2 === n && r ? "background: url(".concat(r, ") center / 100% 100% no-repeat") : "DEFAULT_BLACK" === o ? "background: url(https://p0.meituan.net/ingee/db7bd5b4019afc99e4c9fe14ccba8eed113917.png) no-repeat right top / 60% 100%, linear-gradient(113deg, #39393D 0%, #404042 100%)" : "background: url(https://p0.meituan.net/ingee/39994bfb41dca2c7c1ba7dc7db982c9522878.png) no-repeat right bottom / 24% 56%, linear-gradient(115deg, #FED6BF 7%, #FFC2A2 100%) top/100% 100%", 
            this.setData({
                componentStyle: e
            });
        }
    }
});