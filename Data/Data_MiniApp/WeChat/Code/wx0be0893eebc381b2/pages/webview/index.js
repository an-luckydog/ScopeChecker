Page({
    data: {
        url: ""
    },
    onLoad: function(t) {
        if (t.url) {
            var a = decodeURIComponent(t.url);
            this.setData({
                url: a
            });
        }
    }
});