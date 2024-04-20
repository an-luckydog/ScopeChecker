var t = {
    test: Object.freeze({
        mpapiDomain: "https://mp.api.test.duia.com/",
        ketangapiDomain: "https://ketang.api.test.duia.com/",
        tuapiDomain: "https://tu.test.duia.com/",
        tongjiDomain: "https://tongji.test.duia.com/",
        xcxDomain: "https://xcx.test.duia.com/",
        listapiDomain: "https://list.test.duia.com/",
        aiApiDomain: "https://ai.api.test.duia.com/",
        rpDomain: "https://rp.test.duia.com/"
    }),
    rd: Object.freeze({
        mpapiDomain: "https://mp.api.rd.duia.com/",
        ketangapiDomain: "https://ketang.api.rd.duia.com/",
        tuapiDomain: "https://tu.rd.duia.com/",
        xcxDomain: "https://xcx.rd.duia.com/",
        tongjiDomain: "https://tongji.rd.duia.com/",
        listapiDomain: "https://list.rd.duia.com/",
        aiApiDomain: "https://ai.api.rd.duia.com/",
        rpDomain: "https://rp.rd.duia.com/"
    }),
    pro: Object.freeze({
        mpapiDomain: "https://mp.api.duia.com/",
        ketangapiDomain: "https://ketang.api.duia.com/",
        tuapiDomain: "https://tu.duia.com/",
        xcxDomain: "https://xcx.duia.com/",
        tongjiDomain: "https://tongji.duia.com/",
        listapiDomain: "https://list.duia.com/",
        aiApiDomain: "https://ai.api.duia.com/",
        rpDomain: "https://rp.duia.com/"
    })
};

module.exports = Object.assign({
    ENV: "pro"
}, t.pro);