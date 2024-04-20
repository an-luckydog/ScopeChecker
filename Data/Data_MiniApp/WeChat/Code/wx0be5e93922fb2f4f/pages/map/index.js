var t = require("../../@babel/runtime/helpers/defineProperty"), e = getApp();

Page({
    data: {
        storeInfo: {},
        app: e,
        scaleNum: 16,
        latitudeCurrent: 0,
        longitudeCurrent: 0,
        latitude: 0,
        longitude: 0,
        markers: [],
        includePoints: []
    },
    onLoad: function(e) {
        var n = this, i = {
            id: 1,
            latitude: e.latitude,
            longitude: e.longitude,
            name: e.storeName,
            title: e.storeName
        };
        wx.getLocation({
            type: "wgs84",
            success: function(o) {
                var a;
                n.setData((a = {
                    latitudeCurrent: o.latitude,
                    longitudeCurrent: o.longitude,
                    latitude: (o.latitude + Number(e.latitude)) / 2,
                    longitude: (o.longitude + Number(e.longitude)) / 2
                }, t(a, "latitude", e.latitude), t(a, "longitude", e.longitude), t(a, "includePoints", [ {
                    latitude: e.latitude,
                    longitude: e.longitude
                } ]), t(a, "markers", [ i ]), t(a, "storeInfo", e), a), function() {
                    n.includePoints();
                });
            }
        });
    },
    onReady: function(t) {
        this.mapCtx = wx.createMapContext("myMap");
    },
    codeg: function() {},
    getCenterLocation: function() {
        this.mapCtx.getCenterLocation({
            success: function(t) {
                console.log(t.longitude), console.log(t.latitude);
            }
        });
    },
    moveToLocation: function() {
        this.mapCtx.moveToLocation();
    },
    translateMarker: function() {
        this.mapCtx.translateMarker({
            markerId: 1,
            autoRotate: !0,
            duration: 1e3,
            destination: {
                latitude: 23.10229,
                longitude: 113.3345211
            },
            animationEnd: function() {
                console.log("animation end");
            }
        });
    },
    includePoints: function() {
        this.mapCtx.includePoints({
            padding: [ 80, 50, 80, 50 ],
            points: [ {
                latitude: this.data.latitudeCurrent,
                longitude: this.data.longitudeCurrent
            }, {
                latitude: this.data.storeInfo.latitude,
                longitude: this.data.storeInfo.longitude
            } ]
        });
    }
});