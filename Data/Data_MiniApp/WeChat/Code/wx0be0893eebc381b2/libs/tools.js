var t = require("./rsa").JSEncrypt;

module.exports = {
    showLoading: function(t) {
        1 == wx.canIUse("showLoading") && wx.showLoading({
            title: t,
            mask: !0,
            success: function() {
                return setTimeout(function() {
                    return wx.hideLoading();
                }, 3e3);
            }
        });
    },
    showToast: function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        wx.showToast({
            icon: "none",
            title: t,
            duration: n
        });
    },
    hideLoading: function() {
        wx.hideLoading({
            success: function(t) {}
        });
    },
    rsa: function(n) {
        var s = new t();
        return s.setPublicKey("-----BEGIN PUBLIC KEY-----MIIEIjANBgkqhkiG9w0BAQEFAAOCBA8AMIIECgKCBAEAr9PswWesOIObf9+sEese7kT1uP0l5jIiyjhPWZTduBMn7hr0wy07w+w2BZzsT8taqsKVMp9CsZGgpoddMyxFZKoZNARpMF32fH2WsKyyyZXm8Kd4Ms/hlffMvY53doBZMzTOA+Vtn6tdffVoNE+DZMbPqLsPgtJ46tQe/bsrf4HxkXwqeHKGSlXoXODxEY0GS9lt44skraRFyz3PCacDp/lG7G4DGTDlUvXlV7zZwSl3dwbFzRKX3bh+posET63y0uFb5mMiKhECwMPF0TOnYP5yxqxX1FBtikJ/7tNzncc+M6zD9LXTnvOlfzlv6K7jJS4fVve3LFUXY7Fo51OHrxKncQaRgIZ3fDt7NITjJ7Bny2gjjMcKZkKNrMp4Qm4KpjWPtBvHrEYb3eqz1tdO24PxrszAAqg5tWFvQf/sIRhe0RxY7TGjXjp5FUl5YLuSop24xujNoO9vBshGvvA86AGqCLooMVstKg4gwUz+ubNBtEFLOzXJ70BSlhWk+36t0+7NYg5X+0nBYSX878KlC0y+qo48wjQJ5FKfPWOtTVs+PsGJxxP1c+sqXCzxSktatdMWbnRnX+xy+Tm6xrR1RjSFNkccmsvjhXef7FQ2wG50AORfVIpla1b5QtM/WzP/3xeZFp13w64A+QfNmpQzhs/arFYcOk/2Zx7ZgkTSITVzbYtn8gs6jW1Na/t2TuKpQSnEKaiFB2lFkx2lV5R62KEncxBI39wgkKAdG6R++YS5LbhuxGArr7AppncluTfraca1G037OqoI2HmAW+VISa2IzcfdpsEpF58jub/CgnxPGkCcDIR9ElPGQvtcVYCY/nAV4TezreiVaojKoEYx2T8fWu939c7NWD/XV+ug2SJmhPBYbdmyZrW/bJZRud6GqxtKI/9YjbjE482PLmitIHIym70wz3Lbwe2Eh/mCi0DgvMu8Mk8LitJXUkgFJr5OirKjQAjd6kGKqOMhQHY6j8YRu4vqX9xP3aTNZ8rv4XDZ/jS/LmcHE4E+K8QRfEaaXjx2H8S253V6LURkjdZgvPiCtC0NJ1fWPlzU9OtGDTyQIsuq7MvNlItWhl9uuBN/mwGg5P+eqtm+BDklF61xVbjd8Pw3cl5KLGManRyzaHVyLB0VKGuxZheQssc9O7oY/KOtzt6/GMvILHGYX2aPrn7ZQ23YXUGxFwza07kFoY7h+QtHFTbYwceAz93OH+pzg45sNFCLS0aeyUZh/ck580MzSnvy9C4KXV2reZmFzz6elNNTw8nvsUn0AYseAZx2UrWuV3EVSqUHO4WYmS5XYFPkzMT0aoaOM4DhGCqZKiBn2sg11wsWklPEGhzaIaXkxGYhj2kOq5n7RxH6pYzNCwIDAQAB-----END PUBLIC KEY-----"), 
        encodeURIComponent(s.encrypt(n));
    }
};