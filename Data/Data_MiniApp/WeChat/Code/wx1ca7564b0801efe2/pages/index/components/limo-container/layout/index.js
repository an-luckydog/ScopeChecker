var e = require("../../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../../../../b/helpers/objectSpread2"), o = e(require("../../limo-core/index")), a = require("../../../../../miniprogram_npm/@limo/container/behaviors/index"), n = function(e) {
    return a._getModules.call(this, t(t({}, e), {}, {
        moduleDefaultProperties: i
    }));
};

Component({
    behaviors: [ a.commonBehavior ],
    externalClasses: [ "container-class" ],
    properties: {
        data: {
            type: Object,
            value: {},
            observer: function(e) {
                if (e && e.modules) try {
                    this.initEntryTs = Date.now(), this.initModuleLoadDurations = {};
                    var t = n.call(this, e), o = t.modulesChange, a = t.modules, i = t.layoutStyle;
                    o ? this.setData({
                        modules: a,
                        layoutStyle: i
                    }) : this.watchData(e);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error(e);
                }
            }
        }
    },
    data: {
        layoutStyle: "",
        modules: [],
        dialogs: []
    },
    created: function() {
        this.lastCommonData = "", this.lastModules = [], this.linkedModules = [];
    },
    attached: function() {
        var e = this.getInstance();
        e && e.linked(this, "limo-layout"), o.default.clearCaches();
    },
    methods: {
        watchData: function(e) {
            return a._watchData.call(this, e, i);
        },
        updateModule: a.updateModule,
        loadModule: a.loadModule,
        unLoadModule: a.unLoadModule,
        destroyModule: a.layoutDestroyModule,
        hasModule: a.layoutHasModule,
        transformStyle: a.transformStyle,
        validateLayoutValue: a.validateLayoutValue,
        formatLayoutInfo: a.formatLayoutInfo,
        limoShowDialog: function(e, t, o) {
            return a._limoShowDialog.call(this, e, t, o, i);
        },
        limoCloseDialog: a.limoCloseDialog,
        onMaskTap: a.onMaskTap,
        onMaskTouchMove: a.onMaskTouchMove,
        limoDidLoad: a.limoDidLoad,
        limoSetLayoutStyle: a.limoSetLayoutStyle,
        __getContainerLimoCore: function() {
            return o.default;
        }
    }
});

var i = {
    "img-list": {
        columnType: 1,
        defaultImgUrl: "",
        imgList: [],
        heightImg: 300,
        layout: {},
        componentStyle: {}
    },
    "limo-slide": {
        circular: !0,
        bannerInterval: 3,
        currentIndex: 0,
        autoplay: !0,
        imgList: [],
        advId: "",
        defaultImgUrl: "http://p1.meituan.net/scarlett/497822ef22088452f7e10d47a3ec7cfc1457.png",
        heightImg: 160,
        componentId: -1,
        imgMode: "scaleToFill",
        current: 0,
        duration: 500,
        slideType: 0,
        layout: {},
        componentStyle: {}
    },
    "manual-slide": {
        templateStyle: 1,
        bgColor: "",
        autoplay: !1,
        bannerInterval: 3,
        backgroundImgUrl: "",
        componentLayout: "",
        imgList: [],
        heightImg: 160,
        defaultImgUrl: [],
        advId: "",
        layout: {},
        componentStyle: {}
    },
    "hot-zones": {
        imgUrl: "",
        hotZonesList: [],
        layout: {},
        componentStyle: {}
    },
    "float-window": {
        imgInfo: "\n  imgUrl: {\n    type: String,\n    value: 'https://p0.meituan.net/scarlett/32573a683dc238f12b09d2e04752f7864604.png'\n  },\n  ratio: {\n    type: Number,\n    value: 1\n  },\n  redirectUrl: {\n    type: String,\n    value: ''\n  }\n",
        floatLayout: {},
        position: "fixed"
    },
    "video-module": {
        videoAuditInfo: {},
        circulate: !1,
        autoplay: !1,
        fillShowSwitch: !0,
        layout: {},
        componentStyle: {}
    },
    "limo-modal": {
        limoModalStorage: "",
        show: !1,
        preview: !1,
        advId: "",
        modalConfigResource: {},
        layout: {},
        componentStyle: {}
    },
    "accumulate-list": {
        accumulateList: [],
        horizontal: !0,
        pollTimes: 0,
        requestParams: {},
        appliedStyle: 2,
        showWarning: !1,
        selfMargin: !1,
        businessData: {},
        title: "",
        activityDesc: "",
        titleColor: "",
        textColor: "",
        backgroundImgUrl: "",
        showActivityDesc: !0,
        isRms: !1,
        isH5Preview: !1,
        layout: {},
        componentStyle: {}
    },
    "recommend-list": {
        selfMargin: !1,
        horizontal: !0,
        recommendList: [],
        bizIdType: "",
        businessData: {},
        isH5Preview: !1,
        layout: {},
        componentStyle: {}
    },
    "point-reward-good": {
        title: "",
        datas: [],
        businessData: {},
        redirectUrl: "",
        isH5Preview: !1,
        layout: {},
        componentStyle: {}
    },
    "get-coupons-widget": {
        businessData: {},
        redirSaveBo: {},
        title: "",
        couponUniteList: [],
        feBasicResource: "",
        isH5Preview: !1,
        layout: {},
        componentStyle: {}
    },
    "rights-interests-widget": {
        title: "",
        redirSaveBo: {},
        rightsList: [],
        businessData: {},
        isH5Preview: !1,
        previewLayout: {},
        layout: {},
        componentStyle: {}
    },
    "notice-config": {
        noticeContent: [],
        slideInterval: 0,
        showStyle: 0,
        textColor: {},
        bgColor: {},
        noticeIcon: {},
        noticeImgUrl: {},
        layout: {},
        componentStyle: {}
    },
    "member-canvas": {
        loginCanvasConfig: {},
        feBasicResource: "",
        isLogin: !1,
        needSecondRequest: !1,
        isMemberCanvas: !0,
        loginAction: {},
        businessData: {}
    },
    "double-limo-slide": {
        bannerInterval: 3,
        advId: "",
        imgList: [],
        heightImg: 160,
        autoplay: !0,
        opacitySpu: .8,
        layout: {},
        componentStyle: {}
    },
    "open-screen": {
        openInterval: 5,
        imgInfo: {},
        advId: "",
        show: !1
    },
    "business-entry": {
        businessList: [],
        layout: {},
        componentStyle: {}
    },
    "member-info": {
        memberCardInfo: {},
        overallStyle: 0,
        theme: {
            preset: 1,
            custom: {}
        },
        animationStyle: "",
        businessData: {},
        needSecondRequest: !1,
        showNickName: !1,
        showCardTitle: !0,
        showMemberGrade: !0,
        styleType: 3,
        cardId: 0,
        notLoginConfig: {},
        defaultNickName: "",
        layout: {},
        componentStyle: {}
    },
    "shop-list-entry": {
        iconUrl: "http://p0.meituan.net/scarlett/4aa8bfe0a746e16739ed2f0218b7e0741831.png",
        title: "查看附近门店",
        suitableShopRedirections: [],
        isPreview: !1,
        layout: {},
        componentStyle: {}
    },
    "dish-recommend": {
        title: "",
        dishList: [],
        previewLayout: {},
        layout: {},
        componentStyle: {}
    },
    "wx-official-account": {
        position: "",
        hasTabBar: !1,
        hasNativeTabBar: !1
    },
    "dish-production-progress": {
        mockShopList: [],
        shop: {},
        dishProgressInfo: {},
        layout: {},
        componentStyle: {}
    },
    "common-theme-loading": {},
    "coupon-rules-standard": {
        rulesParams: null,
        safePadding: 0,
        requestHeader: {}
    },
    "limo-rules-modal-v2": {
        headers: {},
        agreement: "\n  contentUrl: {\n    type: String,\n    value: null\n  },\n  name: {\n    type: String,\n    value: ''\n  },\n  snapshotId: {\n    type: String,\n    value: null\n  },\n  type: {\n    type: String || Number,\n    value: null\n  }\n"
    },
    "collect-and-redeem": {
        collectAndRedeemList: [],
        horizontal: !0,
        requestParams: {},
        businessData: {},
        needSecondRequest: !1,
        title: "",
        activityDesc: "",
        titleColor: "",
        textColor: "",
        cardSize: 2,
        feBasicResource: "",
        actionVO: {},
        backgroundImgUrl: "",
        showActivityDesc: !0,
        isH5Preview: !1,
        layout: {},
        componentStyle: {}
    },
    "function-navigation": {
        functionList: [],
        displayStyle: 1,
        customTitle: "",
        tagBgColor: "",
        tagTextColor: "",
        layout: {},
        componentStyle: {}
    },
    "universal-login": {
        useNewAuthVersion: !1,
        loginStatus: !1,
        useRevoke: !1,
        revokePrefix: "",
        isDialog: !1,
        showOuterAgreement: !1,
        authButtonClassName: "",
        loginStyle: "",
        loginText: "",
        enableAutoFocus: !0,
        enableAgreementDialog: !0,
        agreementList: [],
        commonHeaders: {},
        agreementParams: {},
        agreementHeaders: {},
        agreementDesc: "我已阅读并同意",
        hasAgreed: !1,
        enabledLoginType: "'phone', 'password'",
        defaultLoginType: "phone",
        extraLoginParams: {},
        extraEventParams: {},
        location: {},
        shopRegisterRedirectPath: "",
        yodaOptions: {},
        layout: {}
    },
    "custom-business-entry": {
        businessList: [],
        templateStyle: 1,
        infoList: [ 1, 2, 3, 4 ],
        theme: {},
        layout: {},
        componentStyle: {}
    },
    "member-coupon-pop-up": {
        businessData: {},
        componentConfigJSON: "",
        showModal: !1,
        couponList: [],
        showViewAll: !1,
        couponRedirection: {},
        redirection: {}
    },
    "user-banner": {
        userBannerData: {},
        loginMemberConfig: {},
        notLoginMemberConfig: {},
        styleType: 3,
        couponHighlight: !1,
        memberInfo: {},
        userInfoConfig: {},
        tenementInfo: {},
        businessData: {},
        needSecondRequest: !1,
        layout: {},
        componentStyle: {}
    },
    "head-bg": {
        imgUrl: "",
        defaultImgUrl: "",
        showDefaultImg: !0,
        heightImg: 500,
        showShadow: !1,
        layoutStyle: "",
        styleType: 1,
        picConfigCode: 1,
        imgList: [],
        bannerInterval: 3,
        layout: {},
        componentStyle: {}
    },
    "subscription-prompt": {
        promptSrc: "",
        platform: 1,
        top: 180
    },
    "universal-card-list-closable": {
        customParams: {},
        customProps: [],
        callbacks: {},
        cardStyle: {},
        curCardId: -1,
        title: "请选择会员卡",
        hideClose: !1,
        size: "normal",
        closePosition: "right"
    },
    "order-status": {
        feBasicResource: "",
        mockStatusData: {}
    }
};