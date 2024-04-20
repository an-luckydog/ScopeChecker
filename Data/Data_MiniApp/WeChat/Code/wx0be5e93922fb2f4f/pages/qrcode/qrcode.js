var e, t = require("../../utils/qrcode.min.js"), o = 300 / (750 / wx.getSystemInfoSync().windowWidth);

Page({
    data: {
        text: "https://github.com/tomfriwel/weapp-qrcode",
        image: "",
        code_w: o
    },
    onLoad: function(a) {
        e = new t("canvas", {
            text: "https://wxapp.wanhuchina.com/scan?storeid=1",
            width: o,
            height: o,
            colorDark: "#1CA4FC",
            colorLight: "white",
            correctLevel: t.CorrectLevel.H
        });
    },
    confirmHandler: function(t) {
        var o = t.detail.value;
        e.makeCode(o);
    },
    inputHandler: function(e) {
        var t = e.detail.value;
        this.setData({
            text: t
        });
    },
    tapHandler: function() {
        e.makeCode(this.data.text);
    },
    save: function() {
        console.log("save"), wx.showActionSheet({
            itemList: [ "保存图片" ],
            success: function(t) {
                console.log(t.tapIndex), 0 == t.tapIndex && e.exportImage(function(e) {
                    wx.saveImageToPhotosAlbum({
                        filePath: e
                    });
                });
            }
        });
    }
});