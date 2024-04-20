Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = Behavior({
    properties: {
        layout: {
            type: Object,
            value: {},
            observer: function(e) {
                var t = this.properties.componentStyle, i = this.data.compName;
                if (e && Object.keys(e).length && (!t || !Object.keys(t).length)) {
                    var r = [];
                    if (r.push("overflow:hidden"), r.push("border-radius:".concat(e.radius ? e.radius : 0, "rpx")), 
                    this.setData({
                        compStyle: r.join(";") + ";"
                    }), this.isH5 && "limo-slide" === i) {
                        var o = this.selectComponent("limo-swiper");
                        o && o.updateSlider();
                    }
                }
            }
        },
        componentStyle: {
            type: Object,
            value: {},
            observer: function(e) {
                var t = this.data.compName;
                if (e && Object.keys(e).length) {
                    var i = [];
                    if (i.push("overflow:hidden"), i.push("border-radius:".concat(e.radius ? e.radius : 0, "rpx")), 
                    this.setData({
                        compStyle: i.join(";") + ";"
                    }), this.isH5 && "limo-slide" === t) {
                        var r = this.selectComponent("limo-swiper");
                        r && r.updateSlider();
                    }
                }
            }
        }
    },
    data: {
        compStyle: "border-radius: 16rpx; overflow: hidden;"
    }
});

exports.default = e;